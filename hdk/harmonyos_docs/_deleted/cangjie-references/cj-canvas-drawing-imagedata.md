---
name: cangjie-references/cj-canvas-drawing-imagedata
title: ImageData
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-canvas-drawing-imagedata
nodePath: 应用框架 / ArkUI（方舟UI框架） / 仓颉组件 / 画布绘制 / ImageData
---

# ImageData

ImageData对象可以存储canvas渲染的像素数据。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/54/v3/ygFLJiUZQJGIHV3H1AEhFQ/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111644Z&HW-CC-Expire=86400&HW-CC-Sign=17C6BE872FDE74A7773376E9C110EB37338C8A831B82B34D3A8B9F838416AC2D)

创建ImageData时，宽高不超过16384px，最大面积不超过16000px*16000px，超过最大面积则无法正常绘制。

#### 导入模块
    
    
    import kit.ArkUI.*

#### class ImageData
    
    
    public class ImageData {
        public init(width: ?Float64, height: ?Float64, data!: ?Array<UInt8>, unit!: ?LengthMetricsUnit = None)
        public init(width: ?Float64, height: ?Float64, unit!: ?LengthMetricsUnit = None)
    }

**功能：** ImageData对象可以存储canvas渲染的像素数据。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]prop width
    
    
    public prop width: Int32

**功能：** 矩形区域宽度，默认单位为vp。

**类型：** Int32

**读写能力：** 只读

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]prop height
    
    
    public prop height: Int32

**功能：** 矩形区域高度，默认单位为vp。

**类型：** Int32

**读写能力：** 只读

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]prop data
    
    
    public prop data: Array<UInt8>

**功能：** 一维数组，保存了相应的颜色数据，数据值范围为0到255。

**类型：** Array<UInt8>

**读写能力：** 只读

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]init(?Float64, ?Float64, ?Array<UInt8>, ?LengthMetricsUnit)
    
    
    public init(width: ?Float64, height: ?Float64, data!: ?Array<UInt8>,
        unit!: ?LengthMetricsUnit = None)

**功能：** 构造一个ImageData类型的对象。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
width | ?Float64 | 是 | - | 矩形区域宽度，默认单位为vp。  
height | ?Float64 | 是 | - | 矩形区域高度，默认单位为vp。  
data | ?Array<UInt8> | 是 | - | **命名参数。** 一维数组，保存了相应的颜色数据，数据值范围为0到255。  
unit | ?[LengthMetricsUnit](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-lengthmetricsunit) | 否 | None | **命名参数。** 用来配置ImageData对象的单位模式，配置后无法动态更改，配置方法同[CanvasRenderingContext2D](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-canvas-drawing-canvasrenderingcontext2d#class-canvasrenderingcontext2d)。  
  
![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/eb/v3/sG90U4AxQ8e0_dQB_KvHCg/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111644Z&HW-CC-Expire=86400&HW-CC-Sign=15C34519A9BCD2BAF2451C81FFE46BC22B1F48E7247C1AEF8A28A1437197E5CB)

  * width和height不能小于0.0，否则会有非预期的结果。
  * data的长度必须等于4.0 * width * height，否则会有非预期的结果。



#### [h2]init(?Float64, ?Float64, ?LengthMetricsUnit)
    
    
    public init(width: ?Float64, height: ?Float64, unit!: ?LengthMetricsUnit = None)

**功能：** 构造一个ImageData类型的对象。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
width | ?Float64 | 是 | - | 矩形区域宽度，默认单位为vp。  
height | ?Float64 | 是 | - | 矩形区域高度，默认单位为vp。  
unit | ?[LengthMetricsUnit](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-lengthmetricsunit) | 否 | None | **命名参数。** 用来配置ImageData对象的单位模式，配置后无法动态更改，配置方法同[CanvasRenderingContext2D](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-canvas-drawing-canvasrenderingcontext2d#class-canvasrenderingcontext2d)。  
  
![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/67/v3/idOPKNAYQHilyDyEA0JRyA/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111644Z&HW-CC-Expire=86400&HW-CC-Sign=5FA12380AA7010B8AC9741FD9CFB9C36C0D94C07FDA076B02300D3CC64863882)

width和height不能小于0.0，否则会有非预期的结果。
