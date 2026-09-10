---
name: cangjie-references/cj-fs_package_overview
title: std.fs
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-fs_package_overview
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.fs
---

# std.fs

#### 功能介绍

fs（file system）包提供对文件、文件夹、路径、文件元数据信息的一些操作函数。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/51/v3/mQVK3S3xTditk3cvYP9DLg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090203Z&HW-CC-Expire=86400&HW-CC-Sign=51D308F9EC616BC1BF70F90331925DAC9C31184F1CB5DCE86C37A8E9DB460189)

仅能对有相应权限的文件，目录或其他相关信息做出操作，例如: iOS 由于沙盒机制的原因，系统仅允许对应用的 Documents, Library, tmp 等目录下的文件和文件夹进行操作。

#### API 列表

#### [h2]函数

函数名 | 功能  
---|---  
[canonicalize(Path)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-fs_package_funcs#func-canonicalizepath) | 将 [Path](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-fs_package_structs#struct-path) 实例规范化，获取绝对路径形式的规范化路径。  
[canonicalize(String)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-fs_package_funcs#func-canonicalizestring) | 用 path 字符串构造 [Path](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-fs_package_structs#struct-path) 实例，并进行规范化，获取绝对路径形式的规范化路径。  
[copy(Path, Path, Bool)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-fs_package_funcs#func-copypath-path-bool) | 实现文件系统的拷贝功能，用于于复制文件或目录。  
[copy(String, String, Bool)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-fs_package_funcs#func-copystring-string-bool) | 实现文件系统的拷贝功能，用于于复制文件或目录。  
[exists(Path)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-fs_package_funcs#func-existspath) | 判断目标地址是否存在。  
[exists(String)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-fs_package_funcs#func-existsstring) | 判断目标地址是否存在。  
[rename(Path, Path, Bool)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-fs_package_funcs#func-renamepath-path-bool) | 重命名文件。  
[rename(String, String, Bool)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-fs_package_funcs#func-renamestring-string-bool) | 重命名文件。  
[remove(Path, Bool)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-fs_package_funcs#func-removepath-bool) | 删除文件或目录。  
[remove(String, Bool)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-fs_package_funcs#func-removestring-bool) | 删除文件或目录。  
[removeIfExists(Path, Bool)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-fs_package_funcs#func-removeifexistspath-bool) | 判断目标是否存在，如果存在则删除。  
[removeIfExists(String, Bool)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-fs_package_funcs#func-removeifexistsstring-bool) | 判断目标是否存在，如果存在则删除。  
  
#### [h2]类

类名 | 功能  
---|---  
[Directory](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-fs_package_classes#class-directory) | 对应文件系统中的目录，它提供创建、查询属性以及遍历目录等能力。  
[File](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-fs_package_classes#class-file) | 提供一些对文件进行操作的函数，包括文件的打开、创建、关闭、文件的流式读写操作、查询属性以及一些其他函数。  
[HardLink](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-fs_package_classes#class-hardlink) | 提供处理文件系统硬链接相关接口。  
[SymbolicLink](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-fs_package_classes#class-symboliclink) | 提供处理文件系统符号链接相关接口。  
  
#### [h2]枚举

枚举名 | 功能  
---|---  
[OpenMode](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-fs_package_enums#enum-openmode) | 表示不同的文件打开模式。  
  
#### [h2]结构体

结构体名 | 功能  
---|---  
[FileDescriptor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-fs_package_structs#struct-filedescriptor) | 用于获取文件句柄信息。  
[FileInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-fs_package_structs#struct-fileinfo) | 对应文件系统中的文件元数据，提供一些文件属性的查询和设置等函数。  
[Path](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-fs_package_structs#struct-path) | 提供路径相关的函数。  
  
#### [h2]异常类

异常类名 | 功能  
---|---  
[FSException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-fs_package_exceptions#class-fsexception) | 文件流异常类，继承了 IO 流异常类。  
  
  * **[函数](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-fs_package_funcs)**  

  * **[类](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-fs_package_classes)**  

  * **[枚举](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-fs_package_enums)**  

  * **[结构体](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-fs_package_structs)**  

  * **[异常类](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-fs_package_exceptions)**  

  * **[示例教程](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-fs-samples)**  



