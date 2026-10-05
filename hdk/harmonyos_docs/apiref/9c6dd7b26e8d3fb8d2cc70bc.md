---
name: document/cn/apiref/ohos_1_1media_1_1frameconfig-0000001055358122
title: OHOS::Media::FrameConfig
uri: https://developer.huawei.com/consumer/cn/doc/apiref/ohos_1_1media_1_1frameconfig-0000001055358122
source: portal
---

# OHOS::Media::FrameConfig  
  
#### Overview

**Related Modules:**

[MultiMedia_FrameConfig](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__frameconfig-0000001055358062)

**Description:**

Provides functions to configure frames. 

**Since:**

1.0

**Version:**

1.0

#### Summary

#### [h2]Public Member Functions

Function | Description  
---|---  
[FrameConfig](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__frameconfig-0000001055358062#ZH-CN_TOPIC_0000001055358062__ga043537d52f5db46d981f9e89848b0fba) ()=delete |  A constructor used to create a **[FrameConfig](https://device.harmonyos.com/cn/docs/develop/apiref/ohos_1_1media_1_1frameconfig-0000001055358122)** instance.   
[FrameConfig](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__frameconfig-0000001055358062#ZH-CN_TOPIC_0000001055358062__gac8f74ff3689605a59a17997bdeaec1fc) (int32_t type) |  A constructor used to create a **[FrameConfig](https://device.harmonyos.com/cn/docs/develop/apiref/ohos_1_1media_1_1frameconfig-0000001055358122)** instance based on the configuration mode.   
[~FrameConfig](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__frameconfig-0000001055358062#ZH-CN_TOPIC_0000001055358062__gaa2e58c2ce602d9263b76596374823616) () |  A destructor used to delete the **[FrameConfig](https://device.harmonyos.com/cn/docs/develop/apiref/ohos_1_1media_1_1frameconfig-0000001055358122)** instance.   
[GetFrameConfigType](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__frameconfig-0000001055358062#ZH-CN_TOPIC_0000001055358062__ga382977445a583ed0424c5ccf581e824c) () | int32_t  Obtains the frame configuration type.   
[GetSurfaces](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__frameconfig-0000001055358062#ZH-CN_TOPIC_0000001055358062__ga955d04df96c009e4699ea6ed46d9e758) () | std::list< [Surface](https://device.harmonyos.com/cn/docs/develop/apiref/ohos_1_1surface-0000001055039528) * > Obtains a list of shared memories (surface objects).   
[AddSurface](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__frameconfig-0000001055358062#ZH-CN_TOPIC_0000001055358062__ga16760311713db03bf06ea0a6d6622013) ([Surface](https://device.harmonyos.com/cn/docs/develop/apiref/ohos_1_1surface-0000001055039528) &surface) | void  Adds a surface (an object of shared memory).   
[RemoveSurface](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__frameconfig-0000001055358062#ZH-CN_TOPIC_0000001055358062__ga9ac4bc5e52840ee579482a3836774762) ([Surface](https://device.harmonyos.com/cn/docs/develop/apiref/ohos_1_1surface-0000001055039528) &surface) | void  Removes a surface (an object of shared memory). You can call this function to release the surface when your application does not need to obtain data.   
[SetParameter](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__frameconfig-0000001055358062#ZH-CN_TOPIC_0000001055358062__ga6b4ee39d1c1bf219e4a84df470f6007a) (uint32_t key, const T value) | template<typename T > void  Sets the common parameter.   
[GetParameter](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__frameconfig-0000001055358062#ZH-CN_TOPIC_0000001055358062__ga05147491c6e25df54d75d5ed0c201d65) (uint32_t key, T &value) | template<typename T > void  Obtains the value of a common parameter based on its key. For details, see **CAMERA_FUC_KEY**. 
