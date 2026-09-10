---
name: cangjie-references/cj-apis-color_manager
title: ohos.graphics.color_space_manager（色彩管理）
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-color_manager
nodePath: 图形 / ArkGraphics2D（方舟2D图形服务） / 仓颉API / ohos.graphics.color_space_manager（色彩管理）
---

# ohos.graphics.color_space_manager（色彩管理）

color_space_manager模块提供管理抽象化色域对象的一些基础能力，包括色域对象的创建与色域基础属性的获取等。

#### 导入模块
    
    
    import kit.ArkGraphics2D.*

#### 使用说明

API示例代码使用说明：

  * 若示例代码首行有“// index.cj”注释，表示该示例可在仓颉模板工程的“index.cj”文件中编译运行。
  * 若示例需获取[Context](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#class-context)应用上下文，需在仓颉模板工程中的“main_ability.cj”文件中进行配置。



上述示例工程及配置模板详见[仓颉示例代码说明](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-development-intro#仓颉示例代码说明)。

#### func create(ColorSpace)
    
    
    public func create(colorSpaceType: ColorSpace): ColorSpaceManager

**功能：** 创建标准色域对象。

**系统能力：** SystemCapability.Graphic.Graphic2D.ColorManager.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
colorSpaceType | ColorSpace | 是 | - | 标准色域类型枚举值。Unknown与Custom不可用于直接创建色域对象。  
  
**返回值：**

类型 | 说明  
---|---  
ColorSpaceManager | 返回当前创建的色域对象实例。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[色彩管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-colorspace-manager)。

错误码ID | 错误信息  
---|---  
18600001 | The parameter value is abnormal.  
  



**示例：**
    
    
    // index.cj
    
    import kit.ArkGraphics2D.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let colorSpaceManager = create(ColorSpace.Srgb)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### func create(ColorSpacePrimaries, Float32)
    
    
    public func create(primaries: ColorSpacePrimaries, gamma: Float32): ColorSpaceManager

**功能：** 创建用户自定义色域对象。

**系统能力：** SystemCapability.Graphic.Graphic2D.ColorManager.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
primaries | ColorSpacePrimaries | 是 | - | 色域标准三原色。  
gamma | Float32 | 是 | - | 色域gamma值，取值为大于0的浮点数。  
  
**返回值：**

类型 | 说明  
---|---  
ColorSpaceManager |  返回当前创建的色域对象实例。 色域类型定义为ColorSpace枚举值CUSTOM。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[色彩管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-colorspace-manager)。

错误码ID | 错误信息  
---|---  
18600001 | The parameter value is abnormal.  
  



**示例：**
    
    
    // index.cj
    
    import kit.ArkGraphics2D.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let primaries = ColorSpacePrimaries(
            0.1,
            0.1,
            0.2,
            0.2,
            0.3,
            0.3,
            0.4,
            0.4
        )
        let gamma = 2.2f32
        let colorSpaceManager = create(primaries, gamma)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### class ColorSpaceManager
    
    
    public class ColorSpaceManager {}

**功能：** 当前色域对象实例。

下列API示例中都需先使用create()获取到ColorSpaceManager实例，再通过此实例调用对应方法。

**系统能力：** SystemCapability.Graphic.Graphic2D.ColorManager.Core

**起始版本：** 22

#### [h2]func getColorSpaceType()
    
    
    public func getColorSpaceType(): ColorSpace

**功能：** 获取色域类型。

**系统能力：** SystemCapability.Graphic.Graphic2D.ColorManager.Core

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
ColorSpace | 返回色域类型枚举值。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[色彩管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-colorspace-manager)。

错误码ID | 错误信息  
---|---  
18600001 | The parameter value is abnormal.  
  



**示例：**
    
    
    // index.cj
    
    import kit.ArkGraphics2D.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let colorSpaceManagerInstance = create(ColorSpace.Srgb)
        let colorSpace: ColorSpace = colorSpaceManagerInstance.getColorSpaceType()
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func getGamma()
    
    
    public func getGamma(): Float32

**功能：** 获取色域gamma值。

**系统能力：** SystemCapability.Graphic.Graphic2D.ColorManager.Core

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
Float32 | 返回色域gamma值。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[色彩管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-colorspace-manager)。

错误码ID | 错误信息  
---|---  
18600001 | The parameter value is abnormal.  
  



**示例：**
    
    
    // index.cj
    
    import kit.ArkGraphics2D.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let colorSpaceManagerInstance = create(ColorSpace.Srgb)
        let colorSpace = colorSpaceManagerInstance.getGamma()
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func getWhitePoint()
    
    
    public func getWhitePoint(): Array<Float32>

**功能：** 获取色域白点值。

**系统能力：** SystemCapability.Graphic.Graphic2D.ColorManager.Core

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
Array<Float32> | 返回色域白点值[x, y]。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[色彩管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-colorspace-manager)。

错误码ID | 错误信息  
---|---  
18600001 | The parameter value is abnormal.  
  



**示例：**
    
    
    // index.cj
    
    import kit.ArkGraphics2D.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let colorSpaceManagerInstance = create(ColorSpace.Srgb)
        let colorSpace = colorSpaceManagerInstance.getWhitePoint()
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### class ColorSpacePrimaries
    
    
    public class ColorSpacePrimaries {
        public var redX: Float32
        public var redY: Float32
        public var greenX: Float32
        public var greenY: Float32
        public var blueX: Float32
        public var blueY: Float32
        public var whitePointX: Float32
        public var whitePointY: Float32
        public init(redX: Float32, redY: Float32, greenX: Float32, greenY: Float32, blueX: Float32, blueY: Float32, whitePointX: Float32, whitePointY: Float32)
    }

**功能：** 色域标准三原色（红、绿、蓝）和白色，使用(x, y)表示其在色彩空间中的位置。

**系统能力：** SystemCapability.Graphic.Graphic2D.ColorManager.Core

**起始版本：** 22

#### [h2]var blueX
    
    
    public var blueX: Float32

**功能：** 标准蓝色在色彩空间的x坐标值。

**类型：** Float32

**读写能力：** 可读写

**系统能力：** SystemCapability.Graphic.Graphic2D.ColorManager.Core

**起始版本：** 22

#### [h2]var blueY
    
    
    public var blueY: Float32

**功能：** 标准蓝色在色彩空间的y坐标值。

**类型：** Float32

**读写能力：** 可读写

**系统能力：** SystemCapability.Graphic.Graphic2D.ColorManager.Core

**起始版本：** 22

#### [h2]var greenX
    
    
    public var greenX: Float32

**功能：** 标准绿色在色彩空间的x坐标值。

**类型：** Float32

**读写能力：** 可读写

**系统能力：** SystemCapability.Graphic.Graphic2D.ColorManager.Core

**起始版本：** 22

#### [h2]var greenY
    
    
    public var greenY: Float32

**功能：** 标准绿色在色彩空间的y坐标值。

**类型：** Float32

**读写能力：** 可读写

**系统能力：** SystemCapability.Graphic.Graphic2D.ColorManager.Core

**起始版本：** 22

#### [h2]var redX
    
    
    public var redX: Float32

**功能：** 标准红色在色彩空间的x坐标值。

**类型：** Float32

**读写能力：** 可读写

**系统能力：** SystemCapability.Graphic.Graphic2D.ColorManager.Core

**起始版本：** 22

#### [h2]var redY
    
    
    public var redY: Float32

**功能：** 标准红色在色彩空间的y坐标值。

**类型：** Float32

**读写能力：** 可读写

**系统能力：** SystemCapability.Graphic.Graphic2D.ColorManager.Core

**起始版本：** 22

#### [h2]var whitePointX
    
    
    public var whitePointX: Float32

**功能：** 标准白色在色彩空间的x坐标值。

**类型：** Float32

**读写能力：** 可读写

**系统能力：** SystemCapability.Graphic.Graphic2D.ColorManager.Core

**起始版本：** 22

#### [h2]var whitePointY
    
    
    public var whitePointY: Float32

**功能：** 标准白色在色彩空间的y坐标值。

**类型：** Float32

**读写能力：** 可读写

**系统能力：** SystemCapability.Graphic.Graphic2D.ColorManager.Core

**起始版本：** 22

#### [h2]init(Float32, Float32, Float32, Float32, Float32, Float32, Float32, Float32)
    
    
    public init(redX: Float32, redY: Float32, greenX: Float32, greenY: Float32, blueX: Float32, blueY: Float32, whitePointX: Float32, whitePointY: Float32)

**功能：** ColorSpacePrimaries的构造函数。

**系统能力：** SystemCapability.Graphic.Graphic2D.ColorManager.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
redX | Float32 | 是 | - | 标准红色在色彩空间的x坐标值。  
redY | Float32 | 是 | - | 标准红色在色彩空间的y坐标值。  
greenX | Float32 | 是 | - | 标准绿色在色彩空间的x坐标值。  
greenY | Float32 | 是 | - | 标准绿色在色彩空间的y坐标值。  
blueX | Float32 | 是 | - | 标准蓝色在色彩空间的x坐标值。  
blueY | Float32 | 是 | - | 标准蓝色在色彩空间的y坐标值。  
whitePointX | Float32 | 是 | - | 标准白色在色彩空间的x坐标值。  
whitePointY | Float32 | 是 | - | 标准白色在色彩空间的y坐标值。  
  
#### enum ColorSpace
    
    
    public enum ColorSpace {
        | Unknown
        | AdobeRgb1998
        | DciP3
        | DisplayP3
        | Srgb
        | Bt709
        | Bt601Ebu
        | Bt601SmpteC
        | Bt2020Hlg
        | Bt2020Pq
        | P3Hlg
        | P3Pq
        | AdobeRgb1998Limit
        | DisplayP3Limit
        | SrgbLimit
        | Bt709Limit
        | Bt601EbuLimit
        | Bt601SmpteCLimit
        | Bt2020HlgLimit
        | Bt2020PqLimit
        | P3HlgLimit
        | P3PqLimit
        | LinearP3
        | LinearSrgb
        | LinearBt709
        | LinearBt2020
        | DisplaySrgb
        | DisplayP3Srgb
        | DisplayP3Hlg
        | DisplayP3Pq
        | Custom
        | ...
    }

**功能：** 色域类型枚举。

**系统能力：** SystemCapability.Graphic.Graphic2D.ColorManager.Core

**起始版本：** 22

#### [h2]AdobeRgb1998
    
    
    AdobeRgb1998

**功能：** RGB色域为Adobe RGB(1998)类型。

转换函数为Adobe RGB(1998)类型。

编码范围为Full类型。

**系统能力：** SystemCapability.Graphic.Graphic2D.ColorManager.Core

**起始版本：** 22

#### [h2]AdobeRgb1998Limit
    
    
    AdobeRgb1998Limit

**功能：** RGB色域为Adobe RGB(1998)类型。

转换函数为Adobe RGB(1998)类型。

编码范围为Limit类型。

**系统能力：** SystemCapability.Graphic.Graphic2D.ColorManager.Core

**起始版本：** 22

#### [h2]Bt2020Hlg
    
    
    Bt2020Hlg

**功能：** RGB色域为BT2020类型。

转换函数为HLG类型。

编码范围为Full类型。

**系统能力：** SystemCapability.Graphic.Graphic2D.ColorManager.Core

**起始版本：** 22

#### [h2]Bt2020HlgLimit
    
    
    Bt2020HlgLimit

**功能：** RGB色域为BT2020类型。

转换函数为HLG类型。

编码范围为Limit类型。

**系统能力：** SystemCapability.Graphic.Graphic2D.ColorManager.Core

**起始版本：** 22

#### [h2]Bt2020Pq
    
    
    Bt2020Pq

**功能：** RGB色域为BT2020类型。

转换函数为PQ类型。

编码范围为Full类型。

**系统能力：** SystemCapability.Graphic.Graphic2D.ColorManager.Core

**起始版本：** 22

#### [h2]Bt2020PqLimit
    
    
    Bt2020PqLimit

**功能：** RGB色域为BT2020类型。

转换函数为PQ类型。

编码范围为Limit类型。

**系统能力：** SystemCapability.Graphic.Graphic2D.ColorManager.Core

**起始版本：** 22

#### [h2]Bt601Ebu
    
    
    Bt601Ebu

**功能：** RGB色域为BT601_P类型。

转换函数为BT709类型。

编码范围为Full类型。

**系统能力：** SystemCapability.Graphic.Graphic2D.ColorManager.Core

**起始版本：** 22

#### [h2]Bt601EbuLimit
    
    
    Bt601EbuLimit

**功能：** RGB色域为BT601_P类型。

转换函数为BT709类型。

编码范围为Limit类型。

**系统能力：** SystemCapability.Graphic.Graphic2D.ColorManager.Core

**起始版本：** 22

#### [h2]Bt601SmpteC
    
    
    Bt601SmpteC

**功能：** RGB色域为BT601_N类型。

转换函数为BT709类型。

编码范围为Full类型。

**系统能力：** SystemCapability.Graphic.Graphic2D.ColorManager.Core

**起始版本：** 22

#### [h2]Bt601SmpteCLimit
    
    
    Bt601SmpteCLimit

**功能：** RGB色域为BT601_N类型。

转换函数为BT709类型。

编码范围为Limit类型。

**系统能力：** SystemCapability.Graphic.Graphic2D.ColorManager.Core

**起始版本：** 22

#### [h2]Bt709
    
    
    Bt709

**功能：** RGB色域为BT709类型。

转换函数为BT709类型。

编码范围为Full类型。

**系统能力：** SystemCapability.Graphic.Graphic2D.ColorManager.Core

**起始版本：** 22

#### [h2]Bt709Limit
    
    
    Bt709Limit

**功能：** RGB色域为BT709类型。

转换函数为BT709类型。

编码范围为Limit类型。

**系统能力：** SystemCapability.Graphic.Graphic2D.ColorManager.Core

**起始版本：** 22

#### [h2]Custom
    
    
    Custom

**功能：** 用户自定义色域类型。

**系统能力：** SystemCapability.Graphic.Graphic2D.ColorManager.Core

**起始版本：** 22

#### [h2]DciP3
    
    
    DciP3

**功能：** RGB色域为DCI-P3类型。

转换函数为Gamma 2.6类型。

编码范围为Full类型。

**系统能力：** SystemCapability.Graphic.Graphic2D.ColorManager.Core

**起始版本：** 22

#### [h2]DisplayP3
    
    
    DisplayP3

**功能：** RGB色域为Display P3类型。

转换函数为SRGB类型。

编码范围为Full类型。

**系统能力：** SystemCapability.Graphic.Graphic2D.ColorManager.Core

**起始版本：** 22

#### [h2]DisplayP3Hlg
    
    
    DisplayP3Hlg

**功能：** 与P3_HLG相同。

RGB色域为Display P3类型。

转换函数为HLG类型。

编码范围为Full类型。

**系统能力：** SystemCapability.Graphic.Graphic2D.ColorManager.Core

**起始版本：** 22

#### [h2]DisplayP3Limit
    
    
    DisplayP3Limit

**功能：** RGB色域为Display P3类型。

转换函数为SRGB类型。

编码范围为Limit类型。

**系统能力：** SystemCapability.Graphic.Graphic2D.ColorManager.Core

**起始版本：** 22

#### [h2]DisplayP3Pq
    
    
    DisplayP3Pq

**功能：** 与P3_PQ相同。

RGB色域为Display P3类型。

转换函数为PQ类型。

编码范围为Full类型。

**系统能力：** SystemCapability.Graphic.Graphic2D.ColorManager.Core

**起始版本：** 22

#### [h2]DisplayP3Srgb
    
    
    DisplayP3Srgb

**功能：** 与DisplayP3相同。

RGB色域为Display P3类型。

转换函数为SRGB类型。

编码范围为Full类型。

**系统能力：** SystemCapability.Graphic.Graphic2D.ColorManager.Core

**起始版本：** 22

#### [h2]DisplaySrgb
    
    
    DisplaySrgb

**功能：** 与SRGB相同。

RGB色域为SRGB类型。

转换函数为SRGB类型。

编码范围为Full类型。

**系统能力：** SystemCapability.Graphic.Graphic2D.ColorManager.Core

**起始版本：** 22

#### [h2]LinearBt2020
    
    
    LinearBt2020

**功能：** RGB色域为BT2020类型。

转换函数为Linear类型。

**系统能力：** SystemCapability.Graphic.Graphic2D.ColorManager.Core

**起始版本：** 22

#### [h2]LinearBt709
    
    
    LinearBt709

**功能：** 与LinearSrgb相同。

RGB色域为BT709类型。

转换函数为Linear类型。

**系统能力：** SystemCapability.Graphic.Graphic2D.ColorManager.Core

**起始版本：** 22

#### [h2]LinearP3
    
    
    LinearP3

**功能：** RGB色域为Display P3类型。

转换函数为Linear类型。

**系统能力：** SystemCapability.Graphic.Graphic2D.ColorManager.Core

**起始版本：** 22

#### [h2]LinearSrgb
    
    
    LinearSrgb

**功能：** RGB色域为SRGB类型。

转换函数为Linear类型。

**系统能力：** SystemCapability.Graphic.Graphic2D.ColorManager.Core

**起始版本：** 22

#### [h2]P3Hlg
    
    
    P3Hlg

**功能：** RGB色域为Display P3类型。

转换函数为HLG类型。

编码范围为Full类型。

**系统能力：** SystemCapability.Graphic.Graphic2D.ColorManager.Core

**起始版本：** 22

#### [h2]P3HlgLimit
    
    
    P3HlgLimit

**功能：** RGB色域为Display P3类型。

转换函数为HLG类型。

编码范围为Limit类型。

**系统能力：** SystemCapability.Graphic.Graphic2D.ColorManager.Core

**起始版本：** 22

#### [h2]P3Pq
    
    
    P3Pq

**功能：** RGB色域为Display P3类型。

转换函数为PQ类型。

编码范围为Full类型。

**系统能力：** SystemCapability.Graphic.Graphic2D.ColorManager.Core

**起始版本：** 22

#### [h2]P3PqLimit
    
    
    P3PqLimit

**功能：** RGB色域为Display P3类型。

转换函数为PQ类型。

编码范围为Limit类型。

**系统能力：** SystemCapability.Graphic.Graphic2D.ColorManager.Core

**起始版本：** 22

#### [h2]Srgb
    
    
    Srgb

**功能：** RGB色域为SRGB类型。

转换函数为SRGB类型。

编码范围为Full类型。

系统默认色域类型。

**系统能力：** SystemCapability.Graphic.Graphic2D.ColorManager.Core

**起始版本：** 22

#### [h2]SrgbLimit
    
    
    SrgbLimit

**功能：** RGB色域为SRGB类型。

转换函数为SRGB类型。

编码范围为Limit类型。

**系统能力：** SystemCapability.Graphic.Graphic2D.ColorManager.Core

**起始版本：** 22

#### [h2]Unknown
    
    
    Unknown

**功能：** 未知的色域类型。

**系统能力：** SystemCapability.Graphic.Graphic2D.ColorManager.Core

**起始版本：** 22

#### [h2]func !=(ColorSpace)
    
    
    public operator func !=(other: ColorSpace): Bool

**功能：** 与另一个 ColorSpace 枚举值进行不等比较。

**系统能力：** SystemCapability.Graphic.Graphic2D.ColorManager.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
other | ColorSpace | 是 | - | 用于比较的另一个色域类型。  
  
**返回值：**

类型 | 说明  
---|---  
Bool | 若不相等返回 true，否则返回 false。  
  
#### [h2]func ==(ColorSpace)
    
    
    public operator func ==(other: ColorSpace): Bool

**功能：** 与另一个 ColorSpace 枚举值进行相等比较。

**系统能力：** SystemCapability.Graphic.Graphic2D.ColorManager.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
other | ColorSpace | 是 | - | 用于比较的另一个色域类型。  
  
**返回值：**

类型 | 说明  
---|---  
Bool | 若相等返回 true，否则返回 false。  
  
#### [h2]func toString()
    
    
    public func toString(): String

**功能：** 将ColorSpace枚举值转换为字符串。

**系统能力：** SystemCapability.Graphic.Graphic2D.ColorManager.Core

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
String | ColorSpace枚举值对应的字符串。  
  
**示例：**
    
    
    // index.cj
    
    import kit.ArkGraphics2D.*
    
    let value: String = ColorSpace.DisplayP3.toString()
