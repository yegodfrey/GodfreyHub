---
name: document/cn/HMSCore-References/videooperator-0000001050064892
title: VideoOperator
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-References/videooperator-0000001050064892
---

# VideoOperator

|Interface Info|
|:------------------------------------------------------|
|public interface VideoOperator 视频控制类，实现对视频的播放、暂停、静音等控制。|

#### Nested Class Summary

|Qualifier and Type|Class Name and Description|
|:--------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------|
|abstract static class|[VideoOperator.VideoLifecycleListener](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/videolifecyclelistener-0000001050066841) 视频生命周期监听器。|

#### Public Method Summary

|Qualifier and Type|Method Name and Description|
|:----------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|float|[getAspectRatio](#section619116332614)() 获取视频宽高比。|
|[VideoOperator.VideoLifecycleListener](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/videolifecyclelistener-0000001050066841)|[getVideoLifecycleListener](#section138121415308)() 获取视频生命周期监听器。|
|boolean|[hasVideo](#section1455925212304)() 广告内容是否包含视频。|
|boolean|[isCustomizeOperateEnabled](#section17869182053119)() 视频广告是否使用自定义播放器组件。|
|boolean|[isMuted](#section42921622113216)() 视频是否处于静音状态。|
|void|[mute](#section43452453319)(boolean mute) 如果允许使用自定义播放器组件，视频静音状态使能开关。|
|void|[pause](#section1649320592338)() 如果允许使用自定义播放器组件，暂停视频。|
|void|[play](#section72593518344)() 如果允许使用自定义播放器组件，播放视频。|
|void|[setVideoLifecycleListener](#section146161726203510)([VideoOperator.VideoLifecycleListener](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/videolifecyclelistener-0000001050066841) listener) 设置视频生命周期监听器。|
|void|[stop](#section57861919153617)() 如果允许使用自定义播放器组件，停止视频。|

#### Public Methods

#### getAspectRatio

|Method|
|:--------------------------------------|
|public float getAspectRatio() 获取视频的宽高比。|

Returns  

|Type|Description|
|:----|:-----------------------|
|float|返回视频宽高比。如果宽高比信息不可用，则返回0。|

#### getVideoLifecycleListener

|Method|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public [VideoOperator.VideoLifecycleListener](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/videolifecyclelistener-0000001050066841) getVideoLifecycleListener() 获取视频生命周期监听器。|

Returns  

|Type|Description|
|:----------------------------------------------------------------------------------------------------------------------------------------------|:----------|
|[VideoOperator.VideoLifecycleListener](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/videolifecyclelistener-0000001050066841)|视频生命周期监听器。|

#### hasVideo

|Method|
|:------------------------------------|
|public boolean hasVideo() 广告内容是否包含视频。|

Returns  

|Type|Description|
|:------|:-------------------------------|
|boolean|广告内容是否包含视频。 * true：是。 * false：否。|

#### isCustomizeOperateEnabled

|Method|
|:-----------------------------------------------------------|
|public boolean isCustomizeOperateEnabled() 视频广告是否使用自定义播放器组件。|

Returns  

|Type|Description|
|:------|:------------------------------------------------|
|boolean|视频广告是否使用自定义播放器组件。 * true：是。 * false：否。 默认值为false。|

#### isMuted

|Method|
|:-----------------------------------|
|public boolean isMuted() 视频是否处于静音状态。|

Returns  

|Type|Description|
|:------|:-------------------------------------------------|
|boolean|视频是否处于静音状态。 * true：视频静音。 * false：视频非静音。 默认值为false。|

#### mute

|Method|
|:--------------------------------------------------------|
|public void mute(boolean mute) 如果允许使用自定义播放器组件，视频静音状态使能开关。|

Parameters  

|Name|Description|
|:---|:-------------------------------------------------------|
|mute|如果允许使用自定义播放器组件，视频静音状态使能开关： * true：视频静音使能。 * false：非静音使能。|

#### pause

|Method|
|:---------------------------------------|
|public void pause() 如果允许使用自定义播放器组件，暂停视频。|

#### play

|Method|
|:--------------------------------------|
|public void play() 如果允许使用自定义播放器组件，播放视频。|

#### setVideoLifecycleListener

|Method|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public void setVideoLifecycleListener([VideoOperator.VideoLifecycleListener](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/videolifecyclelistener-0000001050066841) listener) 设置视频生命周期监听器。|

Parameters  

|Name|Description|
|:-------|:----------|
|listener|视频生命周期监听器。|

#### stop

|Method|
|:--------------------------------------|
|public void stop() 如果允许使用自定义播放器组件，停止视频。|

