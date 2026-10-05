---
name: document/cn/HiCar-References/send-data-0000001052492155
title: SendData
uri: https://developer.huawei.com/consumer/cn/doc/HiCar-References/send-data-0000001052492155
---

# SendData

|Function|
|:-------------------------------------------------------------------------------|
|int (*SendData)(const unsigned char *data, int dataLen, const void *channelInfo)|
|发送数据。|

**Parameters**

|**Parameter name**|**Parameter type**|Parameter desc|
|:-----------------|:------------------|:-------------|
|*data,|const unsigned char|待发送的字节数据。|
|dataLen|int|待发送的字节数据长度。|
|*channelInfo|const void|通道模型。|

**Return**

|Type|Desc|
|:---|:-------------------|
|int|返回结果： * 0：成功 * 非0：失败|

