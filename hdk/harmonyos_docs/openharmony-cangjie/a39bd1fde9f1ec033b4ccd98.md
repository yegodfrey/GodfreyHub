---
name: document/cn/openharmony-cangjie/zlib_package_exceptions
title: 异常类
uri: https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/zlib_package_exceptions
source: portal
---

异常类 class ZlibException
    
    public class ZlibException <: Exception {
        public init(message: String)
    }

功能：zlib 包的异常类。 [h2]init(String)
    
    public init(message: String)

功能：根据异常信息创建 [ZlibException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/zlib_package_exceptions#class-zlibexception) 实例。 参数：
    * message: [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- 异常提示信息。
