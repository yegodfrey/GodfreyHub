// content-identity — 行尾无关的内容指纹（本仓唯一实现）。
//
// 为什么需要：本仓工作树的检出形态由使用方的 git 配置决定，同一份 blob 在本机检出为 CRLF、
// 在另一台机器（或 CI）检出为 LF —— 实测本机 42057 个跟踪文件的 `git ls-files --eol` 是
// `w/crlf`，而其 blob 是 LF。凡是"两份内容是不是同一份"的判定，只要按裸字节做，就会被检出
// 形态而不是内容决定：构建戳会凭空失配、"dist 是否新鲜"会随手一抖就翻，而 `git status`
// 完全看不见这个差异（autocrlf 让工作树与 blob 的归一结果相同）。
//
// 约定：canonical 形式 = 去掉 UTF-8 BOM → CRLF 折成 LF → 落单 CR 折成 LF → 其余字节原样。
// 归一只在**字节层**做，不解码文本：0x0D 不可能出现在 UTF-8 续字节位置，所以对任何编码的
// 输入都安全，也不会引入替换字符差异。
//
// 边界：归一是"内容身份"而不是"忽略差异" —— 末尾换行、空行数量与任何非行尾字节差异仍然
// 判不等（tests/build-stamp.test.mjs 有反向样本）。

import crypto from 'node:crypto';
import fs from 'node:fs';

const BOM_LENGTH = 3;
const CR = 0x0d;
const LF = 0x0a;

function toBuffer(value) {
  if (Buffer.isBuffer(value)) return value;
  if (typeof value === 'string') return Buffer.from(value, 'utf8');
  if (value instanceof Uint8Array) return Buffer.from(value.buffer, value.byteOffset, value.byteLength);
  throw new TypeError('canonicalBytes 只接受 Buffer / Uint8Array / string');
}

export function canonicalBytes(value) {
  const source = toBuffer(value);
  let start = 0;
  if (source.length >= BOM_LENGTH &&
      source[0] === 0xef && source[1] === 0xbb && source[2] === 0xbf) {
    start = BOM_LENGTH;
  }
  const out = Buffer.allocUnsafe(source.length - start + 1);
  let written = 0;
  for (let index = start; index < source.length; index++) {
    const byte = source[index];
    if (byte === CR) {
      if (source[index + 1] === LF) index++;
      out[written++] = LF;
    } else {
      out[written++] = byte;
    }
  }
  return out.subarray(0, written);
}

export function contentHash(value) {
  return crypto.createHash('sha256').update(canonicalBytes(value)).digest('hex');
}

export function fileContentHash(file) {
  return contentHash(fs.readFileSync(file));
}
