#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""仓颉语言文档增量更新器（cangjie_docs）。

在 crawl_cj.py（静态站 BFS 抓新）之上补充三种增量能力：

  1. 新发布 (NEW)    —— BFS 链接发现：重查已抓文档的页面时同步解析链接，
                        官方新增页面只要被既有文档引用即可被发现；pending
                        文档（disc 中未抓取）直接抓取。
  2. 已修改 (MODIFIED)—— 重新抓取已抓文档，用 title+body 的 sha256 指纹
                        比对，仅内容变化时才重写本地文件。
  3. 已删除 (DELETED) —— 已抓文档重抓返回 404（对象存储静态托管，无 SPA
                        fallback，404 即确定下线），单独再查一次二次确认后
                        直接物理删除（用户 2026-09-21：不留旧版本副本）。

状态独立保存在 incremental_cj_state.json（discovered/fetched/hashes/deleted），
首跑从 crawl_cj_state.json 播种；与 crawl_cj.py 共用 crawl_cj.lock 与网络层。

用法：
  python incremental_cj.py                 # 完整增量（发现新 + 重查修改 + 二次确认删除）
  python incremental_cj.py --no-recheck    # 只抓新发现的文档，不做修改/删除检测
  python incremental_cj.py --skip-delete   # 报告将要删除的文档，但不真正移动文件
  python incremental_cj.py --limit 30      # 限制处理量（冒烟测试）
"""
import argparse
import hashlib
import json
import os
import re
import threading
import queue
import time
import urllib.error

import crawl_cj  # 复用 fetch_text / extract_markdown / write_doc / discover_links / 锁
import hdk_io    # 原子写 + 瞬时锁退避（状态落盘统一走它）

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = crawl_cj.OUT
CRAWL_STATE = crawl_cj.STATE
INC_STATE = os.path.join(HERE, "incremental_cj_state.json")

NWORK = crawl_cj.NWORK
MAXQ = crawl_cj.MAXQ


# --------------------------------------------------------------------------- #
# 哈希与状态读写
# --------------------------------------------------------------------------- #
def sha(text):
    return hashlib.sha256(text.encode("utf-8")).hexdigest()


def canonical_hash(title, content):
    """文档内容指纹：title + 换行 + content。标题或正文的任何变化都会改变哈希。"""
    return sha((title or "") + "\n" + (content or ""))


def disk_hash(path):
    """从磁盘上已有的 markdown 还原出与 canonical_hash 一致的指纹；文件缺失返回 None。"""
    cat, fname = crawl_cj.doc_relpath(path)
    fp = os.path.join(OUT, cat, fname)
    if not os.path.exists(fp):
        return None
    try:
        txt = open(fp, encoding="utf-8").read()
    except Exception:
        return None
    m = re.match(r"^---\s*\n(.*?)\n---\s*\n(.*)$", txt, re.DOTALL)
    if not m:
        return None
    fm = {}
    for line in m.group(1).splitlines():
        if ":" in line:
            k, v = line.split(":", 1)
            fm[k.strip()] = v.strip()
    return canonical_hash(fm.get("title", ""), m.group(2))


def load_state():
    if os.path.exists(INC_STATE):
        with open(INC_STATE, encoding="utf-8") as f:
            return json.load(f)
    return {"discovered": [], "fetched": [], "hashes": {}, "deleted": []}


def save_state(s):
    hdk_io.atomic_write_json(INC_STATE, s, ensure_ascii=False, separators=(",", ":"))


def seed_from_crawl(s):
    """首次运行：从全量爬虫的 crawl_cj_state.json 继承 discovered/fetched 作为基线。"""
    if s["discovered"] or s["fetched"]:
        return
    cs = crawl_cj.load_state()
    s["discovered"] = list(cs.get("discovered", []))
    s["fetched"] = list(cs.get("fetched", []))
    print(f"[seed] 从 crawl_cj_state.json 继承: discovered={len(s['discovered'])} "
          f"fetched={len(s['fetched'])}", flush=True)


def sync_crawl_state(disc, fetched):
    """把 discovered/fetched 写回 crawl_cj_state.json，保持全量爬虫状态同步。"""
    cs = crawl_cj.load_state()
    crawl_cj.save_state(set(disc), set(fetched), set(cs.get("failed", [])))


# --------------------------------------------------------------------------- #
# 删除（直接物理删除，不留副本；用户 2026-09-21 指令）
# --------------------------------------------------------------------------- #
def delete_doc(path, s, fetched, hashes):
    cat, fname = crawl_cj.doc_relpath(path)
    src = os.path.join(OUT, cat, fname)
    if not os.path.exists(src):
        fetched.discard(path)
        hashes.pop(path, None)
        return
    os.remove(src)
    s["deleted"].append({
        "name": crawl_cj.name_of(path),
        "at": time.strftime("%Y-%m-%dT%H:%M:%S"),
    })
    fetched.discard(path)


# --------------------------------------------------------------------------- #
# 网络层（复用 crawl_cj.fetch_text；404 不再重试）
# --------------------------------------------------------------------------- #
def fetch_doc(path):
    """抓取单个文档页；返回 (status, title, body, html)。

    status 语义：
      'ok'   —— 抓取并解析成功（title/body/html 有效）
      'gone' —— HTTP 404（对象存储静态托管，视为确定下线）
      'err'  —— 网络失败 / 解析失败（保守处理，本轮跳过不判删除）
    """
    uri = crawl_cj.HOST + path
    try:
        html = crawl_cj.fetch_text(uri)
    except urllib.error.HTTPError as e:
        return ("gone" if e.code == 404 else "err", None, None, None)
    except Exception:
        return ("err", None, None, None)
    if not html:
        return ("err", None, None, None)
    title, body = crawl_cj.extract_markdown(html, uri)
    if title is None or body is None:
        return ("err", None, None, None)
    return ("ok", title, body, html)


def confirm_gone(path):
    """对单个文档再次查询确认已删除。任何异常/不确定都返回 False（保留）。"""
    status, _, _, _ = fetch_doc(path)
    return status == "gone"


# --------------------------------------------------------------------------- #
# 主流程
# --------------------------------------------------------------------------- #
def run(no_recheck=False, skip_delete=False, limit=0):
    """带锁运行一轮增量(函数化入口, 供 hdk.py 传参调用, 不经 argv)。"""
    crawl_cj.acquire_lock()
    try:
        _main(no_recheck, skip_delete, limit)
    finally:
        crawl_cj.release_lock()


def main(argv=None):
    # argv=None 时解析命令行; 编排方(hdk.py)直接调 run() 传参。
    ap = argparse.ArgumentParser()
    ap.add_argument("--no-recheck", action="store_true",
                    help="只抓取新发现的文档，不做修改/删除检测")
    ap.add_argument("--skip-delete", action="store_true",
                    help="报告会删除的文档，但不真正移动文件")
    ap.add_argument("--limit", type=int, default=0,
                    help="限制处理文档数（冒烟测试）")
    args = ap.parse_args(argv)
    run(no_recheck=args.no_recheck, skip_delete=args.skip_delete, limit=args.limit)


def _main(no_recheck, skip_delete, limit):
    os.makedirs(OUT, exist_ok=True)

    s = load_state()
    seed_from_crawl(s)
    disc = set(s["discovered"])
    fetched = set(s["fetched"])
    hashes = s["hashes"]

    # 首跑基线：直接从磁盘现有文件计算指纹，避免全量重写
    if not hashes:
        n = 0
        for p in fetched:
            h = disk_hash(p)
            if h:
                hashes[p] = h
                n += 1
        print(f"[baseline] 从磁盘计算指纹 {n}/{len(fetched)}", flush=True)

    stats = {"new": 0, "updated": 0, "unchanged": 0, "deleted": 0}
    delete_candidates = set()
    skip = set()          # 本轮网络失败，不写回状态，下轮重试
    lock = threading.Lock()

    def fetch_one(path):
        status, title, body, html = fetch_doc(path)
        with lock:
            if status == "err":
                skip.add(path)
                return
            if status == "gone":
                if path in fetched:
                    delete_candidates.add(path)
                else:
                    # 未抓取过的文档已 404：永久不可抓取，交给 crawl 状态
                    s.setdefault("failed", [])
                    if path not in s["failed"]:
                        s["failed"].append(path)
                    failed_set.add(path)
                return
            # ok：先解析链接（新增页面被既有文档引用即可被发现）
            if html:
                for p in crawl_cj.discover_links(html, path):
                    if p not in disc and len(disc) < crawl_cj.MAX_DISCOVERED:
                        disc.add(p)
            new_h = canonical_hash(title, body)
            if path in fetched:
                if hashes.get(path) != new_h:
                    crawl_cj.write_doc(path, title, body, crawl_cj.HOST + path)
                    hashes[path] = new_h
                    stats["updated"] += 1
                    print(f"[updated] {path}", flush=True)
                else:
                    stats["unchanged"] += 1
            else:
                crawl_cj.write_doc(path, title, body, crawl_cj.HOST + path)
                hashes[path] = new_h
                fetched.add(path)
                stats["new"] += 1
                print(f"[new] {path}", flush=True)

    # 重查队列（已抓文档，检测修改/删除）+ 动态 pending（新发现/未抓文档）。
    # 重查已抓文档时会解析页面链接，官方新增页面只要被引用即可当轮被发现抓取。
    recheck_list = sorted(fetched) if not no_recheck else []
    failed_set = set(s.get("failed", []))
    ri = 0
    processed = 0
    print(f"[start] disc={len(disc)} fetched={len(fetched)} recheck={len(recheck_list)}",
          flush=True)

    q = queue.Queue()
    in_flight = set()

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

    workers = [threading.Thread(target=worker, daemon=True) for _ in range(NWORK)]
    for w in workers:
        w.start()

    last_save = time.time()
    while True:
        room = MAXQ - q.qsize()
        if room > 0:
            with lock:
                inflight_n = len(in_flight)
            path = None
            if ri < len(recheck_list):
                path = recheck_list[ri]
                ri += 1
            else:
                pending = [p for p in disc
                           if p not in fetched and p not in failed_set
                           and p not in in_flight and p not in skip]
                if pending:
                    path = pending[0]
            if path is not None:
                if limit and processed >= limit:
                    with lock:
                        inflight_n = len(in_flight)
                    if inflight_n == 0 and q.qsize() == 0:
                        break
                    time.sleep(0.05)
                    continue
                with lock:
                    in_flight.add(path)
                processed += 1
                q.put(path)
                continue
            if inflight_n == 0 and q.qsize() == 0:
                break
        time.sleep(0.05)
        if time.time() - last_save > 15:
            with lock:
                save_state({
                    "discovered": sorted(disc),
                    "fetched": sorted(fetched),
                    "hashes": hashes,
                    "deleted": s["deleted"],
                    "failed": s.get("failed", []),
                })
            last_save = time.time()

    for _ in workers:
        q.put(None)
    q.join()

    # 二次确认 + 物理删除
    if not no_recheck:
        for p in sorted(delete_candidates):
            if confirm_gone(p):
                if not skip_delete:
                    delete_doc(p, s, fetched, hashes)
                    disc.discard(p)   # 已确认下线的文档移出发现集，避免下轮重复尝试
                stats["deleted"] += 1
                tag = "（已物理删除）" if not skip_delete else "（--skip-delete 未删除）"
                print(f"[DELETE] {p} {tag}", flush=True)
            else:
                print(f"[keep] {p} 二次确认仍存在，保留", flush=True)

    save_state({
        "discovered": sorted(disc),
        "fetched": sorted(fetched),
        "hashes": hashes,
        "deleted": s["deleted"],
        "failed": s.get("failed", []),
    })
    sync_crawl_state(disc, fetched)

    print(f"[DONE] new={stats['new']} updated={stats['updated']} "
          f"unchanged={stats['unchanged']} deleted={stats['deleted']} "
          f"skip={len(skip)} disc={len(disc)} fetched={len(fetched)}",
          flush=True)


if __name__ == "__main__":
    main()
