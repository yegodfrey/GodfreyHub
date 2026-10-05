---
name: document/cn/doc-references/devicechangecallback-0000001054440093
title: DeviceChangeCallback
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/devicechangecallback-0000001054440093
source: portal
---

# DeviceChangeCallback  
      
    public interface DeviceChangeCallback  
  
---  
Represents the callback for device status changes. 

You need to implement this class and call the [KvManager.registerDeviceChangeCallback(ohos.data.distributed.device.DeviceChangeCallback, ohos.data.distributed.device.DeviceFilterStrategy)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/kvmanager-0000001054238801#ZH-CN_TOPIC_0000001054238801__registerDeviceChangeCallback-ohos_data_distributed_device_DeviceChangeCallback-ohos_data_distributed_device_DeviceFilterStrategy-) method to register the DeviceChangeCallback. The callback will be invoked when the status of a device changes (online or offline).

**Since:**

3

#### Method Summary

Modifier and Type | Method | Description  
---|---|---  
void | [onChanged](https://developer.harmonyos.com/cn/docs/documentation/doc-references/devicechangecallback-0000001054440093#ZH-CN_TOPIC_0000001054440093__onChanged-ohos_data_distributed_device_DeviceInfo-ohos_data_distributed_device_DeviceStatus-)​([DeviceInfo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/deviceinfo-0000001054678808) info, [DeviceStatus](https://developer.harmonyos.com/cn/docs/documentation/doc-references/devicestatus-0000001054238807) status) |  Called when the device status changes.   
  
#### Method Detail

#### [h2]onChanged

void onChanged​([DeviceInfo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/deviceinfo-0000001054678808) info, [DeviceStatus](https://developer.harmonyos.com/cn/docs/documentation/doc-references/devicestatus-0000001054238807) status)

Called when the device status changes. 

This callback is invoked when a device goes online or offline.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
info  |  Indicates the device information.  
status  |  Indicates the device status after the status change.  
  
**Since:**

3
