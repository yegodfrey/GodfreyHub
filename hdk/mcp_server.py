#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
本地文档知识库 MCP 服务（HarmonyOS + 仓颉语言）

把 D:/Harmony/tools/GodfreyMCP/hdk/harmonyos_docs（HarmonyOS 文档约 2.6 万篇，含 cangjie-* 分类的
鸿蒙仓颉开发文档）与 D:/Harmony/tools/GodfreyMCP/hdk/cangjie_docs（仓颉语言官方文档）下的本地
Markdown 语料暴露为 MCP 工具，对标华为云官方的 harmonyos_developer_knowledge MCP
（searchDocuments / getDocumentsById），但完全离线、基于本地语料，不依赖外网。
两个语料各自独立建索引（.mcp_cache/<root>_docs.fts5.db），互不拖累。

索引实现统一收敛到 indexer.py：全量构建 + 基于 docmap 的增量更新（任何文档
变更只重索引变更文件，不再整库重建；旧 schema 首次访问自动迁移）。

提供的工具：
  - search_documents(query, limit, category) : 全文检索（中英文子串匹配，按相关度排序）
  - get_document(doc_id)                     : 按 id 取文档完整 Markdown 正文
  - list_categories()                        : 列出所有分类及文档数量
  - searchDocuments / getDocumentsById       : 与官方 MCP 同名的兼容接口

运行方式（stdio，供 MCP 客户端拉起）：
  python mcp_server.py
仅构建索引（不启动服务）：
  python mcp_server.py build

连接生命周期（2026-08-09 实测结论，供排查"HDK 自己 close"）：
本服务是 stdio 常驻进程，自身不会主动退出，也没有会导致退出的定时器。
若客户端（QwenWorkCN main.log）出现 `[WARN] [MCP] Upstream client closed {"name":"HDK"}`
而本进程 stderr（MCP-HDK 通道）无退出留痕，属客户端侧回收 stdio 连接
（已观察到的共同前置：数小时长任务 + 主进程 OOM-RISK 快速内存增长），非本服务异常。
关闭后客户端不自动重连，需重启 QwenWorkCN 恢复。入口处已加 atexit/SIGINT 留痕，
下次 close 若见 "exiting (atexit)" 即 stdin EOF（客户端主动关管道），无留痕即被强杀。
"""
import os
import re
import sys
import json
import time
import logging
import threading
import functools

from mcp.server.mcpserver import MCPServer

from indexer import (ROOTS, CANGJIE_PREFIX, CANGJIE_ROOT, ROOT,
                     get_conn, ensure_all, build_all, ensure_index, build_index,
                     parse_frontmatter, segment_text, close_conns,
                     _keep, camel_parts, jieba)  # 复用同一分词管线(同词典/HMM=False)

logging.basicConfig(level=logging.INFO, stream=sys.stderr,
                    format="[mcp][%(asctime)s] %(message)s")
log = logging.getLogger("hdk-mcp")

mcp = MCPServer("hdk")


# 空闲回收：长任务期间长时间无查询时关闭索引连接，释放 1.3GB 索引的页缓存，
# 让本进程常驻内存最小化，降低被客户端（长任务 + OOM-RISK 后回收 stdio 连接）
# 回收的概率。下次查询经 get_conn 自动重建连接（ensure_index 仅 stat 轻量检查）。
_IDLE_SECS = 300
_LAST_ACTIVE = [0.0]  # 列表持引用，避免闭包非local


def _touch():
    _LAST_ACTIVE[0] = time.monotonic()


def _idle_reaper():
    while True:
        time.sleep(60)
        if time.monotonic() - _LAST_ACTIVE[0] > _IDLE_SECS:
            log.warning("no query for >%ss, closing index conns", _IDLE_SECS)
            close_conns()


def _touched(fn):
    @functools.wraps(fn)
    def wrapped(*args, **kwargs):
        _touch()
        return fn(*args, **kwargs)
    return wrapped


# ---------------------------------------------------------------------------
# 检索辅助
# ---------------------------------------------------------------------------
def _normalize_limit(value, default=10, maximum=100):
    try:
        limit = int(value)
    except (TypeError, ValueError):
        limit = default
    return max(1, min(limit, maximum))


def _fts_match_expression(tokens):
    return " AND ".join(
        '"' + token.replace('"', '""') + '"'
        for token in tokens
        if token
    )


def _relaxed_fts_match_expression(tokens):
    """严格 AND 结果不足时允许缺一个词元；过长查询不做组合扩展。"""
    if len(tokens) < 2 or len(tokens) > 8:
        return None
    quoted = ['"' + token.replace('"', '""') + '"' for token in tokens]
    if len(quoted) == 2:
        return " OR ".join(quoted)
    return " OR ".join(
        "(" + " AND ".join(q for i, q in enumerate(quoted) if i != omitted) + ")"
        for omitted in range(len(quoted))
    )


def _subtoken_fts_match_expression(tokens, max_tokens=8):
    """整词无命中时的子词兜底表达式（与 Node 查询端 subtokenMatchExpression 同款）。

    查询端精确 cut 会把词典整词原样切出（如"智慧屏"），但索引端
    cut_for_search 会额外产出子词（"智慧"）；若某文档只含子词而无整词词元，
    strict/relaxed 都匹配不到。此函数把每个含子词的整词替换为子词 OR 重试
    （子词必在索引词元集合内：cut_for_search 输出 ⊇ cut 且索引端保留子词）。
    其余词元只保留非单字词（长问句切出的"传/参"是噪声）；单 token 查询
    退化为纯子词 OR，覆盖"智慧屏"→"智慧"这类漏召回。
    """
    if not tokens or len(tokens) > max_tokens:
        return None
    alts = {}
    for i, t in enumerate(tokens):
        subs = set()
        for st in jieba.cut_for_search(t, HMM=False):
            st = st.strip()
            if not st or st == t or not _keep(st):
                continue
            subs.add(st)
            for part in camel_parts(st):
                if _keep(part):
                    subs.add(part)
        if subs:
            alts[i] = subs
    if not alts:
        return None
    keepers = [i for i, t in enumerate(tokens) if len(t) > 1]
    exprs = []
    for i, subs in alts.items():
        sub_or = " OR ".join('"' + s.replace('"', '""') + '"' for s in sorted(subs))
        others = ['"' + tokens[j].replace('"', '""') + '"' for j in keepers if j != i]
        if others:
            exprs.append("(" + " AND ".join(others + ["(" + sub_or + ")"]) + ")")
        else:
            exprs.append("(" + sub_or + ")")
    return " OR ".join(exprs)


def make_snippet(body, tokens, window=90):
    low = body.lower()
    best = None
    for t in tokens:
        i = low.find(t.lower())
        if i != -1 and (best is None or i < best[0]):
            best = (i, t)
    if best is None:
        snip = body[: window * 2]
        return snip + ("…" if len(body) > window * 2 else "")
    i, t = best
    start = max(0, i - window)
    end = min(len(body), i + len(t) + window)
    snip = body[start:end]
    if start > 0:
        snip = "…" + snip
    if end < len(body):
        snip = snip + "…"
    # 最长词优先、单次替换，避免 WebView/Web/View 产生嵌套加粗。
    unique = sorted({t for t in tokens if t}, key=len, reverse=True)
    if unique:
        alternatives = "|".join(re.escape(t) for t in unique)
        pattern = re.compile("(?:(?:" + alternatives + "))+", re.IGNORECASE)
        snip = pattern.sub(lambda m: "**" + m.group(0) + "**", snip)
    return snip


# ---------------------------------------------------------------------------
# MCP 工具
# ---------------------------------------------------------------------------
@mcp.tool()
@_touched
def search_documents(query: str, limit: int = 10, category: str = "") -> str:
    """在本地文档库（HarmonyOS + 仓颉语言）中全文检索。

    Args:
        query: 关键词，支持中英文。中文按词元分词匹配（与索引同款词典/停用词），
               英文 token 支持驼峰/数字边界拆词（如 "getStringSync" 可按
               "String" 命中；"XComponent 渲染"、"ArkTS 状态管理" 均支持）。
        limit: 返回结果数量上限，默认 10。
        category: 可选，按分类过滤（如 "harmonyos-guides"、"harmonyos-references"、
                  "cangjie/dev-guide"、"cangjie-guides"）。

    Returns:
        JSON 字符串，列表每项含 id(规范文档名，可用于 get_document)、file(物理相对路径)、
        title、uri、category、snippet(高亮摘要)。
    """
    limit = _normalize_limit(limit)
    if not isinstance(query, str):
        query = str(query or "")
    category = (category or "").strip()
    # 查询端统一分词（与索引端同一词典/HMM=False；cut_for_search ⊇ cut，
    # 查询词必在索引词元集合内）。空查询/全停用词直接返回空。
    tokens = [t for t in segment_text(query, search=False).split(" ") if t]
    if not tokens:
        return json.dumps([], ensure_ascii=False)
    candidates = {}
    # 候选集放大：BM25 截断后还需 Python 层做跨库合并，cap 太小会丢命中
    fetch_cap = max(limit * 5, 50)

    def collect(match_expr, tier):
        for rootname in ROOTS:
            conn = get_conn(rootname)
            # category 过滤：fts.category 是 UNINDEXED 列，对 MATCH 结果集做 post-filter
            cat_cond, cat_params = "", []
            if category:
                cat_cond = " AND category = ?"
                cat_params = [category]
            rows = conn.execute(
                f"SELECT relpath, name, title, category, uri, substr(body, 1, 2000), "
                f"bm25(fts, 3.0, 1.0) FROM fts "
                f"WHERE fts MATCH ?{cat_cond} ORDER BY bm25(fts, 3.0, 1.0) LIMIT ?",
                [match_expr] + cat_params + [fetch_cap],
            ).fetchall()
            for relpath, name, title, cat, uri, indexed_body, rank in rows:
                key = (rootname, relpath)
                if key in candidates:
                    continue
                title_low = title.lower()
                title_hits = sum(t.lower() in title_low for t in tokens)
                candidates[key] = {
                    "root": rootname,
                    "id": name,
                    "file": relpath,
                    "indexed_title": title,
                    "indexed_body": indexed_body,
                    "uri": uri,
                    "category": cat,
                    "score": tier + title_hits * 100 - rank,
                }

    collect(_fts_match_expression(tokens), 10_000)
    if len(candidates) < limit:
        # 第 2 层：去掉单字噪声词元后重试 AND（长问句切出的"传/参"等）
        no_single = [t for t in tokens if len(t) > 1]
        if no_single and len(no_single) != len(tokens):
            collect(_fts_match_expression(no_single), 0)
    if len(candidates) < limit:
        # 第 3 层：允许缺一个词元
        relaxed = _relaxed_fts_match_expression(tokens)
        if relaxed:
            collect(relaxed, 0)
    if len(candidates) < limit:
        # 第 4 层：整词替换为 cut_for_search 子词兜底（子词必在索引词元集合内）
        subtok = _subtoken_fts_match_expression(tokens)
        if subtok:
            collect(subtok, 0)

    query_low = query.strip().lower()
    render_cap = max(limit * 3, 30)
    shortlist = sorted(candidates.values(), key=lambda r: -r["score"])[:render_cap]
    results = []
    for candidate in shortlist:
        fp = _resolve_fp(candidate["file"])
        raw = _read_doc(fp, candidate["file"]) if fp else None
        title = raw["title"] if raw else candidate["indexed_title"]
        body = raw["content"] if raw else candidate["indexed_body"]
        title_low = title.lower()
        score = candidate["score"]
        if query_low and query_low in title_low:
            score += 2_000
        score += 200 * sum(t.lower() in title_low for t in tokens)
        results.append({
            "id": candidate["id"],
            "file": candidate["file"],
            "title": title,
            "uri": (raw["uri"] if raw else "") or candidate["uri"],
            "category": candidate["category"],
            "snippet": make_snippet(body, tokens),
            "score": score,
        })

    results.sort(key=lambda r: -r["score"])
    results = results[:limit]
    for result in results:
        result.pop("score", None)
    return json.dumps(results, ensure_ascii=False)


@mcp.tool()
@_touched
def get_document(doc_id: str) -> str:
    """按文档 id 获取完整 Markdown 正文。

    Args:
        doc_id: search_documents 返回的 id（即规范文档名，如
                "document/cn/harmonyos-guides/start-with-ets-stage"），
               也兼容物理相对路径（如 "harmonyos-guides/start-with-ets-stage.md"）。

    Returns:
        文档标题 + 来源链接 + 正文；找不到时返回提示。
    """
    doc = _load_document(doc_id)
    if not doc:
        return f"未找到文档：{doc_id}"
    out = f"# {doc['title']}\n\n"
    if doc["uri"]:
        out += f"来源: {doc['uri']}\n\n"
    out += doc["content"]
    return out


@mcp.tool()
@_touched
def list_categories() -> str:
    """列出本地文档库所有分类及文档数量（覆盖 HarmonyOS 与仓颉语言两个语料）。"""
    out = []
    for rootname in ROOTS:
        conn = get_conn(rootname)
        # docmap 是普通表且有 category 索引，聚合远快于 fts（UNINDEXED 列全表扫）
        rows = conn.execute(
            "SELECT COALESCE(category, '_none'), count(*) FROM docmap "
            "GROUP BY category ORDER BY count(*) DESC"
        ).fetchall()
        out.extend([{"category": c, "count": n} for c, n in rows])
    out.sort(key=lambda x: -x["count"])
    return json.dumps(out, ensure_ascii=False)


# ---------------------------------------------------------------------------
# 兼容接口：与华为云官方 harmonyos_developer_knowledge MCP 同名工具
# （searchDocuments / getDocumentsById），便于作为离线替代接入既有工作流。
# ---------------------------------------------------------------------------
@mcp.tool()
@_touched
def searchDocuments(query: str, limit: int = 10, category: str = "") -> str:
    """在本地文档库中全文检索（对齐官方 harmonyos_developer_knowledge.searchDocuments）。

    Args:
        query: 关键词，支持中英文，按子串匹配（如 "CustomContentDialogV2 contentBuilder"）。
        limit: 返回结果数量上限，默认 10。
        category: 可选，按分类过滤（如 "harmonyos-guides"、"harmonyos-references"）。

    Returns:
        JSON 字符串，列表每项含 id(规范文档名，可用于 getDocumentsById)、file、title、
        uri、category、snippet(高亮摘要)。
    """
    return search_documents(query, limit, category)


@mcp.tool()
@_touched
def getDocumentsById(doc_id: str) -> str:
    """按文档 id 获取完整 Markdown 正文（对齐官方 harmonyos_developer_knowledge.getDocumentsById）。

    Args:
        doc_id: searchDocuments 返回的 id（规范文档名，如
                "document/cn/harmonyos-guides/start-with-ets-stage"），
                也兼容物理相对路径（如 "harmonyos-guides/start-with-ets-stage.md"）。

    Returns:
        文档标题 + 来源链接 + 正文；找不到时返回提示。
    """
    return get_document(doc_id)


# ---------------------------------------------------------------------------
# 文档加载（供 get_document 使用）
# ---------------------------------------------------------------------------
def _resolve_fp(relpath):
    """把索引里的 relpath 解析为磁盘文件绝对路径（兼容仓颉前缀与鸿蒙旧格式）。"""
    relpath = relpath.replace("\\", "/")
    if relpath.startswith(CANGJIE_PREFIX):
        rel = relpath[len(CANGJIE_PREFIX):]
        root = CANGJIE_ROOT
    else:
        rel = relpath
        root = ROOT
    if not rel.endswith(".md"):
        rel += ".md"
    root = os.path.abspath(root)
    fp = os.path.abspath(os.path.join(root, rel))
    try:
        inside_root = os.path.commonpath((root, fp)) == root
    except ValueError:
        inside_root = False
    if inside_root and os.path.isfile(fp):
        return fp
    # 兼容：未带前缀的仓颉 relpath 也尝试 cangjie 根
    if not relpath.startswith(CANGJIE_PREFIX):
        cand = os.path.abspath(os.path.join(CANGJIE_ROOT, rel))
        try:
            inside_cangjie = os.path.commonpath((os.path.abspath(CANGJIE_ROOT), cand)) == os.path.abspath(CANGJIE_ROOT)
        except ValueError:
            inside_cangjie = False
        if inside_cangjie and os.path.isfile(cand):
            return cand
    return None


def _read_doc(fp, relpath):
    try:
        with open(fp, "r", encoding="utf-8") as f:
            text = f.read()
    except Exception:
        return None
    fm, body = parse_frontmatter(text)
    title = fm.get("title", "") or relpath
    uri = fm.get("uri", "")
    category = relpath.split("/", 1)[0]
    return {
        "title": title,
        "uri": uri,
        "category": category,
        "relpath": relpath,
        "content": body,
    }


def _find_relpath_by_name(name):
    """在所有根的 docnames 索引中按 name 精确查找，返回 relpath；找不到返回 None。

    docnames 是普通表（name 主键），查询 O(log n)；fts.name 是 UNINDEXED 列，
    WHERE name=? 会全表扫描，故不直接查 fts。旧库迁移失败时 fallback 到 fts。
    """
    for rootname in ROOTS:
        try:
            conn = get_conn(rootname)
            row = conn.execute(
                "SELECT relpath FROM docnames WHERE name=?", (name,)
            ).fetchone()
            if row:
                return row[0]
        except Exception:
            try:
                conn = get_conn(rootname)
                row = conn.execute(
                    "SELECT relpath FROM fts WHERE name=?", (name,)
                ).fetchone()
                if row:
                    return row[0]
            except Exception:
                continue
    return None


def _load_document(doc_id):
    """按文档 id/relpath 加载文档。优先按 fts.name 精确匹配，其次按 relpath 解析。"""
    doc_id = (doc_id or "").strip()
    if not doc_id:
        return None
    rp = _find_relpath_by_name(doc_id)
    if rp:
        fp = _resolve_fp(rp)
        if fp:
            return _read_doc(fp, rp)
    # 直接当作 relpath（带或不带 cangjie/ 前缀）
    fp = _resolve_fp(doc_id)
    if fp:
        return _read_doc(fp, doc_id)
    return None


# ---------------------------------------------------------------------------
# 入口
# ---------------------------------------------------------------------------
if __name__ == "__main__":
    if len(sys.argv) > 1 and sys.argv[1] == "build":
        build_all()
        print(f"index ready for roots: {list(ROOTS)}")
    else:
        ensure_all()
        log.info("starting hdk MCP server (stdio)")
        # 退出留痕：区分"客户端关管道(atexit)"与"被强杀(无留痕)"，对照客户端
        # "Upstream client closed" 时间点即可定位回收方（见模块 docstring）。
        import atexit
        atexit.register(lambda: log.warning("hdk MCP server exiting (atexit)"))
        _touch()  # 初始化为当前时间，避免启动即触发回收
        threading.Thread(target=_idle_reaper, daemon=True).start()
        try:
            mcp.run()
        except KeyboardInterrupt:
            log.warning("hdk MCP server interrupted (SIGINT)")
        except BaseException as exc:
            log.error("hdk MCP server crashed: %r", exc)
            raise
