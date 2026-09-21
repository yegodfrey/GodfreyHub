---
name: document/cn/HMSCore-References/api-wallet-ble-service-deviceversionresponse-0000001683826236
title: DeviceVersionResponse
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-References/api-wallet-ble-service-deviceversionresponse-0000001683826236
---

# DeviceVersionResponse

|Class Info|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public class DeviceVersionResponse extends Response ICCE车钥匙公共API接口，用于接收返回的设备钱包版本、rom版本和机型。 这个类在Response类的基础上，增加了成员变量deviceType、walletVersion、romVersion、model、appId和appVersion，用于描述返回的设备和版本信息|

## Public Method Summary

|Qualifier and Type|Method Name and Description|
|:-----------------|:-------------------------------------------------|
|int|getDeviceType() 返回设备类型：0-手机；1-穿戴|
|long|getWalletVersion() 返回钱包版本(手机钱包：钱包版本、运动健康：穿戴钱包版本)|
|String|getRomVersion() 返回rom版本(手机钱包：手机ROM版本、运动健康：穿戴ROM版本)|
|String|getModel() 返回机型(手机钱包：手机机型、运动健康：穿戴型号)|
|String|getAppId() 返回客户端ID，仅穿戴场景有效(HEALTH_PACKAGE_NAME)|
|long|getAppVersion() 返回客户端版本号，仅穿戴场景有效(运动健康版本号)|
|int|getSupportResult() 返回支持结果(待定)|

## Public Methods

### public int getDeviceType ()

|Method|
|:------------------------------------------|
|public int getDeviceType() 返回设备类型：0-手机；1-穿戴|

**Return**

|Type|Description|
|:---|:---------------|
|int|返回设备类型：0-手机；1-穿戴|

### public long getWalletVersion ()

|Method|
|:-----------------------------------------------------------|
|public long getWalletVersion() 返回钱包版本(手机钱包：钱包版本、运动健康：穿戴钱包版本)|

**Return**

|Type|Description|
|:---|:----------------------------|
|long|返回钱包版本(手机钱包：钱包版本、运动健康：穿戴钱包版本)|

### public int getModel()

|Method|
|:-------------------------------------------------|
|public String getModel() 返回机型(手机钱包：手机机型、运动健康：穿戴型号)|

**Return**

|Type|Description|
|:-----|:------------------------|
|String|返回机型(手机钱包：手机机型、运动健康：穿戴型号)|

### public int getAppVersion ()

|Method|
|:---------------------------------------------------|
|public int getAppVersion() 返回客户端版本号，仅穿戴场景有效(运动健康版本号)|

**Return**

|Type|Description|
|:---|:------------------------|
|long|返回客户端版本号，仅穿戴场景有效(运动健康版本号)|

### public int getSupportResult ()

|Method|
|:---------------------------------------|
|public int getSupportResult() 返回支持结果(待定)|

**Return**

|Type|Description|
|:---|:----------|
|int|保留字段，待定|

