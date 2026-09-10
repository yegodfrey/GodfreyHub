---
name: document/cn/hiai-References/remotelangdetectorsf-0000001050167542
title: MLRemoteLangDetectorSetting.Factory
uri: https://developer.huawei.com/consumer/cn/doc/hiai-References/remotelangdetectorsf-0000001050167542
---

# MLRemoteLangDetectorSetting.Factory

|Class Info|
|:----------------------------------------------------------------------------------------|
|com.huawei.hms.mlsdk.langdetect.cloud.MLRemoteLangDetectorSetting.Factory 创建语种检测器的配置器的实例。|

#### Public Constructor Summary

|Constructor Name|
|:--------------------------------------------------|
|[Factory](#section166113016276)() 创建语种检测器的配置器的工厂实例。|

#### Public Method Summary

|Qualifier and Type|Method Name and Description|
|:----------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------------------------------|
|[MLRemoteLangDetectorSetting](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/remotelangdetectors-0000001050169495)|[create](#section20698169122715)() 创建语种检测器实例。|
|[MLRemoteLangDetectorSetting.Factory](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/remotelangdetectorsf-0000001050167542)|[setTrustedThreshold](#section10802112222719)(float trustedThreshold) 设置语种检测的置信度。|

#### Public Constructors

#### Factory()

|Constructor|
|:---------------------------------|
|public Factory() 创建语种检测器的配置器的工厂实例。|

#### Public Methods

#### create()

|Method|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public [MLRemoteLangDetectorSetting](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/remotelangdetectors-0000001050169495) create() 创建语种检测器实例。|

Returns  

|Type|Description|
|:-------------------------------------------------------------------------------------------------------------------------------------------|:----------|
|[MLRemoteLangDetectorSetting](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/remotelangdetectors-0000001050169495)|语种检测器实例。|

#### setTrustedThreshold(float trustedThreshold)

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public [MLRemoteLangDetectorSetting.Factory](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/remotelangdetectorsf-0000001050167542) setTrustedThreshold(float trustedThreshold) 设置语种检测的置信度。|

Parameters  

|Name|Description|
|:---------------|:----------|
|trustedThreshold|语种检测的置信度。|

Returns  

|Type|Description|
|:----------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
|[MLRemoteLangDetectorSetting.Factory](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/remotelangdetectorsf-0000001050167542)|语种检测配置器实例。|

