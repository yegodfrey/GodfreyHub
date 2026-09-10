---
name: document/cn/HMSCore-References/client-file-contentextras-0000001050127279
title: File.ContentExtras
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-References/client-file-contentextras-0000001050127279
---

# File.ContentExtras

|Class Info|
|:-------------------------------------------------------------------------------------------|
|public static final class File.ContentExtras extends GenericJson 文件内容的附加信息（可选）类，响应中不会填充这些字段。|

#### Nested Class Summary

|Qualifier and Type|Class Name and Description||
|:-----------------|:-|-|
|Static Class|[File.ContentExtras.Thumbnail](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/client-file-contentextras-thumbnail-0000001050125328) 文件缩略图类声明，当且仅当云端不能生成标准缩略图时使用。||

#### Public Constructor Summary

|Constructor Name|
|:---------------------------------------------------------------------|
|[File.ContentExtras](#section5169523113911)() File.ContentExtras类构造方法。|

#### Public Method Summary

|Qualifier and Type|Method Name and Description|
|:---------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|[File.ContentExtras](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/client-file-contentextras-0000001050127279)|[clone](#section15874174915398)() 克隆一个[ContentExtras](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/client-file-contentextras-0000001050127279)对象。|
|[File.ContentExtras.Thumbnail](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/client-file-contentextras-thumbnail-0000001050125328)|[getThumbnail](#section782621854015)() 获取文件缩略图。|
|[File.ContentExtras](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/client-file-contentextras-0000001050127279)|[set](#section184751157436)(String fieldName, Object value) 设置自定义属性及属性值。|
|[File.ContentExtras](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/client-file-contentextras-0000001050127279)|[setThumbnail](#section824942374318)([File.ContentExtras.Thumbnail](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/client-file-contentextras-thumbnail-0000001050125328) thumbnail) 设置文件缩略图，当且仅当云端不能生成标准缩略图时使用。|

#### Public Constructors

#### File.ContentExtras

|Constructor|
|:----------------------------------------------|
|File.ContentExtras() 构造一个File.ContentExtras类对象。|

#### Public Methods

#### getThumbnail

|Method|
|:----------------------------------------------------------|
|public Thumbnail getThumbnail() 获取文件缩略图，当且仅当云端不能生成标准缩略图时使用。|

Returns  

|Type|Description|
|:---------------------------|:--------------------------------|
|File.ContentExtras.Thumbnail|返回File.ContentExtras.Thumbnail对象。|

#### setThumbnail

|Method|
|:---------------------------------------------------------------------------------------|
|public File.ContentExtras setThumbnail(Thumbnail thumbnail) 设置文件缩略图，当三方应用程序有权限访问文件内容时设置。|

Parameters  

|Name|Description|
|:--------|:----------|
|thumbnail|文件缩略图。|

Returns  

|Type|Description|
|:-----------------|:----------------------|
|File.ContentExtras|返回File.ContentExtras对象。|

#### set

|Method|
|:-------------------------------------------------------------------------|
|public File.ContentExtras set(String fieldName, Object value) 设置自定义属性及属性值。|

Parameters  

|Name|Description|
|:--------|:----------|
|fieldName|属性名称。|
|value|属性值。|

Returns  

|Type|Description|
|:-----------------|:----------------------|
|File.ContentExtras|返回File.ContentExtras对象。|

#### clone

|Method|
|:----------------------------------------------------------|
|public File.ContentExtras clone() 克隆一个File.ContentExtras对象。|

Returns  

|Type|Description|
|:-----------------|:----------------------|
|File.ContentExtras|返回File.ContentExtras对象。|

