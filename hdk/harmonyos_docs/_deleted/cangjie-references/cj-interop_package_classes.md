---
name: cangjie-references/cj-interop_package_classes
title: 类
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-interop_package_classes
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.interop / 类
---

# 类

#### class ExportedRef
    
    
    public abstract class ExportedRef {
        protected var handle: UInt64 = 0
        protected let ref: Any
        protected let interopContext: InteropContext
        protected init(exportedRef: Any, context: InteropContext)
    }

功能：此类用来包装跨语言互操作场景下需要被外部语言使用的类或函数，此类的实例对象可通过 ExportTable 使用类型为 [UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64) 的 handle 进行管理，外部语言亦可通过 handle 间接引用此对象。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b0/v3/nUKfDL6QTN-NVKVnghrcVg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111705Z&HW-CC-Expire=86400&HW-CC-Sign=2E614FCFE6A4309E5B855D8F1BF04AF96E4FEF6FAC7FCEDFBB316893904F1900)

此类不具备任何 public 的成员与接口，当前只被互操作库相关的 API 使用，开发者请勿随意继承此类。

#### [h2]let interopContext
    
    
    protected let interopContext: InteropContext

功能：用来表示某种跨语言互操作的上下文环境，在与某一种特定语言进行互操作时，此成员亦为特定值。

类型：InteropContext

#### [h2]let ref
    
    
    protected let ref: Any

功能：被此类型包装的真正被外部依赖的函数或者对象。

类型：[Any](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-any)

#### [h2]var handle
    
    
    protected var handle: UInt64 = 0

功能：用来表示此类型实例对象的句柄, 此值只能为 validateHandle 的返回值。

类型：[UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64)

#### [h2]init(Any, InteropContext)
    
    
    protected init(exportedRef: Any, context: InteropContext)

功能：基于要封装的对象或函数实例与互操作上下文环境构造一个 ExportedRef 实例。

参数：

  * exportedRef: [Any](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-any) \- 被此类型包装的真正被外部依赖的函数或者对象。

  * context: InteropContext \- 用来表示这是哪种互操作的上下文环境。




#### [h2]func validateHandle()
    
    
    protected func validateHandle(): Unit

功能：为此类型生成有效的句柄。

#### class ExportTable
    
    
    public class ExportTable {}

功能：此类通过类型为 [UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64) 的 handle 管理 ExportedRef 的实例对象的生命周期，可实现为 ExportedRef 对象生成 handle，根据 handle 获取 ExportedRef 对象， 根据 handle 移除 ExportedRef 对象等操作。

#### [h2]static func createExportHandle(ExportedRef)
    
    
    public static func createExportHandle(ref: ExportedRef): UInt64

功能：为 ExportedRef 生成 handle。

参数：

  * ref: ExportedRef \- 需要生成 handle 的对象实例。



返回值：

  * [UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64) \- 为 ExportedRef 对象生成的 handle。



#### [h2]static func crossAccessBarrier(UInt64)
    
    
    public static func crossAccessBarrier(handle: UInt64): Unit

功能：此接口用于外部语言通过 handle 间接访问 ExportedRef 对象的场景，当前只被互操作库相关的 API 使用，开发者请勿随意使用。

参数：

  * handle: [UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64) \- createExportHandle 的返回值。



#### [h2]static func getExportedRef(UInt64)
    
    
    public static func getExportedRef(handle: UInt64): ?ExportedRef

功能：根据 handle 返回 ExportedRef 对象，如果 handle 无效，返回 [None](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#none)。

参数:

  * handle: [UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64) \- createExportHandle 的返回值。



返回值：

  * ?ExportedRef \- 如果 handle 有效，则返回 ExportedRef 对象，否则返回 None。



#### [h2]static func removeExportedRef(UInt64)
    
    
    public static func removeExportedRef(handle: UInt64): Unit

功能：根据 handle 移除 ExportedRef 对象。

参数：

  * handle: [UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64) \- createExportHandle 的返回值。



#### class ForeignProxy
    
    
    public abstract class ForeignProxy {
        protected init(context: InteropContext)
    }

功能：此类用于代理跨语言互操作场景下外部语言的对象 handle。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6e/v3/SB7E6RMLTl-owTE0c6MOHg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111705Z&HW-CC-Expire=86400&HW-CC-Sign=8862F56807A95145958C97CE521490D4537B7B42DC4B4CD99762039180633AB3)

此类不具备任何 public 的成员与接口，当前只被互操作库相关的 API 使用，开发者请勿随意继承此类。

#### [h2]init(InteropContext)
    
    
    protected init(context: InteropContext)

功能：基于互操作上下文环境 context 来构造一个 ForeignProxy 实例。

参数：

  * context: InteropContext \- 用来表示这是哪种互操作的上下文环境。



#### class InteropContext
    
    
    public abstract class InteropContext <: Equatable<InteropContext> {
        protected init(handler: (ExportedRef, ForeignProxy) -> Unit)
    }

功能：此类封装了跨语言互操作场景下处理循环引用的函数。此类不具备任何 public 的成员与接口，当前只被互操作库相关的 API 使用，开发者请勿随意继承此类。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ce/v3/XnN111uZRjCerb6tapP5Cw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111705Z&HW-CC-Expire=86400&HW-CC-Sign=11C2E17F273348016B159384E6BF672579D9C8C0CD24D1D817D18681BD5D96C2)

此类不具备任何 public 的成员与接口，当前只被互操作库相关的 API 使用，开发者请勿随意继承此类。

父类型：

  * [Equatable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-equatablet)<InteropContext>



#### [h2]init((ExportedRef, ForeignProxy) -> Unit)
    
    
    protected init(handler: (ExportedRef, ForeignProxy) -> Unit)

功能：用来构造一个 InteropContext 实例。

参数：

  * handler: (ExportedRef, ForeignProxy) -> [Unit](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#unit) \- 在特定互操作场景下用来处理跨语言循环引用中垃圾内存的函数。


