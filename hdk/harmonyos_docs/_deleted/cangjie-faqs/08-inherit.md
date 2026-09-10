---
name: cangjie-faqs/08-inherit
title: 仓颉语言支持多继承吗
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/08-inherit
nodePath: FAQ / 语法 / 仓颉语言支持多继承吗
---

# 仓颉语言支持多继承吗

仓颉语言支持interface、class、struct、enum自定义类型，下面进行分类讨论：

#### 接口interface

**接口支持多继承** 。与此同时，接口继承的时候可以添加新的接口成员。
    
    
    interface Addable {
        func add(other: Int64): Int64
    }
    
    interface Subractable {
        func sub(other: Int64): Int64
    }
    
    interface Calculable <: Addable & Subractable {
        func mul(other: Int64): Int64
        func div(other: Int64): Int64
    }

#### 类class

**类仅支持单继承** 。
    
    
    open class D {
        let d: Int64 = 10
    }
    
    open class E {
        let e: Int64 = 20
    }
    
    // open class F <: D & E {} // error: only one super class may appear in supertype list of class 'F'

#### 结构体struct

结构体不支持继承。

#### 枚举enum

枚举不支持继承。
