---
name: cangjie-references/cj-process_package_classes
title: 类
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-process_package_classes
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.process / 类
---

# 类

#### class CurrentProcess (deprecated)
    
    
    public class CurrentProcess <: Process {}

功能：此类为当前进程类，继承 [Process](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-process_package_classes#class-process) 类，提供对当前进程操作相关功能。

提供功能具体如下：

  * 提供获取当前进程标准流（stdIn、stdOut、stdErr）机制。
  * 提供当前进程退出注册回调函数机制。
  * 提供当前进程退出机制，允许设置退出状态码。



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d4/v3/iopr648PQ7ajEc3cfsdo6w/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=4F22BF32819CF90A70107D7B6B12D5CF0D732F7F8E89B945D38F28E29F4A9789)

未来版本即将废弃。

父类型：

  * [Process](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-process_package_classes#class-process)



#### [h2]prop arguments
    
    
    public prop arguments: Array<String>

功能：返回当前进程参数列表，例如当前进程命令行为 a.out ab cd ef，其中 a.out 是程序名，则返回的列表包含三个元素 ab cd ef。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/22/v3/snEvbCuGQtSTLJ9WuJE_sg/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=7185CE5ECDFF9BC8352DFD000638432C27180175E92D420571325AAB52123192)

  * 使用 C 语言调用仓颉动态库方式时，通过 int SetCJCommandLineArgs(int argc, const char* argv[]) 设置的命令行参数，在使用当前进程的 arguments 获取时，将会被舍弃掉第一个参数。



类型：[Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)>

示例：
    
    
    import std.process.*
    
    main(args: Array<String>): Int64 {
        // 获取当前进程的参数列表
        let currentProcess = Process.current
        let arguments = currentProcess.arguments
        println("尝试使用 ./main arg1 arg2 arg3 执行程序")
        println("参数数量: ${arguments.size}")
        for (i in 0..arguments.size) {
            if (i < arguments.size) {
                println("参数 ${i}: ${arguments[i]}")
            }
        }
        return 0
    }

可能的运行结果：
    
    
    尝试使用 ./main arg1 arg2 arg3 执行程序
    参数数量: 3
    参数 0: arg1
    参数 1: arg2
    参数 2: arg3

#### [h2]prop homeDirectory
    
    
    public prop homeDirectory: Path

功能：获取 home 目录的路径。

类型：[Path](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-fs_package_structs#struct-path)

示例：
    
    
    import std.process.*
    
    main(): Int64 {
        // 获取当前进程的home目录路径
        let currentProcess = Process.current
        let homeDir = currentProcess.homeDirectory
        println("Home目录: ${homeDir}")
        return 0
    }

可能的运行结果：
    
    
    Home目录: /home/user

#### [h2]prop stdErr
    
    
    public prop stdErr: OutputStream

功能：获取当前进程标准错误流。

类型：[OutputStream](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_interfaces#interface-outputstream)

示例：
    
    
    import std.process.*
    
    main(): Int64 {
        // 获取当前进程的标准错误流
        let currentProcess = Process.current
        let stdErr = currentProcess.stdErr
        return 0
    }

#### [h2]prop stdIn
    
    
    public prop stdIn: InputStream

功能：获取当前进程标准输入流。

类型：[InputStream](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_interfaces#interface-inputstream)

示例：
    
    
    import std.process.*
    
    main(): Int64 {
        // 获取当前进程的标准输入流
        let currentProcess = Process.current
        let stdinStream = currentProcess.stdIn
        return 0
    }

#### [h2]prop stdOut
    
    
    public prop stdOut: OutputStream

功能：获取当前进程标准输出流。

类型：[OutputStream](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_interfaces#interface-outputstream)

示例：
    
    
    import std.process.*
    
    main(): Int64 {
        // 获取当前进程的标准输出流
        let currentProcess = Process.current
        let stdoutStream = currentProcess.stdOut
        return 0
    }

#### [h2]prop tempDirectory
    
    
    public prop tempDirectory: Path

功能：获取临时目录的路径。从环境变量中获取 TMPDIR、TMP、TEMP 和 TEMPDIR 环境变量。如果以上值在环境变量中均不存在，则默认返回 /tmp 目录。

类型：[Path](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-fs_package_structs#struct-path)

示例：
    
    
    import std.process.*
    
    main(): Int64 {
        // 获取当前进程的临时目录路径
        let currentProcess = Process.current
        let tempDir = currentProcess.tempDirectory
        println("临时目录: ${tempDir}")
        return 0
    }

可能的运行结果：
    
    
    临时目录: /tmp

#### [h2]func atExit(() -> Unit)
    
    
    public func atExit(callback: () -> Unit): Unit

功能：注册回调函数，当前进程退出时执行注册函数。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7f/v3/SXRm9TQyRlOK8P_SjhHkng/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=A2D09251045754DC44A2FA8BC3B5BF12D361980B9DF04254B235BF9E0C2CD4D5)

请不要使用 C 语言 atexit 函数，避免出现非预期问题。

参数：

  * callback: () ->[Unit](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#unit) \- 需要被注册回调的函数。



示例：
    
    
    import std.process.*
    
    func exitCallback(): Unit {
        println("进程即将退出")
    }
    
    main(): Int64 {
        // 注册退出回调函数
        Process.current.atExit(exitCallback)
        println("主函数执行完毕")
        return 0
    }

运行结果：
    
    
    主函数执行完毕
    进程即将退出

#### [h2]func exit(Int64)
    
    
    public func exit(code: Int64): Nothing

功能：进程退出函数，执行到此函数直接结束当前进程，并且通过入参 code 设置返回状态码。

参数：

  * code: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 当前进程退出状态码。



示例：
    
    
    import std.process.*
    
    main(): Int64 {
        // 打印消息然后退出进程
        println("程序即将退出")
        Process.current.exit(1)
        println("这行不会被执行")
        return 0
    }

运行结果：
    
    
    程序即将退出

#### [h2]func getEnv(String)
    
    
    public func getEnv(key: String): Option<String>

功能：获取指定名称的环境变量值。

参数：

  * key: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 环境变量名称。



返回值：

  * [Option](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-optiont)<[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)> \- 指定名称对应的环境变量值。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当入参包含空字符时，抛出异常。



示例：
    
    
    import std.process.*
    
    main(): Int64 {
        // 获取环境变量
        let homeEnv = Process.current.getEnv("HOME")
        match (homeEnv) {
            case Option.Some(value) => println("HOME环境变量: ${value}")
            case Option.None => println("未找到HOME环境变量")
        }
        return 0
    }

可能的运行结果：
    
    
    HOME环境变量: /home/user

#### [h2]func removeEnv(String)
    
    
    public func removeEnv(k: String): Unit

功能：通过指定环境变量名称移除环境变量。

参数：

  * k: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 环境变量名称。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当入参包含空字符时，抛出异常。
  * [ProcessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-process_package_exceptions#class-processexception) \- 当移除环境变量失败时，抛出异常。



示例：
    
    
    import std.process.*
    
    main(): Int64 {
        // 设置一个环境变量然后移除它
        Process.current.setEnv("TEST_VAR", "test_value")
        println("已设置环境变量 TEST_VAR")
    
        // 获取并打印环境变量
        let testEnv = Process.current.getEnv("TEST_VAR")
        match (testEnv) {
            case Option.Some(value) => println("TEST_VAR环境变量: ${value}")
            case Option.None => println("未找到TEST_VAR环境变量")
        }
    
        // 移除环境变量
        Process.current.removeEnv("TEST_VAR")
        println("已移除环境变量 TEST_VAR")
    
        // 再次获取环境变量
        let testEnvAfter = Process.current.getEnv("TEST_VAR")
        match (testEnvAfter) {
            case Option.Some(value) => println("TEST_VAR环境变量: ${value}")
            case Option.None => println("未找到TEST_VAR环境变量")
        }
    
        return 0
    }

运行结果：
    
    
    已设置环境变量 TEST_VAR
    TEST_VAR环境变量: test_value
    已移除环境变量 TEST_VAR
    未找到TEST_VAR环境变量

#### [h2]func setEnv(String, String)
    
    
    public func setEnv(k: String, v: String): Unit

功能：用于设置一对环境变量。如果设置了同名环境变量，原始环境变量值将被覆盖。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/17/v3/9kj2iDWqR62VUSy19chxgw/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=633B7A5BB4174225C9612B037F9EA8D6E98FDFA6B6F6316E04B07AD5CEB0AD13)

Windows 下如果传入的参数 v 是空字符串，那么会从环境中移除变量 k。

参数：

  * k: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 环境变量名称。
  * v: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 环境变量值。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当入参包含空字符时，抛出异常。
  * [ProcessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-process_package_exceptions#class-processexception) \- 当设置环境变量失败时，抛出异常。



示例：
    
    
    import std.process.*
    
    main(): Int64 {
        // 设置一个环境变量
        Process.current.setEnv("MY_VAR", "my_value")
        println("已设置环境变量 MY_VAR")
    
        // 获取并打印环境变量
        let myEnv = Process.current.getEnv("MY_VAR")
        match (myEnv) {
            case Option.Some(value) => println("MY_VAR环境变量: ${value}")
            case Option.None => println("未找到MY_VAR环境变量")
        }
    
        return 0
    }

运行结果：
    
    
    已设置环境变量 MY_VAR
    MY_VAR环境变量: my_value

#### class Process
    
    
    public open class Process {}

功能：此类为进程类，提供进程操作相关功能。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f3/v3/qqhx4rteRR6rKg6MnSeBTw/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=3344C351DE0B4CC6A52D8B806D98A7B69E1176AC4723E970FB578989FAECF7D3)

提供功能具体如下：

  * 提供获取当前进程实例的功能。
  * 提供根据进程 id 绑定进程实例的功能。
  * 提供根据输入信息创建子进程的功能。
  * 提供获取进程信息的功能。
  * 提供关闭进程的功能，允许设置是否强制关闭进程。



#### [h2]static prop current (deprecated)
    
    
    public static prop current: CurrentProcess

功能：获取当前进程实例。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d1/v3/PQ5NP4idRHG-aY2I3qgHcQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=CDCC03EB9BCA9BE6C38239FDE3F2059C057737B87AF96B51E2ABC5F32D5377C7)

未来版本即将废弃，使用 [env](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-env_package_overview#函数) 包的全局函数替代。

类型：[CurrentProcess](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-process_package_classes#class-currentprocess-deprecated)

示例：
    
    
    import std.process.*
    
    main(): Int64 {
        // 获取当前进程实例
        let currentProcess = Process.current
        println("当前进程PID: ${currentProcess.pid}")
        println("当前进程名称: ${currentProcess.name}")
        return 0
    }

可能的运行结果：
    
    
    当前进程PID: 1891618
    当前进程名称: main

#### [h2]prop arguments (deprecated)
    
    
    public open prop arguments: Array<String>

功能：获取进程参数。Windows 平台下无法在非特权 API 下获取到本属性。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/48/v3/enQV2BvHTXq9fyh-AnVP4A/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=A00855851B8AEF037B9117889E9A0F465E2316C5AFA9C73699ECE0A29D4D09D3)

未来版本即将废弃。

类型：[Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)>

异常：

  * [ProcessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-process_package_exceptions#class-processexception) \- 当进程不存在或对应进程为僵尸进程，或在 Windows 平台不支持场景下获取进程参数时，抛出异常。



示例：
    
    
    import std.process.*
    import std.env.*
    
    main(): Int64 {
        // 获取当前进程PID
        let currentPid = getProcessId()
        // 根据PID查找进程
        let process = findProcess(currentPid)
    
        // 执行命令：./main arg1 arg2 arg3
        println("进程参数: ${process.arguments}")
    
        return 0
    }

可能的运行结果：
    
    
    进程参数: [arg1, arg2, arg3]

#### [h2]prop command
    
    
    public prop command: String

功能：获取进程命令。

类型：[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)

异常：

  * [ProcessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-process_package_exceptions#class-processexception) \- 当进程不存在或对应进程为僵尸进程，无法获取进程命令时，抛出异常。



示例：
    
    
    import std.process.*
    import std.env.*
    
    main(): Int64 {
        // 获取当前进程PID
        let currentPid = getProcessId()
        // 根据PID查找进程
        let process = findProcess(currentPid)
    
        println("进程命令: ${process.command}")
    
        return 0
    }

可能的运行结果：
    
    
    进程命令: ./main

#### [h2]prop commandLine (deprecated)
    
    
    public prop commandLine: Array<String>

功能：获取当前进程命令行。对于 Windows 平台，只能获取当前进程的命令行，其他场景下无法在非特权 API 下获取到本属性。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/90/v3/qAMEe-iDQrKf_ow3wTeCuw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=0DA644DD0650B83DC074A8FB309948062DA44A425AFD49C01C5E0EA8B8199219)

  * 不支持平台：iOS。
  * 未来版本即将废弃，使用 [getcommandline()](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-env_package_funcs#func-getcommandline) 替代。



类型：[Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)>

异常：

  * [ProcessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-process_package_exceptions#class-processexception) \- 当进程不存在、对应进程为僵尸进程或在其他不支持的场景下无法获取进程命令行时，抛出异常。



示例：
    
    
    import std.process.*
    import std.env.*
    
    main(): Int64 {
        // 获取当前进程PID
        let currentPid = getProcessId()
        // 根据PID查找进程
        let process = findProcess(currentPid)
        let commandLine = process.commandLine
        println("尝试使用 ./main arg1 arg2 arg3 执行程序")
        println("命令行参数数量: ${commandLine.size}")
        for (i in 0..commandLine.size) {
            println("参数 ${i}: ${commandLine[i]}")
        }
        return 0
    }

可能的运行结果：
    
    
    尝试使用 ./main arg1 arg2 arg3 执行程序
    命令行参数数量: 4
    参数 0: ./main
    参数 1: arg1
    参数 2: arg2
    参数 3: arg3

#### [h2]prop environment (deprecated)
    
    
    public prop environment: Map<String, String>

功能：获取当前进程环境变量。对于 Windows 平台，只能获取当前进程的环境变量，其他场景下无法在非特权 API 下获取到本属性。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2f/v3/MSbMRnMLQW2RJZd4F4Agnw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=0631780965F6F9B3918EBE89C89245084EF47C06F0917C299195B87B06355282)

  * 不支持平台：iOS。
  * 未来版本即将废弃，使用 [getVariables()](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-env_package_funcs#func-getvariables) 替代。



类型：[Map](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_interface#interface-mapk-v)<[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string), [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)>

异常：

  * [ProcessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-process_package_exceptions#class-processexception) \- 当进程不存在、对应进程为僵尸进程或在其他不支持的场景下无法获取进程环境变量时，抛出异常。



示例：
    
    
    import std.process.*
    import std.env.*
    
    main(): Int64 {
        // 获取当前进程PID
        let currentPid = getProcessId()
        // 根据PID查找进程
        let process = findProcess(currentPid)
        let env = process.environment
    
        // 简单示例，只打印环境变量数量
        println("环境变量数量: ${env.size}")
        return 0
    }

可能的运行结果：
    
    
    环境变量数量: 47

#### [h2]prop name
    
    
    public prop name: String

功能：获取进程名。

类型：[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)

异常：

  * [ProcessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-process_package_exceptions#class-processexception) \- 当进程不存在或对应进程为僵尸进程，无法获取进程名时，抛出异常。



示例：
    
    
    import std.process.*
    import std.env.*
    
    main(): Int64 {
        // 获取当前进程PID
        let currentPid = getProcessId()
        // 根据PID查找进程
        let process = findProcess(currentPid)
        println("进程名称: ${process.name}")
    
        return 0
    }

可能的运行结果：
    
    
    进程名称: main

#### [h2]prop pid
    
    
    public prop pid: Int64

功能：获取进程 id。

类型：[Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64)

示例：
    
    
    import std.process.*
    import std.env.*
    
    main(): Int64 {
        // 获取当前进程PID
        let currentPid = getProcessId()
        // 根据PID查找进程
        let process = findProcess(currentPid)
        println("进程PID: ${process.pid}")
    
        return 0
    }

可能的运行结果：
    
    
    进程PID: 2083322

#### [h2]prop startTime
    
    
    public prop startTime: DateTime

功能：获取进程启动时间点，获取失败时返回 [DateTime.UnixEpoch](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-time_package_structs#static-prop-unixepoch)。

类型：[DateTime](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-time_package_structs#struct-datetime)

示例：
    
    
    import std.process.*
    import std.env.*
    
    main(): Int64 {
        // 获取当前进程PID
        let currentPid = getProcessId()
        // 根据PID查找进程
        let process = findProcess(currentPid)
    
        // 获取进程启动时间点
        let startTime = process.startTime
        println("进程启动时间点: ${startTime}")
    
        return 0
    }

可能的运行结果：
    
    
    进程启动时间点: 2025-12-02T12:06:27.73Z

#### [h2]prop systemTime
    
    
    public prop systemTime: Duration

功能：获取进程内核态耗时，获取失败时返回 -1ms。

类型：[Duration](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-duration)

示例：
    
    
    import std.process.*
    import std.env.*
    
    main(): Int64 {
        // 获取当前进程PID
        let currentPid = getProcessId()
        // 根据PID查找进程
        let process = findProcess(currentPid)
        // 获取进程内核态耗时
        let systemTime = process.systemTime
        println("进程内核态耗时: ${systemTime}")
    
        return 0
    }

可能的运行结果：
    
    
    进程内核态耗时: 0s

#### [h2]prop userTime
    
    
    public prop userTime: Duration

功能：获取进程用户态耗时，获取失败时返回 -1ms。

类型：[Duration](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-duration)

示例：
    
    
    import std.process.*
    import std.env.*
    
    main(): Int64 {
        // 获取当前进程PID
        let currentPid = getProcessId()
        // 根据PID查找进程
        let process = findProcess(currentPid)
        // 获取进程用户态耗时
        let userTime = process.userTime
        println("进程用户态耗时: ${userTime}")
    
        return 0
    }

可能的运行结果：
    
    
    进程用户态耗时: 0s

#### [h2]prop workingDirectory (deprecated)
    
    
    public prop workingDirectory: Path

功能：获取进程工作路径。对于 Windows 平台，仅对当前进程生效，其他场景下无法在非特权 API 下获取到本属性。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/24/v3/SJXMfwsBQSakG_bcftyNGw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=182A08F823A111FB57BF12E231CAD2096B3910A16BB90322259821211B6605D2)

未来版本即将废弃，使用 [getHomeDirectory()](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-env_package_funcs#func-gethomedirectory) 替代。

类型：[Path](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-fs_package_structs#struct-path)

异常：

  * [ProcessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-process_package_exceptions#class-processexception) \- 当进程不存在或对应进程为僵尸进程，或在 Windows 平台的不支持的场景下无法获取进程工作路径时，抛出异常。



示例：
    
    
    import std.process.*
    import std.env.*
    
    main(): Int64 {
        // 获取当前进程PID
        let currentPid = getProcessId()
        // 根据PID查找进程
        let process = findProcess(currentPid)
        // 获取进程工作目录
        let workingDirectory = process.workingDirectory
        println("当前进程工作目录: ${workingDirectory}")
    
        return 0
    }

运行结果：
    
    
    当前进程工作目录: /tmp/cj_examples

#### [h2]static func of(Int64) (deprecated)
    
    
    public static func of(pid: Int64): Process

功能：根据输入进程 id 绑定一个进程实例。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/39/v3/H46XqKlESG6jv-A8biVzzQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=80AA3AF9C4241880DF7013D85A3BA49B4FE53A93F0BC5E9EFB2C58FF293ADE6A)

  * 不支持平台：iOS。
  * 未来版本即将废弃，使用 [findProcess](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-process_package_funcs#func-findprocessint64) 替代。



参数：

  * pid: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 进程 id。



返回值：

  * [Process](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-process_package_classes#class-process) \- 返回进程 id 对应的进程实例。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当输入进程 id 大于 [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) 最大值或小于 0时，抛出异常。
  * [ProcessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-process_package_exceptions#class-processexception) \- 当内存分配失败或 pid 对应的进程不存在时，抛出异常。



示例：
    
    
    import std.process.*
    
    main(): Int64 {
        // 获取当前进程的PID
        let currentPid = Process.current.pid
        println("当前进程PID: ${currentPid}")
    
        // 使用of函数绑定当前进程
        let process = Process.of(currentPid)
        println("绑定进程PID: ${process.pid}")
        println("绑定进程名称: ${process.name}")
    
        return 0
    }

运行结果：
    
    
    当前进程PID: 1949738
    绑定进程PID: 1949738
    绑定进程名称: main

#### [h2]static func run(String, Array<String>, ?Path, ?Map<String, String>, ProcessRedirect, ProcessRedirect,ProcessRedirect, ?Duration) (deprecated)
    
    
    public static func run(
            command: String,
            arguments: Array<String>,
            workingDirectory!: ?Path = None,
            environment!: ?Map<String, String> = None,
            stdIn!: ProcessRedirect = Inherit,
            stdOut!: ProcessRedirect = Inherit,
            stdErr!: ProcessRedirect = Inherit,
            timeout!: ?Duration = None
        ): Int64

功能：根据输入参数创建并运行一个子进程，等待该子进程运行完毕并返回子进程退出状态。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fe/v3/gCFeLf0XT8ig3KfKezIWbA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=C3034AA2369FF59095A57028721F29EBF4073D67CC4EF2E8F3C736DCC79354D6)

  * 不支持平台：iOS。
  * 未来版本即将废弃，使用 [execute](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-process_package_funcs#func-executestring-arraystring-path-mapstring-string-processredirect-processredirectprocessredirect-duration) 替代。
  * 在 Windows 平台上，在子进程执行完成后立即删除子进程的可执行文件可能删除失败并抛出异常，异常信息为 Access is denied，如果遇到该问题，可以在一小段延迟后重新尝试删除该文件，详细实现可参考示例。



参数：

  * command: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 指定子进程命令，command 不允许包含空字符。
  * arguments: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)> \- 指定子进程参数，arguments 不允许数组中字符串中包含空字符。
  * workingDirectory!: ?[Path](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-fs_package_structs#struct-path) \- 命名可选参数，指定子进程的工作路径，默认继承当前进程工作路径，路径必须为存在的目录且不允许为空路径或包含空字符。
  * environment!: ?[Map](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_interface#interface-mapk-v)<[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string), [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)> \- 命名可选参数，指定子进程环境变量，默认继承当前进程环境变量，key 不允许字符串中包含空字符或 '='，value 不允许字符串中包含空字符。
  * stdIn!: [ProcessRedirect](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-process_package_enums#enum-processredirect) \- 命名可选参数，指定子进程重定向标准输入，默认继承当前进程标准输入。
  * stdOut!: [ProcessRedirect](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-process_package_enums#enum-processredirect) \- 命名可选参数，指定子进程重定向标准输出，默认继承当前进程标准输出。
  * stdErr!: [ProcessRedirect](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-process_package_enums#enum-processredirect) \- 命名可选参数，指定子进程重定向标准错误，默认继承当前进程标准错误。
  * timeout!: ?[Duration](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-duration) \- 命名可选参数，指定等待子进程超时时间，默认为不超时, timeout 指定为 0 或负值时表示不超时。



返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 返回子进程退出状态，若子进程正常退出，返回子进程退出码，若子进程被信号杀死，返回导致子进程终止的信号编号。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当入参 command 包含空字符，或者 arguments 数组中字符串中包含空字符，或者 workingDirectory 不是存在的目录或为空路径或包含空字符，或者 environment 表中 key 字符串中包含空字符或 '='，或 value 字符串中包含空字符，或者 stdIn、stdOut、stdErr 为重定向到文件的模式并且输入的文件已被关闭或删除时，抛出异常。
  * [ProcessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-process_package_exceptions#class-processexception) \- 当内存分配失败或 command 对应的命令不存在或等待超时，抛出异常。



示例：
    
    
    import std.process.*
    
    main(): Int64 {
        // 使用run函数创建并运行一个子进程
        let exitCode = Process.run("echo", ["Hello, World!"])
        println("子进程退出码: ${exitCode}")
    
        return 0
    }

运行结果：
    
    
    Hello, World!
    子进程退出码: 0

#### [h2]static func runOutput(String, Array<String>, ?Path, ?Map<String, String>, ProcessRedirect, ProcessRedirect, ProcessRedirect) (deprecated)
    
    
    public static func runOutput(
            command: String,
            arguments: Array<String>,
            workingDirectory!: ?Path = None,
            environment!: ?Map<String, String> = None,
            stdIn!: ProcessRedirect = Inherit,
            stdOut!: ProcessRedirect = Pipe,
            stdErr!: ProcessRedirect = Pipe
        ): (Int64, Array<Byte>, Array<Byte>)

功能：根据输入参数创建并运行一个子进程，等待该子进程运行完毕并返回子进程退出状态、标准输出和标准错误。输出流、错误流中包含大量输出的场景不适用于本函数，建议通过 [SubProcess](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-process_package_classes#class-subprocess) 中提供的标准流属性结合 wait 函数自行处理。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d4/v3/Xj3XWCUqR_StSL9JAaHV2A/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=440ADA2F5446A3E4008A2E3CCC9069A17A099B831C62AB59469EA4153BAC2CF0)

  * 不支持平台：iOS。
  * 未来版本即将废弃，使用 [executeWithOutput](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-process_package_funcs#func-executewithoutputstring-arraystring-path-mapstring-string-processredirect-processredirect-processredirect) 替代。



参数：

  * command: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 指定子进程命令，command 不允许包含空字符。
  * arguments: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)> \- 指定子进程参数，arguments 不允许数组中字符串中包含空字符。
  * workingDirectory!: ?[Path](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-fs_package_structs#struct-path) \- 命名可选参数，指定子进程的工作路径，默认继承当前进程工作路径，路径必须为存在的目录且不允许为空路径或包含空字符。
  * environment!: ?[Map](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_interface#interface-mapk-v)<[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string), [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)> \- 命名可选参数，指定子进程环境变量，默认继承当前进程环境变量，key 不允许字符串中包含空字符或 '='，value 不允许字符串中包含空字符。
  * stdIn!: [ProcessRedirect](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-process_package_enums#enum-processredirect) \- 命名可选参数，指定子进程重定向标准输入，默认继承当前进程标准输入。
  * stdOut!: [ProcessRedirect](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-process_package_enums#enum-processredirect) \- 命名可选参数，指定子进程重定向标准输出，默认继承当前进程标准输出。
  * stdErr!: [ProcessRedirect](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-process_package_enums#enum-processredirect) \- 命名可选参数，指定子进程重定向标准错误，默认继承当前进程标准错误。



返回值：

  * ([Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64), [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Byte](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-byte)>, [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Byte](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-byte)>) - 子进程执行返回结果，包含子进程退出状态（若子进程正常退出，返回子进程退出码，若子进程被信号杀死，返回导致子进程终止的信号编号），进程标准输出结果和进程错误结果。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当入参 command 包含空字符，或者 arguments 数组中字符串中包含空字符，或者 workingDirectory 不是存在的目录或为空路径或包含空字符，或者 environment 表中 key 字符串中包含空字符或 '='，或 value 字符串中包含空字符，或者 stdIn、stdOut、stdErr 为重定向到文件的模式并且输入的文件已被关闭或删除时，抛出异常。
  * [ProcessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-process_package_exceptions#class-processexception) \- 当内存分配失败，或者 command 对应的命令不存在，或者子进程不存在，或者标准流读取异常时，抛出异常。



示例：
    
    
    import std.process.*
    
    main(): Int64 {
        // 使用runOutput函数创建并运行一个子进程，获取输出结果
        let (exitCode, stdout, stderr) = Process.runOutput("echo", ["Hello, World!"])
        println("子进程退出码: ${exitCode}")
        println("标准输出字节数: ${stdout.size}")
        println("标准错误字节数: ${stderr.size}")
    
        return 0
    }

运行结果：
    
    
    子进程退出码: 0
    标准输出字节数: 14
    标准错误字节数: 0

#### [h2]static func start(String, Array<String>, ?Path, ?Map<String, String>, ProcessRedirect, ProcessRedirect, ProcessRedirect) (deprecated)
    
    
    public static func start(
            command: String,
            arguments: Array<String>,
            workingDirectory!: ?Path = None,
            environment!: ?Map<String, String> = None,
            stdIn!: ProcessRedirect = Inherit,
            stdOut!: ProcessRedirect = Inherit,
            stdErr!: ProcessRedirect = Inherit
        ): SubProcess

功能：根据输入参数创建并运行一个子进程，并返回一个子进程实例。调用该函数创建子进程后，需要调用 wait 或 waitOutput 函数，否则该子进程结束后成为僵尸进程的资源不会被回收。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/71/v3/-zPjW_vfST2TovtV113jBQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=5C3F852251A1ABB7917EFB2CDBDEE26913F6B52B60DF75118D95784E30159E76)

  * 不支持平台：iOS。
  * 未来版本即将废弃，使用 [launch](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-process_package_funcs#func-launchstring-arraystring-path-mapstring-string-processredirect-processredirect-processredirect) 替代。



参数：

  * command: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 指定子进程命令，command 不允许包含空字符。
  * arguments: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)> \- 指定子进程参数，arguments 不允许数组中字符串中包含空字符。
  * workingDirectory!: ?[Path](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-fs_package_structs#struct-path) \- 命名可选参数，指定子进程的工作路径，默认继承当前进程工作路径，路径必须为存在的目录且不允许为空路径或包含空字符。
  * environment!: ?[Map](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_interface#interface-mapk-v)<[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string), [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)> \- 命名可选参数，指定子进程环境变量，默认继承当前进程环境变量，key 不允许字符串中包含空字符或 '='，value 不允许字符串中包含空字符。
  * stdIn!: [ProcessRedirect](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-process_package_enums#enum-processredirect) \- 命名可选参数，指定子进程重定向标准输入，默认继承当前进程标准输入。
  * stdOut!: [ProcessRedirect](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-process_package_enums#enum-processredirect) \- 命名可选参数，指定子进程重定向标准输出，默认继承当前进程标准输出。
  * stdErr!: [ProcessRedirect](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-process_package_enums#enum-processredirect) \- 命名可选参数，指定子进程重定向标准错误，默认继承当前进程标准错误。



返回值：

  * [SubProcess](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-process_package_classes#class-subprocess) \- 返回一个子进程实例。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当入参 command 包含空字符，或者 arguments 数组中字符串中包含空字符，或者 workingDirectory 不是存在的目录或为空路径或包含空字符，或者 environment 表中 key 字符串中包含空字符或 '='，或 value 字符串中包含空字符，或者 stdIn、stdOut、stdErr 为重定向到文件的模式并且输入的文件已被关闭或删除时，抛出异常。
  * [ProcessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-process_package_exceptions#class-processexception) \- 当内存分配失败或 command 对应的命令不存在时，抛出异常。



示例：
    
    
    import std.process.*
    
    main(): Int64 {
        // 使用start函数创建并运行一个子进程
        let subprocess = Process.start("sleep", ["2s"])
        println("子进程PID: ${subprocess.pid}")
        println("子进程名称: ${subprocess.name}")
    
        // 等待子进程完成
        let exitCode = subprocess.wait()
        println("子进程退出码: ${exitCode}")
    
        return 0
    }

可能的运行结果：
    
    
    子进程PID: 1952800
    子进程名称: sleep
    子进程退出码: 0

#### [h2]func isAlive()
    
    
    public func isAlive(): Bool

功能：返回进程是否存活。

返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 进程存活则为true，否则为false。



示例：
    
    
    import std.process.*
    
    main(): Int64 {
        // 创建一个子进程
        let subprocess = launch("sleep", ["2s"])
        // 根据PID查找进程
        let process: Process = findProcess(subprocess.pid)
    
        // 检查进程是否存活
        let alive = process.isAlive()
        println("进程是否存活: ${alive}")
    
        // 等待子进程完成
        subprocess.wait()
    
        // 再次检查子进程是否存活
        let aliveAfter = process.isAlive()
        println("进程是否存活: ${aliveAfter}")
    
        return 0
    }

运行结果：
    
    
    进程是否存活: true
    进程是否存活: false

#### [h2]func terminate(Bool)
    
    
    public func terminate(force!: Bool = false): Unit

功能：终止进程，子进程执行返回结果，包含子进程退出状态（若子进程正常退出，返回子进程退出码，若子进程被信号杀死，返回导致子进程终止的信号编号），进程标准输出结果和进程错误结果。

参数：

  * force!: [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 命名可选参数，指定是否强制关闭进程，默认为 false，若设置为 false，对应进程可以在释放资源后结束；若设置为 true，对应进程将被直接杀死。Windows 平台实现为强制关闭进程。



异常：

  * [ProcessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-process_package_exceptions#class-processexception) \- 如果进程不存在，不允许终止，则抛出异常。



示例：
    
    
    import std.process.*
    
    main(): Int64 {
        // 创建一个子进程
        let subprocess = launch("sleep", ["2s"])
        // 根据PID查找进程
        let process: Process = findProcess(subprocess.pid)
    
        // 检查进程是否存活
        let alive = process.isAlive()
        println("进程是否存活: ${alive}")
    
        // 终止子进程
        process.terminate(force: true)
        // 无需等待子进程
        subprocess.wait()
    
        // 再次检查进程是否存活
        let aliveAfter = process.isAlive()
        println("进程是否存活: ${aliveAfter}")
    
        return 0
    }

运行结果：
    
    
    进程是否存活: true
    进程是否存活: false

#### class SubProcess
    
    
    public class SubProcess <: Process {}

功能：此类为子进程类，继承 [Process](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-process_package_classes#class-process) 类，提供对子进程操作相关功能。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fb/v3/zxRwdXnxRUmdu5kDfQkP0g/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=DDF4EEC91CAAD9C1F42039B9BA9A9DE084036CBC21BFE58428C25C1B4DAB2018)

不支持平台：iOS。

提供功能具体如下：

  * 提供获取子进程标准流（stdIn、stdOut、stdErr）机制。
  * 提供等待子进程执行返回退出状态码机制，允许设置等待超时时长。
  * 提供等待子进程执行返回输出结果(包含运行正常、异常结果)机制，允许设置等待超时时长。



父类型：

  * [Process](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-process_package_classes#class-process)



#### [h2]prop stdErr (deprecated)
    
    
    public prop stdErr: InputStream

功能：获取输入流，连接到子进程标准错误流。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/30/v3/nm6vItqfSoGRTuZeBp8eDg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=88348B51D34D2E38D461137D47DD81F7945B94F9AEE7CBD0E0A827725A73D55F)

  * 不支持平台：iOS。
  * 未来版本即将废弃，使用 [stdErrPipe](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-process_package_classes#prop-stderrpipe) 替代。



类型：[InputStream](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_interfaces#interface-inputstream)

示例：
    
    
    import std.process.*
    
    main(): Int64 {
        // 创建一个子进程并获取其标准错误流（废弃API）
        let subprocess = launch("ls", ["/nonexistent"], stdErr: ProcessRedirect.Pipe)
        let stderrStream = subprocess.stdErr
    
        // 等待子进程完成
        let exitCode = subprocess.wait()
    
        return 0
    }

#### [h2]prop stdErrPipe
    
    
    public prop stdErrPipe: InputStream

功能：获取输入流，连接到子进程标准错误流。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/25/v3/0PF77jxWQqu22zHex6OEeQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=359FA6D60DAC220019243230FAF980E534618902F95DB024D5B4E1DAEC8A71FA)

不支持平台：iOS。

类型：[InputStream](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_interfaces#interface-inputstream)

示例：
    
    
    import std.process.*
    
    main(): Int64 {
        // 创建一个子进程并获取其标准错误流
        let subprocess = launch("ls", ["/nonexistent"], stdErr: ProcessRedirect.Pipe)
        let stderrStream = subprocess.stdErrPipe
    
        // 等待子进程完成
        let exitCode = subprocess.wait()
    
        return 0
    }

#### [h2]prop stdIn (deprecated)
    
    
    public prop stdIn: OutputStream

功能：获取输出流，连接到子进程标准输入流。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e1/v3/9oSQUrgxSJimDv5Mm2V3YQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=28792617575DD28AE7114AD20EF9A727D569200ABC2931C61BA68DD612056B3D)

  * 不支持平台：iOS。
  * 未来版本即将废弃，使用 [stdInPipe](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-process_package_classes#prop-stdinpipe) 替代。



类型：[OutputStream](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_interfaces#interface-outputstream)

示例：
    
    
    import std.process.*
    
    main(): Int64 {
        // 创建一个子进程并获取其标准输入流（废弃API）
        let subprocess = launch("cat", [], stdIn: ProcessRedirect.Pipe)
        let stdinStream = subprocess.stdIn
    
        // 关闭子进程
        subprocess.terminate(force: true)
    
        return 0
    }

#### [h2]prop stdInPipe
    
    
    public prop stdInPipe: OutputStream

功能：获取输出流，连接到子进程标准输入流。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/99/v3/AWJSvX5LQJOjlABfDMajoQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=8B232EF1AD3A40ACF346167C16A84FC2276D12CD8E7DDA4DBCCFD4D17E9C653A)

不支持平台：iOS。

类型：[OutputStream](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_interfaces#interface-outputstream)

示例：
    
    
    import std.process.*
    
    main(): Int64 {
        // 创建一个子进程并获取其标准输入流
        let subprocess = launch("cat", [], stdIn: ProcessRedirect.Pipe)
        let stdinStream = subprocess.stdInPipe
    
        // 关闭子进程
        subprocess.terminate(force: true)
    
        return 0
    }

#### [h2]prop stdOut (deprecated)
    
    
    public prop stdOut: InputStream

功能：获取输入流，连接到子进程标准输出流。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/39/v3/pRM3Hcr4Rp64sny887cYxA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=338DEC4A1CE1AEF73F2690A92BE2C027C99C1DD18AD9D3F7AA9A67583D0D72D8)

  * 不支持平台：iOS。
  * 未来版本即将废弃，使用 [stdOutPipe](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-process_package_classes#prop-stdoutpipe) 替代。



类型：[InputStream](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_interfaces#interface-inputstream)

示例：
    
    
    import std.process.*
    
    main(): Int64 {
        // 创建一个子进程并获取其标准输出流（废弃API）
        let subprocess = launch("echo", ["Hello, World!"], stdOut: ProcessRedirect.Pipe)
        let stdoutStream = subprocess.stdOut
    
        // 等待子进程完成
        let exitCode = subprocess.wait()
    
        return 0
    }

#### [h2]prop stdOutPipe
    
    
    public prop stdOutPipe: InputStream

功能：获取输入流，连接到子进程标准输出流。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/0e/v3/LLxy9qIeRzekcwh3KCYkuw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=A8CEE96D147C316F65BEFCCE90FA0288304F84593B2FB12F685144EB463C0A92)

不支持平台：iOS。

类型：[InputStream](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_interfaces#interface-inputstream)

示例：
    
    
    import std.process.*
    
    main(): Int64 {
        // 创建一个子进程并获取其标准输出流
        let subprocess = launch("echo", ["Hello, World!"], stdOut: ProcessRedirect.Pipe)
        let stdoutStream = subprocess.stdOutPipe
    
        // 等待子进程完成
        let exitCode = subprocess.wait()
    
        return 0
    }

#### [h2]func wait(?Duration)
    
    
    public func wait(timeout!: ?Duration = None): Int64

功能：阻塞当前进程等待子进程任务执行完成并返回子进程退出状态码，允许指定等待超时时间。对于需要操作标准流的场景(Pipe 模式)，使用者需要优先处理标准流，避免子进程标准流缓冲区满后调用本函数产生死锁。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a0/v3/oe8otxkaQ2Se6zvw1DoZNQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=955B386EAA991471FB9516D862EFCD1D0FF62FBC50856126D66645477388E796)

不支持平台：iOS。

超时时间处理机制：

  * 未传参、 timeout 值为 None 或值小于等于 [Duration](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-duration).Zero 时，阻塞等待直至子进程执行返回。
  * timeout 值大于 [Duration](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-duration).Zero 时，阻塞等待子进程执行返回或等待超时后抛出超时异常。



参数：

  * timeout!: ?[Duration](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-duration) \- 命名可选参数，设置等待子进程超时时间，默认为 None。



返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 返回子进程退出状态。若子进程正常退出，返回子进程退出码，若子进程被信号杀死，返回导致子进程终止的信号编号。



异常：

  * [TimeoutException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-timeoutexception) \- 当等待超时，子进程未退出时，抛出异常。



示例：
    
    
    import std.process.*
    
    main(): Int64 {
        // 创建一个子进程并等待其完成
        let subprocess = launch("sleep", ["2s"])
    
        // 等待子进程完成
        let exitCode = subprocess.wait()
        println("子进程退出码: ${exitCode}")
    
        return 0
    }

运行结果：
    
    
    子进程退出码: 0

#### [h2]func waitOutput()
    
    
    public func waitOutput(): (Int64, Array<Byte>, Array<Byte>)

功能：阻塞当前进程等待子进程任务执行完成，并返回子进程退出状态码、返回结果(包含输出流和错误流返回结果)。输出流、错误流中包含大量输出的场景不适用于本函数，建议通过 [SubProcess](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-process_package_classes#class-subprocess) 中提供的标准流属性结合 wait 函数自行处理。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e5/v3/n7RgGFsrQJGT4_kiWuO9ew/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=E8EEC4EE77165455651D94C1617EFAF3DFE59482A9332F0B7D70B204B58B1F6F)

不支持平台：iOS。

返回值：

  * ([Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64), [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Byte](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-byte)>, [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Byte](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-byte)>) - 子进程执行返回结果，包含子进程退出状态（若子进程正常退出，返回子进程退出码，若子进程被信号杀死，返回导致子进程终止的信号编号），进程标准输出结果和进程错误结果。



异常：

  * [ProcessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-process_package_exceptions#class-processexception) \- 当子进程不存在，或者标准流读取异常时，抛出异常。



示例：
    
    
    import std.process.*
    
    main(): Int64 {
        // 创建一个子进程并等待其完成，同时获取输出
        let subprocess = launch("echo", ["Hello, World!"], stdOut: ProcessRedirect.Pipe, stdErr: ProcessRedirect.Pipe)
        println("子进程名称: ${subprocess.name}")
    
        // 等待子进程完成并获取输出
        let (exitCode, stdout, stderr) = subprocess.waitOutput()
        println("子进程退出码: ${exitCode}")
        println("标准输出字节数: ${stdout.size}")
        println("标准错误字节数: ${stderr.size}")
    
        return 0
    }

运行结果：
    
    
    子进程名称: echo
    子进程退出码: 0
    标准输出字节数: 14
    标准错误字节数: 0
