import { existsSync } from "node:fs";
import path from "node:path";

// DevEco Studio 工具链发现: 环境变量优先, 其次各平台常见安装路径
const WIN_DEFAULTS = [
  "C:\\Program Files\\Huawei\\DevEco Studio",
  "D:\\Program Files\\Huawei\\DevEco Studio",
  "C:\\Huawei\\DevEco Studio",
  "D:\\Huawei\\DevEco Studio",
  "D:\\Application\\Huawei\\DevEco Studio",
];
const MAC_DEFAULTS = [
  "/Applications/DevEco-Studio.app/Contents",
  (process.env.HOME ? process.env.HOME + "/Applications/DevEco-Studio.app/Contents" : ""),
];

export interface Toolchain {
  deveco: string | null;
  node: string;
  hvigorwJs: string | null;
  ohpm: string | null;
  hdc: string;
  emulator: string | null;
  clangd: string | null;
}

let cached: Toolchain | null = null;
let cachedAt = 0;
// 会话中升级/新装 DevEco 后不应报旧路径直到重启: 缓存带 TTL(对齐 findDevecoCli 的
// 永久缓存不同——工具链路径可能被安装程序改写, 一分钟级 TTL 足够廉价且自愈),
// 需要立即生效时可调 invalidateToolchain()。
const TOOLCHAIN_CACHE_TTL_MS = 60_000;

export function invalidateToolchain(): void {
  cached = null;
  cachedAt = 0;
}

export function resolveOhpmExecutable(deveco: string | null, isWin = process.platform === "win32"): string | null {
  if (!deveco) return null;
  const executable = path.join(deveco, "tools", "ohpm", "bin", isWin ? "ohpm.bat" : "ohpm");
  return existsSync(executable) ? executable : null;
}

export function resolveClangdExecutable(deveco: string | null, isWin = process.platform === "win32"): string | null {
  if (!deveco) return null;
  const name = isWin ? "clangd.exe" : "clangd";
  const platformDir = isWin ? "win" : process.platform === "darwin" ? "mac" : "linux";
  const candidates = [
    path.join(deveco, "tools", "llvm", "server", "lsp", platformDir, name),
    path.join(deveco, "tools", "llvm", "bin", name),
    path.join(deveco, "tools", "llvm", name),
    path.join(deveco, "sdk", "default", "openharmony", "native", "llvm", "bin", name),
    path.join(deveco, "sdk", "default", "hms", "native", "BiSheng", "bin", name),
  ];
  return candidates.find((candidate) => existsSync(candidate)) ?? null;
}

export function toolchain(): Toolchain {
  if (cached && Date.now() - cachedAt < TOOLCHAIN_CACHE_TTL_MS) return cached;
  const isWin = process.platform === "win32";
  const roots = [
    process.env.DEVECO_PATH,
    process.env.DEVECO_HOME,
    ...(isWin ? WIN_DEFAULTS : MAC_DEFAULTS),
  ].filter((x): x is string => !!x);

  let deveco: string | null = null;
  for (const r of roots) {
    if (existsSync(path.join(r, "tools", "hvigor", "bin", "hvigorw.js"))) { deveco = r; break; }
  }

  const nodeCandidates = deveco
    ? (isWin
      ? [path.join(deveco, "tools", "node", "node.exe")]
      : [path.join(deveco, "tools", "node", "bin", "node")])
    : [];
  let nodeExe = "node";
  for (const c of nodeCandidates) {
    if (existsSync(c)) { nodeExe = c; break; }
  }
  const hvigorwJs = deveco ? path.join(deveco, "tools", "hvigor", "bin", "hvigorw.js") : null;
  const ohpm = resolveOhpmExecutable(deveco, isWin);
  const hdcName = isWin ? "hdc.exe" : "hdc";
  let hdc = deveco ? path.join(deveco, "sdk", "default", "openharmony", "toolchains", hdcName) : "";
  if (!hdc || !existsSync(hdc)) hdc = "hdc";
  const emuName = isWin ? "Emulator.exe" : "Emulator";
  const emulator = deveco && existsSync(path.join(deveco, "tools", "emulator", emuName))
    ? path.join(deveco, "tools", "emulator", emuName)
    : null;

  const clangd = resolveClangdExecutable(deveco, isWin);

  cached = { deveco, node: nodeExe, hvigorwJs, ohpm, hdc, emulator, clangd };
  cachedAt = Date.now();
  return cached;
}
