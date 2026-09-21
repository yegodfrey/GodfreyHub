---
name: cangjie-references/cj-sort_package_overview
title: std.sort
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sort_package_overview
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.sort
---

# std.sort

#### 功能介绍

sort 包提供数组类型的排序函数。

根据排序方式，本包提供了稳定排序和不稳定排序两套实现。稳定排序是指，相等元素的前后顺序在排序前后保持不变。反之，不稳定排序是指，不保证相等元素的前后顺序在排序前后保持一致。

本包提供了一组带泛型的排序函数，可用来对元素为 T 类型的数组进行排序。排序必然要求元素是可以比较的，因此，这组函数进一步分为两类：1、要求 T 实现 Comparable<T> 接口，2、将 T 相关的比较函数作为参数传入函数。

此外，本包提供辅助接口 SortByExtension（未来版本即将废弃） 和 SortExtension（未来版本即将废弃），可用来为其他类型实现与排序相关的函数。

#### API 列表

#### [h2]函数

函数名 | 功能  
---|---  
[sort<T>(Array<T>, Bool, Bool) where T <: Comparable<T>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sort_package_funcs#func-sorttarrayt-bool-bool-where-t--comparablet) | 对数组进行排序。可根据入参指定是否要进行稳定排序，是升序还是降序。  
[sort<T>(Array<T>, (T, T) -> Ordering, Bool, Bool)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sort_package_funcs#func-sorttarrayt-t-t---ordering-bool-bool) | 对数组按照比较函数进行排序。可根据入参指定是否要进行稳定排序，是升序还是降序。  
[sort<T>(Array<T>, (T, T) -> Bool, Bool, Bool)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sort_package_funcs#func-sorttarrayt-t-t---bool-bool-bool) | 对数组按照比较函数进行排序。可根据入参指定是否要进行稳定排序，是升序还是降序。  
[sort<T, K>(Array<T>, (T) -> K, Bool, Bool) where K <: Comparable<K>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sort_package_funcs#func-sortt-karrayt-t---k-bool-bool-where-k--comparablek) | 对数组按照指定的键（键与键之间可比较）进行排序。可根据入参指定是否要进行稳定排序，是升序还是降序。  
[sort<T>(ArrayList<T>, Bool, Bool) where T <: Comparable<T>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sort_package_funcs#func-sorttarraylistt-bool-bool-where-t--comparablet) | 对 ArrayList 进行排序。可根据入参指定是否要进行稳定排序，是升序还是降序。  
[sort<T>(ArrayList<T>, (T, T) -> Ordering, Bool, Bool)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sort_package_funcs#func-sorttarraylistt-t-t---ordering-bool-bool) | 对 ArrayList 按照比较函数进行排序。可根据入参指定是否要进行稳定排序，是升序还是降序。  
[sort<T>(ArrayList<T>, (T, T) -> Bool, Bool, Bool)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sort_package_funcs#func-sorttarraylistt-t-t---bool-bool-bool) | 对 ArrayList 按照比较函数进行排序。可根据入参指定是否要进行稳定排序，是升序还是降序。  
[sort<T, K>(ArrayList<T>, (T) -> K, Bool, Bool) where K <: Comparable<K>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sort_package_funcs#func-sortt-karraylistt-t---k-bool-bool-where-k--comparablek) | 对 ArrayList 按照指定的键（键与键之间可比较）进行排序。可根据入参指定是否要进行稳定排序，是升序还是降序。  
[sort<T>(List<T>, Bool, Bool) where T <: Comparable<T>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sort_package_funcs#func-sorttlistt-bool-bool-where-t--comparablet) | 对 List 进行排序。可根据入参指定是否要进行稳定排序，是升序还是降序。  
[sort<T>(List<T>, (T, T) -> Ordering, Bool, Bool)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sort_package_funcs#func-sorttlistt-t-t---ordering-bool-bool) | 对 List 按照比较函数进行排序。可根据入参指定是否要进行稳定排序，是升序还是降序。  
[sort<T>(List<T>, (T, T) -> Bool, Bool, Bool)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sort_package_funcs#func-sorttlistt-t-t---bool-bool-bool) | 对 List 按照比较函数进行排序。可根据入参指定是否要进行稳定排序，是升序还是降序。  
[sort<T, K>(List<T>, (T) -> K, Bool, Bool) where K <: Comparable<K>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sort_package_funcs#func-sortt-klistt-t---k-bool-bool-where-k--comparablek) | 对 List 按照指定的键（键与键之间可比较）进行排序。可根据入参指定是否要进行稳定排序，是升序还是降序。  
[stableSort<T>(Array<T>) where T <: Comparable<T> (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sort_package_funcs#func-stablesorttarrayt-where-t--comparablet-deprecated) | 对数组进行稳定升序排序。  
[stableSort<T>(Array<T>, (T, T) -> Ordering) (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sort_package_funcs#func-stablesorttarrayt-t-t---ordering-deprecated) | 对数组进行稳定升序排序。  
[unstableSort<T>(Array<T>) where T <: Comparable<T> (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sort_package_funcs#func-unstablesorttarrayt-where-t--comparablet-deprecated) | 对数组进行不稳定升序排序。  
[unstableSort<T>(Array<T>, (T, T) -> Ordering) (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sort_package_funcs#func-unstablesorttarrayt-t-t---ordering-deprecated) | 对数组进行不稳定升序排序。  
  
#### [h2]接口

接口名 | 功能  
---|---  
[SortByExtension (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sort_package_interfaces#interface-sortbyextensiont-deprecated) | 此接口作为排序相关的辅助接口，内部为空。  
[SortExtension (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sort_package_interfaces#interface-sortextension-deprecated) | 此接口作为排序相关的辅助接口，内部为空。  
  
  * **[函数](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sort_package_funcs)**  

  * **[接口](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sort_package_interfaces)**  

  * **[示例教程](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sort-samples)**  



