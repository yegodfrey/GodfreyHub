---
name: document/cn/doc-references/remoteexception-0000001054518984
title: RemoteException
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/remoteexception-0000001054518984
source: portal
---

# RemoteException

[java.lang.Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) |---[java.lang.Throwable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436) |---|---[java.lang.Exception](https://developer.harmonyos.com/cn/docs/documentation/doc-references/exception-0000001054119708) |---|---|---ohos.rpc.RemoteException
    
    public class RemoteException
    extends [Exception](https://developer.harmonyos.com/cn/docs/documentation/doc-references/exception-0000001054119708)  
  
---  
Represents the remote exception. 

This class is an IPC exception class inherited from [Exception](https://developer.harmonyos.com/cn/docs/documentation/doc-references/exception-0000001054119708). This exception is thrown if the communication with a remote process fails, such as the failure to send and receive packets.

**Since:**

1

#### Constructor Summary

Constructor | Description  
---|---  
[RemoteException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/remoteexception-0000001054518984#ZH-CN_TOPIC_0000001054518984__RemoteException--)​() |  A constructor used to create a default RemoteException instance.   
[RemoteException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/remoteexception-0000001054518984#ZH-CN_TOPIC_0000001054518984__RemoteException-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) msg) |  A constructor used to create a RemoteException instance with a specified exception message.   
  
#### Method Summary

Methods inherited from class java.lang.[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
---  
[clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__clone--), [equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__equals-java_lang_Object-), [finalize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__finalize--), [getClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__getClass--), [hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__hashCode--), [notify](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notify--), [notifyAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notifyAll--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-int-)  
  
Methods inherited from class java.lang.[Throwable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436)  
---  
[addSuppressed](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436#ZH-CN_TOPIC_0000001054358436__addSuppressed-java_lang_Throwable-), [fillInStackTrace](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436#ZH-CN_TOPIC_0000001054358436__fillInStackTrace--), [getCause](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436#ZH-CN_TOPIC_0000001054358436__getCause--), [getLocalizedMessage](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436#ZH-CN_TOPIC_0000001054358436__getLocalizedMessage--), [getMessage](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436#ZH-CN_TOPIC_0000001054358436__getMessage--), [getStackTrace](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436#ZH-CN_TOPIC_0000001054358436__getStackTrace--), [getSuppressed](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436#ZH-CN_TOPIC_0000001054358436__getSuppressed--), [initCause](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436#ZH-CN_TOPIC_0000001054358436__initCause-java_lang_Throwable-), [printStackTrace](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436#ZH-CN_TOPIC_0000001054358436__printStackTrace--), [printStackTrace](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436#ZH-CN_TOPIC_0000001054358436__printStackTrace-java_io_PrintStream-), [printStackTrace](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436#ZH-CN_TOPIC_0000001054358436__printStackTrace-java_io_PrintWriter-), [setStackTrace](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436#ZH-CN_TOPIC_0000001054358436__setStackTrace-java_lang_StackTraceElement:A-), [toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436#ZH-CN_TOPIC_0000001054358436__toString--)  
  
#### Constructor Detail

#### [h2]RemoteException

public RemoteException​()

A constructor used to create a default RemoteException instance. 

**Since:**

1

#### [h2]RemoteException

public RemoteException​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) msg)

A constructor used to create a RemoteException instance with a specified exception message. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
msg  |  Indicates the exception message, which can be obtained using the [Throwable.getMessage()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436#ZH-CN_TOPIC_0000001054358436__getMessage--) method.  
  
**Since:**

3
