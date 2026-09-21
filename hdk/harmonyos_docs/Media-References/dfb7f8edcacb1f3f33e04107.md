---
name: document/cn/Media-References/hveaudiolane-0000001201690709
title: HVEAudioLane
uri: https://developer.huawei.com/consumer/cn/doc/Media-References/hveaudiolane-0000001201690709
---

# HVEAudioLane

|Class Info|
|:--------------------------------|
|public class HVEAudioLane 音频资源泳道。|

## Public Method Summary

|Qualifier and Type|Method Name and Description|
|:------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------------------------------------|
|[HVEAudioAsset](https://developer.huawei.com/consumer/cn/doc/Media-References/hveaudioasset-0000001156050672)|[appendAudioAsset](#section2072316612237)(String path) 在音频泳道尾部添加音频资源。|
|[HVEAudioAsset](https://developer.huawei.com/consumer/cn/doc/Media-References/hveaudioasset-0000001156050672)|[appendAudioAsset](#section10983152271920)(String path, long startTime) 在音频泳道指定时间点添加音频资源。|
|boolean|[changeAssetSpeed](#section2064212411214)(int index, float factor) 改变资源的播放速度。|
|boolean|[replaceAssetPath](#section1955165682215)(String path, int index) 替换泳道上指定索引资源的路径。|

## Public Methods

### appendAudioAsset(String path)

|Method|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public [HVEAudioAsset](https://developer.huawei.com/consumer/cn/doc/Media-References/hveaudioasset-0000001156050672) appendAudioAsset(String path) 在音频泳道尾部添加音频资源。|

**Parameters**

|Name|Description|
|:---|:----------|
|path|音频资源的本地路径。|

**Return** **s**

|Type|Description|
|:------------------------------------------------------------------------------------------------------------|:-------------------|
|[HVEAudioAsset](https://developer.huawei.com/consumer/cn/doc/Media-References/hveaudioasset-0000001156050672)|音频资源实例。如果路径非法返回null。|

### appendAudioAsset(String path, long startTime)

|Method|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public [HVEAudioAsset](https://developer.huawei.com/consumer/cn/doc/Media-References/hveaudioasset-0000001156050672) appendAudioAsset(String path, long startTime) 在音频泳道指定时间点添加音频资源。|

**Parameters**

|Name|Description|
|:--------|:--------------|
|path|音频资源的本地路径。|
|startTime|泳道上的指定位置。单位：ms。|

**Return** **s**

|Type|Description|
|:------------------------------------------------------------------------------------------------------------|:----------------------------|
|[HVEAudioAsset](https://developer.huawei.com/consumer/cn/doc/Media-References/hveaudioasset-0000001156050672)|音频资源实例。如果路径非法或者指定位置非法，返回null。|

### changeAssetSpeed

|Method|
|:------------------------------------------------------------------|
|public boolean changeAssetSpeed(int index, float factor) 改变资源的播放速度。|

**Parameters**

|Name|Description|
|:-----|:----------------------|
|index|资源索引。|
|factor|播放速度。建议取值范围：[0.5, 5.0]。|

**Return** **s**

|Type|Description|
|:------|:------------------|
|boolean|成功返回true，失败返回false。|

### replaceAssetPath

|Method|
|:----------------------------------------------------------------------|
|public boolean replaceAssetPath(String path, int index) 替换泳道上指定索引资源的路径。|

**Parameters**

|Name|Description|
|:----|:----------|
|path|新的资源路径。|
|index|资源的索引。|

**Return** **s**

|Type|Description|
|:------|:------------------|
|boolean|成功返回true，失败返回false。|

