import { spawn } from "node:child_process";
import fs from "node:fs";
import { pathToFileURL } from "node:url";

const DEVECO = "C:/Program Files/Huawei/DevEco Studio";
const ACE = DEVECO + "/plugins/openharmony/ace-server/out/index.js";
const root = process.argv[2];
if (!root) throw new Error("usage: probe-lsp.mjs <project-root> [relative-file]");
const file = root + "/" + (process.argv[3] ?? "entry/src/main/ets/pages/Index.ets");

const child = spawn(DEVECO + "/tools/node/node.exe", ["--max-old-space-size=8192", ACE, "--stdio"], {
  stdio: ["pipe", "pipe", "pipe"], windowsHide: true, cwd: DEVECO,
  env: { ...process.env, DEVECO_SDK_HOME: DEVECO + "/sdk/default" },
});
child.stderr.on("data", (d) => process.stderr.write("[ace] " + d));

let buf = "";
child.stdout.setEncoding("utf8");
child.stdout.on("data", (d) => {
  buf += d;
  for (;;) {
    const h = buf.indexOf("\r\n\r\n");
    if (h < 0) return;
    const m = buf.slice(0, h).match(/Content-Length:\s*(\d+)/i);
    if (!m) { buf = buf.slice(h + 4); continue; }
    const len = Number(m[1]);
    if (buf.length < h + 4 + len) return;
    const msg = JSON.parse(buf.slice(h + 4, h + 4 + len));
    buf = buf.slice(h + 4 + len);
    if (msg.method) {
      console.log("[notify/req]", msg.method, JSON.stringify(msg.params ?? {}).slice(0, 200));
      if (msg.id !== undefined) send({ jsonrpc: "2.0", id: msg.id, result: null }); // 响应 server->client 请求
    } else if (msg.id !== undefined) {
      console.log("[resp]", msg.id, JSON.stringify(msg.result ?? msg.error ?? "").slice(0, 200));
    }
  }
});

let id = 100;
const send = (o) => child.stdin.write("Content-Length: " + Buffer.byteLength(JSON.stringify(o)) + "\r\n\r\n" + JSON.stringify(o));
const req = (method, params) => { const i = id++; send({ jsonrpc: "2.0", id: i, method, params }); };

const rootUri = pathToFileURL(root).toString();
const uri = pathToFileURL(file).toString();

req("initialize", {
  processId: process.pid, rootUri, workspaceFolders: [{ uri: rootUri, name: "harmony" }],
  capabilities: { textDocument: { hover: { contentFormat: ["markdown", "plaintext"] } } },
});
setTimeout(() => send({ jsonrpc: "2.0", method: "initialized", params: {} }), 2000);
setTimeout(() => {
  send({ jsonrpc: "2.0", method: "textDocument/didOpen", params: { textDocument: { uri, languageId: "arkts", version: 1, text: fs.readFileSync(file, "utf8") } } });
  console.log("[probe] didOpen Index.ets");
}, 4000);
setTimeout(() => {
  console.log("[probe] hover request...");
  req("textDocument/hover", { textDocument: { uri }, position: { line: 5, character: 10 } });
}, 30000);
setTimeout(() => { console.log("[probe] done"); child.kill(); process.exit(0); }, 75000);