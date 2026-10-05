---
name: document/cn/openharmony-cangjie/http_package_interfaces
title: 接口
uri: https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/http_package_interfaces
source: portal
---

接口 interface CookieJar
    
    public interface CookieJar {
        prop isHttp: Bool
        prop rejectPublicSuffixes: ArrayList<String>
        static func createDefaultCookieJar(rejectPublicSuffixes: ArrayList<String>, isHttp: Bool): CookieJar
        static func parseSetCookieHeader(response: HttpResponse): ArrayList<Cookie>
        static func toCookieString(cookies: ArrayList<Cookie>): String
        func clear(): Unit
        func getCookies(url: URL): ArrayList<Cookie>
        func removeCookies(domain: String): Unit
        func storeCookies(url: URL, cookies: ArrayList<Cookie>): Unit
    }

功能：[CookieJar](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/http_package_interfaces#interface-cookiejar) 是 [Client](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/http_package_classes#class-client) 用来管理 [Cookie](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/http_package_classes#class-cookie) 的工具。 其有两个静态函数：
    * toCookieString 用于将 [ArrayList](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/collection_package_class#class-arraylistt)<[Cookie](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/http_package_classes#class-cookie)> 转成字符串以便设置请求的 [Cookie](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/http_package_classes#class-cookie) header。
    * parseSetCookieHeader 用于解析收到 response 中的 Set-Cookie header。
如果 [Client](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/http_package_classes#class-client) 配置了 [CookieJar](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/http_package_interfaces#interface-cookiejar)，那么 [Cookie](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/http_package_classes#class-cookie) 的解析收发都是自动的。 ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20240621215237.34939276887908090346427019187376:50001231000000:2800:957541C0D1B7E12046BB0D2F0FB6FEE5E10B20C2F13FBD2BCBD9BD91647179D4.png?needInitFileName=true?needInitFileName=true)
    * 用户可以实现自己的 [CookieJar](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/http_package_interfaces#interface-cookiejar)，实现自己的管理逻辑。
    * [CookieJar](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/http_package_interfaces#interface-cookiejar) 的管理要求见 [RFC 6265](https://httpwg.org/specs/rfc6265.html)。
[h2]prop isHttp
    
    prop isHttp: Bool

功能：该 [CookieJar](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/http_package_interfaces#interface-cookiejar) 是否用于 HTTP 协议。
    * 若 isHttp 为 true， 则只会存储来自于 HTTP 协议的 [Cookie](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/http_package_classes#class-cookie)。
    * 若 isHttp 为 false， 则只会存储来自非 HTTP 协议的 [Cookie](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/http_package_classes#class-cookie)，且不会存储发送设置了 httpOnly 的 [Cookie](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/http_package_classes#class-cookie)。
类型：[Bool](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#bool) [h2]prop rejectPublicSuffixes
    
    prop rejectPublicSuffixes: ArrayList<String>

功能：获取 [public suffixes](https://publicsuffix.org/) 配置，该配置是一个 domain 黑名单，会拒绝 domain 值为 public suffixes 的 [Cookie](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/http_package_classes#class-cookie)。 ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20240621215237.21318011237729514490810388510442:50001231000000:2800:F5FD5F1B49B4A063AF983981EA29A3682F3A5D691EACB3FE9B3C453FDAFDB7ED.png?needInitFileName=true?needInitFileName=true) 如果该 [Cookie](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/http_package_classes#class-cookie) 来自于与 domain 相同的 host，黑名单就不会生效。 类型：[ArrayList](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/collection_package_class#class-arraylistt)<[String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string)> [h2]static func createDefaultCookieJar(ArrayList<String>, Bool)
    
    static func createDefaultCookieJar(rejectPublicSuffixes: ArrayList<String>, isHttp: Bool): CookieJar

功能：构建默认的管理 [Cookie](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/http_package_classes#class-cookie) 的 [CookieJar](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/http_package_interfaces#interface-cookiejar) 实例。 默认的 [CookieJar](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/http_package_interfaces#interface-cookiejar) 的管理要求参考 [RFC 6265 5.3.](https://httpwg.org/specs/rfc6265.html#storage-model)。 参数：
    * rejectPublicSuffixes: [ArrayList](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/collection_package_class#class-arraylistt)<[String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string)> \- 用户配置的 public suffixes，[Cookie](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/http_package_classes#class-cookie) 管理为了安全会拒绝 domain 值为 public suffixes 的 cookie（除非该 [Cookie](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/http_package_classes#class-cookie) 来自于与 domain 相同的 host），public suffixes 见 [PUBLIC SUFFIX LIST](https://publicsuffix.org/)。
    * isHttp: [Bool](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#bool) \- 该 [CookieJar](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/http_package_interfaces#interface-cookiejar) 是否用于 HTTP 协议，isHttp 为 true 则只会存储来自于 HTTP 协议的 [Cookie](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/http_package_classes#class-cookie)。
返回值：
    * [CookieJar](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/http_package_interfaces#interface-cookiejar) \- 默认的 [CookieJar](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/http_package_interfaces#interface-cookiejar) 实例。
[h2]static func parseSetCookieHeader(HttpResponse)
    
    static func parseSetCookieHeader(response: HttpResponse): ArrayList<Cookie>

功能：解析 response 中的 Set-Cookie header。 该函数解析 response 中的 Set-Cookie header，并返回解析出的 [ArrayList](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/collection_package_class#class-arraylistt)<[Cookie](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/http_package_classes#class-cookie)>，解析 Set-Cookie header 的具体规则见 [RFC 6265 5.2.](https://httpwg.org/specs/rfc6265.html#set-cookie)。 参数：
    * response: [HttpResponse](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/http_package_classes#class-httpresponse) \- 所需要解析的 response。
返回值：
    * [ArrayList](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/collection_package_class#class-arraylistt)<[Cookie](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/http_package_classes#class-cookie)> \- 从 response 中解析出的 [ArrayList](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/collection_package_class#class-arraylistt)<[Cookie](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/http_package_classes#class-cookie)> 数组。
[h2]static func toCookieString(ArrayList<Cookie>)
    
    static func toCookieString(cookies: ArrayList<Cookie>): String

功能：将 [ArrayList](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/collection_package_class#class-arraylistt)<[Cookie](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/http_package_classes#class-cookie)> 转成字符串，用于 [Cookie](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/http_package_classes#class-cookie) header。 该函数会将传入的 [ArrayList](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/collection_package_class#class-arraylistt)<[Cookie](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/http_package_classes#class-cookie)> 数组转成协议规定的 [Cookie](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/http_package_classes#class-cookie) header 的字符串形式，见 [RFC 6265 5.4.4.](https://httpwg.org/specs/rfc6265.html#cookie)。 参数：
    * cookies: [ArrayList](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/collection_package_class#class-arraylistt)<[Cookie](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/http_package_classes#class-cookie)> \- 所需转成 [Cookie](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/http_package_classes#class-cookie) header 字符串的 [ArrayList](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/collection_package_class#class-arraylistt)<[Cookie](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/http_package_classes#class-cookie)>。
返回值：
    * [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- 用于 [Cookie](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/http_package_classes#class-cookie) header 的字符串。
[h2]func clear()
    
    func clear(): Unit

功能：清除全部 [Cookie](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/http_package_classes#class-cookie)。 默认实现 CookieJarImpl 会清除 [CookieJar](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/http_package_interfaces#interface-cookiejar) 中的所有 [Cookie](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/http_package_classes#class-cookie)。 [h2]func getCookies(URL)
    
    func getCookies(url: URL): ArrayList<Cookie>

功能：从 [CookieJar](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/http_package_interfaces#interface-cookiejar) 中取出 [ArrayList](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/collection_package_class#class-arraylistt)<[Cookie](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/http_package_classes#class-cookie)>。 默认实现 cookieJarImpl 的取 [ArrayList](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/collection_package_class#class-arraylistt)<[Cookie](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/http_package_classes#class-cookie)> 函数的具体要求见 [RFC 6265 5.4.](https://httpwg.org/specs/rfc6265.html#cookie)，对取出的 [ArrayList](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/collection_package_class#class-arraylistt)<[Cookie](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/http_package_classes#class-cookie)> 调用 toCookieString 可以将取出的 [ArrayList](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/collection_package_class#class-arraylistt)<[Cookie](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/http_package_classes#class-cookie)> 转成 [Cookie](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/http_package_classes#class-cookie) header 的 value 字符串。 参数：
    * url: [URL](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/url_package_classes#class-url) \- 所要取出 [ArrayList](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/collection_package_class#class-arraylistt)<[Cookie](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/http_package_classes#class-cookie)> 的 url。
返回值：
    * [ArrayList](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/collection_package_class#class-arraylistt)<[Cookie](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/http_package_classes#class-cookie)> \- [CookieJar](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/http_package_interfaces#interface-cookiejar) 中存储的对应此 url 的 [ArrayList](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/collection_package_class#class-arraylistt)<[Cookie](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/http_package_classes#class-cookie)>。
[h2]func removeCookies(String)
    
    func removeCookies(domain: String): Unit

功能：从 [CookieJar](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/http_package_interfaces#interface-cookiejar) 中移除某个 domain 的 [Cookie](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/http_package_classes#class-cookie)。 ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20240621215237.71361766823886938079580394795297:50001231000000:2800:885AA5BD78800DF40DDE337405EF716ACD3D848F3D2D8AB198C1665B8ACB32A7.png?needInitFileName=true?needInitFileName=true) 默认实现 CookieJarImpl 的移除某个 domain 的 [Cookie](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/http_package_classes#class-cookie) 只会移除特定 domain 的 [Cookie](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/http_package_classes#class-cookie)，domain 的 subdomain 的 [Cookie](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/http_package_classes#class-cookie) 并不会移除。 参数：
    * domain: [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- 所要移除 [Cookie](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/http_package_classes#class-cookie) 的域名。
异常：
    * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_exceptions#class-illegalargumentexception) \- 如果传入的 domain 为空字符串或者非法，则抛出该异常，合法的 domain 规则见 [Cookie](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/http_package_classes#class-cookie) 的参数文档。
[h2]func storeCookies(URL, ArrayList<Cookie>)
    
    func storeCookies(url: URL, cookies: ArrayList<Cookie>): Unit

功能：将 [ArrayList](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/collection_package_class#class-arraylistt)<[Cookie](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/http_package_classes#class-cookie)> 存进 [CookieJar](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/http_package_interfaces#interface-cookiejar)。 如果往 [CookieJar](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/http_package_interfaces#interface-cookiejar) 中存 [Cookie](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/http_package_classes#class-cookie) 时超过了上限（3000 条），那么至少清除 [CookieJar](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/http_package_interfaces#interface-cookiejar) 中 1000 条 [Cookie](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/http_package_classes#class-cookie) 再往里存储。清除 [CookieJar](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/http_package_interfaces#interface-cookiejar) 中 [Cookie](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/http_package_classes#class-cookie) 的优先级见 [RFC 6265 5.3.12.](https://httpwg.org/specs/rfc6265.html#storage-model)。 [Cookie](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/http_package_classes#class-cookie)按如下顺序清除：
    * 过期的 [Cookie](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/http_package_classes#class-cookie)；
    * 相同 domain 中超过 50 条以上的部分；
    * 所有 [Cookie](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/http_package_classes#class-cookie)具有相同优先级的 [Cookie](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/http_package_classes#class-cookie) 则优先删除 last-access 属性更早的。
参数：
    * url: [URL](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/url_package_classes#class-url) \- 产生该 [Cookie](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/http_package_classes#class-cookie) 的 url。
    * cookies: [ArrayList](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/collection_package_class#class-arraylistt)<[Cookie](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/http_package_classes#class-cookie)> \- 需要存储的 [ArrayList](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/collection_package_class#class-arraylistt)<[Cookie](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/http_package_classes#class-cookie)>。
interface HttpRequestDistributor
    
    public interface HttpRequestDistributor

功能：Http request 分发器接口，将一个 request 按照 url 中的 path 分发给对应的 [HttpRequestHandler](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/http_package_interfaces#interface-httprequesthandler) 处理。 ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20240621215237.40095134189522154629402296134419:50001231000000:2800:9FB899BF147E78E3CAC1CABBAF64B2DF59EB1A1912BF1C624765997836834BF7.png?needInitFileName=true?needInitFileName=true) 本实现提供一个默认的 [HttpRequestDistributor](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/http_package_interfaces#interface-httprequestdistributor)，该 distributor 非线程安全。 默认实现提供仓颉标准库中 HTTP/1.1、HTTP/2 的 ProtocolService 实例。 且只能在启动 server 前 register，启动后再次 register，结果未定义。 如果用户希望在启动 server 后还能够 register，需要自己提供一个线程安全的 [HttpRequestDistributor](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/http_package_interfaces#interface-httprequestdistributor) 实现。 [h2]func distribute(String)
    
    func distribute(path: String): HttpRequestHandler

功能：分发请求处理器，未找到对应请求处理器时，将返回 [NotFoundHandler](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/http_package_classes#class-notfoundhandler) 以返回 404 状态码。 参数：
    * path: [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- 请求路径。
返回值：
    * [HttpRequestHandler](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/http_package_interfaces#interface-httprequesthandler) \- 返回请求处理器。
[h2]func register(String, (HttpContext) -> Unit)
    
    func register(path: String, handler: (HttpContext) -> Unit): Unit

功能：注册请求处理器。 参数：
    * path: [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- 请求路径。
    * handler: ([HttpContext](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/http_package_classes#class-httpcontext)) ->[Unit](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#unit) \- 请求处理函数。
异常：
    * [HttpException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/http_package_exceptions#class-httpexception) \- 请求路径已注册请求处理器。
[h2]func register(String, HttpRequestHandler)
    
    func register(path: String, handler: HttpRequestHandler): Unit

功能：注册请求处理器。 参数：
    * path: [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- 请求路径。
    * handler: [HttpRequestHandler](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/http_package_interfaces#interface-httprequesthandler) \- 请求处理器。
异常：
    * [HttpException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/http_package_exceptions#class-httpexception) \- 请求路径已注册请求处理器。
interface HttpRequestHandler
    
    public interface HttpRequestHandler {
        func handle(ctx: HttpContext): Unit
    }

功能：Http request 处理器。 http server 端通过 handler 处理来自客户端的 http request；在 handler 中用户可以获取 http request 的详细信息，包括 header、body；在 handler 中，用户可以构造 http response，包括 header、body，并且可以直接发送 response 给客户端，也可交由 server 发送。 用户在构建 http server 时，需手动通过 server 的 [HttpRequestDistributor](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/http_package_interfaces#interface-httprequestdistributor) 注册一个或多个 handler，当一个客户端 http request 被接收，distributor 按照 request 中 url 的 path 分发给对应的 handler 处理。 [h2]func handle(HttpContext)
    
    func handle(ctx: HttpContext): Unit

功能：处理 Http 请求。 参数：
    * ctx: [HttpContext](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/http_package_classes#class-httpcontext) \- Http 请求上下文。
interface ProtocolServiceFactory
    
    public interface ProtocolServiceFactory {
        func create(protocol: Protocol, socket: StreamingSocket): ProtocolService
    }

功能：Http 服务实例工厂，用于生成 ProtocolService 实例。 [ServerBuilder](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/http_package_classes#class-serverbuilder) 提供默认的实现。默认实现提供仓颉标准库中 HTTP/1.1、HTTP/2 的 ProtocolService 实例。 [h2]func create()
    
    func create(protocol: Protocol, socket: StreamingSocket): ProtocolService

功能：根据协议创建协议服务实例。 参数：
    * protocol: [Protocol](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/http_package_enums#enum-protocol) \- 协议版本，如 HTTP1_0、HTTP1_1、HTTP2_0。
    * socket: [StreamingSocket](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/socket_package_interfaces#interface-streamingsocket) \- 来自客户端的套接字。
返回值：
    * ProtocolService - 协议服务实例。
