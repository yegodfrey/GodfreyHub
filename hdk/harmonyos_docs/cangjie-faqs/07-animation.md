---
name: cangjie-faqs/07-animation
title: 仓颉如何实现UI动画效果
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/07-animation
nodePath: FAQ / UI开发 / 仓颉如何实现UI动画效果
---

# 仓颉如何实现UI动画效果

仓颉语言通过ArkUI框架提供多种动画类型实现UI动画效果，包括属性动画、转场动画、组件动画、帧动画等。其中属性动画支持animation属性修饰符和animateTo显式调用两种实现方式。

#### 属性动画

使用animation属性修饰符，当组件的动画属性发生变化时自动执行动画：
    
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    
    @Component
    public class PropertyAnimationDemo {
        @State
        var width: Float64 = 100.0
        @State
        var height: Float64 = 100.0
    
        public func build() {
            Column {
                Column()
                    .width(this.width)
                    .height(this.height)
                    .backgroundColor(Color.Blue)
                    .animation(AnimateParam(duration: 1000, curve: Curve.EaseInOut))
    
                Button("Animate").onClick(
                    {
                        evt =>
                            this.width = 200.0
                            this.height = 200.0
                    }
                )
            }.padding(20)
        }
    }

**UI效果** ：显示一个100x100的蓝色方块，点击"Animate"按钮后，方块在1秒内平滑放大到200x200，使用EaseInOut缓动曲线。

#### 显式调用属性动画

使用animateTo在代码中显式触发动画：
    
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    
    @Component
    public class ExplicitAnimationDemo {
        @State
        var translateX: Float32 = 0.0
    
        public func build() {
            Column {
                Text("Hello")
                    .fontSize(20)
                    .translate(x: Float64(this.translateX))
                    .padding(20)
    
                Button("Move Right").onClick({
                    evt => getUIContext().animateTo(AnimateParam(duration: 500, curve: Curve.EaseInOut), {
                        => this.translateX = 100.0
                    })
                })
                Button("Move Left").onClick({
                    evt => getUIContext().animateTo(AnimateParam(duration: 500, curve: Curve.EaseInOut), {
                        => this.translateX = 0.0
                    })
                })
            }
        }
    }

**UI效果** ：显示"Hello"文本，点击"Move Right"按钮文本向右平移100像素，点击"Move Left"返回原位，动画时长500毫秒。

#### 组合动画
    
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    
    @Component
    public class CombinedAnimationDemo {
        @State
        var scaleValue: Float32 = 1.0
        @State
        var rotateValue: Float32 = 0.0
    
        public func build() {
            Column {
                Text("Animation")
                    .fontSize(24)
                    .scale(x: this.scaleValue, y: this.scaleValue)
                    .rotate(angle: this.rotateValue)
                    .animation(AnimateParam(duration: 800, curve: Curve.Smooth))
    
                Button("Scale & Rotate").onClick(
                    {
                        evt =>
                            this.scaleValue = 1.5
                            this.rotateValue = 45.0
                    }
                )
                Button("Reset").onClick(
                    {
                        evt =>
                            this.scaleValue = 1.0
                            this.rotateValue = 0.0
                    }
                )
            }.padding(20)
        }
    }

**UI效果** ：点击按钮文本同时放大1.5倍并旋转45度，使用Smooth平滑效果，点击Reset恢复原状。

#### 常用动画属性

属性 | 说明  
---|---  
opacity | 透明度  
translate | 平移  
scale | 缩放  
rotate | 旋转  
width / height | 尺寸  
backgroundColor | 背景颜色  
  
#### 动画曲线

曲线 | 说明  
---|---  
Curve.Linear | 线性  
Curve.EaseIn | 先慢后快  
Curve.EaseOut | 先快后慢  
Curve.EaseInOut | 先慢后快再慢  
Curve.Smooth | 平滑曲线  
Curve.Friction | 阻尼曲线  
... | ...  
  
![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/be/v3/cWrfd9qcQw2Wa_O5vT0Otw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T085444Z&HW-CC-Expire=86400&HW-CC-Sign=F944CED71C0E07AE6D9485854DC95AA53C8B584DB369A7FDBE2176B10DD80190)

  1. animation修饰符须放在需要动画的属性之后。
  2. animateTo需通过getUIContext().animateTo()调用，参数为AnimateParam对象和闭包函数。
  3. 动画时长单位为毫秒。
  4. 多个属性动画可组合使用，共享同一动画配置。



更多动画效果的使用方法，详情请参见[动画](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-use-animation)。
