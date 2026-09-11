#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""HarmonyOS Developer 文档增量更新器。

在现有全量爬虫 crawl.py 之上补充三种增量能力：

  1. 新发布 (NEW)       —— 通过 searchDocuments 关键词 + 已抓取文档内的链接，发现并抓取
                           此前未抓取过的文档（也顺带把全量爬虫遗留的 pending 补完）。
  2. 已修改 (MODIFIED)  —— 重新抓取已抓取过的文档，用 title+content 的 sha256 哈希比对，
                           仅当内容变化时才重写本地文件。
  3. 已删除 (DELETED)    —— 若某篇已抓取文档在重查结果中消失，先用「单独再查一次」二次确认，
                           确认官方已删除后，将其软删除（移动到 harmonyos_docs/_deleted/，
                           可恢复），并从状态中移除。

状态独立保存在 incremental_state.json（discovered/fetched/hashes/deleted），
首次运行会从 crawl_state.json 播种 discovered/fetched，避免两套状态打架。
基线哈希直接从磁盘上的现有 markdown 计算，因此首跑不会造成全量重写。

用法：
  python incremental.py                 # 完整增量（发现新 + 重查修改 + 二次确认删除）
  python incremental.py --no-recheck    # 只抓取新发现的文档，不做修改/删除检测
  python incremental.py --skip-delete   # 报告将要删除的文档，但不真正移动文件
  python incremental.py --limit 50      # 限制处理量（冒烟测试用）
"""
import argparse
import hashlib
import json
import os
import re
import threading
import queue
import time

import crawl  # 复用 MCP、to_parent、write_doc、OUT、STATE、QUERIES、load_state
import hdk_io  # 原子写 + 瞬时锁退避（状态落盘统一走它）

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = crawl.OUT
CRAWL_STATE = crawl.STATE
INC_STATE = os.path.join(HERE, "incremental_state.json")
DELETED_DIR = os.path.join(OUT, "_deleted")

NWORK = 4
BATCH = 10
MAXQ = 30
LINK_RE = crawl.LINK_RE
MAX_DISCOVERED = crawl.MAX_DISCOVERED


# --------------------------------------------------------------------------- #
# 哈希与状态读写
# --------------------------------------------------------------------------- #
def sha(text):
    return hashlib.sha256(text.encode("utf-8")).hexdigest()


def canonical_hash(title, content):
    """文档内容指纹：title + 换行 + content。标题或正文的任何变化都会改变哈希。"""
    return sha((title or "") + "\n" + (content or ""))


def doc_hash(item):
    return canonical_hash(item.get("title", ""), item.get("content", ""))


def disk_hash(name):
    """从磁盘上已有的 markdown 还原出与 doc_hash 一致的指纹；文件缺失返回 None。"""
    cat, fname = crawl.doc_relpath(name)
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


def load_inc_state():
    if os.path.exists(INC_STATE):
        with open(INC_STATE, encoding="utf-8") as f:
            s = json.load(f)
    else:
        s = {"discovered": [], "fetched": [], "hashes": {}, "deleted": []}
    # 过滤历史状态里的旧版快照（与 crawl.norm_docname 同一判定），不再回查/改写
    s["discovered"] = [d for d in s.get("discovered", [])
                       if not crawl.is_version_snapshot(d)]
    s["fetched"] = [d for d in s.get("fetched", [])
                    if not crawl.is_version_snapshot(d)]
    s["hashes"] = {k: v for k, v in s.get("hashes", {}).items()
                   if not crawl.is_version_snapshot(k)}
    return s


def save_inc_state(s):
    hdk_io.atomic_write_json(INC_STATE, s, ensure_ascii=False, separators=(",", ":"))


def seed_from_crawl(s):
    """首次运行：从全量爬虫的 crawl_state.json 继承 discovered/fetched 作为基线。"""
    if s["discovered"] or s["fetched"]:
        return
    cs = crawl.load_state()
    s["discovered"] = list(cs.get("discovered", []))
    s["fetched"] = list(cs.get("fetched", []))
    print(f"[seed] 从 crawl_state.json 继承: discovered={len(s['discovered'])} "
          f"fetched={len(s['fetched'])}", flush=True)


def sync_crawl_state(disc, fetched, deleted_names):
    """把 discovered/fetched 并集合并写回 crawl_state.json，保留其 failed 记录。

    必须与 crawl_state.json 现有清单做并集而不是整体覆盖：增量状态比全量状态
    小（历史上未收录全部文档），覆盖会把 crawl_state 里已有记录的文档踢出
    discovered/fetched，下次全量爬虫经搜索重新发现它们，制造"假新增"并重复抓取。
    deleted_names 是本次增量确认软删除的文档，从合并结果中剔除，避免复活死链。
    """
    try:
        with open(CRAWL_STATE, encoding="utf-8") as f:
            cs = json.load(f)
    except Exception:
        cs = {}
    drop = set(deleted_names or [])
    merged_disc = {d for d in set(cs.get("discovered", [])) | set(disc)
                   if not crawl.is_version_snapshot(d) and d not in drop}
    merged_fet = {d for d in set(cs.get("fetched", [])) | set(fetched)
                  if not crawl.is_version_snapshot(d) and d not in drop}
    out = {"discovered": sorted(merged_disc), "fetched": sorted(merged_fet)}
    if "failed" in cs:
        out["failed"] = sorted(n for n in cs["failed"]
                               if not crawl.is_version_snapshot(n))
    hdk_io.atomic_write_json(CRAWL_STATE, out,
                             ensure_ascii=False, separators=(",", ":"))


# --------------------------------------------------------------------------- #
# 删除（软删除，可恢复）
# --------------------------------------------------------------------------- #
def soft_delete(name, s, fetched, hashes):
    cat, fname = crawl.doc_relpath(name)
    src = os.path.join(OUT, cat, fname)
    if not os.path.exists(src):
        fetched.discard(name)
        hashes.pop(name, None)
        return
    dst_dir = os.path.join(DELETED_DIR, cat)
    os.makedirs(dst_dir, exist_ok=True)
    dst = os.path.join(dst_dir, fname)
    if os.path.exists(dst):           # 避免同名覆盖，追加时间戳
        dst = dst + "." + str(int(time.time()))
    # Windows 上文件被杀软/索引服务/读进程占用的瞬间 rename 会抛 OSError:
    # 带退避重试; 仍失败则保留原文件并跳过本项(与"判删需二次确认"的保守取向一致),
    # 不让单文件占用毁掉整轮增量(过去这里未捕获, 叠加锁遗留问题会让定时任务静默停摆)。
    last_err = None
    for attempt in range(4):
        try:
            os.rename(src, dst)
            break
        except OSError as e:
            last_err = e
            time.sleep(0.5 * (attempt + 1))
    else:
        print(f"[delete-err] {name}: 文件被占用, 保留原文件稍后重试: {last_err}",
              flush=True)
        return
    s["deleted"].append({
        "name": name,
        "file": os.path.relpath(dst, OUT).replace("\\", "/"),
        "at": time.strftime("%Y-%m-%dT%H:%M:%S"),
    })
    fetched.discard(name)
    hashes.pop(name, None)


# --------------------------------------------------------------------------- #
# 网络层（复用 crawl.MCP）
# --------------------------------------------------------------------------- #
def make_get_mcp():
    local = threading.local()

    def get_mcp():
        if not hasattr(local, "mcp"):
            local.mcp = crawl.MCP()
        return local.mcp
    return get_mcp


def confirm_gone(name, get_mcp):
    """对单个文档再次查询，确认官方确实已删除。任何异常/不确定都返回 False（保留）。"""
    m = get_mcp()
    for attempt in range(3):
        try:
            r = m.call_tool("getDocumentsById",
                            {"GetDocumentsByIdRequest": {"names": [name]}})
            text = r["result"]["content"][0]["text"]
            data = json.loads(text)
            names = {it.get("name") for it in data.get("resultList", [])}
            return name not in names
        except Exception:
            time.sleep(2 * (attempt + 1))
    return False


# --------------------------------------------------------------------------- #
# 主流程
# --------------------------------------------------------------------------- #
def run(no_recheck=False, skip_delete=False, limit=0):
    """带锁运行一轮增量(函数化入口, 供 hdk.py 传参调用, 不经 argv)。

    锁必须 try/finally 释放: 过去 release 在函数末尾, 任何未捕获异常都会留下
    crawl.lock, 之后 40 分钟内所有定时增量静默 no-op。
    """
    crawl.acquire_lock()  # 与 crawl.py 共用同一把锁，避免同时写 crawl_state.json
    try:
        _run(no_recheck=no_recheck, skip_delete=skip_delete, limit=limit)
    finally:
        crawl.release_lock()


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


def _run(no_recheck, skip_delete, limit):
    os.makedirs(OUT, exist_ok=True)
    os.makedirs(DELETED_DIR, exist_ok=True)

    s = load_inc_state()
    seed_from_crawl(s)
    disc = set(s["discovered"])
    fetched = set(s["fetched"])
    hashes = s["hashes"]

    # 官方目录清单：确定性新增/删除检测的完整性基线。
    # 新增 = 清单 - 本地发现集，直接进抓取队列；删除 = 清单分类内、指纹在案、
    # 但官方目录已不含的文档，并入删除候选（仍经 confirm_gone 二次确认）。
    import catalog
    inv = {n for n in catalog.names() if not crawl.is_version_snapshot(n)}
    inv_cats = {n.split("/")[2] for n in inv if len(n.split("/")) >= 3}
    if inv:
        new_from_catalog = inv - disc
        disc |= inv
        print(f"[catalog] 目录清单 {len(inv)} 篇，新增待抓 {len(new_from_catalog)}",
              flush=True)
        stale_catalog = {n for n in fetched
                         if len(n.split("/")) >= 3
                         and n.split("/")[2] in inv_cats and n not in inv}
    else:
        stale_catalog = set()

    # 首跑基线：直接从磁盘现有文件计算指纹，避免全量重写
    if not hashes:
        n = 0
        for nm in fetched:
            h = disk_hash(nm)
            if h:
                hashes[nm] = h
                n += 1
        print(f"[baseline] 从磁盘计算指纹 {n}/{len(fetched)}", flush=True)

    stats = {"new": 0, "updated": 0, "unchanged": 0, "deleted": 0}
    delete_candidates = set(stale_catalog)
    failed = set()
    lock = threading.Lock()
    get_mcp = make_get_mcp()
    search_get_mcp = make_get_mcp()

    def maybe_search():
        """关键词搜索，发现新发布的文档（ThreadPoolExecutor 并发跑 QUERIES）。

        全量 QUERIES（200+ 条）串行执行是增量流程的主要耗时点；并发后
        发现阶段显著缩短。每个工作线程经 make_get_mcp() 持有独立 MCP 会话。
        """
        grew = False

        def run(q):
            m = search_get_mcp()
            try:
                r = m.call_tool("searchDocuments",
                                {"SearchDocumentsReq": {"query": q}})
                text = r["result"]["content"][0]["text"]
                data = json.loads(text)
                added = 0
                with lock:
                    for it in data.get("resultList", []):
                        # 与 crawl.py 同一入口：规范化并拒绝 -V<数字> 旧版快照
                        p = crawl.norm_docname(it.get("parent"))
                        if p and p not in disc and len(disc) < MAX_DISCOVERED:
                            disc.add(p)
                            added += 1
                return added > 0
            except Exception as e:
                print(f"[search-err] '{q}': {e}", flush=True)
                return False

        from concurrent.futures import ThreadPoolExecutor
        with ThreadPoolExecutor(max_workers=3) as ex:
            for grew_one in ex.map(run, crawl.QUERIES):
                if grew_one:
                    grew = True
        return grew

    def fetch_batch(batch):
        m = get_mcp()
        for attempt in range(4):
            try:
                r = m.call_tool("getDocumentsById",
                                {"GetDocumentsByIdRequest": {"names": batch}})
                text = r["result"]["content"][0]["text"]
                data = json.loads(text)
                with lock:
                    returned = set()
                    for it in data.get("resultList", []):
                        name = it.get("name")
                        if not name:
                            continue
                        returned.add(name)
                        new_h = doc_hash(it)
                        if name not in hashes or hashes[name] != new_h:
                            crawl.write_doc(it)
                            was_new = name not in fetched
                            hashes[name] = new_h
                            if was_new:
                                fetched.add(name)
                                stats["new"] += 1
                            else:
                                stats["updated"] += 1
                        else:
                            stats["unchanged"] += 1
                        # 从正文里发现新链接
                        for mm in LINK_RE.finditer(it.get("content", "") or ""):
                            p = crawl.to_parent(mm.group(0))
                            if p and p not in disc and len(disc) < MAX_DISCOVERED:
                                disc.add(p)
                    # 删除检测：请求过、且在成功返回中彻底消失的
                    for n in batch:
                        if n in fetched and n not in returned:
                            delete_candidates.add(n)
                return
            except Exception as e:
                if attempt == 3:
                    with lock:
                        failed.update(batch)
                    print(f"[batch-err] {e}", flush=True)
                time.sleep(2 * (attempt + 1))

    # 先一轮搜索发现新文档(收尾还有一轮兜底; 过去开头背靠背跑两遍全量 QUERIES,
    # 第二遍几乎不可能发现新文档, 纯粹把发现耗时与 API 压力翻倍)
    maybe_search()

    # 构造工作列表：先重查已抓取（检测修改/删除），再抓取新发现
    if no_recheck:
        work = [p for p in disc if p not in fetched]
    else:
        work = list(fetched) + [p for p in disc if p not in fetched]
    if limit > 0:
        work = work[:limit]
    seen, work2 = set(), []
    for x in work:
        if x not in seen:
            seen.add(x)
            work2.append(x)
    work = work2

    print(f"[start] disc={len(disc)} fetched={len(fetched)} work={len(work)}",
          flush=True)

    # 工作线程池
    q = queue.Queue()
    in_flight = set()

    def worker():
        while True:
            b = q.get()
            if b is None:
                q.task_done()
                break
            fetch_batch(b)
            with lock:
                in_flight.difference_update(b)
            q.task_done()

    workers = [threading.Thread(target=worker, daemon=True) for _ in range(NWORK)]
    for w in workers:
        w.start()

    last_save = time.time()
    last_print = time.time()
    i = 0
    while i < len(work):
        room = MAXQ - q.qsize()
        if room <= 0:
            time.sleep(0.05)
            continue
        take = work[i:i + room * BATCH]
        i += len(take)
        with lock:
            in_flight.update(take)
        for j in range(0, len(take), BATCH):
            q.put(take[j:j + BATCH])
        now = time.time()
        if now - last_print > 60:
            with lock:
                print(f"[progress] queued={i}/{len(work)} inflight={len(in_flight)} "
                      f"q={q.qsize()} new={stats['new']} updated={stats['updated']} "
                      f"unchanged={stats['unchanged']} deleted={stats['deleted']}",
                      flush=True)
            last_print = now
        if now - last_save > 15:
            with lock:
                save_inc_state({
                    "discovered": sorted(disc),
                    "fetched": sorted(fetched),
                    "hashes": hashes,
                    "deleted": s["deleted"],
                })
            last_save = now

    for _ in workers:
        q.put(None)
    q.join()

    # 收尾再搜索一轮，捕捉本轮链接新发现（下轮增量会补抓）
    maybe_search()

    # 二次确认 + 软删除
    if not no_recheck:
        for n in sorted(delete_candidates):
            if confirm_gone(n, get_mcp):
                if not skip_delete:
                    soft_delete(n, s, fetched, hashes)
                stats["deleted"] += 1
                tag = "（已移到 _deleted）" if not args.skip_delete else "（--skip-delete 未删除）"
                print(f"[DELETE] {n} {tag}", flush=True)
            else:
                print(f"[keep] {n} 二次确认仍存在，保留", flush=True)

    save_inc_state({
        "discovered": sorted(disc),
        "fetched": sorted(fetched),
        "hashes": hashes,
        "deleted": s["deleted"],
    })
    sync_crawl_state(disc, fetched,
                     {d["name"] for d in s["deleted"]})

    print(f"[DONE] new={stats['new']} updated={stats['updated']} "
          f"unchanged={stats['unchanged']} deleted={stats['deleted']} "
          f"failed={len(failed)} disc={len(disc)} fetched={len(fetched)}",
          flush=True)


if __name__ == "__main__":
    main()
