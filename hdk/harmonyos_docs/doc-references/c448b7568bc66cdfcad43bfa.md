---
name: document/cn/doc-references/missingformatwidthexception-0000001054838558
title: MissingFormatWidthException
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/missingformatwidthexception-0000001054838558
source: portal
---

# MissingFormatWidthException

[java.lang.Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) |---[java.lang.Throwable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436) |---|---[java.lang.Exception](https://developer.harmonyos.com/cn/docs/documentation/doc-references/exception-0000001054119708) |---|---|---[java.lang.RuntimeException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/runtimeexception-0000001054518466) |---|---|---|---[java.lang.IllegalArgumentException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalargumentexception-0000001054199724) |---|---|---|---|---[java.util.IllegalFormatException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalformatexception-0000001054439889) |---|---|---|---|---|---java.util.MissingFormatWidthException
    
    public class MissingFormatWidthException
    extends [IllegalFormatException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalformatexception-0000001054439889)  
  
---  
Unchecked exception thrown when the format width is required. 

Unless otherwise specified, passing a null argument to any method or constructor in this class will cause a [NullPointerException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/nullpointerexception-0000001054119710) to be thrown.

**Since:**

1.5

#### Constructor Summary

Constructor | Description  
---|---  
[MissingFormatWidthException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/missingformatwidthexception-0000001054838558#ZH-CN_TOPIC_0000001054838558__MissingFormatWidthException-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) s) |  Constructs an instance of this class with the specified format specifier.   
  
#### Method Summary

Modifier and Type | Method | Description  
---|---|---  
[String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) | [getFormatSpecifier](https://developer.harmonyos.com/cn/docs/documentation/doc-references/missingformatwidthexception-0000001054838558#ZH-CN_TOPIC_0000001054838558__getFormatSpecifier--)​() |  Returns the format specifier which does not have a width.   
[String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) | [getMessage](https://developer.harmonyos.com/cn/docs/documentation/doc-references/missingformatwidthexception-0000001054838558#ZH-CN_TOPIC_0000001054838558__getMessage--)​() |  Returns the detail message string of this throwable.   
  
Methods inherited from class java.lang.[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
---  
[clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__clone--), [equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__equals-java_lang_Object-), [finalize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__finalize--), [getClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__getClass--), [hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__hashCode--), [notify](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notify--), [notifyAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notifyAll--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-int-)  
  
Methods inherited from class java.lang.[Throwable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436)  
---  
[addSuppressed](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436#ZH-CN_TOPIC_0000001054358436__addSuppressed-java_lang_Throwable-), [fillInStackTrace](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436#ZH-CN_TOPIC_0000001054358436__fillInStackTrace--), [getCause](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436#ZH-CN_TOPIC_0000001054358436__getCause--), [getLocalizedMessage](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436#ZH-CN_TOPIC_0000001054358436__getLocalizedMessage--), [getStackTrace](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436#ZH-CN_TOPIC_0000001054358436__getStackTrace--), [getSuppressed](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436#ZH-CN_TOPIC_0000001054358436__getSuppressed--), [initCause](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436#ZH-CN_TOPIC_0000001054358436__initCause-java_lang_Throwable-), [printStackTrace](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436#ZH-CN_TOPIC_0000001054358436__printStackTrace--), [printStackTrace](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436#ZH-CN_TOPIC_0000001054358436__printStackTrace-java_io_PrintStream-), [printStackTrace](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436#ZH-CN_TOPIC_0000001054358436__printStackTrace-java_io_PrintWriter-), [setStackTrace](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436#ZH-CN_TOPIC_0000001054358436__setStackTrace-java_lang_StackTraceElement:A-), [toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436#ZH-CN_TOPIC_0000001054358436__toString--)  
  
#### Constructor Detail

#### [h2]MissingFormatWidthException

public MissingFormatWidthException​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) s)

Constructs an instance of this class with the specified format specifier. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
s  |  The format specifier which does not have a width  
  
#### Method Detail

#### [h2]getFormatSpecifier

public [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) getFormatSpecifier​()

Returns the format specifier which does not have a width. 

**Returns:**

The format specifier which does not have a width

#### [h2]getMessage

public [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) getMessage​()

Description copied from class: [Throwable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436#ZH-CN_TOPIC_0000001054358436__getMessage--)

Returns the detail message string of this throwable. 

**Overrides:**

[getMessage](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436#ZH-CN_TOPIC_0000001054358436__getMessage--) in class [Throwable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436)

**Returns:**

the detail message string of this Throwable instance (which may be null).
