---
name: document/cn/apiref/scannedbssinfo-0000001054479603
title: ScannedBssInfo
uri: https://developer.huawei.com/consumer/cn/doc/apiref/scannedbssinfo-0000001054479603
source: portal
---

# ScannedBssInfo

#### Overview

**Related Modules:**

[WLAN](https://device.harmonyos.com/cn/docs/develop/apiref/wlan-0000001055198080)

**Description:**

Represents the scanned BSS information. 

**Since:**

1.0

**Version:**

1.0

#### Summary

#### [h2]Data Fields

Variable Name | Description  
---|---  
[signal](https://device.harmonyos.com/cn/docs/develop/apiref/scannedbssinfo-0000001054479603#ZH-CN_TOPIC_0000001054479603__a20f18f7993df9723a0f3e7520ae715e2) | int32_t   
[freq](https://device.harmonyos.com/cn/docs/develop/apiref/scannedbssinfo-0000001054479603#ZH-CN_TOPIC_0000001054479603__a9489887bd02837a40e9560f1a4acd211) | int16_t   
[arry](https://device.harmonyos.com/cn/docs/develop/apiref/scannedbssinfo-0000001054479603#ZH-CN_TOPIC_0000001054479603__a6d31899685b7a552a5322e93b0ffd972) [2] | uint8_t   
[mgmtLen](https://device.harmonyos.com/cn/docs/develop/apiref/scannedbssinfo-0000001054479603#ZH-CN_TOPIC_0000001054479603__aa40e6cfe80596087c25e256215123890) | uint32_t   
[mgmt](https://device.harmonyos.com/cn/docs/develop/apiref/scannedbssinfo-0000001054479603#ZH-CN_TOPIC_0000001054479603__a345b0140ecaa55ffc7c85bf96548efc9) | struct [Ieee80211Mgmt](https://device.harmonyos.com/cn/docs/develop/apiref/ieee80211mgmt-0000001055678098) *   
  
#### Details

#### Field

#### [h2]arry
    
    uint8_t ScannedBssInfo::arry[2]

**Description:**

Reserved 

#### [h2]freq
    
    int16_t ScannedBssInfo::freq

**Description:**

Center frequency of the channel where the BSS is located 

#### [h2]mgmt
    
    struct [Ieee80211Mgmt](https://device.harmonyos.com/cn/docs/develop/apiref/ieee80211mgmt-0000001055678098)* ScannedBssInfo::mgmt

**Description:**

Start address of the management frame 

#### [h2]mgmtLen
    
    uint32_t ScannedBssInfo::mgmtLen

**Description:**

Management frame length 

#### [h2]signal
    
    int32_t ScannedBssInfo::signal

**Description:**

Signal strength 
