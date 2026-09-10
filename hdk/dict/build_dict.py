# -*- coding: utf-8 -*-
"""语料贴合自建词典生成器(hdk/dict/dict.txt)。

方案 A: 以"默认 jieba 词典 ∩ 语料切词命中词"为底座(保留原频率, 保证通用
切词能力), 并入 hdk/dict/userdict.txt 人工领域词(频率 100000), 再用
PMI + 独立出现率从语料提取未登录 2 字新词(频率 100000, 整词优先)。

用法: python hdk/dict/build_dict.py [--sample N] [--min-freq 25] [--min-pmi 3.0]
                                      [--min-indep 0.2] [--out dict.txt.new]
默认 --sample 0 = 全量语料; 输出写 <out>, 人工检查后替换 dict.txt。
每次重跑须固定 seed, 保证可复现。
"""
import argparse
import collections
import math
import os
import random
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
REPO = os.path.dirname(os.path.dirname(HERE))          # 仓根
HDK = os.path.join(REPO, "hdk")

import jieba  # noqa: E402

DEFAULT_DICT = os.path.join(os.path.dirname(jieba.__file__), "dict.txt")
USERDICT = os.path.join(HERE, "userdict.txt")
CHUNK_RE = re.compile(r"[\u4e00-\u9fff]{2,12}")          # 连续中文块
HANS = set("".join(chr(c) for c in range(0x4E00, 0x9FFF + 1)))  # 汉字集

CJK = re.compile(r"[\u4e00-\u9fff]{2,}")


def iter_md():
    for root in (os.path.join(HDK, "harmonyos_docs"), os.path.join(HDK, "cangjie_docs")):
        for dp, dirs, fs in os.walk(root):
            dirs[:] = [d for d in dirs if d != "_deleted"]
            for f in fs:
                if f.endswith(".md") and f not in ("README.md", "manifest.json"):
                    yield os.path.join(dp, f)


def load_default_freq():
    jieba.set_dictionary(DEFAULT_DICT)
    jieba.initialize()
    return dict(jieba.dt.FREQ)   # 默认词典全量(含前缀节点)


def load_userdict_words():
    words = set()
    if os.path.exists(USERDICT):
        for line in open(USERDICT, encoding="utf-8"):
            parts = line.split()
            if parts and not line.startswith("#"):
                words.add(parts[0])
    return words


def stats(text):
    """对一篇正文统计: 登录词(切词)与 2-gram/3-gram(总/独立出现)。"""
    hits = set()
    for w in jieba.cut(text, HMM=False):
        if re.fullmatch(CJK.pattern, w):
            hits.add(w)
    total = collections.Counter()
    indep = collections.Counter()
    tri = collections.Counter()
    for chunk in CHUNK_RE.findall(text):
        n = len(chunk)
        for i in range(n - 1):
            g = chunk[i:i + 2]
            total[g] += 1
            left_ok = (i == 0) or (chunk[i - 1] not in HANS)
            right_ok = (i + 2 == n) or (chunk[i + 2] not in HANS)
            if left_ok or right_ok:
                indep[g] += 1
        for i in range(n - 2):
            tri[chunk[i:i + 3]] += 1
    return hits, total, indep, tri


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--sample", type=int, default=0, help="抽样篇数, 0=全量")
    ap.add_argument("--min-freq", type=int, default=25)
    ap.add_argument("--min-pmi", type=float, default=3.0)
    ap.add_argument("--min-indep", type=float, default=0.2)
    ap.add_argument("--curated", default=os.path.join(HERE, "curated.txt"),
                    help="人工确认词文件(每行一词), 强制入典")
    ap.add_argument("--out", default=os.path.join(HERE, "dict.txt.new"))
    args = ap.parse_args()

    curated_words = set()
    if os.path.exists(args.curated):
        for line in open(args.curated, encoding="utf-8"):
            line = line.strip()
            if line and not line.startswith("#"):
                curated_words.add(line.split()[0])

    files = list(iter_md())
    if args.sample and args.sample < len(files):
        random.seed(42)
        files = random.sample(files, args.sample)
    print("语料篇数: %d" % len(files))

    base_freq = load_default_freq()
    user_words = load_userdict_words()
    print("默认词典词条: %d / userdict 词条: %d" % (len(base_freq), len(user_words)))

    used = set()            # 语料切词命中的登录词(底座)
    total = collections.Counter()
    indep = collections.Counter()
    tri = collections.Counter()
    for n, fp in enumerate(files, 1):
        try:
            text = open(fp, encoding="utf-8").read()
        except Exception:
            continue
        body = re.sub(r"^---.*?---", "", text, flags=re.S)
        h, t, i, t3 = stats(body)
        used |= h
        total.update(t)
        indep.update(i)
        tri.update(t3)
        if n % 2000 == 0:
            print("  处理 %d/%d 篇" % (n, len(files)))

    N = sum(total.values())
    uni = collections.Counter()
    for g, c in total.items():
        uni[g[0]] += c
        uni[g[1]] += c

    # 新词候选: 未登录(默认词典+userdict 都没有), 频次/PMI/独立率达标
    # 中段碎片剔除: 若 g 可扩展为高频 3-gram(前接字 g 或 g 后接字, 频次 >= g),
    # 说明 g 是长词中段(元服<-元服务/符串<-字符串), 剔除。
    first_chars = {k[0] for k in tri}   # tri 中出现过的首/尾字(远小于全汉字集)
    last_chars = {k[2] for k in tri}
    new_words = []
    for g, c in total.items():
        if c < args.min_freq or g in base_freq or g in user_words:
            continue
        pmi = math.log(c * N / (uni[g[0]] * uni[g[1]]))
        rate = indep.get(g, 0) / c
        if pmi < args.min_pmi or rate < args.min_indep:
            continue
        left3 = max((tri.get(a + g, 0) for a in first_chars), default=0)
        right3 = max((tri.get(g + b, 0) for b in last_chars), default=0)
        if max(left3, right3) >= c:
            continue   # 被 3-gram 包裹: 长词中段碎片
        new_words.append((g, c, pmi, rate))
    new_words.sort(key=lambda x: -x[1])

    print("\n== 提取结果 ==")
    print("语料命中登录词(底座): %d" % len(used))
    print("新词候选(频次>=%d, PMI>=%.1f, 独立率>=%.2f): %d" %
          (args.min_freq, args.min_pmi, args.min_indep, len(new_words)))
    print("\n== 新词候选(全部, 供 curated.txt 审查) ==")
    for g, c, p, r in new_words:
        print("  %-8s 频次%-6d PMI=%.2f 独立率=%.2f" % (g, c, p, r))

    # 组装词典: 底座(原频率) + userdict + curated(均 100000 整词优先)。
    # 自动候选只打印供人工审查(curated.txt), 不直接入典——n-gram 滑窗碎片
    # (元服/符串/该接 等 3 字词中段)统计上无法与真词完全分离, 入典会破坏切分。
    lines = []
    seen = set()
    for w in sorted(used):
        lines.append("%s %d n" % (w, base_freq[w]))
        seen.add(w)
    for w in sorted(user_words | curated_words - used):
        lines.append("%s 100000 nz" % w)
        seen.add(w)

    with open(args.out, "w", encoding="utf-8") as fh:
        fh.write("\n".join(lines))
        fh.write("\n")
    print("\n新词典写出: %s (%d 词条, %.2f MB)" %
          (args.out, len(lines), os.path.getsize(args.out) / 1e6))


if __name__ == "__main__":
    main()
