import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { randomUUID } from "node:crypto";
import { screenshot, uiClick, uiInputText, uiSwipe, uiKey, startAbility, stopAbility, onlineAllTargets } from "./uitest.js";
import { abortableSleep, throwIfAborted, AbortedError } from "./sync.js";

// verify_ui: 自然语言测试计划 -> 视觉模型(OpenAI 兼容, 需 Function Call)驱动 UI 操作循环
//   截图 -> 模型分析 -> tool_call 返回 action -> 执行 -> 再截图 -> ... -> done(判定)
// 环境变量: UI_VERIFY_BASE_URL / UI_VERIFY_API_KEY / UI_VERIFY_MODEL (未配置时工具报错)
//
// 正确性契约:
//   1) record.json 在 finally 中落盘——中途抛错(网络/设备)也必须保住已执行步骤与截图,
//      否则 log/screenshots 子命令全部失效;
//   2) 全链路可取消——一次校验最长可达 maxSteps × (120s + 截屏), 客户端取消后必须立刻
//      停止设备操作与模型调用, 而不是占着设备跑完;
//   3) 参数解析失败绝不合成 done(禁止假通过)。

export interface VerifyEnv { baseUrl: string; apiKey: string; model: string; }

export function verifyEnv(): VerifyEnv | null {
  const baseUrl = process.env.UI_VERIFY_BASE_URL;
  const apiKey = process.env.UI_VERIFY_API_KEY;
  const model = process.env.UI_VERIFY_MODEL_NAME ?? process.env.UI_VERIFY_MODEL;
  if (!baseUrl || !apiKey || !model) return null;
  return { baseUrl: baseUrl.replace(/\/$/, ""), apiKey, model };
}

interface VerifyRecord {
  id: string;
  testPlan: string;
  steps: Array<{ step: number; action: string; detail: string; ok: boolean }>;
  successPart: string;
  failPart: string;
  finished: boolean;
  createdAt: string;
  error?: string;
}

// 内存索引只做 id -> record 的快速查找, 磁盘才是权威( getRecord 回落读盘 )。
// 长驻进程只增不减会缓慢泄漏, 封顶淘汰最旧条目。
const MAX_IN_MEMORY_RECORDS = 100;
const records = new Map<string, VerifyRecord>();

function rememberRecord(record: VerifyRecord): void {
  records.set(record.id, record);
  if (records.size > MAX_IN_MEMORY_RECORDS) {
    const oldest = records.keys().next().value;
    if (oldest !== undefined) records.delete(oldest);
  }
}

const workDirRoot = path.join(os.tmpdir(), "godfreyhub", "verify");

function workDir(id: string): string {
  const dir = path.join(workDirRoot, id);
  fs.mkdirSync(dir, { recursive: true });
  return dir;
}

function persistRecord(dir: string, record: VerifyRecord): void {
  fs.writeFileSync(path.join(dir, "record.json"), JSON.stringify(record, null, 2), "utf8");
}

const ACTION_TOOL = {
  type: "function" as const,
  function: {
    name: "ui_action",
    description: "在 HarmonyOS 设备上执行一步 UI 操作。每次只执行一步, 然后分析新的截图决定下一步; 全部预期验证完或无法继续时用 done 并在 result 里给出结论。",
    parameters: {
      type: "object",
      properties: {
        action: { type: "string", enum: ["click", "inputText", "swipe", "keyEvent", "done"] },
        x: { type: "number" }, y: { type: "number" },
        x1: { type: "number" }, y1: { type: "number" }, x2: { type: "number" }, y2: { type: "number" },
        text: { type: "string" }, keyCode: { type: "number" },
        observation: { type: "string", description: "对当前截图的观察(简短)" },
        result: { type: "string", description: "action=done 时: 哪些预期通过了(successPart), 哪些失败及原因(failPart)" },
      },
      required: ["action"],
    },
  },
};

async function chat(env: VerifyEnv, body: any, signal: AbortSignal | undefined, timeoutMs = 120000): Promise<any> {
  // 请求级取消与单次调用超时共用一个 controller: 谁先到都中止同一 fetch。
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(new Error("视觉模型调用超时")), timeoutMs);
  const onAbort = () => controller.abort(new AbortedError());
  signal?.addEventListener("abort", onAbort, { once: true });
  try {
    const res = await fetch(env.baseUrl + "/chat/completions", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: "Bearer " + env.apiKey },
      body: JSON.stringify(body),
      signal: controller.signal,
    });
    if (!res.ok) throw new Error("视觉模型 HTTP " + res.status + ": " + (await res.text()).slice(0, 300));
    return await res.json();
  } finally {
    clearTimeout(timer);
    signal?.removeEventListener("abort", onAbort);
  }
}

function stripDataUrl(b64: string): string { return b64.replace(/^data:image\/\w+;base64,/, ""); }

export interface VerifyOpts {
  bundleName: string;
  ability?: string;
  testPlan: string;
  freshStart?: boolean;
  target?: string;
  maxSteps?: number;
  signal?: AbortSignal; // MCP 请求级取消: 中止模型调用与设备操作
}

export async function verifyUi(opts: VerifyOpts): Promise<VerifyRecord> {
  const env = verifyEnv();
  if (!env) throw new Error("verify_ui 未配置: 需环境变量 UI_VERIFY_BASE_URL / UI_VERIFY_API_KEY / UI_VERIFY_MODEL_NAME(OpenAI 兼容视觉模型)");
  throwIfAborted(opts.signal);
  const target = opts.target ?? (await onlineAllTargets())[0];
  if (!target) throw new Error("没有在线设备");
  // UUID: Date.now().toString(36) 在同一毫秒的并发校验会共用 workDir 互相覆盖。
  const id = "v-" + randomUUID();
  const dir = workDir(id);
  const record: VerifyRecord = { id, testPlan: opts.testPlan, steps: [], successPart: "", failPart: "", finished: false, createdAt: new Date().toISOString() };
  rememberRecord(record);

  try {
    if (opts.freshStart) {
      await stopAbility(opts.bundleName, target);
      await abortableSleep(1500, opts.signal);
    }
    if (opts.ability) await startAbility(opts.bundleName, opts.ability, target);

    const messages: any[] = [
      { role: "system", content: "你是 HarmonyOS 应用 UI 自动化测试执行器。给定测试计划与当前屏幕截图, 每次通过 ui_action 执行一步操作并观察结果。坐标基于截图分辨率。完成全部步骤或无法继续时, 用 action=done 收尾, 在 result 中分别总结: 通过的预期(成功部分)与失败/未验证的预期(失败部分, 附原因)。" },
    ];

    const maxSteps = opts.maxSteps ?? 15;
    for (let step = 1; step <= maxSteps; step++) {
      throwIfAborted(opts.signal);
      const shot = path.join(dir, "step_" + String(step).padStart(2, "0") + ".jpeg");
      await screenshot(shot, target);
      const b64 = stripDataUrl(fs.readFileSync(shot).toString("base64"));
      const userPrompt = step === 1
        ? "测试计划:\n" + opts.testPlan + "\n\n当前屏幕(第 1 步):"
        : "上一步已执行。当前屏幕(第 " + step + " 步):";
      messages.push({
        role: "user",
        content: [
          { type: "text", text: userPrompt },
          { type: "image_url", image_url: { url: "data:image/jpeg;base64," + b64 } },
        ],
      });
      const resp = await chat(env, { model: env.model, messages, tools: [ACTION_TOOL], tool_choice: { type: "function", function: { name: "ui_action" } }, max_tokens: 800 }, opts.signal);
      const msg = resp?.choices?.[0]?.message;
      const call = msg?.tool_calls?.[0]?.function;
      if (!call) {
        record.steps.push({ step, action: "none", detail: "模型未返回操作: " + JSON.stringify(msg?.content ?? "").slice(0, 200), ok: false });
        record.failPart = "模型在第 " + step + " 步未返回操作";
        break;
      }
      let action: any;
      try { action = JSON.parse(call.arguments); } catch {
        // 参数解析失败绝不合成 done：按失败收尾，禁止假通过
        record.steps.push({ step, action: "invalid", detail: "模型参数解析失败: " + String(call.arguments ?? "").slice(0, 200), ok: false });
        record.failPart = "模型在第 " + step + " 步返回无法解析的 ui_action 参数，校验按失败终止";
        break;
      }
      const detail = JSON.stringify(action).slice(0, 300);

      if (action.action === "done") {
        record.steps.push({ step, action: "done", detail: String(action.result ?? ""), ok: true });
        record.successPart = String(action.result ?? "");
        record.failPart = "";
        record.finished = true;
        break;
      }
      let ok = true;
      let performed = "";
      try {
        throwIfAborted(opts.signal);
        if (action.action === "click") { performed = await uiClick(Number(action.x), Number(action.y), target); }
        else if (action.action === "inputText") { performed = await uiInputText(Number(action.x), Number(action.y), String(action.text ?? ""), target); }
        else if (action.action === "swipe") { performed = await uiSwipe(Number(action.x1), Number(action.y1), Number(action.x2), Number(action.y2), 600, target); }
        else if (action.action === "keyEvent") { performed = await uiKey(Number(action.keyCode), target); }
        else { ok = false; performed = "未知 action: " + action.action; }
      } catch (e: any) {
        if (e instanceof AbortedError) throw e;
        ok = false;
        performed = "执行失败: " + (e?.message ?? String(e));
      }
      record.steps.push({ step, action: action.action + (action.observation ? " | " + action.observation : ""), detail: performed || detail, ok });
      messages.push({ role: "assistant", content: null, tool_calls: [{ id: msg.tool_calls[0].id, type: "function", function: { name: "ui_action", arguments: call.arguments } }] });
      messages.push({ role: "tool", tool_call_id: msg.tool_calls[0].id, content: performed || "ok" });
      await abortableSleep(1200, opts.signal); // 等界面稳定
    }
    if (!record.finished && record.failPart === "") record.failPart = "达到最大步数(" + maxSteps + ")未收到 done 判定";
    return record;
  } catch (e: any) {
    // 中途抛错(网络/设备/取消): 保留已执行步骤, 记录错误, 失败语义不变。
    record.error = e?.message ?? String(e);
    if (!record.failPart) record.failPart = "校验中止: " + record.error;
    throw e;
  } finally {
    try { persistRecord(dir, record); } catch { /* 落盘失败不影响主错误 */ }
  }
}

export function getRecord(id: string): VerifyRecord | null {
  const mem = records.get(id);
  if (mem) return mem;
  const file = path.join(workDirRoot, id, "record.json");
  if (fs.existsSync(file)) return JSON.parse(fs.readFileSync(file, "utf8"));
  return null;
}

export function recordLog(id: string): string {
  const r = getRecord(id);
  if (!r) return "未找到校验任务: " + id;
  return "测试计划: " + r.testPlan + "\n创建: " + r.createdAt + "\n\n" +
    r.steps.map((s) => "步骤" + s.step + " [" + (s.ok ? "OK" : "FAIL") + "] " + s.action + "\n  " + s.detail).join("\n") +
    "\n\n成功: " + (r.successPart || "(无)") + "\n失败: " + (r.failPart || "(无)");
}

export function saveScreenshots(id: string, dirname: string): string[] {
  const src = path.join(workDirRoot, id);
  if (!fs.existsSync(src)) throw new Error("未找到校验任务: " + id);
  fs.mkdirSync(dirname, { recursive: true });
  const files = fs.readdirSync(src).filter((f) => f.endsWith(".jpeg"));
  for (const f of files) fs.copyFileSync(path.join(src, f), path.join(dirname, id + "_" + f));
  return files.map((f) => path.join(dirname, id + "_" + f));
}
