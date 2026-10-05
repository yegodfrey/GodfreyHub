---
name: document/cn/DevicePartner-References/obtain-rule-0000001090658279
title: 查询规则（根据ruleID）
uri: https://developer.huawei.com/consumer/cn/doc/DevicePartner-References/obtain-rule-0000001090658279
source: portal
---

# 查询规则（根据ruleID）  
  
#### 接口描述

hilink.getSingleRule(String ruleId, String callback);

根据ruleID，查询场景联动或消息推送规则。

#### 适用平台

Android、iOS

#### 接口约束

无

#### 请求参数

参数 | 类型 | 是否必选 | 说明  
---|---|---|---  
ruleId | String | 是 | 待查询的规则ID。创建规则后，云端会分配响应的规则ID。  
callback | String | 是 | 结果回调。  
  
#### 请求示例
    
    
    String ruleId = "规则ID";
    // web页面中需实现该函数，用来获取执行结果 
    function callback(result){}
    hilink.getSingleRule(ruleId, callback);

#### 响应参数

响应参数通过callback返回，结构如下：

参数 | 类型 | 是否必选 | 说明  
---|---|---|---  
result | string | 是 | 响应成功，返回所查询的规则对应的json字符串。  
errcode | int | 是 | 响应失败，返回错误码。  
  
#### 响应示例

  * 成功
        
        {
            "id": 101,
            "name": "scene1",
            "type": 0,
            "description": "回家模式",
            "actions": [
                {
                    "devId": "2323-1221-...",
                    "sid": "/switch1",
                    "data": {
                        "on": true
                    }
                }
            ]
        }

  * 失败
        
        {"errcode":-1}




#### 错误码

错误码 | 错误码描述 | 解决措施  
---|---|---  
-1 | 请求失败。 | -  
10 | 请求超时。 | 请检查网络。  
12 | 参数校验失败、IO异常、响应数据为空。 | 请检查请求参数。
