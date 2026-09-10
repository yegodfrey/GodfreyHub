#!/usr/bin/env node
// 新电脑一键初始化: 检测工具链 -> 装 Node/Python 依赖 -> 构建 -> 重建 FTS 索引 -> 回归验证。
// 跨平台(Windows/macOS/Linux)。用法:
//   node scripts/setup.mjs            # 全流程(含索引重建, 首次约 10-30 分钟)
//   node scripts/setup.mjs --skip-index   # 跳过索引重建(已 clone 过含索引的环境)
// 之后在 MCP 客户端注册 <clone>/dist/index.js, 用 hub_status 验证。
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const win = process.platform === "win32";
const skipIndex = process.argv.includes("--skip-index");

// Windows 下 npm/npx 是 .cmd 包装, 不能直接 exec, 须经 cmd.exe 且参数安全引用
// (与 src/core/proc.ts 的 quoteBatchArgument 同款, 避免 shell 拼接注入)。
function quoteBatchArgument(value) {
  return /^[A-Za-z0-9_./:=+-]+$/.test(value) ? value : '"' + value.replace(/"/g, '""') + '"';
}

function sh(cmd, args, opts = {}) {
  let spawnCmd = cmd;
  let spawnArgs = args;
  if (win && /^(npm|npx)$/.test(cmd)) {
    spawnCmd = process.env.ComSpec || "cmd.exe";
    // /s /c 把整串作为一条命令行; 命令名与参数按需引用(与 proc.ts 一致,
    // 纯字母命令名不加引号, 否则 cmd 会把引号当命令名的一部分)。
    spawnArgs = ["/d", "/s", "/c",
      quoteBatchArgument(cmd) + (args.length ? " " + args.map(quoteBatchArgument).join(" ") : "")];
  }
  const r = spawnSync(spawnCmd, spawnArgs, { cwd: repoRoot, stdio: "inherit", ...opts });
  if (r.error) {
    console.error("[setup] 无法执行: " + cmd + " (" + r.error.message + ")");
    process.exit(1);
  }
  if (r.status !== 0) {
    console.error("[setup] 步骤失败: " + cmd + " " + args.join(" ") + " (exit=" + r.status + ")");
    process.exit(1);
  }
  return r.status;
}

function need(cmd, hint) {
  const r = spawnSync(win ? "where" : "which", [cmd], { encoding: "utf8" });
  if (r.status !== 0) {
    console.error("[setup] 缺少依赖: " + cmd + "。" + hint);
    process.exit(1);
  }
  return r.stdout.split(/\r?\n/)[0].trim();
}

console.log("[setup] GodfreyHub 新电脑初始化: " + repoRoot);
console.log("----------------------------------------");

// 1. 工具链检测
console.log("[setup] 1/6 检测工具链 ...");
need("node", "请先安装 Node.js >= 18 (https://nodejs.org)");
need("python", "请先安装 Python 3 (https://python.org, 索引重建需要)");
need("git", "请先安装 git");
console.log("        node: " + spawnSync("node", ["--version"], { encoding: "utf8" }).stdout.trim());
console.log("        python: " + spawnSync("python", ["--version"], { encoding: "utf8" }).stderr.trim() || "?");
console.log("        git: " + spawnSync("git", ["--version"], { encoding: "utf8" }).stdout.trim());

// 2. Node 依赖(@node-rs/jieba、better-sqlite3 均带预编译产物, 无需本机编译工具链)
console.log("[setup] 2/6 npm install ...");
sh("npm", ["install", "--no-fund", "--no-audit"]);

// 3. Python 依赖(jieba 分词, 索引构建用; 检索本身不依赖 Python)
console.log("[setup] 3/6 pip install -r hdk/requirements.txt ...");
sh("python", ["-m", "pip", "install", "-r", "hdk/requirements.txt", "--quiet"]);

// 4. 构建(TypeScript -> dist/)
console.log("[setup] 4/6 npm run build ...");
sh("npm", ["run", "build"]);

// 5. 重建 FTS 词元索引(不入 git, 新 clone 必须本地重建; 词典版本变更时自动全量)
if (skipIndex) {
  console.log("[setup] 5/6 跳过索引重建(--skip-index)。若本机无 .mcp_cache, 检索前需运行 npm run hdk:index");
} else {
  console.log("[setup] 5/6 重建离线文档索引(约 27k 篇, 视机器性能 10-30 分钟) ...");
  const t0 = Date.now();
  sh("python", ["hdk/hdk.py", "index", "--root", "all"]);
  console.log("[setup]        索引完成, 用时 " + Math.round((Date.now() - t0) / 1000) + "s");
}

// 6. 回归验证
console.log("[setup] 6/6 回归测试 npm test ...");
sh("npm", ["test"]);

console.log("----------------------------------------");
console.log("[setup] 完成。接下来:");
console.log("  1) MCP 客户端注册: command=node, args=[<clone路径>/dist/index.js]");
console.log("  2) 首次调用 hub_status 确认工具链健康(DevEco 未装或非默认路径时设 DEVECO_PATH)");
console.log("  3) hub_scan <你的工程根> 刷新项目注册表(配置记录在包内 config/local.config.json, 不入库)");
console.log("  4) 离线文档检索直接可用: hdk_search_documents 中文按词元/术语整词匹配, 英文支持驼峰拆词");
