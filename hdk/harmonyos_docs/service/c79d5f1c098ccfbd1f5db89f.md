---
name: document/cn/service/skil-cli-0000002623371047
title: 系统CLI
uri: https://developer.huawei.com/consumer/cn/doc/service/skil-cli-0000002623371047
---

# 系统CLI

本文档旨在指导开发者如何在小艺开放平台创建Skill时，通过引入CLI工具来增强Skill的能力。CLI是Command Line Interface（命令行界面）的缩写，CLI工具是指通过命令行与用户交互的软件程序。文档版本V2，最后修改时间为2026-05-12 。

## 系统CLI来源

|来源|说明|
|:------|:-----------------|
|公共CLI工具|平台预置或官方认证的通用CLI工具|
|私有CLI工具|开发者自行上传或定制的专属CLI工具|

## CLI工具特性

|特性|说明|
|:--------|:-------------------|
|**声明式配置**|所有工具能力通过 JSON 描述文件声明|
|**标准化接口**|遵循统一的参数传递和事件输出规范|
|**安全优先**|工具必须通过安全验证才能注册|
|**可测试性**|工具应该支持独立运行和测试|

## CLI工具代码目录结构

```codeblock
工具工程目录/<tool-name>/
├── src/                    # 源代码目录
├── tests/                  # 测试代码（非必须）
├── docs/                   # 文档
│   ├── README.md           # 工具介绍说明，使用文档
├── BUILD.gn                # GN 构建配置
└── config.json             # 工具描述文件
```

## 操作步骤

**步骤1：进入Skill创建页面**

登录小艺开放平台，进入【Skill】→【新建Skill】。

**步骤2：填写基本信息**

在对话框内填写Skill名称、描述、触发意图等基础信息。

**步骤3：选择**CLI

点击对话框下方的【@】按钮，点击【系统CLI】选项。选择【系统CLI来源】

**步骤4：添加系统CLI工具**

在系统CLI工具列表中找到所需CLI工具，点击添加CLI工具到当前Skill

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/0c/v3/Qk5RgGdXQ4OAWJ7FxeONIg/zh-cn_image_0000002670264107.png?HW-CC-KV=V1&HW-CC-Date=20260909T163850Z&HW-CC-Expire=31536000000&HW-CC-Sign=0D3857506FFC94D33254F5034CE946C711FD6A4F0E9A6188901AA67BB893B0E6 "点击放大")

