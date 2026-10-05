---
name: document/cn/doc-references/blurdrawlooper-0000001054558733
title: BlurDrawLooper
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/blurdrawlooper-0000001054558733
source: portal
---

booleanBlurDrawLooper [java.lang.Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) |---ohos.agp.render.BlurDrawLooper
    
    public class BlurDrawLooper
    extends [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
  
---  
Describes shadow attributes of a [Paint](https://developer.harmonyos.com/cn/docs/documentation/doc-references/paint-0000001054358720). This class stores shadow attributes, including the shadow radius, shadow offset against the drawn object in the horizontal and vertical directions, and shadow color.  This class acts as an attribute of [Paint](https://developer.harmonyos.com/cn/docs/documentation/doc-references/paint-0000001054358720). For details, see [Paint#setBlurDrawLooper](https://developer.harmonyos.com/cn/docs/documentation/doc-references/paint-0000001054358720#ZH-CN_TOPIC_0000001054358720__setBlurDrawLooper-ohos_agp_render_BlurDrawLooper-). **Since:** 3Field Summary Modifier and Type | Field | Description  
---|---|---  
int | [intColor](https://developer.harmonyos.com/cn/docs/documentation/doc-references/blurdrawlooper-0000001054558733#ZH-CN_TOPIC_0000001054558733__intColor) |  Indicates an integer representing the color of this BlurDrawLooper.   
float | [offsetX](https://developer.harmonyos.com/cn/docs/documentation/doc-references/blurdrawlooper-0000001054558733#ZH-CN_TOPIC_0000001054558733__offsetX) |  Indicates the horizontal shadow offset against the drawn object.   
float | [offsetY](https://developer.harmonyos.com/cn/docs/documentation/doc-references/blurdrawlooper-0000001054558733#ZH-CN_TOPIC_0000001054558733__offsetY) |  Indicates the vertical shadow offset against the drawn object.   
float | [shadowRadius](https://developer.harmonyos.com/cn/docs/documentation/doc-references/blurdrawlooper-0000001054558733#ZH-CN_TOPIC_0000001054558733__shadowRadius) |  Indicates the radius of this BlurDrawLooper.   
Constructor Summary Constructor | Description  
---|---  
[BlurDrawLooper](https://developer.harmonyos.com/cn/docs/documentation/doc-references/blurdrawlooper-0000001054558733#ZH-CN_TOPIC_0000001054558733__BlurDrawLooper-float-float-float-ohos_agp_utils_Color-)​(float radius, float offsetX, float offsetY, [Color](https://developer.harmonyos.com/cn/docs/documentation/doc-references/color-0000001054440041) color) |  A constructor used to create a BlurDrawLooper instance of a specified style.   
Method Summary Methods inherited from class java.lang.[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
---  
[clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__clone--), [equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__equals-java_lang_Object-), [finalize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__finalize--), [getClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__getClass--), [hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__hashCode--), [notify](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notify--), [notifyAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notifyAll--), [toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__toString--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-int-)  
Field Detail [h2]intColor public final int intColor Indicates an integer representing the color of this BlurDrawLooper. The default value is 0. **Since:** 3 [h2]offsetX public final float offsetX Indicates the horizontal shadow offset against the drawn object. **Since:** 3 [h2]offsetY public final float offsetY Indicates the vertical shadow offset against the drawn object. **Since:** 3 [h2]shadowRadius public final float shadowRadius Indicates the radius of this BlurDrawLooper. The initial shadow radius is 0, indicating that the object is drawn with no shadow. **Since:** 3 Constructor Detail [h2]BlurDrawLooper public BlurDrawLooper​(float radius, float offsetX, float offsetY, [Color](https://developer.harmonyos.com/cn/docs/documentation/doc-references/color-0000001054440041) color) A constructor used to create a BlurDrawLooper instance of a specified style. **Parameters:** Parameter Name | Parameter Description  
---|---  
radius  |  Indicates the shadow radius.  
offsetX  |  Indicates the horizontal shadow offset against the drawn object.  
offsetY  |  Indicates the vertical shadow offset against the drawn object.  
color  |  Indicates the shadow color.  
**Since:** 3
