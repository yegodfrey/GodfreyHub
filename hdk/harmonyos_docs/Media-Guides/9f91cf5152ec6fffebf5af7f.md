---
name: document/cn/Media-Guides/video-super-resolution-pipeline-0000001110501562
title: 视频超分Pipeline
uri: https://developer.huawei.com/consumer/cn/doc/Media-Guides/video-super-resolution-pipeline-0000001110501562
---

# 视频超分Pipeline

## 背景信息

本节的接入方式为[从Java层接入](https://developer.huawei.com/consumer/cn/doc/development/Media-Guides/integrating-sdk-0000001156025441#section5461134384418)。

AV Pipeline框架支持在播放过程中进行逐帧超分。视频超分Pipeline除[视频播放Pipeline](https://developer.huawei.com/consumer/cn/doc/development/Media-Guides/video-playback-pipeline-0000001110539082)的插件外，还包含视频超分插件CVFilter，编排关系如下图所示。

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20210812095804.11909849128240177927307353101183:50520811020908:2800:E5147982AAAD624EFF3B6BDE7F1D5175268462245C2B4900F6AA08E6176D654A.png?needInitFileName=true?needInitFileName=true)

以下为视频超分Pipeline的graph配置文件PlayerGraphCV.xml。

```screen
<?xml version="1.0"?>
<Nodes>
    <node id="0" name="AVDemuxer" mime="media/demuxer" type="source">
        <!-- 数据流从这里开始分两路，一路到视频解码节点node 1，一路到音频解码节点node 2 -->
        <next id="1"/>
        <next id="2"/>
    </node>
    <!-- 视频解码节点将解码后的图像送到下一个节点，即next id号对应的3号CVFilter节点 -->
    <node id="1" name="MediaCodecDecoder" mime="video/avc" type="filter">
        <next id="3"/>
    </node>
    <!-- 音频解码节点将解码后的音频送到下一个节点，即next id号对应的4号AudioSinkOpenSL节点 -->
    <node id="2" name="FFmpegNode" mime="audio/aac" type="filter">
        <next id="4"/>
    </node>
    <!-- node的name、mime、type参考示例中的定义。node id应当唯一，建议为上一个node id加1即可 -->
    <node id="3" name="CVFilter" mime="video/cv-filter" type="filter">
        <!-- next id为视频流从本节点出去后需要到达的下一个节点，本示例中为送显节点 -->
        <next id="5" />
    </node>
    <node id="4" name="AudioSinkOpenSL" mime="audio/sink" type="sink">
    </node>
    <node id="5" name="VideoSinkBasic" mime="video/sink" type="sink">
    </node>
</Nodes>
```

## 开发步骤

1. [创建MediaPlayer](https://developer.huawei.com/consumer/cn/doc/development/Media-Guides/video-playback-pipeline-0000001110539082)。在设置参数时，需要提供"MEDIA_GRAPH_PATH"的值，即PlayerGraphCV.xml的绝对路径。此外还需要将"MEDIA_ENABLE_CV"的值设置为1，使能视频超分插件。

   ```screen
   MediaMeta meta = new MediaMeta();
   meta.setString(MediaMeta.MEDIA_GRAPH_PATH, getExternalFilesDir(null).getPath() + "/PlayerGraphCV.xml");
   meta.setInt32(MediaMeta.MEDIA_ENABLE_CV, 1);
   mPlayer.setParameter(meta);
   ```

2. 调用[start](https://developer.huawei.com/consumer/cn/doc/development/Media-References/mediaplayer-0000001110596458#section585394815162)开始播放视频，每一帧视频都会被超分后送显。

   ```screen
   mPlayer.start();
   ```

3. 在视频播放过程中，通过以下设置可以开启或关闭视频超分功能。

   ```cpp
   // 此处设置为1是开启超分，设置为0是关闭超分
   meta.setInt32(MediaMeta.MEDIA_ENABLE_CV, 1);  
   mPlayer.setParameter(meta);
   ```

4. 调用[stop](https://developer.huawei.com/consumer/cn/doc/development/Media-References/mediaplayer-0000001110596458#section4722920112217)停止播放视频。

   ```screen
   mPlayer.stop();
   ```

## 视频超分约束

|约束|说明|
|:---------|:-----------------------------------------------------------------------------------------------------|
|软硬件平台|* 硬件平台：Kirin 9000，Kirin 9000E，Kirin 990，Kirin 990E，Kirin 980 * 软件平台：EMUI 10.0及以上版本，HarmonyOS 2.0版本|
|视频分辨率及超分倍数|由于硬件和软件平台的不同，视频分辨率和超分倍数在GPU超分和NPU超分能力上各有区别，具体请参见[表1](#ZH-CN_TOPIC_0000001110501562__table137810507491)|
|视频格式|* NV12 * 8bit|
|性能约束|* Kirin 9000、Kirin 9000E和Kirin 990：达到30fps * Kirin 990E、Kirin 980：达到25fps|

|超分方式|软硬件与版本号|视频分辨率|超分倍数|
|:---|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------|:---|
|GPU|* 软件约束 * EMUI 10.0及以上版本（Kirin 9000E、Kirin 990、Kirin 990E、Kirin 980） * HarmonyOS 2.0.0版本（Kirin 9000仅支持HarmonyOS 2.0.0.116及以前版本，Kirin9000E、Kirin990、Kirin990E、Kirin980都支持） * 硬件约束：Kirin 9000、Kirin 9000E、Kirin 990、Kirin 990E、Kirin 980|竖屏：[224x224, 540x960]|2倍超分|
|GPU|* 软件约束 * EMUI 10.0及以上版本（Kirin 9000E、Kirin 990、Kirin 990E、Kirin 980） * HarmonyOS 2.0.0版本（Kirin 9000仅支持HarmonyOS 2.0.0.116及以前版本，Kirin9000E、Kirin990、Kirin990E、Kirin980都支持） * 硬件约束：Kirin 9000、Kirin 9000E、Kirin 990、Kirin 990E、Kirin 980|竖屏：(540x960, 736x1280]|1倍超分|
|GPU|* 软件约束 * EMUI 10.0及以上版本（Kirin 9000E、Kirin 990、Kirin 990E、Kirin 980） * HarmonyOS 2.0.0版本（Kirin 9000仅支持HarmonyOS 2.0.0.116及以前版本，Kirin9000E、Kirin990、Kirin990E、Kirin980都支持） * 硬件约束：Kirin 9000、Kirin 9000E、Kirin 990、Kirin 990E、Kirin 980|横屏：[224x224, 960x540]|2倍超分|
|GPU|* 软件约束 * EMUI 10.0及以上版本（Kirin 9000E、Kirin 990、Kirin 990E、Kirin 980） * HarmonyOS 2.0.0版本（Kirin 9000仅支持HarmonyOS 2.0.0.116及以前版本，Kirin9000E、Kirin990、Kirin990E、Kirin980都支持） * 硬件约束：Kirin 9000、Kirin 9000E、Kirin 990、Kirin 990E、Kirin 980|横屏：(960x540, 1280x736]|1倍超分|
|NPU|* 软件约束：Kirin 9000仅支持HarmonyOS 2.0.0.120及以上版本 * 硬件约束：Kirin 9000|竖屏：[224x224, 288x512]|3倍超分|
|NPU|* 软件约束：Kirin 9000仅支持HarmonyOS 2.0.0.120及以上版本 * 硬件约束：Kirin 9000|竖屏：(288x512, 576x1024]|2倍超分|
|NPU|* 软件约束：Kirin 9000仅支持HarmonyOS 2.0.0.120及以上版本 * 硬件约束：Kirin 9000|竖屏：(576x1024, 736x1280]|1倍超分|
|NPU|* 软件约束：Kirin 9000仅支持HarmonyOS 2.0.0.120及以上版本 * 硬件约束：Kirin 9000|横屏：[224x224, 512x288]|3倍超分|
|NPU|* 软件约束：Kirin 9000仅支持HarmonyOS 2.0.0.120及以上版本 * 硬件约束：Kirin 9000|横屏：(512x288, 1024x576]|2倍超分|
|NPU|* 软件约束：Kirin 9000仅支持HarmonyOS 2.0.0.120及以上版本 * 硬件约束：Kirin 9000|横屏：(1024x576, 1280x736]|1倍超分|
[**表1**视频分辨率及超分倍数约束表]

> 说明
>
> 视频超分目前只支持上表所列的分辨率，其他分辨率不超分。
