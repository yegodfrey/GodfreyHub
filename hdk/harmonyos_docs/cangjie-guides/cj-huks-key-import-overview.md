---
name: cangjie-guides/cj-huks-key-import-overview
title: 密钥导入介绍及算法规格
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-huks-key-import-overview
nodePath: 系统 / 安全 / Universal Keystore Kit（密钥管理服务） / 密钥生成/导入 / 密钥导入 / 密钥导入介绍及算法规格
---

# 密钥导入介绍及算法规格  
  
如果业务在HUKS外部生成密钥（比如应用间协商生成、服务器端生成），业务可以将密钥导入到HUKS中由HUKS进行管理。密钥一旦导入到HUKS中，在密钥的生命周期内，其明文仅在安全环境中进行访问操作，不会传递出安全环境，保证任何人都无法获取到密钥的明文。

密钥导入的方式包含明文导入和加密导入两种方式。

#### 明文导入

该方式直接将密钥明文导入HUKS，在导入过程中密钥明文会暴露在非安全环境中，一般适用于轻量级设备或低安业务。

  * 推荐使用该方式导入的密钥类型：非对称密钥的公钥。

  * 不推荐使用该方式导入的密钥类型：对称密钥、非对称密钥对。




![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e7/v3/OWHEOfXKTc-3NOtA-rbFUA/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090128Z&HW-CC-Expire=86400&HW-CC-Sign=9C76854E8F244F3706A5438E013114647EF3E913092598A2B46CE6FC0A30F716)

轻量级设备只支持明文导入，不支持加密导入。

#### 加密导入

该方式支持业务与HUKS建立端到端的加密传输通道，将密钥安全加密导入到HUKS中，确保导入传入过程中密钥不被泄露，适用于高安敏感业务。相较于明文导入，加密导入步骤更多，密钥材料更复杂。

推荐使用该方式导入的密钥类型：对称密钥、非对称密钥对。

下图为加密导入密钥开发时序图。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2a/v3/W2oFnLodQ164UDIiekNfMg/zh-cn_image_0000002743077803.png?HW-CC-KV=V1&HW-CC-Date=20260908T090128Z&HW-CC-Expire=86400&HW-CC-Sign=924AC2D1AE563E0072E4EE0A5D005556FD61A7FC11A700ED2C2A5C125ED4F7AB)

根据开发流程，在导入加密密钥过程中，需要依次调用HUKS的能力包括：

  * 生成非对称密钥对并导出公钥，用于设备间密钥协商。
  * 生成对称密钥，用于加密待导入密钥。
  * 使用对称密钥加密待导入密钥，形成密钥密文。
  * 导入加密密钥。
  * 删除密钥。



导出密钥接口返回的[公钥明文材料是按照**X.509** 格式封装](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-huks-concepts#公钥材料格式)，导入加密密钥接口中的密钥材料需满足**Length Data-Data**的格式封装，形如：[(Lengthpart1Datapart1)……(LengthpartnDatapartn)]。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7c/v3/lkVdsBitQrez1bPz-qjtaw/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090128Z&HW-CC-Expire=86400&HW-CC-Sign=703538ECDB9C7728C619EA72250AEEFFC466EC64EC9F00262F6745783DB4A23C)

加密导入密钥时，协商算法支持ECDH和X25519，协商后的Shared_Key使用AES-GCM算法加密Caller_Kek。对应算法套件定义见[HuksUnwrapSuite](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-security_huks#class-huksunwrapsuite)。

#### [h2]加密导入密钥材料格式

内容 | 长度  
---|---  
业务公钥长度LCaller_Pk | 4字节  
业务公钥Caller_Pk | LCaller_Pk字节  
Shared_Key加密参数AAD2长度LAAD2 | 4字节  
Shared_Key加密参数AAD2 | LAAD2字节  
Shared_Key加密参数Nonce2长度LNonce2 | 4字节  
Shared_Key加密参数Nonce2 | LNonce2字节  
Shared_Key加密参数TAG2长度LTAG2 | 4字节  
Shared_Key加密参数TAG2 | LTAG2字节  
Caller_Kek密文长度LCaller_Kek_enc | 4字节  
Caller_Kek密文Caller_Kek_enc | LCaller_Kek_enc字节  
Caller_Kek加密参数AAD3长度LAAD3 | 4字节  
Caller_Kek加密参数AAD3 | LAAD3字节  
Caller_Kek加密参数Nonce3长度LNonce3 | 4字节  
Caller_Kek加密参数Nonce3 | LNonce3字节  
Caller_Kek加密参数TAG3长度LTAG3 | 4字节  
Caller_Kek加密参数TAG3 | LTAG3字节  
密钥明文材料长度的长度LTo_Import_Key_size | 4字节  
密钥明文材料长度To_Import_Key_size | LTo_Import_Key_size字节  
To_Import_Key密文长度LTo_Import_Key_enc | 4字节  
To_Import_Key密文To_Import_Key_enc | LTo_Import_Key_enc字节  
  
#### 支持的算法

以下为密钥导入支持的规格说明。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/cf/v3/uUNMj2IxSTmcmCtwBb1JAQ/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090128Z&HW-CC-Expire=86400&HW-CC-Sign=6E84CA28ABEB9BA9744D24E414CB1FFFD96BDCC8B36174E6E99E98E629CCFA86)

导入RSA密钥时，公钥必须大于或者等于65537。

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
  
#### [h2]轻量级设备规格

轻量级设备所列规格，OEM厂商将基于实际情况决定是否实现，如需使用，请查阅具体厂商提供的说明，确保规格支持再使用。

算法 | 支持的密钥长度 | API级别  
---|---|---  
AES | 128、192、256 | 15+  
DES | 64 | 15+  
3DES | 128、192 | 15+  
RSA | 1024-2048（含），必须是8的倍数 | 15+  
HMAC | 8-1024（含），必须是8的倍数 | 15+  
CMAC | 128 | 15+  
  
#### 导入密钥格式

HUKS支持导入密钥类型众多，各种不同类型对应的密钥格式不尽相同。下表归纳了HUKS导入密钥所支持的密钥类型及对应的密钥材料格式。

密钥类型 | 算法 | 导入格式  
---|---|---  
对称密钥 | - | 密钥字节数据  
非对称密钥-密钥对 | - | [密钥对材料格式](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-huks-concepts#密钥对材料格式)  
非对称密钥-公钥 | ED25519、X25519 | 参考[X25519密钥公钥导入](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-huks-import-key-in-plaintext#导入x25519密钥公钥)  
非对称密钥-公钥 | RSA、ECC、ECDH、DSA、DH、SM2 | X.509规范的DER格式
