---
name: document/cn/HMSCore-References/awareness-capture-headsetstatusresponse-0000001050166013
title: HeadsetStatusResponse
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-References/awareness-capture-headsetstatusresponse-0000001050166013
---

# HeadsetStatusResponse

* 支持的场景：手机。
* 支持的OS：EMUI 7.0及以上，Android 7.0及以上。

|Class Info|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public class [HeadsetStatusResponse](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/awareness-capture-headsetstatusresponse-0000001050166013) 耳机状态的请求响应。可通过调用[CaptureClient](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/awareness-captureclient-0000001050164395)中提供的[getHeadsetStatus](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/awareness-captureclient-0000001050164395#section549717449593)方法获取。|

## Public Method Summary

|Qualifier and Type|Method Name|
|:-----------------------------------------------------------------------------------------------------------------------------|:------------------------------------------|
|[HeadsetStatus](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/headset-status-4-0000001050165080)|[getHeadsetStatus](#section6531755161213)()|

## Public Methods

### getHeadsetStatus

|Method|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public [HeadsetStatus](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/headset-status-4-0000001050165080) getHeadsetStatus() 获取耳机状态信息，返回当前检测到的耳机连接状态。|

**Returns**

|Type|Description|
|:-----------------------------------------------------------------------------------------------------------------------------|:----------|
|[HeadsetStatus](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/headset-status-4-0000001050165080)|耳机状态信息。|

