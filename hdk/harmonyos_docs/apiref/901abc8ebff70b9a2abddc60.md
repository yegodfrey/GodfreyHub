---
name: document/cn/apiref/stabssparameters-0000001055518128
title: StaBssParameters
uri: https://developer.huawei.com/consumer/cn/doc/apiref/stabssparameters-0000001055518128
source: portal
---

# StaBssParameters

#### Overview

**Related Modules:**

[WLAN](https://device.harmonyos.com/cn/docs/develop/apiref/wlan-0000001055198080)

**Description:**

Defines parameters related to the WLAN module that works in station mode. 

**Since:**

1.0

**Version:**

1.0

#### Summary

#### [h2]Data Fields

Variable Name | Description  
---|---  
[flags](https://device.harmonyos.com/cn/docs/develop/apiref/stabssparameters-0000001055518128#ZH-CN_TOPIC_0000001055518128__a192ebb83d79d9bed8ee35ceb3d91f1df) | uint8_t   
[dtimPeriod](https://device.harmonyos.com/cn/docs/develop/apiref/stabssparameters-0000001055518128#ZH-CN_TOPIC_0000001055518128__ac532b47f0a538e68bb340437d840fbcc) | uint8_t   
[beaconInterval](https://device.harmonyos.com/cn/docs/develop/apiref/stabssparameters-0000001055518128#ZH-CN_TOPIC_0000001055518128__ad49083c0d110aef00878071800040069) | uint16_t   
  
#### Details

#### Field

#### [h2]beaconInterval
    
    uint16_t StaBssParameters::beaconInterval

**Description:**

[Beacon](https://device.harmonyos.com/cn/docs/develop/apiref/beacon-0000001054799593) interval 

#### [h2]dtimPeriod
    
    uint8_t StaBssParameters::dtimPeriod

**Description:**

Delivery Traffic Indication Message (DTIM) period of BSS 

#### [h2]flags
    
    uint8_t StaBssParameters::flags

**Description:**

Flag, used to indicate a specific rate transmission type of 802.11n 
