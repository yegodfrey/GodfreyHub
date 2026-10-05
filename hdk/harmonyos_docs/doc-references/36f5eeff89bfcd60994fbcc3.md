---
name: document/cn/doc-references/factoryconfigurationerror-0000001054678896
title: FactoryConfigurationError
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/factoryconfigurationerror-0000001054678896
source: portal
---

# FactoryConfigurationError

[java.lang.Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) |---[java.lang.Throwable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436) |---|---[java.lang.Error](https://developer.harmonyos.com/cn/docs/documentation/doc-references/error-0000001054199728) |---|---|---ohos.javax.xml.stream.FactoryConfigurationError
    
    public class FactoryConfigurationError
    extends [Error](https://developer.harmonyos.com/cn/docs/documentation/doc-references/error-0000001054199728)  
  
---  
An error class for reporting factory configuration errors.

**Since:**

1.6

#### Constructor Summary

Constructor | Description  
---|---  
[FactoryConfigurationError](https://developer.harmonyos.com/cn/docs/documentation/doc-references/factoryconfigurationerror-0000001054678896#ZH-CN_TOPIC_0000001054678896__FactoryConfigurationError--)​() |  Default constructor   
[FactoryConfigurationError](https://developer.harmonyos.com/cn/docs/documentation/doc-references/factoryconfigurationerror-0000001054678896#ZH-CN_TOPIC_0000001054678896__FactoryConfigurationError-java_lang_Exception-)​([Exception](https://developer.harmonyos.com/cn/docs/documentation/doc-references/exception-0000001054119708) e) |  Construct an exception with a nested inner exception   
[FactoryConfigurationError](https://developer.harmonyos.com/cn/docs/documentation/doc-references/factoryconfigurationerror-0000001054678896#ZH-CN_TOPIC_0000001054678896__FactoryConfigurationError-java_lang_Exception-java_lang_String-)​([Exception](https://developer.harmonyos.com/cn/docs/documentation/doc-references/exception-0000001054119708) e, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) msg) |  Construct an exception with a nested inner exception and a message   
[FactoryConfigurationError](https://developer.harmonyos.com/cn/docs/documentation/doc-references/factoryconfigurationerror-0000001054678896#ZH-CN_TOPIC_0000001054678896__FactoryConfigurationError-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) msg) |  Construct an exception with associated message   
[FactoryConfigurationError](https://developer.harmonyos.com/cn/docs/documentation/doc-references/factoryconfigurationerror-0000001054678896#ZH-CN_TOPIC_0000001054678896__FactoryConfigurationError-java_lang_String-java_lang_Exception-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) msg, [Exception](https://developer.harmonyos.com/cn/docs/documentation/doc-references/exception-0000001054119708) e) |  Construct an exception with a nested inner exception and a message   
  
#### Method Summary

Modifier and Type | Method | Description  
---|---|---  
[Throwable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436) | [getCause](https://developer.harmonyos.com/cn/docs/documentation/doc-references/factoryconfigurationerror-0000001054678896#ZH-CN_TOPIC_0000001054678896__getCause--)​() |  use the exception chaining mechanism of JDK1.4   
[Exception](https://developer.harmonyos.com/cn/docs/documentation/doc-references/exception-0000001054119708) | [getException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/factoryconfigurationerror-0000001054678896#ZH-CN_TOPIC_0000001054678896__getException--)​() |  Return the nested exception (if any)   
[String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) | [getMessage](https://developer.harmonyos.com/cn/docs/documentation/doc-references/factoryconfigurationerror-0000001054678896#ZH-CN_TOPIC_0000001054678896__getMessage--)​() |  Report the message associated with this error   
  
Methods inherited from class java.lang.[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
---  
[clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__clone--), [equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__equals-java_lang_Object-), [finalize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__finalize--), [getClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__getClass--), [hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__hashCode--), [notify](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notify--), [notifyAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notifyAll--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-int-)  
  
Methods inherited from class java.lang.[Throwable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436)  
---  
[addSuppressed](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436#ZH-CN_TOPIC_0000001054358436__addSuppressed-java_lang_Throwable-), [fillInStackTrace](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436#ZH-CN_TOPIC_0000001054358436__fillInStackTrace--), [getLocalizedMessage](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436#ZH-CN_TOPIC_0000001054358436__getLocalizedMessage--), [getStackTrace](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436#ZH-CN_TOPIC_0000001054358436__getStackTrace--), [getSuppressed](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436#ZH-CN_TOPIC_0000001054358436__getSuppressed--), [initCause](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436#ZH-CN_TOPIC_0000001054358436__initCause-java_lang_Throwable-), [printStackTrace](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436#ZH-CN_TOPIC_0000001054358436__printStackTrace--), [printStackTrace](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436#ZH-CN_TOPIC_0000001054358436__printStackTrace-java_io_PrintStream-), [printStackTrace](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436#ZH-CN_TOPIC_0000001054358436__printStackTrace-java_io_PrintWriter-), [setStackTrace](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436#ZH-CN_TOPIC_0000001054358436__setStackTrace-java_lang_StackTraceElement:A-), [toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436#ZH-CN_TOPIC_0000001054358436__toString--)  
  
#### Constructor Detail

#### [h2]FactoryConfigurationError

public FactoryConfigurationError​()

Default constructor 

#### [h2]FactoryConfigurationError

public FactoryConfigurationError​([Exception](https://developer.harmonyos.com/cn/docs/documentation/doc-references/exception-0000001054119708) e)

Construct an exception with a nested inner exception 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
e  |  the exception to nest  
  
#### [h2]FactoryConfigurationError

public FactoryConfigurationError​([Exception](https://developer.harmonyos.com/cn/docs/documentation/doc-references/exception-0000001054119708) e, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) msg)

Construct an exception with a nested inner exception and a message 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
e  |  the exception to nest  
msg  |  the message to report  
  
#### [h2]FactoryConfigurationError

public FactoryConfigurationError​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) msg, [Exception](https://developer.harmonyos.com/cn/docs/documentation/doc-references/exception-0000001054119708) e)

Construct an exception with a nested inner exception and a message 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
msg  |  the message to report  
e  |  the exception to nest  
  
#### [h2]FactoryConfigurationError

public FactoryConfigurationError​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) msg)

Construct an exception with associated message 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
msg  |  the message to report  
  
#### Method Detail

#### [h2]getException

public [Exception](https://developer.harmonyos.com/cn/docs/documentation/doc-references/exception-0000001054119708) getException​()

Return the nested exception (if any) 

**Returns:**

the nested exception or null

#### [h2]getCause

public [Throwable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436) getCause​()

use the exception chaining mechanism of JDK1.4 

**Overrides:**

[getCause](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436#ZH-CN_TOPIC_0000001054358436__getCause--) in class [Throwable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436)

**Returns:**

the cause of this throwable or null if the cause is nonexistent or unknown.

#### [h2]getMessage

public [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) getMessage​()

Report the message associated with this error 

**Overrides:**

[getMessage](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436#ZH-CN_TOPIC_0000001054358436__getMessage--) in class [Throwable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436)

**Returns:**

the string value of the message
