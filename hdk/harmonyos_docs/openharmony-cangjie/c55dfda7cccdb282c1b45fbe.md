---
name: document/cn/openharmony-cangjie/encoding_json_package_exceptions
title: 异常
uri: https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_exceptions
source: portal
---

异常 class JsonException
    
    public class JsonException <: Exception {
        public init()
        public init(message: String)
    }

功能：JSON 包的异常类，用于 [JsonValue](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonvalue) 类型使用时出现异常的场景。 [h2]init()
    
    public init()

功能：构造一个不包含任何异常提示信息的 [JsonException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_exceptions#class-jsonexception) 实例。 [h2]init(String)
    
    public init(message: String)

功能：根据指定的异常提示信息构造 [JsonException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_exceptions#class-jsonexception) 实例。 参数：
    * message: [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- 指定的异常提示信息。
