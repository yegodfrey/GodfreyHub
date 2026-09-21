---
name: document/cn/hiai-References/cannkit-automappingsubgraphioindexfuncregister-0000002123236162
title: AutoMappingSubgraphIOIndexFuncRegister
uri: https://developer.huawei.com/consumer/cn/doc/hiai-References/cannkit-automappingsubgraphioindexfuncregister-0000002123236162
---

# AutoMappingSubgraphIOIndexFuncRegister

## 函数功能

FrameworkRegistry类的封装，通过类的构造函数调用FrameworkRegistry类的AddAutoMappingSubgraphIOIndexFunc函数完成映射函数的注册。

## 函数原型

```cpp
AutoMappingSubgraphIOIndexFuncRegister(domi::FrameworkType framework, AutoMappingSubgraphIOIndexFunc fun)
```

## 参数说明

|参数|输入/输出|说明|
|:--------|:----|:-----------------------------------------------------------------------------------------------------------------------------------------------------------|
|framework|输入|网络类型，FrameworkType类型定义请参考[FrameworkType](https://developer.huawei.com/consumer/cn/doc/hiai-References/cannkit-frameworktype-0000002158596317)。|
|fun|输入|自动映射输入输出函数，函数类型详见[AutoMappingSubgraphIndex](https://developer.huawei.com/consumer/cn/doc/hiai-References/cannkit-automappingsubgraphindex-0000002158477973)。|

## 返回值

无

## 异常处理

无

## 约束说明

无

