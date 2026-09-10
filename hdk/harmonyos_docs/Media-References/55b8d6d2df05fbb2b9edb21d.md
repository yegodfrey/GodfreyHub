---
name: document/cn/Media-References/hwaudioplayermanager-0000001050189514
title: HwAudioPlayerManager
uri: https://developer.huawei.com/consumer/cn/doc/Media-References/hwaudioplayermanager-0000001050189514
---

# HwAudioPlayerManager

|Class Info|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public final class HwAudioPlayerManager 音频播放管理。 说明： Audio Kit可支持384kHz/24bit的高品质音频编码格式解析和播放，不支持高清品质播放的音频格式则返回播放失败，音频格式包括m4a/aac/amr/imy/wav/ogg/rtttl/mp3/ape/flac。|

#### Public Method Summary

|Qualifier and Type|Method Name and Description|
|:-----------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|void|[playList](#section2508mcpsimp)(List\<[HwAudioPlayItem](https://developer.huawei.com/consumer/cn/doc/development/Media-References/hwaudioplayitem-0000001050299080)\> list, int startIndex, int offsetTime) 播放传入的列表中的音频。|
|void|[play](#section2573mcpsimp)() 播放音频。|
|void|[play](#section2608mcpsimp)(int position) 播放列表中指定位置的音频。|
|void|[play](#section2663mcpsimp)(int position, int offsetTime) 播放列表中指定位置、指定进度的音频。|
|void|[pause](#section2723mcpsimp)() 暂停播放。|
|void|[stop](#section2758mcpsimp)() 停止播放，取消通知栏。|
|void|[playPre](#section2793mcpsimp)() 播放上一首。|
|void|[playNext](#section2828mcpsimp)() 播放下一首。|
|boolean|[isPlaying](#section2863mcpsimp)() 是否正在播放。|
|boolean|[isBuffering](#section2898mcpsimp)() 是否正在缓冲。|
|void|[seekTo](#section2933mcpsimp)(int pos) 播放跳转到指定进度。|
|void|[setVolume](#section2968mcpsimp)(int volume) 设置音量大小。|
|void|[setPlayMode](#section3023mcpsimp)(int mode) 设置播放模式。|
|int|[getPlayMode](#section3078mcpsimp)() 获取播放模式。|
|long|[getOffsetTime](#section3113mcpsimp)() 获取播放进度。|
|int|[getBufferPercent](#section3148mcpsimp)() 获取缓冲进度。|
|long|[getDuration](#section3183mcpsimp)() 获取播放时长。|
|void|[setPlaySpeed](#section10869144119583)(float playSpeed) 设置播放倍速。|
|float|[getPlaySpeed](#section030113209573)() 获取播放倍速。|

#### Public Methods

#### playList

|Method|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public void playList(List\<[HwAudioPlayItem](https://developer.huawei.com/consumer/cn/doc/development/Media-References/hwaudioplayitem-0000001050299080)\> list, int startIndex, int offsetTime) 播放传入的列表中的音频。|

Parameters  

|Name|Description|
|:---------|:--------------------------|
|list|播放列表。|
|startIndex|播放列表中待播放歌曲的索引值，取值为大于等于0的整数。|
|offsetTime|待播放歌曲的起播位置，单位：ms。|

#### play

|Method|
|:--------------------------------------------------------------------------------------------------------------------|
|public void play() 播放音频。 说明： 调用[play](#section2573mcpsimp)()方法播放歌曲前，不需要调用[pause](#section2723mcpsimp)()方法暂停当前正在播放的歌曲。|

#### play(int position)

|Method|
|:-------------------------------------------|
|public void play(int position) 播放列表中指定位置的音频。|

Parameters  

|Name|Description|
|:-------|:----------------|
|position|指定位置，取值为大于等于0的整数。|

#### play(int position, int offsetTime)

|Method|
|:----------------------------------------------------------------|
|public void play(int position, int offsetTime) 播放列表中指定位置、指定进度的音频。|

Parameters  

|Name|Description|
|:---------|:----------------|
|position|指定位置，取值为大于等于0的整数。|
|offsetTime|指定进度，单位：ms。|

#### pause

|Method|
|:------------------------|
|public void pause() 暂停播放。|

#### stop

|Method|
|:-----------------------------|
|public void stop() 停止播放，取消通知栏。|

#### playPre

|Method|
|:---------------------------|
|public void playPre() 播放上一首。|

#### playNext

|Method|
|:----------------------------|
|public void playNext() 播放下一首。|

#### isPlaying

|Method|
|:---------------------------------|
|public boolean isPlaying() 是否正在播放。|

Returns  

|Type|Description|
|:------|:--------------------------------|
|boolean|是否正在播放。 * true：播放状态 * false：非播放状态|

#### isBuffering

|Method|
|:-----------------------------------|
|public boolean isBuffering() 是否正在缓冲。|

Returns  

|Type|Description|
|:------|:--------------------------------|
|boolean|是否正在缓冲。 * true：缓冲状态 * false：非缓冲状态|

#### seekTo

|Method|
|:-------------------------------------|
|public void seekTo(int pos) 播放跳转到指定进度。|

Parameters  

|Name|Description|
|:---|:----------|
|pos|指定进度，单位：ms。|

#### setVolume

|Method|
|:----------------------------------------|
|public void setVolume(int volume) 设置音量大小。|

Parameters  

|Name|Description|
|:-----|:-------------------------------|
|volume|音量大小，取值范围：\[0, 100\]内的整数，默认值100。|

#### setPlayMode

|Method|
|:----------------------------------------|
|public void setPlayMode(int mode) 设置播放模式。|

Parameters  

|Name|Description|
|:---|:------------------------------------------------------|
|mode|播放模式，包括： * 0：顺序模式 * 1：随机模式 * 2：列表循环模式 * 3：单曲循环模式 默认值为0。|

#### getPlayMode

|Method|
|:-------------------------------|
|public int getPlayMode() 获取播放模式。|

Returns  

|Type|Description|
|:---|:-----------------------------------------------|
|int|播放模式，包括： * 0：顺序模式 * 1：随机模式 * 2：列表循环模式 * 3：单曲循环模式|

#### getOffsetTime

|Method|
|:----------------------------------|
|public long getOffsetTime() 获取播放进度。|

Returns  

|Type|Description|
|:---|:----------|
|long|播放进度，单位：ms。|

#### getBufferPercent

|Method|
|:------------------------------------|
|public int getBufferPercent() 获取缓冲进度。|

Returns  

|Type|Description|
|:---|:----------|
|int|缓冲进度，单位：ms。|

#### getDuration

|Method|
|:--------------------------------|
|public long getDuration() 获取播放时长。|

Returns  

|Type|Description|
|:---|:----------|
|long|播放时长，单位：ms。|

#### setPlaySpeed

|Method|
|:------------------------------------------------|
|public void setPlaySpeed(float playSpeed) 设置播放倍速。|

Parameters  

|Name|Description|
|:--------|:--------------------------|
|playSpeed|播放倍速，取值范围：(0, 2\]的浮点数，默认值1。|

#### getPlaySpeed

|Method|
|:----------------------------------|
|public float getPlaySpeed() 获取播放倍速。|

Returns  

|Type|Description|
|:----|:----------|
|float|播放倍速。|

