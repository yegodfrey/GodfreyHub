---
name: document/cn/HMSCore-Guides/ios-sdk-config-agc-0000001242634549
title: 配置AppGallery Connect
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/ios-sdk-config-agc-0000001242634549
---

# 配置AppGallery Connect

在开发应用前，需要在AppGallery Connect中配置相关信息。  

#### 注册成为开发者

在开发应用前需要在[华为开发者联盟](https://developer.huawei.com/consumer/cn)网站上注册成为开发者并完成实名认证，具体方法请参见[帐号注册认证](https://developer.huawei.com/consumer/cn/doc/start/registration-and-verification-0000001053628148)。  

#### 创建项目

参见[创建项目](https://developer.huawei.com/consumer/cn/doc/distribution/app/agc-help-createproject-0000001100334664)。  

#### 创建应用

在项目下[创建应用](https://developer.huawei.com/consumer/cn/doc/distribution/app/agc-help-createapp-0000001146718717)完成应用的创建，特殊配置如下：

* 选择平台：选择"iOS"。
* 软件包ID：您iOS应用的Bundle ID。
* 应用名称：仅用于应用管理，不会显示在终端用户界面上。
* App Store ID：您App Store Connect中的Apple ID。

![](https://media:301772613519093736 "点击放大")  

#### 打开相关服务

使用地图服务需要您在[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)上打开"地图服务"。如果您已经开通，可跳过此步骤。

1. 登录[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)，选择我的项目。

2. 在项目列表中点击需要开通地图服务的项目。

3. 选择API管理，找到地图服务开关，打开开关。

![](https://media:301772613519129737 "点击放大")

开通服务后，您可以在"项目设置"配置数据处理位置和[数据处理位置策略](https://developer.huawei.com/consumer/cn/doc/distribution/app/agc-help-datalocation-strategy-0000001283213602)，具体操作步骤请参见[数据处理位置](https://developer.huawei.com/consumer/cn/doc/distribution/app/agc-help-datalocation-0000001160439813)。

![](https://media:301772613519181738 "点击放大")  
