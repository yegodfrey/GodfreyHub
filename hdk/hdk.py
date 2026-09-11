#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""HDK 文档流水线统一 CLI（整合所有爬虫 / 增量器 / 索引 / MCP 服务）。

历史散落脚本（crawl.py、crawl_cj.py、crawl_cangjie.py、incremental.py、
mcp_server.py、generate_index.py）保留为可复用模块，由本入口统一调度；
被替代的旧 runner（run_full.py / run_full_cj.py / rebuild_fts.py / rebuild_state.py）
已删除，不留残档。

用法：
  python hdk.py crawl [--target harmonyos|harmonyos-cangjie|cangjie|all] [--rounds N] [--limit N] [--no-index]
  python hdk.py incremental [--no-recheck] [--skip-delete] [--limit N]
  python hdk.py incremental-cj [--no-recheck] [--skip-delete] [--limit N]
  python hdk.py incremental-cangjie [--skip-delete] [--limit N] [--no-index]
  python hdk.py index [--root harmonyos|cangjie|all] [--full]
  python hdk.py serve
  python hdk.py stats
  python hdk.py manifest
  python hdk.py state rebuild

语料说明：
  - harmonyos        : 本目录下 harmonyos_docs/，HarmonyOS 文档
                       （含 cangjie-* 分类的鸿蒙仓颉开发文档），来源为华为云
                       HarmonyOS Developer Knowledge MCP（crawl.py）。
  - harmonyos-cangjie: 同上语料中的 cangjie-* 部分，官方接口需登录（HttpOnly cookie），
                       经 builtin_browser MCP（cj_mcp.py）在已登录页面内鉴权抓取；crawl 补新、
                       incremental-cangjie 补新+回查已改+判删。
  - cangjie          : 本目录下 cangjie_docs/，仓颉语言官方文档
                       （cj-docs.gitcode.com 静态站，crawl_cj.py）。
"""
import argparse
import os
import sys
import time

HERE = os.path.dirname(os.path.abspath(__file__))
if HERE not in sys.path:
    sys.path.insert(0, HERE)

import crawl                 # noqa: E402  HarmonyOS 文档爬虫（华为云 MCP 接口）
import crawl_cj              # noqa: E402  仓颉语言文档爬虫（静态站）
import incremental           # noqa: E402  HarmonyOS 增量更新器
import incremental_cj        # noqa: E402  仓颉语言文档增量更新器（静态站 404 判删）
import indexer               # noqa: E402  共享 FTS5 索引（全量 + 增量）
import generate_index        # noqa: E402  manifest/README 生成

# 爬虫 -> 完成后应增量更新索引的语料根
TARGET_ROOTS = {
    "harmonyos": "harmonyos",
    "harmonyos-cangjie": "harmonyos",
    "cangjie": "cangjie",
}
TARGETS = list(TARGET_ROOTS)


# --------------------------------------------------------------------------- #
# crawl
# --------------------------------------------------------------------------- #
def _count_state(which):
    if which == "harmonyos":
        p = os.path.join(HERE, "crawl_state.json")
        if not os.path.exists(p):
            return None
        s = __import__("json").load(open(p, encoding="utf-8"))
        return len(s.get("fetched", []))
    if which == "harmonyos-cangjie":
        p = os.path.join(HERE, "cangjie_crawl_state.json")
        if not os.path.exists(p):
            return None
        s = __import__("json").load(open(p, encoding="utf-8"))
        return len(s.get("fetched", []))
    if which == "cangjie":
        p = os.path.join(HERE, "crawl_cj_state.json")
        if not os.path.exists(p):
            return None
        s = __import__("json").load(open(p, encoding="utf-8"))
        return len(s.get("fetched", []))
    return None


def _one_round(target, limit):
    """执行一轮爬取，返回 (本轮前 fetched, 本轮后 fetched)。"""
    before = _count_state(target) or 0
    if target == "harmonyos":
        crawl.main()          # 自带运行锁、断点续爬、停滞退出
    else:
        crawl_cj.main()
    after = _count_state(target)
    return before, (after if after is not None else before)


def cmd_crawl(args):
    targets = list(TARGETS) if args.target == "all" else [args.target]
    if args.target not in TARGETS and args.target != "all":
        sys.exit(f"[hdk] 未知 target: {args.target}（可选 {TARGETS} 或 all）")

    for t in targets:
        print(f"[hdk] === crawl target={t} ===", flush=True)
        if t == "harmonyos-cangjie":
            # 经 builtin_browser MCP（本地适配器代理）驱动 cj_mcp 抓取；需浏览器已登录
            # 华为开发者账号，串行、单次枚举+抓取补新（改/删用 incremental-cangjie）。
            import cj_mcp
            print("[hdk] 鸿蒙仓颉：经浏览器 MCP 枚举 + 抓取新文档（需已登录华为开发者账号）。", flush=True)
            cj_mcp.CjMcp().go(["enumerate", "fetch"])
            if not args.no_index:
                print("[hdk] 更新索引 root=harmonyos ...", flush=True)
                indexer.ensure_index("harmonyos", force=True)
            continue
        no_progress = 0
        max_rounds = args.rounds if args.rounds > 0 else 300
        for i in range(max_rounds):
            print(f"[hdk] round {i}: {t}", flush=True)
            b0, a0 = _one_round(t, args.limit)
            gained = a0 - b0
            print(f"[hdk] round {i} done: fetched {b0} -> {a0} (gained {gained})", flush=True)
            if args.limit and a0 >= args.limit:
                break
            if gained <= 0:
                no_progress += 1
                if no_progress >= 2:
                    print("[hdk] 连续两轮无新增，结束。", flush=True)
                    break
            else:
                no_progress = 0
        if not args.no_index:
            root = TARGET_ROOTS[t]
            print(f"[hdk] 更新索引 root={root} ...", flush=True)
            indexer.ensure_index(root, force=True)


# --------------------------------------------------------------------------- #
# incremental
# --------------------------------------------------------------------------- #
def cmd_incremental(args):
    # incremental.main() 自行解析 sys.argv，先替换掉再调用
    argv = ["incremental"]
    if args.no_recheck:
        argv.append("--no-recheck")
    if args.skip_delete:
        argv.append("--skip-delete")
    if args.limit:
        argv += ["--limit", str(args.limit)]
    sys.argv = argv
    incremental.main()
    if not args.no_index:
        print("[hdk] 更新索引 root=harmonyos ...", flush=True)
        indexer.ensure_index("harmonyos", force=True)


def cmd_incremental_cj(args):
    # incremental_cj.main() 自行解析 sys.argv，先替换掉再调用
    argv = ["incremental-cj"]
    if args.no_recheck:
        argv.append("--no-recheck")
    if args.skip_delete:
        argv.append("--skip-delete")
    if args.limit:
        argv += ["--limit", str(args.limit)]
    sys.argv = argv
    incremental_cj.main()
    if not args.no_index:
        print("[hdk] 更新索引 root=cangjie ...", flush=True)
        indexer.ensure_index("cangjie", force=True)


def cmd_incremental_cangjie(args):
    # 鸿蒙仓颉开发文档增量：经浏览器 MCP 驱动 cj_mcp（补新 + 回查已改 + 判删）。
    # 需浏览器已登录华为开发者账号，且同源 svc-drcn 可达；串行执行。
    import cj_mcp
    argv = ["incremental"]
    if args.skip_delete:
        argv.append("--skip-delete")
    if args.limit:
        argv.append("--limit=%d" % args.limit)
    print("[hdk] 鸿蒙仓颉增量：经浏览器 MCP 补新+回查+判删（需已登录华为开发者账号）。", flush=True)
    cj_mcp.CjMcp().go(argv)
    if not args.no_index:
        print("[hdk] 更新索引 root=harmonyos ...", flush=True)
        indexer.ensure_index("harmonyos", force=True)


# --------------------------------------------------------------------------- #
# index / serve / stats / manifest / state
# --------------------------------------------------------------------------- #
def cmd_index(args):
    roots = list(indexer.ROOTS) if args.root == "all" else [args.root]
    for r in roots:
        if r not in indexer.ROOTS:
            sys.exit(f"[hdk] 未知 root: {r}（可选 {list(indexer.ROOTS)} 或 all）")
        print(f"[hdk] index root={r} mode={'full' if args.full else 'incremental'} ...", flush=True)
        t0 = time.time()
        if args.full:
            indexer.build_index(r)
        else:
            indexer.ensure_index(r)
        print(f"[hdk] index {r} done in {round(time.time() - t0, 1)}s", flush=True)


def cmd_serve(args):
    import mcp_server
    mcp_server.ensure_all()
    # stdout 是 MCP 协议通道，启动日志只能走 stderr（复用 mcp_server 已配置好的 logger）
    mcp_server.log.info("starting hdk MCP server (stdio)")
    mcp_server.mcp.run()


def cmd_stats(args):
    print("=== 语料统计 ===", flush=True)
    for rn, root in indexer.ROOTS.items():
        n = indexer.count_md_files(rn)
        print(f"[{rn}] {root}", flush=True)
        print(f"  文档数: {n}", flush=True)
        cats = {}
        for _, rel in indexer._iter_md(rn):
            c = rel.split("/", 1)[0]
            cats[c] = cats.get(c, 0) + 1
        for c, k in sorted(cats.items(), key=lambda x: -x[1]):
            print(f"    {c}: {k}", flush=True)
        dp = indexer.db_path(rn)
        if os.path.exists(dp):
            size_mb = round(os.path.getsize(dp) / 1024 / 1024, 1)
            # 只读轻量读取 meta，不触发索引构建/迁移
            dc = bt = None
            legacy = False
            try:
                import sqlite3
                conn = sqlite3.connect(f"file:{dp}?mode=ro", uri=True)
                try:
                    conn.execute("SELECT 1 FROM docmap LIMIT 1").fetchone()
                except Exception:
                    legacy = True
                if not legacy:
                    dc = conn.execute("SELECT value FROM meta WHERE key='doc_count'").fetchone()
                    bt = conn.execute("SELECT value FROM meta WHERE key='built_at'").fetchone()
                conn.close()
            except Exception:
                pass
            extra = "（旧 schema，下次索引/服务启动时自动迁移）" if legacy else ""
            print(f"  索引: {size_mb} MB, doc_count={dc[0] if dc else '?'}, "
                  f"built_at={bt[0] if bt else '?'}{extra}", flush=True)
        print("", flush=True)
    print("=== 增量爬虫状态 ===", flush=True)
    for name, statefile in [("harmonyos", "crawl_state.json"),
                            ("harmonyos-cangjie", "cangjie_crawl_state.json"),
                            ("cangjie", "crawl_cj_state.json")]:
        p = os.path.join(HERE, statefile)
        if os.path.exists(p):
            s = __import__("json").load(open(p, encoding="utf-8"))
            if isinstance(s, dict):
                keys = {k: (len(v) if isinstance(v, (list, dict)) else v)
                        for k, v in s.items()}
                print(f"  {name}: {keys}", flush=True)


def cmd_manifest(args):
    generate_index.main()


def cmd_catalog(args):
    import catalog
    if args.action == "purge-stale":
        catalog.purge_stale_variants(dry_run=args.dry_run)
    else:
        catalog.main(args.action)


def cmd_state(args):
    """以磁盘为基准重建 crawl_state.json（等效旧 rebuild_state.py）。"""
    if not args.action or args.action != "rebuild":
        sys.exit("[hdk] state 子命令仅支持 rebuild")
    OUT = crawl.OUT
    STATE = crawl.STATE
    disk = set()
    for root, _, files in os.walk(OUT):
        if "_deleted" in root:
            continue
        for fn in files:
            if not fn.endswith(".md") or fn == "README.md":
                continue
            p = os.path.join(root, fn)
            try:
                head = open(p, encoding="utf-8").read(400)
            except Exception:
                continue
            for line in head.splitlines():
                if line.startswith("name:"):
                    disk.add(line[5:].strip())
                    break
    old = __import__("json").load(open(STATE, encoding="utf-8"))
    old_disc = set(old.get("discovered", []))
    old_fet = set(old.get("fetched", []))
    disc_norm = set()
    for n in old_disc:
        # norm_docname 对旧版快照返回 None，直接丢弃而不是塞回原名
        nn = crawl.norm_docname(n)
        if nn:
            disc_norm.add(nn)
    disc_norm |= disk
    failed = {n for n in old_fet if n not in disk}
    fetched = disk
    print(f"disk / fetched : {len(fetched)}", flush=True)
    print(f"discovered     : {len(disc_norm)}", flush=True)
    print(f"failed (phantom): {len(failed)}", flush=True)
    with open(STATE, "w", encoding="utf-8") as f:
        __import__("json").dump({"discovered": sorted(disc_norm),
                                 "fetched": sorted(fetched),
                                 "failed": sorted(failed)},
                                f, ensure_ascii=False, indent=2)
    print(f"wrote {STATE}", flush=True)


# --------------------------------------------------------------------------- #
# 入口
# --------------------------------------------------------------------------- #
def main():
    ap = argparse.ArgumentParser(prog="hdk.py", description="HDK 文档流水线统一 CLI")
    sub = ap.add_subparsers(dest="cmd", required=True)

    p = sub.add_parser("crawl", help="爬取文档（默认多轮驱动直到无新增）")
    p.add_argument("--target", default="harmonyos",
                   help="harmonyos | harmonyos-cangjie | cangjie | all")
    p.add_argument("--rounds", type=int, default=0, help="最多轮数（0=自动直到无新增）")
    p.add_argument("--limit", type=int, default=0, help="限制抓取文档数（冒烟测试）")
    p.add_argument("--no-index", action="store_true", help="完成后不更新索引")
    p.set_defaults(fn=cmd_crawl)

    p = sub.add_parser("incremental", help="HarmonyOS 增量更新（新/改/删检测）")
    p.add_argument("--no-recheck", action="store_true", help="只抓新文档，不做改/删检测")
    p.add_argument("--skip-delete", action="store_true", help="报告删除但不动文件")
    p.add_argument("--limit", type=int, default=0, help="限制处理量（冒烟测试）")
    p.add_argument("--no-index", action="store_true", help="完成后不更新索引")
    p.set_defaults(fn=cmd_incremental)

    p = sub.add_parser("incremental-cj", help="仓颉文档增量更新（新/改/删检测，静态站 404 判删）")
    p.add_argument("--no-recheck", action="store_true", help="只抓新文档，不做改/删检测")
    p.add_argument("--skip-delete", action="store_true", help="报告删除但不动文件")
    p.add_argument("--limit", type=int, default=0, help="限制处理量（冒烟测试）")
    p.add_argument("--no-index", action="store_true", help="完成后不更新索引")
    p.set_defaults(fn=cmd_incremental_cj)

    p = sub.add_parser("incremental-cangjie",
                       help="鸿蒙仓颉开发文档增量（经浏览器 MCP：补新/回查已改/判删，需登录华为开发者账号）")
    p.add_argument("--skip-delete", action="store_true", help="报告删除但不动文件")
    p.add_argument("--limit", type=int, default=0, help="限制重查处理量（冒烟测试）")
    p.add_argument("--no-index", action="store_true", help="完成后不更新索引")
    p.set_defaults(fn=cmd_incremental_cangjie)

    p = sub.add_parser("index", help="更新 FTS5 索引（默认增量）")
    p.add_argument("--root", default="all", help="harmonyos | cangjie | all")
    p.add_argument("--full", action="store_true", help="全量重建（首次或强制）")
    p.set_defaults(fn=cmd_index)

    p = sub.add_parser("serve", help="启动本地 MCP 服务（stdio）")
    p.set_defaults(fn=cmd_serve)

    p = sub.add_parser("stats", help="语料与索引统计")
    p.set_defaults(fn=cmd_stats)

    p = sub.add_parser("manifest", help="生成各语料的 manifest.json 与 README.md")
    p.set_defaults(fn=cmd_manifest)

    p = sub.add_parser("catalog",
                       help="官方目录树清单（build：枚举全分类；diff：与语料对账；purge-stale：清理同词干旧版变体）")
    p.add_argument("action", nargs="?", default="build",
                   help="build | diff | purge-stale")
    p.add_argument("--dry-run", action="store_true",
                   help="purge-stale 仅报告，不实际删除")
    p.set_defaults(fn=cmd_catalog)

    p = sub.add_parser("state", help="状态维护（rebuild：以磁盘为准重建 crawl_state.json）")
    p.add_argument("action", nargs="?", default="rebuild")
    p.set_defaults(fn=cmd_state)

    args = ap.parse_args()
    args.fn(args)


if __name__ == "__main__":
    main()
