---
name: document/cn/openharmony-cangjie/x509_package_overview
title: crypto.x509 包
uri: https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/x509_package_overview
source: portal
---

crypto.x509 包 功能介绍x509 包提供处理数字证书功能，提供包括解析和序列化 X509 证书、验证证书、创建自签名证书、创建和验证证书链等主要功能。 使用本包需要外部依赖 OpenSSL 3 的 crypto 动态库文件，故使用前需安装相关工具。
    * 对于 Linux 操作系统，可参考以下方式：
      * 如果系统的包管理工具支持安装 OpenSSL 3 开发工具包，可通过这个方式安装，并确保系统安装目录下含有 libcrypto.so 和 libcrypto.so.3 这两个动态库文件，例如 Ubuntu 22.04 系统上可使用 sudo apt install libssl-dev 命令安装 libssl-dev 工具包；
      * 如果无法通过上面的方式安装，可自行下载 OpenSSL 3.x.x 源码编译安装软件包，并确保安装目录下含有 libcrypto.so 和 libcrypto.so.3 这两个动态库文件，然后可选择下面任意一种方式来保证系统链接器可以找到这些文件:
        * 在系统未安装 OpenSSL 的场景，安装时选择直接安装到系统路径下；
        * 安装在自定义目录的场景，将这些文件所在目录设置到环境变量 LD_LIBRARY_PATH 以及 LIBRARY_PATH 中。
    * 对于 Windows 操作系统，可按照以下步骤：
      * 自行下载 OpenSSL 3.x.x 源码编译安装 x64 架构软件包或者自行下载安装第三方预编译的供开发人员使用的 OpenSSL 3.x.x 软件包；
      * 确保安装目录下含有 libcrypto.dll.a(或 libcrypto.lib)、libcrypto-3-x64.dll 这两个库文件；
      * 将 libcrypto.dll.a(或 libcrypto.lib) 所在的目录路径设置到环境变量 LIBRARY_PATH 中，将 libcrypto-3-x64.dll 所在的目录路径设置到环境变量 PATH 中。
    * 对于 macOS 操作系统，可参考以下方式：
      * 使用 brew install openssl@3 安装，并确保系统安装目录下含有 libcrypto.dylib 和 libcrypto.3.dylib 这两个动态库文件；
      * 如果无法通过上面的方式安装，可自行下载 OpenSSL 3.x.x 源码编译安装软件包，并确保安装目录下含有 libcrypto.dylib 和 libcrypto.3.dylib 这两个动态库文件，然后可选择下面任意一种方式来保证系统链接器可以找到这些文件:
        * 在系统未安装 OpenSSL 的场景，安装时选择直接安装到系统路径下；
        * 安装在自定义目录的场景，将这些文件所在目录设置到环境变量 DYLD_LIBRARY_PATH 以及 LIBRARY_PATH 中。
![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20240621215228.58891782732898099333515027590532:50001231000000:2800:636E72D86B51ED79C4F535B1BA4894BF04DF5F726FC41DE3A24D35BEB4BA7D76.png?needInitFileName=true?needInitFileName=true) 如果未安装 OpenSSL 3 软件包或者安装低版本的软件包，程序可能无法使用并抛出相关异常 X509Exception: Can not load openssl library or function xxx。 API 列表 [h2]类型别名 类型别名 | 功能  
---|---  
[IP](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/x509_package_type#type-ip) | x509 用 Array<Byte> 来记录 IP。  
[h2]接口 接口名 | 功能  
---|---  
[DHParamters](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/x509_package_interfaces#interface-dhparamters) | 提供 DH 密钥接口。  
[Key](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/x509_package_interfaces#interface-key) | 提供密钥接口。  
[PrivateKey](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/x509_package_interfaces#interface-privateKey) | 提供私钥接口。  
[PublicKey](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/x509_package_interfaces#interface-publicKey) | 提供公钥接口。  
[h2]类 类名 | 功能  
---|---  
[X509Certificate](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/x509_package_classes#class-x509certificate) | X509 数字证书是一种用于加密通信的数字证书。  
[X509CertificateRequest](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/x509_package_classes#class-x509certificaterequest) | 数字证书签名请求。  
[X509Name](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/x509_package_classes#class-X509name) | 证书实体可辨识名称。  
[h2]枚举 枚举名 | 功能  
---|---  
[PublicKeyAlgorithm](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/x509_package_enums#enum-publicKeyalgorithm) | 数字证书中包含的公钥信息。  
[SignatureAlgorithm](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/x509_package_enums#enum-signaturealgorithm) | 证书签名算法。  
[h2]结构体 结构体名 | 功能  
---|---  
[DerBlob](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/x509_package_structs#struct-derblob) | Crypto 支持配置二进制证书流。  
[ExtKeyUsage](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/x509_package_structs#struct-extkeyusage) | 数字证书扩展字段。  
[KeyUsage](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/x509_package_structs#struct-keyusage) | 数字证书扩展字段中通常会包含携带公钥的用法说明。  
[Pem](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/x509_package_structs#struct-pem) | Pem 结构体。  
[PemEntry](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/x509_package_structs#struct-pementry) | PEM 文本格式。  
[SerialNumber](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/x509_package_structs#struct-serialnumber) | 数字证书的序列号。  
[Signature](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/x509_package_structs#struct-signature) | 数字证书的签名。  
[VerifyOption](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/x509_package_structs#struct-verifyoption) | 校验选项。  
[X509CertificateInfo](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/x509_package_structs#struct-x509certificateinfo) | 证书信息。  
[X509CertificateRequestInfo](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/x509_package_structs#struct-X509certificaterequestinfo) | 证书请求信息。  
[h2]异常类 异常类名 | 功能  
---|---  
[X509Exception](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/x509_package_exceptions#class-x509exception) | x509 包的异常类。  
    * **[类型](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/x509_package_type)**  

    * **[接口](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/x509_package_interfaces)**  

    * **[x509 包](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/x509_package_classes)**  

    * **[枚举](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/x509_package_enums)**  

    * **[结构体](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/x509_package_structs)**  

    * **[异常类](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/x509_package_exceptions)**  

    * **[示例教程](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/3_7_u793a_u4f8b_u6559_u7a0b-2)**  

