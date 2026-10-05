---
name: document/cn/doc-references/ts-media-components-video-0000001333641101
title: Video
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/ts-media-components-video-0000001333641101
source: portal
---

Video 用于播放视频文件并控制其播放状态的组件。 ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230804172431.53069593222065721639279220756680:50001231000000:2800:539F04893E2E4F7768260EFAC498B58E51713E3AED21D384B7B8E7DC17BB784B.png?needInitFileName=true?needInitFileName=true?needInitFileName=true) 该组件从API Version 7开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。 需要权限 使用网络视频时，需要申请权限ohos.permission.INTERNET。具体申请方式请参考[权限申请声明](https://developer.harmonyos.com/cn/docs/documentation/doc-guides/accesstoken-guidelines-0000001333800609#ZH-CN_TOPIC_0000001333800609__权限申请声明)。 子组件 不支持子组件。 接口 Video(value: {src?: string | Resource, currentProgressRate?: number | string | PlaybackSpeed, previewUri?: string | PixelMap | Resource, controller?: VideoController}) **参数：** 参数名 | 参数类型 | 必填 | 默认值 | 参数描述  
---|---|---|---|---  
src | string | [Resource](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ts-types-0000001281480778#ZH-CN_TOPIC_0000001281480778__resource) | 否 | - | 视频播放源的路径，支持本地视频路径和网络路径。 支持在resources下面的video或rawfile文件夹里放置媒体资源。 支持dataability://的路径前缀，用于访问通过Data Ability提供的视频路径，具体路径信息详见Data Ability说明。  
currentProgressRate | number | PlaybackSpeed8+ | 否 | 1.0 | PlaybackSpeed. Speed_Forward_1_00_X | 视频播放倍速。 **说明：** number取值仅支持：0.75，1.0，1.25，1.75，2.0。  
previewUri | string | PixelMap8+ | [Resource](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ts-types-0000001281480778#ZH-CN_TOPIC_0000001281480778__resource) | 否 | - | 预览图片的路径。  
controller | VideoController | 否 | - | 控制器。  
PlaybackSpeed8+类型接口说明 名称 | 描述  
---|---  
Speed_Forward_0_75_X | 0.75倍速播放。  
Speed_Forward_1_00_X | 1倍速播放。  
Speed_Forward_1_25_X | 1.25倍速播放。  
Speed_Forward_1_75_X | 1.75倍速播放。  
Speed_Forward_2_00_X | 2倍速播放。  
属性 名称 | 参数类型 | 默认值 | 描述  
---|---|---|---  
muted | boolean | false | 是否静音。  
autoPlay | boolean | false | 是否自动播放。  
controls | boolean | true | 控制视频播放的控制栏是否显示。  
objectFit | [ImageFit](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ts-appendix-enums-0000001281201130#ZH-CN_TOPIC_0000001281201130__imagefit) | Cover | 设置视频显示模式。  
loop | boolean | false | 是否单个视频循环播放。  
事件 名称 | 功能描述  
---|---  
onStart(event:() => void) | 播放时触发该事件。  
onPause(event:() => void) | 暂停时触发该事件。  
onFinish(event:() => void) | 播放结束时触发该事件。  
onError(event:() => void) | 播放失败时触发该事件。  
onPrepared(callback:(event?: { duration: number }) => void) | 视频准备完成时触发该事件，通过duration可以获取视频时长，单位为s。 \- duration: 视频的时长。  
onSeeking(callback:(event?: { time: number }) => void) | 操作进度条过程时上报时间信息，单位为s。  
onSeeked(callback:(event?: { time: number }) => void) | 操作进度条完成后，上报播放时间信息，单位为s。  
onUpdate(callback:(event?: { time: number }) => void) | 播放进度变化时触发该事件，单位为s，更新时间间隔为250ms。  
VideoController 一个VideoController对象可以控制一个或多个video。 [h2]导入对象
    
    controller: VideoController = new VideoController();

[h2]start start(): void 开始播放。 [h2]pause pause(): void 暂停播放。 [h2]stop stop(): void 停止播放。 [h2]setCurrentTime setCurrentTime(value: number) 指定视频播放的进度位置。 **参数：** 参数名 | 参数类型 | 必填 | 默认值 | 参数描述  
---|---|---|---|---  
value | number | 是 | - | 视频播放进度位置。  
[h2]requestFullscreen requestFullscreen(value: boolean) 请求全屏播放。 **参数：** 参数名 | 参数类型 | 必填 | 默认值 | 参数描述  
---|---|---|---|---  
value | number | 是 | false | 是否全屏播放。  
[h2]exitFullscreen exitFullscreen() 退出全屏播放。 [h2]setCurrentTime8+ setCurrentTime(value: number, seekMode: SeekMode) 指定视频播放的进度位置，并指定跳转模式。 **参数：** 参数名 | 参数类型 | 必填 | 默认值 | 参数描述  
---|---|---|---|---  
value | number | 是 | - | 视频播放进度位置。  
seekMode | SeekMode | 是 | - | 跳转模式。  
SeekMode8+类型接口说明 名称 | 描述  
---|---  
PreviousKeyframe | 跳转到前一个最近的关键帧。  
NextKeyframe | 跳转到后一个最近的关键帧。  
ClosestKeyframe | 跳转到最近的关键帧。  
Accurate | 精准跳转，不论是否为关键帧。  
示例
    
    // xxx.ets
    @Entry
    @Component
    struct VideoCreateComponent {
      @State videoSrc: Resource = $rawfile('video1.mp4')
      @State previewUri: Resource = $r('app.media.poster1')
      @State curRate: PlaybackSpeed = PlaybackSpeed.Speed_Forward_1_00_X
      @State isAutoPlay: boolean = false
      @State showControls: boolean = true
      controller: VideoController = new VideoController()
    
      build() {
        Column() {
          Video({
            src: this.videoSrc,
            previewUri: this.previewUri,
            currentProgressRate: this.curRate,
            controller: this.controller
          }).width(800).height(600)
            .autoPlay(this.isAutoPlay)
            .controls(this.showControls)
            .onStart(() => {
              console.info('onStart')
            })
            .onPause(() => {
              console.info('onPause')
            })
            .onFinish(() => {
              console.info('onFinish')
            })
            .onError(() => {
              console.info('onFinish')
            })
            .onPrepared((e) => {
              console.info('onPrepared is ' + e.duration)
            })
            .onSeeking((e) => {
              console.info('onSeeking is ' + e.time)
            })
            .onSeeked((e) => {
              console.info('onSeeked is ' + e.time)
            })
            .onUpdate((e) => {
              console.info('onUpdate is ' + e.time)
            })
          
          Row() {
            Button('src').onClick(() => {
              this.videoSrc = $rawfile('video2.mp4') // 切换视频源
            }).margin(5)
            Button('previewUri').onClick(() => {
              this.previewUri = $r('app.media.poster2') // 切换视频预览海报
            }).margin(5)
            Button('controls').onClick(() => {
              this.showControls = !this.showControls // 切换是否显示视频控制栏
            }).margin(5)
          }
    
          Row() {
            Button('start').onClick(() => {
              this.controller.start() // 开始播放
            }).margin(5)
            Button('pause').onClick(() => {
              this.controller.pause() // 暂停播放
            }).margin(5)
            Button('stop').onClick(() => {
              this.controller.stop() // 结束播放
            }).margin(5)
            Button('setTime').onClick(() => {
              this.controller.setCurrentTime(10, SeekMode.Accurate) // 精准跳转到视频的10s位置
            }).margin(5)
          }
    
          Row() {
            Button('rate 0.75').onClick(() => {
              this.curRate = PlaybackSpeed.Speed_Forward_0_75_X // 0.75倍速播放
            }).margin(5)
            Button('rate 1').onClick(() => {
              this.curRate = PlaybackSpeed.Speed_Forward_1_00_X // 原倍速播放
            }).margin(5)
            Button('rate 2').onClick(() => {
              this.curRate = PlaybackSpeed.Speed_Forward_2_00_X // 2倍速播放
            }).margin(5)
          }
        }
      }
    }
