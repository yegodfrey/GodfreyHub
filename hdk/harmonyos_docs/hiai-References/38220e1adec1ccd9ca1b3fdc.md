---
name: document/cn/hiai-References/gettensordesc-0000001092344182
title: GetTensorDesc
uri: https://developer.huawei.com/consumer/cn/doc/hiai-References/gettensordesc-0000001092344182
---

# GetTensorDesc

> 说明
>
> 此接口从DDK 5.0.1.0版本起废弃，请使用模型管家V1接口[GetTensorDimension](https://developer.huawei.com/consumer/cn/doc/hiai-References/gettensordimen-0000001058725380)替代。

## 接口定义

```screen
virtual const NDTensorDesc& GetTensorDesc() const = 0;
```

## 功能介绍

获取Tensor描述。

## 返回

|类型|描述|
|:----------------------------------------------------------------------------------------------------------------|:--------|
|const [NDTensorDesc](https://developer.huawei.com/consumer/cn/doc/hiai-References/ndtensordesc-0000001092063032)&|Tensor描述。|

