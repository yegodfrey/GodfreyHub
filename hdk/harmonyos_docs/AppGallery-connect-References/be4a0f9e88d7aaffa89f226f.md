---
name: document/cn/AppGallery-connect-References/harmonyos-ts-storage-storagemanagement-0000001471086082
title: StorageManagement
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/harmonyos-ts-storage-storagemanagement-0000001471086082
---

# StorageManagement

|Interface Info|
|:----------------------------------------------------------|
|export interface StorageManagement 为浏览器客户端提供支持上传下载文件功能的管理类。|

#### Method Summary

|Qualifier and Type|Method Name and Description|
|:----------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|[StorageReference](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/harmonyos-ts-storage-storagereference-0000001522126321)|[storageReference](#section13963124903819)() 使用默认路由来创建根目录的引用。|
|[StorageReference](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/harmonyos-ts-storage-storagereference-0000001522126321)|[storageReference](#section14179124773813)(path: string) 使用默认路由和指定云端文件的路径来创建一个云端文件的引用。|
|[StorageReference](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/harmonyos-ts-storage-storagereference-0000001522126321)|[storageReference](#section276116409382)(policy: [AGConnectOptions](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/harmonyos-ts-storage-agconnectoptions-0000001522564921)) 使用指定路由来创建根目录的引用。|
|[StorageReference](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/harmonyos-ts-storage-storagereference-0000001522126321)|[storageReference](#section012312924313)(policy: [AGConnectOptions](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/harmonyos-ts-storage-agconnectoptions-0000001522564921), path: string) 使用指定路由和指定云端文件的路径来创建一个云端文件的引用。|

#### Methods

#### storageReference

|Method|
|:----------------------------------------------------|
|storageReference(): StorageReference 使用默认路由来创建根目录的引用。|

Return  

|Type|Description|
|:----------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------|
|[StorageReference](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/harmonyos-ts-storage-storagereference-0000001522126321)|返回StorageReference实例。|

#### storageReference

|Method|
|:-----------------------------------------------------------------------------|
|storageReference(path: string): StorageReference 使用默认路由和指定云端文件的路径来创建一个云端文件的引用。|

Parameters  

|Name|Description|
|:---|:----------|
|path|云端文件的路径。|

Return  

|Type|Description|
|:----------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------|
|[StorageReference](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/harmonyos-ts-storage-storagereference-0000001522126321)|返回StorageReference实例。|

#### storageReference

|Method|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|storageReference(policy: [AGConnectOptions](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/harmonyos-ts-storage-agconnectoptions-0000001522564921)): StorageReference 使用指定路由来创建根目录的引用。|

Parameters  

|Name|Description|
|:-----|:----------|
|policy|路由地址。|

Return  

|Type|Description|
|:----------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------|
|[StorageReference](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/harmonyos-ts-storage-storagereference-0000001522126321)|返回StorageReference实例。|

#### storageReference

|Method|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|storageReference(policy: [AGConnectOptions](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/harmonyos-ts-storage-agconnectoptions-0000001522564921), path: string): StorageReference 使用指定路由和指定云端文件的路径来创建一个云端文件的引用。|

Parameters  

|Name|Description|
|:-----|:----------|
|policy|路由地址。|
|path|云端文件的路径。|

Return  

|Type|Description|
|:----------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------|
|[StorageReference](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/harmonyos-ts-storage-storagereference-0000001522126321)|返回StorageReference实例。|

