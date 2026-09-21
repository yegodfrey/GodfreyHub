---
name: document/cn/graphics-References/api-springconstraint-0000001142862487
title: SpringConstraint
uri: https://developer.huawei.com/consumer/cn/doc/graphics-References/api-springconstraint-0000001142862487
---

# SpringConstraint

|Class Info|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public class SpringConstraint extends [Component](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-component-0000001061389684) implements [Constraint](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-constraint-0000001096382448) 弹簧约束组件。|

## Public Method Summary

|Qualifier and Type|Method Name and Description|
|:------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|static [SpringConstraint.Descriptor](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-springconstraint-descriptor-0000001454212461)|[descriptor](#section7999173883615)() 获取弹簧约束组件描述符实例。|
|[Vector3](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-vector3-0000001061359991)|[getAngularLowerLimit](#section27841221123720)() 获取角度位移下限。|
|[Vector3](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-vector3-0000001061359991)|[getAngularUpperLimit](#section185123228371)() 获取角度位移上限。|
|[SpringConstraint.AxisType](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-springconstraint-axistype-0000001144543973)|[getAxis](#section1765871833719)() 获取轴类型。|
|float|[getDamping](#section15922419193715)() 获取阻尼系数。|
|[Vector3](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-vector3-0000001061359991)|[getFramePositionInA](#section236671610377)() 获取节点A相对约束点的位置坐标。|
|[Vector3](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-vector3-0000001061359991)|[getFramePositionInB](#section1855815177374)() 获取节点B相对约束点的位置坐标。|
|[Quaternion](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-quaternion-0000001061519954)|[getFrameRotationInA](#section10101617153713)() 获取节点A相对约束点的旋转四元数。|
|[Quaternion](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-quaternion-0000001061519954)|[getFrameRotationInB](#section18132181863713)() 获取节点B相对约束点的旋转四元数。|
|[Vector3](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-vector3-0000001061359991)|[getLinearLowerLimit](#section1352613203373)() 获取线性位移下限。|
|[Vector3](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-vector3-0000001061359991)|[getLinearUpperLimit](#section37332118374)() 获取线性位移上限。|
|[Node](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-node-0000001061589671)|[getNodeA](#section1144171363712)() 获取弹簧约束组件的节点A。|
|[Node](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-node-0000001061589671)|[getNodeB](#section63261213123710)() 获取弹簧约束组件的节点B。|
|float|[getStiffness](#section19271111913718)() 获取刚度。|
|[Constraint.Type](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-constraint-type-0000001097681558)|[getType](#section1363561483713)() 获取约束类型。|
|[SpringConstraint](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-springconstraint-0000001142862487)|[setAngularLowerLimit](#section17811192812371)([Vector3](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-vector3-0000001061359991) value) 设置角度位移下限。|
|[SpringConstraint](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-springconstraint-0000001142862487)|[setAngularUpperLimit](#section1460102916379)([Vector3](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-vector3-0000001061359991) value) 设置角度位移上限。|
|[SpringConstraint](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-springconstraint-0000001142862487)|[setAxis](#section185812513715)([SpringConstraint.AxisType](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-springconstraint-axistype-0000001144543973) axis) 设置坐标轴。|
|[SpringConstraint](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-springconstraint-0000001142862487)|[setDamping](#section7974122643710)(float value) 设置阻尼系数。|
|[SpringConstraint](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-springconstraint-0000001142862487)|[setFramePositionInA](#section5218152315371)([Vector3](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-vector3-0000001061359991) framePositionInA) 设置节点A相对约束点的位置坐标。|
|[SpringConstraint](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-springconstraint-0000001142862487)|[setFramePositionInB](#section7568192413711)([Vector3](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-vector3-0000001061359991) framePositionInB) 设置节点B相对约束点的位置坐标。|
|[SpringConstraint](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-springconstraint-0000001142862487)|[setFrameRotationInA](#section18865323153713)([Quaternion](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-quaternion-0000001061519954) frameRotationInA) 设置节点A相对约束点的旋转四元数。|
|[SpringConstraint](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-springconstraint-0000001142862487)|[setFrameRotationInB](#section4253192503716)([Quaternion](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-quaternion-0000001061519954) frameRotationInB) 设置节点B相对约束点的旋转四元数。|
|[SpringConstraint](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-springconstraint-0000001142862487)|[setLinearLowerLimit](#section65832271372)([Vector3](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-vector3-0000001061359991) value) 设置线性位移下限。|
|[SpringConstraint](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-springconstraint-0000001142862487)|[setLinearUpperLimit](#section316612288372)([Vector3](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-vector3-0000001061359991) value) 设置线性位移上限。|
|void|[setNodeA](#section6217815143710)([Node](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-node-0000001061589671) nodeA) 设置弹簧约束组件的节点A。|
|void|[setNodeB](#section20786715143712)([Node](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-node-0000001061589671) nodeB) 设置弹簧约束组件的节点B。|
|[SpringConstraint](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-springconstraint-0000001142862487)|[setStiffness](#section173752026163718)(float value) 设置刚度。|

## Public Methods

### descriptor

|Method|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public static [SpringConstraint.Descriptor](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-springconstraint-descriptor-0000001454212461) descriptor() 获取弹簧约束组件描述符实例。|

**Returns**

|Type|Description|
|:-----------------------------------------------------------------------------------------------------------------------------------------------|:-----------|
|[SpringConstraint.Descriptor](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-springconstraint-descriptor-0000001454212461)|弹簧约束组件描述符实例。|

### getAngularLowerLimit

|Method|
|:-----------------------------------------------------------------------------------------------------------------------------------------------|
|public [Vector3](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-vector3-0000001061359991) getAngularLowerLimit() 获取角度位移下限。|

**Returns**

|Type|Description|
|:-------------------------------------------------------------------------------------------------------|:----------|
|[Vector3](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-vector3-0000001061359991)|角度位移下限。|

### getAngularUpperLimit

|Method|
|:-----------------------------------------------------------------------------------------------------------------------------------------------|
|public [Vector3](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-vector3-0000001061359991) getAngularUpperLimit() 获取角度位移上限。|

**Returns**

|Type|Description|
|:-------------------------------------------------------------------------------------------------------|:----------|
|[Vector3](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-vector3-0000001061359991)|角度位移上限。|

### getAxis

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public [SpringConstraint.AxisType](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-springconstraint-axistype-0000001144543973) getAxis() 获取轴类型。|

**Returns**

|Type|Description|
|:-------------------------------------------------------------------------------------------------------------------------------------------|:----------|
|[SpringConstraint.AxisType](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-springconstraint-axistype-0000001144543973)|轴类型。|

### getDamping

|Method|
|:--------------------------------|
|public float getDamping() 获取阻尼系数。|

**Returns**

|Type|Description|
|:----|:----------|
|float|阻尼系数。|

### getFramePositionInA

|Method|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------|
|public [Vector3](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-vector3-0000001061359991) getFramePositionInA() 获取节点A相对约束点的位置坐标。|

**Returns**

|Type|Description|
|:-------------------------------------------------------------------------------------------------------|:----------|
|[Vector3](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-vector3-0000001061359991)|位置坐标。|

### getFramePositionInB

|Method|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------|
|public [Vector3](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-vector3-0000001061359991) getFramePositionInB() 获取节点B相对约束点的位置坐标。|

**Returns**

|Type|Description|
|:-------------------------------------------------------------------------------------------------------|:----------|
|[Vector3](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-vector3-0000001061359991)|位置坐标。|

### getFrameRotationInA

|Method|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public [Quaternion](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-quaternion-0000001061519954) getFrameRotationInA() 获取节点A相对约束点的旋转四元数。|

**Returns**

|Type|Description|
|:-------------------------------------------------------------------------------------------------------------|:----------|
|[Quaternion](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-quaternion-0000001061519954)|旋转四元数。|

### getFrameRotationInB

|Method|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public [Quaternion](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-quaternion-0000001061519954) getFrameRotationInB() 获取节点B相对约束点的旋转四元数。|

**Returns**

|Type|Description|
|:-------------------------------------------------------------------------------------------------------------|:----------|
|[Quaternion](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-quaternion-0000001061519954)|旋转四元数。|

### getLinearLowerLimit

|Method|
|:----------------------------------------------------------------------------------------------------------------------------------------------|
|public [Vector3](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-vector3-0000001061359991) getLinearLowerLimit() 获取线性位移下限。|

**Returns**

|Type|Description|
|:-------------------------------------------------------------------------------------------------------|:----------|
|[Vector3](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-vector3-0000001061359991)|线性位移下限。|

### getLinearUpperLimit

|Method|
|:----------------------------------------------------------------------------------------------------------------------------------------------|
|public [Vector3](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-vector3-0000001061359991) getLinearUpperLimit() 获取线性位移上限。|

**Returns**

|Type|Description|
|:-------------------------------------------------------------------------------------------------------|:----------|
|[Vector3](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-vector3-0000001061359991)|线性位移上限。|

### getNodeA

|Method|
|:---------------------------------------------------------------------------------------------------------------------------------|
|public [Node](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-node-0000001061589671) getNodeA() 获取弹簧约束组件的节点A。|

**Returns**

|Type|Description|
|:-------------------------------------------------------------------------------------------------|:----------|
|[Node](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-node-0000001061589671)|弹簧约束组件的节点A。|

### getNodeB

|Method|
|:---------------------------------------------------------------------------------------------------------------------------------|
|public [Node](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-node-0000001061589671) getNodeB() 获取弹簧约束组件的节点B。|

**Returns**

|Type|Description|
|:-------------------------------------------------------------------------------------------------|:----------|
|[Node](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-node-0000001061589671)|弹簧约束组件的节点B。|

### getStiffness

|Method|
|:--------------------------------|
|public float getStiffness() 获取刚度。|

**Returns**

|Type|Description|
|:----|:----------|
|float|刚度值。|

### getType

|Method|
|:------------------------------------------------------------------------------------------------------------------------------------------------|
|public [Constraint.Type](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-constraint-type-0000001097681558) getType() 获取约束类型。|

**Returns**

|Type|Description|
|:-----------------------------------------------------------------------------------------------------------------------|:----------|
|[Constraint.Type](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-constraint-type-0000001097681558)|约束类型。|

### setAngularLowerLimit

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public [SpringConstraint](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-springconstraint-0000001142862487) setAngularLowerLimit([Vector3](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-vector3-0000001061359991) value) 设置角度位移下限。|

**Parameters**

|Name|Description|
|:----|:----------|
|value|角度位移下限。|

**Returns**

|Type|Description|
|:-------------------------------------------------------------------------------------------------------------------------|:----------|
|[SpringConstraint](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-springconstraint-0000001142862487)|自身实例。|

### setAngularUpperLimit

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public [SpringConstraint](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-springconstraint-0000001142862487) setAngularUpperLimit([Vector3](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-vector3-0000001061359991) value) 设置角度位移上限。|

**Parameters**

|Name|Description|
|:----|:----------|
|value|角度位移上限。|

**Returns**

|Type|Description|
|:-------------------------------------------------------------------------------------------------------------------------|:----------|
|[SpringConstraint](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-springconstraint-0000001142862487)|自身实例。|

### setAxis

|Method|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public [SpringConstraint](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-springconstraint-0000001142862487) setAxis([SpringConstraint.AxisType](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-springconstraint-axistype-0000001144543973) axis) 设置坐标轴。|

**Parameters**

|Name|Description|
|:---|:----------|
|axis|坐标轴。|

**Returns**

|Type|Description|
|:-------------------------------------------------------------------------------------------------------------------------|:----------|
|[SpringConstraint](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-springconstraint-0000001142862487)|自身实例。|

### setDamping

|Method|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public [SpringConstraint](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-springconstraint-0000001142862487) setDamping(float value) 设置阻尼系数。|

**Parameters**

|Name|Description|
|:----|:---------------|
|value|阻尼系数，取值范围[0, 1]。|

**Returns**

|Type|Description|
|:-------------------------------------------------------------------------------------------------------------------------|:----------|
|[SpringConstraint](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-springconstraint-0000001142862487)|自身实例。|

### setFramePositionInA

|Method|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public [SpringConstraint](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-springconstraint-0000001142862487) setFramePositionInA([Vector3](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-vector3-0000001061359991) framePositionInA) 设置节点A相对约束点的位置坐标。|

**Parameters**

|Name|Description|
|:---------------|:----------|
|framePositionInA|位置坐标。|

**Returns**

|Type|Description|
|:-------------------------------------------------------------------------------------------------------------------------|:----------|
|[SpringConstraint](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-springconstraint-0000001142862487)|自身实例。|

### setFramePositionInB

|Method|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public [SpringConstraint](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-springconstraint-0000001142862487) setFramePositionInB([Vector3](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-vector3-0000001061359991) framePositionInB) 设置节点B相对约束点的位置坐标。|

**Parameters**

|Name|Description|
|:---------------|:----------|
|framePositionInB|位置坐标。|

**Returns**

|Type|Description|
|:-------------------------------------------------------------------------------------------------------------------------|:----------|
|[SpringConstraint](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-springconstraint-0000001142862487)|自身实例。|

### setFrameRotationInA

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public [SpringConstraint](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-springconstraint-0000001142862487) setFrameRotationInA([Quaternion](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-quaternion-0000001061519954) frameRotationInA) 设置节点A相对约束点的旋转四元数。|

**Parameters**

|Name|Description|
|:---------------|:----------|
|frameRotationInA|旋转四元数。|

**Returns**

|Type|Description|
|:-------------------------------------------------------------------------------------------------------------------------|:----------|
|[SpringConstraint](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-springconstraint-0000001142862487)|自身实例。|

### setFrameRotationInB

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public [SpringConstraint](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-springconstraint-0000001142862487) setFrameRotationInB([Quaternion](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-quaternion-0000001061519954) frameRotationInB) 设置节点B相对约束点的旋转四元数。|

**Parameters**

|Name|Description|
|:---------------|:----------|
|frameRotationInB|旋转四元数。|

**Returns**

|Type|Description|
|:-------------------------------------------------------------------------------------------------------------------------|:----------|
|[SpringConstraint](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-springconstraint-0000001142862487)|自身实例。|

### setLinearLowerLimit

|Method|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public [SpringConstraint](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-springconstraint-0000001142862487) setLinearLowerLimit([Vector3](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-vector3-0000001061359991) value) 设置线性位移下限。|

**Parameters**

|Name|Description|
|:----|:----------|
|value|线性位移下限。|

**Returns**

|Type|Description|
|:-------------------------------------------------------------------------------------------------------------------------|:----------|
|[SpringConstraint](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-springconstraint-0000001142862487)|自身实例。|

### setLinearUpperLimit

|Method|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public [SpringConstraint](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-springconstraint-0000001142862487) setLinearUpperLimit([Vector3](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-vector3-0000001061359991) value) 设置线性位移上限。|

**Parameters**

|Name|Description|
|:----|:----------|
|value|线性位移上限。|

**Returns**

|Type|Description|
|:-------------------------------------------------------------------------------------------------------------------------|:----------|
|[SpringConstraint](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-springconstraint-0000001142862487)|自身实例。|

### setNodeA

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------------------|
|public void setNodeA([Node](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-node-0000001061589671) nodeA) 设置弹簧约束组件的节点A。|

**Parameters**

|Name|Description|
|:----|:----------|
|nodeA|弹簧约束组件的节点A。|

### setNodeB

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------------------|
|public void setNodeB([Node](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-node-0000001061589671) nodeB) 设置弹簧约束组件的节点B。|

**Parameters**

|Name|Description|
|:----|:----------|
|nodeB|弹簧约束组件的节点B。|

### setStiffness

|Method|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public [SpringConstraint](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-springconstraint-0000001142862487) setStiffness(float value) 设置刚度。|

**Parameters**

|Name|Description|
|:----|:----------|
|value|刚度值。|

**Returns**

|Type|Description|
|:-------------------------------------------------------------------------------------------------------------------------|:----------|
|[SpringConstraint](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-springconstraint-0000001142862487)|自身实例。|

