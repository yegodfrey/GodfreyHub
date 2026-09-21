---
name: document/cn/AppGallery-connect-References/getrtmchannelhistorymessagesreq-android-0000001698768670
title: GetRtmChannelHistoryMessagesReq
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/getrtmchannelhistorymessagesreq-android-0000001698768670
---

# GetRtmChannelHistoryMessagesReq

|Class Info|
|:----------------------------------------------------------|
|public class GetRtmChannelHistoryMessagesReq 查询RTM频道历史消息请求。|

## Method Summary

|Qualifier and Type|Method Name and Description|
|:-----------------|:------------------------------------------------------------------|
|void|[setChannelId](#section59255148819)(String channelId) 设置频道ID。|
|void|[setStartTime](#section115121135103218)(long startTime) 设置查询消息开始时间。|
|void|[setCount](#section822884412383)(int count) 设置查询消息数量。|

## Methods

### setChannelId

|Method|
|:-------------------------------------------------|
|public void setChannelId(String channelId) 设置频道ID。|

**Parameters**

|Name|Description|
|:--------|:----------------------------|
|channelId|频道ID，仅支持数字(0-9)和字母 (A-Z,a-z)。|

### setStartTime

|Method|
|:---------------------------------------------------|
|public void setStartTime(long startTime) 设置查询消息开始时间。|

**Parameters**

|Name|Description|
|:--------|:-------------------------------------|
|startTime|查询消息的开始时间戳，大于等于0，单位：毫秒。不传或传0即查询所有时间范围。|

### setCount

|Method|
|:----------------------------------------|
|public void setCount(int count) 设置查询消息数量。|

**Parameters**

|Name|Description|
|:----|:----------------------------|
|count|查询消息数量，大于等于0。不传或传0即查询频道内所有消息。|

