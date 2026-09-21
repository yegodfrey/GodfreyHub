---
name: cangjie-guides/cj-code-linter-rules
title: Cangjie Lint代码检查规则
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-code-linter-rules
nodePath: 编写与调试应用 / 附录 / Cangjie Lint代码检查规则
---

# Cangjie Lint代码检查规则

仓颉支持通过 Cangjie Lint 工具对仓颉代码进行静态检查，本章将介绍 Cangjie Lint 工具支持的检查规则，ArkTS 与 C++ 等工程相关信息可参见[Code Linter代码检查规则](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-codelinter-rule)说明。

#### 命名

有意义地、恰当地命名在编程中是一个较难的事。好的命名特征有：能清晰地表达意图，避免造成误导。少用缩写，但常见词以及业务领域的词汇都是允许的，比如 response：resp，request：req，message：msg。 使用仓颉语言编程建议同类别的名字使用统一的命名风格，具体如下：

类别 | 命名风格 | 形式  
---|---|---  
包名和文件名 | unix_like：单词全小写，用下划线分割 | aaa_bbb  
接口、类、结构体、枚举和类型别名 | 大驼峰：首字母大写，单词连在一起，不同单词间通过单词首字母大写分开，可包含数字 | AaaBbb  
变量、函数、函数参数 | 小驼峰：首字母小写，单词连在一起，不同单词间通过单词首字母大写分开。例外：测试函数可有下划线 _；循环变量、try-catch 中的异常变量，允许单个小写字母 | aaaBbb  
let 全局变量、static let 成员变量 | 建议全大写，下划线分割 | AAA_BBB  
泛型类型变量 | 单个大写字母，或单个大写字母加数字，或单个大写字母接下划线、大写字母和数字的组合，例如：E, T, T2, E_IN, E_OUT, T_CONS | A  
  
下表是一些易混淆的单个字符，当作为标识符时，需留意：

易混淆的字符 | 易误导的字符  
---|---  
O（大写的 o）、D（大写的 d） | 0（zero）  
I（大写的 i）、l（小写 L） | 1（one）  
Z（大写的 z） | 2（two）  
S（大写的 s） | 5（five）  
b（小写的 B） | 6（six）  
B（大写的 b） | 8（eight）  
q（小写的 Q） | 9（nine）  
h（小写的 H） | n（小写的 N）  
m（小写的 M） | rn（小写的 RN）  
_（下划线） | 连续多个时很难分辨共有几个  
  
另外，在使用大、小驼峰命名风格时若遇到 JSON（JavaScript Object Notation）、HTTPS（Hypertext Transfer Protocol Secure） 等首字母缩略词，应将整个缩略词看做普通单词处理，服从命名风格的大小写规定，而不要维持全大写的写法。如大驼峰风格中：XmlHttpRequest，小驼峰风格中：jsonObject。

#### [h2]包名和文件名

**G.NAM.01 包名采用全小写单词，允许包含数字和下划线**

【级别】建议

【描述】

  * 包名字母全小写。如果有多个单词，使用下划线分隔。
  * 包名允许有数字，例如 org.apache.commons.lang3。
  * 带限定前缀的包名必须和当前包与源代码根目录的相对路径对应，建议以 Internet 域名反转的规则开头，再加上产品名称和模块名称。



【正例】

域名 | 包名  
---|---  
my_product.example.com | com.example.my_product  
my_product.example.org | org.example.my_product  
  
**G.NAM.02 源文件名采用全小写加下划线风格**

【级别】建议

【描述】

  * 文件名不采用驼峰的原因：不同系统对文件名大小写处理不同（如 Windows 系统不区分大小写，但是 Unix/Linux、macOS 系统则默认区分）。
  * 如果文件只包含一个包外部可见的顶层元素，那么选择该顶层元素的名称，以此命名。否则，选择能代表主要内容的元素名称作为文件名。源文件名称使用全小写加下划线风格。



【正例】
    
    
    // my_class.cj
    public class MyClass {
        // CODE
    }

【反例】
    
    
    // MyClass.cj  文件名不符合：使用了驼峰命名
    public class MyClass {
        // CODE
    }

#### [h2]接口、类、struct、enum 和类型别名

**G.NAM.03 接口、类、struct、enum 类型和 enum 构造器、类型别名、采用大驼峰命名**

【级别】建议

【描述】

  1. 类型定义通常是名词或名词短语，其中接口名也可以是形容词或形容词短语，都应采用大驼峰命名。
  2. enum 构造器采用大驼峰命名风格。
  3. 测试类命名时推荐以被测试类名开头，并以 Test 结尾。例如，HashTest 或 HashIntegrationTest。
  4. 建议异常类加 Exception/Error 后缀。



【正例】
    
    
    // 符合：类名使用大驼峰
    class MarcoPolo {
        // CODE
    }
    // 符合：enum 类型和 enum 构造器使用大驼峰
    enum ThreadState {
        New | Runnable | Blocked | Terminated
    }
    
    // 符合：接口名使用大驼峰
    interface TaPromotable {
        // CODE
    }
    
    // 符合：类型别名使用大驼峰
    type Point2D = (Float64, Float64)
    
    // 符合：抽象类名使用大驼峰
    abstract class AbstractAppContext {
        // CODE
    }

【反例】
    
    
    // 不符合：类名使用小驼峰
    class marcoPolos {
        // CODE
    }
    // 不符合：enum 类型名使用小驼峰
    enum timeUnit {
        Year | Month | Day | Hour
    }

【例外场景】

在 UI 场景下，一些配置需要用 enum 的成员构造来实现，html 里的一些配置习惯用小驼峰，对于领域内有约定的场景，允许例外。

#### [h2]函数

**G.NAM.04 函数名称应采用小驼峰命名**

【级别】建议

【描述】

  1. 函数名称采用小驼峰命名风格。例如，sendMessage 或 stopServer。

格式如下：

     * 建议优先将 field 对外的接口实现成属性，而不是 getXXX/setXXX，会更简洁。
     * 布尔属性名建议加 is 或 has，例如：isEmpty。
     * 函数名称建议使用以下格式：has + 名词 / 形容词 ()、动词 ()、动词 + 宾语 ()。
     * 回调函数（callback）允许介词 + 动词形式命名，如: onCreate、onDestroy、toString，其中动词主要用在动作的对象自身上，如 document.print()。
  2. 下划线可能出现在单元测试函数名称中，用于分隔名称的逻辑组件，每个组件都使用小驼峰命名法。例如，一种典型的模式是 <methodUnderTest>_<state>，又例如 pop_emptyStack，命名测试函数没有唯一的正确方法。




【正例】
    
    
    // 符合：函数名使用小驼峰
    func addExample(start: Int64, size: Int64) {
        return start + size
    }
    
    // 符合：函数名使用小驼峰
    func printAdd(add: (Int64, Int64) -> Int64): Unit {
        println(add(1, 2))
    }

【反例】
    
    
    // 不符合：函数名使用大驼峰
    func GenerateChildren(page: Int64) {
        println(page.toString())
    }

#### [h2]变量

**G.NAM.05 const 变量的名称采用全大写**

【级别】建议

【描述】

const 变量表示在编译时完成求值，并且在运行时不可改变的变量，使用下划线分隔的全大写单词来命名。

【正例】
    
    
    // 符合：const 变量使用下划线分隔的全大写单词命名
    const MAX_USER_NUM = 200
    
    class Weight {
        static const GRAMS_PER_KG = 1000
    }

【反例】
    
    
    // 不符合：const 变量没有使用下划线分隔的全大写单词命名
    const MAXUSERNUM = 200
    
    class Weight {
        static const GramsPerKg = 1000
    }

#### 格式

尽管有些编程的排版风格因人而异，但是我们强烈建议和要求在同一个项目中使用统一的编码风格，以便开发者能够轻松的阅读和理解代码，增强代码的可维护性。

#### [h2]编码格式

**G.FMT.01 源文件编码格式（包括注释）必须是 UTF-8**

【级别】要求

【描述】

对于源文件，应统一采用 UTF-8 进行编码。仓颉编译器目前仅支持 UTF-8 编码。

#### 函数

#### [h2]G.FUN.01 函数功能要单一

【级别】建议

【描述】

过长的函数往往意味着函数功能不单一，可以进行进一步拆分或分层。过于复杂的函数不利于阅读理解，难以维护。

可以考虑从以下维度间接衡量函数功能是否单一：

  * 函数行数，建议不超过 50 行（非空非注释）。

  * 除构造函数外，函数的参数，建议不超过 5 个。

  * 函数最大代码块嵌套不要过深，建议不要超过 4 层。函数的代码块嵌套深度指的是函数中的代码控制块（例如：if、for、while、match 等）之间互相包含的深度。




#### [h2]G.FUN.02 禁止函数有未被使用的参数

【级别】要求

【描述】

未被使用的参数往往是因为设计发生了变动造成的，它可能导致传参时出现不正确的参数匹配。

【反例】
    
    
    func logInfo(fileName: String, lineNo: Int64): Unit {
        println(fileName)
    }

【例外场景】

回调函数和 interface 实现等情形，可以用_代替未被使用的参数。
    
    
    interface I {
        func f(cfg: String) {
            println(cfg)
        }
    }
    
    class DefaultImpl <: I {
        func f(_: String) {
            println("default")
        }
    }

#### 类

#### [h2]G.CLS.01 override 父类函数时不要增加函数的可访问性

【级别】建议

【描述】

增加 override 函数的可访问性，子类将拥有比预期更大的访问权限。

【正例】
    
    
    open class Base {
        protected open func f(a: Int64): Int64 {
            // do some sensitive operations
            return a
        }
    }
    
    class Sub <: Base {
        protected override func f(a: Int64): Int64 {
            return a + 1
        }
    }

该正确示例中，子类覆写的基类 f() 函数与基类保持一致为 protected。

【反例】
    
    
    open class Base {
        protected open func f(a: Int64): Int64 {
            return a
        }
    }
    
    class Sub <: Base {
        public override func f(a: Int64): Int64 {
            super.f(a)
            // do some sensitive operations
        }
    
        public func g(a: Int64): Int64 {
            super.f(a) // 这种也算是增加可访问性
        }
    }

上面的错误代码中，子类覆写了基类的 f() 函数，并增加了函数的可访问性。基类 Base 定义的 f() 函数为 protected ，子类 Sub 定义该函数为 public ，从而增加了 f() 的访问性。因此，任何 Sub 的使用者都可以调用此函数。

#### 接口

#### [h2]G.ITF.02 尽量在类型定义处就实现接口，而不是通过扩展实现接口

【级别】建议

【描述】

  * 通过扩展实现接口不应该被滥用，如果一个类型在定义时就已知将要实现的接口信息，应该将接口直接声明出来，有利于使用者集中浏览信息。
  * 通过扩展实现的接口和类型定义处声明实现接口，在实现层面可能带来协变层面的问题。



【正例】
    
    
    interface I {
        func f(): Unit
    }
    
    // 符合：类型定义处实现接口
    class A <: I {
        public func f(): Unit {
            // CODE
        }
    }

【反例】
    
    
    interface I {
        func f(): Unit
    }
    
    class C {}
    
    extend C <: I {
        public func f(): Unit {}
    }
    
    main() {
        let i: I = C() // ok
    
        let f1: () -> C = {=> C()}
        let f2: () -> I = f1 // 报错，虽然 () -> C 是 () -> I 的子类型，但 C 通过扩展实现 I，此时不能协变，导致不能赋值。
        return 0
    }

#### [h2]G.ITF.03 类型定义时避免同时声明实现父接口和子接口

【级别】建议

【描述】

同时实现父接口和子接口时，父接口属于冗余信息，对开发者甄别信息造成困扰。避免声明重复的父接口可以让声明保持简洁。
    
    
    interface Base {
        func f1(): Unit
    }
    
    interface Sub <: Base {
        func f2(): Unit
    }
    
    // 符合
    class A <: Sub {
        public func f1(): Unit {
            // CODE
        }
    
        public func f2(): Unit {
            // CODE
        }
    }
    
    // 不符合
    class B <: Sub & Base {
        public func f1(): Unit {
            // CODE
        }
    
        public func f2(): Unit {
            // CODE
        }
    }

#### [h2]G.ITF.04 尽量通过泛型约束使用接口，而不是直接将接口作为类型使用

【级别】建议

【描述】

class 以外的类型转型到 interface 可能会附带装箱操作，而作为泛型约束的方式使用 interface 可以直接静态派发，避免装箱和动态派发带来的开销，提升性能。
    
    
    interface I {
        func f(): Unit
    }
    
    // 符合
    func g<T>(i: T): Unit where T <: I {
        return i.f()
    }
    
    // 不符合
    func g(i: I): Unit {
        return i.f()
    }

#### 操作符重载

#### [h2]G.OPR.01 尽量避免违反使用习惯的操作符重载

【级别】建议

【描述】

重载操作符时要有充分的理由，尽量避免改变操作符的原有使用习惯，例如使用 + 操作符来做减法运算，避免对基础类型重载已内置支持的操作符。

【正例】：
    
    
    struct Point {
        Point(let x: Int64, let y: Int64) {
        }
    
        operator func +(rhs: Point): Point { // 符合：为 Point 重载加法操作符
            return Point(this.x + rhs.x, this.y + rhs.y)
        }
    }

【反例】
    
    
    struct Point {
        Point(let x: Int64, let y: Int64) {
        }
    
        // 不符合：为 Point 重载加法操作符，但其实成员间做的是减法操作
        operator func +(rhs: Point): Point {
            return Point(this.x - rhs.x, this.y - rhs.y)
        }
    }
    
    extend Int64 {
        operator func +(right: Float64) { // 不符合：对基础类型重载已内置支持的操作符
            // CODE
        }
    }

#### [h2]G.OPR.02 尽量避免在 enum 类型内定义 () 操作符重载函数

【级别】建议

【描述】

enum 类型中定义 () 操作符重载函数，可能会和构造成员造成冲突，当两者之间发生冲突将优先调用 enum 类型的构造成员。因此建议尽量避免在 enum 类型中定义 () 操作符重载函数。

【反例】
    
    
    enum E {
        Y | X | X(Int64)
    
        operator func ()(a: Int64) { // 不符合: enum 类型内定义 () 操作符重载函数，且与构造器有冲突
            // CODE
        }
    }
    
    let e = X(1) // 调用的是 enum 构造器：X(Int64)

#### enum

#### [h2]G.ENU.01：避免 enum 的构造器与顶层元素同名

【级别】要求

【描述】

enum 构造器名字在类型所在作用域下总是自动引入，可以省略类型前缀使用。

然而，当 enum 构造器与变量名、函数名、类型名、包名冲突的时候，会优先选择变量名、函数名、类型名或包名，不容易发现冲突，也难以直观看出实际使用的版本。

所以应尽量保证 enum 的构造器与顶层函数使用不同的名字，以避免不必要的重载所带来的困惑。

【正例】
    
    
    enum TimeUnit {
        | Year(Int64)
        | Month(Int64, Int64)
        | Day(Int64, Int64, Int64)
    }
    
    class MyYear {
        let a: Int64
        init(a: Int64) {
            this.a = a
        }
    }
    
    main() {
        let y1 = Year(100) // ok，Year(100) 调用的是 TimeUnit 中的 Year(Int64) 构造器
        let y2 = MyYear(100) // ok，调用的是 class MyYear 的构造函数
        return 0
    }

【反例】
    
    
    enum TimeUnit {
        | Year(Int64) // 不符合：enum 构成成员与顶层的 class 类型同名
        | Month(Int64, Int64)
        | Day(Int64, Int64, Int64)
    }
    
    class Year {
        Year(let a: Int64) {
        }
    }
    
    main() {
        let y = Year(100) // 实际使用的是 class Year 的构造函数
        return 0
    }

【反例】
    
    
    enum E {
        | f1(Int64) // 不符合：enum 构成成员与顶层的函数同名
        | f2(Int64, Int64)
    }
    
    func f1(a: Int64) {}
    
    func f2(a: Int64, b: Int64) {}
    
    main() {
        f1(1) // 实际使用的是 func f1
        f2(1, 2) // 实际使用的是 func f2
        return 0
    }

#### [h2]G.ENU.02 尽量避免不同 enum 构造器之间不必要的重载

【级别】建议

【描述】

因为 enum 构造器的名字在类型所在作用域下总是自动引入的，所以不同 enum 中定义同名且对应位置参数类型存在子类型关系的构造成员后，省略类型前缀的使用方式将不再可用。enum 构造器参与函数的重载决议，当无法决议时 enum 构造器和函数均不能直接使用，此时 enum 构造器需要使用类型前缀的方式使用，函数也需要通过前缀限定的方式使用。只要有多个 enum constructor 通过类型检查，或只要有 enum constructor 和函数同时通过类型检查，就会造成无法决议。

【正例】
    
    
    enum TimeUnit1 {
        | Year1(Int64)
        | Month1(Int64, Int64)
        | Day1(Int64, Int64, Int64)
    }
    
    enum TimeUnit2 {
        | Year2(Int64)
        | Month2(Int64, Int64)
        | Day2(Int64, Int64, Int64)
    }
    
    main() {
        let a = Year1(1) // ok：无需使用 enum 类型前缀
        let b = Year2(2) // ok：无需使用 enum 类型前缀
        return 0
    }

【正例】
    
    
    open class Base {}
    
    class Derived <: Base {}
    
    enum E1 {
        | A1(Base)
    }
    
    enum E2 {
        | A2(Derived)
    }
    
    main() {
        let a1 = A1(Derived()) // ok：无需使用 enum 类型前缀
        let a2 = A2(Derived()) // ok：无需使用 enum 类型前缀
        return 0
    }

【反例】
    
    
    enum TimeUnit1 {
        | Year(Int64)
        | Month(Int64, Int64)
        | Day(Int64, Int64, Int64)
    }
    
    enum TimeUnit2 {
        | Year(Int64)
        | Month(Int64, Int64)
        | Day(Int64, Int64, Int64)
    }
    
    main() {
        let a = Year(1) // error：无法决议调用的是哪个 Year(Int64)
        let b = TimeUnit1.Year(1) // ok：使用 enum 类型前缀
        let c = TimeUnit2.Year(2) // ok：使用 enum 类型前缀
        return 0
    }

【反例】
    
    
    open class Base {}
    
    class Derived <: Base {}
    
    enum E1 {
        | A(Base)
    }
    
    enum E2 {
        | A(Derived)
    }
    
    main() {
        let a = A(Derived()) // error：无法决议调用的是哪个 enum 中的 constructor
        let a2 = E1.A(Derived()) // ok：使用 enum 类型前缀
        let a3 = E2.A(Derived()) // ok：使用 enum 类型前缀
        return 0
    }

#### 变量

#### [h2]G.VAR.01 优先使用不可变变量

【级别】建议

【描述】

初始化后未修改的变量或属性，建议将其声明为 let 而不是 var。

#### [h2]G.VAR.03 避免使用全局变量

【级别】建议

【描述】

使用全局变量会导致业务代码和全局变量之间产生数据耦合，并且很难跟踪数据的变化，建议避免使用全局变量。使用全局常量通常是必要的，例如定义一些全局使用的数值。

#### 表达式

#### [h2]G.EXP.01 match 表达式同一层尽量避免不同类别的 pattern 混用

【级别】建议

【描述】

仓颉提供了丰富的模式种类，包括：常量模式、通配符模式、变量模式、tuple 模式、类型模式、enum 模式。在类型匹配的前提下，根据是否总是能匹配分为两种：refutable pattern 和 irrefutable pattern，其中 irrefutable pattern 总是可以和它所要匹配的值匹配成功。

对 pattern 的使用建议如下：

  * match 表达式的不同 case 的 pattern 之间尽量保持互斥，避免依赖匹配顺序。
  * match 不能互斥时，由于匹配的顺序是从前往后，要避免前面的 case 遮盖后面的 case，比如 irrefutable pattern 的 case 需要放到所有 refutable pattern 的 case 之后。
  * match 表达式同一层中尽量避免混用不同判断维度的模式。
    * 类型模式和其它判断的维度也不一样，比如常量模式是根据值来判断，类型模式是判断类型，混用后对 exhaustive 的可读性会有影响。
    * tuple 模式、enum 模式属于解构，可以和常量模式、变量模式结合使用。



【正例】
    
    
    enum TimeUnit {
        | Year(Int64)
        | Month(Int64, Int64)
        | Day(Int64, Int64, Int64)
        | Hour(Int64, Int64, Int64, Int64)
    }
    
    let oneYear = Year(1)
    let howManyHours = match (oneYear) {
        case Year(y) => //...
        case Month(y, m) => //...
        case Day(y, m, d) => //...
        case Hour(y, m, d, h) => //...
    }

【反例】
    
    
    enum TimeUnit {
        | Year(Int64)
        | Month(Int64, Int64)
        | Day(Int64, Int64, Int64)
        | Hour(Int64, Int64, Int64, Int64)
    }
    
    let oneYear = Year(1)
    let howManyHours = match (oneYear) { // 不符合：enum 模式、类型模式混用
        case Month(y, m) => ...
        case _: TimeUnit => ...
        case Day(y, m, d) => ...
        case Hour(y, m, d, h) => ...
    }

#### [h2]G.EXP.02 不要期望浮点运算得到精确的值

【级别】建议

【描述】

因为存储二进制浮点的 bit 位是有限的，所以二进制浮点数的表示范围也是有限的，并且无法精确地表示所有实数。因此，浮点数计算结果也不是精确值，除了可以表示为 2 的幂次以及整数数乘的浮点数可以准确表示外，其余数的值都是近似值。

实际编程中，要结合场景需求，尤其是对精度的要求，合理选择浮点数操作。

例如，对于浮点值比较，如果对比较精度有要求，通常不建议直接用 != 或 == 比较，而是要考虑对精度的要求。

【正例】
    
    
    import std.math.*
    
    func isEqual(a: Float64, b: Float64): Bool {
        return abs(a - b) <= 1e-6
    }
    
    func compare(x: Float64) {
        if (isEqual(x, 3.14)) {
        // CODE
        } else {
            // CODE
        }
    }

【反例】
    
    
    func compare(x: Float64) {
        if (x == 3.14) {
        // CODE
        } else {
            // CODE
        }
    }

#### [h2]G.EXP.03 && 、 ||、? 和 ?? 操作符的右侧操作数不要修改程序状态

【级别】要求

【描述】

逻辑与（&&）、逻辑或（||）、问号操作符（?）和 coalescing（??）表达式中的右操作数是否被求值，取决于左操作数的求值结果，当左操作数的求值结果可以得到整个表达式的结果时，不会再计算右操作数的结果。如果右操作数可能修改程序状态，则不能确定该修改是否发生，因此，规定逻辑与、逻辑或、问号操作符和 coalescing 操作符的右操作数中不要修改程序状态。

这里修改程序状态主要指修改变量及其成员（如修改全局变量、取放锁）、进行 IO 操作（如读写文件，收发网络包）等。

【正例】
    
    
    var count: Int64 = 0
    
    func add(x: Int64): Int64 {
        count += x // 修改了全局变量
        return count
    }
    
    main(): Int64 {
        let isOk = false
        let num = 5
        if (isOk) { // 使用显式的条件判断来区分操作是否被执行
            if (add(num) != 0) {
                return 0
            } else {
                return 1
            }
        } else {
            return 1
        }
    }

【反例】
    
    
    var count: Int64 = 0
    
    func add(x: Int64): Int64 {
        count += x // 修改了全局变量
        return count
    }
    
    main(): Int64 {
        let isOk = false
        let num = 5
        if (isOk && (add(num) != 0)) { // 不符合： && 的右操作数中修改了程序状态
            return 0
        } else {
            return 1
        }
    }

#### [h2]G.EXP.05 用括号明确表达式的操作顺序，避免过分依赖默认优先级

【级别】建议

【描述】

当表达式包含不常用、优先级易混淆的操作符时，建议使用括号明确表达式的操作顺序，防止因默认的优先级与实现意图不符而导致程序出错。

然而过多的括号也会分散代码降低其可读性，下面是对如何使用括号的建议：

  * 一元操作符，不需要使用括号。
        
        func test(a: Int64, b: Bool, c: Bool) {
            let foo = -a // 一元操作符，不需要括号
            if (b || !c) {} // 一元操作符，不需要括号
        }

  * 涉及位操作，推荐使用括号。

  * 如果不涉及多种操作符，不需要括号。

涉及多种操作符混合使用并且优先级容易混淆的场景，建议使用括号明确表达式操作顺序。
        
        func test() {
            let (a, b, c) = (1, 2, 3)
            let (p, q, r) = (true, false, true)
        
            let foo = a + b + c // 操作符相同，不需要括号
            if (p && q && r) {} // 操作符相同，不需要括号
            let bar = 1 << (2 + 3) // 操作符不同，优先级易混淆，需要括号
        }




【正例】
    
    
    main(): Int64 {
        var a = 0
        var b = 0
        var c = 0
        a = 1 << (2 + 3)
        a = (1 << 2) + 3
        c = (a & 0xFF) + b
        if ((a & b) == 0) {
            return 0
        } else {
            return 1
        }
    }

【反例】
    
    
    main(): Int64 {
        var a = 0
        var b = 0
        var c = 0
        a = 1 << 2 + 3 // 涉及位操作符，需要括号
        c = a & 0xFF + b // 涉及位操作符，需要括号
        if (a & b == 0) { // 涉及位操作符，需要括号
            return 0
        } else {
            return 1
        }
    }

对于常用、不易混淆优先级的表达式，不需要强制增加额外的括号。例如：
    
    
    main(): Int64 {
        var a = 0
        var b = 0
        var c = 0
        var d = a + b + c // 操作符相同，可以不加括号
        var e = (a + b, c) // 逗号两边的表达式，不需要括号
        if (a > b && c > d) { // 逻辑表达式，根据子表达式的复杂情况选择是否加括号
            return 0
        } else {
            return 1
        }
    }

#### [h2]G.EXP.06 Bool 类型比较应避免多余的 == 或 !=

【级别】建议

【描述】

在 if 表达式、while、do while 表达式等使用到 Bool 类型表达式的位置，对于 Bool 类型的判断，应该避免多余的 == 或 !=。

【正例】
    
    
    func isZero(x: Int64): Bool {
        return x == 0
    }
    
    main(): Int64 {
        var a = true
        var b = isZero(1)
        if (a && !b) {
            return 1
        } else {
            return 0
        }
    }

【反例】
    
    
    func isZero(x: Int64): Bool {
        return (x == 0) == true
    }
    
    main(): Int64 {
        var a = true
        var b = isZero(1)
        if (a == true && b != true) {
            return 1
        } else {
            return 0
        }
    }

#### [h2]G.EXP.07 比较两个表达式时，左侧倾向于变化，右侧倾向于不变

【级别】建议

【描述】

当可变变量与常量比较时，如果常量放左侧，如 if (MAX == v) 不符合阅读习惯，而 if (MAX > v) 更是难于理解。

应当按阅读、表达习惯，将常量放右侧。

【正例】
    
    
    import std.collection.ArrayList
    
    const MAX_LEN = 99999
    
    func maxIndex(arr: ArrayList<Int>) {
        let len = arr.size
        if (len > MAX_LEN) {
            throw Exception("too long")
        } else {
            var i = 0
            var maxI = 0
            while (i < len) {
                if (arr[i] > arr[maxI]) {
                    maxI = i
                }
                i++
            }
            return maxI
        }
    }

【反例】
    
    
    import std.collection.ArrayList
    
    const MAX_LEN = 99999
    
    func maxIndex(arr: ArrayList<Int>) {
        let len = arr.size
        // 不符合，常量在左，let 修饰的变量在右
        if (MAX_LEN < len) {
            throw Exception("too long")
        } else {
            var i = 0
            var maxI = 0
            // 不符合，let 修饰的变量在左，var 修饰的变量在右
            while (len > i) {
                if (arr[i] > arr[maxI]) {
                    maxI = i
                }
                i++
            }
            return maxI
        }
    }

【例外场景】

如使用 if (MIN < a && a < MAX) 用来描述区间时，前半段表达式中不可变变量在左侧也是允许的。

#### 异常与错误处理

#### [h2]G.ERR.02 防止通过异常抛出的内容泄露敏感信息

【级别】要求

【描述】

如果在传递异常的时候未对其中的敏感信息进行过滤，常常会导致信息泄露，而这可能帮助攻击者尝试发起进一步的攻击。攻击者可以通过构造恶意的输入参数来发掘应用的内部结构和机制。不管是异常中的文本消息，还是异常本身的类型都可能泄露敏感信息。因此，当异常被传递到信任边界以外时，必须同时对敏感的异常消息和敏感的异常类型进行过滤。

【正例】
    
    
    func exceptionExample(path: String): Unit {
        var file: File
        if (!File.exists(path)) {
            // 安全策略
            println("Invalide file")
            return
        }
        file = File(path, Append)
        // CODE
    }
    
    
    func exceptionExample(index: Int32): Unit {
        var path: String
        var file: File
        // 限制输入
        match (index) {
            case 1 => path = "/home/test1"
            case 2 => path = "/home/test2"
            case _ => return
        }
        file = File(path, Append)
    
        // CODE
    }

这个正确示例限制用户只能打开 /home/test1 与 /home/test2。同时，它也会过滤在 catch 块中捕获的异常中的敏感信息。

【反例】
    
    
    func exceptionExample(path: String): Unit {
        var file: File
        if (!File.exists(path)) {
            // 异常消息和类型泄露敏感信息
            throw IOException("File does not exist")
        }
        file = File(path, Append)
        // CODE
    }

当打开的源文件不存在时，程序会抛出 IOException 异常，并提示 “File does not exist”。这使得攻击者可以不断传入伪造的路径名称来重现出底层文件系统结构。
    
    
    func exceptionExample(path: String): Unit {
        var file: File
        if (!File.exists(path)) {
            // 异常净化
            throw IOException()
        }
        file = File(path, Append)
        // CODE
    }

此例中虽然报错信息并未透露错误原因，但是对于不同的错误原因仍会抛出不同类型的异常。攻击者可以根据程序的行为推断出有关文件系统的敏感信息。未对用户输入做限制，使得系统面临暴力攻击的风险，攻击者可以多次传入所有可能的文件名进行查询来发现有效文件。如果传入一个文件名后程序返回一个 IOException 异常，则表明该文件不存在，否则说明该文件是存在的。

【例外场景】

对出于问题定位目的，可将敏感异常信息记录到日志中，但必须做好日志的访问控制，防止日志被任意访问，导致敏感信息泄露给非授权用户。

#### [h2]G.ERR.03 避免对 Option 类型使用 getOrThrow 函数

【级别】建议

【描述】

仓颉使用 Option 类型来避免空指针问题，若对 Option 类型使用 getOrThrow 来获取其内容，容易导致忽略异常的处理，造成等同于空指针的效果。因此应尽量避免对 Option 类型使用 getOrThrow 函数。

【正例】
    
    
    const DEFAULT_VALUE = 0
    
    func getOne(dict: HashMap<String, Int64>, name: String): Int64 {
        return dict.get(name) ?? DEFAULT_VALUE
    }

该正确示例中，在 Option 中值不存在的情况下提供了默认值，而不是使用 getOrThrow。

【反例】
    
    
    func getOne(dict: HashMap<String, Int64>, name: String): Int64 {
        return dict.get(name).getOrThrow()
    }

该错误示例没有考虑传入的名字可能不存在的情况，只使用了 getOrThrow 而没有处理异常。这是一种危险的编码风格，并不推荐。

【例外场景】

对于调用开源三方件，三方件中通过 getOrThrow 抛出 NoneValueException 异常时，可以捕获 NoneValueException，并对该异常进行处理。

#### 包和模块化

#### [h2]G.PKG.01 避免在 import 声明中使用通配符 *

【级别】建议

【描述】

使用 import xxx.* 会导致如下问题：

  * 代码可读性问题：开发者难以从代码中清楚地看到当前包依赖其它包的哪些声明，也很难看出一个声明导入自哪个包。

  * 形成意外的重载。




【正例】
    
    
    // test1.cj
    package test1
    
    public open class Base {
        ...
    }
    
    public class Sub <: Base {
        ...
    }
    
    public func f(a: Base) {
        ...
    }
    
    // file test2.cj
    package test2
    import test1.Sub
    
    class Basa {
        var m = Sub()
    }
    
    func f(a: Basa) {
        ...
    }
    
    main() {
        f(Base()) // Error，误将 Basa 写成了 Base，会编译报错
    }

【反例】
    
    
    // test1.cj
    package test1
    
    public open class Base {
        ...
    }
    
    public class Sub <: Base {
        ...
    }
    
    public func f(a: Base) {
        ...
    }
    
    // file test2.cj
    package test2
    import test1.*
    
    class Basa {
        var m = Sub()
    }
    
    func f(a: Basa) {
        ...
    }
    
    main() {
        f(Base()) // Miswriting Basa as Base, but no compiler error.
    }

#### 线程同步

#### [h2]G.CON.01 禁止将系统内部使用的锁对象暴露给不可信代码

【级别】要求

【描述】

在仓颉中可以通过 synchronized 关键字和一个 ReentrantMutex 对象对所修饰的代码块进行保护，使得同一时间只允许一个线程执行里面的代码。攻击者可以通过获取该 ReentrantMutex 对象来触发条件竞争与死锁，进而引起拒绝服务（DoS）。

防御这个漏洞一种方法就是使用私有锁对象。

【正例】
    
    
    import std.sync.*
    
    class SomeObject {
        private let mtx: ReentrantMutex = ReentrantMutex()
        // CODE
        public func put(x: Object) {
            synchronized(mtx) {
                // CODE
            }
        }
    }

将锁对象设置为 private 类型，攻击者无法无限持有锁。

【反例】
    
    
    import std.sync.*
    import std.time.*
    
    class SomeObject {
        public let mtx: ReentrantMutex = ReentrantMutex()
        ...
        public func put(x: Object) {
            synchronized(mtx) {
                ...
            }
        }
    }
    // Trusted code
    var so = SomeObject()
    ...
    // Untrusted code
    func untrusted() {
        synchronized(so.mtx) {
            while (true) {
                sleep(100 * Duration.nanosecond)
            }
        }
    }

使用 public 修饰锁对象，攻击者可以直接无限持有 mtx 锁，使得其它调用 put 函数的线程被阻塞。

【例外场景】

  * 包私有的类可以不受该规则的约束，因为他们无法被包外的非受信代码直接访问。
  * 对于非受信代码无法获取执行同步操作的对象的场景下，可以不受该规则的约束。



#### [h2]P.01 使用相同的顺序请求锁，避免死锁

【级别】要求

【描述】

为避免多线程同时操作共享变量导致冲突，必须对共享变量进行保护，防止被并行地修改和访问。进行同步操作可以使用 ReentrantMutex 对象。当两个或多个线程以不同的顺序请求锁时，就可能会发生死锁。仓颉自身不能防止死锁也不能对死锁进行检测。所以程序必须以相同的顺序来请求锁，避免产生死锁。

【正例】
    
    
    import std.sync.*
    
    class BankAccount {
        private var balanceAmount: Float64 = 0.0
        public let mtx: ReentrantMutex = ReentrantMutex()
        private var id: Int32 = 0 // Unique for each BankAccount
    
        // CODE
        public func depositAmount(ba: BankAccount, amount: Float64) {
            var former: ReentrantMutex
            var latter: ReentrantMutex
            if (id > ba.id) {
                former = ba.mtx
                latter = mtx
            } else {
                former = mtx
                latter = ba.mtx
            }
            synchronized(former) {
                synchronized(latter) {
                    if (balanceAmount > amount) {
                        ba.balanceAmount += amount
                        balanceAmount -= amount
                    }
                }
            }
        }
    }

上述正确示例使用了一个全局唯一的 id 来保证不同线程使用相同的顺序来申请和释放锁对象，因此不会导致死锁问题。

【反例】
    
    
    import std.sync.*
    
    class BankAccount {
        private var balanceAmount: Float64 = 0.0
        public let mtx: ReentrantMutex = ReentrantMutex()
        // CODE
        public func depositAmount(ba: BankAccount, amount: Float64) {
            synchronized(mtx) {
                synchronized(ba.mtx) {
                    if (balanceAmount > amount) {
                        ba.balanceAmount += amount
                        balanceAmount -= amount
                    }
                }
            }
        }
    }

上面的错误示例会存在死锁的情况。当 bankA / bankB 两个银行账户在不同线程同步互相转账时，就可能导致死锁的问题。

#### [h2]G.CON.02 在异常可能出现的情况下，保证释放已持有的锁

【级别】要求

【描述】

一个线程中没有正确释放持有的锁会使其他线程无法获取该锁对象，导致阻塞。在发生异常时，要确保程序正确释放当前持有的锁。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/28/v3/erv7qp4hTYKi0hvIU3eQ2A/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T085009Z&HW-CC-Expire=86400&HW-CC-Sign=7260A17EA3AB158B24B9B97A2DB76F67B7AF4779D183C92226F0792AC0E33DD2)

在发生异常时，通过 synchronized 进行同步的代码块的锁会被自动释放，但是通过 mtx.lock() 获得的锁不会被自动释放，需要开发者手动释放。

【正例】
    
    
    import std.sync.*
    
    class Foo {
        private let mtx: ReentrantMutex = ReentrantMutex()
    
        public func doSomething(a: Int64, b: Int64) {
            var c: Int64
            try {
                mtx.lock()
                // CODE
                c = a / b
            } catch (e: ArithmeticException) {
            // Handle exception
            // CODE
            } finally {
                mtx.unlock()
                // CODE
            }
        }
    }

上述正确示例中，成功执行锁定操作后，将可能抛出异常的操作封装在 try 代码块中。锁在执行可能发生异常的代码块前获取，可保证在执行 finally 代码时正确持有锁。在 finally 代码块中调用 mtx.unlock()，可以保证不管是否发生异常都可以释放锁。

【反例】
    
    
    import std.sync.*
    
    class Foo {
        private let mtx: ReentrantMutex = ReentrantMutex()
    
        public func doSomething(a: Int64, b: Int64) {
            var c: Int64
            try {
                mtx.lock()
                // CODE
                c = a / b
                mtx.unlock()
            } catch (e: ArithmeticException) {
            // Handle exception
            // CODE
            } finally {
                // CODE
            }
        }
    }

上述错误示例中，使用 ReentrantMutex 锁，发生算数运算错误时，catch 及 finally 代码块中没有释放锁操作，导致锁没有释放。

#### [h2]G.CON.03 禁止使用非线程安全的函数来覆写线程安全的函数

【级别】要求

【描述】

使用非线程安全的函数覆写基类的线程安全函数，可能会导致不恰当的同步。比如，子类将基类的线程安全的函数覆写为非安全函数，将违背覆写同步函数的要求，容易导致难以定位的问题的产生。

被设计为可继承的类，这些类对应的锁策略必须要详细记录说明。方便子类继承时，沿用正确的锁策略。

【正例】
    
    
    import std.sync.*
    
    open class Base {
        private let baseMtx: ReentrantMutex = ReentrantMutex()
        public open func doSomething() {
            synchronized(baseMtx) {
                // CODE
            }
        }
    }
    
    class Derived <: Base {
        private let mtx: ReentrantMutex = ReentrantMutex()
        public override func doSomething() {
            synchronized(mtx) {
                // CODE
            }
        }
    }

上述正确示例中，通过使用一个私有的锁对象来同步的函数覆写 Base 类中的同步函数 doSomething()，确保了 Derived 类是线程安全的。

另外，上面示例中，子类与基类的 doSomething() 函数使用的是不同的锁，实际编码过程中，要考虑是否会产生影响。在设计过程中，要尽量避免类似的继承导致的同步问题。

【反例】
    
    
    import std.sync.*
    
    open class Base {
        private let baseMtx: ReentrantMutex = ReentrantMutex()
        public open func doSomething() {
            synchronized(baseMtx) {
                // CODE
            }
        }
    }
    
    class Derived <: Base {
        public override func doSomething() {
            // CODE
        }
    }

上述错误示例中，子类 Derived 覆写了基类 Base 的同步函数 doSomething() 为非线程同步函数。Base 类的 doSomething() 函数可被多线程正确使用，但 Derived 类不可以。因为接受 Base 实例的线程同时也可以接受其子类，所以可能会导致难以诊断的程序错误。

#### [h2]P.02 避免数据竞争（data race)

【级别】要求

【描述】

仓颉语言中，内存模型中的每个操作都采用 happens-before 关系，来规定并发执行中写操作保证对哪些读操作可见。两个线程分别对同一个变量进行访问操作，其中至少一个操作是写操作，且这两个操作之间没有 happens-before 关系，就会产生 data race。正确同步的（correctly synchronized）执行是指没有 data race 的执行。仓颉语言内存模型中规定，如果存在 data race，那么行为是未定义的，因此要求必须避免 data race。在仓颉中通常采用锁机制完成对共享资源的同步，并且同一个共享资源应该使用同一个锁来进行保护。

对 “同一个数据” 的定义：

  1. 对同一个 primitive type、enum、array 类���的变量或者 struct/class 类型的同一个 field 的访问，都算作同一个数据。
  2. 对 struct/class 类型的不同 field 的访问，算作不同数据 。



【正例】
    
    
    import std.sync.*
    import std.time.*
    
    var res: Int64 = 0
    
    main(): Int64 {
        var i: Int64 = 0
        let mtx = ReentrantMutex()
        while (i < 100) {
            i++
            spawn {
                synchronized(mtx) {
                    res = res + 1
                }
            }
        }
        sleep(Duration.second)
        print(res.toString())
        return 0
    }

上述正确示例中，通过使用 synchronized 来保护对全局变量 res 的修改。

**一般来说，如果使用锁，那么读和写都要加锁** ，而不是写线程需要加锁，而读的线程可以不加锁。
    
    
    import std.sync.*
    import std.time.*
    
    var a: Int64 = 0
    var b: Int64 = 0
    
    main(): Int64 {
        let mtx = ReentrantMutex()
        spawn {
            mtx.lock()
            a = 1
            b = 1
            mtx.unlock()
        }
        spawn {
            while (true) {
                mtx.lock()
                if (a == 0) {
                    mtx.unlock()
                    continue
                }
                if (b != 1) {
                    print("Fail\n")
                } else {
                    print("Success\n")
                }
                mtx.unlock()
                break
            }
        }
        sleep(Duration.second)
        return 0
    }

上述正确示例中，对于 a、b 的写入和读取均是在锁的保护下进行的，结果符合预期。

【反例】
    
    
    import std.sync.*
    import std.time.*
    
    var res: Int64 = 0
    
    main(): Int64 {
        var i: Int64 = 0
        while (i < 100) {
            i++
            spawn {
                res = res + 1
            }
        }
        sleep(Duration.second)
        print(res.toString())
        return 0
    }

上述错误示例中，多个线程同时对全局变量 res 进行了读写操作，导致 data race， 最终 res 的值为一个非预期值。
    
    
    import std.sync.*
    import std.time.*
    
    var a: Int64 = 0
    var b: Int64 = 0
    
    main(): Int64 {
        let mtx = ReentrantMutex()
        spawn {
            mtx.lock()
            a = 1
            b = 1
            mtx.unlock()
        }
        spawn {
            while (true) {
                if (a == 0) {
                    continue
                }
                if (b != 1) {
                    print("Fail\n")
                } else {
                    print("Success\n")
                }
                break
            }
        }
        sleep(Duration.second)
        return 0
    }

上述错误示例中，对于 a、b 的写入是在锁的保护下进行的，但是没有在锁的保护中进行读取，可能导致读取到的值不符合预期。

#### 数据校验

#### [h2]G.CHK.01 跨信任边界传递的不可信数据使用前必须进行校验

【级别】要求

【描述】

程序可能会接收来自用户、网络连接或其他来源的不可信数据，并将这些数据跨信任边界传递到目标系统（如浏览器、数据库等）。来自程序外部的数据通常被认为是不可信的，不可信数据的范围包括但不限于：网络、用户输入（包括命令行、界面）、命令行、文件（包括程序的配置文件）、环境变量、进程间通信（包括管道、消息、共享内存、socket、RPC）、跨信任域函数参数（对于 API）等。在使用这些数据前需要进行合法性校验，否则可能会导致不正确的计算结果、运行时异常、不一致的对象状态，甚至引起各种注入攻击，对系统造成严重影响。对于外部数据的具体校验，要结合实际的业务场景采用与之相对的校验方式来消除安全隐患；对于缺少校验规则的场景，可结合其他的措施进行防护，保证不会存在安全隐患。

由于目标系统可能无法区分处理畸形的不可信数据，未经校验的不可信数据可能会引起某种注入攻击，对系统造成严重影响，因此，必须对不可信数据进行校验，且数据校验必须在信任边界以内进行（如对于 Web 应用，需要在服务端做校验）。数据校验有输入校验和输出校验，对从信任边界外传入的数据进行校验的叫输入校验，对传出到信任边界外的数据进行校验的叫输出校验。

尽管仓颉已经提供了强大的编译时和运行时检查，能拦截空指针、缓冲区溢出、整数溢出等问题，但无法保证数据的合法性和准确性，无法拦截注入攻击等，开发者仍应该关注不可信数据。

对外部数据的校验包括但不局限于：

  1. 校验 API 接口参数合法性；
  2. 校验数据长度；
  3. 校验数据范围；
  4. 校验数据类型和格式；
  5. 校验集合大小；
  6. 校验外部数据只包含可接受的字符（白名单校验），尤其需要注意一些特殊情况下的特殊字符，例如附录 A 命令注入相关字符。



对于外部数据的校验，要注意以下两点：

  1. 如果需要，外部数据校验前要先进行标准化：例如 \uFE64、< 都可以表示 <，在 web 应用中，如果外部输入不做标准化，可以通过 \uFE64 绕过对 < 限制。
  2. 对外部数据的修改要在校验前完成，保证实际使用的数据与校验的数据一致。



如下描述了四种数据校验策略（**任何时候，尽可能使用接收已知合法数据的 “白名单” 策略** ）。

**接受已知好的数据**

这种策略被称为 “白名单” 或者 “正向” 校验。该策略检查数据是否属于一个严格约束的、已知的、可接受的合法数据集合。例如，下面的示例代码确保 name 参数只包含字母、数字以及下划线。
    
    
    import std.regex.*
    
    func verify() {
        ...
        match (Regex("^[0-9A-Za-z_]+$").matches(name)) {
            case None => throw IllegalArgumentException()
            case _ => ()
        }
    }

**拒绝已知坏的数据**

这种策略被称为 “黑名单” 或者 “负向” 校验，相对于正向校验，这是一种较弱的校验方式。由于潜在的不合法数据可能是一个不受约束的无限集合，这就意味着开发者必须一直维护一个已知不合法字符或者模式的列表。如果不定期研究新的攻击方式并对校验的表达式进行日常更新，该校验方式就会很快过时。
    
    
    import std.regex.*
    
    func removeJavascript(input: String): String {
        var matchData = Regex("javascript").matcher(input).find()
        match (matchData) {
            case None => return input
            case _ => ""
        }
    }

**“白名单” 方式净化**

对任何不属于已验证合法字符数据中的字符进行净化，然后再使用净化后的数据，净化的方式包括删除、编码、替换。比如，如果开发者期望接收一个电话号码，那么可以删除掉输入中所有的非数字字符，“(555)123-1234”、“555.123.1234” 与 “555";DROP TABLE USER;--123.1234” 全部会被转换为 “5551231234”，然后再对转换的结果进行校验。又比如，对于用户评论栏的文本输入，由于几乎所有的字符都可能被用到，确定一个合法的数据集合是非常困难的，一种解决方案是对所有非字母数字进行编码，如对 “I like your web page!” 使用 URL 编码，其净化后的输出为 “I+like+your+web+page%21”。“白名单” 方式净化不仅有利于安全，它也允许接收和使用更宽泛的有效用户输入。

**“黑名单” 方式净化**

为了确保输入数据是 “安全” 的，可以剔除或者转换某些字符（例如，删除引号、转换成 HTML 实体）。与 “黑名单” 校验类似，随着时间推移不合法字符的范围很可能不一样，需要对不合法字符进行日常维护。因此，执行一个单纯针对正确输入的 “正向” 校验更加简单、高效、安全。
    
    
    import std.regex.*
    
    func quoteApostrophe(input: String): String {
        var m = Regex("\\\\").matcher(input)
        return m.replace("&rsquo;");
    }

#### [h2]G.CHK.02 禁止直接使用外部数据记录日志

【级别】要求

【描述】

直接将外部数据记录到日志中，可能存在以下风险：

  * 日志注入：恶意用户可利用回车、换行等字符注入一条完整的日志。
  * 敏感信息泄露：当用户输入敏感信息时，直接记录到日志中可能会导致敏感信息泄露。
  * 垃圾日志或日志覆盖：当用户输入的是很长的字符串，直接记录到日志中可能会导致产生大量垃圾日志；当日志被循环覆盖时，这样还可能会导致有效日志被恶意覆盖。



所以外部数据应尽量避免直接记录到日志中，如果必须要记录到日志中，要进行必要的校验及过滤处理，对于较长字符串可以截断。对于记录到日志中的数据含有敏感信息时，将这些敏感信息替换为固定长度的 *，对于手机号、邮箱等敏感信息，可以进行匿名化处理。

【正例】
    
    
    import std.regex.*
    import std.log.*
    
    func verifyLogin() {
        ...
        match (Regex("[A-Za-z0-9_]+").matches(username)) {
            case None => simpleLogger.log(LogLevel.ERROR, "User login failed for unauthorized user")
            case _ where (loginSuccessful) =>
                simpleLogger.log(LogLevel.ERROR, "User login succeeded for:" + username)
            case _ =>
            simpleLogger.log(LogLevel.ERROR, "User login failed for:" + username)
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ec/v3/t2NErtigS_ajBYwUG2ykQA/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T085009Z&HW-CC-Expire=86400&HW-CC-Sign=FF19706817FE80D8BE25BCF8C128DED06CFC515666791DFE3232A16B8F34F8AD)

外部数据记录到日志中前，进行有效字符的校验。

【反例】
    
    
    import std.log.*
    
    func verifyLogin() {
        ...
        if (loginSuccessful) {
            simpleLogger.log(LogLevel.ERROR, "User login succeeded for:" + username)
        } else {
            simpleLogger.log(LogLevel.ERROR, "User login failed for:" + username)
        }
    }

此错误示例代码中，在接收到非法请求时，会记录用户的用户名，由于没有执行任何输入净化，这种情况下就可能会遭受日志注入攻击——当 username 字段的值是 david 时，会生成一条标准的日志信息：
    
    
    2021/06/01 2:19:10.123123 Error logger User login failed for: david

但是，如果记录日志时使用的 username 存在换行，如下所示：
    
    
    2021/06/01 2:19:10.123123 Error logger User login failed for: david
    INFO logger User login succeeded for: administrator

那么日志中包含了以下可能引起误导的信息：
    
    
    2021/06/01 2:19:10.123123 Error logger User login failed for: david
    2021/06/01 2:19:15.123123 INFO: logger User login succeeded for: administrator

#### [h2]G.CHK.04 禁止直接使用不可信数据构造正则表达式

【级别】要求

【描述】

正则表达式广泛用于匹配文本字符串。例如，POSIX 中 grep 实用程序支持用于查找指定文本中的模式的正则表达式。仓颉的 regex 包提供了 Regex 类，该类封装了一个编译过的正则表达式和一个 Matcher 类，通过 Matcher 类引擎，可以在字符串中进行匹配操作。

在仓颉中必须注意不能误用正则表达式的功能。攻击者可能会通过恶意构造的输入对初始化的正则表达式进行修改，比如导致正则表达式不符合程序规定要求。这种攻击称为正则注入 (regex injection)，可能会影响控制流，导致信息泄漏，或导致 ReDos 攻击。

以下是正则表达式可能被利用的方式：

**匹配标志** ：不可信的输入可能覆盖匹配选项，然后有可能会被传给 Regex() 构造函数。

**贪婪** ：一个非受信的输入可能试图注入一个正则表达式，通过它来改变初始的那个正则表达式，从而匹配尽可能多的字符串，导致暴露敏感信息。

**分组** ：开发者会用括号包括一部分的正则表达式以完成一组动作中某些共同的部分。攻击者可能通过提供非受信的输入来改变这种分组。

非受信的输入应该在使用前净化，从而防止发生正则表达式注入。当用户必须指定正则表达式作为输入时，需要保证初始的正则表达式没有被无限制修改。在用户输入字符串提交给正则解析之前，进行白名单字符处理（比如字母和数字）是一个很好的输入净化策略。开发人员必须仅仅提供最有限的正则表达式功能给用户，从而减少被误用的可能。

ReDos 攻击是仓颉代码正则使用不当导致的常见安全风险。容易存在 ReDos 攻击的正则表达式主要有两类：

  * 包含具有自我重复的重复性分组的正则，例如：
        
        ^(\d+)+$
        ^(\d*)*$
        ^(\d+)*$
        ^(\d+|\s+)*$

  * 包含替换的重复性分组，例如：
        
        ^(\d|\d\d)+$
        ^(\d|\d?)+$




对于 ReDos 攻击的防护手段主要包括：

  1. 进行正则匹配前，先对匹配的文本的长度进行校验。

  2. 在编写正则时，尽量不要使用过于复杂的正则，尽量减少分组的使用，越复杂、分组越多越容易有缺陷，例如对于下面的正则：
         
         ^(([a-z])+\.)+[A-Z]([a-z])+$

存在 ReDos 风险，可以将多余的分组删除，这样在不改变检查规则的前提下消除了 ReDos 风险。
         
         ^([a-z]+\.)+[A-Z][a-z]+$

【正例】
         
         let REGEX_PATTER: Regex = Regex("a[bc]+d")
         func test(arg: String) {
             match (REGEX_PATTER.matches(arg)) {
                 case None => ...
                 case _ => ...
             }
         }

【反例】
         
         let REGEX_PATTER: Regex = Regex("a(b|c+)+d")
         func test(arg: String) {
             match (REGEX_PATTER.matches(arg)) {
                 case None => ...
                 case _ => ...
             }
         }

  3. 避免动态构建正则，当使用不可信数据构造正则时，要使用白名单进行严格校验。

【正例】
         
         class LogSearch {
             func findLogEntry(search: String, log: String) {
                 // Sanitize search string
                 let ss = StringBuilder()
                 for (i in search.runes()) {
                     if (i.isLetter() || i.isNumber() || i == '_' || i =='\'') {
                         ss.append(i)
                     }
                 }
                 let sanitized = ss.toString()
         
                 // Construct regex dynamically from user string
                 var regex: String = "(.*? +public\\[\\d+\\] +.*" + sanitized + ".*)"
                 var logMatcher: Matcher = Regex(regex).matcher(log)
                 ...
             }
         }

【反例】
         
         class LogSearch {
             func findLogEntry(search: String, log: String) {
                 // Construct regex dynamically from user string
                 var regex: String = "(.*? +public\\[\\d+\\] +.*" + search + ".*)"
                 var logMatcher: Matcher = Regex(regex).matcher(log)
                 ...
             }
         }




#### I/O 操作

#### [h2]G.FIO.01 临时文件使用完毕必须及时删除

【级别】要求

【描述】

程序运行时经常会需要创建临时文件。如果文件未被安全地创建或者用完后还是可访问的，具备本地文件系统访问权限的攻击者便可以利用临时文件进行恶意操作。删除已经不再需要的临时文件有助于对文件名和其他资源（如二级存储）进行回收利用。每一个程序在正常运行过程中都有责任确保已使用完毕的临时文件被删除。

【正例】
    
    
    import std.fs.File
    import std.fs.OpenOption
    
    main() {
        let pathName = "/mytemp/doc.txt"
        let fs: File = File(pathName, CreateOrAppend)
        ...
        fs.flush()
        fs.close()
        File.delete(pathName)
        ...
        return 0
    }

这个正确示例代码在临时文件使用完毕之后、系统终止之前，显式地对其进行删除。

【反例】
    
    
    import std.fs.File
    import std.fs.OpenOption
    
    main(){
        let pathName = "/mytemp/doc.txt";
        let fs: File = File(pathName, CreateOrAppend)
        ...
        fs.flush()
        fs.close()
        ...
        return 0
    }

这个错误示例代码在运行结束时未将临时文件删除。

#### 序列化和反序列化

#### [h2]G.SER.01 禁止序列化未加密的敏感数据

【级别】要求

【描述】

虽然序列化可以将对象的状态保存为一个字节序列，之后通过反序列化将字节序列又能重新构造出原来的对象，但是它并没有提供一种机制来保证序列化数据的安全性。因此，敏感数据序列化之后是潜在对外暴露的，可访问序列化数据的攻击者可以借此获取敏感信息并确定对象的实现细节。

永远不应该被序列化的敏感信息包括：密钥、数字证书以及那些在序列化时引用敏感数据的类，防止敏感数据被无意识的序列化导致敏感信息泄露。

另外，声明了可序列化标识对象的所有字段在序列化时都会被输出为字节序列，能够解析这些字节序列的代码可以获取到这些数据的值，而不依赖于该字段在类中的可访问性。因此，若其中某些字段包含敏感信息，则会造成敏感信息泄露。

【正例】
    
    
    class People <: Serializable {
        var name: String
    
        // 口令是敏感数据
        var password: String
    
        init(s: DataModelStruct) {
            name = String.deserialize(s.get("name"))
            password = ""
        }
    
        public func serialize(): DataModel {
            DataModelStruct().add(field<String>("name", name))
        }
    
        public static func deserialize(s: DataModel): People {
            let d = (s as DataModelStruct).getOrThrow()
            People(d)
        }
    }

该正确示例在进行序列化和反序列化时跳过了 password 变量，避免了 password 信息被泄露。

【反例】
    
    
    class People <: Serializable<People> {
        var name: String
    
        // 口令是敏感数据
        var password: String
    
        init(s: DataModelStruct) {
            name = String.deserialize(s.get("name"))
            password = String.deserialize(s.get("password"))
        }
    
        public func serialize(): DataModel {
            DataModelStruct().add(field<String>("name", name))
            DataModelStruct().add(field<String>("password", password))
        }
    
        public static func deserialize(s: DataModel): People {
            let d = (s as DataModelStruct).getOrThrow()
            People(d)
        }
    }

该错误示例允许将敏感成员变量 password 进行序列化和反序列化，可能会导致 password 信息泄露。

#### [h2]G.SER.02 防止反序列化被利用来绕过构造函数中的安全操作

【级别】要求

【描述】

仓颉语言默认由开发者提供序列化和反序列化函数，开发者实现的反序列化函数中需要对各个字段进行校验。反序列化操作可以在绕过公开构造函数的情况下创建对象的实例，所以反序列化操作中的行为应该设计为与公开构造函数保持一致（这些行为包括对参数的校验、对属性赋初始值等）；否则，攻击者就可能会通过反序列化操作构造出与预期不符合的对象实例。仓颉语言使用反序列化功能时应关注此问题，需要在序列化和反序列化前后进行安全检查。

【正例】
    
    
    class MySerializeDemo <: Serializable<MySerializeDemo> {
        var value: Int64
    
        init(v: Int64) {
            value = if (v >= 0) {
                v
            } else {
                0
            }
        }
    
        private init(s: DataModelStruct) {
            let v = Int64.deserialize(s.get("value"))
            value = if (v >= 0) {
                v
            } else {
                0
            }
        }
    
        public func serialize(): DataModel {
            return DataModelStruct().add(field<Int64>("value", value))
        }
    
        public static func deserialize(s: DataModel): MySerializeDemo {
            let d = (s as DataModelStruct).getOrThrow()
            MySerializeDemo(d)
        }
    }

上述示例中， 反序列化操作中与构造函数中对 value 赋值操作保持一致，先检查后赋值。

【反例】
    
    
    class MySerializeDemo <: Serializable<MySerializeDemo> {
        var value: Int64
    
        init(v: Int64) {
            value = if (v >= 0) {
                v
            } else {
                0
            }
        }
    
        private init(s: DataModelStruct) {
            value = Int64.deserialize(s.get("value"))
        }
    
        public func serialize(): DataModel {
            return DataModelStruct().add(field<Int64>("value", value))
        }
    
        public static func deserialize(s: DataModel): MySerializeDemo {
            let d = (s as DataModelStruct).getOrThrow()
            MySerializeDemo(d)
        }
    }

上述示例中，构造函数会对参数进行检查，保证 value 的值为非负值，但通过反序列化操作可构造 value 值为负值的对象示例。

#### [h2]G.SER.03 保证序列化和反序列化的变量类型一致

【级别】要求

【描述】

仓颉不会对序列化和反序列化使用的数据进行类型检查，如果反序列化时使用的数据类型和序列化时传入数据类型不一致，则可能会造成数据错误。开发者需要保证序列化和反序列化时传入数据和接收数据的变量类型一致。

【正例】
    
    
    class MySerializeDemo <: Serializable<MySerializeDemo> {
        var value: Int64
        var msg: String
    
        init(v: Int64) {
            value = v
            msg = match (value) {
                case 0x0 => "zero"
                case 0x7fffffff => "BIG INT"
                case _ => "DEFAULT"
            }
        }
    
        public func serialize(): DataModel {
            DataModelStruct().add(field<Int64>("value", value))
        }
    
        private init(s: DataModelStruct) {
            let v = Int64.deserialize(s.get("value"))
            value = v
            msg = match (v) {
                case 0x0 => "zero"
                case 0x7fffffff => "BIG INT"
                case _ => "DEFAULT"
            }
        }
    
        public static func deserialize(s: DataModel): MySerializeDemo {
            let d = (s as DataModelStruct).getOrThrow()
            MySerializeDemo(d)
        }
    }

正确示例中序列化和反序列化使用的变量的类型一致，保证了反序列化后得到的对象数据符合预期。

【反例】
    
    
    class MySerializeDemo <: Serializable<MySerializeDemo> {
        var value: Int64
        var msg: String
    
        init(v: Int64) {
            value = v
            msg = match (value) {
                case 0x0 => "zero"
                case 0x7fffffff => "BIG INT"
                case _ => "DEFAULT"
            }
        }
    
        public func serialize(): DataModel {
            DataModelStruct().add(field<Int64>("value", value))
        }
    
        private init(s: DataModelStruct) {
            let v = Int32.deserialize(s.get("value"))
            value = Int64(v)
            msg = match (v) {
                case 0x0 => "zero"
                case 0x7fffffff => "BIG INT"
                case _ => "DEFAULT"
            }
        }
    
        public static func deserialize(s: DataModel): MySerializeDemo {
            let d = (s as DataModelStruct).getOrThrow()
            MySerializeDemo(d)
        }
    }

错误示例中序列化时传入的参数 value 是 Int64 类型，但是在接收的时候使用的是 Int32 类型的变量，因此会造成数据截断，导致反序列化的对象数据预期不一致。

#### 平台安全

#### [h2]G.SEC.01 进行安全检查的函数禁止声明为 open

【级别】建议

【描述】

实现安全检查功能的函数，如果可以被子类覆写，恶意子类可以覆写安全检查函数，忽略这些安全检查，使安全检查失效。所以安全检查相关的函数禁止声明为 open，防止被覆写。

【正例】
    
    
    class SecurityCheck {
        ...
    
        public func requestPasswordAuthentication(protocol: String, prompt: String, scheme: String): Bool {
    
            if (checkProtocol(protocol) && checkPrompt(prompt) && checkScheme(scheme)) {
                ...
            }
        }
    }

上述示例中，requestPasswordAuthentication 没有被声明为 open 类型，防止被子类覆写。

【反例】
    
    
    class SecurityCheck {
        ...
    
        public open func requestPasswordAuthentication(protocol: String, prompt: String, scheme: String): Bool {
    
            if (checkProtocol(protocol) && checkPrompt(prompt) && checkScheme(scheme)) {
                ...
            }
        }
    }

上述示例中，requestPasswordAuthentication 被声明为了 open 类型，攻击者可以构造恶意子类将该函数覆写，忽略其中的安全检查。

#### 其他

#### [h2]G.OTH.01 禁止在日志中保存口令、密钥和其他敏感数据

【级别】要求

【描述】

在日志中不能输出口令、密钥和其他敏感信息，口令包括明文口令和密文口令。对于敏感信息建议采取以下方法：

  * 不在日志中打印敏感信息。
  * 若因为特殊原因必须要打印日志，则用固定长度的星号（*）代替输出的敏感信息。



【正例】
    
    
    func test() {
        let fs: File = File("xxx.log", CreateOrAppend)
        let logger = SimpleLogger("Login", LogLevel.INFO, fs)
        ...
        logger.info("Login success ,user is ${userName} and password is ****")
    }

【反例】
    
    
    func test() {
        let fs: File = File("xxx.log", CreateOrAppend)
        let logger = SimpleLogger("Login", LogLevel.INFO, fs)
        ...
        logger.info("Login success ,user is ${userName} and password is ${encrypt(pass)}")
    }

#### [h2]G.OTH.02 禁止将敏感信息硬编码在程序中

【级别】要求

【描述】

如果将敏感信息（包括口令和加密密钥）硬编码在程序中，可能会将敏感信息暴露给攻击者。任何能够访问到二进制文件的人都可以反编译二进制文件并发现这些敏感信息。因此，不能将敏感信息硬编码在程序中。同时，硬编码敏感信息会增加代码管理和维护的难度。例如，在一个已经部署的程序中修改一个硬编码的口令需要发布一个补丁才能实现。

【正例】
    
    
    class DataHandler {
        public func checkPwd() {
            let pwd = Array<UInt8>()
            let read_bytes: Int64
            let fs: File = File("serverpwd.txt", Open(true, true))
            read_bytes = fs.read(pwd)
            ...
            for (i in 0..pwd.size) {
                pwd[i] = 0
            }
            ...
        }
    }

这个正确代码示例从一个安全目录下的外部文件获取密码信息，在其使用完后立即从内存中将其清除可以防止后续的信息泄露。

【反例】
    
    
    class DataHandler {
        let pwd = SOME_PASSWORD_LITERAL // 某个明文密码
        ...
    }

#### [h2]G.OTH.03 禁止代码中包含公网地址

【级别】要求

【描述】

代码或脚本中包含用户不可见、不可知的公网地址，可能会引起用户质疑。

对产品发布的软件（包含软件包/补丁包）中包含的公网地址（包括公网 IP 地址、公网 URL 地址/域名、邮箱地址）要求如下：

  1. 禁止包含用户界面不可见、或产品资料未描述的未公开的公网地址。
  2. 已公开的公网地址禁止写在代码或者脚本中，可以存储在配置文件或数据库中。对于开源/第三方软件自带的公网地址必须至少满足上述第 1 条公开性要求。



【例外场景】

对于标准协议中必须指定公网地址的场景可例外，如 soap 协议中函数的命名空间必须指定的一个组装的公网 URL、http 页面中包含 w3.org 网址、XML 解析器中的 Feature 名等。

#### [h2]G.OTH.04 不要使用 String 存储敏感数据，敏感数据使用结束后应立即清零

【级别】建议

【描述】

仓颉中 String 是不可变对象（创建后无法更改）。如果使用 String 保存口令、秘钥等敏感信息时，这些敏感信息会一直在内存中直至被垃圾收集器回收，如果该进程的内存可 dump，这些敏感信息就可能被泄露。应使用可以主动立即将内容清除的数据结构存储敏感数据，如 Array<Byte> 等。敏感数据使用结束后立即将内容清除，可有效减少敏感数据在内存中的保留时间，降低敏感数据泄露的风险。

【正例】
    
    
    func foo() {
        let password: Array<Rune> = getPassword()
        verifyPassword(password)
        for (i in 0..password.size) {
            password[i] = '\0'
        }
    }
    
    func verifyPassword(pwd: Array<Rune>): Bool {
        ...
    }

上述正确示例中 password 被声明为了数组类型，并且在使用完毕后被清空，保证了后续 password 内容不会被泄露。

【反例】
    
    
    func foo() {
        let password: String = getPassword()
        verifyPassword(password)
    }
    
    func verifyPassword(pwd: String): Bool {
        ...
    }

上面的代码中，使用 String 保存密码信息，可能会导致敏感信息泄露。

#### 规格说明

  1. cjlint 能够检测，但默认不启用“G.VAR.03 避免使用全局变量”规范（用户可通过将规范添加至 cjlint_rule_list.json 以启用这类规则）。

  2. G.CON.02 在异常可能出现的情况下，保证释放已持有的锁。

lock() 函数和 unlock() 函数赋值给变量，赋值后的变量再去加解锁的场景，该规则检查不覆盖。

  3. G.OTH.03 暂不支持宏检查。

  4. 只有当宏包在正确的路径下时，cjlint才能支持宏检查。

例：a.cj 为宏包源码，其正确路径应为 xxx/src/a/a.cj。

  5. cjlint只有在宏被调用时才能对其进行检查，且无法对宏包中的冗余代码进行检查。



