#!/usr/bin/env node
// dump-tools — 从编译产物里的工具注册表导出权威工具清单(name + description 首行),
// 供 README/SKILL.md 核对, 根除文档与源码漂移(曾发生: lsp_definition/references/hover
// 已退役但文档仍列出, Agent 按文档调用得到"未知工具")。
// 用法: node scripts/dump-tools.mjs [--json]
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const groups = [
  ["hub_*", "tools/hub.js", "hubTools"],
  ["emu_*", "tools/emulator.js", "emulatorTools"],
  ["dev_*/lsp_*", "tools/dev.js", "devTools"],
  ["ui_*/hilog_*/verify", "tools/device-ui.js", "deviceUiTools"],
  ["hdk_*", "tools/docs.js", "docsTools"],
  ["深度联动", "tools/linkage-tools.js", "linkageTools"],
  ["ide_*", "tools/ide-tools.js", "ideTools"],
];

const all = [];
for (const [group, file, exportName] of groups) {
  const mod = await import(pathToFileURL(path.join(root, "dist", file)).href);
  for (const tool of mod[exportName]) {
    all.push({ group, name: tool.name, firstLine: String(tool.description).split("\n")[0] });
  }
}

if (process.argv.includes("--json")) {
  process.stdout.write(JSON.stringify(all, null, 2) + "\n");
} else {
  for (const t of all) process.stdout.write(`${t.group}\t${t.name}\t${t.firstLine}\n`);
  process.stderr.write(`共 ${all.length} 个工具\n`);
}
