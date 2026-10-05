---
name: document/cn/doc-references/standardcopyoption-0000001054358487
title: StandardCopyOption
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/standardcopyoption-0000001054358487
source: portal
---

StandardCopyOption [java.lang.Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) |---[java.lang.Enum](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enum-0000001054838398)<[StandardCopyOption](https://developer.harmonyos.com/cn/docs/documentation/doc-references/standardcopyoption-0000001054358487)> |---|---java.nio.file.StandardCopyOption
    
    public enum StandardCopyOption
    extends [Enum](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enum-0000001054838398)<[StandardCopyOption](https://developer.harmonyos.com/cn/docs/documentation/doc-references/standardcopyoption-0000001054358487)>
    implements [CopyOption](https://developer.harmonyos.com/cn/docs/documentation/doc-references/copyoption-0000001054439789)  
  
---  
Defines the standard copy options.**Since:** 1.7Enum Constant Summary Enum Constant | Description  
---|---  
[ATOMIC_MOVE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/standardcopyoption-0000001054358487#ZH-CN_TOPIC_0000001054358487__ATOMIC_MOVE) |  Move the file as an atomic file system operation.   
[COPY_ATTRIBUTES](https://developer.harmonyos.com/cn/docs/documentation/doc-references/standardcopyoption-0000001054358487#ZH-CN_TOPIC_0000001054358487__COPY_ATTRIBUTES) |  Copy attributes to the new file.   
[REPLACE_EXISTING](https://developer.harmonyos.com/cn/docs/documentation/doc-references/standardcopyoption-0000001054358487#ZH-CN_TOPIC_0000001054358487__REPLACE_EXISTING) |  Replace an existing file if it exists.   
Method Summary Modifier and Type | Method | Description  
---|---|---  
static [StandardCopyOption](https://developer.harmonyos.com/cn/docs/documentation/doc-references/standardcopyoption-0000001054358487) | [valueOf](https://developer.harmonyos.com/cn/docs/documentation/doc-references/standardcopyoption-0000001054358487#ZH-CN_TOPIC_0000001054358487__valueOf-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) name) |  Returns the enum constant of this type with the specified name.   
static [StandardCopyOption](https://developer.harmonyos.com/cn/docs/documentation/doc-references/standardcopyoption-0000001054358487)[] | [values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/standardcopyoption-0000001054358487#ZH-CN_TOPIC_0000001054358487__values--)​() |  Returns an array containing the constants of this enum type, in the order they are declared.   
Methods inherited from class java.lang.[Enum](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enum-0000001054838398)  
---  
[clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enum-0000001054838398#ZH-CN_TOPIC_0000001054838398__clone--), [compareTo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enum-0000001054838398#ZH-CN_TOPIC_0000001054838398__compareTo-E-), [equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enum-0000001054838398#ZH-CN_TOPIC_0000001054838398__equals-java_lang_Object-), [finalize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enum-0000001054838398#ZH-CN_TOPIC_0000001054838398__finalize--), [getDeclaringClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enum-0000001054838398#ZH-CN_TOPIC_0000001054838398__getDeclaringClass--), [hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enum-0000001054838398#ZH-CN_TOPIC_0000001054838398__hashCode--), [name](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enum-0000001054838398#ZH-CN_TOPIC_0000001054838398__name--), [ordinal](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enum-0000001054838398#ZH-CN_TOPIC_0000001054838398__ordinal--), [toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enum-0000001054838398#ZH-CN_TOPIC_0000001054838398__toString--), [valueOf](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enum-0000001054838398#ZH-CN_TOPIC_0000001054838398__valueOf-java_lang_Class-java_lang_String-)  
Methods inherited from class java.lang.[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
---  
[getClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__getClass--), [notify](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notify--), [notifyAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notifyAll--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-int-)  
Enum Constant Detail [h2]REPLACE_EXISTING public static final [StandardCopyOption](https://developer.harmonyos.com/cn/docs/documentation/doc-references/standardcopyoption-0000001054358487) REPLACE_EXISTING Replace an existing file if it exists.  [h2]COPY_ATTRIBUTES public static final [StandardCopyOption](https://developer.harmonyos.com/cn/docs/documentation/doc-references/standardcopyoption-0000001054358487) COPY_ATTRIBUTES Copy attributes to the new file.  [h2]ATOMIC_MOVE public static final [StandardCopyOption](https://developer.harmonyos.com/cn/docs/documentation/doc-references/standardcopyoption-0000001054358487) ATOMIC_MOVE Move the file as an atomic file system operation.  Method Detail [h2]values public static [StandardCopyOption](https://developer.harmonyos.com/cn/docs/documentation/doc-references/standardcopyoption-0000001054358487)[] values​() Returns an array containing the constants of this enum type, in the order they are declared. This method may be used to iterate over the constants as follows: 
    
    for (StandardCopyOption c : StandardCopyOption.values())
        System.out.println(c);
    

**Returns:** an array containing the constants of this enum type, in the order they are declared [h2]valueOf public static [StandardCopyOption](https://developer.harmonyos.com/cn/docs/documentation/doc-references/standardcopyoption-0000001054358487) valueOf​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) name) Returns the enum constant of this type with the specified name. The string must match _exactly_ an identifier used to declare an enum constant in this type. (Extraneous whitespace characters are not permitted.) **Parameters:** Parameter Name | Parameter Description  
---|---  
name  |  the name of the enum constant to be returned.  
**Returns:** the enum constant with the specified name **Throws:** Throw Name | Throw Description  
---|---  
[IllegalArgumentException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalargumentexception-0000001054199724) |  if this enum type has no constant with the specified name  
[NullPointerException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/nullpointerexception-0000001054119710) |  if the argument is null
