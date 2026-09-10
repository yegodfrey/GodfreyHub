---
name: cangjie-references/cj-information-display-loadingprogress
title: LoadingProgress
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-information-display-loadingprogress
nodePath: 应用框架 / ArkUI（方舟UI框架） / 仓颉组件 / 信息展示 / LoadingProgress
---

# LoadingProgress

用于显示加载动效的组件。

加载动效在组件不可见时停止，组件的可见状态基于[onVisibleAreaChange](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-event-visibleareachange#func-onvisibleareachangearrayfloat64-bool-float64---unit)处理，可见阈值ratios大于0即视为可见状态。

#### 导入模块
    
    
    import kit.ArkUI.*

#### 子组件

无

#### 创建组件

#### [h2]init()
    
    
    public init()

**功能：** 创建加载进展组件。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### 通用属性/通用事件

通用属性：全部支持。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/10/v3/_yQ-ETXqRxKq7dpSF7QH3A/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090150Z&HW-CC-Expire=86400&HW-CC-Sign=6C8ED959CE42550C8185C794FC69B8D81522CAC938A1500C20FA07FBDBEE16C2)

组件应设置合理的宽高，当组件宽高设置过大时加载动效可能不符合预期效果。

通用事件：全部支持。

#### 组件属性

#### [h2]func color(?ResourceColor)
    
    
    public func color(value: ?ResourceColor): This

**功能：** 设置当前加载进度条的前景色。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?[ResourceColor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcecolor) | 是 | - | 初始值: 0xFF666666，默认加载进度条的前景色。  
  
#### 示例代码

#### [h2]示例1
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    
    @Entry
    @Component
    class EntryView {
        func build() {
            Column(space: 5) {
                Text("Orbital LoadingProgress")
                    .fontSize(9)
                    .fontColor(0xCCCCCC)
                    .width(90.percent)
                LoadingProgress().color(Color.Blue)
            }
                .width(100.percent)
                .margin(top: 5)
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/df/v3/5Ps4wO2HT-moITmrOBF6jQ/zh-cn_image_0000002713398968.gif?HW-CC-KV=V1&HW-CC-Date=20260908T090150Z&HW-CC-Expire=86400&HW-CC-Sign=745E75250E7C4F5203094566DB95D4EA26CF9D15DA39E7D66159D97B6F17A826)
