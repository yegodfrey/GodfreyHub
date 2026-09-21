#!/usr/bin/env node
import { compareVisualSpec } from "../core/visual.js";

function value(name: string, required = true): string | undefined {
  const index = process.argv.indexOf(name);
  const found = index >= 0 ? process.argv[index + 1] : undefined;
  if (required && !found) throw new Error("missing " + name);
  return found;
}

try {
  const result = compareVisualSpec({
    specPath: value("--spec")!,
    actualPath: value("--actual")!,
    layoutPath: value("--layout", false),
    outputDir: value("--output")!,
    // 结构性差分(可选): spec 声明 structuralEquivalentTo 时由编排方提供基线 spec、
    // 基线布局树与设备密度, 语义见 src/core/structural-diff.ts。--density 只是 px→vp 的
    // 换算输入, 不是判等键; 等价类判等键 (vp 视口带, 字级档, HAP 摘要) 在 GFSoftware。
    structuralBaselineSpecPath: value("--baseline-spec", false),
    structuralBaselineLayoutPath: value("--baseline-layout", false),
    structuralDensityPixels: value("--density", false)
      ? Number(value("--density", false))
      : undefined,
  });
  process.stdout.write(JSON.stringify(result) + "\n");
  if (result.status !== "passed") process.exitCode = 2;
} catch (error) {
  process.stderr.write((error instanceof Error ? error.stack ?? error.message : String(error)) + "\n");
  process.exitCode = 1;
}
