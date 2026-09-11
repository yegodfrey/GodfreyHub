import type { z } from "zod";

// 工具定义契约: 每个工具 = 名称 + 描述 + zod 原始 schema + 类型化 handler。
// zod schema 在分发层统一校验客户端参数(MCP 客户端可能传任意 JSON),
// handler 收到的是校验/剥离后的类型化参数——彻底替代散落各处的 str()/num() 强转
// 与非空断言(x!/y! 在客户端把数字传成字符串时会静默变成 NaN)。

export interface ToolContext {
  /** MCP 请求级取消信号(客户端 notifications/cancelled 或断连时被 SDK abort)。 */
  signal: AbortSignal | undefined;
}

/**
 * 运行时统一的工具定义。handler 参数声明为 never(底型): 具体工具的 handler
 * (args: {message: string} 等)都能安全赋给它——这是 TypeScript 处理
 * "异构类型化回调列表"的标准逆变技巧。分发层调用处用 `as never` 还原。
 */
export interface ToolDefinition {
  name: string;
  description: string;
  inputSchema: z.ZodRawShape;
  handler: (args: never, ctx: ToolContext) => Promise<unknown>;
  markdown?: boolean;
}

/**
 * 定义工具: 泛型绑定让 handler 的 args 获得精确的静态类型,
 * 返回运行时统一的 ToolDefinition 供注册表聚合。
 */
export function defineTool<S extends z.ZodRawShape>(
  def: {
    name: string;
    description: string;
    inputSchema: S;
    handler: (args: z.output<z.ZodObject<S>>, ctx: ToolContext) => Promise<unknown>;
    markdown?: boolean;
  },
): ToolDefinition {
  return def as ToolDefinition;
}
