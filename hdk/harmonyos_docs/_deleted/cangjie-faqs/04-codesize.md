---
name: cangjie-faqs/04-codesize
title: 引入仓颉语言包体积有较大增加应该如何解决
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/04-codesize
nodePath: FAQ / 工程构建 / 引入仓颉语言包体积有较大增加应该如何解决
---

# 引入仓颉语言包体积有较大增加应该如何解决

#### 问题现象

引入仓颉语言后，为什么应用包体积会有比较大的增加？该如何解决？

#### 问题原因

产生这种问题的原因可能有以下2点：

1.仓颉语言直接编译成机器码，相较于编译成字节码的编程语言，同代码水平下会有较小的增加，这属于正常现象。

2.在包构建时引入了一些额外的内容，需要具体分析。

#### 解决方案

#### [h2]开启构建优化选项

HarmonyOS应用开发场景，仓颉代码会被编译成二进制（即一组.so文件），因此，可以使用DevEco Studio提供的二进制压缩功能，详情请参见[优化包体积大小的问题](https://developer.huawei.com/consumer/cn/doc/best-practices-V5/bpta-decrease_pakage_size-V5#section15826132851819)。

#### [h2]删除目标平台为x86的编译产物

为了让仓颉HAP包/HAR包能够在模拟器运行，一些工程一般会配置如下选项：
    
    
    ...
        "cangjieOptions": {
            "path": "./cjpm.toml",
            "abiFilters": ["arm64-v8a", "x86_64"]
        },
    ...

该选项会让工程打包时出现两份面向不同硬件平台的二进制，**请在构建工程时删除"x86_64"，或在构建流水线过程删除"x86_64"目录下二进制文件** 。

#### [h2]删除未使用的包导入

仓颉代码中，每个import的库会对应一个或一组.so文件并被打包进应用。编写仓颉代码使用import导入依赖库时，仅导入依赖库的最小集，从而避免将未使用的仓颉.so打包进应用，造成包体积增大。
