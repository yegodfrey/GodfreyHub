---
name: document/cn/HiCar-References/update-service-action-0000001058966851
title: UpdateServiceAction
uri: https://developer.huawei.com/consumer/cn/doc/HiCar-References/update-service-action-0000001058966851
---

# UpdateServiceAction

|Function|
|:-----------------------------------------------------------------------------------------|
|int32_t (*UpdateServiceAction)(const char *id, uint32_t idLen, DMSDPServiceAction *action)|
|车机向HiCar SDK通知事件，比如音频焦点变化，添加Camera/Audio等。|

**Parameters**

|**Parameter name**|**Parameter type**|Parameter desc|
|:-----------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------|
|*id|char|虚拟设备服务的id字符串，比如"speaker1"|
|idLen|uint32_t|虚拟设备服务的id字符串长度。|
|*action|[DMSDPServiceAction](https://developer.huawei.com/consumer/cn/doc/HiCar-References/dmsdp-service-action-0000001058848668#ZH-CN_TOPIC_0000001058848668)|上报的事件类型，比如音频焦点变化，添加Camera/Audio等。|

**Return**

|Type|Desc|
|:------|:--------|
|int32_t|上报事件是否成功。|

