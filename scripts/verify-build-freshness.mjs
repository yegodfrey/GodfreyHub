#!/usr/bin/env node
// verify-build-freshness — 判断 `dist/` 是否由**当前源码**构建。
//
// 消费者：
//   1) GFSoftware 的 family/runner/GfToolchain.psm1 —— 家族门禁在解析控制面时调用本脚本，
//      编译产物陈旧即当场红。这样"家族跑出的结论"永远对应一份新鲜的 Hub 执行面。
//   2) tests/build-stamp.test.mjs —— 正反样本。
//
// 为什么要单独一个脚本而不是在测试里各写一遍：判定必须**只有一个实现**。`dist/` 是
// gitignore 的产物，"跑测的人有没有先构建"决定了同一份提交给出 8/10 还是 10/10；
// 把判定集中在这里，才能让所有入口对"新鲜"的看法一致。
//
// 用法: node scripts/verify-build-freshness.mjs [--root <Hub 根>]
// 退出码: 0 = dist 与当前源码一致; 1 = 陈旧或缺戳; 2 = 用法/基建错误。

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { BUILD_STAMP_RELATIVE, BUILD_STAMP_SCHEMA_VERSION, sourceIdentity } from './build-stamp.mjs';

export function buildFreshness(root) {
  const stampPath = path.join(root, BUILD_STAMP_RELATIVE);
  let stamp = null;
  if (fs.existsSync(stampPath)) {
    try {
      stamp = JSON.parse(fs.readFileSync(stampPath, 'utf8'));
    } catch (error) {
      return { fresh: false, reason: `构建戳无法解析(${error.message})`, expected: null, actual: null };
    }
  }
  if (stamp === null) {
    return {
      fresh: false,
      reason: `缺少 ${BUILD_STAMP_RELATIVE}（dist 是未经过本仓构建流程的产物）`,
      expected: null,
      actual: null,
    };
  }
  if (stamp.schemaVersion !== BUILD_STAMP_SCHEMA_VERSION) {
    return {
      fresh: false,
      reason: `构建戳 schemaVersion=${stamp.schemaVersion}，期望 ${BUILD_STAMP_SCHEMA_VERSION}`,
      expected: null,
      actual: stamp.sourceHash ?? null,
    };
  }
  const identity = sourceIdentity(root);
  if (stamp.sourceHash !== identity.sourceHash) {
    return {
      fresh: false,
      reason: `dist 陈旧：构建戳记的是另一份源码(${String(stamp.sourceHash).slice(0, 16)}…，` +
        `${stamp.fileCount ?? "?"} 个输入)，当前源码指纹为 ${identity.sourceHash.slice(0, 16)}…` +
        `（${identity.fileCount} 个输入）`,
      expected: identity.sourceHash,
      actual: stamp.sourceHash,
    };
  }
  return { fresh: true, reason: "dist 与当前源码一致", expected: identity.sourceHash, actual: stamp.sourceHash };
}

function parseArgs(argv) {
  const args = { root: path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..') };
  for (let index = 0; index < argv.length; index++) {
    switch (argv[index]) {
      case '--root': args.root = path.resolve(argv[index + 1]); index++; break;
      default: throw new Error(`verify-build-freshness: unknown argument '${argv[index]}'`);
    }
  }
  return args;
}

const invokedDirectly = process.argv[1] !== undefined &&
  path.resolve(fileURLToPath(import.meta.url)) === path.resolve(process.argv[1]);
if (invokedDirectly) {
  let args;
  try {
    args = parseArgs(process.argv.slice(2));
  } catch (error) {
    process.stderr.write(`${error.message}\n`);
    process.exit(2);
  }
  let verdict;
  try {
    verdict = buildFreshness(args.root);
  } catch (error) {
    process.stderr.write(`verify-build-freshness: ${error.message}\n`);
    process.exit(2);
  }
  if (!verdict.fresh) {
    process.stderr.write(`verify-build-freshness: ${verdict.reason}\n` +
      `  处置: 在该 checkout 跑 'npm install && npm run build' 后重试。\n`);
    process.exit(1);
  }
  process.stdout.write(`verify-build-freshness: ${verdict.reason} (sourceHash=${String(verdict.expected).slice(0, 16)}…)\n`);
  process.exit(0);
}
