---
name: document/cn/DevicePartner-References/smart-life-open-api06-0000002628945994
title: 获取设备属性
uri: https://developer.huawei.com/consumer/cn/doc/DevicePartner-References/smart-life-open-api06-0000002628945994
source: portal
---

# 获取设备属性

#### 接口描述

getDeviceProperty

根据deviceId和serviceId获取设备属性

#### 适用平台

HarmonyOS Next

#### 请求参数

参数 | 类型 | 是否必选 | 描述  
---|---|---|---  
functionName | string | 是 | 接口名称，固定为：getDeviceProperty  
deviceId | String | 是 | 智慧生活拉起插件时通过路由传递给插件的设备唯一标识  
serviceId | String | 是 | 设备profile中的serviceId  
  
#### 回调

code为1000时，data：返回获取到的service信息转Json字符串,json示例如下：
    
    
    {
    	 
    	"bootTime": 120,
    	"action": 0,
    	"progress": 0,
    	"updatedVersion": "xxx",
    	"type": 0,
    	"version": "",
    	"introduction": "",
    	"autoUpdateOn": 0,
    	"status": 4
    }
