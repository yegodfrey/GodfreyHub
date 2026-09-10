import test from "node:test";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { Jieba } from "@node-rs/jieba";

import { segmentQuery } from "../dist/core/hdk.js";

// 跨引擎分词一致性回归测试: Node 查询端(@node-rs/jieba) 与 Python 索引端
// (jieba) 加载同一份 hdk/dict/dict.txt + stopwords.txt, HMM=False。
// 任何一端词典/规则漂移都会让 MATCH 静默失效, 必须逐字一致。

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dictPath = path.join(repoRoot, "hdk", "dict", "dict.txt");
const stopwordsPath = path.join(repoRoot, "hdk", "dict", "stopwords.txt");

// 真实语料代表性句子 + 边界用例
const SAMPLES = [
  "HarmonyOS应用开发指南",
  "getStringSync调用EntryAbility",
  "元服务碰一碰自由流转",
  "分布式软总线状态管理组件",
  "ArkTS状态管理组件化开发",
  "应用沙箱路径数据管理服务",
  "API12请求超时错误码",
  "生命周期回调触发页面转场动画",
  "性能调优内存泄漏线程池消息队列",
  "相机服务扫码服务定位服务",
  "状态的管理的使用。",
  "华为HMS推送服务消息推送",
];

function pythonSegment(samples, search) {
  // Windows 下 argv 传中文会按控制台代码页转码(GBK 乱码), 必须走 stdin(UTF-8)
  const script = [
    "import sys, json",
    "sys.stdin.reconfigure(encoding='utf-8')",
    "sys.stdout.reconfigure(encoding='utf-8')",
    "sys.path.insert(0, r'" + path.join(repoRoot, "hdk") + "')",
    "from indexer import segment_text",
    "data = json.load(sys.stdin)",
    "print(json.dumps([segment_text(s, search=" + (search ? "True" : "False") + ") for s in data], ensure_ascii=False))",
  ].join("; ");
  const out = execFileSync("python", ["-c", script], {
    encoding: "utf8",
    input: JSON.stringify(samples),
    timeout: 120_000,
  });
  return JSON.parse(out);
}

function pythonSubwords(samples) {
  // Python 索引端 cut_for_search 原始输出(子词兜底查询端依赖它 ⊇ 索引词元)
  const script = [
    "import sys, json",
    "sys.stdin.reconfigure(encoding='utf-8')",
    "sys.stdout.reconfigure(encoding='utf-8')",
    "sys.path.insert(0, r'" + path.join(repoRoot, "hdk") + "')",
    "from indexer import jieba",
    "data = json.load(sys.stdin)",
    "print(json.dumps([[w.strip() for w in jieba.cut_for_search(s, HMM=False) if w.strip()] for s in data], ensure_ascii=False))",
  ].join("; ");
  const out = execFileSync("python", ["-c", script], {
    encoding: "utf8",
    input: JSON.stringify(samples),
    timeout: 120_000,
  });
  return JSON.parse(out);
}

test("shared dict files exist and are non-trivial", () => {
  assert.ok(fs.existsSync(dictPath), "dict.txt 缺失");
  assert.ok(fs.existsSync(stopwordsPath), "stopwords.txt 缺失");
  const size = fs.statSync(dictPath).size;
  // 语料贴合自建词典(~1.5 万词, 由 hdk/dict/build_dict.py 生成), 非默认词典全量拷贝
  assert.ok(size > 100_000, "词典异常偏小: " + size);
  assert.ok(size < 2_000_000, "词典异常偏大(应为语料贴合自建): " + size);
});

test("node query segmentation matches python query segmentation verbatim", () => {
  const py = pythonSegment(SAMPLES, false).map((s) => s.split(" ").filter(Boolean));
  for (let i = 0; i < SAMPLES.length; i++) {
    const node = segmentQuery(SAMPLES[i]);
    assert.deepEqual(node, py[i], "分词不一致: " + SAMPLES[i]);
  }
});

test("index-side tokens are a superset of query tokens (AND match never misses)", () => {
  const pyIndex = pythonSegment(SAMPLES, true).map((s) => new Set(s.split(" ").filter(Boolean)));
  for (let i = 0; i < SAMPLES.length; i++) {
    for (const tok of segmentQuery(SAMPLES[i])) {
      assert.ok(pyIndex[i].has(tok), "索引端缺词元 '" + tok + "' (" + SAMPLES[i] + ")");
    }
  }
});

test("camel-split tokens are produced identically by both engines", () => {
  const samples = ["getStringSync", "EntryAbility", "API12", "setWindowLayoutFullScreen", "get_string_sync"];
  const py = pythonSegment(samples, true);
  for (let i = 0; i < samples.length; i++) {
    const node = segmentQuery(samples[i]);
    const pyTokens = py[i].split(" ").filter(Boolean);
    // 查询端必包含原词或拆词中的词元; 索引端必含原词+拆词
    assert.deepEqual(node, pyTokens, "拆词不一致: " + samples[i]);
  }
});

test("common HarmonyOS troubleshooting terms stay whole", () => {
  for (const term of ["扫码", "卡顿", "丢帧", "冻屏", "白屏", "闪退", "首帧", "长列表", "懒加载", "预加载"]) {
    assert.deepEqual(segmentQuery(term), [term], "领域词被拆散: " + term);
  }
});

test("search-mode subwords match python verbatim", () => {
  // 子词兜底(subtokenMatchExpression)依赖 Node cutForSearch 与 Python 索引端
  // cut_for_search 逐字一致, 否则兜底子词不在索引词元集合内, 检索静默失效。
  const py = pythonSubwords(SAMPLES);
  const node = Jieba.withDict(fs.readFileSync(dictPath));
  for (let i = 0; i < SAMPLES.length; i++) {
    const nodeWords = node.cutForSearch(SAMPLES[i], false).map((w) => w.trim()).filter(Boolean);
    assert.deepEqual(nodeWords, py[i], "cutForSearch 不一致: " + SAMPLES[i]);
  }
});
