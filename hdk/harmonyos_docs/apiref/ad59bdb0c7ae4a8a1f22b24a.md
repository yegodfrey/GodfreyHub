---
name: document/cn/apiref/udpheader-0000001054718167
title: UdpHeader
uri: https://developer.huawei.com/consumer/cn/doc/apiref/udpheader-0000001054718167
source: portal
---

# UdpHeader

#### Overview

**Related Modules:**

[WLAN](https://device.harmonyos.com/cn/docs/develop/apiref/wlan-0000001055198080)

**Description:**

Defines the UDP header information of a data frame, including the source port number and destination port number. 

**Since:**

1.0

**Version:**

1.0

#### Summary

#### [h2]Data Fields

Variable Name | Description  
---|---  
[source](https://device.harmonyos.com/cn/docs/develop/apiref/udpheader-0000001054718167#ZH-CN_TOPIC_0000001054718167__aa51376bc21358f5c14e8c21ddc9afa00) | uint16_t   
[dest](https://device.harmonyos.com/cn/docs/develop/apiref/udpheader-0000001054718167#ZH-CN_TOPIC_0000001054718167__a21658fd4eb65ed4559958e3074f21081) | uint16_t   
[len](https://device.harmonyos.com/cn/docs/develop/apiref/udpheader-0000001054718167#ZH-CN_TOPIC_0000001054718167__a90b8c3dd672bad2f722900101db236f2) | uint16_t   
[check](https://device.harmonyos.com/cn/docs/develop/apiref/udpheader-0000001054718167#ZH-CN_TOPIC_0000001054718167__ae93142de73db5e7e18f2d247387d79ee) | uint16_t   
  
#### Details

#### Field

#### [h2]check
    
    uint16_t UdpHeader::check

**Description:**

Header check 

#### [h2]dest
    
    uint16_t UdpHeader::dest

**Description:**

Destination port number 

#### [h2]len
    
    uint16_t UdpHeader::len

**Description:**

Length of a data packet 

#### [h2]source
    
    uint16_t UdpHeader::source

**Description:**

Source port number 
