---
name: cangjie-guides/cj-huks-key-use-overview
title: 密钥使用介绍及通用流程
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-huks-key-use-overview
nodePath: 系统 / 安全 / Universal Keystore Kit（密钥管理服务） / 密钥使用 / 密钥使用介绍及通用流程
---

# 密钥使用介绍及通用流程

#### 密钥使用介绍

为了实现对数据机密性、完整性等保护，可使用生成/导入的密钥，对数据进行密钥操作，比如：

  * [加密解密](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-huks-encryption-decryption-overview)。

  * [签名验签](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-huks-signing-signature-verification-overview)。

  * [密钥协商](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-huks-key-agreement-overview)。

  * [密钥派生](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-huks-key-derivation-overview)。




#### 通用开发流程

HUKS基于密钥会话来操作数据，使用密钥时基于以下流程：

  1. （必选）初始化密钥会话[huks.initSession()](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-security_huks#func-initsessionstring-huksoptions)。

传入密钥别名和密钥操作参数，初始化一个密钥会话并获取会话句柄。其中密钥操作参数中必须包含对应密码算法所必须的参数，包括密码算法、密钥大小、密钥目的、工作模式、填充模式、散列模式、IV、Nonce、AAD等。

  2. （可选）分段操作数据[huks.updateSession()](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-security_huks#func-updatesessionhukshandleid-huksoptions-bytes)。

当使用的数据过大（超过100K）或是部分密码算法有要求时，需要对数据进行分段操作。否则可跳过此步骤。

  3. （必选）结束密钥会话[huks.finishSession()](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-security_huks#func-finishsessionhukshandleid-huksoptions-bytes)。

操作最后一段数据并结束密钥会话。




以上任一阶段中发生错误或不需要此次密钥操作数据，均需要取消会话[huks.abortSession()](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-security_huks#func-abortsessionhukshandleid-huksoptions)，终止密钥的使用。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5b/v3/uCZzlBJqSfOhM3iv6_iR8w/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111610Z&HW-CC-Expire=86400&HW-CC-Sign=370EB4A416C12437D0C21CDC0353027587BB26A89746357F923A7D117F37C3A5)

对于内存较小设备，建议业务根据设备存储能力，进行数据切分，循环调用[huks.initSession()](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-security_huks#func-initsessionstring-huksoptions)和[huks.finishSession()](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-security_huks#func-finishsessionhukshandleid-huksoptions-bytes)处理。
