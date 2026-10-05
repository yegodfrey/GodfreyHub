---
name: document/cn/openharmony-cangjie/tls_package_classes
title: 类
uri: https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/tls_package_classes
source: portal
---

类 class TlsSessionContext
    
    public class TlsSessionContext <: Equatable<TlsSessionContext> & ToString

功能：该类表示 TLS 会话上下文，给客户端提供信息，确保客户端所连接的服务端仍为相同实例，用于连接复用时，验证客户端合法性。 ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20240621215241.36952735867774226316803988175791:50001231000000:2800:9BB30AEA4D715530334F01C87DFA9AD8779B215F7C2D083F1B90CD894F95A399.png?needInitFileName=true?needInitFileName=true) 当客户端尝试恢复会话时，双方都必须确保他们正在恢复与合法对端的会话。 [h2]static func fromName(String)
    
    public static func fromName(name: String): TlsSessionContext

功能：通过名称创建 [TlsSessionContext](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/tls_package_classes#class-tlssessioncontext) 实例。 通过 [TlsSessionContext](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/tls_package_classes#class-tlssessioncontext) 保存的名称获取 [TlsSessionContext](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/tls_package_classes#class-tlssessioncontext) 对象。该名称用于区分 TLS 服务器，因此客户端依赖此名称来避免意外，尝试恢复与错误的服务器的连接。这里不一定使用加密安全名称，因为底层实现可以完成这项工作。从此函数返回的具有相同名称的两个 TlsSessionContext 可能不相等，并且不保证可替换。尽管它们是从相同的名称创建的，因此服务器实例应该在整个生命周期内创建一个 TlsSessionContext ，并且在每次 [TlsSocket](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/tls_package_classes#class-tlssocket).server() 调用中使用它。 参数：
    * name: [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- 会话上下文名称。
返回值：
    * [TlsSessionContext](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/tls_package_classes#class-tlssessioncontext) \- 会话上下文。
[h2]func toString()
    
    public override func toString(): String

功能：生成会话上下文名称字符串。 返回值：
    * [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- [TlsSessionContext](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/tls_package_classes#class-tlssessioncontext)(会话上下文名称字符串)。
[h2]operator func !=(TlsSessionContext)
    
    public override operator func !=(other: TlsSessionContext)

功能：判断两 [TlsSessionContext](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/tls_package_classes#class-tlssessioncontext) 实例名称是否不同。 参数：
    * other: [TlsSessionContext](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/tls_package_classes#class-tlssessioncontext) \- 被比较的会话上下文对象。
返回值：
    * [Unit](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#unit) \- 若 [TlsSessionContext](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/tls_package_classes#class-tlssessioncontext) 对象不同，返回 true；否则，返回 false。
[h2]operator func ==(TlsSessionContext)
    
    public override operator func ==(other: TlsSessionContext)

功能：判断两 [TlsSessionContext](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/tls_package_classes#class-tlssessioncontext) 实例名称是否相同。 参数：
    * other: [TlsSessionContext](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/tls_package_classes#class-tlssessioncontext) \- 被比较的会话上下文对象。
返回值：
    * [Unit](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#unit) \- 若 [TlsSessionContext](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/tls_package_classes#class-tlssessioncontext) 对象相同，返回 true；否则，返回 false。
class TlsSocket
    
    public class TlsSocket <: StreamingSocket & ToString & Equatable<TlsSocket> & Hashable

功能：[TlsSocket](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/tls_package_classes#class-tlssocket) 用于在客户端及服务端间创建加密传输通道。 [h2]prop alpnProtocolName
    
    public prop alpnProtocolName: ?String

功能：读取协商到的应用层协议名称。 类型：?[String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) 异常：
    * [TlsException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/tls_package_exceptions#class-tlsexception) \- 当套接字未完成 TLS 握手或本端 TLS 套接字已关闭时，抛出异常。
    * [IllegalMemoryException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_exceptions#class-illegalmemoryexception) \- 当内存申请失败时，抛出异常。
[h2]prop cipherSuite
    
    public prop cipherSuite: CipherSuite

功能：握手后协商到的加密套。 ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20240621215241.01865657539518016186404346027374:50001231000000:2800:76E435E1FEE8C89D0EB7A5414906971E1FC3E6FD4A031B30BD71EFA374125356.png?needInitFileName=true?needInitFileName=true) 密码套件包含加密算法、用于消息认证的散列函数、密钥交换算法。 类型：[CipherSuite](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/tls_package_structs#struct-ciphersuite) 异常：
    * [TlsException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/tls_package_exceptions#class-tlsexception) \- 当套接字未完成 TLS 握手或本端 TLS 套接字已关闭时，抛出异常。
[h2]prop clientCertificate
    
    public prop clientCertificate: ?Array<X509Certificate>

功能：客户端提供的客户端证书。在客户端获取时为本端证书，在服务端获取时为对端证书。 ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20240621215241.98004558781459135357400996382762:50001231000000:2800:C4A0467B23F023F1CC2635C748D4F4F05CD65B8908299472A9C4F69314A55226.png?needInitFileName=true?needInitFileName=true) 当客户端会话恢复时，它可能会丢失。 类型：?[Array](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-arrayt)<[X509Certificate](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/x509_package_classes#class-x509certificate)> 异常：
    * [TlsException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/tls_package_exceptions#class-tlsexception) \- 当套接字未完成 TLS 握手或本端 TLS 套接字已关闭时，抛出异常。
[h2]prop domain
    
    public prop domain: ?String

功能：读取协商到的服务端主机名称。
    * [TlsException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/tls_package_exceptions#class-tlsexception) \- 当套接字未完成 TLS 握手或本端 TLS 套接字已关闭时，抛出异常。
类型：?[String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) [h2]prop localAddress
    
    public override prop localAddress: SocketAddress

功能：读取 [TlsSocket](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/tls_package_classes#class-tlssocket) 的本地地址。 类型：[SocketAddress](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/socket_package_classes#class-socketaddress) 异常：
    * [SocketException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/socket_package_exceptions#class-socketexception) \- 本端建连的底层 TCP 套接字关闭，抛出异常。
    * [TlsException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/tls_package_exceptions#class-tlsexception) \- 本端配置为 TLS 的套接字已关闭时，抛出异常。
[h2]prop peerCertificate
    
    public prop peerCertificate: ?Array<X509Certificate>

功能：对端证书（如果对端提供）。 ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20240621215241.64373969182624041692719503861909:50001231000000:2800:57A407EAA989C1936E6783CF293F625144106E98B271B09263C96511C9312516.png?needInitFileName=true?needInitFileName=true) 在客户端获取时同 serverCertificate ，在服务端获取时同 clientCertificate。 类型：?[Array](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-arrayt)<[X509Certificate](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/x509_package_classes#class-x509certificate)> 异常：
    * [TlsException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/tls_package_exceptions#class-tlsexception) \- 当套接字未完成 TLS 握手或本端 TLS 套接字已关闭时，抛出异常。
[h2]prop readTimeout
    
    public override mut prop readTimeout: ?Duration

功能：读写 [TlsSocket](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/tls_package_classes#class-tlssocket) 的读超时时间。 类型：?[Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) 异常：
    * [SocketException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/socket_package_exceptions#class-socketexception) \- 本端建连的底层 TCP 套接字关闭，抛出异常。
    * [TlsException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/tls_package_exceptions#class-tlsexception) \- 本端配置为 TLS 的套接字已关闭时，抛出异常。
    * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_exceptions#class-illegalargumentexception) \- 设定的读超时时间为负值时，抛出异常。
[h2]prop remoteAddress
    
    public override prop remoteAddress: SocketAddress

功能：读取 [TlsSocket](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/tls_package_classes#class-tlssocket) 的远端地址。 类型：[SocketAddress](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/socket_package_classes#class-socketaddress) 异常：
    * [SocketException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/socket_package_exceptions#class-socketexception) \- 本端建连的底层 TCP 套接字关闭，抛出异常。
    * [TlsException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/tls_package_exceptions#class-tlsexception) \- 本端配置为 TLS 的套接字已关闭时，抛出异常。
[h2]prop serverCertificate
    
    public prop serverCertificate: Array<X509Certificate>

功能：服务器证书链由服务器提供或在服务器配置中预先配置。在服务端获取时为本端证书，在客户端获取时为对端证书。 ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20240621215241.17954585544775083710929309229971:50001231000000:2800:1B6488668F7B8B29DECB6AFCECFCE9A71ED8DC592F35A80B1C5177ED2B32AD95.png?needInitFileName=true?needInitFileName=true) 当进行 TLS 握手时，如果不需要服务端发送证书，通过此方法无法获取服务端证书。 类型：[Array](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-arrayt)<[X509Certificate](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/x509_package_classes#class-x509certificate)> 异常：
    * [TlsException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/tls_package_exceptions#class-tlsexception) \- 当套接字未完成 TLS 握手或本端 TLS 套接字已关闭时，抛出异常。
[h2]prop session
    
    public prop session: ?TlsSession

功能：读取 TLS 会话 id , 客户端会在握手成功后捕获当前会话的 id ，可使用该 id 重用该会话，省去 TLS 建立连接时间。连接建立未成功时，返回 None。 ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20240621215241.70840346659907216940942874445481:50001231000000:2800:E63CCF4ECF841F2A97E3CBB68785A40E85CB9E3C568287F6626C0D83FA1DD46C.png?needInitFileName=true?needInitFileName=true) 服务端不做捕获因此始终为 None。 类型：?[TlsSession](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/tls_package_structs#struct-tlssession) 异常：
    * [TlsException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/tls_package_exceptions#class-tlsexception) \- 当套接字未完成 TLS 握手，抛出异常。
[h2]prop socket
    
    public prop socket: StreamingSocket

功能：[TlsSocket](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/tls_package_classes#class-tlssocket) 创建所使用的 [StreamingSocket](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/socket_package_interfaces#interface-streamingsocket)。 类型：[StreamingSocket](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/socket_package_interfaces#interface-streamingsocket) 异常：
    * [TlsException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/tls_package_exceptions#class-tlsexception) \- 本端配置为 TLS 套接字已关闭时，抛出异常。
[h2]prop tlsVersion
    
    public prop tlsVersion: TlsVersion

功能：读取协商到的 TLS 版本。 类型：[TlsVersion](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/tls_package_enums#enum-tlsversion) 异常：
    * [TlsException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/tls_package_exceptions#class-tlsexception) \- 当套接字未完成 TLS 握手或本端 TLS 套接字已关闭时，抛出异常。
[h2]prop writeTimeout
    
    public override mut prop writeTimeout: ?Duration

功能：读写 [TlsSocket](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/tls_package_classes#class-tlssocket) 的写超时时间。 类型：?[Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) 异常：
    * [SocketException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/socket_package_exceptions#class-socketexception) \- 本端建连的底层 TCP 套接字关闭，抛出异常。
    * [TlsException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/tls_package_exceptions#class-tlsexception) \- 本端配置为 TLS 的套接字已关闭时，抛出异常。
    * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_exceptions#class-illegalargumentexception) \- 设定的写超时时间为负值时，抛出异常。
[h2]static func client(StreamingSocket, ?TlsSession, TlsClientConfig)
    
    public static func client(
        socket: StreamingSocket,
        session!: ?TlsSession = None,
        clientConfig!: TlsClientConfig = TlsClientConfig()
    ): TlsSocket

功能：根据传入的 [StreamingSocket](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/socket_package_interfaces#interface-streamingsocket) 实例创建指定地址的客户端 TLS 套接字，该套接字可用于客户端 TLS 握手及会话。 参数：
    * socket: [StreamingSocket](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/socket_package_interfaces#interface-streamingsocket) \- 已连接到服务端的客户端 TCP 套接字。
    * session!: ?[TlsSession](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/tls_package_structs#struct-tlssession) \- TLS 会话 id，若存在可用的 TLS 会话， 则可通过该 id 恢复历史 TLS 会话，省去 TLS 建立连接时间，但使用该会话依然可能协商失败。默认为 None。
    * clientConfig!: [TlsClientConfig](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/tls_package_structs#struct-tlsclientconfig) \- 客户端配置，默认为 [TlsClientConfig](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/tls_package_structs#struct-tlsclientconfig)()。
返回值：
    * [TlsSocket](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/tls_package_classes#class-tlssocket) \- 构造出的 [TlsSocket](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/tls_package_classes#class-tlssocket) 实例。
[h2]static func server(StreamingSocket, ?TlsSessionContext, TlsServerConfig)
    
    public static func server(
        socket: StreamingSocket,
        sessionContext!: ?TlsSessionContext = None,
        serverConfig!: TlsServerConfig
    ): TlsSocket

功能：根据传入的 [StreamingSocket](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/socket_package_interfaces#interface-streamingsocket) 实例创建指定地址的服务端 TLS 套接字，该套接字可用于服务端 TLS 握手及会话。 参数：
    * socket: [StreamingSocket](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/socket_package_interfaces#interface-streamingsocket) \- TCP 连接建立完成后接受到套接字。
    * sessionContext!: ?[TlsSessionContext](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/tls_package_classes#class-tlssessioncontext) \- TLS 会话 id， 若存在可用的 TLS 会话， 则可通过该 id 恢复历史 TLS 会话，省去 TLS 建立连接时间，但使用该会话依然可能协商失败。默认为 None。
    * serverConfig!: [TlsServerConfig](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/tls_package_structs#struct-tlsserverconfig) \- 服务端配置，默认为 [TlsServerConfig](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/tls_package_structs#struct-tlsserverconfig)()。
返回值：
    * [TlsSocket](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/tls_package_classes#class-tlssocket) \- 构造出的 [TlsSocket](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/tls_package_classes#class-tlssocket) 实例。
[h2]func close()
    
    public func close(): Unit

功能：关闭套接字。 异常：
    * [SocketException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/socket_package_exceptions#class-socketexception) \- 底层连接无法关闭时，抛出异常。
[h2]func handshake(?Duration)
    
    public func handshake(timeout!: ?Duration = None): Unit

功能：TLS 握手。不支持重新协商握手，因此只能被调用一次。调用对象可以为客户端或者服务端的 [TlsSocket](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/tls_package_classes#class-tlssocket)。 参数：
    * timeout!: ?[Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) \- 握手超时时间，默认为 None 不对超时时间进行设置，此时采用默认 30s 的超时时间。
异常：
    * [SocketException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/socket_package_exceptions#class-socketexception) \- 本端建连的底层 TCP 套接字关闭，抛出异常。
    * [SocketTimeoutException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/socket_package_exceptions#class-sockettimeoutexception) \- 底层 TCP 套接字连接超时时，抛出异常。
    * [TlsException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/tls_package_exceptions#class-tlsexception) \- 当握手已经开始或者已经结束，抛出异常或当握手阶段出现系统错误时，抛出异常。
    * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_exceptions#class-illegalargumentexception) \- 设定的握手超时时间为负值时，抛出异常。
[h2]func hashCode()
    
    public override func hashCode(): Int64

功能：返回 TLS 套接字对象的哈希值。 返回值：
    * [Int64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int64) \- 对 TLS 套接字对象进行哈希计算后得到的结果。
[h2]func isClosed()
    
    public func isClosed(): Bool

功能：返回套接字是否关闭的状态。 返回值：
    * [Bool](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#bool) \- 连接断开返回 true；否则，返回 false。
[h2]func read(Array<Byte>)
    
    public override func read(buffer: Array<Byte>): Int64

功能：[TlsSocket](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/tls_package_classes#class-tlssocket) 读取数据。 参数：
    * buffer: [Array](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-arrayt)<[Byte](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_types#type-byte)> \- 存储读取到的数据内容的数组。
返回值：
    * [Int64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int64) \- 读取到的数据内容字节数。
异常：
    * [SocketException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/socket_package_exceptions#class-socketexception) \- 本端建连的底层 TCP 套接字关闭，抛出异常。
    * [TlsException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/tls_package_exceptions#class-tlsexception) \- 当 buffer 为空，或者 [TlsSocket](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/tls_package_classes#class-tlssocket) 未连接，或读取数据出现系统错误等。
[h2]func toString()
    
    public func toString(): String

功能：套接字的字符串表示，字符串内容为当前套接字状态。 ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20240621215241.54371193038918193771560927002177:50001231000000:2800:29ADB91C9758F68D86A30CF95648D5DC7473E8EFA7412EF2916966B1B79A809F.png?needInitFileName=true?needInitFileName=true) 例如：当前套接字处于可开始进行握手状态时，该接口将返回字符串 "[TlsSocket](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/tls_package_classes#class-tlssocket)([TcpSocket](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/socket_package_classes#class-tcpsocket)(${本端地址} -> ${对端地址}), ready for handshake)" 返回值：
    * [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- 该 TLS 连接字符串。
[h2]func write(Array<Byte>)
    
    public func write(buffer: Array<Byte>): Unit

功能：[TlsSocket](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/tls_package_classes#class-tlssocket) 发送数据。 参数：
    * buffer: [Array](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-arrayt)<[Byte](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_types#type-byte)> \- 存储将要发送的数据内容数组。
异常：
    * [SocketException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/socket_package_exceptions#class-socketexception) \- 本端建连的底层 TCP 套接字关闭，抛出异常。
    * [TlsException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/tls_package_exceptions#class-tlsexception) \- 当套接字已关闭，或者 [TlsSocket](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/tls_package_classes#class-tlssocket) 未连接，或写入数据出现系统错误等。
[h2]operator func !=(TlsSocket)
    
    public override operator func !=(other: TlsSocket)

功能：判断两 [TlsSocket](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/tls_package_classes#class-tlssocket) 是否引用不同实例。 参数：
    * other: [TlsSocket](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/tls_package_classes#class-tlssocket) \- 对比的 TLS 套接字。
返回值：
    * [Unit](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#unit) \- 对比的套接字不同返回 true；否则，返回 false。
[h2]operator func ==(TlsSocket)
    
    public override operator func ==(other: TlsSocket)

功能：判断两 [TlsSocket](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/tls_package_classes#class-tlssocket) 是否引用同一实例。 参数：
    * other: [TlsSocket](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/tls_package_classes#class-tlssocket) \- 对比的 TLS 套接字。
返回值：
    * [Unit](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#unit) \- 对比的套接字相同返回 true；否则，返回 false。
