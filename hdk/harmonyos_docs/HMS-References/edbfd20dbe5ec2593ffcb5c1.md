---
name: document/cn/HMS-References/api-discovery-scanendpointinfo
title: discovery.ScanEndpointInfo
uri: https://developer.huawei.com/consumer/cn/doc/HMS-References/api-discovery-scanendpointinfo
source: portal
---

CLASS info  
---  
public class ScanEndpointInfo implements Parcelable  
被发现的设备的相关信息  
  
## Public Constructor Summary

Constructor  
---  
public ScanEndpointInfo(String serviceId, String endpointName)  
创建ScanEndpointInfo对象  
  
## Public Method Summary

Return type| Method name  
---|---  
String| getName()  
获取已发现endpoint名称  
String| getServiceId()  
获取已发现的endpoint的Service Id  
  
## Public Constructors

Constructor  
---  
public ScanEndpointInfo(String serviceId, String endpointName)  
创建ScanEndpointInfo对象  
  
Parameters

Parameter name| Parameter desc  
---|---  
serviceId| APP的唯一标识，一般是用APP的包名  
endpointName| endpoint名称  
  
## Public Methods

Method  
---  
public String getName()  
获取已发现endpoint名称。  
Method  
---  
public String getServiceId()  
获取已发现的endpoint的Service Id。
