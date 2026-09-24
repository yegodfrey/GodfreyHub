// run 作用域 prepare 缓存(构建一次、分发多机)的 meta 读取与字节门。
//
// 同一次运行内, 每个 (App, TestTarget) 只做一次权威 from-zero 干净构建; 其余设备
// 车道经 device-prepare --from-cache <meta.json> 直接安装同一份 HAP 字节。meta.json
// 由 Hub runner(PowerShell)在构建互斥锁内以「临时目录→原子重命名」发布, 记录:
//   haps/testHaps 相对路径 + 逐文件 sha256 + inputsHash + 构建转录摘要(sha256/行数/尾行),
// 其中构建转录摘要把"分发字节"与"权威构建转录"结构性关联起来。
//
// 本模块是消费侧的最后一道闸: 安装前逐文件复核 sha256, 任一不符即抛错——CLI 退出
// 非零后, runner 退回一次完整 provider 构建(绕过缓存), 绝不循环。
import fs from "node:fs";
import path from "node:path";
import { createHash } from "node:crypto";

export const PREPARE_CACHE_META_VERSION = 1;

export interface PrepareCacheArtifact {
  file: string;    // 相对 meta.json 所在目录, 统一 'haps/<basename>' 形态
  sha256: string;
}

export interface PrepareCacheMeta {
  version: number;
  app: string;
  testTarget: string;
  cacheKey?: string;
  builtAtUtc?: string;
  source?: string;
  inputsHash?: string;
  hap: string;
  testHaps: { framework: string; module: string; hap: string }[];
  artifacts?: PrepareCacheArtifact[];
  buildTranscript?: { sha256?: string; lineCount?: number; tail?: string[] };
}

export interface ResolvedPrebuilt {
  hap: string;
  testHaps: { framework: string; module: string; hap: string }[];
  meta: PrepareCacheMeta;
  metaPath: string;
}

export function sha256File(file: string): string {
  const hash = createHash("sha256");
  hash.update(fs.readFileSync(file));
  return hash.digest("hex");
}

function asRecord(value: unknown): Record<string, unknown> | null {
  return (value !== null && typeof value === "object") ? value as Record<string, unknown> : null;
}

export function parsePrepareCacheMeta(raw: string): PrepareCacheMeta {
  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch (e) {
    throw new Error(`prepare-cache meta 不是合法 JSON: ${(e as Error)?.message ?? e}`);
  }
  const meta = asRecord(parsed);
  if (!meta) throw new Error("prepare-cache meta 顶层必须是对象");
  if (meta.version !== PREPARE_CACHE_META_VERSION) {
    throw new Error(`prepare-cache meta 版本不符: 期望 ${PREPARE_CACHE_META_VERSION}, 实际 ${String(meta.version)}`);
  }
  if (typeof meta.hap !== "string" || meta.hap.trim() === "") {
    throw new Error("prepare-cache meta 缺少 hap 相对路径");
  }
  const testHaps: { framework: string; module: string; hap: string }[] = [];
  const rawTests = Array.isArray(meta.testHaps) ? meta.testHaps : [];
  for (const item of rawTests) {
    const t = asRecord(item);
    if (!t || typeof t.hap !== "string" || t.hap.trim() === "") {
      throw new Error("prepare-cache meta 的 testHaps 条目缺少 hap 相对路径");
    }
    testHaps.push({
      framework: String(t.framework ?? ""),
      module: String(t.module ?? ""),
      hap: t.hap,
    });
  }
  const artifacts: PrepareCacheArtifact[] = [];
  if (meta.artifacts !== undefined) {
    if (!Array.isArray(meta.artifacts)) throw new Error("prepare-cache meta 的 artifacts 必须是数组");
    for (const item of meta.artifacts) {
      const a = asRecord(item);
      if (!a || typeof a.file !== "string" || typeof a.sha256 !== "string" ||
          a.file.trim() === "" || !/^[a-f0-9]{64}$/.test(a.sha256.toLowerCase())) {
        throw new Error("prepare-cache meta 的 artifacts 条目必须含 file 与 64 位十六进制 sha256");
      }
      artifacts.push({ file: a.file, sha256: a.sha256.toLowerCase() });
    }
  }
  return {
    version: PREPARE_CACHE_META_VERSION,
    app: String(meta.app ?? ""),
    testTarget: String(meta.testTarget ?? ""),
    cacheKey: meta.cacheKey === undefined ? undefined : String(meta.cacheKey),
    builtAtUtc: meta.builtAtUtc === undefined ? undefined : String(meta.builtAtUtc),
    source: meta.source === undefined ? undefined : String(meta.source),
    inputsHash: meta.inputsHash === undefined ? undefined : String(meta.inputsHash),
    hap: meta.hap,
    testHaps,
    artifacts: meta.artifacts === undefined ? undefined : artifacts,
    buildTranscript: (() => {
      const transcript = asRecord(meta.buildTranscript);
      if (!transcript) return undefined;
      return {
        sha256: transcript.sha256 === undefined ? undefined : String(transcript.sha256),
        lineCount: transcript.lineCount === undefined ? undefined : Number(transcript.lineCount),
        tail: Array.isArray(transcript.tail) ? transcript.tail.map((l) => String(l)) : undefined,
      };
    })(),
  };
}

/**
 * 读取并完全校验一份缓存 meta: 归属匹配、产物在场、逐文件 sha256 复核。
 * 任何一步失败都抛错(消息进 stderr → runner 退回权威构建), 绝不带病安装。
 */
export function loadRunPrepareCacheMeta(
  metaPath: string,
  expect: { app: string; testTarget?: string },
): ResolvedPrebuilt {
  const resolvedMetaPath = path.resolve(metaPath);
  let raw: string;
  try {
    raw = fs.readFileSync(resolvedMetaPath, "utf8");
  } catch (e) {
    throw new Error(`prepare-cache meta 不可读: ${resolvedMetaPath} (${(e as Error)?.message ?? e})`);
  }
  const meta = parsePrepareCacheMeta(raw);
  if (meta.app !== expect.app) {
    throw new Error(`prepare-cache meta 归属不符: meta.app='${meta.app}' ≠ --app '${expect.app}'`);
  }
  if (expect.testTarget !== undefined && meta.testTarget !== expect.testTarget) {
    throw new Error(`prepare-cache meta 归属不符: meta.testTarget='${meta.testTarget}' ≠ --test-target '${expect.testTarget}'`);
  }

  const base = path.dirname(resolvedMetaPath);
  const resolveArtifact = (relative: string, what: string): string => {
    const abs = path.resolve(base, relative);
    // 防路径逃逸: meta 若被改写成指向缓存条目之外的文件, 一律拒绝。
    if (!abs.startsWith(base + path.sep)) {
      throw new Error(`prepare-cache meta 的 ${what} 逃逸出缓存条目: ${relative}`);
    }
    if (!fs.existsSync(abs) || !fs.statSync(abs).isFile()) {
      throw new Error(`prepare-cache 产物缺失 (${what}): ${abs}`);
    }
    return abs;
  };

  const recorded = new Map<string, string>();
  for (const artifact of meta.artifacts ?? []) {
    const abs = path.resolve(base, artifact.file);
    if (!abs.startsWith(base + path.sep)) {
      throw new Error(`prepare-cache meta 的 artifacts 条目逃逸出缓存条目: ${artifact.file}`);
    }
    recorded.set(abs, artifact.sha256);
  }
  if (recorded.size === 0) {
    throw new Error("prepare-cache meta 未登记任何 artifacts 摘要, 无法核验字节");
  }
  const verify = (abs: string, what: string): void => {
    const expectSha = recorded.get(abs);
    if (!expectSha) {
      throw new Error(`prepare-cache meta 未登记 ${what} 的摘要: ${abs}`);
    }
    const actual = sha256File(abs);
    if (actual !== expectSha) {
      throw new Error(`prepare-cache 字节校验失败 (${what}): sha256=${actual} 期望=${expectSha} 文件=${abs}`);
    }
  };

  const hap = resolveArtifact(meta.hap, "生产 HAP");
  verify(hap, "生产 HAP");
  const testHaps = meta.testHaps.map((t) => {
    const abs = resolveArtifact(t.hap, `ohosTest HAP(${t.module})`);
    verify(abs, `ohosTest HAP(${t.module})`);
    return { framework: t.framework, module: t.module, hap: abs };
  });
  return { hap, testHaps, meta, metaPath: resolvedMetaPath };
}
