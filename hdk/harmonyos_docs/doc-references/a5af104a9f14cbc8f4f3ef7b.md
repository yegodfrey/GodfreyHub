---
name: document/cn/doc-references/invalidparameterspecexception-0000001054838506
title: InvalidParameterSpecException
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/invalidparameterspecexception-0000001054838506
source: portal
---

# InvalidParameterSpecException  
  
[java.lang.Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) |---[java.lang.Throwable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436) |---|---[java.lang.Exception](https://developer.harmonyos.com/cn/docs/documentation/doc-references/exception-0000001054119708) |---|---|---[java.security.GeneralSecurityException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/generalsecurityexception-0000001054838484) |---|---|---|---java.security.spec.InvalidParameterSpecException
    
    public class InvalidParameterSpecException
    extends [GeneralSecurityException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/generalsecurityexception-0000001054838484)  
  
---  
This is the exception for invalid parameter specifications.

**Since:**

1.2

**See Also:**

[AlgorithmParameters](https://developer.harmonyos.com/cn/docs/documentation/doc-references/algorithmparameters-0000001054199794), [AlgorithmParameterSpec](https://developer.harmonyos.com/cn/docs/documentation/doc-references/algorithmparameterspec-0000001054358527), [DSAParameterSpec](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dsaparameterspec-0000001054838502), 

#### Constructor Summary

Constructor | Description  
---|---  
[InvalidParameterSpecException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/invalidparameterspecexception-0000001054838506#ZH-CN_TOPIC_0000001054838506__InvalidParameterSpecException--)​() |  Constructs an InvalidParameterSpecException with no detail message.   
[InvalidParameterSpecException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/invalidparameterspecexception-0000001054838506#ZH-CN_TOPIC_0000001054838506__InvalidParameterSpecException-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) msg) |  Constructs an InvalidParameterSpecException with the specified detail message.   
  
#### Method Summary

Methods inherited from class java.lang.[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
---  
[clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__clone--), [equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__equals-java_lang_Object-), [finalize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__finalize--), [getClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__getClass--), [hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__hashCode--), [notify](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notify--), [notifyAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notifyAll--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-int-)  
  
Methods inherited from class java.lang.[Throwable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436)  
---  
[addSuppressed](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436#ZH-CN_TOPIC_0000001054358436__addSuppressed-java_lang_Throwable-), [fillInStackTrace](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436#ZH-CN_TOPIC_0000001054358436__fillInStackTrace--), [getCause](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436#ZH-CN_TOPIC_0000001054358436__getCause--), [getLocalizedMessage](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436#ZH-CN_TOPIC_0000001054358436__getLocalizedMessage--), [getMessage](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436#ZH-CN_TOPIC_0000001054358436__getMessage--), [getStackTrace](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436#ZH-CN_TOPIC_0000001054358436__getStackTrace--), [getSuppressed](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436#ZH-CN_TOPIC_0000001054358436__getSuppressed--), [initCause](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436#ZH-CN_TOPIC_0000001054358436__initCause-java_lang_Throwable-), [printStackTrace](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436#ZH-CN_TOPIC_0000001054358436__printStackTrace--), [printStackTrace](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436#ZH-CN_TOPIC_0000001054358436__printStackTrace-java_io_PrintStream-), [printStackTrace](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436#ZH-CN_TOPIC_0000001054358436__printStackTrace-java_io_PrintWriter-), [setStackTrace](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436#ZH-CN_TOPIC_0000001054358436__setStackTrace-java_lang_StackTraceElement:A-), [toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436#ZH-CN_TOPIC_0000001054358436__toString--)  
  
#### Constructor Detail

#### [h2]InvalidParameterSpecException

public InvalidParameterSpecException​()

Constructs an InvalidParameterSpecException with no detail message. A detail message is a String that describes this particular exception. 

#### [h2]InvalidParameterSpecException

public InvalidParameterSpecException​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) msg)

Constructs an InvalidParameterSpecException with the specified detail message. A detail message is a String that describes this particular exception. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
msg  |  the detail message.
