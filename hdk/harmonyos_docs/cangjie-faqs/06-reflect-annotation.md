---
name: cangjie-faqs/06-reflect-annotation
title: 如何在仓颉语言中实现运行时注解的能力
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/06-reflect-annotation
nodePath: FAQ / 标准库 / 如何在仓颉语言中实现运行时注解的能力
---

# 如何在仓颉语言中实现运行时注解的能力

仓颉语言支持开发者自定义注解机制用来让反射（详见[反射章节](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-dynamic_feature)）获取标注内容，其目的是在类型元数据之外提供更多的有用信息，以支持更复杂的逻辑。

详情请参见[自定义注解](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-anno#自定义注解)。

以下是简单的示例代码：
    
    
    @Annotation
    class Version {
        let code: String
        const init(code: String) {
            this.code = code
        }
    }
    
    @Version["1.0"]
    class A1 {}
    
    @Version["1.1"]
    class B1 {}
    
    public func FAQ22Test() {
        let objects = [A1(), B1()]
        for (obj in objects) {
            let annOpt = TypeInfo.of(obj).findAnnotation<Version>()
            if (let Some(ann) <- annOpt) {
                Hilog.info(0, "Cangjie Test", ann.code)
            }
        }
    }

调用FAQ22Test，日志输出结果：
    
    
    1.0
    1.1
