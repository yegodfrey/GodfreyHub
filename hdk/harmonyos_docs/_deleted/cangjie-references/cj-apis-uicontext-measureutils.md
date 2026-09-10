---
name: cangjie-references/cj-apis-uicontext-measureutils
title: MeasureUtils
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-uicontext-measureutils
nodePath: 应用框架 / ArkUI（方舟UI框架） / 仓颉API / UI界面 / ohos.arkui.ui_context（UIContext） / MeasureUtils
---

# MeasureUtils  
  
提供文本宽度、高度等相关计算。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/63/v3/ZFBCBti8RXynKQ_0LlheAg/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111631Z&HW-CC-Expire=86400&HW-CC-Sign=F0BEC5EF2E486B97275A9601FA8CBCF2D00AADE4D448421628D2A9D830A21EA0)

以下API需先使用[UIContext](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-uicontext-uicontext#class-uicontext)中的[getMeasureUtils()](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-uicontext-uicontext#func-getmeasureutils)方法获取MeasureUtils实例，再通过此实例调用对应方法。

#### 导入模块
    
    
    import kit.ArkUI.*

#### class MeasureUtils
    
    
    public class MeasureUtils {}

**功能：** 提供文本宽度、高度等相关计算。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]func measureText(MeasureOptions)
    
    
    public func measureText(options: MeasureOptions): Float64

**功能：** 计算指定文本单行布局下的宽度。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
options | MeasureOptions | 是 | - | 被计算文本描述信息。  
  
**返回值：**

类型 | 说明  
---|---  
Float64 | 文本宽度。单位：px。  
  
#### [h2]func measureTextSize(MeasureOptions)
    
    
    public func measureTextSize(options: MeasureOptions): SizeOptions

**功能：** 测量文本的宽度和高度。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
options | MeasureOptions | 是 | - | 被计算文本描述信息。  
  
**返回值：**

类型 | 说明  
---|---  
SizeOptions | 返回文本所占布局宽度和高度。单位：px。  
  
#### class MeasureOptions
    
    
    public class MeasureOptions {
        public init(
            textContent!: String,
            fontWeight!: FontWeight = FontWeight.Normal,
            fontFamily!: String = "HarmonyOS Sans",
            constraintWidth!: ?Length = None,
            fontSize!: ?Length = 16.fp,
            lineHeight!: ?Length = None,
            baselineOffset!: ?Length = 0.0.vp,
            letterSpacing!: ?Length = None,
            textIndent!: ?Length = None,
            maxLines!: UInt32 = 0,
            textAlign!: TextAlign = TextAlign.Start,
            fontStyle!: FontStyle = FontStyle.Normal,
            overflow!: TextOverflow = TextOverflow.Clip,
            textCase!: TextCase = TextCase.Normal,
            wordBreak!: WordBreak = WordBreak.BreakWord
        )
    }

**功能：** 被计算文本属性。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]init(String, FontWeight, String, ?Length, ?Length, ?Length, ?Length, ?Length, ?Length, UInt32, TextAlign, FontStyle, TextOverflow, TextCase, WordBreak)
    
    
    public init(
        textContent!: String,
        fontWeight!: FontWeight = FontWeight.Normal,
        fontFamily!: String = "HarmonyOS Sans",
        constraintWidth!: ?Length = None,
        fontSize!: ?Length = 16.fp,
        lineHeight!: ?Length = None,
        baselineOffset!: ?Length = 0.0.vp,
        letterSpacing!: ?Length = None,
        textIndent!: ?Length = None,
        maxLines!: UInt32 = 0,
        textAlign!: TextAlign = TextAlign.Start,
        fontStyle!: FontStyle = FontStyle.Normal,
        overflow!: TextOverflow = TextOverflow.Clip,
        textCase!: TextCase = TextCase.Normal,
        wordBreak!: WordBreak = WordBreak.BreakWord
    )

**功能：** 创建一个MeasureOptions对象。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
textContent | String | 是 | - | **命名参数。** 文本内容。  
fontWeight | [FontWeight](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-fontweight) | 否 | FontWeight.Normal | **命名参数。** 字体粗细。初始值: FontWeight.Normal。  
fontFamily | String | 否 | "HarmonyOS Sans" | **命名参数。** 字体族。初始值: "HarmonyOS Sans"。  
constraintWidth | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 否 | None | **命名参数。** 文本约束宽度。初始值: 0。  
fontSize | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 否 | 16.fp | **命名参数。** 字体大小。初始值: 16.fp  
lineHeight | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 否 | None | **命名参数。** 行高。初始值: 0。  
baselineOffset | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 否 | 0.0.vp | **命名参数。** 文本基线偏移。初始值: 0.0.vp。  
letterSpacing | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 否 | None | **命名参数。** 字符间距。初始值: 0。  
textIndent | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 否 | None | **命名参数。** 文本缩进。初始值: 0。  
maxLines | UInt32 | 否 | 0 | **命名参数。** 最大行数。初始值: 0。  
textAlign | [TextAlign](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-textalign) | 否 | TextAlign.Start | **命名参数。** 文本对齐方式。初始值: TextAlign.Start。  
fontStyle | [FontStyle](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-fontstyle) | 否 | FontStyle.Normal | **命名参数。** 字体样式。初始值: FontStyle.Normal。  
overflow | [TextOverflow](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-textoverflow) | 否 | TextOverflow.Clip | **命名参数。** 文本溢出处理方式。初始值: TextOverflow.Clip。  
textCase | [TextCase](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-textcase) | 否 | TextCase.Normal | **命名参数。** 文本大小写样式。初始值: TextCase.Normal。  
wordBreak | [WordBreak](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-wordbreak) | 否 | WordBreak.BreakWord | **命名参数。** 单词换行方式。初始值: WordBreak.BreakWord。  
  
#### class SizeOptions
    
    
    public class SizeOptions {
        public var width: Length = 0
        public var height: Length = 0
        public init(width!: Length = 0, height!: Length = 0)
    }

**功能：** 宽高尺寸类型，用于描述组件布局时的宽高尺寸大小。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var height
    
    
    public var height: Length = 0

**功能：** 高度。

**类型：** [Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var width
    
    
    public var width: Length = 0

**功能：** 宽度。

**类型：** [Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]init(Length, Length)
    
    
    public init(width!: Length = 0, height!: Length = 0)

**功能：** SizeOptions的构造函数。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
width | [Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 否 | 0 | **命名参数。** 宽度。初始值: 0  
height | [Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 否 | 0 | **命名参数。** 高度。初始值: 0
