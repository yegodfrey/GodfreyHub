---
name: cangjie-guides/cj-application-package-install-uninstall
title: 应用安装卸载与更新开发指导
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-application-package-install-uninstall
nodePath: 基础入门 / 开发基础知识 / 应用程序包基础知识 / 应用程序包安装卸载与更新 / 应用安装卸载与更新开发指导
---

# 应用安装卸载与更新开发指导

本章节介绍应用程序包的安装卸载流程和两种更新方式。

#### 应用程序包的安装卸载

开发者可以通过调试命令安装和卸载应用，安装应用命令参考bm工具中的[install](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-bm-tool#安装命令install)，卸载应用命令参考bm工具中的[uninstall](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-bm-tool#卸载命令uninstall)，详情参考[编译发布与上架部署流程图](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-application-package-structure-stage#发布态包结构)。

**图1** 应用程序包安装和卸载流程（开发者）

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b8/v3/s9T9qzzASR2gBdlHuF6x9Q/zh-cn_image_0000002731378535.png?HW-CC-KV=V1&HW-CC-Date=20260903T111237Z&HW-CC-Expire=86400&HW-CC-Sign=4688D887331F2E0D6BFF2EF0845E63B4F1B635FF13376E535CF69E2D6E25FF38)

应用上架应用市场后，终端设备用户可在设备上通过应用市场安装和卸载应用。

**图2** 应用程序包安装和卸载流程（终端设备用户）

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f/v3/6kqjJIdKTLazhEzjmBEn2Q/zh-cn_image_0000002701819232.png?HW-CC-KV=V1&HW-CC-Date=20260903T111237Z&HW-CC-Expire=86400&HW-CC-Sign=8075F4AA59DCAF270CE1214383645034A587EA3BFD603F30BBE571909E6DDE0E)

#### 应用程序包的更新

对于开发者，应用程序包的更新，首先需要更新[app.json5配置文件](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-app-configuration-file)中的versionCode版本号字段，通过DevEco Studio打包后在应用市场发布，发布流程与首次发布一致。对于终端设备用户，新版本发布后，可以通过以下方式更新应用程序包。

  * 应用市场内更新：应用市场通知用户该应用有新版本，用户根据通知到应用市场（客户端）进行升级。


