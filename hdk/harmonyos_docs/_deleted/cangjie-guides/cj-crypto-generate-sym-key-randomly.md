---
name: cangjie-guides/cj-crypto-generate-sym-key-randomly
title: 随机生成对称密钥
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-crypto-generate-sym-key-randomly
nodePath: 系统 / 安全 / Crypto Architecture Kit（加解密算法框架服务） / 密钥生成和转换 / 密钥生成和转换开发指导 / 随机生成对称密钥
---

# 随机生成对称密钥

以AES和SM4为例，随机生成对称密钥（SymKey），并获得二进制数据。

对称密钥可用于后续的加解密操作，二进制数据可用于存储或传输。

#### 随机生成AES密钥

对应的算法规格请参见[对称密钥生成和转换规格：AES](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-crypto-sym-key-generation-conversion-spec#aes)。

  1. 调用[createSymKeyGenerator](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-crypto#func-createsymkeygeneratorstring)，指定字符串参数'AES256'，创建密钥算法为AES、密钥长度为256位的对称密钥生成器（SymKeyGenerator）。

  2. 调用[generateSymKey](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-crypto#func-generatesymkey)，随机生成对称密钥（SymKey）。

  3. 调用[getEncoded](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-crypto#func-getencoded)，获取密钥的二进制数据。




#### 以随机生成AES密钥为例
    
    
    import kit.CryptoArchitectureKit.*
    import kit.PerformanceAnalysisKit.Hilog
    
    func testSyncGenerateAesKey() {
        // 创建SymKeyGenerator实例。
        let symKeyGenerator = createSymKeyGenerator('AES256')
        // 使用密钥生成器随机生成对称密钥。
        let promiseSymKey = symKeyGenerator.generateSymKey()
        // 获取对称密钥的二进制数据，输出256位密钥。长度为32字节。
        let encodedKey = promiseSymKey.getEncoded()
        Hilog.info(0,"",'key hex: ${encodedKey.data}')
    }

#### 随机生成SM4密钥

对应的算法规格请参见[对称密钥生成和转换规格：SM4](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-crypto-sym-key-generation-conversion-spec#sm4)。

  1. 调用[createSymKeyGenerator](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-crypto#func-createsymkeygeneratorstring)，指定字符串参数'SM4_128'，创建密钥算法为SM4、密钥长度为128位的对称密钥生成器（SymKeyGenerator）。

如果开发者需要使用其他算法，请注意修改此处入参的字符串参数。

  2. 调用[generateSymKey](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-crypto#func-generatesymkey)，随机生成对称密钥（SymKey）。

  3. 调用[getEncoded](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-crypto#func-getencoded)，获取密钥的二进制数据。




#### 以随机生成SM4密钥为例
    
    
    import kit.CryptoArchitectureKit.*
    import kit.PerformanceAnalysisKit.Hilog
    
    func testSyncGenerateSm4Key() {
        // 创建SymKeyGenerator实例。
        let symKeyGenerator = createSymKeyGenerator('SM4_128')
        // 使用密钥生成器随机生成对称密钥。
        let promiseSymKey = symKeyGenerator.generateSymKey()
        // 获取对称密钥的二进制数据，输出128位密钥。长度为16字节。
        let encodedKey = promiseSymKey.getEncoded()
        Hilog.info(0,"",'key hex: ${encodedKey.data}')
    }
