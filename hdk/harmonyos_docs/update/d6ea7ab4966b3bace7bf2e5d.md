---
name: document/cn/update/security-bulletins-202202-0000001204253396
title: 2月
uri: https://developer.huawei.com/consumer/cn/doc/update/security-bulletins-202202-0000001204253396
source: portal
---

# 2月  
  
#### HarmonyOS 安全补丁公告 - 2022年2月

本 HarmonyOS 安全公告详细介绍会影响 HarmonyOS 设备的安全漏洞。安全补丁标签为**2022-02-0 1**或更新的 HarmonyOS 系统已解决了本公告中所述的所有问题。

如果您发现了 HarmonyOS 系统中存在安全或隐私漏洞，请参考[HarmonyOS安全奖励计划](https://device.harmonyos.com/cn/docs/security/HarmonyOS_Security_Bounty_Program/oem_security_plans-0000001115856754)提交报告。

#### HarmonyOS 安全缓解措施

_[安全指南](https://device.harmonyos.com/cn/docs/documentation/guide/security-guidelines-overall-0000001050032745)_ 总结了 HarmonyOS 系统提供的缓解措施。这些功能有助于降低 HarmonyOS 系统上的安全漏洞被成功利用的可能性。

较高版本的 HarmonyOS 系统中提供的安全增强功能让攻击者更加难以利用 HarmonyOS 系统上存在的问题，建议用户都尽可能升级到最新版本 HarmonyOS 。

#### 2022-02-01 安全补丁标签漏洞详情

下面提供了2022-02-01 安全补丁标签涵盖的每个安全漏洞的详细信息，漏洞列在所影响的组件下，包含CVE、漏洞描述、漏洞影响、严重程度、更新的 HarmonyOS 版本和组件。

**内核**

CVE | 漏洞描述 | 漏洞影响 | 严重 程度 | 更新的 HarmonyOS版本 | 组件  
---|---|---|---|---|---  
CVE-2021-40015 | 内核binder驱动子系统存在条件竞争漏洞。 | 成功利用此漏洞可能影响内核稳定性。 | 中 | HarmonyOS 2.0 | 驱动  
  
**系统**

CVE | 漏洞描述 | 漏洞影响 | 严重 程度 | 更新的 HarmonyOS版本 | 组件  
---|---|---|---|---|---  
CVE-2021-40045 | recovery升级系统存在签名校验机制失效的漏洞。 | 成功利用此漏洞可能导致机密性受影响。 | 严重 | HarmonyOS 2.0 | 升级服务  
  
**三方库**

以下为三方库漏洞，只提供CVE、严重程度、更新的HarmonyOS版本，详细信息请参考三方公告。

CVE | 严重程度 | 更新的HarmonyOS版本  
---|---|---  
CVE-2021-3760 | 高 | HarmonyOS 2.0  
CVE-2021-0356 | 中 | HarmonyOS 2.0  
CVE-2021-0357 | 中 | HarmonyOS 2.0  
CVE-2021-0358 | 中 | HarmonyOS 2.0  
CVE-2021-0359 | 中 | HarmonyOS 2.0  
CVE-2021-0360 | 中 | HarmonyOS 2.0  
  
#### 常见问题

     1. 如何确定我的设备是否已通过安全更新解决这些问题？

要了解如何查看设备的安全补丁标签和更新HarmonyOS版本，请参阅[安全更新](https://device.harmonyos.com/cn/docs/security/update/security-updates-0000001054170598)。

如果安全补丁标签是 _2022-02-01_ 或更新，则意味着已解决 _2022-02-01_ 安全补丁标签涵盖的所有问题。

#### 修订记录

版本 | 日期 | 修订记录  
---|---|---  
V1.0 | 2022-02-05 | 首次发布  
V1.1 | 2022-03-05 | 修改了系统漏洞
