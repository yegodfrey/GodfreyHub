#!/usr/bin/env node
// build-hap —— buildAndDeploy 构建段的薄 CLI: 无注册表环境(CI 容器/自动化脚本)对任意
// HarmonyOS 工程根直接执行 ohpm install -> 可选 clean -> assembleHap -> 产物选取。
// 默认纯构建(--no-deploy 等价); --deploy 时目标解析/签名分类/防污染/设备租约与
// hub_build 完全同一份 buildAndDeploy 事务, 本 CLI 不新增任何构建语义。
// 工程条目经 inspectProject 从盘面推导(与 hub_scan 同一实现, 不另写解析)。
// 输出: stdout 单行 JSON(BuildResult); 退出码 = result.code(用法错误 = 1)。
import { pathToFileURL } from "node:url";
import { buildAndDeploy, resolveTestTarget, type BuildOpts } from "../core/hvigor.js";
import { allBundlesExcept, inspectProject, loadConfig, type ProjectEntry } from "../core/registry.js";

export interface BuildHapArgs {
  root: string;
  deploy: boolean;
  product?: string;
  buildMode?: string;
  clean: boolean;
  noOhpm: boolean;
  skipStart: boolean;
  freshInstall: boolean;
  buildTests: boolean;
  testTarget?: string;
  port?: number;
  device?: string;
  module?: string;
  modulePath?: string;
  target?: string;
  bundle?: string;
  instance?: string;
  name?: string;
  repoRoot?: string;
}

export function parseBuildHapArgs(argv: string[]): BuildHapArgs {
  const value = (name: string): string | undefined => {
    const index = argv.indexOf(name);
    return index >= 0 && argv[index + 1] !== undefined ? argv[index + 1] : undefined;
  };
  const flag = (name: string): boolean => argv.includes(name);
  const root = value("--root");
  if (!root) throw new Error("usage: build-hap --root <harmonyRoot> [--deploy] [--module <m>] [--product <p>] ...");
  const portRaw = value("--port");
  let port: number | undefined;
  if (portRaw !== undefined) {
    port = Number(portRaw);
    if (!Number.isInteger(port)) throw new Error("--port 必须是整数: " + portRaw);
  }
  return {
    root,
    deploy: flag("--deploy"),
    product: value("--product"),
    buildMode: value("--build-mode"),
    clean: flag("--clean"),
    noOhpm: flag("--no-ohpm"),
    skipStart: flag("--skip-start"),
    freshInstall: flag("--fresh-install"),
    buildTests: flag("--build-tests"),
    testTarget: value("--test-target"),
    port,
    device: value("--device"),
    module: value("--module"),
    modulePath: value("--module-path"),
    target: value("--target"),
    bundle: value("--bundle"),
    instance: value("--instance"),
    name: value("--name"),
    repoRoot: value("--repo-root"),
  };
}

export async function buildHapMain(argv: string[]): Promise<number> {
  const args = parseBuildHapArgs(argv);
  const entry: ProjectEntry | null = await inspectProject(args.root);
  if (!entry) {
    throw new Error("invalid harmony root (missing build-profile.json5): " + args.root);
  }
  // 盘面推导之上允许调用方点名覆盖(单模块工程通常零覆盖即可用)。
  if (args.module) entry.module = args.module;
  if (args.modulePath) entry.modulePath = args.modulePath;
  if (args.target) entry.target = args.target;
  if (args.bundle) entry.bundle = args.bundle;
  if (args.instance !== undefined) entry.instance = args.instance;
  if (args.name) entry.name = args.name;
  if (args.repoRoot) entry.repoRoot = args.repoRoot;
  if (args.port !== undefined) entry.port = args.port;
  const opts: BuildOpts = {
    product: args.product ?? "debug",
    buildMode: args.buildMode ?? "debug",
    clean: args.clean,
    noOhpm: args.noOhpm,
    noDeploy: !args.deploy,
    skipStart: args.skipStart,
    freshInstall: args.freshInstall,
    buildTests: args.buildTests,
    testTarget: resolveTestTarget(args.testTarget),
    port: args.port,
    device: args.device,
    // 防污染校验的对账面只在对部署时有意义; 纯构建不触碰注册表配置。
    ...(args.deploy ? { otherBundles: allBundlesExcept(loadConfig(), entry.bundle) } : {}),
  };
  const result = await buildAndDeploy(entry, opts);
  process.stdout.write(JSON.stringify(result) + "\n");
  return result.code;
}

const invokedDirectly = process.argv[1] !== undefined &&
  pathToFileURL(process.argv[1]).href === import.meta.url;
if (invokedDirectly) {
  buildHapMain(process.argv.slice(2))
    .then((code) => { process.exitCode = code; })
    .catch((error) => {
      process.stderr.write((error instanceof Error ? error.stack ?? error.message : String(error)) + "\n");
      process.exitCode = 1;
    });
}
