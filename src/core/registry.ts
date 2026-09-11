import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import JSON5 from "json5";
import { run } from "./proc.js";
import lockfile from "proper-lockfile";

// ohosTest 测试包构建目标(项目级配置, 支持混合项目 ArkTS+Cangjie 的设备侧测试):
//   module    测试模块名(@ohosTest 构建目标, 如 entry / cangjie_test)
//   product   测试包 product(如独立纯仓颉 bundle 的 cangjieTest); 省略=本次构建 product
//   framework Runner 类型, 写入 outputs/ohosTest/test-framework.txt 戳供门禁校验
//   isCangjie hvigor 传 isCangjie=true(带仓颉插件的混合工程构建测试包需要)
export type TestFramework = "ArkTS" | "Cangjie";

export interface TestTarget {
  module: string;
  product?: string;
  framework: TestFramework;
  isCangjie?: boolean;
}

// 扫描覆盖: 某些工程根的“可运行入口模块/注册名”无法从目录结构推断(如 Monorepo
// 的 gallery 宿主工程), 这属于调用方仓库的产品知识。本仓不硬编码任何产品清单——
// 调用方在自己的 local.config.json 里声明 scanOverrides, 扫描时按 bundleName 匹配。
export interface ScanOverride {
  bundle: string;        // 匹配 AppScope/app.json5 的 bundleName
  entryModule?: string;  // 注册/入口模块名(缺省 "entry", 再退到首个模块)
  projectName?: string;  // 注册名(缺省 harmonyRoot 的 basename)
}

// 项目注册表: 自动扫描 HarmonyOS 工程(标志: build-profile.json5 + AppScope/app.json5),
// 元数据(bundle/ability)从工程配置解析。实例约定=设备名实例(deviceInstances, 如
// "Mate 80 Pro"/"Pura X View"); 项目 entry.instance 仅作历史兼容(只有已在线才被选中),
// 不再自动创建/拉起项目同名模拟器。
export interface ProjectEntry {
  name: string;
  repoRoot: string;    // git 仓库根(一键 pull/push 的工作目录)
  harmonyRoot: string; // HarmonyOS 工程根(含 build-profile.json5)
  bundle: string;
  ability: string;
  module: string;      // build-profile module name
  modulePath: string;  // module srcPath relative to harmonyRoot
  target: string;      // module target name
  instance: string;    // 模拟器实例名(历史兼容), 空=不按实例探测
  port?: number;       // 约定 hdc 端口(可选)
  testTargets?: TestTarget[]; // 省略=单目标 {module: entry, framework: ArkTS}
}

export interface HubConfig {
  scanRoots: string[];
  projects: Record<string, ProjectEntry>;
  lastProject?: string;
  hdkRoot?: string;
  disabledTools?: string[]; // 按需裁剪工具(支持 hdk_* 通配), 默认全开
  deviceInstances?: string[]; // 设备名实例(UI 设备池, 如 ["Mate 80 Pro", "Pura X View"])
  scanOverrides?: ScanOverride[]; // 调用方产品知识: 按bundle的入口模块/注册名覆盖
}

// 配置目录在调用时解析(与 DEVECO_PATH/GODFREYHUB_HDK_ROOT 同款 env seam)：默认取包自身的
// config/(dist/core/registry.js 上溯两级即包根)，测试可用 GODFREYHUB_CONFIG_DIR 指向临时
// 目录验证加载/写入语义而不触碰真实注册表。
const DEFAULT_CONFIG_DIR = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)), "..", "..", "config");

function configPaths(): { dir: string; file: string } {
  const dir = process.env.GODFREYHUB_CONFIG_DIR || DEFAULT_CONFIG_DIR;
  return { dir, file: path.join(dir, "local.config.json") };
}

/** 实际生效的注册表文件路径，供状态回报使用，避免调用方硬编码任何仓库位置。 */
export function configFilePath(): string { return configPaths().file; }

function emptyConfig(): HubConfig {
  return { scanRoots: [], projects: {} };
}

// 短 TTL 配置缓存: 高频 handler(lsp_*/dev_* 每次取当前项目)重复读盘纯属浪费。
// 正确性优先——TTL 只有 2s, 且本进程写后立即失效; 缓存按解析后的配置文件路径为键，
// 切换配置目录(如测试临时目录)不会命中上一路径的旧条目。cache 存在即代表该路径
// "已成功加载"(缺失或解析成功)，是 saveConfig 落盘许可的唯一凭据。
// 注意: 跨进程的写入(另一个 MCP 实例)最多 2s 后可见; 需要强一致的读改写一律走
// updateConfig, 它在锁内全量重读, 与该缓存无关。
const CONFIG_CACHE_TTL_MS = 2000;
let configCache: { file: string; at: number; cfg: HubConfig } | null = null;

function normalizeConfig(cfg: HubConfig): HubConfig {
  const projects: Record<string, ProjectEntry> = {};
  for (const [name, entry] of Object.entries(cfg.projects ?? {})) {
    projects[name] = {
      ...entry,
      module: entry.module || "entry",
      modulePath: entry.modulePath || entry.module || "entry",
      target: entry.target || "default",
      instance: entry.instance || entry.name || name,
    };
  }
  return {
    scanRoots: cfg.scanRoots ?? [],
    projects,
    lastProject: cfg.lastProject,
    hdkRoot: cfg.hdkRoot,
    disabledTools: cfg.disabledTools,
    deviceInstances: cfg.deviceInstances,
    scanOverrides: cfg.scanOverrides,
  };
}

// 三态分离: 缺失->空册(合法首用); 存在但读取/解析失败->抛错(fail-loud),
// 调用方因此拿不到伪空基线, 也就无法把空册写回磁盘覆盖真实注册表(BLK-17 根因)。
function readConfig(file: string): HubConfig {
  if (!fs.existsSync(file)) return emptyConfig();
  let raw: string;
  try {
    raw = fs.readFileSync(file, "utf8");
  } catch (e) {
    throw new Error(`GodfreyHub 配置读取失败 (${file}): ${e instanceof Error ? e.message : String(e)}。在修复文件或恢复 .bak 之前拒绝加载, 严禁以空基线覆盖磁盘。`);
  }
  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch (e) {
    throw new Error(`GodfreyHub 配置解析失败 (${file}): ${e instanceof Error ? e.message : String(e)}。若损坏请从 ${file}.bak 恢复; 在成功加载前禁止任何写落盘, 以免静默清空已注册项目/testTargets/deviceInstances。`);
  }
  return normalizeConfig(parsed as HubConfig);
}

export function loadConfig(): HubConfig {
  const { file } = configPaths();
  const now = Date.now();
  if (configCache && configCache.file === file && now - configCache.at < CONFIG_CACHE_TTL_MS) return configCache.cfg;
  const cfg = readConfig(file);
  configCache = { file, at: now, cfg };
  return cfg;
}

// ---------- 并发正确的写路径 ----------
// 注册表是跨 agent 会话(同进程并发请求)与跨进程(多开 IDE 各起一个 MCP server)的共享
// 可变状态, 裸 load->mutate->save 会互相覆盖(尤其 scanRoot 这类跨多个 await 的读改写:
// 基线在 await 间隙过期, save 时把别人刚写入的项目/lastProject 抹掉)。三层防护:
//   1) 进程内: writeChain 把全部 updateConfig 串行化;
//   2) 跨进程: proper-lockfile 对配置文件加锁(带陈锁超时, 持锁进程崩溃后可自动接管);
//   3) 单次写: tmp 文件 + rename 原子替换, 崩溃不会留下半个 JSON(.bak 另存上一版)。
// updateConfig 闭包内拿到的是锁内全量重读的新鲜配置; 闭包内不得再调 loadConfig/
// saveConfig/updateConfig(会读到未提交状态或死锁), 变更一律直接改闭包入参。
let writeChain: Promise<unknown> = Promise.resolve();

const LOCK_OPTIONS = {
  // 陈锁: 持锁进程被强杀后 15s 可被其他进程接管。
  stale: 15000,
  // 抢锁总窗 ~10s: 覆盖正常的短写, 更长占用(如另一进程扫描大目录)则显式失败而不是无限等。
  retries: { retries: 8, factor: 1.6, minTimeout: 100, maxTimeout: 1500 },
  // Windows 上 mkdtemp 的 8.3 短路径/符号链接会让 realpath 校验误报 mismatch。
  realpath: false,
} as const;

/** 单次原子写: .bak 备份上一版 -> tmp 落盘 -> rename 原子替换。仅供本模块与 saveConfig 使用。 */
function writeConfigFile(cfg: HubConfig): void {
  const { dir, file } = configPaths();
  fs.mkdirSync(dir, { recursive: true });
  // 写前把上一版原子备份为单份 .bak(覆盖式): 只有磁盘已有文件才备份, 首写无可备份内容。
  if (fs.existsSync(file)) fs.copyFileSync(file, file + ".bak");
  const tmp = path.join(dir, ".local.config." + process.pid + ".tmp");
  fs.writeFileSync(tmp, JSON.stringify(cfg, null, 2) + "\n", "utf8");
  try {
    fs.renameSync(tmp, file);
  } catch (e) {
    try { fs.rmSync(tmp, { force: true }); } catch { /* 尽力清理 */ }
    throw e;
  }
}

export function saveConfig(cfg: HubConfig): void {
  const { file } = configPaths();
  if (!configCache || configCache.file !== file) {
    throw new Error(`GodfreyHub 配置未成功加载 (${file}), 拒绝落盘覆盖(避免以空/半基线清空在册项目)。请先 loadConfig 确认可读。`);
  }
  writeConfigFile(cfg);
  configCache = { file, at: Date.now(), cfg };
}

/**
 * 串行化的读改写入口: 跨进程锁内全量重读 -> mutator 原地修改 -> 原子落盘。
 * mutator 返回值透传给调用方; mutator 抛错则本次不落盘(其余排队方不受影响)。
 * 这是所有"读-改-写注册表"场景(hub_scan/hub_set_project/实例登记)的唯一正确入口。
 */
export async function updateConfig<T>(mutator: (cfg: HubConfig) => T | Promise<T>): Promise<T> {
  const task = writeChain.then(async () => {
    const { dir, file } = configPaths();
    fs.mkdirSync(dir, { recursive: true });
    const release = await lockfile.lock(file, LOCK_OPTIONS);
    try {
      const cfg = readConfig(file);
      const result = await mutator(cfg);
      writeConfigFile(cfg);
      configCache = { file, at: Date.now(), cfg };
      return result;
    } finally {
      await release();
    }
  });
  writeChain = task.then(() => undefined, () => undefined);
  return task;
}

function readJson5(file: string): any | null {
  // 去掉 UTF-8 BOM: DevEco 生成的 json5 常带 BOM, 会让 JSON5.parse 直接抛错
  try { return JSON5.parse(fs.readFileSync(file, "utf8").replace(/^\uFEFF/, "")); } catch { return null; }
}

const SKIP_DIRS = new Set(["node_modules", "oh_modules", ".git", ".hvigor", "build", "dist", "target", ".idea", ".ciserver", "templates"]);

// 解析单个 harmony 工程根 -> 注册条目(解析失败的字段给保守默认值)。
// overrides 按调用方配置匹配 bundleName, 提供“入口模块/注册名”的产品知识。
export async function inspectProject(
  harmonyRoot: string,
  overrides: ScanOverride[] = [],
): Promise<ProjectEntry | null> {
  if (!fs.existsSync(path.join(harmonyRoot, "build-profile.json5"))) return null;
  const appJson = readJson5(path.join(harmonyRoot, "AppScope", "app.json5"));
  const bundle: string = appJson?.app?.bundleName ?? appJson?.bundleName ?? "";
  const override = overrides.find((o) => o.bundle === bundle);
  const bp = readJson5(path.join(harmonyRoot, "build-profile.json5"));
  const modules = bp?.modules ?? [];
  const entryMod = modules.find((m: any) => m?.name === (override?.entryModule ?? "entry"))
    ?? modules.find((m: any) => m?.name === "entry")
    ?? modules[0];
  const module = String(entryMod?.name ?? "entry");
  const modulePath = path.normalize(String(entryMod?.srcPath ?? module).replace(/^\.\//, ""));
  const target = String(entryMod?.targets?.[0]?.name ?? "default");
  let ability = "EntryAbility";
  const modJson = readJson5(path.join(harmonyRoot, modulePath, "src", "main", "module.json5"));
  ability = modJson?.module?.abilities?.[0]?.name ?? modJson?.module?.extensionAbilities?.[0]?.name ?? ability;

  const gitRes = await run("git", ["rev-parse", "--show-toplevel"], { cwd: harmonyRoot, timeoutMs: 15000 });
  const repoRoot = path.normalize(gitRes.code === 0 ? gitRes.out.trim().split(/\r?\n/)[0] : path.dirname(harmonyRoot));
  // Monorepo 中所有 App 共享同一个 Git 根；项目身份必须来自 Harmony 工程目录，
  // 不能再使用 repoRoot basename，否则五个应用都会被注册为 Harmony。
  // 调用方可用 scanOverrides.projectName 为结构不可推断的工程根命名。
  const name = override?.projectName ?? path.basename(harmonyRoot);
  if (!name || !bundle) return null;
  return { name, repoRoot, harmonyRoot, bundle, ability, module, modulePath, target, instance: name };
}

// 发现阶段(读盘 + git, 可能耗时)在锁外执行; 只把"合并 + 落盘"放进 updateConfig 临界区,
// 不让跨进程锁横跨整个扫描。
async function discoverProjects(resolvedRoot: string, overrides: ScanOverride[]): Promise<ProjectEntry[]> {
  const found: ProjectEntry[] = [];
  const isProjectRoot = (dir: string) =>
    fs.existsSync(path.join(dir, "build-profile.json5")) &&
    fs.existsSync(path.join(dir, "AppScope", "app.json5"));
  const walk = async (dir: string, depth: number): Promise<void> => {
    if (depth < 0) return;
    let entries: fs.Dirent[] = [];
    try { entries = fs.readdirSync(dir, { withFileTypes: true }); } catch { return; }
    for (const e of entries) {
      if (!e.isDirectory() || SKIP_DIRS.has(e.name)) continue;
      const child = path.join(dir, e.name);
      if (isProjectRoot(child)) {
        const entry = await inspectProject(child, overrides);
        if (entry) found.push(entry);
      } else {
        await walk(child, depth - 1);
      }
    }
  };
  // 扫描根本身也可能就是一个工程根（如某调用方的宿主 gallery 工程），
  // 不能只扫描它的子目录。
  if (isProjectRoot(resolvedRoot)) {
    const rootEntry = await inspectProject(resolvedRoot, overrides);
    if (rootEntry) found.push(rootEntry);
  }
  await walk(resolvedRoot, 3);
  return found;
}

function samePath(a: string, b: string): boolean {
  const norm = (p: string) => path.normalize(p);
  return process.platform === "win32"
    ? norm(a).toLowerCase() === norm(b).toLowerCase()
    : norm(a) === norm(b);
}

// 合并发现结果: 同一工程(harmonyRoot 相同, 或旧根已从磁盘消失=整体迁移)原地刷新并保留
// 实例/端口/测试目标等本机覆盖; 不同工程撞名则加后缀, 绝不静默覆盖在册项目。
function mergeDiscovered(cfg: HubConfig, found: ProjectEntry[], resolvedRoot: string): void {
  for (const e of found) {
    const existing = cfg.projects[e.name];
    const isSameProject = existing && (
      samePath(existing.harmonyRoot, e.harmonyRoot) ||
      !fs.existsSync(existing.harmonyRoot) // 旧根已不存在: 视为工程迁移(改名/换盘/换仓库位置)
    );
    if (existing && isSameProject) {
      // 目录重排后直接刷新工程/Git 路径，同时保留实例、端口和测试目标等本机覆盖。
      cfg.projects[e.name] = {
        ...e,
        name: e.name,
        instance: existing.instance || e.instance,
        port: existing.port,
        testTargets: existing.testTargets,
      };
      continue;
    }
    let name = e.name;
    let i = 2;
    while (cfg.projects[name]) { name = e.name + "-" + i; i++; }
    cfg.projects[name] = { ...e, name };
  }
  if (!cfg.scanRoots.includes(resolvedRoot)) cfg.scanRoots.push(resolvedRoot);
}

/**
 * 扫描 root 下(3 层深度)的 HarmonyOS 工程并注册。发现耗时(git rev-parse)在锁外,
 * 注册表合并/落盘在 updateConfig 临界区内: 并发扫描同一目录只会串行合并, 不丢更新。
 * 返回本次发现的工程(不含早已在册的)。
 */
export async function scanRoot(root: string, cfg?: HubConfig): Promise<ProjectEntry[]> {
  const resolvedRoot = path.resolve(root);
  const overrides = (cfg ?? loadConfig()).scanOverrides ?? [];
  const found = await discoverProjects(resolvedRoot, overrides);
  await updateConfig((fresh) => mergeDiscovered(fresh, found, resolvedRoot));
  return found;
}

export function getProject(cfg: HubConfig, name?: string): ProjectEntry | null {
  if (name) return cfg.projects[name] ?? null;
  if (cfg.lastProject && cfg.projects[cfg.lastProject]) return cfg.projects[cfg.lastProject];
  const values = Object.values(cfg.projects);
  return values.length === 1 ? values[0] : null;
}

export function allBundlesExcept(cfg: HubConfig, bundle: string): string[] {
  return Object.values(cfg.projects).map((p) => p.bundle).filter((b) => b && b !== bundle);
}
