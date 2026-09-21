---
name: document/cn/hiai-References/readbinary-void-0000001052889430
title: ReadBinaryProto(void* data, uint32_t size)
uri: https://developer.huawei.com/consumer/cn/doc/hiai-References/readbinary-void-0000001052889430
---

# ReadBinaryProto(void* data, uint32_t size)

## 接口定义

```screen
MemBuffer* ReadBinaryProto(void* data, uint32_t size);
```

## 功能介绍

从内存读取OM离线模型proto信息。

## 参数

|名称|类型|描述|
|:---|:-------|:---------------------|
|data|void*|OM离线模型内存地址。|
|size|uint32_t|OM离线模型内存存储大小（单位：byte）。|

## 返回

|类型|描述|
|:---------|:----------------------------|
|MemBuffer*|MemBuffer地址，如果为nullptr表示创建失败。|

