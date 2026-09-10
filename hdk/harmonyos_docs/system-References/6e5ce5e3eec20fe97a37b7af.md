---
name: document/cn/system-References/devicestoragemanagerex-api-0000001053840706
title: DeviceStorageManagerEx
uri: https://developer.huawei.com/consumer/cn/doc/system-References/devicestoragemanagerex-api-0000001053840706
---

# DeviceStorageManagerEx

|Class Info|
|:-------------------------------------------|
|public class DeviceStorageManagerEx 设备存储管理类。|

#### Public Method Summary

|Qualifier and Type|Method Name and Description|
|:-----------------|:----------------------------------------------------------------------------------------------------|
|boolean|[setSDWritingDisabled](#section15699192931815)(ComponentName admin, boolean isDisabled) 禁止/允许外置SD卡写入。|
|boolean|[isSDWritingDisabled](#section187330504153)(ComponentName admin) 查询外置SD卡写入禁用状态。|

#### Public Methods

#### setSDWritingDisabled

Supported Devices  

|Device Type|OS Version|
|:----------|:---------------------------|
|手机、平板|EMUI 8.0及以上或HarmonyOS 2.0及以上|

|Method|
|:----------------------------------------------------------------------------------------------------------------------------------------|
|public boolean setSDWritingDisabled(ComponentName admin, boolean isDisabled) 允许/禁止外置SD卡写入。 注意：需要申请com.huawei.permission.sec.MDM_SDCARD权限。|

Parameters  

|Name|Description|
|:---------|:-----------------------------------|
|admin|调用该接口的APK的组件名称，不能为null。|
|isDisabled|* true：禁止外置SD卡写入。 * false：允许外置SD卡写入。|

Return  

|Type|Description|
|:------|:-------------------------|
|boolean|* true：配置成功。 * false：配置失败。|

Throws  

|Name|Description|
|:-----------------------|:------------------------------------------------------------------------|
|SecurityException|* 此APK未经设备管理激活。 * 无com.huawei.permission.sec.MDM_SDCARD权限。 * 此APK不属于当前用户。|
|IllegalArgumentException|admin为null时。|

#### isSDWritingDisabled

Supported Devices  

|Device Type|OS Version|
|:----------|:---------------------------|
|手机、平板|EMUI 8.0及以上或HarmonyOS 2.0及以上|

|Method|
|:---------------------------------------------------------------------|
|public boolean isSDWritingDisabled(ComponentName admin) 获取外置SD卡写入禁用状态。|

Parameters  

|Name|Description|
|:----|:----------|
|admin|调用该接口的组件名称。|

Return  

|Type|Description|
|:------|:-----------------------------------|
|boolean|* true：禁止外置SD卡写入。 * false：允许外置SD卡写入。|

Throws  

|Name|Description|
|:----------------|:------------|
|SecurityException|此APK未经设备管理激活。|

