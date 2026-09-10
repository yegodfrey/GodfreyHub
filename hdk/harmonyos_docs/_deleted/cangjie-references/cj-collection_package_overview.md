---
name: cangjie-references/cj-collection_package_overview
title: std.collection
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_overview
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.collection
---

# std.collection

#### 功能介绍

collection 包提供了常见数据结构的高效实现、相关抽象的接口的定义以及在集合类型中常用的函数功能。

本包实现了以下常用的数据结构：

  * [ArrayDeque](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_class#class-arraydequet)：基于数组实现的双端循环队列，支持在集合的两端进行元素的插入和删除操作。可以使用 addFirst() 和 addLast() 方法在头部和尾部插入元素，使用 removeFirst() 和 removeLast() 方法从集合的头部和尾部删除元素。

  * [ArrayList](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_class#class-arraylistt)：变长的连续数组，在需要存储不确定数量的数据，或者需要根据运行时的条件动态调整数组大小时使用 ArrayList。使用 ArrayList 可能会导致内存分配和释放的开销增加，因此需要谨慎使用。

  * [ArrayQueue](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_class#class-arrayqueuet)：基于数组实现的循环队列，只允许在尾部插入元素，在头部删除元素。

  * [ArrayStack](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_class#class-arraystackt)：基于数组实现的栈数据结构。特点是先进后出，只能在顶部进行数据的插入和删除。

  * [LinkedList](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_class#class-linkedlistt)：链表结构， LinkedList 的优点是它可以动态地添加或删除元素，而不需要移动其他元素。这使得它在需要频繁添加或删除元素的情况下非常有用。它还可以轻松地进行修改或删除操作，并且可以在列表中存储多个元素。 LinkedList 的缺点是它需要额外的内存来存储每个元素的引用，这可能会导致内存浪费。

  * [HashMap](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_class#class-hashmapk-v-where-k--hashable--equatablek)：哈希表，它存储键值对，并且可以根据键快速访问值。在需要使用映射关系并且需要快速查找时使用。

  * [HashSet](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_class#class-hashsett-where-t--hashable--equatablet)：基于哈希表实现的集合数据结构，它可以用于快速检索和删除元素，具有高效的插入、删除和查找操作。

  * [TreeMap](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_class#class-treemapk-v-where-k--comparablek)：基于红黑树实现的有序映射表。通常情况下，当需要将元素按照自然顺序或者自定义顺序进行排序时，可以使用 TreeMap。

  * [TreeSet](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_class#class-treesett-where-t--comparablet)：基于 TreeMap 实现的有序集合。能自动排序元素，可用于存储不重复且需排序的数据。




collection 包提供的集合类型都不支持并发安全，并发安全的集合请参见 [collection.concurrent 包](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_concurrent_package_overview)。

#### API 列表

#### [h2]函数

函数名 | 功能  
---|---  
[all<T>((T) -> Bool)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_function#func-alltt---bool) | 判断迭代器所有元素是否都满足条件。  
[any<T>((T) -> Bool)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_function#func-anytt---bool) | 判断迭代器是否存在任意一个满足条件的元素。  
[at<T>(Int64)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_function#func-attint64) | 获取迭代器指定位置的元素。  
[collectArrayList<T>(Iterable<T>)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_function#func-collectarraylisttiterablet) | 将一个迭代器转换成 [ArrayList](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_class#class-arraylistt) 类型。  
[collectArray<T>(Iterable<T>)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_function#func-collectarraytiterablet) | 将一个迭代器转换成 Array 类型。  
[collectHashMap<K, V>(Iterable<(K, V)>) where K <: Hashable & Equatable<K>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_function#func-collecthashmapk-viterablek-v-where-k--hashable--equatablek) | 将一个迭代器转换成 HashMap 类型。  
[collectHashSet<T>(Iterable<T>) where T <: Hashable & Equatable<T>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_function#func-collecthashsettiterablet-where-t--hashable--equatablet) | 将一个迭代器转换成 HashSet 类型。  
[collectString<T>(String) where T <: ToString](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_function#func-collectstringtstring-where-t--tostring) | 将一个对应元素实现了 ToString 接口的迭代器转换成 String 类型。  
[concat<T>(Iterable<T>)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_function#func-concattiterablet) | 串联两个迭代器。  
[contains<T>(T) where T <: Equatable<T>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_function#func-containstt-where-t--equatablet) | 遍历所有元素，判断是否包含指定元素并返回该元素。  
[count<T>(Iterable<T>)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_function#func-counttiterablet) | 统计迭代器包含元素数量。  
[enumerate<T>(Iterable<T>)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_function#func-enumeratetiterablet) | 用于获取带索引的迭代器。  
[filter<T>((T) -> Bool)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_function#func-filtertt---bool) | 筛选出满足条件的元素。  
[filterMap<T, R>((T) -> ?R)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_function#func-filtermapt-rt---r) | 同时进行筛选操作和映射操作，返回一个新的迭代器。  
[first<T>(Iterable<T>)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_function#func-firsttiterablet) | 获取头部元素。  
[flatMap<T, R>( (T) -> Iterable<R>)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_function#func-flatmapt-rt---iterabler) | 创建一个带 flatten 功能的映射。  
[flatten<T, R>(Iterable<T>) where T <: Iterable<R>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_function#func-flattent-riterablet-where-t--iterabler) | 将嵌套的迭代器展开一层。  
[fold<T, R>(R, (R, T) -> R)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_function#func-foldt-rr-r-t---r) | 使用指定初始值，从左向右计算。  
[forEach<T>((T) -> Unit)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_function#func-foreachtt---unit) | 遍历所有元素，指定给定的操作。  
[inspect<T>((T) -> Unit)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_function#func-inspecttt---unit) | 迭代器每次调用 next() 对当前元素执行额外操作（不会消耗迭代器中元素）。  
[isEmpty<T>(Iterable<T>)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_function#func-isemptytiterablet) | 判断迭代器是否为空。  
[last<T>(Iterable<T>)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_function#func-lasttiterablet) | 获取尾部元素。  
[map<T, R>((T) -> R)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_function#func-mapt-rt---r) | 创建一个映射。  
[max<T>(Iterable<T>) where T <: Comparable<T>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_function#func-maxtiterablet-where-t--comparablet) | 筛选最大的元素。  
[min<T>(Iterable<T>) where T <: Comparable<T>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_function#func-mintiterablet-where-t--comparablet) | 筛选最小的元素。  
[none<T>((T) -> Bool)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_function#func-nonett---bool) | 判断迭代器是否都不满足条件。  
[reduce<T>((T, T) -> T)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_function#func-reducett-t---t) | 使用第一个元素作为初始值，从左向右计算。  
[skip<T>(Int64)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_function#func-skiptint64) | 从迭代器跳过特定个数。  
[step<T>(Int64)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_function#func-steptint64) | 迭代器每次调用 next() 跳过特定个数。  
[take<T>(Int64)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_function#func-taketint64) | 从迭代器取出特定个数。  
[zip<T, R>(Iterable<R>)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_function#func-zipt-riterabler) | 将两个迭代器合并成一个（长度取决于短的那个迭代器）。  
  
#### [h2]接口

接口名 | 功能  
---|---  
[Deque<T>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_interface#interface-dequet) | 双端队列是一种具有队列和栈特性的数据结构，它允许在两端进行插入和删除操作。  
[EquatableCollection<T>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_interface#interface-equatablecollectiont) | 定义了可以进行比较的集合类型。  
[List<T>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_interface#interface-listt) | 提供了对索引友好的列表操作。  
[Map<K, V>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_interface#interface-mapk-v) | 提供了一种将键映射到值的方式。  
[MapEntryView<K, V>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_interface#interface-mapentryviewk-v) | 键值对集合中的某个 Key 的视图  
[OrderedMap<K, V>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_interface#interface-orderedmapk-v) | 有序映射  
[OrderedSet<T>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_interface#interface-orderedsett) | 有序集合  
[Queue<T>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_interface#interface-queuet) | 队列数据结构，它遵循先进先出（First In First Out, FIFO）原则。  
[ReadOnlyList<T>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_interface#interface-readonlylistt) | 定义了对列表的只读操作。  
[ReadOnlyMap<K, V>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_interface#interface-readonlymapk-v) | 只读映射  
[ReadOnlySet<K, V>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_interface#interface-readonlysett) | 只读集合  
[Set<T>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_interface#interface-sett) | 不包含重复元素的集合。  
[Stack<T>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_interface#interface-stackt) | 栈数据结构接口，具有后进先出（Last In First Out，LIFO）的特点。  
  
#### [h2]类

类名 | 功能  
---|---  
[ArrayDeque<T>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_class#class-arraydequet) | 根据可调整大小的循环数组实现的双端队列。  
[ArrayList<T>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_class#class-arraylistt) | 提供可变长度的数组的功能。  
[ArrayQueue<T>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_class#class-arrayqueuet) | 基于数组实现的循环队列数据结构。  
[ArrayStack<T>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_class#class-arraystackt) | 基于数组实现的栈[Stack](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_interface#interface-stackt) 数据结构。  
[HashMapIterator<K, V> where K <: Hashable & Equatable<K>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_class#class-hashmapiteratork-v-where-k--hashable--equatablek) | 此类主要实现 HashMap 的迭代器功能。  
[HashMap<K, V> where K <: Hashable & Equatable<K>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_class#class-hashmapk-v-where-k--hashable--equatablek) | [Map<K, V>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_interface#interface-mapk-v) 接口的哈希表实现。  
[HashSet<T> where T <: Hashable & Equatable<T>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_class#class-hashsett-where-t--hashable--equatablet) | 基于 [HashMap<K, V>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_class#class-hashmapk-v-where-k--hashable--equatablek) 实现的 [Set<T>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_interface#interface-sett) 接口的实例。  
[LinkedListNode<T>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_class#class-linkedlistnodet) | [LinkedList<T>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_class#class-linkedlistt) 上的节点。  
[LinkedList<T>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_class#class-linkedlistt) | 实现双向链表的数据结构。  
[TreeMap<K, V> where K <: Comparable<K>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_class#class-treemapk-v-where-k--comparablek) | 基于多路平衡树实现的 [Map<K, V>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_interface#interface-mapk-v) 接口实例。  
[TreeSet<T> where T <: Comparable<T>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_class#class-treesett-where-t--comparablet) | 基于 [TreeMap<K, V>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_class#class-treemapk-v-where-k--comparablek) 实现的 [Set<T>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_interface#interface-sett) 接口的实例。  
  
#### [h2]异常类

异常类名 | 功能  
---|---  
[ConcurrentModificationException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_exception#class-concurrentmodificationexception) | 并发修改异常类。  
  
  * **[函数](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_function)**  

  * **[接口](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_interface)**  

  * **[类](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_class)**  

  * **[异常类](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_exception)**  

  * **[示例教程](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection-samples)**  



