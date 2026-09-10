---
name: cangjie-faqs/05-reflect
title: 仓颉语言中如何实现类似Java中的反射方法调用能力
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/05-reflect
nodePath: FAQ / 标准库 / 仓颉语言中如何实现类似Java中的反射方法调用能力
---

# 仓颉语言中如何实现类似Java中的反射方法调用能力

仓颉语言支持反射，具体使用方法详情请参见[反射和注解](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-dynamic_feature)，具体API介绍详情请参见[std.reflect](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_overview)。

以下是仓颉反射的简单示例：
    
    
    class Foo {
        public static var param1 = 20
        public var param2 = 10
    }
    
    public func FAQ21Test(): Unit {
        let obj = Foo()
        let info = TypeInfo.of(obj)
        let staticVarInfo = info.getStaticVariable("param1")
        let instanceVarInfo = info.getInstanceVariable("param2")
        Hilog.info(0, "Cangjie Test", "成员变量初始值")
        Hilog.info(0, "Cangjie Test", "Foo 的静态成员变量 ${staticVarInfo} = ")
        Hilog.info(0, "Cangjie Test", (staticVarInfo.getValue() as Int64).getOrThrow().toString())
        Hilog.info(0, "Cangjie Test", "obj 的实例成员变量 ${instanceVarInfo} = ")
        Hilog.info(0, "Cangjie Test", (instanceVarInfo.getValue(obj) as Int64).getOrThrow().toString())
        Hilog.info(0, "Cangjie Test", "更改成员变量")
        staticVarInfo.setValue(8)
        instanceVarInfo.setValue(obj, 25)
        Hilog.info(0, "Cangjie Test", "Foo 的静态成员变量 ${staticVarInfo} = ")
        Hilog.info(0, "Cangjie Test", (staticVarInfo.getValue() as Int64).getOrThrow().toString())
        Hilog.info(0, "Cangjie Test", "obj 的实例成员变量 ${instanceVarInfo} = ")
        Hilog.info(0, "Cangjie Test", (instanceVarInfo.getValue(obj) as Int64).getOrThrow().toString())
        return
    }

调用FAQ21Test，日志输出结果：
    
    
    成员变量初始值
    Foo 的静态成员变量 static param1: Int64 =
    20
    obj 的实例成员变量 param2: Int64 =
    10
    更改成员变量
    Foo 的静态成员变量 static param1: Int64 =
    8
    obj 的实例成员变量 param2: Int64 =
    25
