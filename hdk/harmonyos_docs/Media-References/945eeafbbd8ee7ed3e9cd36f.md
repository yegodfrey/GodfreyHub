---
name: document/cn/Media-References/info-code-0000001050199191
title: 事件码
uri: https://developer.huawei.com/consumer/cn/doc/Media-References/info-code-0000001050199191
---

# 事件码

|信息码|值|描述|
|:--------------------------------------------------------|:--|:-----------------------------------------------------------------------------------------------------------------------------------------------------------|
|PlayerConstants.EventCode.MEDIA_INFO_AUDIO_NOT_PLAYING|201|音频未播放。|
|PlayerConstants.EventCode.MEDIA_INFO_VIDEO_NOT_PLAYING|202|视频未播放。|
|PlayerConstants.EventCode.MEDIA_INFO_BAD_INTERLEAVING|203|媒体的音视频没有交织存储。|
|PlayerConstants.EventCode.UNSEEKABLE|206|媒体内容不支持[seek](https://developer.huawei.com/consumer/cn/doc/development/Media-References/wiseplayer-0000001050316766#section128567191026)操作（例如：直播或者媒体内容未准备好）。|
|PlayerConstants.EventCode.VIDEO_FIRST_FRAME|207|视频内容开始渲染首帧。|
|PlayerConstants.EventCode.VIDEO_DECODE_LAGGING|208|视频内容对于解码器过于复杂，不能足够快的完成解码。可能只有音频才能正常播放。|
|PlayerConstants.EventCode.MEDIA_INFO_METADATA_UPDATE|209|元数据有更新。|
|PlayerConstants.EventCode.MEDIA_INFO_UNSUPPORTED_SUBTITLE|210|不支持的字幕。|
|PlayerConstants.EventCode.MEDIA_INFO_SUBTITLE_TIMED_OUT|211|获取字幕超时。|
|PlayerConstants.EventCode.MEDIA_INFO_UNKNOWN|212|未知的信息。|
|PlayerConstants.EventCode.CDN_SWITCH|213|切换媒体内容的CDN地址。|
|PlayerConstants.EventCode.BANDWIDTH_UPDATE|214|更新播放视频内容的码率。 信息码附带的对象obj返回播放视频内容的码率，类型int。|
|PlayerConstants.EventCode.VIDEO_MATCH_PRELOAD|215|预加载命中事件。|
|PlayerConstants.EventCode.BITRATE_SWITCH_COMPLETE|216|码率切换完成事件。 信息码附带的对象obj返回播放视频内容的码率，类型int。|
|PlayerConstants.EventCode.CAN_NOT_SUPPORT_PROXY|217|不支持的代理。|
|PlayerConstants.EventCode.LAYOUT_NOT_SUPPORT_SUBTITLE|218|当前播放窗口布局不支持展示字幕。 只有FrameLayout和RelativeLayout支持展示，不是这两种布局并且需要展示字幕时，上报该事件码。|

