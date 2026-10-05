---
name: document/cn/doc-references/forminfo_formtype-0000001071833382
title: FormInfo.FormType
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/forminfo_formtype-0000001071833382
source: portal
---

# FormInfo.FormType

[java.lang.Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) |---[java.lang.Enum](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enum-0000001054838398)<[FormInfo.FormType](https://developer.harmonyos.com/cn/docs/documentation/doc-references/forminfo_formtype-0000001071833382)> |---|---ohos.bundle.FormInfo.FormType
    
    public static enum FormInfo.FormType
    extends [Enum](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enum-0000001054838398)<[FormInfo.FormType](https://developer.harmonyos.com/cn/docs/documentation/doc-references/forminfo_formtype-0000001071833382)>  
  
---  
Enumerates types of a form. Currently, Java and JS forms are supported.

**Since:**

5

#### Enum Constant Summary

Enum Constant | Description  
---|---  
[JAVA](https://developer.harmonyos.com/cn/docs/documentation/doc-references/forminfo_formtype-0000001071833382#ZH-CN_TOPIC_0000001071833382__JAVA) |  Java form   
[JS](https://developer.harmonyos.com/cn/docs/documentation/doc-references/forminfo_formtype-0000001071833382#ZH-CN_TOPIC_0000001071833382__JS) |  JS form   
  
#### Method Summary

Modifier and Type | Method | Description  
---|---|---  
static [FormInfo.FormType](https://developer.harmonyos.com/cn/docs/documentation/doc-references/forminfo_formtype-0000001071833382) | [valueOf](https://developer.harmonyos.com/cn/docs/documentation/doc-references/forminfo_formtype-0000001071833382#ZH-CN_TOPIC_0000001071833382__valueOf-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) name) |  Returns the enum constant of this type with the specified name.   
static [FormInfo.FormType](https://developer.harmonyos.com/cn/docs/documentation/doc-references/forminfo_formtype-0000001071833382)[] | [values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/forminfo_formtype-0000001071833382#ZH-CN_TOPIC_0000001071833382__values--)​() |  Returns an array containing the constants of this enum type, in the order they are declared.   
  
Methods inherited from class java.lang.[Enum](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enum-0000001054838398)  
---  
[clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enum-0000001054838398#ZH-CN_TOPIC_0000001054838398__clone--), [compareTo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enum-0000001054838398#ZH-CN_TOPIC_0000001054838398__compareTo-E-), [equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enum-0000001054838398#ZH-CN_TOPIC_0000001054838398__equals-java_lang_Object-), [finalize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enum-0000001054838398#ZH-CN_TOPIC_0000001054838398__finalize--), [getDeclaringClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enum-0000001054838398#ZH-CN_TOPIC_0000001054838398__getDeclaringClass--), [hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enum-0000001054838398#ZH-CN_TOPIC_0000001054838398__hashCode--), [name](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enum-0000001054838398#ZH-CN_TOPIC_0000001054838398__name--), [ordinal](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enum-0000001054838398#ZH-CN_TOPIC_0000001054838398__ordinal--), [toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enum-0000001054838398#ZH-CN_TOPIC_0000001054838398__toString--), [valueOf](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enum-0000001054838398#ZH-CN_TOPIC_0000001054838398__valueOf-java_lang_Class-java_lang_String-)  
  
Methods inherited from class java.lang.[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
---  
[getClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__getClass--), [notify](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notify--), [notifyAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notifyAll--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-int-)  
  
#### Enum Constant Detail

#### [h2]JAVA

public static final [FormInfo.FormType](https://developer.harmonyos.com/cn/docs/documentation/doc-references/forminfo_formtype-0000001071833382) JAVA

Java form 

#### [h2]JS

public static final [FormInfo.FormType](https://developer.harmonyos.com/cn/docs/documentation/doc-references/forminfo_formtype-0000001071833382) JS

JS form 

#### Method Detail

#### [h2]values

public static [FormInfo.FormType](https://developer.harmonyos.com/cn/docs/documentation/doc-references/forminfo_formtype-0000001071833382)[] values​()

Returns an array containing the constants of this enum type, in the order they are declared. This method may be used to iterate over the constants as follows: 
    
    for (FormInfo.FormType c : FormInfo.FormType.values())
        System.out.println(c);
    

**Returns:**

an array containing the constants of this enum type, in the order they are declared

#### [h2]valueOf

public static [FormInfo.FormType](https://developer.harmonyos.com/cn/docs/documentation/doc-references/forminfo_formtype-0000001071833382) valueOf​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) name)

Returns the enum constant of this type with the specified name. The string must match _exactly_ an identifier used to declare an enum constant in this type. (Extraneous whitespace characters are not permitted.) 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
name  |  the name of the enum constant to be returned.  
  
**Returns:**

the enum constant with the specified name

**Throws:**

Throw Name | Throw Description  
---|---  
[IllegalArgumentException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalargumentexception-0000001054199724) |  if this enum type has no constant with the specified name  
[NullPointerException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/nullpointerexception-0000001054119710) |  if the argument is null
