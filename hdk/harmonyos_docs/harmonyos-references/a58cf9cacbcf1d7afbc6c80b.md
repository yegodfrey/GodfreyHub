---
name: document/cn/harmonyos-references/_rcp___response_callback_object
title: Rcp_ResponseCallbackObject
uri: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___response_callback_object
---

# Rcp_ResponseCallbackObject

> phone 5.0.0(12)+ | 2in1 5.0.1(13)+ | tablet 5.0.0(12)+ | tv 5.1.1(19)+ | wearable 5.1.0(18)+

## 概述

响应回调结构体。

**起始版本：** 5.0.0(12)

**相关模块：** [RemoteCommunication](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview)

**所在头文件：** [rcp.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/rcp_8h)

## 汇总

### 成员变量

|名称|描述|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------|:------|
|[Rcp_ResponseCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_responsecallback) [callback](#callback)|响应回调函数。|
|void * [usrCtx](#usrctx)|用户上下文。|

## 结构体成员变量说明

### callback

```cpp
Rcp_ResponseCallback Rcp_ResponseCallbackObject::callback
```

**描述**

响应回调函数。

### usrCtx

```cpp
void* Rcp_ResponseCallbackObject::usrCtx
```

**描述**

用户上下文。

