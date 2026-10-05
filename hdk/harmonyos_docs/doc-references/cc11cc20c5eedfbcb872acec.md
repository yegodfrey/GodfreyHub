---
name: document/cn/doc-references/pixelformat-0000001054120194
title: PixelFormat
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/pixelformat-0000001054120194
source: portal
---

# PixelFormat

[java.lang.Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) |---[java.lang.Enum](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enum-0000001054838398)<[PixelFormat](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pixelformat-0000001054120194)> |---|---ohos.media.image.common.PixelFormat
    
    public enum PixelFormat
    extends [Enum](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enum-0000001054838398)<[PixelFormat](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pixelformat-0000001054120194)>  
  
---  
Describes image pixel formats. 

A pixel format of image data describes the components of a pixel and the layout of the components stored in memory. Common pixel formats include ARGB_8888 and RGBA_8888.

**Since:**

1

#### Enum Constant Summary

Enum Constant | Description  
---|---  
[ARGB_8888](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pixelformat-0000001054120194#ZH-CN_TOPIC_0000001054120194__ARGB_8888) |  Indicates that each pixel is stored on 32 bits.   
[RGB_565](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pixelformat-0000001054120194#ZH-CN_TOPIC_0000001054120194__RGB_565) |  Indicates that each pixel is stored on 16 bits.   
[UNKNOWN](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pixelformat-0000001054120194#ZH-CN_TOPIC_0000001054120194__UNKNOWN) |  Indicates an unknown format.   
  
#### Method Summary

Modifier and Type | Method | Description  
---|---|---  
int | [getValue](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pixelformat-0000001054120194#ZH-CN_TOPIC_0000001054120194__getValue--)​() |  Obtains an enum value.   
static [PixelFormat](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pixelformat-0000001054120194) | [valueOf](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pixelformat-0000001054120194#ZH-CN_TOPIC_0000001054120194__valueOf-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) name) |  Returns the enum constant of this type with the specified name.   
static [PixelFormat](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pixelformat-0000001054120194)[] | [values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pixelformat-0000001054120194#ZH-CN_TOPIC_0000001054120194__values--)​() |  Returns an array containing the constants of this enum type, in the order they are declared.   
  
Methods inherited from class java.lang.[Enum](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enum-0000001054838398)  
---  
[clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enum-0000001054838398#ZH-CN_TOPIC_0000001054838398__clone--), [compareTo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enum-0000001054838398#ZH-CN_TOPIC_0000001054838398__compareTo-E-), [equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enum-0000001054838398#ZH-CN_TOPIC_0000001054838398__equals-java_lang_Object-), [finalize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enum-0000001054838398#ZH-CN_TOPIC_0000001054838398__finalize--), [getDeclaringClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enum-0000001054838398#ZH-CN_TOPIC_0000001054838398__getDeclaringClass--), [hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enum-0000001054838398#ZH-CN_TOPIC_0000001054838398__hashCode--), [name](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enum-0000001054838398#ZH-CN_TOPIC_0000001054838398__name--), [ordinal](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enum-0000001054838398#ZH-CN_TOPIC_0000001054838398__ordinal--), [toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enum-0000001054838398#ZH-CN_TOPIC_0000001054838398__toString--), [valueOf](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enum-0000001054838398#ZH-CN_TOPIC_0000001054838398__valueOf-java_lang_Class-java_lang_String-)  
  
Methods inherited from class java.lang.[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
---  
[getClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__getClass--), [notify](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notify--), [notifyAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notifyAll--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-int-)  
  
#### Enum Constant Detail

#### [h2]UNKNOWN

public static final [PixelFormat](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pixelformat-0000001054120194) UNKNOWN

Indicates an unknown format. 

#### [h2]ARGB_8888

public static final [PixelFormat](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pixelformat-0000001054120194) ARGB_8888

Indicates that each pixel is stored on 32 bits. Components A, R, G, and B each occupies 8 bits and are stored from the higher-order to the lower-order bits. 

#### [h2]RGB_565

public static final [PixelFormat](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pixelformat-0000001054120194) RGB_565

Indicates that each pixel is stored on 16 bits. Only the R, G, and B components are encoded from the higher-order to the lower-order bits: red is stored with 5 bits of precision, green is stored with 6 bits of precision, and blue is stored with 5 bits of precision. 

#### Method Detail

#### [h2]values

public static [PixelFormat](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pixelformat-0000001054120194)[] values​()

Returns an array containing the constants of this enum type, in the order they are declared. This method may be used to iterate over the constants as follows: 
    
    for (PixelFormat c : PixelFormat.values())
        System.out.println(c);
    

**Returns:**

an array containing the constants of this enum type, in the order they are declared

#### [h2]valueOf

public static [PixelFormat](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pixelformat-0000001054120194) valueOf​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) name)

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
  
#### [h2]getValue

public int getValue​()

Obtains an enum value. 

**Returns:**

Returns the enum value.

**Since:**

1
