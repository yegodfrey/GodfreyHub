import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { z } from "zod";

import { hubTools } from "../dist/tools/hub.js";
import { emulatorTools } from "../dist/tools/emulator.js";
import { devTools } from "../dist/tools/dev.js";
import { deviceUiTools } from "../dist/tools/device-ui.js";
import { docsTools } from "../dist/tools/docs.js";
import { linkageTools } from "../dist/tools/linkage-tools.js";
import { ideTools } from "../dist/tools/ide-tools.js";
import { hnEvidenceTools } from "../dist/tools/hn-evidence.js";
import { hnTraceTools } from "../dist/tools/hn-trace.js";
import { hnUxTools } from "../dist/tools/hn-ux.js";
import { hnCdpTools } from "../dist/tools/hn-cdp.js";

// 工具注册表快照（M0·C-4.5）：注册表拆在 11 个 src/tools/ 文件里，任何一处 zod 入参
// schema 的形状变化都会直接改变客户端可见的 MCP 契约，却只有 smoke 兜底——文档漂移
// （README 引用了早已不存在的工具名）正是这么漏出去的。本测试把 工具名 + 客户端可见
// 的 JSON Schema（z.toJSONSchema，与 src/index.ts toMcpTool 同一投影）钉进快照：
// 名称/schema 漂移即红。
//
// 快照更新方式：删除 tests/tool-registry.snapshot.json 后重跑本测试（或 npm test），
// 会按当前注册表重写快照并让本测试失败一次；提交前必须 git diff 人工审阅快照变化，
// 确认每一处 schema 形状变化都是刻意的。禁止为了转绿而盲目提交快照。
//
// 域清单与 src/index.ts 的 ALL_TOOLS 保持同构（新增域文件必须两侧同步）；
// "注册表清单本身漏挂新域"由 tests/dispatch-errors.test.mjs 的服务器侧计数断言兜底。
const ALL_TOOLS = [
  ...hubTools,
  ...emulatorTools,
  ...devTools,
  ...deviceUiTools,
  ...docsTools,
  ...linkageTools,
  ...ideTools,
  ...hnEvidenceTools,
  ...hnTraceTools,
  ...hnUxTools,
  ...hnCdpTools,
];

const snapshotPath = path.join(path.dirname(fileURLToPath(import.meta.url)), "tool-registry.snapshot.json");

function clientVisibleSchema(def) {
  return z.toJSONSchema(z.object(def.inputSchema));
}

test("tool names are unique across all domain modules", () => {
  const names = ALL_TOOLS.map((tool) => tool.name);
  const duplicates = names.filter((name, i) => names.indexOf(name) !== i);
  assert.deepEqual(duplicates, [], "工具重名必须在测试期暴露（src/index.ts 启动期同名守卫的前置网）");
  assert.ok(names.length > 0, "注册表为空说明域模块 import 失败");
});

test("every tool declares a zod input schema shape projecting to a JSON object schema", () => {
  for (const tool of ALL_TOOLS) {
    assert.equal(typeof tool.name, "string", "每个工具必须有字符串 name");
    assert.ok(tool.description && tool.description.length > 0, `${tool.name} 缺 description`);
    assert.equal(typeof tool.inputSchema, "object", `${tool.name} 缺 inputSchema (zod shape)`);
    assert.notEqual(tool.inputSchema, null, `${tool.name} inputSchema 为 null`);
    const schema = clientVisibleSchema(tool);
    assert.equal(schema.type, "object", `${tool.name} 的投影 schema 必须是 object`);
  }
});

test("tool registry matches the snapshot (delete snapshot + rerun + manual diff to update)", () => {
  const actual = {};
  for (const tool of ALL_TOOLS) actual[tool.name] = clientVisibleSchema(tool);

  if (!fs.existsSync(snapshotPath)) {
    fs.writeFileSync(snapshotPath, JSON.stringify({ tools: actual }, null, 2) + "\n");
    assert.fail(
      `快照不存在，已按当前注册表重写 ${snapshotPath}。` +
      "请 git diff 人工审阅本次注册表变化是刻意的，然后重跑本测试确认。");
  }

  const snapshot = JSON.parse(fs.readFileSync(snapshotPath, "utf8"));
  const snapshotNames = Object.keys(snapshot.tools).sort();
  const actualNames = Object.keys(actual).sort();
  assert.deepEqual(
    { added: actualNames.filter((n) => !snapshotNames.includes(n)),
      removed: snapshotNames.filter((n) => !actualNames.includes(n)) },
    { added: [], removed: [] },
    "工具集合漂移：新增/删除的工具必须先更新快照并人工审阅");
  for (const name of actualNames) {
    assert.deepEqual(
      actual[name], snapshot.tools[name],
      `工具 ${name} 的入参 schema 与快照不一致（防漂移即红；更新方式见本文件头注释）`);
  }
});
