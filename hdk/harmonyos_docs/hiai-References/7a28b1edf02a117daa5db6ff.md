---
name: document/cn/hiai-References/mlskeletonanalyzerfactory-0000001051136162
title: MLSkeletonAnalyzerFactory
uri: https://developer.huawei.com/consumer/cn/doc/hiai-References/mlskeletonanalyzerfactory-0000001051136162
---

# MLSkeletonAnalyzerFactory

|Class Info|
|:-----------------------------------------------------------------|
|com.huawei.hms.mlsdk.skeleton.MLSkeletonAnalyzerFactory 人体骨骼检测工厂类。|

#### Public Constructor Summary

|Constructor Name|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|[MLSkeletonAnalyzerFactory](#section126117428323)([MLApplication](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlapplication-0000001050167420) application) 检测器工厂实例构造器。|

#### Public Method Summary

|Qualifier and Type|Method Name and Description|
|:-----------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|[MLSkeletonAnalyzerFactory](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlskeletonanalyzerfactory-0000001051136162)|[getInstance](#section13231221142916)() 获取当前应用的检测器工厂单实例。|
|[MLSkeletonAnalyzer](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlskeletonanalyzer-0000001051056245)|[getSkeletonAnalyzer](#section167307454290)() 按默认配置创建人体骨骼检测器实例。|
|[MLSkeletonAnalyzer](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlskeletonanalyzer-0000001051056245)|[getSkeletonAnalyzer](#section5358115202915)([MLSkeletonAnalyzerSetting](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlskeletonanalyzersetting-0000001050816219) setting) 按自定义配置创建人体骨骼检测器实例。|

#### Public Constructors

#### MLSkeletonAnalyzerFactory(MLApplication application)

|Constructor|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public MLSkeletonAnalyzerFactory([MLApplication](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlapplication-0000001050167420) application) 检测器工厂构造器。|

Parameters  

|Name|Description|
|:----------|:----------|
|application|应用实例。|

#### Public Methods

#### getInstance()

|Method|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public static [MLSkeletonAnalyzerFactory](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlskeletonanalyzerfactory-0000001051136162) getInstance() 获取当前应用的检测器工厂单实例。|

Returns  

|Type|Description|
|:-----------------------------------------------------------------------------------------------------------------------------------------------|:---------------|
|[MLSkeletonAnalyzerFactory](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlskeletonanalyzerfactory-0000001051136162)|返回指定应用的检测器工厂单实例。|

#### getSkeletonAnalyzer()

|Method|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public [MLSkeletonAnalyzer](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlskeletonanalyzer-0000001051056245) getSkeletonAnalyzer() 按默认配置创建人体骨骼检测器实例。|

Returns  

|Type|Description|
|:---------------------------------------------------------------------------------------------------------------------------------|:----------|
|[MLSkeletonAnalyzer](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlskeletonanalyzer-0000001051056245)|人体骨骼检测器实例。|

#### getSkeletonAnalyzer(MLSkeletonAnalyzerSetting setting)

|Method|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public [MLSkeletonAnalyzer](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlskeletonanalyzer-0000001051056245) getSkeletonAnalyzer([MLSkeletonAnalyzerSetting](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlskeletonanalyzersetting-0000001050816219) setting) 按自定义配置创建人体骨骼检测器实例。|

Parameters  

|Name|Description|
|:------|:--------------|
|setting|自定义人体骨骼检测配置器实例。|

Returns  

|Type|Description|
|:---------------------------------------------------------------------------------------------------------------------------------|:----------|
|[MLSkeletonAnalyzer](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlskeletonanalyzer-0000001051056245)|人体骨骼检测器实例。|

