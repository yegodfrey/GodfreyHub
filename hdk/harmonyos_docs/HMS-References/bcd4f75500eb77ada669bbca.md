---
name: document/cn/HMS-References/awareness-capture-headsetstatusresponse
title: HeadsetStatusResponse
uri: https://developer.huawei.com/consumer/cn/doc/HMS-References/awareness-capture-headsetstatusresponse
source: portal
---

class info  
---  
public class HeadsetStatusResponse extends BaseResponse<HeadsetStatus>  
耳机状态的请求响应。可通过调用[CaptureClient](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/awareness-captureclient)中提供的[getHeadsetStatus](https://developer.huawei.com/consumer/cn/doc/awareness-captureclient#getHeadsetStatus)方法获取。  
  
## Public Method Summary

Return type| Method name  
---|---  
HeadsetStatus| getHeadsetStatus()  
  
## Public Methods

Method  
---  
public HeadsetStatus getHeadsetStatus()  
获取耳机状态信息，返回当前检测到的耳机连接状态。  
  
**Return**

Type| desc  
---|---  
HeadsetStatus| 耳机状态信息。
