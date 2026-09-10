---
name: cangjie-guides/cj-avcodec-support-formats
title: AVCodec支持的格式
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-avcodec-support-formats
nodePath: 媒体 / Media Kit（媒体服务） / 媒体开发指导 / AVCodec支持的格式
---

# AVCodec支持的格式

#### 媒体编解码

#### [h2]视频解码

当前支持的解码能力如下：

视频硬解类型 | 视频软解类型  
---|---  
AVC(H.264)、HEVC(H.265)、VVC(H.266) | MPEG2、MPEG4、H.263、AVC(H.264)、HEVC(H.265)  
  
#### [h2]视频编码

当前支持的编码能力如下：

视频编码类型  
---  
HEVC(H.265)、 AVC(H.264)  
  
#### [h2]音频解码

当前支持的解码能力：

AAC、MPEG(MP3)、Flac、Vorbis、AMR(amrnb、amrwb)、G711mu、APE、Audio ViVid、opus。

#### [h2]音频编码

当前支持的编码能力：

AAC、Flac、MP3、G711mu、AMR(amrnb, amrwb)、opus。

#### 媒体数据封装与解析

#### [h2]媒体数据解析

支持的解封装格式如下：

媒体格式 | 封装格式 | 码流格式  
---|---|---  
音视频 | mp4 | 视频轨：AVC(H.264)、HEVC(H.265)、VVC(H.266)、MPEG4 音频轨：AAC、MPEG(MP3)、Audio Vivid 字幕轨：WEBVTT 辅助轨：PREY(H.265)、DEPTH(H.265)、AUXL(AAC、MP3) timed metadata轨  
音视频 | fmp4 | 视频轨：AVC(H.264)、HEVC(H.265) 音频轨：AAC、MPEG(MP3)、Audio Vivid  
音视频 | mkv | 视频轨：AVC(H.264)、HEVC(H.265) 音频轨：AAC、MPEG(MP3)、OPUS  
音视频 | mpeg-ts | 视频轨：AVC(H.264)、HEVC(H.265)、MPEG2、MPEG4 音频轨：AAC、MPEG(MP3)、Audio Vivid  
音视频 | flv | 视频轨：AVC(H.264)、HEVC(H.265) 音频轨：AAC  
音视频 | mpeg-ps | 视频码流：AVC(H.264)、MPEG2，音频码流：MPEG(MP2、MP3)  
音视频 | avi | 视频码流：H.263、AVC(H.264)、MPEG2、MPEG4，音频码流：AAC、MPEG(MP2、MP3)、PCM  
音频 | m4a | 音频轨：AAC、Audio Vivid  
音频 | aac | 音频码流：AAC  
音频 | mp3 | 音频码流：MPEG(MP3)  
音频 | ogg | 音频码流：Vorbis  
音频 | flac | 音频码流：Flac  
音频 | wav | 音频码流：PCM、G711mu  
音频 | amr | 音频码流：AMR(amrnb、amrwb)  
音频 | ape | 音频码流：APE  
外挂字幕 | srt | 字幕流：SRT  
外挂字幕 | webvtt | 字幕流：WEBVTT  
  
#### [h2]媒体数据封装

当前支持的封装能力如下：

封装格式 | 视频编解码类型 | 音频编解码类型 | 封面类型  
---|---|---|---  
mp4 | AVC（H.264）、HEVC（H.265） | AAC、MPEG（MP3） | jpeg、png、bmp  
m4a | - | AAC | jpeg、png、bmp  
mp3 | - | MPEG（MP3） | -  
amr | - | AMR(amrnb、amrwb) | -  
wav | - | G711mu(pcm-mulaw) | -  
aac | - | AAC | -  
  
![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8b/v3/0RgRIBOuS6-mswZgtie0vA/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090134Z&HW-CC-Expire=86400&HW-CC-Sign=BDCB855AC650AE56E3555646E30520559DB6C50DAFF247DC8C3079EC0A0D099D)

  * 封装格式为mp4，音频编解码类型为MPEG（MP3）时采样率需大于等于16000Hz。
  * 封装格式为mp4/m4a，音频编解码类型为AAC时声道数范围为1~7。


