---
name: cangjie-faqs/09-type-judgment
title: 仓颉语言如何判断对象的类型
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/09-type-judgment
nodePath: FAQ / 语法 / 仓颉语言如何判断对象的类型
---

# 仓颉语言如何判断对象的类型

仓颉语言支持使用is操作符来判断某个表达式的类型是否是指定的类型（或其子类型）。具体而言，对于表达式e is T（e可以是任意表达式，T可以是任何类型），当e的运行时类型是T或T的子类型时，e is T的值为true，否则e is T的值为false。

详情请参见[类型转换](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-typecast)。
