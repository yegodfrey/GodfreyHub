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
  });
  process.stdout.write(JSON.stringify(result) + "\n");
  if (result.status !== "passed") process.exitCode = 2;
} catch (error) {
  process.stderr.write((error instanceof Error ? error.stack ?? error.message : String(error)) + "\n");
  process.exitCode = 1;
}
