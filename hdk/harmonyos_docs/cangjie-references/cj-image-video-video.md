---
name: cangjie-references/cj-image-video-video
title: Video
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-image-video-video
nodePath: 应用框架 / ArkUI（方舟UI框架） / 仓颉组件 / 图片与视频 / Video
---

# Video

用于播放视频文件并控制其播放状态的组件。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5a/v3/-srlsSJkSyCd5LHUt277gw/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090150Z&HW-CC-Expire=86400&HW-CC-Sign=F845FCAA619C38841234B414D5EDA55991DDDE9CBF7A45C03031225E513362C3)

Video组件只提供简单的视频播放功能，无法支撑复杂的视频播控场景。

#### 导入模块
    
    
    import kit.ArkUI.*

#### 权限列表

使用网络视频时，需要申请权限ohos.permission.INTERNET。

#### 子组件

不支持子组件。

#### 创建组件

#### [h2]init(?ResourceStr, ?PlaybackSpeed, ?ResourceStr, ?VideoController)
    
    
    public init(
        src!: ?ResourceStr = None,
        currentProgressRate!: ?PlaybackSpeed = Option.None,
        previewUri!: ?ResourceStr = None,
        controller!: ?VideoController = None
    )

**功能：** 根据视频的数据源，播放倍速，预览图片和视频控制器创建一个 video 组件。

**需要权限：** 使用网络视频时，需要申请权限ohos.permission.INTERNET。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
src | ?[ResourceStr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcestr) | 否 | None | **命名参数。** 视频的数据源，支持本地视频和网络视频。  
currentProgressRate | ?[PlaybackSpeed](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-playbackspeed) | 否 | Option.None | **命名参数。** 视频播放倍速。 初始值：SpeedForward100X。  
previewUri | ?[ResourceStr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcestr) | 否 | None | **命名参数。** 视频未播放时的预览图片路径。  
controller | ?VideoController | 否 | None | **命名参数。** 设置视频控制器，可以控制视频的播放状态。 初始值：VideoController()  
  
#### 通用属性/通用事件

通用属性：全部支持。

通用事件：全部支持。

#### 组件属性

#### [h2]func autoPlay(?Bool)
    
    
    public func autoPlay(value: ?Bool): This

**功能：** 设置视频是否自动播放。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?Bool | 是 | - | 视频是否自动播放。 初始值：false。  
  
#### [h2]func controls(?Bool)
    
    
    public func controls(value: ?Bool): This

**功能：** 设置控制视频播放的控制栏是否显示。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?Bool | 是 | - | 是否显示控制栏。 初始值：true。  
  
#### [h2]func loop(?Bool)
    
    
    public func loop(value: ?Bool): This

**功能：** 设置是否单个视频循环播放。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?Bool | 是 | - | 视频是否循环播放。 初始值：false。  
  
#### [h2]func muted(?Bool)
    
    
    public func muted(value: ?Bool): This

**功能：** 设置视频是否静音。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?Bool | 是 | - | 视频是否静音。 初始值：false。  
  
#### [h2]func objectFit(?ImageFit)
    
    
    public func objectFit(value: ?ImageFit): This

**功能：** 设置视频填充模式。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?[ImageFit](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-imagefit) | 是 | - | 视频填充模式。 初始值：ImageFit.Cover。  
  
#### 组件事件

#### [h2]func onError(?VoidCallback)
    
    
    public func onError(event: ?VoidCallback): This

**功能：** 播放失败时触发该事件。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
event | ?[VoidCallback](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#type-voidcallback) | 是 | - | 回调函数，播放失败时触发。 初始值：{ => }  
  
#### [h2]func onFinish(?VoidCallback)
    
    
    public func onFinish(event: ?VoidCallback): This

**功能：** 播放结束时触发该事件。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
event | ?[VoidCallback](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#type-voidcallback) | 是 | - | 回调函数，播放结束时触发。 初始值：{ => }  
  
#### [h2]func onPause(?VoidCallback)
    
    
    public func onPause(event: ?VoidCallback): This

**功能：** 暂停播放时触发该事件。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
event | ?[VoidCallback](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#type-voidcallback) | 是 | - | 回调函数，暂停播放时触发。 初始值：{ => }  
  
#### [h2]func onPrepared(?Callback<PreparedInfo, Unit>)
    
    
    public func onPrepared(callback: ?Callback<PreparedInfo, Unit>): This

**功能：** 视频准备完成时触发该事件。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
callback | ?[Callback](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#type-callbackt-v)<PreparedInfo, Unit> | 是 | - | 回调函数，视频准备完成时触发。 初始值：{ _ => }  
  
#### [h2]func onSeeked(?Callback<PlaybackInfo, Unit>)
    
    
    public func onSeeked(callback: ?Callback<PlaybackInfo, Unit>): This

**功能：** 操作进度条完成后触发该事件，上报播放时间信息。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
callback | ?[Callback](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#type-callbackt-v)<PlaybackInfo, Unit> | 是 | - | 回调函数，操作进度条完成后触发。 初始值：{ _ => }  
  
#### [h2]func onSeeking(?Callback<PlaybackInfo, Unit>)
    
    
    public func onSeeking(callback: ?Callback<PlaybackInfo, Unit>): This

**功能：** 操作进度条过程时触发该事件，上报时间信息。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
callback | ?[Callback](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#type-callbackt-v)<PlaybackInfo, Unit> | 是 | - | 回调函数，操作进度条过程时触发。 初始值：{ _ => }  
  
#### [h2]func onStart(?VoidCallback)
    
    
    public func onStart(event: ?VoidCallback): This

**功能：** 播放时触发该事件。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
event | ?[VoidCallback](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#type-voidcallback) | 是 | - | 回调函数，播放时触发。 初始值：{ => }  
  
#### [h2]func onUpdate(?Callback<PlaybackInfo, Unit>)
    
    
    public func onUpdate(callback: ?Callback<PlaybackInfo, Unit>): This

**功能：** 播放进度变化时触发该事件。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
callback | ?[Callback](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#type-callbackt-v)<PlaybackInfo, Unit> | 是 | - | 回调函数，播放进度变化时触发。 初始值：{ _ => }  
  
#### [h2]func onFullscreenChange(?Callback<FullscreenInfo, Unit>)
    
    
    public func onFullscreenChange(callback: ?Callback<FullscreenInfo, Unit>): This

**功能：** 视频进入和退出全屏时触发该回调。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
callback | ?[Callback](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#type-callbackt-v)<FullscreenInfo, Unit> | 是 | - | 视频进入和退出全屏时的回调函数。 初始值：{ _ => }  
  
#### 基础类型定义

#### [h2]class FullscreenInfo
    
    
    public class FullscreenInfo {
        public var fullscreen: ?Bool
    }

**功能：** 用于描述当前视频是否进入全屏播放状态。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**var fullscreen**
    
    
    public var fullscreen: ?Bool

**功能：** 当前视频是否进入全屏播放状态。

**类型：** ?Bool

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]class PlaybackInfo
    
    
    public class PlaybackInfo {
        public var time: ?Int32
    }

**功能：** 用于描述当前视频播放的进度。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**var time**
    
    
    public var time: ?Int32

**功能：** 当前视频播放的进度。单位：秒。

**类型：** ?Int32

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]class PreparedInfo
    
    
    public class PreparedInfo {
        public var duration: ?Int32
    }

**功能：** 用于描述当前视频的时长。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**var duration**
    
    
    public var duration: ?Int32

**功能：** 当前视频的时长。单位：秒。

**类型：** ?Int32

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]class VideoController
    
    
    public class VideoController {
        public init()
    }

**功能：** 视频控制器。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**init()**
    
    
    public init()

**功能：** VideoController的构造函数。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**func exitFullscreen()**
    
    
    public func exitFullscreen(): Unit

**功能：** 退出全屏播放。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**func pause()**
    
    
    public func pause(): Unit

**功能：** 暂停播放，显示当前帧，再次播放时从当前位置继续播放。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**func requestFullscreen(?Bool)**
    
    
    public func requestFullscreen(value: ?Bool): Unit

**功能：** 请求全屏播放。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?Bool | 是 | - | 是否全屏播放。 初始值：false。  
  
**func setCurrentTime(Int32, ?SeekMode)**
    
    
    public func setCurrentTime(value: Int32, seekMode: ?SeekMode): Unit

**功能：** 指定视频播放的进度位置。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | Int32 | 是 | - | 播放时间。  
seekMode | ?[SeekMode](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-seekmode) | 是 | - | 跳转模式。  
  
**func start()**
    
    
    public func start(): Unit

**功能：** 开始播放。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**func stop()**
    
    
    public func stop(): Unit

**功能：** 停止播放，显示当前帧，再次播放时从头开始播放。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### 示例代码
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.i18n.*
    import ohos.resource.*
    import ohos.arkui.state_macro_manage.*
    
    @Entry
    @Component
    class EntryView {
        var videoSrc: AppResource = @rawfile("video.mp4")
        var previewUri: AppResource = @r(app.media.preview)
        var controller: VideoController = VideoController()
        @State
        var curRate: PlaybackSpeed = PlaybackSpeed.SpeedForward100X
        @State
        var isAutoPlay: Bool = false
        @State
        var showControls: Bool = true
    
        func build() {
            Column() {
                Video(
                    src: this.videoSrc,
                    previewUri: this.previewUri,
                    currentProgressRate: this.curRate,
                    controller: this.controller
                )
                    .width(100.percent)
                    .height(600)
                    .autoPlay(this.isAutoPlay)
                    .controls(this.showControls)
    
                Row() {
                    Button("start")
                        .onClick({ evt
                            => this.controller.start() // 开始播放
                        })
                        .margin(5)
                        .width(100)
                        .id("start")
                    Button("pause")
                        .onClick({ evt
                            => this.controller.pause() // 暂停播放
                        })
                        .margin(5)
                        .width(100)
                        .id("pause")
                    Button("stop")
                        .onClick({ evt
                            => this.controller.stop() // 暂停播放
                               this.controller.exitFullscreen()
                            }
                        )
                        .margin(5)
                        .width(100)
                        .id("stop")
                }
                Row() {
                    Button("Fullscreen")
                        .onClick({ evt
                            => this.controller.requestFullscreen(true)
                        })
                        .margin(5)
                        .width(100)
                        .id("Fullscreen")
                    Button("at 10s")
                        .onClick({ evt
                            => this.controller.setCurrentTime(10, SeekMode.ClosestKeyframe)
                        })
                        .margin(5)
                        .width(100)
                        .id("at 10s")
                    Button("exitFull")
                        .onClick({ evt
                            => this.controller.exitFullscreen()
                        })
                        .margin(5)
                        .width(100)
                        .id("exitFull")
                }
                Row() {
                    Button("rate 0.75")
                        .onClick({
                            evt => this.curRate = PlaybackSpeed.SpeedForward075X
                        })
                        .margin(5)
                        .width(100)
                        .id("rate 0.75")
                    Button("rate 1")
                        .onClick({
                            evt => this.curRate = PlaybackSpeed.SpeedForward100X
                        })
                        .margin(5)
                        .width(100)
                        .id("rate 1")
                    Button("rate 2")
                        .onClick({
                            evt => this.curRate = PlaybackSpeed.SpeedForward200X
                        })
                        .margin(5)
                        .width(100)
                        .id("rate 2")
                }
            }
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5e/v3/cvKYk2AmR9Ct7eo_mXaxUg/zh-cn_image_0000002743077895.gif?HW-CC-KV=V1&HW-CC-Date=20260908T090150Z&HW-CC-Expire=86400&HW-CC-Sign=1867C18FF32A0240AFA4E2D37F1B6A546DCC952CA33B3C0E9082714524BEB55F)
