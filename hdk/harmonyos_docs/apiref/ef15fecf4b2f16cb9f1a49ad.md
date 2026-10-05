---
name: document/cn/apiref/spicfg-0000001054879570
title: SpiCfg
uri: https://developer.huawei.com/consumer/cn/doc/apiref/spicfg-0000001054879570
source: portal
---

# SpiCfg  
  
#### Overview

**Related Modules:**

[SPI](https://device.harmonyos.com/cn/docs/develop/apiref/spi-0000001055518038)

**Description:**

Defines the configuration of an SPI device. 

Attention 
    The specific SPI controller determines which variables in this structure are supported. 

**Since:**

1.0

#### Summary

#### [h2]Data Fields

Variable Name | Description  
---|---  
[maxSpeedHz](https://device.harmonyos.com/cn/docs/develop/apiref/spicfg-0000001054879570#ZH-CN_TOPIC_0000001054879570__a81369e5879c93f2747375dffbd5f975d) | uint32_t   
[mode](https://device.harmonyos.com/cn/docs/develop/apiref/spicfg-0000001054879570#ZH-CN_TOPIC_0000001054879570__a48b7732e7d6e53d5af6ad5ce36cb96d3) | uint16_t   
[transferMode](https://device.harmonyos.com/cn/docs/develop/apiref/spicfg-0000001054879570#ZH-CN_TOPIC_0000001054879570__a4193f45f83d1501f5e0ead393e1e55a1) | uint8_t   
[bitsPerWord](https://device.harmonyos.com/cn/docs/develop/apiref/spicfg-0000001054879570#ZH-CN_TOPIC_0000001054879570__ac671a8fc23e2998243695c7bd27232f3) | uint8_t   
  
#### Details

#### Field

#### [h2]bitsPerWord
    
    uint8_t SpiCfg::bitsPerWord

**Description:**

Data transfer bit width 

#### [h2]maxSpeedHz
    
    uint32_t SpiCfg::maxSpeedHz

**Description:**

Maximum clock frequency 

#### [h2]mode
    
    uint16_t SpiCfg::mode

#### [h2]transferMode
    
    uint8_t SpiCfg::transferMode

**Description:**

Data transfer mode, as defined in [SpiTransferMode](https://device.harmonyos.com/cn/docs/develop/apiref/spi-0000001055518038#ZH-CN_TOPIC_0000001055518038__ga55946d1d895fc2b7b33007019de1668f). 
