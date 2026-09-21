---
name: document/cn/games-references/getrtmchannelhistorymessagesresult-minigame-0000002358963640
title: GetRtmChannelHistoryMessagesResult
uri: https://developer.huawei.com/consumer/cn/doc/games-references/getrtmchannelhistorymessagesresult-minigame-0000002358963640
---

# GetRtmChannelHistoryMessagesResult

|Interface Info|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|export interface GetRtmChannelHistoryMessagesResult extends [ErrorResult](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-errorresult-minigame-0000002358963652) 查询RTM频道历史消息回调结果对象。|

## Property Summary

|Name|Type|Description|
|:--------------|:--------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
|channelId|string|频道ID。|
|channelMessages|Array<[RtmChannelHistoryMessage](https://developer.huawei.com/consumer/cn/doc/games-references/rtmchannelhistorymessage-minigame-0000002392643653)>|频道历史消息。|
|code|number|返回码。|
|msg|string|返回信息。|

