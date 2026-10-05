---
name: document/cn/SmartTravel-References/close-audio-record-custom-0000001561282980
title: closeAudioRecordCustom
uri: https://developer.huawei.com/consumer/cn/doc/SmartTravel-References/close-audio-record-custom-0000001561282980
source: portal
---

# closeAudioRecordCustom  
  
Function  
---  
int closeAudioRecordCustom(int sessionId)  
Callback for the HiCar SDK to obtain PCM data from the HMI app on the head unit, if the recording is successful on the head unit.  
  
**Parameters**

Parameter Name | Parameter Type | Description  
---|---|---  
sessionId | int | Recording ID.  
  
**Return**

Type | Description  
---|---  
int | Whether resources are successfully released when the recording is finished: **0** : yes **-1** : no
