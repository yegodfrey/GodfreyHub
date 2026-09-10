---
name: cangjie-references/cj-image-video-image
title: Image
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-image-video-image
nodePath: 应用框架 / ArkUI（方舟UI框架） / 仓颉组件 / 图片与视频 / Image
---

# Image

Image为图片组件，常用于在应用中显示图片。支持png、jpg、jpeg、bmp、svg、webp、gif和heif类型的图片格式。

说明：

  * 使用快捷组合键对Image组件复制时，Image组件必须处于[获焦状态](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-focus#func-focusontouchbool)。Image组件默认不获焦，需将[focusable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-window#var-focusable)属性设置为true，即可使用TAB键将焦点切换到组件上，再将[focusOnTouch](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-focus#func-focusontouchbool)属性设置为true，即可实现点击获焦。
  * 图片格式支持SVG图源，SVG标签文档请参考[SVG标签说明](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-image#svg标签说明)。
  * 动图的播放依赖于Image节点的可见性变化，其默认行为是不播放的。当节点可见时，通过回调启动动画，当节点不可见时，停止动画。可见性状态的判断是通过[onVisibleAreaChange](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-event-visibleareachange#func-onvisibleareachangearrayfloat64-bool-float64---unit)事件触发的，当可见阈值ratios大于0时，表明Image处于可见状态。



#### 导入模块
    
    
    import kit.ArkUI.*

#### 权限列表

使用网络图片时，需要在 module.json5 对应的"requestPermissions"中添加网络使用权限ohos.permission.INTERNET。
    
    
    "requestPermissions": [
        { "name": "ohos.permission.INTERNET"}
    ]

#### 子组件

无

#### 创建组件

#### [h2]init(?ResourceStr)
    
    
    public init(src: ?ResourceStr)

**功能：** 通过图片数据源获取图片，用于后续渲染展示。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f/v3/D8-rM3T-Q8qtBBEW_CiKrg/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090149Z&HW-CC-Expire=86400&HW-CC-Sign=98B343E239EE7CE0885A383066F5E9C0B5F15C90AE3FA8A30A6CBCBC73E84D8F)

  * Image组件加载图片失败或图片尺寸为0时，图片组件大小自动为0，不跟随父组件的布局约束。
  * Image组件默认按照居中裁剪，例如组件宽高设置相同，原图长宽不等，此时按照中间区域进行裁剪。
  * Image加载成功且组件不设置宽高时，其显示大小自适应父组件。



**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
src | ?[ResourceStr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcestr) | 是 | - |  图片的数据源。 初始值：""  
  
#### [h2]init(?PixelMap)
    
    
    public init(src: ?PixelMap)

**功能：** 通过图片数据源获取图片，用于后续渲染展示。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8a/v3/XuiNe11tSyCmtM-PODyccQ/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090149Z&HW-CC-Expire=86400&HW-CC-Sign=E97F9236F61DB802B06047A0DE383A89317553D6E1CC1B8FE5840784A363668C)

  * Image组件加载图片失败或图片尺寸为0时，图片组件大小自动为0，不跟随父组件的布局约束。
  * Image组件默认按照居中裁剪，例如组件宽高设置相同，原图长宽不等，此时按照中间区域进行裁剪。
  * Image加载成功且组件不设置宽高时，其显示大小自适应父组件。



**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
src | ?[PixelMap](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-image#class-pixelmap) | 是 | - |  图片的数据源。 PixelMap格式为像素图，常用于图片编辑的场景。  
  
#### 通用属性/通用事件

通用属性：全部支持。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/57/v3/yt-O8k9dSwGhNEMjOaiMjw/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090149Z&HW-CC-Expire=86400&HW-CC-Sign=BE8463A13ACA595F1983FB866836600CE85788A2731588CA1AA79ADB2B9CE406)

Image组件不支持设置通用属性[foregroundColor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-foregroundcolor#func-foregroundcolorresourcecolor)，可以通过Image组件的fillColor属性设置填充颜色。

通用事件：全部支持。

#### 组件属性

#### [h2]func alt(?ResourceStr)
    
    
    public func alt(src: ?ResourceStr): This

**功能：** 设置图片加载时显示的占位图。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
src | ?[ResourceStr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcestr) | 是 | - |  加载时显示的占位图，支持本地图片（png、jpg、bmp、svg、gif和heif类型），不支持网络图片。 初始值：""。  
  
#### [h2]func autoResize(?Bool)
    
    
    public func autoResize(value: ?Bool): This

**功能：** 设置图片解码过程中是否对图源自动缩放。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/19/v3/RQzmzBRMTjinVnhHWeBKgA/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090149Z&HW-CC-Expire=86400&HW-CC-Sign=03BC3C43773B8E8AD77480143157DE09CF0554341F10F6F7C4143071DDAE96FA)

该操作会根据显示区域的尺寸决定用于绘制的图源尺寸，有利于减少内存占用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?Bool | 是 | - |  图片解码过程中是否对图源自动缩放。设置为true时，组件会根据显示区域的尺寸决定用于绘制的图源尺寸，有利于减少内存占用。如原图大小为1920x1080，而显示区域大小为200x200，则图片会降采样解码到200x200的尺寸，大幅度节省图片占用的内存。 初始值：false  
  
#### [h2]func fillColor(?ResourceColor)
    
    
    public func fillColor(value: ?ResourceColor): This

**功能：** 设置替换svg图片的填充颜色。仅对svg图源生效。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e2/v3/0eeXRtGLS7iy6v3kXApNGg/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090149Z&HW-CC-Expire=86400&HW-CC-Sign=DB7542B37EED360344178DBCF33D64C1A001D2985D5414377D8E22EDD8149008)

如需对png图片进行修改颜色，可以使用colorFilter。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?[ResourceColor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcecolor) | 是 | - | 设置填充颜色。  
  
#### [h2]func fitOriginalSize(?Bool)
    
    
    public func fitOriginalSize(value: ?Bool): This

**功能：** 设置图片的显示尺寸是否跟随图源尺寸。图片组件尺寸未设置时，其显示尺寸是否跟随图源尺寸。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?Bool | 是 | - |  是否跟随图源尺寸。 初始值：false。  
  
#### [h2]func interpolation(?ImageInterpolation)
    
    
    public func interpolation(value: ?ImageInterpolation): This

**功能：** 设置图片的插值效果，即缓解图片在缩放时的锯齿问题。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/20/v3/HAWP4jFSRe-1k2GeFWDUDQ/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090149Z&HW-CC-Expire=86400&HW-CC-Sign=508660E914E63D3D47EE2C115F3FDF76FA849C8AD5838B18CA29158145321D74)

  * 减轻低清晰度图片在放大显示的时候出现的锯齿问题，仅针对图片放大插值。
  * svg类型图源不支持该属性。



**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?[ImageInterpolation](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-imageinterpolation) | 是 | - |  图片的插值效果。 初始值：ImageInterpolation.Low。  
  
#### [h2]func matchTextDirection(?Bool)
    
    
    public func matchTextDirection(value: ?Bool): This

**功能：** 设置图片是否跟随系统语言方向，在RTL语言环境下显示镜像翻转显示效果。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?Bool | 是 | - |  是否跟随系统语言方向。 初始值：false。  
  
#### [h2]func objectFit(?ImageFit)
    
    
    public func objectFit(value: ?ImageFit): This

**功能：** 设置图片的填充效果。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?[ImageFit](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-imagefit) | 是 | - |  图片的填充效果。 初始值：ImageFit.Cover。  
  
#### [h2]func objectRepeat(?ImageRepeat)
    
    
    public func objectRepeat(value: ?ImageRepeat): This

**功能：** 设置图片的重复样式。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7e/v3/v1oWA257R46D5vOk8FXd0Q/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090149Z&HW-CC-Expire=86400&HW-CC-Sign=260F4CEF283819BD0A89A29367797DC9AF4D679D8483F307313388394757B8A5)

  * 从中心点向两边重复，剩余空间不足放下一张图片时会截断。
  * svg类型图源不支持该属性。



**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?[ImageRepeat](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-imagerepeat) | 是 | - |  图片的重复样式。 初始值：ImageRepeat.NoRepeat。  
  
#### [h2]func renderMode(?ImageRenderMode)
    
    
    public func renderMode(value: ?ImageRenderMode): This

**功能：** 设置图片的渲染模式。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9f/v3/fwEzubJmTY2BxLwduWw8qA/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090149Z&HW-CC-Expire=86400&HW-CC-Sign=7C95A6AC3411EE4CA9A630C655D5C2082475CA843220254F973AC8C7667BA560)

  * svg类型图源不支持该属性。
  * 设置 ColorFilter 时，该属性设置不生效。



**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?[ImageRenderMode](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-imagerendermode) | 是 | - |  设置图片的渲染模式。SVG类型图源不支持该属性。 初始值：ImageRenderMode.Original。  
  
#### [h2]func sourceSize(?Length, ?Length)
    
    
    public func sourceSize(width: ?Length, height: ?Length): This

**功能：** 将原始图片解码成 PixelMap 指定尺寸的图片。PixelMap资源不支持该函数。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
width | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 是 | - |  图片解码后的宽度。 初始值：0.0.px。  
height | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 是 | - |  图片解码后的高度。 初始值：0.0.px。  
  
#### [h2]func syncLoad(?Bool)
    
    
    public func syncLoad(value: ?Bool): This

**功能：** 设置是否同步加载图片。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/92/v3/8Whxqwv7S5eF2-5kEv1i8w/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090149Z&HW-CC-Expire=86400&HW-CC-Sign=9E6BC5310364D6CC5FE28F175945C64CF65424A53E05A18121E321425C43BB71)

建议加载尺寸较小的本地图片时将syncLoad设为true，因为耗时较短，在主线程上执行即可。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?Bool | 是 | - |  是否同步加载图片，默认是异步加载。同步加载时阻塞UI线程，不会显示占位图。 初始值：false。  
  
#### 组件事件

#### [h2]func onComplete(?ImageCompleteCallback)
    
    
    public func onComplete(callback: ?ImageCompleteCallback): This

**功能：** 图片成功加载时触发该事件，返回成功加载的图片尺寸。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
callback | ?ImageCompleteCallback | 是 | - |  回调函数，图片成功加载时触发。 初始值：{ _ => }。  
  
#### [h2]func onError(?ImageErrorCallback)
    
    
    public func onError(callback: ?ImageErrorCallback): This

**功能：** 图片加载出现异常时触发该事件。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
callback | ?ImageErrorCallback | 是 | - |  回调函数，图片加载出现异常时触发。 初始值：{ _ => }。  
  
#### [h2]func onFinish(?() -> Unit)
    
    
    public func onFinish(event: ?() -> Unit): This

**功能：** 当加载的源文件为带动效的svg图片时，当svg动效播放完成时会触发该事件，如果动效为无限循环动效，则不会触发这个事件。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
event | ?() -> Unit | 是 | - |  回调函数，svg动效播放完成时触发。 初始值：{ => }。  
  
#### 基础类型定义

#### [h2]class ColorFilter
    
    
    public class ColorFilter {
        public init(value: ?Array<Float32>)
    }

**功能：** 颜色滤镜矩阵。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**init(?Array <Float32>)**
    
    
    public init(value: ?Array<Float32>)

**功能：** 构建一个颜色滤镜矩阵。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?Array<Float32> | 是 | - |  4x5的滤镜矩阵。 初始值：[]  
  
#### [h2]class ImageError
    
    
    public class ImageError {
        public var componentWidth: Float64
        public var componentHeight: Float64
        public var message: String
    }

**功能：** 图片加载异常时触发回调的返回对象。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**var componentHeight**
    
    
    public var componentHeight: Float64

**功能：** 组件的高度，单位为px。

**类型：** Float64

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**var componentWidth**
    
    
    public var componentWidth: Float64

**功能：** 组件的宽度，单位为px。

**类型：** Float64

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**var message**
    
    
    public var message: String

**功能：** 错误信息。

**类型：** String

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]class ImageLoadResult
    
    
    public class ImageLoadResult {
        public var width: Float64
        public var height: Float64
        public var componentWidth: Float64
        public var componentHeight: Float64
        public var loadingStatus: Int32
        public var contentWidth: Float64
        public var contentHeight: Float64
        public var contentOffsetX: Float64
        public var contentOffsetY: Float64
    }

**功能：** 图片加载成功类型。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**var componentHeight**
    
    
    public var componentHeight: Float64

**功能：** 组件的高度，单位为px。

**类型：** Float64

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**var componentWidth**
    
    
    public var componentWidth: Float64

**功能：** 组件的宽度，单位为px。

**类型：** Float64

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**var contentHeight**
    
    
    public var contentHeight: Float64

**功能：** 图片实际绘制的高度，单位为px。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e2/v3/VnVegCZWQpe5oUPKZ1rUIA/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090149Z&HW-CC-Expire=86400&HW-CC-Sign=79972D3EA4CDF9AFA4581AB2F2F84A94E333091520BBA2BDF452587E321BFC92)

仅在loadingStatus返回1时有效。

**类型：** Float64

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**var contentOffsetX**
    
    
    public var contentOffsetX: Float64

**功能：** 实际绘制内容相对于组件自身的x轴偏移，单位为px。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5f/v3/xl6IsBdsSOeueV-BV9ShqA/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090149Z&HW-CC-Expire=86400&HW-CC-Sign=B5C2DC958CBE0D46FB63D976BFF492FCED079529ED07032C02A1CBBAB3662603)

仅在loadingStatus返回1时有效。

**类型：** Float64

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**var contentOffsetY**
    
    
    public var contentOffsetY: Float64

**功能：** 实际绘制内容相对于组件自身的y轴偏移，单位为px。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/60/v3/j36sh-1XSjGxX3IgLuWCyQ/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090149Z&HW-CC-Expire=86400&HW-CC-Sign=3DFA30ED82F64A8B72B7C1FCEF9E6C3C944DBE955643BBB5A694A7E689E57415)

仅在loadingStatus返回1时有效。

**类型：** Float64

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**var contentWidth**
    
    
    public var contentWidth: Float64

**功能：** 图片实际绘制的宽度，单位为px。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9/v3/CxfXI6SPTBWZ8Dk3J_Dp5g/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090149Z&HW-CC-Expire=86400&HW-CC-Sign=75131A8A931B2D475700B4E784CB827A0270667B232261811F3FB0B95CB63B1F)

仅在loadingStatus返回1时有效。

**类型：** Float64

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**var height**
    
    
    public var height: Float64

**功能：** 图片的高度，单位为px。

**类型：** Float64

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**var loadingStatus**
    
    
    public var loadingStatus: Int32

**功能：** 图片加载成功的状态。

**类型：** Int32

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**var width**
    
    
    public var width: Float64

**功能：** 图片的宽度，单位为px。

**类型：** Float64

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### type ImageCompleteCallback
    
    
    public type ImageCompleteCallback = (ImageLoadResult) -> Unit

**功能：** 图片加载完成回调函数类型。

**类型：** (ImageLoadResult) -> Unit

#### type ImageErrorCallback
    
    
    public type ImageErrorCallback = (ImageError) -> Unit

**功能：** 图片加载错误回调函数类型。

**类型：** (ImageError) -> Unit

#### 示例代码

#### [h2]示例1（加载基本类型图片）

加载png、gif、svg和jpg等基本类型的图片。
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    import ohos.i18n.*
    import ohos.resource.*
    
    @Entry
    @Component
    class EntryView {
        func build() {
            Flex(direction: FlexDirection.Column, alignItems: ItemAlign.Start) {
                Row() {
                    // 加载png格式图片
                    Image(@r(app.media.startIcon))
                        .width(110)
                        .height(110)
                        .margin(15)
                        .overlay(value: "png", align: Alignment.Bottom, offset: OverlayOffset(x: 0.0, y: 20.0))
                    // 加载gif格式图片
                    Image(@r(app.media.list))
                        .width(110)
                        .height(110)
                        .margin(15)
                        .overlay(value: "gif", align: Alignment.Bottom, offset: OverlayOffset(x: 0.0, y: 20.0))
                }
                Row() {
                    // 加载svg格式图片
                    Image(@r(app.media.svg))
                        .width(110)
                        .height(110)
                        .margin(15)
                        .overlay(value: "svg", align: Alignment.Bottom, offset: OverlayOffset(x: 0.0, y: 20.0))
                    // 加载jpg格式图片
                    Image(@r(app.media.startIcon_jpg))
                        .width(110)
                        .height(110)
                        .margin(15)
                        .overlay(value: "jpg", align: Alignment.Bottom, offset: OverlayOffset(x: 0.0, y: 20.0))
                }
            }
                .height(320)
                .width(360)
                .padding(right: 10, top: 10)
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/61/v3/V6qwzAGlRjSeAWGw8Rav1A/zh-cn_image_0000002743077891.gif?HW-CC-KV=V1&HW-CC-Date=20260908T090149Z&HW-CC-Expire=86400&HW-CC-Sign=B6861DACBE761DC11448CB092B5D25625AC22CD41ABC353A4E08A6A06404DD44)

#### [h2]示例2（为图片添加事件）

为图片添加onClick和onFinish事件。
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    import ohos.i18n.*
    import ohos.resource.*
    
    @Entry
    @Component
    class EntryView {
        let imageOne: AppResource = @r(app.media.startIcon)
        let imageTwo = @r(app.media.background)
        let imageThree = @r(app.media.svg_move)
        @State
        var src: AppResource = this.imageOne
        @State
        var src2: AppResource = this.imageThree
    
        func build() {
            Column() {
                // 为图片添加点击事件，点击完成后加载特定图片
                Image(this.src)
                    .width(100)
                    .height(100)
                    .onClick({
                        evt => this.src = this.imageTwo
                    })
                // 当加载图片为SVG格式时
                Image(this.src2)
                    .width(100)
                    .height(100)
                    .onFinish({
                        // SVG动效播放完成时加载另一张图片
                        => this.src2 = this.imageOne
                    })
            }
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d1/v3/MlfHK543Qu6LKOS8q9vTCA/zh-cn_image_0000002713558930.gif?HW-CC-KV=V1&HW-CC-Date=20260908T090149Z&HW-CC-Expire=86400&HW-CC-Sign=06F80D25BF67CBA5603537FCD852C68FD6E747BD91E2522CAEFC834741A0E3E2)

#### [h2]示例3（为图像设置填充效果）

该示例通过objectFit为图像设置填充效果。
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    import ohos.i18n.*
    import ohos.resource.*
    
    @Entry
    @Component
    class EntryView {
        func build() {
            Flex(direction: FlexDirection.Column, alignItems: ItemAlign.Start) {
                Row() {
                    // 加载png格式图片
                    Image(@r(app.media.flower))
                        .width(110)
                        .height(110)
                        .margin(15)
                        .overlay(value: "Contain", align: Alignment.Bottom, offset: OverlayOffset(x: 0.0, y: 20.0))
                        .border(width: 2, color: 0xFEC0CD)
                        .objectFit(ImageFit.Contain)
                    // 加载gif格式图片
                    Image(@r(app.media.bybridhar_gif1))
                        .width(110)
                        .height(110)
                        .margin(15)
                        .overlay(value: "Cover", align: Alignment.Bottom, offset: OverlayOffset(x: 0.0, y: 20.0))
                        .border(width: 2, color: 0xFEC0CD)
                        .objectFit(ImageFit.Cover)
                }
                Row() {
                    // 加载svg格式图片
                    Image(@r(app.media.svg))
                        .width(110)
                        .height(110)
                        .margin(15)
                        .overlay(value: "Fill", align: Alignment.Bottom, offset: OverlayOffset(x: 0.0, y: 20.0))
                        .border(width: 2, color: 0xFEC0CD)
                        .objectFit(ImageFit.Fill)
                    // 加载jpg格式图片
                    Image(@r(app.media.startIcon))
                        .width(110)
                        .height(110)
                        .margin(15)
                        .overlay(value: "ScaleDown", align: Alignment.Bottom, offset: OverlayOffset(x: 0.0, y: 20.0))
                        .border(width: 2, color: 0xFEC0CD)
                        .objectFit(ImageFit.ScaleDown)
                }
                Row() {
                    // 加载png格式图片
                    Image(@r(app.media.media1))
                        .width(110)
                        .height(110)
                        .margin(15)
                        .overlay(value: "Auto", align: Alignment.Bottom, offset: OverlayOffset(x: 0.0, y: 20.0))
                        .border(width: 2, color: 0xFEC0CD)
                        .objectFit(ImageFit.Auto)
                    // 加载gif格式图片
                    Image(@r(app.media.bybridhar_gif1))
                        .width(110)
                        .height(110)
                        .margin(15)
                        .overlay(value: "None", align: Alignment.Bottom, offset: OverlayOffset(x: 0.0, y: 20.0))
                        .border(width: 2, color: 0xFEC0CD)
                        .objectFit(ImageFit.None)
                }
            }
                .height(480)
                .width(360)
                .padding(right: 10, top: 10)
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/cb/v3/6polAbHZT0C6PU7BMagwyw/zh-cn_image_0000002743197843.gif?HW-CC-KV=V1&HW-CC-Date=20260908T090149Z&HW-CC-Expire=86400&HW-CC-Sign=E97723980BD0BB5D0EAB6E0A225ABA4482C14F659913B00298C2DFE84AEFEB68)

#### [h2]示例4（切换显示不同类型图片）

该示例展示了png类型与svg类型作为数据源的显示图片效果。
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    import ohos.i18n.*
    import ohos.resource.*
    
    @Entry
    @Component
    class EntryView {
        let imageOne: AppResource = @r(app.media.startIcon)
        let imageTwo = @r(app.media.svg_move)
        @State
        var imageSrcIndex: Int64 = 0
        @State
        var imageSrcList: Array<AppResource> = [this.imageOne, this.imageTwo]
    
        func build() {
            Column() {
                Image(this.imageSrcList[this.imageSrcIndex])
                    .width(100)
                    .height(100)
                    .margin(left: 100, top: 100)
                Button("点击切换Image的src")
                    .margin(left: 100, top: 20)
                    .padding(20)
                    .onClick({
                        evt => this.imageSrcIndex = (this.imageSrcIndex + 1) % 2
                    })
            }
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a2/v3/WYQbUoE2QiKwvMV6ZgZY6w/zh-cn_image_0000002713398962.gif?HW-CC-KV=V1&HW-CC-Date=20260908T090149Z&HW-CC-Expire=86400&HW-CC-Sign=BC1FDA3C217085659C9400A71BB725DF1766D7D314D1ECEE042A0EE07C69552C)

#### [h2]示例5（通过sourceSize设置图片解码尺寸）

该示例通过sourceSize接口自定义图片的解码尺寸。
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    import ohos.i18n.*
    import ohos.resource.*
    import ohos.arkui.component.ImageFit
    
    @Entry
    @Component
    class EntryView {
        @State
        var borderRadiusValue: Int64 = 10
    
        func build() {
            Column() {
                Image(@r(app.media.image))
                    .sourceSize(500, 500)
                    .width(300)
                    .height(300)
                Image(@r(app.media.image))
                    .sourceSize(10, 10)
                    .width(300)
                    .height(300)
                    .borderWidth(1)
            }
                .height(100.percent)
                .width(100.percent)
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e2/v3/-hoIFQMoS-SxkwtOFpXf_A/zh-cn_image_0000002743077893.png?HW-CC-KV=V1&HW-CC-Date=20260908T090149Z&HW-CC-Expire=86400&HW-CC-Sign=AE4BB1B5A2FCCA30B24FCD6952BD01C562C65F7329D03418D7A6ADA38EE2F54D)

#### [h2]示例6（通过renderMode设置图片的渲染模式）

该示例通过通过renderMode接口设置图片渲染模式为黑白模式。
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    import ohos.i18n.*
    import ohos.resource.*
    import ohos.arkui.component.ImageFit
    
    @Entry
    @Component
    class EntryView {
        @State
        var borderRadiusValue: Int64 = 10
    
        func build() {
            Column() {
                Image(@r(app.media.image))
                    .renderMode(ImageRenderMode.Template)
                    .width(300)
                    .height(300)
            }
                .height(100.percent)
                .width(100.percent)
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b/v3/3-f4c_xVTfOgcTbcXkAsIQ/zh-cn_image_0000002713558932.png?HW-CC-KV=V1&HW-CC-Date=20260908T090149Z&HW-CC-Expire=86400&HW-CC-Sign=89E14BA1300E029E115E4BAF35C78697837422A4BBDAD1AC1506E33C8CE56D24)

#### [h2]示例7（通过objectRepeat设置图片的重复样式）

该示例通过通过objectRepeat接口在竖直轴上重复绘制图片。
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    import ohos.i18n.*
    import ohos.resource.*
    import ohos.arkui.component.ImageFit
    
    @Entry
    @Component
    class EntryView {
        @State
        var borderRadiusValue: Int64 = 10
        func build() {
            Column() {
                Image(@r(app.media.image))
                    .objectRepeat(ImageRepeat.Y)
                    .width(120)
                    .height(300)
                    .objectFit(ImageFit.Contain)
                    .borderWidth(1)
            }
                .height(100.percent)
                .width(100.percent)
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/47/v3/HvtR_WX6Tf6FzWwX6h00dw/zh-cn_image_0000002743197845.png?HW-CC-KV=V1&HW-CC-Date=20260908T090149Z&HW-CC-Expire=86400&HW-CC-Sign=CAC1CD99F3A0903D9EA31B55E9EE924929B85EFDF41B2973B0EF9AFFD8BE33B5)

#### [h2]示例8（设置SVG图片的填充颜色）

该示例通过通过fillColor接口在竖直轴上重复绘制图片。
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    import ohos.i18n.*
    import ohos.resource.*
    
    @Entry
    @Component
    class EntryView {
        @State
        var borderRadiusValue: Int64 = 10
        func build() {
            Column() {
                Text("不设置fillColor")
                Image(@r(app.media.svg))
                    .width(100)
                    .height(100)
                    .objectFit(ImageFit.Contain)
                    .borderWidth(1)
                Text("fillColor传入Color.Gray")
                Image(@r(app.media.svg))
                    .width(100)
                    .height(100)
                    .objectFit(ImageFit.Contain)
                    .borderWidth(1)
                    .fillColor(Color.Gray)
                Text("fillColor传入Color.Blue")
                Image(@r(app.media.svg))
                    .width(100)
                    .height(100)
                    .objectFit(ImageFit.Contain)
                    .borderWidth(1)
                    .fillColor(Color.Blue)
                Text("fillColor传入Color.Red")
                Image(@r(app.media.svg))
                    .width(100)
                    .height(100)
                    .objectFit(ImageFit.Contain)
                    .borderWidth(1)
                    .fillColor(Color.Red)
            }
                .height(100.percent)
                .width(100.percent)
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b7/v3/bTYynNlXQMG_52V2IoEy_Q/zh-cn_image_0000002713398964.png?HW-CC-KV=V1&HW-CC-Date=20260908T090149Z&HW-CC-Expire=86400&HW-CC-Sign=93561D83C44285549F250C411369501C34B0C007F48C3BB627CB60F16E3DC5C1)
