---
name: cangjie-faqs/23-hashmap
title: 仓颉语言如何使用HashMap
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/23-hashmap
nodePath: FAQ / 标准库 / 仓颉语言如何使用HashMap
---

# 仓颉语言如何使用HashMap

仓颉语言通过std.collection包提供HashMap类型，基于哈希表实现键值映射，要求键类型实现Hashable和Equatable接口。

#### 基本用法

调用示例：
    
    
    import std.collection.*
    import kit.PerformanceAnalysisKit.Hilog
    
    public func testHashMapBasic(): Unit {
        let map = HashMap<String, Int64>()
        map["Alice"] = 90
        map["Bob"] = 85
        map["Charlie"] = 95
    
        Hilog.info(0, "Cangjie Test", "Alice: ${map["Alice"]}")
        Hilog.info(0, "Cangjie Test", "contains Dave: ${map.contains("Dave")}")
    
        map.remove("Bob")
        Hilog.info(0, "Cangjie Test", "size after remove: ${map.size}")
    }

调用testHashMapBasic，日志输出结果：
    
    
    Alice: 90
    contains Dave: false
    size after remove: 2

#### 安全读取

推荐使用get方法安全读取，避免键不存在时抛异常：
    
    
    import std.collection.*
    import kit.PerformanceAnalysisKit.Hilog
    
    public func testHashMapSafeGet(): Unit {
        let map = HashMap<String, Int64>()
        map["Alice"] = 90
    
        match (map.get("Dave")) {
            case Some(score) => Hilog.info(0, "Cangjie Test", "Dave: ${score}")
            case None => Hilog.info(0, "Cangjie Test", "Dave not found")
        }
    }

调用testHashMapSafeGet，日志输出结果：
    
    
    Dave not found

#### 遍历
    
    
    import std.collection.*
    import kit.PerformanceAnalysisKit.Hilog
    
    public func testHashMapIterate(): Unit {
        let map = HashMap<String, Int64>()
        map["Alice"] = 90
        map["Bob"] = 85
    
        for ((name, score) in map) {
            Hilog.info(0, "Cangjie Test", "${name}=${score}")
        }
    }

调用testHashMapIterate，日志输出结果：
    
    
    Alice=90
    Bob=85

#### 常用操作

操作 | 方法 | 说明  
---|---|---  
添加/更新 | map.add(key, value)或map[key] = value | 添加键值对，add返回旧值  
读取 | map.get(key) | 返回?V，不存在返回None  
下标读取 | map[key] | 不存在时抛异常  
判断存在 | map.contains(key) | 返回Bool  
删除 | map.remove(key) | 返回旧值?V  
大小 | map.size | 返回元素数量  
  
更多集合类型的使用方法，详情请参见[std.collection](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_class#class-hashmapk-v-where-k--hashable--equatablek)。
