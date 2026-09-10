# 质量体系

质量门禁的目标是证明变更保持了架构边界、索引/检索正确性、以及抓取与运行期的安全不变量，而不是保存每次命令输出。

## 验证分层

| 层级 | 关注点 | 典型手段 |
| --- | --- | --- |
| 单元/纯函数 | 路径归一化、frontmatter 解析、relpath 前缀、哈希、限流钳制 | `tests/` 下的 `unittest` 用例 |
| 集成 | MCP 服务启动、工具暴露、检索返回、文档加载路径守卫 | `tests/test_mcp_integration.py`（stdio 客户端拉起真实服务） |
| 运行期安全 | 路径不越界、limit 钳制、FTS 查询转义 | `tests/test_mcp_server.py` 中的安全断言 |
| 端到端抓取/索引 | 真实落盘、索引与磁盘一致 | 手动 `hdk.py crawl/index/serve`（依赖外网与登录态，不纳入自动门禁） |

`tests/` 是仓库级验证入口；具体断言以测试文件为准，文档不复制易过期的完整测试清单。

## 运行测试

测试基于 Python 标准库 `unittest`（不依赖 pytest）。在仓库根目录运行：

```bash
# 运行全部测试（发现 tests/ 下用例）
python -m unittest discover -s tests

# 或逐文件运行
python -m unittest tests.test_mcp_server
python -m unittest tests.test_mcp_integration
```

- `test_mcp_server.py`：校验服务可导入、依赖已安装；断言 `search_documents` 的 `limit` 钳制到安全范围、`get_document` 路径不逃出语料根、FTS 查询逐 token 加引号、检索命中数受 `limit` 限制。
- `test_mcp_integration.py`：以 stdio 拉起 `mcp_server.py`，初始化会话、列出工具、调用 `search_documents` 并断言非错误且返回内容。该测试会真实启动 MCP 服务进程，需要 `mcp` 2.0.0 已安装。

## 按风险选择验证

- 纯文档 / 配置变更：检查链接、路径和与代码的一致性。
- `mcp_server.py` 改动（检索、工具签名、路径解析）：运行 `test_mcp_server` + `test_mcp_integration`，并检查 `limit` 钳制与 `_resolve_fp` 守卫未被削弱。
- `indexer.py` 改动（schema、docmap、增量逻辑）：至少运行 `test_mcp_integration`（首次会触发 `ensure_index`），并人工核对 `stats` 与磁盘文档数一致；如改 schema，确认旧库自动迁移路径。
- `crawl*.py` / `incremental.py` 改动（抓取、落盘、状态、锁、限速）：用 `--limit N` 冒烟跑（如 `python hdk.py crawl --target cangjie --limit 20`），核对 `*state.json` 增长与落盘文件；确认不会因并发触发锁退出或覆盖状态文件。
- 依赖 / 环境改动：确认 `mcp`、`beautifulsoup4`、`markdownify`、`html2text` 在运行环境可用，并同步 `requirements.txt`。

## 回归要求

- Bug 修复先形成能失败的回归测试，再修改实现；无法自动化时写出最小复现步骤。
- 测试断言用户可感知/可检索的结果（检索命中、文档正文、路径拒绝），不只断言内部方法被调用。
- 抓取与状态机相关修复必须覆盖负向路径：空响应、429、锁冲突、磁盘缺文件、文档已下线二次确认。
- 改动 `mcp_server.py` 工具签名时，`search_documents` / `get_document` / `list_categories` 与其兼容别名 `searchDocuments` / `getDocumentsById` 的语义必须保持一致。

## 端到端验收重点（手动）

- `python hdk.py stats` 的语料文档数与索引 `doc_count` 与磁盘一致；旧 schema 标注“下次自动迁移”。
- `python hdk.py serve` 启动后，`search_documents("ArkUI 状态管理")`、`search_documents("元服务")`（2 字词）、`search_documents("String")`（驼峰拆词命中 getStringSync 文档）等中英文词元查询能命中并返回高亮摘要；`get_document` 能按 id 或 relpath 取回正文。
- 增量运行后 `harmonyos_docs/_deleted/` 下只出现经二次确认下线的文档，且 `crawl_state.json` 同步。
- 索引产物在 `.mcp_cache/` 下、被 Git 忽略；修改一篇文档后下次检索增量覆盖，无需全量重建。

## 结果记录

最终回复或提交说明只需报告运行了哪些检查及结果；如需排查的详细输出保存在本地临时位置，不要追加到体系文档。只有验证入口或强制质量门槛发生长期变化时才更新本文。
