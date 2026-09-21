---
name: document/cn/hiai-References/cannkit-setmarks-0000002158477765
title: SetMarks
uri: https://developer.huawei.com/consumer/cn/doc/hiai-References/cannkit-setmarks-0000002158477765
---

# SetMarks

## 函数功能

在资源类算子推理的上下文中，设置成对资源算子的标记。

## 函数原型

> 注意
>
> 数据类型为string的接口后续版本会废弃，建议使用数据类型为非string的接口。

```cpp
void SetMarks(const std::vector<std::string> &marks)
void SetMarks(const std::vector<AscendString> &marks)
```

## 参数说明

|参数名|输入/输出|描述|
|:----|:----|:--------|
|marks|输入|资源类算子的标记。|

## 返回值

无

## 异常处理

无

## 约束说明

无

