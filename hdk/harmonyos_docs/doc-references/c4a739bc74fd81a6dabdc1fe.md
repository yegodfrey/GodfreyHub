---
name: document/cn/doc-references/typeestimator-0000001218157965
title: TypeEstimator
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/typeestimator-0000001218157965
source: portal
---

TypeEstimator
    
    public interface TypeEstimator<T>  
  
---  
Interface for use with the [AnimatorValue.setEstimator(TypeEstimator)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/animatorvalue-0000001054518714#ZH-CN_TOPIC_0000001054518714__setEstimator-ohos_agp_animation_util_TypeEstimator-) function. This class allows developers to create animations on arbitrary property types, by allowing them to supply custom estimators for types that are not automatically understood and used by the animation system. **Since:** 7Method Summary Modifier and Type | Method | Description  
---|---|---  
[T](https://developer.harmonyos.com/cn/docs/documentation/doc-references/typeestimator-0000001218157965) | [estimate](https://developer.harmonyos.com/cn/docs/documentation/doc-references/typeestimator-0000001218157965#ZH-CN_TOPIC_0000001218157965__estimate-float-T-T-)​(float progress, [T](https://developer.harmonyos.com/cn/docs/documentation/doc-references/typeestimator-0000001218157965) startKeyValue, [T](https://developer.harmonyos.com/cn/docs/documentation/doc-references/typeestimator-0000001218157965) endKeyValue) |  This function returns the result of linearly interpolating the start and end values, with progress representing the proportion between the start and end values.   
Method Detail [h2]estimate [T](https://developer.harmonyos.com/cn/docs/documentation/doc-references/typeestimator-0000001218157965) estimate​(float progress, [T](https://developer.harmonyos.com/cn/docs/documentation/doc-references/typeestimator-0000001218157965) startKeyValue, [T](https://developer.harmonyos.com/cn/docs/documentation/doc-references/typeestimator-0000001218157965) endKeyValue) This function returns the result of linearly interpolating the start and end values, with progress representing the proportion between the start and end values. **Parameters:** Parameter Name | Parameter Description  
---|---  
progress  |  The progress from the starting to the ending values  
startKeyValue  |  The start value.  
endKeyValue  |  The end value.  
**Returns:** A linear interpolation between the start and end values, given the progress parameter. **Since:** 7
