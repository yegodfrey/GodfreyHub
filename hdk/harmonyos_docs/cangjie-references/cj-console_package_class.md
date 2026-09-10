---
name: cangjie-references/cj-console_package_class
title: 类
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-console_package_class
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.console(deprecated) / 类
---

# 类

#### class Console (deprecated)
    
    
    public class Console {}

功能：此类提供标准输入、标准输出和标准错误流的获取接口。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d3/v3/d34kCP7PS7-MlAEio6Ldlw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090202Z&HW-CC-Expire=86400&HW-CC-Sign=F6428EF99200C1E598D472DAB152DB64172D3B62D8A57B4A97204FD0045444DF)

未来版本即将废弃，使用 [env](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-env_package_overview#函数) 包中相应函数替代。

#### [h2]static prop stdErr
    
    
    public static prop stdErr: ConsoleWriter

功能：该成员属性为 [ConsoleWriter](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-console_package_class#class-consolewriter-deprecated) 类型，它提供标准错误的获取功能。

类型：[ConsoleWriter](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-console_package_class#class-consolewriter-deprecated)

示例：
    
    
    import std.console.*
    
    main() {
        // 获取标准错误输出流
        let stderr = Console.stdErr
    
        // 使用标准错误流输出信息
        stderr.write("这是一条标准错误信息")
    }

运行结果：
    
    
    这是一条标准错误信息

#### [h2]static prop stdIn
    
    
    public static prop stdIn: ConsoleReader

功能：该成员属性为 [ConsoleReader](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-console_package_class#class-consolereader-deprecated) 类型，它提供标准输入的获取功能。

类型：[ConsoleReader](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-console_package_class#class-consolereader-deprecated)

示例：
    
    
    import std.console.*
    
    main() {
        // 获取标准输入流
        let stdin = Console.stdIn
    }

#### [h2]static prop stdOut
    
    
    public static prop stdOut: ConsoleWriter

功能：该成员属性为 [ConsoleWriter](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-console_package_class#class-consolewriter-deprecated) 类型，它提供标准输出的获取功能。

类型：[ConsoleWriter](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-console_package_class#class-consolewriter-deprecated)

示例：
    
    
    import std.console.*
    
    main() {
        // 获取标准输出流
        let stdout = Console.stdOut
    
        // 使用标准输出流输出信息
        stdout.write("这是一条标准输出信息")
    }

运行结果：
    
    
    这是一条标准输出信息

#### class ConsoleReader (deprecated)
    
    
    public class ConsoleReader <: InputStream {}

功能：提供从控制台读出数据并转换成字符或字符串的功能。

该类型无法构造实例，只能通过 [Console.stdIn](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-console_package_class#static-prop-stdin) 获取实例。

读操作是同步的，内部设有缓存区来保存控制台输入的内容，当到达控制台输入流的结尾时，控制台读取函数将返回None。

[ConsoleReader](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-console_package_class#class-consolereader-deprecated) 只有一个实例，所有方法共享同一个缓存区，相关read方法返回None的情形有：

  * 将标准输入重定向到文件时，读取到文件结尾 EOF。
  * Linux 环境，按下 Ctrl+D。
  * Windows 环境，按下 Ctrl+Z 后加回车。



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7a/v3/MLIac2YiTfSs8smXM3eFBg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090202Z&HW-CC-Expire=86400&HW-CC-Sign=2D2E348B64ECFFE7F66130E5FD83339800BA8CFC0781863DB780232679FC06A1)

未来版本即将废弃，使用 [ConsoleReader](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-env_package_classes#class-consolereader) 替代。

父类型：

  * [InputStream](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_interfaces#interface-inputstream)



#### [h2]func read()
    
    
    public func read(): ?Rune

功能：从标准输入中读取下一个字符。

返回值：

  * ?[Rune](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#rune) \- 读取到字符，返回 ?[Rune](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#rune) ，否则返回 None。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception)：当输入不符合UTF-8编码的字符串时，抛此异常。



示例：
    
    
    import std.console.*
    
    main() {
        // 获取标准输入流
        let stdin = Console.stdIn
    
        // 读取下一个字符
        // 注意：在实际运行中，程序会等待用户输入一个字符，假设用户输入了一个H
        let r = stdin.read()
        println("用户输入了一个 ${r}")
    }

运行结果：
    
    
    用户输入了一个 Some(H)

#### [h2]func read(Array<Byte>)
    
    
    public func read(arr: Array<Byte>): Int64

功能：从标准输入中读取并放入 arr 中。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3a/v3/a4URPuhEQKmu5usbC1SL7g/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090202Z&HW-CC-Expire=86400&HW-CC-Sign=6765B0F9181509551DAD1001AA5338B8E74785A3213F869195532AA4CF836AE9)

该函数存在风险，可能读取出来的结果恰好把 UTF-8 code point 从中截断，如果发生截断，将导致该 [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Byte](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-byte)> 转换成字符串的结果不正确或抛出异常。

参数：

  * arr: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Byte](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-byte)> \- 目标 [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)。



返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 返回读取到的字节长度。



示例：
    
    
    import std.console.*
    
    main() {
        // 获取标准输入流
        let stdin = Console.stdIn
    
        // 创建一个字节数组用于读取数据
        let buffer: Array<Byte> = [0, 0, 0, 0, 0]
    
        // 从标准输入读取数据到数组中
        // 注意：在实际运行中，程序会等待用户输入5个Byte，假设输入abcde
        stdin.read(buffer)
        println("buffer 中的内容是 ${buffer}")
    }

运行结果：
    
    
    buffer 中的内容是 [97, 98, 99, 100, 101]

#### [h2]func readln()
    
    
    public func readln(): ?String

功能：从标准输入中读取一行字符串。

读取到字符，返回 ?[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)，结果不包含末尾换行符。该接口不会抛出异常，即使输入不符合UTF-8编码的字符串，也会构造出一个 [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) 并返回，其行为等同于 [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string).fromUtf8Uncheck([Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Byte](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-byte)>)。

返回值：

  * ?[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 读取到的行数据，读取失败返回 None。



示例：
    
    
    import std.console.*
    
    main() {
        // 获取标准输入流
        let stdin = Console.stdIn
    
        // 从标准输入读取一行字符串
        // 注意：在实际运行中，程序会等待用户输入一行文本，这里假设输入abcde后按回车
        let str = stdin.readln()
        println(str)
    }

运行结果：
    
    
    Some(abcde)

#### [h2]func readToEnd()
    
    
    public func readToEnd(): ?String

功能：从标准输入中读取所有字符。

该函数在终端规范模式下工作，读取过程如下：

  1. 读取输入直到遇到文件结束符 EOF
  2. 在 Linux 环境下，按 Ctrl+D 触发 EOF：
     * 若输入缓冲区有内容但未按回车，需按两次 Ctrl+D（第一次返回缓冲区内容，第二次触发 EOF）
     * 若输入缓冲区为空，按一次 Ctrl+D 即可触发 EOF
     * 若已按回车，再按 Ctrl+D 即可触发 EOF
  3. 在 Windows 环境下，需按 Ctrl+Z 后加回车触发 EOF



读取成功返回 ?[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)，无输入或到达 EOF 时返回 None。该接口不会抛出异常，即使输入不符合 UTF-8 编码的字符串，也会构造出一个 [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) 并返回，其行为等同于 [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string).[fromUtf8Uncheck](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#static-func-fromutf8uncheckedarrayuint8)([Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Byte](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-byte)>)。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f4/v3/2jh4NEOxRnmnEYx1c6yrwQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090202Z&HW-CC-Expire=86400&HW-CC-Sign=15E3B7BC2D05BA10CBB2DAD695A63DDA8C055292FE10B7E5F8C65981B025A6DA)

由于该函数使用终端规范模式（行缓冲），输入内容后需按回车或 Ctrl+D 才能被读取。若需按键即时响应（如游戏、TUI 应用），当前暂不支持。

返回值：

  * ?[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 将读取到的所有数据以 ?[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) 的形式返回。



示例：
    
    
    import std.console.*
    
    main() {
        // 获取标准输入流
        let stdin = Console.stdIn
    
        // 从标准输入读取所有字符直到遇到EOF
        // 注意：在实际运行中，程序会等待用户输入，直到遇到EOF（Ctrl+D或Ctrl+Z）
        // 当前示例假设输入abcde之后按Ctrl+D两次
        // 若输入缓冲区不为空（比如你刚输入了 abcde 但没按回车）：Ctrl+D 仅将缓冲区的内容 “flush（刷新）” 给程序，不触发 EOF
        // 若输入缓冲区为空（比如你刚按了回车，光标在新行开头，没有未提交的输入）：Ctrl+D 才会向程序发送 EOF 信号，告知 “没有更多输入了”。）
        let str = stdin.readToEnd()
        println("输入的是: ${str}")
    }

运行结果：
    
    
    abcde输入的是: Some(abcde)

#### [h2]func readUntil((Rune) -> Bool)
    
    
    public func readUntil(predicate: (Rune) -> Bool): ?String

功能：从标准输入中读取数据直到读取到的字符满足predicate条件结束。

满足 predicate: (Rune) -> [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) 条件的字符包含在结果中，读取失败时会返回None。

参数：

  * predicate: (Rune) ->[Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 终止读取的条件。



返回值：

  * ?[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 将读取到的数据以 ?[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) 的形式返回。



示例：
    
    
    import std.console.*
    
    main() {
        // 获取标准输入流
        let stdin = Console.stdIn
    
        // 从标准输入读取数据直到满足条件
        // 注意：在实际运行中，程序会等待用户输入，这里假设用户输入abcdefg后按回车
        let str = stdin.readUntil({r: Rune => r == r'e'})
        println(str)
    }

运行结果：
    
    
    Some(abcde)

#### [h2]func readUntil(Rune)
    
    
    public func readUntil(ch: Rune): ?String

功能：从标准输入中读取数据直到读取到字符 ch 结束。

ch包含在结果中，如果读取到文件结束符 EOF，将返回读取到的所有信息，读取失败时会返回 None。

参数：

  * ch: [Rune](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#rune) \- 终止字符。



返回值：

  * ?[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 将读取到的数据以 ?[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) 的形式返回。



示例：
    
    
    import std.console.*
    
    main() {
        // 获取标准输入流
        let stdin = Console.stdIn
    
        // 从标准输入读取数据直到遇到指定字符
        // 注意：在实际运行中，程序会等待用户输入，这里假设输入abcdefg后按回车
        let str = stdin.readUntil(r'e')
        println(str)
    }

运行结果：
    
    
    Some(abcde)

#### class ConsoleWriter (deprecated)
    
    
    public class ConsoleWriter <: OutputStream {}

功能：此类提供保证线程安全的标准输出功能。

每次 write 调用写到控制台的结果是完整的，不同的 write 函数调用的结果不会混合到一起。

该类型无法构造实例，只能通过 [Console.stdOut](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-console_package_class#static-prop-stdout) 获取标准输出实例或者 [Console.stdErr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-console_package_class#static-prop-stderr) 获取标准错误的实例。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c/v3/--2Ki5vMSR6WNwek2eYWqA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090202Z&HW-CC-Expire=86400&HW-CC-Sign=382691D3B3A12F045CD3DD3C9FA35A95BA617EA46B93A8045F16C8553C8458BC)

未来版本即将废弃，使用 [ConsoleWriter](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-env_package_classes#class-consolewriter) 替代。

父类型：

  * [OutputStream](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_interfaces#interface-outputstream)



#### [h2]func flush()
    
    
    public func flush(): Unit

功能：刷新输出流。

示例：
    
    
    import std.console.*
    
    main() {
        // 获取标准输出流
        let stdout = Console.stdOut
    
        // 向标准输出写入一些数据
        stdout.write("这是一些输出数据\n")
    
        // 刷新输出流，确保数据被立即输出
        stdout.flush()
    
        println("数据已刷新到输出流")
    }

运行结果：
    
    
    这是一些输出数据
    数据已刷新到输出流

#### [h2]func write(Array<Byte>)
    
    
    public func write(buffer: Array<Byte>): Unit

功能：指定的将字节数组 buffer 写入标准输出或标准错误流中。

参数：

  * buffer: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Byte](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-byte)> \- 要被写入的字节数组。



示例：
    
    
    import std.console.*
    
    main() {
        // 获取标准输出流
        let stdout = Console.stdOut
    
        // 创建一个字节数组
        let buffer: Array<Byte> = [72, 101, 108, 108, 111] // "Hello"的ASCII码
    
        // 将字节数组写入标准输出
        // 注意：在实际使用中，这会将字节数组的内容写入标准输出
        stdout.write(buffer)
    }

运行结果：
    
    
    Hello

#### [h2]func write(Bool)
    
    
    public func write(v: Bool): Unit

功能：将指定的布尔值的文本表示形式写入标准输出或标准错误流中。

参数：

  * v: [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 要写入的值。



示例：
    
    
    import std.console.*
    
    main() {
        // 获取标准输出流
        let stdout = Console.stdOut
    
        // 将布尔值写入标准输出
        stdout.write(true)
        stdout.write(false)
    }

运行结果：
    
    
    truefalse

#### [h2]func write(Float16)
    
    
    public func write(v: Float16): Unit

功能：将指定的 16 位浮点数值的文本表示写入标准输出或标准错误流中。

参数：

  * v: [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) \- 要写入的值。



示例：
    
    
    import std.console.*
    
    main() {
        // 获取标准输出流
        let stdout = Console.stdOut
    
        // 将16位浮点数值写入标准输出
        stdout.write(3.14f16)
    }

运行结果：
    
    
    3.140625

#### [h2]func write(Float32)
    
    
    public func write(v: Float32): Unit

功能：将指定的 32 位浮点数值的文本表示写入标准输出或标准错误流中。

参数：

  * v: [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) \- 要写入的值。



示例：
    
    
    import std.console.*
    
    main() {
        // 获取标准输出流
        let stdout = Console.stdOut
    
        // 将32位浮点数值写入标准输出
        stdout.write(3.14159f32)
    }

运行结果：
    
    
    3.141590

#### [h2]func write(Float64)
    
    
    public func write(v: Float64): Unit

功能：将指定的 64 位浮点数值的文本表示写入标准输出或标准错误流中。

参数：

  * v: [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 要写入的值。



示例：
    
    
    import std.console.*
    
    main() {
        // 获取标准输出流
        let stdout = Console.stdOut
    
        // 将64位浮点数值写入标准输出
        stdout.write(3.141592653589793)
    }

运行结果：
    
    
    3.141593

#### [h2]func write(Int16)
    
    
    public func write(v: Int16): Unit

功能：将指定的 16 位有符号整数值的文本表示写入标准输出或标准错误流中。

参数：

  * v: [Int16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int16) \- 要写入的值。



示例：
    
    
    import std.console.*
    
    main() {
        // 获取标准输出流
        let stdout = Console.stdOut
    
        // 将16位有符号整数值写入标准输出
        stdout.write(12345i16)
    }

运行结果：
    
    
    12345

#### [h2]func write(Int32)
    
    
    public func write(v: Int32): Unit

功能：将指定的 32 位有符号整数值的文本表示写入标准输出或标准错误流中。

参数：

  * v: [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 要写入的值。



示例：
    
    
    import std.console.*
    
    main() {
        // 获取标准输出流
        let stdout = Console.stdOut
    
        // 将32位有符号整数值写入标准输出
        stdout.write(1234567890i32)
    }

运行结果：
    
    
    1234567890

#### [h2]func write(Int64)
    
    
    public func write(v: Int64): Unit

功能：将指定的 64 位有符号整数值的文本表示写入标准输出或标准错误流中。

参数：

  * v: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 要写入的值。



示例：
    
    
    import std.console.*
    
    main() {
        // 获取标准输出流
        let stdout = Console.stdOut
    
        // 将64位有符号整数值写入标准输出
        stdout.write(123456789012345)
    }

运行结果：
    
    
    123456789012345

#### [h2]func write(Int8)
    
    
    public func write(v: Int8): Unit

功能：将指定的 8 位有符号整数值的文本表示写入标准输出或标准错误流中。

参数：

  * v: [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) \- 要写入的值。



示例：
    
    
    import std.console.*
    
    main() {
        // 获取标准输出流
        let stdout = Console.stdOut
    
        // 将8位有符号整数值写入标准输出
        stdout.write(123i8)
    }

运行结果：
    
    
    123

#### [h2]func write(Rune)
    
    
    public func write(v: Rune): Unit

功能：将指定的 [Rune](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#rune) 的 Unicode 字符值写入标准输出或标准错误流中。

参数：

  * v: [Rune](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#rune) \- 要写入的值。



示例：
    
    
    import std.console.*
    
    main() {
        // 获取标准输出流
        let stdout = Console.stdOut
    
        // 将Unicode字符值写入标准输出
        stdout.write(r'A')
    }

运行结果：
    
    
    A

#### [h2]func write(String)
    
    
    public func write(v: String): Unit

功能：将指定的字符串值写入标准输出或标准错误流中。

参数：

  * v: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 要写入的值。



示例：
    
    
    import std.console.*
    
    main() {
        // 获取标准输出流
        let stdout = Console.stdOut
    
        // 将字符串值写入标准输出
        stdout.write("Hello, World!")
    }

运行结果：
    
    
    Hello, World!

#### [h2]func write(UInt16)
    
    
    public func write(v: UInt16): Unit

功能：将指定的 16 位无符号整数值的文本表示写入标准输出或标准错误流中。

参数：

  * v: [UInt16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint16) \- 要写入的值。



示例：
    
    
    import std.console.*
    
    main() {
        // 获取标准输出流
        let stdout = Console.stdOut
    
        // 将16位无符号整数值写入标准输出
        stdout.write(12345u16)
    }

运行结果：
    
    
    12345

#### [h2]func write(UInt32)
    
    
    public func write(v: UInt32): Unit

功能：将指定的 32 位无符号整数值的文本表示写入标准输出或标准错误流中。

参数：

  * v: [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) \- 要写入的值。



示例：
    
    
    import std.console.*
    
    main() {
        // 获取标准输出流
        let stdout = Console.stdOut
    
        // 将32位无符号整数值写入标准输出
        stdout.write(1234567890u32)
    }

运行结果：
    
    
    1234567890

#### [h2]func write(UInt64)
    
    
    public func write(v: UInt64): Unit

功能：将指定的 64 位无符号整数值的文本表示写入标准输出或标准错误流中。

参数：

  * v: [UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64) \- 要写入的值。



示例：
    
    
    import std.console.*
    
    main() {
        // 获取标准输出流
        let stdout = Console.stdOut
    
        // 将64位无符号整数值写入标准输出
        stdout.write(123456789012345u64)
    }

运行结果：
    
    
    123456789012345

#### [h2]func write(UInt8)
    
    
    public func write(v: UInt8): Unit

功能：将指定的 8 位无符号整数值的文本表示写入标准输出或标准错误流中。

参数：

  * v: [UInt8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint8) \- 要写入的值。



示例：
    
    
    import std.console.*
    
    main() {
        // 获取标准输出流
        let stdout = Console.stdOut
    
        // 将8位无符号整数值写入标准输出
        stdout.write(123u8)
    }

运行结果：
    
    
    123

#### [h2]func write<T>(T) where T <: ToString
    
    
    public func write<T>(v: T): Unit where T <: ToString

功能：将实现了 [ToString](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-tostring) 接口的数据类型写入标准输出或标准错误流中。

参数：

  * v: T - 要被写入的 [ToString](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-tostring) 类型的实例。



示例：
    
    
    import std.console.*
    
    main() {
        // 获取标准输出流
        let stdout = Console.stdOut
    
        // 将实现了ToString接口的数据类型写入标准输出
        stdout.write(MyID())
    }
    
    class MyID <: ToString {
        public func toString(): String {
            return "Id: 123"
        }
    }

运行结果：
    
    
    Id: 123

#### [h2]func writeln(Array<Byte>)
    
    
    public func writeln(buffer: Array<Byte>): Unit

功能：将指定的字节数组 buffer （后跟换行符）写入标准输出或标准错误流中。

参数：

  * buffer: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Byte](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-byte)> \- 要写入的值。



示例：
    
    
    import std.console.*
    
    main() {
        // 获取标准输出流
        let stdout = Console.stdOut
    
        // 创建一个字节数组
        let buffer: Array<Byte> = [72, 101, 108, 108, 111] // "Hello"的ASCII码
    
        // 将字节数组写入标准输出
        stdout.writeln(buffer)
    }

运行结果：
    
    
    Hello

#### [h2]func writeln(Bool)
    
    
    public func writeln(v: Bool): Unit

功能：将指定的布尔值的文本表示形式（后跟换行符）写入标准输出或标准错误流中。

参数：

  * v: [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 要写入的值。



示例：
    
    
    import std.console.*
    
    main() {
        // 获取标准输出流
        let stdout = Console.stdOut
    
        // 将布尔值写入标准输出
        stdout.writeln(true)
        stdout.writeln(false)
    }

运行结果：
    
    
    true
    false

#### [h2]func writeln(Float16)
    
    
    public func writeln(v: Float16): Unit

功能：将指定的 16 位浮点数值的文本表示（后跟换行符）写入标准输出或标准错误流中。

参数：

  * v: [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) \- 要写入的值。



示例：
    
    
    import std.console.*
    
    main() {
        // 获取标准输出流
        let stdout = Console.stdOut
    
        // 将16位浮点数值写入标准输出
        stdout.writeln(3.14f16)
    }

运行结果：
    
    
    3.140625

#### [h2]func writeln(Float32)
    
    
    public func writeln(v: Float32): Unit

功能：将指定的 32 位浮点数值的文本表示（后跟换行符）写入标准输出或标准错误流中。

参数：

  * v: [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) \- 要写入的值。



示例：
    
    
    import std.console.*
    
    main() {
        // 获取标准输出流
        let stdout = Console.stdOut
    
        // 将32位浮点数值写入标准输出
        stdout.writeln(3.14159f32)
    }

运行结果：
    
    
    3.141590

#### [h2]func writeln(Float64)
    
    
    public func writeln(v: Float64): Unit

功能：将指定的 64 位浮点数值的文本表示（后跟换行符）写入标准输出或标准错误流中。

参数：

  * v: [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 要写入的值。



示例：
    
    
    import std.console.*
    
    main() {
        // 获取标准输出流
        let stdout = Console.stdOut
    
        // 将64位浮点数值写入标准输出
        stdout.writeln(3.141592653589793)
    }

运行结果：
    
    
    3.141593

#### [h2]func writeln(Int16)
    
    
    public func writeln(v: Int16): Unit

功能：将指定的 16 位有符号整数值的文本表示（后跟换行符）写入标准输出或标准错误流中。

参数：

  * v: [Int16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int16) \- 要写入的值。



示例：
    
    
    import std.console.*
    
    main() {
        // 获取标准输出流
        let stdout = Console.stdOut
    
        // 将16位有符号整数值写入标准输出
        stdout.writeln(12345i16)
    }

运行结果：
    
    
    12345

#### [h2]func writeln(Int32)
    
    
    public func writeln(v: Int32): Unit

功能：将指定的 32 位有符号整数值的文本表示（后跟换行符）写入标准输出或标准错误流中。

参数：

  * v: [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 要写入的值。



示例：
    
    
    import std.console.*
    
    main() {
        // 获取标准输出流
        let stdout = Console.stdOut
    
        // 将32位有符号整数值写入标准输出
        stdout.writeln(1234567890i32)
    }

运行结果：
    
    
    1234567890

#### [h2]func writeln(Int64)
    
    
    public func writeln(v: Int64): Unit

功能：将指定的 64 位有符号整数值的文本表示（后跟换行符）写入标准输出或标准错误流中。

参数：

  * v: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 要写入的值。



示例：
    
    
    import std.console.*
    
    main() {
        // 获取标准输出流
        let stdout = Console.stdOut
    
        // 将64位有符号整数值写入标准输出
        stdout.writeln(123456789012345)
    }

运行结果：
    
    
    123456789012345

#### [h2]func writeln(Int8)
    
    
    public func writeln(v: Int8): Unit

功能：将指定的 8 位有符号整数值的文本表示（后跟换行符）写入标准输出或标准错误流中。

参数：

  * v: [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) \- 要写入的值。



示例：
    
    
    import std.console.*
    
    main() {
        // 获取标准输出流
        let stdout = Console.stdOut
    
        // 将8位有符号整数值写入标准输出
        stdout.writeln(123i8)
    }

运行结果：
    
    
    123

#### [h2]func writeln(Rune)
    
    
    public func writeln(v: Rune): Unit

功能：将指定的 Unicode 字符值（后跟换行符）写入标准输出或标准错误流中。

参数：

  * v: Rune - 要写入的值。



示例：
    
    
    import std.console.*
    
    main() {
        // 获取标准输出流
        let stdout = Console.stdOut
    
        // 将Unicode字符值写入标准输出
        stdout.writeln(r'A')
    }

运行结果：
    
    
    A

#### [h2]func writeln(String)
    
    
    public func writeln(v: String): Unit

功能：将指定的字符串值（后跟换行符）写入标准输出或标准错误流中。

参数：

  * v: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 要写入的值。



示例：
    
    
    import std.console.*
    
    main() {
        // 获取标准输出流
        let stdout = Console.stdOut
    
        // 将字符串值写入标准输出
        stdout.writeln("Hello, World!")
    }

运行结果：
    
    
    Hello, World!

#### [h2]func writeln(UInt16)
    
    
    public func writeln(v: UInt16): Unit

功能：将指定的 16 位无符号整数值的文本表示（后跟换行符）写入标准输出或标准错误流中。

参数：

  * v: [UInt16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint16) \- 要写入的值。



示例：
    
    
    import std.console.*
    
    main() {
        // 获取标准输出流
        let stdout = Console.stdOut
    
        // 将16位无符号整数值写入标准输出
        stdout.writeln(12345u16)
    }

运行结果：
    
    
    12345

#### [h2]func writeln(UInt32)
    
    
    public func writeln(v: UInt32): Unit

功能：将指定的 32 位无符号整数值的文本表示（后跟换行符）写入标准输出或标准错误流中。

参数：

  * v: [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) \- 要写入的值。



示例：
    
    
    import std.console.*
    
    main() {
        // 获取标准输出流
        let stdout = Console.stdOut
    
        // 将32位无符号整数值写入标准输出
        stdout.writeln(1234567890u32)
    }

运行结果：
    
    
    1234567890

#### [h2]func writeln(UInt64)
    
    
    public func writeln(v: UInt64): Unit

功能：将指定的 64 位无符号整数值的文本表示（后跟换行符）写入标准输出或标准错误流中。

参数：

  * v: [UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64) \- 要写入的值。



示例：
    
    
    import std.console.*
    
    main() {
        // 获取标准输出流
        let stdout = Console.stdOut
    
        // 将64位无符号整数值写入标准输出
        stdout.writeln(123456789012345u64)
    }

运行结果：
    
    
    123456789012345

#### [h2]func writeln(UInt8)
    
    
    public func writeln(v: UInt8): Unit

功能：将指定的 8 位无符号整数值的文本表示（后跟换行符）写入标准输出或标准错误流中。

参数：

  * v: [UInt8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint8) \- 要写入的值。



示例：
    
    
    import std.console.*
    
    main() {
        // 获取标准输出流
        let stdout = Console.stdOut
    
        // 将8位无符号整数值写入标准输出
        stdout.writeln(123u8)
    }

运行结果：
    
    
    123

#### [h2]func writeln<T>(T) where T <: ToString
    
    
    public func writeln<T>(v: T): Unit where T <: ToString

功能：将实现了 [ToString](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-tostring) 接口的数据类型转换成的字符串（后跟换行符）写入标准输出或标准错误流中。

参数：

  * v: T - 要写入的值。



示例：
    
    
    import std.console.*
    
    main() {
        // 获取标准输出流
        let stdout = Console.stdOut
    
        // 将实现了ToString接口的数据类型写入标准输出
        stdout.writeln(MyID())
    }
    
    class MyID <: ToString {
        public func toString(): String {
            return "Id: 123"
        }
    }

运行结果：
    
    
    Id: 123
