#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""鸿蒙仓颉开发文档：可复用的落盘与状态层。

历史：原先这里自带一套「QQ 浏览器（qqbrowser-skill.exe）鉴权抓取 + Python 编排」的
爬虫。该 QQ 传输路径已整体废弃并删除（本机无该 skill）。鉴权抓取的浏览器传输层现由
`cj_iab.py`（内置浏览器桥）经本模块落盘，本模块只保留被其复用的稳定数据层：

  - 语料常量（OUT / CATALOGS / BASE_URL）与 html2text 配置 H
  - 断点续跑状态 load_state / save_state（走 hdk_io 原子写）
  - 运行锁 acquire_lock / release_lock（cangjie_crawl.lock，与直连进程互斥）
  - write_doc：把官方正文 HTML 转 Markdown 并按 `<catalog>/<objectId>.md` 落盘

抓取流程（枚举目录树、批量取正文、增量回查/判删）见 cj_iab.py。
"""
import json
import os
import sys
import time
import html2text

import hdk_io              # 原子写 + 瞬时锁退避（状态/语料落盘统一走它）

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, "harmonyos_docs")
STATE = os.path.join(HERE, "cangjie_crawl_state.json")
LOCK = os.path.join(HERE, "cangjie_crawl.lock")
LOCK_MAX_AGE = 40 * 60

CATALOGS = ["cangjie-guides", "cangjie-references", "cangjie-practices",
            "cangjie-faqs", "cangjie-releases"]
BASE_URL = "https://developer.huawei.com/consumer/cn/doc/"

# --- html2text config -----------------------------------------------------
H = html2text.HTML2Text()
H.base_width = 0
H.body_width = 0
H.unicode_snob = True
H.ignore_images = False
H.ignore_links = False
H.single_line_break = False
H.wrap_links = False
H.code_cs = "markdown"


def log(*a):
    print(*a, flush=True)


# --- state ----------------------------------------------------------------
def load_state():
    if os.path.exists(STATE):
        with open(STATE, encoding="utf-8") as f:
            s = json.load(f)
    else:
        s = {}
    s.setdefault("tree", {})      # catalog -> {"docs":[{objectId,title,nodePath}]}
    s.setdefault("fetched", [])   # ["cangjie-guides/cj-notice", ...]
    s.setdefault("failed", [])
    s.setdefault("hashes", {})    # name -> 正文指纹（cj_iab 增量回查用）
    s.setdefault("deleted", [])   # 物理删除留痕（名称与时间戳）
    return s


def save_state(s):
    hdk_io.atomic_write_json(STATE, s, ensure_ascii=False, separators=(",", ":"))


# --- 运行锁：与 crawl.py / crawl_cj.py 同款语义，防止并发进程互相覆盖状态 ---
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
            print(f"[lock] 另一个 crawl_cangjie 正在运行（pid={open(LOCK).read().strip()}）；退出。",
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


# --- 落盘：官方正文 HTML -> Markdown --------------------------------------
def write_doc(catalog, meta, html):
    cat_dir = os.path.join(OUT, catalog)
    os.makedirs(cat_dir, exist_ok=True)
    fname = meta["objectId"] + ".md"
    md = H.handle(html)
    title = meta.get("title") or meta["objectId"]
    uri = BASE_URL + catalog + "/" + meta["objectId"]
    fp = os.path.join(cat_dir, fname)
    text = (
        "---\n"
        f"name: {catalog}/{meta['objectId']}\n"
        f"title: {title}\n"
        f"uri: {uri}\n"
        + (f"nodePath: {meta['nodePath']}\n" if meta.get("nodePath") else "")
        + "---\n\n"
        + md
    )
    # 内容未变不落盘（2026-10-03）：上游排版零抖动反复 atomic_write 会让已跟踪语料
    # 的工作树持续变脏（实测单轮 4977 件漂移），同步提交噪音淹没有效变更。
    if os.path.exists(fp):
        try:
            with open(fp, 'r', encoding='utf-8') as existing:
                if existing.read() == text:
                    return fp
        except OSError:
            pass  # 读不了（编码/权限）就按原路径覆写
    hdk_io.atomic_write_text(fp, text)
    return fp
