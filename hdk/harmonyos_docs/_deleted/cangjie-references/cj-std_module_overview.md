---
name: cangjie-references/cj-std_module_overview
title: 仓颉编程语言标准库概述
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-std_module_overview
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / 仓颉编程语言标准库概述
---

# 仓颉编程语言标准库概述  
  
仓颉编程语言标准库（std）是安装仓颉 SDK 时默认自带的库。标准库预先定义了一组函数、类、结构体等，旨在提供常用的功能和工具，以便开发者能够更快速、更高效地编写程序。

仓颉标准库有其三项特点和追求：

  * 使用方便：标准库随编译器、工具链一起发布，不需要用户另外下载，开箱即用。
  * 功能通用：标准库提供了开发者最常使用的一些库能力，旨在为开发者解决大部分基础问题。
  * 质量标杆：标准库追求在性能、代码风格等方面为其他仓颉库树立范例和标杆。



#### 平台支持说明

标准库提供的 API 支持在如下操作系统上运行：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/01/v3/3LhL3j2nTFiNXa9irFDIIQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111652Z&HW-CC-Expire=86400&HW-CC-Sign=698432B8BB3FED88B6B19FA9698C1279D28CCC7836D44CB5D0FA803C883B984C)

部分 API 不支持在特定的操作系统运行，详情请参见对应 API 描述。

操作系统 | CPU 架构 | 环境及其版本要求  
---|---|---  
Linux | x86_64 | glibc 2.22；Linux Kernel 4.12 或更高版本；系统安装 libstdc++ 6.0.24 或更高版本  
Linux | aarch64 | glibc 2.27；Linux Kernel 4.15 或更高版本；系统安装 libstdc++ 6.0.24 或更高版本  
Windows | x86_64 | Windows 10 或更高版本  
macOS | aarch64 | macOS 12.0 或更高版本  
HarmonyOS | aarch64 | HarmonyOS 5.1 或更高版本  
HarmonyOS | arm32 | HarmonyOS 5.1 或更高版本  
HarmonyOS | aarch64 | HarmonyOS 5.1 或更高版本  
iOS | aarch64 | iOS 11 或更高版本（ast 库需要 iOS 12 或更高版本）  
Android | aarch64 | Android API 26 或更高版本  
  
#### 使用指导

在仓颉编程语言中，标准库包含了若干包（package），而包是编译的最小单元。每个包可以单独输出 AST（Abstract Syntax Trees，抽象语法树）文件、静态库文件、动态库文件等产物。包可以定义子包，从而构成树形结构。没有父包的包称为 root 包，root 包及其子包（包括子包的子包）构成的整棵树称为模块（module）。模块的名称与 root 包相同，是开发者发布的最小单元。

包的导入规则如下：

  * 可以导入某个包中的一个顶层声明或定义，语法如下：
        
        import fullPackageName.itemName

其中 fullPackageName 为完整路径包名，itemName 为声明的名字，例如：
        
        import std.collection.ArrayList

  * 如果要导入的多个 itemName 同属于一个 fullPackageName，可以使用：
        
        import fullPackageName.{itemName[, itemName]*}

例如：
        
        import std.collection.{ArrayList, HashMap}

  * 还可以将 fullPackageName 包中所有 public 修饰的顶层声明或定义全部导入，语法如下：
        
        import fullPackageName.*

例如：
        
        import std.collection.*




#### 包列表

std 含若干包，提供丰富的基础功能：

包名 | 功能  
---|---  
[core](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_overview) | core 包是标准库的核心包，提供了适用仓颉语言编程最基本的一些 API 能力。  
[argopt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-argopt_package_overview) | argopt 包提供从命令行参数字符串解析出参数名和参数值的相关能力。  
[ast](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_overview) | ast 包主要包含了仓颉源码的语法解析器和仓颉语法树节点，提供语法解析函数。  
[binary](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-binary_package_overview) | binary 包提供了基础数据类型和二进制字节数组的不同端序转换接口，以及端序反转接口。  
[collection](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_overview) | collection 包提供了常见数据结构的高效实现、相关抽象的接口的定义以及在集合类型中常用的函数功能。  
[collection.concurrent](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_concurrent_package_overview) | collection.concurrent 包提供了并发安全的集合类型实现。  
[console](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-console_package_overview) | console 包提供和标准输入、标准输出、标准错误进行交互的方法。  
[convert](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-convert_package_overview) | convert 包提供从字符串转到特定类型的 Convert 系列函数以及提供格式化能力，主要为将仓颉类型实例转换为格式化字符串。  
[crypto.cipher](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-cipher_package_overview) | crypto.cipher 包提供对称加解密通用接口。  
[crypto.digest](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-digest_package_overview) | crypto.digest 包提供常用摘要算法的通用接口，包括 MD5、SHA1、SHA224、SHA256、SHA384、SHA512、HMAC、SM3。  
[database.sql](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-database_sql_package_overview) | database.sql 包提供仓颉访问数据库的接口。  
[deriving](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-deriving_package_overview) | deriving 包提供一组宏来自动生成接口实现。  
[env](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-env_package_overview) | env 包提供当前进程的相关信息与功能、包括环境变量、命令行参数、标准流、退出程序。  
[fs](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-fs_package_overview) | fs（file system）包提供对文件、文件夹、路径、文件元数据信息的一些操作函数。  
[io](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_overview) | io 包提供程序与外部设备进行数据交换的能力。  
[math](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_package_overview) | math 包提供常见的数学运算，常数定义，浮点数处理等功能。  
[math.numeric](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_overview) | math.numeric 包对基础类型可表达范围之外提供扩展能力。  
[net](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-net_package_overview) | net 包提供常见的网络通信功能。  
[objectpool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-objectpool_package_overview) | objectpool 包提供了对象缓存和复用的功能。  
[overflow](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-overflow_package_overview) | overflow 包提供了溢出处理相关能力。  
[posix](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_overview) | posix 包封装 POSIX 系统调用，提供跨平台的系统操作接口。  
[process](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-process_package_overview) | process 包主要提供 Process 进程操作接口，主要包括进程创建，标准流获取，进程等待，进程信息查询等。  
[random](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-random_package_overview) | random 包提供生成伪随机数的能力。  
[reflect](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_overview) | reflect 包提供了反射功能，使得程序在运行时能够获取到各种实例的类型信息，并进行各种读写和调用操作。  
[regex](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-regex_package_overview) | regex 包使用正则表达式分析处理文本的能力（支持 UTF-8 编码的 Unicode 字符串），支持查找、分割、替换、验证等功能。  
[runtime](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-runtime_package_overview) | runtime 包的作用是与程序的运行时环境进行交互，提供了一系列函数和变量，用于控制、管理和监视程序的执行。  
[sort](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sort_package_overview) | sort 包提供数组类型的排序函数。  
[sync](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sync_package_overview) | sync 包提供并发编程相关的能力。  
[time](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-time_package_overview) | time 包提供了与时间相关的类型，包括日期时间，时间间隔，单调时间和时区等，并提供了计算和比较的功能。  
[unicode](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unicode_package_overview) | unicode 包提供了按 unicode 编码标准处理字符的能力。  
[unittest](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_overview) | unittest 包用于编写仓颉项目单元测试代码，提供包括代码编写、运行和调测在内的基本功能。  
[unittest.mock](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_mock_package_overview) | unittest.mock 包提供仓颉单元测试的 mock 框架，提供 API 用于创建和配置 mock 对象，这些 mock 对象与真实对象拥有签名一致的 API 。  
[unittest.testmacro](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_testmacro_package_overview) | unittest.testmacro 为单元测试框架提供了用户所需的宏。  
[unittest.mock.mockmacro](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_mock_mockmacro_package_overview) | unittest.mock.mockmacro 为 mock 框架提供了用户所需的宏。  
[unittest.common](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_overview) | unittest.common 为单元测试框架提供了打印所需的类型和一些通用方法。  
[unittest.diff](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_diff_package_overview) | unittest.diff 为单元测试框架提供了打印差异对比信息所需的 API 。  
[unittest.prop_test](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_overview) | unittest.prop_test 为单元测试框架提供了参数化测试所需的类型和一些通用方法。
