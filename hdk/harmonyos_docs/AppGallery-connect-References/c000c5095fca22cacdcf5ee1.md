---
name: document/cn/AppGallery-connect-References/getrtmchannelhistorymessagesreq-csharp-0000001721868094
title: GetRtmChannelHistoryMessagesReq
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/getrtmchannelhistorymessagesreq-csharp-0000001721868094
---

# GetRtmChannelHistoryMessagesReq

|Class Info|
|:----------------------------------------------------------|
|public class GetRtmChannelHistoryMessagesReq 查询RTM频道历史消息请求。|

## Property Summary

|Name|Type|Description|
|:--------|:-----|:------------------------------------|
|ChannelId|string|频道ID，仅支持数字(0-9)和字母 (A-Z,a-z)。|
|StartTime|long|查询消息的开始时间，大于等于0，单位：毫秒。不传或传0即查询所有时间范围。|
|Count|int|查询消息数量，大于等于0。不传或传0即查询频道内所有消息。|

