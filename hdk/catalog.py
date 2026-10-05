#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""官方目录树清单：HarmonyOS 语料的确定性完整性基线。

华为知识 MCP 端点只有 searchDocuments/getDocumentsById 两个工具，没有目录能力；
关键词搜索 + 正文链接 BFS 是概率性发现（实测只覆盖官方文档的 ~46%，FAQ/参考类长尾
几乎全漏）。文档站前端（Angular）的两个匿名接口构成本模块的基线：

  POST …/documentPortal/getAllCatalog   官方分类全集（含大量 -V<数字> 历史快照分类）
  POST …/documentPortal/getCatalogTree  逐分类整棵树，叶子/中间节点 relateDocument 即文档 slug

采集范围（scope）= `harmonyos_docs/` 下已存在的分类目录。历史实现只用磁盘目录反推分类，
于是「基线」永远只能确认已经采到的东西——官方 434 个分类条目里去掉 115 个版本快照分类后，
仍有 112 个现役分类（实测约 1.37 万篇）结构性采不到。现在改为：枚举官方全集，**在范围内**
的分类写进 names（抓取/对账基线），**不在范围内**的分类写进 unadoptedCategories 连同篇数上报，
由维护者用 `catalog adopt <分类>` 显式纳入。基线不再自我封闭，扩采也是一次可见的决策。

子命令：
  build          枚举官方全集，写 catalog_inventory.json（names + unadoptedCategories）
  diff           清单 vs 磁盘语料双向对账，漏抓按「知识 MCP 不供给」与「真漏」分桶
  dups           只读扫描逐字重复文档与同名多文件（不删任何文件，见下文说明）
  adopt <cat>    新建分类目录，把该官方分类纳入采集范围

关于「删除旧版」：本模块曾提供 purge-stale，按 slug 词干（抹掉 -000000NNN 文档号）
认定同一篇文档的新旧两版并物理删除旧版。该前提已被实测推翻：同词干组是
Overview / FAQ / Class Summary 这类**跨 Kit 通用页名**（最大一组
HMSCore-References/overview 的 42 名成员分属广告监听、查询对象、VAST 枚举、
Consent SDK 等 42 个不同 API 包），1716 名「旧版」里只有 48 篇与保留版逐字相同。
按旧规则清理会永久删掉上千篇不同 Kit 的文档，因此该功能整体删除，不留兼容路径；
逐字重复只在 dups 里报告，去重交给检索端（同内容只出一条）。
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

NUM_SUFFIX_RE = re.compile(r"-000000\d+$")
VERSIONED_CAT_RE = re.compile(r"-V\d+$")

TREE_URL = ("https://svc-drcn.developer.huawei.com/community/servlet"
            "/consumer/cn/documentPortal/getCatalogTree")
ALLCATALOG_URL = ("https://svc-drcn.developer.huawei.com/community/servlet"
                  "/consumer/cn/documentPortal/getAllCatalog")
REFERER = "https://developer.huawei.com/consumer/cn/doc/"

# 清单有效期：超过这个天数，确定性新增检测就会漏掉官方新发布的文档
# （2026-10-05 实测：9/21 的清单让 harmonyos-guides 新上的 10 篇 nearlink 文档一直没入库）
INVENTORY_MAX_AGE_DAYS = 7

# 已知登录墙分类：知识 MCP 匿名通道拿不到目录，语料由浏览器路（cj_iab）负责。
# 这只是硬编码的种子；真正的墙由 build 实测发现并记入 restrictedCategories
#（2026-10-05 实测 18 个，其中 cangjie-faqs/cangjie-releases/整套 ICS-*/hima-references/rcp-api
# 都是 restricted catalog, need login to view；cangjie-guides 匿名可枚举但只有 1 篇）。
RESTRICTED = {"cangjie-practices", "cangjie-references"}


def _post(url, body, timeout=30):
    req = urllib.request.Request(
        url, data=json.dumps(body).encode(),
        headers={"Content-Type": "application/json",
                 "Referer": REFERER, "User-Agent": "Mozilla/5.0"})
    return json.load(urllib.request.urlopen(req, timeout=timeout))


def official_categories():
    """官方分类全集（去重、字典序、剔除 -V<数字> 历史快照分类）。

    getAllCatalog 的返回里有重复条目（实测 434 条 -> 唯一名更少），必须去重。
    """
    r = _post(ALLCATALOG_URL, {"language": "cn"})
    if str(r.get("code")) != "00000" or not isinstance(r.get("catalogList"), list):
        raise RuntimeError("getAllCatalog 响应异常: %s" % str(r)[:200])
    cats = {c.get("catalogName") for c in r["catalogList"] if c.get("catalogName")}
    return sorted(c for c in cats if not VERSIONED_CAT_RE.search(c))


def scope_categories():
    """已纳入采集范围的分类 = 语料根下的真实目录（排除 . / _ 前缀的本机残留）。"""
    return sorted(d for d in os.listdir(OUT)
                  if os.path.isdir(os.path.join(OUT, d))
                  and not d.startswith((".", "_"))
                  and d not in RESTRICTED)


def _tree(cat, timeout=30):
    """拉取单个分类的目录树，返回 (ok, treeList|错误信息)。"""
    try:
        r = _post(TREE_URL, {"language": "cn", "catalogName": cat,
                             "objectId": "0", "showHide": "0"}, timeout)
    except Exception as e:                                   # noqa
        return False, "http: %s" % e
    if r.get("code") != 0:
        return False, r.get("message", "code=%s" % r.get("code"))
    return True, r["value"]["catalogTreeList"]


def tree_names(tree_list):
    """遍历树，收集所有带 relateDocument 的节点文档名。"""
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


def build():
    """枚举官方全集并刷新清单。返回 (names, unadopted, restricted)。"""
    names, unadopted, restricted = set(), [], []
    try:
        official = official_categories()
    except Exception as e:                                   # noqa
        official = []
        print("[catalog] getAllCatalog 失败(%s)，本轮退化为只枚举现有范围" % e,
              flush=True)
    scope = set(scope_categories())
    todo = [c for c in official if c in scope] or sorted(scope)
    extra = [c for c in official if c not in scope]
    print("[catalog] 官方现役分类 %d：范围内 %d，范围外待采 %d"
          % (len(scope) + len(extra), len(todo), len(extra)), flush=True)

    for i, c in enumerate(todo):
        got, err = fetch_category(c)
        if err:
            restricted.append({"category": c, "reason": err})
            print("[catalog] (%d/%d) %-36s 跳过: %s" % (i + 1, len(todo), c, err),
                  flush=True)
            continue
        names |= got
        print("[catalog] (%d/%d) %-36s %d docs" % (i + 1, len(todo), c, len(got)),
              flush=True)
        time.sleep(0.2)

    for i, c in enumerate(extra):
        got, err = fetch_category(c)
        if err:
            restricted.append({"category": c, "reason": err, "adopted": False})
            continue
        unadopted.append({"category": c, "docs": len(got)})
        print("[catalog] 范围外 (%d/%d) %-34s %d docs"
              % (i + 1, len(extra), c, len(got)), flush=True)
        time.sleep(0.2)

    unadopted.sort(key=lambda r: -r["docs"])
    hdk_io.atomic_write_json(INVENTORY, {
        "builtAt": time.strftime("%Y-%m-%dT%H:%M:%S"),
        "restrictedCategories": restricted,
        "unadoptedCategories": unadopted,
        "names": sorted(names),
    }, ensure_ascii=False, separators=(",", ":"))
    print("[catalog] 范围内清单 %d 篇；范围外待采分类 %d 个共 %d 篇；受限/失败 %d 个 -> %s"
          % (len(names), len(unadopted), sum(r["docs"] for r in unadopted),
             len(restricted), INVENTORY), flush=True)
    if unadopted:
        print("[catalog] 纳入新分类：python hdk.py catalog adopt <分类>（随后 build + incremental）",
              flush=True)
    return names, unadopted, restricted


def _read_inventory():
    if not os.path.exists(INVENTORY):
        return {}
    try:
        with open(INVENTORY, encoding="utf-8") as f:
            return json.load(f)
    except Exception:                                        # noqa
        return {}


def names():
    """范围内清单；文件缺失返回空集（调用方退化为纯搜索发现）。"""
    return set(_read_inventory().get("names", []))


def unadopted():
    """官方存在但未纳入采集范围的分类及其篇数（build 时测得）。"""
    return _read_inventory().get("unadoptedCategories", [])


def inventory_built_at():
    return _read_inventory().get("builtAt", "")


def inventory_age_days():
    """清单年龄（天）；无清单返回 None。"""
    built = inventory_built_at()
    if not built:
        return None
    try:
        t = time.mktime(time.strptime(built, "%Y-%m-%dT%H:%M:%S"))
    except ValueError:
        return None
    return (time.time() - t) / 86400.0


def check_age():
    """清单新鲜度读数（供 crawl/incremental/stats 开头打印）。"""
    age = inventory_age_days()
    if age is None:
        return ("[catalog] 本地无目录清单：确定性新增/删除检测退化为纯概率发现，"
                "请先跑 python hdk.py catalog build")
    if age > INVENTORY_MAX_AGE_DAYS:
        return (f"[catalog] 清单已 {age:.0f} 天前构建（阈值 "
                f"{INVENTORY_MAX_AGE_DAYS} 天）：官方新发布的文档只能靠搜索/链接兜底，"
                f"请重跑 python hdk.py catalog build")
    return None


def disk_names():
    """磁盘语料的 name 集合（读 frontmatter）。"""
    found = set()
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
            m = re.search(r"^name: (.+)$", head, re.M)
            if m:
                found.add(m.group(1).strip())
    return found


def _canon(n):
    """浏览器路写入的 name 可能缺 document/cn/ 前缀；归一后才能与清单对账。"""
    return n if n.startswith("document/cn/") else "document/cn/" + n


def diff(disk=None):
    """清单 vs 磁盘语料双向 diff（两侧同用 crawl 的旧版快照判据），返回 (missing, extra)。

    disk 可传入已有的磁盘 name 集，避免一次对账重复走两遍 30 万个文件。"""
    import crawl                                              # 局部导入避免循环依赖
    inv = {_canon(n) for n in names() if not crawl.is_version_snapshot(n)}
    if disk is None:
        disk = disk_names()
    disk = {_canon(n) for n in disk}
    return inv - disk, disk - inv


def diff_buckets():
    """对账分桶读数：把「漏抓」拆成知识 MCP 不供给与真漏，把「多余」拆成
    浏览器路仓颉语料与真多余（两者都是设计如此，不应混在同一个数里）。"""
    import crawl          # 局部导入避免循环依赖
    import incremental
    disk = disk_names()
    missing, extra = diff(disk)
    unservable = set()
    try:
        with open(crawl.STATE, encoding="utf-8") as f:
            unservable |= set(json.load(f).get("failed", []))
    except Exception:                                    # noqa
        pass
    try:
        unservable |= set(incremental.load_inc_state().get("unreachable", []))
    except Exception:                                    # noqa
        pass
    unservable &= missing
    browser = {n for n in extra
               if len(n.split("/")) > 2
               and n.split("/")[2].startswith(crawl.CANGJIE_NAMESPACE_PREFIX)}
    return {
        "inventory": len(names()),
        "disk": len(disk),
        "missing": len(missing),
        "unservable": len(unservable),
        "true_missing": len(missing) - len(unservable),
        "true_missing_samples": sorted(missing - unservable)[:20],
        "extra": len(extra),
        "browser_owned": len(browser),
        "true_extra": len(extra) - len(browser),
        "true_extra_samples": sorted(extra - browser)[:20],
        "unadopted_categories": len(unadopted()),
        "unadopted_docs": sum(r["docs"] for r in unadopted()),
    }


def report_diff():
    b = diff_buckets()
    print("清单(范围内)          : %d" % b["inventory"])
    print("磁盘语料              : %d" % b["disk"])
    print("漏抓合计              : %d" % b["missing"])
    print("  知识 MCP 不供给     : %d  （合法响应明确不返回，见 incremental.unreachable，"
          "清单换代时重试）" % b["unservable"])
    print("  真漏（待抓/新发布）  : %d" % b["true_missing"])
    for n in b["true_missing_samples"]:
        print("    漏:", n)
    print("多余合计              : %d" % b["extra"])
    print("  浏览器路仓颉语料    : %d  （登录墙分类，设计上不在匿名清单内）" % b["browser_owned"])
    print("  真多余              : %d" % b["true_extra"])
    for n in b["true_extra_samples"]:
        print("    多:", n)
    if b["unadopted_categories"]:
        print("范围外待采分类          : %d 个共 %d 篇（catalog adopt 纳入）"
              % (b["unadopted_categories"], b["unadopted_docs"]))
        for r in unadopted()[:10]:
            print("    %6d  %s" % (r["docs"], r["category"]))


FM_RE = re.compile(r"^---\s*\n(.*?)\n---\s*\n(.*)$", re.DOTALL)


def scan_duplicates():
    """只读扫描：逐字重复组 + 归一后同名多文件。返回 (content_groups, name_groups)。

    不在这里删文件——逐字同文多为官方按 Kit 复制的模板页（彼此是不同文档），
    删任何一个都会丢名字/链接可达性；重复的代价在检索端用内容指纹收敛（见
    src/core/hdk.ts 与 mcp_server.py）。
    """
    import hashlib
    by_hash, by_name = {}, {}
    for root, _, files in os.walk(OUT):
        for fn in files:
            if not fn.endswith(".md") or fn in ("README.md", "manifest.json"):
                continue
            p = os.path.join(root, fn)
            try:
                with open(p, encoding="utf-8", errors="replace") as fh:
                    txt = fh.read()
            except Exception:                                # noqa
                continue
            m = FM_RE.match(txt)
            if not m:
                continue
            fm = {}
            for line in m.group(1).splitlines():
                if ":" in line:
                    k, v = line.split(":", 1)
                    fm[k.strip()] = v.strip()
            name = _canon(fm.get("name", ""))
            if not name:
                continue
            h = hashlib.sha256(((fm.get("title", "") or "") + "\n"
                                + m.group(2)).encode("utf-8")).hexdigest()
            by_hash.setdefault(h, []).append(name)
            by_name.setdefault(name, []).append(os.path.relpath(p, OUT))
    dup = {h: v for h, v in by_hash.items() if len(v) > 1}
    collide = {n: v for n, v in by_name.items() if len(v) > 1}
    return dup, collide


def report_duplicates():
    dup, collide = scan_duplicates()
    redundant = sum(len(v) - 1 for v in dup.values())
    print("逐字重复组: %d，冗余副本 %d 篇（检索端已按内容指纹收敛）" % (len(dup), redundant))
    for h, v in sorted(dup.items(), key=lambda kv: -len(kv[1]))[:10]:
        print("   %2d 篇 | %s" % (len(v), "; ".join(x.replace("document/cn/", "")[-40:]
                                                    for x in v[:3])))
    print("归一后同名多文件: %d 组" % len(collide))
    for n, v in list(collide.items())[:10]:
        print("   ", n, "->", v)


def adopt(category):
    """把官方分类纳入采集范围 = 建出该分类目录（范围以目录存在为准），下次 build 起生效。"""
    c = (category or "").strip().strip("/")
    if not c or c != os.path.basename(c) or VERSIONED_CAT_RE.search(c):
        sys.exit("[catalog] 非法分类名: %r（不得含路径分隔符，且不能是 -V<数字> 历史快照）"
                 % category)
    if c.startswith((".", "_")):
        sys.exit("[catalog] 保留前缀，拒绝: %s" % c)
    d = os.path.join(OUT, c)
    if os.path.isdir(d):
        print("[catalog] %s 已在范围内" % c)
        return
    if c not in official_categories():
        sys.exit("[catalog] 官方分类全集里没有 %s；先跑 catalog build 看范围外清单" % c)
    os.makedirs(d)
    print("[catalog] 已纳入范围: %s（下一步 python hdk.py catalog build 再 incremental）" % c)


def main(action=None, extra=None):
    argv = sys.argv[1:]
    cmd = action or (argv[0] if argv else "build")
    args = list(extra) if extra is not None else argv[1:]
    if cmd == "build":
        build()
    elif cmd == "diff":
        report_diff()
    elif cmd == "dups":
        report_duplicates()
    elif cmd == "adopt":
        if not args:
            sys.exit("[catalog] adopt 需要分类名：python hdk.py catalog adopt <分类>")
        adopt(args[0])
    else:
        sys.exit("[catalog] 未知子命令: %s（build | diff | dups | adopt）" % cmd)


if __name__ == "__main__":
    main()
