---
name: document/cn/graphics-References/api-vector4-0000001061838144
title: Vector4
uri: https://developer.huawei.com/consumer/cn/doc/graphics-References/api-vector4-0000001061838144
---

# Vector4

|Class Info|
|:-----------------------------------------------|
|public class Vector4 implements Parcelable 四维向量。|

## Public Field Summary

|Qualifier and Type|Field and Description|
|:--------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|
|static final [Vector4](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-vector4-0000001061838144)|[ONE](#section79340567457) 四维向量[Vector4](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-vector4-0000001061838144)(1, 1, 1, 1)。|
|static final [Vector4](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-vector4-0000001061838144)|[ZERO](#section11391915123818) 0向量。|
|float|[w](#section11506123692811) 四维向量的W值。|
|float|[x](#section2046333718511) 四维向量的X值。|
|float|[y](#section4794197617) 四维向量的Y值。|
|float|[z](#section434286132419) 四维向量的Z值。|

## Public Constructor Summary

|Constructor Name|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|[Vector4](#section1263711501283)(float x, float y, float z, float w) 构造方法，使用X、Y、Z、W值进行初始化[Vector4](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-vector4-0000001061838144)。|
|[Vector4](#section16376826123312)([Vector4](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-vector4-0000001061838144) other) 构造方法，使用其他四维向量初始化[Vector4](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-vector4-0000001061838144)。|

## Public Method Summary

|Qualifier and Type|Method Name and Description|
|:--------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|static [Vector4](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-vector4-0000001061838144)|[add](#section195891144592)([Vector4](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-vector4-0000001061838144) lhs, [Vector4](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-vector4-0000001061838144) rhs) 四维向量加法。|
|static float|[dot](#section73641726182215)([Vector4](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-vector4-0000001061838144) lhs, [Vector4](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-vector4-0000001061838144) rhs) 四维向量点乘。|
|float|[length](#section114261916112318)() 获取四维向量的模长。|
|static [Vector4](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-vector4-0000001061838144)|[subtract](#section17446103045810)([Vector4](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-vector4-0000001061838144) lhs, [Vector4](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-vector4-0000001061838144) rhs) 四维向量减法。|

## Public Fields

### ONE

|Property|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public static final [Vector4](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-vector4-0000001061838144) ONE 四维向量[Vector4](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-vector4-0000001061838144)(1, 1, 1, 1)。|

### ZERO

|Property|
|:-------------------------------------------------------------------------------------------------------------------------------------|
|public static final [Vector4](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-vector4-0000001061838144) ZERO 0向量。|

### w

|Property|
|:----------------------|
|public float w 四维向量的W值。|

### x

|Property|
|:----------------------|
|public float x 四维向量的X值。|

### y

|Property|
|:----------------------|
|public float y 四维向量的Y值。|

### z

|Property|
|:----------------------|
|public float z 四维向量的Z值。|

## Public Constructors

### Vector4(float x, float y, float z, float w)

|Constructor|
|:------------------------------------------------------------------|
|public Vector4(float x, float y, float z, float w) 使用X，Y，Z，W值进行初始化。|

**Parameters**

|Name|Description|
|:---|:----------|
|x|四维向量的X值。|
|y|四维向量的Y值。|
|z|四维向量的Z值。|
|w|四维向量的W值。|

### Vector4(Vector4 other)

|Constructor|
|:------------------------------------------------------------------------------------------------------------------------------------------|
|public Vector4([Vector4](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-vector4-0000001061838144) other) 使用其他四维向量初始化。|

**Parameters**

|Name|Description|
|:----|:----------|
|other|四维向量。|

## Public Methods

### add

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public static [Vector4](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-vector4-0000001061838144) add([Vector4](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-vector4-0000001061838144) lhs, [Vector4](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-vector4-0000001061838144) rhs) 四维向量加法。|

**Parameters**

|Name|Description|
|:---|:----------|
|lhs|四维向量。|
|rhs|四维向量。|

**Returns**

|Type|Description|
|:-------------------------------------------------------------------------------------------------------|:----------|
|[Vector4](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-vector4-0000001061838144)|两个四维向量的和。|

### dot

|Method|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public static float dot([Vector4](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-vector4-0000001061838144) lhs, [Vector4](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-vector4-0000001061838144) rhs) 四维向量点乘。|

**Parameters**

|Name|Description|
|:---|:----------|
|lhs|四维向量。|
|rhs|四维向量。|

**Returns**

|Type|Description|
|:----|:----------|
|float|两个四维向量的点积。|

### length

|Method|
|:-------------------------------|
|public float length() 获取四维向量的模长。|

**Returns**

|Type|Description|
|:----|:----------|
|float|四维向量的模长。|

### subtract

|Method|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public static [Vector4](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-vector4-0000001061838144) subtract([Vector4](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-vector4-0000001061838144) lhs, [Vector4](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-vector4-0000001061838144) rhs) 四维向量减法。|

**Parameters**

|Name|Description|
|:---|:----------|
|lhs|四维向量被减数。|
|rhs|四维向量减数。|

**Returns**

|Type|Description|
|:-------------------------------------------------------------------------------------------------------|:----------|
|[Vector4](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-vector4-0000001061838144)|两个四维向量的差。|

