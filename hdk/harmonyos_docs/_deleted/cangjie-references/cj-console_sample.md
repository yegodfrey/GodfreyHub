---
name: cangjie-references/cj-console_sample
title: Console 示例
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-console_sample
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.console(deprecated) / 示例教程 / Console 示例
---

# Console 示例

下面是 Console 示例，示例中接收用户输入的两条信息，并将这些信息通过标准输出原样返回给用户。

示例：
    
    
    import std.console.*
    
    main() {
        Console.stdOut.write("请输入信息1：")
        var c = Console.stdIn.readln() // 输入：你好，请问今天星期几？
        var r = c.getOrThrow()
        Console.stdOut.writeln("输入的信息1为：" + r)
    
        Console.stdOut.write("请输入信息2：")
        c = Console.stdIn.readln() // 输入：你好，请问今天几号？
        r = c.getOrThrow()
        Console.stdOut.writeln("输入的信息2为：" + r)
    
        return
    }

运行结果：
    
    
    请输入信息1：你好，请问今天星期几？
    输入的信息1为：你好，请问今天星期几？
    请输入信息2：你好，请问今天几号？
    输入的信息2为：你好，请问今天几号？
