---
name: document/cn/Media-References/wpf-options-builder-0000001050425655
title: WisePlayerFactoryOptions.Builder
uri: https://developer.huawei.com/consumer/cn/doc/Media-References/wpf-options-builder-0000001050425655
---

# WisePlayerFactoryOptions.Builder

|Class Info|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public static class Builder [WisePlayerFactoryOptions](https://developer.huawei.com/consumer/cn/doc/development/Media-References/wpf-options-0000001050439397)的构造器类。|

## Public Constructor Summary

|Constructor Name|
|:----------------------------------------|
|[Builder](#section72538492169)() 默认的构造方法。|

## Public Method Summary

|Qualifier and Type|Method Name and Description|
|:---------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|[Builder](#section14564102411114)|[setDeviceId](#section178633661513)(String deviceId) 设置设备标识。|
|[WisePlayerFactoryOptions](https://developer.huawei.com/consumer/cn/doc/development/Media-References/wpf-options-0000001050439397)|[build](#section13841259142419)() 完成构造并返回[WisePlayerFactoryOptions](https://developer.huawei.com/consumer/cn/doc/development/Media-References/wpf-options-0000001050439397)实例。|

## Public Constructors

### Builder

|Constructor|
|:------------------------|
|public Builder() 默认的构造方法。|

## Public Methods

### setDeviceId

|Method|
|:----------------------------------------------------------------------------|
|public [Builder](#section14564102411114) setDeviceId(String deviceId) 设置设备标识。|

**Parameters**

|Name|Description|
|:-------|:-------------------------------------------------------------------------------------------------|
|deviceId|设备标识，App设置对每个终端设置一个标识。播放器SDK用于请求内容鉴权和运维打点上报。 App可以通过生成UUID或者通过SHA摘要/混淆等技术手段确保设置的deviceId不涉及用户隐私信息。|

**Return** **s**

|Type|Description|
|:--------------------------------|:----------|
|[Builder](#section14564102411114)|构造器对象。|

### build

|Method|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public [WisePlayerFactoryOptions](https://developer.huawei.com/consumer/cn/doc/development/Media-References/wpf-options-0000001050439397) build() 完成构造并返回[WisePlayerFactoryOptions](https://developer.huawei.com/consumer/cn/doc/development/Media-References/wpf-options-0000001050439397)实例。|

**Return** **s**

|Type|Description|
|:---------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------|
|[WisePlayerFactoryOptions](https://developer.huawei.com/consumer/cn/doc/development/Media-References/wpf-options-0000001050439397)|构造的[WisePlayerFactoryOptions](https://developer.huawei.com/consumer/cn/doc/development/Media-References/wpf-options-0000001050439397)实例。|

