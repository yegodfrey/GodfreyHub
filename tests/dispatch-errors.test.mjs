import test, { before, after } from "node:test";
import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

// index.ts 分发层契约测试（M0·C-4.5）：index.ts 是自启动脚本（import 即起 stdio
// server）且无导出，进程/transport 的接缝与 scripts/smoke.mjs 同款——spawn 编译产物
// dist/index.js，走真实 stdio JSON-RPC。为可测性去改 src/ 的导出面是本测试明确不做的事。
//
// 钉住的契约（ CallToolRequestSchema handler）：
//   1. 未知工具 → result.isError=true + "未知工具: <name>"（不走 JSON-RPC error 通道）；
//   2. zod 校验失败 → result.isError=true + "[<name>] 参数校验失败: <字段路径>: <原因>"
//      （handler 不会被调用，客户端传错类型得到可读错误而不是 NaN/undefined 静默传播）；
//   3. config.disabledTools 通配（"hdk_*"）→ 命中工具不进 tools/list，未命中的照常在列；
//   4. 服务器真实暴露的工具总数 == dist/tools 域清单之和 —— 防"新增域文件漏挂进
//      src/index.ts 的 ALL_TOOLS"（快照测试锁 schema 形状，这里锁清单完整性；
//      域清单与 index.ts 保持人工同步）。
// 环境依赖：本机 node 即可（不碰设备、不碰 DevEco）。用例全部落在错误/清单路径，
// 不执行任何真实工具 handler。

const hubRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const serverEntry = path.join(hubRoot, "dist", "index.js");

function startServer(extraEnv = {}) {
  const child = spawn(process.execPath, [serverEntry], {
    stdio: ["pipe", "pipe", "pipe"],
    env: { ...process.env, ...extraEnv },
  });
  let buf = "";
  const pending = new Map();
  let nextId = 1;
  const stderrTail = [];
  child.stdout.on("data", (chunk) => {
    buf += chunk.toString("utf8");
    let idx;
    while ((idx = buf.indexOf("\n")) >= 0) {
      const line = buf.slice(0, idx).trim();
      buf = buf.slice(idx + 1);
      if (!line) continue;
      try {
        const msg = JSON.parse(line);
        if (msg.id && pending.has(msg.id)) {
          pending.get(msg.id)(msg);
          pending.delete(msg.id);
        }
      } catch { /* 非 JSON 行（server 不应产生，防御性忽略） */ }
    }
  });
  child.stderr.on("data", (chunk) => {
    stderrTail.push(chunk.toString("utf8"));
    if (stderrTail.length > 20) stderrTail.shift();
  });
  return {
    child,
    stderrTail,
    rpc(method, params, { expectRpcError = false } = {}) {
      return new Promise((resolve, reject) => {
        const id = nextId++;
        const timer = setTimeout(() => {
          pending.delete(id);
          reject(new Error(`rpc ${method} 超时（120s）`));
        }, 120_000);
        pending.set(id, (msg) => {
          clearTimeout(timer);
          if (msg.error && !expectRpcError) reject(new Error("JSON-RPC error: " + JSON.stringify(msg.error)));
          else resolve(msg);
        });
        child.stdin.write(JSON.stringify({ jsonrpc: "2.0", id, method, params }) + "\n");
      });
    },
    async initialize() {
      await this.rpc("initialize", {
        protocolVersion: "2024-11-05",
        capabilities: {},
        clientInfo: { name: "dispatch-errors-test", version: "0.0.1" },
      });
      this.child.stdin.write(JSON.stringify({ jsonrpc: "2.0", method: "notifications/initialized" }) + "\n");
    },
    kill() {
      // Windows 上默认 kill() 在部分等待态下会留下孤儿 dist/index.js（实测会卡住
      // 并发测试文件里 hdk/SQLite 相关用例），必须 SIGKILL 等价 TerminateProcess。
      try { child.kill("SIGKILL"); } catch { /* 已退出 */ }
    },
  };
}

// 进程退出兜底：无论测试进程以何种方式结束，不留 dist/index.js 孤儿。
const liveChildren = new Set();
const origSpawn = startServer;
startServer = function patchedStartServer(extraEnv) {
  const handle = origSpawn(extraEnv);
  liveChildren.add(handle.child);
  const originalKill = handle.kill.bind(handle);
  handle.kill = () => {
    originalKill();
    liveChildren.delete(handle.child);
  };
  return handle;
};
process.on("exit", () => {
  for (const child of liveChildren) {
    try { child.kill("SIGKILL"); } catch { /* 已退出 */ }
  }
});

function makeConfigDir(disabledTools) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "gf-hub-config-"));
  fs.writeFileSync(path.join(dir, "local.config.json"), JSON.stringify({
    scanRoots: [],
    projects: {},
    ...(disabledTools ? { disabledTools } : {}),
  }, null, 2));
  return dir;
}

// 与 src/index.ts ALL_TOOLS 同步的域清单（人工同步点，见文件头注释 4）
async function registryTools() {
  const domains = [
    "hub", "emulator", "dev", "device-ui", "docs", "linkage-tools", "ide-tools",
    "hn-evidence", "hn-trace", "hn-ux", "hn-cdp",
  ];
  const all = [];
  for (const domain of domains) {
    const mod = await import(pathToFileURL(path.join(hubRoot, "dist", "tools", `${domain}.js`)).href);
    const exportKey = Object.keys(mod).find((key) => /Tools$/.test(key));
    all.push(...mod[exportKey]);
  }
  return all;
}

// ---------------------------------------------------------------- 默认配置 server

const server = startServer();

before(async () => {
  await server.initialize();
});

after(() => {
  server.kill();
});

test("unknown tool returns isError=true with the tool name, not a JSON-RPC error", async () => {
  const response = await server.rpc("tools/call", {
    name: "definitely_not_a_tool",
    arguments: {},
  });
  const result = response.result;
  assert.equal(result.isError, true, "未知工具必须走 isError 契约而非静默/崩溃");
  assert.match(result.content?.[0]?.text ?? "", /未知工具: definitely_not_a_tool/);
});

test("zod validation failure returns isError=true with the field path, and handler never runs", async () => {
  // ui_click 要求 x/y 为 number；传字符串类型必须在校验层被拦下（带字段路径），
  // 而不是把 NaN 传进 handler 后在设备命令层才炸。
  const response = await server.rpc("tools/call", {
    name: "ui_click",
    arguments: { x: "not-a-number", y: 1 },
  });
  const result = response.result;
  assert.equal(result.isError, true);
  const text = result.content?.[0]?.text ?? "";
  assert.match(text, /\[ui_click\] 参数校验失败/);
  assert.match(text, /x: /, "ZodError 文本必须带字段路径（issue.path），只报 '参数校验失败' 不够定位");
});

test("server exposes exactly the summed domain registry (no silently dropped domain module)", async () => {
  const listed = await server.rpc("tools/list", {});
  const listedNames = listed.result.tools.map((tool) => tool.name).sort();
  const expectedNames = (await registryTools()).map((tool) => tool.name).sort();
  // 真实 local.config.json 当前未配 disabledTools；若未来配置了，此断言应改用
  // GODFREYHUB_CONFIG_DIR 隔离（见 disabledTools 用例的临时 config 做法）。
  assert.deepEqual(listedNames, expectedNames,
    "tools/list 与 dist/tools 域清单之和不一致：新域文件漏挂 ALL_TOOLS，或真实 config 裁剪了工具");
  // 每个暴露给客户端的工具自带 JSON Schema（分发层 toMcpTool 契约）
  for (const tool of listed.result.tools) {
    assert.equal(tool.inputSchema?.type, "object", `${tool.name} 暴露的 inputSchema 必须是 object schema`);
  }
});

// ---------------------------------------------------------------- disabledTools 通配（隔离 config）

test("disabledTools wildcard removes matching tools from tools/list only", async () => {
  const configDir = makeConfigDir(["hdk_*", "emu_create"]);
  const isolated = startServer({ GODFREYHUB_CONFIG_DIR: configDir });
  try {
    await isolated.initialize();
    const listed = await isolated.rpc("tools/list", {});
    const names = listed.result.tools.map((tool) => tool.name);
    const registry = await registryTools();
    const expectedHidden = registry
      .map((tool) => tool.name)
      .filter((name) => name === "emu_create" || name.startsWith("hdk_"))
      .sort();
    for (const hidden of expectedHidden) {
      assert.ok(!names.includes(hidden), `${hidden} 命中 disabledTools，不得出现在 tools/list`);
    }
    assert.ok(names.includes("emu_list"), "通配只裁命中项，emu_list 必须照常在列");
    assert.ok(names.includes("hub_status"), "非命中域不受影响");
    // 分发层现状契约：disabledTools 只裁 tools/list 清单；CallTool 在 ALL_TOOLS 上
    // 查找，被裁工具经 CallTool 仍然可达（这正是本测试只敢用只读 hdk 检索来钉行为的
    // 原因——若拿被裁的 emu_create 做 CallTool 探针，handler 会真的创建模拟器）。
    // 不应得到 "未知工具"（未来若分发层改为同样拦截被裁工具，此断言会红并提醒更新本契约）。
    const reachable = await isolated.rpc("tools/call", {
      name: "hdk_search_documents",
      arguments: { query: "ui", limit: 1 },
    });
    assert.doesNotMatch(
      reachable.result.content?.[0]?.text ?? "",
      /未知工具: hdk_search_documents/,
      "被裁工具经 CallTool 可达是当前分发层现状；若本断言红了说明拦截语义已变，请同步更新本注释");
  } finally {
    isolated.kill();
  }
});
