---
name: document/cn/hiai-References/hiai-singleopexecutor-precheckfusedconvactivation-0000001890414422
title: HiAI_SingleOpExecutor_PreCheckFusedConvolutionActivation
uri: https://developer.huawei.com/consumer/cn/doc/hiai-References/hiai-singleopexecutor-precheckfusedconvactivation-0000001890414422
---

# HiAI_SingleOpExecutor_PreCheckFusedConvolutionActivation

## 接口定义

```screen
HiAI_SingleOp_SupportStatus HiAI_SingleOpExecutor_PreCheckFusedConvolutionActivation(const HiAI_SingleOpOptions* options, const HiAI_SingleOpDescriptor* convOpDesc, const HiAI_SingleOpDescriptor* actOpDesc, const HiAI_SingleOpTensorDesc* input, const HiAI_SingleOpTensorDesc* output, const HiAI_SingleOpTensor* filter, const HiAI_SingleOpTensor* bias);
```

## 功能介绍

用于预查询卷积和激活融合算子的支持状态。根据该接口的返回值确定是否调用[HiAI_SingleOpExecutor_CreateFusedConvolutionActivation](https://developer.huawei.com/consumer/cn/doc/hiai-References/hiai-singleopexecutor-createfusedconvactivation-0000001934134205)来创建卷积执行器，也可以不调用本方法，直接创建卷积执行器。

## 参数

|名称|类型|描述|
|:---------|:-----------------------|:-------------------------------------------------------|
|options|HiAI_SingleOpOptions*|指向HiAI_SingleOpOptions对象的指针。该值不能为空指针，否则接口调用失败。|
|convOpDesc|HiAI_SingleOpDescriptor*|指向卷积算子对应的HiAI_SingleOpDescriptor对象的指针。该值不能为空指针，否则接口调用失败。|
|actOpDesc|HiAI_SingleOpDescriptor*|指向激活算子对应的HiAI_SingleOpDescriptor对象的指针。该值不能为空指针，否则接口调用失败。|
|input|HiAI_SingleOpTensorDesc*|指向输入Tensor描述的指针。该值不能为空指针，否则接口调用失败。|
|output|HiAI_SingleOpTensorDesc*|指向输出Tensor描述的指针。该值不能为空指针，否则接口调用失败。|
|filter|HiAI_SingleOpTensor*|指向卷积核Tensor的指针。该值不能为空指针，否则接口调用失败。|
|bias|HiAI_SingleOpTensor*|指向偏置Tensor的指针。如果卷积没有偏置，则该值可以是空指针。|

## 返回

|类型|描述|
|:---------------------------------------------------------------------------------------------------------------------------------------|:----|
|[HiAI_SingleOp_SupportStatus](https://developer.huawei.com/consumer/cn/doc/hiai-References/hiai-singleop-supportstatus-0000001890414454)|支持状态。|

