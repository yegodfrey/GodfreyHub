---
name: document/cn/hiai-References/mlremlangdetsetfac-harmonyos-0000001245828173
title: MLRemoteLangDetectorSetting.Factory
uri: https://developer.huawei.com/consumer/cn/doc/hiai-References/mlremlangdetsetfac-harmonyos-0000001245828173
---

# MLRemoteLangDetectorSetting.Factory

|Class Info|
|:----------------------------------------------------------------------------------------|
|com.huawei.hms.mlsdk.langdetect.cloud.MLRemoteLangDetectorSetting.Factory 创建语种检测器的配置器的实例。|

## Public Constructor Summary

|Constructor Name|
|:--------------------------------------------------|
|[Factory](#section166113016276)() 创建语种检测器的配置器的工厂实例。|

## Public Method Summary

|Qualifier and Type|Method Name and Description|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------------------------------|
|[MLRemoteLangDetectorSetting](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlremlangdetset-harmonyos-0000001201428280)|[create](#section20698169122715)() 创建语种检测器实例。|
|[MLRemoteLangDetectorSetting.Factory](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlremlangdetsetfac-harmonyos-0000001245828173)|[setTrustedThreshold](#section10802112222719)(float trustedThreshold) 设置语种检测的置信度。|
|[MLRemoteLangDetectorSetting.Factory](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlremlangdetsetfac-harmonyos-0000001245828173)|[setRegion](#section16356152218120)(int region) 设置国家码。 > 注意 > 此方法已废弃。|

## Public Constructors

### Factory()

|Constructor|
|:---------------------------------|
|public Factory() 创建语种检测器的配置器的工厂实例。|

## Public Methods

### create()

|Method|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public [MLRemoteLangDetectorSetting](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlremlangdetset-harmonyos-0000001201428280) create() 创建语种检测器实例。|

**Returns**

|Type|Description|
|:-------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
|[MLRemoteLangDetectorSetting](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlremlangdetset-harmonyos-0000001201428280)|语种检测器实例。|

### setTrustedThreshold(float trustedThreshold)

|Method|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public [MLRemoteLangDetectorSetting.Factory](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlremlangdetsetfac-harmonyos-0000001245828173) setTrustedThreshold(float trustedThreshold) 设置语种检测的置信度。|

**Parameters**

|Name|Description|
|:---------------|:----------|
|trustedThreshold|语种检测的置信度。|

**Returns**

|Type|Description|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
|[MLRemoteLangDetectorSetting.Factory](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlremlangdetsetfac-harmonyos-0000001245828173)|语种检测配置器实例。|

### setRegion(int region)

|Method|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public [MLRemoteLangDetectorSetting.Factory](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlremlangdetsetfac-harmonyos-0000001245828173)setRegion(int region) 设置云测服务器访问站点。|

**Parameters**

|Name|Description|
|:-----|:-----------------------------------------------------------------------------------------------------------------------------------------------|
|region|站点区域，目前支持的站点区域有： * REGION_DR_CHINA * REGION_DR_SINGAPORE * REGION_DR_GERMAN * REGION_DR_RUSSIA > 注意 > 站点区域需要和配置AppGallery Connect时选择的服务接入站点保持一致。|

**Returns**

|Type|Description|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
|[MLRemoteLangDetectorSetting.Factory](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlremlangdetsetfac-harmonyos-0000001245828173)|语种检测配置器实例。|

