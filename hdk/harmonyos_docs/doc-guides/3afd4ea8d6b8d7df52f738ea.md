---
name: document/cn/doc-guides/vibrator-overview-0000001281480506
title: Vibrator开发概述
uri: https://developer.huawei.com/consumer/cn/doc/doc-guides/vibrator-overview-0000001281480506
source: portal
---

# Vibrator开发概述

马达振动服务最大化开放硬工最新马达器件能力，通过拓展原生马达服务实现振动与交互融合设计，打造细腻精致的一体化振动体验和差异化体验，提升用户交互效率和易用性、提升用户体验、增强品牌竞争力。

#### 运作机制

Vibrator属于控制类小器件，主要包含以下四个模块：Vibrator API，Vibrator Framework，Vibrator Service和HDF层。

**图1** 控制类小器件中的Vibrator

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612113806.49620845307168424386374741134342:50001231000000:2800:F38F854A4EDC77410D4B335D5FBE346AD73D55717F8104007B8E8AC9A099408C.png?needInitFileName=true?needInitFileName=true)

     * Vibrator API：提供振动器基础的API，主要包含振动器的列表查询，振动器的振动器效果查询，触发/关闭振动器等接口。

     * Vibrator Framework：实现振动器的框架层管理，实现与控制类小器件Service的通信。

     * Vibrator Service：实现控制器的服务管理。

     * HDF层：适配不同设备。

#### 约束与限制

在使用振动器时，开发者需要配置请求振动器的权限ohos.permission.VIBRATE，才能控制振动器振动，敏感级别是system_grant。
