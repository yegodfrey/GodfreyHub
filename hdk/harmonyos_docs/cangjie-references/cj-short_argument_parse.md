---
name: cangjie-references/cj-short_argument_parse
title: 短命令行参数解析 (deprecated)
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-short_argument_parse
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.argopt / 示例教程 / 短命令行参数解析 (deprecated)
---

# 短命令行参数解析 (deprecated)

示例：
    
    
    import std.argopt.*
    
    main() {
        let shortArgs: Array<String> = ["-a123", "-bofo", "-cccc"]
        let shortArgName: String = "a:b:c"
        let longArgName: Array<String> = Array<String>()
        let ao: ArgOpt = ArgOpt(shortArgs, shortArgName, longArgName)
        println(ao.getArg("-a") ?? "None")
        println(ao.getArg("-b") ?? "None")
        println(ao.getArg("-c") ?? "None")
    }

运行结果：
    
    
    123
    ofo
    None
