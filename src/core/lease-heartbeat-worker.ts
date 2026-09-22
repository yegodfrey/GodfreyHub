// 租约心跳独立线程(q7 1.1): 工具事务内 await 子进程/同步段会阻塞主线程事件循环,
// 主线程 setInterval 回调可能延迟数十秒, 等待方会误判"心跳停写"。worker_threads 有
// 独立事件循环, 心跳节奏不受主线程负载影响。写前校验 leaseToken, 被接管/已释放立即
// 停写并上报, 绝不覆盖新持有者的现场。
import { parentPort, workerData } from "node:worker_threads";
import { heartbeatTickOnce } from "./lease-watchdog.js";

interface HeartbeatWorkerData {
  leaseFile: string;
  leaseToken: string;
  intervalMs: number;
  maxFailures: number;
}

const data = workerData as HeartbeatWorkerData;
let running = true;
let failures = 0;

parentPort?.on("message", (msg: unknown) => {
  if (msg === "stop") running = false;
});

function finish(reason: "lease_file_deleted" | "token_mismatch" | "max_failures"): void {
  running = false;
  clearInterval(timer);
  parentPort?.postMessage({ type: "stopped", reason });
}

const timer = setInterval(() => {
  if (!running) {
    clearInterval(timer);
    return;
  }
  const outcome = heartbeatTickOnce(data.leaseFile, data.leaseToken);
  if (outcome === "ok") {
    failures = 0;
    parentPort?.postMessage({ type: "heartbeat" });
    return;
  }
  if (outcome === "error") {
    // 连续写失败达到阈值: 主动停写并上报, 由主线程释放租约(不许两边分裂)。
    failures += 1;
    parentPort?.postMessage({ type: "error", failures });
    if (failures >= data.maxFailures) finish("max_failures");
    return;
  }
  finish(outcome);
}, data.intervalMs);
