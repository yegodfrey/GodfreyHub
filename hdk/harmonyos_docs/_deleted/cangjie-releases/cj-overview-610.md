---
name: cangjie-releases/cj-overview-610
title: 版本概览
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-releases/cj-overview-610
nodePath: 版本说明 / HarmonyOS 6.1.0(23)-仓颉 / 版本概览
---

# 版本概览  
  
DevEco Studio-Cangjie Plugin 6.1.0 Beta1(23)版本6.0.2 (22)的基础上，开发能力得到进一步增强：新增支持API 23工程开发能力；仓颉调优新增支持Energy模板；对语言服务进行了体验优化；对应用包的编译构建性能进行了部分优化；新增仓颉侧加载ArkTS三方库接口，支持混合应用场景下，互操作调用ArkTS三方库能力等等。更多详情可参见[OS平台新增和增强特性](https://developer.huawei.com/consumer/cn/doc/cangjie-releases/cj-os-new-feature-610)和[DevEco Studio-Cangjie Plugin新增和增强特性](https://developer.huawei.com/consumer/cn/doc/cangjie-releases/cj-deveco-overview-releasenote-610)。

版本配套资料请参见[指南](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-application-dev-prepare)和[API参考](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-development-intro)。

#### 版本信息

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ce/v3/0PcNzx-fR2SZnbjA9mDcJQ/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111752Z&HW-CC-Expire=86400&HW-CC-Sign=655270E351EE4D37494687453A023A68BC91B561FA2142C17BB0CB75C1070279)

使用正确的配套关系进行应用开发可以获得更流畅的开发体验。

请在阅读版本更新和变更内容前，务必确认版本的配套关系是否与当前您所使用的开发套件是一致的。

#### [h2]6.1.0(23) 开发者套件配套信息

软件包 | 发布类型 | 版本号 | 发布时间  
---|---|---|---  
API版本 | Release | 6.1.0（23） **注意** ：设备系统支持的API能力范围请以**API版本** 为准。 | 2026/3/20  
DevEco Studio | Release | DevEco Studio 6.1.0 Release (6.1.0.818) | 2026/3/20  
SDK | Release | HarmonyOS 6.1.0 Release SDK 基于OpenHarmony SDK Ohos_sdk_public 6.1.0.105 (API 23 Release) | 2026/3/20  
DevEco Studio-Cangjie Plugin | Beta | DevEco Studio-Cangjie Plugin 6.1.0 Beta1 | 2026/3/26  
  
![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ac/v3/Uv0XsVrCTcqrFQmEnLnG2w/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111752Z&HW-CC-Expire=86400&HW-CC-Sign=2F2FAA05E631C6670333DF243636224AABC16AE655097724954595A1F4D2A19B)

  * **API版本** 请在设备的“设置”中点击设备名称，进入“**关于本机** ”进行查询。
  * DevEco Studio版本请从DevEco Studio界面菜单选择“Help > About DevEco Studio”进行查询。
  * SDK内置在DevEco Studio，安装DevEco Studio时自动安装配套版本SDK。具体版本请从DevEco Studio界面菜单选择“Help > About HarmonyOS SDK”进行查询。
  * DevEco Studio-Cangjie Plugin版本请从插件管理界面“Settings > Plugins”进行查询。



#### 应用工程版本信息配置建议

应用工程中应当正确配置应用运行所依赖的SDK版本信息。

使用该版本开发的应用，其build-profile.json5配置项中关于版本的配置项建议如下：

build-profile.json5配置项 | 已开发应用： 配置建议 | 已开发应用： 配置示例 | 新启动开发应用  
---|---|---|---  
compileSdkVersion | 无需显性配置，编译时默认使用配套的SDK版本，即默认为：“compileSdkVersion”: “6.1.0(23)” | NA | 推荐使用6.1.0(23)进行新应用的开发。  
compatibleSdkVersion | 建议与工程升级前的compatibleSdkVersion保持一致 | 和升级前保持一致，如：“compatibleSdkVersion”: “6.1.0(23)” 当前仓颉开发插件为首版本提供，不涉及该配置使用。 | 推荐使用6.1.0(23)进行新应用的开发。  
targetSdkVersion | 推荐您适配新版本的最新变更，然后配置为：“targetSdkVersion”: “6.1.0(23)”。如果您期望延迟适配变更，可配置targetSdkVersion与工程升级前的targetSdkVersion一致。 | 1、应用适配变更，变更适配完成后配置为：“targetSdkVersion”: “6.1.0(23)” 2、应用暂不适配变更，需配置为工程升级前的值，如：“targetSdkVersion”: “6.1.0(23)” | 推荐使用6.1.0(23)进行新应用的开发。
