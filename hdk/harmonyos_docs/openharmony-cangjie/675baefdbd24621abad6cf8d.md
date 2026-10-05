---
name: document/cn/openharmony-cangjie/encoding_json_package_classes
title: 类
uri: https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes
source: portal
---

类 class JsonArray
    
    public class JsonArray <: JsonValue {
        public init()
        public init(list: ArrayList<JsonValue>)
        public init(list: Array<JsonValue>)
    }

功能：此类为 [JsonValue](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonvalue) 实现子类，主要用于封装数组类型的 JSON 数据。 示例： 使用示例见[JsonArray 使用示例](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/json_array_sample)。 [h2]init()
    
    public init()

功能：创建空 [JsonArray](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonarray)。 [h2]init(ArrayList<JsonValue>)
    
    public init(list: ArrayList<JsonValue>)

功能：将指定的 [ArrayList](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/collection_package_class#class-arraylistt) 类型实例封装成 [JsonArray](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonarray) 实例。 参数：
    * list: [ArrayList](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/collection_package_class#class-arraylistt)<[JsonValue](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonvalue)> \- 用于创建 [JsonArray](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonarray) 的 [ArrayList](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/collection_package_class#class-arraylistt)。
[h2]init(Array<JsonValue>)
    
    public init(list: Array<JsonValue>)

功能：将指定的 [Array](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-arrayt) 类型实例封装成 [JsonArray](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonarray) 实例。 参数：
    * list: [Array](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-arrayt)<[JsonValue](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonvalue)> \- 用于创建 [JsonArray](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonarray) 的 [Array](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-arrayt)。
[h2]func add(JsonValue)
    
    public func add(jv: JsonValue): JsonArray

功能：向 [JsonArray](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonarray) 中加入 [JsonValue](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonvalue) 数据。 参数：
    * jv: [JsonValue](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonvalue) \- 需要加入的 [JsonValue](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonvalue)。
返回值：
    * [JsonArray](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonarray) \- 加入数据后的 [JsonArray](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonarray)。
[h2]func get(Int64)
    
    public func get(index: Int64): Option<JsonValue>

功能：获取 [JsonArray](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonarray) 中指定索引的 [JsonValue](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonvalue)，并用 [Option](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_enums#enum-optiont)<[JsonValue](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonvalue)> 封装。 参数：
    * index: [Int64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int64) \- 指定的索引。
返回值：
    * [Option](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_enums#enum-optiont)<[JsonValue](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonvalue)> \- 对应索引的 [JsonValue](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonvalue) 数据的封装形式。
[h2]func getItems()
    
    public func getItems(): ArrayList<JsonValue>

功能：获取 [JsonArray](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonarray) 中的 items 数据。 返回值：
    * [ArrayList](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/collection_package_class#class-arraylistt)<[JsonValue](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonvalue)> \- [JsonArray](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonarray) 的 items 数据。
[h2]func kind()
    
    public func kind(): JsonKind

功能：返回当前 [JsonArray](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonarray) 所属的 [JsonKind](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_enums#enum-jsonkind) 类型（JsArray）。 返回值：
    * [JsonKind](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_enums#enum-jsonkind) \- 当前 [JsonArray](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonarray) 所属的 [JsonKind](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_enums#enum-jsonkind) 类型（JsArray）。
[h2]func size()
    
    public func size(): Int64

功能：获取 [JsonArray](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonarray) 中 [JsonValue](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonvalue) 的数量。 返回值：
    * [Int64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int64) \- [JsonArray](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonarray) 中 [JsonValue](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonvalue) 的数量。
[h2]func toJsonString()
    
    public func toJsonString(): String

功能：将 [JsonArray](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonarray) 转换为 JSON 格式的 (带有空格换行符) 的字符串。 返回值：
    * [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- 转换后的 JSON 格式字符串。
[h2]func toJsonString(Int64, Bool, String)
    
    public func toJsonString(depth: Int64, bracketInNewLine!: Bool = false, indent!: String = "  "): String

功能：将 [JsonArray](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonarray) 转换为 JSON 格式的字符串。该函数将指定初始的缩进深度、第一个括号后是否换行以及缩进字符串。 参数：
    * depth: [Int64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int64) \- 指定的缩进深度。
    * bracketInNewLine!: [Bool](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#bool) \- 第一个括号是否换行，如果为 true，第一个括号将另起一行并且按照指定的深度缩进。
    * indent!: [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- 指定的缩进字符串，缩进字符串中只允许空格和制表符的组合，默认为两个空格。
返回值：
    * [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- 转换后的 JSON 格式字符串。
异常：
    * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_exceptions#class-illegalargumentexception) \- 如果 depth 为负数，或 indent 中存在 ' ' 和 '\t' 以外的字符，则抛出异常。
[h2]func toString()
    
    public func toString(): String

功能：将 [JsonString](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonstring) 转换为字符串。 返回值：
    * [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- 转换后的字符串。
[h2]operator func [](Int64)
    
    public operator func [](index: Int64): JsonValue

功能：获取 [JsonArray](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonarray) 中指定索引的 [JsonValue](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonvalue)。 参数：
    * index: [Int64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int64) \- 指定的索引。
返回值：
    * [JsonValue](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonvalue) \- 对应索引的 [JsonValue](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonvalue)。
异常：
    * [JsonException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_exceptions#class-jsonexception) \- 如果 index 不是 [JsonArray](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonarray) 的有效索引，抛出异常。
class JsonBool
    
    public class JsonBool <: JsonValue {
        public init(bv: Bool)
    }

功能：此类为 [JsonValue](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonvalue) 实现子类，主要用于封装 true 或者 false 的 JSON 数据。 [h2]init(Bool)
    
    public init(bv: Bool)

功能：将指定的 [Bool](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#bool) 类型实例封装成 [JsonBool](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonbool) 实例。 [h2]func getValue()
    
    public func getValue(): Bool

功能：获取 [JsonBool](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonbool) 中 value 的实际值。 返回值：
    * [Bool](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#bool) \- value 的实际值。
[h2]func kind()
    
    public func kind(): JsonKind

功能：返回当前 [JsonBool](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonbool) 所属的 [JsonKind](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_enums#enum-jsonkind) 类型（JsBool）。 返回值：
    * [JsonKind](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_enums#enum-jsonkind) \- 当前 [JsonBool](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonbool) 所属的 [JsonKind](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_enums#enum-jsonkind) 类型（JsBool）。
[h2]func toJsonString()
    
    public func toJsonString(): String

功能：将 [JsonBool](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonbool) 转换为 JSON 格式的 (带有空格换行符) 字符串。 返回值：
    * [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- 转换后的 JSON 格式字符串。
[h2]func toString()
    
    public func toString(): String

功能：将 [JsonBool](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonbool) 转换为字符串。 返回值：
    * [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- 转换后的字符串。
class JsonFloat
    
    public class JsonFloat <: JsonValue {
        public init(fv: Float64)
        public init(v: Int64)
    }

功能：此类为 [JsonValue](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonvalue) 实现子类，主要用于封装浮点类型的 JSON 数据。 [h2]init(Float)
    
    public init(fv: Float64)

功能：将指定的 [Float64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#float64) 类型实例封装成 [JsonFloat](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonfloat) 实例。 参数：
    * fv: [Float64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#float64) \- [Float64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#float64) 类型。
[h2]init(Int64)
    
    public init(v: Int64)

功能：将指定的 [Int64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int64) 类型实例封装成 [JsonFloat](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonfloat) 实例。 参数：
    * v: [Int64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int64) \- [Int64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int64) 类型。
[h2]func getValue()
    
    public func getValue(): Float64

功能：获取 [JsonFloat](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonfloat) 中 value 的实际值。 返回值：
    * [Float64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#float64) \- value 的实际值。
[h2]func kind()
    
    public func kind(): JsonKind

功能：返回当前 [JsonFloat](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonfloat) 所属的 [JsonKind](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_enums#enum-jsonkind) 类型（JsFloat）。 返回值：
    * [JsonKind](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_enums#enum-jsonkind) \- 当前 [JsonFloat](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonfloat) 所属的 [JsonKind](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_enums#enum-jsonkind) 类型（JsFloat）。
[h2]func toJsonString()
    
    public func toJsonString(): String

功能：将 [JsonFloat](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonfloat) 转换为 JSON 格式的 (带有空格换行符) 字符串。 返回值：
    * [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- 转换后的 JSON 格式字符串。
[h2]func toString()
    
    public func toString(): String

功能：将 [JsonFloat](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonfloat) 转换为字符串。 返回值：
    * [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- 转换后的字符串。
class JsonInt
    
    public class JsonInt <: JsonValue {
        public init(iv: Int64)
    }

功能：此类为 [JsonValue](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonvalue) 实现子类，主要用于封装整数类型的 JSON 数据。 [h2]init(Int64)
    
    public init(iv: Int64)

功能：将指定的 [Int64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int64) 类型实例封装成 [JsonInt](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonint) 实例。 参数：
    * iv: [Int64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int64) \- 用于创建 [JsonInt](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonint) 的 [Int64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int64)。
[h2]func getValue()
    
    public func getValue(): Int64

功能：获取 [JsonInt](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonint) 中 value 的实际值。 返回值：
    * [Int64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int64) \- value 的实际值。
[h2]func kind()
    
    public func kind(): JsonKind

功能：返回当前 [JsonInt](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonint) 所属的 [JsonKind](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_enums#enum-jsonkind) 类型（JsInt）。 返回值：
    * [JsonKind](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_enums#enum-jsonkind) \- 当前 [JsonInt](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonint) 所属的 [JsonKind](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_enums#enum-jsonkind) 类型（JsInt）。
[h2]func toJsonString()
    
    public func toJsonString(): String

功能：将 [JsonInt](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonint) 转换为 JSON 格式的 (带有空格换行符) 字符串。 返回值：
    * [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- 转换后的 JSON 格式字符串。
[h2]func toString()
    
    public func toString(): String

功能：将 [JsonInt](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonint) 转换为字符串。 返回值：
    * [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- 转换后的字符串。
class JsonNull
    
    public class JsonNull <: JsonValue

功能：此类为 [JsonValue](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonvalue) 实现子类，主要用于封装 null 的 JSON 数据。 [h2]func kind()
    
    public func kind(): JsonKind

功能：返回当前 [JsonNull](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonnull) 所属的 [JsonKind](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_enums#enum-jsonkind) 类型（JsNull）。 返回值：
    * [JsonKind](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_enums#enum-jsonkind) \- 当前 [JsonNull](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonnull) 所属的 [JsonKind](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_enums#enum-jsonkind) 类型（JsNull）。
[h2]func toJsonString()
    
    public func toJsonString(): String

功能：将 [JsonNull](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonnull) 转换为 JSON 格式的 (带有空格换行符) 字符串。 返回值：
    * [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- 转换后的 JSON 格式字符串。
[h2]func toString()
    
    public func toString(): String

功能：将 [JsonNull](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonnull) 转换为字符串。 返回值：
    * [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- 转换后的字符串。
class JsonObject
    
    public class JsonObject <: JsonValue {
        public init()
        public init(map: HashMap<String, JsonValue>)
    }

功能：此类为 [JsonValue](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonvalue) 实现子类，主要用于封装 object 类型的 JSON 数据。 [h2]init()
    
    public init()

功能：创建空 [JsonObject](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonobject)。 [h2]init()
    
    public init(map: HashMap<String, JsonValue>)

功能：将指定的 [HashMap](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/collection_package_class#class-hashmapk-v-where-k--hashable--equatablek) 类型实例封装成 [JsonObject](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonobject) 实例。 [h2]func containsKey(String)
    
    public func containsKey(key: String): Bool

功能：判断 [JsonObject](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonobject) 中是否存在 key。 参数：
    * key: [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- 指定的 key。
返回值：
    * [Bool](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#bool) \- 存在返回 true，不存在返回 false。
[h2]func get(String)
    
    public func get(key: String): Option<JsonValue>

功能：获取 [JsonObject](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonobject) 中 key 对应的 [JsonValue](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonvalue)，并用 [Option](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_enums#enum-optiont)<[JsonValue](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonvalue)> 封装。 参数：
    * key: [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- 指定的 key。
返回值：
    * [Option](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_enums#enum-optiont)<[JsonValue](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonvalue)> \- key 对应的 [JsonValue](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonvalue) 的封装形式。
[h2]func getFields()
    
    public func getFields(): HashMap<String, JsonValue>

功能：获取 [JsonObject](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonobject) 中的 fields 数据。 返回值：
    * [HashMap](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/collection_package_class#class-hashmapk-v-where-k--hashable--equatablek) < [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string), [JsonValue](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonvalue) > \- [JsonObject](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonobject) 的 fields 数据。
[h2]func kind()
    
    public func kind(): JsonKind。

功能：返回当前 [JsonObject](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonobject) 所属的 [JsonKind](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_enums#enum-jsonkind) 类型（JsObject）。 返回值：
    * [JsonKind](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_enums#enum-jsonkind) \- 当前 [JsonObject](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonobject) 所属的 [JsonKind](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_enums#enum-jsonkind) 类型（JsObject）。
[h2]func put(String, JsonValue)
    
    public func put(key: String, v: JsonValue)

功能：向 [JsonObject](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonobject) 中加入 key-[JsonValue](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonvalue) 数据。 参数：
    * key: [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- 需要加入的 key。
    * v: [JsonValue](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonvalue) \- 对应 key 的 [JsonValue](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonvalue)。
[h2]func size()
    
    public func size(): Int64

功能：获取 [JsonObject](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonobject) 中 fields 存入 string-[JsonValue](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonvalue) 的数量。 返回值：
    * [Int64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int64) \- [JsonObject](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonobject) 中 fields 的大小。
[h2]func toJsonString()
    
    public func toJsonString(): String

功能：将 [JsonObject](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonobject) 转换为 JSON 格式的 (带有空格换行符) 字符串。 返回值：
    * [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- 转换后的 JSON 格式字符串。
[h2]func toJsonString(Int64, Bool, String)
    
    public func toJsonString(depth: Int64, bracketInNewLine!: Bool = false, indent!: String = "  "): String

功能：将 [JsonObject](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonobject) 转换为 Json格式的字符串。该函数将指定初始的缩进深度、第一个括号后是否换行以及缩进字符串。 参数：
    * depth: [Int64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int64) \- 缩进深度。
    * bracketInNewLine!: [Bool](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#bool) \- 第一个括号是否换行，如果为 true，第一个括号将另起一行并且按照指定的深度缩进。
    * indent!: [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- 指定的缩进字符串，缩进字符串中只允许空格和制表符的组合，默认为两个空格。
返回值：
    * [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- 转换后的 JSON 格式字符串。
异常：
    * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_exceptions#class-illegalargumentexception) \- 如果 depth 为负数，或 indent 中存在 ' ' 和 '\t' 以外的字符，则抛出异常。
[h2]func toString()
    
    public func toString(): String

功能：将 [JsonObject](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonobject) 转换为字符串。 返回值：
    * [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- 转换后的字符串。
[h2]operator func [](String)
    
    public operator func [](key: String): JsonValue

功能：获取 [JsonObject](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonobject) 中 key 对应的 [JsonValue](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonvalue)。 参数：
    * key: [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- 指定的 key。
返回值：
    * [JsonValue](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonvalue) \- key 对应的 [JsonValue](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonvalue)。
异常：
    * [JsonException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_exceptions#class-jsonexception) \- 如果 key 不是 [JsonObject](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonobject) 的有效键，抛出异常。
class JsonString
    
    public class JsonString <: JsonValue {
        public init(sv: String)
    }

功能：此类为 [JsonValue](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonvalue) 实现子类，主要用于封装字符串类型的 JSON 数据。 [h2]init(String)
    
    public init(sv: String)

功能：将指定的 [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) 类型实例封装成 [JsonString](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonstring) 实例。 [h2]func getValue()
    
    public func getValue(): String

功能：获取 [JsonString](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonstring) 中 value 的实际值。 返回值：
    * [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- value 的实际值。
[h2]func kind()
    
    public func kind(): JsonKind

功能：返回当前 [JsonString](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonstring) 所属的 [JsonKind](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_enums#enum-jsonkind) 类型（JsString）。 返回值：
    * [JsonKind](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_enums#enum-jsonkind) \- 当前 [JsonString](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonstring) 所属的 [JsonKind](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_enums#enum-jsonkind) 类型（JsString）。
[h2]func toJsonString()
    
    public func toJsonString(): String

功能：将 [JsonString](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonstring) 转换为 JSON 格式的 (带有空格换行符) 字符串。 返回值：
    * [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- 转换后的 JSON 格式字符串。
[h2]func toString()
    
    public func toString(): String

功能：将 [JsonString](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonstring) 转换为字符串。 返回值：
    * [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- 转换后的字符串。
class JsonValue
    
    sealed abstract class JsonValue <: ToString

功能：此类为 JSON 数据层，主要用于 [JsonValue](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonvalue) 和 [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) 数据之间的互相转换。 抽象类 [JsonValue](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonvalue) 提供了 [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) 类型和具体的 JSON 类型相互转换的接口，以及具体的 JSON 类型判断功能。 示例： 使用示例见[JsonValue 和 String 互相转换](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/json_value_sample)。 [h2]static func fromStr(String)
    
    public static func fromStr(s: String): JsonValue

功能：将字符串数据解析为 [JsonValue](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonvalue)。对于整数，支持前导 '0b'，'0o'，'0x'（不区分大小写），分别表示二进制，八进制和十六进制。字符串解析失败时将打印错误字符及其行数和列数，其中列数从错误字符所在行的非空格字符起开始计算。 JSON 在解析 [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) 转换为 [JsonValue](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonvalue) 时，转义字符 \ 之后只能对应 JSON 支持的转义字符（b、f、n、r、t、u、\、"、/），其中 \u 的格式为：\uXXXX，X 为十六进制数，例：\u0041 代表字符 'A'。 参数：
    * s: [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- 传入字符串，暂不支持 "?" 和特殊字符。
返回值：
    * [JsonValue](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonvalue) \- 转换后的 [JsonValue](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonvalue)。
异常：
    * [JsonException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_exceptions#class-jsonexception) \- 如果内存分配失败，或解析字符串出错，抛出异常。
示例：
    
    import encoding.json.*
    
    main() {
        println(JsonString("\b | \f | \n | \r | \t | A | \\ | \" | /").toString())
        println(JsonValue.fromStr("\"\\b\"").toString())
        println(JsonValue.fromStr("\"\\f\"").toString())
        println(JsonValue.fromStr("\"\\n\"").toString())
        println(JsonValue.fromStr("\"\\r\"").toString())
        println(JsonValue.fromStr("\"\\t\"").toString())
        println(JsonValue.fromStr("\"\\u0041\"").toString())
        println(JsonValue.fromStr("\"\\\\\"").toString())
        println(JsonValue.fromStr("\"\\\"\"").toString())
        println(JsonValue.fromStr("\"\\/\"").toString())
    }

运行结果如下：
    
    "\b | \f | \n | \r | \t | A | \\ | \" | /"
    "\b"
    "\f"
    "\n"
    "\r"
    "\t"
    "A"
    "\\"
    "\""
    "/"

[h2]func asArray()
    
    public func asArray(): JsonArray

功能：将 [JsonValue](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonvalue) 转换为 [JsonArray](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonarray) 格式。 返回值：
    * [JsonArray](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonarray) \- 转换后的 [JsonArray](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonarray)。
异常：
    * [JsonException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_exceptions#class-jsonexception) \- 如果转换失败，抛出异常。
[h2]func asBool()
    
    public func asBool(): JsonBool

功能：将 [JsonValue](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonvalue) 转换为 [JsonBool](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonbool) 格式。 返回值：
    * [JsonBool](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonbool) \- 转换后的 [JsonBool](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonbool)。
异常：
    * [JsonException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_exceptions#class-jsonexception) \- 如果转换失败，抛出异常。
[h2]func asFloat()
    
    public func asFloat(): JsonFloat

功能：将 [JsonValue](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonvalue) 转换为 [JsonFloat](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonfloat) 格式。 返回值：
    * [JsonFloat](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonfloat) \- 转换后的 [JsonFloat](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonfloat)。
异常：
    * [JsonException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_exceptions#class-jsonexception) \- 如果转换失败，抛出异常。
[h2]func asInt()
    
    public func asInt(): JsonInt

功能：将 [JsonValue](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonvalue) 转换为 [JsonInt](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonint) 格式。 返回值：
    * [JsonInt](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonint) \- 转换后的 [JsonInt](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonint)。
异常：
    * [JsonException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_exceptions#class-jsonexception) \- 如果转换失败，抛出异常。
[h2]func asNull()
    
    public func asNull(): JsonNull

功能：将 [JsonValue](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonvalue) 转换为 [JsonNull](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonnull) 格式。 返回值：
    * [JsonNull](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonnull) \- 转换后的 [JsonNull](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonnull)。
异常：
    * [JsonException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_exceptions#class-jsonexception) \- 如果转换失败，抛出异常。
[h2]func asObject()
    
    public func asObject(): JsonObject

功能：将 [JsonValue](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonvalue) 转换为 [JsonObject](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonobject) 格式。 返回值：
    * [JsonObject](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonobject) \- 转换后的 [JsonObject](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonobject)。
异常：
    * [JsonException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_exceptions#class-jsonexception) \- 如果转换失败，抛出异常。
[h2]func asString()
    
    public func asString(): JsonString

功能：将 [JsonValue](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonvalue) 转换为 [JsonString](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonstring) 格式。 返回值：
    * [JsonString](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonstring) \- 转换后的 [JsonString](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonstring)。
异常：
    * [JsonException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_exceptions#class-jsonexception) \- 如果转换失败，抛出异常。
[h2]func kind()
    
    public func kind(): JsonKind

功能：返回当前 [JsonValue](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonvalue) 所属的 [JsonKind](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_enums#enum-jsonkind) 类型。 返回值：
    * [JsonKind](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_enums#enum-jsonkind) \- 当前 [JsonValue](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonvalue) 所属的 [JsonKind](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_enums#enum-jsonkind) 类型。
[h2]func toJsonString()
    
    public func toJsonString(): String

功能：将 [JsonValue](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonvalue) 转换为 JSON 格式的 (带有空格换行符) 字符串。 返回值：
    * [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- 转换后的 JSON 格式字符串。
[h2]func toString()
    
    public func toString(): String

功能：将 [JsonValue](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/encoding_json_package_classes#class-jsonvalue) 转换为字符串。 返回值：
    * [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- 转换后的字符串。
