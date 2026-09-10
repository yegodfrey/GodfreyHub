---
name: cangjie-guides/cj-huks-overview
title: Universal Keystore Kit简介
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-huks-overview
nodePath: 系统 / 安全 / Universal Keystore Kit（密钥管理服务） / Universal Keystore Kit简介
---

# Universal Keystore Kit简介  
  
Universal Keystore Kit（密钥管理服务，下述简称为HUKS）向业务/应用提供各类密钥的统一安全操作能力，包括密钥管理（密钥生成/销毁、密钥导入、密钥证明、密钥协商、密钥派生）及密钥使用（加密/解密、签名/验签、访问控制）等功能。

HUKS管理的密钥可以由业务/应用导入或调用HUKS的接口生成。同时，HUKS提供了密钥访问控制能力，确保存储在HUKS中的密钥被合法正确的访问。

#### 整体架构

如图所示，HUKS模块可以分为如下三大部分：

  * SDK：提供密钥管理的接口供开发者调用。

  * HUKS服务层：实现密钥会话管理及存储管理。

  * HUKS核心层：承载HUKS的核心功能，包括密钥的密码学运算、明文密钥的加解密、密钥访问控制等。




![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/bd/v3/WJLKz7zITtqPCjaYtoE0fA/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111610Z&HW-CC-Expire=86400&HW-CC-Sign=F5DD63B97E12D24A8719E0C99B6B5367C3447918C44D14BAF7EAE7D3F7EC364C)

对于具备安全环境（如[TEE](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-huks-concepts)、安全芯片）的系统/设备，HUKS核心层必须运行在安全环境内。由于安全环境依赖硬件支持，在开源仓中仅为模拟实现，需OEM厂商适配。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/07/v3/ZOrHO6UrSUGQpXg-FFur6w/zh-cn_image_0000002731378777.png?HW-CC-KV=V1&HW-CC-Date=20260903T111610Z&HW-CC-Expire=86400&HW-CC-Sign=3A698FE49E41A7CF07FFB2DE77A525233D55C6D7C15AF18EA45CB4D308B0BD6E)

#### 核心功能

HUKS为开发者提供了密钥全生命周期的管理能力，其核心功能按照密钥生命周期划分如下：

#### [h2]密钥生成

功能 | 说明  
---|---  
**[密钥生成](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-huks-key-generation-overview)** | 随机生成密钥，且在密钥的全生命周期内，其明文仅在安全环境中进行访问操作，不会将明文传递出安全环境。  
**[密钥导入](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-huks-key-import-overview)** | 业务可以将外部生成的密钥导入到HUKS进行管理。  
  
#### [h2]密钥使用

功能 | 说明  
---|---  
**[加密/解密](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-huks-encryption-decryption-overview)** | 使用密钥将数据加密为攻击者无法理解的密文，或使用密钥将数据解密为业务可用的明文。  
**[签名/验签](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-huks-signing-signature-verification-overview)** | 用于认证消息内容以及消息发送者身份的真实性。  
**[密钥协商](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-huks-key-agreement-overview)** | 两个或多个实体通过协商，共同建立会话密钥。  
**[密钥派生](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-huks-key-derivation-overview)** | 从一个现有密钥派生出一个或多个新密钥。  
  
#### [h2]密钥删除

功能 | 说明  
---|---  
**[密钥删除](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-huks-delete-key)** | 安全地删除存储在HUKS中的密钥数据。  
  
#### [h2]密钥证明

功能 | 说明  
---|---  
**[密钥证明](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-huks-key-attestation-overview)** | 为存储在HUKS中的非对称密钥对中的公钥签发证书，从而证明密钥的合法性（如密钥在安全环境中生成）。
