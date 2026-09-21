---
name: document/cn/hiai-References/mlcompositetransactor-trailerfactor-0000001205176183
title: MLCompositeTransactor.TrailerFactory
uri: https://developer.huawei.com/consumer/cn/doc/hiai-References/mlcompositetransactor-trailerfactor-0000001205176183
---

# MLCompositeTransactor.TrailerFactory

|Interface Info|
|:-------------------------------------------------------------------------------------------------|
|com.huawei.hms.mlsdk.common.MLCompositeTransactor.TrailerFactory 目标跟踪处理器工厂接口，实现类可用于创建特定目标的跟踪处理器实例。|

## Public Method Summary

|Qualifier and Type|Method Name and Description|
|:------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------|
|[MLResultTrailer<T>](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlresulttrailer-0000001050169389)|[create](#section537912019442)(T item) 创建一个目标对象检测结果跟踪处理类实例。|

## Public Methods

### create(T item)

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public [MLResultTrailer<T>](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlresulttrailer-0000001050169389) create(T item) 创建一个目标对象检测结果跟踪处理类实例。|

**Parameters**

|Name|Description|
|:---|:----------|
|item|检测结果。|

**Returns**

|Type|Description|
|:------------------------------------------------------------------------------------------------------------------------------|:----------|
|[MLResultTrailer<T>](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlresulttrailer-0000001050169389)|目标跟踪处理器实例。|

