---
name: cangjie-guides/cj-blur-effect
title: 模糊
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-blur-effect
nodePath: 应用框架 / ArkUI（方舟UI框架） / UI开发（仓颉声明式开发范式） / 使用动画 / 动画效果 / 模糊
---

# 模糊

动画效果可以丰富界面的细节，提升UI界面的真实感和品质感。例如，模糊和阴影效果可以让物体看起来更加立体，使得动画更加生动。ArkUI提供了丰富的效果接口，开发者可快速打造出精致、个性化的效果。本章中主要对常用的模糊、阴影和色彩效果等效果接口进行了介绍。

模糊可以用来体现界面空间的纵深感，区分前后元素的层级关系。

接口 | 说明  
---|---  
[backdropBlur](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-imageeffect#func-backdropblurfloat64) | 为当前组件添加背景模糊效果，入参为模糊半径。  
[blur](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-imageeffect#func-blurfloat64) | 为当前组件添加内容模糊效果，入参为模糊半径。  
  
![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9d/v3/HO9M9m_vQRuPQUuEFiBMXQ/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111603Z&HW-CC-Expire=86400&HW-CC-Sign=16144859910973D9D7F6CC859869DDB01A2C00EFE9916B2F41168FC711FF994D)

以上接口是实时模糊接口，会每帧进行实时渲染，性能负载较高。

#### 使用backdropBlur为组件添加背景模糊
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    import ohos.resource.*
    
    @Entry
    @Component
    class EntryView {
        func build() {
            Column(space: 10) {
                Text('backdropBlur')
                    .width(90.percent)
                    .height(90.percent)
                    .fontSize(20)
                    .fontColor(Color.White)
                    .textAlign(TextAlign.Center)
                    .backdropBlur(Float64(10))
                    .backgroundImage(@r(app.media.image1))
                    .backgroundImageSize(width: 400, height: 300)
            }
                .width(100.percent)
                .height(50.percent)
                .margin(top: 30)
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fe/v3/TamK558QR22QZvaO65PMbw/zh-cn_image_0000002731378737.png?HW-CC-KV=V1&HW-CC-Date=20260903T111603Z&HW-CC-Expire=86400&HW-CC-Sign=789FF0CAD33F5C63BD34C6BD79C27B2ECEC017C0D118FD45F5706A342D1ED4D8)

#### 使用blur为组件添加内容模糊
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    import ohos.resource.*
    
    @Entry
    @Component
    class EntryView {
        @State
        var radius: Float64 = 0.0
        @State
        var text: String = ''
        @State
        var y: String = '手指不在屏幕上'
    
        protected override func aboutToAppear() {
            this.text = "按住屏幕上下滑动\n" + "当前手指所在y轴位置 ： " + this.y +
                "\n" + "当前图片模糊程度为 : " + this.radius.toString();
        }
    
        func build() {
            Flex(direction: FlexDirection.Column, justifyContent: FlexAlign.SpaceBetween, alignItems: ItemAlign.Center) {
                Text(this.text)
                    .height(200)
                    .fontSize(20)
                    .fontWeight(FontWeight.Bold)
                    .fontFamily("cursive")
                    .fontStyle(FontStyle.Italic)
                Image(@r(app.media.image1))
                    .blur(this.radius)
                    .height(100.percent)
                    .width(100.percent)
                    .objectFit(ImageFit.Cover)
            }
            .height(100.percent)
            .width(100.percent)
            .onTouch({event: TouchEvent =>
                    if (event.eventType == TouchType.Move) {
                        this.y = event.touches[0].y.toString()
                        this.radius = event.touches[0].y / 10.0
                    }
                    if (event.eventType == TouchType.Up) {
                        this.radius = 0.0
                        this.y = '手指离开屏幕'
                    }
                    this.text = "按住屏幕上下滑动\n" + "当前手指所在y轴位置 ： " + this.y +
                        "\n" + "当前图片模糊程度为 : " + this.radius.toString();
                })
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/39/v3/QOZdi0CnQHGfG0l2Mf9oLw/zh-cn_image_0000002701819434.gif?HW-CC-KV=V1&HW-CC-Date=20260903T111603Z&HW-CC-Expire=86400&HW-CC-Sign=A9924BDF3EE48FE6D35A7D15134C2925EE1D3B4322089AAA2B3E7DCA57A910DA)
