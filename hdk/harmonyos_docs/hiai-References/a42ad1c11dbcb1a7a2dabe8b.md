---
name: document/cn/hiai-References/tensordesc-operator-0000001052569445
title: operator=
uri: https://developer.huawei.com/consumer/cn/doc/hiai-References/tensordesc-operator-0000001052569445
---

# operator=

> 注意
>
> TensorDesc& operator=(TensorDesc&& other);该接口已废弃。

## 接口定义

```screen
TensorDesc& operator=(const TensorDesc& desc);
TensorDesc& operator=(TensorDesc&& other);
```

## 功能介绍

重载"="赋值操作符。

## 参数

|名称|输入/输出|类型|描述|
|:----|:----|:----------------|:--------------------|
|desc|输入|const TensorDesc&|不可更改的TensorDesc对象的引用。|
|other|输入|TensorDesc&&|TensorDesc对象的右值引用。|

## 返回

|类型|描述|
|:----------|:---------------|
|TensorDesc&|TensorDesc对象的引用。|

