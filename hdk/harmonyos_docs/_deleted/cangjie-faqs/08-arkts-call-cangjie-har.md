---
name: cangjie-faqs/08-arkts-call-cangjie-har
title: 全量使用ArkTS开发的HAP依赖二进制格式的仓颉HAR，推送设备运行失败
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/08-arkts-call-cangjie-har
nodePath: FAQ / 跨语言互操作 / 全量使用ArkTS开发的HAP依赖二进制格式的仓颉HAR，推送设备运行失败
---

# 全量使用ArkTS开发的HAP依赖二进制格式的仓颉HAR，推送设备运行失败

#### 问题现象

全量使用ArkTS开发的HAP依赖二进制格式的仓颉HAR，推送设备运行失败。

#### 原因分析

二进制格式的仓颉HAR默认打包仓颉so和cjo产物，并且放在HAR包中libs/arm64-v8a/cjbins/package或libs/x86_64/cjbins/package包目录下，纯ArkTS HAP依赖仓颉二进制格式的HAR，最终HAP中仓颉的so产物也是在libs/arm64-v8a/cjbins/package或libs/x86_64/cjbins/package包目录下，这会导致应用运行时，找不到仓颉的so文件，运行失败。

#### 解决措施

请在仓颉HAR模块中配置文件build-profile.json5的cangjieOptions/flattenLibs值设置为true，仓颉二进制格式har将不打包cjo，只打包so，并且so平铺在libs/arm64-v8a或libs/x86_64目录下，配置示例如下：
    
    
    "buildOption": {  // 配置项目在构建过程中使用的相关配置
      "cangjieOptions": {   // 仓颉相关配置
        "path": "./cjpm.toml",   // cjpm配置文件路径，提供仓颉构建配置
        "flattenLibs": true   // 二进制格式har包中仓颉源码编译产物so是否平铺
      }
    }
