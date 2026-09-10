---
name: document/cn/AppGallery-connect-References/agconnectfunction-java-0000001199084631
title: AGConnectFunction
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agconnectfunction-java-0000001199084631
---

# AGConnectFunction

|Class Info|
|:------------------------------------------------------------------|
|public class AGConnectFunction 初始化一个AGConnectFunction实例，并设置调用哪个云函数。|

#### Public Method Summary

|Qualifier and Type|Method|
|:---------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------------------|
|static [AGConnectFunction](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agconnectfunction-java-0000001199084631)|[getInstance](#section17926173407)() 初始化一个AGConnectFunction实例。|
|[FunctionCallable](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/functioncallable-java-0000001153164826)|[wrap](#section358219334409)(String httpTriggerURI) 通过函数的HTTP触发器标识设置调用哪个云函数。|

#### Public Methods

#### getInstance

|Method|
|:----------------------------------------------------------------------|
|public static AGConnectFunction getInstance() 初始化一个AGConnectFunction实例。|

Return  

|Type|Description|
|:--------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------|
|[AGConnectFunction](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agconnectfunction-java-0000001199084631)|返回[AGConnectFunction](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agconnectfunction-java-0000001199084631)实例。|

#### wrap

|Method|
|:-------------------------------------------------------------|
|public FunctionCallable wrap(String httpTriggerURI) 设置需要调用的函数。|

Parameters  

|Name|Description|
|:-------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|httpTriggerURI|需要调用的云函数对应的HTTP触发器的标识，查询方法可参见[查询触发器标识](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/call-func-harmony-java-0000001563503957#section11652152615214)。|

Return  

|Type|Description|
|:------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------|
|[FunctionCallable](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/functioncallable-java-0000001153164826)|返回可以发起函数调用的[FunctionCallable](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/functioncallable-java-0000001153164826)实例。|

