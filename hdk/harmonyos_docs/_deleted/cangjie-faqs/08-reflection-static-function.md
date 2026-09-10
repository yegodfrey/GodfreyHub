---
name: cangjie-faqs/08-reflection-static-function
title: 仓颉语言是否支持反射调用类的静态成员函数和实例成员函数
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/08-reflection-static-function
nodePath: FAQ / 标准库 / 仓颉语言是否支持反射调用类的静态成员函数和实例成员函数
---

# 仓颉语言是否支持反射调用类的静态成员函数和实例成员函数

仓颉语言支持反射调用类的静态成员函数和实例成员函数。

#### 反射调用类的静态成员函数

仓颉支持反射调用类的静态成员函数，详情请参见[std.reflect—class StaticFunctionInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-staticfunctioninfo)。

示例：
    
    
    class Car {
        private static var num: Int64 = 0;
        private var color: String
    
        public static func getCarNum(): Int64 {
            return num
        }
    
        init(color: String) {
            num++
            this.color = color
        }
    
        public func getColor(): String {
            return this.color
        }
    
        public func setColor(color: String) {
            this.color = color
        }
    }
    
    public func FAQ25Test1(): Unit {
        let car = Car("white")
        let ty = ClassTypeInfo.get("ohos_app_cangjie_entry.Car")
        let sfunc = ty.getStaticFunctions("getCarNum")[0]
        Hilog.info(0, "Cangjie Test", "The result of getCarNum is " + (sfunc.apply(ty) as Int64).getOrThrow().toString())
    }

调用FAQ25Test1，日志输出结果：
    
    
    The result of getCarNum is 1

#### 反射调用类的实例成员函数

仓颉支持反射调用类的静态成员函数，详情请参见[std.reflect—class InstanceFunctionInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-instancefunctioninfo)。

示例：
    
    
    public func FAQ25Test2(): Unit {
        let car = Car("white")
        let ty = ClassTypeInfo.get("ohos_app_cangjie_entry.Car")
        let ifunc = ty.getInstanceFunction("getColor")
        Hilog.info(0, "Cangjie Test", "The result of getColor is " + (ifunc.apply(car) as String).getOrThrow())
    }

调用FAQ25Test2，日志输出结果：
    
    
    The result of getColor is white
