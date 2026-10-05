---
name: document/cn/apiref/sdio__if_8h-0000001054918133
title: sdio_if.h
uri: https://developer.huawei.com/consumer/cn/doc/apiref/sdio__if_8h-0000001054918133
source: portal
---

# sdio_if.h

#### Overview

**Related Modules:**

[SDIO](https://device.harmonyos.com/cn/docs/develop/apiref/sdio-0000001055678042)

**Description:**

Declares the standard SDIO APIs. 

**Since:**

1.0

#### Summary

#### [h2]Data Structures

Data Structure Name | Description  
---|---  
[SdioFuncInfo](https://device.harmonyos.com/cn/docs/develop/apiref/sdiofuncinfo-0000001055518126) | Defines the SDIO capabilities.   
[SdioCommonInfo](https://device.harmonyos.com/cn/docs/develop/apiref/unionsdiocommoninfo-0000001054799637) | Defines SDIO common information.   
  
#### [h2]Typedefs

Typedef Name | Description  
---|---  
[SdioIrqHandler](https://device.harmonyos.com/cn/docs/develop/apiref/sdio-0000001055678042#ZH-CN_TOPIC_0000001055678042__ga858bec274683a4f50d53d1f9f43d204b)(void *) | typedef void  Defines the function type of an SDIO IRQ.   
  
#### [h2]Enumerations

Enumeration Name | Description  
---|---  
[SdioCommonInfoType](https://device.harmonyos.com/cn/docs/develop/apiref/sdio-0000001055678042#ZH-CN_TOPIC_0000001055678042__ga4037437ac001a9848dd242e8aa632678) { [SDIO_FUNC_INFO](https://device.harmonyos.com/cn/docs/develop/apiref/sdio-0000001055678042#ZH-CN_TOPIC_0000001055678042__gga4037437ac001a9848dd242e8aa632678aa4e25cb3b51d47da78d6b58d11d946cd) = 0, [SDIO_OTHER_INFO](https://device.harmonyos.com/cn/docs/develop/apiref/sdio-0000001055678042#ZH-CN_TOPIC_0000001055678042__gga4037437ac001a9848dd242e8aa632678a7aa994f868190924d0bf354c1bb0d67b) } | Enumerates SDIO common information types.   
  
#### [h2]Functions

Function | Description  
---|---  
[SdioOpen](https://device.harmonyos.com/cn/docs/develop/apiref/sdio-0000001055678042#ZH-CN_TOPIC_0000001055678042__ga8156d7f64d72145312d92e33a532ebfd) (int16_t busNum) | [DevHandle](https://device.harmonyos.com/cn/docs/develop/apiref/common-0000001054479513#ZH-CN_TOPIC_0000001054479513__gab8c2d38e46eec50bd097a27d3d8bf041) Opens an SDIO controller with a specified bus number.   
[SdioClose](https://device.harmonyos.com/cn/docs/develop/apiref/sdio-0000001055678042#ZH-CN_TOPIC_0000001055678042__ga2e94ff04073420086e1453f125703ec7) ([DevHandle](https://device.harmonyos.com/cn/docs/develop/apiref/common-0000001054479513#ZH-CN_TOPIC_0000001054479513__gab8c2d38e46eec50bd097a27d3d8bf041) handle) | void  Closes an SDIO controller.   
[SdioReadBytes](https://device.harmonyos.com/cn/docs/develop/apiref/sdio-0000001055678042#ZH-CN_TOPIC_0000001055678042__ga14752ccc5cea77cfe30cfa9ab189815f) ([DevHandle](https://device.harmonyos.com/cn/docs/develop/apiref/common-0000001054479513#ZH-CN_TOPIC_0000001054479513__gab8c2d38e46eec50bd097a27d3d8bf041) handle, uint8_t *data, uint32_t addr, uint32_t size, uint32_t timeOut) | int32_t  Incrementally reads a given length of data from the specified SDIO address.   
[SdioWriteBytes](https://device.harmonyos.com/cn/docs/develop/apiref/sdio-0000001055678042#ZH-CN_TOPIC_0000001055678042__gaa4df7c3e2cde82f5cb7255561b99cc74) ([DevHandle](https://device.harmonyos.com/cn/docs/develop/apiref/common-0000001054479513#ZH-CN_TOPIC_0000001054479513__gab8c2d38e46eec50bd097a27d3d8bf041) handle, uint8_t *data, uint32_t addr, uint32_t size, uint32_t timeOut) | int32_t  Incrementally writes a given length of data into the specified SDIO address.   
[SdioReadBytesFromFixedAddr](https://device.harmonyos.com/cn/docs/develop/apiref/sdio-0000001055678042#ZH-CN_TOPIC_0000001055678042__gabc1645bc8ab9068a13ae501efdb4a9fc) ([DevHandle](https://device.harmonyos.com/cn/docs/develop/apiref/common-0000001054479513#ZH-CN_TOPIC_0000001054479513__gab8c2d38e46eec50bd097a27d3d8bf041) handle, uint8_t *data, uint32_t addr, uint32_t size, uint32_t timeOut) | int32_t  Reads a given length of data from the fixed SDIO address.   
[SdioWriteBytesToFixedAddr](https://device.harmonyos.com/cn/docs/develop/apiref/sdio-0000001055678042#ZH-CN_TOPIC_0000001055678042__ga82d6b3047bd694cdbdfb0a3711797c7b) ([DevHandle](https://device.harmonyos.com/cn/docs/develop/apiref/common-0000001054479513#ZH-CN_TOPIC_0000001054479513__gab8c2d38e46eec50bd097a27d3d8bf041) handle, uint8_t *data, uint32_t addr, uint32_t size, uint32_t timeOut) | int32_t  Writes a given length of data into the fixed SDIO address.   
[SdioReadBytesFromFunc0](https://device.harmonyos.com/cn/docs/develop/apiref/sdio-0000001055678042#ZH-CN_TOPIC_0000001055678042__ga52d8f25705aef184f501528faac8eaa5) ([DevHandle](https://device.harmonyos.com/cn/docs/develop/apiref/common-0000001054479513#ZH-CN_TOPIC_0000001054479513__gab8c2d38e46eec50bd097a27d3d8bf041) handle, uint8_t *data, uint32_t addr, uint32_t size, uint32_t timeOut) | int32_t  Reads a given length of data from the address space of SDIO function 0.   
[SdioWriteBytesToFunc0](https://device.harmonyos.com/cn/docs/develop/apiref/sdio-0000001055678042#ZH-CN_TOPIC_0000001055678042__ga8606506dfdcb34a83f404d13c7128d5f) ([DevHandle](https://device.harmonyos.com/cn/docs/develop/apiref/common-0000001054479513#ZH-CN_TOPIC_0000001054479513__gab8c2d38e46eec50bd097a27d3d8bf041) handle, uint8_t *data, uint32_t addr, uint32_t size, uint32_t timeOut) | int32_t  Writes a given length of data into the address space of SDIO function 0.   
[SdioSetBlockSize](https://device.harmonyos.com/cn/docs/develop/apiref/sdio-0000001055678042#ZH-CN_TOPIC_0000001055678042__ga4a91f3d668b99b22b3263241329ceb51) ([DevHandle](https://device.harmonyos.com/cn/docs/develop/apiref/common-0000001054479513#ZH-CN_TOPIC_0000001054479513__gab8c2d38e46eec50bd097a27d3d8bf041) handle, uint32_t blockSize) | int32_t  Sets the block size.   
[SdioGetCommonInfo](https://device.harmonyos.com/cn/docs/develop/apiref/sdio-0000001055678042#ZH-CN_TOPIC_0000001055678042__ga1289cc512ba56e3e904204c15d8ae23d) ([DevHandle](https://device.harmonyos.com/cn/docs/develop/apiref/common-0000001054479513#ZH-CN_TOPIC_0000001054479513__gab8c2d38e46eec50bd097a27d3d8bf041) handle, [SdioCommonInfo](https://device.harmonyos.com/cn/docs/develop/apiref/unionsdiocommoninfo-0000001054799637) *info, [SdioCommonInfoType](https://device.harmonyos.com/cn/docs/develop/apiref/sdio-0000001055678042#ZH-CN_TOPIC_0000001055678042__ga4037437ac001a9848dd242e8aa632678) infoType) | int32_t  Obtains common information.   
[SdioSetCommonInfo](https://device.harmonyos.com/cn/docs/develop/apiref/sdio-0000001055678042#ZH-CN_TOPIC_0000001055678042__ga6a8eb2f6413c4685f92236dd1c8083dc) ([DevHandle](https://device.harmonyos.com/cn/docs/develop/apiref/common-0000001054479513#ZH-CN_TOPIC_0000001054479513__gab8c2d38e46eec50bd097a27d3d8bf041) handle, [SdioCommonInfo](https://device.harmonyos.com/cn/docs/develop/apiref/unionsdiocommoninfo-0000001054799637) *info, [SdioCommonInfoType](https://device.harmonyos.com/cn/docs/develop/apiref/sdio-0000001055678042#ZH-CN_TOPIC_0000001055678042__ga4037437ac001a9848dd242e8aa632678) infoType) | int32_t  Sets common information.   
[SdioFlushData](https://device.harmonyos.com/cn/docs/develop/apiref/sdio-0000001055678042#ZH-CN_TOPIC_0000001055678042__gad402b23097456f1116d1ac941b0f9787) ([DevHandle](https://device.harmonyos.com/cn/docs/develop/apiref/common-0000001054479513#ZH-CN_TOPIC_0000001054479513__gab8c2d38e46eec50bd097a27d3d8bf041) handle) | int32_t  Flushes data.   
[SdioClaimHost](https://device.harmonyos.com/cn/docs/develop/apiref/sdio-0000001055678042#ZH-CN_TOPIC_0000001055678042__ga19b0ab843f82c367ce211b794371ef00) ([DevHandle](https://device.harmonyos.com/cn/docs/develop/apiref/common-0000001054479513#ZH-CN_TOPIC_0000001054479513__gab8c2d38e46eec50bd097a27d3d8bf041) handle) | void  Claims a host exclusively.   
[SdioReleaseHost](https://device.harmonyos.com/cn/docs/develop/apiref/sdio-0000001055678042#ZH-CN_TOPIC_0000001055678042__ga8645ddd7f46ae24b0476f29b281e6ebf) ([DevHandle](https://device.harmonyos.com/cn/docs/develop/apiref/common-0000001054479513#ZH-CN_TOPIC_0000001054479513__gab8c2d38e46eec50bd097a27d3d8bf041) handle) | void  Releases the exclusively claimed host.   
[SdioEnableFunc](https://device.harmonyos.com/cn/docs/develop/apiref/sdio-0000001055678042#ZH-CN_TOPIC_0000001055678042__gae67329c260a546d7d92eb42adf5f4a5a) ([DevHandle](https://device.harmonyos.com/cn/docs/develop/apiref/common-0000001054479513#ZH-CN_TOPIC_0000001054479513__gab8c2d38e46eec50bd097a27d3d8bf041) handle) | int32_t  Enables the SDIO device so that its register can be accessed.   
[SdioDisableFunc](https://device.harmonyos.com/cn/docs/develop/apiref/sdio-0000001055678042#ZH-CN_TOPIC_0000001055678042__ga24a4ebbf4cbad86548feb97da46549c3) ([DevHandle](https://device.harmonyos.com/cn/docs/develop/apiref/common-0000001054479513#ZH-CN_TOPIC_0000001054479513__gab8c2d38e46eec50bd097a27d3d8bf041) handle) | int32_t  Disables the SDIO device.   
[SdioClaimIrq](https://device.harmonyos.com/cn/docs/develop/apiref/sdio-0000001055678042#ZH-CN_TOPIC_0000001055678042__ga690a939e327e8c5cd5186e08b1b42506) ([DevHandle](https://device.harmonyos.com/cn/docs/develop/apiref/common-0000001054479513#ZH-CN_TOPIC_0000001054479513__gab8c2d38e46eec50bd097a27d3d8bf041) handle, [SdioIrqHandler](https://device.harmonyos.com/cn/docs/develop/apiref/sdio-0000001055678042#ZH-CN_TOPIC_0000001055678042__ga858bec274683a4f50d53d1f9f43d204b) *irqHandler) | int32_t  Claims an SDIO IRQ.   
[SdioReleaseIrq](https://device.harmonyos.com/cn/docs/develop/apiref/sdio-0000001055678042#ZH-CN_TOPIC_0000001055678042__gad5e826a7ff8c15d9b46b74db2dcf9243) ([DevHandle](https://device.harmonyos.com/cn/docs/develop/apiref/common-0000001054479513#ZH-CN_TOPIC_0000001054479513__gab8c2d38e46eec50bd097a27d3d8bf041) handle) | int32_t  Releases an SDIO IRQ. 
