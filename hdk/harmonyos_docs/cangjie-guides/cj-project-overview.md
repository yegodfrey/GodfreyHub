---
name: cangjie-guides/cj-project-overview
title: 工程介绍
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-project-overview
nodePath: 开发环境搭建 / 工程创建 / 工程介绍
---

# 工程介绍

#### APP包结构

在进行应用开发前，开发者需要掌握应用的逻辑结构。

应用发布形态为 **APP Pack** （Application Package），它是由一个或多个[HAP（Harmony Ability Package）](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hap-package)包以及描述 APP Pack 属性的 pack.info 文件组成，每个 HAP 中可以包含不同的内容。

一个 HAP 在工程目录中对应一个 Module，它由代码、资源、三方库及应用配置文件组成。HAP 可以分为 Entry 和 Feature 两种类型。

  * **Entry** ：应用的主模块，作为应用的入口，提供了应用的基础功能。
  * **Feature** ：应用的动态特性模块，作为应用能力的扩展，可以根据开发者的需求和设备类型进行选择性安装。



仓颉仅支持 Stage 模型开发应用，Stage 模型应用程序包结构如下图所示。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c0/v3/To16jIfIRfKNDM_E03O0mA/zh-cn_image_0000002743197877.png?HW-CC-KV=V1&HW-CC-Date=20260908T090134Z&HW-CC-Expire=86400&HW-CC-Sign=5E98FB3F3B77B50B5B979E6EC2C6A70E0E84467D3FBEA84416C00082BEBAAF72)

  * ets 目录用于存放应用代码编译后的字节码文件，仅在仓颉 + ArkTS （加 C++）的混合工程中存在该目录。
  * libs 目录用于存放库文件。库文件是应用依赖的.so 二进制文件。
  * resources 目录用于存放应用的资源文件（字符串、图片等），便于开发者使用和维护，请参见[资源分类与访问](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-ide-resource-categories-and-access)。
  * resources.index 是资源索引表，由 DevEco Studio 编译工程时生成。
  * module.json 是 HAP 的配置文件，内容由工程配置中的 module.json5 和 app.json5 组成，该文件是 HAP 中必不可少的文件。DevEco Studio 会自动生成一部分默认配置，开发者按需修改其中的配置。后续解析应用，获取应用信息的主要的对象，包含如下信息：
    * app.json5 主要包含以下内容：
      * 应用的全局配置信息，包含应用的 Bundle 名称、开发厂商、版本号等基本信息。
      * 特定设备类型的配置信息。
    * module.json5 主要包含以下内容：
      * Module 的基本配置信息，例如 Module 名称、类型、描述、支持的设备类型等基本信息。
      * 应用组件信息，包含 UIAbility 组件和 ExtensionAbility 组件的描述信息。
      * 应用运行过程中所需的权限信息。
  * pack.info 是 Bundle 中用于描述每个 HAP 属性的文件，例如 app 中的 bundleName 和 versionCode 信息、module 中的 name、type 和 abilities等信息，由 DevEco Studio 工具生成 Bundle 包时自动生成，作为后续运行时解析 HAP 包，获取 HAP 信息的主要的对象。
  * 更多说明请参见[应用开发基础知识中的Stage模型应用程序包结构](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/application-package-structure-stage)。


