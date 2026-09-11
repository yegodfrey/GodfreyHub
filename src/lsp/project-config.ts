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

function readModuleManifest(modulePath: string): { deviceTypes?: string[] } {
  const f = path.join(modulePath, "src", "main", "module.json5");
  if (!fs.existsSync(f)) return {};
  const txt = fs.readFileSync(f, "utf8");
  const d = txt.match(/["']deviceTypes["']\s*:\s*\[([^\]]*)\]/);
  return d ? { deviceTypes: Array.from(d[1].matchAll(/["'](\w+)["']/g)).map((m) => m[1]) } : {};
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
  return modulePaths.map((modulePath) => {
    const manifest = readModuleManifest(modulePath);
    const model = config.projectModel ? config.projectModel[modulePath] : undefined;
    const moduleName = model?.moduleName
      || (modulePath === config.modulePath ? config.entryModuleName : undefined)
      || config.targetName || "entry";
    const deviceTypes = manifest.deviceTypes || config.deviceTypes || ["phone"];
    return {
      moduleName,
      modulePath: modulePath.replace(/\\/g, "/"),
      deviceType: Array.from(new Set(deviceTypes.map((t) => DEVICE_TYPES[t] || 5))),
      aceLoaderPath: etsLoaderPath,
      jsComponentType: "declarative",
      sdkJsPath,
      hosSdkPath,
      compileSdkLevel,
      compileSdkVersion,
      compatibleSdkLevel,
      compatibleSdkVersion,
      apiType: config.isFaMode ? "faMode" : "stageMode",
      runtimeOs: config.runtimeOS,
      packageManagerType: config.packageManagerType,
      buildProfileParam: {
        useNormalizedOHMUrl: Boolean(config.useNormalizedOHMUrl),
        skipOhModulesLint: Boolean(config.skipOhModulesLint),
        enableStrictCheckOHModule: Boolean(config.enableStrictCheckOHModule),
        disableSendableCheckRules: config.disableSendableCheckRules || [],
        reExportCheckMode: config.reExportCheckMode,
      },
    };
  });
}
