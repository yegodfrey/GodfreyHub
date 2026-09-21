---
name: document/cn/HMSCore-References/awareness-capture-locationresponse-0000001050164060
title: LocationResponse
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-References/awareness-capture-locationresponse-0000001050164060
---

# LocationResponse

* 支持的场景：手机。
* 支持的OS：EMUI 7.0及以上。

|Class Info|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public class [LocationResponse](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/awareness-capture-locationresponse-0000001050164060) 地理位置的请求响应，可通过调用[CaptureClient](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/awareness-captureclient-0000001050164395)中提供的[getLocation](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/awareness-captureclient-0000001050164395#section139457161105)方法获取上次的地理位置响应，或调用[getCurrentLocation](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/awareness-captureclient-0000001050164395#section82979341903)方法获取当前的地理位置响应。|

## Public Method Summary

|Qualifier and Type|Method Name|
|:-----------------|:--------------------------------------|
|Location|[getLocation](#section10333142371417)()|

## Public Methods

### getLocation

|Method|
|:-------------------------------------------------|
|publicLocation getLocation() 获取地理位置，返回设备当前的经/纬度信息。|

**Returns**

|Type|Description|
|:-------|:-----------|
|Location|设备当前的经/纬度位置。|

