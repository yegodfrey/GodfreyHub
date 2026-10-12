---
name: document/cn/harmonyos-references/_rcp___session_listener
title: Rcp_SessionListener
uri: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___session_listener
---

# Rcp_SessionListener

> phone 5.0.0(12)+ | 2in1 5.0.1(13)+ | tablet 5.0.0(12)+ | tv 5.1.1(19)+ | wearable 5.1.0(18)+

## 概述

> phone | 2in1 | tablet | tv | wearable

关闭或取消会话事件的回调函数。

**起始版本：** 5.0.0(12)

**相关模块：** [RemoteCommunication](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview)

**所在头文件：** [rcp.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/rcp_8h)

## 汇总

> phone | 2in1 | tablet | tv | wearable

### 成员变量

> phone | 2in1 | tablet | tv | wearable

|名称|描述|
|:---------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------|
|void(* [onClosed](#onclosed) )(void)|此函数在[Rcp_Session](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_session)关闭时调用此函数。|
|void(* [onCanceled](#oncanceled) )(void)|此函数在[Rcp_Session](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_session)取消时调用此函数。|

## 结构体成员变量说明

> phone | 2in1 | tablet | tv | wearable

### onCanceled

> phone 5.0.0(12)+ | 2in1 5.0.1(13)+ | tablet 5.0.0(12)+ | tv 5.1.1(19)+ | wearable 5.1.0(18)+

```cpp
void(* Rcp_SessionListener::onCanceled) (void)
```

**描述**

此函数在[Rcp_Session](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_session)取消时调用此函数。

### onClosed

> phone 5.0.0(12)+ | 2in1 5.0.1(13)+ | tablet 5.0.0(12)+ | tv 5.1.1(19)+ | wearable 5.1.0(18)+

```cpp
void(* Rcp_SessionListener::onClosed) (void)
```

**描述**

此函数在[Rcp_Session](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_session)关闭时调用此函数。

