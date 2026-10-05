---
name: document/cn/HiCar-References/open-audio-record-0000001050163943
title: OpenAudioRecord
uri: https://developer.huawei.com/consumer/cn/doc/HiCar-References/open-audio-record-0000001050163943
---

# OpenAudioRecord

|Function|
|:--------------------------------------------------------------------------------------------------------------------------------|
|int32_t (*OpenAudioRecord)(const char* id, uint32_t idLen, int32_t sessionId, int32_t inputSource, const DMSDPProfiles* profiles)|
|初始化MIC设备。|

|**Parameter name**|**Parameter type**|**Parameter desc**|
|:-----------------|:-------------------------------------------------------------------------------------------------------------------|:-----------------------|
|*id|const char|MIC ID。|
|idLen|uint32_t|MIC ID长度。|
|sessionId|int32_t|Session ID。|
|inputSource|int32_t|数据来源，详见DMSDPAudioSource。|
|* profiles|const [DMSDPProfiles](https://developer.huawei.com/consumer/cn/doc/HiCar-References/dmsdp-profiles-0000001052490527)|profiles。|

**Return**

|Type|Desc|
|:------|:--------------------------------|
|int32_t|返回结果： * 0：初始化设备成功 * <0：初始化设备失败/异常|

