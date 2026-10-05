---
name: document/cn/HMS-References/api-message-messagepicker
title: Overview
uri: https://developer.huawei.com/consumer/cn/doc/HMS-References/api-message-messagepicker
source: portal
---

CLASS info  
---  
public class MessagePicker implements Parcelable  
指定接收消息的集合，近场扫到sharingcode后，MessagePicker需要做匹配，多个过滤器任何一个匹配成功就认为匹配  
  
## Nested Class Summary

Type| Name| Desc  
---|---|---  
Class| [MessagePicker.Builder](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/api-message-messagepicker-builder)| MessagePicker的构造类  
  
## Field Summary

Type| Name| Desc  
---|---|---  
public static final Creator<MessagePicker>| CREATOR|   
  
public static final MessagePicker| INCLUDE_ALL_TYPES| 返回该应用程序发布的所有消息类型  
  
## Public Method Summary

Return| Method  
---|---  
boolean| equals(Object other)  
判断其他对象是否与本实例相同  
int| hashCode()  
获取hash值  
String| toString()  
把对象转化成可读的字符串  
void| writeToParcel(Parcel dest, int flags)  
序列化打包，把值写入dest容器  
  
## Public Methods

Method  
---  
public boolean equals(Object other)  
判断其他对象是否与本实例相同。  
  
Parameters

Parameter name| Parameter desc  
---|---  
other| 其他对象  
Method  
---  
public int hashCode()  
获取hash值。  
Method  
---  
public String toString()  
把对象转化成可读的字符串。  
Method  
---  
public void writeToParcel(Parcel dest, int flags)  
序列化打包，把值写入dest容器。  
  
Parameters

Parameter name| Parameter desc  
---|---  
dest| 对象被写入的parcel  
flags| 写入方式
