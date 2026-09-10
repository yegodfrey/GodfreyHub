---
name: cangjie-releases/cj-overview-602
title: 版本概览
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-releases/cj-overview-602
nodePath: 版本说明 / HarmonyOS 6.0.2(22)-仓颉 / 版本概览
---

# 版本概览  
  
欢迎开发者使用HarmonyOS仓颉版本。仓颉编程语言很高兴与万千开发者见面。仓颉编程语言作为一款面向全场景应用开发的现代编程语言，具有高效编程、安全可靠、轻松并发、卓越性能等特点。仓颉编程语言将助力您，使应用开发更高效、运行更流畅、编码更安全。

DevEco Studio-Cangjie Plugin 6.0.2 Beta版本是仓颉适配HarmonyOS 6.0.2(22)正式对外Beta发布的版本，提供了仓颉语言标准库、仓颉与ArkTS互操作、以及仓颉版HarmonyOS系统能力Kit、ArkUI等能力。开发者可以下载DevEco Studio 6.0.2 Release并安装DevEco Studio-Cangjie Plugin 6.0.2 Beta2，使用仓颉语言或仓颉语言与ArkTS语言互操作开发HarmonyOS应用程序。

HarmonyOS 6.0.2(22)版本提供的使用仓颉开发HarmonyOS应用的相关能力请参见[OS新增和增强特性](https://developer.huawei.com/consumer/cn/doc/cangjie-releases/cj-os-new-feature-602)。

版本配套资料请参见[指南](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-application-dev-prepare)和[API参考](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-development-intro)。

#### 版本信息

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/31/v3/Iry4NP1ITUu5qpN0exeWkw/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111752Z&HW-CC-Expire=86400&HW-CC-Sign=AE10CC2AE853941B4B7EC698C11563E2A8DF7D971EB03BA56DD2119A498340FD)

使用正确的配套关系进行应用开发可以获得更流畅的开发体验。

请在阅读版本更新和变更内容前，务必确认版本的配套关系是否与当前您所使用的开发套件是一致的。

#### [h2]6.0.2(22) 开发者套件配套信息

软件包 | 发布类型 | 版本号 | 发布时间  
---|---|---|---  
API版本 | Release | 6.0.2（22）  **注意** ：设备系统支持的API能力范围请以**API版本** 为准。 | 2026/1/21  
DevEco Studio | Release | DevEco Studio 6.0.2 Release (6.0.2.640) | 2026/1/21  
SDK | Release | HarmonyOS 6.0.2 Release SDK  基于OpenHarmony SDK Ohos_sdk_public 6.0.2.130 (API 22 Release) | 2026/1/21  
DevEco Studio-Cangjie Plugin | Beta | DevEco Studio-Cangjie Plugin 6.0.2 Beta2 | 2026/1/21  
  
![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9d/v3/p-NmIyyDTAehynFdm8tgBg/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111752Z&HW-CC-Expire=86400&HW-CC-Sign=8DDB5417273B8C8E7F3F42026C7A6E9964B3BC915B1C6A2D5C1CDBD695FF0FF8)

  * **API版本** 请在设备的“设置”中点击设备名称，进入“**关于本机** ”进行查询。
  * DevEco Studio版本请从DevEco Studio界面菜单选择“Help > About DevEco Studio”进行查询。
  * SDK内置在DevEco Studio，安装DevEco Studio时自动安装配套版本SDK。具体版本请从DevEco Studio界面菜单选择“Help > About HarmonyOS SDK”进行查询。
  * DevEco Studio-Cangjie Plugin版本请从插件管理界面“Settings > Plugins”进行查询。



#### 应用工程版本信息配置建议

应用工程中应当正确配置应用运行所依赖的SDK版本信息。

使用该版本开发的应用，其build-profile.json5配置项中关于版本的配置项建议如下：

build-profile.json5配置项 | 已开发应用： 配置建议 | 已开发应用： 配置示例 | 新启动开发应用  
---|---|---|---  
compileSdkVersion | 无需显性配置，编译时默认使用配套的SDK版本，即默认为：“compileSdkVersion”: “6.0.2(22)” | NA | 推荐使用6.0.2(22)进行新应用的开发。  
compatibleSdkVersion | 建议与工程升级前的compatibleSdkVersion保持一致 | 和升级前保持一致，如：“compatibleSdkVersion”: “6.0.2(22)” 当前仓颉开发插件为首版本提供，不涉及该配置使用。 | 推荐使用6.0.2(22)进行新应用的开发。  
targetSdkVersion | 推荐您适配新版本的最新变更，然后配置为：“targetSdkVersion”: “6.0.2(22)”。如果您期望延迟适配变更，可配置targetSdkVersion与工程升级前的targetSdkVersion一致。 | 1、应用适配变更，变更适配完成后配置为：“targetSdkVersion”: “6.0.2(22)” 2、应用暂不适配变更，需配置为工程升级前的值，如：“targetSdkVersion”: “6.0.2(22)” | 推荐使用6.0.2(22)进行新应用的开发。  
  
#### 历史Beta版本

#### [h2]6.0.2(22) Beta1

软件包 | 发布类型 | 版本号 | 发布时间  
---|---|---|---  
API版本 | Beta | 6.0.2（22）Beta1  **注意** ：设备系统支持的API能力范围请以**API版本** 为准。 | 2026/1/4  
DevEco Studio | Beta | DevEco Studio 6.0.2 Beta1 (6.0.2.636) | 2026/1/4  
SDK | Beta | HarmonyOS 6.0.2 Beta1 SDK  基于OpenHarmony SDK Ohos_sdk_public 6.0.2.129 (API 22 Beta1) | 2026/1/4  
DevEco Studio-Cangjie Plugin | Beta | DevEco Studio-Cangjie Plugin 6.0.2 Beta1 | 2026/1/4
