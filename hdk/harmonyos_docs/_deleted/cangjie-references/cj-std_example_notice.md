---
name: cangjie-references/cj-std_example_notice
title: 示例使用须知
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-std_example_notice
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / 示例使用须知
---

# 示例使用须知  
  
#### 概述

本章介绍仓颉编程语言标准库 API 文档中示例的注意事项，帮助开发者更好地使用标准库 API 实现应用开发。

仓颉编程语言标准库提供的 API 为通用 API，且为了开发者查看完整示例和结果，以便更好地使用标准库 API，仓颉标准库 API 文档中的示例按照语言通用示例方式写作，而不是在 DevEco Studio 中开发 HarmonyOS 应用时的方式写作。因此，在应用开发过程中，需要按照实际情况调用 API。

#### 示例改造说明

**说明：**

标准库 API 总体使用请参见[仓颉示例代码说明](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-development-intro#仓颉示例代码说明)，本章仅描述差异点。

标准库 API 文档示例和 HarmonyOS 应用开发示例主要有如下差异：

  * 标准库 API 文档示例以 main 函数作为主入口，HarmonyOS 应用开发时不需要 main 函数，请在模板工程中使用改造后的函数。
  * 标准库 API 文档示例使用 print、println 等函数打印信息，HarmonyOS 应用开发时可以使用 Hilog.info 打印信息。



以下给出具体示例：

  * 标准库 API 文档示例，使用 main 函数和 println 函数：
        
        import std.collection.ArrayList
        
        main() {
            var arr = ArrayList<String>(["Hello", "Cangjie!"])
            println(arr) // 使用 println 打印信息：[Hello, Cangjie!]
        }

  * 将上述示例转换为 HarmonyOS 应用开发时的示例如下：
        
        import kit.PerformanceAnalysisKit.Hilog // Hilog.info 需要的导包
        import std.collection.ArrayList
        
        func test() { // 注意点 1：main 函数改为普通函数名称，方便放入模板工程
            var arr = ArrayList<String>(["Hello", "Cangjie!"])
            Hilog.info(0, "test", arr.toString()) // 注意点 2： 信息打印由 println 改为 Hilog.info
        }




#### 权限说明

一般情况下，应用调用仓颉标准库 API 无需额外申请权限，但当应用调用网络请求等网络相关操作的 API 时（例如标准库中 [net](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-net_package_overview) 包提供的 API），需要声明对应网络权限，否则将导致网络相关功能无法正常使用。

所需权限：ohos.permission.INTERNET

权限配置方式：

  1. 找到模块配置文件 module.json5。该文件所在目录为“工程名称/模块名称（例如entry）/src/main/module.json5”，即在“index.cj”、“main_ability.cj”、“ability_stage.cj”文件的上层目录中。

  2. 在对应模块配置文件 module.json5 的 module 属性下添加 requestPermissions 属性相关配置，格式如下：
         
         {
           "module": {
             "name": "entry",
             // 此处省略其他配置，请根据实际情况处理
             "requestPermissions": [
               {
                 "name": "ohos.permission.INTERNET"
                 // 此处省略其他配置，请根据实际情况处理
               }
             ]
             // 此处省略其他配置，请根据实际情况处理
           }
         }



