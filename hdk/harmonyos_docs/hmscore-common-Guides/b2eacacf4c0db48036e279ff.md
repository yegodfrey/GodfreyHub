---
name: document/cn/hmscore-common-Guides/preload-0000001266629337
title: HMS Core预装介绍
uri: https://developer.huawei.com/consumer/cn/doc/hmscore-common-Guides/preload-0000001266629337
---

# HMS Core预装介绍

## 预装包介绍

HMS Core由一个宿主APK、一系列子APK、配置文件组成，需要作为特权应用（Privileged App）预装到Android系统映像分区的"priv-app"目录下，要求预装后不可卸载，不可被停用。HMS Core压缩包内容如下表所示：

|**一级目录**|**二级目录**|**文件**|**说明**|
|:-------|:------------------|:---------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
|etc|default-permissions|hms-default-permissions.xml|运行时权限预授权配置文件，避免频繁弹授权对话框，影响用户体验。|
|etc|sysconfig|hms-hiddenapi-package-whitelist.xml|Android系统隐藏接口调用白名单配置文件。 从 Android 9（API 级别 28）开始，Android 平台对应用能使用的非 SDK 接口实施了限制，而HMS Core需要访问一些非SDK接口，以便提供更好的服务。 注：由于Android Q支持其他的豁免方案，因此Android Q及以上版本可不预置此配置文件。|
|etc|sysconfig|hms.xml|低功耗、流量节省、沙盒化等豁免白名单配置文件。|
|HMS|HMS.apk||HMS Core宿主APK。作为Privileged App，预置到system/priv-app目录|
|HMS|modules|kit_config.json Kit1.apk Kitx.apk|子应用目录。|
|HMS|config|kit1.properties kit2.properties xxx.properties|子应用预置配置文件目录（6.3.0支持）。|
|HSF|HSF.apk||HMS服务框架APK。作为System App预置到System/app目录。 > 说明 > 此APK必须使用平台签名。|

## CPU架构支持

|**品类**|**ARM32**|**ARM64**|**X86**|**X86_64**|
|:-----|:--------|:--------|:------|:---------|
|手机/平板|Y|Y|N|N|
|大屏|Y|Y|N|N|
|穿戴|Y|Y|N|N|
|车机|Y|N|Y|Y|
|轻量设备|Y|Y|N|N|

## 预装方式

HMS Core出端预置方案如下所示：

* HMS Core预装在Android系统镜像分区的"system/priv-app"目录下的HMS目录，包含HMS.apk、modules和config目录。
* modules目录中存放一系列的子应用APK，子应用APK并不是Android应用，因此不能安装，也不能做odex优化，只需要拷贝到modules目录下。
* etc目录下是HMS Core的白名单配置文件，预置在Android系统镜像分区的"system/etc"目录下对应的目录下。

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20221115191613.80866566422859424561966928500125:50531115012105:2800:57441C6E48D0B9CAB29E35EF8C05DC38E10BFCDCB29BC90974784083BD461A28.png?needInitFileName=true?needInitFileName=true "点击放大")

HMS Core预装压缩包                    系统镜像目录

## 系统配置文件

HMS Core是一个后台服务，为提供稳定、高质量的服务，需要预置一些系统的配置文件，如允许HMS Core访问系统接口，功耗、流量的豁免等。HMS Core压缩包中etc目录下文件需预置到系统镜像分区system对应的目录下，如下表所示：

|**压缩包中文件**|**System镜像区**|
|:--------------------------------------------------|:---------------------------------------------------------|
|etc\default-permissions\hms-default-permissions.xml|system\etc\default-permissions\hms-default-permissions.xml|
|etc\sysconfig\hms.xml|system\etc\sysconfig\hms.xml|
|etc\sysconfig\hms-hiddenapi-package-whitelist.xml|system\etc\sysconfig\hms-hiddenapi-package-whitelist.xml|

## 特许权限白名单

HMS Core APK作为特权应用（Privileged App）预置在系统映像中，从Android 8.0开始特权应用需要配置特许权限白名单，具体配置方式请参见[Android开发者网站](https://source.android.com/devices/tech/config/perms-whitelist?hl=zh-cn)。

## 其他要求

合作伙伴操作系统如果有以下自定义管控、措施请将HMS Core的两个应用（HMS.apk和HSF.apk）加入对应白名单中：

* 允许被其他应用关联启动
* 允许后台访问网络
* 允许后台展示界面
* 允许安装应用，避免显示"未知安装来源"界面
* 允许监听开机广播以及其他系统广播
* 允许扫描Wi-Fi
* 允许设置的Alarm定时器正常唤醒HMS Core
* 允许核心进程后台保活

  |序号|进程名|说明|
  |:-|:-------------------------|:--------|
  |1|com.huawei.hwid.persistent|基础服务进程|
  |2|com.huawei.hwid.core|核心能力进程|
  |3|com.oem.android.hsf|HMS服务框架进程|


* 如系统提供用户查看应用的功耗以及排名，要求不显示HMS Core。
* 合作伙伴自定义限制应用正常运行的其他白名单。
