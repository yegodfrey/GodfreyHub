---
name: cangjie-faqs/11-extend
title: 仓颉语言中，接口扩展可以和被扩展接口/类型不在同一个包中吗
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/11-extend
nodePath: FAQ / 语法 / 仓颉语言中，接口扩展可以和被扩展接口/类型不在同一个包中吗
---

# 仓颉语言中，接口扩展可以和被扩展接口/类型不在同一个包中吗

仓颉语言不允许定义孤儿扩展，即接口扩展既不与接口定义在同一个包中，也不与被扩展类型定义在同一个包中。原因是孤儿扩展可能会导致一个类型被意外地实现不合适的接口，造成理解上的困扰。

详情请参见[访问规则](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-access_rules)。

例如

  * 在ohos_app_cangjie_entry.FAQ_16.A包中定义class Foo


    
    
    package ohos_app_cangjie_entry.FAQ_16.A
    
    public class Foo {}

  * 在ohos_app_cangjie_entry.FAQ_16.B包中定义interface Bar


    
    
    package ohos_app_cangjie_entry.FAQ_16.B
    
    public interface Bar {}

  * 在ohos_app_cangjie_entry.FAQ_16.B包中为class Foo进行interface Bar扩展，代码报错


    
    
    package ohos_app_cangjie_entry.FAQ_16
    
    import ohos_app_cangjie_entry.FAQ_16.A.Foo
    import ohos_app_cangjie_entry.FAQ_16.B.Bar
    
    extend Foo <: Bar {} // error: imported type 'Foo' cannot extend imported interface, used external interface: Interface-Bar
