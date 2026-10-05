---
name: document/cn/doc-references/path_addpathmode-0000001061156854
title: Path.AddPathMode
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/path_addpathmode-0000001061156854
source: portal
---

# Path.AddPathMode

[java.lang.Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) |---[java.lang.Enum](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enum-0000001054838398)<[Path.AddPathMode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/path_addpathmode-0000001061156854)> |---|---ohos.agp.render.Path.AddPathMode
    
    public static enum Path.AddPathMode
    extends [Enum](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enum-0000001054838398)<[Path.AddPathMode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/path_addpathmode-0000001061156854)>  
  
---  
Enumerates the modes of adding a path to another path.

**Since:**

3

#### Enum Constant Summary

Enum Constant | Description  
---|---  
[APPEND_ADD_PATH_MODE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/path_addpathmode-0000001061156854#ZH-CN_TOPIC_0000001061156854__APPEND_ADD_PATH_MODE) |  Indicates that a path is added without any connections.   
[EXTEND_ADD_PATH_MODE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/path_addpathmode-0000001061156854#ZH-CN_TOPIC_0000001061156854__EXTEND_ADD_PATH_MODE) |  Indicates that a a straight line is added between the last point of this Path and the start point of the source path.   
  
#### Method Summary

Modifier and Type | Method | Description  
---|---|---  
int | [value](https://developer.harmonyos.com/cn/docs/documentation/doc-references/path_addpathmode-0000001061156854#ZH-CN_TOPIC_0000001061156854__value--)​() |  Obtains the enumeration identifier of the modes of adding a path to another path.   
static [Path.AddPathMode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/path_addpathmode-0000001061156854) | [valueOf](https://developer.harmonyos.com/cn/docs/documentation/doc-references/path_addpathmode-0000001061156854#ZH-CN_TOPIC_0000001061156854__valueOf-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) name) |  Returns the enum constant of this type with the specified name.   
static [Path.AddPathMode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/path_addpathmode-0000001061156854)[] | [values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/path_addpathmode-0000001061156854#ZH-CN_TOPIC_0000001061156854__values--)​() |  Returns an array containing the constants of this enum type, in the order they are declared.   
  
Methods inherited from class java.lang.[Enum](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enum-0000001054838398)  
---  
[clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enum-0000001054838398#ZH-CN_TOPIC_0000001054838398__clone--), [compareTo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enum-0000001054838398#ZH-CN_TOPIC_0000001054838398__compareTo-E-), [equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enum-0000001054838398#ZH-CN_TOPIC_0000001054838398__equals-java_lang_Object-), [finalize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enum-0000001054838398#ZH-CN_TOPIC_0000001054838398__finalize--), [getDeclaringClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enum-0000001054838398#ZH-CN_TOPIC_0000001054838398__getDeclaringClass--), [hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enum-0000001054838398#ZH-CN_TOPIC_0000001054838398__hashCode--), [name](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enum-0000001054838398#ZH-CN_TOPIC_0000001054838398__name--), [ordinal](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enum-0000001054838398#ZH-CN_TOPIC_0000001054838398__ordinal--), [toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enum-0000001054838398#ZH-CN_TOPIC_0000001054838398__toString--), [valueOf](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enum-0000001054838398#ZH-CN_TOPIC_0000001054838398__valueOf-java_lang_Class-java_lang_String-)  
  
Methods inherited from class java.lang.[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
---  
[getClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__getClass--), [notify](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notify--), [notifyAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notifyAll--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-int-)  
  
#### Enum Constant Detail

#### [h2]APPEND_ADD_PATH_MODE

public static final [Path.AddPathMode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/path_addpathmode-0000001061156854) APPEND_ADD_PATH_MODE

Indicates that a path is added without any connections. 

#### [h2]EXTEND_ADD_PATH_MODE

public static final [Path.AddPathMode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/path_addpathmode-0000001061156854) EXTEND_ADD_PATH_MODE

Indicates that a a straight line is added between the last point of this Path and the start point of the source path. 

#### Method Detail

#### [h2]values

public static [Path.AddPathMode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/path_addpathmode-0000001061156854)[] values​()

Returns an array containing the constants of this enum type, in the order they are declared. This method may be used to iterate over the constants as follows: 
    
    for (Path.AddPathMode c : Path.AddPathMode.values())
        System.out.println(c);
    

**Returns:**

an array containing the constants of this enum type, in the order they are declared

#### [h2]valueOf

public static [Path.AddPathMode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/path_addpathmode-0000001061156854) valueOf​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) name)

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
  
#### [h2]value

public int value​()

Obtains the enumeration identifier of the modes of adding a path to another path. 

**Returns:**

Returns the enumeration identifier of the modes of adding a path to another path.

**Since:**

4
