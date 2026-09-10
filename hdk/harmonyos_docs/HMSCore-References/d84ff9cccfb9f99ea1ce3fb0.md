---
name: document/cn/HMSCore-References/adsnativevideo-0000001133633592
title: AdsNativeVideo
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-References/adsnativevideo-0000001133633592
---

# AdsNativeVideo

#### 概述

原生广告视频播放组件。  

#### 参数

|参数|是否必选|类型|描述|
|:------------|:---|:-----|:-------------------------------|
|radius|否|number|设置组件的外边框圆角半径。|
|startMute|否|number|视频起始播放是否静音。 * 0：非静音播放 * 1：静音播放|
|autoplaynet|否|number|流量下是否自动播放 * 0：流量不自动播放 * 1：流量自动播放|
|videoautoplay|否|string|是否自动播放 * y：自动播放 * n：不自动播放|

![](https://media:201785910055546979)  
全网自动播放: videoautoplay-\>y \& autoplaynet-\>1

Wifi自动播放: videoautoplay-\>y \& autoplaynet-\>0

不自动播放: videoautoplay-\>n  

#### 方法

|方法|描述|参数|返回值|
|:---------|:----|:---------------------------------------------|:--|
|play(auto)|播放视频。|boolean类型： * true：当前页面视频播放完成后播放。 * false：立即播放。|-|
|pause()|暂停。|-|-|
|stop()|停止播放。|-|-|

#### 事件

|事件|描述|用法|说明|
|:------------|:--------|:--------------------------------------------------------------------|:--------------------------------|
|videoStart|视频开始播放触发。|``` adsNativeVideoView.addEventListener('videoStart',callback) ```|callback函数包含了以下参数： adId：广告素材标识ID。|
|videoPause|视频暂停播放触发。|``` adsNativeVideoView.addEventListener('videoPause',callback) ```|callback函数包含了以下参数： adId：广告素材标识ID。|
|videoResume|视频重新播放触发。|``` adsNativeVideoView.addEventListener('videoResume',callback) ```|callback函数包含了以下参数： adId：广告素材标识ID。|
|videoComplete|视频播放完成触发。|``` adsNativeVideoView.addEventListener('videoComplete',callback) ```|callback函数包含了以下参数： adId：广告素材标识ID。|
|videoError|视频发生错误触发。|``` adsNativeVideoView.addEventListener('videoError',callback) ```|callback函数包含了以下参数： adId：广告素材标识ID。|

