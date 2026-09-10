---
name: document/cn/system-References/devicepasswordmanager-api-0000001053201954
title: DevicePasswordManager
uri: https://developer.huawei.com/consumer/cn/doc/system-References/devicepasswordmanager-api-0000001053201954
---

# DevicePasswordManager

|Class Info|
|:----------------------------------------|
|public class DevicePasswordManager 密码相关类。|

#### Public Method Summary

|Qualifier and Type|Method Name and Description|
|:-----------------|:------------------------------------------------------------------------------------------------------------------|
|boolean|[setPasswordNumSequenceMaxLength](#section837045114119)(ComponentName who, int length) 设置锁屏密码数字序列长度上限。|
|int|[getPasswordNumSequenceMaxLength](#section125841815152317)(ComponentName who) 获取配置的锁屏密码数字序列长度上限。|
|boolean|[setPasswordRepeatMaxLength](#section13411174292510)(ComponentName who, int length) 设置锁屏密码重复字符数上限。|
|int|[getPasswordRepeatMaxLength](#section19994175043219)(ComponentName who) 获取配置的锁屏密码重复字符数上限。|
|boolean|[setPasswordChangeExtendTime](#section9308193217341)(ComponentName who, long time) 设置锁屏密码更改宽限期。|
|long|[getPasswordChangeExtendTime](#section9522539173718)(ComponentName who) 获取配置的密码更改宽限期。|
|boolean|[setKeyguardDisabled](#section13441531194016)(ComponentName admin, int keyguardType, boolean isDisabled) 禁用/启用滑动锁屏。|
|boolean|[isKeyguardDisabled](#section922315194517)(ComponentName admin, int keyguardType) 查询锁屏禁用状态。|
|boolean|[setQuickToolsDisabled](#section29185363479)(ComponentName admin, boolean isDisabled) 禁用/启用锁屏工具栏。|
|boolean|[isQuickToolsDisabled](#section158197306212)(ComponentName admin) 查询锁屏工具栏禁用状态。|
|boolean|[setMagazineFeatureDisabled](#section157112273593)(ComponentName admin, boolean isDisabled) 禁用/启用杂志锁屏。|
|boolean|[isMagazineFeatureDisabled](#section871442775911)(ComponentName admin) 杂志锁屏是否被禁用。|

#### Public Methods

#### setPasswordNumSequenceMaxLength

Supported Devices  

|Device Type|OS Version|
|:----------|:---------------------------|
|手机、平板|EMUI 5.1及以上或HarmonyOS 2.0及以上|

|Method|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public boolean setPasswordNumSequenceMaxLength(ComponentName who, int length) 设置锁屏密码数字序列长度上限，通过此接口配置复杂密码数字序列参数后，重新设置密码时，连续的数字序列长度不能超过此值。 length \< 0 , 小于0时，存储失败。 length = 0时，相当于不做检查。 注意： 1. 需要申请com.huawei.permission.sec.MDM_KEYGUARD权限。 2. 锁屏密码数字序列长度限制只有当锁屏密码不是"数字密码"时，才能生效。|

Parameters  

|Name|Description|
|:-----|:--------------------|
|who|调用该接口的组件名称，不能为null。|
|length|待配置的数字序列长度上限参数，不能为负数。|

Return  

|Type|Description|
|:------|:-------------------------|
|boolean|* true：配置成功。 * false：配置失败。|

Throws  

|Name|Description|
|:-----------------------|:-----------------------------------------------------------|
|SecurityException|* 此APK未经设备管理激活。 * 无com.huawei.permission.sec.MDM_KEYGUARD权限。|
|IllegalArgumentException|* who为null。 * length为null。 * length为负数。|

#### getPasswordNumSequenceMaxLength

Supported Devices  

|Device Type|OS Version|
|:----------|:---------------------------|
|手机、平板|EMUI 5.1及以上或HarmonyOS 2.0及以上|

|Method|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public int getPasswordNumSequenceMaxLength(ComponentName who) 获取配置的锁屏密码数字序列长度上限，通过此接口获取setPasswordNumSequenceMaxLength配置的复杂密码数字序列参数后，在设置密码时进行规则检测。 当返回值为 0 、1 时，不做处理。只有返回值大于2时，密码检测才生效。 注意：锁屏密码数字序列长度限制不针对"数字密码"生效。|

Parameters  

|Name|Description|
|:---|:----------------------------------------------|
|who|调用该接口的组件名称，查询该应用配置的策略；参数为null时，获取所有应用设置的综合策略结果。|

Return  

|Type|Description|
|:---|:-------------------------|
|int|返回所设置的数字序列长度上限值，无设置时返回"0"。|

#### setPasswordRepeatMaxLength

Supported Devices  

|Device Type|OS Version|
|:----------|:---------------------------|
|手机、平板|EMUI 5.1及以上或HarmonyOS 2.0及以上|

|Method|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public boolean setPasswordRepeatMaxLength(ComponentName who, int length) 设置锁屏密码重复字符数上限，通过此接口配置锁屏密码重复字符数上限后，重新设置密码时，密码中重复的单个字符数不能超过此值。 length \< 0 , 小于0时，存储失败。 length = 0 或 1 时，相当于不做检查。 注意：需要申请com.huawei.permission.sec.MDM_KEYGUARD权限。|

Parameters  

|Name|Description|
|:-----|:------------------|
|who|调用该接口的组件名称，不能为null。|
|length|密码中单个字符重复个数上限。|

Return  

|Type|Description|
|:------|:-------------------------|
|boolean|* true：配置成功。 * false：配置失败。|

Throws  

|Name|Description|
|:-----------------------|:-----------------------------------------------------------|
|SecurityException|* 此APK未经设备管理激活。 * 无com.huawei.permission.sec.MDM_KEYGUARD权限。|
|IllegalArgumentException|* who 为null； * length 为null或负数。|

#### getPasswordRepeatMaxLength

Supported Devices  

|Device Type|OS Version|
|:----------|:---------------------------|
|手机、平板|EMUI 5.1及以上或HarmonyOS 2.0及以上|

|Method|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public int getPasswordRepeatMaxLength(ComponentName who) 获取配置的锁屏密码重复字符数上限。通过此接口获取setPasswordRepeatMaxLength配置锁屏密码重复字符数上限后，重新设置密码时，检验密码中重复的单个字符数不能超过此值。 当返回值为 0 、1 时，不做处理。只有返回值大于2时，密码检测才生效。|

Parameters  

|Name|Description|
|:---|:----------------------------------------------|
|who|调用该接口的组件名称，查询该应用配置的策略；参数为null时，获取所有应用设置的综合策略结果。|

Return  

|Type|Description|
|:---|:------------------------|
|int|返回所设置的重复字符数上限值，无设置时返回"0"。|

#### setPasswordChangeExtendTime

Supported Devices  

|Device Type|OS Version|
|:----------|:---------------------------|
|手机、平板|EMUI 5.1及以上或HarmonyOS 2.0及以上|

|Method|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public boolean setPasswordChangeExtendTime(ComponentName who, long time) 设置锁屏密码更改宽限期，到达宽限期后，系统会发出广播通知（android.app.action.ACTION_PASSWORD_EXPIRING）。 注意： 1. 需要申请com.huawei.permission.sec.MDM_KEYGUARD权限。 2. time以ms为单位。|

Parameters  

|Name|Description|
|:---|:-----------------------------|
|who|调用该接口的组件名称，不能为null。|
|time|通知最终用户在密码过期前，更改密码的时间量，以 ms为单位。|

Return  

|Type|Description|
|:------|:-------------------------|
|boolean|* true：配置成功。 * false：配置失败。|

Throws  

|Name|Description|
|:-----------------------|:-----------------------------------------------------------|
|SecurityException|* 此APK未经设备管理激活。 * 无com.huawei.permission.sec.MDM_KEYGUARD权限。|
|IllegalArgumentException|* who 为null。 * time 为null或负数。|

#### getPasswordChangeExtendTime

Supported Devices  

|Device Type|OS Version|
|:----------|:---------------------------|
|手机、平板|EMUI 5.1及以上或HarmonyOS 2.0及以上|

|Method|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------|
|public long getPasswordChangeExtendTime(ComponentName who) 获取配置的密码更改宽限期。通过此接口获取配置的密码更改宽限期后，系统将通知最终用户在密码过期前更改密码，并告知密码有效期剩余时间。 返回值是以ms为单位的值，可根据需要转换成"天"为单位。|

Parameters  

|Name|Description|
|:---|:----------------------------------------------|
|who|调用该接口的组件名称，查询该应用配置的策略；参数为null时，获取所有应用设置的综合策略结果。|

Return  

|Type|Description|
|:---|:--------------------|
|long|返回所设置的密码更改宽限期，以ms为单位。|

#### setKeyguardDisabled

Supported Devices  

|Device Type|OS Version|
|:----------|:------------------------------|
|手机、平板|EMUI 10.1.0及以上或HarmonyOS 2.0及以上|

|Method|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public boolean setKeyguardDisabled(ComponentName admin, int keyguardType, boolean isDisabled) 只支持无锁屏密码时，禁用/启用滑动锁屏。 注意： 1. 需要申请com.huawei.permission.sec.MDM_KEYGUARD权限。 2. 已设置安全密码（包括图案密码、数字密码、混合密码）时，该接口失效。|

Parameters  

|Name|Description|
|:-----------|:-------------------------------|
|admin|调用该接口的组件名称，不能为null。|
|keyguardType|锁屏类型：0，滑动锁屏。|
|isDisabled|* true：禁用某类型锁屏。 * false：启用某类型锁屏。|

Return  

|Type|Description|
|:------|:-------------------------|
|boolean|* true：配置成功。 * false：配置失败。|

Throws  

|Name|Description|
|:-----------------------|:-----------------------------------------------------------|
|SecurityException|* 此APK未经设备管理激活。 * 无com.huawei.permission.sec.MDM_KEYGUARD权限。|
|IllegalArgumentException|* 参数错误。|

#### isKeyguardDisabled

Supported Devices  

|Device Type|OS Version|
|:----------|:------------------------------|
|手机、平板|EMUI 10.1.0及以上或HarmonyOS 2.0及以上|

|Method|
|:-----------------------------------------------------------------------------------------------|
|public boolean isKeyguardDisabled(ComponentName admin, int keyguardType) 查询锁屏禁用状态。只支持滑动锁屏禁用状态查询。|

Parameters  

|Name|Description|
|:-----------|:----------------------------------------------|
|admin|调用该接口的组件名称，查询该应用配置的策略；参数为null时，获取所有应用设置的综合策略结果。|
|keyguardType|0：滑动锁屏。|

Return  

|Type|Description|
|:------|:------------|
|boolean|某类型锁屏禁用/启用状态。|

#### setQuickToolsDisabled

Supported Devices  

|Device Type|OS Version|
|:----------|:-------------------------|
|手机、平板|EMUI 11.0或HarmonyOS 2.0及以上|

|Method|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public boolean setQuickToolsDisabled(ComponentName admin, boolean isDisabled) 禁用/启用锁屏工具栏，包含杂志锁屏菜单以及锁屏界面进入相机的功能。 注意：需要申请com.huawei.permission.sec.MDM_KEYGUARD权限。|

Parameters  

|Name|Description|
|:---------|:-------------------------------|
|admin|调用该接口的组件名称，不能为null。|
|isDisabled|* true：禁用锁屏工具栏。 * false：启用锁屏工具栏。|

Return  

|Type|Description|
|:------|:-------------------------|
|boolean|* true：配置成功。 * false：配置失败。|

Throws  

|Name|Description|
|:-----------------------|:-----------------------------------------------------------|
|SecurityException|* 此APK未经设备管理激活。 * 无com.huawei.permission.sec.MDM_KEYGUARD权限。|
|IllegalArgumentException|* 参数错误。|

#### isQuickToolsDisabled

Supported Devices  

|Device Type|OS Version|
|:----------|:-------------------------|
|手机、平板|EMUI 11.0或HarmonyOS 2.0及以上|

|Method|
|:--------------------------------------------------------------------|
|public boolean isQuickToolsDisabled(ComponentName admin) 查询锁屏工具栏禁用状态。|

Parameters  

|Name|Description|
|:----|:----------------------------------------------|
|admin|调用该接口的组件名称，查询该应用配置的策略；参数为null时，获取所有应用设置的综合策略结果。|

Return  

|Type|Description|
|:------|:--------------------------------|
|boolean|* true：禁用锁屏工具栏。 * false：未禁用锁屏工具栏。|

#### setMagazineFeatureDisabled

Supported Devices  

|Device Type|OS Version|
|:----------|:---------------|
|手机、平板|HarmonyOS 3.1及以上|

|Method|
|:---------------------------------------------------------------------------------------------------------------------------------------------|
|public boolean setMagazineFeatureDisabled(ComponentName admin, boolean isDisabled) 禁用/启用杂志锁屏。 注意：需要申请com.huawei.permission.sec.MDM_KEYGUARD权限。|

Parameters  

|Name|Description|
|:---------|:-----------------------------|
|admin|调用该接口的组件名称，不能为null。|
|isDisabled|* true：禁用杂志锁屏。 * false：启用杂志锁屏。|

Return  

|Type|Description|
|:------|:-------------------------|
|boolean|* true：配置成功。 * false：配置失败。|

Throws  

|Name|Description|
|:-----------------------|:-----------------------------------------------------------|
|SecurityException|* 此APK未经设备管理激活。 * 无com.huawei.permission.sec.MDM_KEYGUARD权限。|
|IllegalArgumentException|参数admin为null。|

#### isMagazineFeatureDisabled

Supported Devices  

|Device Type|OS Version|
|:----------|:---------------|
|手机、平板|HarmonyOS 3.1及以上|

|Method|
|:-------------------------------------------------------------------------|
|public boolean isMagazineFeatureDisabled(ComponentName admin) 查询杂志锁屏是否被禁用。|

Parameters  

|Name|Description|
|:----|:------------------------------|
|admin|调用该接口的组件名称。为null时，获取的是全局综合策略结果。|

Return  

|Type|Description|
|:------|:-------------------------------|
|boolean|* true：已禁用杂志锁屏。 * false：未禁用杂志锁屏。|

Throws  

|Name|Description|
|:----------------|:--------------------------|
|SecurityException|* 指定的admin未激活。 * 参数admin非法。|

