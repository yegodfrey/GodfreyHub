---
name: document/cn/hiai-References/visionsearchproductimage-0000001050169507
title: MLVisionSearchProductImage
uri: https://developer.huawei.com/consumer/cn/doc/hiai-References/visionsearchproductimage-0000001050169507
---

# MLVisionSearchProductImage

|Class Info|
|:--------------------------------------------------------------------------------------------------------------------------------------|
|com.huawei.hms.mlsdk.productvisionsearch.MLVisionSearchProductImage 商品图片信息描述，包括： * productId：商品ID。 * imageId：商品图片ID。 * possibility：置信度。|

## Public Constructor Summary

|Constructor Name|
|:-------------------------------------------------------------------------------------------------------------|
|[MLVisionSearchProductImage](#section1169717573374)(String productId, String imageId, float possibility) 构造函数。|

## Public Method Summary

|Qualifier and Type|Method Name and Description|
|:-----------------|:------------------------------------------------|
|String|[getImageId](#section16633141613817)() 返回商品图片ID。|
|float|[getPossibility](#section12481529193817)() 返回置信度。|
|String|[getProductId](#section1456124243812)() 返回商品ID。|

## Public Constructors

### MLVisionSearchProductImage(String productId, String imageId, float possibility)

|Constructor|
|:-------------------------------------------------------------------------------------------|
|public MLVisionSearchProductImage(String productId, String imageId, float possibility) 构造函数。|

**Parameters**

|Name|Description|
|:----------|:----------|
|productId|商品ID。|
|imageId|商品图片ID。|
|possibility|置信度。|

## Public Methods

### getImageId()

|Method|
|:-----------------------------------|
|public String getImageId() 返回商品图片ID。|

**Returns**

|Type|Description|
|:-----|:----------|
|String|商品图片ID。|

### getPossibility()

|Method|
|:-----------------------------------|
|public float getPossibility() 返回置信度。|

**Returns**

|Type|Description|
|:----|:----------|
|float|置信度。|

### getProductId()

|Method|
|:-----------------------------------|
|public String getProductId() 返回商品ID。|

**Returns**

|Type|Description|
|:-----|:----------|
|String|商品ID。|

