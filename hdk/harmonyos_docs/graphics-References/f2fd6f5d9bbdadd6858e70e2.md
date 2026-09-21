---
name: document/cn/graphics-References/buffermemorybarrierinfo-0000001303489545
title: BufferMemoryBarrierInfo
uri: https://developer.huawei.com/consumer/cn/doc/graphics-References/buffermemorybarrierinfo-0000001303489545
---

# BufferMemoryBarrierInfo

|Struct Info|
|:----------------------------------------------------|
|struct BufferMemoryBarrierInfo 缓冲存储屏障参数信息，用于创建缓冲存储屏障。|

## Public Field Summary

|Qualifier and Type|Field and Description|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------|
|PipelineStageFlags|srcStageMask 源阶段掩码。|
|PipelineStageFlags|dstStageMask 目标阶段掩码。|
|std::vector<[BufferMemoryBarrierAccessAndQueueInfo](https://developer.huawei.com/consumer/cn/doc/development/graphics-References/buffermemorybarrieraccessandqueueinfo-0000001303369557)>|accessAndQueueInfo 缓冲存储屏障的权限以及队列信息。|

