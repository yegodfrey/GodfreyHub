---
name: document/cn/HMSCore-References/isenvreadyresult-0000001050137693
title: IsEnvReadyResult
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-References/isenvreadyresult-0000001050137693
---

# IsEnvReadyResult

* 支持的场景：手机、平板、智慧屏。
* 支持的OS：EMUI 3.0+、Android 4.4+。

|Class Info|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public class IsEnvReadyResult extends [Result](https://developer.huawei.com/consumer/cn/doc/hmscore-common-References/result-0000001050123085) 请求[isEnvReady](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/iapclient-0000001050137587#section0680174272414)接口成功时返回的信息。|

#### Public Method Summary

|Qualifier and Type|Method Name and Description|
|:-----------------|:----------------------------------------------|
|int|[getReturnCode](#section1511518421180)() 获取返回码。|

|Methods Inherited from Class [com.huawei.hms.support.api.client.Result](https://developer.huawei.com/consumer/cn/doc/hmscore-common-References/result-0000001050123085)|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|getStatus|

#### Public Methods

#### getReturnCode

|Method|
|:-------------------------------------|
|public int getReturnCode() 获取查询结果的返回码。|

Returns  

|Type|Description|
|:---|:-------------------------------|
|int|查询结果的返回码。 0：用户登录的帐号在华为IAP支持的范围内。|

