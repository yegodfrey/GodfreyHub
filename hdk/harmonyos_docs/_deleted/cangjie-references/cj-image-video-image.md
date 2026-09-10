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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/23/v3/m0K-nbv0QeSyvR1qZ2t9DA/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111641Z&HW-CC-Expire=86400&HW-CC-Sign=21B3536121192069D4686C5678716F3ACEB6C3C2EB52C915101004F403BDAA23)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/14/v3/iNrV5ZHlTVyOFhim1tT8zw/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111641Z&HW-CC-Expire=86400&HW-CC-Sign=5439366F98BB967A72354A951C5579D2773AED786A822D33434D48B1CC6462BD)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8a/v3/nAcOHUd9T3-NZKZymLUkMQ/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111641Z&HW-CC-Expire=86400&HW-CC-Sign=8D7A2E04A42EBA0930340010CF2BDBACFDED32ABD8458958CDA4F333AF37208A)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8a/v3/j5hwNNWgRO-TSDpunoPXZw/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111641Z&HW-CC-Expire=86400&HW-CC-Sign=3599D895D9963D6F216E9380BED899A5150B6183A442367D974C0CF06B8DF4BD)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f0/v3/XjLpfj_nSkC7FmKkFoFOuw/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111641Z&HW-CC-Expire=86400&HW-CC-Sign=CF2CE75C9E6BE555FAA1BAFBD62151CE24A267E8237128F2492BFDE4151C54B8)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9e/v3/FPvXNxP9R-GWHtdgne124A/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111641Z&HW-CC-Expire=86400&HW-CC-Sign=A47A905A63AB287947C2B55E0CFDE4E7F138334379907A8E900CCCF8D1F0DD4E)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ca/v3/3OxDle1RQPK03I_Q5pbn2g/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111641Z&HW-CC-Expire=86400&HW-CC-Sign=B6BEB2829DF8F0C7DA19167EC5B85005AB325A61765425E2FFEEFCD28BABB050)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/bf/v3/7GGg_NAMQCe1l-1gLBkWTQ/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111641Z&HW-CC-Expire=86400&HW-CC-Sign=3B26CA79D2A42757064A0C34E38DE571D78524C56DF5084E3D809FF776D8AF15)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/57/v3/igZQh24JTeus4xFeOTUrCQ/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111641Z&HW-CC-Expire=86400&HW-CC-Sign=7282319641FB2CDBB7B387E81B6C4802A8A18EF0B3CF99F49730E10A35F0C455)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a7/v3/dtKa9cTWTd6PbOtXActIEg/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111641Z&HW-CC-Expire=86400&HW-CC-Sign=C143A84F974CD847CBEB80129F7D1EA6B448C9DFF4920DEAB9866C280B130B08)

仅在loadingStatus返回1时有效。

**类型：** Float64

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**var contentOffsetX**
    
    
    public var contentOffsetX: Float64

**功能：** 实际绘制内容相对于组件自身的x轴偏移，单位为px。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c8/v3/Qg0Sn_y7SoiSqnrNbRf3cg/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111641Z&HW-CC-Expire=86400&HW-CC-Sign=3C8C3B0590B456AE2DE847EAA55F3085BBCDF12A637BC7D1070D563AF860A8BE)

仅在loadingStatus返回1时有效。

**类型：** Float64

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**var contentOffsetY**
    
    
    public var contentOffsetY: Float64

**功能：** 实际绘制内容相对于组件自身的y轴偏移，单位为px。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/17/v3/PG9-DCBaT_u1FKDZfQBpTg/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111641Z&HW-CC-Expire=86400&HW-CC-Sign=B566BF0AE452CC8158120C925DCD9AB8096BFBEF26C610027D80BACD283F271B)

仅在loadingStatus返回1时有效。

**类型：** Float64

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**var contentWidth**
    
    
    public var contentWidth: Float64

**功能：** 图片实际绘制的宽度，单位为px。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a6/v3/8EGUcsUDSAmA3TWnWLMPMg/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111641Z&HW-CC-Expire=86400&HW-CC-Sign=5731C717F4C924FBDA42C91C0F2EC5C41F0AB3D8521E5BE605859F97A90A8EB6)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a3/v3/Nql67FG5SguT1I9806YcBA/zh-cn_image_0000002701659652.gif?HW-CC-KV=V1&HW-CC-Date=20260903T111641Z&HW-CC-Expire=86400&HW-CC-Sign=F062BD22A938154272FB0180760288FC342E77BBF1B541845369C400B006FB94)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b5/v3/5Dkn7WuTRuGyY1eggMIsLQ/zh-cn_image_0000002731378867.gif?HW-CC-KV=V1&HW-CC-Date=20260903T111641Z&HW-CC-Expire=86400&HW-CC-Sign=D27C14CE19D47A4C92C4C8802801E21C4D088D97190EC7357E5198B374AFEE56)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e2/v3/vhRuKKJeQDieSBH1u-fDLA/zh-cn_image_0000002701819564.gif?HW-CC-KV=V1&HW-CC-Date=20260903T111641Z&HW-CC-Expire=86400&HW-CC-Sign=56AE31F6EC0BC7DC87535ECBCEDC593BAD1C6D9E27BDCE4FD8DC73AB0E89246E)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/63/v3/L-FmwhpdSU6DHbWz-NZ-Bw/zh-cn_image_0000002731538845.gif?HW-CC-KV=V1&HW-CC-Date=20260903T111641Z&HW-CC-Expire=86400&HW-CC-Sign=D69D29B23D134B8653F0BFEF0642CE43E7DBF4C0CF438D0AFBEFB65AB4C1E25D)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/33/v3/0O0ypWWITsyAH8q0nq1VmA/zh-cn_image_0000002701659654.png?HW-CC-KV=V1&HW-CC-Date=20260903T111641Z&HW-CC-Expire=86400&HW-CC-Sign=03A8CECA91CEC46DED49DC9420C378E316DAFF38B0BB4CE55A0AB361E46A9CF4)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c1/v3/AgVfaLqrTgu4pNqx5MuzfQ/zh-cn_image_0000002731378869.png?HW-CC-KV=V1&HW-CC-Date=20260903T111641Z&HW-CC-Expire=86400&HW-CC-Sign=70566F293145E1E4BE4364D04900D67F0C89CC3CAF25CE1CEA520D0DC1EE19EF)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/66/v3/UOy8DYVyS5-JNF9wOaEm1w/zh-cn_image_0000002701819566.png?HW-CC-KV=V1&HW-CC-Date=20260903T111641Z&HW-CC-Expire=86400&HW-CC-Sign=E640E0143D017A5B230D1549005A79A199AFA3C0C1987BBA843BD3AA1574EFC0)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/dc/v3/OOYN_B7sQk-xaxRvn4cEaA/zh-cn_image_0000002731538847.png?HW-CC-KV=V1&HW-CC-Date=20260903T111641Z&HW-CC-Expire=86400&HW-CC-Sign=1A1089F88E1282E564C7FA02FAFD57DDCDA4EA228A62FF8018C81EF667E6B90B)
