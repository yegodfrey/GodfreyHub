#!/usr/bin/env node
import { buildAndDeploy, resolveTestTarget } from "../core/hvigor.js";
import { allBundlesExcept, getProject, loadConfig } from "../core/registry.js";

function value(name: string): string {
  const index = process.argv.indexOf(name);
  if (index < 0 || !process.argv[index + 1]) throw new Error("missing " + name);
  return process.argv[index + 1];
}

function optionalValue(name: string): string | undefined {
  const index = process.argv.indexOf(name);
  return index >= 0 && process.argv[index + 1] ? process.argv[index + 1] : undefined;
}

async function main(): Promise<void> {
  const app = value("--app");
  const target = value("--target");
  const testTarget = resolveTestTarget(optionalValue("--test-target"));
  const config = loadConfig();
  const entry = getProject(config, app);
  if (!entry) throw new Error("project is not registered: " + app);
  const result = await buildAndDeploy(entry, {
    // 真机部署门禁(hvigor.ts)只放行 debug 产品(debug 自动测试签名);
    // 模拟器目标由门禁强制 unsigned, debug 产品同样适用。
    product: "debug",
    buildMode: "debug",
    device: target,
    clean: true,
    buildTests: true,
    testTarget,
    freshInstall: true,
    skipStart: true,
    otherBundles: allBundlesExcept(config, entry.bundle),
  });
  process.stdout.write(JSON.stringify(result) + "\n");
  if (result.code !== 0) process.exitCode = result.code;
}

main().catch((error) => {
  process.stderr.write((error instanceof Error ? error.stack ?? error.message : String(error)) + "\n");
  process.exitCode = 1;
});
