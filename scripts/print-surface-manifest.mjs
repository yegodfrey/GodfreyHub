#!/usr/bin/env node
// print-surface-manifest —— Hub 执行面的"自报指纹": 仓库 HEAD + scripts 下 shell/模块/
// runner 执行面逐文件 sha256, 供跨 run / 跨机对比执行面是否漂移。
//
// 边界(如实): 这是观测面, 不是 GFSoftware family 的 runnerSurfaceHash——后者按家族
// 实际消费闭包在家族侧计算(路径+字节), 与本清单不可互相替代。家族钉扎变化仍以
// GfToolchain 的重验重钉流程为准; 本件只回答"这个 run 跑的是哪一版执行面"。
//
// 用法: node scripts/print-surface-manifest.mjs [--root <Hub 根>]   # 输出 markdown 到 stdout
// 退出码: 0 = 已输出; 2 = 用法/基建错误。
import { createHash } from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

function listSurfaceFiles(root) {
  const entries = [];
  const walk = (dir) => {
    for (const item of fs.readdirSync(dir, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name))) {
      const full = path.join(dir, item.name);
      if (item.isDirectory()) {
        if (item.name === 'git-hooks') continue; // 钩子模板非执行面
        walk(full);
      } else if (/\.(ps1|psm1|mjs)$/i.test(item.name)) {
        entries.push(full);
      }
    }
  };
  walk(path.join(root, 'scripts'));
  return entries;
}

function gitHead(root) {
  const r = spawnSync('git', ['rev-parse', 'HEAD'], { cwd: root, encoding: 'utf8', timeout: 15000 });
  return r.status === 0 ? r.stdout.trim() : 'nogit';
}

const args = process.argv.slice(2);
const rootIndex = args.indexOf('--root');
const root = rootIndex >= 0 ? path.resolve(args[rootIndex + 1])
  : path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
if (!fs.existsSync(path.join(root, 'scripts'))) {
  console.error('print-surface-manifest: scripts/ not found under ' + root);
  process.exit(2);
}

const lines = ['### Hub surface manifest', '', `- HEAD: \`${gitHead(root)}\``, '', '| file | sha256 |', '|---|---|'];
for (const file of listSurfaceFiles(root)) {
  const digest = createHash('sha256').update(fs.readFileSync(file)).digest('hex');
  lines.push(`| ${path.relative(root, file).replaceAll('\\', '/')} | \`${digest}\` |`);
}
console.log(lines.join('\n'));
