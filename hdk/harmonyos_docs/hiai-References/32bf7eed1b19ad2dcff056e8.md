---
name: document/cn/hiai-References/createndtensorbuffer-0000001092056038
title: CreateNDTensorBuffer
uri: https://developer.huawei.com/consumer/cn/doc/hiai-References/createndtensorbuffer-0000001092056038
---

# CreateNDTensorBuffer

![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260104150640.98398463005689839193569764875888:50001231000000:2800:4EF8F4DE40C2153BFABD4A251D48E33700EC0B2A25BD14F264143D1235B3F878.png)  
此接口从DDK 5.0.1.0版本起废弃，请使用模型管家V1接口[Init(const TensorDimension\* dim, HIAI_DataType pdataType)](https://developer.huawei.com/consumer/cn/doc/hiai-References/init-0000001051490692#section69201456112113)替代。  

#### CreateNDTensorBuffer(const NDTensorDesc\& tensorDesc)

#### 接口定义

```
HIAI_TENSOR_API_EXPORT std::shared_ptr<INDTensorBuffer> CreateNDTensorBuffer(const NDTensorDesc& tensorDesc);
```

#### 功能介绍

根据Tensor描述，创建TensorBuffer。  

#### 参数

|名称|类型|描述|
|:---------|:-----------------------------------------------------------------------------------------------------------------|:--------|
|tensorDesc|const [NDTensorDesc](https://developer.huawei.com/consumer/cn/doc/hiai-References/ndtensordesc-0000001092063032)\&|Tensor描述。|

#### 返回

|类型|描述|
|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|
|std::shared_ptr\<[INDTensorBuffer](https://developer.huawei.com/consumer/cn/doc/hiai-References/createndtensorbuffer-0000001092056038)\>|INDTensorBuffer的指针。|

#### CreateNDTensorBuffer(const NDTensorDesc\& tensorDesc, void\* data, size_t dataSize)

#### 接口定义

```
std::shared_ptr<INDTensorBuffer> CreateNDTensorBuffer(const NDTensorDesc& tensorDesc, void* data, size_t dataSize);
```

#### 功能介绍

根据Tensor描述，创建TensorBuffer，同时写入tensor数据和大小。  

#### 参数

|名称|类型|描述|
|:---------|:-----------------------------------------------------------------------------------------------------------------|:----------|
|tensorDesc|const [NDTensorDesc](https://developer.huawei.com/consumer/cn/doc/hiai-References/ndtensordesc-0000001092063032)\&|Tensor描述。|
|data|void\*|Tensor数据地址。|
|dataSize|size_t|Tensor数据大小。|

#### 返回

|类型|描述|
|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|
|std::shared_ptr\<[INDTensorBuffer](https://developer.huawei.com/consumer/cn/doc/hiai-References/createndtensorbuffer-0000001092056038)\>|INDTensorBuffer的指针。|

#### CreateNDTensorBuffer(const NDTensorDesc\& tensorDesc, const NativeHandle\& handle)

#### 接口定义

```
std::shared_ptr<INDTensorBuffer> CreateNDTensorBuffer(const NDTensorDesc& tensorDesc, const NativeHandle& handle);
```

#### 功能介绍

根据Tensor描述和NativeHandle，创建TensorBuffer。  

#### 参数

|名称|类型|描述|
|:---------|:-----------------------------------------------------------------------------------------------------------------|:----------------------------------------|
|tensorDesc|const [NDTensorDesc](https://developer.huawei.com/consumer/cn/doc/hiai-References/ndtensordesc-0000001092063032)\&|Tensor描述。|
|handle|const [NativeHandle](https://developer.huawei.com/consumer/cn/doc/hiai-References/nativehandle-0000001139236033)\&|输入NativeHandle的结构信息，NativeHandle只支持ION内存。|

#### 返回

|类型|描述|
|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|
|std::shared_ptr\<[INDTensorBuffer](https://developer.huawei.com/consumer/cn/doc/hiai-References/createndtensorbuffer-0000001092056038)\>|INDTensorBuffer的指针。|

