---
name: document/cn/AppGallery-connect-References/agconnectfunction-ts-0000001522540169
title: AGConnectFunction
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agconnectfunction-ts-0000001522540169
---

# AGConnectFunction

AGConnect Cloud Functions SDK的入口类。

## Method Summary

|Qualifier and Type|Method Name and Description|
|:----------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------|
|[FunctionCallable](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/functioncallable-ts-0000001471220978)|[wrap](#section1568912101459)(httpTriggerURI: string) 通过函数的HTTP触发器标识设置需要调用的函数。|

## Methods

### wrap

|Method|
|:----------------------------------------------------------------------|
|wrap(httpTriggerURI: string): FunctionCallable 通过函数的HTTP触发器标识设置需要调用的函数。|

**Parameters**

|Name|Description|
|:-------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|httpTriggerURI|需要调用的云函数对应的HTTP触发器的标识，查询方法可参见[查询触发器标识](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/harmony-ts-call-func-0000001563507977#section11652152615214)。|

**Return**

|Type|Description|
|:----------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------|
|[FunctionCallable](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/functioncallable-ts-0000001471220978)|返回可以发起函数调用的[FunctionCallable](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/functioncallable-ts-0000001471220978)实例。|

