---
name: document/cn/openharmony-cangjie/serialization_package_interfaces
title: 接口
uri: https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_interfaces
source: portal
---

接口 interface Serializable
    
    public interface Serializable<T> {
        func serialize(): DataModel
        static func deserialize(dm: DataModel): T
    }

功能：用于规范序列化。 [h2]func deserialize(DataModel)
    
    static func deserialize(dm: DataModel): T

功能：将 [DataModel](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodel) 反序列化为对象。 ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20240621215243.52269481917871673755150065791695:50001231000000:2800:480881838596AFCDFE556DE6B00121EAC872475CC28092CF1E0430F1D3E24554.png?needInitFileName=true?needInitFileName=true) 支持实现 [Serializable](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_interfaces#interface-serializable) 的类型包括:
    * 基本数据类型：整数类型、浮点类型、布尔类型、字符类型、字符串类型。
    * [Collection](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_interfaces#interface-collectiont) 类型：[Array](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-arrayt)、[ArrayList](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/collection_package_class#class-arraylistt)、[HashSet](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/collection_package_class#class-hashsett-where-t--hashable--equatablet)、[HashMap](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/collection_package_class#class-hashmapk-v-where-k--hashable--equatablek)、[Option](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_enums#enum-optiont)。
    * 用户自定义的实现了 [Serializable](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_interfaces#interface-serializable)<T> 的类型。
返回值：
    * T - 反序列化的对象。
[h2]func serialize()
    
    func serialize(): DataModel

功能：将自身序列化为 [DataModel](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodel)。 返回值：
    * [DataModel](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodel) \- 序列化的 [DataModel](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodel)。
[h2]extend Array <: Serializable
    
    extend<T> Array<T> <: Serializable<Array<T>> where T <: Serializable<T>

**func deserialize(DataModel)**
    
    static public func deserialize(dm: DataModel): Array<T>

功能：将 [DataModel](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodel) 反序列化为 [Array](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-arrayt)<T>。 参数：
    * dm: [DataModel](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodel) \- 需要被反序列化的 [DataModel](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodel)。
返回值：
    * [Array](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-arrayt)<T> \- 反序列化后的 [Array](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-arrayt)<T>。
异常：
    * [DataModelException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_exceptions#class-datamodelexception) \- 当 dm 的类型不是 [DataModelSeq](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodelseq) 时，则抛出异常。
**func serialize()**
    
    public func serialize(): DataModel

功能：将 [Array](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-arrayt)<T> 序列化为 [DataModelSeq](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodelseq)。 返回值：
    * [DataModel](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodel) \- 序列化的 [DataModelSeq](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodelseq)。
[h2]extend ArrayList <: Serializable
    
    extend<T> ArrayList<T> <: Serializable<ArrayList<T>> where T <: Serializable<T>

**func deserialize(DataModel)**
    
    static public func deserialize(dm: DataModel): ArrayList<T>

功能：将 [DataModel](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodel) 反序列化为 [ArrayList](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/collection_package_class#class-arraylistt)<T>。 参数：
    * dm: [DataModel](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodel) \- 需要被反序列化的 [DataModel](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodel)。
返回值：
    * [ArrayList](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/collection_package_class#class-arraylistt)<T> \- 反序列化后的 [ArrayList](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/collection_package_class#class-arraylistt)<T>。
异常：
    * [DataModelException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_exceptions#class-datamodelexception) \- 当 dm 的类型不是 [DataModelSeq](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodelseq) 时，抛出异常。
**func serialize()**
    
    public func serialize(): DataModel

功能：将 [ArrayList](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/collection_package_class#class-arraylistt)<T> 序列化为 [DataModelSeq](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodelseq)。 返回值：
    * [DataModel](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodel) \- 序列化的 [DataModelSeq](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodelseq)。
[h2]extend Bool <: Serializable
    
    extend Bool <: Serializable<Bool>

**func deserialize(DataModel)**
    
    static public func deserialize(dm: DataModel): Bool

功能：将 [DataModel](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodel) 反序列化为 [Bool](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#bool)。 参数：
    * dm: [DataModel](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodel) \- 需要被反序列化的 [DataModel](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodel)。
返回值：
    * [Bool](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#bool) \- 反序列化后的 [Bool](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#bool)。
异常：
    * [DataModelException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_exceptions#class-datamodelexception) \- 当 dm 的类型不是 [DataModelBool](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodelbool) 时，抛出异常。
**func serialize()**
    
    public func serialize(): DataModel

功能：将 [Bool](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#bool) 序列化为 [DataModelBool](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodelbool)。 返回值：
    * [DataModel](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodel) \- 序列化的 [DataModelBool](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodelbool)。
[h2]extend Float16 <: Serializable
    
    extend Float16 <: Serializable<Float16>

拓展 [Float16](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#float16) 以实现 [Serializable](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_interfaces#interface-serializable)。 **func deserialize(DataModel)**
    
    static public func deserialize(dm: DataModel): Float16

功能：将 [DataModel](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodel) 反序列化为 [Float16](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#float16)。 参数：
    * dm: [DataModel](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodel) \- 需要被反序列化的 [DataModel](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodel)。
返回值：
    * [Float16](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#float16) \- 反序列化后的 [Float16](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#float16)。
异常：
    * [DataModelException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_exceptions#class-datamodelexception) \- 当 dm 的类型不是 [DataModelFloat](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodelfloat) 时，则抛出异常。
**func serialize()**
    
    public func serialize(): DataModel

功能：将 [Float16](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#float16) 序列化为 [DataModelFloat](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodelfloat)。 返回值：
    * [DataModel](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodel) \- 序列化的 [DataModelFloat](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodelfloat)。
[h2]extend Float32 <: Serializable
    
    extend Float32 <: Serializable<Float32>

**func deserialize(DataModel)**
    
    static public func deserialize(dm: DataModel): Float32

功能：将 [DataModel](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodel) 反序列化为 [Float32](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#float32)。 参数：
    * dm: [DataModel](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodel) \- 需要被反序列化的 [DataModel](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodel)。
返回值：
    * [Float32](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#float32) \- 反序列化后的 [Float32](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#float32)。
异常：
    * [DataModelException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_exceptions#class-datamodelexception) \- 当 dm 的类型不是 [DataModelFloat](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodelfloat) 时，则抛出异常。
**func serialize()**
    
    public func serialize(): DataModel

功能：将 [Float32](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#float32) 序列化为 [DataModelFloat](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodelfloat)。 返回值：
    * [DataModel](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodel) \- 序列化的 [DataModelFloat](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodelfloat)。
[h2]extend Float64 <: Serializable
    
    extend Float64 <: Serializable<Float64>

**func deserialize(DataModel)**
    
    static public func deserialize(dm: DataModel): Float64

功能：将 [DataModel](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodel) 反序列化为 [Float64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#float64)。 参数：
    * dm: [DataModel](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodel) \- 需要被反序列化的 [DataModel](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodel)。
返回值：
    * [Float64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#float64) \- 反序列化后的 [Float64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#float64)。
异常：
    * [DataModelException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_exceptions#class-datamodelexception) \- 当 dm 的类型不是 [DataModelFloat](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodelfloat) 时，则抛出异常。
**func serialize()**
    
    public func serialize(): DataModel

功能：将 [Float64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#float64) 序列化为 [DataModelFloat](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodelfloat)。 返回值：
    * [DataModel](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodel) \- 序列化的 [DataModelFloat](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodelfloat)。
[h2]extend HashMap <: Serializable
    
    extend<K, V> HashMap<K, V> <: Serializable<HashMap<K, V>> where K <: Serializable<K> & Hashable & Equatable<K>, V <: Serializable<V>

**func deserialize(DataModel)**
    
    static public func deserialize(dm: DataModel): HashMap<K, V>

功能：将 [DataModel](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodel) 反序列化为 [HashMap](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/collection_package_class#class-hashmapk-v-where-k--hashable--equatablek)<K, V>。 参数：
    * dm: [DataModel](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodel) \- 需要被反序列化的 [DataModel](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodel)。
返回值：
    * [HashMap](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/collection_package_class#class-hashmapk-v-where-k--hashable--equatablek) < K, V > \- 反序列化后的 [HashMap](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/collection_package_class#class-hashmapk-v-where-k--hashable--equatablek)<K, V>。
异常：
    * [DataModelException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_exceptions#class-datamodelexception) \- 当 dm 不是 [DataModelStruct](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodelstruct) 类型，或者 [DataModelStruct](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodelstruct) 类型的 dm 中的 [Field](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-field) 不是 [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) 类型时，抛出异常。
**func serialize()**
    
    public func serialize(): DataModel

功能：将 [HashMap](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/collection_package_class#class-hashmapk-v-where-k--hashable--equatablek)<K, V> 序列化为 [DataModelSeq](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodelseq)。 返回值：
    * [DataModel](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodel) \- 序列化的 [DataModelSeq](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodelseq)。
异常：
    * [DataModelException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_exceptions#class-datamodelexception) \- 当前 [HashMap](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/collection_package_class#class-hashmapk-v-where-k--hashable--equatablek) 实例中的 [Key](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/x509_package_interfaces#interface-key) 不是 [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) 类型时，抛出异常。
[h2]extend HashSet <: Serializable
    
    extend<T> HashSet<T> <: Serializable<HashSet<T>> where T <: Serializable<T> & Hashable & Equatable<T>

**func deserialize(DataModel)**
    
    static public func deserialize(dm: DataModel): HashSet<T>

功能：将 [DataModel](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodel) 反序列化为 [HashSet](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/collection_package_class#class-hashsett-where-t--hashable--equatablet)<T>。 参数：
    * dm: [DataModel](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodel) \- 需要被反序列化的 [DataModel](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodel)。
返回值：
    * [HashSet](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/collection_package_class#class-hashsett-where-t--hashable--equatablet)<T> \- 反序列化后的 [HashSet](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/collection_package_class#class-hashsett-where-t--hashable--equatablet)<T>。
异常：
    * [DataModelException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_exceptions#class-datamodelexception) \- 当 dm 的类型不是 [DataModelSeq](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodelseq) 时，抛出异常。
**func serialize()**
    
    public func serialize(): DataModel

功能：将 [HashSet](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/collection_package_class#class-hashsett-where-t--hashable--equatablet)<T> 序列化为 [DataModelSeq](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodelseq)。 返回值：
    * [DataModel](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodel) \- 序列化的 [DataModelSeq](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodelseq)。
[h2]extend Int16 <: Serializable
    
    extend Int16 <: Serializable<Int16>

**func deserialize(DataModel)**
    
    static public func deserialize(dm: DataModel): Int16

功能：将 [DataModel](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodel) 反序列化为 [Int16](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int16)。 参数：
    * dm: [DataModel](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodel) \- 需要被反序列化的 [DataModel](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodel)。
返回值：
    * [Int16](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int16) \- 反序列化后的 [Int16](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int16)。
异常：
    * [DataModelException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_exceptions#class-datamodelexception) \- 当 dm 的类型不是 [DataModelInt](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodelint) 时，则抛出异常。
**func serialize()**
    
    public func serialize(): DataModel

功能：将 [Int16](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int16) 序列化为 [DataModelInt](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodelint)。 返回值：
    * [DataModel](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodel) \- 序列化的 [DataModelInt](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodelint)。
[h2]extend Int32 <: Serializable
    
    extend Int32 <: Serializable<Int32>

**func deserialize(DataModel)**
    
    static public func deserialize(dm: DataModel): Int32

功能：将 [DataModel](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodel) 反序列化为 [Int32](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int32)。 参数：
    * dm: [DataModel](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodel) \- 需要被反序列化的 [DataModel](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodel)。
返回值：
    * [Int32](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int32) \- 反序列化后的 [Int32](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int32)。
异常：
    * [DataModelException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_exceptions#class-datamodelexception) \- 当 dm 的类型不是 [DataModelInt](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodelint) 时，抛出异常
**func serialize()**
    
    public func serialize(): DataModel

功能：将 [Int32](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int32) 序列化为 [DataModelInt](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodelint)。 返回值：
    * [DataModel](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodel) \- 序列化的 [DataModelInt](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodelint)。
[h2]extend Int64 <: Serializable
    
    extend Int64 <: Serializable<Int64>

**func deserialize(DataModel)**
    
    static public func deserialize(dm: DataModel): Int64

功能：将 [DataModel](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodel) 反序列化为 [Int64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int64)。 参数：
    * dm: [DataModel](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodel) \- 需要被反序列化的 [DataModel](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodel)。
返回值：
    * [Int64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int64) \- 反序列化后的 [Int64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int64)。
异常：
    * [DataModelException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_exceptions#class-datamodelexception) \- 当 dm 的类型不是 [DataModelInt](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodelint) 时，抛出异常。
**func serialize()**
    
    public func serialize(): DataModel

功能：将 [Int64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int64) 序列化为 [DataModelInt](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodelint)。 返回值：
    * [DataModel](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodel) \- 序列化的 [DataModelInt](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodelint)。
[h2]extend Int8 <: Serializable
    
    extend Int8 <: Serializable<Int8>

**func deserialize(DataModel)**
    
    static public func deserialize(dm: DataModel): Int8

功能：将 [DataModel](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodel) 反序列化为 [Int8](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int8)。 参数：
    * dm: [DataModel](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodel) \- 需要被反序列化的 [DataModel](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodel)。
返回值：
    * [Int8](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int8) \- 反序列化后的 [Int8](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int8)。
异常：
    * [DataModelException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_exceptions#class-datamodelexception) \- 当 dm 的类型不是 [DataModelInt](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodelint) 时，抛出异常。
**func serialize()**
    
    public func serialize(): DataModel

功能：将 [Int8](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int8) 序列化为 [DataModelInt](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodelint)。 返回值：
    * [DataModel](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodel) \- 序列化的 [DataModelInt](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodelint)。
[h2]extend Option <: Serializable
    
    extend<T> Option<T> <: Serializable<Option<T>> where T <: Serializable<T>

**func deserialize()**
    
    static public func deserialize(dm: DataModel): Option<T>

功能：将 [DataModel](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodel) 反序列化为 [Option](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_enums#enum-optiont)<T>。 参数：
    * dm: [DataModel](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodel) \- 需要被反序列化的 [DataModel](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodel)。
返回值：
    * [Option](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_enums#enum-optiont)<T> \- 反序列化后的 [Option](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_enums#enum-optiont)<T>。
**func serialize()**
    
    public func serialize(): DataModel

功能：将 [Option](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_enums#enum-optiont)<T> 中的 T 序列化为 [DataModel](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodel)。 返回值：
    * [DataModel](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodel) \- 序列化的 [DataModel](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodel)。
[h2]extend Rune <: Serializable
    
    extend Rune <: Serializable<Rune>

**func deserialize(DataModel)**
    
    static public func deserialize(dm: DataModel): Rune

功能：将 [DataModel](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodel) 反序列化为 [Rune](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#rune)。 参数：
    * dm: [DataModel](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodel) \- 需要被反序列化的 [DataModel](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodel)。
返回值：
    * [Rune](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#rune) \- 反序列化后的字符。
异常：
    * [DataModelException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_exceptions#class-datamodelexception) \- 当 dm 的类型不是 [DataModelString](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodelstring) 时，则抛出此异常。
    * [Exception](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_exceptions#class-exception) \- 当 dm 的类型不是 [Rune](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#rune) 时，则抛出此异常。
**func serialize()**
    
    public func serialize(): DataModel

功能：将 [Rune](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#rune) 序列化为 [DataModelString](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodelstring)。 返回值：
    * [DataModel](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodel) \- 序列化的 [DataModelString](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodelstring)。
[h2]extend String <: Serializable
    
    extend String <: Serializable<String>

**func deserialize(DataModel)**
    
    static public func deserialize(dm: DataModel): String

功能：将 [DataModel](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodel) 反序列化为 [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string)。 参数：
    * dm: [DataModel](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodel) \- 需要被反序列化的 [DataModel](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodel)。
返回值：
    * [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- 反序列化后的 [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string)。
异常：
    * [DataModelException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_exceptions#class-datamodelexception) \- 当 dm 的类型不是 [DataModelString](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodelstring) 时，则抛出异常。
**func serialize()**
    
    public func serialize(): DataModel

功能：将 [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) 序列化为 [DataModelString](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodelstring)。 返回值：
    * [DataModel](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodel) \- 序列化的 [DataModelString](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodelstring)。
[h2]extend UInt16 <: Serializable
    
    extend UInt16 <: Serializable<UInt16>

**func deserialize(DataModel)**
    
    static public func deserialize(dm: DataModel): UInt16

功能：将 [DataModel](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodel) 反序列化为 [UInt16](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#uint16)。 参数：
    * dm: [DataModel](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodel) \- 需要被反序列化的 [DataModel](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodel)。
返回值：
    * [UInt16](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#uint16) \- 反序列化后的 [UInt16](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#uint16)。
异常：
    * [DataModelException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_exceptions#class-datamodelexception) \- 当 dm 的类型不是 [DataModelInt](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodelint) 时，则抛出异常。
**func serialize()**
    
    public func serialize(): DataModel

功能：将 [UInt16](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#uint16) 序列化为 [DataModelInt](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodelint)。 返回值：
    * [DataModel](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodel) \- 序列化的 [DataModelInt](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodelint)。
[h2]extend UInt32 <: Serializable
    
    extend UInt32 <: Serializable<UInt32>

**func deserialize(DataModel)**
    
    static public func deserialize(dm: DataModel): UInt32

功能：将 [DataModel](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodel) 反序列化为 [UInt32](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#uint32)。 参数：
    * dm: [DataModel](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodel) \- 需要被反序列化的 [DataModel](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodel)。
返回值：
    * [UInt32](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#uint32) \- 反序列化后的 [UInt32](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#uint32)。
异常：
    * [DataModelException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_exceptions#class-datamodelexception) \- 当 dm 的类型不是 [DataModelInt](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodelint) 时，则抛出异常。
**func serialize()**
    
    public func serialize(): DataModel

功能：将 [UInt32](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#uint32) 序列化为 [DataModelInt](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodelint)。 返回值：
    * [DataModel](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodel) \- 序列化的 [DataModelInt](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodelint)。
[h2]extend UInt64 <: Serializable
    
    extend UInt64 <: Serializable<UInt64>

**func deserialize(DataModel)**
    
    static public func deserialize(dm: DataModel): UInt64

功能：将 [DataModel](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodel) 反序列化为 [UInt64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#uint64)。 参数：
    * dm: [DataModel](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodel) \- 需要被反序列化的 [DataModel](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodel)。
返回值：
    * [UInt64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#uint64) \- 反序列化后的 [UInt64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#uint64)。
异常：
    * [DataModelException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_exceptions#class-datamodelexception) \- 当 dm 的类型不是 [DataModelInt](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodelint) 时，则抛出异常。
**func serialize()**
    
    public func serialize(): DataModel

功能：将 [UInt64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#uint64) 序列化为 [DataModelInt](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodelint)。 返回值：
    * [DataModel](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodel) \- 序列化的 [DataModelInt](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodelint)。
[h2]extend UInt8 <: Serializable
    
    extend UInt8 <: Serializable<UInt8>

**func deserialize(DataModel)**
    
    static public func deserialize(dm: DataModel): UInt8

功能：将 [DataModel](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodel) 反序列化为 [UInt8](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#uint8)。 参数：
    * dm: [DataModel](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodel) \- 需要被反序列化的 [DataModel](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodel)。
返回值：
    * [UInt8](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#uint8) \- 反序列化后的 [UInt8](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#uint8)。
异常：
    * [DataModelException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_exceptions#class-datamodelexception) \- 当 dm 的类型不是 [DataModelInt](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodelint) 时，则抛出异常。
**func serialize()**
    
    public func serialize(): DataModel

功能：将 [UInt8](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#uint8) 序列化为 [DataModelInt](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodelint)。 返回值：
    * [DataModel](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodel) \- 序列化的 [DataModelInt](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/serialization_package_classes#class-datamodelint)。
