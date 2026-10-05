---
name: document/cn/HMS-3-References/locationsettingsrequest-v3
title: LocationSettingsRequest
uri: https://developer.huawei.com/consumer/cn/doc/HMS-3-References/locationsettingsrequest-v3
source: portal
---

CLASS info  
---  
public class LocationSettingsRequest implements IMessageEntity  
指定位置服务类型，检查位置设置以获取所有位置请求服务的最佳功能。  
  
## Field Summary

Return type| Method name| Description  
---|---|---  
Creator<LocationSettingsRequest>| CREATOR| LocationSettingsRequest构建器。  
  
## Nested Class Summary

Type| Name| Desc  
---|---|---  
Class| [LocationSettingsRequest.Builder](https://developer.huawei.com/consumer/cn/doc/development/HMS-3-References/locationsettingsrequest-builder-v3)| 用于构建LocationSettingsRequest。  
  
## Public Constructor Summary

Constructor name  
---  
LocationSettingsRequest(List<[LocationRequest](https://developer.huawei.com/consumer/cn/doc/development/HMS-3-References/locationrequest-v3)> requests, boolean alwaysShow, boolean needBle)  
构建一个LocationSettingsRequest实例  
  
## Public Constructors

constructor  
---  
LocationSettingsRequest(List requests, boolean alwaysShow, boolean needBle)  
构建一个LocationSettingsRequest实例  
  
**Parameters**

Parameter name| Parameter desc  
---|---  
requests| 定位请求  
alwaysShow| 调用应用程序是否需要位置才能继续  
needBle| 设置客户端是否要启用BLE扫描
