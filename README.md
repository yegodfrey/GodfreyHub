# GodfreyHub

自包含的 HarmonyOS 超级 MCP 服务器：多项目 git 一键同步、设备名实例构建部署、模拟器生命周期与窗口命名、DevEco 同源静态检查与语义导航、设备 UI 自动化、HiLog/崩溃采集、离线文档检索、视觉校验与跨域深度联动。全原生实现（零子 MCP 代理），面向所有 HarmonyOS 开发者开箱即用，不依赖任何用户手工脚本。

当前版本重点面向长驻 Agent 使用：LSP 按 UTF-8 字节解析协议帧并响应语言服务器反向请求；空诊断按文件版本缓存；所有子进程有进程树超时和有界输出；Windows 构建直接用 DevEco 随包 Node 启动 ohpm CLI，避免批处理包装层占锁；设备 shell 参数统一安全引用；离线文档分页返回，避免单篇超长文档挤占模型上下文。

## 前置条件

- Node.js >= 18
- Python 3（离线文档索引构建需要 jieba 分词；纯检索运行不依赖）
- git（在 PATH 中）
- DevEco Studio（自动探测常见安装路径；非默认路径设 `DEVECO_PATH` / `DEVECO_HOME` 环境变量）。仅 `dev_*`/`lsp_*`/`emu_*`/`hub_build`/`hub_test` 需要；`hdk_*` 离线文档检索与 `hub_pull`/`hub_push` 不依赖 DevEco

## 新电脑上手（clone 即用）

语料（HarmonyOS 约 2.7 万篇 + 仓颉文档）与分词词典（`hdk/dict/`）随仓库分发，克隆即得；FTS 词元索引（`hdk/.mcp_cache/`）不入 git，新机器须本地重建一次（约 10-30 分钟，视机器性能）。

一键初始化（检测工具链 → 装 Node/Python 依赖 → 构建 → 重建索引 → 回归测试）：

```bash
git clone <远端> && cd <clone 路径>
npm run setup                  # 全流程（含索引重建）
npm run setup -- --skip-index  # 跳过索引重建（仅已就绪环境）
```

手动等价步骤：

```bash
npm install
python -m pip install -r hdk/requirements.txt
npm run build                  # tsc -> dist/
npm run hdk:index              # 重建 FTS 词元索引（新 clone 必须；日常增量更新同一条命令）
npm test                       # 回归验证
```

随后：在 MCP 客户端注册 `D:/Project/GodfreyHub/dist/index.js`（见下节）→ 首次调用 `hub_status`
确认工具链健康。项目注册表直接版本化在 `D:/Project/GodfreyHub/config/local.config.json`。

## 升级

```bash
git pull && npm install && npm run build
```

索引无需手动处理：文档变更走 docmap 行级增量；分词方案/词典版本变更（`indexer.SCHEMA_TOKENIZER` 递增）时 `ensure_index` 自动全量重建一次。改动涉及分词管线后建议 `npm test`（`hdk-segment.test.mjs` 锁定索引端/查询端切词逐字一致）。

## 注册（MCP 客户端）

```json
{
  "mcpServers": {
    "godfreyhub": {
      "command": "node",
      "args": ["D:/Project/GodfreyHub/dist/index.js"],
      "disabled": false
    }
  }
}
```

本机 WorkBuddy 的完整启动配置已直接版本化在
`D:/Project/GodfreyHub/config/workbuddy.mcp.json`；外部客户端配置必须与它保持一致。

也可在包目录 `npm i -g .` 后用 `godfreyhub-mcp` 作为 command。

Codex CLI 可直接注册：

```powershell
codex mcp add godfreyhub --env "DEVECO_PATH=C:\Program Files\Huawei\DevEco Studio" -- `
  "C:\Program Files\nodejs\node.exe" "D:\Project\GodfreyHub\dist\index.js"
```

## 工具总览

### hub_* 项目与同步（原生）
| 工具 | 作用 |
|---|---|
| `hub_status` | 工具链路径 / 在册项目 / 在线设备 / 子服务健康度（含全部在册项目详情） |
| `hub_scan` | 扫描目录（3 层）自动发现 HarmonyOS 工程并注册（解析 bundle/ability/module/srcPath/target，实例名默认=项目名） |
| `hub_set_project` | 切换当前项目上下文（同步给 codegenie 子服务） |
| `hub_pull` | `git pull --rebase --autostash`（不覆盖本地未提交改动） |
| `hub_push` | `add -u`（仅已跟踪修改）-> commit -> pull --rebase -> push；存在未跟踪文件时中止（防 .env/密钥/临时产物误提交），需提交新文件先 `git add` 显式纳入 |
| `hub_build` | ohpm install -> 按注册的 module/target 执行 hvigor assembleHap -> 签名失败退 unsigned -> 设备实例目标解析（设备名实例在线优先，未运行按设备名启动**已存在**实例；项目同名实例仅在线时兼容选中；一律不自动创建，无法解析时报错并指引 `emu_create` 置备） -> 防污染校验 -> 安装/启动 |
| `hub_test` | 运行 Local Test / Instrument Test，自动解析模块、同名模拟器目标、覆盖率/ASan 报告；Instrument 可用 `deviceLogTag` / `deviceLogDomain` 临时扩展并清空 app HiLog 缓冲区，结束时保存完整过滤日志 |

`scripts/GfDeviceRunner.ps1` 在检测到多个合格设备时会为每个设备创建隔离执行 lane：同一设备上的套件串行，
不同设备上的套件并行；clean build/deploy 经 `scripts/GfBuildMutex.ps1` 共用跨进程锁，串行域名称由调用方经
`GODFREYHUB_BUILD_MUTEX_NAME` 指定，以保护共享源码产物和原生构建缓存。Windows 无头构建还会按项目
`local.properties` 优先装载对应仓颉 SDK 的 DLL，避免系统中旧版仓颉 PATH 污染 `cjpm.exe`；Instrument 准备按
套件类型只构建 ArkTS 或 Cangjie 测试目标，不重复构建无关测试 HAP。

### emu_* 模拟器（原生）
| 工具 | 作用 |
|---|---|
| `emu_list` | 实例列表（运行状态/hdc 端口）+ 在线设备 |
| `emu_create` | **创建实例**（`Emulator -create`）：name=项目名走同名实例约定；deviceType/osVersion 省略自动选已下载镜像（优先 phone）；默认 3 GB 内存以支持双模拟器并行，可选 screenProfile/storage/memory/start |
| `emu_delete` | 删除实例（force 跳过交互） |
| `emu_images` | 列本机模拟器镜像（默认只列已下载，create 前先看） |
| `emu_start` | 直接封装官方 `Emulator.exe` 启动实例并等待上线；默认保留官方热启动，可显式 coldboot 恢复；启动器握手返回精确 PID，窗口持续改名为实例名并监控进程存活；静默退出或新崩溃包会立即返回 PID/GPU/内存诊断 |
| `emu_stop` | 停止实例进程 |
| `emu_enable_uitest` | 一次性使能设备 UITest testmode（Instrument Test 前置） |

### dev_* / lsp_* 静态检查与语义导航（原生，DevEco 同源引擎）
| 工具 | 作用 |
|---|---|
| `dev_check_ets_files` | ArkTS 静态检查（DevEco 内置 ace-server 无头诊断） |
| `dev_check_cpp_files` | C/C++ 静态检查（DevEco 内置 clangd，需 compile_commands.json） |
| `lsp_hover` | 悬停信息（类型/文档），调用处附带签名帮助（归一化为 Markdown） |
| `lsp_definition` / `lsp_references` | 跳转定义 / 查找引用 |
| `lsp_symbols` | 符号查找：query=全工程名称搜索（离线）；filePath=文件符号表 |

### ui_* / hilog_* / verify 设备侧（原生）
| 工具 | 作用 |
|---|---|
| `ui_tree` / `ui_click` / `ui_input_text` / `ui_swipe` / `ui_key` / `ui_screenshot` | 设备 UI 自动化（hdc uitest） |
| `app_control` | 应用 start/stop/uninstall（bundle 省略=当前项目；卸载在多设备时要求 target，keepData 保留数据） |
| `hilog_app` | 按项目或包名解析当前 PID，支持清日志后重启、等待启动及级别/关键字过滤，返回日志正文与本地日志文件；App 未运行时明确报错 |
| `hilog_query` | 查询测试进程等短生命周期来源留下的设备日志；必须指定 tag/domain/keyword 中至少一项，禁止无过滤整机采集 |
| `hilog_fault` | faultlog 崩溃读取 |
| `verify` | 视觉模型 UI 校验（action=run/log/screenshots；需 `UI_VERIFY_*` 环境变量） |

### 深度联动（跨域串联）
| 工具 | 作用 |
|---|---|
| `ui_locate_code` | UI→源码：按文案/id/坐标定位控件，反查 ArkTS 声明位置、所属 struct 与最近事件处理函数；文案自动经字符串资源反查 `$r('app.string.x')` |
| `hilog_locate_crash` | 崩溃→源码：解析 faultlog/原始堆栈的 `.ets` 帧（官方 `at fn (模块/路径.ets:行:列)` 格式），映射本地源码行并还原所在 struct/函数与源码语句 |
| `hub_check` | 一键修复清单：对 git 变更 `.ets` 跑 LSP 诊断 + 合并最近构建日志错误（去重） |

### hdk_* 离线文档（完整语料随包分发）
`hdk_search_documents` / `hdk_get_document`：HarmonyOS（27077 篇）+ 仓颉（374 篇）文档全文检索，直查 FTS5 词元索引。查询先做全词元 AND，不足时允许缺一个词元；标题和摘要保持 Markdown 原文可读格式。搜索 `limit` 强制限制在 1–100；正文默认每次最多返回 20000 字符，结果中的 `nextOffset` 可用于继续读取（单次可设 1000–50000）。

语料与更新脚本完整收编在仓库 [`hdk/`](hdk/) 目录（`harmonyos_docs/` + `cangjie_docs/` + 爬虫/索引器 `hdk.py` 等），克隆即得；FTS 二进制索引（`hdk/.mcp_cache/`）不入 git，新克隆后跑一次重建即可：

```bash
npm run hdk:index      # 增量更新索引（日常）
npm run hdk:reindex    # 全量重建（新克隆/强制）
npm run hdk:crawl      # 文档增量抓取（需 python + requests, 见 hdk/requirements.txt）
npm run hdk:crawl:cj   # 仓颉文档增量抓取
npm run hdk:stats      # 语料统计
```

语料根解析优先级：`GODFREYHUB_HDK_ROOT` 环境变量 > 包内 `hdk/` > `D:/Project/GodfreyHub/config/local.config.json` 的 `hdkRoot`（外部语料回退）。

## 设备名实例约定（强制）

模拟器实例以**设备名**命名（如 `Mate 80 Pro`、`Pura X View`），在 `config/local.config.json` 顶层 `deviceInstances` 数组登记；这是实验室的固定 UI 设备池（手机只竖屏、pad 横竖都测），**不再自动创建/拉起"项目同名"模拟器**（历史契约已删除，同名实例仅在已在线时兼容选中）。`hub_build` 的目标解析链：

1. 显式 `port` 参数
2. 设备名实例（`deviceInstances` 顺序）：在线（`Emulator -list -details` 的 `hw.hdc.port` / 进程归属端口 / 约定端口）→ 选中；未运行 → 启动第一个**已存在**的设备名实例并等待上线（**绝不自动创建**）
3. 项目同名实例（历史兼容）：仅当**已在线**才选中；不存在或未运行一律跳过
4. 真机反推：在线真机已装本项目 bundle（历史部署）→ 部署真机；唯一在线真机 → 首次部署
5. 无设备名实例可用且无显式 `port/device`：拒绝部署并给出指引（`emu_create` 以设备名创建）
6. 不允许乱装到无关设备

## 按需裁剪工具（disabledTools）

默认 37 个工具全部加载。`D:/Project/GodfreyHub/config/local.config.json` 里加 `disabledTools` 数组可裁掉用不到的分组（支持 `*` 通配，命中即从工具清单移除）：

```json
{ "disabledTools": ["hdk_*", "verify", "hub_test"] }
```

## 构建本包

```
npm install
npm run build     # tsc -> dist/
npm test          # 单元/回归测试（构建后运行）
npm run smoke     # stdio 握手 + tools/list + hub_status 端到端验证
```

## 双机同步

`sync_projects.py` + `OneClickPull.bat` / `OneClickPush.bat(+.ps1)`：本仓库的一键 pull / 提交推送入口，与各项目仓库同款。
