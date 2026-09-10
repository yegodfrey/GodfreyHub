---
name: cangjie-references/cj-core_package_exceptions
title: 异常类
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.core / 异常类
---

# 异常类

#### class ArithmeticException
    
    
    public open class ArithmeticException <: Exception {
        public init()
        public init(message: String)
    }

功能：算术异常类，发生算术异常时使用。

父类型：

  * Exception



#### [h2]init()
    
    
    public init()

功能：构造一个默认的 [ArithmeticException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-arithmeticexception) 实例，默认异常信息为空。

示例：
    
    
    main() {
        // 使用默认构造函数创建ArithmeticException
        let exception = ArithmeticException()
    
        println("成功创建了ArithmeticException实例")
        println("ArithmeticException的init()构造函数用于创建一个默认的算术异常实例")
    }

运行结果：
    
    
    成功创建了ArithmeticException实例
    ArithmeticException的init()构造函数用于创建一个默认的算术异常实例

#### [h2]init(String)
    
    
    public init(message: String)

功能：根据异常信息构造一个 [ArithmeticException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-arithmeticexception) 实例。

参数：

  * message: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 异常提示信息。



示例：
    
    
    main() {
        // 使用带消息的构造函数创建ArithmeticException
        let exception = ArithmeticException("除零错误")
    
        println("成功创建了ArithmeticException实例")
        println("异常信息: 除零错误")
        println("ArithmeticException的init(String)构造函数用于根据异常信息创建算术异常实例")
    }

运行结果：
    
    
    成功创建了ArithmeticException实例
    异常信息: 除零错误
    ArithmeticException的init(String)构造函数用于根据异常信息创建算术异常实例

#### class Error
    
    
    public open class Error <: ToString {}

功能：[Error](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-error) 是所有错误类的基类。该类不可被继承，不可初始化，但是可以被捕获到。

父类型：

  * [ToString](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-tostring)



#### [h2]prop message
    
    
    public open prop message: String

功能：获取错误信息。

类型：[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)

示例：
    
    
    // 此示例只做展示，假设抛出 Error
    main() {
        try {
        // 假设出现内存错误或栈溢出错误
        } catch (e: Error) {
            println(e.message)
        }
    }

#### [h2]func getStackTrace()
    
    
    public func getStackTrace(): Array<StackTraceElement>

功能：获取堆栈信息，每一条堆栈信息用一个 [StackTraceElement](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_classes#class-stacktraceelement) 实例表示，最终返回一个 [StackTraceElement](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_classes#class-stacktraceelement) 的数组。

返回值：

  * [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[StackTraceElement](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_classes#class-stacktraceelement)> \- 堆栈信息数组。



示例：
    
    
    // 此示例只做展示，假设内部抛出 Error
    main() {
        try {
        // 假设出现内存错误，栈溢出错误，或者内部错误
        } catch (e: Error) {
            println(e.getStackTrace()[0].methodName)
        }
    }

#### [h2]func getStackTraceMessage()
    
    
    public open func getStackTraceMessage(): String

功能：获取堆栈信息。

返回值：

  * [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 堆栈信息。



示例：
    
    
    // 此示例只做展示，假设内部抛出 Error
    main() {
        try {
        // 假设出现内存错误，栈溢出错误，或者内部错误
        } catch (e: Error) {
            println(e.getStackTraceMessage())
        }
    }

#### [h2]func printStackTrace()
    
    
    public open func printStackTrace(): Unit

功能：向控制台打印堆栈信息。

示例：
    
    
    // 此示例只做展示，假设内部抛出 Error
    main() {
        try {
        // 假设出现内存错误，栈溢出错误，或者内部错误
        } catch (e: Error) {
            println(e.printStackTrace())
        }
    }

#### [h2]func toString()
    
    
    public open func toString(): String

功能：获取当前 [Error](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-error) 实例的字符串值，包括类名和错误信息。

返回值：

  * [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 错误信息字符串。



示例：
    
    
    // 此示例只做展示，假设内部抛出 Error
    main() {
        try {
        // 假设出现内存错误，栈溢出错误，或者内部错误
        } catch (e: Error) {
            println(e)
        }
    }

#### class Exception
    
    
    public open class Exception <: ToString {
        public init()
        public init(message: String)
    }

功能：[Exception](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-exception) 是所有异常类的父类。

支持构造一个异常类，设置、获取异常信息，转换为字符串，获取、打印堆栈，设置异常名（用于字符串表示）。

父类型：

  * [ToString](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-tostring)



#### [h2]prop message
    
    
    public open prop message: String

功能：获取异常信息。

类型：[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)

示例：
    
    
    main() {
        // 创建Exception实例并访问message属性
        let exception = Exception("这是一个异常信息")
        println("异常信息: " + exception.message)
    
        // 使用默认构造函数创建Exception实例
        let defaultException = Exception()
        println("默认异常信息: '" + defaultException.message + "'")
    }

运行结果：
    
    
    异常信息: 这是一个异常信息
    默认异常信息: ''

#### [h2]init()
    
    
    public init()

功能：构造一个默认的 [Exception](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-exception) 实例，默认异常信息为空。

示例：
    
    
    main() {
        // 使用默认构造函数创建Exception实例
        let exception = Exception()
    }

#### [h2]init(String)
    
    
    public init(message: String)

功能：根据异常信息构造一个 [Exception](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-exception) 实例。

参数：

  * message: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 异常提示信息。



示例：
    
    
    main() {
        // 使用带消息的构造函数创建Exception实例
        let exception = Exception("自定义异常信息")
    }

#### [h2]func getStackTrace()
    
    
    public func getStackTrace(): Array<StackTraceElement>

功能：获取堆栈信息，每一条堆栈信息用一个 [StackTraceElement](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_classes#class-stacktraceelement) 实例表示，最终返回一个 [StackTraceElement](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_classes#class-stacktraceelement) 的数组。

返回值：

  * [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[StackTraceElement](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_classes#class-stacktraceelement)> \- 堆栈信息数组。



示例：
    
    
    main() {
        try {
            // 创建一个异常并抛出
            throw Exception("测试异常")
        } catch (e: Exception) {
            // 获取堆栈信息
            let stackTrace = e.getStackTrace()
            println("堆栈跟踪元素数量: ${stackTrace.size}")
            // 打印第一个堆栈元素（如果存在）
            if (stackTrace.size > 0) {
                let element = stackTrace[0]
                println("第一个堆栈元素的类名: ${element.declaringClass}")
                println("第一个堆栈元素的方法名: ${element.methodName}")
            }
        }
    }

运行结果：
    
    
    堆栈跟踪元素数量: 1
    第一个堆栈元素的类名: default
    第一个堆栈元素的方法名: main()

#### [h2]func printStackTrace()
    
    
    public func printStackTrace(): Unit

功能：向控制台打印堆栈信息。

示例：
    
    
    main() {
        try {
            // 创建一个异常并抛出
            throw Exception("测试异常")
        } catch (e: Exception) {
            // 打印堆栈信息到控制台
            println("打印异常堆栈信息:")
            e.printStackTrace()
        }
    }

可能的运行结果：
    
    
    打印异常堆栈信息:
    An exception has occurred:
    Exception: 测试异常
         at default.main()(/path/path/temp_printStackTrace_example.cj:4)

#### [h2]func toString()
    
    
    public open func toString(): String

功能：获取当前 [Exception](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-exception) 实例的字符串值，包括类名和异常信息。

返回值：

  * [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 异常字符串。

示例：



    
    
    main() {
        // 创建Exception实例
        let exception1 = Exception()
        let exception2 = Exception("自定义异常信息")
    
        // 使用toString()方法获取异常的字符串表示
        println("默认异常的字符串表示: " + exception1.toString())
        println("带消息异常的字符串表示: " + exception2.toString())
    }

运行结果：
    
    
    默认异常的字符串表示: Exception
    带消息异常的字符串表示: Exception: 自定义异常信息

#### class IllegalArgumentException
    
    
    public open class IllegalArgumentException <: Exception {
        public init()
        public init(message: String)
    }

功能：表示参数非法的异常类。

父类型：

  * Exception



#### [h2]init()
    
    
    public init()

功能：构造一个默认的 [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) 实例，默认异常信息为空。

示例：
    
    
    main() {
        // 使用默认构造函数创建IllegalArgumentException实例
        let exception = IllegalArgumentException()
    }

#### [h2]init(String)
    
    
    public init(message: String)

功能：根据异常信息构造一个 [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) 实例。

参数：

  * message: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 异常提示信息。



示例：
    
    
    main() {
        // 使用带消息的构造函数创建IllegalArgumentException实例
        let exception = IllegalArgumentException("自定义异常信息")
    }

#### class IllegalFormatException
    
    
    public open class IllegalFormatException <: IllegalArgumentException {
        public init()
        public init(message: String)
    }

功能：表示变量的格式无效或不标准时的异常类。

父类型：

  * IllegalArgumentException



#### [h2]init()
    
    
    public init()

功能：构造一个默认的 [IllegalFormatException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalformatexception) 实例，默认异常信息为空。

示例：
    
    
    main() {
        // 使用默认构造函数创建IllegalFormatException实例
        let exception = IllegalFormatException()
    }

#### [h2]init(String)
    
    
    public init(message: String)

功能：根据异常信息构造一个 [IllegalFormatException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalformatexception) 实例。

参数：

  * message: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 异常提示信息。



示例：
    
    
    main() {
        // 使用带消息的构造函数创建IllegalFormatException实例
        let exception = IllegalFormatException("自定义异常信息")
    }

#### class IllegalMemoryException
    
    
    public class IllegalMemoryException <: Exception {
        public init()
        public init(message: String)
    }

功能：表示内存操作错误的异常类。

父类型：

  * Exception



#### [h2]init()
    
    
    public init()

功能：构造一个默认的 [IllegalMemoryException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalmemoryexception) 实例，默认异常信息为空。

示例：
    
    
    main() {
        // 使用默认构造函数创建IllegalMemoryException实例
        let exception = IllegalMemoryException()
    }

#### [h2]init(String)
    
    
    public init(message: String)

功能：根据指定异常信息构造 [IllegalMemoryException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalmemoryexception) 实例。

参数：

  * message: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 异常提示信息。



示例：
    
    
    main() {
        // 使用带消息的构造函数创建IllegalMemoryException实例
        let exception = IllegalMemoryException("自定义异常信息")
    }

#### class IllegalStateException
    
    
    public class IllegalStateException <: Exception {
        public init()
        public init(message: String)
    }

功能：表示状态非法的异常类。

父类型：

  * Exception



#### [h2]init()
    
    
    public init()

功能：构造一个默认的 [IllegalStateException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalstateexception) 实例，默认异常信息为空。

示例：
    
    
    main() {
        // 使用默认构造函数创建IllegalStateException实例
        let exception = IllegalStateException()
    }

#### [h2]init(String)
    
    
    public init(message: String)

功能：根据异常信息构造一个 [IllegalStateException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalstateexception) 实例。

参数：

  * message: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 异常提示信息。



示例：
    
    
    main() {
        // 使用带消息的构造函数创建IllegalStateException实例
        let exception = IllegalStateException("自定义异常信息")
    }

#### class IncompatiblePackageException
    
    
    public class IncompatiblePackageException <: Exception {
        public init()
        public init(message: String)
    }

功能：表示包不兼容的异常类。

父类型：

  * Exception



#### [h2]init()
    
    
    public init()

功能：构造一个默认的 [IncompatiblePackageException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-incompatiblepackageexception) 实例，默认异常信息为空。

示例：
    
    
    main() {
        // 使用默认构造函数创建IncompatiblePackageException实例
        let exception = IncompatiblePackageException()
    }

#### [h2]init(String)
    
    
    public init(message: String)

功能：根据异常信息构造一个 [IncompatiblePackageException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-incompatiblepackageexception)实例。

参数：

  * message: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 异常提示信息。



示例：
    
    
    main() {
        // 使用带消息的构造函数创建IncompatiblePackageException实例
        let exception = IncompatiblePackageException("自定义异常信息")
    }

#### class IndexOutOfBoundsException
    
    
    public class IndexOutOfBoundsException <: Exception {
        public init()
        public init(message: String)
    }

功能：表示索引越界的异常类。

父类型：

  * Exception



#### [h2]init()
    
    
    public init()

功能：构造一个默认的 [IndexOutOfBoundsException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-indexoutofboundsexception) 实例，默认异常信息为空。

示例：
    
    
    main() {
        // 使用默认构造函数创建IndexOutOfBoundsException实例
        let exception = IndexOutOfBoundsException()
    }

#### [h2]init(String)
    
    
    public init(message: String)

功能：根据异常信息构造一个 [IndexOutOfBoundsException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-indexoutofboundsexception) 实例。

参数：

  * message: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 异常提示信息。



示例：
    
    
    main() {
        // 使用带消息的构造函数创建IndexOutOfBoundsException实例
        let exception = IndexOutOfBoundsException("自定义异常信息")
    }

#### class NegativeArraySizeException
    
    
    public class NegativeArraySizeException <: Exception {
        public init()
        public init(message: String)
    }

功能：表示数组大小为负数的异常类。

父类型：

  * Exception



#### [h2]init()
    
    
    public init()

功能：构造一个默认的 [NegativeArraySizeException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-negativearraysizeexception) 实例，默认异常信息为空。

示例：
    
    
    main() {
        // 使用默认构造函数创建NegativeArraySizeException实例
        let exception = NegativeArraySizeException()
    }

#### [h2]init(String)
    
    
    public init(message: String)

功能：根据异常信息构造一个 [NegativeArraySizeException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-negativearraysizeexception) 实例。

参数：

  * message: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 异常提示信息。



示例：
    
    
    main() {
        // 使用带消息的构造函数创建NegativeArraySizeException实例
        let exception = NegativeArraySizeException("自定义异常信息")
    }

#### class NoneValueException
    
    
    public class NoneValueException <: Exception {
        public init()
        public init(message: String)
    }

功能：表示 [Option](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-optiont)<T> 实例的值为 None 的异常类，通常在 getOrThrow 函数中被抛出。

父类型：

  * Exception



#### [h2]init()
    
    
    public init()

功能：构造一个默认的 [NoneValueException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-nonevalueexception) 实例，默认异常信息为空。

示例：
    
    
    main() {
        // 使用默认构造函数创建NoneValueException实例
        let exception = NoneValueException()
    }

#### [h2]init(String)
    
    
    public init(message: String)

功能：根据异常信息构造一个 [NoneValueException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-nonevalueexception) 实例。

参数：

  * message: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 异常提示信息。



示例：
    
    
    main() {
        // 使用带消息的构造函数创建NoneValueException实例
        let exception = NoneValueException("自定义异常信息")
    }

#### class OutOfMemoryError
    
    
    public class OutOfMemoryError <: Error {}

功能：表示内存不足错误的错误类，该类不可被继承，不可初始化，但是可以被捕获到。

父类型：

  * Error



#### class OverflowException
    
    
    public class OverflowException <: ArithmeticException {
        public init()
        public init(message: String)
    }

功能：表示算术运算溢出的异常类。

父类型：

  * ArithmeticException



#### [h2]init()
    
    
    public init()

功能：构造一个默认的 [OverflowException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-overflowexception) 实例，默认异常信息为空。

示例：
    
    
    main() {
        // 使用默认构造函数创建OverflowException实例
        let exception = OverflowException()
    }

#### [h2]init(String)
    
    
    public init(message: String)

功能：根据指定异常信息构造 [OverflowException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-overflowexception) 实例。

参数：

  * message: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 异常提示信息。



示例：
    
    
    main() {
        // 使用带消息的构造函数创建OverflowException实例
        let exception = OverflowException("自定义异常信息")
    }

#### class SpawnException
    
    
    public class SpawnException <: Exception {
        public init()
        public init(message: String)
    }

功能：线程异常类，表示线程处理过程中发生异常。

父类型：

  * Exception



#### [h2]init()
    
    
    public init()

功能：构造一个默认的 [SpawnException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-spawnexception) 实例，默认错误信息为空。

示例：
    
    
    main() {
        // 使用默认构造函数创建SpawnException实例
        let exception = SpawnException()
    }

#### [h2]init(String)
    
    
    public init(message: String)

功能：根据异常信息构造一个 [SpawnException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-spawnexception) 实例。

参数：

  * message: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 异常提示信息。



示例：
    
    
    main() {
        // 使用带消息的构造函数创建SpawnException实例
        let exception = SpawnException("自定义异常信息")
    }

#### class StackOverflowError
    
    
    public class StackOverflowError <: Error {}

功能：表示堆栈溢出错误的错误类，该类不可被继承，不可初始化，但是可以被捕获到。

父类型：

  * Error



#### [h2]func printStackTrace()
    
    
    public override func printStackTrace(): Unit

功能：向控制台打印堆栈信息。

示例：
    
    
    // 此示例只做展示，假设抛出 StackOverflowError
    main() {
        try {
        // 假设出现栈溢出错误
        } catch (e: StackOverflowError) {
            println(e.printStackTrace())
        }
    }

#### class TimeoutException
    
    
    public class TimeoutException <: Exception {
        public init()
        public init(message: String)
    }

功能：当阻塞操作超时时引发异常。

父类型：

  * Exception



#### [h2]init()
    
    
    public init()

功能：构造一个默认的 [TimeoutException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-timeoutexception) 实例，默认异常信息为空。

示例：
    
    
    main() {
        // 使用默认构造函数创建TimeoutException实例
        let exception = TimeoutException()
    }

#### [h2]init(String)
    
    
    public init(message: String)

功能：根据指定异常信息构造 [TimeoutException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-timeoutexception) 实例。

参数：

  * message: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 异常提示信息。



示例：
    
    
    main() {
        // 使用带消息的构造函数创建TimeoutException实例
        let exception = TimeoutException("自定义异常信息")
    }

#### class UnsupportedException
    
    
    public class UnsupportedException <: Exception {
        public init()
        public init(message: String)
    }

功能：表示功能未支持的异常类。

父类型：

  * Exception



#### [h2]init()
    
    
    public init()

功能：构造一个默认的 [UnsupportedException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-unsupportedexception) 实例，默认异常信息为空。

示例：
    
    
    main() {
        // 使用默认构造函数创建UnsupportedException实例
        let exception = UnsupportedException()
    }

#### [h2]init(String)
    
    
    public init(message: String)

功能：根据指定异常信息构造 [UnsupportedException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-unsupportedexception) 实例。

参数：

  * message: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 异常提示信息。



示例：
    
    
    main() {
        // 使用带消息的构造函数创建UnsupportedException实例
        let exception = UnsupportedException("自定义异常信息")
    }
