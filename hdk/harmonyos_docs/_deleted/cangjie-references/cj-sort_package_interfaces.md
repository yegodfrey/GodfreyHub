---
name: cangjie-references/cj-sort_package_interfaces
title: 接口
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sort_package_interfaces
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.sort / 接口
---

# 接口

#### interface SortByExtension<T> (deprecated)
    
    
    public interface SortByExtension<T> {
        func sortBy(comparator!: (T, T) -> Ordering): Unit
        func sortBy(stable!: Bool, comparator!: (T, T) -> Ordering): Unit
    }

功能：此接口作为排序相关的辅助接口，通过传入的比较函数，根据其返回值 [Ordering](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-ordering) 类型的结果，可对 T 进行自定义排序。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c4/v3/uzCCiJIgQ_m4NcuIsfaoFg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111717Z&HW-CC-Expire=86400&HW-CC-Sign=13029858DFE08960E2C2E132FE8C01B10C775F97AEED3BAFCBB29ABCFA4CD921)

未来版本即将废弃。

#### [h2]func sortBy((T, T) -> Ordering) (deprecated)
    
    
    func sortBy(comparator!: (T, T) -> Ordering): Unit

功能：通过传入的比较函数，根据其返回值 [Ordering](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-ordering) 类型的结果，可对 T 进行自定义排序。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b4/v3/A8JMXMO0QACuBkS2i5uc7w/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111717Z&HW-CC-Expire=86400&HW-CC-Sign=0595A34F14DF4B4F111FCC6062F851BA7D7673F68D7EAA4874E0695B41D17D39)

未来版本即将废弃。

参数：

  * comparator!: (T, T) ->[Ordering](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-ordering) \- 用户传入的比较函数。



#### [h2]func sortBy(Bool, (T, T) -> Ordering) (deprecated)
    
    
    func sortBy(stable!: Bool, comparator!: (T, T) -> Ordering): Unit

功能：通过传入的比较函数，根据其返回值 [Ordering](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-ordering) 类型的结果和稳定排序标志位，可对 T 进行自定义排序。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b8/v3/HTW8O2HDSmi3NVYmTUESZw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111717Z&HW-CC-Expire=86400&HW-CC-Sign=44E572A19081E7BB8E2AD003F12460101B22269A3FEF543414ABD75D2423EC40)

未来版本即将废弃。

参数：

  * stable!: [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 是否使用稳定排序。
  * comparator!: (T, T) ->[Ordering](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-ordering) \- 用户传入的比较函数。



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e/v3/9pSPv_7XSGeG8OYWWxKfXA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111717Z&HW-CC-Expire=86400&HW-CC-Sign=E8FBCBB3956BF2545B457846B4A422C7161370CB2E54E5CCAF9BE3C6EF017E8C)

未来版本即将废弃。

#### [h2]extend<T> Array<T> <: SortByExtension<T> (deprecated)
    
    
    extend<T> Array<T> <: SortByExtension<T>

功能：此扩展用于实现 [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt) 的 sortBy 函数。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a7/v3/F-kgHpAZQhm_d2k5r0IWqg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111717Z&HW-CC-Expire=86400&HW-CC-Sign=7E444D60594A4542A31B9569FA084BA5D030C246A01FA540616FB2250C1FF6E6)

未来版本即将废弃。

父类型：

  * [SortByExtension](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sort_package_interfaces#interface-sortbyextensiont-deprecated)



**func sortBy((T, T) - > Ordering) (deprecated)**
    
    
    public func sortBy(comparator!: (T, T) -> Ordering): Unit

功能：通过传入的比较函数，根据其返回值 [Ordering](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-ordering) 类型的结果，可对数组进行自定义排序。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2b/v3/Koic7AVQTNaByOG3k83IiQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111717Z&HW-CC-Expire=86400&HW-CC-Sign=86B3D75C47E2A6F4E143ECFF6D2844D85E276B9DB718A2E70C560A11427D5F7D)

未来版本即将废弃，使用 [sort](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sort_package_funcs#func-sorttarrayt-t-t---ordering-bool-bool) 替代。

参数：

  * comparator!: (T, T) ->[Ordering](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-ordering) \- 用户传入的比较函数，如，comparator: (t1: T, t2: T) -> [Ordering](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-ordering)，如果 comparator 的返回值为 [Ordering](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-ordering).GT，排序后 t1 在 t2 后；如果 comparator 的返回值为 [Ordering](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-ordering).LT，排序后 t1 在 t2 前；如果 comparator 的返回值为 [Ordering](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-ordering).EQ，且为稳定排序那么 t1 与 t2 的位置较排序前保持不变； 如果 comparator 的返回值为 [Ordering](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-ordering).EQ，且为不稳定排序，那么 t1，t2 顺序不确定。



示例：
    
    
    import std.sort.*
    
    main() {
        let arr = [3, 1, 4, 1, 5]
        println("排序前: ${arr}")
    
        // 自定义比较器：按升序排序
        arr.sortBy(comparator: {
            a, b => if (a < b) {
                return Ordering.LT
            } else if (a > b) {
                return Ordering.GT
            } else {
                return Ordering.EQ
            }
        })
    
        println("排序后: ${arr}")
    
        return 0
    }

运行结果：
    
    
    排序前: [3, 1, 4, 1, 5]
    排序后: [1, 1, 3, 4, 5]

**func sortBy(Bool, (T, T) - > Ordering) (deprecated)**
    
    
    public func sortBy(stable!: Bool, comparator!: (T, T) -> Ordering): Unit

功能：通过传入的比较函数，根据其返回值 [Ordering](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-ordering) 类型的结果，可对数组进行自定义排序。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8c/v3/syk3Vrc4Trq2BRWa2bgksw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111717Z&HW-CC-Expire=86400&HW-CC-Sign=2F231FDA63F8AAC0708D623F7F1D9D86009C911A0478CD7F9107FFB290556F8A)

未来版本即将废弃，使用 [sort](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sort_package_funcs#func-sorttarrayt-t-t---ordering-bool-bool) 替代。

参数：

  * stable!: [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 是否使用稳定排序。
  * comparator!: (T, T) ->[Ordering](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-ordering) \- 用户传入的比较函数，如，comparator: (t1: T, t2: T) -> [Ordering](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-ordering)，如果 comparator 的返回值为 [Ordering](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-ordering).GT，排序后 t1 在 t2 后；如果 comparator 的返回值为 [Ordering](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-ordering).LT，排序后 t1 在 t2 前；如果 comparator 的返回值为 [Ordering](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-ordering).EQ，且为稳定排序那么 t1 与 t2 的位置较排序前保持不变； 如果 comparator 的返回值为 [Ordering](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-ordering).EQ，且为不稳定排序，那么 t1，t2 顺序不确定。



示例：
    
    
    import std.sort.*
    
    main() {
        let arr = [3, 1, 4, 1, 5]
        println("排序前: ${arr}")
    
        // 使用稳定排序：按升序排序
        arr.sortBy(stable: true, comparator: {
            a, b => if (a < b) {
                return Ordering.LT
            } else if (a > b) {
                return Ordering.GT
            } else {
                return Ordering.EQ
            }
        })
    
        println("稳定排序后: ${arr}")
    
        return 0
    }

运行结果：
    
    
    排序前: [3, 1, 4, 1, 5]
    稳定排序后: [1, 1, 3, 4, 5]

#### interface SortExtension (deprecated)
    
    
    public interface SortExtension {
        func sort(): Unit
        func sort(stable!: Bool): Unit
        func sortDescending(): Unit
        func sortDescending(stable!: Bool): Unit
    }

功能：此接口作为排序相关的辅助接口。

#### [h2]func sort() (deprecated)
    
    
    func sort(): Unit

功能：实现对应类型的排序。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fb/v3/4gLdzlInSMyBgNg5E74sqA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111717Z&HW-CC-Expire=86400&HW-CC-Sign=5ED8051E8999D3A3E22740DA78B7093E80FA91AD0C01548D1D0902AFC3A4247D)

未来版本即将废弃。

#### [h2]func sort(Bool) (deprecated)
    
    
    func sort(stable!: Bool): Unit

功能：依据传入的参数，实现对应类型的稳定或非稳定排序。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7f/v3/UogLYhHEQ_6jo_PBfqoY6Q/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111717Z&HW-CC-Expire=86400&HW-CC-Sign=A7A7D66AE19A48B2177FB6F1BD2026194EE50BEB762F71C97CC016D981B7824E)

未来版本即将废弃。

参数：

  * stable!: [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 是否使用稳定排序。



#### [h2]func sortDescending() (deprecated)
    
    
    func sortDescending(): Unit

功能：实现对应类型的降序方式排序。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/bf/v3/PBqVzEGyRT68s4UZSIjlnw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111717Z&HW-CC-Expire=86400&HW-CC-Sign=E6820739ADAAB8DD7319CD629151A9901E630996BC0F965F214D9058F89852AA)

未来版本即将废弃。

#### [h2]func sortDescending(Bool) (deprecated)
    
    
    func sortDescending(stable!: Bool): Unit

功能：依据传入的参数，实现对应类型的稳定或非稳定降序排序。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c0/v3/IAS4V-StSXqEJnIDe-sb1Q/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111717Z&HW-CC-Expire=86400&HW-CC-Sign=2E6EECC8D00D95F8DEF19844777D74C71202946FDD594D4730AC6F1FA4F05E39)

未来版本即将废弃。

参数：

  * stable!: [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 是否使用稳定排序。



#### [h2]extend<T> Array<T> <: SortExtension where T <: Comparable<T> (deprecated)
    
    
    extend<T> Array<T> <: SortExtension where T <: Comparable<T>

功能：此扩展用于实现 [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt) 的 sort/sortDescending 函数。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9a/v3/BUfU38OLSsyY_7_Pmhhp7A/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111717Z&HW-CC-Expire=86400&HW-CC-Sign=399B91682AE41E4D7C354F24AB70FBF3E56BBE406002D93214447C9CA4C55BB7)

未来版本即将废弃。

父类型：

  * [SortExtension](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sort_package_interfaces#interface-sortextension-deprecated)



**func sort()(deprecated)**
    
    
    public func sort(): Unit

功能：以升序的方式非稳定排序 [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9b/v3/LfAHNoUfQpeT8R0GNtXkaQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111717Z&HW-CC-Expire=86400&HW-CC-Sign=5699CA5B89876FA384A5FAFF50B4C7C9AD6488B5D7F1776A299B8327082CBF84)

未来版本即将废弃，使用 [sort](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sort_package_funcs#func-sorttarrayt-bool-bool-where-t--comparablet) 替代。

示例：
    
    
    import std.sort.*
    
    main() {
        let arr = [3, 1, 4, 1, 5]
        println("排序前: ${arr}")
    
        // 升序排序
        arr.sort()
    
        println("升序排序后: ${arr}")
    
        return 0
    }

运行结果：
    
    
    排序前: [3, 1, 4, 1, 5]
    升序排序后: [1, 1, 3, 4, 5]

**func sort(Bool)(deprecated)**
    
    
    public func sort(stable!: Bool): Unit

功能：以升序的方式排序 [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/61/v3/HnKOwc6wSQSENhjveczNEg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111717Z&HW-CC-Expire=86400&HW-CC-Sign=28897A520A83D8CE9A135F213AA7C6068DDF1087F511032998B4E96E87E91AAF)

未来版本即将废弃，使用 [sort](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sort_package_funcs#func-sorttarrayt-bool-bool-where-t--comparablet) 替代。

参数：

  * stable!: [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 是否使用稳定排序。



示例：
    
    
    import std.sort.*
    
    main() {
        let arr = [3, 1, 4, 1, 5]
        println("排序前: ${arr}")
    
        // 使用稳定排序进行升序排序
        arr.sort(stable: true)
    
        println("稳定升序排序后: ${arr}")
    
        return 0
    }

运行结果：
    
    
    排序前: [3, 1, 4, 1, 5]
    稳定升序排序后: [1, 1, 3, 4, 5]

**func sortDescending()(deprecated)**
    
    
    public func sortDescending(): Unit

功能：以降序的方式排序 [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/0/v3/6RmU9e-VTZiEctox7WLCcw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111717Z&HW-CC-Expire=86400&HW-CC-Sign=20CCF87DA1FD6BC08EBD1A662C84DFC2B233B8B7B270B6A502A3346657A8DE73)

未来版本即将废弃，使用 [sort](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sort_package_funcs#func-sorttarrayt-bool-bool-where-t--comparablet) 替代。

示例：
    
    
    import std.sort.*
    
    main() {
        let arr = [3, 1, 4, 1, 5]
        println("排序前: ${arr}")
    
        // 降序排序
        arr.sortDescending()
    
        println("降序排序后: ${arr}")
    
        return 0
    }

运行结果：
    
    
    排序前: [3, 1, 4, 1, 5]
    降序排序后: [5, 4, 3, 1, 1]

**func sortDescending(Bool)(deprecated)**
    
    
    public func sortDescending(stable!: Bool): Unit

功能：以降序的方式排序 [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/97/v3/Rzc9SRt8RB--cDFbYVDRIg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111717Z&HW-CC-Expire=86400&HW-CC-Sign=2691EB0F5C37C85D27F0EF547E58DEDF5AA601B2015A52160E1A1C1BED47B223)

未来版本即将废弃，使用 [sort](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sort_package_funcs#func-sorttarrayt-bool-bool-where-t--comparablet) 替代。

参数：

  * stable!: [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 是否使用稳定排序。



示例：
    
    
    import std.sort.*
    
    main() {
        let arr = [3, 1, 4, 1, 5]
        println("排序前: ${arr}")
    
        // 使用稳定排序进行降序排序
        arr.sortDescending(stable: true)
    
        println("稳定降序排序后: ${arr}")
    
        return 0
    }

运行结果：
    
    
    排序前: [3, 1, 4, 1, 5]
    稳定降序排序后: [5, 4, 3, 1, 1]
