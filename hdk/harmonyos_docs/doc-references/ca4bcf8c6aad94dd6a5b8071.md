---
name: document/cn/doc-references/floatdimension-0000001054519016
title: FloatDimension
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/floatdimension-0000001054519016
source: portal
---

# FloatDimension

[java.lang.Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) |---ohos.utils.FloatDimension
    
    public final class FloatDimension
    extends [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
  
---  
An immutable class used to describe the height and width of a floating-point number. 

The height and width are stored as floating-point numbers.

**Since:**

1

#### Constructor Summary

Constructor | Description  
---|---  
[FloatDimension](https://developer.harmonyos.com/cn/docs/documentation/doc-references/floatdimension-0000001054519016#ZH-CN_TOPIC_0000001054519016__FloatDimension-float-float-)​(float width, float height) |  A constructor used to create a FloatDimension object with the specified width and height.   
  
#### Method Summary

Modifier and Type | Method | Description  
---|---|---  
boolean | [equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/floatdimension-0000001054519016#ZH-CN_TOPIC_0000001054519016__equals-java_lang_Object-)​([Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) obj) |  Checks whether a given object is the same as the current FloatDimension object.   
float | [getHeightSize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/floatdimension-0000001054519016#ZH-CN_TOPIC_0000001054519016__getHeightSize--)​() |  Obtains the height of the current FloatDimension object.   
float | [getWidthSize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/floatdimension-0000001054519016#ZH-CN_TOPIC_0000001054519016__getWidthSize--)​() |  Obtains the width of the current FloatDimension object.   
int | [hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/floatdimension-0000001054519016#ZH-CN_TOPIC_0000001054519016__hashCode--)​() |  Obtains the hash code of the current FloatDimension object.   
static [FloatDimension](https://developer.harmonyos.com/cn/docs/documentation/doc-references/floatdimension-0000001054519016) | [parseFloatDimension](https://developer.harmonyos.com/cn/docs/documentation/doc-references/floatdimension-0000001054519016#ZH-CN_TOPIC_0000001054519016__parseFloatDimension-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) floatDimension) |  Creates a FloatDimension object based on a given string.   
[String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) | [toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/floatdimension-0000001054519016#ZH-CN_TOPIC_0000001054519016__toString--)​() |  Obtains the string representation of the current FloatDimension object.   
  
Methods inherited from class java.lang.[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
---  
[clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__clone--), [finalize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__finalize--), [getClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__getClass--), [notify](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notify--), [notifyAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notifyAll--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-int-)  
  
#### Constructor Detail

#### [h2]FloatDimension

public FloatDimension​(float width, float height)

A constructor used to create a FloatDimension object with the specified width and height. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
width  |  Indicates the width of the object.  
height  |  Indicates the height of the object.  
  
**Since:**

1

#### Method Detail

#### [h2]getWidthSize

public float getWidthSize​()

Obtains the width of the current FloatDimension object. 

**Returns:**

Returns the width of the current FloatDimension object.

**Since:**

1

#### [h2]getHeightSize

public float getHeightSize​()

Obtains the height of the current FloatDimension object. 

**Returns:**

Returns the height of the current FloatDimension object.

**Since:**

1

#### [h2]parseFloatDimension

public static [FloatDimension](https://developer.harmonyos.com/cn/docs/documentation/doc-references/floatdimension-0000001054519016) parseFloatDimension​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) floatDimension) throws [NumberFormatException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/numberformatexception-0000001054439739)

Creates a FloatDimension object based on a given string. 

The given string consists of two floating-point numbers (either positive or negative) separated by an asterisk (*) (ASCII 0x2A) in the format of W*H, for example, 8.5*10.2 or -6.3*-8.4.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
floatDimension  |  Indicates the string used to create the FloatDimension object.  
  
**Returns:**

Returns a FloatDimension object.

**Throws:**

Throw Name | Throw Description  
---|---  
[NullPointerException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/nullpointerexception-0000001054119710) |  Throws this exception if floatDimension is null.  
[NumberFormatException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/numberformatexception-0000001054439739) |  Throws this exception if the specified string is illegal.  
  
**Since:**

1

#### [h2]hashCode

public int hashCode​()

Obtains the hash code of the current FloatDimension object. 

**Overrides:**

[hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__hashCode--) in class [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)

**Returns:**

Returns the hash code of the current FloatDimension object.

**Since:**

1

**See Also:**

[Object.equals(java.lang.Object)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__equals-java_lang_Object-), [System.identityHashCode(java.lang.Object)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/system-0000001054558449#ZH-CN_TOPIC_0000001054558449__identityHashCode-java_lang_Object-)

#### [h2]equals

public boolean equals​([Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) obj)

Checks whether a given object is the same as the current FloatDimension object. 

**Overrides:**

[equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__equals-java_lang_Object-) in class [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)

**Parameters:**

Parameter Name | Parameter Description  
---|---  
obj  |  Indicates the object to be compared with the current FloatDimension object.  
  
**Returns:**

Returns true if the two objects are the same; returns false otherwise.

**Since:**

1

**See Also:**

[Object.hashCode()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__hashCode--), [HashMap](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashmap-0000001054518606)

#### [h2]toString

public [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) toString​()

Obtains the string representation of the current FloatDimension object. 

The returned string consists of two floating-point numbers (either positive or negative) separated by an asterisk (*) (ASCII 0x2A) in the format of W*H, for example, 8.5*10.2 or -6.3*-8.4.

**Overrides:**

[toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__toString--) in class [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)

**Returns:**

Returns the string representation of the current FloatDimension object.

**Since:**

1
