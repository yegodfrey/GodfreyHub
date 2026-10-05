---
name: document/cn/apiref/uartattribute-0000001054918195
title: UartAttribute
uri: https://developer.huawei.com/consumer/cn/doc/apiref/uartattribute-0000001054918195
source: portal
---

# UartAttribute

#### Overview

**Related Modules:**

[UART](https://device.harmonyos.com/cn/docs/develop/apiref/uart-0000001054799549)

**Description:**

Defines basic attributes of the UART port. 

You can configure the attributes via [UartSetAttribute](https://device.harmonyos.com/cn/docs/develop/apiref/uart-0000001054799549#ZH-CN_TOPIC_0000001054799549__ga76281a15464395451fc9844e717e0e10). If the parameters are not set, default attributes are used.

Attention 
    The UART controller determines which UART attribute parameters are supported. 

**Since:**

1.0

#### Summary

#### [h2]Data Fields

Variable Name | Description  
---|---  
[dataBits](https://device.harmonyos.com/cn/docs/develop/apiref/uartattribute-0000001054918195#ZH-CN_TOPIC_0000001054918195__a884f85f5c82f063596a52f43c12af1a8): 4 | unsigned int   
[parity](https://device.harmonyos.com/cn/docs/develop/apiref/uartattribute-0000001054918195#ZH-CN_TOPIC_0000001054918195__abc4eefd31616175d469bc41d24b5b37b): 4 | unsigned int   
[stopBits](https://device.harmonyos.com/cn/docs/develop/apiref/uartattribute-0000001054918195#ZH-CN_TOPIC_0000001054918195__a29782a670eaf734ed02955eff0cdd4b9): 4 | unsigned int   
[rts](https://device.harmonyos.com/cn/docs/develop/apiref/uartattribute-0000001054918195#ZH-CN_TOPIC_0000001054918195__a5ebfed49568aa4717b72d89084a13f3a): 1 | unsigned int   
[cts](https://device.harmonyos.com/cn/docs/develop/apiref/uartattribute-0000001054918195#ZH-CN_TOPIC_0000001054918195__a8c2ec715ce735b87619440004a5816f3): 1 | unsigned int   
[fifoRxEn](https://device.harmonyos.com/cn/docs/develop/apiref/uartattribute-0000001054918195#ZH-CN_TOPIC_0000001054918195__a171de31a6414563a1b8ca13c6209e52a): 1 | unsigned int   
[fifoTxEn](https://device.harmonyos.com/cn/docs/develop/apiref/uartattribute-0000001054918195#ZH-CN_TOPIC_0000001054918195__a12cd3afb4dfbc5ed70578e0fcee0700d): 1 | unsigned int   
[reserved](https://device.harmonyos.com/cn/docs/develop/apiref/uartattribute-0000001054918195#ZH-CN_TOPIC_0000001054918195__a415c8237e3a34dfe812e6c6cc7a7a1fa): 16 | unsigned int   
  
#### Details

#### Field

#### [h2]cts
    
    unsigned int UartAttribute::cts

#### [h2]dataBits
    
    unsigned int UartAttribute::dataBits

#### [h2]fifoRxEn
    
    unsigned int UartAttribute::fifoRxEn

#### [h2]fifoTxEn
    
    unsigned int UartAttribute::fifoTxEn

#### [h2]parity
    
    unsigned int UartAttribute::parity

#### [h2]reserved
    
    unsigned int UartAttribute::reserved

**Description:**

Reserved bits 

#### [h2]rts
    
    unsigned int UartAttribute::rts

#### [h2]stopBits
    
    unsigned int UartAttribute::stopBits
