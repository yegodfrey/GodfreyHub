---
name: cangjie-guides/cj-run-emulator
title: 使用模拟器运行应用
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-run-emulator
nodePath: 编写与调试应用 / 使用模拟器运行应用
---

# 使用模拟器运行应用

仓颉语言编写的HarmonyOS应用，支持在DevEco Studio提供的模拟器（Emulator）上运行，模拟器的具体介绍请参见[使用模拟器运行应用](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-run-emulator)。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/eb/v3/u6WSv23ASYecG22AFRvCjw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=BC9E339DECC84DF010A26E03C90EE2DA894675D5BE7EB18E3937051C59ABE8E3)

创建模拟器时，请根据HarmonyOS应用的实际情况配置模拟器的运行内存（Memory）或磁盘空间（Storage）的大小。运行内存或磁盘空间不足可能会引起模拟器崩溃。具体的模拟器创建操作请参见[创建模拟器](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-emulator-create)。

仓颉工程默认编译架构为arm64-v8a，因此在使用**x86模拟器** 时（即，当前开发环境为**Windows/x86_64** 或**macOS/x86_64** 时），仓颉工程及三方库需要编译出x86_64版本的so，请在配置文件build-profile.json5的cangjieOptions/abiFilters值中增加"x86_64"，配置示例如下：
    
    
    "buildOption": {  // 配置项目在构建过程中使用的相关配置
      "cangjieOptions": {   // 仓颉相关配置
        "path": "./cjpm.toml",   // cjpm配置文件路径，提供仓颉构建配置
        "abiFilters": ["arm64-v8a", "x86_64"]   // 自定义仓颉编译架构，默认编译架构为arm64-v8a
      }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4/v3/r0NPRYZtQ-yjgU6PL4oCug/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=65C291F6E1E5C254E64B8A0C6923C7B50457696E55B60DCD2EED7E02035BF1B0)

  * 配置项abiFilters表示本机的ABI编译环境（编译出来的应用可以在对应架构上运行），可选项包括：**arm64-v8a** 、**x86_64** 。如不配置该参数，编译时默认编译出arm64-v8a架构相关so。仓颉构建选项详情和仓颉工程中build-profile.json5的完整配置示例请参见[build-profile.json5](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-build_project_build_profile)。

  * 模拟器（Emulator）的管理和使用方法请参见[使用模拟器运行应用](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-run-emulator)。



