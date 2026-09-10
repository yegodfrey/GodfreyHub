---
name: document/cn/hiai-References/inputmem-void-0000001052490747
title: InputMemBufferCreate(void* data, uint32_t size)
uri: https://developer.huawei.com/consumer/cn/doc/hiai-References/inputmem-void-0000001052490747
---

# InputMemBufferCreate(void\* data, uint32_t size)

#### 接口定义

```
MemBuffer* InputMemBufferCreate(void* data, uint32_t size);
```

#### 功能介绍

从内存创建OM模型MemBuffer。  

#### 参数

|名称|类型|描述|
|:---|:-------|:-----------------|
|data|void\*|模型用户内存地址。|
|size|uint32_t|模型内存存储大小（单位：byte）。|

#### 返回

|类型|描述|
|:----------|:----------------------------|
|MemBuffer\*|MemBuffer地址，如果为nullptr表示创建失败。|

