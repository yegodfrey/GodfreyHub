# -*- coding: utf-8 -*-
"""检索质量评测: 自建词典 vs jieba 默认词典, 四层降级 vs 旧两层。

查询集: 语料 frontmatter 标题抽样(目标文档已知, 自命中)。
指标: Recall@10 / MRR(平均倒数排名) / 命中位置分布(rank=1 / 2-3 / 4-10 / miss)。
      单相关文档查询下 NDCG@10 与 MRR 等价(均为 1/log2(rank+1)), 故以 MRR+分布呈现。

对照组合(索引与查询词典可分别指定, 默认用当前索引 + tmp 迁移库):
  A. 当前词典 + 四层降级 + 当前索引(现状)
  B. jieba 默认词典 + 四层降级 + 当前索引(查询词典对照)
  C. jieba 默认词典 + 两层降级 + 当前索引(旧行为对照)
  D. 当前词典 + 四层降级 + tmp 索引(若存在: 迁移中待生效的新索引)

用法: python hdk/tests/eval_retrieval.py [--sample N] [--seed 42]
依赖: 语料目录(标题抽样)与 .mcp_cache 索引; 默认词典取 jieba 包内自带 dict.txt。
"""
import os
import random
import re
import sqlite3
import sys

HDK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))  # 仓库 hdk/
CACHE = os.path.join(HDK, ".mcp_cache")
NEW_DICT = os.path.join(HDK, "dict", "dict.txt")

sys.path.insert(0, HDK)
import jieba  # noqa: E402

OLD_DICT = os.path.join(os.path.dirname(jieba.__file__), "dict.txt")  # jieba 包内默认词典

CJK = re.compile(r"[\u4e00-\u9fff]{2,}")

# ---------- 查询集: 从语料抽样标题 ----------
def sample_titles(n=100, seed=42):
    random.seed(seed)
    pairs = []  # (relpath, title)
    for rootname, root in (("harmonyos", os.path.join(HDK, "harmonyos_docs")),
                           ("cangjie", os.path.join(HDK, "cangjie_docs"))):
        prefix = "cangjie/" if rootname == "cangjie" else ""
        for dp, dirs, fs in os.walk(root):
            dirs[:] = [d for d in dirs if d != "_deleted"]
            for f in fs:
                if not f.endswith(".md") or f in ("README.md", "manifest.json"):
                    continue
                fp = os.path.join(dp, f)
                try:
                    text = open(fp, encoding="utf-8").read()
                except Exception:
                    continue
                m = re.match(r"^---\s*\r?\n(.*?)\r?\n---", text, re.S)
                title = ""
                if m:
                    for line in m.group(1).splitlines():
                        if line.lower().startswith("title:"):
                            title = line.split(":", 1)[1].strip().strip("\"'")
                            break
                if not title:
                    title = os.path.basename(f)[:20]
                rel = os.path.relpath(fp, root).replace("\\", "/")
                if len(title) >= 4:
                    pairs.append((prefix + rel, title))
    random.shuffle(pairs)
    return pairs[:n]


# ---------- 词典切换 ----------
def use_dict(dpath):
    jieba.set_dictionary(dpath)
    jieba.initialize()


def segment(tokens, search=False):
    cut = jieba.cut_for_search if search else jieba.cut
    out, seen = [], set()
    for tok in cut(" ".join(tokens), HMM=False):
        t = tok.strip()
        if not t or not any(ch.isalnum() for ch in t):
            continue
        if t.isdigit() and len(t) == 1:
            continue
        if search:
            out.append(t)
        elif t in seen:
            continue
        else:
            seen.add(t)
            out.append(t)
    return out


# ---------- 四层降级表达式(复刻 mcp_server/hdk.ts 逻辑) ----------
def q(t):
    return '"' + t.replace('"', '""') + '"'


def subtokens(t):
    subs = set()
    for st in jieba.cut_for_search(t, HMM=False):
        st = st.strip()
        if not st or st == t:
            continue
        if not any(ch.isalnum() for ch in st) or (st.isdigit() and len(st) == 1):
            continue
        subs.add(st)
    return subs


def match_exprs(tokens, layers):
    """按启用层数生成表达式列表: 1=strict, 2=+去单字, 3=+缺一词, 4=+子词兜底"""
    exprs = []
    exprs.append(" AND ".join(q(t) for t in tokens))                       # L1 strict
    no_single = [t for t in tokens if len(t) > 1]
    if layers >= 2 and no_single and len(no_single) != len(tokens):
        exprs.append(" AND ".join(q(t) for t in no_single))                # L2 去单字
    if layers >= 3 and 2 <= len(tokens) <= 8:
        if len(tokens) == 2:
            exprs.append(" OR ".join(q(t) for t in tokens))
        else:
            exprs.append(" OR ".join(
                "(" + " AND ".join(q(t) for i, t in enumerate(tokens) if i != o) + ")"
                for o in range(len(tokens))))                               # L3 缺一词
    if layers >= 4 and 1 <= len(tokens) <= 8:
        alts = {i: subtokens(t) for i, t in enumerate(tokens) if subtokens(t)}
        if alts:
            keepers = [i for i, t in enumerate(tokens) if len(t) > 1]
            parts = []
            for i, subs in alts.items():
                sub_or = " OR ".join(q(s) for s in sorted(subs))
                others = [q(tokens[j]) for j in keepers if j != i]
                parts.append("(" + " AND ".join(others + ["(" + sub_or + ")"]) + ")"
                             if others else "(" + sub_or + ")")
            exprs.append(" OR ".join(parts))                                # L4 子词兜底
    return exprs


def search(db_path, query, layers):
    tokens = segment([query])
    if not tokens:
        return []
    conn = sqlite3.connect(db_path, check_same_thread=False)
    try:
        seen, scored = set(), []
        for expr in match_exprs(tokens, layers):
            try:
                rows = conn.execute(
                    "SELECT relpath, bm25(fts, 3.0, 1.0) FROM fts "
                    "WHERE fts MATCH ? ORDER BY bm25(fts, 3.0, 1.0) LIMIT 20",
                    (expr,)).fetchall()
            except Exception:
                continue
            for rp, rank in rows:
                if rp not in seen:
                    seen.add(rp)
                    scored.append((rp, rank))
        scored.sort(key=lambda x: x[1])
        return [rp for rp, _ in scored][:10]
    finally:
        conn.close()


# ---------- 主流程 ----------
def main():
    import argparse
    ap = argparse.ArgumentParser(description="HDK 检索质量评测(Recall@10)")
    ap.add_argument("--sample", type=int, default=120, help="查询集标题抽样数")
    ap.add_argument("--seed", type=int, default=42, help="抽样随机种子(可复现)")
    args = ap.parse_args()

    titles = sample_titles(args.sample, args.seed)
    print("查询集: %d 个标题(harmonyos %d / cangjie %d)" % (
        len(titles),
        sum(1 for r, t in titles if not r.startswith("cangjie/")),
        sum(1 for r, t in titles if r.startswith("cangjie/"))))

    cur_db = {rn: os.path.join(CACHE, rn + "_docs.fts5.db") for rn in ("harmonyos", "cangjie")}
    tmp_db = {rn: os.path.join(CACHE, rn + "_docs.fts5.db.tmp") for rn in ("harmonyos", "cangjie")}
    has_tmp = all(os.path.exists(p) for p in tmp_db.values())

    def evaluate(dpath, dbmap, layers):
        use_dict(dpath)
        mrr_sum, hits, rank1, rank23 = 0.0, 0, 0, 0
        for rp, title in titles:
            root = "cangjie" if rp.startswith("cangjie/") else "harmonyos"
            top = search(dbmap[root], title, layers)
            if rp in top:
                rank = top.index(rp) + 1
                mrr_sum += 1.0 / rank
                hits += 1
                if rank == 1:
                    rank1 += 1
                elif rank <= 3:
                    rank23 += 1
        n = len(titles)
        return (hits / n, mrr_sum / n, rank1 / n, rank23 / n, hits / n)

    print("\n== 检索质量对照(查询集 %d, 单相关文档) ==" % len(titles))
    combos = [
        ("A. 当前词典 + 四层降级 + 当前索引", NEW_DICT, cur_db, 4),
        ("B. jieba默认词典 + 四层降级 + 当前索引", OLD_DICT, cur_db, 4),
        ("C. jieba默认词典 + 两层降级 + 当前索引(旧行为)", OLD_DICT, cur_db, 2),
    ]
    if has_tmp:
        combos.append(("D. 当前词典 + 四层降级 + tmp 索引(迁移中)", NEW_DICT, tmp_db, 4))
    print("  %-44s %8s %8s %10s %10s" % ("方案", "Recall@10", "MRR", "rank=1", "rank 2-3"))
    for name, dpath, dbmap, layers in combos:
        rec, mrr, r1, r23, _ = evaluate(dpath, dbmap, layers)
        print("  %-44s %7.1f%% %7.3f %9.1f%% %9.1f%%" % (name, rec * 100, mrr, r1 * 100, r23 * 100))


if __name__ == "__main__":
    main()
