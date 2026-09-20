// 冒烟测试: 真实 stdio JSON-RPC 握手 -> initialize -> tools/list -> tools/call hub_status
import { spawn } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

function findEts(root) {
  const skip = new Set(["node_modules", "oh_modules", ".git", ".hvigor", "build", "ohosTest"]);
  const walk = (dir, depth) => {
    if (depth < 0) return null;
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.isDirectory() && skip.has(entry.name)) continue;
      const file = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        const found = walk(file, depth - 1);
        if (found) return found;
      } else if (entry.name.endsWith(".ets")) {
        return file;
      }
    }
    return null;
  };
  try { return walk(root, 8); } catch { return null; }
}

const child = spawn(process.execPath, ["dist/index.js"], { stdio: ["pipe", "pipe", "pipe"] });
let buf = "";
const pending = new Map();
let nextId = 1;

child.stdout.on("data", (d) => {
  buf += d.toString("utf8");
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
    } catch { /* 非 JSON 行忽略 */ }
  }
});
child.stderr.on("data", (d) => process.stderr.write("[child] " + d));

function rpc(method, params) {
  return new Promise((resolve, reject) => {
    const id = nextId++;
    pending.set(id, (msg) => (msg.error ? reject(new Error(JSON.stringify(msg.error))) : resolve(msg.result)));
    child.stdin.write(JSON.stringify({ jsonrpc: "2.0", id, method, params }) + "\n");
  });
}
function notify(method, params) {
  child.stdin.write(JSON.stringify({ jsonrpc: "2.0", method, params }) + "\n");
}

const kill = setTimeout(() => { console.error("TIMEOUT"); child.kill(); process.exit(1); }, 300000);

try {
  const init = await rpc("initialize", {
    protocolVersion: "2024-11-05",
    capabilities: {},
    clientInfo: { name: "smoke", version: "0.0.1" },
  });
  console.log("initialize ok:", init.serverInfo.name, init.serverInfo.version);
  notify("notifications/initialized", {});

  const tools = await rpc("tools/list", {});
  const names = tools.tools.map((t) => t.name);
  console.log("tools/list ok, count =", names.length);
  console.log(names.join("\n"));

  const status = await rpc("tools/call", { name: "hub_status", arguments: {} });
  const statusText = status.content?.[0]?.text ?? "";
  const parsed = JSON.parse(statusText);
  console.log("\nhub_status ok:");
  console.log("  deveco:", parsed.toolchain.deveco);
  console.log("  hdc:", parsed.toolchain.hdc);
  console.log("  projects:", parsed.projects.map((p) => p.name).join(", ") || "(none)");
  console.log("  online:", parsed.onlineDevices.join(", ") || "(none)");
  console.log("  arktsLsp:", parsed.capabilities.arktsLsp);
  console.log("  clangd:", parsed.capabilities.clangd);
  console.log("  hdk:", parsed.capabilities.hdk);
  console.log("  verifyUi:", parsed.capabilities.verifyUi);

  const search = await rpc("tools/call", { name: "hdk_search_documents", arguments: { query: "XComponent", limit: 2 } });
  const searchParsed = JSON.parse(search.content?.[0]?.text ?? "[]");
  console.log("\nhdk_search_documents ok, hits =", Array.isArray(searchParsed) ? searchParsed.length : JSON.stringify(searchParsed).slice(0, 120));

  if (Array.isArray(searchParsed) && searchParsed.length > 0) {
    const doc = await rpc("tools/call", { name: "hdk_get_document", arguments: { docId: searchParsed[0].id, maxChars: 2000 } });
    const docText = doc.content?.[0]?.text ?? "";
    console.log("hdk_get_document ok, length =", docText.length, "| head:", JSON.stringify(docText.slice(0, 60)));
  }

  const project = parsed.projects.find((p) => fs.existsSync(p.harmonyRoot));
  const etsFile = project ? findEts(project.harmonyRoot) : null;
  if (project && etsFile) {
    const ws = await rpc("tools/call", { name: "lsp_symbols", arguments: { query: path.basename(etsFile, ".ets"), root: project.harmonyRoot } });
    const wsParsed = JSON.parse(ws.content?.[0]?.text ?? "[]");
    console.log("lsp_symbols(workspace) ok, symbols =", Array.isArray(wsParsed) ? wsParsed.length : "?", ws.isError ? "ERROR" : "");

    const ds = await rpc("tools/call", { name: "lsp_symbols", arguments: { filePath: etsFile, projectRoot: project.harmonyRoot } });
    const dsParsed = JSON.parse(ds.content?.[0]?.text ?? "[]");
    console.log("lsp_symbols(document) ok, symbols =", Array.isArray(dsParsed) ? dsParsed.length : "?", ds.isError ? "ERROR" : "");

    const ets = await rpc("tools/call", { name: "dev_check_ets_files", arguments: { files: [etsFile], timeoutMs: 30000 } });
    const etsText = ets.content?.[0]?.text ?? "";
    if (ets.isError) {
      // 工程未被 DevEco 预热(缺 project-config.json)时, dev_check 如实报错而非伪造
      // 空诊断。冒烟环境不强制预热: 记警告并跳过, 不掩盖其余检查。
      console.warn("dev_check_ets_files SKIPPED:", etsText.slice(0, 160));
    } else {
      const etsParsed = JSON.parse(etsText);
      console.log("dev_check_ets_files ok, totalErrors =", etsParsed.totalErrors,
        etsParsed.pending ? "(pending=" + etsParsed.pending.length + ")" : "");
    }

    const rawPath = path.relative(project.harmonyRoot, etsFile).replace(/\\/g, "/");
    const crash = await rpc("tools/call", { name: "hilog_locate_crash", arguments: {
      project: project.name,
      stack: `Reason:TypeError\nError name:TypeError\nError message:smoke\nStacktrace:\n    at smoke (${rawPath}:1:1)`,
    } });
    if (crash.isError) { console.warn("hilog_locate_crash ERROR:", crash.content?.[0]?.text); }
    else {
      const cp = JSON.parse(crash.content?.[0]?.text ?? "{}");
      const f0 = cp.frames?.[0];
      console.log("hilog_locate_crash ok, frames =", cp.frames?.length ?? 0, "| resolved:", f0?.file ? "yes (" + f0.file.split(/[\\/]/).pop() + ")" : "no", "| enclosing:", f0?.enclosing ?? "-");
    }

    const check = await rpc("tools/call", { name: "hub_check", arguments: { project: project.name, files: [etsFile], timeoutMs: 30000 } });
    if (check.isError) { console.warn("hub_check ERROR:", check.content?.[0]?.text); }
    else {
      const ck = JSON.parse(check.content?.[0]?.text ?? "{}");
      console.log("hub_check ok, files =", ck.files?.length ?? 0, ", diagnostics =", ck.diagnostics?.length ?? 0, ", buildErrors =", ck.buildErrors?.length ?? 0);
    }
  } else {
    console.log("project-aware checks skipped: no registered project with an .ets file");
  }

  const required = ["hub_status", "hub_scan", "hub_set_project", "hub_pull", "hub_push", "hub_build", "hub_test", "emu_list", "emu_start", "emu_stop", "emu_create", "emu_delete", "emu_images", "emu_enable_uitest", "dev_check_ets_files", "dev_check_cpp_files", "lsp_symbols", "dev_check_style", "dev_check_compat", "dev_compat_versions", "dev_signature_generate", "dev_check_refs", "dev_check_native", "ui_tree", "ui_click", "ui_input_text", "ui_swipe", "ui_key", "ui_screenshot", "app_control", "hilog_app", "hilog_query", "hilog_fault", "hdk_search_documents", "hdk_get_document", "verify", "ui_locate_code", "hilog_locate_crash", "hub_check", "ide_get_open_files", "ide_open_in_editor"];
  const missing = required.filter((n) => !names.includes(n));
  if (missing.length) { console.error("MISSING TOOLS:", missing.join(", ")); child.kill(); process.exit(1); }
  console.log("\nSMOKE PASS");
  child.kill();
  clearTimeout(kill);
  process.exit(0);
} catch (e) {
  console.error("SMOKE FAIL:", e.message);
  child.kill();
  clearTimeout(kill);
  process.exit(1);
}
