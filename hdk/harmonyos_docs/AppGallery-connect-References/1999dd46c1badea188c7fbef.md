---
name: document/cn/AppGallery-connect-References/harmonyos-ts-storage-metadataupdatable-0000001630983010
title: MetadataUpdatable
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/harmonyos-ts-storage-metadataupdatable-0000001630983010
---

# MetadataUpdatable

|Interface Info|
|:--------------------------------------------|
|export interface MetadataUpdatable 可更新的元数据信息。|

#### Parameters

|Name|Type|Mandatory/Optional (M/O)|Description|
|:-----------------|:-----------------------|:-----------------------|:-----------------------------------|
|contentType|string|O|标准HTTP头部的ContentType类型。|
|cacheControl|string|O|标准HTTP头部的CacheControl。|
|contentDisposition|string|O|标准HTTP头部的ContentDisposition。|
|contentEncoding|string|O|标准HTTP头部的ContentEncoding。|
|contentLanguage|string|O|标准HTTP头部的ContentLanguage。|
|customMetadata|Record\<string, string\>|O|自定义的云端文件属性，不区分大小写，并且需要符合标准HTTP头部的规范。|

