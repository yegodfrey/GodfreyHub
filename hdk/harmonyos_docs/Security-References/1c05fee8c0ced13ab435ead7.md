---
name: document/cn/Security-References/safetydetectclientapi-0000001050175445
title: SafetyDetectClient
uri: https://developer.huawei.com/consumer/cn/doc/Security-References/safetydetectclientapi-0000001050175445
---

# SafetyDetectClient

|Interface Info|
|:---------------------------------------------------------|
|public interface SafetyDetectClient Safety Detect API的主入口。|

## Public Method Summary

|Qualifier and Type|Method Name and Description|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|com.huawei.hmf.tasks.Task<[SysIntegrityResp](https://developer.huawei.com/consumer/cn/doc/development/Security-References/safetydetectsysintegrityresp-0000001050173460)>|[sysIntegrity(byte[] nonce, String appId)](#section1590913375578) 发起一次对当前设备的系统完整性检测请求。 > 说明 > 不建议使用该方法，请使用 > [sysIntegrity(SysIntegrityRequest sysIntegrityRequest)](#section19111747171418)|
|com.huawei.hmf.tasks.Task<[SysIntegrityResp](https://developer.huawei.com/consumer/cn/doc/development/Security-References/safetydetectsysintegrityresp-0000001050173460)>|[sysIntegrity(SysIntegrityRequest sysIntegrityRequest)](#section19111747171418) 发起一次对当前设备的系统完整性检测请求。 > 说明 > 5.0.5.302及以后版本建议使用该方法。|
|com.huawei.hmf.tasks.Task<[VerifyAppsCheckEnabledResp](https://developer.huawei.com/consumer/cn/doc/development/Security-References/verifyappscheckenabledrespapi-0000001050415403)>|[enableAppsCheck](#section17683202317581)() 开启应用安全检测功能。|
|com.huawei.hmf.tasks.Task<[VerifyAppsCheckEnabledResp](https://developer.huawei.com/consumer/cn/doc/development/Security-References/verifyappscheckenabledrespapi-0000001050415403)>|[isVerifyAppsCheck](#section1642714425017)() 应用安全检测功能开关状态查询。|
|com.huawei.hmf.tasks.Task<[MaliciousAppsListResp](https://developer.huawei.com/consumer/cn/doc/development/Security-References/maliciousappslistrespapi-0000001050173508)>|[getMaliciousAppsList](#section6161435325)() 发起应用安全检测请求。|
|com.huawei.hmf.tasks.Task<Void>|[initUrlCheck](#section20503812745)() 初始化URL检测。|
|com.huawei.hmf.tasks.Task<[UrlCheckResponse](https://developer.huawei.com/consumer/cn/doc/development/Security-References/urlcheckresponseapi-0000001050415407)>|[urlCheck](#section945817404417)(String uri, String appId, int... threatTypes) 发起URL检测请求。|
|com.huawei.hmf.tasks.Task<Void>|[shutdownUrlCheck](#section4955960514)() 关闭URL检测。|
|com.huawei.hmf.tasks.Task<[UserDetectResponse](https://developer.huawei.com/consumer/cn/doc/development/Security-References/userdetectresponseapi-0000001050259900)>|[userDetection](#section19175202210716)(String appId) 发起虚假用户检测请求。|
|com.huawei.hmf.tasks.Task<Void>|[initUserDetect](#section991714817915)() 初始化虚假用户检测。|
|com.huawei.hmf.tasks.Task<Void>|[shutdownUserDetect](#section16995165818911)() 关闭虚假用户检测。|
|com.huawei.hmf.tasks.Task<[WifiDetectResponse](https://developer.huawei.com/consumer/cn/doc/development/Security-References/wifidetectresponseapi-0000001050175479)>|[getWifiDetectStatus](#section3442818121016)() 获取恶意Wi-Fi检测结果。|

## Public Methods

### sysIntegrity(byte[] nonce, String appId)

|Method|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|Task<[SysIntegrityResp](https://developer.huawei.com/consumer/cn/doc/development/Security-References/safetydetectsysintegrityresp-0000001050173460)> sysIntegrity(byte[] nonce, String appId) 发起一次对当前设备的系统完整性检测请求。|

**Parameters**

|Name|Description|
|:----|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|nonce|一个密码学的nonce值，用于防重放攻击。您必须确保每次调用sysIntegrity接口时传入的nonce值都是不同的。nonce的长度有限制，为16-66字节。|
|appId|您在[华为开发者联盟](https://developer.huawei.com/consumer/cn)网站上申请的APP ID。HMS Core会对appId进行鉴权，您需要在[华为开发者联盟](https://developer.huawei.com/consumer/cn)网站的"API管理"上打开这个appId访问Safety Detect服务的开关。|

**Return** **s**

|Type|Description|
|:---------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
|Task<[SysIntegrityResp](https://developer.huawei.com/consumer/cn/doc/development/Security-References/safetydetectsysintegrityresp-0000001050173460)>|系统安全检测返回结果。|

### sysIntegrity(SysIntegrityRequest sysIntegrityRequest)

|Method|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|Task<[SysIntegrityResp](https://developer.huawei.com/consumer/cn/doc/development/Security-References/safetydetectsysintegrityresp-0000001050173460)> sysIntegrity([SysIntegrityRequest](https://developer.huawei.com/consumer/cn/doc/development/Security-References/sysintegrityrequest-0000001062917681) sysIntegrityRequest) 发起一次对当前设备的系统完整性检测请求。|

**Parameters**

|Name|Description|
|:------------------|:------------|
|sysIntegrityRequest|系统完整性检测请求实体类。|

**Returns**

|Type|Description|
|:---------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
|Task<[SysIntegrityResp](https://developer.huawei.com/consumer/cn/doc/development/Security-References/safetydetectsysintegrityresp-0000001050173460)>|系统安全检测返回结果。|

### enableAppsCheck

|Method|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|Task<[VerifyAppsCheckEnabledResp](https://developer.huawei.com/consumer/cn/doc/development/Security-References/verifyappscheckenabledrespapi-0000001050415403)> enableAppsCheck() 开启应用安全检测功能。|

**Returns**

|Type|Description|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------|
|Task<[VerifyAppsCheckEnabledResp](https://developer.huawei.com/consumer/cn/doc/development/Security-References/verifyappscheckenabledrespapi-0000001050415403)>|开启应用安全检测功能的返回结果。|

### isVerifyAppsCheck

|Method|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|Task<[VerifyAppsCheckEnabledResp](https://developer.huawei.com/consumer/cn/doc/development/Security-References/verifyappscheckenabledrespapi-0000001050415403)> isVerifyAppsCheck() 应用安全检测功能开关状态查询。|

**Returns**

|Type|Description|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------|
|Task<[VerifyAppsCheckEnabledResp](https://developer.huawei.com/consumer/cn/doc/development/Security-References/verifyappscheckenabledrespapi-0000001050415403)>|查询应用安全检测功能开关状态的返回结果。|

### getMaliciousAppsList

|Method|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|Task<[MaliciousAppsListResp](https://developer.huawei.com/consumer/cn/doc/development/Security-References/maliciousappslistrespapi-0000001050173508)> getMaliciousAppsList() 发起应用安全检测请求。|

**Returns**

|Type|Description|
|:----------------------------------------------------------------------------------------------------------------------------------------------------|:-----------|
|Task<[MaliciousAppsListResp](https://developer.huawei.com/consumer/cn/doc/development/Security-References/maliciousappslistrespapi-0000001050173508)>|应用安全检测的返回结果。|

### initUrlCheck

|Method|
|:----------------------------------|
|Task<Void> initUrlCheck() 初始化URL检测。|

### urlCheck

|Method|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|Task<[UrlCheckResponse](https://developer.huawei.com/consumer/cn/doc/development/Security-References/urlcheckresponseapi-0000001050415407)> urlCheck(String url, String appId, int... threatTypes) 发起URL检测请求。|

**Parameters**

|Name|Description|
|:----------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|url|待检测的URL，包含协议、主机、路径，不包含查询参数，即使传入了查询参数也会被SDK丢弃。|
|appId|您在[华为开发者联盟](https://developer.huawei.com/consumer/cn/)网站上申请的appId。HMS Core会对appId进行鉴权，你需要在[华为开发者联盟](https://developer.huawei.com/consumer/cn/)网站的"API管理"上打开这个appId访问Safety Detect服务的开关。|
|threatTypes|关注的待检测URL威胁类型。详细威胁类型请参见[UrlCheckThreat](https://developer.huawei.com/consumer/cn/doc/development/Security-References/urlcheckthreatapi-0000001050173464)。|

**Returns**

|Type|Description|
|:------------------------------------------------------------------------------------------------------------------------------------------|:----------|
|Task<[UrlCheckResponse](https://developer.huawei.com/consumer/cn/doc/development/Security-References/urlcheckresponseapi-0000001050415407)>|URL检测结果。|

### shutdownUrlCheck

|Method|
|:---------------------------------------|
|Task<Void> shutdownUrlCheck() 关闭URL检测服务。|

### userDetection

|Method|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|Task<[UserDetectResponse](https://developer.huawei.com/consumer/cn/doc/development/Security-References/userdetectresponseapi-0000001050259900)> userDetection(String appId) 发起一次用户检测请求。|

**Parameters**

|Name|Description|
|:----|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|appId|您在[华为开发者联盟](https://developer.huawei.com/consumer/cn/)网站上申请的appId。HMS Core会对appId进行鉴权，您需要在[华为开发者联盟](https://developer.huawei.com/consumer/cn/)网站的"API管理"上打开这个appId访问Safety Detect服务的开关。|

**Returns**

|Type|Description|
|:----------------------------------------------------------------------------------------------------------------------------------------------|:----------|
|Task<[UserDetectResponse](https://developer.huawei.com/consumer/cn/doc/development/Security-References/userdetectresponseapi-0000001050259900)>|虚假用户检测返回结果。|

### initUserDetect

|Method|
|:-------------------------------------|
|Task<Void> initUserDetect() 初始化虚假用户检测。|

### shutdownUserDetect

|Method|
|:----------------------------------------|
|Task<Void> shutdownUserDetect() 关闭虚假用户检测。|

### getWifiDetectStatus

|Method|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|Task<[WifiDetectResponse](https://developer.huawei.com/consumer/cn/doc/development/Security-References/wifidetectresponseapi-0000001050175479)> getWifiDetectStatus() 获取恶意Wi-Fi检测结果。|

**Returns**

|Type|Description|
|:----------------------------------------------------------------------------------------------------------------------------------------------|:-------------|
|Task<[WifiDetectResponse](https://developer.huawei.com/consumer/cn/doc/development/Security-References/wifidetectresponseapi-0000001050175479)>|恶意Wi-Fi检测返回结果。|

