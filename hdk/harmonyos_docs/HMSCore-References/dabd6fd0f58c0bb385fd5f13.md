---
name: document/cn/HMSCore-References/mapmodelclass-0000001213111246
title: MapModelCross
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-References/mapmodelclass-0000001213111246
---

# MapModelCross

|Class Info|
|:----------------------------------|
|public class MapModelCross 路口放大图模型。|

## Public Constructor Summary

|Constructor Name|
|:------------------------------------------------------------------------------------|
|[MapModelCross](#section10218183882917)(int format, byte[] buf) 携带放大图格式和动态放大图格式的构造方法。|

## Public Method Summary

|Qualifier and Type|Method Name and Description|
|:-----------------|:-------------------------------------------------|
|byte[]|[getPicBuf](#section882972412169)() 获取路口动态放大图。|
|int|[getPicFormat](#section248619418374)() 获取路口放大图的格式。|

## Public Constructors

### MapModelCross(int format, byte[] buf)

|Constructor|
|:--------------------------------------------------------------------|
|public MapModelCross(int format, byte[] buf) 使用给定参数创建MapModelCross对象。|

**Parameters**

|Name|Description|
|:-----|:----------|
|format|路口放大图的格式。|
|buf|路口动态放大图。|

## Public Methods

### getPicBuf

|Method|
|:-----------------------------------|
|public byte[] getPicBuf() 获取路口动态放大图。|

**Return** **s**

|Type|Description|
|:-----|:----------|
|byte[]|路口动态放大图。|

### getPicFormat

|Method|
|:------------------------------------|
|public int getPicFormat() 获取路口放大图的格式。|

**Return** **s**

|Type|Description|
|:---|:-------------------------------|
|int|路口放大图的格式 * 1为栅格PNG图片 * 2为矢量BMP图片|

