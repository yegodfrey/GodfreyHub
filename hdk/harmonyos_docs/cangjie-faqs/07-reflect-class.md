---
name: cangjie-faqs/07-reflect-class
title: 仓颉语言如何获取对象的类名
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/07-reflect-class
nodePath: FAQ / 标准库 / 仓颉语言如何获取对象的类名
---

# 仓颉语言如何获取对象的类名

仓颉语言支持使用反射来获取实例对象的类名，详情请参见[std.reflect—ClassTypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-classtypeinfo)。
    
    
    public class Doo {
        public let item = 0
        public func f() {}
    }
    
    public func FAQ23Test() {
        let a = Doo()
        let ty: TypeInfo = TypeInfo.of(a)
        Hilog.info(0, "Cangjie Test", ty.name)
        Hilog.info(0, "Cangjie Test", ty.qualifiedName)
        Hilog.info(0, "Cangjie Test", ty.instanceFunctions.size.toString())
    }

调用FAQ23Test，日志输出结果：
    
    
    Doo
    ohos_app_cangjie_entry.Doo
    1
