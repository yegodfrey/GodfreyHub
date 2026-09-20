import fs from "node:fs";
import path from "node:path";

// ace-server 初始化选项：从 .hvigor/cache/project-config.json 还原模块表。
//
// ace-server 的 checkInitializeParams 要求 initializationOptions 含
// rootUri / lspServerWorkspacePath / modules（缺任一即 "Initialization Options
// invalid"，语言服务直接停服、不发任何诊断）。模块表与 DevEco 客户端同源：
// 枚举 allModulePaths（或回退 modulePath），读取各模块 manifest 的 deviceTypes，
// SDK 路径由 etsLoaderPath 推导。字段名以 ace-server 6.1.1.300 实测为准。
//
// 此模块是纯同步校验: 必须在 spawn ace-server 之前调用——配置错误时绝不留下
// 一个已 spawn 但永远不会 initialize 的僵尸进程。

export class ArktsLspError extends Error {}

/** ace-server 独立会话时代的就绪预算常量, 现仍用作 CLI/工具层的默认等待上限。 */
export const ARKTS_INIT_READY_TIMEOUT_MS = 120000;

/** 从任意路径向上查找 ArkTS 工程根(含 build-profile.json5 的目录)。 */
export function findProjectRoot(start: string): string | null {
  let dir = path.resolve(start);
  if (fs.existsSync(path.join(dir, "build-profile.json5"))) return dir;
  if (fs.existsSync(dir) && fs.statSync(dir).isDirectory() === false) dir = path.dirname(dir);
  for (;;) {
    if (fs.existsSync(path.join(dir, "build-profile.json5"))) return dir;
    const parent = path.dirname(dir);
    if (parent === dir) return null;
    dir = parent;
  }
}

/** 工程级根: build-profile.json5 必须含 "modules"(模块级 entry/build-profile.json5 会截胡). */
export function findHarmonyProjectRoot(start: string): string | null {
  let dir = path.resolve(start);
  if (fs.existsSync(dir) && fs.statSync(dir).isFile()) dir = path.dirname(dir);
  for (;;) {
    const bp = path.join(dir, "build-profile.json5");
    if (fs.existsSync(bp)) {
      try {
        if (/"modules"\s*:/.test(fs.readFileSync(bp, "utf8"))) return dir;
      } catch { /* 读不了当作不存在, 继续向上 */ }
    }
    const parent = path.dirname(dir);
    if (parent === dir) return null;
    dir = parent;
  }
}

/** 标准化诊断条目(cpp/CLI 两条检查后端共用)。 */
export interface LspDiagnosticsResult {
  diagnostics: any[];
  /** true = 等待超时仍未收到该文件的诊断（未确认干净，区别于已确认的零错误） */
  pending: boolean;
}

const DEVICE_TYPES: Record<string, number> = {
  liteWearable: 1, wearable: 2, tv: 3, car: 4, phone: 5,
  smartVision: 6, tablet: 7, router: 8, "2in1": 10,
};

interface ProjectConfig {
  modulePath?: string;
  allModulePaths?: string[];
  entryModuleName?: string;
  targetName?: string;
  etsLoaderPath?: string;
  sdkInfo?: string;
  compileSdkVersion?: number | string;
  compatibleSdkVersion?: number | string;
  originCompatibleSdkVersion?: string | number;
  runtimeOS?: string;
  packageManagerType?: string;
  deviceTypes?: string[];
  isFaMode?: boolean;
  useNormalizedOHMUrl?: boolean;
  skipOhModulesLint?: boolean;
  enableStrictCheckOHModule?: boolean;
  disableSendableCheckRules?: unknown[];
  reExportCheckMode?: string;
  projectModel?: Record<string, { moduleName?: string }>;
  [key: string]: unknown;
}

function requireSdkLevel(value: unknown, field: string): string {
  const raw = String(value ?? "").trim();
  const legacyLevel = raw.match(/\((\d+)\)$/)?.[1];
  const unifiedLevel = raw.match(/^(\d+)(?:\.\d+\.\d+)?$/)?.[1];
  const level = legacyLevel ?? unifiedLevel;
  if (!level) {
    throw new ArktsLspError("project-config.json 缺少有效的 " + field + "，请使用当前 API 构建重新生成缓存");
  }
  return level;
}

function readModuleManifest(modulePath: string): {
  deviceTypes?: string[];
  type?: string;
  permissions: string[];
  pages: string[];
} {
  const f = path.join(modulePath, "src", "main", "module.json5");
  let type: string | undefined;
  let permissions: string[] = [];
  let deviceTypes: string[] | undefined;
  if (fs.existsSync(f)) {
    const txt = fs.readFileSync(f, "utf8");
    const d = txt.match(/["']deviceTypes["']\s*:\s*\[([^\]]*)\]/);
    deviceTypes = d ? Array.from(d[1].matchAll(/["'](\w+)["']/g)).map((m) => m[1]) : undefined;
    type = txt.match(/["']type["']\s*:\s*["'](entry|feature|har|shared)["']/)?.[1];
    const req = txt.match(/["']requestPermissions["']\s*:\s*\[([\s\S]*?)\]/);
    if (req) permissions = Array.from(req[1].matchAll(/["'](ohos\.permission\.[\w.]+)["']/g)).map((m) => m[1]);
  }
  let pages: string[] = [];
  try {
    const j = JSON.parse(fs.readFileSync(path.join(modulePath, "src", "main", "resources", "base", "profile", "main_pages.json"), "utf8"));
    if (Array.isArray(j.src)) pages = j.src.filter((s: unknown): s is string => typeof s === "string");
  } catch { /* 无 main_pages 声明 */ }
  return { deviceTypes, type, permissions, pages };
}

function readBundleName(projectRoot: string): string | undefined {
  try {
    const txt = fs.readFileSync(path.join(projectRoot, "AppScope", "app.json5"), "utf8");
    return txt.match(/["']bundleName["']\s*:\s*["']([\w.]+)["']/)?.[1];
  } catch { return undefined; }
}

export function loadDevEcoProjectModules(projectRoot: string): any[] {
  const sourcePath = path.join(projectRoot, ".hvigor", "cache", "project-config.json");
  if (!fs.existsSync(sourcePath)) {
    throw new ArktsLspError(
      "缺少 " + sourcePath + "；先在 DevEco Studio 打开/构建项目（或 hub_build 一次）生成 hvigor 缓存");
  }
  const config: ProjectConfig = JSON.parse(fs.readFileSync(sourcePath, "utf8"));
  const etsLoaderPath = config.etsLoaderPath;
  if (!etsLoaderPath) throw new ArktsLspError("project-config.json 缺少 etsLoaderPath");
  const etsRoot = path.dirname(path.dirname(etsLoaderPath));
  const sdkJsPath = path.join(etsRoot, "api");
  const hmsSdkPath = path.join(path.dirname(path.dirname(etsRoot)), "hms");
  const hosSdkPath = fs.existsSync(hmsSdkPath) ? hmsSdkPath : undefined;
  const sdkInfo = String(config.sdkInfo ?? "");
  const sdkVer = sdkInfo.split(":").find((t) => /^\d+\.\d+\.\d+(\.\d+)?$/.test(t));
  const compileSdkVersion = sdkVer || String(config.compileSdkVersion ?? "");
  const compatibleSdkVersion = String(config.originCompatibleSdkVersion ?? config.compatibleSdkVersion ?? "");
  const compileSdkLevel = requireSdkLevel(config.compileSdkVersion ?? compileSdkVersion, "compileSdkVersion");
  const compatibleSdkLevel = requireSdkLevel(
    config.originCompatibleSdkVersion ?? config.compatibleSdkVersion,
    "compatibleSdkVersion",
  );
  const modulePaths = (Array.isArray(config.allModulePaths) && config.allModulePaths.length
    ? config.allModulePaths
    : [config.modulePath]).filter((p): p is string => Boolean(p));
  if (modulePaths.length === 0) throw new ArktsLspError("project-config.json 未枚举任何模块");
  const bundleName = readBundleName(projectRoot);
  const compileSdkType = sdkInfo.split(":")[3] ?? "Release";
  return modulePaths.map((modulePath) => {
    const manifest = readModuleManifest(modulePath);
    const model = config.projectModel ? config.projectModel[modulePath] : undefined;
    const moduleName = model?.moduleName
      || (modulePath === config.modulePath ? config.entryModuleName : undefined)
      || config.targetName || "entry";
    const deviceTypes = manifest.deviceTypes || config.deviceTypes || ["phone"];
    const fwdModulePath = modulePath.replace(/\\/g, "/");
    return {
      moduleName,
      modulePath: fwdModulePath,
      deviceType: Array.from(new Set(deviceTypes.map((t) => DEVICE_TYPES[t] || 5))),
      aceLoaderPath: etsLoaderPath,
      jsComponentType: "declarative",
      sdkJsPath,
      hosSdkPath,
      compileSdkLevel,
      compileSdkVersion,
      compileSdkType,
      compatibleSdkLevel,
      compatibleSdkVersion,
      apiType: config.isFaMode ? "faMode" : "stageMode",
      runtimeOs: config.runtimeOS,
      packageManagerType: config.packageManagerType,
      // —— 以下与 DevEco IDE 的 initialize 同源(2026-09-20 全量 dump 对照)。
      // 之前缺这些字段时语言服务能装载(onModuleInitFinish 正常)但校验链把
      // 文件当"不可处理"静默跳过, ace-server 从不回诊断。
      unload: false,
      moduleType: manifest.type ?? (modulePath === config.modulePath ? "entry" : "har"),
      compileMode: "jsbundle",
      crossPlatform: false,
      syscap: { NDeviceSysCaps: [], addedSysCaps: [] },
      permissions: manifest.permissions,
      testPermissions: [],
      packageName: manifest.type === "har" || manifest.type === "shared" ? moduleName : (bundleName ?? moduleName),
      moduleJsonParam: { pages: manifest.pages, metaDataList: [] },
      moduleDependencies: { modulePath: fwdModulePath, dependencies: {}, dynamicDependencies: {} },
      globalDeclarationFiles: [],
      appParam: { bundleType: "app" },
      buildProfileParam: {
        productName: "default",
        buildModeName: "debug",
        targetName: String(config.targetName ?? "default"),
        arkTSVersion: "1.1",
        resourceDirectories: [fwdModulePath + "/src/main/resources"],
        targetESVersion: "ES2021",
        maxFlowDepth: 2000,
        caseSensitiveCheck: true,
        tsImportSendable: false,
        compatibleSdkVersionStage: "",
        useNormalizedOHMUrl: Boolean(config.useNormalizedOHMUrl),
        strictCheckerOnly: true,
        reExportCheckMode: String(config.reExportCheckMode ?? "noCheck"),
        skipOhModulesLint: Boolean(config.skipOhModulesLint),
        byteCodeHar: false,
        obfuscationRuleOptionsEnable: false,
        enableStrictCheckOHModule: Boolean(config.enableStrictCheckOHModule),
        apiCompatibilityCheck: "error",
        disableSendableCheckRules: Array.isArray(config.disableSendableCheckRules) ? config.disableSendableCheckRules : [],
        sourceRoots: [],
      },
    };
  });
}
