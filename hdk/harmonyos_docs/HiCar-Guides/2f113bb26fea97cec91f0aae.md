---
name: document/cn/HiCar-Guides/multi-channel-device-0000002483673748
title: 适配多声道设备
uri: https://developer.huawei.com/consumer/cn/doc/HiCar-Guides/multi-channel-device-0000002483673748
source: portal
---

# 适配多声道设备

#### 场景说明

HiCar支持输出空间音频，空间音频是一种能够将传统的立体声体验扩展到三维空间的音频技术，在单声道、立体声、环绕声基础上，增加高度感知，营造全方位的听音体验的音频技术。更多关于空间音频的详细说明，请参考[空间音频管理](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/public-audio-spatialization-management#创建空间音频示例)。

手机受限于硬件能力，其音频输出普遍仅支持立体声（2声道）。当手机与车机系统互联并进行音频投播时，传统场景下车机系统接收并播放的音频信号源仍为立体声格式，因此即使车机侧音频系统具备多声道(如5.1.2/7.1.4)播放能力，也无法充分发挥其环绕声优势。

HiCar为应用提供了多声道音频接入能力，应用可以直接接入车机多声道音频设备。该功能支持将应用中的高保真多声道音频内容（如5.1.2/7.1.4格式）直接投播至车机系统，使车载音响系统能够解析并还原多声道音轨，从而为用户提供沉浸式环绕声体验。

#### 业务流程

**图1** 业务流程说明  
![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d3/v3/TSivtP0ARPOp-pzRr_TZ4A/zh-cn_image_0000002535678917.png?HW-CC-KV=V1&HW-CC-Date=20261005T091342Z&HW-CC-Expire=86400&HW-CC-Sign=CE9C9356A97EE7169ED771064EC549E7ACB710FB1748C09BBD492B3DE1C0FE1E)

     1. 初始化时，创建AudioRoutingManager音频路由管理实例，通过AudioRoutingManager监听音频输出设备切换事件，获取音频输出设备支持能力信息。
     2. 监听当前音频输出设备变化事件，当接收到输出音频设备发生变化时，获取当前音频输出设备参数（采样率、声道数、位宽、音频声道布局等），根据音频设备参数配置音频流，输出到多声道设备。
     3. 业务结束后释放相关资源。

#### 相关接口

     * 获取音频输出设备信息通过[AudioRoutingManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-audioroutingmanager)模块实现，具体使用方法请参考[音频设备路由管理](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/audio-device)。
     * PCM数据输出到多声道音频设备，主要通过[AudioRenderer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-audiorenderer)模块实现，具体使用方法请参考[使用AudioRenderer开发音频播放功能](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/using-audiorenderer-for-playback)
     * 设备信息通过[AudioDeviceDescriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-i#audiodevicedescriptor)获取，其中capabilities（从API version 22开始支持）字段可以获取声道相关的信息，详细信息请参考[AudioStreamInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-i#audiostreaminfo8)。

**表1** AudioDeviceDescriptor部分字段名称 | 类型 | 只读 | 可选 | 说明  
---|---|---|---|---  
capabilities | Array<[AudioStreamInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-i#audiostreaminfo8)> | 是 | 是 | 设备能力集合。 从API version 22开始支持。  
model | string | 是 | 是 | 设备型号。如"hiplay"、"hicar"。 从API version 22开始支持。  
  
**表2** AudioStreamInfo名称 | 类型 | 只读 | 可选 | 说明  
---|---|---|---|---  
samplingRate | [AudioSamplingRate](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-e#audiosamplingrate8) | 否 | 否 | 音频文件的采样率。  
channels | [AudioChannel](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-e#audiochannel8) | 否 | 否 | 音频文件的通道数。  
sampleFormat | [AudioSampleFormat](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-e#audiosampleformat8) | 否 | 否 | 音频采样格式。  
encodingType | [AudioEncodingType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-e#audioencodingtype8) | 否 | 否 | 音频编码格式。  
channelLayout | [AudioChannelLayout](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-e#audiochannellayout11) | 否 | 是 | 音频声道布局，默认值为0x0。  
  
#### 开发步骤

     1. 监听输出设备变化事件，在回调里获取设备上报信息。

使用[AudioRoutingManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-audioroutingmanager)的[on('preferOutputDeviceChangeForRendererInfo')](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-audioroutingmanager#onpreferoutputdevicechangeforrendererinfo10)接口监听[AudioDeviceDescriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-i#audiodevicedescriptor)对象，包含多声道设备信息。使用[AudioRoutingManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-audioroutingmanager)的[off('preferOutputDeviceChangeForRendererInfo')](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-audioroutingmanager#onpreferoutputdevicechangeforrendererinfo10)接口取消监听。
            
            let audioRoutingManager: audio.AudioRoutingManager = audio.getAudioManager().getRoutingManager();
            
            audioRoutingManager.on('preferOutputDeviceChangeForRendererInfo', rendererInfo, (audioDeviceDescriptors: audio.AudioDeviceDescriptors) => {
              // 获取音频设备能力
              if (audioDeviceDescriptors && audioDeviceDescriptors.length > 0) {
                // 获取设备型号类别，HiCar设备上报信息是"hicar"，默认值是"unknown";
                let outputAudioDeviceModel = audioDeviceDescriptor.model;
                let audioCapabilities: audio.AudioStreamInfo = audioDeviceDescriptors[0].capabilities;
                
                let isMultiChannels = false;
                audioCapabilities.forEach((capability: audio.AudioStreamInfo) => {
                  // 判断是否是HiCar多声道设备(model='hicar' && channel >= 6);
                  if (outputAudioDeviceModel === 'hicar' && capability.channels >= audio.AudioChannel.CHANNEL_6) {
                    isMultiChannels = true;
                    return;
                  }
                });
                console.info(`isMultiChannels: ${isMultiChannels}.`);    
              }
            });

     2. 输出多声道音频。

音频输出时，根据步骤1中获取到的设备信息判断是否是HiCar多声道设备，如果满足输出多声道音频要求，应用开启多声道音频输出多声道音频。

音频框架开发参考指南：[音频播放](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/audio-playback)。

     3. 音频写入到多声道设备，可以使用[AudioRenderer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-audiorenderer)将PCM数据输出到音频设备。具体使用方法可以参考文档：[使用AudioRenderer开发音频播放功能](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/using-audiorenderer-for-playback)。

播放多声道音频需要将音源的声道布局传递给车机：
            
            // 如下发7.1.4音频
            audioStreamInfo = {
              samplingRate: audio.AudioSamplingRate.SAMPLE_RATE_48000,
              channels: audio.AudioChannel.CHANNEL_12,
              sampleFormat: audio.AudioSampleFormat.SAMPLE_FORMAT_S16LE,
              encodingType: audio.AudioEncodingType.ENCODING_TYPE_RAW,
              **channelLayout: audio.AudioChannelLayout.CH_LAYOUT_7POINT1POINT4**
            }

     4. 当应用在多声道场景中同时支持倍速播放时，由于车机不支持播放应用直接下发的高品质音频的倍速流（channelCount >= 6 || sampleRate > 48kHz），音频应用需按照如下步骤适配。
        1. 参考步骤1判断HiCar多声道场景。
        2. 下发原速音频流，不调用倍数接口加/减速音频流。
        3. 调用[AudioRenderer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-audiorenderer)的[setSpeed](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-audiorenderer#setspeed11)接口把当前倍数信息传递给车机。

伪代码如下所示：
               
               if (outputAudioDeviceModel === 'hicar') {
                 if (capability.channels >= 6 || capability.samplingRate > 48) { 
                   // 1.下发原速流
                   ...
                   // 2.当前倍数传递给车机
                   audioRenderer.setSpeed(1.5);
                 }  
               }
