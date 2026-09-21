---
name: cangjie-releases/cj-doc-updates
title: 文档变更说明
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-releases/cj-doc-updates
nodePath: 版本说明 / 文档变更说明
---

# 文档变更说明

#### 2026年7月28日

#### [h2]指南

**基础入门**

[cjc编译选项](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-compile_options#section--lto-staticlib-formatnativebitcode)：新增cjc编译选项“--lto-staticlib-format=[native|bitcode]”。

**工具**

  * Snapshot模板基本操作：新增[线程视图](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-insight-snapshot-basic-operations#线程视图)和[离线导入内存快照](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-insight-snapshot-basic-operations#离线导入内存快照)小节。
  * 代码实时检查：新增[快速修复](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-code-check-real-time#快速修复)小节，包含如何在IDE中快速“删除未使用的import语句”、“自动导入未定义符号”、“删除未使用符号定义”、“生成未实现抽象方法”。
  * [代码重构](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-code-refactoring)：新增“提取方法、提取接口、引入字段、引入入参、内联方法、内联变量”小节。
  * 优化应用性能：新增“[加载丢帧：ArkWeb分析](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-insight-arkweb)”、“[ArkUI分析](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-insight-arkui)”、“[PGO性能优化](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-build-profile-guided-optimization)”章节。
  * [使用ASan检测内存错误](https://developerlf.hwcloudtest.cn/consumer/cn/doc/cangjie-guides/cj-debug-fault-asan-detect)**：** 修改使能ASan的方式。
  * 代码阅读：新增“[自定义代码折叠](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-code-editor-basics#自定义代码折叠)”小节。
  * 命令行工具：新增“[性能分析工具](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-cjprof_manual)”章节。



#### [h2]API参考

[API标签化管控](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ifavailable)：适配 API Level 的语义变化，@!APILevel 的 since 参数从整数改为三段字符串格式（X.Y.Z）。

#### [h2]FAQ

在概览、语法、互操作、标准库、UI开发、HarmonyOS API章节，新增多个FAQ。

#### 2026年5月26日

#### [h2]指南

  * 学习仓颉语言：“类型转换”下新增“类型模式与子类型转换”小节。介绍通过类型模式进行子类型转换的用法，包括在if和while表达式的条件中实现父类型向子类型的收窄转换等。
  * 仓颉-ArkTS 互操作：新增“互操作对象生命周期管理”章节。介绍JSValue与JSHeapObject的生命周期管理机制、作用域与引用管理方法、典型使用场景及内存泄漏风险防范。



#### 2026年3月26日

#### [h2]API参考

  * 仓颉标准库API：“仓颉编程语言标准库概述”章节下新增“平台支持说明”小节；新增“示例使用须知”章节。API变更请参见[Cangjie Kit](https://developer.huawei.com/consumer/cn/doc/cangjie-releases/cj-apidiff-cangjiekit-6101)。
  * ohos.ark_interop（ArkTS互操作库）：class JSContext新增func requireArkModule(String)接口。开发仓颉与ArkTS混合应用时，仓颉侧可通过该接口加载ArkTS三方库。



#### [h2]DevEco Studio使用指南

**命令行工具**

  * HLE工具：新增“C语言转换到仓颉胶水代码的规则”和“ArkTS三方模块生成仓颉胶水代码的转换规则”章节。
  * 项目管理工具：增加交叉编译、多平台构建使用说明，build/run/bundle/publish命令及配置字段说明。
  * 调试工具：增加安卓远程调试、iOS模拟器远程调试、iOS真机远程调试以及Python扩展能力说明。



#### 2026年1月4日

配套DevEco Studio-Cangjie Plugin 6.0.2 Beta1版本首次发布的资料包含：

  * [指南](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-start-application-development-overview)：介绍仓颉编程语言相关概念，以及HarmonyOS应用开发相关概念、原理机制、详细的开发步骤、开发示例以及调试验证的指导等，帮助开发者掌握使用仓颉版HarmonyOS API开发应用的能力和开发流程。
  * [API参考](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-development-intro)：为开发者提供仓颉版HarmonyOS API的功能描述、参数说明、权限信息以及示例代码等，帮助开发者更快速地理解和使用API。


