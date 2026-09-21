---
name: document/cn/graphics-References/api-constraint-0000001096382448
title: Constraint
uri: https://developer.huawei.com/consumer/cn/doc/graphics-References/api-constraint-0000001096382448
---

# Constraint

|Interface Info|
|:--------------------------------|
|public interface Constraint 约束接口。|

## Public Method Summary

|Qualifier and Type|Method Name and Description|
|:-----------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------|
|[Node](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-node-0000001061589671)|[getNodeA](#section12741727193812)() 获取约束连接的节点A。|
|[Node](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-node-0000001061589671)|[getNodeB](#section14933102816389)() 获取约束连接的节点B。|
|[Constraint.Type](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-constraint-type-0000001097681558)|[getType](#section1050842917381)() 获取约束类型。|
|void|[setNodeA](#section1227115303383)([Node](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-node-0000001061589671) nodeA) 设置约束连接的节点A。|
|void|[setNodeB](#section1378193018385)([Node](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-node-0000001061589671) nodeB) 设置约束连接的节点B。|

## Public Methods

### getNodeA

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------|
|public [Node](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-node-0000001061589671) getNodeA() 获取约束连接的节点A。|

**Returns**

|Type|Description|
|:-------------------------------------------------------------------------------------------------|:----------|
|[Node](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-node-0000001061589671)|节点A。|

### getNodeB

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------|
|public [Node](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-node-0000001061589671) getNodeB() 获取约束连接的节点B。|

**Returns**

|Type|Description|
|:-------------------------------------------------------------------------------------------------|:----------|
|[Node](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-node-0000001061589671)|节点B。|

### getType

|Method|
|:------------------------------------------------------------------------------------------------------------------------------------------------|
|public [Constraint.Type](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-constraint-type-0000001097681558) getType() 获取约束类型。|

**Returns**

|Type|Description|
|:-----------------------------------------------------------------------------------------------------------------------|:----------|
|[Constraint.Type](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-constraint-type-0000001097681558)|约束类型。|

### setNodeA

|Method|
|:-----------------------------------------------------------------------------------------------------------------------------------------|
|public void setNodeA([Node](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-node-0000001061589671) nodeA) 设置约束连接的节点A。|

**Parameters**

|Name|Description|
|:----|:----------|
|nodeA|节点A。|

### setNodeB

|Method|
|:-----------------------------------------------------------------------------------------------------------------------------------------|
|public void setNodeB([Node](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-node-0000001061589671) nodeB) 设置约束连接的节点B。|

**Parameters**

|Name|Description|
|:----|:----------|
|nodeB|节点B。|

