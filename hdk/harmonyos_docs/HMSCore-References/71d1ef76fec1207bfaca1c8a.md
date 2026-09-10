---
name: document/cn/HMSCore-References/client-drive-channels-stop-0000001050126005
title: Drive.Channels.Stop
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-References/client-drive-channels-stop-0000001050126005
---

# Drive.Channels.Stop

|Class Info|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public class Drive.Channels.Stop extends [DriveRequest](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/client-driverequest-0000001050124058)\<Void\> Drive.Channels.Stop类结构。|

#### Protected Constructor Summary

|Constructor Name|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|[Drive.Channels.Stop](#section109291512165219)([Channel](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/client-channel-0000001050126027) content) Drive.Channels.Stop构造方法。|

#### Public Method Summary

|Qualifier and Type|Method Name and Description|
|:---------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------------------------------------------------------------|
|Void|[execute](#section588643695720)() 发送HTTP请求，返回要转换的对象。|
|[Drive.Channels.Stop](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/client-drive-channels-stop-0000001050126005)|[set](#section1328849185514)(String parameterName, Object value) 设置其他参数名称和参数值。|
|[Drive.Channels.Stop](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/client-drive-channels-stop-0000001050126005)|[setFields](#section169917338544)(String fields) 设置希望在响应中包含的字段。|
|[Drive.Channels.Stop](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/client-drive-channels-stop-0000001050126005)|[setForm](#section204071650185510)(String form) 设置响应的数据格式。|
|[Drive.Channels.Stop](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/client-drive-channels-stop-0000001050126005)|[setPrettyPrint](#section19528122413567)(Boolean prettyPrint) 设置返回带有缩进和换行符的响应（格式化，便于阅读打印）。|
|[Drive.Channels.Stop](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/client-drive-channels-stop-0000001050126005)|[setQuotaId](#section125193581563)(String quotaId) 设置一个不超过40字符的字符串，用于代表用户，主要用于服务端基于用户限制单个用户的API访问数量，用做API访问量配额控制。|

#### Protected Constructors

#### Drive.Channels.Stop

|Constructor|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|protected Drive.Channels.Stop([Channel](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/client-channel-0000001050126027) content) Drive.Channels.Stop的构造方法。|

#### Public Methods

#### setFields

|Method|
|:-----------------------------------------------------------------|
|public Drive.Channels.Stop setFields(String fields) 设置希望在响应中包含的字段。|

Parameters  

|Name|Description|
|:-----|:----------------------|
|fields|希望在响应中包含的字段，支持\*匹配所有字段。|

Returns  

|Type|Description|
|:------------------|:--------------------------|
|Drive.Channels.Stop|返回一个Drive.Channels.Stop类对象。|

#### set

|Method|
|:-------------------------------------------------------------------------------|
|public Drive.Channels.Stop set(String parameterName, Object value) 设置其他参数名称和参数值。|

Parameters  

|Name|Description|
|:------------|:----------|
|parameterName|参数名称。|
|value|参数值。|

Returns  

|Type|Description|
|:------------------|:--------------------------|
|Drive.Channels.Stop|返回一个Drive.Channels.Stop类对象。|

#### setForm

|Method|
|:---------------------------------------------------------|
|public Drive.Channels.Stop setForm(String form) 设置响应的数据格式。|

Parameters  

|Name|Description|
|:---|:-----------------------|
|form|响应的数据格式，默认为json，只支持json。|

Returns  

|Type|Description|
|:------------------|:--------------------------|
|Drive.Channels.Stop|返回一个Drive.Channels.Stop类对象。|

#### setPrettyPrint

|Method|
|:------------------------------------------------------------------------------------------|
|public Drive.Channels.Stop setPrettyPrint(Boolean prettyPrint) 设置返回带有缩进和换行符的响应（格式化，便于阅读打印）。|

Parameters  

|Name|Description|
|:----------|:------------------|
|prettyPrint|布尔值，标识响应是否带有缩进和换行符。|

Returns  

|Type|Description|
|:------------------|:--------------------------|
|Drive.Channels.Stop|返回一个Drive.Channels.Stop类对象。|

#### setQuotaId

|Method|
|:-------------------------------------------------------------------------------------------------------------------|
|public Drive.Channels.Stop setQuotaId(String quotaId) 设置一个不超过40字符的字符串，用于代表用户，主要用于服务端基于用户限制单个用户的API访问数量，用做API访问量配额控制。|

Parameters  

|Name|Description|
|:------|:-----------------------------------------------------------|
|quotaId|一个不超过40字符的字符串，用于代表用户，主要用于服务端基于用户限制单个用户的API访问数量，用做API访问量配额控制。|

Returns  

|Type|Description|
|:------------------|:--------------------------|
|Drive.Channels.Stop|返回一个Drive.Channels.Stop类对象。|

#### execute

|Method|
|:-------------------------------------------------------|
|public T execute() throws IOException 发送HTTP请求，返回要转换的对象。|

Throws  

|Name|Description|
|:------------------|:----------------------------------------------|
|java.io.IOException|若接口调用异常，会返回IOException。您可以通过getMessage方法获取错误描述。|

Tip：Drive.Channels.Stop类继承自[DriveRequest](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/client-driverequest-0000001050124058)\<Void\>。调用execute方法无返回。  

#### Sample Code

```
private void stopChannel(Drive drive, String id, String resourceId){
    try{
        Channel channel = new Channel();
        channel.setId(id);
        channel.setCategory("api#channel");
        channel.setResourceId(resourceId);
        drive.channels().stop(channel).execute();
    } catch (Exception e){
        Log.e(TAG, "listChange error: " + e.getMessage());
    }
}
```

