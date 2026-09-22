import fs from "node:fs";
import path from "node:path";

// PowerShell 7 执行体解析: 家族纪律"PowerShell 一律 pwsh 7, 禁 powershell.exe 5.1"
// 在 Hub 侧的唯一执行点。优先级: GF_POWERSHELL_PATH 显式覆盖(校验在盘) > PATH 逐目录
// 探测 > 平台默认安装位。全部落空抛具名错误拒跑, 绝不静默回退 5.1(与 GFSoftware
// device-runner 的"永不回退 powershell.exe"守卫同语义)。
// 解析结果按进程缓存(PATH/安装位在 Hub 进程生命周期内不变); 测试可重置。

const PWSH_FALLBACK_PATHS = process.platform === "win32"
  ? [
      "C:\\Program Files\\PowerShell\\7\\pwsh.exe",
      "C:\\Program Files\\PowerShell\\7-preview\\pwsh.exe",
    ]
  : [
      "/usr/bin/pwsh",
      "/usr/local/bin/pwsh",
      "/opt/homebrew/bin/pwsh",
      "/usr/local/microsoft/powershell/7/pwsh",
    ];

let cached: string | undefined;

export function resolvePwshPath(): string {
  if (cached !== undefined) return cached;
  const override = process.env.GF_POWERSHELL_PATH?.trim();
  if (override) {
    if (!fs.existsSync(override)) {
      throw new Error(`GF pwsh 守卫: GF_POWERSHELL_PATH 指向的执行体不存在: ${override}`);
    }
    cached = override;
    return cached;
  }
  const name = process.platform === "win32" ? "pwsh.exe" : "pwsh";
  for (const dir of (process.env.PATH ?? "").split(path.delimiter)) {
    if (!dir) continue;
    const candidate = path.join(dir, name);
    if (fs.existsSync(candidate)) {
      cached = candidate;
      return cached;
    }
  }
  for (const candidate of PWSH_FALLBACK_PATHS) {
    if (fs.existsSync(candidate)) {
      cached = candidate;
      return cached;
    }
  }
  throw new Error(
    "GF pwsh 守卫: 未找到 PowerShell 7 (pwsh)。按家族纪律禁用 powershell.exe 5.1, 不回退; " +
    "请安装 PowerShell 7 或设置 GF_POWERSHELL_PATH 指向 pwsh 可执行文件。");
}

/** 仅测试用: 清空解析缓存, 让下一次 resolvePwshPath() 重新读环境与磁盘。 */
export function resetPwshResolveCache(): void {
  cached = undefined;
}
