---
name: cangjie-guides/cj-build_tasks
title: 构建任务说明
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-build_tasks
nodePath: 构建应用 / 概述 / 构建任务说明
---

# 构建任务说明

本章节将对仓颉构建的任务进行说明。

#### 使用命令查看任务

在DevEco Studio中可以通过以下命令获得任务相关的信息。
    
    
    hvigorw taskTree

获取任务树时会根据工程中的模块将模块中注册的任务树以下图形式输出：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fb/v3/6dvQfxqRSTGg2wkTEig5cA/zh-cn_image_0000002713399062.png?HW-CC-KV=V1&HW-CC-Date=20260908T090137Z&HW-CC-Expire=86400&HW-CC-Sign=7D1E66CA2CE3ECCAD61282285E52EBF779BD07D1FFB7AE27819ED8A0CC419208)

#### 仓颉任务说明

#### [h2]Cangjie

  * CangjiePreBuild：模块级预检查任务。
  * GenerateCangjieResource：仓颉资源文件生成。
  * CompileCangjie：集成cjpm工具编译仓颉源码。
  * ProcessCangjieLibs：收集仓颉的.so文件。
  * AfterCompileCangjie：har包收集仓颉的.cjo文件。



#### [h2]Sync

  * SyncCangjieResource：资源发生变化，同步生成仓颉资源文件。


