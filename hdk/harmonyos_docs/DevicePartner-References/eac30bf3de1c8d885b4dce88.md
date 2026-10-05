---
name: document/cn/DevicePartner-References/obtaining-service-data-0000001948340430
title: 获取服务数据
uri: https://developer.huawei.com/consumer/cn/doc/DevicePartner-References/obtaining-service-data-0000001948340430
source: portal
---

# 获取服务数据  
  
#### 适用平台

Android、iOS

#### 接口描述

hilink.getHomeServiceInfo(String homeId, String serviceType, String resultCallback)

#### 请求参数

参数 | 类型 | 是否必选 | 说明  
---|---|---|---  
homeId | String | 是 | hoemId  
serviceType | String | 是 | 服务类型，例如康养：healthService  
resultCallback | String | 是 | 回调方法。  
  
#### 请求示例
    
    
    hilink.getServiceInfo("homeId", "healthService", "resultCallback");

#### 响应参数

响应参数通过resultCallback返回，不同服务返回数据不同，与具体业务有关，其中康养数据结构如下:

参数 | 类型 | 是否必选 | 说明  
---|---|---|---  
events | List | 否 | 事件列表  
deviceInfos | List | 否 | 设备列表  
serviceContact | List | 否 | 紧急联系人  
beCaredPerson | List | 否 | 看护对象  
roomInfo | List | 否 | 房间列表  
homeInfo | map | 是 | 家庭信息  
eventsCount | int | 是 | 异常数量  
baseInfo | map | 是 | 服务基础数据  
hasServicePlugin | boolean | 是 | 是否下载服务的插件  
  
#### 成功响应示例
    
    
    {
    "serviceType" : "healthService",
    "data" : "{
    	"events": [{
    		"deviceId": "fdbdce3***c690",
    		"active": 0,
    		"status": "1",
    		"roomId": "171***469",
    		"eventType": "getupDetEvent",
    		"eventId": "1450***60096",
    		"occurTime": 1719180019583
    	}],
    	"deviceInfos": {
    		"deviceCount": 1,
    		"devices": [{
    			"status": "online",
    			"deviceId": "fdbdce***dc690",
    			"roomId": "171***469",
    			"roomName": "次卧",
    			"isOnline": true,
    			"deviceName": "卧室长辈关怀传感器"
    		}]
    	},
    	"serviceContact": [{
    		"addTime": 1716647144000,
    		"contactId": "0",
    		"name": "白白",
    		"orderNo": 0,
    		"phoneNo": "132****5153"
    	}],
    	"beCaredPerson": [{
    		"iconNo": 0,
    		"status": 0,
    		"deviceId": "fdbdce***dc690",
    		"beCaredName": "用户01",
    		"serviceId": "7bi2kmlt***alth",
    		"sn": "36U***00120",
    		"serialNo": "14292***5632"
    	}],
    	"hasServicePlugin": false,
    	"roomInfo": {
    		"getupDetEvent": [{
    			"roomId": "17***729",
    			"roomName": "主卧"
    		}, {
    			"roomId": "171***3766",
    			"roomName": "客房"
    		}]
    	},
    	"baseInfo": {
    		"status": "open",
    		"openningTime": 171***42112,
    		"serviceId": "7bi2k***ealth",
    		"isOpen": true,
    		"role": "owner", // 角色 owner or family
    		"orderNo": 0
    	},
    	"homeInfo": {
    		"homeId": "7bi2k***n26fo",
    		"homeName": "大白的家"
    	},
    	"eventsCount": 1
    }
    }

#### 失败响应示例
    
    
    {"errcode":-1}
