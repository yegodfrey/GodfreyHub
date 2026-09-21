---
name: document/cn/AppGallery-connect-Guides/agc-crash-process-ios-0000001276080224
title: 开发流程
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-crash-process-ios-0000001276080224
---

# 开发流程

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/0b/v3/3e2Pm9A1QwuSaUEyVhOv-g/zh-cn_image_0000001358002673.png?HW-CC-KV=V1&HW-CC-Date=20260916T040830Z&HW-CC-Expire=31536000000&HW-CC-Sign=5B9021664BA338415A95FF1A0999929DEF47BB0CD23AB878CA529E0F6E5126E9 "点击放大")

|序号|任务|说明|
|:-|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------------------------------------------------------------|
|1|[创建项目与应用](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-crash-createapp-0000001326569825)|项目是您在AppGallery Connect（以下简称AGC）资源的组织实体，您可以将一个应用的不同平台版本添加到同一个项目中。|
|2|[开通崩溃服务](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-crash-enableservice-0000001326330021)|-|
|3|[配置iOS应用信息](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-crash-config-ios-0000001334466845)|-|
|4|[获取agconnect-services.plist文件](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-crash-obtain-files-0000001281093660#section162221315153813)|-|
|5|[集成SDK](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-crash-integratesdk-ios-0000001326720177)|提供Xcode开发环境集成AGC SDK以及崩溃服务SDK。|
|6|[测试崩溃实现](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-crash-test-ios-0000001054941954)|您可以在测试应用时调用崩溃服务SDK的API手动制造一个崩溃，然后在AGC上查看崩溃上报情况，以测试崩溃服务是否正常运行。|
|7|[分析崩溃问题](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-crash-locate-ios-0000001055260540)|在发生崩溃后，崩溃服务会将崩溃数据上报到AGC，您可以在AGC中查看崩溃问题的详细信息，分析崩溃发生的原因。本章节以测试崩溃时制造的崩溃为例，介绍崩溃问题的基本定位方法。|
|8|获取更多崩溃信息： * [自定义崩溃报告](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-crash-customreport-ios-0000001055340561) * [获取可阅读的崩溃报告](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-crash-mapping-ios-0000001055140559)|有些崩溃问题无法通过常规的崩溃信息快速定位，需要获取更详细的信息： * 对崩溃报告中的用户标识符、日志、键值对进行自定义。 * 当应用中有信息被替换成不可阅读代码后，可以获取经过符号化处理后可阅读的崩溃报告。|
|9|[获取非严重异常报告](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-crash-nonfatalexceptions-ios-0000001362249220)|有些异常虽不会导致应用崩溃，但会影响代码运行，AGC会记录非严重异常，您可以监控分析这些异常，从而提高代码质量。|

