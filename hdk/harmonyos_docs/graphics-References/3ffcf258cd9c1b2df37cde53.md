---
name: document/cn/graphics-References/resourceedge-0000001406417573
title: ResourceEdge
uri: https://developer.huawei.com/consumer/cn/doc/graphics-References/resourceedge-0000001406417573
---

# ResourceEdge

|Class Info|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|class ResourceEdge：[EdgeFG](https://developer.huawei.com/consumer/cn/doc/development/graphics-References/edgefg-0000001406657101) FrameGraph资源边类，对应FrameGraph中有向无环图中的一个资源边。|

## Public Constructor Summary

|Constructor Name|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|[ResourceEdge](#section20284403518)([DirectedAcyclicGraph](https://developer.huawei.com/consumer/cn/doc/development/graphics-References/directedacyclicgraph-0000001355977520)& daGraph, [NodeFG](https://developer.huawei.com/consumer/cn/doc/development/graphics-References/nodefg-0000001356137468)& from, [NodeFG](https://developer.huawei.com/consumer/cn/doc/development/graphics-References/nodefg-0000001356137468)& to, [ResourceUsage](https://developer.huawei.com/consumer/cn/doc/development/graphics-References/resourceusage-0000001353778262) usage) 构造函数。|

## Public Destructor Summary

|Destructor Name|
|:----------------------------------------------------|
|virtual [~ResourceEdge](#section152111051710)() 析构函数。|

## Public Constructors

### ResourceEdge

|Constructor|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|ResourceEdge([DirectedAcyclicGraph](https://developer.huawei.com/consumer/cn/doc/development/graphics-References/directedacyclicgraph-0000001355977520)& daGraph, [NodeFG](https://developer.huawei.com/consumer/cn/doc/development/graphics-References/nodefg-0000001356137468)& from, [NodeFG](https://developer.huawei.com/consumer/cn/doc/development/graphics-References/nodefg-0000001356137468)& to, [ResourceUsage](https://developer.huawei.com/consumer/cn/doc/development/graphics-References/resourceusage-0000001353778262) usage) 构造函数。|

**Parameters**

|Name|Description|
|:------|:----------|
|daGraph|有向无环图。|
|from|起点。|
|to|终点。|
|usage|资源使用方法。|

## Public Destructors

### ~ResourceEdge

|Destructor|
|:----------------------------|
|virtual ~ResourceEdge() 析构函数。|

