---
name: cangjie-faqs/02-cjpm-dependencies-source
title: 如何使用cjpm以源码的形式依赖三方库
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/02-cjpm-dependencies-source
nodePath: FAQ / 工具链 / 如何使用cjpm以源码的形式依赖三方库
---

# 如何使用cjpm以源码的形式依赖三方库

cjpm是仓颉语言的包管理工具，提供统一的编译入口，支持自定义编译命令。

cjpm.toml是cjpm的配置文件，支持配置仓颉模块的基础信息、依赖项、编译选项等。

cjpm.toml中dependencies字段用于配置通过源码方式导入的其他仓颉模块。该字段支持本地路径依赖和远程git依赖。

  * 本地源码路径依赖：

使用path字段指定源码路径，支持绝对路径和相对路径（相对cjpm.toml文件的路径）。该源码路径为一个cjpm管理的仓颉模块的路径，其根目录下必须包含cjpm.toml文件。

配置示例如下：
        
        [dependencies]
            [dependencies.library]
                path = "./library"

  * git远程仓库依赖：

使用git字段指定远程git仓库地址。另外可以通过branch、tag、commitId字段指定拉取的分支、标记、提交编号，若配置多个此类字段，仅优先级最高的配置项生效，优先级顺序为commitId>branch> tag。

配置示例如下：
        
        [dependencies]
            [dependencies.library]
                git = "git://xxx.git"
                branch = "master"




cjpm配置说明，详情请参见[CJPM介绍](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-cjpm_usage)。
