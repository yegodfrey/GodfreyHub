---
name: cangjie-references/cj-digest_package_overview
title: std.crypto.digest
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-digest_package_overview
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.crypto.digest
---

# std.crypto.digest

#### 功能介绍

std.crypto.digest 包提供常用摘要算法的通用接口，包括 MD5、SHA1、SHA224、SHA256、SHA384、SHA512、HMAC、SM3 等。

#### API 列表

#### [h2]函数

函数名 | 功能  
---|---  
[digest<T>(T, Array<Byte>) where T <: Digest](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-digest_package_funcs#func-digesttt-arraybyte-where-t--digest) | 提供 digest 泛型函数，实现用指定的摘要算法进行摘要运算。  
[digest<T>(T, String) where T <: Digest (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-digest_package_funcs#func-digesttt-string-where-t--digest-deprecated) | 提供 digest 泛型函数，实现用指定的摘要算法进行摘要运算。  
[digest<T>(T, InputStream) where T <: Digest](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-digest_package_funcs#func-digesttt-inputstream-where-t--digest) | 提供 digest 泛型函数，实现用指定的摘要算法对 InputStream 里的数据进行摘要运算。  
  
#### [h2]接口

接口名 | 功能  
---|---  
[Digest](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-digest_package_interfaces#interface-digest) | 此接口是摘要算法的通用接口。  
  
  * **[函数](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-digest_package_funcs)**  

  * **[接口](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-digest_package_interfaces)**  



