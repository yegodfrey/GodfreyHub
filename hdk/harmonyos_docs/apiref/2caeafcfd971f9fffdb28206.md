---
name: document/cn/apiref/audiomanager-0000001054598151
title: AudioManager
uri: https://developer.huawei.com/consumer/cn/doc/apiref/audiomanager-0000001054598151
source: portal
---

# AudioManager  
  
#### Overview

**Related Modules:**

[Audio](https://device.harmonyos.com/cn/docs/develop/apiref/audio-0000001054479511)

**Description:**

Manages audio adapters through a specific adapter driver program loaded based on the given audio adapter descriptor. 

See also 
    [AudioAdapter](https://device.harmonyos.com/cn/docs/develop/apiref/audioadapter-0000001054879522)

**Since:**

1.0

**Version:**

1.0

#### Summary

#### [h2]Data Fields

Variable Name | Description  
---|---  
[GetAllAdapters](https://device.harmonyos.com/cn/docs/develop/apiref/audiomanager-0000001054598151#ZH-CN_TOPIC_0000001054598151__a93a0ffb0df907fabcfca827d31dadf39) )(struct [AudioManager](https://device.harmonyos.com/cn/docs/develop/apiref/audiomanager-0000001054598151) *manager, struct [AudioAdapterDescriptor](https://device.harmonyos.com/cn/docs/develop/apiref/audioadapterdescriptor-0000001055518080) **descs, int32_t *size) | int32_t(*  Obtains the list of all adapters supported by an audio driver.   
[LoadAdapter](https://device.harmonyos.com/cn/docs/develop/apiref/audiomanager-0000001054598151#ZH-CN_TOPIC_0000001054598151__ab090e9c760a2888b55acc7baa4222ccb) )(struct [AudioManager](https://device.harmonyos.com/cn/docs/develop/apiref/audiomanager-0000001054598151) *manager, const struct [AudioAdapterDescriptor](https://device.harmonyos.com/cn/docs/develop/apiref/audioadapterdescriptor-0000001055518080) *desc, struct [AudioAdapter](https://device.harmonyos.com/cn/docs/develop/apiref/audioadapter-0000001054879522) **adapter) | int32_t(*  Loads the driver for an audio adapter.   
[UnloadAdapter](https://device.harmonyos.com/cn/docs/develop/apiref/audiomanager-0000001054598151#ZH-CN_TOPIC_0000001054598151__a556137764c5bf784972ba79303720fc3) )(struct [AudioManager](https://device.harmonyos.com/cn/docs/develop/apiref/audiomanager-0000001054598151) *manager, struct [AudioAdapter](https://device.harmonyos.com/cn/docs/develop/apiref/audioadapter-0000001054879522) *adapter) | void(*  Unloads the driver of an audio adapter.   
  
#### Details

#### Field

#### [h2]GetAllAdapters
    
    int32_t(* AudioManager::GetAllAdapters) (struct [AudioManager](https://device.harmonyos.com/cn/docs/develop/apiref/audiomanager-0000001054598151) *manager, struct [AudioAdapterDescriptor](https://device.harmonyos.com/cn/docs/develop/apiref/audioadapterdescriptor-0000001055518080) **descs, int32_t *size)

**Description:**

Obtains the list of all adapters supported by an audio driver. 

**Parameters:**

Name | Description  
---|---  
manager | Indicates the pointer to the audio adapter manager to operate.   
descs | Indicates the double pointer to the audio adapter list.   
size | Indicates the pointer to the length of the list.   
  
**Returns:**

Returns **0** if the list is obtained successfully; returns a negative value otherwise. 

**See also:**

[LoadAdapter](https://device.harmonyos.com/cn/docs/develop/apiref/audiomanager-0000001054598151#ZH-CN_TOPIC_0000001054598151__ab090e9c760a2888b55acc7baa4222ccb)

#### [h2]LoadAdapter
    
    int32_t(* AudioManager::LoadAdapter) (struct [AudioManager](https://device.harmonyos.com/cn/docs/develop/apiref/audiomanager-0000001054598151) *manager, const struct [AudioAdapterDescriptor](https://device.harmonyos.com/cn/docs/develop/apiref/audioadapterdescriptor-0000001055518080) *desc, struct [AudioAdapter](https://device.harmonyos.com/cn/docs/develop/apiref/audioadapter-0000001054879522) **adapter)

**Description:**

Loads the driver for an audio adapter. 

For example, to load a USB driver, you may need to load a dynamic-link library (*.so) in specific implementation.

**Parameters:**

Name | Description  
---|---  
manager | Indicates the pointer to the audio adapter manager to operate.   
desc | Indicates the pointer to the descriptor of the audio adapter.   
adapter | Indicates the double pointer to the audio adapter.   
  
**Returns:**

Returns **0** if the driver is loaded successfully; returns a negative value otherwise. 

**See also:**

[GetAllAdapters](https://device.harmonyos.com/cn/docs/develop/apiref/audiomanager-0000001054598151#ZH-CN_TOPIC_0000001054598151__a93a0ffb0df907fabcfca827d31dadf39)

[UnloadAdapter](https://device.harmonyos.com/cn/docs/develop/apiref/audiomanager-0000001054598151#ZH-CN_TOPIC_0000001054598151__a556137764c5bf784972ba79303720fc3)

#### [h2]UnloadAdapter
    
    void(* AudioManager::UnloadAdapter) (struct [AudioManager](https://device.harmonyos.com/cn/docs/develop/apiref/audiomanager-0000001054598151) *manager, struct [AudioAdapter](https://device.harmonyos.com/cn/docs/develop/apiref/audioadapter-0000001054879522) *adapter)

**Description:**

Unloads the driver of an audio adapter. 

**Parameters:**

Name | Description  
---|---  
manager | Indicates the pointer to the audio adapter manager to operate.   
adapter | Indicates the pointer to the audio adapter whose driver will be unloaded.   
  
**See also:**

[LoadAdapter](https://device.harmonyos.com/cn/docs/develop/apiref/audiomanager-0000001054598151#ZH-CN_TOPIC_0000001054598151__ab090e9c760a2888b55acc7baa4222ccb)
