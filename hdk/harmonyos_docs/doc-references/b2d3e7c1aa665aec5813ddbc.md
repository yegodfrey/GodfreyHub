---
name: document/cn/doc-references/cmykcolor-0000001054838656
title: CmykColor
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/cmykcolor-0000001054838656
source: portal
---

# CmykColor

[java.lang.Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) |---[ohos.agp.colors.Color](https://developer.harmonyos.com/cn/docs/documentation/doc-references/color-0000001054120031) |---|---ohos.agp.colors.CmykColor
    
    public class CmykColor
    extends [Color](https://developer.harmonyos.com/cn/docs/documentation/doc-references/color-0000001054120031)  
  
---  
Indicates the cyan, magenta, yellow, and black (CMYK) color specification. 

The CMYK color model is a subtractive color model used in color printing. [CmykColor](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cmykcolor-0000001054838656) indicates the proportion of each color.

**Since:**

1

#### Constructor Summary

Constructor | Description  
---|---  
[CmykColor](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cmykcolor-0000001054838656#ZH-CN_TOPIC_0000001054838656__CmykColor--)​() |  Default constructor used to create a [CmykColor](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cmykcolor-0000001054838656) instance.   
[CmykColor](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cmykcolor-0000001054838656#ZH-CN_TOPIC_0000001054838656__CmykColor-float-float-float-float-)​(float cyan, float magenta, float yellow, float black) |  A constructor used to create a [CmykColor](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cmykcolor-0000001054838656) instance by stetting the proportion of each color.   
[CmykColor](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cmykcolor-0000001054838656#ZH-CN_TOPIC_0000001054838656__CmykColor-float-float-float-float-int-)​(float cyan, float magenta, float yellow, float black, int alpha) |  A constructor used to create a CmykColor instance by setting the proportion of each color and the alpha value.   
[CmykColor](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cmykcolor-0000001054838656#ZH-CN_TOPIC_0000001054838656__CmykColor-ohos_agp_colors_CmykColor-)​([CmykColor](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cmykcolor-0000001054838656) color) |  A constructor used to copy a [CmykColor](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cmykcolor-0000001054838656) instance.   
  
#### Method Summary

Modifier and Type | Method | Description  
---|---|---  
[CmykColor](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cmykcolor-0000001054838656) | [assign](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cmykcolor-0000001054838656#ZH-CN_TOPIC_0000001054838656__assign-ohos_agp_colors_CmykColor-)​([CmykColor](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cmykcolor-0000001054838656) color) |  Assigns the proportion of another [CmykColor](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cmykcolor-0000001054838656) object to the current object to overwrite its previous color.   
boolean | [equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cmykcolor-0000001054838656#ZH-CN_TOPIC_0000001054838656__equals-java_lang_Object-)​([Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) other) |  Indicates whether some other object is "equal to" this one.   
float | [getBlack](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cmykcolor-0000001054838656#ZH-CN_TOPIC_0000001054838656__getBlack--)​() |  Obtains the proportion of black.   
float | [getCyan](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cmykcolor-0000001054838656#ZH-CN_TOPIC_0000001054838656__getCyan--)​() |  Obtains the proportion of cyan.   
float | [getMagenta](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cmykcolor-0000001054838656#ZH-CN_TOPIC_0000001054838656__getMagenta--)​() |  Obtains the proportion of magenta.   
float | [getYellow](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cmykcolor-0000001054838656#ZH-CN_TOPIC_0000001054838656__getYellow--)​() |  Obtains the proportion of yellow.   
int | [hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cmykcolor-0000001054838656#ZH-CN_TOPIC_0000001054838656__hashCode--)​() |  Returns a hash code value for the object.   
void | [setBlack](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cmykcolor-0000001054838656#ZH-CN_TOPIC_0000001054838656__setBlack-float-)​(float black) |  Sets the proportion of black.   
void | [setCyan](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cmykcolor-0000001054838656#ZH-CN_TOPIC_0000001054838656__setCyan-float-)​(float cyan) |  Sets the proportion of cyan.   
void | [setMagenta](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cmykcolor-0000001054838656#ZH-CN_TOPIC_0000001054838656__setMagenta-float-)​(float magenta) |  Sets the proportion of magenta.   
void | [setYellow](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cmykcolor-0000001054838656#ZH-CN_TOPIC_0000001054838656__setYellow-float-)​(float yellow) |  Sets the proportion of yellow.   
  
Methods inherited from class ohos.agp.colors.[Color](https://developer.harmonyos.com/cn/docs/documentation/doc-references/color-0000001054120031)  
---  
[assign](https://developer.harmonyos.com/cn/docs/documentation/doc-references/color-0000001054120031#ZH-CN_TOPIC_0000001054120031__assign-ohos_agp_colors_Color-), [getAlpha](https://developer.harmonyos.com/cn/docs/documentation/doc-references/color-0000001054120031#ZH-CN_TOPIC_0000001054120031__getAlpha--), [getSpec](https://developer.harmonyos.com/cn/docs/documentation/doc-references/color-0000001054120031#ZH-CN_TOPIC_0000001054120031__getSpec--), [setAlpha](https://developer.harmonyos.com/cn/docs/documentation/doc-references/color-0000001054120031#ZH-CN_TOPIC_0000001054120031__setAlpha-int-)  
  
Methods inherited from class java.lang.[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
---  
[clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__clone--), [finalize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__finalize--), [getClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__getClass--), [notify](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notify--), [notifyAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notifyAll--), [toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__toString--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-int-)  
  
#### Constructor Detail

#### [h2]CmykColor

public CmykColor​()

Default constructor used to create a [CmykColor](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cmykcolor-0000001054838656) instance. 

#### [h2]CmykColor

public CmykColor​(float cyan, float magenta, float yellow, float black)

A constructor used to create a [CmykColor](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cmykcolor-0000001054838656) instance by stetting the proportion of each color. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
cyan  |  Indicates the proportion of cyan, which must be a float value ranging from 0 to 100.  
magenta  |  Indicates the proportion of magenta, which must be a float value ranging from 0 to 100.  
yellow  |  Indicates the proportion of yellow, which must be a float value ranging from 0 to 100.  
black  |  Indicates the proportion of black, which must be a float value ranging from 0 to 100.  
  
#### [h2]CmykColor

public CmykColor​(float cyan, float magenta, float yellow, float black, int alpha)

A constructor used to create a CmykColor instance by setting the proportion of each color and the alpha value. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
cyan  |  Indicates the proportion of cyan, which must be a float value ranging from 0 to 100.  
magenta  |  Indicates the proportion of magenta, which must be a float value ranging from 0 to 100.  
yellow  |  Indicates the proportion of yellow, which must be a float value ranging from 0 to 100.  
black  |  Indicates the proportion of black, which must be a float value ranging from 0 to 100.  
alpha  |  Indicates the alpha value, which must be a float value ranging from 0 to 255.  
  
#### [h2]CmykColor

public CmykColor​([CmykColor](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cmykcolor-0000001054838656) color)

A constructor used to copy a [CmykColor](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cmykcolor-0000001054838656) instance. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
color  |  The object used for copy  
  
#### Method Detail

#### [h2]assign

public [CmykColor](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cmykcolor-0000001054838656) assign​([CmykColor](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cmykcolor-0000001054838656) color)

Assigns the proportion of another [CmykColor](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cmykcolor-0000001054838656) object to the current object to overwrite its previous color. 

The current object is returned when this method is called.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
color  |  Indicates the other [CmykColor](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cmykcolor-0000001054838656) object whose color proportion is assigned.  
  
#### [h2]equals

public boolean equals​([Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) other)

Indicates whether some other object is "equal to" this one. 

The equals method implements an equivalence relation on non-null object references: 

    * It is _reflexive_ : for any non-null reference value x, x.equals(x) should return true. 
    * It is _symmetric_ : for any non-null reference values x and y, x.equals(y) should return true if and only if y.equals(x) returns true. 
    * It is _transitive_ : for any non-null reference values x, y, and z, if x.equals(y) returns true and y.equals(z) returns true, then x.equals(z) should return true. 
    * It is _consistent_ : for any non-null reference values x and y, multiple invocations of x.equals(y) consistently return true or consistently return false, provided no information used in equals comparisons on the objects is modified. 
    * For any non-null reference value x, x.equals(null) should return false. 

The equals method for class Object implements the most discriminating possible equivalence relation on objects; that is, for any non-null reference values x and y, this method returns true if and only if x and y refer to the same object (x == y has the value true). 

Note that it is generally necessary to override the hashCode method whenever this method is overridden, so as to maintain the general contract for the hashCode method, which states that equal objects must have equal hash codes.

**Overrides:**

[equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/color-0000001054120031#ZH-CN_TOPIC_0000001054120031__equals-java_lang_Object-) in class [Color](https://developer.harmonyos.com/cn/docs/documentation/doc-references/color-0000001054120031)

**Parameters:**

Parameter Name | Parameter Description  
---|---  
other  |  the reference object with which to compare.  
  
**Returns:**

true if this object is the same as the obj argument; false otherwise.

**See Also:**

[Object.hashCode()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__hashCode--), [HashMap](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashmap-0000001054518606)

#### [h2]hashCode

public int hashCode​()

Returns a hash code value for the object. This method is supported for the benefit of hash tables such as those provided by [HashMap](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashmap-0000001054518606). 

The general contract of hashCode is: 

    * Whenever it is invoked on the same object more than once during an execution of a Java application, the hashCode method must consistently return the same integer, provided no information used in equals comparisons on the object is modified. This integer need not remain consistent from one execution of an application to another execution of the same application. 
    * If two objects are equal according to the equals(Object) method, then calling the hashCode method on each of the two objects must produce the same integer result. 
    * It is not required that if two objects are unequal according to the [Object.equals(java.lang.Object)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__equals-java_lang_Object-) method, then calling the hashCode method on each of the two objects must produce distinct integer results. However, the programmer should be aware that producing distinct integer results for unequal objects may improve the performance of hash tables. 

As much as is reasonably practical, the hashCode method defined by class Object does return distinct integers for distinct objects. (This is typically implemented by converting the internal address of the object into an integer, but this implementation technique is not required by the Java™ programming language.)

**Overrides:**

[hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/color-0000001054120031#ZH-CN_TOPIC_0000001054120031__hashCode--) in class [Color](https://developer.harmonyos.com/cn/docs/documentation/doc-references/color-0000001054120031)

**Returns:**

a hash code value for this object.

**See Also:**

[Object.equals(java.lang.Object)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__equals-java_lang_Object-), [System.identityHashCode(java.lang.Object)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/system-0000001054558449#ZH-CN_TOPIC_0000001054558449__identityHashCode-java_lang_Object-)

#### [h2]setBlack

public void setBlack​(float black)

Sets the proportion of black. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
black  |  Indicates the proportion of black, which must be a float value ranging from 0 to 100.  
  
#### [h2]getBlack

public float getBlack​()

Obtains the proportion of black. 

**Returns:**

Returns the proportion of black.

#### [h2]setCyan

public void setCyan​(float cyan)

Sets the proportion of cyan. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
cyan  |  Indicates the proportion of cyan, which must be a float value ranging from 0 to 100.  
  
#### [h2]getCyan

public float getCyan​()

Obtains the proportion of cyan. 

**Returns:**

Returns the proportion of cyan.

#### [h2]setMagenta

public void setMagenta​(float magenta)

Sets the proportion of magenta. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
magenta  |  Indicates the proportion of magenta, which must be a float value ranging from 0 to 100.  
  
#### [h2]getMagenta

public float getMagenta​()

Obtains the proportion of magenta. 

**Returns:**

Returns the proportion of magenta.

#### [h2]setYellow

public void setYellow​(float yellow)

Sets the proportion of yellow. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
yellow  |  Indicates the proportion of yellow, which must be a float value ranging from 0 to 100.  
  
#### [h2]getYellow

public float getYellow​()

Obtains the proportion of yellow. 

**Returns:**

Returns the proportion of yellow.
