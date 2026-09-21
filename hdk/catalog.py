#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""官方目录树清单：HarmonyOS 语料的确定性完整性基线。

华为知识 MCP 端点只有 searchDocuments/getDocumentsById 两个工具，没有目录能力；
关键词搜索 + 链接 BFS 是概率性发现（实测只覆盖官方文档的 ~46%，FAQ/参考类长尾
几乎全漏）。文档站前端（Angular）渲染目录树用的是匿名可达的
POST /community/servlet/consumer/cn/documentPortal/getCatalogTree，本模块调用它
逐分类枚举整棵树，叶子/中间节点的 relateDocument 即文档 slug，拼成与语料一致的
"document/cn/<分类>/<slug>" 名称。

- build    : 枚举全部分类，写 catalog_inventory.json（名称清单 + 受限分类记录）
- diff     : 清单 vs 磁盘语料双向 diff（漏抓 / 多余），完整性验证入口
- purge-stale : 同词干新旧两版并存时物理删除旧版（官方目录常并存两版，见
             select_current）；清理记录写 catalog_purged.json，names() 自动剔除
- names()  : 供 crawl.py / incremental.py 加载清单（crawl 并入发现集、
             incremental 做确定性新增/删除检测）；文件缺失返回空集

受限分类（登录墙，返回 92520001/restricted）：cangjie-practices、cangjie-references，
由浏览器路（cj_iab）覆盖，build 时记入 restrictedCategories 并跳过。
"""
import json
import os
import re
import sys
import time
import urllib.request

import hdk_io

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, "harmonyos_docs")
INVENTORY = os.path.join(HERE, "catalog_inventory.json")
PURGED = os.path.join(HERE, "catalog_purged.json")

NUM_SUFFIX_RE = re.compile(r"-000000\d+$")

TREE_URL = ("https://svc-drcn.developer.huawei.com/community/servlet"
            "/consumer/cn/documentPortal/getCatalogTree")
REFERER = "https://developer.huawei.com/consumer/cn/doc/"

# 登录墙分类：知识 MCP 匿名通道拿不到目录，语料由浏览器路（cj_iab）负责
RESTRICTED = {"cangjie-practices", "cangjie-references"}


def _tree(cat, timeout=30):
    """拉取单个分类的目录树，返回 (ok, treeList|错误信息)。"""
    body = json.dumps({"language": "cn", "catalogName": cat,
                       "objectId": "0", "showHide": "0"}).encode()
    req = urllib.request.Request(
        TREE_URL, data=body,
        headers={"Content-Type": "application/json",
                 "Referer": REFERER, "User-Agent": "Mozilla/5.0"})
    try:
        r = json.load(urllib.request.urlopen(req, timeout=timeout))
    except Exception as e:                                   # noqa
        return False, "http: %s" % e
    if r.get("code") != 0:
        return False, r.get("message", "code=%s" % r.get("code"))
    return True, r["value"]["catalogTreeList"]


def tree_names(tree_list):
    """遍历树，收集所有带 relateDocument 的节点的文档名。"""
    names = set()

    def walk(n):
        rd = n.get("relateDocument")
        if rd:
            names.add("document/cn/%s/%s" % (n.get("_cat"), rd))
        for ch in n.get("children") or []:
            walk(ch)

    for root in tree_list:
        walk(root)
    return names


def fetch_category(cat):
    """单分类枚举，返回 (names, error)。tree_names 需要 _cat，包一层。"""
    ok, r = _tree(cat)
    if not ok:
        return set(), r
    for root in r:
        _mark(root, cat)
    return tree_names(r), None


def _mark(n, cat):
    n["_cat"] = cat
    for ch in n.get("children") or []:
        _mark(ch, cat)


def categories():
    """语料分类目录名（= catalogName），排除登录墙分类。"""
    return sorted(d for d in os.listdir(OUT)
                  if os.path.isdir(os.path.join(OUT, d))
                  and d not in RESTRICTED)


def build():
    """枚举全部分类，写 catalog_inventory.json。返回 (names, restricted)。"""
    names = set()
    restricted = []
    cats = categories()
    for i, c in enumerate(cats):
        got, err = fetch_category(c)
        if err:
            restricted.append({"category": c, "reason": err})
            print("[catalog] %-36s 跳过: %s" % (c, err), flush=True)
            continue
        names |= got
        print("[catalog] (%d/%d) %-36s %d docs" % (i + 1, len(cats), c, len(got)),
              flush=True)
        time.sleep(0.2)
    hdk_io.atomic_write_json(INVENTORY, {
        "builtAt": time.strftime("%Y-%m-%dT%H:%M:%S"),
        "restrictedCategories": restricted,
        "names": sorted(names),
    }, ensure_ascii=False, separators=(",", ":"))
    print("[catalog] 清单共 %d 篇，受限 %d 分类 -> %s"
          % (len(names), len(restricted), INVENTORY), flush=True)
    return names, restricted


def load_purged():
    """故意清理的同词干旧版变体名集合（不参与清单/发现/对账）。"""
    if not os.path.exists(PURGED):
        return set()
    try:
        with open(PURGED, encoding="utf-8") as f:
            return set(json.load(f))
    except Exception:                                        # noqa
        return set()


def names():
    """加载清单并剔除已清理的旧版变体；文件缺失返回空集
    （调用方退化为纯搜索发现）。"""
    if not os.path.exists(INVENTORY):
        return set()
    try:
        with open(INVENTORY, encoding="utf-8") as f:
            return set(json.load(f).get("names", [])) - load_purged()
    except Exception:                                        # noqa
        return set()


def select_current(stem_names):
    """同词干一组文档名里选当前版。

    官方目录对同一 slug 位置常并存两个编号节点（新旧两版）。规则：
    优先无编号后缀的形态（官方 canonical 引用形态）；否则取编号后缀
    最大者——华为文档编号随版本递增，大编号即新版（已抽样核对）。
    """
    uns = [n for n in stem_names if not NUM_SUFFIX_RE.search(n)]
    if len(uns) == 1:
        return uns[0]

    def num(n):
        m = re.search(r"-000000(\d+)$", n)
        return int(m.group(1)) if m else -1

    return max(stem_names, key=num)


def stale_variant_groups():
    """扫描磁盘语料，返回 {词干: [全部文档名]}，仅含同词干多版组。"""
    groups = {}
    for n in disk_names():
        groups.setdefault(NUM_SUFFIX_RE.sub("", n), []).append(n)
    return {k: sorted(v) for k, v in groups.items() if len(v) > 1}


def purge_stale_variants(dry_run=False):
    """把同词干组的旧版变体直接物理删除，保留 select_current 选出的当前版
    （用户 2026-09-21：旧版本不留任何副本）。

    清理记录写入 catalog_purged.json（旧版名 -> 保留名），names() 此后自动剔除，
    crawl/incremental/diff 三处口径随之统一，不会反复报漏抓。
    """
    groups = stale_variant_groups()
    purged = {}
    for stem, members in groups.items():
        keep = select_current(members)
        for n in members:
            if n != keep:
                purged[n] = keep
    print("[purge] 同词干组 %d，旧版变体 %d 篇%s"
          % (len(groups), len(purged), "（dry-run）" if dry_run else ""),
          flush=True)
    if dry_run or not purged:
        return purged
    import incremental, crawl          # 函数内导入避免循环依赖
    # 清理记录必须先行落盘: 若先软删后写记录, 中间崩溃会让已删旧版不在
    # catalog_purged.json 里, names() 不过滤, 下一轮 crawl 又把它们当漏抓抓回
    # ——正是本护栏要阻止的 抓<->删 反复横跳。记录先行 + 重跑幂等。
    hdk_io.atomic_write_json(PURGED, purged,
                             ensure_ascii=False, separators=(",", ":"))
    crawl.acquire_lock()
    try:
        s = incremental.load_inc_state()
        fetched = set(s["fetched"])
        hashes = s["hashes"]
        for n in sorted(purged):
            incremental.delete_doc(n, s, fetched, hashes)
        incremental.save_inc_state({**s,
                                    "discovered": sorted(set(s["discovered"])),
                                    "fetched": sorted(fetched),
                                    "hashes": hashes})
        incremental.sync_crawl_state(set(s["discovered"]), fetched,
                                     {d["name"] for d in s["deleted"]})
    finally:
        crawl.release_lock()
    print("[purge] 已物理删除 %d 篇旧版变体（记录 -> %s）" % (len(purged), PURGED),
          flush=True)
    return purged


def disk_names():
    """磁盘语料的 name 集合（读 frontmatter）。"""
    names = set()
    for root, _, files in os.walk(OUT):
        for fn in files:
            if not fn.endswith(".md"):
                continue
            try:
                head = open(os.path.join(root, fn), encoding="utf-8").read(400)
            except Exception:
                continue
            m = re.search(r"^name: (.+)$", head, re.M)
            if m:
                names.add(m.group(1).strip())
    return names


def diff():
    """清单 vs 磁盘语料双向 diff，返回 (missing, extra)。"""
    inv = names()
    disk = disk_names()
    # 浏览器路写入的仓颉语料 name 可能缺 document/cn/ 前缀，归一后比较
    disk_n = {n if n.startswith("document/cn/") else "document/cn/" + n
              for n in disk}
    inv_n = {n if n.startswith("document/cn/") else "document/cn/" + n
             for n in inv}
    return inv_n - disk_n, disk_n - inv_n


def main(action=None):
    cmd = action or (sys.argv[1] if len(sys.argv) > 1 else "build")
    if cmd == "build":
        build()
    elif cmd == "diff":
        missing, extra = diff()
        print("清单有语料无（漏抓）: %d" % len(missing))
        for n in sorted(missing)[:20]:
            print("  漏:", n)
        print("语料有清单无（多余/别名）: %d" % len(extra))
        for n in sorted(extra)[:20]:
            print("  多:", n)
    elif cmd == "purge-stale":
        purge_stale_variants(dry_run="--dry-run" in sys.argv)
    else:
        sys.exit("[catalog] 未知子命令: %s（build | diff | purge-stale）" % cmd)


if __name__ == "__main__":
    main()
