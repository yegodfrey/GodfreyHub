---
name: cangjie-faqs/01-cjpm-dependencies-bytecode
title: 如何使用cjpm以二进制的形式依赖三方库
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/01-cjpm-dependencies-bytecode
nodePath: FAQ / 工具链 / 如何使用cjpm以二进制的形式依赖三方库
---

# 如何使用cjpm以二进制的形式依赖三方库

cjpm是仓颉语言的包管理工具，提供统一的编译入口，支持自定义编译命令。

cjpm.toml是cjpm的配置文件，支持配置仓颉模块的基础信息、依赖项、编译选项等。

cjpm.toml中target.xxx.bin-dependencies字段用于指定二进制依赖，二进制依赖必须与特定编译目标平台绑定，xxx用于指定编译目标平台，如aarch64-linux-ohos（ARM64 HarmonyOS平台（真机））、x86_64-linux-ohos（x86 HarmonyOS平台（模拟器））。在该字段下，通过path-option数组指定依赖的二进制库路径。

配置示例如下：
    
    
    [target]
      [target.aarch64-linux-ohos]
        [target.aarch64-linux-ohos.bin-dependencies]
          path-option = [ "./bin/lib" ]

cjpm配置说明，详情请参见[CJPM介绍](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-cjpm_usage)。
