---
name: document/cn/AppGallery-connect-References/getrtmchannelplayerpropertiesreq-harmonyos-0000001786429794
title: GetRtmChannelPlayerPropertiesReq
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/getrtmchannelplayerpropertiesreq-harmonyos-0000001786429794
---

# GetRtmChannelPlayerPropertiesReq

|Interface Info|
|:---------------------------------------------------------------------|
|export interface GetRtmChannelPlayerPropertiesReq 查询RTM频道内玩家自定义属性请求对象。|

## Property Summary

|Name|Type|Mandatory/Optional|Description|
|:--------|:------------|:-----------------|:----------------------------|
|channelId|string|Mandatory|频道ID，仅支持数字(0-9)和字母 (A-Z,a-z)。|
|openIds|Array<string>|Mandatory|玩家ID集合。最多支持100人。|

