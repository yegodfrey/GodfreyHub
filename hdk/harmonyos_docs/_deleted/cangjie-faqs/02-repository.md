---
name: cangjie-faqs/02-repository
title: 如何搭建仓颉库私仓
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/02-repository
nodePath: FAQ / 工程构建 / 如何搭建仓颉库私仓
---

# 如何搭建仓颉库私仓

为了方便内部库共享，可以搭建私仓，将内部开发者开发的一些仓颉库，存放到私仓。仓颉库包括两类：

  * 不依赖于HarmonyOS的用cjpm管理的仓颉包。
  * 依赖于HarmonyOS API、UI组件的HarmonyOS应用的仓颉模块。



#### cjpm管理仓颉包的私仓

通过cjpm管理的仓颉包可以存储在任意git仓库中。

仓颉包的使用方式是在工程的配置文件cjpm.toml中添加依赖，详情请参见[如何使用cjpm以二进制的形式依赖三方库](https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/01-cjpm-dependencies-bytecode)和[如何使用cjpm以源码的形式依赖三方库](https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/02-cjpm-dependencies-source)。

#### ohpm私仓

HarmonyOS应用中的仓颉三方模块通常以HAR包的形式存储在ohpm私仓中。

ohpm私仓可以通过ohpm-repo工具进行搭建，搭建方法请参见[ohpm-repo私仓搭建工具](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-ohpm-repo)。

HAR包的使用方式是在工程的配置文件oh-package.json5中添加HAR包依赖，例如添加包名为@cangjie-tpc/markdown、版本为1.1.2的示例如下：
    
    
    {
        "dependencies": {
            "@cangjie-tpc/markdown": "^1.1.2"
        }
    }
