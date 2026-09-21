import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

// C-4.1: core/visual-capture.ts 的 hermetic 测试。模块自带 fakeLineStream/流注入缝
// (VisualCaptureDeps.streamDeps / streamCommand), 全部测试不碰真设备。
const capture = await import("../dist/core/visual-capture.js");

const TARGET = "127.0.0.1:55555";

function markerLine(name, anchors) {
  return "12-31 23:59:59.999  I/C0F0( 1234): [" + capture.DEFAULT_VISUAL_MARKER + "] " +
    JSON.stringify({ name, anchors });
}

function layoutWithAnchors(ids) {
  return [{
    attributes: { bounds: "[0,0][100,200]" },
    children: ids.map((id) => ({ attributes: { id }, children: [] })),
  }];
}

// 假 shell/run: 记录设备命令顺序; file recv 落地假 PNG/布局树供 existsSync/锚点校验。
function harness({ lines = [], layouts = {}, stream } = {}) {
  const commands = [];
  const outDir = fs.mkdtempSync(path.join(os.tmpdir(), "visual-capture-"));
  const shellCommand = async (_target, command) => {
    commands.push(tag(command));
    return "";
  };
  const runCommand = async (_command, args) => {
    const remote = args.at(-2);
    const local = args.at(-1);
    const name = path.basename(remote).replace(/\.(png|json)$/, "");
    if (remote.endsWith(".json")) {
      fs.writeFileSync(local, JSON.stringify(layouts[name] ?? {}), "utf8");
    } else {
      fs.writeFileSync(local, Buffer.from("png:" + name));
    }
    commands.push("recv " + path.basename(remote));
    return { code: 0, out: "", timedOut: false, truncated: false };
  };
  const deps = {
    shellCommand,
    runCommand,
    ...(stream ? { streamCommand: stream } : { streamDeps: { lines } }),
  };
  return { commands, outDir, deps };
}

function tag(command) {
  if (command.startsWith("mkdir")) return "mkdir";
  if (command.includes("screenCap")) return "screenCap " + nameOf(command);
  if (command.includes("dumpLayout")) return "dumpLayout " + nameOf(command);
  if (command.startsWith("rm -f")) return "rm " + nameOf(command);
  return "unknown:" + command;
}

function nameOf(command) {
  const quoted = command.match(/'([^']+)'/);
  return path.basename(quoted ? quoted[1] : command).replace(/\.(png|json)$/, "");
}

const ticks = async (n = 3) => {
  for (let i = 0; i < n; i++) await new Promise((resolve) => setImmediate(resolve));
};

test("parseVisualMarkerLine extracts the payload and rejects malformed markers loudly", () => {
  const payload = capture.parseVisualMarkerLine(
    "noise before [GFVISUAL_CHECKPOINT] {\"name\":\"home-dark\",\"anchors\":[\"a.card\",\"  \",5]} noise after");
  assert.deepEqual(payload, { name: "home-dark", anchors: ["a.card"] });

  assert.throws(() => capture.parseVisualMarkerLine("[GFVISUAL_CHECKPOINT] 没有 JSON"),
    /缺少 JSON 载荷/);
  assert.throws(() => capture.parseVisualMarkerLine("[GFVISUAL_CHECKPOINT] {\"broken\":"),
    /载荷不完整|JSON 解析失败/);
  assert.throws(() => capture.parseVisualMarkerLine(
    "[GFVISUAL_CHECKPOINT] {\"name\":\"Bad_Name!\",\"anchors\":[\"a\"]}"),
  /检查点名无效/);
  assert.throws(() => capture.parseVisualMarkerLine(
    "[GFVISUAL_CHECKPOINT] {\"name\":\"ok-name\",\"anchors\":[]}"),
  /锚点清单为空/);
});

test("missingAnchors walks id and identifier attributes across nested trees", () => {
  const raw = [{
    attributes: { id: "a.card" },
    children: [{ attributes: { identifier: "a.badge" }, children: [] }],
  }];
  assert.deepEqual(capture.missingAnchors(raw, ["a.card", "a.badge", "a.missing"]), ["a.missing"]);
});

test("captures are strictly serialized: a second marker queues until the first fully lands", async () => {
  const h = harness({
    lines: [markerLine("c1", ["a.card"]), markerLine("c2", ["a.card"])],
    layouts: { c1: layoutWithAnchors(["a.card"]), c2: layoutWithAnchors(["a.card"]) },
  });
  let releaseC1;
  const gate = new Promise((resolve) => { releaseC1 = resolve; });
  let firstScreenCapStarted = false;
  const innerShell = h.deps.shellCommand;
  const screenCapStarted = [];
  h.deps.shellCommand = async (target, command) => {
    if (command.includes("screenCap")) screenCapStarted.push(nameOf(command));
    if (command.includes("screenCap") && command.includes("c1.png")) {
      firstScreenCapStarted = true;
      await gate; // 第一条捕获停在 screenCap 半途
    }
    return innerShell(target, command);
  };

  const pending = capture.captureVisualGolden({ target: TARGET, outDir: h.outDir }, h.deps);
  await ticks();
  assert.ok(firstScreenCapStarted, "first capture must start");
  // 并发第二个 marker 到达时必须排队: 第一条未落地前不得出现第二条 uitest 客户端。
  assert.deepEqual(screenCapStarted, ["c1"]);

  releaseC1();
  const result = await pending;
  assert.deepEqual(result.captures.map((c) => c.name), ["c1", "c2"]);
  assert.equal(result.timedOut, false);
  // 串行化全序: 第二条 screenCap 严格排在第一条 rm 清理之后, 无任何交错。
  assert.deepEqual(h.commands, [
    "mkdir",
    "screenCap c1", "dumpLayout c1", "recv c1.png", "recv c1.json", "rm c1",
    "screenCap c2", "dumpLayout c2", "recv c2.png", "recv c2.json", "rm c2",
  ]);
  for (const captureEntry of result.captures) {
    assert.equal(captureEntry.missingAnchors.length, 0);
    assert.ok(fs.existsSync(captureEntry.png));
    assert.ok(fs.existsSync(captureEntry.layout));
  }
});

test("no marker within the window is an explicit timeout, and the hilog stream is closed", async () => {
  // 假流镜像 hdcLineStream 的真实契约: close()(杀子进程) -> 'close' 事件 -> onEnd。
  // 模块的超时结算正是走 finish() 关流 -> 流结束 -> settle 这条链(见 captureVisualGolden)。
  let closed = false;
  let end;
  const stream = {
    onLine() {},
    onEnd(callback) { end = callback; },
    close() {
      closed = true;
      setImmediate(() => end());
    },
  };
  const h = harness({ stream: () => stream });
  await assert.rejects(
    () => capture.captureVisualGolden({ target: TARGET, outDir: h.outDir, timeoutMs: 1000 }, h.deps),
    /超时未捕获到任何 GFVISUAL_CHECKPOINT marker/);
  assert.equal(closed, true, "timeout must close the hilog stream");
});

test("anchor drift inside the capture window fails explicitly and keeps the artifacts", async () => {
  const h = harness({
    lines: [markerLine("drift", ["a.card", "a.missing"])],
    layouts: { drift: layoutWithAnchors(["a.card"]) },
  });
  await assert.rejects(
    () => capture.captureVisualGolden({ target: TARGET, outDir: h.outDir }, h.deps),
    (error) => {
      assert.match(error.message, /界面已漂移/);
      assert.match(error.message, /drift 缺锚点 a\.missing/);
      return true;
    });
  // 漂移失败的产物必须保住(供人工复核), 不允许静默清理。
  assert.ok(fs.existsSync(path.join(h.outDir, "drift.png")));
  assert.ok(fs.existsSync(path.join(h.outDir, "drift.json")));
});

test("a hilog stream with zero markers can never resolve into an empty success", async () => {
  // 流直接结束: 显式失败, 绝不产出 captures=[] 的"成功"结果。
  const emptyStream = harness({ lines: [] });
  await assert.rejects(
    () => capture.captureVisualGolden({ target: TARGET, outDir: emptyStream.outDir }, emptyStream.deps),
    /HiLog 流已结束且未捕获到任何/);

  // 流里有噪声但无 marker: 同样显式失败。
  const noisyStream = harness({ lines: ["01-01 00:00:00.000  I/A000( 999): unrelated line"] });
  await assert.rejects(
    () => capture.captureVisualGolden({ target: TARGET, outDir: noisyStream.outDir }, noisyStream.deps),
    /HiLog 流已结束且未捕获到任何/);

  // marker 文本在场但载荷损坏: 解析错误按失败收尾, 不算捕获成功。
  const brokenMarker = harness({ lines: ["[GFVISUAL_CHECKPOINT] not-json"] });
  await assert.rejects(
    () => capture.captureVisualGolden({ target: TARGET, outDir: brokenMarker.outDir }, brokenMarker.deps),
    /缺少 JSON 载荷/);
});
