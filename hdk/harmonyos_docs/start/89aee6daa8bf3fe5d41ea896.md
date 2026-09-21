---
name: document/cn/start/llms-0000002670606713
title: llms.txt 文档索引
uri: https://developer.huawei.com/consumer/cn/doc/start/llms-0000002670606713
---

# llms.txt 文档索引

鸿蒙文档中心提供面向大语言模型（LLM）和 AI 工具的 llms.txt 文档索引。开发者可以通过该索引定位官方资料，并将鸿蒙文档接入 AI 助手、智能问答或私有知识库。

## **什么是 llms.txt**

llms.txt 是一种面向大语言模型的开放提案。它使用简洁的 Markdown 格式描述网站内容，并提供重要文档的名称、说明和链接，作用类似于面向 AI 工具的"文档地图"。

与包含导航、样式和交互代码的网页相比，llms.txt 更便于 AI 工具读取和解析，有助于模型快速了解文档内容，并找到与问题相关的官方资料。

你可以访问 [llms.txt](https://llmstxt.org/) 提案网站，了解其设计背景和推荐格式。
> 说明
>
> llms.txt 目前是一项开放提案，并非所有 AI 工具都已原生支持。具体使用方式取决于工具是否具备网页访问、链接读取、文件导入或知识库接入能力。

## **鸿蒙文档中心提供了什么**

鸿蒙文档中心提供两级文档索引。一级索引指向各个二级索引文件，二级索引文件则提供具体 Markdown 文档的索引。

### 一级索引：llms.txt

一级索引集中列出鸿蒙文档中心已经上线的二级索引文件，并为每个索引提供名称、说明和访问地址。

一级索引地址：[鸿蒙文档中心 llms.txt](https://developer.huawei.com/config/llms.txt)

以下内容节选自一级索引，其中的链接分别指向现网已上线的二级索引文件：

```screen
### Design
- [Design](https://developer.huawei.com/consumer/cn/llms/docs-ux-design.txt): Design provides HarmonyOS design guidelines, UI patterns, interaction principles, visual foundations, multi-device design, and component usage guidance.  
### Development and Testing 
- [Getting Started](https://developer.huawei.com/consumer/cn/llms/docs-getting-started.txt): Getting Started provides onboarding documentation for HarmonyOS development, including preparation, account setup, environment configuration, first projects, and basic workflows. - [Architecture](https://developer.huawei.com/consumer/cn/llms/docs-architecture.txt): Architecture provides solution design guidance, application architecture patterns, project structure, lifecycle design, modularization, and technical planning documentation. 
```

AI 工具读取一级索引后，可以根据问题选择"设计""入门"或"架构"等二级索引继续查找。

### 二级索引：docs- {alias}.txt

每个二级索引文件对应一类文档，列出该分类下的文档名称、说明和 Markdown 正文链接。

例如：

* [设计文档索引](https://developer.huawei.com/consumer/cn/llms/docs-ux-design.txt)
* [DevEco Studio 文档索引](https://developer.huawei.com/consumer/cn/llms/docs-deveco-studio.txt)

以下内容节选自现网设计文档索引：

```screen
- [设计指南-通用设计基础-设计理念](https://developer.huawei.com/consumer/cn/doc/design-guides/design-concepts-0000001795698445.md):设计理念 
- [设计指南-通用设计基础-布局-布局基础](https://developer.huawei.com/consumer/cn/doc/design-guides/design-layout-basics-0000001795579413.md):布局基础 
- [设计指南-控件-操作类-按钮](https://developer.huawei.com/consumer/cn/doc/design-guides/button-0000001929683228.md):按钮 
```

标题中的半角连字符 - 表示文档层级。以"设计指南-通用设计基础-布局-布局基础"为例，可以还原为：

```screen
设计 
└── 设计指南     
    └── 通用设计基础         
        └── 布局             
            └── 布局基础 
```

## **llms.txt 有什么作用**

### **为 AI 工具提供官方文档上下文**

AI 工具可以先读取一级索引，根据问题选择相关的二级索引，再从中查找具体文档。相比在整个网站中搜索，这种方式提供了更明确的文档查找路径。

模型自身的训练数据可能存在时间滞后。通过 llms.txt 获取当前官方文档，可以为智能问答、代码生成、问题定位和 API 解释提供更准确的上下文，减少仅依赖模型记忆带来的过期信息。

例如，界面规范问题可以查找"设计"索引，IDE 使用问题可以查找"DevEco Studio"索引，应用开发问题可以根据具体场景选择对应的文档索引。

### **作为知识库和 RAG 的同步入口**

企业或开发团队可以从一级索引获取全部二级索引，再从二级索引获取具体文档链接，完成文档采集、更新和入库。

```screen
一级 llms.txt   
 ↓ 
二级 docs-{alias}.txt   
 ↓ 
具体 Markdown 文档   
 ↓ 
知识库 / RAG 
```

## **怎么使用**

### **在 AI 工具中使用**

将一级索引地址和具体问题一起提供给支持链接读取的 AI 工具。AI 工具可以先选择相关的二级索引，再读取其中最相关的官方文档。

```screen
请读取以下鸿蒙文档中心索引： 
https://developer.huawei.com/config/llms.txt  

回答问题时，请先选择相关的二级 docs-*.txt，再读取其中最相关的官方文档。 
请给出引用的文档标题和链接；如果无法访问链接，请明确说明，不要根据记忆猜测。  

问题：如何在 HarmonyOS 应用中实现......？ 
```

如果只关注某一领域，也可以直接提供对应的二级索引。例如，查询设计规范时，可以使用 [设计文档索引](https://developer.huawei.com/consumer/cn/llms/docs-ux-design.txt)。

如果 AI 工具无法访问外部网络，可以先下载索引文件，再将文件添加到对话或项目上下文中。

```screen
curl -L https://developer.huawei.com/config/llms.txt -o llms.txt 
curl -L https://developer.huawei.com/consumer/cn/llms/docs-ux-design.txt -o docs-ux-design.txt 
```

### **在知识库或 RAG 中使用**

将一级索引配置为采集入口，解析其中的二级索引地址；再解析二级索引中的具体 Markdown 文档链接，完成文档采集和知识库构建。

建议记录每次同步时间并定期刷新索引。新增、调整或下线的文档以最新索引和鸿蒙文档中心页面为准。

## **当前覆盖范围**

一级 llms.txt 覆盖鸿蒙文档中心已上线的主要分类，包括版本说明、工具、设计、开发与测试、上架分发与运营、问题处理与运维、最佳实践和行业解决方案。

后续新增分类或二级索引上线后，llms.txt 将随鸿蒙文档中心更新。

## **意见反馈**

如果你在使用 llms.txt 时遇到问题，或对索引内容和使用方式有建议，可以通过 [联盟工单系统](https://developer.huawei.com/consumer/cn/doc/start/customerservice-0000001053448538#section16887180118)向我们反馈。

提交反馈时，建议说明使用场景、相关索引地址、问题现象和期望结果，以便我们定位和处理。

