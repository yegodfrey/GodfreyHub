// 环境守卫: 缺 pwsh / python+jieba 的机器上让依赖测试 skip 而不是红——
// 环境性失败会淹没真正的回归信号。每个探测只做一次并缓存结果。
import { spawnSync } from "node:child_process";

let pwshAvailable;
export function hasPwsh() {
  if (pwshAvailable === undefined) {
    const r = spawnSync("pwsh", ["--version"], { encoding: "utf8", timeout: 15000 });
    pwshAvailable = r.status === 0;
  }
  return pwshAvailable;
}

// 返回 false(可运行)或 skip 原因字符串
export function pwshSkip() {
  return hasPwsh() ? false : "skip: 本机无 PowerShell 7 (pwsh), 环境依赖缺失";
}

let pythonJiebaAvailable;
export function hasPythonJieba() {
  if (pythonJiebaAvailable === undefined) {
    const r = spawnSync("python", ["-c", "import jieba"], { encoding: "utf8", timeout: 15000 });
    pythonJiebaAvailable = r.status === 0;
  }
  return pythonJiebaAvailable;
}

export function pythonJiebaSkip() {
  return hasPythonJieba() ? false : "skip: 系统 Python 缺 jieba 模块, 环境依赖缺失";
}
