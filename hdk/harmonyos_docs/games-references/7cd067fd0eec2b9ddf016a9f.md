---
name: document/cn/games-references/getrtmchannelinforesult-harmonyos-0000002359123460
title: GetRtmChannelInfoResult
uri: https://developer.huawei.com/consumer/cn/doc/games-references/getrtmchannelinforesult-harmonyos-0000002359123460
---

# GetRtmChannelInfoResult

|Interface Info|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|export interface GetRtmChannelInfoResult extends [ErrorResult](https://developer.huawei.com/consumer/cn/doc/games-references/errorresult-harmonyos-0000002392643577) 查询RTM频道信息回调结果对象。|

#### Property Summary

|Name|Type|Description|
|:----------|:---------------------------------------------------------------------------------------------------------------------------------------------|:----------|
|channelId|string|频道ID。|
|memberCount|number|频道人数。|
|memberInfos|Array\<[RtmChannelMemberInfo](https://developer.huawei.com/consumer/cn/doc/games-references/rtmchannelmemberinfo-harmonyos-0000002358963576)\>|玩家信息。|
|code|number|返回码。|
|msg|string|返回信息。|

