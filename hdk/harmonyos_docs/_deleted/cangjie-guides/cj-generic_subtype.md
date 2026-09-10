---
name: cangjie-guides/cj-generic_subtype
title: 泛型类型的子类型关系
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-generic_subtype
nodePath: 基础入门 / 学习仓颉语言 / 泛型 / 泛型类型的子类型关系
---

# 泛型类型的子类型关系

实例化后的泛型类型间也有子类型关系。例如：
    
    
    interface I<X, Y> {}
    
    class C<Z> <: I<Z, Z> {}

根据 class C<Z> <: I<Z, Z> { }，便知 C<Bool> <: I<Bool, Bool> 以及 C<D> <: I<D, D> 等。这可以解读为“对于所有的不含类型变元的 Z 类型，都有 C<Z> <: I<Z, Z> 成立”。

但是对于下列代码：
    
    
    open class C {}
    
    class D <: C {}
    
    interface I<X> {}

I<D> <: I<C> 是不成立的（即使 D <: C 成立），这是因为在仓颉语言中，用户定义的类型构造器在其类型参数处是**不型变** 的。

型变的具体定义为：如果 A 和 B 是（实例化后的）类型，T 是类型构造器，设有一个类型参数 X（例如 interface T<X>），那么

  * 如果 T(A) <: T(B) 当且仅当 A = B，则 T 是**不型变** 的。
  * 如果 T(A) <: T(B) 当且仅当 A <: B ，则 T 在 X 处是**协变** 的。
  * 如果 T(A) <: T(B) 当且仅当 B <: A ，则 T 在 X 处是**逆变** 的。



因为现阶段的仓颉中，所有用户自定义的泛型类型在其所有的类型变元处都是不变的，所以给定 interface I<X> 和类型 A、B，只有 A = B，才能得到 I<A> <: I<B>；反过来，如果知道了 I<A> <: I<B>，也可推出 A = B（内建类型除外：内建的元组类型对其每个元素类型来说，都是协变的；内建的函数类型在其入参类型处是逆变的，在其返回类型处是协变的。）

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/59/v3/vgdADmKhRvqx-ORnD6-ySQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111551Z&HW-CC-Expire=86400&HW-CC-Sign=B8FDD3650CCB545E08BE00859F92649943DF189DF73F16DCA8BF5C2D248DE059)

class 以外的类型实现接口，该类型和该接口之间的子类型关系不能作为协变和逆变的依据。

不型变限制了一些语言的表达能力，但也避免了一些安全问题，例如“协变数组运行时抛异常”的问题。
