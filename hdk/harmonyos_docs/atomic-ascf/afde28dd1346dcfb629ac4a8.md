---
name: document/cn/atomic-ascf/apis-background-audio-functions
title: PlayBackgroundAudio
uri: https://developer.huawei.com/consumer/cn/doc/atomic-ascf/apis-background-audio-functions
---

# PlayBackgroundAudio

#### has.playBackgroundAudio

has.playBackgroundAudio(Object object)

使用后台播放器播放音乐。

返回桌面，仍保持播放；当遇到其他应用/元服务的音视频源，将暂停播放原有播放的音视频源。

起始版本： 1.0.9

需要权限： 开启后台音频播放，需要如下配置：

* 在module.json5中声明ohos.permission.KEEP_BACKGROUND_RUNNING权限。

* 在module.json5中声明backgroundModes配置项。

module.json5：

```
"module": {
  "abilities": [
    {
      "backgroundModes": [
        "audioPlayback"
      ]
    }
  ]
}
```

* 在[app.json](https://developer.huawei.com/consumer/cn/doc/atomic-ascf/appjson-global-config)中配置requiredBackgroundModes属性。

app.json：

```
"requiredBackgroundModes": ["audio"]
```

参数：

参数为Object对象，包括以下字段。  

|参数|类型|必填|描述|
|:----------|:-------|:-|:--------------------------------------------------------------------------|
|dataUrl|string|是|音乐链接，目前支持的格式有m4a、aac、mp3、ogg、wav、flac、amr，支持网络音频链接和本地音频文件路径（internal://开头）。|
|title|string|否|音乐标题。|
|coverImgUrl|string|否|封面URL。|
|success|function|否|接口调用成功的回调函数。|
|fail|function|否|接口调用失败的回调函数。|
|complete|function|否|接口调用结束的回调函数（调用成功、失败都会执行）。|

示例：

```
has.playBackgroundAudio({
  dataUrl: 'https://www.example.com/test.mp3', // 此处仅为样例，请开发者更换为可用的网址
  title: '音乐标题',
  coverImgUrl: 'https://www.example.com/test.png', // 此处仅为样例，请开发者更换为可用的网址
  success: () => {
    console.info('playBackgroundAudio success');
  },
  fail: (err) => {
    console.error('playBackgroundAudio fail', err);
  },
  complete: (res) => {
    console.info('playBackgroundAudio complete', res);
  }
});
```

#### has.pauseBackgroundAudio

has.pauseBackgroundAudio(Object object)

暂停播放音乐。

起始版本： 1.0.9

参数：

参数为Object对象，包括以下字段。  

|属性|类型|必填|描述|
|:-------|:-------|:-|:------------------------|
|success|function|否|接口调用成功的回调函数。|
|fail|function|否|接口调用失败的回调函数。|
|complete|function|否|接口调用结束的回调函数（调用成功、失败都会执行）。|

示例：

```
has.pauseBackgroundAudio({
  success: () => {
    console.info('pauseBackgroundAudio success');
  },
  fail: (err) => {
    console.error('pauseBackgroundAudio fail', err);
  },
  complete: (res) => {
    console.info('pauseBackgroundAudio complete', res);
  }
});
```

#### has.seekBackgroundAudio

has.seekBackgroundAudio(Object object)

控制音乐播放进度。

起始版本： 1.0.9

参数：

参数为Object对象，包括以下字段。  

|属性|类型|必填|描述|
|:-------|:-------|:-|:--------------------------------|
|position|number|是|音乐跳转的位置，单位：s。精确到小数点后3位，支持ms级别精确度。|
|success|function|否|接口调用成功的回调函数。|
|fail|function|否|接口调用失败的回调函数。|
|complete|function|否|接口调用结束的回调函数（调用成功、失败都会执行）。|

示例：

```
has.seekBackgroundAudio({
  position: 30,
  success: () => {
    console.info('seekBackgroundAudio success');
  },
  fail: (err) => {
    console.error('seekBackgroundAudio fail', err);
  },
  complete: (res) => {
    console.info('seekBackgroundAudio complete', res);
  }
});
```

#### has.stopBackgroundAudio

has.stopBackgroundAudio(Object object)

停止播放音乐。

起始版本： 1.0.9

参数：

参数为Object对象，包括以下字段。  

|属性|类型|必填|描述|
|:-------|:-------|:-|:------------------------|
|success|function|否|接口调用成功的回调函数。|
|fail|function|否|接口调用失败的回调函数。|
|complete|function|否|接口调用结束的回调函数（调用成功、失败都会执行）。|

示例：

```
has.stopBackgroundAudio({
  success: () => {
    console.info('stopBackgroundAudio success');
  },
  fail: (err) => {
    console.error('stopBackgroundAudio fail', err);
  },
  complete: (res) => {
    console.info('stopBackgroundAudio complete', res);
  }
});
```

#### has.getBackgroundAudioPlayerState

has.getBackgroundAudioPlayerState(Object object)

获取后台音乐播放状态。

起始版本： 1.0.9

参数：

参数为Object对象，包括以下字段。  

|参数|类型|必填|描述|
|:-------|:-------|:-|:------------------------|
|success|function|否|接口调用成功的回调函数。|
|fail|function|否|接口调用失败的回调函数。|
|complete|function|否|接口调用结束的回调函数（调用成功、失败都会执行）。|

success返回值：  

|参数|类型|描述|
|:--------------|:-----|:---------------------------|
|duration|number|选定音频的长度，单位：s。只有在音乐播放中时返回。|
|currentPosition|number|选定音频的播放位置，单位：s。只有在音乐播放中时返回。|
|status|number|播放状态。 0：暂停。 1：播放中。 2：没有音乐播放。|
|downloadPercent|number|音频的下载进度百分比，只有在音乐播放中时返回。|
|dataUrl|string|歌曲数据链接，只有在音乐播放中时返回。|

示例：

```
has.getBackgroundAudioPlayerState({
  success: (res) => {
    console.info('getBackgroundAudioPlayerState success', res);
  },
  fail: (err) => {
    console.error('getBackgroundAudioPlayerState fail', err);
  },
  complete: (res) => {
    console.info('getBackgroundAudioPlayerState complete', res);
  }
});
```

#### has.onBackgroundAudioPlay

has.onBackgroundAudioPlay(function callback)

监听音乐播放事件。

起始版本： 1.0.9

参数：  

|参数|类型|必填|描述|
|:-------|:-------|:-|:-----------|
|callback|function|是|音乐播放事件的监听函数。|

示例：

```
has.onBackgroundAudioPlay(() => {
  console.info('onBackgroundAudioPlay callback triggered');
});
```

#### has.onBackgroundAudioPause

has.onBackgroundAudioPause(function callback)

监听音乐暂停事件。

起始版本： 1.0.9

参数：  

|参数|类型|必填|描述|
|:-------|:-------|:-|:-----------|
|callback|function|是|音乐暂停事件的监听函数。|

示例：

```
has.onBackgroundAudioPause(() => {
  console.info('onBackgroundAudioPause callback triggered');
});
```

#### has.onBackgroundAudioStop

has.onBackgroundAudioStop(function callback)

监听音乐停止事件。

起始版本： 1.0.9

参数：  

|参数|类型|必填|描述|
|:-------|:-------|:-|:-----------|
|callback|function|是|音乐停止事件的监听函数。|

示例：

```
has.onBackgroundAudioStop(() => {
  console.info('onBackgroundAudioStop callback triggered');
});
```

#### has.getBackgroundAudioManager

has.getBackgroundAudioManager(): BackgroundAudioManager

获取全局唯一的背景音频管理器。支持后台音频播放，元服务切入后台，如果音频处于播放状态，可以继续播放。

起始版本： 1.0.9

需要权限： 开启后台音频播放，需要如下配置：

* 在module.json5中声明ohos.permission.KEEP_BACKGROUND_RUNNING权限。

* 在module.json5中声明backgroundModes配置项。

module.json5：

```
"module": {
  "abilities": [
    {
      "backgroundModes": [
        "audioPlayback"
      ]
    }
  ]
}
```

* 在[app.json](https://developer.huawei.com/consumer/cn/doc/atomic-ascf/appjson-global-config)中配置requiredBackgroundModes属性。

  app.json：

  ```
  "requiredBackgroundModes": ["audio"]
  ```

返回值：

返回[BackgroundAudioManager](https://developer.huawei.com/consumer/cn/doc/atomic-ascf/apis-background-audio-manager)对象。

示例：

```
const backgroundAudioManager = has.getBackgroundAudioManager();
```

