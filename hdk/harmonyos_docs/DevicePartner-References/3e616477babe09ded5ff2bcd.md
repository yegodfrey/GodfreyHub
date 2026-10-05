---
name: document/cn/DevicePartner-References/query-scene-logs-0000001077756440
title: 查询规则执行日志
uri: https://developer.huawei.com/consumer/cn/doc/DevicePartner-References/query-scene-logs-0000001077756440
source: portal
---

# 查询规则执行日志  
  
#### 接口描述

hilink. getDeviceRuleEvents (String cursor, String pageSize, String startTime, String endTime, String resultCallback)

查询当前设备相关的规则执行日志。

#### 适用平台

Android、iOS

#### 接口约束

无

#### 请求参数

参数 | 类型 | 是否必选 | 说明  
---|---|---|---  
cursor | String | 是 | 查询的游标。取值范围 >= 1。  
pageSize | String | 是 | 本次查询数据量。  
startTime | String | 是 | 开始时间，时间格式：yyyyMMddTHHmmssZ如：20161212T121212Z，使用24小时制。  
endTime | String | 是 | 结束时间，格式同参数startTime。  
resultCallback | String | 是 | 结果回调。  
  
#### 请求示例
    
    
    var cursor = "1";
    var pageSize = "10";
    var startTime = "20221010T101010Z";
    var endTime = "20221212T121212Z";
    // web页面中需实现该函数，用来获取执行结果
    function callback(result){
    }
    hilink.getDeviceRuleEvents(cursor, pageSize, startTime, endTime, callback);

#### 响应参数

响应参数通过callback返回，结构如下：

参数 | 类型 | 是否必选 | 说明  
---|---|---|---  
result | string | 是 | 请求成功，返回场景日志的json字符串。  
errcode | int | 是 | 请求失败，返回错误码。  
  
#### 响应示例

  * 成功
        
        {
            "totalCount": 1,
            "pageNo": "1",
            "pageSize": "10",
            "data": [
                {
                    "homeId": "0",
                    "startTime": "20221010T101010Z",
                    "eventId": "b78p3jramh2ajfrhudjkc2uu9s",
                    "eventType": "ruleExecuted",
                    "eventObjet": {
                        "reasons": [
                            {
                                "duration": 0,
                                "trasInfo": null,
                                "id": "mu44jevu0h3e38r8lmn4445mec",
                                "type": "DEVICE_DATA",
                                "deviceInfo": {
                                    "devId": "2323-12-21-...",
                                    "devType": "005",
                                    "path": "switch/on"
                                },
                                "satisfactionTime": "20180809T024210Z",
                                "value": "2",
                                "operator": "="
                            }
                        ],
                        "name": "rule1",
                        "actionResults": [
                            {
                                "result": {
                                    "status": "success"
                                },
                                "id": "7fnbogqg457ctdmtl6pg0esqvg",
                                "type": "TERMINAL_PUSH",
                                "pushInfo": {
                                    "contentTemplate": {
                                    "title": "场景消息",
                                    "content": "13.56",
                                    "ext": "扩展消息"
                                }
                            }
                        }
                    ],
                    "ruleId": "hf57pkb2jd7dn0mj7s08k5r474"
                }
            }
          ]
        }

  * 失败
        
        {"errcode": -1}




#### 错误码

错误码 | 错误码描述 | 解决措施  
---|---|---  
12 | 参数校验失败、IO异常、响应数据为空。 | 检查参数是否符合要求。
