---
name: document/cn/harmonyos-faqs/faqs-appgallery-41
title: 应用发布选取新包时提示较低版本包，无法选择
uri: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-appgallery-41
---

# 应用发布选取新包时提示较低版本包，无法选择

#### 问题现象

版本包上传成功后，在新版本发布选择版本包时，无法勾选新版本包，提示"该状态为较低版本包，不能选择使用"。

![](https://media:301785305085049016 "点击放大")  

#### 背景知识

[选择待发布软件包](https://developer.huawei.com/consumer/cn/doc/app/agc-help-release-app-choose-pkg-0000002278981434)：上传软件包并通过基础合法检查后，就可以从上传的版本中选择需要发布的软件包。  

#### 问题定位

* 查看应用当前在架版本号，为12920000。 ![](https://media:301785305085110017 "点击放大")

* 问题现象中可以知道新上传的包版本为11940000。  

#### 分析结论

当前新版本包的版本号小于在架版本，AppGallery Connect版本发布需要新包版本大于等于在架版本，所以无法选取。  

#### 修改建议

新包版本不能小于在架版本，打包前应将新包的版本设置大于等于在架版本。版本信息在app.json5中versionCode配置，数值大于等于在架版本数值即可。  
