---
name: cangjie-references/cj-apis-uicontext-font
title: Font
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-uicontext-font
nodePath: 应用框架 / ArkUI（方舟UI框架） / 仓颉API / UI界面 / ohos.arkui.ui_context（UIContext） / Font
---

# Font

注册自定义字体的信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1e/v3/-EoJAfmWQqSzvPULLzHWjQ/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090143Z&HW-CC-Expire=86400&HW-CC-Sign=5BCF1474FAD1AA71071D1928246F6D286EEB61F18504D0664F2BB7513073ACE1)

以下API需先使用[UIContext](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-uicontext-uicontext#class-uicontext)中的[getFont()](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-uicontext-uicontext#func-getfont)方法获取Font实例，再通过此实例调用对应方法。

#### 导入模块
    
    
    import kit.ArkUI.*

#### class Font
    
    
    public class Font {}

**功能：** 字体类，提供字体注册、获取系统字体列表和根据字体名称获取字体信息等功能。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]func getFontByName(String)
    
    
    public func getFontByName(fontName: String): ?FontInfo

**功能：** 根据字体名称获取字体详细信息。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
fontName | String | 是 | - | 字体名称。  
  
**返回值：**

类型 | 说明  
---|---  
?FontInfo | 返回字体信息，如果找不到对应字体则返回None。  
  
#### [h2]func getSystemFontList()
    
    
    public func getSystemFontList(): Array<String>

**功能：** 获取系统支持的字体列表。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
Array<String> | 系统字体名称列表。  
  
#### [h2]func registerFont(ResourceStr, ResourceStr)
    
    
    public func registerFont(familyName!: ResourceStr, familySrc!: ResourceStr): Unit

**功能：** 在字体管理中注册自定义字体。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
familyName | [ResourceStr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcestr) | 是 | - | **命名参数。** 字体名称。  
familySrc | [ResourceStr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcestr) | 是 | - | **命名参数。** 字体资源路径。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[通用错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-universal)。

错误码 | 说明  
---|---  
401 | Invalid input parameter  
100001 | Internal error.  
  



#### class FontInfo
    
    
    public class FontInfo {
        public var path: String
        public var postScriptName: String
        public var fullName: String
        public var family: String
        public var subfamily: String
        public var weight: UInt32
        public var width: UInt32
        public var italic: Bool
        public var monoSpace: Bool
        public var symbolic: Bool
    }

**功能：** 字体的详细信息。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var family
    
    
    public var family: String

**功能：** 字体家族。

**类型：** String

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var fullName
    
    
    public var fullName: String

**功能：** 字体完整名称。

**类型：** String

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var italic
    
    
    public var italic: Bool

**功能：** 是否为斜体。

**类型：** Bool

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var monoSpace
    
    
    public var monoSpace: Bool

**功能：** 是否为等宽字体。

**类型：** Bool

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var path
    
    
    public var path: String

**功能：** 字体文件路径。

**类型：** String

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var postScriptName
    
    
    public var postScriptName: String

**功能：** PostScript名称。

**类型：** String

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var subfamily
    
    
    public var subfamily: String

**功能：** 字体子族名称。

**类型：** String

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var symbolic
    
    
    public var symbolic: Bool

**功能：** 是否支持符号字体。

**类型：** Bool

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var weight
    
    
    public var weight: UInt32

**功能：** 字体粗细。

**类型：** UInt32

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var width
    
    
    public var width: UInt32

**功能：** 字体宽度。

**类型：** UInt32

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### 示例代码

#### [h2]示例1（注册自定义字体）
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    import ohos.i18n.*
    import ohos.resource_manager.*
    
    @Entry
    @Component
    class EntryView {
        protected func onAppear() {
            getUIContext()
                .getFont()
                .registerFont(
                    familyName: "Deyihei",
                    familySrc: "/resources/rawfile/SmileySans-Oblique.ttf"
                )
        }
    
        func build() {
            Row {
                Column {
                    Text("HelloWorld").fontFamily("Deyihei")
                    Text("HelloWorld")
                }.width(100.percent)
            }.height(100.percent)
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/16/v3/ZnWZu3HGRKyhim50elbkFQ/zh-cn_image_0000002713558880.png?HW-CC-KV=V1&HW-CC-Date=20260908T090143Z&HW-CC-Expire=86400&HW-CC-Sign=336FF9B6F50AD08C9B9460CD45EAA694E2E6D73AE53DA94190A749FFC9977146)

#### [h2]示例2（获取系统字体列表）
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    import ohos.hilog.*
    
    @Entry
    @Component
    class EntryView {
        func build() {
            Row {
                Column {
                    Button("HelloWorld").onClick(
                        {
                            evt =>
                                let list = getUIContext()
                                    .getFont()
                                    .getSystemFontList()
                                Hilog.info(0, "AppLogCj", "${list.size}")
                        }
                    )
                }.width(100.percent)
            }.height(100.percent)
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/cb/v3/T72zjgadRgaHf2gmh2fI2w/zh-cn_image_0000002743197793.png?HW-CC-KV=V1&HW-CC-Date=20260908T090143Z&HW-CC-Expire=86400&HW-CC-Sign=D982F3953269DD5610B765E8B031D102C7DAD2FD391942C8E6DA7FE85A4FC733)

#### [h2]示例3（获取字体详细信息）
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    import ohos.hilog.*
    
    @Entry
    @Component
    class EntryView {
        func build() {
            Row {
                Column {
                    Button("HelloWorld").onClick(
                        {
                            evt =>
                                let info = getUIContext()
                                    .getFont()
                                    .getFontByName("HarmonyOS Sans Italic")
                                match (info) {
                                    case Some(v) =>
                                        Hilog.info(0, "AppLogCj", "${v.path}")
                                        Hilog.info(0, "AppLogCj", "${v.postScriptName}")
                                        Hilog.info(0, "AppLogCj", "${v.fullName}")
                                        Hilog.info(0, "AppLogCj", "${v.family}")
                                        Hilog.info(0, "AppLogCj", "${v.subfamily}")
                                        Hilog.info(0, "AppLogCj", "${v.weight}")
                                        Hilog.info(0, "AppLogCj", "${v.width}")
                                        Hilog.info(0, "AppLogCj", "${v.italic}")
                                        Hilog.info(0, "AppLogCj", "${v.monoSpace}")
                                        Hilog.info(0, "AppLogCj", "${v.symbolic}")
                                    case None => Hilog.error(0, "AppLogCj", "None")
                                }
                        }
                    )
                }.width(100.percent)
            }.height(100.percent)
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6b/v3/YEPr1pRbQG2n5V45lraJfQ/zh-cn_image_0000002713398912.png?HW-CC-KV=V1&HW-CC-Date=20260908T090143Z&HW-CC-Expire=86400&HW-CC-Sign=F2DC58B058C4316A07A2FB25522F871A7584FB05BBFC824E2B41F21959BF9B01)
