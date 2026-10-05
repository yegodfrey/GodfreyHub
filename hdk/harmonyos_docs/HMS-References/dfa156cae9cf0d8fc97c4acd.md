---
name: document/cn/HMS-References/drivekit-drive-changes
title: Drive.Changes
uri: https://developer.huawei.com/consumer/cn/doc/HMS-References/drivekit-drive-changes
source: portal
---

class info  
---  
public class Drive.Changes extends java.lang.Object  
Drive.Changes类结构。  
  
## Nested Class Summary

Type| Name| Desc  
---|---|---  
class| Drive.Changes.GetStartCursor| Drive.Changes.GetStartCursor类声明。  
class| Drive.Changes.List| Drive.Changes.List类声明。  
class| Drive.Changes.Subscribe| Drive.Changes.Subscribe类声明。  
  
## Public Constructor Summary

Constructor name  
---  
Changes ()  
Drive.Changes构造方法。  
  
## Public Method Summary

Return type| Method name  
---|---  
Drive.Changes.GetStartCursor| getStartCursor()  
从用户获取cursor时间开始，开启文件变化通知。  
Drive.Changes.List| list(String cursor)  
列举所有变化。  
Drive.Changes.Subscribe| subscribe(String cursor, Channel content)  
订阅用户云端所有文件(包括文件夹)的变化，如果有变化，则会向业务方发送回调通知。  
  
## Public Constructor

constructor  
---  
Drive.Changes ()  
构造一个Drive.Changes类对象。  
  
## Public Methods

Method  
---  
public Drive.Changes.GetStartCursor getStartCursor() throws java.io.IOException  
从用户获取cursor时间开始，开启文件变化通知。  
  
**Throws**

Parameter name| Parameter desc  
---|---  
java.io.IOException| 若接口调用异常，会返回IOException。开发者可以通过getMessage方法获取错误描述。  
  
**Return**  


type| desc  
---|---  
Drive.Changes.GetStartCursor| 返回一个Drive.Changes.GetStartCursor类对象。  
  
  


Method  
---  
public Drive.Changes.List list(String cursor) throws java.io.IOException  
列举所有变化。  
  
**Parameters**

Parameter name| Parameter desc  
---|---  
cursor| 分页游标，由前一个响应的nextCursor获取或者从getStartCursor方法获取；由于每次查询请求，服务器返回的changes列表数量至多为100个，如果本次待返回的数量大于100，则需要设置cursor，用以指定下一次查询的分页游标，再次进行遍历查询请求，直至响应结果中的nextCursor为空，才能获取到所有待查询的changes列表信息。  
  
**Throws**  


Parameter name| Parameter desc  
---|---  
java.io.IOException| 若接口调用异常，会返回IOException。开发者可以通过getMessage方法获取错误描述。  
  
**Return**  


type| desc  
---|---  
Drive.Changes.List| 返回一个Drive.Changes.List类对象。  
Method  
---  
  
public Drive.Changes.Subscribe subscribe(String cursor, Channel content) throws java.io.IOException  
订阅云端所有文件(包括文件夹)的变化，如果有变化，则会向业务方发送回调通知。  
  
**Parameters**

Parameter name| Parameter desc  
---|---  
cursor| 分页游标，由前一个响应的nextCursor获取或者从getStartCursor方法获取。  
content| 订阅指定Channel。  
  
**Throws**  


Parameter name| Parameter desc  
---|---  
java.io.IOException| 若接口调用异常，会返回IOException。开发者可以通过getMessage方法获取错误描述。  
  
**Return**  


type| desc  
---|---  
Drive.Changes.Subscribe| 返回一个Drive.Changes.Subscribe类对象。
