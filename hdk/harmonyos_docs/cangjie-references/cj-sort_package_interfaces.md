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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/51/v3/W-RPBZkAQBaLuL9Ugi4PoQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090211Z&HW-CC-Expire=86400&HW-CC-Sign=AACB472A895794E7A432C028A2F461196BED5EE5D5E459F3A9CB11AA60DFFECB)

未来版本即将废弃。

#### [h2]func sortBy((T, T) -> Ordering) (deprecated)
    
    
    func sortBy(comparator!: (T, T) -> Ordering): Unit

功能：通过传入的比较函数，根据其返回值 [Ordering](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-ordering) 类型的结果，可对 T 进行自定义排序。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d6/v3/dwWa5o-8RZKrIXyGdEclSQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090211Z&HW-CC-Expire=86400&HW-CC-Sign=61D5CBE23C3F63ED53D4A782CCC778C90BBE06566BC0CB5DA9405AA672BFF44D)

未来版本即将废弃。

参数：

  * comparator!: (T, T) ->[Ordering](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-ordering) \- 用户传入的比较函数。



#### [h2]func sortBy(Bool, (T, T) -> Ordering) (deprecated)
    
    
    func sortBy(stable!: Bool, comparator!: (T, T) -> Ordering): Unit

功能：通过传入的比较函数，根据其返回值 [Ordering](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-ordering) 类型的结果和稳定排序标志位，可对 T 进行自定义排序。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/22/v3/QfoDy0tWQS2jDKcs510sSA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090211Z&HW-CC-Expire=86400&HW-CC-Sign=D0CC47E37F1AE30848DA3CD17D763BE5056A03E12F0D97EAFD2327524FB85848)

未来版本即将废弃。

参数：

  * stable!: [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 是否使用稳定排序。
  * comparator!: (T, T) ->[Ordering](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-ordering) \- 用户传入的比较函数。



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/11/v3/Dq1s0XZOQz2GH5c9QdNRJw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090211Z&HW-CC-Expire=86400&HW-CC-Sign=998613D64DB5DEB1049E47F245C7E4BDE5A92A2EEC19766E57E9DB46017CA92E)

未来版本即将废弃。

#### [h2]extend<T> Array<T> <: SortByExtension<T> (deprecated)
    
    
    extend<T> Array<T> <: SortByExtension<T>

功能：此扩展用于实现 [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt) 的 sortBy 函数。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c2/v3/VO8jipLnSLiZWd_RqYdypw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090211Z&HW-CC-Expire=86400&HW-CC-Sign=7E56239D921515E7AD54298C1C681BFD9F502E3A02B5A78DAB949DB26AEB098D)

未来版本即将废弃。

父类型：

  * [SortByExtension](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sort_package_interfaces#interface-sortbyextensiont-deprecated)



**func sortBy((T, T) - > Ordering) (deprecated)**
    
    
    public func sortBy(comparator!: (T, T) -> Ordering): Unit

功能：通过传入的比较函数，根据其返回值 [Ordering](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-ordering) 类型的结果，可对数组进行自定义排序。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ae/v3/mGN_mQdYTCC49brgN7hagQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090211Z&HW-CC-Expire=86400&HW-CC-Sign=2B99228D3BDC9CB9023AF32CC2E7AD41B4A1D27AF183486F51EC4C38D36E4F21)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fb/v3/_zWhxa8jRVKyz0oSkaLpYg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090211Z&HW-CC-Expire=86400&HW-CC-Sign=2A0AF7EB3E8657916E6D3F94EECEF08B32D9B455D6907FB5F79834429AF45E4E)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3d/v3/eGtIN-KRSoeg41COg5Q2-w/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090211Z&HW-CC-Expire=86400&HW-CC-Sign=92355284014A66A29F8EF1B378CE3D06E0BCC6E978618892C93273150E0B6EFF)

未来版本即将废弃。

#### [h2]func sort(Bool) (deprecated)
    
    
    func sort(stable!: Bool): Unit

功能：依据传入的参数，实现对应类型的稳定或非稳定排序。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c/v3/LEwUEnfbSj6WqlPV1SGCHA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090211Z&HW-CC-Expire=86400&HW-CC-Sign=8B8B7E663DCFCCAEEC7EDD266F773854B81E2BD1C5AA2B06F028C9A969041914)

未来版本即将废弃。

参数：

  * stable!: [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 是否使用稳定排序。



#### [h2]func sortDescending() (deprecated)
    
    
    func sortDescending(): Unit

功能：实现对应类型的降序方式排序。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/68/v3/K_VW_TmbSbi5bE34KTGLUQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090211Z&HW-CC-Expire=86400&HW-CC-Sign=B8E0A0DBF9D5D4C65CE2F74411417B4993818C68FDDF69BAA4542C0DCCA984F8)

未来版本即将废弃。

#### [h2]func sortDescending(Bool) (deprecated)
    
    
    func sortDescending(stable!: Bool): Unit

功能：依据传入的参数，实现对应类型的稳定或非稳定降序排序。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b6/v3/cYv40S2cSWWx9FTCZPHuGQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090211Z&HW-CC-Expire=86400&HW-CC-Sign=35863410A655161C87EE2DF1B314256C54032A5A34056761931B9BEA355E0ED3)

未来版本即将废弃。

参数：

  * stable!: [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 是否使用稳定排序。



#### [h2]extend<T> Array<T> <: SortExtension where T <: Comparable<T> (deprecated)
    
    
    extend<T> Array<T> <: SortExtension where T <: Comparable<T>

功能：此扩展用于实现 [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt) 的 sort/sortDescending 函数。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9e/v3/udtpP_9HS6O3WkYqhLGdfg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090211Z&HW-CC-Expire=86400&HW-CC-Sign=E37D2FBFD65F155DF0EA4192C1C2F64A20A30EAEF9C48875528831263CFC0806)

未来版本即将废弃。

父类型：

  * [SortExtension](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sort_package_interfaces#interface-sortextension-deprecated)



**func sort()(deprecated)**
    
    
    public func sort(): Unit

功能：以升序的方式非稳定排序 [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3b/v3/IR4h0gmeRbSN2ZKNQZFgBQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090211Z&HW-CC-Expire=86400&HW-CC-Sign=C6A7C07DB9267523CCD8E6B47B069D1556F7AA3039A59BF708EF81334EC033BC)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/38/v3/Yg7IPYqWS1K17xeX9nvQFg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090211Z&HW-CC-Expire=86400&HW-CC-Sign=B3BC434ED528E5D7A8CA7B7ADBDFF0843A954FD75F553DC821071615AF29A6C4)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/62/v3/iojt4cSQREWi0JAdSuTokQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090211Z&HW-CC-Expire=86400&HW-CC-Sign=1C90DAEA95BFAAF491AC6EDFEA362C75ECA15330E683FF4084E6B3CC43783435)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f7/v3/mgX0argQQpyHHM9LBPM-Aw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090211Z&HW-CC-Expire=86400&HW-CC-Sign=55A81A06B71CC5611A90F6638E73467EEFF2437BACBA3DBEFAADB678B0AAE430)

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
