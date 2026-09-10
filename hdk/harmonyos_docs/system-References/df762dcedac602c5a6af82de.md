---
name: document/cn/system-References/network-file-exception-interrupted-0000001094224185
title: InterruptedException
uri: https://developer.huawei.com/consumer/cn/doc/system-References/network-file-exception-interrupted-0000001094224185
---

# InterruptedException

|Class Info|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public class InterruptedException extends [NetworkException](https://developer.huawei.com/consumer/cn/doc/system-References/network-file-exception-networkexception-0000001091598055) 文件上传/下载中断异常实体类（多为主动取消或者暂停请求）。|

#### Public Constructor Summary

|Constructor Name|
|:-------------------------------------------------------------------------------------------------------------------------------------|
|public [InterruptedException](#section17974132313581)(int code, String message, Throwable throwable) 使用已有的参数，构造InterruptedException对象。|
|public [InterruptedException](#section114762417137)(String message) 使用指定错误信息，构造InterruptedException对象。|
|public [InterruptedException](#section532465741116)(String message, Throwable throwable) 使用指定错误信息和异常，构造InterruptedException对象。|

#### Public Method Summary

|Qualifier and Type|Method Name and Description|
|:-----------------|:----------------------------------------------------|
|public int|[getStatusCode](#section668132695614)() 获取任务中断返回的状态码。|

#### Public Constructors

#### InterruptedException(int code, String message, Throwable throwable)

|Constructor|
|:----------------------------------------------------------------------------------------------------------|
|public InterruptedException(int code, String message, Throwable throwable) 使用已有参数，构造InterruptedException对象。|

Parameters  

|Name|Description|
|:--------|:------------|
|code|任务中断返回的状态码。|
|message|错误信息。|
|throwable|Throwable异常类。|

#### InterruptedException(String message)

|Constructor|
|:-----------------------------------------------------------------------------|
|public InterruptedException(String message) 使用指定错误信息，构造InterruptedException对象。|

Parameters  

|Name|Description|
|:------|:----------|
|message|错误信息。|

#### InterruptedException(String message, Throwable throwable)

|Constructor|
|:-----------------------------------------------------------------------------------------------------|
|public InterruptedException(String message, Throwable throwable) 使用指定错误信息和异常，构造InterruptedException对象。|

Parameters  

|Name|Description|
|:--------|:------------|
|message|错误信息。|
|throwable|Throwable异常类。|

#### Public Methods

#### getStatusCode

|Method|
|:---------------------------------------|
|public int getStatusCode() 获取任务中断返回的状态码。|

Returns  

|Type|Description|
|:---|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|int|任务中断返回的状态码。 * [CANCEL](https://developer.huawei.com/consumer/cn/doc/system-References/network-file-result-0000001091587549#section16548191214615)：任务取消 <!-- --> * [PAUSE](https://developer.huawei.com/consumer/cn/doc/system-References/network-file-result-0000001091587549#section82212552477)：任务暂停|

