---
name: cangjie-references/cj-interop_package_overview
title: std.interop
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-interop_package_overview
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.interop
---

# std.interop

#### 功能介绍

interop 包提供了开发跨语言互操作库需要的一些基类，互操作库的开发者可以在继承这些基类的基础上，结合其他语言的特点，开发具有更多功能的互操作库。当前已实现了与 ArkTS 进行互操作的库，并扩展了仓颉 GC 的能力，使用仓颉的 GC 能够分析并处理两种语言间对象循环依赖的场景。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fd/v3/-TAtUnaaQOarMEmNiZuV7g/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090204Z&HW-CC-Expire=86400&HW-CC-Sign=F3DAB609EF4752D58C7AE4162F27CDE451F8B1DEB3755CAB6799FF32184F4254)

interop 包适用于仓颉互操作框架开发场景，当前仅用于互操作库相关 API 的内部实现，开发者请勿随意使用此包。

#### API 列表

#### [h2]类

类名 | 功能  
---|---  
[ExportedRef](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-interop_package_classes#class-exportedref) | 此类用来包装跨语言互操作场景下需要被外部语言使用的类或函数。  
[ExportTable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-interop_package_classes#class-exporttable) | 此类通过类型为 [UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64) 的 handle 管理 [ExportedRef](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-interop_package_classes#class-exportedref) 的实例对象的生命周期。  
[ForeignProxy](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-interop_package_classes#class-foreignproxy) | 此类用于代理跨语言互操作场景下外部语言的对象 handle。  
[InteropContext](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-interop_package_classes#class-interopcontext) | 此类封装了跨语言互操作场景下处理循环引用的函数。  
  
  * **[类](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-interop_package_classes)**  



