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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e6/v3/LYj3GviUQsOR0mOZnaDOmw/zh-cn_image_0000002713558598.png?HW-CC-KV=V1&HW-CC-Date=20260908T090110Z&HW-CC-Expire=86400&HW-CC-Sign=0266191A08B82B54C68075FC16544A4116F91FDFF82BF82F8C2D66D89195095B)

应用上架应用市场后，终端设备用户可在设备上通过应用市场安装和卸载应用。

**图2** 应用程序包安装和卸载流程（终端设备用户）

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/dd/v3/Zx6FM8ATSYeH78zioR_ilw/zh-cn_image_0000002743197511.png?HW-CC-KV=V1&HW-CC-Date=20260908T090110Z&HW-CC-Expire=86400&HW-CC-Sign=7860F00F8ACCE7D9DD75D03A33CE67C4D19E7AB11E45D221A1408851D07836DB)

#### 应用程序包的更新

对于开发者，应用程序包的更新，首先需要更新[app.json5配置文件](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-app-configuration-file)中的versionCode版本号字段，通过DevEco Studio打包后在应用市场发布，发布流程与首次发布一致。对于终端设备用户，新版本发布后，可以通过以下方式更新应用程序包。

  * 应用市场内更新：应用市场通知用户该应用有新版本，用户根据通知到应用市场（客户端）进行升级。


