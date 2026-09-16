import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

import { sourceIdentity, writeBuildStamp, BUILD_STAMP_RELATIVE } from '../scripts/build-stamp.mjs';
import { canonicalBytes, contentHash } from '../scripts/content-identity.mjs';
import { buildFreshness } from '../scripts/verify-build-freshness.mjs';

// 构建新鲜度锁。
//
// 缺陷原状：`dist/` 是 gitignore 的编译产物，没有任何东西判断它是否由**当前**源码构建。
// 2026-09-15 实测：`node --test tests/visual.test.mjs` 直接跑得到 8/10，而 `src/core/visual.ts`
// 已含那两个探针 —— dist/core/visual.js 还是 3 天前的产物（`contrastProbes` 命中 0）。
// 同一份提交因此既能"通过"也能"失败"，取决于本机有没有跑过构建。修复是构建落源码指纹
// （scripts/build-stamp.mjs）+ 判定集中在一个实现（scripts/verify-build-freshness.mjs），
// 由 GFSoftware 的 GfToolchain 在每个家族门禁里执行。
//
// 本套件守三件事：指纹与行尾无关、新鲜判定分得清四种状态、以及当前 checkout 自己必须新鲜。

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

function sandbox() {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'gf-hub-stamp-'));
  fs.mkdirSync(path.join(root, 'src', 'core'), { recursive: true });
  fs.writeFileSync(path.join(root, 'tsconfig.json'), '{"include":["src/**/*.ts"]}\n', 'utf8');
  fs.writeFileSync(path.join(root, 'src', 'core', 'a.ts'), 'export const a = 1;\n', 'utf8');
  return root;
}

test("内容指纹与行尾无关：LF / CRLF / 带 BOM 的同一份源码是同一个指纹", () => {
  const lf = Buffer.from('export const a = 1;\n', 'utf8');
  const crlf = Buffer.from('export const a = 1;\r\n', 'utf8');
  const bom = Buffer.concat([Buffer.from([0xef, 0xbb, 0xbf]), crlf]);
  assert.equal(contentHash(crlf), contentHash(lf), "检出形态不是源码内容");
  assert.equal(contentHash(bom), contentHash(lf), "UTF-8 BOM 也不是源码内容");
  assert.notEqual(contentHash(Buffer.from('export const a = 2;\n', 'utf8')), contentHash(lf),
    "真的改了一个字节就必须换指纹（归一不等于忽略差异）");
  assert.equal(canonicalBytes(Buffer.from('a\r\r\nb', 'utf8')).toString('utf8'), 'a\n\nb',
    "落单 CR 在文本里同样是行终止符，折叠为 LF 不改变语义");
});

test("新鲜判定：缺戳 / 陈旧 / 戳损坏 / 一致 四种状态各自成立", () => {
  const root = sandbox();
  try {
    assert.equal(buildFreshness(root).fresh, false, "没有戳就是未构建");
    assert.match(buildFreshness(root).reason, /缺少 .*build-stamp\.json/);

    writeBuildStamp(root);
    assert.equal(buildFreshness(root).fresh, true, "刚构建完就是新鲜的");

    // 改源码但不重建 → 陈旧（这正是 visual.test.mjs 那次 8/10 的成因）。
    fs.writeFileSync(path.join(root, 'src', 'core', 'a.ts'), 'export const a = 2;\n', 'utf8');
    const stale = buildFreshness(root);
    assert.equal(stale.fresh, false, "源码变了而 dist 没重建，必须判陈旧");
    assert.match(stale.reason, /dist 陈旧/);

    // 只改行尾 → 仍然新鲜（不得因为检出形态翻判定）。
    fs.writeFileSync(path.join(root, 'src', 'core', 'a.ts'), 'export const a = 2;\r\n', 'utf8');
    assert.equal(buildFreshness(root).fresh, false, "内容确实变了，只是把行尾改回去不构成新鲜");
    writeBuildStamp(root);
    fs.writeFileSync(path.join(root, 'src', 'core', 'a.ts'), 'export const a = 2;\n', 'utf8');
    assert.equal(buildFreshness(root).fresh, true, "同一份内容换行尾形态后仍必须判新鲜");

    fs.writeFileSync(path.join(root, BUILD_STAMP_RELATIVE), '{ not json', 'utf8');
    assert.equal(buildFreshness(root).fresh, false, "戳损坏必须判不新鲜而不是抛错");
  } finally {
    fs.rmSync(root, { recursive: true, force: true });
  }
});

test("指纹把路径计入：改名不换内容也要换指纹", () => {
  const root = sandbox();
  try {
    const before = sourceIdentity(root).sourceHash;
    fs.renameSync(path.join(root, 'src', 'core', 'a.ts'), path.join(root, 'src', 'core', 'b.ts'));
    assert.notEqual(sourceIdentity(root).sourceHash, before, "路径入哈希，否则改名会被判成没变");
  } finally {
    fs.rmSync(root, { recursive: true, force: true });
  }
});

test("当前 checkout 自己必须是新鲜的（构建后）", () => {
  const verdict = buildFreshness(repoRoot);
  assert.equal(verdict.fresh, true,
    `${verdict.reason}\n  处置: npm install && npm run build`);
  const cli = spawnSync(process.execPath, ['scripts/verify-build-freshness.mjs', '--root', repoRoot],
    { cwd: repoRoot, encoding: 'utf8' });
  assert.equal(cli.status, 0, `CLI 必须与库函数同判：${cli.stdout}${cli.stderr}`);
});
