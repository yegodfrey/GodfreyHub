---
name: document/cn/update/security-bulletins-phones-202307-0000001587328810
title: 7月
uri: https://developer.huawei.com/consumer/cn/doc/update/security-bulletins-phones-202307-0000001587328810
source: portal
---

# 7月  
  
#### 华为 HarmonyOS 手机/平板安全更新 - 2023年7月

本更新详细介绍了华为HarmonyOS手机/平板设备涉及的安全漏洞。对于华为手机/平板设备，如果安全补丁标签是 2023-07-01 或更高级别，就意味着已解决本公告以及 2023年7月的 HarmonyOS 安全公告中所述的所有问题。要了解如何查看设备的安全补丁标签和更新HarmonyOS版本，请参阅[安全更新](https://device.harmonyos.com/cn/docs/security/update/security-updates-0000001054170598)。

华为正在发布主要旗舰机型的月度安全维护版本，建议收到更新的用户都在自己的设备上接收这些更新。

#### 漏洞详情

下面提供了本次安全更新所有安全漏洞的详细信息，漏洞列在所影响的组件下，包含CVE、漏洞描述、漏洞影响、严重程度、受影响版本。

**内核**

CVE | 漏洞描述 | 漏洞影响 | 严重程度 | 受影响版本  
---|---|---|---|---  
CVE-2021-46890 | GPU模块存在读写权限判断不全漏洞。 | 成功利用这个漏洞可能导致机密性、完整性、可用性受影响。 | 严重 | HarmonyOS 2.0.0  
CVE-2021-46891 | GPU模块存在读写权限判断不全漏洞。 | 成功利用这个漏洞可能导致机密性、完整性、可用性受影响。 | 严重 | HarmonyOS 2.0.0  
CVE-2021-46893 | 数据校验参数检查不严问题。 | 成功利用此漏洞可能导致完整性受影响。 | 严重 | HarmonyOS 2.0.0  
CVE-2021-46894 | 输入子系统模块存在UAF漏洞。 | 成功利用此漏洞可能导致内核提权。 | 高 | HarmonyOS 2.0.0  
CVE-2023-37239 | 产品的分布式文件系统存在格式化字符串漏洞。 | 绕过SElinux权限的攻击者可以利用此漏洞导致程序崩溃。 | 中 | HarmonyOS 3.1.0, HarmonyOS 3.0.0, HarmonyOS 2.0.1  
CVE-2023-37240 | 产品的分布式文件系统存在未验证输入长度的漏洞。 | 成功利用此漏洞可以导致越界读。 | 中 | HarmonyOS 3.1.0, HarmonyOS 3.0.0, HarmonyOS 2.0.1  
CVE-2023-37245 | modem pinctrl模块存在写越界的缓冲区溢出漏洞。 | 成功利用此漏洞会影响modem完整性和可用性。 | 中 | HarmonyOS 3.0.0, HarmonyOS 2.1.0, HarmonyOS 2.0.0  
CVE-2023-3456 | DFR冻屏检测模块存在内核裸地址泄漏风险。 | 成功利用此漏洞可能导致机密性受影响。 | 中 | HarmonyOS 3.1.0, HarmonyOS 3.0.0, HarmonyOS 2.1.0, HarmonyOS 2.0.1, HarmonyOS 2.0.0  
CVE-2022-48511 | 音频pcm驱动模块在构造特殊条件下存在UAF漏洞。 | 成功利用此漏洞可能导致音频功能异常。 | 中 | HarmonyOS 2.0.0  
  
**系统**

CVE | 漏洞描述 | 漏洞影响 | 严重程度 | 受影响版本  
---|---|---|---|---  
CVE-2022-48508 | 支持OTG组件存在不适当的授权漏洞。 | 成功利用此漏洞可能导致完整性受影响。 | 高 | HarmonyOS 3.0.0, HarmonyOS 2.0.1, HarmonyOS 2.0.0  
CVE-2022-48512 | Vdecoderservice服务存在UAF漏洞。 | 成功利用此漏洞可能导致图片解码功能异常。 | 高 | HarmonyOS 2.0.0  
CVE-2023-37242 | atcmdserver模块存在对modem侧指令拦截漏洞。 | 攻击者可以用此漏洞来改写NV的值，或者以此漏洞作为别的漏洞攻击入口。 | 中 | HarmonyOS 3.0.0, HarmonyOS 2.0.0  
CVE-2022-48507 | 存储模块存在绕过身份验证的漏洞。 | 成功利用此漏洞可能导致机密性受影响。 | 中 | HarmonyOS 3.0.0, HarmonyOS 2.1.0, HarmonyOS 2.0.1, HarmonyOS 2.0.0  
CVE-2022-48514 | Sepolicy模块存在对Netlink使用权限管控不合理。 | 成功利用此漏洞可以导致机密性受影响。 | 中 | HarmonyOS 2.1.0  
CVE-2022-48515 | Nearby存在权限管理不当的漏洞。 | 成功利用此漏洞可能导致机密性受影响。 | 中 | HarmonyOS 2.1.0, HarmonyOS 2.0.1, HarmonyOS 2.0.0  
CVE-2022-48516 | 分布式软总线组件存在唯一值能被三方应用获取到漏洞。 | 成功利用这个漏洞导致机密性受影响。 | 中 | HarmonyOS 2.0.1, HarmonyOS 2.0.0  
CVE-2022-48517 | 分布式软总线组件存服务越权漏洞。 | 成功利用这个漏洞可能导致可用性受影响。 | 中 | HarmonyOS 2.1.0, HarmonyOS 2.0.1, HarmonyOS 2.0.0  
CVE-2022-48518 | iaware系统存在签名校验服务初始化晚于系统广播发送的漏洞。 | 成功利用这个漏洞可能导致恶意应用伪装白名单应用的包名，实现开机自启等功能，影响系统性能。 | 中 | HarmonyOS 2.0.1, HarmonyOS 2.0.0  
  
**应用**

CVE | 漏洞描述 | 漏洞影响 | 严重程度 | 受影响版本  
---|---|---|---|---  
CVE-2021-40027 | 骨声纹TA存在缓冲长度计算错误漏洞。 | 成功利用此漏洞可能导致机密性受影响。 | 高 | HarmonyOS 3.1.0, HarmonyOS 3.0.0, HarmonyOS 2.1.0, HarmonyOS 2.0.1, HarmonyOS 2.0.0  
CVE-2022-48509 | 华为分享由于多线程访问互斥资源存在条件竞争的漏洞。 | 成功利用此漏洞可以导致程序异常退出。 | 中 | HarmonyOS 2.0.1, HarmonyOS 2.0.0  
CVE-2022-48510 | AMS模块存在输入验证类漏洞。 | 成功利用这个漏洞会导致越权。 | 中 | HarmonyOS 2.0.0  
CVE-2022-48513 | 图库模块存在通过欺骗绕过身份认证漏洞。 | 成功利用这个漏洞可能导致越界访问。 | 中 | HarmonyOS 3.1.0, HarmonyOS 3.0.0, HarmonyOS 2.0.1, HarmonyOS 2.0.0  
CVE-2022-48519 | SystemUI模块存在越权漏洞。 | 成功利用此漏洞可能导致设备机密性受影响。 | 中 | HarmonyOS 2.0.1, HarmonyOS 2.0.0  
CVE-2022-48520 | SystemUI模块存在越权漏洞。 | 成功利用此漏洞可能导致设备机密性受影响。 | 中 | HarmonyOS 2.0.1, HarmonyOS 2.0.0  
CVE-2021-40032 | 骨声纹TA存在信息管理错误漏洞。 | 成功利用此漏洞可能导致机密性受影响。 | 中 | HarmonyOS 3.1.0, HarmonyOS 3.0.0, HarmonyOS 2.1.0, HarmonyOS 2.0.1, HarmonyOS 2.0.0  
CVE-2021-40014 | 骨声纹TA存在信息管理错误漏洞。 | 成功利用此漏洞可能导致机密性受影响。 | 中 | HarmonyOS 3.1.0, HarmonyOS 3.0.0, HarmonyOS 2.1.0, HarmonyOS 2.0.1, HarmonyOS 2.0.0  
  
**框架**

CVE | 漏洞描述 | 漏洞影响 | 严重程度 | 受影响版本  
---|---|---|---|---  
CVE-2023-3455 | 系统存在密钥管理漏洞。 | 成功利用这个漏洞可以导致可用性和完整性受影响。 | 高 | HarmonyOS 3.1.0, HarmonyOS 3.0.0  
CVE-2023-37238 | 应用投屏模块某个接口存在访问权限校验不完整的漏洞。 | 成功利用此漏洞可能影响应用投屏部分功能可用性。 | 中 | HarmonyOS 3.1.0, HarmonyOS 3.0.0  
CVE-2023-37241 | WMS接口存在输入验证类漏洞。 | 成功利用这个漏洞可导致设备重启。 | 中 | HarmonyOS 3.1.0, HarmonyOS 3.0.0  
CVE-2023-34164 | 通信框架组件存在入参校验漏洞。 | 成功利用这个漏洞可以导致可用性受影响。 | 中 | HarmonyOS 3.1.0, HarmonyOS 3.0.0  
CVE-2021-46892 | 维修模式存在加密绕过漏洞。 | 成功利用此漏洞导致机密受影响。 | 中 | HarmonyOS 2.1.0, HarmonyOS 2.0.1, HarmonyOS 2.0.0  
CVE-2023-1691 | 通信框架存在异常未正确捕获漏洞。 | 成功利用此漏洞可以导致功能异常。 | 中 | HarmonyOS 3.1.0, HarmonyOS 3.0.0, HarmonyOS 2.0.1, HarmonyOS 2.0.0  
CVE-2023-1695 | 通信框架存在异常未正确捕获漏洞。 | 成功利用此漏洞可以导致功能异常。 | 中 | HarmonyOS 3.1.0, HarmonyOS 3.0.0, HarmonyOS 2.0.1, HarmonyOS 2.0.0  
  
**三方库**

以下为三方库漏洞，只提供CVE、严重程度、受影响版本，详细信息请参考三方公告。

CVE | 严重程度 | 受影响版本  
---|---|---  
CVE-2023-21108 | 严重 | HarmonyOS 3.1.0, HarmonyOS 3.0.0, HarmonyOS 2.1.0, HarmonyOS 2.0.1, HarmonyOS 2.0.0  
CVE-2023-21127 | 严重 | HarmonyOS 3.1.0, HarmonyOS 3.0.0, HarmonyOS 2.1.0, HarmonyOS 2.0.1, HarmonyOS 2.0.0  
CVE-2023-21128 | 高 | HarmonyOS 3.1.0, HarmonyOS 3.0.0, HarmonyOS 2.0.1  
CVE-2023-21129 | 高 | HarmonyOS 3.1.0, HarmonyOS 3.0.0, HarmonyOS 2.1.0, HarmonyOS 2.0.1, HarmonyOS 2.0.0  
CVE-2023-21131 | 高 | HarmonyOS 3.1.0, HarmonyOS 3.0.0, HarmonyOS 2.1.0, HarmonyOS 2.0.1, HarmonyOS 2.0.0  
CVE-2023-21136 | 高 | HarmonyOS 3.1.0, HarmonyOS 3.0.0, HarmonyOS 2.1.0, HarmonyOS 2.0.1, HarmonyOS 2.0.0  
CVE-2023-21137 | 高 | HarmonyOS 3.1.0, HarmonyOS 3.0.0, HarmonyOS 2.1.0, HarmonyOS 2.0.1, HarmonyOS 2.0.0  
CVE-2023-21143 | 高 | HarmonyOS 3.1.0, HarmonyOS 3.0.0, HarmonyOS 2.1.0, HarmonyOS 2.0.1, HarmonyOS 2.0.0  
CVE-2023-21144 | 高 | HarmonyOS 3.1.0, HarmonyOS 3.0.0, HarmonyOS 2.1.0, HarmonyOS 2.0.1, HarmonyOS 2.0.0  
CVE-2023-21135 | 高 | HarmonyOS 3.1.0, HarmonyOS 3.0.0, HarmonyOS 2.1.0, HarmonyOS 2.0.1, HarmonyOS 2.0.0  
CVE-2023-21124 | 高 | HarmonyOS 3.1.0, HarmonyOS 3.0.0, HarmonyOS 2.1.0, HarmonyOS 2.0.1, HarmonyOS 2.0.0  
CVE-2023-21121 | 高 | HarmonyOS 3.1.0, HarmonyOS 3.0.0, HarmonyOS 2.1.0, HarmonyOS 2.0.1, HarmonyOS 2.0.0  
CVE-2023-21138 | 高 | HarmonyOS 3.1.0, HarmonyOS 3.0.0, HarmonyOS 2.1.0, HarmonyOS 2.0.1, HarmonyOS 2.0.0  
CVE-2023-21115 | 高 | HarmonyOS 3.1.0, HarmonyOS 3.0.0, HarmonyOS 2.1.0, HarmonyOS 2.0.1, HarmonyOS 2.0.0  
CVE-2023-21657 | 高 | HarmonyOS 3.1.0, HarmonyOS 3.0.0, HarmonyOS 2.0.1, HarmonyOS 2.0.0  
CVE-2022-28349 | 高 | HarmonyOS 3.0.0, HarmonyOS 2.1.0, HarmonyOS 2.0.0  
CVE-2023-21656 | 高 | HarmonyOS 3.1.0, HarmonyOS 3.0.0, HarmonyOS 2.0.1, HarmonyOS 2.0.0  
CVE-2023-21669 | 高 | HarmonyOS 2.0.0  
  
#### 修订记录

版本 | 日期 | 修订记录  
---|---|---  
V1.0 | 2023-07-05 | 首次发布
