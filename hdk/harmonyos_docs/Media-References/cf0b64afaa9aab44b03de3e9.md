---
name: document/cn/Media-References/onstartcompletedlistener-0000001114910256
title: OnStartCompletedListener
uri: https://developer.huawei.com/consumer/cn/doc/Media-References/onstartcompletedlistener-0000001114910256
---

# OnStartCompletedListener

|Interface Info|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public interface OnStartCompletedListener 监听[start](https://developer.huawei.com/consumer/cn/doc/development/Media-References/mediaplayer-0000001110596458#section585394815162)()完成的接口类。|

## Public Method Summary

|Qualifier and Type|Method Name and Description|
|:-----------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|void|[onStartCompleted](#section12371733192019)([MediaPlayer](https://developer.huawei.com/consumer/cn/doc/development/Media-References/mediaplayer-0000001110596458) mp, int param1, int param2, [MediaParcel](https://developer.huawei.com/consumer/cn/doc/development/Media-References/mediaparcel-0000001110692776) parcel) 当[start](https://developer.huawei.com/consumer/cn/doc/development/Media-References/mediaplayer-0000001110596458#section585394815162)()接口执行完成时，[MediaPlayer](https://developer.huawei.com/consumer/cn/doc/development/Media-References/mediaplayer-0000001110596458)执行该函数。|

## Public Methods

### onStartCompleted

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public void onStartCompleted([MediaPlayer](https://developer.huawei.com/consumer/cn/doc/development/Media-References/mediaplayer-0000001110596458) mp, int param1, int param2, [MediaParcel](https://developer.huawei.com/consumer/cn/doc/development/Media-References/mediaparcel-0000001110692776) parcel) 当[start](https://developer.huawei.com/consumer/cn/doc/development/Media-References/mediaplayer-0000001110596458#section585394815162)()接口执行完成时，[MediaPlayer](https://developer.huawei.com/consumer/cn/doc/development/Media-References/mediaplayer-0000001110596458)执行该函数。|

**Parameters**

|Name|Description|
|:-----|:--------------------------------------------------------------------------------------------------------------------------|
|mp|监听的[MediaPlayer](https://developer.huawei.com/consumer/cn/doc/development/Media-References/mediaplayer-0000001110596458)对象。|
|param1|上报参数1。|
|param2|上报参数2。|
|parcel|上报的序列化对象。|

