---
name: document/cn/system-References/devicep2pmanager-api-0000001053360694
title: DeviceP2PManager
uri: https://developer.huawei.com/consumer/cn/doc/system-References/devicep2pmanager-api-0000001053360694
---

# DeviceP2PManager

|Class Info|
|:------------------------------------------|
|public class DeviceP2PManager WiFi直连权限管理授权。|

## Public Method Summary

|Qualifier and Type|Method Name and Description|
|:-----------------|:-----------------------------------------------------------------------------------------------|
|boolean|[setWifiP2PDisabled](#section837045114119)(ComponentName who, boolean isDisabled) 允许/禁止WiFi直连功能。|
|boolean|[isWifiP2PDisabled](#section161575953612)(ComponentName who) 获取WiFi直连状态。|

## Public Methods

### setWifiP2PDisabled

**Supported Devices**

|Device Type|OS Version|
|:----------|:---------------------------|
|手机、平板|EMUI 8.0及以上或HarmonyOS 2.0及以上|

|Method|
|:-----------------------------------------------------------------------------------------------------------------------------------|
|public boolean setWifiP2PDisabled(ComponentName who, boolean isDisabled) 允许/禁止WiFi直连功能。 注意：需要申请com.huawei.permission.sec.MDM_WIFI权限。|

**Parameters**

|Name|Description|
|:---------|:-------------------------------------|
|admin|调用该接口的APK的组件名称。|
|isDisabled|* true：禁止使用WiFi直连。 * false：允许使用WiFi直连。|

**Return**

|Type|Description|
|:------|:-------------------------|
|boolean|* true：配置成功。 * false：配置失败。|

**Throws**

|Name|Description|
|:----------------|:----------------------------------------------------------------------|
|SecurityException|* 此APK未经设备管理激活。 * 无com.huawei.permission.sec.MDM_WIFI权限。 * 此APK不属于当前用户。|

### isWifiP2PDisabled

**Supported Devices**

|Device Type|OS Version|
|:----------|:---------------------------|
|手机、平板|EMUI 8.0及以上或HarmonyOS 2.0及以上|

|Method|
|:--------------------------------------------------------------|
|public boolean isWifiP2PDisabled(ComponentName who) 获取WiFi直连状态。|

**Parameters**

|Name|Description|
|:----|:-------------------------|
|admin|调用该接口的组件名称，null表示获取全局禁用状态。|

**Return**

|Type|Description|
|:------|:-------------------------------------|
|boolean|* true：禁止使用WiFi直连。 * false：允许使用WiFi直连。|

**Throws**

|Name|Description|
|:----------------|:------------|
|SecurityException|此APK未经设备管理激活。|

