---
name: document/cn/Media-References/onplaycompletedlistener-0000001160636867
title: OnPlayCompletedListener
uri: https://developer.huawei.com/consumer/cn/doc/Media-References/onplaycompletedlistener-0000001160636867
---

# OnPlayCompletedListener

|Interface Info|
|:-------------------------------------------------------|
|public interface OnPlayCompletedListener 播放监听播放完成事件的接口类。|

## Public Method Summary

|Qualifier and Type|Method Name and Description|
|:-----------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|void|[onPlayCompleted](#section12371733192019)([MediaPlayer](https://developer.huawei.com/consumer/cn/doc/development/Media-References/mediaplayer-0000001110596458) mp, int param1, int param2, [MediaParcel](https://developer.huawei.com/consumer/cn/doc/development/Media-References/mediaparcel-0000001110692776) parcel) 当播放完毕时，[MediaPlayer](https://developer.huawei.com/consumer/cn/doc/development/Media-References/mediaplayer-0000001110596458)执行该函数。|

## Public Methods

### onPlayCompleted

|Method|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public void onPlayCompleted([MediaPlayer](https://developer.huawei.com/consumer/cn/doc/development/Media-References/mediaplayer-0000001110596458) mp, int param1, int param2, [MediaParcel](https://developer.huawei.com/consumer/cn/doc/development/Media-References/mediaparcel-0000001110692776) parcel) 当资源播放完毕时，[MediaPlayer](https://developer.huawei.com/consumer/cn/doc/development/Media-References/mediaplayer-0000001110596458)执行该函数。|

**Parameters**

|Name|Description|
|:-----|:--------------------------------------------------------------------------------------------------------------------------|
|mp|监听的[MediaPlayer](https://developer.huawei.com/consumer/cn/doc/development/Media-References/mediaplayer-0000001110596458)对象。|
|param1|上报参数1。|
|param2|上报参数2。|
|parcel|上报的序列化对象。|

