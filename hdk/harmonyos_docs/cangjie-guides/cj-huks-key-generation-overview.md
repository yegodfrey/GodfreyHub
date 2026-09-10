---
name: cangjie-guides/cj-huks-key-generation-overview
title: 密钥生成介绍及算法规格
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-huks-key-generation-overview
nodePath: 系统 / 安全 / Universal Keystore Kit（密钥管理服务） / 密钥生成/导入 / 密钥生成 / 密钥生成介绍及算法规格
---

# 密钥生成介绍及算法规格  
  
#### 密钥生成介绍

当业务需要使用HUKS生成随机密钥，并由HUKS进行安全保存时，可以调用HUKS的接口生成密钥。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/37/v3/V6YnjfSGRammz79SAITvuw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090128Z&HW-CC-Expire=86400&HW-CC-Sign=EDF18864A59D206C6C2DCA0D5C935A46FCE6C42C0556509A4A4BE4171615133B)

密钥别名中禁止包含个人数据等敏感信息。

  * 随机生成：指HUKS在生成密钥时，利用密码学安全的伪随机数，提高密钥的随机性、不可预测性以及不可重现性，确保生成的密钥难以被推测。
  * 安全保存：指通过HUKS生成的密钥，除了非对称密钥中的公钥外，密钥的全生命周期（从生成到销毁）均只能由HUKS在安全存储区使用，且生成的密钥文件不能被除HUKS以外的任何业务直接访问。即使是生成密钥的业务，后续也只能通过HUKS提供的接口执行密钥操作，从而获取操作结果。
  * 密钥用途：一个密钥只能有一类用途，例如：无法通过同一个密钥进行加解密和签名验签。另外，生成密钥时指定的用途要与使用时的方式一致，否则会导致异常。



#### 密钥存储安全等级

支持开发者指定存储安全等级，默认为CE，可取值如表所示。

名称 | 值 | 说明  
---|---|---  
HUKS_AUTH_STORAGE_LEVEL_DE | 0 | 表示密钥仅在开机后可访问。  
HUKS_AUTH_STORAGE_LEVEL_CE | 1 | 表示密钥仅在首次解锁后可访问。  
HUKS_AUTH_STORAGE_LEVEL_ECE | 2 | 表示密钥仅在解锁状态时可访问。  
  
#### 支持的算法

以下为密钥生成支持的规格说明。

#### [h2]标准设备规格

算法 | 支持的密钥长度 | API级别  
---|---|---  
AES | 128、192、256 | 15+  
RSA | 2048、3072、4096 | 15+  
RSA | 1024-2048（含），必须是8的倍数 | 15+  
HMAC | 8-1024（含），必须是8的倍数 | 15+  
ECC | 256、384、521 | 15+  
ED25519 | 256 | 15+  
X25519 | 256 | 15+  
DH | 2048 | 15+  
SM2 | 256 | 15+  
SM4 | 128 | 15+  
DES | 64 | 15+  
3DES | 128、192 | 15+  
  
![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/73/v3/-x3jxy6SQb6WNu8YEmaSXw/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090128Z&HW-CC-Expire=86400&HW-CC-Sign=6DDC267C97CDBD4C501236582AFD865FF7B3E03179165FD8E81FA3F78340790F)

DH算法采用FFDHE知名安全素数群。

DES和3DES算法仅提供给特定场景使用，其他场景下不推荐使用。

#### [h2]轻量级设备规格

算法 | 支持的密钥长度 | API级别  
---|---|---  
AES | 128、192、256 | 15+  
DES | 64 | 15+  
3DES | 128、192 | 15+  
RSA | 1024-2048（含），必须是8的倍数 | 15+  
HMAC | 8-1024（含），必须是8的倍数 | 15+  
CMAC | 128，算法仅支持3DES | 15+
