---
name: document/cn/games-references/gamemme-subscribertmchannelreq-harmonyos-0000002392643517
title: SubscribeRtmChannelReq
uri: https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-subscribertmchannelreq-harmonyos-0000002392643517
---

# SubscribeRtmChannelReq

|Interface Info|
|:---------------------------------------------------|
|export interface SubscribeRtmChannelReq 订阅RTM频道请求对象。|

## Property Summary

|Name|Type|Mandatory/Optional|Description|
|:---------------|:--------------------|:-----------------|:----------------------------------------------|
|channelId|string|Mandatory|频道ID，仅支持数字(0-9)和字母 (A-Z,a-z)。|
|playerProperties|{[k: string]: string}|Optional|玩家自定义属性。属性key最长100个字节，属性value最长1948个字节。最多可设置5组。|

