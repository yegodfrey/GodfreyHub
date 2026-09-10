---
name: document/cn/games-references/getrtmchannelinforeq-minigame-0000002359123536
title: GetRtmChannelInfoReq
uri: https://developer.huawei.com/consumer/cn/doc/games-references/getrtmchannelinforeq-minigame-0000002359123536
---

# GetRtmChannelInfoReq

|Interface Info|
|:---------------------------------------------------|
|export interface GetRtmChannelInfoReq 查询RTM频道信息请求对象。|

#### Property Summary

|Name|Type|Mandatory/Optional|Description|
|:--------------|:------|:-----------------|:----------------------------------------|
|channelId|string|Mandatory|频道ID，仅支持数字(0-9)和字母 (A-Z,a-z)。|
|isReturnMembers|boolean|Optional|是否返回频道成员。 * true：返回 * false：不返回 默认为false。|

