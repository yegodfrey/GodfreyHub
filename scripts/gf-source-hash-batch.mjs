#!/usr/bin/env node
// gf-source-hash-batch.mjs — Get-GfSourceIdentity 的批量哈希臂（gov-rebuild-20261010 rootperf 席，2026-10-12）。
// 调用方=同目录 GfRunEvidence.psm1（GFSoftware 调度席跨仓代账）。stdin 收 UTF-8 行（仓库相对路径，
// 已由调用方 Sort-Object -Unique + 名单侧排除），stdout 按同序逐行吐每文件的 canonical 字节 SHA256
// 大写十六进制，或字面量 deleted（stat 不是常规文件/不存在）。canonical 语义与 GfRunEvidence.psm1
// Get-GfCanonicalBytes 逐字节等价：剥 UTF-8 BOM、CRLF→LF、孤 CR→LF、其余字节原样（只动 0x0D/0x0A，
// UTF-8 续字节不含这两个值，字节层归一=文本层归一）。读冲突按调用方同款 5 次退避重试；持续失败退 3，
// 由 pwsh 侧回退旧的逐文件实现，输出语义不变。
import fs from 'node:fs';
import crypto from 'node:crypto';
import path from 'node:path';

const repoRoot = process.argv[2] ?? '.';
let input = fs.readFileSync(0, 'utf8');
if (input.charCodeAt(0) === 0xfeff) input = input.slice(1); // pwsh [Text.Encoding]::UTF8 管道前导 BOM 双保险
const paths = input.split(/\r?\n/).filter((p) => p.length > 0);

function canonicalBytes(buf) {
  let start = 0;
  if (buf.length >= 3 && buf[0] === 0xef && buf[1] === 0xbb && buf[2] === 0xbf) start = 3;
  const out = Buffer.allocUnsafe(buf.length - start);
  let n = 0;
  for (let i = start; i < buf.length; i += 1) {
    const b = buf[i];
    if (b === 0x0d) {
      if (i + 1 < buf.length && buf[i + 1] === 0x0a) i += 1;
      out[n] = 0x0a;
    } else {
      out[n] = b;
    }
    n += 1;
  }
  return out.subarray(0, n);
}

const sleep = (ms) => Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
const out = [];
for (const rel of paths) {
  const abs = path.join(repoRoot, rel);
  let hash = 'deleted';
  let stat = null;
  try {
    stat = fs.statSync(abs);
  } catch (err) {
    if (err && err.code === 'ENOENT') {
      out.push('deleted');
      continue;
    }
    stat = undefined; // stat 本身出了别的错：落到下面的读重试路径里按调用方语义重试/上抛
  }
  if (stat === null) {
    out.push('deleted');
    continue;
  }
  if (stat !== undefined && !stat.isFile()) {
    out.push('deleted');
    continue;
  }
  let done = false;
  for (let attempt = 1; !done; attempt += 1) {
    try {
      hash = crypto.createHash('sha256').update(canonicalBytes(fs.readFileSync(abs))).digest('hex').toUpperCase();
      done = true;
    } catch (err) {
      if (attempt >= 5) {
        process.stderr.write(`gf-source-hash-batch: ${rel}: ${err && err.message ? err.message : err}\n`);
        process.exit(3);
      }
      sleep(150 * attempt);
    }
  }
  out.push(hash);
}
process.stdout.write(out.length > 0 ? `${out.join('\n')}\n` : '');
