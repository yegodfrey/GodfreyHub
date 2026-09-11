#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""仓颉编程语言文档爬虫（Cangjie language docs crawler）。

与 crawl.py（HarmonyOS 华为开发者知识库 MCP）不同，仓颉语言文档托管在
cj-docs.gitcode.com 的静态 VitePress 站点上，没有 MCP 接口。本脚本：

- BFS 遍历 https://cj-docs.gitcode.com/zh/<ver>/ 下的所有 *.html 文档页；
  每页的 VitePress 侧边栏/正文链接覆盖全站目录，因此从少量种子即可发现整棵文档树。
- 提取每页 <main class="vp-doc"> 主内容，用 markdownify 转成 Markdown，
  去除导航/页脚/脚本等噪声，落盘到 cangjie_docs/<section>/<sha1>.md，
  并写入 frontmatter(name/title/uri/category)。
- 状态持久化到 crawl_cj_state.json，可断点续爬；与 crawl.py 共用同目录运行锁思路，
  避免误并发写状态。

用法：
  python crawl_cj.py              # 正常爬取（续爬）
  python crawl_cj.py --limit 20  # 冒烟测试，限制抓取数量
"""
import argparse
import hashlib
import json
import os
import re
import ssl
import sys
import threading
import time
import queue
import urllib.request
import urllib.error
from urllib.parse import urljoin, unquote

from bs4 import BeautifulSoup
from markdownify import markdownify as md_convert

import hdk_io              # 原子写 + 瞬时锁退避（状态/语料落盘统一走它）

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, "cangjie_docs")
STATE = os.path.join(HERE, "crawl_cj_state.json")
LOCK = os.path.join(HERE, "crawl_cj.lock")
LOCK_MAX_AGE = 40 * 60

# 仓颉文档站点：版本化路径。默认 1.1.3；升级版本时用环境变量 HDK_CJ_VER 覆盖
# （SRC_BASE / PAGE_RE / SIDEBAR_SEED 等派生自本模块级 VER，须在 import 前设置）。
VER = os.environ.get("HDK_CJ_VER", "1.1.3")
SRC_BASE = f"https://cj-docs.gitcode.com/zh/{VER}/"
HOST = "https://cj-docs.gitcode.com"

HTTP_TIMEOUT = 30
CALL_TIMEOUT = 45

NWORK = 5
MAXQ = 25
STALL_SECS = 600
MAX_FETCHED = 200000
MAX_DISCOVERED = 20000

UA = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"}

# 仅跟随站内的文档页链接（版本化目录下的 *.html），排除 /assets/ 与查询/锚点。
# 注意：路径内部允许包含 '/'（如 libs/std/core/...），故字符类不排除 '/'。
PAGE_RE = re.compile(r"^/zh/" + re.escape(VER) + r"/(?!assets/)[^#?\s]+\.html$")
SIDEBAR_SEED = f"/zh/{VER}/libs/std/std_module_overview.html"  # 入口种子


# --------------------------------------------------------------------------- #
# 网络层（daemon 线程 + join 超时，避免卡死）
# --------------------------------------------------------------------------- #
def fetch_bytes(url):
    box = {}

    def do():
        try:
            req = urllib.request.Request(url, headers=UA)
            r = urllib.request.urlopen(req, timeout=HTTP_TIMEOUT,
                                       context=_SSL())
            box["val"] = r.read()
        except Exception as e:  # noqa
            box["err"] = e

    last = None
    for attempt in range(4):
        box.clear()
        th = threading.Thread(target=do, daemon=True)
        th.start()
        th.join(timeout=CALL_TIMEOUT)
        if th.is_alive():
            last = TimeoutError("fetch exceeded %ss" % CALL_TIMEOUT)
            time.sleep(1)
            continue
        if "err" in box:
            e = box["err"]
            last = e
            if isinstance(e, urllib.error.HTTPError) and e.code == 404:
                raise e   # 404 是确定性结果（对象存储静态托管），不重试
            time.sleep(2 * (attempt + 1))
            continue
        return box.get("val")
    if last:
        raise last
    return None


def _SSL():
    ctx = ssl.create_default_context()
    ctx.check_hostname = False
    ctx.verify_mode = ssl.CERT_NONE
    return ctx


def fetch_text(url):
    b = fetch_bytes(url)
    if b is None:
        return None
    return b.decode("utf-8", "replace")


# --------------------------------------------------------------------------- #
# 运行锁
# --------------------------------------------------------------------------- #
def _lock_owner_alive(pid_text):
    import subprocess
    pid = pid_text.strip()
    if not pid.isdigit():
        return False
    try:
        out = subprocess.run(["tasklist", "/FI", f"PID eq {pid}", "/NH"],
                             capture_output=True, text=True, timeout=8)
        return pid in out.stdout
    except Exception:
        return False


def acquire_lock():
    now = time.time()
    if os.path.exists(LOCK):
        owner_alive = False
        try:
            with open(LOCK, encoding="utf-8") as f:
                owner_alive = _lock_owner_alive(f.read())
        except Exception:
            owner_alive = False
        try:
            age = now - os.path.getmtime(LOCK)
        except Exception:
            age = 0
        if age < LOCK_MAX_AGE and owner_alive:
            print(f"[lock] 另一个 crawl_cj 正在运行（pid={open(LOCK).read().strip()}）；退出。",
                  flush=True)
            sys.exit(0)
        print(f"[lock] 发现陈旧锁（pid={open(LOCK).read().strip()}，锁龄 {int(age)}s），接管。",
              flush=True)
    with open(LOCK, "w", encoding="utf-8") as f:
        f.write(str(os.getpid()))


def release_lock():
    try:
        os.remove(LOCK)
    except Exception:
        pass


# --------------------------------------------------------------------------- #
# 状态
# --------------------------------------------------------------------------- #
def load_state():
    if os.path.exists(STATE):
        with open(STATE, encoding="utf-8") as f:
            s = json.load(f)
        s.setdefault("discovered", [])
        s.setdefault("fetched", [])
        s.setdefault("failed", [])
        return s
    return {"discovered": [], "fetched": [], "failed": []}


def save_state(disc, fetched, failed):
    hdk_io.atomic_write_json(
        STATE,
        {"discovered": sorted(disc),
         "fetched": sorted(fetched),
         "failed": sorted(failed)},
        ensure_ascii=False, separators=(",", ":"))


def norm_path(path):
    """把站内绝对路径（/zh/<ver>/...html）规范化为存储用的相对键。
    去掉查询/锚点、末尾斜杠；返回 None 表示非文档页。"""
    if not path:
        return None
    p = unquote(path).split("#")[0].split("?")[0].strip().rstrip("/")
    if not PAGE_RE.match(p):
        return None
    return p


def name_of(path):
    """文档逻辑名：cj-docs/zh/<ver>/<relpath-without-.html>。"""
    rel = path[len(f"/zh/{VER}/"):]
    if rel.endswith(".html"):
        rel = rel[:-5]
    return f"cj-docs/zh/{VER}/{rel}"


def section_of(path):
    rel = path[len(f"/zh/{VER}/"):]
    top = rel.split("/")[0]
    return top or "_root"


def doc_relpath(path):
    """落盘 (分类, 文件名)；文件名用全名 sha1 防碰撞。"""
    cat = section_of(path)
    h = hashlib.sha1(name_of(path).encode("utf-8")).hexdigest()[:24]
    return cat, h + ".md"


# --------------------------------------------------------------------------- #
# HTML -> Markdown
# --------------------------------------------------------------------------- #
def extract_markdown(html, url):
    soup = BeautifulSoup(html, "html.parser")
    # 主内容容器
    main = soup.find("main", class_="vp-doc") or soup.find("div", class_="vp-doc")
    if main is None:
        main = soup.find("main") or soup.find("article") or soup.body
    if main is None:
        return None, None

    # 标题：优先主内容内 h1
    h1 = main.find("h1")
    title = h1.get_text(" ", strip=True) if h1 else None
    if not title:
        t = soup.find("title")
        if t:
            title = t.get_text(" ", strip=True).split("|")[0].strip()
    if not title:
        title = url
    # 去掉标题里的零宽空格与 VitePress 锚点链接
    title = re.sub(r"\s*\[\u200b?\]\(#[^)]*\)", "", title).replace("\u200b", "").strip()

    # 去除页脚（"最后更新"/编辑链接等）与非内容噪声
    for tag in main.find_all(["footer", "nav"]):
        tag.decompose()
    for d in main.find_all(class_=re.compile(r"(vp-(doc-footer|page-nav|edit-link))")):
        d.decompose()

    inner = str(main)
    text = md_convert(inner, heading_style="ATX",
                     strip=["script", "style"],
                     bullets="-")
    # 去掉 VitePress 标题后的零宽空格锚点链接（如 ` [​](#标题)`）
    text = re.sub(r"\s*\[\u200b?\]\(#[^)]*\)", "", text)
    # 清理多余空行
    text = re.sub(r"\n{3,}", "\n\n", text).strip()
    return title, text


# --------------------------------------------------------------------------- #
# 写盘
# --------------------------------------------------------------------------- #
def write_doc(path, title, body, uri):
    cat, fname = doc_relpath(path)
    d = os.path.join(OUT, cat)
    os.makedirs(d, exist_ok=True)
    text = (
        "---\n"
        f"name: {name_of(path)}\n"
        f"title: {title}\n"
        f"uri: {uri}\n"
        f"category: {section_of(path)}\n"
        "---\n\n"
        + (body or "(empty)\n")
    )
    hdk_io.atomic_write_text(os.path.join(d, fname), text)


def discover_links(html, page_path=""):
    """从页面抽取站内文档页路径（含侧边栏与正文链接）。
    page_path 为当前页路径，用于把相对 href(./、../) 解析为站内绝对路径。"""
    out = set()
    base_url = HOST + (page_path or SIDEBAR_SEED)
    soup = BeautifulSoup(html, "html.parser")
    for a in soup.find_all("a", href=True):
        href = a["href"].strip()
        if not href or href.startswith("#") or href.startswith("mailto:"):
            continue
        # 完整 URL
        if href.startswith(HOST):
            cand = href[len(HOST):]
        # 站内绝对路径
        elif href.startswith(f"/zh/{VER}/"):
            cand = href
        # 相对路径（./、../、裸相对）
        else:
            try:
                cand = urljoin(base_url, href)
                if cand.startswith(HOST):
                    cand = cand[len(HOST):]
                else:
                    continue
            except Exception:
                continue
        p = norm_path(cand)
        if p:
            out.add(p)
    return out


# --------------------------------------------------------------------------- #
# 主流程
# --------------------------------------------------------------------------- #
def run(limit=0):
    """带锁运行一轮抓取(函数化入口, 供 hdk.py 传参调用, 不经 argv)。"""
    acquire_lock()
    try:
        _run(limit)
    finally:
        release_lock()


def main(argv=None):
    # argv=None 时解析命令行; 编排方(hdk.py)直接调 run() 传参,
    # 避免"模块各自 parse sys.argv"这种隐式全局耦合(已在 hdk.py crawl 入口咬过人)。
    ap = argparse.ArgumentParser()
    ap.add_argument("--limit", type=int, default=0, help="限制抓取文档数（冒烟测试）")
    args = ap.parse_args(argv)
    run(args.limit)


def _run(limit=0):
    os.makedirs(OUT, exist_ok=True)
    s = load_state()
    disc = set(s["discovered"])
    fetched = set(s["fetched"])
    # 失败三态: fetched/failed 从状态恢复; 本轮的网络抖动进 transient(不持久化,
    # 下轮照常重试), 只有确定性失败(404/空响应/解析失败)才进 failed 持久化。
    failed = set(s.get("failed", []))
    transient = set()

    # 种子：入口页；首跑再从其侧边栏为每个顶级章节补一个种子，确保覆盖全部章节。
    seeds = {SIDEBAR_SEED}
    if not disc:
        try:
            h0 = fetch_text(HOST + SIDEBAR_SEED)
            if h0:
                for p in discover_links(h0):
                    disc.add(p)
                # 每个顶级 section 取一个种子
                sec_seed = {}
                for p in disc:
                    sec_seed.setdefault(section_of(p), p)
                seeds.update(sec_seed.values())
                print(f"[seed] 入口页发现 {len(disc)} 个链接，补充章节种子 "
                      f"{len(sec_seed)} 个", flush=True)
        except Exception as e:
            print(f"[seed-err] {e}", flush=True)
    for p in seeds:
        disc.add(p)

    print(f"[start] disc={len(disc)} fetched={len(fetched)}", flush=True)

    def get_html(url):
        return fetch_text(url)

    lock = threading.Lock()
    in_flight = set()

    def fetch_one(path):
        uri = HOST + path
        try:
            html = fetch_text(uri)
        except Exception as e:
            # 网络异常是瞬时的: 记 transient 不持久化, 下轮/下次运行照常重试;
            # 与确定性失败(404/解析失败)混同拉黑会让语料静默漏文档。
            with lock:
                transient.add(path)
            print(f"[fetch-err] {path}: {e}", flush=True)
            return
        if not html:
            with lock:
                failed.add(path)
            return
        title, body = extract_markdown(html, uri)
        new_links = discover_links(html, path)
        with lock:
            if title is not None and body is not None:
                write_doc(path, title, body, uri)
                fetched.add(path)
                failed.discard(path)  # 曾被判死链的页面恢复后移出持久 failed
            else:
                failed.add(path)
            for p in new_links:
                if p not in disc and len(disc) < MAX_DISCOVERED:
                    disc.add(p)

    def worker():
        while True:
            path = q.get()
            if path is None:
                q.task_done()
                break
            fetch_one(path)
            with lock:
                in_flight.discard(path)
            q.task_done()

    q = queue.Queue()
    workers = [threading.Thread(target=worker, daemon=True) for _ in range(NWORK)]
    for w in workers:
        w.start()

    last_save = time.time()
    last_fetch = len(fetched)
    last_fetch_time = time.time()
    fetched_limit = 0
    while True:
        with lock:
            if len(fetched) >= MAX_FETCHED:
                print("[cap reached]", flush=True)
                break
            pending = [p for p in disc if p not in fetched and p not in failed
                       and p not in transient and p not in in_flight]
        if limit and len(fetched) >= limit:
            print(f"[limit reached] fetched={len(fetched)}", flush=True)
            break
        if not pending:
            q.join()
            break
        room = MAXQ - q.qsize()
        if room <= 0:
            time.sleep(0.05)
            continue
        take = pending[:room * 5]
        with lock:
            in_flight.update(take)
        for p in take:
            q.put(p)
        now = time.time()
        with lock:
            cur = len(fetched)
        if cur != last_fetch:
            last_fetch = cur
            last_fetch_time = now
        elif now - last_fetch_time > STALL_SECS:
            print(f"[STALL] 无新文档 {STALL_SECS}s (fetched={cur})；停止。", flush=True)
            break
        if now - last_save > 15:
            with lock:
                save_state(disc, fetched, failed)
                print(f"[progress] disc={len(disc)} fetched={len(fetched)} "
                      f"pending={len(disc)-len(fetched)-len(failed)-len(in_flight)} "
                      f"inflight={len(in_flight)} q={q.qsize()}", flush=True)
            last_save = now
        time.sleep(0.02)

    for _ in workers:
        q.put(None)
    q.join()
    with lock:
        save_state(disc, fetched, failed)
        print(f"[DONE] disc={len(disc)} fetched={len(fetched)} failed={len(failed)}",
              flush=True)


if __name__ == "__main__":
    main()
