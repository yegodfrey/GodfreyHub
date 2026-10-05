---
name: document/cn/doc-references/elementkind-0000001170214367
title: ElementKind
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/elementkind-0000001170214367
source: portal
---

# ElementKind

[java.lang.Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) |---[java.lang.Enum](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enum-0000001054838398)<[ElementKind](https://developer.harmonyos.com/cn/docs/documentation/doc-references/elementkind-0000001170214367)> |---|---javax.lang.model.element.ElementKind
    
    public enum ElementKind
    extends [Enum](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enum-0000001054838398)<[ElementKind](https://developer.harmonyos.com/cn/docs/documentation/doc-references/elementkind-0000001170214367)>  
  
---  
The kind of an element. 

Note that it is possible additional element kinds will be added to accommodate new, currently unknown, language structures added to future versions of the Java™ programming language.

**Since:**

1.6

**See Also:**

[Element](https://developer.harmonyos.com/cn/docs/documentation/doc-references/element-0000001123694530)

#### Enum Constant Summary

Enum Constant | Description  
---|---  
[ANNOTATION_TYPE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/elementkind-0000001170214367#ZH-CN_TOPIC_0000001170214367__ANNOTATION_TYPE) |  An annotation type.   
[CLASS](https://developer.harmonyos.com/cn/docs/documentation/doc-references/elementkind-0000001170214367#ZH-CN_TOPIC_0000001170214367__CLASS) |  A class not described by a more specific kind (like ENUM).   
[CONSTRUCTOR](https://developer.harmonyos.com/cn/docs/documentation/doc-references/elementkind-0000001170214367#ZH-CN_TOPIC_0000001170214367__CONSTRUCTOR) |  A constructor.   
[ENUM](https://developer.harmonyos.com/cn/docs/documentation/doc-references/elementkind-0000001170214367#ZH-CN_TOPIC_0000001170214367__ENUM) |  An enum type.   
[ENUM_CONSTANT](https://developer.harmonyos.com/cn/docs/documentation/doc-references/elementkind-0000001170214367#ZH-CN_TOPIC_0000001170214367__ENUM_CONSTANT) |  An enum constant.   
[EXCEPTION_PARAMETER](https://developer.harmonyos.com/cn/docs/documentation/doc-references/elementkind-0000001170214367#ZH-CN_TOPIC_0000001170214367__EXCEPTION_PARAMETER) |  A parameter of an exception handler.   
[FIELD](https://developer.harmonyos.com/cn/docs/documentation/doc-references/elementkind-0000001170214367#ZH-CN_TOPIC_0000001170214367__FIELD) |  A field not described by a more specific kind (like ENUM_CONSTANT).   
[INSTANCE_INIT](https://developer.harmonyos.com/cn/docs/documentation/doc-references/elementkind-0000001170214367#ZH-CN_TOPIC_0000001170214367__INSTANCE_INIT) |  An instance initializer.   
[INTERFACE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/elementkind-0000001170214367#ZH-CN_TOPIC_0000001170214367__INTERFACE) |  An interface not described by a more specific kind (like ANNOTATION_TYPE).   
[LOCAL_VARIABLE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/elementkind-0000001170214367#ZH-CN_TOPIC_0000001170214367__LOCAL_VARIABLE) |  A local variable.   
[METHOD](https://developer.harmonyos.com/cn/docs/documentation/doc-references/elementkind-0000001170214367#ZH-CN_TOPIC_0000001170214367__METHOD) |  A method.   
[OTHER](https://developer.harmonyos.com/cn/docs/documentation/doc-references/elementkind-0000001170214367#ZH-CN_TOPIC_0000001170214367__OTHER) |  An implementation-reserved element.   
[PACKAGE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/elementkind-0000001170214367#ZH-CN_TOPIC_0000001170214367__PACKAGE) |  A package.   
[PARAMETER](https://developer.harmonyos.com/cn/docs/documentation/doc-references/elementkind-0000001170214367#ZH-CN_TOPIC_0000001170214367__PARAMETER) |  A parameter of a method or constructor.   
[RESOURCE_VARIABLE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/elementkind-0000001170214367#ZH-CN_TOPIC_0000001170214367__RESOURCE_VARIABLE) |  A resource variable.   
[STATIC_INIT](https://developer.harmonyos.com/cn/docs/documentation/doc-references/elementkind-0000001170214367#ZH-CN_TOPIC_0000001170214367__STATIC_INIT) |  A static initializer.   
[TYPE_PARAMETER](https://developer.harmonyos.com/cn/docs/documentation/doc-references/elementkind-0000001170214367#ZH-CN_TOPIC_0000001170214367__TYPE_PARAMETER) |  A type parameter.   
  
#### Method Summary

Modifier and Type | Method | Description  
---|---|---  
boolean | [isClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/elementkind-0000001170214367#ZH-CN_TOPIC_0000001170214367__isClass--)​() |  Returns true if this is a kind of class: either CLASS or ENUM.   
boolean | [isField](https://developer.harmonyos.com/cn/docs/documentation/doc-references/elementkind-0000001170214367#ZH-CN_TOPIC_0000001170214367__isField--)​() |  Returns true if this is a kind of field: either FIELD or ENUM_CONSTANT.   
boolean | [isInterface](https://developer.harmonyos.com/cn/docs/documentation/doc-references/elementkind-0000001170214367#ZH-CN_TOPIC_0000001170214367__isInterface--)​() |  Returns true if this is a kind of interface: either INTERFACE or ANNOTATION_TYPE.   
static [ElementKind](https://developer.harmonyos.com/cn/docs/documentation/doc-references/elementkind-0000001170214367) | [valueOf](https://developer.harmonyos.com/cn/docs/documentation/doc-references/elementkind-0000001170214367#ZH-CN_TOPIC_0000001170214367__valueOf-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) name) |  Returns the enum constant of this type with the specified name.   
static [ElementKind](https://developer.harmonyos.com/cn/docs/documentation/doc-references/elementkind-0000001170214367)[] | [values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/elementkind-0000001170214367#ZH-CN_TOPIC_0000001170214367__values--)​() |  Returns an array containing the constants of this enum type, in the order they are declared.   
  
Methods inherited from class java.lang.[Enum](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enum-0000001054838398)  
---  
[clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enum-0000001054838398#ZH-CN_TOPIC_0000001054838398__clone--), [compareTo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enum-0000001054838398#ZH-CN_TOPIC_0000001054838398__compareTo-E-), [equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enum-0000001054838398#ZH-CN_TOPIC_0000001054838398__equals-java_lang_Object-), [finalize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enum-0000001054838398#ZH-CN_TOPIC_0000001054838398__finalize--), [getDeclaringClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enum-0000001054838398#ZH-CN_TOPIC_0000001054838398__getDeclaringClass--), [hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enum-0000001054838398#ZH-CN_TOPIC_0000001054838398__hashCode--), [name](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enum-0000001054838398#ZH-CN_TOPIC_0000001054838398__name--), [ordinal](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enum-0000001054838398#ZH-CN_TOPIC_0000001054838398__ordinal--), [toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enum-0000001054838398#ZH-CN_TOPIC_0000001054838398__toString--), [valueOf](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enum-0000001054838398#ZH-CN_TOPIC_0000001054838398__valueOf-java_lang_Class-java_lang_String-)  
  
Methods inherited from class java.lang.[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
---  
[getClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__getClass--), [notify](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notify--), [notifyAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notifyAll--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-int-)  
  
#### Enum Constant Detail

#### [h2]PACKAGE

public static final [ElementKind](https://developer.harmonyos.com/cn/docs/documentation/doc-references/elementkind-0000001170214367) PACKAGE

A package. 

#### [h2]ENUM

public static final [ElementKind](https://developer.harmonyos.com/cn/docs/documentation/doc-references/elementkind-0000001170214367) ENUM

An enum type. 

#### [h2]CLASS

public static final [ElementKind](https://developer.harmonyos.com/cn/docs/documentation/doc-references/elementkind-0000001170214367) CLASS

A class not described by a more specific kind (like ENUM). 

#### [h2]ANNOTATION_TYPE

public static final [ElementKind](https://developer.harmonyos.com/cn/docs/documentation/doc-references/elementkind-0000001170214367) ANNOTATION_TYPE

An annotation type. 

#### [h2]INTERFACE

public static final [ElementKind](https://developer.harmonyos.com/cn/docs/documentation/doc-references/elementkind-0000001170214367) INTERFACE

An interface not described by a more specific kind (like ANNOTATION_TYPE). 

#### [h2]ENUM_CONSTANT

public static final [ElementKind](https://developer.harmonyos.com/cn/docs/documentation/doc-references/elementkind-0000001170214367) ENUM_CONSTANT

An enum constant. 

#### [h2]FIELD

public static final [ElementKind](https://developer.harmonyos.com/cn/docs/documentation/doc-references/elementkind-0000001170214367) FIELD

A field not described by a more specific kind (like ENUM_CONSTANT). 

#### [h2]PARAMETER

public static final [ElementKind](https://developer.harmonyos.com/cn/docs/documentation/doc-references/elementkind-0000001170214367) PARAMETER

A parameter of a method or constructor. 

#### [h2]LOCAL_VARIABLE

public static final [ElementKind](https://developer.harmonyos.com/cn/docs/documentation/doc-references/elementkind-0000001170214367) LOCAL_VARIABLE

A local variable. 

#### [h2]EXCEPTION_PARAMETER

public static final [ElementKind](https://developer.harmonyos.com/cn/docs/documentation/doc-references/elementkind-0000001170214367) EXCEPTION_PARAMETER

A parameter of an exception handler. 

#### [h2]METHOD

public static final [ElementKind](https://developer.harmonyos.com/cn/docs/documentation/doc-references/elementkind-0000001170214367) METHOD

A method. 

#### [h2]CONSTRUCTOR

public static final [ElementKind](https://developer.harmonyos.com/cn/docs/documentation/doc-references/elementkind-0000001170214367) CONSTRUCTOR

A constructor. 

#### [h2]STATIC_INIT

public static final [ElementKind](https://developer.harmonyos.com/cn/docs/documentation/doc-references/elementkind-0000001170214367) STATIC_INIT

A static initializer. 

#### [h2]INSTANCE_INIT

public static final [ElementKind](https://developer.harmonyos.com/cn/docs/documentation/doc-references/elementkind-0000001170214367) INSTANCE_INIT

An instance initializer. 

#### [h2]TYPE_PARAMETER

public static final [ElementKind](https://developer.harmonyos.com/cn/docs/documentation/doc-references/elementkind-0000001170214367) TYPE_PARAMETER

A type parameter. 

#### [h2]OTHER

public static final [ElementKind](https://developer.harmonyos.com/cn/docs/documentation/doc-references/elementkind-0000001170214367) OTHER

An implementation-reserved element. This is not the element you are looking for. 

#### [h2]RESOURCE_VARIABLE

public static final [ElementKind](https://developer.harmonyos.com/cn/docs/documentation/doc-references/elementkind-0000001170214367) RESOURCE_VARIABLE

A resource variable. 

**Since:**

1.7

#### Method Detail

#### [h2]values

public static [ElementKind](https://developer.harmonyos.com/cn/docs/documentation/doc-references/elementkind-0000001170214367)[] values​()

Returns an array containing the constants of this enum type, in the order they are declared. This method may be used to iterate over the constants as follows: 
    
    for (ElementKind c : ElementKind.values())
        System.out.println(c);
    

**Returns:**

an array containing the constants of this enum type, in the order they are declared

#### [h2]valueOf

public static [ElementKind](https://developer.harmonyos.com/cn/docs/documentation/doc-references/elementkind-0000001170214367) valueOf​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) name)

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
  
#### [h2]isClass

public boolean isClass​()

Returns true if this is a kind of class: either CLASS or ENUM. 

**Returns:**

true if this is a kind of class

#### [h2]isInterface

public boolean isInterface​()

Returns true if this is a kind of interface: either INTERFACE or ANNOTATION_TYPE. 

**Returns:**

true if this is a kind of interface

#### [h2]isField

public boolean isField​()

Returns true if this is a kind of field: either FIELD or ENUM_CONSTANT. 

**Returns:**

true if this is a kind of field
