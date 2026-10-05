---
name: document/cn/HMS-Guides/version_history-0000001050069718
title: 版本更新说明
uri: https://developer.huawei.com/consumer/cn/doc/HMS-Guides/version_history-0000001050069718
source: portal
---

# 版本更新说明

#### Health Kit 4.0.4 版本（2020-05-15）

最新子版本号：4.0.4.300

**变更特性**

  1. SampleSet 区间数据增删改查优化。 
  2. 增强数据类型的有效性判断。 
  3. 服务端优化部分字段校验规则：扩大字段长度、允许传入特殊字符。 



#### Health Kit 4.0.3 版本（2020-04-15）

最新子版本号：4.0.3.300

**新增特性**

优化日志信息，提升安全和性能。

#### Health Kit 4.0.2 版本（2020-03-13）

最新子版本号：4.0.2.301

**新增特性**

  1. 端侧新增自定义数据类型功能。 
     * [SettingManager](https://developer.huawei.com/consumer/cn/doc/HMS-References/settingmanager-0000001050091621) 类增加 PendingResult<DataTypeResult> [addDataType](https://developer.huawei.com/consumer/cn/doc/HMS-References/settingmanager-0000001050091621) 和 PendingResult<DataTypeResult> [readDataType](https://developer.huawei.com/consumer/cn/doc/HMS-References/settingmanager-0000001050091621) 2个方法。 
     * [SettingController](https://developer.huawei.com/consumer/cn/doc/HMS-References/settingcontroller-0000001050089660) 类增加 Task<DataType> [addDataType](https://developer.huawei.com/consumer/cn/doc/HMS-References/settingcontroller-0000001050089660) 和 Task<DataType> [readDataType](https://developer.huawei.com/consumer/cn/doc/HMS-References/settingcontroller-0000001050089660) 2个方法。 
     * 增加 [DataTypeAddOptions](https://developer.huawei.com/consumer/cn/doc/HMS-References/dtao_class-0000001050093107)，[SensorOptions](https://developer.huawei.com/consumer/cn/doc/HMS-References/so_class-0000001050093185) 类。 
  2. 端侧新增通过 React Native 应用集成 HUAWEI Health Kit（运动健康服务）能力的方法。 
     * 新增通过 React Native 调用 Health Kit 登录授权接口，实现授权登录。 
     * 新增通过 React Native 调用查询总步数接口，获取当天总步数。 



具体参数和用法请参考 [API 参考](https://developer.huawei.com/consumer/cn/doc/HMS-References/hihealth_overview-0000001050091291) 和 [客户端开发（React-Natvie）](https://developer.huawei.com/consumer/cn/doc/HMS-Guides/overview_rn-0000001050069732)。

#### Health Kit 4.0.0 版本（2020-01-15）

华为运动健康推出了全新的 Health Kit 4.0.0 版本，欢迎广大开发者接入。

#### SDK 依赖说明

1\. 最新版本SDK需要用户手机上安装 HMS Core（APK） 4.0.2.300 及以上版本； 如果用户手机没有安装，您的应用调用 HMS Core 时，会自动引导用户提示安装。

2\. 本服务的主要特性可被多数华为终端设备支持，部分高级特性依赖于 EMUI 版本。请参考[部分特性对于EMUI的依赖说明](https://developer.huawei.com/consumer/cn/doc/development/HMS-Guides/emui_version_dependent_features)。

提示：您的应用在华为应用市场上架过程中，如有问题可发送邮件至 HMSCore@huawei.com 咨询。
