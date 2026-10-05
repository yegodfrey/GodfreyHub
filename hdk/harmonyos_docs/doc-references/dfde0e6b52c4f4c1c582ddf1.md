---
name: document/cn/doc-references/reflectiveoperationexception-0000001054199726
title: ReflectiveOperationException
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/reflectiveoperationexception-0000001054199726
source: portal
---

# ReflectiveOperationException  
  
[java.lang.Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) |---[java.lang.Throwable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436) |---|---[java.lang.Exception](https://developer.harmonyos.com/cn/docs/documentation/doc-references/exception-0000001054119708) |---|---|---java.lang.ReflectiveOperationException
    
    public class ReflectiveOperationException
    extends [Exception](https://developer.harmonyos.com/cn/docs/documentation/doc-references/exception-0000001054119708)  
  
---  
Common superclass of exceptions thrown by reflective operations in core reflection.

**Since:**

1.7

**See Also:**

[LinkageError](https://developer.harmonyos.com/cn/docs/documentation/doc-references/linkageerror-0000001054678425), 

#### Constructor Summary

Constructor | Description  
---|---  
[ReflectiveOperationException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/reflectiveoperationexception-0000001054199726#ZH-CN_TOPIC_0000001054199726__ReflectiveOperationException--)​() |  Constructs a new exception with null as its detail message.   
[ReflectiveOperationException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/reflectiveoperationexception-0000001054199726#ZH-CN_TOPIC_0000001054199726__ReflectiveOperationException-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) message) |  Constructs a new exception with the specified detail message.   
[ReflectiveOperationException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/reflectiveoperationexception-0000001054199726#ZH-CN_TOPIC_0000001054199726__ReflectiveOperationException-java_lang_String-java_lang_Throwable-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) message, [Throwable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436) cause) |  Constructs a new exception with the specified detail message and cause.   
[ReflectiveOperationException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/reflectiveoperationexception-0000001054199726#ZH-CN_TOPIC_0000001054199726__ReflectiveOperationException-java_lang_Throwable-)​([Throwable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436) cause) |  Constructs a new exception with the specified cause and a detail message of (cause==null ? null : cause.toString()) (which typically contains the class and detail message of cause).   
  
#### Method Summary

Methods inherited from class java.lang.[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
---  
[clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__clone--), [equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__equals-java_lang_Object-), [finalize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__finalize--), [getClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__getClass--), [hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__hashCode--), [notify](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notify--), [notifyAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notifyAll--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-int-)  
  
Methods inherited from class java.lang.[Throwable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436)  
---  
[addSuppressed](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436#ZH-CN_TOPIC_0000001054358436__addSuppressed-java_lang_Throwable-), [fillInStackTrace](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436#ZH-CN_TOPIC_0000001054358436__fillInStackTrace--), [getCause](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436#ZH-CN_TOPIC_0000001054358436__getCause--), [getLocalizedMessage](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436#ZH-CN_TOPIC_0000001054358436__getLocalizedMessage--), [getMessage](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436#ZH-CN_TOPIC_0000001054358436__getMessage--), [getStackTrace](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436#ZH-CN_TOPIC_0000001054358436__getStackTrace--), [getSuppressed](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436#ZH-CN_TOPIC_0000001054358436__getSuppressed--), [initCause](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436#ZH-CN_TOPIC_0000001054358436__initCause-java_lang_Throwable-), [printStackTrace](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436#ZH-CN_TOPIC_0000001054358436__printStackTrace--), [printStackTrace](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436#ZH-CN_TOPIC_0000001054358436__printStackTrace-java_io_PrintStream-), [printStackTrace](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436#ZH-CN_TOPIC_0000001054358436__printStackTrace-java_io_PrintWriter-), [setStackTrace](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436#ZH-CN_TOPIC_0000001054358436__setStackTrace-java_lang_StackTraceElement:A-), [toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436#ZH-CN_TOPIC_0000001054358436__toString--)  
  
#### Constructor Detail

#### [h2]ReflectiveOperationException

public ReflectiveOperationException​()

Constructs a new exception with null as its detail message. The cause is not initialized, and may subsequently be initialized by a call to [Throwable.initCause(java.lang.Throwable)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436#ZH-CN_TOPIC_0000001054358436__initCause-java_lang_Throwable-). 

#### [h2]ReflectiveOperationException

public ReflectiveOperationException​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) message)

Constructs a new exception with the specified detail message. The cause is not initialized, and may subsequently be initialized by a call to [Throwable.initCause(java.lang.Throwable)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436#ZH-CN_TOPIC_0000001054358436__initCause-java_lang_Throwable-). 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
message  |  the detail message. The detail message is saved for later retrieval by the [Throwable.getMessage()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436#ZH-CN_TOPIC_0000001054358436__getMessage--) method.  
  
#### [h2]ReflectiveOperationException

public ReflectiveOperationException​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) message, [Throwable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436) cause)

Constructs a new exception with the specified detail message and cause. 

Note that the detail message associated with cause is not automatically incorporated in this exception's detail message.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
message  |  the detail message (which is saved for later retrieval by the [Throwable.getMessage()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436#ZH-CN_TOPIC_0000001054358436__getMessage--) method).  
cause  |  the cause (which is saved for later retrieval by the [Throwable.getCause()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436#ZH-CN_TOPIC_0000001054358436__getCause--) method). (A null value is permitted, and indicates that the cause is nonexistent or unknown.)  
  
#### [h2]ReflectiveOperationException

public ReflectiveOperationException​([Throwable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436) cause)

Constructs a new exception with the specified cause and a detail message of (cause==null ? null : cause.toString()) (which typically contains the class and detail message of cause). 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
cause  |  the cause (which is saved for later retrieval by the [Throwable.getCause()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436#ZH-CN_TOPIC_0000001054358436__getCause--) method). (A null value is permitted, and indicates that the cause is nonexistent or unknown.)
