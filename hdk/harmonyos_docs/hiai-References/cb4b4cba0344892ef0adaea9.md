---
name: document/cn/hiai-References/hiai-singleoptensordesc-isvirtual-0000001934134169
title: HiAI_SingleOpTensorDesc_IsVirtual
uri: https://developer.huawei.com/consumer/cn/doc/hiai-References/hiai-singleoptensordesc-isvirtual-0000001934134169
---

# HiAI_SingleOpTensorDesc_IsVirtual

## 接口定义

```screen
bool HiAI_SingleOpTensorDesc_IsVirtual(const HiAI_SingleOpTensorDesc* tensorDesc);
```

## 功能介绍

用于查询指定HiAI_SingleOpTensorDesc是否为虚拟张量。
> 说明
>
> 虚拟张量是相连的CANN单算子之间的中间张量，其中的数据仅暂时存在，不经非CANN单算子内存读取或写入。例如，若CANN单算子A的输出张量T1仅作为CANN单算子B的输入张量，且用户只读取单算子B的输出张量T2，不会读取或写入T1，那么T1需要被设置为虚拟张量，而T2则是非虚拟张量。

## 参数

|名称|类型|描述|
|:---------|:-----------------------------|:-------------------------------------------------|
|tensorDesc|const HiAI_SingleOpTensorDesc*|指向HiAI_SingleOpTensorDesc对象的指针。该值不能为空指针，否则返回false。|

## 返回

|类型|描述|
|:---|:--------------------------------------------|
|bool|张量是否是虚拟张量。 * true：该张量是虚拟张量 * false：该张量不是虚拟张量。|

