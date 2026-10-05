---
name: document/cn/HMS-References/api-message-beaconid-builder
title: message.BeaconId.Builder
uri: https://developer.huawei.com/consumer/cn/doc/HMS-References/api-message-beaconid-builder
source: portal
---

## Public Constructor Summary  
  
Constructor  
---  
public BeaconId.Builder()  
创建一个[BeaconId](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/api-message-beaconid)实例  
  
## Public Method Summary

Return type| Method name  
---|---  
[BeaconId](https://developer.huawei.com/consumer/en/doc/development/HMS-References/api-message-beaconid)| build()  
创建BeaconId实例  
BeaconId.Builder| setIBeaconUuid(UUID iBeaconUuid)  
设置16字节的UUID  
BeaconId.Builder| setMajor(short major)  
设置2字节major  
BeaconId.Builder| setMinor(short minor)  
设置2字节minor  
BeaconId.Builder| setHexId(String hexId)  
设置hexId，hexId表示16字节的ID，namespace+instance  
BeaconId.Builder| setHexNamespace(String hexNamespace)  
设置hexNamespace（长度：10字节）  
BeaconId.Builder| setHexInstance(String hexInstance)  
设置hexInstance（长度：6字节）  
  
## Public Constructors

Constructor  
---  
public BeaconId.Builder()  
创建一个[BeaconId](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/api-message-beaconid)实例  
  
## Public Methods

Method  
---  
public [BeaconId](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/api-message-beaconid) build()  
创建[BeaconId](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/api-message-beaconid)实例。  
Method  
---  
public BeaconId.Builder setIBeaconUuid(UUID iBeaconUuid)  
设置16字节的UUID。  
  
Parameters

Parameter name| Parameter desc  
---|---  
iBeaconUuid| 16字节的UUID  
Method  
---  
public BeaconId.Builder setMajor(short major)  
设置2字节的major。  
  
Parameters

Parameter name| Parameter desc  
---|---  
major| 2字节的major  
Method  
---  
public BeaconId.Builder setMinor(short minor)  
设置2字节的minor。  
  
Parameters

Parameter name| Parameter desc  
---|---  
minor| 2字节的minor  
Method  
---  
public BeaconId.Builder setHexId(String hexId)  
设置hexId。  
  
Parameters

Parameter name| Parameter desc  
---|---  
hexId| hexId表示16字节的ID，namespace+instance  
Method  
---  
public BeaconId.Builder setHexNamespace(String hexNamespace)  
设置hexNamespace。  
  
Parameters

Parameter name| Parameter desc  
---|---  
hexNamespace| hexNamespace：namespace，长度为10字节  
Method  
---  
public BeaconId.Builder setHexInstance(String hexInstance)  
设置hexInstance。  
  
Parameters

Parameter name| Parameter desc  
---|---  
hexInstance| hexInstance：instance，长度为6字节
