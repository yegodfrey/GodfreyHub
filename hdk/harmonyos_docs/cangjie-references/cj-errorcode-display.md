---
name: cangjie-references/cj-errorcode-display
title: 屏幕错误码
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-display
nodePath: 应用框架 / ArkUI（方舟UI框架） / 错误码 / 图形图像 / 屏幕错误码
---

# 屏幕错误码

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/89/v3/xnPJxTDDTIq6PL8GXJuFrg/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090155Z&HW-CC-Expire=86400&HW-CC-Sign=1192C7194DF34D0983F9A95503C3D526DE379BCDE48FA3CBABA24FF66433E55E)

以下仅介绍本模块特有错误码，通用错误码请参考[通用错误码说明文档](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-universal)。

#### 1400001 无效的显示设备

**错误信息**

Invalid display or screen.

**错误描述**

当操作无效的显示设备（包括虚拟屏）时，会报此错误码。

**可能原因**

  1. 虚拟屏未创建。

  2. 虚拟屏已销毁。




**处理步骤**

  1. 在操作虚拟屏前，检查该虚拟屏是否已经存在，确保已创建该虚拟屏。

  2. 在操作虚拟屏前，检查虚拟屏是否已被销毁，确保其未被销毁，再进行相关操作。




#### 1400002 无权限操作

**错误信息**

Unauthorized operation.

**错误描述**

当对无操作权限的对象进行操作时，会报此错误码。

**可能原因**

操作了其它进程的虚拟屏对象。

**处理步骤**

请检查是否非法操作了其他进程的对象，并删除相关非法操作。

#### 1400003 系统服务工作异常

**错误信息**

This display manager service works abnormally.

**错误描述**

当系统服务工作异常时，会报此错误码。

**可能原因**

  1. 屏幕管理服务没有正常启动。

  2. 底层图形图像合成渲染异常。




**处理步骤**

系统服务内部工作异常，请稍候重试，或者重启设备尝试。
