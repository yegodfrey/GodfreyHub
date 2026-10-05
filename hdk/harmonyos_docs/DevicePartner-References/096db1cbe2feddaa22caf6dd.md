---
name: document/cn/DevicePartner-References/display-doorlock-screen-0000001090263483
title: 跳转至门锁匹配页面
uri: https://developer.huawei.com/consumer/cn/doc/DevicePartner-References/display-doorlock-screen-0000001090263483
source: portal
---

# 跳转至门锁匹配页面

#### 接口描述

hilink.jumpTo(String uri, String resultCallback)

跳转智能门锁页面。

#### 适用平台

Android、iOS

#### 接口约束

无

#### 请求参数

参数 | 类型 | 是否必选 | 说明  
---|---|---|---  
uri | String | 是 | 固定值“com.huawei.smarthome.addSmartlockActivity”  
resultCallback | String | 是 | 结果回调方法名  
  
#### 请求示例
    
    
    hilink.jumpTo("com.huawei.smarthome.addSmartlockActivity","resultCallback");

#### 响应参数

无
