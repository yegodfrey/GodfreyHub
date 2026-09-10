---
name: document/cn/HMSCore-References/javascript-api-initsettings-0000001113291296
title: InitSettings
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-References/javascript-api-initsettings-0000001113291296
---

# InitSettings

|Interface Info|
|:-------------------------------------------------------|
|agconnect.analytics.InitSettings 此接口用来在SDK初始化之前，做一些全局设置。|

#### Public Field Summary

|Qualifier and Type|Field and Description|
|:-----------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|boolean|debugMode 调试模式，默认值为false，默认不打开模式。|
|string|terminalName 终端名称，调试模式下标识终端，默认值为AAID前八位。支持自定义终端名称，长度不超过30字符。|
|boolean|logDisabled 关闭控制台日志打印，默认值为false，即默认打印日志。|
|string|logLevel 打印的最小日志级别，不区分大小写，支持的配置：INFO\|WARN\|ERROR。|
|string|[routePolicy](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/web-api-routepolicy-0000001160054484) 数据处理位置。包括：CN(中国)、DE(德国)、SG(新加坡)、RU(俄罗斯)。 说明： * 需通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/)申请多数据处理位置功能体验，该配置方可生效。在线提单操作详情请参见[在线提单指导](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/online-application-guide-0000001174952406)。 * 如果您的应用发布到全球多个国家，建议您启用多数据处理位置，按照用户实际使用区域指定数据上报位置。|

