---
name: cangjie-faqs/25-sort
title: 仓颉语言如何对集合进行排序
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/25-sort
nodePath: FAQ / 标准库 / 仓颉语言如何对集合进行排序
---

# 仓颉语言如何对集合进行排序

仓颉语言通过std.sort包提供排序功能，支持对Array、ArrayList等集合类型进行排序。

#### 基本排序

默认升序排序，要求元素类型实现Comparable接口：

调用示例：
    
    
    import std.sort.*
    import kit.PerformanceAnalysisKit.Hilog
    
    public func testSortBasic(): Unit {
        let arr = [3, 1, 5, 2, 4]
        sort(arr)
        Hilog.info(0, "Cangjie Test", "${arr}")
    
        sort(arr, descending: true)
        Hilog.info(0, "Cangjie Test", "${arr}")
    }

调用testSortBasic，日志输出结果：
    
    
    [1, 2, 3, 4, 5]
    [5, 4, 3, 2, 1]

#### 自定义比较器排序

使用by参数指定返回Ordering的比较器：
    
    
    import std.sort.*
    import kit.PerformanceAnalysisKit.Hilog
    
    class Student <: ToString {
        public let name: String
        public let age: Int64
    
        public init(name!: String, age!: Int64) {
            this.name = name
            this.age = age
        }
    
        public func toString(): String {
            "{name: ${name} age: ${age}}"
        }
    }
    
    public func testSortCustom(): Unit {
        let students = [Student(name: "A", age: 8), Student(name: "B", age: 7), Student(name: "C", age: 3)]
        sort(students, by: {
            l, r => l.age.compare(r.age)
        })
        for (s in students) {
            Hilog.info(0, "Cangjie Test", "${s}")
        }
    }

调用testSortCustom，日志输出结果：
    
    
    {name: C age: 3}
    {name: B age: 7}
    {name: A age: 8}

#### 按键排序

使用key参数指定键提取函数：
    
    
    import std.sort.*
    import kit.PerformanceAnalysisKit.Hilog
    
    class Student2 <: ToString {
        public let name: String
        public let age: Int64
    
        public init(name!: String, age!: Int64) {
            this.name = name
            this.age = age
        }
    
        public func toString(): String {
            "{name: ${name} age: ${age}}"
        }
    }
    
    public func testSortByKey(): Unit {
        let students = [Student2(name: "A", age: 8), Student2(name: "B", age: 7), Student2(name: "C", age: 3)]
        sort(students, key: {s => s.age})
        for (s in students) {
            Hilog.info(0, "Cangjie Test", "${s}")
        }
    }

调用testSortByKey，日志输出结果：
    
    
    {name: C age: 3}
    {name: B age: 7}
    {name: A age: 8}

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d6/v3/Ay2Pb1VZSRWBv45dk4ELAg/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T085437Z&HW-CC-Expire=86400&HW-CC-Sign=98FAE29AF261996AE4F739664AD411F12458D4CA5512A3FD6ED2BD7F5942C768)

  1. sort(arr)默认不稳定、升序，需要稳定排序须显式传stable: true。
  2. by参数接收返回Ordering的比较器，key参数接收键提取函数。
  3. descending: true可与任意排序方式组合使用。



更多排序的使用方法，详情请参见[std.sort](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sort_package_overview)。
