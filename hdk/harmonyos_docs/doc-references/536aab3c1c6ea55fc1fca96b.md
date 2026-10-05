---
name: document/cn/doc-references/element-0000001054120140
title: Element
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/element-0000001054120140
source: portal
---

# Element

[java.lang.Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) |---ohos.global.resource.Element
    
    public abstract class Element
    extends [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
  
---  
Provides methods for obtaining an Element based on its resource ID. 

You can call a specific method of this class to obtain the resource of the specified type associated with the resource ID. 

**Since:**

3

#### Constructor Summary

Constructor | Description  
---|---  
[Element](https://developer.harmonyos.com/cn/docs/documentation/doc-references/element-0000001054120140#ZH-CN_TOPIC_0000001054120140__Element--)​() |     
  
#### Method Summary

Modifier and Type | Method | Description  
---|---|---  
abstract boolean | [getBoolean](https://developer.harmonyos.com/cn/docs/documentation/doc-references/element-0000001054120140#ZH-CN_TOPIC_0000001054120140__getBoolean--)​() |  Obtains a boolean value based on this Element.   
abstract int | [getColor](https://developer.harmonyos.com/cn/docs/documentation/doc-references/element-0000001054120140#ZH-CN_TOPIC_0000001054120140__getColor--)​() |  Obtains a color value based on this Element.   
abstract [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) | [getConfig](https://developer.harmonyos.com/cn/docs/documentation/doc-references/element-0000001054120140#ZH-CN_TOPIC_0000001054120140__getConfig--)​() |  Gets a config according to a resource ID.   
abstract float | [getFloat](https://developer.harmonyos.com/cn/docs/documentation/doc-references/element-0000001054120140#ZH-CN_TOPIC_0000001054120140__getFloat--)​() |  Obtains a float value based on this Element.   
abstract int[] | [getIntArray](https://developer.harmonyos.com/cn/docs/documentation/doc-references/element-0000001054120140#ZH-CN_TOPIC_0000001054120140__getIntArray--)​() |  Obtains an integer array based on this Element.   
abstract int | [getInteger](https://developer.harmonyos.com/cn/docs/documentation/doc-references/element-0000001054120140#ZH-CN_TOPIC_0000001054120140__getInteger--)​() |  Obtains an integer value based on this Element.   
abstract [Pattern](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pattern-0000001054238885) | [getPattern](https://developer.harmonyos.com/cn/docs/documentation/doc-references/element-0000001054120140#ZH-CN_TOPIC_0000001054120140__getPattern--)​() |  Obtains a ohos.global.resource.solidxml.Pattern instance associated with this Element.   
abstract [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) | [getPluralString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/element-0000001054120140#ZH-CN_TOPIC_0000001054120140__getPluralString-int-)​(int quantity) |  Obtains the string representation of plural rules associated with this Element based on the given quantity.   
abstract [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) | [getPluralString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/element-0000001054120140#ZH-CN_TOPIC_0000001054120140__getPluralString-int-java_lang_Object___-)​(int quantity, [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)... formatArgs) |  Obtains the string representation of plural rules associated with this Element based on the given quantity, and formats the string based on the specified formatted objects.   
abstract [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) | [getString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/element-0000001054120140#ZH-CN_TOPIC_0000001054120140__getString--)​() |  Obtains a string value based on this Element.   
abstract [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) | [getString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/element-0000001054120140#ZH-CN_TOPIC_0000001054120140__getString-java_lang_Object___-)​([Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)... formatArgs) |  Obtains the string associated with this Element and formats the string based on the specified formatted objects.   
abstract [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) | [getString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/element-0000001054120140#ZH-CN_TOPIC_0000001054120140__getString-java_lang_Object:A-java_text_Format:A-)​([Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)[] object, [Format](https://developer.harmonyos.com/cn/docs/documentation/doc-references/format-0000001054439851)[] format) |  Obtains the string associated with this Element and formats the string based on the specified format array and object array.   
abstract [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) | [getString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/element-0000001054120140#ZH-CN_TOPIC_0000001054120140__getString-java_lang_Object-java_text_Format-)​([Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) object, [Format](https://developer.harmonyos.com/cn/docs/documentation/doc-references/format-0000001054439851) format) |  Obtains the string associated with this Element and formats the string based on the specified format and object.   
abstract [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460)[] | [getStringArray](https://developer.harmonyos.com/cn/docs/documentation/doc-references/element-0000001054120140#ZH-CN_TOPIC_0000001054120140__getStringArray--)​() |  Obtains a string array based on this Element.   
abstract [Theme](https://developer.harmonyos.com/cn/docs/documentation/doc-references/theme-0000001054838840) | [getTheme](https://developer.harmonyos.com/cn/docs/documentation/doc-references/element-0000001054120140#ZH-CN_TOPIC_0000001054120140__getTheme--)​() |  Obtains a [Theme](https://developer.harmonyos.com/cn/docs/documentation/doc-references/theme-0000001054838840) instance associated with this Element.   
  
Methods inherited from class java.lang.[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
---  
[clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__clone--), [equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__equals-java_lang_Object-), [finalize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__finalize--), [getClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__getClass--), [hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__hashCode--), [notify](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notify--), [notifyAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notifyAll--), [toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__toString--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-int-)  
  
#### Constructor Detail

#### [h2]Element

public Element​()

#### Method Detail

#### [h2]getString

public abstract [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) getString​() throws [IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426), [NotExistException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/notexistexception-0000001054120142), [WrongTypeException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/wrongtypeexception-0000001054440171)

Obtains a string value based on this Element. 

**Returns:**

Returns the string value.

**Throws:**

Throw Name | Throw Description  
---|---  
[NotExistException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/notexistexception-0000001054120142) |  Throws this exception if the resource ID does not match any resources. The resource ID must be automatically generated by the IDE or resource tool, or provided by the system.  
[IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426) |  Throws this exception if an I/O error occurs during resource read.  
[WrongTypeException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/wrongtypeexception-0000001054440171) |  Throws this exception if the resource is not of the string type.  
  
**Since:**

3

#### [h2]getString

public abstract [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) getString​([Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)... formatArgs) throws [IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426), [NotExistException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/notexistexception-0000001054120142), [WrongTypeException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/wrongtypeexception-0000001054440171)

Obtains the string associated with this Element and formats the string based on the specified formatted objects. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
formatArgs  |  Indicates the formatted objects used for substitution.  
  
**Returns:**

Returns the formatted string.

**Throws:**

Throw Name | Throw Description  
---|---  
[NotExistException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/notexistexception-0000001054120142) |  Throws this exception if the resource ID does not match any resources. The resource ID must be automatically generated by the IDE or resource tool, or provided by the system.  
[IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426) |  Throws this exception if an I/O error occurs during resource read.  
[WrongTypeException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/wrongtypeexception-0000001054440171) |  Throws this exception if the resource is not of the string type.  
  
**Since:**

3

#### [h2]getString

public abstract [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) getString​([Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) object, [Format](https://developer.harmonyos.com/cn/docs/documentation/doc-references/format-0000001054439851) format) throws [IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426), [NotExistException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/notexistexception-0000001054120142), [WrongTypeException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/wrongtypeexception-0000001054440171)

Obtains the string associated with this Element and formats the string based on the specified format and object. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
object  |  Indicates the object used for substitution.  
format  |  Indicates the format used for formatting the object.  
  
**Returns:**

Returns the formatted string.

**Throws:**

Throw Name | Throw Description  
---|---  
[NotExistException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/notexistexception-0000001054120142) |  Throws this exception if the resource ID does not match any resources. The resource ID must be automatically generated by the IDE or resource tool, or provided by the system.  
[IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426) |  Throws this exception if an I/O error occurs during resource read.  
[WrongTypeException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/wrongtypeexception-0000001054440171) |  Throws this exception if the resource is not of the string type.  
  
**Since:**

3

#### [h2]getString

public abstract [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) getString​([Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)[] object, [Format](https://developer.harmonyos.com/cn/docs/documentation/doc-references/format-0000001054439851)[] format) throws [IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426), [NotExistException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/notexistexception-0000001054120142), [WrongTypeException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/wrongtypeexception-0000001054440171)

Obtains the string associated with this Element and formats the string based on the specified format array and object array. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
object  |  Indicates the array of objects used for substitution.  
format  |  Indicates the array of formats used for formatting the object array. Formats and objects are in one-to-one mapping.  
  
**Returns:**

Returns the formatted string.

**Throws:**

Throw Name | Throw Description  
---|---  
[NotExistException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/notexistexception-0000001054120142) |  Throws this exception if the resource ID does not match any resources. The resource ID must be automatically generated by the IDE or resource tool, or provided by the system.  
[IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426) |  Throws this exception if an I/O error occurs during resource read.  
[WrongTypeException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/wrongtypeexception-0000001054440171) |  Throws this exception if the resource is not of the string type.  
  
**Since:**

3

#### [h2]getBoolean

public abstract boolean getBoolean​() throws [IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426), [NotExistException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/notexistexception-0000001054120142), [WrongTypeException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/wrongtypeexception-0000001054440171)

Obtains a boolean value based on this Element. 

**Returns:**

Returns the boolean value.

**Throws:**

Throw Name | Throw Description  
---|---  
[NotExistException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/notexistexception-0000001054120142) |  Throws this exception if the resource ID does not match any resources. The resource ID must be automatically generated by the IDE or resource tool, or provided by the system.  
[IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426) |  Throws this exception if an I/O error occurs during resource read.  
[WrongTypeException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/wrongtypeexception-0000001054440171) |  Throws this exception if the resource is not of the boolean type.  
  
**Since:**

3

#### [h2]getColor

public abstract int getColor​() throws [IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426), [NotExistException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/notexistexception-0000001054120142), [WrongTypeException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/wrongtypeexception-0000001054440171)

Obtains a color value based on this Element. 

**Returns:**

Returns an integer reference value representing the color data.

**Throws:**

Throw Name | Throw Description  
---|---  
[NotExistException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/notexistexception-0000001054120142) |  Throws this exception if the resource ID does not match any resources. The resource ID must be automatically generated by the IDE or resource tool, or provided by the system.  
[IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426) |  Throws this exception if an I/O error occurs during resource read.  
[WrongTypeException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/wrongtypeexception-0000001054440171) |  Throws this exception if the resource is not of the color type.  
  
**Since:**

3

#### [h2]getFloat

public abstract float getFloat​() throws [IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426), [NotExistException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/notexistexception-0000001054120142), [WrongTypeException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/wrongtypeexception-0000001054440171)

Obtains a float value based on this Element. 

**Returns:**

Returns a float reference value representing the dimension data.

**Throws:**

Throw Name | Throw Description  
---|---  
[NotExistException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/notexistexception-0000001054120142) |  Throws this exception if the resource ID does not match any resources. The resource ID must be automatically generated by the IDE or resource tool, or provided by the system.  
[IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426) |  Throws this exception if an I/O error occurs during resource read.  
[WrongTypeException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/wrongtypeexception-0000001054440171) |  Throws this exception if the resource is not of the float type.  
  
**Since:**

3

#### [h2]getConfig

public abstract [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) getConfig​() throws [IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426), [NotExistException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/notexistexception-0000001054120142), [WrongTypeException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/wrongtypeexception-0000001054440171)

Gets a config according to a resource ID. 

**Returns:**

Returns a config.

**Throws:**

Throw Name | Throw Description  
---|---  
[NotExistException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/notexistexception-0000001054120142) |  Throws this exception if the resource ID does not match any resources. The resource ID must be automatically generated by the IDE or resource tool, or provided by the system.  
[IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426) |  Throws this exception if an I/O error occurs during resource read.  
[WrongTypeException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/wrongtypeexception-0000001054440171) |  Throws this exception if the resource is not of the config type.  
  
**Since:**

3

#### [h2]getInteger

public abstract int getInteger​() throws [IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426), [NotExistException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/notexistexception-0000001054120142), [WrongTypeException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/wrongtypeexception-0000001054440171)

Obtains an integer value based on this Element. 

**Returns:**

Returns the integer value.

**Throws:**

Throw Name | Throw Description  
---|---  
[NotExistException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/notexistexception-0000001054120142) |  Throws this exception if the resource ID does not match any resources. The resource ID must be automatically generated by the IDE or resource tool, or provided by the system.  
[IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426) |  Throws this exception if an I/O error occurs during resource read.  
[WrongTypeException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/wrongtypeexception-0000001054440171) |  Throws this exception if the resource is not of the integer type.  
  
**Since:**

3

#### [h2]getStringArray

public abstract [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460)[] getStringArray​() throws [IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426), [NotExistException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/notexistexception-0000001054120142), [WrongTypeException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/wrongtypeexception-0000001054440171)

Obtains a string array based on this Element. 

**Returns:**

Returns the string array.

**Throws:**

Throw Name | Throw Description  
---|---  
[NotExistException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/notexistexception-0000001054120142) |  Throws this exception if the resource ID does not match any resources. The resource ID must be automatically generated by the IDE or resource tool, or provided by the system.  
[IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426) |  Throws this exception if an I/O error occurs during resource read.  
[WrongTypeException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/wrongtypeexception-0000001054440171) |  Throws this exception if the resource is not of the string array type.  
  
**Since:**

3

#### [h2]getIntArray

public abstract int[] getIntArray​() throws [IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426), [NotExistException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/notexistexception-0000001054120142), [WrongTypeException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/wrongtypeexception-0000001054440171)

Obtains an integer array based on this Element. 

**Returns:**

Returns the integer array.

**Throws:**

Throw Name | Throw Description  
---|---  
[NotExistException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/notexistexception-0000001054120142) |  Throws this exception if the resource ID does not match any resources. The resource ID must be automatically generated by the IDE or resource tool, or provided by the system.  
[IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426) |  Throws this exception if an I/O error occurs during resource read.  
[WrongTypeException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/wrongtypeexception-0000001054440171) |  Throws this exception if the resource is not of the integer array type.  
  
**Since:**

3

#### [h2]getPluralString

public abstract [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) getPluralString​(int quantity) throws [IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426), [NotExistException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/notexistexception-0000001054120142), [WrongTypeException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/wrongtypeexception-0000001054440171)

Obtains the string representation of plural rules associated with this Element based on the given quantity. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
quantity  |  Indicates the number used to obtain the string representation for the current language's plural rules.  
  
**Returns:**

Returns the unformatted string representation of plural rules. The string matches the resource ID and quantity.

**Throws:**

Throw Name | Throw Description  
---|---  
[NotExistException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/notexistexception-0000001054120142) |  Throws this exception if the resource ID does not match any resources. The resource ID must be automatically generated by the IDE or resource tool, or provided by the system.  
[IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426) |  Throws this exception if an I/O error occurs during resource read.  
[WrongTypeException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/wrongtypeexception-0000001054440171) |  Throws this exception if the resource is not of the string type.  
  
**Since:**

3

#### [h2]getPluralString

public abstract [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) getPluralString​(int quantity, [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)... formatArgs) throws [IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426), [NotExistException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/notexistexception-0000001054120142), [WrongTypeException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/wrongtypeexception-0000001054440171)

Obtains the string representation of plural rules associated with this Element based on the given quantity, and formats the string based on the specified formatted objects. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
quantity  |  Indicates the number used to obtain the string representation for the current language's plural rules.  
formatArgs  |  Indicates the formatted objects used for substitution.  
  
**Returns:**

Returns the formatted string representation of plural rules. The string matches the resource ID and quantity.

**Throws:**

Throw Name | Throw Description  
---|---  
[NotExistException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/notexistexception-0000001054120142) |  Throws this exception if the resource ID does not match any resources. The resource ID must be automatically generated by the IDE or resource tool, or provided by the system.  
[IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426) |  Throws this exception if an I/O error occurs during resource read.  
[WrongTypeException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/wrongtypeexception-0000001054440171) |  Throws this exception if the resource is not of the string type.  
  
**Since:**

3

#### [h2]getTheme

public abstract [Theme](https://developer.harmonyos.com/cn/docs/documentation/doc-references/theme-0000001054838840) getTheme​() throws [IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426), [NotExistException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/notexistexception-0000001054120142), [WrongTypeException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/wrongtypeexception-0000001054440171)

Obtains a [Theme](https://developer.harmonyos.com/cn/docs/documentation/doc-references/theme-0000001054838840) instance associated with this Element. 

**Returns:**

Returns a [Theme](https://developer.harmonyos.com/cn/docs/documentation/doc-references/theme-0000001054838840) instance.

**Throws:**

Throw Name | Throw Description  
---|---  
[NotExistException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/notexistexception-0000001054120142) |  Throws this exception if the resource ID does not match any resources. The resource ID must be automatically generated by the IDE or resource tool, or provided by the system.  
[IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426) |  Throws this exception if an I/O error occurs during resource read.  
[WrongTypeException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/wrongtypeexception-0000001054440171) |  Throws this exception if the resource is not of the theme type.  
  
**Since:**

3

**See Also:**

[Theme](https://developer.harmonyos.com/cn/docs/documentation/doc-references/theme-0000001054838840)

#### [h2]getPattern

public abstract [Pattern](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pattern-0000001054238885) getPattern​() throws [IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426), [NotExistException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/notexistexception-0000001054120142), [WrongTypeException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/wrongtypeexception-0000001054440171)

Obtains a ohos.global.resource.solidxml.Pattern instance associated with this Element. 

**Returns:**

Returns the ohos.global.resource.solidxml.Pattern instance.

**Throws:**

Throw Name | Throw Description  
---|---  
[NotExistException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/notexistexception-0000001054120142) |  Throws this exception if the resource ID does not match any resources. The resource ID must be automatically generated by the IDE or resource tool, or provided by the system.  
[IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426) |  Throws this exception if an I/O error occurs during resource read.  
[WrongTypeException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/wrongtypeexception-0000001054440171) |  Throws this exception if the resource is not of the pattern type.  
  
**Since:**

3
