// 并发原语: 本 MCP 服务器是单进程 stdio 长驻服务, 多个 agent 会话的工具请求并发执行,
// 而注册表文件、默认 hdc server、每台模拟器实例、构建产物目录都是共享资源。
// check-then-act 序列一旦跨 await, 就可能被另一个请求插入造成丢更新/双重操作。
// KeyedMutex 是全站共享资源串行化的唯一原语: 同 key 临界区严格串行, 异 key 完全并行。

/** 主动取消错误: abortableSleep/可取消等待被 AbortSignal 打断时抛出, 调用方按需识别。 */
export class AbortedError extends Error {
  constructor(message = "操作已取消") {
    super(message);
    this.name = "AbortedError";
  }
}

export function throwIfAborted(signal: AbortSignal | undefined, message?: string): void {
  if (signal?.aborted) throw new AbortedError(message);
}

/** 可被 AbortSignal 打断的 sleep: 到点返回; 取消则抛 AbortedError。不产生未处理 rejection。 */
export function abortableSleep(ms: number, signal?: AbortSignal): Promise<void> {
  return new Promise((resolve, reject) => {
    if (signal?.aborted) { reject(new AbortedError()); return; }
    const timer = setTimeout(() => {
      signal?.removeEventListener("abort", onAbort);
      resolve();
    }, ms);
    const onAbort = () => {
      clearTimeout(timer);
      reject(new AbortedError());
    };
    signal?.addEventListener("abort", onAbort, { once: true });
  });
}

export class KeyedMutex {
  /** key -> 队尾任务的"完成信号"(永不 reject, 只表达"轮到你了")。 */
  private tails = new Map<string, Promise<unknown>>();

  /**
   * 在 key 的临界区内执行 fn: 同 key 的调用按进入顺序串行(前一个 settle 后才轮到下一个,
   * 无论其成败); 异 key 互不阻塞。fn 内部不得再对同一 key 嵌套 run(会死锁)。
   * 返回 fn 的结果/异常原样透传, 调用方保留对失败语义的控制权。
   */
  run<T>(key: string, fn: () => Promise<T> | T): Promise<T> {
    const prev = this.tails.get(key) ?? Promise.resolve();
    // 前序成败都放行: 互斥只保证"不同时", 不传播前序失败。
    const gate = prev.then(() => undefined, () => undefined);
    const result = gate.then(fn);
    const tail = result.then(() => undefined, () => undefined);
    this.tails.set(key, tail);
    // 本任务若已是队尾, settle 后清理表项, 防止长驻进程的 key 无界累积。
    void tail.finally(() => {
      if (this.tails.get(key) === tail) this.tails.delete(key);
    });
    return result;
  }

  /** 诊断用: key 当前是否有任务在临界区内或排队。 */
  isLocked(key: string): boolean {
    return this.tails.has(key);
  }
}
