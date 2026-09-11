# 贡献指南

## 开始前

- 生产代码只改 `src/`、`hdk/`、`scripts/`、`tests/`；构建产物 `dist/` 不入版本库。
- 先阅读 `AGENTS.md` 与 `README.md`。
- 新能力先确认是否可复用既有 `core/` 模块与依赖，不重复实现。

## 文件放置

- 持久说明：仓库根 `README.md`、`AGENTS.md` 与 `hdk/Docs/`（hdk 子系统体系文档）。
- 本地证据、测试输出、一次性产物：落点由调用方指定，不入版本库（本仓库不假定任何外部 Workspace 布局）。
- 不要在根目录放临时脚本、截图、日志和任务报告。

## 必要检查

- `npm run build`：TypeScript 编译通过。
- `npm test`：回归测试全绿。
- `npm run smoke`：冒烟验证通过（涉及真实设备的能力按需验证）。
- 提交前检查 `git status --short --ignored`，确认 `dist/`、`node_modules/`、`.mcp_cache/` 未进入暂存。

## 变更标准

- 保持单一进程零子代理架构；子进程管理必须有超时与输出上限。
- 新增 MCP 工具须有回归测试与 README 工具表登记。
- 设备相关命令统一安全引用 shell 参数。
