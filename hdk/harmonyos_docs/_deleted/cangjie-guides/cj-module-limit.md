---
name: cangjie-guides/cj-module-limit
title: 模块限制
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-module-limit
nodePath: 开发环境搭建 / 工程创建 / 模块管理 / 模块限制
---

# 模块限制

关于纯仓颉模块间的依赖：

  * 目前仅支持纯仓颉 HAP 模块引用纯仓颉 HAR 模块，暂不支持纯仓颉模块引用其他模块。
  * 纯仓颉 HAP 模块引用纯仓颉的 HAR 模块，可以在主模块纯仓颉 HAP 下的 oh-package.json5 中引入被依赖纯仓颉模块依赖声明。



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e9/v3/T6RhjIEMQ4i13lh5cKJqGQ/zh-cn_image_0000002731538883.png?HW-CC-KV=V1&HW-CC-Date=20260903T111619Z&HW-CC-Expire=86400&HW-CC-Sign=0453EFF664929A38556C19D0E051DDBDFB557E35FF06F90CFE7AF0DCD4E403EA)

不支持如下场景：

  * 不支持仓颉为入口并且包含 ets 文件夹的模块。
  * 不支持在纯仓颉模块中添加 Ability、Widget、Worker 相关操作。
  * 不支持在仓颉静态库模块中添加 Worker、Page 相关操作。
  * 不支持在 ArkUI-X 跨平台工程中使用仓颉。


