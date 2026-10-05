---
name: document/cn/doc-references/js-apis-media-0000001281201038
title: @ohos.multimedia.media (媒体服务)
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/js-apis-media-0000001281201038
source: portal
---

# @ohos.multimedia.media (媒体服务)

媒体子系统为开发者提供一套简单且易于理解的接口，使得开发者能够方便接入系统并使用系统的媒体资源。

媒体子系统包含了音视频相关媒体业务，提供以下常用功能：

    * 音频播放（AudioPlayer） 
    * 视频播放（VideoPlayer） 
    * 音频录制（AudioRecorder） 

后续将提供以下功能：DataSource音视频播放、音视频编解码、容器封装解封装、媒体能力查询等功能。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230804172540.13691518482953202882097528424895:50001231000000:2800:072A4A9EA5972EDF15024FAE7CCF18B0C2DC8674F8F176EC8C1638CEC1272156.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)

本模块首批接口从API version 6开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

#### 导入模块
    
    import media from '@ohos.multimedia.media';

#### media.createAudioPlayer

createAudioPlayer(): AudioPlayer

同步方式创建音频播放实例。

**系统能力：** SystemCapability.Multimedia.Media.AudioPlayer

**返回值：**

类型 | 说明  
---|---  
AudioPlayer | 返回AudioPlayer类实例，失败时返回null。可用于音频播放、暂停、停止等操作。  
  
**示例：**
    
    let audioPlayer = media.createAudioPlayer();

#### media.createVideoPlayer8+

createVideoPlayer(callback: AsyncCallback<VideoPlayer>): void

异步方式创建视频播放实例，通过注册回调函数获取返回值。

**系统能力：** SystemCapability.Multimedia.Media.VideoPlayer

**参数：**

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
callback | AsyncCallback<VideoPlayer> | 是 | 异步创建视频播放实例回调方法。  
  
**示例：**
    
    let videoPlayer
    
    media.createVideoPlayer((error, video) => {
       if (video != null) {
           videoPlayer = video;
           console.info('video createVideoPlayer success');
       } else {
           console.info(`video createVideoPlayer fail, error: ${error}`);
       }
    });

#### media.createVideoPlayer8+

createVideoPlayer(): Promise<VideoPlayer>

异步方式创建视频播放实例，通过Promise获取返回值。

**系统能力：** SystemCapability.Multimedia.Media.VideoPlayer

**返回值：**

类型 | 说明  
---|---  
Promise<VideoPlayer> | 异步创建视频播放实例Promise返回值。  
  
**示例：**
    
    let videoPlayer
    
    media.createVideoPlayer().then((video) => {
       if (video != null) {
           videoPlayer = video;
           console.info('video createVideoPlayer success');
       } else {
           console.info('video createVideoPlayer fail');
       }
    }).catch((error) => {
       console.info(`video catchCallback, error: ${error}`);
    });

#### media.createAudioRecorder

createAudioRecorder(): AudioRecorder

创建音频录制的实例来控制音频的录制。

一台设备只允许创建一个录制实例。

**系统能力：** SystemCapability.Multimedia.Media.AudioRecorder

**返回值:**

类型 | 说明  
---|---  
AudioRecorder | 返回AudioRecorder类实例，失败时返回null。  
  
**示例：**
    
    let audioRecorder = media.createAudioRecorder();

#### MediaErrorCode8+

媒体服务错误类型枚举。

**系统能力：** SystemCapability.Multimedia.Media.Core

名称 | 值 | 说明  
---|---|---  
MSERR_OK | 0 | 表示操作成功。  
MSERR_NO_MEMORY | 1 | 表示申请内存失败，系统可能无可用内存。  
MSERR_OPERATION_NOT_PERMIT | 2 | 表示无权限执行此操作。  
MSERR_INVALID_VAL | 3 | 表示传入入参无效。  
MSERR_IO | 4 | 表示发生IO错误。  
MSERR_TIMEOUT | 5 | 表示操作超时。  
MSERR_UNKNOWN | 6 | 表示未知错误。  
MSERR_SERVICE_DIED | 7 | 表示服务端失效。  
MSERR_INVALID_STATE | 8 | 表示在当前状态下，不允许执行此操作。  
MSERR_UNSUPPORTED | 9 | 表示在当前版本下，不支持此操作。  
  
#### MediaType8+

媒体类型枚举。

**系统能力：** SystemCapability.Multimedia.Media.Core

名称 | 值 | 说明  
---|---|---  
MEDIA_TYPE_AUD | 0 | 表示音频。  
MEDIA_TYPE_VID | 1 | 表示视频。  
  
#### CodecMimeType8+

Codec MIME类型枚举。

**系统能力：** SystemCapability.Multimedia.Media.Core

名称 | 值 | 说明  
---|---|---  
VIDEO_H263 | 'video/h263' | 表示视频/h263类型。  
VIDEO_AVC | 'video/avc' | 表示视频/avc类型。  
VIDEO_MPEG2 | 'video/mpeg2' | 表示视频/mpeg2类型。  
VIDEO_MPEG4 | 'video/mp4v-es' | 表示视频/mpeg4类型。  
VIDEO_VP8 | 'video/x-vnd.on2.vp8' | 表示视频/vp8类型。  
AUDIO_AAC | "audio/mp4a-latm" | 表示音频/mp4a-latm类型。  
AUDIO_VORBIS | 'audio/vorbis' | 表示音频/vorbis类型。  
AUDIO_FLAC | 'audio/flac' | 表示音频/flac类型。  
  
#### MediaDescriptionKey8+

媒体信息描述枚举。

**系统能力：** SystemCapability.Multimedia.Media.Core

名称 | 值 | 说明  
---|---|---  
MD_KEY_TRACK_INDEX | "track_index" | 表示轨道序号，其对应键值类型为number。  
MD_KEY_TRACK_TYPE | "track_type" | 表示轨道类型，其对应键值类型为number，参考MediaType。  
MD_KEY_CODEC_MIME | "codec_mime" | 表示codec_mime类型，其对应键值类型为string。  
MD_KEY_DURATION | "duration" | 表示媒体时长，其对应键值类型为number，单位为毫秒（ms）。  
MD_KEY_BITRATE | "bitrate" | 表示比特率，其对应键值类型为number，单位为比特率（bps）。  
MD_KEY_WIDTH | "width" | 表示视频宽度，其对应键值类型为number，单位为像素（px）。  
MD_KEY_HEIGHT | "height" | 表示视频高度，其对应键值类型为number，单位为像素（px）。  
MD_KEY_FRAME_RATE | "frame_rate" | 表示视频帧率，其对应键值类型为number，单位为100帧每秒（100fps）。  
MD_KEY_AUD_CHANNEL_COUNT | "channel_count" | 表示声道数，其对应键值类型为number。  
MD_KEY_AUD_SAMPLE_RATE | "sample_rate" | 表示采样率，其对应键值类型为number，单位为赫兹（Hz）。  
  
#### BufferingInfoType8+

缓存事件类型枚举。

**系统能力：** SystemCapability.Multimedia.Media.Core

名称 | 值 | 说明  
---|---|---  
BUFFERING_START | 1 | 表示开始缓存。  
BUFFERING_END | 2 | 表示结束缓存。  
BUFFERING_PERCENT | 3 | 表示缓存百分比。  
CACHED_DURATION | 4 | 表示缓存时长，单位为毫秒（ms）。  
  
#### AudioPlayer

音频播放管理类，用于管理和播放音频媒体。在调用AudioPlayer的方法前，需要先通过createAudioPlayer()构建一个AudioPlayer实例。

音频播放demo可参考：[音频播放开发指导](https://developer.harmonyos.com/cn/docs/documentation/doc-guides/audio-playback-0000001333720777)

#### [h2]属性

**系统能力：** SystemCapability.Multimedia.Media.AudioPlayer

名称 | 类型 | 可读 | 可写 | 说明  
---|---|---|---|---  
src | string | 是 | 是 | 音频媒体URI，支持当前主流的音频格式(m4a、aac、mp3、ogg、wav)。 **支持路径示例** ： 1\. fd类型播放：fd://xx ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230804172540.94921662548770548586283085081282:50001231000000:2800:38D85C9B57D0895AEAAFB0C5476D736754506E83DB896DCE9B85F1D4744CBFCE.png?needInitFileName=true?needInitFileName=true?needInitFileName=true) 2\. http网络播放: http://xx 3\. https网络播放: https://xx 4\. hls网络播放路径：http://xx或者https://xx **需要权限：** ohos.permission.READ_MEDIA；如果需要使用网络素材，还需要申请ohos.permission.INTERNET。  
loop | boolean | 是 | 是 | 音频循环播放属性，设置为'true'表示循环播放。  
currentTime | number | 是 | 否 | 音频的当前播放位置，单位为毫秒（ms）。  
duration | number | 是 | 否 | 音频时长，单位为毫秒（ms）。  
state | AudioState | 是 | 否 | 音频播放的状态。  
  
#### [h2]play __

play(): void

开始播放音频资源，需在dataLoad事件成功触发后，才能调用。

**系统能力：** SystemCapability.Multimedia.Media.AudioPlayer

**示例：**
    
    audioPlayer.on('play', () => {    //设置'play'事件回调
        console.log('audio play success');
    });
    audioPlayer.play();

#### [h2]pause __

pause(): void

暂停播放音频资源。

**系统能力：** SystemCapability.Multimedia.Media.AudioPlayer

**示例：**
    
    audioPlayer.on('pause', () => {    //设置'pause'事件回调
        console.log('audio pause success');
    });
    audioPlayer.pause();

#### [h2]stop __

stop(): void

停止播放音频资源。

**系统能力：** SystemCapability.Multimedia.Media.AudioPlayer

**示例：**
    
    audioPlayer.on('stop', () => {    //设置'stop'事件回调
        console.log('audio stop success');
    });
    audioPlayer.stop();

#### [h2]reset7+__

reset(): void

切换播放音频资源。

**系统能力：** SystemCapability.Multimedia.Media.AudioPlayer

**示例：**
    
    audioPlayer.on('reset', () => {    //设置'reset'事件回调
        console.log('audio reset success');
    });
    audioPlayer.reset();

#### [h2]seek

seek(timeMs: number): void

跳转到指定播放位置。

**系统能力：** SystemCapability.Multimedia.Media.AudioPlayer

**参数：**

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
timeMs | number | 是 | 指定的跳转时间节点，单位毫秒（ms）。  
  
**示例：**
    
    audioPlayer.on('timeUpdate', (seekDoneTime) => {    //设置'timeUpdate'事件回调
        if (seekDoneTime == null) {
            console.info('audio seek fail');
            return;
        }
        console.log('audio seek success. seekDoneTime: ' + seekDoneTime);
    });
    audioPlayer.seek(30000);    //seek到30000ms的位置

#### [h2]setVolume __

setVolume(vol: number): void

设置音量。

**系统能力：** SystemCapability.Multimedia.Media.AudioPlayer

**参数：**

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
vol | number | 是 | 指定的相对音量大小，取值范围为[0.00-1.00]，1表示最大音量，即100%。  
  
**示例：**
    
    audioPlayer.on('volumeChange', () => {    //设置'volumeChange'事件回调
        console.log('audio volumeChange success');
    });
    audioPlayer.setVolume(1);    //设置音量到100%

#### [h2]release

release(): void

释放音频资源。

**系统能力：** SystemCapability.Multimedia.Media.AudioPlayer

**示例：**
    
    audioPlayer.release();
    audioPlayer = undefined;

#### [h2]getTrackDescription8+

getTrackDescription(callback: AsyncCallback<Array<MediaDescription>>): void

通过回调方式获取音频轨道信息。需在dataLoad事件成功触发后，才能调用。

**系统能力：** SystemCapability.Multimedia.Media.AudioPlayer

**参数：**

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
callback | AsyncCallback<Array<MediaDescription>> | 是 | 获取音频轨道信息回调方法。  
  
**示例：**
    
    function printfDescription(obj) {
        for (let item in obj) {
            let property = obj[item];
            console.info('audio key is ' + item);
            console.info('audio value is ' + property);
        }
    }
    
    audioPlayer.getTrackDescription((error, arrlist) => {
        if (arrlist != null) {
            for (let i = 0; i < arrlist.length; i++) {
                printfDescription(arrlist[i]);
            }
        } else {
            console.log(`audio getTrackDescription fail, error: ${error}`);
        }
    });

#### [h2]getTrackDescription8+

getTrackDescription(): Promise<Array<MediaDescription>>

通过Promise方式获取音频轨道信息。需在dataLoad事件成功触发后，才能调用

**系统能力：** SystemCapability.Multimedia.Media.AudioPlayer

**返回值：**

类型 | 说明  
---|---  
Promise<Array<MediaDescription>> | 获取音频轨道信息Promise返回值。  
  
**示例：**
    
    function printfDescription(obj) {
        for (let item in obj) {
            let property = obj[item];
            console.info('audio key is ' + item);
            console.info('audio value is ' + property);
        }
    }
    
    audioPlayer.getTrackDescription().then((arrlist) => {
        if (arrlist != null) {
            arrayDescription = arrlist;
        } else {
            console.log('audio getTrackDescription fail');
        }
    }).catch((error) => {
       console.info(`audio catchCallback, error: ${error}`);
    });
    
    for (let i = 0; i < arrayDescription.length; i++) {
        printfDescription(arrayDescription[i]);
    }

#### [h2]on('bufferingUpdate')8+

on(type: 'bufferingUpdate', callback: (infoType: BufferingInfoType, value: number) => void): void

开始订阅音频缓存更新事件。

**系统能力：** SystemCapability.Multimedia.Media.AudioPlayer

**参数：**

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
type | string | 是 | 音频缓存事件回调类型，支持的事件：'bufferingUpdate'。  
callback | function | 是 | 音频缓存事件回调方法。 BufferingInfoType为BUFFERING_PERCENT或CACHED_DURATION时，value值有效，否则固定为0。  
  
**示例：**
    
    audioPlayer.on('bufferingUpdate', (infoType, value) => {
        console.log('audio bufferingInfo type: ' + infoType);
        console.log('audio bufferingInfo value: ' + value);
    });

#### [h2]on('play' | 'pause' | 'stop' | 'reset' | 'dataLoad' | 'finish' | 'volumeChange')__

on(type: 'play' | 'pause' | 'stop' | 'reset' | 'dataLoad' | 'finish' | 'volumeChange', callback: () => void): void

开始订阅音频播放事件。

**系统能力：** SystemCapability.Multimedia.Media.AudioPlayer

**参数：**

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
type | string | 是 | 播放事件回调类型，支持的事件包括：'play' | 'pause' | 'stop' | 'reset' | 'dataLoad' | 'finish' | 'volumeChange'。 \- 'play'：完成play()调用，音频开始播放，触发该事件。 \- 'pause'：完成pause()调用，音频暂停播放，触发该事件。 \- 'stop'：完成stop()调用，音频停止播放，触发该事件。 \- 'reset'：完成reset()调用，播放器重置，触发该事件。 \- 'dataLoad'：完成音频数据加载后触发该事件，即src属性设置完成后触发该事件。 \- 'finish'：完成音频播放后触发该事件。 \- 'volumeChange'：完成setVolume()调用，播放音量改变后触发该事件。  
callback | () => void | 是 | 播放事件回调方法。  
  
**示例：**
    
    let audioPlayer = media.createAudioPlayer();  //创建一个音频播放实例
    audioPlayer.on('dataLoad', () => {            //设置'dataLoad'事件回调，src属性设置成功后，触发此回调
        console.info('audio set source success');
        audioPlayer.play();                       //开始播放，并触发'play'事件回调
    });
    audioPlayer.on('play', () => {                //设置'play'事件回调
        console.info('audio play success');
        audioPlayer.seek(30000);                  //调用seek方法，并触发'timeUpdate'事件回调
    });
    audioPlayer.on('pause', () => {               //设置'pause'事件回调
        console.info('audio pause success');
        audioPlayer.stop();                       //停止播放，并触发'stop'事件回调
    });
    audioPlayer.on('reset', () => {               //设置'reset'事件回调
        console.info('audio reset success');
        audioPlayer.release();                    //释放播放实例资源
        audioPlayer = undefined;
    });
    audioPlayer.on('timeUpdate', (seekDoneTime) => {  //设置'timeUpdate'事件回调
        if (seekDoneTime == null) {
            console.info('audio seek fail');
            return;
        }
        console.info('audio seek success, and seek time is ' + seekDoneTime);
        audioPlayer.setVolume(0.5);                //设置音量为50%，并触发'volumeChange'事件回调
    });
    audioPlayer.on('volumeChange', () => {         //设置'volumeChange'事件回调
        console.info('audio volumeChange success');
        audioPlayer.pause();                       //暂停播放，并触发'pause'事件回调
    });
    audioPlayer.on('finish', () => {               //设置'finish'事件回调
        console.info('audio play finish');
        audioPlayer.stop();                        //停止播放，并触发'stop'事件回调
    });
    audioPlayer.on('error', (error) => {           //设置'error'事件回调
        console.info(`audio error called, error: ${error}`);
    });
    
    // 用户选择音频设置fd(本地播放)
    let fdPath = 'fd://'
    // path路径的码流可通过"hdc file send D:\xxx\01.mp3 /data/accounts/account_0/appdata" 命令，将其推送到设备上
    let path = '/data/accounts/account_0/appdata/ohos.xxx.xxx.xxx/01.mp3';
    fileIO.open(path).then((fdNumber) => {
       fdPath = fdPath + '' + fdNumber;
       console.info('open fd success fd is' + fdPath);
    }, (err) => {
       console.info('open fd failed err is' + err);
    }).catch((err) => {
       console.info('open fd failed err is' + err);
    });
    audioPlayer.src = fdPath;  //设置src属性，并触发'dataLoad'事件回调

#### [h2]on('timeUpdate')

on(type: 'timeUpdate', callback: Callback<number>): void

开始订阅音频播放时间戳更新事件。

**系统能力：** SystemCapability.Multimedia.Media.AudioPlayer

**参数：**

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
type | string | 是 | 播放事件回调类型，支持的事件包括：'timeUpdate'。 \- 'timeUpdate'：音频播放时间戳更新，触发该事件。  
callback | Callback<number> | 是 | 播放事件回调方法。回调方法入参为更新后的时间戳。  
  
**示例：**
    
    audioPlayer.on('timeUpdate', (newTime) => {    //设置'timeUpdate'事件回调
        if (newTime == null) {
            console.info('audio timeUpadate fail');
            return;
        }
        console.log('audio timeUpadate success. seekDoneTime: ' + newTime);
    });
    audioPlayer.play();    //开始播放后，自动触发时间戳更新事件

#### [h2]on('error')

on(type: 'error', callback: ErrorCallback): void

开始订阅音频播放错误事件。

**系统能力：** SystemCapability.Multimedia.Media.AudioPlayer

**参数：**

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
type | string | 是 | 播放错误事件回调类型，支持的事件包括：'error'。 \- 'error'：音频播放中发生错误，触发该事件。  
callback | ErrorCallback | 是 | 播放错误事件回调方法。  
  
**示例：**
    
    audioPlayer.on('error', (error) => {      //设置'error'事件回调
        console.info(`audio error called, error: ${error}`); });
    audioPlayer.setVolume(3);  //设置volume为无效值，触发'error'事件

#### AudioState

音频播放的状态机。可通过state属性获取当前状态。

**系统能力：** SystemCapability.Multimedia.Media.AudioPlayer

名称 | 类型 | 描述  
---|---|---  
idle | string | 音频播放空闲。  
playing | string | 音频正在播放。  
paused | string | 音频暂停播放。  
stopped | string | 音频播放停止。  
error8+ | string | 错误状态。  
  
#### VideoPlayer8+

视频播放管理类，用于管理和播放视频媒体。在调用VideoPlayer的方法前，需要先通过createVideoPlayer()构建一个VideoPlayer实例。

视频播放demo可参考：[视频播放开发指导](https://developer.harmonyos.com/cn/docs/documentation/doc-guides/video-playback-0000001281200970)

#### [h2]属性

**系统能力：** SystemCapability.Multimedia.Media.VideoPlayer

名称 | 类型 | 可读 | 可写 | 说明  
---|---|---|---|---  
url8+ | string | 是 | 是 | 视频媒体URL，支持当前主流的视频格式(mp4、mpeg-ts、webm、mkv)。 **支持路径示例** ： 1\. fd类型播放：fd://xx ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230804172540.59718441542532472221052642722718:50001231000000:2800:D574D569A6314CD8147F0CCE70C0B07B29850271E0ECB9C24B741373DE7B2D00.png?needInitFileName=true?needInitFileName=true?needInitFileName=true) 2\. http网络播放: http://xx 3\. https网络播放: https://xx 4\. hls网络播放路径：http://xx或者https://xx **注意事项** ： 使用媒体素材需要获取读权限，否则无法正常播放。  
loop8+ | boolean | 是 | 是 | 视频循环播放属性，设置为'true'表示循环播放。  
currentTime8+ | number | 是 | 否 | 视频的当前播放位置。  
duration8+ | number | 是 | 否 | 视频时长，返回-1表示直播模式。  
state8+ | VideoPlayState | 是 | 否 | 视频播放的状态。  
width8+ | number | 是 | 否 | 视频宽。  
height8+ | number | 是 | 否 | 视频高。  
  
#### [h2]setDisplaySurface8+

setDisplaySurface(surfaceId: string, callback: AsyncCallback<void>): void

通过回调方式设置SurfaceId。

setDisplaySurface需要在设置url和prepare之间，无音频的视频流必须设置Surface否则prepare失败。

**系统能力：** SystemCapability.Multimedia.Media.VideoPlayer

**参数：**

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
surfaceId | string | 是 | SurfaceId  
callback | function | 是 | 设置SurfaceId的回调方法。  
  
**示例：**
    
    videoPlayer.setDisplaySurface(surfaceId, (err) => {
        if (err == null) {
            console.info('setDisplaySurface success!');
        } else {
            console.info('setDisplaySurface fail!');
        }
    });

#### [h2]setDisplaySurface8+

setDisplaySurface(surfaceId: string): Promise<void>

通过Promise方式设置SurfaceId。

setDisplaySurface需要在设置url和prepare之间，无音频的视频流必须设置Surface否则prepare失败。

**系统能力：** SystemCapability.Multimedia.Media.VideoPlayer

**参数：**

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
surfaceId | string | 是 | SurfaceId  
  
**返回值：**

类型 | 说明  
---|---  
Promise<void> | 设置SurfaceId的Promise返回值。  
  
**示例：**
    
    videoPlayer.setDisplaySurface(surfaceId).then(() => {
        console.info('setDisplaySurface success');
    }).catch((error) => {
       console.info(`video catchCallback, error: ${error}`);
    });

#### [h2]prepare8+

prepare(callback: AsyncCallback<void>): void

通过回调方式准备播放视频。

**系统能力：** SystemCapability.Multimedia.Media.VideoPlayer

**参数：**

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
callback | function | 是 | 准备播放视频的回调方法。  
  
**示例：**
    
    videoPlayer.prepare((err) => {
        if (err == null) {
            console.info('prepare success!');
        } else {
            console.info('prepare fail!');
        }
    });

#### [h2]prepare8+

prepare(): Promise<void>

通过Promise方式准备播放视频。

**系统能力：** SystemCapability.Multimedia.Media.VideoPlayer

**返回值：**

类型 | 说明  
---|---  
Promise<void> | 准备播放视频的Promise返回值。  
  
**示例：**
    
    videoPlayer.prepare().then(() => {
        console.info('prepare success');
    }).catch((error) => {
       console.info(`video catchCallback, error: ${error}`);
    });

#### [h2]play8+

play(callback: AsyncCallback<void>): void;

通过回调方式开始播放视频。

**系统能力：** SystemCapability.Multimedia.Media.VideoPlayer

**参数：**

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
callback | function | 是 | 开始播放视频的回调方法。  
  
**示例：**
    
    videoPlayer.play((err) => {
        if (err == null) {
            console.info('play success!');
        } else {
            console.info('play fail!');
        }
    });

#### [h2]play8+

play(): Promise<void>;

通过Promise方式开始播放视频。

**系统能力：** SystemCapability.Multimedia.Media.VideoPlayer

**返回值：**

类型 | 说明  
---|---  
Promise<void> | 开始播放视频的Promise返回值。  
  
**示例：**
    
    videoPlayer.play().then(() => {
        console.info('play success');
    }).catch((error) => {
       console.info(`video catchCallback, error: ${error}`);
    });

#### [h2]pause8+

pause(callback: AsyncCallback<void>): void

通过回调方式暂停播放视频。

**系统能力：** SystemCapability.Multimedia.Media.VideoPlayer

**参数：**

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
callback | function | 是 | 暂停播放视频的回调方法。  
  
**示例：**
    
    videoPlayer.pause((err) => {
        if (err == null) {
            console.info('pause success!');
        } else {
            console.info('pause fail!');
        }
    });

#### [h2]pause8+

pause(): Promise<void>

通过Promise方式暂停播放视频。

**系统能力：** SystemCapability.Multimedia.Media.VideoPlayer

**返回值：**

类型 | 说明  
---|---  
Promise<void> | 暂停播放视频的Promise返回值。  
  
**示例：**
    
    videoPlayer.pause().then(() => {
        console.info('pause success');
    }).catch((error) => {
       console.info(`video catchCallback, error: ${error}`);
    });

#### [h2]stop8+

stop(callback: AsyncCallback<void>): void

通过回调方式停止播放视频。

**系统能力：** SystemCapability.Multimedia.Media.VideoPlayer

**参数：**

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
callback | function | 是 | 停止播放视频的回调方法。  
  
**示例：**
    
    videoPlayer.stop((err) => {
        if (err == null) {
            console.info('stop success!');
        } else {
            console.info('stop fail!');
        }
    });

#### [h2]stop8+

stop(): Promise<void>

通过Promise方式停止播放视频。

**系统能力：** SystemCapability.Multimedia.Media.VideoPlayer

**返回值：**

类型 | 说明  
---|---  
Promise<void> | 停止播放视频的Promise返回值。  
  
**示例：**
    
    videoPlayer.stop().then(() => {
        console.info('stop success');
    }).catch((error) => {
       console.info(`video catchCallback, error: ${error}`);
    });

#### [h2]reset8+

reset(callback: AsyncCallback<void>): void

通过回调方式切换播放视频。

**系统能力：** SystemCapability.Multimedia.Media.VideoPlayer

**参数：**

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
callback | function | 是 | 切换播放视频的回调方法。  
  
**示例：**
    
    videoPlayer.reset((err) => {
        if (err == null) {
            console.info('reset success!');
        } else {
            console.info('reset fail!');
        }
    });

#### [h2]reset8+

reset(): Promise<void>

通过Promise方式切换播放视频。

**系统能力：** SystemCapability.Multimedia.Media.VideoPlayer

**返回值：**

类型 | 说明  
---|---  
Promise<void> | 切换播放视频的Promise返回值。  
  
**示例：**
    
    videoPlayer.reset().then(() => {
        console.info('reset success');
    }).catch((error) => {
       console.info(`video catchCallback, error: ${error}`);
    });

#### [h2]seek8+

seek(timeMs: number, callback: AsyncCallback<number>): void

通过回调方式跳转到指定播放位置，默认跳转到指定时间点的下一个关键帧。

**系统能力：** SystemCapability.Multimedia.Media.VideoPlayer

**参数：**

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
timeMs | number | 是 | 指定的跳转时间节点，单位毫秒（ms）。  
callback | function | 是 | 跳转到指定播放位置的回调方法。  
  
**示例：**
    
    videoPlayer.seek((seekTime, err) => {
        if (err == null) {
            console.info('seek success!');
        } else {
            console.info('seek fail!');
        }
    });

#### [h2]seek8+

seek(timeMs: number, mode:SeekMode, callback: AsyncCallback<number>): void

通过回调方式跳转到指定播放位置。

**系统能力：** SystemCapability.Multimedia.Media.VideoPlayer

**参数：**

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
timeMs | number | 是 | 指定的跳转时间节点，单位毫秒（ms）。  
mode | SeekMode | 是 | 跳转模式。  
callback | function | 是 | 跳转到指定播放位置的回调方法。  
  
**示例：**
    
    videoPlayer.seek((seekTime, seekMode, err) => {
        if (err == null) {
            console.info('seek success!');
        } else {
            console.info('seek fail!');
        }
    });

#### [h2]seek8+

seek(timeMs: number, mode?:SeekMode): Promise<number>

通过Promise方式跳转到指定播放位置，如果没有设置mode则跳转到指定时间点的下一个关键帧。

**系统能力：** SystemCapability.Multimedia.Media.VideoPlayer

**参数：**

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
timeMs | number | 是 | 指定的跳转时间节点，单位毫秒（ms）。  
mode | SeekMode | 否 | 跳转模式。  
  
**返回值：**

类型 | 说明  
---|---  
Promise<void> | 跳转到指定播放位置的Promise返回值。  
  
**示例：**
    
    videoPlayer.seek(seekTime).then((seekDoneTime) => { // seekDoneTime表示seek完成后的时间点
        console.info('seek success');
    }).catch((error) => {
       console.info(`video catchCallback, error: ${error}`);
    });
    
    videoPlayer.seek(seekTime, seekMode).then((seekDoneTime) => {
        console.info('seek success');
    }).catch((error) => {
       console.info(`video catchCallback, error: ${error}`);
    });

#### [h2]setVolume8+

setVolume(vol: number, callback: AsyncCallback<void>): void

通过回调方式设置音量。

**系统能力：** SystemCapability.Multimedia.Media.VideoPlayer

**参数：**

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
vol | number | 是 | 指定的相对音量大小，取值范围为[0.00-1.00]，1表示最大音量，即100%。  
callback | function | 是 | 设置音量的回调方法。  
  
**示例：**
    
    videoPlayer.setVolume((vol, err) => {
        if (err == null) {
            console.info('setVolume success!');
        } else {
            console.info('setVolume fail!');
        }
    });

#### [h2]setVolume8+

setVolume(vol: number): Promise<void>

通过Promise方式设置音量。

**系统能力：** SystemCapability.Multimedia.Media.VideoPlayer

**参数：**

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
vol | number | 是 | 指定的相对音量大小，取值范围为[0.00-1.00]，1表示最大音量，即100%。  
  
**返回值：**

类型 | 说明  
---|---  
Promise<void> | 设置音量的Promise返回值。  
  
**示例：**
    
    videoPlayer.setVolume(vol).then() => {
        console.info('setVolume success');
    }).catch((error) => {
       console.info(`video catchCallback, error: ${error}`);
    });

#### [h2]release8+

release(callback: AsyncCallback<void>): void

通过回调方式释放视频资源。

**系统能力：** SystemCapability.Multimedia.Media.VideoPlayer

**参数：**

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
callback | function | 是 | 释放视频资源的回调方法。  
  
**示例：**
    
    videoPlayer.release((err) => {
        if (err == null) {
            console.info('release success!');
        } else {
            console.info('release fail!');
        }
    });

#### [h2]release8+

release(): Promise<void>

通过Promise方式释放视频资源。

**系统能力：** SystemCapability.Multimedia.Media.VideoPlayer

**返回值：**

类型 | 说明  
---|---  
Promise<void> | 释放视频资源的Promise返回值。  
  
**示例：**
    
    videoPlayer.release().then() => {
        console.info('release success');
    }).catch((error) => {
       console.info(`video catchCallback, error:${error}`);
    });

#### [h2]getTrackDescription8+

getTrackDescription(callback: AsyncCallback<Array<MediaDescription>>): void

通过回调方式获取视频轨道信息。

**系统能力：** SystemCapability.Multimedia.Media.VideoPlayer

**参数：**

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
callback | AsyncCallback<Array<MediaDescription>> | 是 | 获取视频轨道信息回调方法。  
  
**示例：**
    
    function printfDescription(obj) {
        for (let item in obj) {
            let property = obj[item];
            console.info('video key is ' + item);
            console.info('video value is ' + property);
        }
    }
    
    videoPlayer.getTrackDescription((error, arrlist) => {
        if (arrlist != null) {
            for (let i = 0; i < arrlist.length; i++) {
                printfDescription(arrlist[i]);
            }
        } else {
            console.log(`video getTrackDescription fail, error:${error}`);
        }
    });

#### [h2]getTrackDescription8+

getTrackDescription(): Promise<Array<MediaDescription>>

通过Promise方式获取视频轨道信息。

**系统能力：** SystemCapability.Multimedia.Media.VideoPlayer

**返回值：**

类型 | 说明  
---|---  
Promise<Array<MediaDescription>> | 获取视频轨道信息Promise返回值。  
  
**示例：**
    
    function printfDescription(obj) {
        for (let item in obj) {
            let property = obj[item];
            console.info('video key is ' + item);
            console.info('video value is ' + property);
        }
    }
    
    let arrayDescription;
    videoPlayer.getTrackDescription().then((arrlist) => {
        if (arrlist != null) {
            arrayDescription = arrlist;
        } else {
            console.log('video getTrackDescription fail');
        }
    }).catch((error) => {
       console.info(`video catchCallback, error:${error}`);
    });
    for (let i = 0; i < arrayDescription.length; i++) {
        printfDescription(arrayDescription[i]);
    }

#### [h2]setSpeed8+

setSpeed(speed:number, callback: AsyncCallback<number>): void

通过回调方式设置播放速度。

**系统能力：** SystemCapability.Multimedia.Media.VideoPlayer

**参数：**

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
speed | number | 是 | 指定播放视频速度，具体见PlaybackSpeed。  
callback | function | 是 | 设置播放速度的回调方法。  
  
**示例：**
    
    videoPlayer.setSpeed((speed:number, err) => {
        if (err == null) {
            console.info('setSpeed success!');
        } else {
            console.info('setSpeed fail!');
        }
    });

#### [h2]setSpeed8+

setSpeed(speed:number): Promise<number>

通过Promise方式设置播放速度。

**系统能力：** SystemCapability.Multimedia.Media.VideoPlayer

**参数：**

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
speed | number | 是 | 指定播放视频速度，具体见PlaybackSpeed。  
  
**返回值：**

类型 | 说明  
---|---  
Promise<number> | 通过Promise获取设置结果。  
  
**示例：**
    
    videoPlayer.setSpeed(speed).then() => {
        console.info('setSpeed success');
    }).catch((error) => {
       console.info(`video catchCallback, error:${error}`);
    });

#### [h2]on('playbackCompleted')8+

on(type: 'playbackCompleted', callback: Callback<void>): void

开始监听视频播放完成事件。

**系统能力：** SystemCapability.Multimedia.Media.VideoPlayer

**参数：**

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
type | string | 是 | 视频播放完成事件回调类型，支持的事件：'playbackCompleted'。  
callback | function | 是 | 视频播放完成事件回调方法。  
  
**示例：**
    
    videoPlayer.on('playbackCompleted', () => {
        console.info('playbackCompleted success!');
    });

#### [h2]on('bufferingUpdate')8+

on(type: 'bufferingUpdate', callback: (infoType: BufferingInfoType, value: number) => void): void

开始监听视频缓存更新事件。

**系统能力：** SystemCapability.Multimedia.Media.VideoPlayer

**参数：**

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
type | string | 是 | 视频缓存事件回调类型，支持的事件：'bufferingUpdate'。  
callback | function | 是 | 视频缓存事件回调方法。 BufferingInfoType为BUFFERING_PERCENT或CACHED_DURATION时，value值有效，否则固定为0。  
  
**示例：**
    
    videoPlayer.on('bufferingUpdate', (infoType, value) => {
        console.log('video bufferingInfo type: ' + infoType);
        console.log('video bufferingInfo value: ' + value);
    });

#### [h2]on('startRenderFrame')8+

on(type: 'startRenderFrame', callback: Callback<void>): void

开始监听视频播放首帧送显上报事件。

**系统能力：** SystemCapability.Multimedia.Media.VideoPlayer

**参数：**

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
type | string | 是 | 视频播放首帧送显上报事件回调类型，支持的事件：'startRenderFrame'。  
callback | Callback<void> | 是 | 视频播放首帧送显上报事件回调方法。  
  
**示例：**
    
    videoPlayer.on('startRenderFrame', () => {
        console.info('startRenderFrame success!');
    });

#### [h2]on('videoSizeChanged')8+

on(type: 'videoSizeChanged', callback: (width: number, height: number) => void): void

开始监听视频播放宽高变化事件。

**系统能力：** SystemCapability.Multimedia.Media.VideoPlayer

**参数：**

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
type | string | 是 | 视频播放宽高变化事件回调类型，支持的事件：'videoSizeChanged'。  
callback | function | 是 | 视频播放宽高变化事件回调方法，width表示宽，height表示高。  
  
**示例：**
    
    videoPlayer.on('videoSizeChanged', (width, height) => {
        console.log('video width is: ' + width);
        console.log('video height is: ' + height);
    });

#### [h2]on('error')8+

on(type: 'error', callback: ErrorCallback): void

开始监听视频播放错误事件。

**系统能力：** SystemCapability.Multimedia.Media.VideoPlayer

**参数：**

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
type | string | 是 | 播放错误事件回调类型，支持的事件包括：'error'。 \- 'error'：视频播放中发生错误，触发该事件。  
callback | ErrorCallback | 是 | 播放错误事件回调方法。  
  
**示例：**
    
    videoPlayer.on('error', (error) => {      // 设置'error'事件回调
        console.info(`video error called, errer: ${error}`); 
    });
    videoPlayer.setVolume(3);  //设置volume为无效值，触发'error'事件

#### VideoPlayState8+

视频播放的状态机，可通过state属性获取当前状态。

**系统能力：** SystemCapability.Multimedia.Media.VideoPlayer

名称 | 类型 | 描述  
---|---|---  
idle | string | 视频播放空闲。  
prepared | string | 视频播放准备。  
playing | string | 视频正在播放。  
paused | string | 视频暂停播放。  
stopped | string | 视频播放停止。  
error | string | 错误状态。  
  
#### SeekMode8+

视频播放的Seek模式枚举，可通过seek方法作为参数传递下去。

**系统能力：** SystemCapability.Multimedia.Media.Core

名称 | 值 | 描述  
---|---|---  
SEEK_NEXT_SYNC | 0 | 表示跳转到指定时间点的下一个关键帧，建议向后快进的时候用这个枚举值。  
SEEK_PREV_SYNC | 1 | 表示跳转到指定时间点的上一个关键帧，建议向前快进的时候用这个枚举值。  
  
#### PlaybackSpeed8+

视频播放的倍速枚举，可通过setSpeed方法作为参数传递下去。

**系统能力：** SystemCapability.Multimedia.Media.VideoPlayer

名称 | 值 | 描述  
---|---|---  
SPEED_FORWARD_0_75_X | 0 | 表示视频播放正常播速的0.75倍。  
SPEED_FORWARD_1_00_X | 1 | 表示视频播放正常播速。  
SPEED_FORWARD_1_25_X | 2 | 表示视频播放正常播速的1.25倍。  
SPEED_FORWARD_1_75_X | 3 | 表示视频播放正常播速的1.75倍。  
SPEED_FORWARD_2_00_X | 4 | 表示视频播放正常播速的2.00倍。  
  
#### MediaDescription8+

#### [h2][key : string] : Object

通过key-value方式获取媒体信息。

**系统能力：** SystemCapability.Multimedia.Media.Core

名称 | 类型 | 说明  
---|---|---  
key | string | 通过key值获取对应的value。key值具体可见MediaDescriptionKey。  
value | any | 对应key值得value。其类型可为任意类型，具体key对应value的类型可参考MediaDescriptionKey的描述信息。  
  
**示例：**
    
    function printfItemDescription(obj, key) {
        let property = obj[key];
        console.info('audio key is ' + key);
        console.info('audio value is ' + property);
    }
    
    audioPlayer.getTrackDescription((error, arrlist) => {
        if (arrlist != null) {
            for (let i = 0; i < arrlist.length; i++) {
                printfItemDescription(arrlist[i], MD_KEY_TRACK_TYPE);  //打印出每条轨道MD_KEY_TRACK_TYPE的值
            }
        } else {
            console.log(`audio getTrackDescription fail, error:${error}`);
        }
    });

#### AudioRecorder

音频录制管理类，用于录制音频媒体。在调用AudioRecorder的方法前，需要先通过createAudioRecorder() 构建一个AudioRecorder实例。

音频录制demo可参考：[音频录制开发指导](https://developer.harmonyos.com/cn/docs/documentation/doc-guides/audio-recorder-0000001333800377)

#### [h2]prepare __

prepare(config: AudioRecorderConfig): void

录音准备。

**需要权限：** ohos.permission.MICROPHONE

**系统能力：** SystemCapability.Multimedia.Media.AudioRecorder

**参数：**

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
config | AudioRecorderConfig | 是 | 配置录音的相关参数，包括音频输出URI、编码格式、采样率、声道数、输出格式等。  
  
**示例：**
    
    let audioRecorderConfig = {
        audioEncoder : media.AudioEncoder.AAC_LC,
        audioEncodeBitRate : 22050,
        audioSampleRate : 22050,
        numberOfChannels : 2,
        format : media.AudioOutputFormat.AAC_ADTS,
        uri : 'fd://1',       // 文件需先由调用者创建，并给予适当的权限
        location : { latitude : 30, longitude : 130},
    }
    audioRecorder.on('prepare', () => {    //设置'prepare'事件回调
        console.log('prepare success');
    });
    audioRecorder.prepare(audioRecorderConfig);

#### [h2]start __

start(): void

开始录制，需在prepare事件成功触发后，才能调用start方法。

**系统能力：** SystemCapability.Multimedia.Media.AudioRecorder

**示例：**
    
    audioRecorder.on('start', () => {    //设置'start'事件回调
        console.log('audio recorder start success');
    });
    audioRecorder.start();

#### [h2]pause __

pause():void

暂停录制，需要在start事件成功触发后，才能调用pause方法。

**系统能力：** SystemCapability.Multimedia.Media.AudioRecorder

**示例：**
    
    audioRecorder.on('pause', () => {    //设置'pause'事件回调
        console.log('audio recorder pause success');
    });
    audioRecorder.pause();

#### [h2]resume __

resume():void

恢复录制，需要在pause事件成功触发后，才能调用resume方法。

**系统能力：** SystemCapability.Multimedia.Media.AudioRecorder

**示例：**
    
    audioRecorder.on('resume', () => {    //设置'resume'事件回调
        console.log('audio recorder resume success');
    });
    audioRecorder.resume();

#### [h2]stop __

stop(): void

停止录音。

**系统能力：** SystemCapability.Multimedia.Media.AudioRecorder

**示例：**
    
    audioRecorder.on('stop', () => {    //设置'stop'事件回调
        console.log('audio recorder stop success');
    });
    audioRecorder.stop();

#### [h2]release __

release(): void

释放录音资源。

**系统能力：** SystemCapability.Multimedia.Media.AudioRecorder

**示例：**
    
    audioRecorder.on('release', () => {    //设置'release'事件回调
        console.log('audio recorder release success');
    });
    audioRecorder.release();
    audioRecorder = undefined;

#### [h2]reset __

reset(): void

重置录音。

进行重置录音之前，需要先调用stop()停止录音。重置录音之后，需要调用prepare()设置录音参数项，才能再次进行录音。

**系统能力：** SystemCapability.Multimedia.Media.AudioRecorder

**示例：**
    
    audioRecorder.on('reset', () => {    //设置'reset'事件回调
        console.log('audio recorder reset success');
    });
    audioRecorder.reset();

#### [h2]on('prepare' | 'start' | 'pause' | 'resume' | 'stop' | 'release' | 'reset')__

on(type: 'prepare' | 'start' | 'pause' | 'resume' | 'stop' | 'release' | 'reset', callback: () => void): void

开始订阅音频录制事件。

**系统能力：** SystemCapability.Multimedia.Media.AudioRecorder

**参数：**

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
type | string | 是 | 录制事件回调类型，支持的事件包括：'prepare' | 'start' | 'pause' | ’resume‘ | 'stop' | 'release' | 'reset'。 \- 'prepare' ：完成prepare调用，音频录制参数设置完成，触发该事件。 \- 'start' ：完成start调用，音频录制开始，触发该事件。 \- 'pause': 完成pause调用，音频暂停录制，触发该事件。 \- 'resume': 完成resume调用，音频恢复录制，触发该事件。 \- 'stop' ：完成stop调用，音频停止录制，触发该事件。 \- 'release' ：完成release调用，音频释放录制资源，触发该事件。 \- 'reset'：完成reset调用，音频重置为初始状态，触发该事件。  
callback | ()=>void | 是 | 录制事件回调方法。  
  
**示例：**
    
    let audiorecorder = media.createAudioRecorder();                                  // 创建一个音频录制实例
    let audioRecorderConfig = {
        audioEncoder : media.AudioEncoder.AAC_LC, ,
        audioEncodeBitRate : 22050,
        audioSampleRate : 22050,
        numberOfChannels : 2,
        format : media.AudioOutputFormat.AAC_ADTS,
        uri : 'fd://xx',                                                            // 文件需先由调用者创建，并给予适当的权限
        location : { latitude : 30, longitude : 130},
    }
    audioRecorder.on('error', (error) => {                                             // 设置'error'事件回调
        console.info(`audio error called, err: ${error}`);
    });
    audioRecorder.on('prepare', () => {                                              // 设置'prepare'事件回调
        console.log('prepare success');
        audioRecorder.start();                                                       // 开始录制，并触发'start'事件回调
    });
    audioRecorder.on('start', () => {                                                 // 设置'start'事件回调
        console.log('audio recorder start success');
    });
    audioRecorder.on('pause', () => {                                                 // 设置'pause'事件回调
        console.log('audio recorder pause success');
    });
    audioRecorder.on('resume', () => {                                                 // 设置'resume'事件回调
        console.log('audio recorder resume success');
    });
    audioRecorder.on('stop', () => {                                                 // 设置'stop'事件回调
        console.log('audio recorder stop success');
    });
    audioRecorder.on('release', () => {                                                 // 设置'release'事件回调
        console.log('audio recorder release success');
    });
    audioRecorder.on('reset', () => {                                                 // 设置'reset'事件回调
        console.log('audio recorder reset success');
    });
    audioRecorder.prepare(audioRecorderConfig)                                       // 设置录制参数 ，并触发'prepare'事件回调

#### [h2]on('error')

on(type: 'error', callback: ErrorCallback): void

开始订阅音频录制错误事件。

**系统能力：** SystemCapability.Multimedia.Media.AudioRecorder

**参数：**

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
type | string | 是 | 录制错误事件回调类型'error'。 \- 'error'：音频录制过程中发生错误，触发该事件。  
callback | ErrorCallback | 是 | 录制错误事件回调方法。  
  
**示例：**
    
    audioRecorder.on('error', (error) => {                                  // 设置'error'事件回调
        console.info(`audio error called, error: ${error}`);
    });
    audioRecorder.prepare();                                                  // prepare不设置参数，触发'error'事件

#### AudioRecorderConfig

表示音频的录音配置。

**系统能力：** SystemCapability.Multimedia.Media.AudioRecorder

名称 | 参数类型 | 必填 | 说明  
---|---|---|---  
audioEncoder(deprecated) | AudioEncoder | 否 | 音频编码格式，默认设置为AAC_LC。 说明：  从 API Version 8 开始废弃，建议使用audioEncoderMime替代。  
audioEncodeBitRate | number | 否 | 音频编码比特率，默认值为48000。  
audioSampleRate | number | 否 | 音频采集采样率，默认值为48000。  
numberOfChannels | number | 否 | 音频采集声道数，默认值为2。  
format(deprecated) | AudioOutputFormat | 否 | 音频输出封装格式，默认设置为MPEG_4。 说明：  从 API Version 8 开始废弃，建议使用fileFormat替代。  
location | Location | 否 | 音频采集的地理位置。  
uri | string | 是 | 音频输出URI：fd://xx (fd number) ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230804172540.94453489632705068055152332052367:50001231000000:2800:05090002D0B5D87383A2AA6CFC9FC947CE0A5BA895FAB2E9A5C7B2B0333CB055.png?needInitFileName=true?needInitFileName=true?needInitFileName=true) 文件需要由调用者创建，并赋予适当的权限。  
audioEncoderMime8+ | CodecMimeType | 否 | 音频编码格式。  
fileFormat8+ | ContainerFormatType | 否 | 音频输出封装格式。  
  
#### AudioEncoder(deprecated)

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230804172540.15844742175904537307156810649174:50001231000000:2800:C01DE4D2FA7A9F212E35C5EE4DA16073C3F87B72195E31FE032A7CD990A7812B.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)

从 API Version 8 开始废弃，建议使用CodecMimeType替代。

表示音频编码格式的枚举。

**系统能力：** SystemCapability.Multimedia.Media.AudioRecorder

名称 | 默认值 | 说明  
---|---|---  
DEFAULT | 0 | 默认编码格式。 仅做接口定义，暂不支持使用。  
AMR_NB | 1 | AMR-NB(Adaptive Multi Rate-Narrow Band Speech Codec) 编码格式。 仅做接口定义，暂不支持使用。  
AMR_WB | 2 | AMR-WB(Adaptive Multi Rate-Wide Band Speech Codec) 编码格式。 仅做接口定义，暂不支持使用。  
AAC_LC | 3 | AAC-LC（Advanced Audio Coding Low Complexity）编码格式。  
HE_AAC | 4 | HE_AAC（High-Efficiency Advanced Audio Coding）编码格式。 仅做接口定义，暂不支持使用。  
  
#### AudioOutputFormat(deprecated)

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230804172540.91315535512619286592423434919743:50001231000000:2800:646648B9F01A5831891C037F21D8D99D17FAE1EC4A724E88DEF58FE98B0BF910.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)

从 API Version 8 开始废弃，建议使用ContainerFormatType 替代。

表示音频封装格式的枚举。

**系统能力：** SystemCapability.Multimedia.Media.AudioRecorder

名称 | 默认值 | 说明  
---|---|---  
DEFAULT | 0 | 默认封装格式。 仅做接口定义，暂不支持使用。  
MPEG_4 | 2 | 封装为MPEG-4格式。  
AMR_NB | 3 | 封装为AMR_NB格式。 仅做接口定义，暂不支持使用。  
AMR_WB | 4 | 封装为AMR_WB格式。 仅做接口定义，暂不支持使用。  
AAC_ADTS | 6 | 封装为ADTS（Audio Data Transport Stream）格式，是AAC音频的传输流格式。  
  
#### ContainerFormatType8+

表示容器格式类型的枚举，缩写为CFT。

**系统能力：** SystemCapability.Multimedia.Media.Core

名称 | 值 | 说明  
---|---|---  
CFT_MPEG_4 | "mp4" | 视频的容器格式，MP4。  
CFT_MPEG_4A | "m4a" | 音频的容器格式，M4A。  
  
#### Location

视频录制的地理位置。

**系统能力：** SystemCapability.Multimedia.Media.Core

名称 | 参数类型 | 必填 | 说明  
---|---|---|---  
latitude | number | 是 | 地理位置的纬度。  
longitude | number | 是 | 地理位置的经度。
