---
name: document/cn/HMSCore-References/client-file-contentextras-thumbnail-0000001050125328
title: File.ContentExtras.Thumbnail
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-References/client-file-contentextras-thumbnail-0000001050125328
---

# File.ContentExtras.Thumbnail

|Class Info|
|:---------------------------------------------------------------------------------|
|public static final class File.ContentExtras.Thumbnail extends GenericJson 文件缩略图类。|

## Public Constructor Summary

|Constructor Name|
|:----------------------------------------------------------------------------------------|
|[File.ContentExtras.Thumbnail](#section1569052220454)() 构造File.ContentExtras.Thumbnail对象。|

## Public Method Summary

|Qualifier and Type|Method Name and Description|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------------------------------------------|
|[File.ContentExtras.Thumbnail](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/client-file-contentextras-thumbnail-0000001050125328)|[clone](#section1372520533453)() 克隆一个File.ContentExtras.Thumbnail对象。|
|byte[]|[decodeContent](#section1137545314616)() 使用URL安全的Base64解码的缩略图数据。|
|[File.ContentExtras.Thumbnail](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/client-file-contentextras-thumbnail-0000001050125328)|[encodeContent](#section1521119323479)(byte[] content) 使用URL安全的Base64编码的缩略图数据。|
|String|[getContent](#section12111144714718)() 获取使用URL安全的Base64编码的缩略图数据。|
|String|[getMimeType](#section181301175482)() 获取缩略图的MIME类型。|
|Boolean|[getThumbnailPublic](#section2827192818484)() 获取是否允许匿名下载缩略图。|
|[File.ContentExtras.Thumbnail](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/client-file-contentextras-thumbnail-0000001050125328)|[set](#section93105489481)(String fieldName, Object value) 设置自定义属性及属性值。|
|[File.ContentExtras.Thumbnail](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/client-file-contentextras-thumbnail-0000001050125328)|[setContent](#section17886141717497)(String content) 设置使用URL安全的Base64编码的缩略图数据（RFC 4648第5节）。|
|[File.ContentExtras.Thumbnail](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/client-file-contentextras-thumbnail-0000001050125328)|[setMimeType](#section1453054114918)(String mimeType) 设置缩略图的MIME类型。|
|[File.ContentExtras.Thumbnail](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/client-file-contentextras-thumbnail-0000001050125328)|[setThumbnailPublic](#section688763612501)(Boolean thumbnailPublic) 设置是否允许匿名下载缩略图。|

## Public Constructors

### File.ContentExtras.Thumbnail

|Constructor|
|:-------------------------------------------------------------------|
|File.ContentExtras.Thumbnail() 构造一个File.ContentExtras.Thumbnail类对象 。|

## Public Methods

### decodeContent

|Method|
|:----------------------------------------------------|
|public byte[] decodeContent() 使用URL安全的Base64解码的缩略图数据。|

**Returns**

|Type|Description|
|:-----|:----------------------|
|byte[]|返回URL安全的Base64解码的缩略图数据。|

### encodeContent

|Method|
|:----------------------------------------------------------------------------------------|
|public File.ContentExtras.Thumbnail encodeContent(byte[] content) 使用URL安全的Base64编码的缩略图数据。|

**Parameters**

|Name|Description|
|:------|:----------|
|content|缩略图数据。|

**Returns**

|Type|Description|
|:---------------------------|:----------------------------------|
|File.ContentExtras.Thumbnail|返回一个File.ContentExtras.Thumbnail对象。|

### getContent

|Method|
|:----------------------------------------------------------------|
|public String getContent() 获取使用URL安全的Base64编码的缩略图数据（RFC 4648第5节）。|

**Returns**

|Type|Description|
|:-----|:------------------------------------|
|String|返回一个File.ContentExtras.Thumbnail对象数据。|

### setContent

|Method|
|:----------------------------------------------------------------------------------------------------|
|public File.ContentExtras.Thumbnail setContent(String content) 设置使用URL安全的Base64编码的缩略图数据（RFC 4648第5节）。|

**Parameters**

|Name|Description|
|:------|:----------------------|
|content|缩略图数据（0KB文件不允许设置缩略图数据）。|

**Returns**

|Type|Description|
|:---------------------------|:----------------------------------|
|File.ContentExtras.Thumbnail|返回一个File.ContentExtras.Thumbnail对象。|

### getMimeType

|Method|
|:----------------------------------------|
|public String getMimeType() 获取缩略图的MIME类型。|

**Returns**

|Type|Description|
|:-----|:------------|
|String|返回缩略图的MIME类型。|

### setMimeType

|Method|
|:-----------------------------------------------------------------------------|
|public File.ContentExtras.Thumbnail setMimeType(String mimeType) 设置缩略图的MIME类型。|

**Parameters**

|Name|Description|
|:-------|:----------|
|mimeType|缩略图的MIME类型。|

**Returns**

|Type|Description|
|:---------------------------|:----------------------------------|
|File.ContentExtras.Thumbnail|返回一个File.ContentExtras.Thumbnail对象。|

### getThumbnailPublic

|Method|
|:-------------------------------------------------|
|public Boolean getThumbnailPublic() 获取是否允许匿名下载缩略图。|

**Returns**

|Type|Description|
|:------|:-------------|
|Boolean|返回是否允许匿名下载缩略图。|

### setThumbnailPublic

|Method|
|:---------------------------------------------------------------------------------------------|
|public File.ContentExtras.Thumbnail setThumbnailPublic(Boolean thumbnailPublic) 设置是否允许匿名下载缩略图。|

**Parameters**

|Name|Description|
|:--------------|:-----------|
|thumbnailPublic|缩略图是否允许匿名下载。|

**Returns**

|Type|Description|
|:---------------------------|:----------------------------------|
|File.ContentExtras.Thumbnail|返回一个File.ContentExtras.Thumbnail对象。|

### set

|Method|
|:-----------------------------------------------------------------------------------|
|public File.ContentExtras.Thumbnail set(String fieldName, Object value) 设置自定义属性及属性值。|

**Parameters**

|Name|Description|
|:--------|:----------|
|fieldName|属性名称。|
|value|属性值。|

**Returns**

|Type|Description|
|:---------------------------|:----------------------------------|
|File.ContentExtras.Thumbnail|返回一个File.ContentExtras.Thumbnail对象。|

### clone

|Method|
|:------------------------------------------------------------------------------|
|public File.ContentExtras.Thumbnail clone() 克隆一个File.ContentExtras.Thumbnail对象。|

**Returns**

|Type|Description|
|:---------------------------|:----------------------------------|
|File.ContentExtras.Thumbnail|返回一个File.ContentExtras.Thumbnail对象。|

