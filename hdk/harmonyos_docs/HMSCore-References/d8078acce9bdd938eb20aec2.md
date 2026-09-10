---
name: document/cn/HMSCore-References/creativematchstrategy-0000001150370048
title: CreativeMatchStrategy
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-References/creativematchstrategy-0000001150370048
---

# CreativeMatchStrategy

|Class Info|
|:-------------------------------------------|
|public class CreativeMatchStrategy 广告创意匹配策略。|

#### Nested Class Summary

|Qualifier and Type|Class Name and Description|
|:-----------------|:---------------------------------|
|static enum|CreativeMatchStrategy 广告创意匹配策略枚举类。|

#### Public Constructor Summary

|Constructor Name|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|[CreativeMatchStrategy](#section44871212141112)([CreativeMatchType](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/creativematchtype-0000001150370058) creativeMatchType ) 广告创意匹配策略。|
|[CreativeMatchStrategy](#section1411213413199)([CreativeMatchType](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/creativematchtype-0000001150370058) creativeMatchType, Integer expectedCreativeWidth, Integer expectedCreativeHeight) 广告创意匹配策略。|

#### Public Method Summary

|Qualifier and Type|Method Name and Description|
|:--------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------------------------------------------|
|CreativeMatchStrategy.[CreativeMatchType](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/creativematchtype-0000001150370058)|[getCreativeMatchType](#section1366216541034)() 获取广告创意匹配策略。|
|int|[getExpectedCreativeHeight](#section1343324102516)() 获取期望的广告创意的高度。|
|int|[getExpectedCreativeWidth](#section36743912236)() 获取期望的广告创意的宽度。|
|void|[setExpectedCreativeHeight](#section164811491317)(int expectedCreativeHeight) 设置期望的广告创意的高度。|

#### Public Constructors

#### CreativeMatchStrategy(CreativeMatchType creativeMatchType )

|Constructor|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public CreativeMatchStrategy([CreativeMatchType](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/creativematchtype-0000001150370058) creativeMatchType ) 广告创意匹配策略。|

Parameters  

|Name|Description|
|:----------------|:----------|
|creativeMatchType|广告创意匹配策略。|

#### CreativeMatchStrategy(CreativeMatchType creativeMatchType, Integer expectedCreativeWidth, Integer expectedCreativeHeight)

|Constructor|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public CreativeMatchStrategy([CreativeMatchType](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/creativematchtype-0000001150370058) creativeMatchType, Integer expectedCreativeWidth, Integer expectedCreativeHeight) 广告创意匹配策略。|

Parameters  

|Name|Description|
|:---------------------|:-----------------|
|creativeMatchType|广告创意匹配策略。|
|expectedCreativeWidth|期望设定的广告创意宽度，单位：px。|
|expectedCreativeHeight|期望设定的广告创意高度，单位：px。|

#### Public Methods

#### getCreativeMatchType

|Method|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public CreativeMatchStrategy.[CreativeMatchType](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/creativematchtype-0000001150370058) getCreativeMatchType() 获取广告创意匹配策略。|

Returns  

|Type|Description|
|:--------------------------------------------------------------------------------------------------------------------------------------------|:----------|
|CreativeMatchStrategy.[CreativeMatchType](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/creativematchtype-0000001150370058)|广告创意匹配策略。|

#### getExpectedCreativeHeight

|Method|
|:---------------------------------------------------|
|public int getExpectedCreativeHeight() 获取期望的广告创意的高度。|

Returns  

|Type|Description|
|:---|:----------------|
|int|期望的广告创意的高度，单位：px。|

#### getExpectedCreativeWidth

|Method|
|:--------------------------------------------------|
|public int getExpectedCreativeWidth() 获取期望的广告创意的宽度。|

Returns  

|Type|Description|
|:---|:----------------|
|int|期望的广告创意的宽度，单位：px。|

#### setExpectedCreativeHeight

|Method|
|:------------------------------------------------------------------------------|
|public void setExpectedCreativeHeight(int expectedCreativeHeight) 设置期望的广告创意的高度。|

Parameters  

|Name|Description|
|:---------------------|:----------------|
|expectedCreativeHeight|期望的广告创意的高度，单位：px。|

