---
name: document/cn/openharmony-cangjie/http_package_funcs
title: 函数
uri: https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/http_package_funcs
source: portal
---

函数 func handleError(HttpContext, UInt16)
    
    public func handleError(ctx: HttpContext, code: UInt16): Unit

功能：便捷的 Http 请求处理函数，用于回复错误请求。 参数：
    * ctx: [HttpContext](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/http_package_classes#class-httpcontext) \- Http 请求上下文。
    * code: [UInt16](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#uint16) \- Http 响应码。
func notFound(HttpContext)
    
    public func notFound(ctx: HttpContext): Unit

功能：便捷的 Http 请求处理函数，用于回复 404 响应。 参数：
    * ctx: [HttpContext](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/http_package_classes#class-httpcontext) \- Http 请求上下文。
func upgrade(HttpContext)
    
    public func upgrade(ctx: HttpContext): StreamingSocket

功能：在 handler 内获取 [StreamingSocket](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/socket_package_interfaces#interface-streamingsocket)，可用于支持协议升级和处理 CONNECT 请求。
    * 调用该函数时，将首先根据 ctx.responseBuilder 发送响应，仅发送状态码和响应头。
    * 调用该函数时，将把 ctx.request.body 置空，后续无法通过 body.read(...) 读数据，未读完的 body 数据将留存在返回的 [StreamingSocket](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/socket_package_interfaces#interface-streamingsocket) 中。
参数：
    * ctx: [HttpContext](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/http_package_classes#class-httpcontext) \- 请求上下文。
返回值：
    * [StreamingSocket](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/socket_package_interfaces#interface-streamingsocket) \- 底层连接（对于 HTTP/2 是一个 stream），可用于后续读写。
异常：
    * [HttpException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/http_package_exceptions#class-httpexception) \- 获取底层连接（对于 HTTP/2 是一个 stream）失败。
