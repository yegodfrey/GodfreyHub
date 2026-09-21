---
name: cangjie-references/cj-process_package_overview
title: std.process
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-process_package_overview
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.process
---

# std.process

#### 功能介绍

process 包主要提供 Process 进程操作接口，主要包括进程创建，标准流获取，进程等待，进程信息查询等。

#### API 列表

#### [h2]函数

函数名 | 功能  
---|---  
[execute](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-process_package_funcs#func-executestring-arraystring-path-mapstring-string-processredirect-processredirectprocessredirect-duration) | 根据输入参数创建并运行一个子进程，等待该子进程运行完毕并返回子进程退出状态。  
[executeWithOutput](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-process_package_funcs#func-executewithoutputstring-arraystring-path-mapstring-string-processredirect-processredirect-processredirect) | 根据输入参数创建并运行一个子进程，等待该子进程运行完毕并返回子进程退出状态、标准输出和标准错误。  
[findProcess](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-process_package_funcs#func-findprocessint64) | 根据输入进程 id 绑定一个进程实例。  
[launch](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-process_package_funcs#func-launchstring-arraystring-path-mapstring-string-processredirect-processredirect-processredirect) | 根据输入参数创建并运行一个子进程，并返回一个子进程实例。  
  
#### [h2]类

类名 | 功能  
---|---  
[CurrentProcess (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-process_package_classes#class-currentprocess-deprecated) | 此类为当前进程类，继承 Process 类，提供对当前进程操作相关功能。  
[Process](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-process_package_classes#class-process) | 此类为进程类，提供进程操作相关功能。  
[SubProcess](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-process_package_classes#class-subprocess) | 此类为子进程类，继承 Process 类，提供对子进程操作相关功能。  
  
#### [h2]枚举

枚举名 | 功能  
---|---  
[ProcessRedirect](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-process_package_enums#enum-processredirect) | 用于在创建进程时设置子进程标准流的重定向模式。  
  
#### [h2]异常类

异常类名 | 功能  
---|---  
[ProcessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-process_package_exceptions#class-processexception) | process 包的异常类。  
  
  * **[函数](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-process_package_funcs)**  

  * **[类](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-process_package_classes)**  

  * **[枚举](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-process_package_enums)**  

  * **[异常类](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-process_package_exceptions)**  

  * **[示例教程](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-std-process-samples)**  



