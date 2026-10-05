---
name: document/cn/openharmony-cangjie/sort_package_interfaces
title: 接口
uri: https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/sort_package_interfaces
source: portal
---

接口 interface SortByExtension
    
    public interface SortByExtension

功能: 此接口作为排序相关的辅助接口，内部为空。 [h2]extend<T> Array<T> <: SortByExtension
    
    extend<T> Array<T> <: SortByExtension

功能: 此扩展用于实现 [Array](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-arrayt) 的 sortBy 函数。 **func sortBy(Bool, (T, T) - > Ordering)**
    
    public func sortBy(stable!: Bool = false, comparator!: (T, T) -> Ordering): Unit

功能：通过传入的比较函数，根据其返回值 [Ordering](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_enums#enum-ordering) 类型的结果，可对数组进行自定义排序。 参数：
    * stable!: [Bool](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#bool) \- 是否使用稳定排序。
    * comparator!: (T, T) ->[Ordering](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_enums#enum-ordering) \- 用户传入的比较函数，如，comparator: (t1: T, t2: T) -> [Ordering](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_enums#enum-ordering)，如果 comparator 的返回值为 [Ordering](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_enums#enum-ordering).GT，排序后 t1 在 t2 后；如果 comparator 的返回值为 [Ordering](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_enums#enum-ordering).LT，排序后 t1 在 t2 前；如果 comparator 的返回值为 [Ordering](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_enums#enum-ordering).EQ，且为稳定排序那么 t1 与 t2 的位置较排序前保持不变； 如果 comparator 的返回值为 [Ordering](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_enums#enum-ordering).EQ，且为不稳定排序，那么 t1，t2 顺序不确定
interface SortExtension
    
    public interface SortExtension

功能: 此接口作为排序相关的辅助接口，内部为空。 [h2]extend<T> Array<T> <: SortExtension where T <: Comparable<T>
    
    extend<T> Array<T> <: SortExtension where T <: Comparable<T>

功能: 此扩展用于实现 [Array](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-arrayt) 的 sort/sortDescending 函数。 **func sort(Bool)**
    
    public func sort(stable!: Bool = false): Unit

功能：以升序的方式排序 [Array](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-arrayt)。 参数：
    * stable!: [Bool](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#bool) \- 是否使用稳定排序。
**func sortDescending(Bool)**
    
    public func sortDescending(stable!: Bool = false): Unit

功能：以降序的方式排序 [Array](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-arrayt)。 参数：
    * stable!: [Bool](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#bool) \- 是否使用稳定排序。
