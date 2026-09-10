---
name: document/cn/AppGallery-connect-Guides/appgallerykit-test-0000001054601485
title: 应用测试
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/appgallerykit-test-0000001054601485
---

# 应用测试

在应用测试阶段，您可以在AppGallery Connect中配置测试账号，并设置允许这些账号执行沙盒测试。沙盒测试可以测试如下场景：

* 账号登录测试。
* 商品支付测试：包括非消耗商品、消耗商品、自动续费订阅型商品支付，联调过程中无需真实支付即可完成端到端的测试。

#### 创建测试账号

在进行测试前，如果当前还未创建测试账号，需要先创建测试账号，具体操作请参考[创建沙盒测试账号](https://developer.huawei.com/consumer/cn/doc/distribution/app/agc-help-testaccount-0000001146438651)。  

#### 商品支付测试

* 如果您需要测试应用内商品的沙盒支付功能，可参见[支付沙盒测试](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/sandbox-testing-0000001050035039)。
* 如果您需要测试应用外支付功能，建议您通过上架一个[开放式测试](https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-Guides/agc-betatest-introduction-0000001071477284)版本的方式测试。  

#### 应用升级测试

如果您集成了应用升级的功能，需要在应用正式上架前测试应用升级功能是否正常，可通过如下方法测试。  

|华为应用市场是否有在架应用|测试方法|
|:------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|有|修改本次测试应用的版本号低于线上在架应用的版本号（应用级build.gradle文件中defaultConfig中versionCode参数）。 如果应用启动时或点击检查升级按钮能够弹出升级框，表示升级功能正常。 说明： 请务必保证您当前测试设备的华为账号服务地（华为应用市场客户端 \> 我的 \> 设置 \> 国家/地区）在您的在架应用的发布地区内，保证华为应用市场能够根据您的服务地检测到应用的最新在架版本。|
|无|如果您是首次发布应用，您可以在应用启动时或点击检测升级按钮时查看日志信息，如果日志含有如下信息表示升级功能正常。 ``` I/updatesdk: UpdateSDK version is:2.x.x.xxx, flavor: envrelease, pkgName:xxx.xxx.huawei ```|

