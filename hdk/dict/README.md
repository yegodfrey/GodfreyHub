# HDK 检索词典(hdk/dict/)

## 组成

- `dict.txt`：生效词典(jieba 格式"词 频率 词性")，由 `build_dict.py` 生成，**勿手改**(会被重建覆盖)
- `userdict.txt`：人工维护领域词源清单(频率 100000)，`build_dict.py` 自动并入 dict.txt
- `curated.txt`：人工确认的 PMI 提取新词(审查自 build_dict.py 输出的候选)，自动并入
- `stopwords.txt`：停用词表(索引端/查询端共用)
- `build_dict.py`：语料贴合自建词典生成器

## 词典方案(语料贴合自建)

默认 jieba 词典 49.8 万词在 HDK 语料中仅约 2.5 万词被使用(95% 零出现)。
`build_dict.py` 以"默认词典 ∩ 语料切词命中词"为底座(保留原频率，保证通用切词
能力)，并入 `userdict.txt` + `curated.txt`(频率 100000，整词优先)，产出约
2.5 万词的精简词典：加载 350ms → 几十 ms，领域词切分更准(默认词典会把
"帧率"切为"帧/率"，语料词典切为整词)。评测(120 标题 Recall@10)：全量词典
+ 四层降级 83.3% > jieba 默认词典 80.0% > 旧两层降级 75.0%。查询端 OOV 退化
可控：通用技术词几乎都在语料中，真正语料外词两端同词典一致切碎，靠查询降级兜底。

## 重新生成

```bash
python hdk/dict/build_dict.py --sample 0 --out dict.txt.new    # 全量语料(推荐, 约 1 小时)
python hdk/dict/build_dict.py --sample 8000 --out dict.txt.new # 快速抽样(约 15 分钟, 底座略小)
```

脚本打印 PMI 候选(频次/PMI/独立率/3-gram 包裹过滤)，人工审查后把真词追加进
`curated.txt`。**勿入碎片**：n-gram 滑窗中段(元服/符串/该接 这类 3 字词中段)
统计上无法与真词完全分离，入典会破坏长词切分。确认后覆盖：

```bash
python hdk/dict/build_dict.py --sample 8000 --curated hdk/dict/curated.txt --out hdk/dict/dict.txt.new
# 检查 dict.txt.new 后替换为 dict.txt
```

词典变更后 FTS 索引须全量重建：`indexer.ensure_index` 检测 `meta.dict_hash`
签名变化自动触发；被常驻 MCP 服务占用时记 `meta.rebuild_failed` 并保留完整
tmp，服务重启/句柄释放后自动完成替换，无需手动干预。

## 质量评测

词典/分词/检索改动后跑检索质量对照(自建词典 vs jieba 默认词典、四层降级 vs
旧两层、当前索引 vs tmp 迁移索引), 输出 Recall@10:

```bash
python hdk/tests/eval_retrieval.py --sample 120
```

查询集为语料标题抽样(目标文档已知, 自命中); `--seed` 固定保证可复现。

## 注意

- 加词改 `userdict.txt`/`curated.txt` 后重跑 `build_dict.py`，勿直接改 dict.txt
- 索引端(Python)/查询端(Node `@node-rs/jieba`)加载同一份 dict.txt，改后跑
  `tests/hdk-segment.test.mjs` 确认跨引擎分词逐字一致
