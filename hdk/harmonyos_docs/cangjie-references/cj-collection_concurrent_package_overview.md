---
name: cangjie-references/cj-collection_concurrent_package_overview
title: std.collection.concurrent
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_concurrent_package_overview
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.collection.concurrent
---

# std.collection.concurrent

#### 功能介绍

collection.concurrent 包提供了并发安全的集合类型实现。

本包实现了以下几种并发安全的集合类型：

  * [ArrayBlockingQueue](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_concurrent_class#class-arrayblockingqueuee)：以数组的形式实现的具有固定大小的有界队列。

  * [ConcurrentHashMap](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_concurrent_class#class-concurrenthashmapk-v-where-k--hashable--equatablek)：线程安全的哈希表实现，支持高并发的读写操作。

  * [ConcurrentLinkedQueue](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_concurrent_class#class-concurrentlinkedqueuee)：一种线程安全的队列数据结构，特点是在添加元素时，如果当前的尾部 Block 已满，那么会创建一个新的 Block，而不是阻塞等待。这样可以保证在多线程环境下，队列的操作不会因为阻塞而导致线程的阻塞，从而提高了程序的性能。

  * [LinkedBlockingQueue](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_concurrent_class#class-linkedblockingqueuee)：一种阻塞队列，它支持在队列为空时阻塞获取元素的操作，以及在队列已满时阻塞添加元素的操作。




#### API 列表

#### [h2]类型别名

类型别名 | 功能  
---|---  
[BlockingQueue<E> (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_concurrent_types#type-blockingqueuee-deprecated) | LinkedBlockingQueue 的别名。  
[NonBlockingQueue<E> (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_concurrent_types#type-nonblockingqueuee-deprecated) | ConcurrentLinkedQueue 的别名。  
  
#### [h2]接口

接口名 | 功能  
---|---  
[ConcurrentMap<K, V>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_concurrent_interface#interface-concurrentmapk-v) | 保证线程安全和操作原子性的 Map 接口定义。  
  
#### [h2]类

类名 | 功能  
---|---  
[ArrayBlockingQueue<E>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_concurrent_class#class-arrayblockingqueuee) | 基于数组实现的 Blocking Queue 数据结构及相关操作函数。  
[ConcurrentHashMapIterator<K, V> where K <: Hashable & Equatable<K>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_concurrent_class#class-concurrenthashmapiteratork-v-where-k--hashable--equatablek) | 此类主要实现 Concurrent HashMap 的迭代器功能。  
[ConcurrentHashMap<K, V> where K <: Hashable & Equatable<K>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_concurrent_class#class-concurrenthashmapk-v-where-k--hashable--equatablek) | 此类用于实现并发场景下线程安全的哈希表 ConcurrentHashMap 数据结构及相关操作函数。  
[ConcurrentLinkedQueue<E>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_concurrent_class#class-concurrentlinkedqueuee) | 提供一个线程安全的队列，可以在多线程环境下安全地进行元素的添加和删除操作。  
[LinkedBlockingQueue<E>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_concurrent_class#class-linkedblockingqueuee) | 实现是带阻塞机制并支持用户指定容量上界的并发队列。  
  
  * **[类型别名](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_concurrent_types)**  

  * **[接口](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_concurrent_interface)**  

  * **[类](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_concurrent_class)**  

  * **[示例教程](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection-concurrent-samples)**  



