---
name: document/cn/update/security-bulletins-202301-0000001435541166
title: 1月
uri: https://developer.huawei.com/consumer/cn/doc/update/security-bulletins-202301-0000001435541166
source: portal
---

# 1月  
  
#### HarmonyOS 安全补丁公告 - 2023年1月

本 HarmonyOS 安全公告详细介绍会影响 HarmonyOS 设备的安全漏洞。安全补丁标签为**2023-01-0 1**或更新的 HarmonyOS 系统已解决了本公告中所述的所有问题。

如果您发现了 HarmonyOS 系统中存在安全或隐私漏洞，请参考[HarmonyOS安全奖励计划](https://device.harmonyos.com/cn/docs/security/HarmonyOS_Security_Bounty_Program/oem_security_plans-0000001115856754)提交报告。

#### HarmonyOS 安全缓解措施

_[安全指南](https://device.harmonyos.com/cn/docs/documentation/guide/security-guidelines-overall-0000001050032745)_ 总结了 HarmonyOS 系统提供的缓解措施。这些功能有助于降低 HarmonyOS 系统上的安全漏洞被成功利用的可能性。

较高版本的 HarmonyOS 系统中提供的安全增强功能让攻击者更加难以利用 HarmonyOS 系统上存在的问题，建议用户都尽可能升级到最新版本 HarmonyOS 。

#### 2023-01-01 安全补丁标签漏洞详情

下面提供了2023-01-01 安全补丁标签涵盖的每个安全漏洞的详细信息，漏洞列在所影响的组件下，包含CVE、漏洞描述、漏洞影响、严重程度、更新的 HarmonyOS 版本和组件。

**内核**

CVE | 漏洞描述 | 漏洞影响 | 严重程度 | 更新的HarmonyOS版本 | 组件  
---|---|---|---|---|---  
CVE-2022-46762 | 内存管理模块存在逻辑绕过漏洞。 | 成功利用此漏洞可能导致机密性受影响。 | 高 | HarmonyOS 2.0 | 媒体  
CVE-2022-47975 | DUBAI模块存在双重释放漏洞。 | 成功利用此漏洞会导致可用性受影响。 | 中 | HarmonyOS 2.0 | 内核  
  
**系统**

CVE | 漏洞描述 | 漏洞影响 | 严重程度 | 更新的HarmonyOS版本 | 组件  
---|---|---|---|---|---  
CVE-2022-47974 | 蓝牙AVRCP模块存在dos攻击漏洞。 | 成功利用这个漏洞可能导致蓝牙进程重启。 | 中 | HarmonyOS 2.0, HarmonyOS 2.1, HarmonyOS 3.0.0 | 系统应用  
CVE-2021-46867 | HW_KEYMASTER模块存在未释放内存问题。 | 成功利用这个漏洞可能导致越界访问。 | 中 | HarmonyOS 2.0 | 安全  
CVE-2021-46868 | HW_KEYMASTER模块存在未释放内存问题。 | 成功利用这个漏洞可能导致越界访问。 | 中 | HarmonyOS 2.0 | 安全  
CVE-2022-47976 | 分布式硬件DMSDP模块存在控制连接顶替漏洞。 | 成功利用此漏洞可能导致业务正常连接被断开。 | 高 | HarmonyOS 2.0, HarmonyOS 2.1, HarmonyOS 3.0.0 | 系统应用  
  
**应用**

CVE | 漏洞描述 | 漏洞影响 | 严重程度 | 更新的HarmonyOS版本 | 组件  
---|---|---|---|---|---  
CVE-2021-46856 | 多屏协同模块存在路径穿越漏洞。 | 成功利用此漏洞可能导致机密性受影响。 | 中 | HarmonyOS 2.0 | 系统应用  
  
**框架**

CVE | 漏洞描述 | 漏洞影响 | 严重程度 | 更新的HarmonyOS版本 | 组件  
---|---|---|---|---|---  
CVE-2022-46761 | 系统存在动态隐藏和恢复应用图标的漏洞。 | 成功利用该漏洞应用可通过特殊手段动态实现图标隐藏和恢复。 | 中 | HarmonyOS 2.0, HarmonyOS 2.1, HarmonyOS 3.0.0 | 包管理  
  
**三方库**

暂无

#### 常见问题

     1. 如何确定我的设备是否已通过安全更新解决这些问题？

要了解如何查看设备的安全补丁标签和更新HarmonyOS版本，请参阅[安全更新](https://device.harmonyos.com/cn/docs/security/update/security-updates-0000001054170598)。

如果安全补丁标签是 _2023-01-01_ 或更新，则意味着已解决 _2023-01-01_ 安全补丁标签涵盖的所有问题。

#### 修订记录

版本 | 日期 | 修订记录  
---|---|---  
V1.0 | 2023-01-05 | 首次发布
