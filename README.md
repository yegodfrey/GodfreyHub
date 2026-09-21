# GodfreyHub

自包含的 HarmonyOS 超级 MCP 服务器：多项目 git 一键同步、设备名实例构建部署、模拟器生命周期与窗口命名、DevEco 同源静态检查与语义导航、设备 UI 自动化、HiLog/崩溃采集、离线文档检索、视觉校验与跨域深度联动。全原生实现（零子 MCP 代理），面向所有 HarmonyOS 开发者开箱即用，不依赖任何用户手工脚本。

当前版本重点面向长驻 Agent 使用：LSP 按 UTF-8 字节解析协议帧并响应语言服务器反向请求；诊断按 URI 缓存且每次复查前逐文件与磁盘比对（改动必被看到），空诊断与 pending 严格区分（绝不把"根本没查"伪装成"零错误"）；所有子进程有进程树超时和有界输出；Windows 构建直接用 DevEco 随包 Node 启动 ohpm CLI，避免批处理包装层占锁；设备 shell 参数统一安全引用；离线文档分页返回，避免单篇超长文档挤占模型上下文。

## 并发模型（多 Agent 互斥）

单进程 stdio 服务并发服务多个 Agent 会话，共享资源全部经 `src/core/sync.ts` 的
KeyedMutex（进程内）与 proper-lockfile（跨进程）串行化，消除 check-then-act 丢更新：

- **项目注册表** `config/local.config.json`：读改写统一走 `registry.updateConfig`（跨进程文件锁 + 锁内全量重读 + tmp/rename 原子落盘），`hub_scan`/`hub_set_project` 并发不丢数据；
- **默认 hdc server**：Instrument Test 的隔离会话（kill→隔离端口→恢复）全窗口互斥，进程内 mutex + 跨进程文件锁（持锁续期，崩溃 60s 后可接管）；无线真机恢复时按 `IP:port` tconn 回连；
- **每台模拟器实例**：启动/停止/创建/删除按实例名互斥；启动目标按 `-list -details` 端口归属，不再把他方并发启动的实例认领为本方结果；
- **同项目测试/构建**：同项目 `hub_test` 串行（产物路径是收集契约），构建锁可随请求取消；
- **PowerShell 互斥体用 `Global\` 命名空间**：跨登录会话（服务/SSH/多 RDP）同样互锁，与 Node 侧文件锁覆盖面一致；
- **请求级取消**：AbortSignal 贯穿 LSP 请求/就绪轮询、构建锁排队、ohpm/hvigor 子进程树、视觉校验循环、模拟器启动等待。

## 错误契约

- **失败不当成功**：hdc 便捷封装统一经 `proc.requireOk` 检查宿主退出码与设备侧 `[Fail]` 标记；`verify` 视觉校验循环依赖该语义，失败的点击必须计为 failed；
- **git 一键同步**：`pull --rebase` 失败自动 `rebase --abort` 恢复仓库，`hub_push` 冲突时拒绝 push（不把仓库留在 mid-rebase、不把冲突态发布出去）；
- **不伪造空诊断**：ArkTS 与 clangd 诊断统一 pending 语义（超时未确认 ≠ 零错误）；clangd URI 按本地路径归一化匹配；
- **语言服务会话管理**：C/C++ 诊断走 DevEco 内置 clangd 会话（spawning→initializing→ready→dying 状态机：project-config 校验先于 spawn 不留僵尸会话、初始化失败写 stderr 并即时重建、空闲会话定时器主动回收、日志目录按天清理）；ArkTS 诊断走官方 devecocli 异步子进程（事件循环不冻结，AbortSignal 取消即时生效）；
- **工具参数 zod 校验**：客户端传错类型得到 `[tool] 参数校验失败: field: message`，而不是 NaN/undefined 静默传播；破坏性 UI 操作（点击/输入/卸载）在多台设备在线时要求显式 target；
- **hdk 检索自愈**：打开索引校验词典签名（dict_hash 漂移硬错误并给出重建指引）、按文件代次（mtime+size）自动换新重建后的索引、SQLITE_BUSY/READONLY 转可操作错误。

## 已知债务

- `scripts/GfDeviceRunner.ps1` 现为薄入口(参数契约、StrictMode/脚本状态、类定义、按序加载分块)，实体按职责拆分在 `scripts/runner/`：`PrepareCache.ps1`(内环复用缓存)、`DeviceInventory.ps1`(设备清单与契约)、`PreparationVisual.ps1`(预备事务与视觉/失败证据采集)、`SuiteCangjieMonkey.ps1` 与 `SuiteInstrument.ps1`(套件执行器)。调用方 dot-source 入口的契约不变(函数与类仍定义在调用方作用域)，分块为纯机械切片并经编码门禁/自测验证。

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
npm run hooks:install          # 新克隆后安装本仓 pre-push 推送自守护
```

## 注册（MCP 客户端）

入口是构建产物 `dist/index.js`；`<安装路径>` 替换为你自己的 clone 位置（本仓库不假定任何绝对路径）。

```json
{
  "mcpServers": {
    "godfreyhub": {
      "command": "node",
      "args": ["<安装路径>/dist/index.js"],
      "env": { "DEVECO_PATH": "<DevEco Studio 安装路径>" },
      "disabled": false
    }
  }
}
```

也可在包目录 `npm i -g .` 后用 `godfreyhub-mcp` 作为 command。首次调用 `hub_status` 确认工具链健康；
`hub_scan` 生成的本机工程注册表落在 `config/local.config.json`（不入 git）。

## 工具总览

### hub_* 项目与同步（原生）
| 工具 | 作用 |
|---|---|
| `hub_status` | 工具链路径 / 在册项目 / 在线设备 / 子服务健康度（含全部在册项目详情） |
| `hub_scan` | 扫描目录（3 层）自动发现 HarmonyOS 工程并注册（解析 bundle/ability/module/srcPath/target，实例名默认=项目名） |
| `hub_set_project` | 切换当前项目上下文（同步给 codegenie 子服务） |
| `hub_pull` | `git pull --rebase --autostash`（不覆盖本地未提交改动；rebase 冲突自动 abort 恢复原状并返回失败） |
| `hub_push` | `add -u`（仅已跟踪修改）-> commit -> pull --rebase --autostash -> push；存在未跟踪文件时中止（防 .env/密钥/临时产物误提交），需提交新文件先 `git add` 显式纳入；rebase 冲突自动 abort 并拒绝 push |
| `hub_build` | ohpm install -> 按注册的 module/target 执行 hvigor assembleHap -> 目标解析（模拟器目标用 unsigned 产物，真机目标必须 signed 且仅限 debug 产品）-> 防污染校验 -> 安装/启动；设备名实例在线优先，未运行按设备名启动**已存在**实例（一律不自动创建，无法解析时报错并指引 `emu_create` 置备） |
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
| `emu_create` | **创建实例**（`Emulator -create`）：name=设备名（实例按设备名置备，如 `Mate 80 Pro`/`Pura X View`；项目同名实例契约已删除，仅在线时兼容选中）；deviceType/osVersion 省略自动选已下载镜像（优先 phone）；默认 3 GB 内存以支持双模拟器并行，可选 screenProfile/storage/memory/start |
| `emu_delete` | 删除实例（force 跳过交互） |
| `emu_images` | 列本机模拟器镜像（默认只列已下载，create 前先看） |
| `emu_start` | 直接封装官方 `Emulator.exe` 启动实例并等待上线；默认保留官方热启动，可显式 coldboot 恢复；启动器握手返回精确 PID，窗口持续改名为实例名并监控进程存活；静默退出或新崩溃包会立即返回 PID/GPU/内存诊断 |
| `emu_stop` | 停止实例进程 |
| `emu_enable_uitest` | 一次性使能设备 UITest testmode（Instrument Test 前置） |

### dev_* / lsp_* 静态检查与语义导航（原生，DevEco 同源引擎）
| 工具 | 作用 |
|---|---|
| `dev_check_ets_files` | ArkTS 静态检查（首选官方 DevEco CLI `check arkts`，真实类型/语法诊断；需 devecocli 在 PATH，可用 `GODFREYHUB_DEVECOCLI_PATH` 指定） |
| `dev_check_cpp_files` | C/C++ 静态检查（DevEco 内置 clangd，需 compile_commands.json） |
| `lsp_symbols` | 符号查找：query=全工程名称搜索（IDE 开着用语义索引并标注 source:ide-index，否则离线正则）；filePath=文件符号表 |
| `dev_check_style` | codelinter 规范检查（TS/ArkTS 风格/安全/性能规则集，与类型检查互补）。需 devecocli |
| `dev_check_compat` | SDK 目标版本兼容扫描（API 弃用/删除/行为变更）。版本名先用 `dev_compat_versions` 列出。需 devecocli |
| `dev_compat_versions` | 列出 compat 扫描可用的 SDK 版本名。需 devecocli |
| `dev_signature_generate` | 自动生成应用签名材料并写入工程配置（build-profile 的 signingConfigs），默认不覆盖已有材料 |
| `dev_check_refs` | 资源引用模块严格视图检查（IDE 同款规则）：跨模块 `$r('app.*')` 引用报错。纯文件分析 |
| `dev_check_native` | 原生声明符号校验：d.ts 声明的 native 函数必须能在工程 .so 符表中找到。纯文件分析 |

> 语义导航自 ace-server stdio 通路退役后只剩 `lsp_symbols`（定义/引用/hover 已随该通路一并移除）。
> 本表由 `node scripts/dump-tools.mjs` 从注册表导出核对，工具清单以注册表为准。

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

### ide_* DevEco IDE 桥接（原生）
| 工具 | 作用 |
|---|---|
| `ide_get_open_files` | 列出 DevEco IDE 当前打开的编辑器文件（工程相对路径）。需 IDE 运行且 MCP 服务器已启用 |
| `ide_open_in_editor` | 把指定文件在 DevEco IDE 编辑器里打开呈现给用户。需 IDE 运行且 MCP 服务器已启用 |

### hn_* harmony-next 技能包接入（外部钉定克隆，子进程调用）
| 工具 | 作用 |
|---|---|
| `hn_evidence` | 设备证据采集：doctor=环境自检（无设备不报错）/ capture=截图/布局/应用状态/有界日志证据包 / webview-devtools=ArkWeb DevTools socket 诊断。返回 decision/artifacts 等脚本顶层 JSON 原样透传 |
| `hn_trace` | hitrace 采集与离线审计：doctor=检查 trace_streamer / capture=设备端 hitrace 采集落地本地（远端自动清理）/ audit=转 SQLite 并产出性能证据 JSON（counts/traceRange/topCallstack） |
| `hn_ux_audit` | UI/UX 规则审计（DevEco UxTestService 包装）：doctor=环境自检 / capture-audit=设备采集+审计一站式 / audit=离线重跑已有证据。返回归一化 overall/rules（UTS.xxxx 折算 pass/issue/not_applicable/blocked/error） |
| `hn_cdp` | ArkWeb/WebView CDP 通道：probe=枚举 DevTools socket、分类陈旧 fport、HTTP 探测，给出 webSocketDebuggerUrl / eval=对该 URL 执行 Runtime.evaluate（页内 JS，结果 64KB 截断保护） |

技能包根默认探测本包同级 `harmony-next.skills/harmony-next`（含 SKILL.md 的克隆），或用 `GODFREYHUB_HN_SKILL_ROOT` 指定；上游脚本解释器默认 `python`，可经 `GODFREYHUB_HN_PYTHON` 覆盖。`hn_ux_audit` 依赖 cv2/numpy/scipy/skimage 等重包，建议用专用 venv 并经 `GODFREYHUB_UX_PYTHON`（或 `python` 参数）注入；`hn_trace` 的 trace_streamer 自动从 DevEco 安装目录解析，非默认安装路径先设 `DEVECO_PATH`。

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

语料根解析优先级：`GODFREYHUB_HDK_ROOT` 环境变量 > 包内 `hdk/` > 包内 `config/local.config.json` 的 `hdkRoot`（外部语料回退）。

## 设备名实例约定（强制）

模拟器实例以**设备名**命名（如 `Mate 80 Pro`、`Pura X View`），在 `config/local.config.json` 顶层 `deviceInstances` 数组登记；这是实验室的固定 UI 设备池（手机只竖屏、pad 横竖都测），**不再自动创建/拉起"项目同名"模拟器**（历史契约已删除，同名实例仅在已在线时兼容选中）。`hub_build` 的目标解析链：

1. 显式 `port` 参数
2. 设备名实例（`deviceInstances` 顺序）：在线（`Emulator -list -details` 的 `hw.hdc.port` / 进程归属端口 / 约定端口）→ 选中；未运行 → 启动第一个**已存在**的设备名实例并等待上线（**绝不自动创建**）
3. 项目同名实例（历史兼容）：仅当**已在线**才选中；不存在或未运行一律跳过
4. 真机反推：在线真机已装本项目 bundle（历史部署）→ 部署真机；唯一在线真机 → 首次部署
5. 无设备名实例可用且无显式 `port/device`：拒绝部署并给出指引（`emu_create` 以设备名创建）
6. 不允许乱装到无关设备

## 按需裁剪工具（disabledTools）

默认 45 个工具全部加载。包内 `config/local.config.json` 里加 `disabledTools` 数组可裁掉用不到的分组（支持 `*` 通配，命中即从工具清单移除）：

```json
{ "disabledTools": ["hdk_*", "verify", "hub_test"] }
```

## 构建本包

```
npm install
npm run build     # 版本同步(build-stamp --sync-version) -> tsc -> dist/ + build-stamp
npm test          # 单元/回归测试（构建后运行）
npm run smoke     # stdio 握手 + tools/list + hub_status 端到端验证
npm run hooks:install  # 安装本仓跟踪的 scripts/git-hooks/pre-push（推送前强制 npm test）
```

跑测试的前置（缺了不红，相关用例自动 skip）：PowerShell 7（`pwsh`，PowerShell
self-test/租约/parse-gate 用例）与系统 Python + `jieba`（hdk 跨引擎分词一致性用例）。
Git Bash 下若 `npm`/`node` 不在 PATH，先用 `export PATH="$PATH:/c/Program Files/nodejs"`。

## 双机同步

`sync_projects.py` + `OneClickPull.bat` / `OneClickPush.bat(+.ps1)`：本仓库的一键 pull / 提交推送入口，与各项目仓库同款。
