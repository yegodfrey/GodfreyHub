---
name: document/cn/guide/rust_editor-0000001684413665
title: Rust代码编辑
uri: https://developer.huawei.com/consumer/cn/doc/guide/rust_editor-0000001684413665
source: portal
---

# Rust代码编辑

从4.0 Release版本起，DevEco Device Tool支持OpenHarmony 4.0 Beta1及以上版本源码的Rust代码编辑，基于rust-analyzer插件，支持代码查找、关键字高亮、代码自动补齐、代码输入提示和代码检查等功能，方便开发者使用Rust开发OpenHarmony系统服务。

#### 前提条件

     * 已参考[搭建开发环境](https://device.harmonyos.com/cn/docs/documentation/guide/ide-install-windows-ubuntu-0000001194073744)，远程连接到Ubuntu环境。
     * 已[获取的OpenHarmony源码](https://gitee.com/openharmony/docs/blob/master/zh-cn/device-dev/get-code/sourcecode-acquire.md)。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20240930102409.52075648045330391974538140155038:50001231000000:2800:B51057DB39074BF7E9EBB53CD402AE2F5CE58AF09922A5631A40A4EBDD569BAB.png?needInitFileName=true?needInitFileName=true)

Rust编辑能力，当前仅在Windows+Ubuntu混合开发的环境中的远程环境（即Ubuntu环境的DevEco Device Tool）中支持。

#### 操作步骤

     1. 在Visual Studio Code的插件管理窗口，搜索“rust-analyzer”插件并安装。
     2. 参考[导入OpenHarmony源码](https://device.harmonyos.com/cn/docs/documentation/guide/open_project-0000001071680043)，在Ubuntu环境中创建所需工程。

“rust-analyzer”插件会自动判断导入的工程是否会使用Rust语言，判断为“是”时会自动执行“Reload Rust Project”命令，生成Rust工程所需配置文件“rust-project.json”。

     3. 按照需要对Rust文件（XXX.rs）进行编辑。
     4. 若开发者在新增/删除文件、新增/删除/更改函数等操作后，想实现代码的编辑跳转等功能，则需要点击“Reload Rust Project”按钮，重新生成“rust-project.json”文件。
