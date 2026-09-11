// 诊断缓存: publishDiagnostics 通知 -> 等待者分发。
// "不伪造空诊断"承诺的实现要点: 超时只 resolve 等待者(空数组=未确认), 绝不写入
// values 缓存——否则调用方 wait 返回后 fresh=get(uri) 恒非 undefined, 会把
// "超时未确认"误报成"已确认零错误"。

export class DiagnosticCache {
  private values = new Map<string, any[]>();
  private waiters = new Map<string, Set<(diagnostics: any[]) => void>>();

  get(uri: string): any[] | undefined {
    return this.values.get(uri);
  }

  clear(uri: string): void {
    this.values.delete(uri);
  }

  /** 关闭整个缓存(会话销毁时), 等待者以空数组收场。 */
  dispose(): void {
    this.values.clear();
    for (const pending of this.waiters.values()) {
      for (const finish of pending) finish([]);
    }
    this.waiters.clear();
  }

  publish(uri: string, diagnostics: any[]): void {
    this.values.set(uri, diagnostics);
    const pending = this.waiters.get(uri);
    if (!pending) return;
    this.waiters.delete(uri);
    for (const resolve of pending) resolve(diagnostics);
  }

  wait(uri: string, timeoutMs: number): Promise<any[]> {
    const cached = this.values.get(uri);
    if (cached !== undefined) return Promise.resolve(cached);
    return new Promise((resolve) => {
      const pending = this.waiters.get(uri) ?? new Set<(diagnostics: any[]) => void>();
      const finish = (diagnostics: any[]) => {
        clearTimeout(timer);
        pending.delete(finish);
        if (pending.size === 0) this.waiters.delete(uri);
        resolve(diagnostics);
      };
      const timer = setTimeout(() => finish([]), timeoutMs);
      pending.add(finish);
      this.waiters.set(uri, pending);
    });
  }
}
