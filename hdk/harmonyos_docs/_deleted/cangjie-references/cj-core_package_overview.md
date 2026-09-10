---
name: cangjie-references/cj-core_package_overview
title: std.core
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_overview
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.core
---

# std.core

#### 功能介绍

core 包是标准库的核心包，提供了适用仓颉语言编程最基本的一些 API 能力。

提供了内置类型（有符号整型、无符号整型、浮点型等）、常用函数（print、println、eprint 等）、常用接口（ToString、Hashable、Equatable、Collection 等）、常用类和结构体（Array、String、Range 等）、常用异常类（Error、Exception 以及它们的一些细分子类）。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fb/v3/JxqNxTDJQUujvApanVHY1Q/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111652Z&HW-CC-Expire=86400&HW-CC-Sign=02AE8A7108A52C4E63CE0B7B1958AD9DA1D64BC05D07FA9DDDD8E1D38868D44B)

core 包不需要显式导入，默认导入。

#### API 列表

#### [h2]函数

函数名 | 功能  
---|---  
[acquireArrayRawData(Array<T>) where T <: CType](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_funcs#func-acquirearrayrawdatatarrayt-where-t--ctype) | 获取 Array<T> 中数据的原始指针实例，T 需要满足 CType 约束。  
[alignOf<T>() where T <: CType](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_funcs#func-alignoft-where-t--ctype) | 获取类型 T 的内存对齐值。  
[eprint(String, Bool)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_funcs#func-eprintstring-bool) | 将指定字符串打印到标准错误文本流。  
[eprintln(String)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_funcs#func-eprintlnstring) | 将指定字符串打印到标准错误文本流，末尾添加换行。  
[eprint<T>(T, Bool) where T <: ToString](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_funcs#func-eprinttt-bool-where-t--tostring) | 将指定 T 类型实例的字符串表示打印到标准错误文本流。  
[eprintln<T>(T) where T <: ToString](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_funcs#func-eprintlntt-where-t--tostring) | 将指定 T 类型实例的字符串表示打印到标准错误文本流，末尾添加换行。  
[ifNone(Option<T>, () -> Unit)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_funcs#func-ifnonetoptiont----unit) | 如果输入是 Option.None 类型数据，则执行 action 函数。  
[ifSome(Option<T>, (T) -> Unit)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_funcs#func-ifsometoptiont-t---unit) | 如果输入是 Option.Some 类型数据，则执行 action 函数。  
[max<T>(T, T, Array<T>) where T <: Comparable<T>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_funcs#func-maxtt-t-arrayt-where-t--comparablet) | 获取一组数据中的最大值  
[min<T>(T, T, Array<T>) where T <: Comparable<T>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_funcs#func-mintt-t-arrayt-where-t--comparablet) | 获取一组数据中的最小值  
[print(Bool, Bool)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_funcs#func-printbool-bool) | 向控制台输出 Bool 类型数据的字符串表达。  
[print(Float16, Bool)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_funcs#func-printfloat16-bool) | 向控制台输出 Float16 类型数据的字符串表达。  
[print(Float32, Bool)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_funcs#func-printfloat32-bool) | 向控制台输出 Float32 类型数据的字符串表达。  
[print(Float64, Bool)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_funcs#func-printfloat64-bool) | 向控制台输出 Float64 类型数据的字符串表达。  
[print(Int16, Bool)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_funcs#func-printint16-bool) | 向控制台输出 Int16 类型数据的字符串表达。  
[print(Int32, Bool)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_funcs#func-printint32-bool) | 向控制台输出 Int32 类型数据的字符串表达。  
[print(Int64, Bool)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_funcs#func-printint64-bool) | 向控制台输出 Int64 类型数据的字符串表达。  
[print(Int8, Bool)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_funcs#func-printint8-bool) | 向控制台输出 Int8 类型数据的字符串表达。  
[print(Rune, Bool)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_funcs#func-printrune-bool) | 向控制台输出 Rune 类型数据的字符串表达。  
[print(String, Bool)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_funcs#func-printstring-bool) | 向控制台输出指定字符串。  
[print(UInt16, Bool)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_funcs#func-printuint16-bool) | 向控制台输出 UInt16 类型数据的字符串表达。  
[print(UInt32, Bool)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_funcs#func-printuint32-bool) | 向控制台输出 UInt32 类型数据的字符串表达。  
[print(UInt64, Bool)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_funcs#func-printuint64-bool) | 向控制台输出 UInt64 类型数据的字符串表达。  
[print(UInt8, Bool)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_funcs#func-printuint8-bool) | 向控制台输出 UInt8 类型数据的字符串表达。  
[print<T>(T, Bool) where T <: ToString](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_funcs#func-printtt-bool-where-t--tostring) | 向控制台输出 T 类型实例的字符串表示。  
[println()](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_funcs#func-println) | 向标准输出（stdout）输出换行符。  
[println(Bool)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_funcs#func-printlnbool) | 向控制台输出 Bool 类型数据的字符串表达，末尾添加换行。  
[println(Float16)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_funcs#func-printlnfloat16) | 向控制台输出 Float16 类型数据的字符串表达，末尾添加换行。  
[println(Float32)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_funcs#func-printlnfloat32) | 向控制台输出 Float32 类型数据的字符串表达，末尾添加换行。  
[println(Float64)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_funcs#func-printlnfloat64) | 向控制台输出 Float64 类型数据的字符串表达，末尾添加换行。  
[println(Int16)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_funcs#func-printlnint16) | 向控制台输出 Int16 类型数据的字符串表达，末尾添加换行。  
[println(Int32)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_funcs#func-printlnint32) | 向控制台输出 Int32 类型数据的字符串表达，末尾添加换行。  
[println(Int64)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_funcs#func-printlnint64) | 向控制台输出 Int64 类型数据的字符串表达，末尾添加换行。  
[println(Int8)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_funcs#func-printlnint8) | 向控制台输出 Int8 类型数据的字符串表达，末尾添加换行。  
[println(Rune)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_funcs#func-printlnrune) | 向控制台输出 Rune 类型数据的字符串表达，末尾添加换行。  
[println(String)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_funcs#func-printlnstring) | 向控制台输出指定字符串，末尾添加换行。  
[println(UInt16)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_funcs#func-printlnuint16) | 向控制台输出 UInt16 类型数据的字符串表达，末尾添加换行。  
[println(UInt32)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_funcs#func-printlnuint32) | 向控制台输出 UInt32 类型数据的字符串表达，末尾添加换行。  
[println(UInt64)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_funcs#func-printlnuint64) | 向控制台输出 UInt64 类型数据的字符串表达，末尾添加换行。  
[println(UInt8)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_funcs#func-printlnuint8) | 向控制台输出 UInt8 类型数据的字符串表达，末尾添加换行。  
[println<T>(T) where T <: ToString](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_funcs#func-printlntt-where-t--tostring) | 向控制台输出 T 类型实例的字符串表示，末尾添加换行。  
[readln()](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_funcs#func-readln) | 接受控制台输入，直到遇到换行或 EOF 结束。  
[refEq(Object, Object)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_funcs#func-refeqobject-object) | 判断两个 Object 实例的内存地址是否相同。  
[releaseArrayRawData(CPointerHandle<T>) where T <: CType](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_funcs#func-releasearrayrawdatatcpointerhandlet-where-t--ctype) | 释放原始指针实例，该实例通过 acquireArrayRawData 获取。  
[sizeOf<T>() where T <: CType](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_funcs#func-sizeoft-where-t--ctype) | 获取类型 T 所占用的内存空间大小。  
[sleep(Duration)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_funcs#func-sleepduration) | 休眠当前线程。  
[zeroValue<T>()](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_funcs#func-zerovaluet) | 获取一个已全零初始化的 T 类型实例。  
  
#### [h2]类型别名

类型别名 | 功能  
---|---  
[Byte](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-byte) | Byte 类型是内置类型 UInt8 的别名。  
[Int](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-int) | Int 类型是内置类型 Int64 的别名。  
[UInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-uint) | UInt 类型是内置类型 UInt64 的别名。  
  
#### [h2]内置类型

内置类型名 | 功能  
---|---  
[Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) | 表示 8 位有符号整型，表示范围为 [-2^7, 2^7 - 1]。  
[Int16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int16) | 表示 16 位有符号整型，表示范围为 [-2^{15}, 2^{15} - 1]。  
[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) | 表示 32 位有符号整型，表示范围为 [-2^{31}, 2^{31} - 1]。  
[Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) | 表示 64 位有符号整型，表示范围为 [-2^{63}, 2^{63} - 1]。  
[IntNative](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#intnative) | 表示平台相关的有符号整型，其长度与当前系统的位宽一致。  
[UInt8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint8) | 表示 8 位无符号整型，表示范围为 [0 ~ 2^8 - 1]。  
[UInt16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint16) | 表示 16 位无符号整型，表示范围为 [0 ~ 2^{16} - 1]。  
[UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) | 表示 32 位无符号整型，表示范围为 [0 ~ 2^{32} - 1]。  
[UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64) | 表示 64 位无符号整型，表示范围为 [0 ~ 2^{64} - 1]。  
[UIntNative](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uintnative) | 表示平台相关的无符号整型，其长度与当前系统的位宽一致。  
[Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) | 表示 16 位浮点数，符合 IEEE 754 中的半精度格式（binary16）。  
[Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) | 表示 32 位浮点数，符合 IEEE 754 中的单精度格式（binary32）。  
[Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) | 表示 64 位浮点数，符合 IEEE 754 中的双精度格式（binary64）。  
[Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) | 表示布尔类型，有 true 和 false 两种取值。  
[Rune](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#rune) | 表示 unicode 字符集中的字符。  
[Unit](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#unit) | 表示仓颉语言中只关心副作用而不关心值的表达式的类型。  
[CPointer<T>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#cpointert) | 表示 T 类型实例的指针，在与 C 语言互操作的场景下使用，对应 C 语言的 T*。  
[CString](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#cstring) | 表示 C 风格字符串，在与 C 语言互操作的场景下使用。  
  
#### [h2]接口

接口名 | 功能  
---|---  
[Any](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-any) | Any 是所有类型的父类型，所有 interface 都默认继承它，所有非 interface 类型都默认实现它。  
[Hasher](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-hasher) | 该接口用于处理哈希组合运算。  
[ThreadContext](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-threadcontext) | 仓颉线程上下文接口。  
[Countable<T>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-countablet) | 该接口表示类型可数。  
[Collection<T>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-collectiont) | 该接口用来表示集合，通常容器类型应该实现该接口。  
[Less<T>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-lesst) | 该接口表示小于计算。  
[Greater<T>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-greatert) | 该接口表示大于计算。  
[LessOrEqual<T>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-lessorequalt) | 该接口表示小于等于计算。  
[GreaterOrEqual<T>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-greaterorequalt) | 该接口表示大于等于计算。  
[Comparable<T>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-comparablet) | 该接口表示比较运算，是等于、小于、大于、小于等于、大于等于接口的集合体。  
[Equal<T>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-equalt) | 该接口用于支持判等操作。  
[NotEqual<T>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-notequalt) | 该接口用于支持判不等操作。  
[Equatable<T>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-equatablet) | 该接口是判等和判不等两个接口的集合体。  
[Hashable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-hashable) | 该接口用于计算哈希值。  
[Iterable<E>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-iterablee) | 该接口表示可迭代，实现了该接口的类型（通常为容器类型）可以在 for-in 语句中实现迭代，也可以获取其对应的迭代器类型实例，调用 next 函数实现迭代。  
[Resource](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-resource) | 该接口用于资源管理，通常用于内存、句柄等资源的关闭和释放。  
[ToString](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-tostring) | 该接口用来提供具体类型的字符串表示。  
[CType](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-ctype) | 表示支持与 C 语言互操作的接口。  
  
#### [h2]类

类名 | 功能  
---|---  
[ArrayIterator<T>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_classes#class-arrayiteratort) | 数组迭代器，迭代功能详述见 Iterable 和 Iterator 接口说明。  
[Box<T>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_classes#class-boxt) | Box 类型提供了为其他类型添加一层 class 封装的能力。  
[Future<T>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_classes#class-futuret) | Future<T> 实例代表一个仓颉线程任务，可用于获取仓颉线程的计算结果，向仓颉线程发送取消信号。  
[Iterator<T>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_classes#class-iteratort) | 该类表示迭代器，提供 next 方法支持对容器内的成员进行迭代遍历。  
[Object](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_classes#class-object) | 构造一个 object 实例。  
[RangeIterator<T> <: Iterator<T> where T <: Countable<T> & Comparable<T> & Equatable<T>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_classes#class-rangeiteratort--iteratort-where-t--countablet--comparablet--equatablet) | Range 类型的迭代器，迭代功能详述见 Iterable 和 Iterator 接口说明。  
[StackTraceElement](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_classes#class-stacktraceelement) | 表示一个异常堆栈的具体信息，包括异常发生的类名、函数名、文件名、行号。  
[StringBuilder](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_classes#class-stringbuilder) | 该类主要用于字符串的构建。  
[Thread](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_classes#class-thread) | Thread 类代表一个仓颉类，可用于获取线程 ID 及名字、查询线程是否存在取消请求、注册线程未处理异常的处理函数等。  
[ThreadLocal<T>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_classes#class-threadlocalt) | 该类表示仓颉线程局部变量。  
[ThreadSnapshot](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_classes#class-threadsnapshot) | 该类用于获取当前线程或者所有线程的信息，包含名称、id、状态、调用栈。  
  
#### [h2]枚举

枚举名 | 功能  
---|---  
[AnnotationKind](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-annotationkind) | 表示自定义注解希望支持的位置。  
[Endian](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-endian) | 枚举类型 Endian 表示运行平台的端序，分为大端序和小端序。  
[Ordering](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-ordering) | Ordering 表示比较大小的结果，它包含三种情况：小于，大于和等于。  
[Option<T>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-optiont) | Option<T> 是对 T 类型的封装，表示可能有值也可能无值。  
[ThreadState](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-threadstate) | ThreadState 表示线程的状态，它包含四种状态：等待执行，正在执行，挂起和结束执行。  
  
#### [h2]结构体

结构体名 | 功能  
---|---  
[Array<T>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt) | 仓颉数组类型，用来表示单一类型的元素构成的有序序列。  
[CPointerHandle<T> where T <: CType](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-cpointerhandlet-where-t--ctype) | 表示 Array 数组的原始指针，该类型中的泛型参数应该满足 CType 约束。  
[CPointerResource<T> where T <: CType](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-cpointerresourcet-where-t--ctype) | 该结构体表示 CPointer 对应的资源管理类型，其实例可以通过 CPointer 的成员函数 asResource 获取。  
[CStringResource](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-cstringresource) | 该结构体表示 CString 对应的资源管理类型，其实例可以通过 CString 的成员函数 asResource 获取。  
[DefaultHasher](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-defaulthasher) | 该结构体提供了默认哈希算法实现。  
[Duration](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-duration) | 表示时间间隔，是一个描述一段时间的时间类型，提供了常用的静态实例，以及计算、比较等功能。  
[LibC](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-libc) | 提供了仓颉中较为高频使用的 C 接口，如申请、释放堆上 CType 实例。  
[Range<T> where T <: Countable<T> & Comparable<T> & Equatable<T>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-ranget-where-t--countablet--comparablet--equatablet) | 该类是区间类型，用于表示一个拥有固定范围和步长的 T 的序列，要求 T 是可数的，有序的。  
[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) | 该结构体表示仓颉字符串，提供了构造、查找、拼接等一系列字符串操作。  
  
#### [h2]异常类

异常类名 | 功能  
---|---  
[ArithmeticException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-arithmeticexception) | 算术异常类，发生算术异常时使用。  
[Error](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-error) | Error 是所有错误类的父类。该类不可被继承，不可初始化，但是可以被捕获到。  
[Exception](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-exception) | Exception 是所有异常类的父类。  
[IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) | 表示参数非法的异常类。  
[IllegalFormatException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalformatexception) | 表示变量的格式无效或不标准时的异常类。  
[IllegalMemoryException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalmemoryexception) | 表示内存操作错误的异常类。  
[IllegalStateException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalstateexception) | 表示状态非法的异常类。  
[IncompatiblePackageException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-incompatiblepackageexception) | 表示包不兼容的异常类。  
[IndexOutOfBoundsException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-indexoutofboundsexception) | 表示索引越界的异常类。  
[NegativeArraySizeException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-negativearraysizeexception) | 表示数组大小为负数的异常类。  
[NoneValueException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-nonevalueexception) | 表示 Option<T> 实例的值为 None 的异常类，通常在 getOrThrow 函数中被抛出。  
[OutOfMemoryError](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-outofmemoryerror) | 表示内存不足错误的错误类，该类不可被继承，不可初始化，但是可以被捕获到。  
[OverflowException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-overflowexception) | 表示算术运算溢出的异常类。  
[SpawnException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-spawnexception) | 线程异常类，表示线程处理过程中发生异常。  
[StackOverflowError](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-stackoverflowerror) | 表示堆栈溢出错误的错误类，该类不可被继承，不可初始化，但是可以被捕获到。  
[TimeoutException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-timeoutexception) | 当阻塞操作超时时引发异常。  
[UnsupportedException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-unsupportedexception) | 表示功能未支持的异常类。  
  
  * **[函数](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_funcs)**  

  * **[类型别名](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types)**  

  * **[内置类型](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics)**  

  * **[接口](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces)**  

  * **[类](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_classes)**  

  * **[枚举](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums)**  

  * **[结构体](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs)**  

  * **[异常类](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions)**  

  * **[示例教程](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core-samples)**  



