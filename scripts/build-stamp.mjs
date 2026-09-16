#!/usr/bin/env node
// build-stamp — 把"本次构建依据的源码内容指纹"落到 dist/build-stamp.json。
//
// 为什么需要：`dist/` 是 gitignore 的编译产物，测试与消费方（GFSoftware 的 GfToolchain）
// 都跑在它上面。产物是否新鲜，此前没有任何东西能判断 —— 2026-09-15 实测：`tests/visual.test.mjs`
// 直接 `node --test` 跑出 8/10，而 `src/core/visual.ts` 已含那两个探针；原因是 dist/core/visual.js
// 还是 09-11 的产物（`contrastProbes` 命中 0）。只有先 `tsc` 才 10/10。
// 这正是"结果取决于本机未提交状态"的典型：同一份提交，跑得出 8/10 也跑得出 10/10。
//
// 修法：构建时把源码指纹写进 dist；消费方用 scripts/verify-build-freshness.mjs 比对，
// 陈旧即报错并给出"跑 npm run build"的处置。指纹走 scripts/content-identity.mjs 的
// 行尾无关归一路径 —— 本仓工作树是 CRLF（见该文件说明），裸字节哈希会让同一份源码产生两个戳。
//
// 确定性：无时间戳、无随机数、输入排序 —— 同一份源码永远得到同一个戳，戳变了就等于源码变了。
//
// 用法: node scripts/build-stamp.mjs [--root <Hub 根>]      # 由 package.json 的 build 调用
// 退出码: 0 = 已写入; 2 = 用法/基建错误。

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { contentHash } from './content-identity.mjs';

export const BUILD_STAMP_RELATIVE = 'dist/build-stamp.json';
export const BUILD_STAMP_SCHEMA_VERSION = 1;
// 构建戳的输入 = tsc 的编译输入。tsconfig 换了（target/module/outDir/include）就等于换了
// 一套产物，必须让戳变；package.json 不参与（依赖版本变化由 lockfile 与安装步骤负责，
// 它不改变 tsc 对同一份源码的输出）。
const ROOT_INPUTS = ['tsconfig.json'];
const SOURCE_DIR = 'src';
const SOURCE_EXTENSION = '.ts';

export function collectSourceInputs(root) {
  const inputs = [];
  for (const rel of ROOT_INPUTS) {
    if (fs.existsSync(path.join(root, rel))) inputs.push(rel);
  }
  const sourceRoot = path.join(root, SOURCE_DIR);
  if (!fs.existsSync(sourceRoot)) {
    throw new Error(`build-stamp: 找不到编译输入目录 '${SOURCE_DIR}'（root=${root}）`);
  }
  const walk = (dir) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name))) {
      const absolute = path.join(dir, entry.name);
      if (entry.isDirectory()) { walk(absolute); continue; }
      if (!entry.name.endsWith(SOURCE_EXTENSION)) continue;
      inputs.push(path.relative(root, absolute).replace(/\\/g, '/'));
    }
  };
  walk(sourceRoot);
  return inputs.sort();
}

export function sourceIdentity(root) {
  const inputs = collectSourceInputs(root);
  if (inputs.length === 0) {
    throw new Error(`build-stamp: '${SOURCE_DIR}' 下没有任何 ${SOURCE_EXTENSION} 输入（root=${root}）`);
  }
  // 逐条 `相对路径 \0 内容指纹` 拼接：路径入哈希，避免"改名不换内容"被判成没变。
  const payload = inputs.map((rel) => `${rel}\0${contentHash(fs.readFileSync(path.join(root, rel)))}`).join('\n');
  return {
    sourceHash: contentHash(payload),
    fileCount: inputs.length,
    inputs,
  };
}

export function buildStampDocument(root) {
  const identity = sourceIdentity(root);
  return {
    schemaVersion: BUILD_STAMP_SCHEMA_VERSION,
    generator: 'scripts/build-stamp.mjs',
    sourceHash: identity.sourceHash,
    fileCount: identity.fileCount,
  };
}

export function writeBuildStamp(root) {
  const document = buildStampDocument(root);
  const target = path.join(root, BUILD_STAMP_RELATIVE);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, JSON.stringify(document, null, 2) + '\n', 'utf8');
  return { document, target };
}

function parseArgs(argv) {
  const args = { root: path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..') };
  for (let index = 0; index < argv.length; index++) {
    switch (argv[index]) {
      case '--root': args.root = path.resolve(argv[index + 1]); index++; break;
      default: throw new Error(`build-stamp: unknown argument '${argv[index]}'`);
    }
  }
  return args;
}

const invokedDirectly = process.argv[1] !== undefined &&
  path.resolve(fileURLToPath(import.meta.url)) === path.resolve(process.argv[1]);
if (invokedDirectly) {
  try {
    const args = parseArgs(process.argv.slice(2));
    const { document, target } = writeBuildStamp(args.root);
    process.stdout.write(`build-stamp: ${document.fileCount} source inputs, ` +
      `sourceHash=${document.sourceHash} -> ${path.relative(args.root, target).replace(/\\/g, '/')}\n`);
    process.exit(0);
  } catch (error) {
    process.stderr.write(`build-stamp: ${error.message}\n`);
    process.exit(2);
  }
}
