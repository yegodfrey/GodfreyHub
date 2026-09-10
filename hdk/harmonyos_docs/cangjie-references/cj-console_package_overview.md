---
name: cangjie-references/cj-console_package_overview
title: std.console(deprecated)
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-console_package_overview
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.console(deprecated)
---

# std.console(deprecated)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4f/v3/AzdS_HMYQKS83hhakOnzlA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090201Z&HW-CC-Expire=86400&HW-CC-Sign=EFA4CA8C8B00280482C130EE7AAE2DB767F61940A62F801C0C481AA5F40FD520)

未来版本即将废弃，可使用 env 包替代。

#### 功能介绍

console 包提供和标准输入、标准输出、标准错误进行交互的方法。

本包提供 [Console](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-console_package_class#class-console-deprecated) 类，用于获取这三个标准流。

  * [ConsoleReader](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-console_package_class#class-consolereader-deprecated) 封装了标准输入流的相关功能，可以通过相关的 read 方法从标准输入中读取数据。
  * [ConsoleWriter](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-console_package_class#class-consolewriter-deprecated) 封装了标准输出、标准错误流的相关功能，[ConsoleWriter](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-console_package_class#class-consolewriter-deprecated) 封装了一系列的 write 方法，提供了向标准输出、标准错误写入数据的能力。



标准输入（stdin）、标准输出（stdout）和标准错误（stderr）是计算机操作系统中常见的三个流。

标准输入是程序从用户获取输入数据的流，通常是键盘输入。标准输出是程序向用户输出结果的流，通常是屏幕输出。标准错误是程序在发生错误时输出错误信息的流，通常也是屏幕输出。

在 Unix/Linux 系统中，标准输入、标准输出和标准错误分别对应文件描述符 0、1 和 2。程序可以使用这些文件描述符来读取和写入数据。例如，可以使用重定向符号将标准输出重定向到文件中，或将标准错误输出重定向到另一个程序的标准输入中。

#### API 列表

#### [h2]类

类名 | 功能  
---|---  
[Console](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-console_package_class#class-console-deprecated) | 提供标准输入、标准输出和标准错误 Stream 的获取接口。  
[ConsoleReader](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-console_package_class#class-consolereader-deprecated) | 提供从标准输入读取字符或者字符串的功能。  
[ConsoleWriter](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-console_package_class#class-consolewriter-deprecated) | 提供向标准输出或者标准错误流写入字符或者字符串的功能。  
  
  * **[类](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-console_package_class)**  

  * **[示例教程](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-console-samples)**  



