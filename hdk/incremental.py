#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""HarmonyOS Developer 文档增量更新器。

在现有全量爬虫 crawl.py 之上补充三种增量能力：

  1. 新发布 (NEW)       —— 通过 searchDocuments 关键词 + 已抓取文档内的链接，发现并抓取
                           此前未抓取过的文档（也顺带把全量爬虫遗留的 pending 补完）。
  2. 已修改 (MODIFIED)  —— 重新抓取已抓取过的文档，用 title+content 的 sha256 哈希比对，
                           仅当内容变化时才重写本地文件。
  3. 已删除 (DELETED)    —— 若某篇已抓取文档在重查结果中消失，先用「单独再查一次」二次确认，
                           确认官方已删除后，将本地文件直接物理删除（用户 2026-09-21：
                           旧版本/已下线内容不留任何副本），并从状态中移除。

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
import portal  # 知识 MCP 不供给的文档走匿名正文接口补齐

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = crawl.OUT
CRAWL_STATE = crawl.STATE
INC_STATE = os.path.join(HERE, "incremental_state.json")

NWORK = 4
BATCH = 10
MAXQ = 30
RETRY_SLEEP = 2.0          # 降级/异常重试的退避基准秒数（单测里置 0，避免测试真等睡眠）
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


# 华为 CDN 图片 URL 每次请求带轮换的 HW-CC-Date/HW-CC-Sign（Expire 亦为易变数值），
# 与正文无关；不 redact 则含图文档每轮都被判“已修改”重写（2026-10-12 实证：单轮
# 10874 篇假更新、git churn 1.1 万文件）。哈希两侧（API 侧 doc_hash / 磁盘侧
# disk_hash）必须同用本归一化；落盘 URL 保持原样（离线浏览依赖签名期内可用）。
_VOLATILE_URL_RE = re.compile(r"HW-CC-(?:Date|Expire|Sign)=[0-9A-Za-z]+")


def norm_volatile(text):
    return _VOLATILE_URL_RE.sub("HW-CC-Volatile=REDACTED", text or "")


def doc_hash(item):
    """API 响应的内容指纹。

    必须与磁盘那侧同源：标题走 crawl.frontmatter_value 清洗（write_doc 落盘前就洗过，
    不洗则永远对不上）、正文走 crawl.doc_body（空正文落盘为 "(empty)"）；
    两侧均过 norm_volatile 归一化 CDN 签名。
    两边口径不一致会让该文档每轮都被判为“已修改”而无限重写。
    """
    return canonical_hash(crawl.frontmatter_value(item.get("title", "")),
                          norm_volatile(crawl.doc_body(item)))


def disk_hash(name):
    """从磁盘上已有的 markdown 还原出与 doc_hash 一致的指纹；文件缺失返回 None。"""
    cat, fname = crawl.doc_relpath(name)
    fp = os.path.join(OUT, cat, fname)
    if not os.path.exists(fp):
        return None
    try:
        with open(fp, encoding="utf-8") as fh:
            txt = fh.read()
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
    return canonical_hash(fm.get("title", ""), norm_volatile(m.group(2)))


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
    s.setdefault("unreachable", [])
    s.setdefault("inventoryBuiltAt", "")
    s.setdefault("portal", [])
    s.setdefault("portalAbsent", [])
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


def portal_names_from_disk():
    """从 frontmatter 的 `source: portal` 标记重建 portal 名单。

    状态文件丢失/被重置时，少了这一步会把门户路文档放进知识 MCP 重查队列，
    它们永远不被返回 -> 全数进删除候选 -> 被误删。标记在文件里，是自愈依据。
    """
    out = set()
    for root, _, files in os.walk(OUT):
        for fn in files:
            if not fn.endswith(".md"):
                continue
            try:
                with open(os.path.join(root, fn), encoding="utf-8",
                          errors="replace") as fh:
                    head = fh.read(400)
            except Exception:                                # noqa
                continue
            if re.search(r"^source: portal\s*$", head, re.M):
                m = re.search(r"^name: (.+)$", head, re.M)
                if m:
                    out.add(m.group(1).strip())
    return out


def sync_crawl_state(disc, fetched, deleted_names):
    """把 discovered/fetched 并集合并写回 crawl_state.json，保留其 failed 记录。

    必须与 crawl_state.json 现有清单做并集而不是整体覆盖：增量状态比全量状态
    小（历史上未收录全部文档），覆盖会把 crawl_state 里已有记录的文档踢出
    discovered/fetched，下次全量爬虫经搜索重新发现它们，制造"假新增"并重复抓取。
    deleted_names 是本次增量确认物理删除的文档，从合并结果中剔除，避免复活死链。
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
# 删除（直接物理删除，不留副本；用户 2026-09-21 指令）
# --------------------------------------------------------------------------- #
def delete_doc(name, s, fetched, hashes):
    cat, fname = crawl.doc_relpath(name)
    src = os.path.join(OUT, cat, fname)
    if not os.path.exists(src):
        fetched.discard(name)
        hashes.pop(name, None)
        return
    # Windows 上文件被杀软/索引服务/读进程占用的瞬间删除会抛 OSError:
    # 带退避重试; 仍失败则保留原文件并跳过本项(与"判删需二次确认"的保守取向一致),
    # 不让单文件占用毁掉整轮增量(过去这里未捕获, 叠加锁遗留问题会让定时任务静默停摆)。
    last_err = None
    for attempt in range(4):
        try:
            os.remove(src)
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
    """对单个文档再次查询，确认官方确实已删除。

    任何异常/结构不合法/不确定都返回 False（保留）——只有「合法响应明确不含该 name」
    才判删。结构校验共用 `crawl.parse_result_list`，与抓取路径同一契约。
    """
    m = get_mcp()
    for attempt in range(3):
        try:
            r = m.call_tool("getDocumentsById",
                            {"GetDocumentsByIdRequest": {"names": [name]}})
            text = r["result"]["content"][0]["text"]
            items = crawl.parse_result_list(text)
            return name not in {it.get("name") for it in items}
        except Exception:
            time.sleep(RETRY_SLEEP * (attempt + 1))
    return False


# --------------------------------------------------------------------------- #
# 主流程
# --------------------------------------------------------------------------- #
def run(no_recheck=False, skip_delete=False, limit=0,
        skip_portal=False, portal_refresh=False):
    """带锁运行一轮增量(函数化入口, 供 hdk.py 传参调用, 不经 argv)。

    skip_portal: 不走门户补齐通路（只跑知识 MCP）。
    portal_refresh: 重查已入库的 portal 文档以检测变更（成本接近再抓一遍）。
    锁必须 try/finally 释放: 过去 release 在函数末尾, 任何未捕获异常都会留下
    crawl.lock, 之后 40 分钟内所有定时增量静默 no-op。
    """
    crawl.acquire_lock()  # 与 crawl.py 共用同一把锁，避免同时写 crawl_state.json
    try:
        _run(no_recheck=no_recheck, skip_delete=skip_delete, limit=limit,
             skip_portal=skip_portal, portal_refresh=portal_refresh)
    finally:
        crawl.release_lock()


def main(argv=None):
    # argv=None 时解析命令行; 编排方(hdk.py)直接调 run() 传参。
    ap = argparse.ArgumentParser()
    ap.add_argument("--no-recheck", action="store_true",
                    help="只抓取新发现的文档，不做修改/删除检测")
    ap.add_argument("--skip-delete", action="store_true",
                    help="报告会删除的文档，但不真正移动文件")
    ap.add_argument("--skip-portal", action="store_true",
                    help="不走门户（documentPortal）补齐通路")
    ap.add_argument("--portal-refresh", action="store_true",
                    help="重查已入库的 portal 文档以检测变更")
    ap.add_argument("--limit", type=int, default=0,
                    help="限制处理文档数（冒烟测试）")
    args = ap.parse_args(argv)
    run(no_recheck=args.no_recheck, skip_delete=args.skip_delete, limit=args.limit,
        skip_portal=args.skip_portal, portal_refresh=args.portal_refresh)


def _run(no_recheck, skip_delete, limit, skip_portal=False, portal_refresh=False):
    os.makedirs(OUT, exist_ok=True)

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
    age_warn = catalog.check_age()
    if age_warn:
        print(age_warn, flush=True)
    # 清单换代 => 不可达名单作废，这批文档重新问一次（周重建 = 周重试一次）
    built = catalog.inventory_built_at()
    if built and s.get("inventoryBuiltAt") != built:
        if s.get("unreachable"):
            print(f"[catalog] 清单换代({s.get('inventoryBuiltAt') or '未知'} -> {built})，"
                  f"释放不可达名单 {len(s['unreachable'])} 篇重新重试", flush=True)
        s["unreachable"] = []
        s["portalAbsent"] = []
        s["inventoryBuiltAt"] = built
    unreachable = set(s["unreachable"])
    # 两条路都明确没有正文的（链接 BFS 带回来的别名/死链）：不再每轮重问，
    # 同随清单换代释放。
    portal_absent = set(s.get("portalAbsent", []))
    # 门户路入库的文档：知识 MCP 永远不返回它们，不能把它们放进 MCP 重查队列，
    # 否则每轮都会被当成「官方已消失」进删除候选。状态里没有时从磁盘标记重建。
    portal_names = set(s["portal"])
    if not portal_names:
        portal_names = portal_names_from_disk()
        if portal_names:
            print(f"[portal] 状态无 portal 名单，已从磁盘 source: portal 标记重建 "
                  f"{len(portal_names)} 篇", flush=True)
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

    stats = {"new": 0, "updated": 0, "unchanged": 0, "deleted": 0,
             "degraded": 0, "portal": 0}
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
                # 结构不合法（限流/降级）在此抛错 -> 走重试 -> 4 次后按瞬时失败，
                # 不把「服务端没答上」当成「官方已删除」。
                items = crawl.parse_result_list(text)
                with lock:
                    returned = set()
                    for it in items:
                        name = it.get("name")
                        if not name:
                            continue
                        returned.add(name)
                        new_h = doc_hash(it)
                        if name not in hashes or hashes[name] != new_h:
                            if not crawl.write_doc(it):
                                # 仓颉命名空间（浏览器路所有）或 name 缺失：此路不写盘，
                                # 计入不可达名单（清单换代时重试），不污染 fetched/hashes。
                                unreachable.add(name)
                                continue
                            was_new = name not in fetched
                            hashes[name] = new_h
                            if was_new:
                                fetched.add(name)
                                stats["new"] += 1
                            else:
                                stats["updated"] += 1
                        else:
                            stats["unchanged"] += 1
                        unreachable.discard(name)
                        # 从正文里发现新链接
                        for mm in LINK_RE.finditer(it.get("content", "") or ""):
                            p = crawl.to_parent(mm.group(0))
                            if p and p not in disc and len(disc) < MAX_DISCOVERED:
                                disc.add(p)
                    # 删除/不可达检测：请求过、但在合法响应里明确消失的
                    for n in batch:
                        if n in returned:
                            continue
                        if n in fetched:
                            delete_candidates.add(n)      # 曾抓过 => 候选下线（仍需二次确认）
                        else:
                            unreachable.add(n)            # 从未拓到 => 知识 MCP 不供给，本轮不再问
                return
            except Exception as e:
                if attempt == 3:
                    with lock:
                        failed.update(batch)
                        stats["degraded"] += len(batch)
                    print(f"[batch-degraded] {len(batch)} 篇本轮未取到(不拉黑不判删): {e}",
                          flush=True)
                time.sleep(RETRY_SLEEP * (attempt + 1))

    # 先一轮搜索发现新文档(收尾还有一轮兜底; 过去开头背靠背跑两遍全量 QUERIES,
    # 第二遍几乎不可能发现新文档, 纯粹把发现耗时与 API 压力翻倍)
    maybe_search()

    # 构造工作列表：先重查已抓取（检测修改/删除），再抓取新发现
    # unreachable 里的 name 不排队：它们在合法响应中被知识 MCP 明确不返回（实测 992 篇），
    # 每轮重问只浪费带宽；清单换代时整表释放重试。
    if no_recheck:
        work = [p for p in disc if p not in fetched and p not in unreachable]
    else:
        work = ([p for p in fetched if p not in portal_names]
                + [p for p in disc if p not in fetched and p not in unreachable])
    if limit > 0:
        work = work[:limit]
    seen, work2 = set(), []
    for x in work:
        if x not in seen:
            seen.add(x)
            work2.append(x)
    work = work2

    print(f"[start] disc={len(disc)} fetched={len(fetched)} work={len(work)} "
          f"unreachable={len(unreachable)}", flush=True)

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

    def snapshot():
        return {
            "discovered": sorted(disc),
            "fetched": sorted(fetched),
            "hashes": hashes,
            "deleted": s["deleted"],
            "unreachable": sorted(unreachable),
            "portal": sorted(portal_names),
            "portalAbsent": sorted(portal_absent),
            "inventoryBuiltAt": s.get("inventoryBuiltAt", ""),
        }

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
                      f"unchanged={stats['unchanged']} deleted={stats['deleted']} "
                      f"degraded={stats['degraded']} unreachable={len(unreachable)}",
                      flush=True)
            last_print = now
        if now - last_save > 15:
            with lock:
                save_inc_state(snapshot())
            last_save = now

    for _ in workers:
        q.put(None)
    q.join()

    # 收尾再搜索一轮，捕捉本轮链接新发现（下轮增量会补抓）
    maybe_search()

    # 门户补齐通路：知识 MCP 不供给的 name（含刚采纳的新分类）走匿名正文接口。
    # 已入库的 portal 文档默认不重查（重查成本接近再抓一遍），--portal-refresh 才做变更检测。
    if not skip_portal:
        if portal_refresh:
            p_todo = sorted((portal_names | (disc - fetched)) - portal_absent)
        else:
            p_todo = sorted(((disc - fetched) | unreachable) - portal_absent)
        if p_todo:
            print(f"[portal] 补齐 {len(p_todo)} 篇（知识 MCP 不供给）…", flush=True)
            pq = queue.Queue()
            for nm in p_todo:
                pq.put(nm)
            p_uncertain = [0]

            def portal_worker():
                while True:
                    try:
                        name = pq.get_nowait()
                    except queue.Empty:
                        return
                    it = path = None
                    try:
                        it = portal.fetch_item(name)
                        if it is not None:
                            path = crawl.write_doc(it)
                    except portal.PortalAbsent:
                        # 接口回了 not-found（负载下会假报）：本轮停放，清单换代再给机会；
                        # 但它不是删除依据，也不是「文档不存在」的结论。
                        with lock:
                            portal_absent.add(name)
                        pq.task_done()
                        continue
                    except portal.PortalTransient:
                        with lock:
                            p_uncertain[0] += 1      # 不确定：留在 unreachable，下轮再试
                        pq.task_done()
                        continue
                    except Exception:                # noqa
                        with lock:
                            p_uncertain[0] += 1
                        pq.task_done()
                        continue
                    with lock:
                        if path:
                            hashes[name] = doc_hash(it)
                            fetched.add(name)
                            portal_names.add(name)
                            unreachable.discard(name)
                            portal_absent.discard(name)
                            stats["portal"] += 1
                            if stats["portal"] % 200 == 0:
                                save_inc_state(snapshot())
                        else:
                            # 接口明确答了但没正文（别名/死链）：停放在此，不反复重问
                            portal_absent.add(name)
                    pq.task_done()
                    time.sleep(portal.CALL_SLEEP)

            p_threads = [threading.Thread(target=portal_worker, daemon=True)
                         for _ in range(NWORK)]
            for t in p_threads:
                t.start()
            for t in p_threads:
                t.join()
            print(f"[portal] 入库 {stats['portal']} 篇，不确定 {p_uncertain[0]} 篇，"
                  f"两条路都无正文 {len(portal_absent)} 篇，仍不可达 {len(unreachable)} 篇",
                  flush=True)

    # 二次确认 + 物理删除
    if not no_recheck:
        for n in sorted(delete_candidates):
            # 按文档当初的入库通路选确认手段：门户路写的文档知识 MCP 永远不返回，
            # 用 MCP 确认会把它们全数误删。
            gone = (portal.confirm_absent(n) if n in portal_names
                    else confirm_gone(n, get_mcp))
            if gone:
                if not skip_delete:
                    delete_doc(n, s, fetched, hashes)
                    portal_names.discard(n)
                stats["deleted"] += 1
                tag = "（已物理删除）" if not skip_delete else "（--skip-delete 未删除）"
                print(f"[DELETE] {n} {tag}", flush=True)
            else:
                print(f"[keep] {n} 二次确认仍存在，保留", flush=True)

    save_inc_state(snapshot())
    sync_crawl_state(disc, fetched,
                     {d["name"] for d in s["deleted"]})

    print(f"[DONE] new={stats['new']} updated={stats['updated']} "
          f"unchanged={stats['unchanged']} deleted={stats['deleted']} "
          f"portal={stats['portal']} degraded={stats['degraded']} "
          f"unreachable={len(unreachable)} "
          f"failed={len(failed)} disc={len(disc)} fetched={len(fetched)}",
          flush=True)


if __name__ == "__main__":
    main()
