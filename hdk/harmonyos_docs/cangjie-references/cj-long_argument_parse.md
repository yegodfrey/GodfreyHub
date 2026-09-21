---
name: cangjie-references/cj-long_argument_parse
title: 长命令行参数解析 (deprecated)
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-long_argument_parse
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.argopt / 示例教程 / 长命令行参数解析 (deprecated)
---

# 长命令行参数解析 (deprecated)

示例：
    
    
    import std.argopt.*
    
    main() {
        let shortArgs: Array<String> = ["--test1=abc", "--test2=123", "--test3 xyz"]
        let shortArgName: String = ""
        let longArgName: Array<String> = ["--test1=", "test2=", "--test3="]
        let ao: ArgOpt = ArgOpt(shortArgs, shortArgName, longArgName)
        println(ao.getArg("--test1") ?? "None")
        println(ao.getArg("--test2") ?? "None")
        println(ao.getArg("--test3") ?? "None")
    }

运行结果：
    
    
    abc
    123
    None
