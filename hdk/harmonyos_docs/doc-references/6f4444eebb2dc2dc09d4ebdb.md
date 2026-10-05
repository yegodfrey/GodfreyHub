---
name: document/cn/doc-references/pixelmap_pixelplane-0000001172398182
title: PixelMap.PixelPlane
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/pixelmap_pixelplane-0000001172398182
source: portal
---

# PixelMap.PixelPlane

[java.lang.Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) |---ohos.media.codec.PixelMap.PixelPlane
    
    public abstract static class PixelMap.PixelPlane
    extends [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
  
---  
Represents a color plane of pixel map data. 

This class provides methods for obtaining attributes of a color plane.

**Since:**

6

#### Constructor Summary

Constructor | Description  
---|---  
[PixelPlane](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pixelmap_pixelplane-0000001172398182#ZH-CN_TOPIC_0000001172398182__PixelPlane--)​() |     
  
#### Method Summary

Modifier and Type | Method | Description  
---|---|---  
abstract int | [obtainAdjPixelsBytes](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pixelmap_pixelplane-0000001172398182#ZH-CN_TOPIC_0000001172398182__obtainAdjPixelsBytes--)​() |  Obtains the distance between two adjacent pixels.   
abstract int | [obtainOneRowBytes](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pixelmap_pixelplane-0000001172398182#ZH-CN_TOPIC_0000001172398182__obtainOneRowBytes--)​() |  Obtains the number of bytes in each row of this pixel plane.   
abstract [ByteBuffer](https://developer.harmonyos.com/cn/docs/documentation/doc-references/bytebuffer-0000001054439771) | [obtainPixelBytes](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pixelmap_pixelplane-0000001172398182#ZH-CN_TOPIC_0000001172398182__obtainPixelBytes--)​() |  Obtains the number of bytes of all pixel data.   
  
Methods inherited from class java.lang.[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
---  
[clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__clone--), [equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__equals-java_lang_Object-), [finalize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__finalize--), [getClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__getClass--), [hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__hashCode--), [notify](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notify--), [notifyAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notifyAll--), [toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__toString--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-int-)  
  
#### Constructor Detail

#### [h2]PixelPlane

public PixelPlane​()

#### Method Detail

#### [h2]obtainOneRowBytes

public abstract int obtainOneRowBytes​()

Obtains the number of bytes in each row of this pixel plane. 

**Returns:**

Returns the number of bytes.

**Since:**

6

#### [h2]obtainAdjPixelsBytes

public abstract int obtainAdjPixelsBytes​()

Obtains the distance between two adjacent pixels. 

**Returns:**

Returns the distance in bytes.

**Since:**

6

#### [h2]obtainPixelBytes

public abstract [ByteBuffer](https://developer.harmonyos.com/cn/docs/documentation/doc-references/bytebuffer-0000001054439771) obtainPixelBytes​()

Obtains the number of bytes of all pixel data. 

**Returns:**

Returns the number of bytes.

**Since:**

6
