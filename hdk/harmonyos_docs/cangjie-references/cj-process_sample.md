---
name: cangjie-references/cj-process_sample
title: 任意进程相关操作
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-process_sample
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.process / 示例教程 / 任意进程相关操作
---

# 任意进程相关操作

下面是任意进程相关操作示例，以下示例不支持 Windows 平台。

示例：
    
    
    import std.process.*
    
    main(): Int64 {
        let echoProcess: SubProcess = launch("sleep", "10s")
        let ofProcess: Process = findProcess(echoProcess.pid)
        println(ofProcess.pid)
        println(ofProcess.name)
        println(ofProcess.command)
        ofProcess.terminate(force: true)
        return 0
    }

运行结果可能如下：
    
    
    70753
    sleep
    sleep
