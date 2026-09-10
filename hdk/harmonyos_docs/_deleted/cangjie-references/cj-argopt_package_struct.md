---
name: cangjie-references/cj-argopt_package_struct
title: 结构体
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-argopt_package_struct
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.argopt / 结构体
---

# 结构体

#### struct ParsedArguments
    
    
    public struct ParsedArguments {}

功能：存储参数解析的结果。

#### [h2]prop nonOptions
    
    
    public prop nonOptions: Array<String>

功能：存储参数解析得到的非选项。

类型：[Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)>

示例：
    
    
    import std.argopt.*
    
    main(): Unit {
        // 通过解析函数获取ParsedArguments实例
        let helpSpec = ArgumentSpec.Short(r'h', ArgumentMode.NoValue)
        let outputSpec = ArgumentSpec.Long("output", ArgumentMode.RequiredValue)
        let specs = [helpSpec, outputSpec]
        let args = ["-h", "--output", "output.txt", "file1.txt", "file2.txt"]
    
        let parsedResult = parseArguments(args, specs)
    
        // 访问nonOptions属性
        println("解析后的nonOptions: ${parsedResult.nonOptions}")
        println("nonOptions大小: ${parsedResult.nonOptions.size}")
    
        // 遍历nonOptions
        println("所有非选项参数:")
        for (nonOption in parsedResult.nonOptions) {
            println("  ${nonOption}")
        }
    }

运行结果：
    
    
    解析后的nonOptions: [file1.txt, file2.txt]
    nonOptions大小: 2
    所有非选项参数:
      file1.txt
      file2.txt

#### [h2]prop options
    
    
    public prop options: ReadOnlyMap<String, String>

功能：存储参数解析得到的选项。

类型：[ReadOnlyMap](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_interface#interface-readonlymapk-v)<[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string), [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)>

示例：
    
    
    import std.argopt.*
    
    main(): Unit {
        // 通过解析函数获取ParsedArguments实例
        let helpSpec = ArgumentSpec.Short(r'h', ArgumentMode.NoValue)
        let outputSpec = ArgumentSpec.Long("output", ArgumentMode.RequiredValue)
        let verboseSpec = ArgumentSpec.Short(r'v', ArgumentMode.OptionalValue)
        let specs = [helpSpec, outputSpec, verboseSpec]
        let args = ["-h", "--output", "output.txt", "-v", "file1.txt"]
    
        let parsedResult = parseArguments(args, specs)
    
        // 访问options属性
        println("解析后的options大小: ${parsedResult.options.size}")
    
        // 检查特定选项是否存在
        if (parsedResult.options.contains("h")) {
            println("包含帮助选项h")
        }
    
        if (parsedResult.options.contains("output")) {
            println("output选项的值: ${parsedResult.options["output"]}")
        }
    
        if (parsedResult.options.contains("v")) {
            println("verbose选项的值: '${parsedResult.options["v"]}'")
        }
    
        // 遍历所有选项
        println("所有选项:")
        for (key in parsedResult.options.keys()) {
            println("  ${key}: '${parsedResult.options[key]}'")
        }
    }

运行结果：
    
    
    解析后的options大小: 3
    包含帮助选项h
    output选项的值: output.txt
    verbose选项的值: ''
    所有选项:
      h: ''
      output: 'output.txt'
      v: ''
