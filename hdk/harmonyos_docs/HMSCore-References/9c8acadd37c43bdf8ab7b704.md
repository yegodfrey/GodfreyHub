---
name: document/cn/HMSCore-References/api-hms-wallet-pass-passstatus-build-0000001051066298
title: PassStatus.Builder
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-References/api-hms-wallet-pass-passstatus-build-0000001051066298
---

# PassStatus.Builder

|Class Info|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public final class PassStatus.Builder 用于创建[PassStatus](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/api-hms-wallet-pass-passstatus-0000001050986373)对象。|

## Public Method Summary

|Qualifier and Type|Method Name and Description|
|:----------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|PassStatus.Builder|[setState(String state)](#section12954038154818) 设置卡劵的状态。|
|PassStatus.Builder|[setEffectTime(String effectTime)](#section3393164324813) 设置卡劵的有效期生效时间。|
|PassStatus.Builder|[setExpireTime(String expireTime)](#section1273134914818) 设置卡劵的过期时间。|
|[PassStatus](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/api-hms-wallet-pass-passstatus-0000001050986373)|[build()](#section11291453134819) 创建[PassStatus](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/api-hms-wallet-pass-passstatus-0000001050986373)对象。|

## Public Methods

### public PassStatus.Builder setState(String state)

|Method|
|:---------------------------------------------------------------|
|public PassStatus.Builder setState(String state) 设置卡劵的状态值(必选字段)。|

**Parameters**

|Name|Description|
|:----|:----------|
|state|卡劵的状态值。|

**Return**

|Type|Description|
|:-----------------|:--------------------|
|PassStatus.Builder|PassStatus.Builder对象。|

### public PassStatus.Builder setEffectTime(String effectTime)

|Method|
|:-------------------------------------------------------------------------|
|public PassStatus.Builder setEffectTime(String effectTime) 设置卡劵的有效期(必选字段)。|

**Parameters**

|Name|Description|
|:---------|:-----------------------------------------------|
|effectTime|卡劵的有效期生效时间。格式为UTC格式如下: yyyy-MM-ddTHH:mm:ss.SSSZ。|

**Return**

|Type|Description|
|:-----------------|:--------------------|
|PassStatus.Builder|PassStatus.Builder对象。|

### public PassStatus.Builder setExpireTime(String expireTime)

|Method|
|:--------------------------------------------------------------------------|
|public PassStatus.Builder setExpireTime(String expireTime) 设置卡劵的过期时间(必选字段)。|

**Parameters**

|Name|Description|
|:---------|:--------------------------------------------|
|expireTime|卡劵的过期时间。格式为UTC格式如下: yyyy-MM-ddTHH:mm:ss.SSSZ。|

**Return**

|Type|Description|
|:-----------------|:--------------------|
|PassStatus.Builder|PassStatus.Builder对象。|

### public PassStatus build()

|Method|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------|
|public PassStatus build() 创建[PassStatus](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/api-hms-wallet-pass-passstatus-0000001050986373)对象。|

**Return**

|Type|Description|
|:----------------------------------------------------------------------------------------------------------------------------|:------------|
|[PassStatus](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/api-hms-wallet-pass-passstatus-0000001050986373)|PassStatus对象。|

