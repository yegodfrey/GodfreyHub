---
name: cangjie-references/cj-unittest_common_package_classes
title: 类
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_classes
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.unittest.common / 类
---

# 类

#### class Configuration
    
    
    public class Configuration <: ToString {
        public init()
    }

功能：存储 @Configure 宏生成的 unittest 配置数据的对象。Configuration 与 [HashMap](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_class#class-hashmapk-v-where-k--hashable--equatablek) 类似，但它的键是 [KeyFor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_interfaces#interface-keyfort) 类型，值为任何给定类型。

父类型：

  * [ToString](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-tostring)



#### [h2]init()
    
    
    public init()

功能：构造一个空的 Configuration 实例。

#### [h2]func clone()
    
    
    public func clone(): Configuration

功能：拷贝一份 Configuration 对象。

返回值：

  * Configuration \- 拷贝的对象。



#### [h2]func get<T>(KeyFor<T>)
    
    
    public func get<T>(key: KeyFor<T>): ?T

功能：获取 key 对应的值。

T 为 泛型参数，用于在对象中查找对应类型的值。

参数：

  * key: [KeyFor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_interfaces#interface-keyfort) \- 配置项的键值。



返回值：

  * ?T - 未找到时返回 None，找到对应类型及名称的值时返回 Some<T>(v) 。



#### [h2]func getByName<T>(String)
    
    
    public func getByName<T>(name: String): ?T

功能：获取 key 对应的值。

T 为 泛型参数，用于在对象中查找对应类型的值。

参数：

  * name: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 键名称。



返回值：

  * ?T - 未找到时返回 None，找到对应类型及名称的值时返回 Some<T>(v)。



#### [h2]func remove<T>(KeyFor<T>)
    
    
    public func remove<T>(key: KeyFor<T>): ?T

功能：删除对应键名称和类型的值。

参数：

  * key: [KeyFor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_interfaces#interface-keyfort) \- 配置项的键值。



返回值：

  * ?T - 当存在该值时返回该值，当不存在时返回 None。



#### [h2]func removeByName<T>(String)
    
    
    public func removeByName<T>(key: String): ?T

功能：删除对应键名称和类型的值。

参数：

  * key: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 键名称。



返回值：

  * ?T - 当存在该值时返回该值，当不存在时返回 None。



#### [h2]func set<T>(KeyFor<T>, T)
    
    
    public func set<T>(key: KeyFor<T>, value: T): Unit

功能：给对应键名称和类型设置值。

参数：

  * key: [KeyFor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_interfaces#interface-keyfort) \- 配置项的键值。
  * value: T - 键值。



#### [h2]func setByName<T>(String, T)
    
    
    public func setByName<T>(name: String, value: T): Unit

功能：给对应键名称和类型设置值。

参数：

  * name: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 键名称。
  * value: T - 键值。



#### [h2]func toString()
    
    
    public func toString(): String

功能：该对象的字符化对象，当内部对象未实现 [ToString](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-tostring) 接口时，输出 '<not printable>' 。

返回值：

  * [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 字符串。



#### [h2]static func merge(Configuration, Configuration)
    
    
    public static func merge(parent: Configuration, child: Configuration): Configuration

功能：合并 child 到 parent 配置中。其中如有同名键值 child 覆盖 parent 。

参数：

  * parent: Configuration \- 需要合并的配置
  * child: Configuration \- 需要合并的配置



返回值：

  * Configuration \- 合并完成的配置



参考示例：

  * [自定义性能基准测试配置](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_classes#class-benchmark)
  * [动态测试](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_dynamic_tests#动态测试入门)



对于大多数情况，你无需编程式地更改配置。请改用以下方式：

[@Configure 宏](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_testmacro_package_macros#configure-宏)

#### class ConfigurationKey
    
    
    sealed abstract class ConfigurationKey <: Equatable<ConfigurationKey> & Hashable {}

功能：配置项的键值对象。提供判等及 hashCode 方法。

父类型：

  * [Equatable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-equatablet)<ConfigurationKey>
  * [Hashable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-hashable)



#### [h2]func hashCode()
    
    
    public override func hashCode(): Int64

功能：获取 hashCode 值。

返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- hashCode 值。



#### [h2]let name
    
    
    public let name: String

功能：配置键值的名称。

类型：[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)

#### [h2]operator func ==(ConfigurationKey)
    
    
    public override operator func ==(that: ConfigurationKey): Bool

功能：判等。

参数：

  * that: ConfigurationKey \- 被对比的数据



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 是否相等。



#### [h2]operator func !=(ConfigurationKey)
    
    
    public override operator func !=(that: ConfigurationKey): Bool

功能：判不等。

参数：

  * that: ConfigurationKey \- 被对比的数据



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 是否不相等。



#### [h2]extend ConfigurationKey
    
    
    extend ConfigurationKey {
        static func create<T>(name: String): ConfigurationKey
    }

**static func create <T>(String)**
    
    
    public static func create<T>(name: String): ConfigurationKey

功能：创建 ConfigurationKey。

参数：

  * name: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 配置键值的名称。



返回值：

  * ConfigurationKey \- 创建的配置键值。



#### class PrettyPrinter
    
    
    public abstract class PrettyPrinter {
        public PrettyPrinter(let indentationSize!: UInt64 = 4, let startingIndent!: UInt64 = 0)
    }

功能：拥有颜色和对齐、缩进控制的打印器。

示例：
    
    
    import std.unittest.common.*
    
    main() {
        let pp = PrettyText()
        pp.colored(Color.BLUE, "Start:").newLine()
        pp.appendLine('-' * 40)
        pp.appendLeftAligned("left", 40).newLine()
        pp.appendCentered("centered", 40).newLine()
        pp.appendRightAligned("right", 40).newLine()
        pp.indent {
            => pp.appendLine("isTopLevel: ${pp.isTopLevel}")
        }
        println(pp.toString())
    }

可能的运行结果：
    
    
    Start:
    ----------------------------------------
    left
                    centered
                                       right
        isTopLevel: false

#### [h2]PrettyPrinter(UInt64,UInt64)
    
    
    public PrettyPrinter(let indentationSize!: UInt64 = 4, let startingIndent!: UInt64 = 0)

功能：PrettyPrinter 构造器。

参数：

  * indentationSize!: [UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64) \- 一个缩进的空格数，默认 4 格。
  * startingIndent!: [UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64) \- 开头的缩进个数，默认 0 个缩进。



#### [h2]prop isTopLevel
    
    
    public prop isTopLevel: Bool

功能：获取是否在打印的缩进顶层。

类型：Bool

#### [h2]func append(String)
    
    
    public func append(text: String): PrettyPrinter

功能：增加一个字符串到打印器中。不支持多行字符串，对多行字符串不支持缩进。

参数：

  * text: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 被增加的字符串。



返回值：

  * PrettyPrinter \- 打印器。



#### [h2]func append<PP>(PP)where PP <: PrettyPrintable
    
    
    public func append<PP>(value: PP): PrettyPrinter where PP <: PrettyPrintable

功能：增加一个实现了 [PrettyPrintable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_interfaces#interface-prettyprintable) 的对象到打印器中。

参数：

  * value: PP - 一个实现了 [PrettyPrintable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_interfaces#interface-prettyprintable) 的对象。



返回值：

  * PrettyPrinter \- 打印器。



#### [h2]func appendCentered(String, UInt64)
    
    
    public func appendCentered(text: String, space: UInt64): PrettyPrinter

功能：增加一个字符串到打印器中。居中对齐至指定字符数，不足的字符由空格补齐。不支持多行字符串，对多行字符串不支持缩进。

参数：

  * text: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 被增加的字符串。
  * space: [UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64) \- 对齐的字符数量。



返回值：

  * PrettyPrinter \- 打印器。



#### [h2]func appendLeftAligned(String, UInt64)
    
    
    public func appendLeftAligned(text: String, space: UInt64): PrettyPrinter

功能：增加一个字符串到打印器中。左对齐至指定字符数，不足的字符由空格补齐。不支持多行字符串，对多行字符串不支持缩进。

参数：

  * text: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 被增加的字符串。
  * space: [UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64) \- 对齐的字符数量。



返回值：

  * PrettyPrinter \- 打印器。



#### [h2]func appendLine(String): PrettyPrinter
    
    
    public func appendLine(text: String): PrettyPrinter

功能：增加一个字符串到打印器中，跟着一个换行符。

参数：

  * text: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 被增加的字符串。



返回值：

  * PrettyPrinter \- 打印器。



#### [h2]func appendLine<PP>(PP) where PP <: PrettyPrintable
    
    
    public func appendLine<PP>(value: PP): PrettyPrinter where PP <: PrettyPrintable

功能：增加一个实现了 [PrettyPrintable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_interfaces#interface-prettyprintable) 的对象到打印器中，跟着一个换行符。

参数：

  * value: PP - 一个实现了 [PrettyPrintable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_interfaces#interface-prettyprintable) 的对象。



返回值：

  * PrettyPrinter \- 打印器。



#### [h2]func appendRightAligned(String, UInt64)
    
    
    public func appendRightAligned(text: String, space: UInt64): PrettyPrinter

功能：增加一个字符串到打印器中。右对齐至指定字符数。不支持多行字符串，对多行字符串不支持缩进。

参数：

  * text: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 被增加的字符串。
  * space: [UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64) \- 对齐的字符数量。



返回值：

  * PrettyPrinter \- 打印器。



#### [h2]func colored(Color, () -> Unit)
    
    
    public func colored(color: Color, body: () -> Unit): PrettyPrinter

功能：对闭包中给打印器增加的字符串指定颜色。

常见的用法如下：
    
    
    pp.colored(RED) {
        pp.appendLine("1")
        pp.appendLine("2")
        pp.appendLine("3")
    }

此时字符串 "1" "2" "3" 均被打印为红色。

参数：

  * color: [Color](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_enums#enum-color) \- 指定打印的颜色。
  * body: () -> Unit - 添加字符串的闭包。



返回值：

  * PrettyPrinter \- 打印器。



#### [h2]func fillLimitedSpace(Int64, () -> Unit)
    
    
    public open func fillLimitedSpace(spaceSize: Int64, body: () -> Unit): PrettyPrinter

功能：指定大小填充代码块。

参数：

  * spaceSize: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 所指定的大小。
  * body: () -> Unit - 填充的方式。



返回值：

  * PrettyPrinter \- 打印器。



#### [h2]func colored(Color, String)
    
    
    public func colored(color: Color, text: String): PrettyPrinter

功能：对给打印器增加的字符串指定颜色��

参数：

  * color: [Color](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_enums#enum-color) \- 指定打印的颜色。
  * text: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 添加的字符串。



返回值：

  * PrettyPrinter \- 打印器。



#### [h2]func customOffset(UInt64, () -> Unit)
    
    
    public func customOffset(symbols: UInt64, body: () -> Unit): PrettyPrinter

功能：对闭包中给打印器增加的字符串指定额外缩进的个数。

常见的用法如下：
    
    
    pp.customOffset(5) {
        pp.appendLine("1")
        pp.appendLine("2")
        pp.appendLine("3")
    }

此时字符串 "1" "2" "3" 均额外缩进 5 个字符。

参数：

  * symbols: [UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64) \- 指定缩进个数。
  * body: () -> Unit - 添加字符串的闭包。



返回值：

  * PrettyPrinter \- 打印器。



#### [h2]func indent(() -> Unit)
    
    
    public func indent(body: () -> Unit): PrettyPrinter

功能：对闭包中给打印器增加的字符串指定额外缩进一次。

常见的用法如下：
    
    
    pp.indent {
        pp.appendLine("1")
        pp.appendLine("2")
        pp.appendLine("3")
    }

此时字符串 "1" "2" "3" 均额外缩进一次。

参数：

  * body: () -> Unit - 添加字符串的闭包。



返回值：

  * PrettyPrinter \- 打印器。



#### [h2]func indent(UInt64, () -> Unit)
    
    
    public func indent(indents: UInt64, body: () -> Unit): PrettyPrinter

功能：对闭包中给打印器增加的字符串指定额外缩进指定次数。

常见的用法如下：
    
    
    pp.indent(2) {
        pp.appendLine("1")
        pp.appendLine("2")
        pp.appendLine("3")
    }

此时字符串 "1" "2" "3" 均额外缩进 2 次。

参数：

  * indents: [UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64) \- 指定额外缩进的次数。
  * body: () -> Unit - 添加字符串的闭包。



返回值：

  * PrettyPrinter \- 打印器。



#### [h2]func newLine()
    
    
    public func newLine(): PrettyPrinter

功能：增加新行。

返回值：

  * PrettyPrinter \- 打印器。



#### [h2]func put(String)
    
    
    protected func put(s: String): Unit

功能：打印字符串。

参数：

  * s: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 需打印的字符串。



#### [h2]func putNewLine()
    
    
    protected open func putNewLine(): Unit

功能：打印新行。

#### [h2]func setColor(Color)
    
    
    protected func setColor(color: Color): Unit

功能：设置颜色。

参数：

  * color: [Color](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_enums#enum-color) \- 指定的颜色。



#### class PrettyText
    
    
    public class PrettyText <: PrettyPrinter & PrettyPrintable & ToString {
        public init()
        public init(string: String)
    }

功能：存储打印的输出。主要用途是中间存储和传递这些值。

实现了 PrettyPrinter（可以打印到）和 [PrettyPrintable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_interfaces#interface-prettyprintable)（可以从中打印）的方法。

父类型：

  * PrettyPrinter
  * [PrettyPrintable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_interfaces#interface-prettyprintable)
  * [ToString](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-tostring)



示例：
    
    
    import std.unittest.*
    import std.unittest.common.*
    import std.unittest.testmacro.*
    
    main() {
        let pp = PrettyText()
        println("isEmpty: ${pp.isEmpty()}")
        pp.append("hello world")
        println(pp.toString())
    }

可能的运行结果：
    
    
    isEmpty: true
    hello world

#### [h2]init()
    
    
    public init()

功能：默认构造器，生成一个空的对象。

#### [h2]init(String)
    
    
    public init(string: String)

功能：构造器，生成一个以入参开头的文本构造器。

参数：

  * string: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 希望放入打印文本开头的字符串。



#### [h2]func isEmpty()
    
    
    public func isEmpty(): Bool

功能：返回当前构造器是否为空，即未有值传入给构造器。

返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 未有内容传入时返回 true ，否则返回 false 。



#### [h2]func pprint(PrettyPrinter)
    
    
    public func pprint(to: PrettyPrinter): PrettyPrinter

功能：打印信息到打印器上。

参数：

  * to: PrettyPrinter \- 打印器。



返回值：

  * PrettyPrinter \- 打印器。



#### [h2]func toString()
    
    
    public func toString(): String

功能：打印文本到字符串上。

返回值：

  * [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 打印文本的字符串。



#### [h2]static func of<PP>(PP)
    
    
    public static func of<PP>(pp: PP): PrettyText where PP <: PrettyPrintable

功能：通过打印从 [PrettyPrintable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_interfaces#interface-prettyprintable) 创建 PrettyText。

参数：

  * pp: PP - 一个实现了 [PrettyPrintable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_interfaces#interface-prettyprintable) 的类型。



返回值：

  * PrettyText \- 打印文本对象。


