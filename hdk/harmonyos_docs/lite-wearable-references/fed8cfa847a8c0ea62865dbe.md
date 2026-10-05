---
name: document/cn/lite-wearable-references/litewearable-audio-js
title: 音频接口
uri: https://developer.huawei.com/consumer/cn/doc/lite-wearable-references/litewearable-audio-js
source: portal
---

# 音频接口

提供了开发者可以在应用中使用穿戴设备音频控制相关的能力。

本模块接口通过名单控制，开发者需要将应用包名提供给穿戴设备侧的音乐服务。音乐服务将应用包名配置进控制名单后可正常调用。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c0/v3/XPyqMSZnQb-OFHbEPUmu6g/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20261005T092459Z&HW-CC-Expire=86400&HW-CC-Sign=9E4A155DE4BFC7E9BD16BA46F31EBFA0C4AC8666AE2F33E20E5FB118F97620C8)

本模块首批接口从API version 6开始支持。

#### 导入模块
    
    import audio from '@system.audio';

#### 属性

名称 | 参数类型 | 可读 | 可写 | 必填 | 描述  
---|---|---|---|---|---  
src | string | 是 | 是 | 是 | 播放的音频媒体uri。  
currentTime | number | 是 | 否 | 否 | 音频的当前进度，单位秒。  
duration | number | 是 | 否 | 否 | 音频的播放时长，单位秒，未知返回NaN。  
autoplay | boolean | 是 | 是 | 否 | 音频是否自动播放，默认false。 true表示音频自动播放。 false表示音频不自动播放。  
loop | boolean | 是 | 是 | 否 | 音频是否循环播放，默认false。 true表示音频循环播放。 false表示音频不循环播放。  
volume | number | 是 | 是 | 否 | 音频的音量，音量变化范围[0.0,1.0]，默认为当前系统媒体音量。  
muted | boolean | 是 | 是 | 否 | 音频是否静音，默认false。 true表示静音。 false表示不静音。  
  
#### 事件

名称 | 描述  
---|---  
onplay | 在调用play方法后的回调事件。  
onpause | 在调用pause方法后的回调事件。  
onstop | 在调用stop方法后的回调事件。  
onloadeddata | 第一次获取到音频数据的回调事件。  
onended | 播放结束时的回调事件。  
onerror | 播放发生错误时的回调事件。  
ontimeupdate | 播放进度变化时的回调事件。  
  
#### audio.play

play():void

开始播放音频。

**示例：**
    
    audio.src = 'internal://app/music/song.mp3';
    audio.onplay = function () {
        console.log('start to play');
        console.log('current volume = ' + audio.volume);
    };
    audio.play();

#### audio.pause

pause():void

暂停播放音频。

**示例：**
    
    audio.src = 'internal://app/music/song.mp3';
    audio.onpause = function () {
        console.log('pause to play');
    };
    audio.play();
    audio.pause();

#### audio.stop

stop():void

停止音频播放，可以通过play重新播放音频。

**示例：**
    
    audio.src = 'internal://app/music/song.mp3';
    audio.onstop = function () {
        console.log('stop to play');
    };
    audio.play();
    audio.stop();

#### audio.getPlayState

getPlayState(Object): void

获取当前播放状态数据。

**参数：**

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
success | Function | 否 | 接口调用成功的回调函数。  
fail | Function | 否 | 接口调用失败的回调函数。  
complete | Function | 否 | 接口调用结束的回调函数。  
  
**success返回值：**

参数名 | 类型 | 说明  
---|---|---  
state | string | 播放状态，分别为'play'，'pause'，'stop'。  
src | string | 播放音频媒体uri，停止播放时返回空字符串。  
currentTime | number | 音频的当前进度，单位秒，停止时返回-1。  
autoplay | boolean | 音频是否在自动播放。  
loop | boolean | 音频是否在循环播放。  
volume | number | 音频的音量，默认当前系统媒体音量，音量变化范围[0.0,1.0]。  
muted | boolean | 音频是否在静音播放。  
  
**示例：**
    
    audio.src = 'internal://app/music/song.mp3';
    audio.play();
    audio.pause();
    audio.getPlayState({
        success: function (data) {
            console.log(data.state);
            console.log(data.src);
            console.log(data.loop);
        },
        fail: function (data, code) {
            console.log('get play state fail');
        },
    });
