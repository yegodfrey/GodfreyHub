---
name: document/cn/HMS-References/drivekit-drive-channels
title: Drive.Channels
uri: https://developer.huawei.com/consumer/cn/doc/HMS-References/drivekit-drive-channels
source: portal
---

class info  
---  
public class Drive.Channels extends java.lang.Object  
Drive.Channels类结构。  
  
## Nested Class Summary

Type| Name| Desc  
---|---|---  
class| Drive.Channels.Stop| Drive.Channels.Stop类声明。  
  
## Public Constructor Summary

Constructor name  
---  
Channels()Drive.Channels构造方法。  
  
## Public Method Summary

Return type| Method name  
---|---  
Drive.Channels.Stop| stop(Channel content)关闭订阅某个Channel。  
  
## Public Constructor

constructor  
---  
Drive.Channels()  
构造一个Drive.Channels类对象。  
  
## Public Methods

Method  
---  
public Drive.Channels.Stop stop(Channel content) throws java.io.IOException  
关闭订阅某个Channel。  
  
**Parameters**

Parameter name| Parameter desc  
---|---  
content| 取消订阅指定的Channel。  
  
**Throws**

Parameter name| Parameter desc  
---|---  
java.io.IOException| 若接口调用异常，会返回IOException。开发者可以通过getMessage方法获取错误描述。  
  
**Return**

type| desc  
---|---  
Drive.Channels.Stop| 返回一个Drive.Channels.Stop类对象。  
  
**Tip：** 注意构造的Channel对象中的Id和resourceId与Changes.Subscribe的Channel对象的Id和resourceId要一致。
