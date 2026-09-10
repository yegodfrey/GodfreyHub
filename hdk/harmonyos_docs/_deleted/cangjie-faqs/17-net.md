---
name: cangjie-faqs/17-net
title: 仓颉如何发起http网络请求
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/17-net
nodePath: FAQ / 标准库 / 仓颉如何发起http网络请求
---

# 仓颉如何发起http网络请求

方式一：使用[Cangjie/cangjie_stdx](https://gitcode.com/Cangjie/cangjie_stdx)中的stdx.net.http包。

stdx.net.http包支持发送HTTP/1.1、HTTP/2、HTTPS请求。

该包提供的发送请求相关接口（send、get、post等）本身是同步的，即获取响应后函数返回。如需异步操作，可创建仓颉线程，在仓颉线程中调用发送接口。

方式二：使用系统API中[ohos.net.http包](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-net-http)。

该包提供的发送请求接口是异步的，可以通过callback机制在回调函数中处理响应。
