---
name: document/cn/doc-references/abilitysliceanimator-0000001054358659
title: AbilitySliceAnimator
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/abilitysliceanimator-0000001054358659
source: portal
---

# AbilitySliceAnimator

[java.lang.Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) |---ohos.aafwk.ability.AbilitySliceAnimator
    
    public class AbilitySliceAnimator
    extends [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
  
---  
Customizes the transition animation between [AbilitySlice](https://developer.harmonyos.com/cn/docs/documentation/doc-references/abilityslice-0000001054678680) instances. 

You can set different parameters to implement different transition effects. Currently, only translate is supported. Rotate, alpha, and scale operations will be supported later.

The transition properties can be set by calling the onStart() method of the Ability. The default constructor is used to set the translation animation. To disable the transition animation, you can set the value of setAbilitySliceAnimator to null. Example code:
    
    protected void onStart(Intent intent) {
         setAbilitySliceAnimator(new AbilitySliceAnimator());
     }

**Since:**

1

#### Constructor Summary

Constructor | Description  
---|---  
[AbilitySliceAnimator](https://developer.harmonyos.com/cn/docs/documentation/doc-references/abilitysliceanimator-0000001054358659#ZH-CN_TOPIC_0000001054358659__AbilitySliceAnimator--)​() |  A no-argument constructor used to enable right-to-left translation of ability slices.   
[AbilitySliceAnimator](https://developer.harmonyos.com/cn/docs/documentation/doc-references/abilitysliceanimator-0000001054358659#ZH-CN_TOPIC_0000001054358659__AbilitySliceAnimator-float-float-float-float-)​(float fromX, float fromY, float toX, float toY) |  A parameterized constructor used to set the coordinates of the start and end positions for the translation.   
  
#### Method Summary

Modifier and Type | Method | Description  
---|---|---  
[AbilitySliceAnimator](https://developer.harmonyos.com/cn/docs/documentation/doc-references/abilitysliceanimator-0000001054358659) | [setDelay](https://developer.harmonyos.com/cn/docs/documentation/doc-references/abilitysliceanimator-0000001054358659#ZH-CN_TOPIC_0000001054358659__setDelay-long-)​(long delay) |  Sets the delay for playing an animation.   
[AbilitySliceAnimator](https://developer.harmonyos.com/cn/docs/documentation/doc-references/abilitysliceanimator-0000001054358659) | [setDuration](https://developer.harmonyos.com/cn/docs/documentation/doc-references/abilitysliceanimator-0000001054358659#ZH-CN_TOPIC_0000001054358659__setDuration-long-)​(long duration) |  Sets the duration of an animation.   
[AbilitySliceAnimator](https://developer.harmonyos.com/cn/docs/documentation/doc-references/abilitysliceanimator-0000001054358659) | [setRepeatCount](https://developer.harmonyos.com/cn/docs/documentation/doc-references/abilitysliceanimator-0000001054358659#ZH-CN_TOPIC_0000001054358659__setRepeatCount-int-)​(int repeatCount) |  Sets the number of times that an animation play will be repeated.   
  
Methods inherited from class java.lang.[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
---  
[clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__clone--), [equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__equals-java_lang_Object-), [finalize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__finalize--), [getClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__getClass--), [hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__hashCode--), [notify](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notify--), [notifyAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notifyAll--), [toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__toString--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-int-)  
  
#### Constructor Detail

#### [h2]AbilitySliceAnimator

public AbilitySliceAnimator​()

A no-argument constructor used to enable right-to-left translation of ability slices. 

**Since:**

1

#### [h2]AbilitySliceAnimator

public AbilitySliceAnimator​(float fromX, float fromY, float toX, float toY)

A parameterized constructor used to set the coordinates of the start and end positions for the translation. 

The origin of coordinates is the upper-left corner on a screen. For example, if you move a view from (1080, 0) to (0, 0), the view is translated horizontally from right to left.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
fromX  |  Indicates the X coordinate of the translation start position.  
fromY  |  Indicates the Y coordinate of the translation start position.  
toX  |  Indicates the X coordinate of the translation end position.  
toY  |  Indicates the Y coordinate of the translation end position.  
  
**Since:**

1

#### Method Detail

#### [h2]setDuration

public [AbilitySliceAnimator](https://developer.harmonyos.com/cn/docs/documentation/doc-references/abilitysliceanimator-0000001054358659) setDuration​(long duration)

Sets the duration of an animation. The default duration is 300 milliseconds. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
duration  |  Indicates the duration for playing the animation, in milliseconds.  
  
**Returns:**

Returns the current AbilitySliceAnimator instance.

**Since:**

1

#### [h2]setDelay

public [AbilitySliceAnimator](https://developer.harmonyos.com/cn/docs/documentation/doc-references/abilitysliceanimator-0000001054358659) setDelay​(long delay)

Sets the delay for playing an animation. The default value is 0 milliseconds, indicating that the animation will be played immediately with no delay. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
delay  |  Indicates the delay for playing the animation, in milliseconds.  
  
**Returns:**

Returns the current AbilitySliceAnimator instance.

**Since:**

1

#### [h2]setRepeatCount

public [AbilitySliceAnimator](https://developer.harmonyos.com/cn/docs/documentation/doc-references/abilitysliceanimator-0000001054358659) setRepeatCount​(int repeatCount)

Sets the number of times that an animation play will be repeated. The default value is 0, indicating that the animation will be played only once. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
repeatCount  |  Indicates the number of times that the animation play will be repeated.  
  
**Returns:**

Returns the current AbilitySliceAnimator instance.

**Since:**

1
