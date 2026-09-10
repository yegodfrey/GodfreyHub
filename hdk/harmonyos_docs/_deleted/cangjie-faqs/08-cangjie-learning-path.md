---
name: cangjie-faqs/08-cangjie-learning-path
title: 有ArkTS开发经验的开发者如何快速上手仓颉语言
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/08-cangjie-learning-path
nodePath: FAQ / 概览 / 有ArkTS开发经验的开发者如何快速上手仓颉语言
---

# 有ArkTS开发经验的开发者如何快速上手仓颉语言

有ArkTS开发经验的开发者可以充分利用已有的HarmonyOS应用开发经验快速上手仓颉语言。仓颉与ArkTS在HarmonyOS应用开发中使用相同的系统能力和ArkUI框架，开发范式和系统能力调用方式基本一致，主要差异在于语言本身的特性。

#### 系统能力与开发范式

仓颉和ArkTS在HarmonyOS应用开发中共享同一套系统能力，包括Ability生命周期管理、系统能力API调用、资源管理、权限管理等。在UI开发方面，两者均使用ArkUI声明式开发范式，组件体系和布局方式基本一致。因此，已有ArkTS HarmonyOS应用开发经验的开发者，在系统能力和UI开发层面可以无缝迁移。

#### 语言核心差异

仓颉和ArkTS的核心差异主要体现在以下几个方面：

  * **类型系统与编译方式** ：仓颉是静态类型语言，采用静态编译至机器码文件的方式；ArkTS是动态类型语言，ArkTS编译工具链将源码编译为方舟字节码文件（*.abc）。
  * **并发模型** ：仓颉采用内存共享的并发模型，提供轻量用户态线程（spawn）和无锁并发数据结构，支持多线程并行；ArkTS提供TaskPool和Worker两种并发编程API供开发者使用。同时，ArkTS进一步提出了Sendable对象模型的机制来支持对象在并发任务间的引用传递。
  * **空安全设计** ：仓颉不提供null和undefined，使用Option<T>类型表达可能为空的值，在编译期即保证空安全；ArkTS通过null/undefined表示空值，需要开发者自行判空。



#### 推荐上手路径

  1. **学习仓颉基础语法** ：重点关注与ArkTS差异较大的语法特性，如类型系统、并发模型、空安全设计等。详情请参见[仓颉语言指南](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-basic)。

  2. **实践UI与系统能力开发** ：使用仓颉的ArkUI声明式范式开发UI，调用系统能力API，这些与ArkTS开发方式基本一致，可快速迁移。详情请参见[ArkTS API与Cangjie API差异](https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/03-api-difference)。

  3. **掌握仓颉并发编程** ：学习仓颉的spawn线程、并发数据结构等并发特性，这是与ArkTS差异最大的部分。

  4. **学习互操作** ：如果在现有ArkTS工程中引入仓颉，学习仓颉与ArkTS互操作机制。详情请参见[仓颉-ArkTS互操作](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-cangjie-arkts)。




更多仓颉与ArkTS差异详情请参见[《鸿蒙编程语言白皮书》](https://developer.huawei.com/consumer/cn/doc/guidebook/programming-language-0000002323920052)。
