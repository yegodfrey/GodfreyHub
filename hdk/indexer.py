#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""共享 FTS5 索引模块（全量构建 + 增量更新）。

这是 mcp_server.py 与 hdk.py 共用的唯一索引实现（替代旧 rebuild_fts.py 的
重复实现）。两个语料各自独立建索引（.mcp_cache/<root>_docs.fts5.db）：

  - harmonyos : 本目录下 harmonyos_docs/（HarmonyOS 文档，含 cangjie-*
                分类的鸿蒙仓颉开发文档），relpath 不带前缀（兼容旧索引）
  - cangjie   : 本目录下 cangjie_docs/（仓颉语言官方文档），relpath
                统一加 "cangjie/" 前缀，避免与鸿蒙分类/文件重名

分词方案（schema tokenizer=3）：
  单张 unicode61 词元表。索引端 jieba cut_for_search(HMM=False) + 驼峰拆词
  + 停用词/符号过滤，词元存空格分隔文本；查询端（Node @node-rs/jieba 与
  本模块 segment_text）加载同一份 hdk/dict/dict.txt，精确 cut(HMM=False)，
  保证查询词必在索引词元集合内（cut_for_search 输出 ⊇ cut）。词典、停用词
  表、HMM=False 三者共同保证索引端与查询端切词逐字一致。

增量更新原理：
  每个索引库内建 docmap 表，记录 relpath -> (fts rowid, 文件 size, 文件 mtime)。
  ensure_index() 时遍历语料做一次轻量 stat 对比（不读正文），仅对新增/变更/
  删除的文件执行 FTS5 行级增删改，避免任何一次文档变动就整库重建（旧行为）。
  FTS tokenizer 在建表时烧死，分词方案变更（SCHEMA_TOKENIZER 递增）时无法
  行级迁移，ensure_index 检测 meta.tokenizer 不匹配即自动全量重建一次；
  同样地，dict.txt/stopwords.txt 变更（meta.dict_hash 签名变化）也会自动
  全量重建，避免已索引词元按旧词典切分、新词对存量文档静默漏匹配。

用法（模块）：
  from indexer import build_index, ensure_index, get_conn, ROOTS, ...
"""
import hashlib
import logging
import os
import re
import sqlite3
import threading
import time

import jieba

logging.basicConfig(level=logging.INFO, stream=__import__("sys").stderr,
                    format="[idx][%(asctime)s] %(message)s")
log = logging.getLogger("hdk-indexer")

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.join(HERE, "harmonyos_docs")          # HarmonyOS 文档根
CANGJIE_ROOT = os.path.join(HERE, "cangjie_docs")    # 仓颉语言文档根
CACHE_DIR = os.path.join(HERE, ".mcp_cache")
CANGJIE_PREFIX = "cangjie/"
DICT_FILE = os.path.join(HERE, "dict", "dict.txt")   # 共享词典（与查询端同一文件，保证分词一致）
STOPWORDS_FILE = os.path.join(HERE, "dict", "stopwords.txt")

# 多根索引：每个根对应一组本地 Markdown 语料。
ROOTS = {"harmonyos": ROOT, "cangjie": CANGJIE_ROOT}

# 不进索引的文件：索引产物本身（README/manifest）
SKIP_FILES = {"README.md", "manifest.json"}
FM_RE = re.compile(r"^---\s*\n(.*?)\n---\s*\n", re.DOTALL)

# 索引 schema 版本：FTS 表 tokenizer 与分词管线变更时必须 +1，
# ensure_index 检测不匹配即全量重建（tokenizer 建表时烧死，无法行级迁移）。
SCHEMA_TOKENIZER = "3"

# 统一加载共享词典（与 Node 查询端 @node-rs/jieba 加载同一文件）：
# 词典版本、用户词、HMM=False 三者共同保证两端切词逐字一致。
jieba.set_dictionary(DICT_FILE)

# 停用词表（与查询端共享同一文件，两端过滤一致）
try:
    with open(STOPWORDS_FILE, encoding="utf-8") as _f:
        STOPWORDS = {line.strip() for line in _f
                     if line.strip() and not line.startswith("#")}
except Exception:
    STOPWORDS = set()

# 驼峰/数字边界拆词：getStringSync -> get String Sync；API12 -> API 12；
# 下划线也拆（get_string -> get string）。只对含 ASCII 字母的 token 生效。
# 注意：jieba 对英文数字串原样输出且保留大小写（实测 Python/Node 一致），
# 因此拆词在原始大小写 token 上进行，两端结果一致。
CAMEL_RE = re.compile(r"(?<=[a-z0-9])(?=[A-Z])|(?<=[A-Z])(?=[A-Z][a-z])"
                      r"|(?<=[a-zA-Z])(?=[0-9])|(?<=[0-9])(?=[a-zA-Z])")


def camel_parts(token):
    """驼峰/数字/下划线边界拆词；拆分结果只有一个时不拆（返回 []）。"""
    parts = []
    for seg in token.split("_"):
        seg = seg.strip()
        if not seg:
            continue
        parts.extend(p for p in CAMEL_RE.split(seg) if p)
    return parts if len(parts) > 1 else []


def _keep(token):
    """分词过滤：去纯符号、纯数字单字符、停用词。保留中文实义单字。"""
    if not any(ch.isalnum() for ch in token):
        return False
    if token.isdigit() and len(token) == 1:
        return False
    if token in STOPWORDS:
        return False
    return True


def segment_text(text, search=True):
    """统一分词管线（索引端 search=True 用 cut_for_search，输出 ⊇ 查询端 cut；
    查询端 search=False 用精确 cut）。返回空格分隔的词元文本。

    顺序：jieba 切词(HMM=False) -> 过滤 -> 驼峰拆词追加。索引端保留重复词元
    （bm25 词频加权），查询端去重（AND 匹配无意义重复项）。
    与 Node 查询端 src/core/hdk.ts 的 segmentQuery 保持逐字一致。
    """
    cut = jieba.cut_for_search if search else jieba.cut
    out = []
    seen = set()
    for tok in cut(text or "", HMM=False):
        tok = tok.strip()
        if not _keep(tok):
            continue
        if not search and tok in seen:
            continue
        if search:
            out.append(tok)
        else:
            seen.add(tok)
            out.append(tok)
        for part in camel_parts(tok):
            if not _keep(part):
                continue
            if not search and part in seen:
                continue
            if not search:
                seen.add(part)
            out.append(part)
    return " ".join(out)

_LOCAL = threading.local()   # 每线程的读连接缓存（避免跨线程复用单个 sqlite 连接）
_ALL_CONNS = []              # 所有已打开的连接，供 close_conns 清理
_LOCK = threading.RLock()
_LAST_CHECK = {}      # rootname -> 最近一次增量检查时间（避免高频搜索时反复 stat 全库）


def parse_frontmatter(text):
    """返回 (frontmatter_dict, body_without_frontmatter)。"""
    m = FM_RE.match(text)
    if not m:
        return {}, text
    fm = {}
    for line in m.group(1).splitlines():
        if ":" in line:
            k, v = line.split(":", 1)
            fm[k.strip()] = v.strip()
    return fm, text[m.end():]


def _iter_md(rootname):
    """遍历单个根的 .md 文件，yield (abs_fp, rel_to_root)；跳过索引产物。"""
    root = ROOTS.get(rootname)
    if not root or not os.path.isdir(root):
        return
    for dp, dirs, fs in os.walk(root):
        for f in fs:
            if not f.endswith(".md") or f in SKIP_FILES:
                continue
            fp = os.path.join(dp, f)
            rel = os.path.relpath(fp, root).replace("\\", "/")
            yield fp, rel


def count_md_files(rootname):
    return sum(1 for _ in _iter_md(rootname))


def db_path(rootname):
    return os.path.join(CACHE_DIR, f"{rootname}_docs.fts5.db")


def fts_relpath(rootname, rel):
    """语料内相对路径 -> FTS 行里存的 relpath（仓颉加前缀，鸿蒙保持原样）。"""
    if rootname == "cangjie":
        return CANGJIE_PREFIX + rel
    return rel


def fts_category(rootname, rel):
    if rootname == "cangjie":
        return CANGJIE_PREFIX + rel.split("/", 1)[0]
    return rel.split("/", 1)[0]


def _dict_signature():
    """dict.txt + stopwords.txt 的内容签名。

    词典/停用词变更后，已索引词元仍是旧词典的切分结果（增量只对变更文件
    重新切词），新词会对存量文档静默漏匹配。ensure_index 检测签名变化即
    全量重建一次（与 SCHEMA_TOKENIZER 不匹配同路径，机制一致）。
    """
    h = hashlib.sha256()
    for fp in (DICT_FILE, STOPWORDS_FILE):
        h.update(os.path.basename(fp).encode("ascii"))
        try:
            with open(fp, "rb") as fh:
                h.update(fh.read())
        except OSError:
            pass
    return h.hexdigest()


def compute_signature(rootname):
    """对单个根的 .md 文件计算稳定签名（路径+大小+修改时间），供 meta 展示用。"""
    parts = []
    for fp, rel in _iter_md(rootname):
        try:
            st = os.stat(fp)
        except Exception:
            continue
        parts.append(f"{rel}|{st.st_size}|{int(st.st_mtime)}")
    parts.sort()
    return hashlib.sha256("\n".join(parts).encode("utf-8")).hexdigest()


# --------------------------------------------------------------------------- #
# 全量构建
# --------------------------------------------------------------------------- #
def _create_schema(conn):
    # 单表词元索引：title/body 存统一分词管线输出的空格分隔词元，
    # unicode61 逐词索引。中文词（含 1-2 字）、英文 token、驼峰拆词全部
    # 是一等词元；不再需要 trigram 子串表 + 单字辅助表的双表组合。
    conn.execute(
        "CREATE VIRTUAL TABLE fts USING fts5("
        "title, body, "
        "name UNINDEXED, uri UNINDEXED, category UNINDEXED, relpath UNINDEXED, "
        "tokenize='unicode61')"
    )
    conn.execute(
        "CREATE TABLE docmap("
        "relpath TEXT PRIMARY KEY, rowid INTEGER, size INTEGER, mtime REAL, "
        "category TEXT)"
    )
    conn.execute("CREATE INDEX idx_docmap_category ON docmap(category)")
    # name -> relpath 普通索引表：get_document 按文档名反查用（fts.name 是
    # UNINDEXED 列，直接 WHERE name=? 会全表扫描）。rowid 与 fts 对齐。
    conn.execute(
        "CREATE TABLE docnames("
        "name TEXT PRIMARY KEY, relpath TEXT, rowid INTEGER)"
    )
    conn.execute("CREATE INDEX idx_docnames_rowid ON docnames(rowid)")
    conn.execute("CREATE TABLE meta(key TEXT PRIMARY KEY, value TEXT)")


def _insert_row(cur, rootname, rel, text):
    """解析 frontmatter 并插入 FTS 行；返回 (relpath, rowid, size, mtime) 供 docmap。

    同步维护三张表（同一事务）：
      - fts      : 词元索引（title/body 经统一分词管线预处理）
      - docmap   : relpath -> (rowid, size, mtime, category)，增量对比基准
      - docnames : name -> relpath 索引，get_document 反查用
    """
    fm, body = parse_frontmatter(text)
    name = fm.get("name", "")
    title = fm.get("title", "") or name or os.path.basename(rel)
    uri = fm.get("uri", "")
    rp = fts_relpath(rootname, rel)
    cat = fts_category(rootname, rel)
    cur.execute(
        "INSERT INTO fts(title, body, name, uri, category, relpath) "
        "VALUES(?,?,?,?,?,?)",
        (segment_text(title, search=True), segment_text(body, search=True),
         name, uri, cat, rp),
    )
    rowid = cur.lastrowid
    if name:
        cur.execute("INSERT OR REPLACE INTO docnames(name, relpath, rowid) VALUES(?,?,?)",
                    (name, rp, rowid))
    try:
        st = os.stat(os.path.join(ROOTS[rootname], rel))
        size, mtime = st.st_size, int(st.st_mtime)
    except Exception:
        size, mtime = 0, 0
    return rp, rowid, size, mtime, cat


def build_index(rootname):
    """全量重建单个根的索引（含 docmap）。仅首次或 --full 时调用。"""
    os.makedirs(CACHE_DIR, exist_ok=True)
    dp = db_path(rootname)
    tmp = dp + ".tmp"
    if os.path.exists(tmp):
        os.remove(tmp)
    conn = sqlite3.connect(tmp, check_same_thread=False, timeout=30)
    _create_schema(conn)
    cur = conn.cursor()

    total = count_md_files(rootname)
    done = 0
    for fp, rel in _iter_md(rootname):
        try:
            with open(fp, "r", encoding="utf-8") as fh:
                text = fh.read()
        except Exception:
            continue
        rp, rowid, size, mtime, cat = _insert_row(cur, rootname, rel, text)
        cur.execute("INSERT INTO docmap(relpath, rowid, size, mtime, category) "
                    "VALUES(?,?,?,?,?)",
                    (rp, rowid, size, mtime, cat))
        done += 1
        if done % 2000 == 0:
            log.info("[%s] indexing %d/%d", rootname, done, total)
    conn.execute("INSERT OR REPLACE INTO meta(key,value) VALUES('doc_count',?)", (str(total),))
    conn.execute("INSERT OR REPLACE INTO meta(key,value) VALUES('built_at',?)", (str(int(time.time())),))
    conn.execute("INSERT OR REPLACE INTO meta(key,value) VALUES('tokenizer',?)", (SCHEMA_TOKENIZER,))
    conn.execute("INSERT OR REPLACE INTO meta(key,value) VALUES('dict_hash',?)", (_dict_signature(),))
    conn.execute("INSERT OR REPLACE INTO meta(key,value) VALUES('signature',?)",
                 (compute_signature(rootname),))
    conn.commit()
    conn.close()
    # Windows 下旧库可能被常驻查询服务(只读连接)持有句柄，替换会失败:
    # _replace_db 抛 OSError 时保留 tmp(已是完整新库), 由 ensure_index 记录
    # rebuild_failed; 服务重启/句柄释放后, ensure_index 检测 tmp 就绪直接
    # 替换(秒级), 无需重新构建。
    _replace_db(dp, tmp)
    log.info("index built [%s]: %d docs -> %s", rootname, total, dp)


# --------------------------------------------------------------------------- #
# 增量更新
# --------------------------------------------------------------------------- #
def _schema_tokenizer(conn):
    """读库内 schema 版本（meta.tokenizer）；旧库无该键返回 None。"""
    return _meta_value(conn, "tokenizer")


def _meta_value(conn, key):
    """读 meta 表单键值；旧库无表/无键返回 None。"""
    try:
        row = conn.execute("SELECT value FROM meta WHERE key=?", (key,)).fetchone()
    except Exception:
        return None
    return row[0] if row else None


def _disk_map(rootname):
    """当前磁盘语料：{fts_relpath: (size, mtime)}。轻量 stat，不读正文。"""
    m = {}
    root = ROOTS[rootname]
    for fp, rel in _iter_md(rootname):
        try:
            st = os.stat(fp)
        except Exception:
            continue
        m[fts_relpath(rootname, rel)] = (st.st_size, int(st.st_mtime))
    return m


def _stored_map(conn):
    rows = conn.execute("SELECT relpath, rowid, size, mtime FROM docmap").fetchall()
    return {r[0]: (r[1], r[2], r[3]) for r in rows}


def _apply_delta(conn, rootname):
    """对比磁盘与 docmap，对新增/变更/删除的文档做 FTS5 行级增删改。"""
    cur_map = _disk_map(rootname)
    stored = _stored_map(conn)

    added = [k for k in cur_map if k not in stored]
    removed = [k for k in stored if k not in cur_map]
    changed = [k for k in cur_map
               if k in stored and (stored[k][1], stored[k][2]) != cur_map[k]]
    if not (added or removed or changed):
        return False

    cur = conn.cursor()
    root = ROOTS[rootname]

    # 删除/变更：先按旧 rowid 从 fts / docnames 删除（rowid 对齐）
    for k in removed + changed:
        cur.execute("DELETE FROM fts WHERE rowid=?", (stored[k][0],))
        cur.execute("DELETE FROM docnames WHERE rowid=?", (stored[k][0],))
        cur.execute("DELETE FROM docmap WHERE relpath=?", (k,))

    # 新增/变更：重读正文并插入
    for k in added + changed:
        rel = k[len(CANGJIE_PREFIX):] if k.startswith(CANGJIE_PREFIX) else k
        fp = os.path.join(root, rel)
        try:
            with open(fp, "r", encoding="utf-8") as fh:
                text = fh.read()
        except Exception:
            continue
        rp, rowid, size, mtime, cat = _insert_row(cur, rootname, rel, text)
        cur.execute("INSERT INTO docmap(relpath, rowid, size, mtime, category) "
                    "VALUES(?,?,?,?,?)",
                    (rp, rowid, size, mtime, cat))

    total = conn.execute("SELECT count(*) FROM fts").fetchone()[0]
    conn.execute("INSERT OR REPLACE INTO meta(key,value) VALUES('doc_count',?)", (str(total),))
    conn.execute("INSERT OR REPLACE INTO meta(key,value) VALUES('built_at',?)", (str(int(time.time())),))
    conn.commit()
    log.info("[%s] delta: +%d changed=%d -%d -> doc_count=%d",
             rootname, len(added), len(changed), len(removed), total)
    return True


def _replace_db(dp, tmp):
    """原子替换索引库: 旧库改名 .old -> tmp 就位 -> 删 .old。

    Windows 下旧库被常驻查询服务(只读连接)持有句柄时 rename 抛 OSError;
    失败时保留 tmp(完整新库), 供后续直接替换, 不重新构建。
    """
    stale = dp + ".old"
    if os.path.exists(stale):
        os.remove(stale)
    if os.path.exists(dp):
        os.rename(dp, stale)
    os.rename(tmp, dp)
    if os.path.exists(stale):
        os.remove(stale)


def _tmp_matches(rootname):
    """tmp 是否是与当前词典/schema 匹配的完整新库(可直接替换)。"""
    tmp = db_path(rootname) + ".tmp"
    if not os.path.exists(tmp):
        return False
    try:
        c = sqlite3.connect(tmp, check_same_thread=False, timeout=30)
        try:
            return (_meta_value(c, "tokenizer") == SCHEMA_TOKENIZER
                    and _meta_value(c, "dict_hash") == _dict_signature())
        finally:
            c.close()
    except Exception:
        return False


def _mark_rebuild_failed(dp, reason):
    """重建替换失败时在旧库 meta 记录失败原因与当时词典签名。

    后续 ensure_index 以此判断是否跳过: dict 失败须签名一致才跳过
    (签名已变说明词典又改过, 应重新构建); tokenizer 失败直接跳过。
    """
    try:
        c = sqlite3.connect(dp, check_same_thread=False, timeout=30)
        try:
            c.execute("INSERT OR REPLACE INTO meta(key,value) VALUES('rebuild_failed',?)", (reason,))
            c.execute("INSERT OR REPLACE INTO meta(key,value) VALUES('rebuild_failed_sig',?)",
                      (_dict_signature(),))
            c.commit()
        finally:
            c.close()
    except Exception:
        pass


def ensure_index(rootname, force=False):
    """确保索引存在且与磁盘一致。增量更新；tokenizer/schema 版本不匹配时全量重建。

    force=True 时跳过 30s 节流（爬虫/增量完成后由 hdk.py 主动触发时使用，
    避免小批量 crawl 间隔 <30s 导致新文档不被索引）；服务侧检索路径不传
    force，靠节流避免高频搜索反复 stat 全库。
    """
    with _LOCK:
        now = time.time()
        if not force and _LAST_CHECK.get(rootname, 0) and now - _LAST_CHECK[rootname] < 30:
            return  # 30s 内已检查过，避免高频搜索反复 stat 全库
        _LAST_CHECK[rootname] = now

        dp = db_path(rootname)
        if not os.path.exists(dp):
            build_index(rootname)
            return
        conn = sqlite3.connect(dp, check_same_thread=False, timeout=30)
        try:
            # 旧库/版本不匹配：FTS tokenizer 在建表时烧死，无法行级迁移，
            # 只能全量重建（一次性的自动迁移，重建后与新建库一致）。
            schema_mismatch = _schema_tokenizer(conn) != SCHEMA_TOKENIZER
            dict_mismatch = _meta_value(conn, "dict_hash") != _dict_signature()
            reason = "tokenizer" if schema_mismatch else ("dict" if dict_mismatch else None)
            if reason and _meta_value(conn, "rebuild_failed") == reason:
                # 上次同类重建因旧库被占用而中断: 旧库仍可用。dict 失败须签名
                # 一致才跳过(签名已变说明词典又改过, 应重新构建); tmp 若是与
                # 当前词典匹配的完整新库, 直接替换(秒级)——服务重启/句柄释放后
                # 即自动完成迁移; 否则跳过, 避免每 30s 反复完整构建。
                skip = (reason != "dict"
                        or _meta_value(conn, "rebuild_failed_sig") == _dict_signature())
                if skip:
                    if _tmp_matches(rootname):
                        # 先关闭旧库连接再替换：conn 打开着旧库时 rename 会被
                        # 自己的连接锁住(Windows 自锁, WinError 32)，导致
                        # pending 迁移永远无法自动完成。
                        conn.close()
                        try:
                            _replace_db(dp, db_path(rootname) + ".tmp")
                            log.info("[%s] pending index activated (tmp matched)", rootname)
                            return  # 新库已就位(含最新词典与全部文档)，无需 apply_delta
                        except OSError:
                            log.warning("[%s] pending index replace still blocked", rootname)
                        conn = sqlite3.connect(dp, check_same_thread=False, timeout=30)
                    reason = None
            if reason:
                conn.close()
                log.info("[%s] index rebuild needed (%s), rebuilding once ...", rootname, reason)
                try:
                    build_index(rootname)
                except OSError:
                    # 旧库被常驻查询服务持有句柄，替换失败：标记失败原因，
                    # 查询继续用旧库，不向上抛异常。
                    _mark_rebuild_failed(dp, reason)
                    log.warning(
                        "[%s] index replace blocked by an open handle (%s), keeping old "
                        "index; restart the query service or run 'hdk.py index --full' "
                        "to finish migration", rootname, reason)
                return
            _apply_delta(conn, rootname)
        finally:
            conn.close()


def _conn_alive(conn):
    """连接存活探活: close_conns() 回收后, 其他线程的 _LOCAL 缓存里残留的是已关闭
    连接, 直接返回会导致该线程所有检索永久失败(ProgrammingError: closed)。"""
    try:
        conn.execute("SELECT 1")
        return True
    except sqlite3.Error:
        return False


def get_conn(rootname):
    """返回当前线程的读连接（每线程一个；check_same_thread=False 避免跨线程报错）。

    首次访问时构建/更新索引并打开连接，同线程复用。各线程持有独立连接，
    从根本上消除 'SQLite objects created in a thread can only be used in that
    same thread' 以及多线程并发操作同一连接导致的错误。
    缓存命中前必须探活: 空闲回收线程 close_conns() 无法触及其他线程的
    _LOCAL 缓存, 已关闭连接若不剔除会永久占位(缓存键恒存在, 永远不重建)。
    """
    cache = getattr(_LOCAL, "conns", None)
    if cache is None:
        cache = {}
        _LOCAL.conns = cache
    cached = cache.get(rootname)
    if cached is not None:
        if _conn_alive(cached):
            with _LOCK:
                ensure_index(rootname)   # 轻量增量检查（无变更时仅 stat 对比）
            return cached
        # 已被回收线程关闭: 从线程缓存剔除, 走下方重建
        cache.pop(rootname, None)
    with _LOCK:
        ensure_index(rootname)
        c = sqlite3.connect(db_path(rootname), check_same_thread=False, timeout=30)
        # 1.3GB FTS 索引页缓存上限 8MB：防查询把索引整本读进内存导致峰值膨胀
        c.execute("PRAGMA cache_size = -8192")
        # busy_timeout: Python 端重建/增量写库期间, 本读连接等锁而不是立刻抛
        # SQLITE_BUSY(索引更新是秒级行级 delta, 等待远优于把错误抛给检索方)。
        c.execute("PRAGMA busy_timeout = 30000")
        cache[rootname] = c
        _ALL_CONNS.append(c)
    return cache[rootname]


def ensure_all():
    for rn in ROOTS:
        ensure_index(rn)


def build_all():
    for rn in ROOTS:
        build_index(rn)


def close_conns():
    with _LOCK:
        for c in _ALL_CONNS:
            try:
                c.close()
            except Exception:
                pass
        _ALL_CONNS.clear()
