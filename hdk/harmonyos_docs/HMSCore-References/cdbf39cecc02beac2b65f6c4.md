---
name: document/cn/HMSCore-References/mediacontent-0000001050064904
title: MediaContent
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-References/mediacontent-0000001050064904
---

# MediaContent

|Interface Info|
|:----------------------------------------|
|public interface MediaContent 原生广告媒体内容信息。|

## Public Method Summary

|Qualifier and Type|Method Name and Description|
|:-----------------|:-------------------------------------------------------------------------|
|float|[getAspectRatio](#section20301171913217)() 返回填充MediaView的媒体的纵横比。|
|Drawable|[getImage](#section1630111936)() 如果媒体内容不包含视频，则返回要显示的主图像。|
|void|[setImage](#section3118813449)(Drawable drawable) 在媒体内容不包含视频时，设置要显示的可选主图像。|

## Public Methods

### getAspectRatio

|Method|
|:------------------------------------------------------------------------------------------------------------------------------------------------|
|public float getAspectRatio() 返回填充[MediaView](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/mediaview-0000001050066853)的媒体的纵横比。|

**Returns**

|Type|Description|
|:----|:----------------------------------------------------------------------------------------------------------------|
|float|填充[MediaView](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/mediaview-0000001050066853)的媒体的纵横比。|

### getImage

|Method|
|:-------------------------------------------------|
|public Drawable getImage() 如果媒体内容不包含视频，则返回要显示的主图像。|

**Returns**

|Type|Description|
|:-------|:----------------------|
|Drawable|如果媒体内容不包含视频，则返回要显示的主图像。|

### setImage

|Method|
|:---------------------------------------------------------------|
|public void setImage(Drawable drawable) 在媒体内容不包含视频时，设置要显示的可选主图像。|

**Parameters**

|Name|Description|
|:-------|:----------|
|drawable|显示的可选主图像。|

