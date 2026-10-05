---
name: document/cn/doc-references/objectstreamfield-0000001054238433
title: ObjectStreamField
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/objectstreamfield-0000001054238433
source: portal
---

# ObjectStreamField

[java.lang.Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) |---java.io.ObjectStreamField
    
    public class ObjectStreamField
    extends [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)
    implements [Comparable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/comparable-0000001054558443)<[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)>  
  
---  
A description of a Serializable field from a Serializable class. An array of ObjectStreamFields is used to declare the Serializable fields of a class.

**Since:**

1.2

**See Also:**

[ObjectStreamClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/objectstreamclass-0000001054558435)

#### Constructor Summary

Constructor | Description  
---|---  
[ObjectStreamField](https://developer.harmonyos.com/cn/docs/documentation/doc-references/objectstreamfield-0000001054238433#ZH-CN_TOPIC_0000001054238433__ObjectStreamField-java_lang_String-java_lang_Class-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) name, [Class](https://developer.harmonyos.com/cn/docs/documentation/doc-references/class-0000001054358423)<?> type) |  Create a Serializable field with the specified type.   
[ObjectStreamField](https://developer.harmonyos.com/cn/docs/documentation/doc-references/objectstreamfield-0000001054238433#ZH-CN_TOPIC_0000001054238433__ObjectStreamField-java_lang_String-java_lang_Class-boolean-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) name, [Class](https://developer.harmonyos.com/cn/docs/documentation/doc-references/class-0000001054358423)<?> type, boolean unshared) |  Creates an ObjectStreamField representing a serializable field with the given name and type.   
  
#### Method Summary

Modifier and Type | Method | Description  
---|---|---  
int | [compareTo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/objectstreamfield-0000001054238433#ZH-CN_TOPIC_0000001054238433__compareTo-java_lang_Object-)​([Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) obj) |  Compare this field with another ObjectStreamField.   
[String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) | [getName](https://developer.harmonyos.com/cn/docs/documentation/doc-references/objectstreamfield-0000001054238433#ZH-CN_TOPIC_0000001054238433__getName--)​() |  Get the name of this field.   
int | [getOffset](https://developer.harmonyos.com/cn/docs/documentation/doc-references/objectstreamfield-0000001054238433#ZH-CN_TOPIC_0000001054238433__getOffset--)​() |  Offset of field within instance data.   
[Class](https://developer.harmonyos.com/cn/docs/documentation/doc-references/class-0000001054358423)<?> | [getType](https://developer.harmonyos.com/cn/docs/documentation/doc-references/objectstreamfield-0000001054238433#ZH-CN_TOPIC_0000001054238433__getType--)​() |  Get the type of the field.   
char | [getTypeCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/objectstreamfield-0000001054238433#ZH-CN_TOPIC_0000001054238433__getTypeCode--)​() |  Returns character encoding of field type.   
[String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) | [getTypeString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/objectstreamfield-0000001054238433#ZH-CN_TOPIC_0000001054238433__getTypeString--)​() |  Return the JVM type signature.   
boolean | [isPrimitive](https://developer.harmonyos.com/cn/docs/documentation/doc-references/objectstreamfield-0000001054238433#ZH-CN_TOPIC_0000001054238433__isPrimitive--)​() |  Return true if this field has a primitive type.   
boolean | [isUnshared](https://developer.harmonyos.com/cn/docs/documentation/doc-references/objectstreamfield-0000001054238433#ZH-CN_TOPIC_0000001054238433__isUnshared--)​() |  Returns boolean value indicating whether or not the serializable field represented by this ObjectStreamField instance is unshared.   
protected void | [setOffset](https://developer.harmonyos.com/cn/docs/documentation/doc-references/objectstreamfield-0000001054238433#ZH-CN_TOPIC_0000001054238433__setOffset-int-)​(int offset) |  Offset within instance data.   
[String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) | [toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/objectstreamfield-0000001054238433#ZH-CN_TOPIC_0000001054238433__toString--)​() |  Return a string that describes this field.   
  
Methods inherited from class java.lang.[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
---  
[clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__clone--), [equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__equals-java_lang_Object-), [finalize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__finalize--), [getClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__getClass--), [hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__hashCode--), [notify](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notify--), [notifyAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notifyAll--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-int-)  
  
#### Constructor Detail

#### [h2]ObjectStreamField

public ObjectStreamField​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) name, [Class](https://developer.harmonyos.com/cn/docs/documentation/doc-references/class-0000001054358423)<?> type)

Create a Serializable field with the specified type. This field should be documented with a serialField tag. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
name  |  the name of the serializable field  
type  |  the Class object of the serializable field  
  
#### [h2]ObjectStreamField

public ObjectStreamField​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) name, [Class](https://developer.harmonyos.com/cn/docs/documentation/doc-references/class-0000001054358423)<?> type, boolean unshared)

Creates an ObjectStreamField representing a serializable field with the given name and type. If unshared is false, values of the represented field are serialized and deserialized in the default manner--if the field is non-primitive, object values are serialized and deserialized as if they had been written and read by calls to writeObject and readObject. If unshared is true, values of the represented field are serialized and deserialized as if they had been written and read by calls to writeUnshared and readUnshared. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
name  |  field name  
type  |  field type  
unshared  |  if false, write/read field values in the same manner as writeObject/readObject; if true, write/read in the same manner as writeUnshared/readUnshared  
  
**Since:**

1.4

#### Method Detail

#### [h2]getName

public [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) getName​()

Get the name of this field. 

**Returns:**

a String representing the name of the serializable field

#### [h2]getType

public [Class](https://developer.harmonyos.com/cn/docs/documentation/doc-references/class-0000001054358423)<?> getType​()

Get the type of the field. If the type is non-primitive and this ObjectStreamField was obtained from a deserialized [ObjectStreamClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/objectstreamclass-0000001054558435) instance, then Object.class is returned. Otherwise, the Class object for the type of the field is returned. 

**Returns:**

a Class object representing the type of the serializable field

#### [h2]getTypeCode

public char getTypeCode​()

Returns character encoding of field type. The encoding is as follows: 
    
    B            byte
     C            char
     D            double
     F            float
     I            int
     J            long
     L            class or interface
     S            short
     Z            boolean
     [            array
     

**Returns:**

the typecode of the serializable field

#### [h2]getTypeString

public [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) getTypeString​()

Return the JVM type signature. 

**Returns:**

null if this field has a primitive type.

#### [h2]getOffset

public int getOffset​()

Offset of field within instance data. 

**Returns:**

the offset of this field

**See Also:**

[setOffset(int)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/objectstreamfield-0000001054238433#ZH-CN_TOPIC_0000001054238433__setOffset-int-)

#### [h2]setOffset

protected void setOffset​(int offset)

Offset within instance data. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
offset  |  the offset of the field  
  
**See Also:**

[getOffset()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/objectstreamfield-0000001054238433#ZH-CN_TOPIC_0000001054238433__getOffset--)

#### [h2]isPrimitive

public boolean isPrimitive​()

Return true if this field has a primitive type. 

**Returns:**

true if and only if this field corresponds to a primitive type

#### [h2]isUnshared

public boolean isUnshared​()

Returns boolean value indicating whether or not the serializable field represented by this ObjectStreamField instance is unshared. 

**Returns:**

true if this field is unshared

**Since:**

1.4

#### [h2]compareTo

public int compareTo​([Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) obj)

Compare this field with another ObjectStreamField. Return -1 if this is smaller, 0 if equal, 1 if greater. Types that are primitives are "smaller" than object types. If equal, the field names are compared. 

**Specified by:**

[compareTo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/comparable-0000001054558443#ZH-CN_TOPIC_0000001054558443__compareTo-T-) in interface [Comparable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/comparable-0000001054558443)<[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)>

**Parameters:**

Parameter Name | Parameter Description  
---|---  
obj  |  the object to be compared.  
  
**Returns:**

a negative integer, zero, or a positive integer as this object is less than, equal to, or greater than the specified object.

#### [h2]toString

public [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) toString​()

Return a string that describes this field. 

**Overrides:**

[toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__toString--) in class [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)

**Returns:**

a string representation of the object.
