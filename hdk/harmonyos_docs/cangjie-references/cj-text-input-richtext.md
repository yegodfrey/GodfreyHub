---
name: cangjie-references/cj-text-input-richtext
title: RichText
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-text-input-richtext
nodePath: 应用框架 / ArkUI（方舟UI框架） / 仓颉组件 / 文本与输入 / RichText
---

# RichText

富文本组件，解析并显示HTML格式文本。

  * 适用场景：

RichText组件适用于加载与显示一段HTML字符串，且不需要对显示效果进行较多自定义的应用场景。RichText组件仅支持有限的通用属性和事件。

RichText组件底层复用了Web组件来提供基础能力，包括但不限于HTML页面的解析、渲染等。因此使用RichText组件需要遵循Web约束条件。常见典型约束如下：

移动设备的视口默认值大小为980.px，默认值可以确保大部分网页在移动设备下可以正常浏览。如果RichText组件宽度低于这个值，content内部的HTML则可能会产生一个可以滑动的页面被RichText组件包裹。如果想替换默认值，可以在content中添加以下标签：
        
        <meta name="viewport" content="width=device-width">

  * 不适用场景：

RichText组件不适用于对HTML字符串的显示效果进行较多自定义的应用场景。例如RichText组件不支持通过设置属性与事件，来修改背景颜色、字体颜色、字体大小、动态改变内容等。在这种情况下，推荐使用[Web组件](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-web-web)。

RichText组件比较消耗内存资源，而且有一些重复使用RichText组件的场景下，比如在List下循环重复使用RichText时，会出现卡顿、滑动响应慢等现象。在这种情况下，推荐使用[RichEditor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-text-input-richeditor)组件。




#### 导入模块
    
    
    import kit.ArkUI.*

#### 子组件

无

#### 创建组件

#### [h2]init(?ResourceStr)
    
    
    public init(content: ?ResourceStr)

**功能：** 创建RichText组件。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
content | ?[ResourceStr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcestr) | 是 | - | HTML格式的字符串。初始值：""。  
  
#### 通用属性/通用事件

通用属性：只支持通用属性中[width](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-size#func-widthoptionlength)，[height](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-size#func-heightoptionlength)，[size](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-size#func-sizelength-length)，[layoutWeight](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-size#func-layoutweightint32)四个属性。由于[padding](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-size#func-paddinglength)，[margin](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-size#func-marginlength)，[constraintSize](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-layoutconstraints#func-constraintsizelength-length-length-length)属性使用时与通用属性描述不符，暂不支持。

通用事件：全部支持。

#### 组件事件

#### [h2]func onStart(?() -> Unit)
    
    
    public func onStart(callback: ?() -> Unit): This

**功能：** 加载网页时触发事件。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
callback | ?() -> Unit | 是 | - | 回调函数，加载网页时触发。初始值：{ => }。  
  
#### [h2]func onComplete(?() -> Unit)
    
    
    public func onComplete(callback: ?() -> Unit): This

**功能：** 网页加载结束时触发事件。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
callback | ?() -> Unit | 是 | - | 回调函数，网页加载结束时触发。初始值：{ => }。  
  
#### 示例代码
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    import ohos.hilog.*
    
    @Entry
    @Component
    class EntryView {
        @State
        var data: String = """
            <h1 style="text-align: center;">h1标题</h1>
            <h1 style="text-align: center;"><i>h1斜体</i></h1>
            <h1 style="text-align: center;"><u>h1下划线</u></h1>
            <h2 style="text-align: center;">h2标题</h2>
            <h3 style="text-align: center;">h3标题</h3>
            <p style="text-align: center;">p常规</p><hr/>
            <div style="width: 500.px;height: 500.px;border: 1.px solid;margin: 0 auto;">
            <p style="font-size: 35.px;text-align: center;font-weight: bold; color: rgb(24, 78, 228)">字体大小35.px,行高45.px</p>
            <p style="background-color: #e5e5e5;line-height: 45.px;font-size: 35.px;text-indent: 2em;">
            <p>这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字</p>;
        """
        func build() {
            Column() {
                //未设置layoutWeight属性，组件按照自身尺寸渲染
                RichText(data)
                    //加载网页时触发，打印"RichText onStart"
                    .onStart({=> Hilog.info(0, "AppLogCj", "RichText onStart")})
                    //网页加载结束时触发，打印"RichText onComplete"
                    .onComplete({=> Hilog.info(0, "AppLogCj", "RichText onComplete")})
                    //设定宽度500，高度400
                    .width(500)
                    .height(400)
                    //设定组件背景颜色
                    .backgroundColor(Color(0XBDDB69))
    
                // 父容器尺寸确定时，设置了layoutWeight的子元素在主轴布局尺寸按照权重进行分配，忽略本身尺寸设置。
                RichText("layoutWeight(1)")
                    .onStart({=> Hilog.info(0, "AppLogCj", "RichText onStart")})
                    .onComplete({=> Hilog.info(0, "AppLogCj", "RichText onComplete")})
                    .backgroundColor(Color(0X92D6CC))
                    //权重1，占主轴剩余空间1/3
                    .layoutWeight(1)
    
                RichText("layoutWeight(2)")
                    .onStart({=> Hilog.info(0, "AppLogCj", "RichText onStart")})
                    .onComplete({=> Hilog.info(0, "AppLogCj", "RichText onComplete")})
                    .backgroundColor(Color(0X92C48D))
                    //权重2，占主轴剩余空间2/3
                    .layoutWeight(2)
            }
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6d/v3/PIXUY3oYSAiDJPgkqW1GmQ/zh-cn_image_0000002713398960.png?HW-CC-KV=V1&HW-CC-Date=20260908T090149Z&HW-CC-Expire=86400&HW-CC-Sign=DC9B803D505F136F0A9BA4E00E85D039DEF69F06499FD24026740260AA74BD9C)
