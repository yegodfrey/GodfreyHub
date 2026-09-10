---
name: document/cn/Media-References/hveaudioasset-0000001156050672
title: HVEAudioAsset
uri: https://developer.huawei.com/consumer/cn/doc/Media-References/hveaudioasset-0000001156050672
---

# HVEAudioAsset

|Class Info|
|:-------------------------------|
|public class HVEAudioAsset 音频资源。|

#### Public Method Summary

|Qualifier and Type|Method Name and Description|
|:-----------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|int|[getFadeInTime](#section352510451505)() 获取淡入时长。单位：ms。|
|int|[getFadeOutTime](#section7435119213)() 获取淡出时长。单位：ms。|
|long|[getOriginLength](#section134651529118)() 获取音频资源的原始时长。单位：ms。|
|float|[getSpeed](#section17153919227)() 获取倍速。|
|void|[getThumbNail](#section49130571336)(long startTime, long endTime, [HVEAudioVolumeCallback](https://developer.huawei.com/consumer/cn/doc/Media-References/hveaudiovolumecallback-0000001201930663) callback) 获取音频的波形图。|
|float|[getVolume](#section3232124913312)() 获取音量。|
|void|[setFadeInTime](#section73961516254)(int time) 设置淡入时长。单位：ms。|
|void|[setFadeOutTime](#section198194616914)(int time) 设置淡出时长。单位：ms。|
|void|[setSpeed](#section1397624113104)(float factor) 设置倍速。|
|void|[setVolume](#section159856719118)(float volume) 设置音量。|

#### Public Methods

#### getFadeInTime

|Method|
|:---------------------------------|
|public int getFadeInTime() 获取淡入时长。|

Returns  

|Type|Description|
|:---|:----------|
|int|淡入时长。单位：ms。|

#### getFadeOutTime

|Method|
|:----------------------------------|
|public int getFadeOutTime() 获取淡出时长。|

Returns  

|Type|Description|
|:---|:----------|
|int|淡出时长。单位：ms。|

#### getOriginLength

|Method|
|:-----------------------------------------|
|public long getOriginLength() 获取音频资源的原始时长。|

Returns  

|Type|Description|
|:---|:---------------|
|long|音频资源的原始时长。单位：ms。|

#### getSpeed

|Method|
|:----------------------------|
|public float getSpeed() 获取倍速。|

Returns  

|Type|Description|
|:----|:----------|
|float|表示倍速关系。|

#### getThumbNail

|Method|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public void getThumbNail(long startTime, long endTime, [HVEAudioVolumeCallback](https://developer.huawei.com/consumer/cn/doc/Media-References/hveaudiovolumecallback-0000001201930663) callback) 获取音频的波形图。|

Parameters  

|Name|Description|
|:--------|:----------|
|startTime|起始时间。单位：ms。|
|endTime|结束时间。单位：ms。|
|callback|音频波形图回调。|

#### getVolume

|Method|
|:-----------------------------|
|public float getVolume() 获取音量。|

Returns  

|Type|Description|
|:----|:----------|
|float|音量值。|

#### setFadeInTime

|Method|
|:------------------------------------------|
|public void setFadeInTime(int time) 设置淡入时长。|

Parameters  

|Name|Description|
|:---|:----------|
|time|淡入时长。单位：ms。|

#### setFadeOutTime

|Method|
|:-------------------------------------------|
|public void setFadeOutTime(int time) 设置淡出时长。|

Parameters  

|Name|Description|
|:---|:----------|
|time|淡出时长。单位：ms。|

#### setSpeed

|Method|
|:---------------------------------------|
|public void setSpeed(float factor) 设置倍速。|

Parameters  

|Name|Description|
|:-----|:----------|
|factor|倍速关系。|

#### setVolume

|Method|
|:----------------------------------------|
|public void setVolume(float volume) 设置音量。|

Parameters  

|Name|Description|
|:-----|:----------|
|volume|音量。|

