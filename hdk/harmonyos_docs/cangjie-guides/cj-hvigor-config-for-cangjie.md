---
name: cangjie-guides/cj-hvigor-config-for-cangjie
title: 配置仓颉
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-hvigor-config-for-cangjie
nodePath: 构建应用 / 配置构建流程 / 配置仓颉
---

# 配置仓颉

hvigor集成的[cjpm](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-cjpm_manual)为仓颉代码的构建工具，在初始状态下，开发者无需额外配置。如果需要定制仓颉代码编译，开发者可通过以下配置添加自定义配置。

在模块级build-profile.json5中，存在以下配置项：
    
    
    {
      ...
      "buildOptionSet": [
        {
          "name": "release",
          "cangjieOptions": {   // 仓颉相关配置
            "path": "./cjpm.toml"   // cjpm配置文件路径，提供仓颉构建配置
          }
        }
      ],
      ...
    }
