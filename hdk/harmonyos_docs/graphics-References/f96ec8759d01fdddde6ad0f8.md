---
name: document/cn/graphics-References/rt-core-node-0000001133823481
title: Node
uri: https://developer.huawei.com/consumer/cn/doc/graphics-References/rt-core-node-0000001133823481
---

# Node

|Struct Info|
|:---------------------------|
|Node 节点，包含起始顶点索引、顶点索引数和转换矩阵。|

## Public Field Summary

|Qualifier and Type|Field and Description|
|:---------------------------------------------------------------------------------------------------------|:-----------------------------------|
|uint32_t|firstIndex 起始顶点索引。|
|uint32_t|indicesCount 顶点索引数量。|
|[Buffer](https://developer.huawei.com/consumer/cn/doc/graphics-References/rt-core-buffer-0000001133940651)|modelMat 模型转换矩阵缓存。暂时只支持GPU buffer类型。|

