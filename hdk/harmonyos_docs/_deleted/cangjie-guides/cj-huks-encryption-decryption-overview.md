---
name: cangjie-guides/cj-huks-encryption-decryption-overview
title: 加密/解密介绍及算法规格
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-huks-encryption-decryption-overview
nodePath: 系统 / 安全 / Universal Keystore Kit（密钥管理服务） / 密钥使用 / 加密/解密 / 加密/解密介绍及算法规格
---

# 加密/解密介绍及算法规格

在HUKS中已经有密钥，需要对一段数据加密或是解密，均可以使用HUKS完成加密/解密操作。

#### 支持的算法

以下为密钥加密/解密支持的规格说明。

#### [h2]手机、平板规格

算法/分组模式/填充模式 | 备注 | API级别  
---|---|---  
AES/CBC/NoPadding AES/CBC/PKCS7 AES/CTR/NoPadding | IV参数必选；CBC模式下，若填充模式选择为NoPadding，因为该模式下要求明文数据必须按照固定长度的块进行加密，如果输入的数据长度不是16的倍数，就需要业务方自行填充，以满足块长度的要求。 | 15+  
AES/GCM/NoPadding | 加密：Nonce参数必选。 解密：Nonce、TAG参数必选。 | 15+  
RSA/ECB/NoPadding RSA/ECB/PKCS1_V1_5 RSA/ECB/OAEP | OAEP填充模式支持的摘要算法：SHA256/SHA384/SHA512。 | 15+  
SM4/CBC/PKCS7 | IV 参数必选。 | 15+  
SM4/CTR/NoPadding SM4/CBC/NoPadding SM4/CFB/NoPadding SM4/OFB/NoPadding | IV 参数必选。 | 12+  
SM2/-/NoPadding | 摘要算法SM3。 | 11+  
DES/CBC/NoPadding DES/ECB/NoPadding | CBC模式下 IV 参数必选。 | 15+  
3DES/CBC/NoPadding 3DES/ECB/NoPadding | CBC模式下 IV 参数必选。 | 15+  
  
算法/分组模式/填充模式 | 备注 | API级别  
---|---|---  
AES/GCM/NoPadding | 加密：Nonce参数必选。 解密：Nonce、TAG参数必选。 | 15+  
AES/CBC/NoPadding AES/CTR/NoPadding | IV参数必选。 | 15+  
DES/ECB/NoPadding | - | 15+  
DES/CBC/NoPadding | IV参数必选。 | 15+  
3DES/ECB/NoPadding | - | 15+  
3DES/CBC/NoPadding | IV参数必选。 | 15+  
RSA/ECB/NoPadding | - | 15+  
RSA/ECB/PKCS1_V1_5 | - | 15+  
RSA/ECB/OAEP | 摘要算法SHA256。 | 15+
