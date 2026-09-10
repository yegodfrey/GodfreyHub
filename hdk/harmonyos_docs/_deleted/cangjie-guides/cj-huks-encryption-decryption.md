---
name: cangjie-guides/cj-huks-encryption-decryption
title: 加解密
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-huks-encryption-decryption
nodePath: 系统 / 安全 / Universal Keystore Kit（密钥管理服务） / 密钥使用 / 加密/解密 / 开发指导 / 加解密
---

# 加解密

以AES 128、RSA 2048和SM2为例，完成加解密。具体的场景介绍及支持的算法规格，请参见[密钥生成支持的算法](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-huks-encryption-decryption-overview#支持的算法)。

#### 开发步骤

#### [h2]生成密钥

  1. 指定密钥别名。

  2. 初始化密钥属性集。

  3. 调用[generateKeyItem](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-security_huks#func-generatekeyitemstring-huksoptions)生成密钥，具体请参见[密钥生成](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-huks-key-generation-overview)。




除此之外，开发者也可以参考[密钥导入](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-huks-key-import-overview)，导入已有的密钥。

#### [h2]加密

  1. 获取密钥别名，即在生成密钥时指定的密钥别名。

  2. 获取待加密的数据。

  3. 获取加密[算法参数配置](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-security_huks#class-huksparam)。

文档中提供多个示例，当使用不同算法时，请注意配置对应参数。

     * 使用AES算法加密，用例中选取的分组模式为CBC、填充模式为PKCS7时，必须要填参数IV，请参见开发案例：AES/CBC/PKCS7。
     * 使用AES算法加密，用例中选取的分组模式为GCM时，必须要填参数NONCE，AAD可选，请参见开发案例：AES/GCM/NoPadding。
     * 使用RSA算法加密，需要选择其对应分组模式以及填充模式和摘要算法DIGEST，请参见开发案例：RSA/ECB/PKCS1_V1_5和开发案例：RSA/ECB/OAEP/SHA256。
     * 使用SM2算法加密，摘要算法DIGEST需要指定为SM3，请参见开发案例：SM2。

详细规格请参见[加密/解密介绍及算法规格](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-huks-encryption-decryption-overview)。

  4. 调用[initSession](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-security_huks#func-initsessionstring-huksoptions)初始化密钥会话，并获取会话的句柄handle。

  5. 调用[finishSession](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-security_huks#func-finishsessionhukshandleid-huksoptions-bytes)结束密钥会话，获取加密后的密文。




#### [h2]解密

  1. 获取密钥别名，即在生成密钥时指定的密钥别名。

  2. 获取待解密的密文。

  3. 获取解密[算法参数配置](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-security_huks#class-huksparam)。

文档中提供多个示例，当使用不同算法时，请注意配置对应参数。

     * 使用AES算法解密，用例中选取的分组模式为GCM时，必须要填参数NONCE和参数AEAD，AAD可选，请参见开发案例：AES/GCM/NoPadding。
     * 其余示例参数与加密要求一致。

详细规格请参见[加密/解密介绍及算法规格](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-huks-encryption-decryption-overview)。

  4. 调用[initSession](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-security_huks#func-initsessionstring-huksoptions)初始化密钥会话，并获取会话的句柄handle。

  5. 调用[finishSession](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-security_huks#func-finishsessionhukshandleid-huksoptions-bytes)结束密钥会话，获取解密后的数据。




#### [h2]删除密钥

当密钥废弃不用时，需要调用[deleteKeyItem](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-security_huks#func-deletekeyitemstring-huksoptions)删除密钥，具体请参见[密钥删除](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-huks-delete-key)。

#### 开发案例

#### [h2]AES/CBC/PKCS7
    
    
    /*
     * 以下以AES/CBC/PKCS7的操作使用为例
     */
    import kit.PerformanceAnalysisKit.Hilog
    import kit.BasicServicesKit.*
    import kit.CoreFileKit.*
    import kit.AbilityKit.*
    import kit.UniversalKeystoreKit.*
    
    let aesKeyAlias = 'test_aesKeyAlias'  // 密钥别名，在生成密钥时指定，在加密、解密和删除密钥时使用
    var handle: ?HuksHandleId = None
    let plainText = 'PLAIN_TEXT'  // 待加密的明文
    let IV = 'TEST_IV' // 此处为样例代码，实际使用需采用随机值
    var cipherData: ?Array<UInt8> = [] // 加密后的密文数据
    
    func StringToUint8Array(str: String) {
        return str.toArray()
    }
    
    func Uint8ArrayToString(fileData: Array<UInt8>) {
        return String.fromUtf8(fileData)
    }
    
    func GetAesGenerateProperties() {
        let properties: Array<HuksParam> = [
            HuksParam(
                HuksTag.HUKS_TAG_ALGORITHM,
                HuksParamValue.Uint32Value(HuksKeyAlg.HUKS_ALG_AES)
            ),
            HuksParam(
                HuksTag.HUKS_TAG_KEY_SIZE,
                HuksParamValue.Uint32Value(HuksKeySize.HUKS_AES_KEY_SIZE_128)
            ),
            HuksParam(
                HuksTag.HUKS_TAG_PURPOSE,
                HuksParamValue.Uint32Value(1 | 2)
    //            HuksKeyPurpose.HUKS_KEY_PURPOSE_ENCRYPT | HuksKeyPurpose.HUKS_KEY_PURPOSE_DECRYPT
            )
        ]
        return properties
    }
    
    func GetAesEncryptProperties() {
        let properties: Array<HuksParam> = [
            HuksParam(
                HuksTag.HUKS_TAG_ALGORITHM,
                HuksParamValue.Uint32Value(HuksKeyAlg.HUKS_ALG_AES)
            ),
            HuksParam(
                HuksTag.HUKS_TAG_KEY_SIZE,
                HuksParamValue.Uint32Value(HuksKeySize.HUKS_AES_KEY_SIZE_128)
            ),
            HuksParam(
                HuksTag.HUKS_TAG_PURPOSE,
                HuksParamValue.Uint32Value(HuksKeyPurpose.HUKS_KEY_PURPOSE_ENCRYPT)
            ),
            HuksParam(
                HuksTag.HUKS_TAG_PADDING,
                HuksParamValue.Uint32Value(HuksKeyPadding.HUKS_PADDING_PKCS7)
            ),
            HuksParam(
                HuksTag.HUKS_TAG_BLOCK_MODE,
                HuksParamValue.Uint32Value(HuksCipherMode.HUKS_MODE_CBC)
            ),
            HuksParam(
                HuksTag.HUKS_TAG_IV,
                HuksParamValue.BytesValue(IV.toArray())
            )
        ]
        return properties
    }
    
    func GetAesDecryptProperties() {
        let properties: Array<HuksParam> = [
            HuksParam(
                HuksTag.HUKS_TAG_ALGORITHM,
                HuksParamValue.Uint32Value(HuksKeyAlg.HUKS_ALG_AES)
            ),
            HuksParam(
                HuksTag.HUKS_TAG_KEY_SIZE,
                HuksParamValue.Uint32Value(HuksKeySize.HUKS_AES_KEY_SIZE_128)
            ),
            HuksParam(
                HuksTag.HUKS_TAG_PURPOSE,
                HuksParamValue.Uint32Value(HuksKeyPurpose.HUKS_KEY_PURPOSE_DECRYPT)
            ),
            HuksParam(
                HuksTag.HUKS_TAG_PADDING,
                HuksParamValue.Uint32Value(HuksKeyPadding.HUKS_PADDING_PKCS7)
            ),
            HuksParam(
                HuksTag.HUKS_TAG_BLOCK_MODE,
                HuksParamValue.Uint32Value(HuksCipherMode.HUKS_MODE_CBC)
            ),
            HuksParam(
                HuksTag.HUKS_TAG_IV,
                HuksParamValue.BytesValue(IV.toArray())
            )
        ]
        return properties
    }
    
    /*
     * 模拟生成密钥场景
     */
    func GenerateAesKey() {
        // 获取生成密钥算法参数配置
        let genProperties = GetAesGenerateProperties()
        let options: HuksOptions = HuksOptions(properties: genProperties, inData: Bytes())
    
        // 调用generateKeyItem，aesKeyAlias是密钥别名，由用户指定
        generateKeyItem(aesKeyAlias, options)
    }
    
    /*
     * 模拟加密场景
     */
    func EncryptData() {
        // 获取加密算法参数配置
        let encryptProperties = GetAesEncryptProperties()
        let options: HuksOptions = HuksOptions(
            properties: encryptProperties,
            inData: StringToUint8Array(plainText) // plainText是待加密的数据
        )
        // 调用initSession获取handle，aesKeyAlias是密钥别名，在生成密钥时进行指定的
        handle = initSession(aesKeyAlias, options).handle
        // 调用finishSession获取加密后的密文
        cipherData = finishSession(handle.getOrThrow(), options)
    }
    
    /*
     * 模拟解密场景
     */
    func DecryptData() {
        // 获取解密算法参数配置
        let decryptOptions = GetAesDecryptProperties()
        let options: HuksOptions = HuksOptions(
            properties: decryptOptions,
            inData: cipherData.getOrThrow()
        )
        // 调用initSession获取handle，aesKeyAlias是密钥别名，在生成密钥时进行指定的
        handle = initSession(aesKeyAlias, options).handle
        // 调用finishSession获取解密后的数据
        let result = finishSession(handle.getOrThrow(), options)
    }
    
    /*
     * 模拟删除密钥场景
     */
    func DeleteKey() {
        let emptyOptions: HuksOptions = HuksOptions()
        // 调用deleteKeyItem删除密钥，aesKeyAlias是密钥别名，在生成密钥时进行指定的
        deleteKeyItem(aesKeyAlias, emptyOptions)
    }

#### [h2]AES/GCM/NoPadding
    
    
    /*
     * 以下以AES/GCM/NoPadding的操作使用为例
     */
    import kit.PerformanceAnalysisKit.Hilog
    import kit.BasicServicesKit.*
    import kit.CoreFileKit.*
    import kit.AbilityKit.*
    import kit.UniversalKeystoreKit.*
    
    let aesKeyAlias = 'test_aesKeyAlias' // 密钥别名，在生成密钥时指定，在加密、解密和删除密钥时使用
    var handle: ?HuksHandleId = None
    let plainText = 'PLAIN_TEXT' // 待加密的明文数据
    var cipherData: ?Array<UInt8> = [] // 加密后的密文数据
    let AAD = 'TEST_AAD' // 此处为样例代码，实际使用需采用随机值
    let NONCE = 'TEST_NONCE' // 此处为样例代码，实际使用需采用随机值
    
    func StringToUint8Array(str: String) {
        return str.toArray()
    }
    
    func Uint8ArrayToString(fileData: Array<UInt8>) {
        return String.fromUtf8(fileData)
    }
    
    func GetAesGenerateProperties() {
        let properties: Array<HuksParam> = [
            HuksParam(
                HuksTag.HUKS_TAG_ALGORITHM,
                HuksParamValue.Uint32Value(HuksKeyAlg.HUKS_ALG_AES)
            ),
            HuksParam(
                HuksTag.HUKS_TAG_KEY_SIZE,
                HuksParamValue.Uint32Value(HuksKeySize.HUKS_AES_KEY_SIZE_128)
            ),
            HuksParam(
                HuksTag.HUKS_TAG_PURPOSE,
                HuksParamValue.Uint32Value(1 | 2)
            )
        ]
        return properties
    }
    
    func GetAesGcmEncryptProperties() {
        let properties: Array<HuksParam> = [
            HuksParam(
                HuksTag.HUKS_TAG_ALGORITHM,
                HuksParamValue.Uint32Value(HuksKeyAlg.HUKS_ALG_AES)
            ),
            HuksParam(
                HuksTag.HUKS_TAG_KEY_SIZE,
                HuksParamValue.Uint32Value(HuksKeySize.HUKS_AES_KEY_SIZE_128)
            ),
            HuksParam(
                HuksTag.HUKS_TAG_PURPOSE,
                HuksParamValue.Uint32Value(HuksKeyPurpose.HUKS_KEY_PURPOSE_ENCRYPT)
            ),
            HuksParam(
                HuksTag.HUKS_TAG_PADDING,
                HuksParamValue.Uint32Value(HuksKeyPadding.HUKS_PADDING_NONE)
            ),
            HuksParam(
                HuksTag.HUKS_TAG_BLOCK_MODE,
                HuksParamValue.Uint32Value(HuksCipherMode.HUKS_MODE_GCM)
            ),
            HuksParam(
                HuksTag.HUKS_TAG_NONCE,
                HuksParamValue.BytesValue(NONCE.toArray())
            ),
            HuksParam(
                HuksTag.HUKS_TAG_ASSOCIATED_DATA,
                HuksParamValue.BytesValue(AAD.toArray())
            )
        ]
        return properties
    }
    
    func GetAesGcmDecryptProperties(cipherData: Array<UInt8>) {
        let properties: Array<HuksParam> = [
            HuksParam(
                HuksTag.HUKS_TAG_ALGORITHM,
                HuksParamValue.Uint32Value(HuksKeyAlg.HUKS_ALG_AES)
            ),
            HuksParam(
                HuksTag.HUKS_TAG_KEY_SIZE,
                HuksParamValue.Uint32Value(HuksKeySize.HUKS_AES_KEY_SIZE_128)
            ),
            HuksParam(
                HuksTag.HUKS_TAG_PURPOSE,
                HuksParamValue.Uint32Value(HuksKeyPurpose.HUKS_KEY_PURPOSE_DECRYPT)
            ),
            HuksParam(
                HuksTag.HUKS_TAG_PADDING,
                HuksParamValue.Uint32Value(HuksKeyPadding.HUKS_PADDING_NONE)
            ),
            HuksParam(
                HuksTag.HUKS_TAG_BLOCK_MODE,
                HuksParamValue.Uint32Value(HuksCipherMode.HUKS_MODE_GCM)
            ),
            HuksParam(
                HuksTag.HUKS_TAG_NONCE,
                HuksParamValue.BytesValue(NONCE.toArray())
            ),
            HuksParam(
                HuksTag.HUKS_TAG_ASSOCIATED_DATA,
                HuksParamValue.BytesValue(AAD.toArray())
            ),
            HuksParam(
                HuksTag.HUKS_TAG_AE_TAG,
                HuksParamValue.BytesValue(cipherData.slice(cipherData.size - 16, 16).toArray())
            )
        ]
        return properties
    }
    
    /*
     * 模拟生成密钥场景
     */
    func GenerateAesKey() {
        // 获取生成密钥算法参数配置
        let genProperties = GetAesGenerateProperties()
        let options: HuksOptions = HuksOptions(properties: genProperties, inData: Bytes())
        // 调用generateKeyItem，aesKeyAlias是密钥别名，由用户指定
        generateKeyItem(aesKeyAlias, options)
    }
    
    /*
     * 模拟加密场景
     */
    func EncryptData() {
        // 获取加密算法参数配置
        let encryptProperties = GetAesGcmEncryptProperties()
        let options: HuksOptions = HuksOptions(
            properties: encryptProperties,
            inData: StringToUint8Array(plainText)
        )
        // 调用initSession获取handle，aesKeyAlias是密钥别名，在生成密钥时进行指定的
        handle = initSession(aesKeyAlias, options).handle
        // 调用finishSession获取加密后的密文
        cipherData = finishSession(handle.getOrThrow(), options)
    }
    
    /*
     * 模拟解密场景
     */
    func DecryptData() {
        // 获取解密算法参数配置
        let decryptOptions = GetAesGcmDecryptProperties(cipherData.getOrThrow())
        let options: HuksOptions = HuksOptions(
            properties: decryptOptions,
            inData: cipherData
                .getOrThrow()
                .slice(0, cipherData
                    .getOrThrow()
                    .size - 16)
        )
        // 调用initSession获取handle，aesKeyAlias是密钥别名，在生成密钥时进行指定的
        handle = initSession(aesKeyAlias, options).handle
        // 调用finishSession获取解密后的数据
        let result = finishSession(handle.getOrThrow(), options)
    }
    
    /*
     * 模拟删除密钥场景
     */
    func DeleteKey() {
        let emptyOptions: HuksOptions = HuksOptions()
        // 调用deleteKeyItem删除密钥，aesKeyAlias是密钥别名，在生成密钥时进行指定的
        deleteKeyItem(aesKeyAlias, emptyOptions)
    }

#### [h2]RSA/ECB/PKCS1_V1_5
    
    
    /*
     * 以下以RSA/ECB/PKCS1_V1_5模式的操作使用为例
     */
    import kit.PerformanceAnalysisKit.Hilog
    import kit.BasicServicesKit.*
    import kit.CoreFileKit.*
    import kit.AbilityKit.*
    import kit.UniversalKeystoreKit.*
    
    let rsaKeyAlias = 'test_rsaKeyAlias'  // 密钥别名，在生成密钥时指定，在加密、解密和删除密钥时使用
    var handle: ?HuksHandleId = None
    let plainText = 'PLAIN_TEXT' // 待加密的明文
    var cipherData: ?Array<UInt8> = [] // 加密后的密文数据
    
    func StringToUint8Array(str: String) {
        return str.toArray()
    }
    
    func Uint8ArrayToString(fileData: Array<UInt8>) {
        return String.fromUtf8(fileData)
    }
    
    func GetRsaGenerateProperties() {
        let properties: Array<HuksParam> = [
            HuksParam(
                HuksTag.HUKS_TAG_ALGORITHM,
                HuksParamValue.Uint32Value(HuksKeyAlg.HUKS_ALG_RSA)
            ),
            HuksParam(
                HuksTag.HUKS_TAG_KEY_SIZE,
                HuksParamValue.Uint32Value(HuksKeySize.HUKS_RSA_KEY_SIZE_2048)
            ),
            HuksParam(
                HuksTag.HUKS_TAG_PURPOSE,
                HuksParamValue.Uint32Value(1 | 2)
            )
        ]
        return properties
    }
    
    func GetRsaEncryptProperties() {
        let properties: Array<HuksParam> = [
            HuksParam(
                HuksTag.HUKS_TAG_ALGORITHM,
                HuksParamValue.Uint32Value(HuksKeyAlg.HUKS_ALG_RSA)
            ),
            HuksParam(
                HuksTag.HUKS_TAG_KEY_SIZE,
                HuksParamValue.Uint32Value(HuksKeySize.HUKS_RSA_KEY_SIZE_2048)
            ),
            HuksParam(
                HuksTag.HUKS_TAG_PURPOSE,
                HuksParamValue.Uint32Value(HuksKeyPurpose.HUKS_KEY_PURPOSE_ENCRYPT)
            ),
            HuksParam(
                HuksTag.HUKS_TAG_PADDING,
                HuksParamValue.Uint32Value(HuksKeyPadding.HUKS_PADDING_PKCS1_V1_5)
            ),
            HuksParam(
                HuksTag.HUKS_TAG_BLOCK_MODE,
                HuksParamValue.Uint32Value(HuksCipherMode.HUKS_MODE_ECB)
            ),
            HuksParam(
                HuksTag.HUKS_TAG_DIGEST,
                HuksParamValue.Uint32Value(HuksKeyDigest.HUKS_DIGEST_NONE)
            )
        ]
        return properties
    }
    
    func GetRsaDecryptProperties() {
        let properties: Array<HuksParam> = [
            HuksParam(
                HuksTag.HUKS_TAG_ALGORITHM,
                HuksParamValue.Uint32Value(HuksKeyAlg.HUKS_ALG_RSA)
            ),
            HuksParam(
                HuksTag.HUKS_TAG_KEY_SIZE,
                HuksParamValue.Uint32Value(HuksKeySize.HUKS_RSA_KEY_SIZE_2048)
            ),
            HuksParam(
                HuksTag.HUKS_TAG_PURPOSE,
                HuksParamValue.Uint32Value(HuksKeyPurpose.HUKS_KEY_PURPOSE_DECRYPT)
            ),
            HuksParam(
                HuksTag.HUKS_TAG_PADDING,
                HuksParamValue.Uint32Value(HuksKeyPadding.HUKS_PADDING_PKCS1_V1_5)
            ),
            HuksParam(
                HuksTag.HUKS_TAG_BLOCK_MODE,
                HuksParamValue.Uint32Value(HuksCipherMode.HUKS_MODE_ECB)
            ),
            HuksParam(
                HuksTag.HUKS_TAG_DIGEST,
                HuksParamValue.Uint32Value(HuksKeyDigest.HUKS_DIGEST_NONE)
            )
        ]
        return properties
    }
    
    /*
     * 模拟生成密钥场景
     */
    func GenerateRsaKey() {
        // 获取生成密钥算法参数配置
        let genProperties = GetRsaGenerateProperties()
        let options: HuksOptions = HuksOptions(properties: genProperties, inData: Bytes())
        // 调用generateKeyItem，rsaKeyAlias是密钥别名，由用户指定
        generateKeyItem(rsaKeyAlias, options)
    }
    
    /*
     * 模拟加密场景
     */
    func EncryptData() {
        // 获取加密算法参数配置
        let encryptProperties = GetRsaEncryptProperties()
        let options: HuksOptions = HuksOptions(
            properties: encryptProperties,
            inData: StringToUint8Array(plainText) // plainText是待加密的明文数据
        )
        // 调用initSession获取handle，rsaKeyAlias是密钥别名，在生成密钥时进行指定的
        handle = initSession(rsaKeyAlias, options).handle
        // 调用finishSession获取加密后的密文
        finishSession(handle.getOrThrow(), options)
    }
    
    /*
     * 模拟解密场景
     */
    func DecryptData() {
        // 获取解密算法参数配置
        let decryptOptions = GetRsaDecryptProperties()
        let options: HuksOptions = HuksOptions(
            properties: decryptOptions,
            inData: cipherData.getOrThrow()  // 加密后的密文数据
        )
        // 调用initSession获取handle，rsaKeyAlias是密钥别名，在生成密钥时进行指定的
        handle = initSession(rsaKeyAlias, options).handle
        // 调用finishSession获取解密后的数据
        finishSession(handle.getOrThrow(), options)
    }
    
    /*
     * 模拟删除密钥场景
     */
    func DeleteKey() {
        let emptyOptions: HuksOptions = HuksOptions()
        // 调用deleteKeyItem删除密钥，rsaKeyAlias是密钥别名，在生成密钥时进行指定的
        deleteKeyItem(rsaKeyAlias, emptyOptions)
    }

#### [h2]RSA/ECB/OAEP/SHA256
    
    
    /*
     * 以下以RSA/ECB/OAEP/SHA256模式的操作使用为例
     */
    import kit.PerformanceAnalysisKit.Hilog
    import kit.BasicServicesKit.*
    import kit.CoreFileKit.*
    import kit.AbilityKit.*
    import kit.UniversalKeystoreKit.*
    
    let rsaKeyAlias = 'test_rsaKeyAlias' // 密钥别名，在生成密钥时指定，在加密、解密和删除密钥时使用
    var handle: ?HuksHandleId = None
    let plainText = 'PLAIN_TEXT' // 待加密的明文
    var cipherData: ?Array<UInt8> = [] // 加密后的密文数据
    
    func StringToUint8Array(str: String) {
        return str.toArray()
    }
    
    func Uint8ArrayToString(fileData: Array<UInt8>) {
        return String.fromUtf8(fileData)
    }
    
    func GetRsaGenerateProperties() {
        let properties: Array<HuksParam> = [
            HuksParam(
                HuksTag.HUKS_TAG_ALGORITHM,
                HuksParamValue.Uint32Value(HuksKeyAlg.HUKS_ALG_RSA)
            ),
            HuksParam(
                HuksTag.HUKS_TAG_KEY_SIZE,
                HuksParamValue.Uint32Value(HuksKeySize.HUKS_RSA_KEY_SIZE_2048)
            ),
            HuksParam(
                HuksTag.HUKS_TAG_PURPOSE,
                HuksParamValue.Uint32Value(1 | 2)
            )
        ]
        return properties
    }
    
    func GetRsaEncryptProperties() {
        let properties: Array<HuksParam> = [
            HuksParam(
                HuksTag.HUKS_TAG_ALGORITHM,
                HuksParamValue.Uint32Value(HuksKeyAlg.HUKS_ALG_RSA)
            ),
            HuksParam(
                HuksTag.HUKS_TAG_KEY_SIZE,
                HuksParamValue.Uint32Value(HuksKeySize.HUKS_RSA_KEY_SIZE_2048)
            ),
            HuksParam(
                HuksTag.HUKS_TAG_PURPOSE,
                HuksParamValue.Uint32Value(HuksKeyPurpose.HUKS_KEY_PURPOSE_ENCRYPT)
            ),
            HuksParam(
                HuksTag.HUKS_TAG_PADDING,
                HuksParamValue.Uint32Value(HuksKeyPadding.HUKS_PADDING_OAEP)
            ),
            HuksParam(
                HuksTag.HUKS_TAG_BLOCK_MODE,
                HuksParamValue.Uint32Value(HuksCipherMode.HUKS_MODE_ECB)
            ),
            HuksParam(
                HuksTag.HUKS_TAG_DIGEST,
                HuksParamValue.Uint32Value(HuksKeyDigest.HUKS_DIGEST_SHA256)
            )
        ]
        return properties
    }
    
    func GetRsaDecryptProperties() {
        let properties: Array<HuksParam> = [
            HuksParam(
                HuksTag.HUKS_TAG_ALGORITHM,
                HuksParamValue.Uint32Value(HuksKeyAlg.HUKS_ALG_RSA)
            ),
            HuksParam(
                HuksTag.HUKS_TAG_KEY_SIZE,
                HuksParamValue.Uint32Value(HuksKeySize.HUKS_RSA_KEY_SIZE_2048)
            ),
            HuksParam(
                HuksTag.HUKS_TAG_PURPOSE,
                HuksParamValue.Uint32Value(HuksKeyPurpose.HUKS_KEY_PURPOSE_DECRYPT)
            ),
            HuksParam(
                HuksTag.HUKS_TAG_PADDING,
                HuksParamValue.Uint32Value(HuksKeyPadding.HUKS_PADDING_OAEP)
            ),
            HuksParam(
                HuksTag.HUKS_TAG_BLOCK_MODE,
                HuksParamValue.Uint32Value(HuksCipherMode.HUKS_MODE_ECB)
            ),
            HuksParam(
                HuksTag.HUKS_TAG_DIGEST,
                HuksParamValue.Uint32Value(HuksKeyDigest.HUKS_DIGEST_SHA256)
            )
        ]
        return properties
    }
    
    /*
     * 模拟生成密钥场景
     */
    func GenerateRsaKey() {
        // 获取生成密钥算法参数配置
        let genProperties = GetRsaGenerateProperties()
        let options: HuksOptions = HuksOptions(properties: genProperties, inData: Bytes())
        // 调用generateKeyItem，rsaKeyAlias是密钥别名，在生成密钥时进行指定的
        generateKeyItem(rsaKeyAlias, options)
    }
    
    /*
     * 模拟加密场景
     */
    func EncryptData() {
        // 获取加密算法参数配置
        let encryptProperties = GetRsaEncryptProperties()
        let options: HuksOptions = HuksOptions(
            properties: encryptProperties,
            inData: StringToUint8Array(plainText)
        )
        // 调用initSession获取handle，rsaKeyAlias是密钥别名，在生成密钥时进行指定的
        handle = initSession(rsaKeyAlias, options).handle
        // 调用finishSession获取加密后的密文
        finishSession(handle.getOrThrow(), options)
    }
    
    /*
     * 模拟解密场景
     */
    func DecryptData() {
        // 获取解密算法参数配置
        let decryptOptions = GetRsaDecryptProperties()
        let options: HuksOptions = HuksOptions(
            properties: decryptOptions,
            inData: cipherData.getOrThrow() // 加密后的密文数据
        )
        // 调用initSession获取handle，rsaKeyAlias是密钥别名，在生成密钥时进行指定的
        handle = initSession(rsaKeyAlias, options).handle
        // 调用finishSession获取解密后的数据
        finishSession(handle.getOrThrow(), options)
    }
    
    /*
     * 模拟删除密钥场景
     */
    func DeleteKey() {
        let emptyOptions: HuksOptions = HuksOptions()
        // 调用deleteKeyItem删除密钥，rsaKeyAlias是密钥别名，在生成密钥时进行指定的
        deleteKeyItem(rsaKeyAlias, emptyOptions)
    }

#### [h2]SM2
    
    
    /*
     * 以下以SM2模式的操作使用为例
     */
    import kit.PerformanceAnalysisKit.Hilog
    import kit.BasicServicesKit.*
    import kit.CoreFileKit.*
    import kit.AbilityKit.*
    import kit.UniversalKeystoreKit.*
    
    let sm2KeyAlias = 'test_sm2KeyAlias' // 密钥别名，在生成密钥时指定，在加密、解密和删除密钥时使用
    var handle: ?HuksHandleId = None
    let plainText = 'PLAIN_TEXT' // 待加密的明文
    var cipherData: ?Array<UInt8> = [] // 加密后的密文数据
    
    func StringToUint8Array(str: String) {
        return str.toArray()
    }
    
    func Uint8ArrayToString(fileData: Array<UInt8>) {
        return String.fromUtf8(fileData)
    }
    
    func GetSm2GenerateProperties() {
        let properties: Array<HuksParam> = [
            HuksParam(
                HuksTag.HUKS_TAG_ALGORITHM,
                HuksParamValue.Uint32Value(HuksKeyAlg.HUKS_ALG_SM2)
            ),
            HuksParam(
                HuksTag.HUKS_TAG_KEY_SIZE,
                HuksParamValue.Uint32Value(HuksKeySize.HUKS_SM2_KEY_SIZE_256)
            ),
            HuksParam(
                HuksTag.HUKS_TAG_PURPOSE,
                HuksParamValue.Uint32Value(1 | 2)
            )
        ]
        return properties
    }
    
    func GetSm2EncryptProperties() {
        let properties: Array<HuksParam> = [
            HuksParam(
                HuksTag.HUKS_TAG_ALGORITHM,
                HuksParamValue.Uint32Value(HuksKeyAlg.HUKS_ALG_SM2)
            ),
            HuksParam(
                HuksTag.HUKS_TAG_KEY_SIZE,
                HuksParamValue.Uint32Value(HuksKeySize.HUKS_SM2_KEY_SIZE_256)
            ),
            HuksParam(
                HuksTag.HUKS_TAG_PURPOSE,
                HuksParamValue.Uint32Value(HuksKeyPurpose.HUKS_KEY_PURPOSE_ENCRYPT)
            ),
            HuksParam(
                HuksTag.HUKS_TAG_DIGEST,
                HuksParamValue.Uint32Value(HuksKeyDigest.HUKS_DIGEST_SM3)
            )
        ]
        return properties
    }
    
    func GetSm2DecryptProperties() {
        let properties: Array<HuksParam> = [
            HuksParam(
                HuksTag.HUKS_TAG_ALGORITHM,
                HuksParamValue.Uint32Value(HuksKeyAlg.HUKS_ALG_SM2)
            ),
            HuksParam(
                HuksTag.HUKS_TAG_KEY_SIZE,
                HuksParamValue.Uint32Value(HuksKeySize.HUKS_SM2_KEY_SIZE_256)
            ),
            HuksParam(
                HuksTag.HUKS_TAG_PURPOSE,
                HuksParamValue.Uint32Value(HuksKeyPurpose.HUKS_KEY_PURPOSE_DECRYPT)
            ),
            HuksParam(
                HuksTag.HUKS_TAG_DIGEST,
                HuksParamValue.Uint32Value(HuksKeyDigest.HUKS_DIGEST_SM3)
            )
        ]
        return properties
    }
    
    /*
     * 模拟生成密钥场景
     */
    func GenerateSm2Key() {
        // 获取生成密钥算法参数配置
        let genProperties = GetSm2GenerateProperties()
        let options: HuksOptions = HuksOptions(properties: genProperties, inData: Bytes())
        // 调用generateKeyItem生成密钥，sm2KeyAlias是密钥别名，在生成密钥时进行指定的
        generateKeyItem(sm2KeyAlias, options)
    }
    
    /*
     * 模拟加密场景
     */
    func EncryptDataSm2() {
        // 获取加密算法参数配置
        let encryptProperties = GetSm2EncryptProperties()
        let options: HuksOptions = HuksOptions(
            properties: encryptProperties,
            inData: StringToUint8Array(plainText) // plainText是待加密的明文数据
        )
        // 调用initSession获取handle，sm2KeyAlias是密钥别名，在生成密钥时进行指定的
        handle = initSession(sm2KeyAlias, options).handle
        // 调用finishSession获取加密后的密文
        finishSession(handle.getOrThrow(), options)
    }
    
    /*
     * 模拟解密场景
     */
    func DecryptDataSm2() {
        // 获取解密算法参数配置
        let decryptOptions = GetSm2DecryptProperties()
        let options: HuksOptions = HuksOptions(
            properties: decryptOptions,
            inData: cipherData.getOrThrow() // 加密后的密文数据
        )
        // 调用initSession获取handle，sm2KeyAlias是密钥别名，在生成密钥时进行指定的
        handle = initSession(sm2KeyAlias, options).handle
        // 调用finishSession获取解密后的数据
        finishSession(handle.getOrThrow(), options)
    }
    
    /*
     * 模拟删除密钥场景
     */
    func DeleteKey() {
        let emptyOptions: HuksOptions = HuksOptions()
        // 调用deleteKeyItem删除密钥，sm2KeyAlias是密钥别名，在生成密钥时进行指定的
        deleteKeyItem(sm2KeyAlias, emptyOptions)
    }
