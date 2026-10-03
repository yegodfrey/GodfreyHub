---
name: document/cn/service/cloud-a2a-jingdong-0000002640047776
title: 实践案例 | 云A2A智能体协同——京东Agent
uri: https://developer.huawei.com/consumer/cn/doc/service/cloud-a2a-jingdong-0000002640047776
---

# 实践案例 | 云A2A智能体协同------京东Agent

本文档为**云** **A2A** **智能体三方接入标准开发案例** ，以京东A2A智能体为开发范例，面向三方开发者提供完整的Agent创建配置、会话交互、账号授权全流程开发指引。文档遵循[云A2A协议技术规范](https://developer.huawei.com/consumer/cn/doc/service/agent2agent-comments-0000002500412353)，明确接口协议、鉴权规则、消息格式、会话机制及授权流程，帮助开发者快速完成合规、稳定、可上线的云A2A智能体接入开发。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8c/v3/2GlTda7JSIK-t6Qtf3cJsA/zh-cn_image_0000002685901079.jpg?HW-CC-KV=V1&HW-CC-Date=20260924T081230Z&HW-CC-Expire=31536000000&HW-CC-Sign=326EF0E7AB720C137E26443672DF9357C9507F5A0E02A0AAC6A9C5D375C77037 "点击放大")

## 云A2A智能体创建与配置

开发者完成华为开发者联盟应用上架、资质认证后，需在小艺开放平台完成Agent基础创建、接口配置、开场引导配置，搭建三方Remote Agent与小艺Client Agent的通信基础能力。

**登录[小艺开放平台](https://developer.huawei.com/consumer/cn/hag/hagindex.html?isInFrame=true&lang=zh_CN#/agentHome/square)，选择【新建项目】-【云A2A模式】，依次** **填写智能体名称和头像、智能体描述及支持的设备和系统。**

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ce/v3/13eejEFYTAOxi36GES3iXA/zh-cn_image_0000002670615143.gif?HW-CC-KV=V1&HW-CC-Date=20260924T081230Z&HW-CC-Expire=31536000000&HW-CC-Sign=94D22F14F1CDEC84638B6069A89E16398F28A321246C5E68ECE9C74F5B7A441D "点击放大")

### API与鉴权方式配置

**核心接口能力要求**

三方开发者自建的Remote Agent必须对外开放**Message/Stream RPC** **流式接口**，作为Agent任务处理、消息交互的核心入口，接口整体能力规范如下：

|能力|规范|
|:---------|:-----------------------------------------------------------|
|异步任务处理|接收小艺平台下发的用户对话任务，异步执行业务逻辑，支持长耗时任务处理，避免请求超时。|
|SSE流式推送|基于SSE协议实时向小艺Client Agent推送任务处理进度、中间状态，保障用户实时交互体验。|
|用户追问澄清|支持主动向用户发起问题澄清、信息补充请求，完善任务执行所需参数。|
|首Token极速响应|业务处理生成首个有效Token后，立即流式输出至小艺APP，减少用户等待感知|
|完整报文返回|任务全部处理完成后，输出标准化完整响应报文，闭环单次对话任务。|
|会话上下文缓存|三方Remote Agent必须基于平台下发的sessionId缓存单用户对话上下文，保障多轮对话连续性、上下文关联性。|

### 开场对话与预置引导配置

开场对话与预置引导是Agent首次触达用户的核心交互入口，用于降低用户使用门槛、清晰传递Agent能力定位，提升首次交互转化率。

**开场对话规则**

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ea/v3/8eWI6wU5SpeXzS_Iacn_MQ/zh-cn_image_0000002685896565.png?HW-CC-KV=V1&HW-CC-Date=20260924T081230Z&HW-CC-Expire=31536000000&HW-CC-Sign=CEC720724005E2D94B7A29394BE856C597C9D0A4D000D087CCA25398572C1F51 "点击放大")

开场对话为用户首次进入Agent页面、发起首次对话前，系统自动展示的引导文案，核心设计目标：

* 清晰说明当前Agent的核心能力、适用场景、业务背景；
* 告知用户交互方式、可咨询/可操作的业务范围；
* 简洁易懂，避免冗余专业术语，适配APP展示场景。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e7/v3/7iB63uXXR4K_3dkx6XLDpA/zh-cn_image_0000002655982898.png?HW-CC-KV=V1&HW-CC-Date=20260924T081230Z&HW-CC-Expire=31536000000&HW-CC-Sign=4D68476D4D8D622E2C10E13DB050A7305DD935094FBCF4B3CA3FD74230C443E6 "点击放大")

**预置引导问题规范**

平台支持配置快捷预置问题，用户可点击问题直接发起对话，快速体验Agent核心能力，配置约束如下：

* 数量限制：单个Agent最多支持配置3条预置引导问题；
* 内容要求：优先选取高频使用、核心场景、代表性强的业务问题；
* 交互逻辑：用户点击后自动触发对话请求，调用三方Agent流式接口，返回对应响应内容。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6c/v3/XU4fljkCSOimaSTs9H8-oA/zh-cn_image_0000002640462572.gif?HW-CC-KV=V1&HW-CC-Date=20260924T081230Z&HW-CC-Expire=31536000000&HW-CC-Sign=271A85FB8DF5533D90CF52BBC8A77F3F68CE540D05E19AC378B3228932C428E7 "点击放大")

## 会话状态与消息交互

完成云A2A智能体的基础配置后，开发者需要配置会话状态与消息交互接口，用于搭建三方Remote Agent与小艺Client Agent的通信基础能力。

### 会话维持方式与初始化

**会话分配与维持机制**

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4/v3/ZNKEqWqeR_iax2Ks1hdt9g/zh-cn_image_0000002655816318.png?HW-CC-KV=V1&HW-CC-Date=20260924T081230Z&HW-CC-Expire=31536000000&HW-CC-Sign=AD1C17F99DCC553DF6325B9D714D1A8BCAC4A715F169D243D9C13E66C9211017 "点击放大")

云A2A智能体支持**两种客户端与服务器间会话维持方式**，开发者可根据自身服务架构选型适配，两种模式相互独立、配置规则不同。会话核心标识为平台分配的唯一sessionId，用于区分对话会话，具体两种维持机制规则如下：

* **服务端** **Session** **分配模式** ：由小艺Client Agent统一分配会话Session，依托服务端会话保障对话连续性。**配置要求**：开发者必须配置并实现会话初始化消息接口，用于完成会话创建、初始化参数加载等能力，依托初始化接口完成会话创建。
* **无状态通信鉴权模式（推荐）** ：服务器之间全程采用无状态通信架构，服务端不持久绑定会话，无固定会话状态留存。**配置要求** ：所有请求单次独立鉴权，仅需在请求Header中规范填写鉴权信息，**无需配置、无需实现初始化消息接口**，服务可无限横向扩容，稳定性、扩展性更强。

无论采用哪种会话模式，三方Agent均需通过平台下发的sessionId区分不同用户会话，独立缓存对话上下文，严格隔离用户对话数据，保障多轮对话唯一性与连续性。

**鉴权方式说明**

平台支持AK/SK认证、OAuth认证、APIkey认证三种鉴权模式，开发者可根据业务安全等级、服务场景选择适配方案，所有鉴权参数均在请求Header中携带。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6c/v3/Z2qYMRqfT3-f8J3DA4xhCw/zh-cn_image_0000002655976436.png?HW-CC-KV=V1&HW-CC-Date=20260924T081230Z&HW-CC-Expire=31536000000&HW-CC-Sign=77F888F61E1EE0A75C442461F3BD428E439242AC8E0051CC3AF0E96DA01D33B5 "点击放大")

**1. AK/SK** **认证（推荐首选）**

标准鉴权体系认证，使用密钥对及时间戳生成签名，在请求时于header中携带对应参数值。核心参数与校验规则如下：

* Access Key：分配给小艺开放平台的唯一身份标识，用于识别请求方身份；
* Secret Key：接入专属密钥，不对外暴露，用于生成合法请求签名。

**2. OAuth** **认证**

基于OAuth2.0协议实现身份授权，当前仅支持Client凭证模式。配置参数如下：

* Token地址：授权服务器的令牌获取接口地址，用于前置换取访问令牌；
* Client ID：授权服务器分配的客户端唯一标识，用于身份识别；
* Client Secret：与Client ID配对的客户端密钥，用于证明应用合法身份；
* Scope：授权权限范围，限定当前令牌可访问的用户资源与业务接口权限。

**3.** **APIkey** **认证**

轻量简易鉴权方式，支持两种参数传递方式：

* Header传递：将APIkey置于HTTP请求Header中传输，安全性较高，优先推荐测试环境使用；
* Query传递：通过URL Query参数传递APIkey，存在明文泄露、日志抓取等安全风险。

### 会话交互规范

完整会话交互遵循「平台触发-三方处理-流式回传-会话闭环」标准流程，核心交互时序如下：

1. 用户在小艺APP发起对话请求，平台生成唯一sessionId，封装用户消息、会话信息、鉴权参数，调用三方message/stream接口；
2. 三方Agent校验鉴权信息、解析sessionId，读取历史上下文，执行业务逻辑处理；
3. 处理过程中通过SSE持续推送进度状态、追问请求、流式响应内容；
4. 任务结束后，推送完整响应报文，完成单次对话闭环，持续缓存当前session上下文用于多轮对话；
5. 平台监听会话状态，自动处理会话过期、异常中断、重连等场景。

### 输出格式规范（卡片能力）

小艺Client Agent原生支持**结构化卡片输出** ，相比纯文本消息，可实现图文、结构化数据、功能按钮等丰富展示形态，优化用户交互体验。卡片的相关开发指导可参考[卡片](https://developer.huawei.com/consumer/cn/doc/service/development-card-0000002435989672)。

* 配置入口：开发者可在【**A2A输出配置**】面板预设自定义卡片模板；
* 数量约束：单个Agent最多支持配置**20** **条预设卡片**，满足多场景业务展示需求；
* 生效逻辑：对话响应时，三方Agent可指定对应卡片ID，平台自动渲染预设卡片样式，输出结构化响应内容。

### 其他消息格式指令

除常规对话消息外，平台支持多种拓展消息指令，用于会话管控与消息推送，包含但不限于：

* **会话终止指令：**主动结束当前对话会话，清空前端交互状态；
* **上下文清理指令：**清空当前session关联的所有对话上下文数据；
* **离线Push通知指令：**任务后台处理完成后，主动向用户推送结果通知。

所有拓展指令的消息结构、字段定义、调用规范，可参考[云A2A协议消息指令定义](https://developer.huawei.com/consumer/cn/doc/service/agent2agent-define-0000002467293060)。

## 账号授权与解除

三方Agent如需获取用户华为账号关联信息（如手机号）、实现用户身份绑定，需接入平台标准化账号授权流程，通过agentLoginSessionId维持用户授权会话，保障授权安全可控。

### 账号授权整体流程

**前置准备：获取并注册** **Client ID**

开发者需提前完成应用账号配置，步骤如下：

1. 登录**华为开发者联盟** **-** **管理中心** **-** **应用服务** **-** **账号** ，申请并获取应用唯一**Client ID**；
2. 进入**小艺开放平台-云A2A智能体** 开发页面，完成**Client ID**注册绑定，完成授权前置配置。

**授权触发与会话生成流程**

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/69/v3/GzgUBpGnQrizFo2VXiF1og/zh-cn_image_0000002686054791.png?HW-CC-KV=V1&HW-CC-Date=20260924T081230Z&HW-CC-Expire=31536000000&HW-CC-Sign=6D4CB973A9E4B4204C6E8B3BA23EC2601A254B950516A7AC9BBDF0751FE7F126 "点击放大")

1. 小艺APP加载三方Agent页面时，自动从小艺开放平台拉取已注册的Client ID，完成页面初始化授权配置；
2. 用户在Agent内主动点击**账号授权**按钮，发起授权流程；
3. **已授权场景** ：平台静默发起授权校验请求至三方Remote Agent，服务器校验身份后返回全新**agentLoginSessionId**；
4. **未授权场景**：客户端弹出授权弹窗，申请用户账号权限，用户确认授权后，三方Remote Agent通过华为账号授权码获取用户手机号等授权信息，生成并返回agentLoginSessionId；
5. 小艺APP本地持久化保存当前Agent对应的agentLoginSessionId，后续所有用户消息请求均自动携带该参数；
6. 会话过期/失效处理：当agentLoginSessionId超期、失效或不存在时，小艺APP自动重新发起授权流程，更新获取有效会话ID。

### 授权消息携带规范

完成账号授权后，小艺Client Agent与三方Agent的上下行交互消息体中，会自动携带授权相关字段（agentLoginSessionId、授权码、用户身份标识等），用于三方服务校验用户授权状态、关联用户账号信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fb/v3/XAk7tG7mRkCWXXJvEMTD5A/zh-cn_image_0000002685892073.png?HW-CC-KV=V1&HW-CC-Date=20260924T081230Z&HW-CC-Expire=31536000000&HW-CC-Sign=049059141013B8035577C96851638C70606023119EB74E9EF3D780E64D87DA77 "点击放大")

具体消息字段结构、必填参数、数据格式、异常处理规则，可参考[云A2A协议消息指令定义](https://developer.huawei.com/consumer/cn/doc/service/agent2agent-define-0000002467293060)。

