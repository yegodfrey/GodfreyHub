---
name: document/cn/update/security-bulletins-202306-0000001560777672
title: 6月
uri: https://developer.huawei.com/consumer/cn/doc/update/security-bulletins-202306-0000001560777672
source: portal
---

# 6月  
  
#### HarmonyOS 安全补丁公告 - 2023年6月

本 HarmonyOS 安全公告详细介绍会影响 HarmonyOS 设备的安全漏洞。安全补丁标签为**2023-06-0 1**或更新的 HarmonyOS 系统已解决了本公告中所述的所有问题。

如果您发现了 HarmonyOS 系统中存在安全或隐私漏洞，请参考[HarmonyOS安全奖励计划](https://device.harmonyos.com/cn/docs/security/HarmonyOS_Security_Bounty_Program/oem_security_plans-0000001115856754)提交报告。

#### HarmonyOS 安全缓解措施

_[安全指南](https://device.harmonyos.com/cn/docs/documentation/guide/security-guidelines-overall-0000001050032745)_ 总结了 HarmonyOS 系统提供的缓解措施。这些功能有助于降低 HarmonyOS 系统上的安全漏洞被成功利用的可能性。

较高版本的 HarmonyOS 系统中提供的安全增强功能让攻击者更加难以利用 HarmonyOS 系统上存在的问题，建议用户都尽可能升级到最新版本 HarmonyOS 。

#### 2023-06-01 安全补丁标签漏洞详情

下面提供了2023-06-01 安全补丁标签涵盖的每个安全漏洞的详细信息，漏洞列在所影响的组件下，包含CVE、漏洞描述、漏洞影响、严重程度、更新的 HarmonyOS 版本和组件。

内核

CVE | 漏洞描述 | 漏洞影响 | 严重程度 | 更新的HarmonyOS版本 | 组件  
---|---|---|---|---|---  
CVE-2022-48494 | 华为预授权功能存在应用身份校验不严格漏洞。 | 成功利用此漏洞可拿到华为预授权权限。 | 中 | HarmonyOS 3.0.0, HarmonyOS 2.1.0, HarmonyOS 2.0.1, HarmonyOS 2.0.0 | 安全  
CVE-2022-48496 | 华为预授权功能存在应用身份校验不严格漏洞。 | 成功利用此漏洞可拿到华为预授权权限。 | 中 | HarmonyOS 3.1.0, HarmonyOS 3.0.0, HarmonyOS 2.1.0, HarmonyOS 2.0.1, HarmonyOS 2.0.0 | 安全  
  
**系统**

CVE | 漏洞描述 | 漏洞影响 | 严重程度 | 更新的HarmonyOS版本 | 组件  
---|---|---|---|---|---  
CVE-2023-34154 | 华为VR投屏存在游离权限问题。 | 三方应用成功利用此漏洞可以任意创建窗口，导致消耗系统资源风险。 | 中 | HarmonyOS 3.0.0, HarmonyOS 2.0.0 | 图形  
CVE-2023-31226 | 媒体播控中心模块依赖的SDK存在权限校验不当漏洞。 | 成功利用此漏洞可能导致机密性受影响。 | 中 | HarmonyOS 3.0.0, HarmonyOS 2.0.1 | 媒体  
CVE-2023-34161 | SettingsProvider 模块存在不适当的授权漏洞。 | 成功利用这个漏洞可能导致功能异常。 | 中 | HarmonyOS 3.1.0, HarmonyOS 3.0.0, HarmonyOS 2.1.0, HarmonyOS 2.0.1, HarmonyOS 2.0.0 | 系统应用  
CVE-2023-34158 | WMS中公共的接口方法存在被恶意三方app调用问题。 | 成功利用此漏洞会导致三方app越权访问。 | 高 | HarmonyOS 3.1.0, HarmonyOS 3.0.0, HarmonyOS 2.1.0, HarmonyOS 2.0.0 | 系统应用  
CVE-2023-34160 | WMS中公共的接口方法存在被恶意三方app调用问题。 | 成功利用此漏洞会导致三方app越权访问。 | 高 | HarmonyOS 3.1.0, HarmonyOS 3.0.0, HarmonyOS 2.1.0, HarmonyOS 2.0.0 | 系统应用  
  
**应用**

CVE | 漏洞描述 | 漏洞影响 | 严重程度 | 更新的HarmonyOS版本 | 组件  
---|---|---|---|---|---  
CVE-2023-34156 | HarmonyOS产品的指纹老服务接口存在拒绝服务的问题。 | 成功利用此漏洞会导致拒绝服务。 | 中 | HarmonyOS 3.1.0, HarmonyOS 3.0.0, HarmonyOS 2.1.0, HarmonyOS 2.0.1, HarmonyOS 2.0.0 | 安全  
CVE-2022-48488 | 默认桌面管控功能存在被绕过的漏洞。 | 成功利用此漏洞可以随意修改桌面。 | 中 | HarmonyOS 3.1.0, HarmonyOS 3.0.0, HarmonyOS 2.1.0, HarmonyOS 2.0.1, HarmonyOS 2.0.0 | 安全  
CVE-2022-48495 | 越权获取前台应用信息。 | 成功利用此漏洞可能导致获取前台应用信息。 | 中 | HarmonyOS 3.1.0, HarmonyOS 3.0.0, HarmonyOS 2.0.1, HarmonyOS 2.0.0 | 安全  
CVE-2023-34167 | 华为桌面存在白名单仿冒漏洞。 | 恶意三方应用成功利用此漏洞，可以在桌面上隐藏应用图标，防止被用户卸载。 | 中 | HarmonyOS 3.1.0, HarmonyOS 3.0.0, HarmonyOS 2.1.0, HarmonyOS 2.0.1, HarmonyOS 2.0.0 | 系统应用  
CVE-2023-34162 | 用户画像模块存在版本升级判断漏洞。 | 成功利用这个漏洞可导致HMS CORE循环升级，服务失效。 | 中 | HarmonyOS 3.1.0, HarmonyOS 3.0.0 | 系统应用  
CVE-2023-34165 | 智慧识屏稍后阅读存在越权访问问题。 | 成功利用此漏洞可能导致三方仿造uri零权限越权访问。 | 中 | HarmonyOS 2.1.0 | 系统应用  
CVE-2023-34157 | HwWatchHealth应用存在被劫持风险。 | 成功利用此漏洞可能导致应用出现反复弹窗，影响可用性。 | 中 | HarmonyOS 2.0.0 | 系统应用  
CVE-2023-34159 | 备忘录产品存在权限控制不当的漏洞。 | 成功利用漏洞可能导致提权,对产品的可用性和机密性有一定影响。 | 中 | HarmonyOS 3.1.0, HarmonyOS 3.0.0 | 系统应用  
  
**框架**

CVE | 漏洞描述 | 漏洞影响 | 严重程度 | 更新的HarmonyOS版本 | 组件  
---|---|---|---|---|---  
CVE-2022-48491 | 部分华为手机存在鉴权缺失漏洞。 | 成功利用该漏洞，可以不定时弹出广告等任意界面 | 中 | HarmonyOS 3.1.0, HarmonyOS 3.0.0, HarmonyOS 2.0.1, HarmonyOS 2.0.0 | 系统应用  
CVE-2023-34163 | 窗口管理模块存在权限控制类漏洞。 | 成功利用此漏洞可能导致功能异常。 | 中 | HarmonyOS 3.1.0, HarmonyOS 3.0.0, HarmonyOS 2.1.0, HarmonyOS 2.0.1, HarmonyOS 2.0.0 | 窗口  
CVE-2023-34166 | 接口传入异常回调导致系统重启。 | 成功利用此漏洞可能导致系统重启。 | 中 | HarmonyOS 3.1.0, HarmonyOS 3.0.0, HarmonyOS 2.1.0, HarmonyOS 2.0.1, HarmonyOS 2.0.0 | 包管理  
CVE-2023-34155 | 华为手机、PAD上存在存在越权调用问题。 | 成功利用这个漏洞可以导致可用性受影响。 | 中 | HarmonyOS 3.1.0, HarmonyOS 3.0.0 | 通信互联  
  
**三方库**

暂无

#### 常见问题

     1. 如何确定我的设备是否已通过安全更新解决这些问题？

要了解如何查看设备的安全补丁标签和更新HarmonyOS版本，请参阅[安全更新](https://device.harmonyos.com/cn/docs/security/update/security-updates-0000001054170598)。

如果安全补丁标签是 _2023-06-01_ 或更新，则意味着已解决 _2023-06-01_ 安全补丁标签涵盖的所有问题。

#### 修订记录

版本 | 日期 | 修订记录  
---|---|---  
V1.0 | 2023-06-05 | 首次发布
