---
name: cangjie-guides/cj-huks-key-derivation-overview
title: 密钥派生介绍及算法规格
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-huks-key-derivation-overview
nodePath: 系统 / 安全 / Universal Keystore Kit（密钥管理服务） / 密钥使用 / 密钥派生 / 密钥派生介绍及算法规格
---

# 密钥派生介绍及算法规格  
  
#### 密钥派生介绍

在密码学中，密钥派生函数（Key derivation function，KDF）使用伪随机函数从诸如主密码或密码的秘密值中派生出一个或多个密钥。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/da/v3/WtadlUo3T2m-ufhAY34aig/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090128Z&HW-CC-Expire=86400&HW-CC-Sign=30649D0E5A7373CC9AC08B3A70026B983CAB51FC3C18F3A2285F0E1D87332E08)

  * 在HUKS中只能通过HUKS托管的密钥进行密钥派生。

  * 使用现有密钥别名作为派生结果密钥别名会把现有密钥覆盖。




#### 支持的算法

以下为密钥派生支持的规格说明。

派生密钥是业务基于三段式得到密钥会话结果，业务可决定派生密钥是否由HUKS管理（即密钥不出[TEE](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-huks-concepts)）亦或是业务独立管理。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/75/v3/cm0vvj3FS_aerJb3yJAXDA/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090128Z&HW-CC-Expire=86400&HW-CC-Sign=CB2D2BCE1DC05FF1722B512A4D146B643CF3BC257F55B2DB37A0D5E861E4BF67)

PBKDF2/HKDF仅支持HUKS托管密钥的派生，不支持直接基于非HUKS托管的密钥进行派生，如：用户的口令。密钥托管参考[密钥导入](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-huks-key-import-overview)。

算法/摘要 | 派生密钥的算法/长度 | 派生结果密钥可用算法/长度 | API级别  
---|---|---|---  
HKDF/SHA256 | AES/192-256 | AES/128/192/256 HMAC/8-1024 SM4/128 | 15+  
HKDF/SHA384 | AES/256 | AES/128/192/256 HMAC/8-1024 SM4/128 | 15+  
HKDF/SHA512 | AES/256 | AES/128/192/256 HMAC/8-1024 SM4/128 | 15+  
PBKDF2/SHA256 | AES/192-256 | AES/128/192/256 HMAC/8-1024 SM4/128 | 15+  
PBKDF2/SHA384 | AES/256 | AES/128/192/256 HMAC/8-1024 SM4/128 | 15+  
PBKDF2/SHA512 | AES/256 | AES/128/192/256 HMAC/8-1024 SM4/128 | 15+  
HMAC/SHA256 | AES/192-256 | AES/256 HMAC/256 | 12+  
HMAC/SHA384 | AES/256 | HMAC/384 | 12+  
HMAC/SHA512 | AES/256 | HMAC/512 | 12+  
HKDF/SHA256 | X25519/256 | X25519/256 | 12+  
HKDF/SHA384 | X25519/256 | X25519/256 | 12+  
HKDF/SHA512 | X25519/256 | X25519/256 | 12+
