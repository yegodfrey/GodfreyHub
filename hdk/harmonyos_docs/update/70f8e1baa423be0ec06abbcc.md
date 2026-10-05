---
name: document/cn/update/security-bulletins-202311-0000001729189597
title: 11月
uri: https://developer.huawei.com/consumer/cn/doc/update/security-bulletins-202311-0000001729189597
source: portal
---

# 11月  
  
#### HarmonyOS 安全补丁公告 - 2023年11月

本 HarmonyOS 安全公告详细介绍会影响 HarmonyOS 设备的安全漏洞。安全补丁标签为**2023-11-0 1**或更新的 HarmonyOS 系统已解决了本公告中所述的所有问题。

如果您发现了 HarmonyOS 系统中存在安全或隐私漏洞，请参考[HarmonyOS安全奖励计划](https://device.harmonyos.com/cn/docs/security/HarmonyOS_Security_Bounty_Program/oem_security_plans-0000001115856754)提交报告。

#### HarmonyOS 安全缓解措施

_[安全指南](https://device.harmonyos.com/cn/docs/documentation/guide/security-guidelines-overall-0000001050032745)_ 总结了 HarmonyOS 系统提供的缓解措施。这些功能有助于降低 HarmonyOS 系统上的安全漏洞被成功利用的可能性。

较高版本的 HarmonyOS 系统中提供的安全增强功能让攻击者更加难以利用 HarmonyOS 系统上存在的问题，建议用户都尽可能升级到最新版本 HarmonyOS 。

#### 2023-11-01 安全补丁标签漏洞详情

下面提供了2023-11-01 安全补丁标签涵盖的每个安全漏洞的详细信息，漏洞列在所影响的组件下，包含CVE、漏洞描述、漏洞影响、严重程度、更新的 HarmonyOS 版本和组件。

**内核**

CVE | 漏洞描述 | 漏洞影响 | 严重程度 | 更新的HarmonyOS版本 | 组件  
---|---|---|---|---|---  
CVE-2023-46770 | 传感器模块访问越界漏洞。 | 成功利用此漏洞可能会导致用户手机防误触功能异常。 | 高 | HarmonyOS 4.0.0, HarmonyOS 3.0.0, HarmonyOS 2.0.0 | 泛Sensor  
CVE-2022-48613 | 内核模块存在条件竞争漏洞。 | 成功利用此漏洞可能导致绕过判断越界读取变量值。 | 中 | HarmonyOS 3.0.0, HarmonyOS 2.0.0 | 内核  
CVE-2023-46766 | 内核驱动模块存在越界写的漏洞。 | 成功利用此漏洞可能进程异常。 | 中 | HarmonyOS 4.0.0, HarmonyOS 3.1.0, HarmonyOS 3.0.0 | 内核  
CVE-2023-46767 | 内核驱动模块存在越界写的漏洞。 | 成功利用此漏洞可能进程异常。 | 中 | HarmonyOS 4.0.0, HarmonyOS 3.1.0, HarmonyOS 3.0.0 | 内核  
CVE-2023-46760 | 内核驱动模块存在越界写的漏洞。 | 成功利用此漏洞可能进程异常。 | 中 | HarmonyOS 4.0.0, HarmonyOS 3.1.0, HarmonyOS 3.0.0 | 内核  
CVE-2023-46761 | 内核驱动模块存在越界写的漏洞。 | 成功利用此漏洞可能进程异常。 | 中 | HarmonyOS 4.0.0, HarmonyOS 3.1.0, HarmonyOS 3.0.0 | 内核  
CVE-2023-46762 | 内核驱动模块存在越界写的漏洞。 | 成功利用此漏洞可能进程异常。 | 中 | HarmonyOS 4.0.0, HarmonyOS 3.1.0, HarmonyOS 3.0.0 | 内核  
  
**系统**

CVE | 漏洞描述 | 漏洞影响 | 严重程度 | 更新的HarmonyOS版本 | 组件  
---|---|---|---|---|---  
CVE-2023-5801 | 人脸解锁模块存在通过欺骗绕过身份认证的漏洞。 | 成功利用这个漏洞会导致完整性和机密性受影响。 | 严重 | HarmonyOS 4.0.0, HarmonyOS 3.0.0, HarmonyOS 2.0.0 | 安全  
CVE-2023-46768 | idmap模块存在多线程不安全漏洞。 | 成功利用此漏洞可能导致功能异常。 | 高 | HarmonyOS 4.0.0, HarmonyOS 3.1.0, HarmonyOS 3.0.0 | 定制  
CVE-2023-46769 | dubai模块存在UAF漏洞。 | 成功利用此漏洞会导致可用性受影响。 | 高 | HarmonyOS 4.0.0, HarmonyOS 3.1.0, HarmonyOS 3.0.0 | DFX  
CVE-2023-44115 | Booster模块存在权限控制不当漏洞。 | 成功利用此漏洞可能导致机密性受影响。 | 中 | HarmonyOS 4.0.0, HarmonyOS 3.1.0, HarmonyOS 3.0.0, HarmonyOS 2.1.0, HarmonyOS 2.0.1, HarmonyOS 2.0.0 | 网络管理  
CVE-2023-46771 | 人脸解锁模块存在安全功能漏洞。 | 成功利用此漏洞可能导致机密性受影响。 | 中 | HarmonyOS 4.0.0, HarmonyOS 3.0.0, HarmonyOS 2.0.0 | 安全  
CVE-2023-46774 | NFC模块未捕获异常漏洞。 | 成功利用此漏洞可导致NFC可用性受影响。 | 中 | HarmonyOS 4.0.0, HarmonyOS 3.1.0, HarmonyOS 3.0.0, HarmonyOS 2.1.0, HarmonyOS 2.0.1, HarmonyOS 2.0.0 | NFC  
CVE-2023-46765 | NFC模块未捕获异常漏洞。 | 成功利用此漏洞可导致NFC可用性受影响。 | 中 | HarmonyOS 4.0.0, HarmonyOS 3.1.0, HarmonyOS 3.0.0, HarmonyOS 2.1.0, HarmonyOS 2.0.1, HarmonyOS 2.0.0 | NFC  
CVE-2023-46755 | 输入法模块存在入参校验不严格漏洞。 | 成功利用此漏洞可能导致桌面重启。 | 中 | HarmonyOS 3.0.0, HarmonyOS 2.1.0, HarmonyOS 2.0.1, HarmonyOS 2.0.0 | 输入法框架  
  
**应用**

CVE | 漏洞描述 | 漏洞影响 | 严重程度 | 更新的HarmonyOS版本 | 组件  
---|---|---|---|---|---  
CVE-2023-44098 | 卡管理模块存在未加密存储漏洞。 | 成功利用此漏洞可能会导致机密性受影响。 | 中 | HarmonyOS 4.0.0, HarmonyOS 3.1.0, HarmonyOS 3.0.0, HarmonyOS 2.1.0, HarmonyOS 2.0.1 | 系统应用  
CVE-2023-46757 | 远程PIN模块存在信息存储位置不当漏洞。 | 成功利用此漏洞可能导致机密性受影响。 | 中 | HarmonyOS 4.0.0 | 用户IAM  
CVE-2023-46759 | 通话模块存在权限控制类漏洞。 | 成功利用此漏洞可能导致机密性受影响。 | 中 | HarmonyOS 4.0.0, HarmonyOS 3.1.0, HarmonyOS 3.0.0, HarmonyOS 2.1.0, HarmonyOS 2.0.1, HarmonyOS 2.0.0 | 系统应用  
  
**框架**

CVE | 漏洞描述 | 漏洞影响 | 严重程度 | 更新的HarmonyOS版本 | 组件  
---|---|---|---|---|---  
CVE-2023-46763 | 框架模块存在后台应用权限管理漏洞。 | 成功利用这个漏洞导致应用后台恶意启动。 | 中 | HarmonyOS 4.0.0, HarmonyOS 3.1.0, HarmonyOS 3.0.0, HarmonyOS 2.1.0, HarmonyOS 2.0.1, HarmonyOS 2.0.0 | 元能力  
CVE-2023-46764 | 后台应用存在越权启动漏洞。 | 成功利用这个漏洞导致应用后台恶意启动。 | 中 | HarmonyOS 4.0.0, HarmonyOS 3.1.0, HarmonyOS 3.0.0, HarmonyOS 2.1.0, HarmonyOS 2.0.1, HarmonyOS 2.0.0 | 元能力  
CVE-2023-46756 | 窗口管理模块存在权限控制类漏洞。 | 成功利用此漏洞可能导致恶意弹窗。 | 中 | HarmonyOS 4.0.0, HarmonyOS 3.1.0, HarmonyOS 3.0.0, HarmonyOS 2.1.0, HarmonyOS 2.0.1, HarmonyOS 2.0.0 | 窗口  
CVE-2023-46758 | 多屏交互模块存在权限管理漏洞。 | 成功利用此漏洞可能导致设备服务异常。 | 中 | HarmonyOS 4.0.0, HarmonyOS 3.1.0, HarmonyOS 3.0.0, HarmonyOS 2.1.0, HarmonyOS 2.0.1, HarmonyOS 2.0.0 | 窗口  
  
**三方库**

暂无

#### 常见问题

     1. 如何确定我的设备是否已通过安全更新解决这些问题？

要了解如何查看设备的安全补丁标签和更新HarmonyOS版本，请参阅[安全更新](https://device.harmonyos.com/cn/docs/security/update/security-updates-0000001054170598)。

如果安全补丁标签是 _2023-11-01_ 或更新，则意味着已解决 _2023-11-01_ 安全补丁标签涵盖的所有问题。

#### 修订记录

版本 | 日期 | 修订记录  
---|---|---  
V1.0 | 2023-11-05 | 首次发布
