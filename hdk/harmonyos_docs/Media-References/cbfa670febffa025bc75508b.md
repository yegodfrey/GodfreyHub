---
name: document/cn/Media-References/hwaudioqueuemanager-0000001050431731
title: HwAudioQueueManager
uri: https://developer.huawei.com/consumer/cn/doc/Media-References/hwaudioqueuemanager-0000001050431731
---

# HwAudioQueueManager

|Class Info|
|:---------------------------------------------------------------------|
|public final class HwAudioQueueManager 音频队列管理，例如：展示播放列表、删除列表中指定位置的音频等。|

## Public Constructor Summary

|Constructor Name|
|:--------------------------------------------------|
|[HwAudioQueueManager](#section3896mcpsimp)() 默认构造器。|

## Public Method Summary

|Qualifier and Type|Method Name and Description|
|:----------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|int|[getCurrentIndex](#section3296mcpsimp)() 获取当前音频在列表中的位置。|
|[HwAudioPlayItem](https://developer.huawei.com/consumer/cn/doc/development/Media-References/hwaudioplayitem-0000001050299080)|[getCurrentPlayItem](#section3331mcpsimp)() 获取当前音频对象。|
|void|[removeListByIndex](#section3366mcpsimp)(int index) 删除列表中指定位置的音频。|
|void|[removeListByItem](#section3421mcpsimp)([HwAudioPlayItem](https://developer.huawei.com/consumer/cn/doc/development/Media-References/hwaudioplayitem-0000001050299080) item) 删除列表中指定的音频。|
|void|[setPlaylist](#section3476mcpsimp)(List<[HwAudioPlayItem](https://developer.huawei.com/consumer/cn/doc/development/Media-References/hwaudioplayitem-0000001050299080)> playlist) 设置播放列表。|
|List<[HwAudioPlayItem](https://developer.huawei.com/consumer/cn/doc/development/Media-References/hwaudioplayitem-0000001050299080)>|[getAllPlaylist](#section3531mcpsimp)() 获取播放列表。|
|void|[addPlayItem](#section3566mcpsimp)([HwAudioPlayItem](https://developer.huawei.com/consumer/cn/doc/development/Media-References/hwaudioplayitem-0000001050299080) item, int position) 在播放列表指定位置添加音频。|
|void|[addPlayItemList](#section3626mcpsimp)(List<[HwAudioPlayItem](https://developer.huawei.com/consumer/cn/doc/development/Media-References/hwaudioplayitem-0000001050299080)> itemList, int position) 在播放列表指定位置添加播放列表。|
|boolean|[isQueueEmpty](#section177971222101917)() 判断当前播放队列是否为空。|

## Public Constructors

### HwAudioQueueManager

|Constructor|
|:----------------------------------|
|public HwAudioQueueManager() 默认构造器。|

## Public Methods

### getCurrentIndex

|Method|
|:------------------------------------------|
|public int getCurrentIndex() 获取当前音频在列表中的位置。|

**Return** **s**

|Type|Description|
|:---|:-----------------------|
|int|当前音频在列表中的位置，取值为大于等于0的整数。|

### getCurrentPlayItem

|Method|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public [HwAudioPlayItem](https://developer.huawei.com/consumer/cn/doc/development/Media-References/hwaudioplayitem-0000001050299080) getCurrentPlayItem() 获取当前音频对象。|

**Return** **s**

|Type|Description|
|:--------------|:----------|
|HwAudioPlayItem|当前音频对象。|

### removeListByIndex

|Method|
|:-----------------------------------------------------|
|public void removeListByIndex(int index) 删除列表中指定位置的音频。|

**Parameters**

|Name|Description|
|:----|:----------------|
|index|指定位置，取值为大于等于0的整数。|

### removeListByItem

|Method|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public void removeListByItem([HwAudioPlayItem](https://developer.huawei.com/consumer/cn/doc/development/Media-References/hwaudioplayitem-0000001050299080) item) 删除列表中指定的音频。|

**Parameters**

|Name|Description|
|:---|:----------|
|item|指定对象。|

### setPlaylist

|Method|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public void setPlaylist(List<[HwAudioPlayItem](https://developer.huawei.com/consumer/cn/doc/development/Media-References/hwaudioplayitem-0000001050299080)> playlist) 设置播放列表。|

**Parameters**

|Name|Description|
|:-------|:----------|
|playlist|播放列表。|

### getAllPlaylist

|Method|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public List<[HwAudioPlayItem](https://developer.huawei.com/consumer/cn/doc/development/Media-References/hwaudioplayitem-0000001050299080)> getAllPlaylist() 获取播放列表。|

**Return** **s**

|Type|Description|
|:----------------------------------------------------------------------------------------------------------------------------------|:----------|
|List<[HwAudioPlayItem](https://developer.huawei.com/consumer/cn/doc/development/Media-References/hwaudioplayitem-0000001050299080)>|播放列表。|

### addPlayItem

|Method|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public void addPlayItem([HwAudioPlayItem](https://developer.huawei.com/consumer/cn/doc/development/Media-References/hwaudioplayitem-0000001050299080) item, int position) 在播放列表指定位置添加音频。|

**Parameters**

|Name|Description|
|:-------|:----------------|
|item|音频对象。|
|position|指定位置，取值为大于等于0的整数。|

### addPlayItemList

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public void addPlayItemList(List<[HwAudioPlayItem](https://developer.huawei.com/consumer/cn/doc/development/Media-References/hwaudioplayitem-0000001050299080)> itemList, int position) 在播放列表指定位置添加播放列表。|

**Parameters**

|Name|Description|
|:-------|:----------------|
|itemList|播放列表。|
|position|指定位置，取值为大于等于0的整数。|

### isQueueEmpty

|Method|
|:------------------------------------------|
|public boolean isQueueEmpty() 判断当前播放队列是否为空。|

**Return** **s**

|Type|Description|
|:------|:--------------------------------------------|
|boolean|判断当前播放队列是否为空。 * true：播放队列为空。 * false：播放队列不为空。|

