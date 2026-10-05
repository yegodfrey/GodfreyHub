---
name: document/cn/doc-references/classnotfoundexception-0000001054838404
title: ClassNotFoundException
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/classnotfoundexception-0000001054838404
source: portal
---

# ClassNotFoundException

[java.lang.Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) |---[java.lang.Throwable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436) |---|---[java.lang.Exception](https://developer.harmonyos.com/cn/docs/documentation/doc-references/exception-0000001054119708) |---|---|---[java.lang.ReflectiveOperationException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/reflectiveoperationexception-0000001054199726) |---|---|---|---java.lang.ClassNotFoundException
    
    public class ClassNotFoundException
    extends [ReflectiveOperationException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/reflectiveoperationexception-0000001054199726)  
  
---  
Thrown when an application tries to load in a class through its string name using: 
    * The forName method in class Class. 
    * The findSystemClass method in class ClassLoader . 
    * The loadClass method in class ClassLoader. 

but no definition for the class with the specified name could be found. 

As of release 1.4, this exception has been retrofitted to conform to the general purpose exception-chaining mechanism. The "optional exception that was raised while loading the class" that may be provided at construction time and accessed via the [getException()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/classnotfoundexception-0000001054838404#ZH-CN_TOPIC_0000001054838404__getException--) method is now known as the _cause_ , and may be accessed via the [Throwable#getCause()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436#ZH-CN_TOPIC_0000001054358436__getCause--) method, as well as the aforementioned "legacy method."

**Since:**

JDK1.0

**See Also:**

[Class.forName(java.lang.String)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/class-0000001054358423#ZH-CN_TOPIC_0000001054358423__forName-java_lang_String-), [ClassLoader.findSystemClass(java.lang.String)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/classloader-0000001054558445#ZH-CN_TOPIC_0000001054558445__findSystemClass-java_lang_String-), [ClassLoader.loadClass(java.lang.String, boolean)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/classloader-0000001054558445#ZH-CN_TOPIC_0000001054558445__loadClass-java_lang_String-boolean-), 

#### Constructor Summary

Constructor | Description  
---|---  
[ClassNotFoundException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/classnotfoundexception-0000001054838404#ZH-CN_TOPIC_0000001054838404__ClassNotFoundException--)​() |  Constructs a ClassNotFoundException with no detail message.   
[ClassNotFoundException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/classnotfoundexception-0000001054838404#ZH-CN_TOPIC_0000001054838404__ClassNotFoundException-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) s) |  Constructs a ClassNotFoundException with the specified detail message.   
[ClassNotFoundException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/classnotfoundexception-0000001054838404#ZH-CN_TOPIC_0000001054838404__ClassNotFoundException-java_lang_String-java_lang_Throwable-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) s, [Throwable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436) ex) |  Constructs a ClassNotFoundException with the specified detail message and optional exception that was raised while loading the class.   
  
#### Method Summary

Modifier and Type | Method | Description  
---|---|---  
[Throwable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436) | [getCause](https://developer.harmonyos.com/cn/docs/documentation/doc-references/classnotfoundexception-0000001054838404#ZH-CN_TOPIC_0000001054838404__getCause--)​() |  Returns the cause of this exception (the exception that was raised if an error occurred while attempting to load the class; otherwise null).   
[Throwable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436) | [getException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/classnotfoundexception-0000001054838404#ZH-CN_TOPIC_0000001054838404__getException--)​() |  Returns the exception that was raised if an error occurred while attempting to load the class.   
  
Methods inherited from class java.lang.[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
---  
[clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__clone--), [equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__equals-java_lang_Object-), [finalize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__finalize--), [getClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__getClass--), [hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__hashCode--), [notify](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notify--), [notifyAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notifyAll--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-int-)  
  
Methods inherited from class java.lang.[Throwable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436)  
---  
[addSuppressed](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436#ZH-CN_TOPIC_0000001054358436__addSuppressed-java_lang_Throwable-), [fillInStackTrace](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436#ZH-CN_TOPIC_0000001054358436__fillInStackTrace--), [getLocalizedMessage](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436#ZH-CN_TOPIC_0000001054358436__getLocalizedMessage--), [getMessage](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436#ZH-CN_TOPIC_0000001054358436__getMessage--), [getStackTrace](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436#ZH-CN_TOPIC_0000001054358436__getStackTrace--), [getSuppressed](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436#ZH-CN_TOPIC_0000001054358436__getSuppressed--), [initCause](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436#ZH-CN_TOPIC_0000001054358436__initCause-java_lang_Throwable-), [printStackTrace](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436#ZH-CN_TOPIC_0000001054358436__printStackTrace--), [printStackTrace](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436#ZH-CN_TOPIC_0000001054358436__printStackTrace-java_io_PrintStream-), [printStackTrace](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436#ZH-CN_TOPIC_0000001054358436__printStackTrace-java_io_PrintWriter-), [setStackTrace](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436#ZH-CN_TOPIC_0000001054358436__setStackTrace-java_lang_StackTraceElement:A-), [toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436#ZH-CN_TOPIC_0000001054358436__toString--)  
  
#### Constructor Detail

#### [h2]ClassNotFoundException

public ClassNotFoundException​()

Constructs a ClassNotFoundException with no detail message. 

#### [h2]ClassNotFoundException

public ClassNotFoundException​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) s)

Constructs a ClassNotFoundException with the specified detail message. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
s  |  the detail message.  
  
#### [h2]ClassNotFoundException

public ClassNotFoundException​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) s, [Throwable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436) ex)

Constructs a ClassNotFoundException with the specified detail message and optional exception that was raised while loading the class. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
s  |  the detail message  
ex  |  the exception that was raised while loading the class  
  
**Since:**

1.2

#### Method Detail

#### [h2]getException

public [Throwable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436) getException​()

Returns the exception that was raised if an error occurred while attempting to load the class. Otherwise, returns null. 

This method predates the general-purpose exception chaining facility. The [Throwable#getCause()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436#ZH-CN_TOPIC_0000001054358436__getCause--) method is now the preferred means of obtaining this information.

**Returns:**

the Exception that was raised while loading a class

**Since:**

1.2

#### [h2]getCause

public [Throwable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436) getCause​()

Returns the cause of this exception (the exception that was raised if an error occurred while attempting to load the class; otherwise null). 

**Overrides:**

[getCause](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436#ZH-CN_TOPIC_0000001054358436__getCause--) in class [Throwable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436)

**Returns:**

the cause of this exception.

**Since:**

1.4
