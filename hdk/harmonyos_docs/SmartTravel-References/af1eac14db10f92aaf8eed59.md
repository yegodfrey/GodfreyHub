---
name: document/cn/SmartTravel-References/dmsdp-audio-business-ctrl-data-0000001052969213
title: DMSDPAudioBussinessCtrlData
uri: https://developer.huawei.com/consumer/cn/doc/SmartTravel-References/dmsdp-audio-business-ctrl-data-0000001052969213
source: portal
---

# DMSDPAudioBussinessCtrlData

Name | Type | Description  
---|---|---  
type | [DMSDPAudioDevice](https://developer.huawei.com/consumer/cn/doc/development/SmartTravel-References/dmsdp-audio-type-0000001052969215) | Type of the virtual audio device.  
*id | const char | Audio device ID, such as **mic1** or **speaker1**.  
idLen | uint32_t | Length of the audio device ID.  
sessionId | uint32_t | ID of a session when the audio device is used.  
*data | char | Content of the service control data.  
dataLen | uint32_t | Content length of the service control data.
