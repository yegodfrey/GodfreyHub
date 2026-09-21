---
name: cangjie-guides/cj-crypto-encrypt-decrypt-by-segment
title: 分段加解密说明
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-crypto-encrypt-decrypt-by-segment
nodePath: 系统 / 安全 / Crypto Architecture Kit（加解密算法框架服务） / 加解密 / 加解密算法规格 / 分段加解密说明
---

# 分段加解密说明

在加解密的过程中，算法库没有对单次或累计的传入数据量设置大小限制，但在传入的数据量较大时（如数据量大于2M），建议开发者将数据分段，完成分段加解密，提高效率。

#### 对称加解密

对称密钥的分段加解密，通过调用[update](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-crypto#func-updatedatablob)实现。

开发者可自定义单次传入的数据量（示例中的updateLength），通过多次调用update接口传入数据。

当前单次支持传入的最大长度为INT_MAX（Uint8Array类型的最大长度）。

**开发示例：** [使用AES对称密钥（GCM模式）分段加解密](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-crypto-aes-sym-encrypt-decrypt-gcm-by-segment)

**开发示例：** [使用SM4对称密钥（GCM模式）分段加解密](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-crypto-sm4-sym-encrypt-decrypt-gcm-by-segment)

#### 非对称加解密

非对称加解密，不支持update操作，仅需要调用[initialize](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-crypto#func-initializecryptomode-key-paramsspec)完成加解密。

非对称密钥的分段加密是指当明文大于单次加密支持的数据长度时（具体长度请参见[非对称密钥加解密算法规格](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-crypto-asym-encrypt-decrypt-spec)），需要将待加密数据分割为合适长度的数据段，并对每个数据段执行加密操作，即创建Cipher对象，然后调用[initialize](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-crypto#func-initializecryptomode-key-paramsspec)接口。

严格意义上说，这是数据的拆分加解密，此时单次传入的数据量长度与密钥规格的长度相关。

  * RSA：填充模式不同，输入的数据的规则不同。请参见[RSA算法规格](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-crypto-asym-encrypt-decrypt-spec#rsa)确认单次传入的数据量长度。
  * SM2：加密长度需要在固定长度进行。具体请参见[SM2算法规格](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-crypto-asym-encrypt-decrypt-spec#sm2)。



#### 常见问题

在分段加解密中，每次更新的数据量是否与加密模式有关？

每次更新的数据量，由开发者自定义，与加密模式无关。

不同的加密模式，仅对加解密参数产生影响，不同的加密模式使用的加解密参数不同，具体请参见[ParamsSpec](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-crypto#class-paramsspec)。
