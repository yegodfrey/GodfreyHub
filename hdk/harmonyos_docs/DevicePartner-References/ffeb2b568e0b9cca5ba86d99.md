---
name: document/cn/DevicePartner-References/obtain-device-files-0000001077599040
title: 查询设备文件
uri: https://developer.huawei.com/consumer/cn/doc/DevicePartner-References/obtain-device-files-0000001077599040
source: portal
---

# 查询设备文件  
  
#### 接口描述

hilink.downloadObjectReq(String request, String callback);

从云侧查询并获取设备相关文件，如智能门锁的用户头像。

#### 适用平台

Android、iOS

#### 接口约束

无

#### 请求参数

参数 | 类型 | 是否必选 | 说明  
---|---|---|---  
request | String | 是 | 请求附带参数。格式为json字符串，包含设备ID与文件名两个字段：
    
    
    {"devId": "设备ID", "objectName": "文件名"}  
  
callback | String | 是 | 结果回调。  
  
#### 请求示例
    
    
    var request = "{"devId": "设备ID", "objectName": "文件名"}"; 
    // web页面中需实现该函数，用来获取执行结果 
    function callback(result){} 
    hilink.downloadObjectReq(request, callback);

#### 响应参数

响应参数通过callback返回，结构如下：

参数 | 类型 | 是否必选 | 说明  
---|---|---|---  
base64 | string | 是 | 请求成功，返回文件的base64字符串。  
errcode | int | 是 | 请求失败，返回错误码。  
  
#### 响应示例

  * 成功：返回文件的base64字符串。
  * 失败
        
        {"errcode":-1}




#### 错误码

错误码 | 错误码描述 | 解决措施  
---|---|---  
-1 | 请求失败。 | -  
12 | 参数校验失败、IO异常、响应数据为空。 | 请检查请求参数。
