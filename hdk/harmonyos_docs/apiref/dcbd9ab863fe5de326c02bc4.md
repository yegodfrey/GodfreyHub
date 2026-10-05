---
name: document/cn/apiref/assocreq-0000001055039506
title: AssocReq
uri: https://developer.huawei.com/consumer/cn/doc/apiref/assocreq-0000001055039506
source: portal
---

# AssocReq  
  
#### Overview

**Related Modules:**

[WLAN](https://device.harmonyos.com/cn/docs/develop/apiref/wlan-0000001055198080)

**Description:**

Defines station association request. 

**Since:**

1.0

**Version:**

1.0

#### Summary

#### [h2]Data Fields

Variable Name | Description  
---|---  
[capabInfo](https://device.harmonyos.com/cn/docs/develop/apiref/assocreq-0000001055039506#ZH-CN_TOPIC_0000001055039506__adc4d122edd92d777956cb913aa27918b) | uint16_t   
[listenInterval](https://device.harmonyos.com/cn/docs/develop/apiref/assocreq-0000001055039506#ZH-CN_TOPIC_0000001055039506__a4755cf88f3c370bb7e704e7ab1f1f46b) | uint16_t   
[variable](https://device.harmonyos.com/cn/docs/develop/apiref/assocreq-0000001055039506#ZH-CN_TOPIC_0000001055039506__a69066d587669a7b69106d618e90fbad3) [0] | uint8_t   
  
#### Details

#### Field

#### [h2]capabInfo
    
    uint16_t AssocReq::capabInfo

**Description:**

WLAN capability information 

#### [h2]listenInterval
    
    uint16_t AssocReq::listenInterval

**Description:**

Scan interval 

#### [h2]variable
    
    uint8_t AssocReq::variable[0]

**Description:**

SSID and rate information stored in a flexible array 
