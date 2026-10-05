---
name: document/cn/doc-references/component_measurespec-0000001060519068
title: Component.MeasureSpec
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/component_measurespec-0000001060519068
source: portal
---

# Component.MeasureSpec

[java.lang.Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) |---ohos.agp.components.Component.MeasureSpec
    
    [@Deprecated](https://developer.harmonyos.com/cn/docs/documentation/doc-references/deprecated-0000001054838412)
    public static class Component.MeasureSpec
    extends [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
  
---  
Deprecated. This change is effective since API version 6. Replaced by EstimateSpec 

**Since:**

1

#### Field Summary

Modifier and Type | Field | Description  
---|---|---  
static int | [ESTIMATED_STATE_BIT_MASK](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component_measurespec-0000001060519068#ZH-CN_TOPIC_0000001060519068__ESTIMATED_STATE_BIT_MASK) |  Deprecated.   
static int | [NOT_EXCEED](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component_measurespec-0000001060519068#ZH-CN_TOPIC_0000001060519068__NOT_EXCEED) |  Deprecated.   
static int | [PRECISE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component_measurespec-0000001060519068#ZH-CN_TOPIC_0000001060519068__PRECISE) |  Deprecated.   
static int | [UNCONSTRAINT](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component_measurespec-0000001060519068#ZH-CN_TOPIC_0000001060519068__UNCONSTRAINT) |  Deprecated.   
  
#### Constructor Summary

Constructor | Description  
---|---  
[MeasureSpec](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component_measurespec-0000001060519068#ZH-CN_TOPIC_0000001060519068__MeasureSpec--)​() |  Deprecated.   
  
#### Method Summary

Modifier and Type | Method | Description  
---|---|---  
static int | [getMeasureSpec](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component_measurespec-0000001060519068#ZH-CN_TOPIC_0000001060519068__getMeasureSpec-int-int-)​(int size, int mode) |  Deprecated.   
static int | [getMode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component_measurespec-0000001060519068#ZH-CN_TOPIC_0000001060519068__getMode-int-)​(int measureSpec) |  Deprecated.   
static int | [getSize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component_measurespec-0000001060519068#ZH-CN_TOPIC_0000001060519068__getSize-int-)​(int measureSpec) |  Deprecated.   
static int | [getSizeAndConfig](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component_measurespec-0000001060519068#ZH-CN_TOPIC_0000001060519068__getSizeAndConfig-int-int-int-)​(int size, int estimatedConfig, int childEstimatedConfig) |  Deprecated.   
  
Methods inherited from class java.lang.[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
---  
[clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__clone--), [equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__equals-java_lang_Object-), [finalize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__finalize--), [getClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__getClass--), [hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__hashCode--), [notify](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notify--), [notifyAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notifyAll--), [toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__toString--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-int-)  
  
#### Field Detail

#### [h2]ESTIMATED_STATE_BIT_MASK

[@Deprecated](https://developer.harmonyos.com/cn/docs/documentation/doc-references/deprecated-0000001054838412) public static final int ESTIMATED_STATE_BIT_MASK

Deprecated. 

Bits of state for estimated size 

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_agp_components_Component_MeasureSpec_ESTIMATED_STATE_BIT_MASK)

#### [h2]NOT_EXCEED

[@Deprecated](https://developer.harmonyos.com/cn/docs/documentation/doc-references/deprecated-0000001054838412) public static final int NOT_EXCEED

Deprecated. 

In this mode, the maximum size has been specified for the child. The child cannot exceed the specified size. 

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_agp_components_Component_MeasureSpec_NOT_EXCEED)

#### [h2]PRECISE

[@Deprecated](https://developer.harmonyos.com/cn/docs/documentation/doc-references/deprecated-0000001054838412) public static final int PRECISE

Deprecated. 

In this mode, the parent has determined the exact size of the child. 

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_agp_components_Component_MeasureSpec_PRECISE)

#### [h2]UNCONSTRAINT

[@Deprecated](https://developer.harmonyos.com/cn/docs/documentation/doc-references/deprecated-0000001054838412) public static final int UNCONSTRAINT

Deprecated. 

In this mode, the parent has no constraint on the child, meaning that the child can be whatever size it wants. 

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_agp_components_Component_MeasureSpec_UNCONSTRAINT)

#### Constructor Detail

#### [h2]MeasureSpec

[@Deprecated](https://developer.harmonyos.com/cn/docs/documentation/doc-references/deprecated-0000001054838412) public MeasureSpec​()

Deprecated. 

#### Method Detail

#### [h2]getMeasureSpec

[@Deprecated](https://developer.harmonyos.com/cn/docs/documentation/doc-references/deprecated-0000001054838412) public static int getMeasureSpec​(int size, int mode)

Deprecated. 

Creates a measure specification based on the specified size and mode. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
size  |  Indicates the size contained in the measure specification. The value ranges from 0 to (1 shifted left by shifting MeasureSpec.MODE_SHIFT bits), including 1.  
mode  |  Indicates the mode contained in the measure specification. The value must be [UNCONSTRAINT](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component_measurespec-0000001060519068#ZH-CN_TOPIC_0000001060519068__UNCONSTRAINT), [PRECISE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component_measurespec-0000001060519068#ZH-CN_TOPIC_0000001060519068__PRECISE), or [NOT_EXCEED](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component_measurespec-0000001060519068#ZH-CN_TOPIC_0000001060519068__NOT_EXCEED).  
  
**Returns:**

Returns the new measure specification.

**Since:**

4

#### [h2]getMode

[@Deprecated](https://developer.harmonyos.com/cn/docs/documentation/doc-references/deprecated-0000001054838412) public static int getMode​(int measureSpec)

Deprecated. 

Obtains the showing mode of this component. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
measureSpec  |  Indicates the measure specification.  
  
**Returns:**

Returns the showing mode of this component.

**Since:**

3

#### [h2]getSize

[@Deprecated](https://developer.harmonyos.com/cn/docs/documentation/doc-references/deprecated-0000001054838412) public static int getSize​(int measureSpec)

Deprecated. 

Extracts the size from the provided measure specification. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
measureSpec  |  Indicates the measure specification.  
  
**Returns:**

Returns the size of the measure specification.

#### [h2]getSizeAndConfig

[@Deprecated](https://developer.harmonyos.com/cn/docs/documentation/doc-references/deprecated-0000001054838412) public static int getSizeAndConfig​(int size, int estimatedConfig, int childEstimatedConfig)

Deprecated. 

Utility to set a desired size and state in coordination with the constraints set by MeasureSpec 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
size  |  The size how big the component wants to be.  
estimatedConfig  |  Constraints set by the parent.  
childEstimatedConfig  |  Size information bit mask for the component's children.  
  
**Returns:**

bit mask for size

**Since:**

3
