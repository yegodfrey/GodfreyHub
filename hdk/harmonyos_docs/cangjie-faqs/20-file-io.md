---
name: cangjie-faqs/20-file-io
title: 仓颉语言如何进行文件读写操作
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/20-file-io
nodePath: FAQ / 标准库 / 仓颉语言如何进行文件读写操作
---

# 仓颉语言如何进行文件读写操作

仓颉语言通过std.fs包提供文件读写能力，支持一次性读写、流式读写和随机访问等多种方式。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f/v3/onZ8CUNgS9G38yCCGStWrw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T085436Z&HW-CC-Expire=86400&HW-CC-Sign=2C65A6250377AD56ED35F7E2E0AAE6190F9D3B0D0E38E09DC953D789D2B4401F)

在HarmonyOS应用环境中，应用运行在沙箱隔离机制下，只能访问应用专属目录。使用相对路径（如./test.txt）会报"Permission denied"错误。

须通过UIAbilityContext.filesDir获取应用文件目录路径。UIAbilityContext的获取，详见[UIAbilityContext使用说明](https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/01-api-context)。

#### 获取应用文件目录
    
    
    import ohos_app_cangjie_entry.global.Global
    
    let filesDir = Global.uiAbilityContext.filesDir // Global.uiAbilityContext主要用于存储UIAbilityContext。Global在ohos_app_cangjie_entry.global包中定义
    let path = Path(filesDir + "/test.txt")

#### 一次性读写

File.readFrom和File.writeTo适合小文件场景：

调用示例：
    
    
    import std.fs.*
    import kit.PerformanceAnalysisKit.Hilog
    import ohos_app_cangjie_entry.global.Global
    
    public func testFileReadWrite(): Unit {
        let filesDir = Global.uiAbilityContext.filesDir // Global.uiAbilityContext主要用于存储UIAbilityContext。Global在ohos_app_cangjie_entry.global包中定义
        let path = Path(filesDir + "/test.txt")
    
        try {
            File.writeTo(path, "Hello Cangjie".toArray())
    
            let data = File.readFrom(path)
            Hilog.info(0, "Cangjie Test", String.fromUtf8(data))
        } finally {
            removeIfExists(path)
        }
    }

调用testFileReadWrite，日志输出结果：
    
    
    Hello Cangjie

#### 流式读写

使用File对象配合打开模式进行流式读写。由于File实现了Resource接口，应使用try-with-resources语法自动关闭文件资源：

调用示例：
    
    
    import std.fs.*
    import std.io.*
    import kit.PerformanceAnalysisKit.Hilog
    import ohos_app_cangjie_entry.global.Global
    
    public func testFileStream(): Unit {
        let filesDir = Global.uiAbilityContext.filesDir // Global.uiAbilityContext主要用于存储UIAbilityContext。Global在ohos_app_cangjie_entry.global包中定义
        let path = Path(filesDir + "/test.txt")
    
        try {
            try (f = File(path, Write)) {
                f.write("First line\n".toArray())
            }
    
            try (f = File(path, Append)) {
                f.write("Second line\n".toArray())
            }
    
            try (f = File(path, Read)) {
                let all = readToEnd(f)
                Hilog.info(0, "Cangjie Test", String.fromUtf8(all))
            }
        } finally {
            removeIfExists(path)
        }
    }

调用testFileStream，日志输出结果：
    
    
    First line
    Second line

#### 打开模式说明

模式 | 行为  
---|---  
Read | 只读，文件不存在抛异常  
Write | 只写，存在则截断，不存在则创建  
Append | 追加写，不存在则创建  
ReadWrite | 读写，不存在则创建，不截断  
  
#### 应用沙箱目录说明

HarmonyOS应用通过UIAbilityContext.filesDir获取应用文件目录：

属性 | 获取方式 | 说明  
---|---|---  
filesDir | Global.uiAbilityContext.filesDir | 应用通用文件目录，存放持久化文件  
  
![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b2/v3/9l3wAfB5QXCrZ02TP7JwPQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T085436Z&HW-CC-Expire=86400&HW-CC-Sign=4D2312B9EB2009059ACA2F7EDC8EA12F282CA3543F5D582C7441EF44B93FFCA4)

  1. HarmonyOS应用只能访问自己的沙箱目录，使用相对路径或非沙箱路径会报权限错误。
  2. filesDir目录下的文件随应用卸载而清理。



更多文件操作的使用方法，详情请参见[std.fs](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-fs_package_overview)
