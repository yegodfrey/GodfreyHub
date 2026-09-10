---
name: cj-docs/zh/1.1.3/libs/std/overflow/overflow_samples/option
title: 返回 Option 策略的示例
uri: https://cj-docs.gitcode.com/zh/1.1.3/libs/std/overflow/overflow_samples/option.html
category: libs
---

# 返回 `Option` 策略的示例

下面是返回 `Option` 策略的示例，示例中尝试运算 Int64.Max 的平方，发生溢出，返回 None。

```
import std.overflow.*
import std.math.*

main() {
    let a: Int64 = Int64.Max
    println(a.checkedPow(UInt64(2)))
}
```

运行结果：

```
None
```