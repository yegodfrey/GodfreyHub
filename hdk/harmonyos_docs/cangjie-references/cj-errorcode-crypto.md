---
name: cangjie-references/cj-errorcode-crypto
title: crypto framework错误码
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-crypto
nodePath: 系统 / 安全 / Crypto Architecture Kit（加解密算法框架服务） / 错误码 / crypto framework错误码
---

# crypto framework错误码

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/80/v3/T7ff_GndSBWr65hIePcnBA/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090218Z&HW-CC-Expire=86400&HW-CC-Sign=384E51F5FDEAEABE93A15617BDE6BF5334029B3657AD2D9A9ACADB0EB92C87AF)

以下仅介绍本模块特有错误码，通用错误码请参考[通用错误码说明文档](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-universal)。

#### 17620001 内存操作失败

**错误信息**

Memory operation failed.

**错误描述**

内存操作失败。

**可能原因**

当前系统内存分配失败。

**处理步骤**

  1. 检查当前系统功能是否正常。
  2. 业务检查数据是否超长，导致系统无法分配内存。



#### 17620002 Cangjie和C之间转换参数失败

**错误信息**

Failed to convert parameters between cj and c.

**错误描述**

Cangjie和C之间转换参数失败。

**可能原因**

系统出现的不可预料的错误。

**处理步骤**

检查当前系统功能是否正常。

#### 17620003 参数校验失败

**错误信息**

Parameter check failed.

**错误描述**

参数校验失败。

**可能原因**

输入的参数超出了规格范围，如长度、值等。

**处理步骤**

检查当前输入的参数是否在支持的范围内。

#### 17620004 无效的函数调用

**错误信息**

invalid function call.

**错误描述**

无效的函数调用。

**可能原因**

当前操作不支持当前函数调用。

**处理步骤**

检查当前函数调用是否合理。

#### 17630001 算法相关的操作错误，调用三方算法库API出错

**错误信息**

Crypto operation error.

**错误描述**

调用三方算法库API出错。

**可能原因**

加解密算法框架与三方算法库交互时，出现错误。

**处理步骤**

检查该接口或相关联接口输入参数的正确性。
