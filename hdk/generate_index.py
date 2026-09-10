#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""生成各语料库的 manifest + README 索引。

对 indexer.ROOTS 中的每个语料根（harmonyos_docs / cangjie_docs）扫描
<category>/<file>.md，读取 frontmatter（name/title/uri），按分类分组后写入：
  - <root>/manifest.json   (machine-readable)
  - <root>/README.md       (human-readable index with per-category counts)

由 hdk.py manifest 调用；两个语料独立生成，互不覆盖。
"""
import json
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
if HERE not in sys.path:
    sys.path.insert(0, HERE)

from indexer import ROOTS, parse_frontmatter  # noqa: E402

TITLES = {
    "harmonyos": "HarmonyOS Developer 文档下载索引（含鸿蒙仓颉开发文档 cangjie-*）",
    "cangjie": "仓颉语言官方文档下载索引",
}


def build_for(rootname, root):
    if not os.path.isdir(root):
        print(f"[manifest] no dir: {root}")
        return
    cats = {}
    total = 0
    for cat in sorted(os.listdir(root)):
        cpath = os.path.join(root, cat)
        if not os.path.isdir(cpath):
            continue
        if cat in ("_deleted",):
            continue
        docs = []
        for fn in sorted(os.listdir(cpath)):
            if not fn.endswith(".md"):
                continue
            fp = os.path.join(cpath, fn)
            try:
                with open(fp, "r", encoding="utf-8") as f:
                    txt = f.read()
            except Exception:
                continue
            fm = parse_frontmatter(txt)[0]
            docs.append({
                "name": fm.get("name", ""),
                "title": fm.get("title", ""),
                "uri": fm.get("uri", ""),
                "file": os.path.relpath(fp, root).replace("\\", "/"),
            })
            total += 1
        if docs:
            cats[cat] = docs

    manifest = {
        "generated": True,
        "total": total,
        "categories": {c: len(d) for c, d in cats.items()},
        "docs": {c: d for c, d in cats.items()},
    }
    with open(os.path.join(root, "manifest.json"), "w", encoding="utf-8") as f:
        json.dump(manifest, f, ensure_ascii=False, indent=2)

    lines = [f"# {TITLES.get(rootname, rootname)}", "",
             f"总计下载文档：**{total}** 篇，覆盖 **{len(cats)}** 个分类。",
             "", "## 分类统计", ""]
    for c in sorted(cats, key=lambda x: -len(cats[x])):
        lines.append(f"- **{c}**: {len(cats[c])} 篇")
    lines += ["", "## 分类明细", ""]
    for c in sorted(cats, key=lambda x: -len(cats[x])):
        lines.append(f"### {c} ({len(cats[c])})")
        lines.append("")
        for d in cats[c]:
            lines.append(f"- [{d['title'] or d['name']}]({d['uri']}) — `{d['file']}`")
        lines.append("")
    with open(os.path.join(root, "README.md"), "w", encoding="utf-8") as f:
        f.write("\n".join(lines))
    print(f"[manifest] {rootname}: {total} docs across {len(cats)} categories -> "
          f"{os.path.join(root, 'manifest.json')}")


def main():
    for rn, root in ROOTS.items():
        build_for(rn, root)


if __name__ == "__main__":
    main()
