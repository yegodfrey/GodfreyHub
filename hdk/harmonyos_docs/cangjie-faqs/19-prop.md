---
name: cangjie-faqs/19-prop
title: 仓颉语言中prop和get/set有什么区别与联系
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/19-prop
nodePath: FAQ / 语法 / 仓颉语言中prop和get/set有什么区别与联系
---

# 仓颉语言中prop和get/set有什么区别与联系

仓颉语言提供prop属性机制，将getter和setter统一为一个属性访问接口，使属性的使用方式和普通变量一致。属性不同于直接定义get/set函数，它提供了更简洁的访问语法。

#### prop属性定义

  * **只读属性** ：使用prop声明，须提供get()实现
  * **读写属性** ：使用mut prop声明，须提供get()和set(v)实现


    
    
    class Circle {
        var radius: Float64 = 0.0
    
        public init(radius!: Float64) {
            this.radius = radius
        }
    
        public prop area: Float64 {
            get() {
                3.14159 * radius * radius
            }
        }
    
        public mut prop diameter: Float64 {
            get() {
                radius * 2.0
            }
            set(v) {
                radius = v / 2.0
            }
        }
    }

调用示例：
    
    
    import kit.PerformanceAnalysisKit.Hilog
    
    public func testPropAttribute(): Unit {
        let c = Circle(radius: 5.0)
        Hilog.info(0, "Cangjie Test", "area = ${c.area}")
        c.diameter = 20.0
        Hilog.info(0, "Cangjie Test", "radius = ${c.radius}")
    }

调用testPropAttribute，日志输出结果：
    
    
    area = 78.539750
    radius = 10.000000

#### prop与get/set函数的对比

特性 | prop属性 | get/set函数  
---|---|---  
访问方式 | obj.area | obj.getArea() / obj.setArea(v)  
语法 | prop area: Type | func getArea(): Type / func setArea(v: Type)  
语义 | 表示属性，使用方式类似变量 | 表示方法调用  
赋值 | obj.area = 10.0 | obj.setArea(10.0)  
  
#### mut prop的限制

以下类型不能有mut属性：数值类型、元组、函数、Bool、Unit、Nothing、String、Range、enum类型。

更多prop属性的使用方法，详情请参见[属性](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-prop)。
