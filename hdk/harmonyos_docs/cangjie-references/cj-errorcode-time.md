---
name: cangjie-references/cj-errorcode-time
title: 时间时区服务错误码
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-time
nodePath: 系统 / 基础功能 / Basic Services Kit（基础服务） / 错误码 / 时间时区服务错误码
---

# 时间时区服务错误码

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f8/v3/3nGD6h2xQkqfLJlxCMYEng/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090221Z&HW-CC-Expire=86400&HW-CC-Sign=79B05ABCE78B58387B410F165F533AF2BF6AA7F2C97CF49F4130FC6452E8109D)

以下仅介绍本模块特有错误码，通用错误码请参考[通用错误码说明文档](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-universal)。

#### -1 时间时区服务异常

**错误信息**

The parameter check failed or permission denied or system error.

**错误描述**

参数校验失败、权限校验失败或者时间时区服务异常。

**可能原因**

该错误码代表一种通用错误码，可根据错误信息判断具体异常，可能原因如下：

  1. 参数校验失败，传入参数无效。
  2. 权限校验失败，权限未配置。应用设置时间未配置ohos.permission.SET_TIME或者设置时区未配置ohos.permission.SET_TIME_ZONE。
  3. 系统运行异常。内存申请、多线程处理等内核通用错误。



**处理步骤**

  1. 参数校验失败，传入参数无效。检查参数是否按照要求传入。
  2. 权限校验失败，应用设置时间配置ohos.permission.SET_TIME或者设置时区配置ohos.permission.SET_TIME_ZONE。
  3. 系统运行异常。确认内存是否足够。



#### 13000001 网络或操作系统异常

**错误信息**

Network connection error or OS error.

**错误描述**

网络或操作系统异常。

**可能原因**

网络或操作系统异常。网络无法连接或无法创建套接字等系统异常。

**处理步骤**

网络或操作系统异常。确认网络连接是否成功，系统资源是否足够。
