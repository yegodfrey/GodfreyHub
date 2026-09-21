---
name: document/cn/HMSCore-References/informationcontroller-builder-0000001761542954
title: InformationController.Builder
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-References/informationcontroller-builder-0000001761542954
---

# InformationController.Builder

|Class Info|
|:------------------------------------------------------------------|
|public static final classInformationController.Builder 隐私信息采集控制构造器。|

## Public Constructor Summary

|Constructor name|
|:------------------------------------------------|
|[Builder](#section22921117771)() 隐私信息采集控制构造器构造函数。|

## Public Method Summary

|Qualifier and Type|Method Name and Description|
|:------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------------------------|
|[InformationController](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/informationcontroller-0000001759616022)|[build](#section10386432988)() 构造InformationController隐私信息采集控制对象。|
|InformationController.Builder|[setUseWifi](#section8239240184011)(Boolean useWifi) 设置是否采集WIFI信息。|
|InformationController.Builder|[setUseBluetooth](#section13839114010410)(Boolean useBluetooth) 设置是否采集蓝牙信息。|
|InformationController.Builder|[setUseAndroidId](#section1030119428419)(Boolean useAndroidId) 设置是否采集Android ID信息。|
|InformationController.Builder|[setUseMemorySize](#section7586734161615)(Boolean useMemorySize) 设置是否采集设备内存信息。|

## Public Constructors

### Builder

|Constructor|
|:--------------------------------|
|public Builder() 隐私信息采集控制构造器构造函数。|

## Public Methods

### build

|Method|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public final [InformationController](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/informationcontroller-0000001759616022) build() 返回一个InformationController。|

**Returns**

|Type|Description|
|:------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------|
|[InformationController](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/informationcontroller-0000001759616022)|返回[InformationController](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/informationcontroller-0000001759616022)。|

### setUseWifi

|Method|
|:-------------------------------------------------------|
|public Builder setUseWifi(Boolean useWifi) 设置是否采集WIFI信息。|

**Parameters**

|Name|Description|
|:------|:-------------------|
|useWifi|是否采集WIFI信息（不设置默认采集）。|

**Returns**

|Type|Description|
|:----------------------------|:-------------------------------------------------------------------------------------------------------------------------------------|
|InformationController.Builder|返回[InformationController](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/informationcontroller-0000001759616022)的构造器。|

### setUseBluetooth

|Method|
|:--------------------------------------------------------------|
|public Builder setUseBluetooth(Boolean useBluetooth) 设置是否采集蓝牙信息|

**Parameters**

|Name|Description|
|:-----------|:-----------------|
|useBluetooth|是否采集蓝牙信息（不设置默认采集）。|

**Returns**

|Type|Description|
|:----------------------------|:-------------------------------------------------------------------------------------------------------------------------------------|
|InformationController.Builder|返回[InformationController](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/informationcontroller-0000001759616022)的构造器。|

### setUseAndroidId

|Method|
|:-----------------------------------------------------------------------|
|public Builder setUseAndroidId(Boolean useAndroidId) 设置是否采集Android ID信息。|

**Parameters**

|Name|Description|
|:-----------|:-------------------------|
|useAndroidId|是否采集Android ID信息（不设置默认采集）。|

**Returns**

|Type|Description|
|:----------------------------|:-------------------------------------------------------------------------------------------------------------------------------------|
|InformationController.Builder|返回[InformationController](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/informationcontroller-0000001759616022)的构造器。|

### setUseMemorySize

|Method|
|:-------------------------------------------------------------------|
|public Builder setUseMemorySize(Boolean useMemorySize) 设置是否采集设备内存信息。|

**Parameters**

|Name|Description|
|:------------|:-------------------|
|useMemorySize|是否采集设备内存信息（不设置默认采集）。|

**Returns**

|Type|Description|
|:----------------------------|:-------------------------------------------------------------------------------------------------------------------------------------|
|InformationController.Builder|返回[InformationController](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/informationcontroller-0000001759616022)的构造器。|

