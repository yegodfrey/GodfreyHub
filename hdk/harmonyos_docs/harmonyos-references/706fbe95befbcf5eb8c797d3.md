---
name: document/cn/harmonyos-references/capi-oh-camera-videooutput-callbacks
title: VideoOutput_Callbacks
uri: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-videooutput-callbacks
---

# VideoOutput_Callbacks

> phone 12+ | 2in1 13+ | tablet 12+ | tv 19+ | wearable 23+

```c
typedef struct VideoOutput_Callbacks {...} VideoOutput_Callbacks
```

## 概述

用于录像输出的回调。

**起始版本：** 11

**相关模块：** [OH_Camera](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera)

**所在头文件：** [video_output.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-video-output-h)

## 汇总

### 成员变量

|名称|描述|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------|
|[OH_VideoOutput_OnFrameStart](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-video-output-h#oh_videooutput_onframestart) onFrameStart|录像输出帧启动事件。|
|[OH_VideoOutput_OnFrameEnd](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-video-output-h#oh_videooutput_onframeend) onFrameEnd|录像输出帧结束事件。|
|[OH_VideoOutput_OnError](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-video-output-h#oh_videooutput_onerror) onError|录像输出错误事件。|

