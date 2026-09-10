---
name: cangjie-references/cj-env_package_funcs
title: 函数
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-env_package_funcs
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.env / 函数
---

# 函数

#### func atExit(() -> Unit)
    
    
    public func atExit(callback: () -> Unit): Unit

功能：注册回调函数，当前进程退出时执行注册函数。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/db/v3/V8EYwCghQlWAzTPeDMSzSg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111704Z&HW-CC-Expire=86400&HW-CC-Sign=E4AA639457599EE20000DDD928EB06A1AB15FF3D5D07C4F726670E6B8FEB819F)

请不要使用 C 语言 atexit 函数，避免出现非预期问题。

参数：

  * callback: () ->[Unit](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#unit) \- 需要被注册回调的函数。



示例：
    
    
    import std.env.*
    
    var globalVar: Int64 = 0
    
    func cleanup() {
        globalVar = 100
        println("Cleanup function called. GlobalVar is now: ${globalVar}")
    }
    
    main() {
        // 注册退出回调函数
        atExit(cleanup)
    
        println("Main function ending")
    }

运行结果：
    
    
    Main function ending
    Cleanup function called. GlobalVar is now: 100

#### func exit(Int64)
    
    
    public func exit(code: Int64): Nothing

功能：立即终止当前进程，并返回指定的退出状态码。

参数：

  * code: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 当前进程退出状态码。



示例：
    
    
    import std.env.*
    
    main() {
        println("Program started")
    
        // 正常退出程序，返回状态码0
        exit(0)
    
        // 这行代码不会被执行
        println("This line will not be printed")
    }

运行结果：
    
    
    Program started

#### func getCommand()
    
    
    public func getCommand(): String

功能：获取进程命令。

返回值：

  * [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 当前进程命令。



异常：

  * [EnvException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-env_package_exceptions#class-envexception) \- 当进程不存在或对应进程为僵尸进程，无法获取进程名时，抛出异常。



示例：
    
    
    import std.env.*
    
    main() {
        // 获取当前进程命令
        let command = getCommand()
    
        println("Current process command: ${command}")
    }

可能的运行结果：
    
    
    Current process command: ./getcommand_example

#### func getCommandLine()
    
    
    public func getCommandLine(): Array<String>

功能：获取当前进程命令行。对于 Windows 平台，只能获取当前进程的命令行，其他场景下无法在非特权 API 下获取到本属性。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/af/v3/bVJB47i1Rp-XptuKeHEDTg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111704Z&HW-CC-Expire=86400&HW-CC-Sign=0C6CA0549EF73B96B760C4DCFA014A124982DF8B85197C8FF81C5EC4058CEF55)

不支持平台：iOS。

返回值：

  * [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)> \- 当前进程命令行。



异常：

  * [EnvException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-env_package_exceptions#class-envexception) \- 当进程不存在、对应进程为僵尸进程或在其他不支持的场景下无法获取进程命令行时，抛出异常。



示例：
    
    
    import std.env.*
    
    main() {
        // 获取当前进程命令行
        let commandLine = getCommandLine()
    
        println("Command line arguments:")
        for (arg in commandLine) {
            println("  ${arg}")
        }
    }

可能的运行结果：
    
    
    Command line arguments:
      ./getcommandline_example
      arg1
      arg2

#### func getHomeDirectory()
    
    
    public func getHomeDirectory(): Path

功能：获取当前进程 home 目录的路径。

返回值：

  * [Path](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-fs_package_structs#struct-path) \- 当前进程 home 目录的路径。



示例：
    
    
    import std.env.*
    
    main() {
        // 获取当前进程home目录的路径
        let homeDir = getHomeDirectory()
    
        println("Home directory: ${homeDir}")
    }

可能的运行结果：
    
    
    Home directory: /home/user

#### func getProcessId()
    
    
    public func getProcessId(): Int64

功能：获取当前进程 id。

返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 当前进程 id。



示例：
    
    
    import std.env.*
    
    main() {
        // 获取当前进程ID
        let pid = getProcessId()
    
        println("Current process ID: ${pid}")
    }

可能的运行结果：
    
    
    Current process ID: 3658549

#### func getStdErr()
    
    
    public func getStdErr(): ConsoleWriter

功能：获取当前进程标准错误流。

返回值：

  * [ConsoleWriter](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-env_package_classes#class-consolewriter) \- 进程标准错误流。



示例：
    
    
    import std.env.*
    
    main() {
        // 获取标准错误流
        let stderr = getStdErr()
    
        // 向标准错误流写入信息
        stderr.write("This is an error message")
        stderr.writeln(" with a newline")
    }

运行结果：
    
    
    This is an error message with a newline

#### func getStdIn()
    
    
    public func getStdIn(): ConsoleReader

功能：获取当前进程标准输入流。

返回值：

  * [ConsoleReader](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-env_package_classes#class-consolereader) \- 进程标准输入流。



示例：
    
    
    import std.env.*
    
    main() {
        // 获取标准输入流
        let stdin = getStdIn()
    
        // 获取标准输出流
        let stdout = getStdOut()
    
        stdout.write("Please enter your name: ")
    
        // 从标准输入流读取一行，需要手动输出名字，这里输入zhangsan
        let name = stdin.readln()
    
        match (name) {
            case Some(n) => stdout.writeln("Hello, ${n}!")
            case None => stdout.writeln("No input received.")
        }
    }

运行结果：
    
    
    Please enter your name: zhangsan
    Hello, zhangsan!

#### func getStdOut()
    
    
    public func getStdOut(): ConsoleWriter

功能：获取当前进程标准输出流。

返回值：

  * [ConsoleWriter](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-env_package_classes#class-consolewriter) \- 进程标准输出流。



示例：
    
    
    import std.env.*
    
    main() {
        // 获取标准输出流
        let stdout = getStdOut()
    
        // 向标准输出流写入信息
        stdout.write("Hello, ")
        stdout.writeln("World!")
    }

运行结果：
    
    
    Hello, World!

#### func getTempDirectory()
    
    
    public func getTempDirectory(): Path

功能：获取当前进程临时目录的路径。从环境变量中获取 TMPDIR、TMP、TEMP 和 TEMPDIR 环境变量。如果以上值在环境变量中均不存在，则默认返回 /tmp 目录。

返回值：

  * [Path](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-fs_package_structs#struct-path) \- 当前进程临时目录的路径。



示例：
    
    
    import std.env.*
    
    main() {
        // 获取当前进程临时目录的路径
        let tempDir = getTempDirectory()
    
        println("Temporary directory: ${tempDir}")
    }

可能的运行结果：
    
    
    Temporary directory: /tmp

#### func getVariable(String)
    
    
    public func getVariable(key: String): ?String

功能：获取当前进程指定名称的环境变量值。

参数：

  * key: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 指定名称。



返回值：

  * ?[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 当前进程指定名称的环境变量值。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当函数参数 key 包含空字符时，抛出异常。



示例：
    
    
    import std.env.*
    
    main() {
        // 获取PATH环境变量的值
        let path = getVariable("PATH")
    
        match (path) {
            case Some(p) => println("PATH environment variable: ${p}")
            case None => println("PATH environment variable not found")
        }
    
        // 尝试获取一个不存在的环境变量
        let nonexistent = getVariable("NONEXISTENT_VAR")
    
        match (nonexistent) {
            case Some(value) => println("NONEXISTENT_VAR: ${value}")
            case None => println("NONEXISTENT_VAR not found")
        }
    }

可能的运行结果：
    
    
    PATH environment variable: /home/user/cangjie/bin:/home/user/cangjie/tools/bin:...
    NONEXISTENT_VAR not found

#### func getVariables()
    
    
    public func getVariables(): Array<(String, String)>

功能：获取当前进程环境变量。对于 Windows 平台，只能获取当前进程的环境变量，其他场景下无法在非特权 API 下获取到本属性。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/52/v3/iKUTYk2mRtOXrfAFuHQQtA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111704Z&HW-CC-Expire=86400&HW-CC-Sign=8E7DC4E73313E838538E71E15648A23008DF695AB5CF5F1828F62AF4DD07EC9F)

不支持平台：iOS。

返回值：

  * [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<([String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string), [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string))> \- 当前进程环境变量。



异常：

  * [EnvException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-env_package_exceptions#class-envexception) \- 当进程不存在、对应进程为僵尸进程或在其他不支持的场景下无法获取进程环境变量时，抛出异常。



示例：
    
    
    import std.env.*
    
    main() {
        // 获取当前进程的所有环境变量
        let variables = getVariables()
    
        println("Environment variables:")
        for ((key, value) in variables) {
            // 只打印前几个环境变量以避免输出过长
            if (key == "PATH" || key == "HOME" || key == "USER") {
                println("  ${key}: ${value}")
            }
        }
    
        println("Total number of environment variables: ${variables.size}")
    }

可能的运行结果：
    
    
    Environment variables:
      HOME: /home/user
      USER: user
      PATH: /home/user/cangjie/bin:/home/user/cangjie/tools/bin:...
    Total number of environment variables: 37

#### func getWorkingDirectory()
    
    
    public func getWorkingDirectory(): Path

功能：获取当前进程工作路径。对于 Windows 平台，只能获取当前进程的工作路径，其他场景下无法在非特权 API 下获取到本属性。

返回值：

  * [Path](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-fs_package_structs#struct-path) \- 当前进程工作路径。



异常：

  * [EnvException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-env_package_exceptions#class-envexception) \- 当进程不存在、对应进程为僵尸进程或在其他不支持的场景下无法获取进程工作路径时，抛出异常。



示例：
    
    
    import std.env.*
    
    main() {
        // 获取当前进程工作路径
        let workingDir = getWorkingDirectory()
    
        println("Working directory: ${workingDir}")
    }

可能的运行结果：
    
    
    Working directory: /home/user/...

#### func removeVariable(String)
    
    
    public func removeVariable(key: String): Unit

功能：通过指定环境变量名称移除环境变量。

参数：

  * key: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 环境变量名称。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当函数参数 key 包含空字符时，抛出异常。

  * [EnvException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-env_package_exceptions#class-envexception) \- 当移除环境变量失败时，抛出异常。




示例：
    
    
    import std.env.*
    
    main() {
        // 先设置一个环境变量
        setVariable("TEST_VAR", "test_value")
    
        // 验证环境变量已设置
        let value = getVariable("TEST_VAR")
        match (value) {
            case Some(v) => println("Before removal - TEST_VAR: ${v}")
            case None => println("Before removal - TEST_VAR not found")
        }
    
        // 移除环境变量
        removeVariable("TEST_VAR")
    
        // 验证环境变量已移除
        let valueAfter = getVariable("TEST_VAR")
        match (valueAfter) {
            case Some(v) => println("After removal - TEST_VAR: ${v}")
            case None => println("After removal - TEST_VAR not found")
        }
    }

运行结果：
    
    
    Before removal - TEST_VAR: test_value
    After removal - TEST_VAR not found

#### func setVariable(String, String)
    
    
    public func setVariable(key: String, value: String): Unit

功能：用于设置一对环境变量。如果设置了同名环境变量，原始环境变量值将被覆盖。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/db/v3/GAaFRD8hTlOgaKtq58ln9w/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111704Z&HW-CC-Expire=86400&HW-CC-Sign=23D2257BF3F6B29A069A9ABF671866A45D443FD51584B9783E65EBC66AA316E9)

Windows 下如果传入的参数 value 是空字符串，那么会从环境中移除变量 key。

参数：

  * key: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 环境变量名称。
  * value: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 环境变量值。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当函数参数 key 或 value 中包含空字符时，抛出异常。

  * [EnvException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-env_package_exceptions#class-envexception) \- 当设置环境变量失败时，抛出异常。




示例：
    
    
    import std.env.*
    
    main() {
        // 设置一个环境变量
        setVariable("MY_VAR", "my_value")
    
        // 验证环境变量已设置
        let value = getVariable("MY_VAR")
        match (value) {
            case Some(v) => println("MY_VAR: ${v}")
            case None => println("MY_VAR not found")
        }
    
        // 修改环境变量的值
        setVariable("MY_VAR", "new_value")
    
        // 验证环境变量已更新
        let newValue = getVariable("MY_VAR")
        match (newValue) {
            case Some(v) => println("MY_VAR after update: ${v}")
            case None => println("MY_VAR not found")
        }
    }

运行结果：
    
    
    MY_VAR: my_value
    MY_VAR after update: new_value
