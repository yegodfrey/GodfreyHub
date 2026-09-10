---
name: cangjie-references/cj-universal-attribute-zorder
title: Z序控制
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-zorder
nodePath: 应用框架 / ArkUI（方舟UI框架） / 仓颉组件 / 通用属性 / Z序控制
---

# Z序控制

组件的Z序，设置组件的堆叠顺序。

#### 导入模块
    
    
    import kit.ArkUI.*

#### func zIndex(?Int32)
    
    
    func zIndex(value: ?Int32): T

**功能：** 设置组件的Z轴层级。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?Int32 | 是 | - | 同一容器中兄弟组件显示层级关系。zIndex值越大，显示层级越高，即zIndex值大的组件会覆盖在zIndex值小的组件上方。 初始值：0。  
  
**返回值：**

类型 | 说明  
---|---  
T | 返回调用此接口的组件实例本身。  
  
#### 示例代码

#### [h2]示例1（Z序控制）

该示例演示了如何使用zIndex控制组件的堆叠顺序。
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    
    @Entry
    @Component
    class EntryView {
        func build() {
            Stack() {
                Text("红色 zIndex:0")
                    .width(100)
                    .height(100)
                    .backgroundColor(Color.Red)
                    .zIndex(0)
    
                Text("绿色 zIndex:2")
                    .width(100)
                    .height(100)
                    .backgroundColor(Color.Green)
                    .zIndex(2)
                    .offset(x: 20.vp, y: 20.vp)
    
                Text("蓝色 zIndex:1")
                    .width(100)
                    .height(100)
                    .backgroundColor(Color.Blue)
                    .zIndex(1)
                    .offset(x: 40.vp, y: 40.vp)
            }
                .width(100.percent)
                .height(100.percent)
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a1/v3/0mWv3PLDTBqcI4eq3gMJiQ/zh-cn_image_0000002731378823.png?HW-CC-KV=V1&HW-CC-Date=20260903T111635Z&HW-CC-Expire=86400&HW-CC-Sign=E1BEAD7BC080A61AD559CE3E1CD2ABDC28E9AF96A7F2EAC386B10B6A4C42D9FA)
