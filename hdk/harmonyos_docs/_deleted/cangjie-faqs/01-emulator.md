---
name: cangjie-faqs/01-emulator
title: 模拟器安装仓颉应用报错：failed to install bundle. code:9568347
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/01-emulator
nodePath: FAQ / 工程构建 / 模拟器安装仓颉应用报错：failed to install bundle. code:9568347
---

# 模拟器安装仓颉应用报错：failed to install bundle. code:9568347

参考[使用模拟器运行应用](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-run-emulator)文档。

在使用x86模拟器时，仓颉工程及三方库需要编译出x86_64版本的so，请在配置文件build-profile.json5的cangjieOptions/abiFilters值中增加"x86_64"，配置示例如下：
    
    
    "buildOption": {  // 配置项目在构建过程中使用的相关配置
      "cangjieOptions": {   // 仓颉相关配置
        "path": "./cjpm.toml",   // cjpm配置文件路径，提供仓颉构建配置
        "abiFilters": ["arm64-v8a", "x86_64"]   // 自定义仓颉编译架构，默认编译架构为arm64-v8a
      }
    }
