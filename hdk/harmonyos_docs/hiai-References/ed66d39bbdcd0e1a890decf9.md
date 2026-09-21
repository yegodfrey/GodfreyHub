---
name: document/cn/hiai-References/ios-mlremoteproductvisionsearchanalyzersetting-0000001050816231
title: MLRemoteProductVisionSearchAnalyzerSetting
uri: https://developer.huawei.com/consumer/cn/doc/hiai-References/ios-mlremoteproductvisionsearchanalyzersetting-0000001050816231
---

# MLRemoteProductVisionSearchAnalyzerSetting

|Class Info|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|拍照购检测参数配置类，目前包含以下两个可设置的参数： * maxResult：返回的商品列表的最大数量。 * productSetId：商品集ID。 **Sample code：** ```screen MLRemoteProductVisionSearchAnalyzerSetting *setting = [[MLRemoteProductVisionSearchAnalyzerSetting alloc] init]; Setting.maxResult = 20; setting.productSetId = @"123456-myj"; [MLRemoteProductVisionSearchAnalyzer setRemoteProductVisionSearchAnalyzerSetting:setting]; ```|

## Public Constructor Summary

|Constructor Name|
|:----------------------------------|
|[init](#section114762417137) 初始化方法。|

## Public Method Summary

|Qualifier and Type|Method Name and Description|
|:-----------------|:-----------------------------------------------------------|
|NSInteger|[getLargestNumOfReturns](#section178633661513) 获取设置商品数量的最大值。|
|NSString|[getProductSetId](#section419515171332) 获取商品集ID。|

## Public Constructors

### init

|Constructor|
|:-----------------------------------------------------------------------------------|
|init 初始化函数。 ```screen [[MLRemoteProductVisionSearchAnalyzerSetting alloc] init]; ```|

## Public Methods

### getLargestNumOfReturns

|Method|
|:------------------------------------------------|
|- (NSInteger)getLargestNumOfReturns 获取设置商品数量的最大值。|

**Returns**

|Type|Description|
|:--------|:-----------------------------|
|NSInteger|返回商品数量的最大值，取值范围：[1-100]，默认为20。|

### getProductSetId

|Method|
|:-------------------------------------|
|- (NSString *)getProductSetId 获取设置的Id。|

**Returns**

|Type|Description|
|:-------|:---------------------------|
|NSString|返回设置的商品集ID（如果返回值为空，取默认的商品集）。|

