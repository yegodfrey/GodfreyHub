---
name: cangjie-references/cj-apis-componentutils
title: ohos.arkui.component_utils（ComponentUtils）
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-componentutils
nodePath: 应用框架 / ArkUI（方舟UI框架） / 仓颉API / UI界面 / ohos.arkui.component_utils（ComponentUtils）
---

# ohos.arkui.component_utils（ComponentUtils）

提供获取组件绘制区域坐标和大小的能力。

#### 导入模块
    
    
    import kit.ArkUI.*

#### class ComponentUtils
    
    
    public class ComponentUtils {}

**功能：** 提供获取指定组件绘制区域坐标和大小的能力。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]static func getRectangleById(String)
    
    
    public static func getRectangleById(id: String): ComponentInfo

**功能：** 根据组件ID获取组件实例对象, 通过组件实例对象将获取的坐标位置和大小同步返回给开发者。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
id | String | 是 | - | 指定组件id。  
  
**返回值：**

类型 | 说明  
---|---  
ComponentInfo | 组件大小、位置、平移缩放旋转及仿射矩阵属性信息。  
  
#### class ComponentInfo
    
    
    public class ComponentInfo {
        public var size: Size
        public var localOffset: Offset
        public var windowOffset: Offset
        public var screenOffset: Offset
        public var translate: TranslateResult
        public var scale: ScaleResult
        public var rotate: RotateResult
        public var transform: Matrix4Result
        public init(size: Size, localOffset: Offset, windowOffset: Offset, screenOffset: Offset, translate: TranslateResult,
        scale: ScaleResult, rotate: RotateResult, transform: Matrix4Result)
    }

**功能：** 组件实例对象的坐标位置和大小等信息。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var localOffset
    
    
    public var localOffset: Offset

**功能：** 设置组件相对于父组件信息。

**类型：** Offset

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var rotate
    
    
    public var rotate: RotateResult

**功能：** 设置组件旋转信息。

**类型：** RotateResult

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var scale
    
    
    public var scale: ScaleResult

**功能：** 设置组件缩放信息。

**类型：** ScaleResult

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var screenOffset
    
    
    public var screenOffset: Offset

**功能：** 设置组件相对于屏幕信息。

**类型：** Offset

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var size
    
    
    public var size: Size

**功能：** 设置组件大小信息。

**类型：** Size

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var transform
    
    
    public var transform: Matrix4Result

**功能：** 设置组件变换矩阵信息。

**类型：** Matrix4Result

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var translate
    
    
    public var translate: TranslateResult

**功能：** 设置组件平移信息。

**类型：** TranslateResult

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var windowOffset
    
    
    public var windowOffset: Offset

**功能：** 设置组件相对于窗口信息。

**类型：** Offset

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]init(Size, Offset, Offset, Offset, TranslateResult, ScaleResult, RotateResult, Matrix4Result)
    
    
    public init(size: Size, localOffset: Offset, windowOffset: Offset, screenOffset: Offset, translate: TranslateResult,
        scale: ScaleResult, rotate: RotateResult, transform: Matrix4Result)

**功能：** 构建一个ComponentInfo类型的对象。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
size | Size | 是 | - | 组件大小信息。  
localOffset | Offset | 是 | - | 组件相对于父组件信息。  
windowOffset | Offset | 是 | - | 组件相对于窗口信息。  
screenOffset | Offset | 是 | - | 组件相对于屏幕信息。  
translate | TranslateResult | 是 | - | 组件平移信息。  
scale | ScaleResult | 是 | - | 组件缩放信息。  
rotate | RotateResult | 是 | - | 组件旋转信息。  
transform | Matrix4Result | 是 | - | 组件变换矩阵信息。  
  
#### class Offset
    
    
    public class Offset {
        public var x: Float64
        public var y: Float64
        public init(x: Float64, y: Float64)
    }

**功能：** 定义偏移属性。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var x
    
    
    public var x: Float64

**功能：** 位置的x坐标。

**类型：** Float64

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var y
    
    
    public var y: Float64

**功能：** 位置的y坐标。

**类型：** Float64

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]init(Float64, Float64)
    
    
    public init(x: Float64, y: Float64)

**功能：** 构建一个Offset类型的对象。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
x | Float64 | 是 | - | 位置的x坐标。  
y | Float64 | 是 | - | 位置的y坐标。  
  
#### class RotateResult
    
    
    public class RotateResult {
        public var x: Float64
        public var y: Float64
        public var z: Float64
        public var centerX: Float64
        public var centerY: Float64
        public var angle: Float64
        public init(x: Float64, y: Float64, z: Float64, centerX: Float64, centerY: Float64, angle: Float64)
    }

**功能：** 旋转结果。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var angle
    
    
    public var angle: Float64

**功能：** 旋转角度。

**类型：** Float64

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var centerX
    
    
    public var centerX: Float64

**功能：** 中心点的x轴坐标变换。

**类型：** Float64

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var centerY
    
    
    public var centerY: Float64

**功能：** 中心点的y轴坐标变换。

**类型：** Float64

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var x
    
    
    public var x: Float64

**功能：** 旋转轴向量x坐标。

**类型：** Float64

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var y
    
    
    public var y: Float64

**功能：** 旋转轴向量y坐标。

**类型：** Float64

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var z
    
    
    public var z: Float64

**功能：** 旋转轴向量z坐标。

**类型：** Float64

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]init(Float64, Float64, Float64, Float64, Float64, Float64)
    
    
    public init(x: Float64, y: Float64, z: Float64, centerX: Float64, centerY: Float64, angle: Float64)

**功能：** 构建一个RotateResult类型的对象。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
x | Float64 | 是 | - | 旋转轴向量x坐标。  
y | Float64 | 是 | - | 旋转轴向量y坐标。  
z | Float64 | 是 | - | 旋转轴向量z坐标。  
centerX | Float64 | 是 | - | 中心点的x轴坐标变换。  
centerY | Float64 | 是 | - | 中心点的y轴坐标变换。  
angle | Float64 | 是 | - | 旋转角度。  
  
#### class ScaleResult
    
    
    public class ScaleResult {
        public var x: Float64
        public var y: Float64
        public var z: Float64
        public var centerX: Float64
        public var centerY: Float64
        public init(x: Float64, y: Float64, z: Float64, centerX: Float64, centerY: Float64)
    }

**功能：** 缩放结果。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var centerX
    
    
    public var centerX: Float64

**功能：** 中心点的x轴坐标变换。

**类型：** Float64

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var centerY
    
    
    public var centerY: Float64

**功能：** 中心点的y轴坐标变换。

**类型：** Float64

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var x
    
    
    public var x: Float64

**功能：** x轴缩放因子。

**类型：** Float64

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var y
    
    
    public var y: Float64

**功能：** y轴缩放因子。

**类型：** Float64

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var z
    
    
    public var z: Float64

**功能：** z轴缩放因子。

**类型：** Float64

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]init(Float64, Float64, Float64, Float64, Float64)
    
    
    public init(x: Float64, y: Float64, z: Float64, centerX: Float64, centerY: Float64)

**功能：** 构建一个ScaleResult类型的对象。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
x | Float64 | 是 | - | x轴缩放因子。  
y | Float64 | 是 | - | y轴缩放因子。  
z | Float64 | 是 | - | z轴缩放因子。  
centerX | Float64 | 是 | - | 中心点的x轴坐标变换。  
centerY | Float64 | 是 | - | 中心点的y轴坐标变换。  
  
#### class Size
    
    
    public class Size {
        public var width: Float64
        public var height: Float64
        public init(width: Float64, height: Float64)
    }

**功能：** 定义大小属性。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var height
    
    
    public var height: Float64

**功能：** 高度属性。

**类型：** Float64

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var width
    
    
    public var width: Float64

**功能：** 宽度属性。

**类型：** Float64

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]init(Float64, Float64)
    
    
    public init(width: Float64, height: Float64)

**功能：** 构建一个Size类型的对象。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
width | Float64 | 是 | - | 宽度属性。  
height | Float64 | 是 | - | 高度属性。  
  
#### class TranslateResult
    
    
    public class TranslateResult {
        public var x: Float64
        public var y: Float64
        public var z: Float64
        public init(x: Float64, y: Float64, z: Float64)
    }

**功能：** 平移结果。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var x
    
    
    public var x: Float64

**功能：** x轴平移距离。

**类型：** Float64

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var y
    
    
    public var y: Float64

**功能：** y轴平移距离。

**类型：** Float64

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var z
    
    
    public var z: Float64

**功能：** z轴平移距离。

**类型：** Float64

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]init(Float64, Float64, Float64)
    
    
    public init(x: Float64, y: Float64, z: Float64)

**功能：** 构建一个TranslateResult类型的对象。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
x | Float64 | 是 | - | x轴平移距离。 单位: vp。  
y | Float64 | 是 | - | y轴平移距离。 单位: vp。  
z | Float64 | 是 | - | z轴平移距离。 单位: vp。  
  
#### type Matrix4Result
    
    
    public type Matrix4Result = VArray<Float64, $16>

**功能：** 4x4变换矩阵结果类型。

**类型：** VArray<Float64, $16>
