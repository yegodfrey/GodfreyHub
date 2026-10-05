---
name: document/cn/openharmony-cangjie/x509_package_interfaces
title: 接口
uri: https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/x509_package_interfaces
source: portal
---

接口 interface DHParamters
    
    public interface DHParamters <: Key {
        override func encodeToPem(): PemEntry
        static func decodeDer(blob: DerBlob): DHParamters
        static func decodeFromPem(text: String): DHParamters
    }

功能：提供 DH 参数接口。 [h2]func decodeDer(DerBlob)
    
    static func decodeDer(blob: DerBlob): DHParamters

功能：将 DH 密钥参数从 DER 格式解码。 ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20240621215228.90049623900131794204053236127925:50001231000000:2800:30ABB6FF0A029C5D9C2DBB500906403B76CC205C1CCD0CCB3682E3E79AD6E5E0.png?needInitFileName=true?needInitFileName=true)
    * DH（Diffie-Hellman）密钥交换协议是一种确保共享KEY安全穿越不安全网络的方法。
    * DER 和 PEM 是两种常见的编码格式，DER 是用二进制 DER 编码的证书。
参数：
    * blob: [DerBlob](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/x509_package_structs#struct-derblob) \- DER 格式的 DH 密钥参数对象。
返回值：
    * [DHParamters](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/x509_package_interfaces#interface-dhparamters) \- 由 DER 格式解码出的 DH 密钥参数。
异常：
    * [X509Exception](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/x509_package_exceptions#class-x509exception) \- 当 DER 格式的 DH 密钥参数内容不正确，无法解析时抛出异常。
[h2]static func decodeFromPem(String)
    
    static func decodeFromPem(text: String): DHParamters

功能：将 DH 密钥参数从 PEM 格式解码。 ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20240621215228.88150849836530121523868912070926:50001231000000:2800:FCEF5992F95B7A56D7D92AE7ED9C57F28ABC3676E8091A1E0C637161D3672F89.png?needInitFileName=true?needInitFileName=true) PEM 是用 ASCLL（BASE64）编码的证书。 参数：
    * text: [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- PEM 格式的 DH 密钥参数字符流。
返回值：
    * [DHParamters](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/x509_package_interfaces#interface-dhparamters) \- 由 PEM 格式解码出的 DH 密钥参数。
异常：
    * [X509Exception](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/x509_package_exceptions#class-x509exception) \- 字符流不符合 PEM 格式时，或文件头不符合 DH 密钥参数头标准 ("-----BEGIN DH PARAMETERS-----")时抛出异常。
[h2]func encodeToPem()
    
    override func encodeToPem(): PemEntry

功能：将 DH 密钥参数编码为 PEM 格式。 返回值：
    * [PemEntry](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/x509_package_structs#struct-pementry) \- DH 密钥参数数据 PEM 格式编码生成的对象。
interface Key
    
    public interface Key <: ToString {
        func encodeToDer(): DerBlob
        func encodeToPem(): PemEntry
        static func decodeDer(encoded: DerBlob): Key
        static func decodeFromPem(text: String): Key
    }

功能：提供密钥接口。 公钥用于签名验证或加密，私钥用于签名或解密，公钥和私钥必须相互匹配并形成一对。 该类为密钥类，无具体实现，供 [PrivateKey](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/x509_package_interfaces#interface-privatekey)/[PublicKey](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/x509_package_interfaces#interface-publickey) 及用户扩展接口。 [h2]static func decodeDer(DerBlob)
    
    static func decodeDer(encoded: DerBlob): Key

功能：将密钥从 DER 格式解码。 参数：
    * encoded: [DerBlob](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/x509_package_structs#struct-derblob) \- DER 格式的对象。
返回值：
    * [Key](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/x509_package_interfaces#interface-key) \- 由 DER 格式解码出的密钥。
异常：
    * [X509Exception](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/x509_package_exceptions#class-x509exception) \- 当 DER 格式的私钥内容不正确，无法解析时抛出异常。
[h2]static func decodeFromPem(String)
    
    static func decodeFromPem(text: String): Key

功能：将密钥从 PEM 格式解码。 参数：
    * text: [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- PEM 格式的字符流。
返回值：
    * [Key](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/x509_package_interfaces#interface-key) \- 由 PEM 格式解码出的密钥。
[h2]func encodeToDer()
    
    func encodeToDer(): DerBlob

功能：将密钥编码为 DER 格式。 返回值：
    * [DerBlob](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/x509_package_structs#struct-derblob) \- 密钥数据 DER 格式编码生成的对象。
[h2]func encodeToPem()
    
    func encodeToPem(): PemEntry

功能：将密钥编码为 PEM 格式。 返回值：
    * [PemEntry](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/x509_package_structs#struct-pementry) \- 密钥数据 PEM 格式编码生成的对象。
interface PrivateKey
    
    public interface PrivateKey <: Key {
        static func decodeDer(blob: DerBlob): PrivateKey
        static func decodeFromPem(text: String): PrivateKey
        static func decodeDer(blob: DerBlob, password!: ?String): PrivateKey
        static func decodeFromPem(text: String, password!: ?String): PrivateKey
        func encodeToDer(password!: ?String): DerBlob
        override func encodeToPem(): PemEntry
        func encodeToPem(password!: ?String): PemEntry
    }

功能：提供私钥接口。 [h2]static func decodeDer(DerBlob)
    
    static func decodeDer(blob: DerBlob): PrivateKey

功能：将私钥从 DER 格式解码。 参数：
    * blob: [DerBlob](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/x509_package_structs#struct-derblob) \- DER 格式的私钥对象。
返回值：
    * [PrivateKey](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/x509_package_interfaces#interface-privatekey) \- 由 DER 格式解码出的私钥。
异常：
    * [X509Exception](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/x509_package_exceptions#class-x509exception) \- 当 DER 格式的私钥内容不正确，无法解析时抛出异常。
[h2]static func decodeDer(DerBlob, ?String)
    
    static func decodeDer(blob: DerBlob, password!: ?String): PrivateKey 

功能：将 DER 格式的私钥解密解码成 [PrivateKey](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/x509_package_interfaces#interface-privatekey) 对象，密码为 None 时则不解密。 参数：
    * blob: [DerBlob](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/x509_package_structs#struct-derblob) \- DER 格式的私钥。
    * password!: ?[String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- 解密密码。
返回值：
    * [PrivateKey](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/x509_package_interfaces#interface-privatekey) \- 解密解码后的私钥对象。
异常：
    * [X509Exception](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/x509_package_exceptions#class-x509exception) \- 解密解码失败，或者 password 为空字符串。
[h2]static func decodeFromPem(String)
    
    static func decodeFromPem(text: String): PrivateKey

功能：将私钥从 PEM 格式解码。 参数：
    * text: [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- PEM 格式的私钥字符流。
返回值：
    * [PrivateKey](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/x509_package_interfaces#interface-privatekey) \- 由 PEM 格式解码出的私钥。
异常：
    * [X509Exception](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/x509_package_exceptions#class-x509exception) \- 字符流不符合 PEM 格式时，或文件头不符合公钥头标准时抛出异常。
[h2]static func decodeFromPem(String, ?String)
    
    static func decodeFromPem(text: String, password!: ?String): PrivateKey 

功能：将 PEM 格式的私钥解密解码成 [PrivateKey](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/x509_package_interfaces#interface-privatekey) 对象，密码为 None 时则不解密。 参数：
    * text: [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- PEM 格式的私钥。
    * password!: ?[String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- 解密密码。
返回值：
    * [PrivateKey](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/x509_package_interfaces#interface-privatekey) \- 解密解码后的私钥对象。
异常：
    * [X509Exception](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/x509_package_exceptions#class-x509exception) \- 解密解码失败，或者 password 为空字符串。
[h2]func encodeToDer(?String)
    
    func encodeToDer(password!: ?String): DerBlob

功能：将私钥加密编码成 DER 格式，密码为 None 时则不加密。 参数：
    * password!: ?[String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- 加密密码。
返回值：
    * [DerBlob](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/x509_package_structs#struct-derblob) \- 加密后的 DER 格式的私钥。
异常：
    * [X509Exception](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/x509_package_exceptions#class-x509exception) \- 加密失败，或者 password 为空字符串。
[h2]func encodeToPem()
    
    override func encodeToPem(): PemEntry

功能：将私钥编码成 PEM 格式。 返回值：
    * [PemEntry](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/x509_package_structs#struct-pementry) \- 编码后的 PEM 格式的私钥。
异常：
    * [X509Exception](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/x509_package_exceptions#class-x509exception) \- 编码失败。
[h2]func encodeToPem(?String)
    
    func encodeToPem(password!: ?String): PemEntry

功能：将私钥加密编码成 PEM 格式，密码为 None 时则不加密。 参数：
    * password!: ?[String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- 加密密码。
返回值：
    * [PemEntry](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/x509_package_structs#struct-pementry) \- 加密后的 PEM 格式的私钥。
异常：
    * [X509Exception](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/x509_package_exceptions#class-x509exception) \- 加密失败，或者 password 为空字符串。
interface PublicKey
    
    public interface PublicKey <: Key {
        override func encodeToPem(): PemEntry
        static func decodeDer(blob: DerBlob): PublicKey
        static func decodeFromPem(text: String): PublicKey
    }

功能：公钥接口接口。 [h2]static func decodeDer(DerBlob)
    
    static func decodeDer(blob: DerBlob): PublicKey

功能：将公钥从 DER 格式解码。 参数：
    * blob: [DerBlob](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/x509_package_structs#struct-derblob) \- DER 格式的公钥对象。
返回值：
    * [PublicKey](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/x509_package_interfaces#interface-publickey) \- 由 DER 格式解码出的公钥。
异常：
    * [X509Exception](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/x509_package_exceptions#class-x509exception) \- 当 DER 格式的私钥内容不正确，无法解析时抛出异常。
[h2]static func decodeFromPem(String)
    
    static func decodeFromPem(text: String): PublicKey

功能：将公钥从 PEM 格式解码。 参数：
    * text: [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- PEM 格式的公钥字符流。
返回值：
    * [PublicKey](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/x509_package_interfaces#interface-publickey) \- 由 PEM 格式解码出的公钥。
异常：
    * [X509Exception](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/x509_package_exceptions#class-x509exception) \- 字符流不符合 PEM 格式时，或文件头不符合公钥头标准时抛出异常。
[h2]func encodeToPem()
    
    override func encodeToPem(): PemEntry

功能：将公钥编码为 PEM 格式。 返回值：
    * [PemEntry](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/x509_package_structs#struct-pementry) \- 公钥数据 PEM 格式编码生成的对象。
