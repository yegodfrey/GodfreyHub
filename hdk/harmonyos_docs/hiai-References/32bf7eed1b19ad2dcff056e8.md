---
name: document/cn/hiai-References/createndtensorbuffer-0000001092056038
title: CreateNDTensorBuffer
uri: https://developer.huawei.com/consumer/cn/doc/hiai-References/createndtensorbuffer-0000001092056038
---

# CreateNDTensorBuffer

> 说明
>
> 此接口从DDK 5.0.1.0版本起废弃，请使用模型管家V1接口[Init(const TensorDimension* dim, HIAI_DataType pdataType)](https://developer.huawei.com/consumer/cn/doc/hiai-References/init-0000001051490692#section69201456112113)替代。

## CreateNDTensorBuffer(const NDTensorDesc& tensorDesc)

### 接口定义

```screen
HIAI_TENSOR_API_EXPORT std::shared_ptr<INDTensorBuffer> CreateNDTensorBuffer(const NDTensorDesc& tensorDesc);
```

### 功能介绍

根据Tensor描述，创建TensorBuffer。

### 参数

|名称|类型|描述|
|:---------|:----------------------------------------------------------------------------------------------------------------|:--------|
|tensorDesc|const [NDTensorDesc](https://developer.huawei.com/consumer/cn/doc/hiai-References/ndtensordesc-0000001092063032)&|Tensor描述。|

### 返回

|类型|描述|
|:-------------------------------------------------------------------------------------------------------------------------------------|:------------------|
|std::shared_ptr<[INDTensorBuffer](https://developer.huawei.com/consumer/cn/doc/hiai-References/createndtensorbuffer-0000001092056038)>|INDTensorBuffer的指针。|

## CreateNDTensorBuffer(const NDTensorDesc& tensorDesc, void* data, size_t dataSize)

### 接口定义

```screen
std::shared_ptr<INDTensorBuffer> CreateNDTensorBuffer(const NDTensorDesc& tensorDesc, void* data, size_t dataSize);
```

### 功能介绍

根据Tensor描述，创建TensorBuffer，同时写入tensor数据和大小。

### 参数

|名称|类型|描述|
|:---------|:----------------------------------------------------------------------------------------------------------------|:----------|
|tensorDesc|const [NDTensorDesc](https://developer.huawei.com/consumer/cn/doc/hiai-References/ndtensordesc-0000001092063032)&|Tensor描述。|
|data|void*|Tensor数据地址。|
|dataSize|size_t|Tensor数据大小。|

### 返回

|类型|描述|
|:-------------------------------------------------------------------------------------------------------------------------------------|:------------------|
|std::shared_ptr<[INDTensorBuffer](https://developer.huawei.com/consumer/cn/doc/hiai-References/createndtensorbuffer-0000001092056038)>|INDTensorBuffer的指针。|

## CreateNDTensorBuffer(const NDTensorDesc& tensorDesc, const NativeHandle& handle)

### 接口定义

```screen
std::shared_ptr<INDTensorBuffer> CreateNDTensorBuffer(const NDTensorDesc& tensorDesc, const NativeHandle& handle);
```

### 功能介绍

根据Tensor描述和NativeHandle，创建TensorBuffer。

### 参数

|名称|类型|描述|
|:---------|:----------------------------------------------------------------------------------------------------------------|:----------------------------------------|
|tensorDesc|const [NDTensorDesc](https://developer.huawei.com/consumer/cn/doc/hiai-References/ndtensordesc-0000001092063032)&|Tensor描述。|
|handle|const [NativeHandle](https://developer.huawei.com/consumer/cn/doc/hiai-References/nativehandle-0000001139236033)&|输入NativeHandle的结构信息，NativeHandle只支持ION内存。|

### 返回

|类型|描述|
|:-------------------------------------------------------------------------------------------------------------------------------------|:------------------|
|std::shared_ptr<[INDTensorBuffer](https://developer.huawei.com/consumer/cn/doc/hiai-References/createndtensorbuffer-0000001092056038)>|INDTensorBuffer的指针。|

