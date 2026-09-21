---
name: document/cn/AppGallery-connect-References/rtmchannelmemberinfo-android-0000001698768686
title: RtmChannelMemberInfo
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/rtmchannelmemberinfo-android-0000001698768686
---

# RtmChannelMemberInfo

|Class Info|
|:--------------------------------------------|
|public class RtmChannelMemberInfo RTM频道内成员信息。|

## Method Summary

|Qualifier and Type|Method Name and Description|
|:------------------|:--------------------------------------------------|
|String|[getOpenId](#section59255148819)() 获取玩家ID。|
|int|[getStatus](#section14940161610714)() 获取RTM连接状态。|
|Map<String, String>|[getPlayerProperties](#section8668315814)() 获取玩家属性。|

## Methods

### getOpenId

|Method|
|:--------------------------------|
|public String getOpenId() 获取玩家ID。|

**Return**

|Type|Description|
|:-----|:----------|
|String|玩家ID。|

### getStatus

|Method|
|:--------------------------------|
|public int getStatus() 获取RTM连接状态。|

**Return**

|Type|Description|
|:---|:-----------------------|
|int|RTM连接状态。 * 0：未连接 * 1：已连接|

### getPlayerProperties

|Method|
|:-------------------------------------------------------|
|public Map<String, String> getPlayerProperties() 获取玩家属性。|

**Return**

|Type|Description|
|:------------------|:----------|
|Map<String, String>|玩家属性。|

