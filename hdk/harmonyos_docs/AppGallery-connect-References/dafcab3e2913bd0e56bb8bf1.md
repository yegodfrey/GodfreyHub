---
name: document/cn/AppGallery-connect-References/harmonyos-ts-storage-overview-0000001522564917
title: Overview
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/harmonyos-ts-storage-overview-0000001522564917
---

# Overview

## 服务调用

cloudStorage():StorageManagement

cloudStorage(bucket: string):StorageManagement

cloudStorage(instance: AGCInstance):StorageManagement

cloudStorage(instance: AGCInstance, bucket: string):StorageManagement

开发者通过调用该方法可以将云存储服务实例化。不传参数时，将会使用默认的AGCInstance或者默认存储实例进行实例化。

**Parameters**

|**Name**|**Description**|
|:-------|:----------------|
|bucket|存储实例名。|
|instance|AGC SDK初始化和配置参数类。|

示例

```screen
var defaultStorage = agconnect.cloudStorage();
```

## Interface Summary

|Interface name|Interface description|
|:------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------|
|[ListOptions](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/harmonyos-ts-storage-listoptions-0000001471405346)|云端目录列举时的分页参数信息类。|
|[ListResult](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/harmonyos-ts-storage-listresult-0000001471565186)|列举云端目录时，该云端目录包含的文件和目录列表信息。|
|[StorageManagement](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/harmonyos-ts-storage-storagemanagement-0000001471086082)|为浏览器客户端提供支持上传下载文件功能的管理类。|
|[StorageReference](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/harmonyos-ts-storage-storagereference-0000001522126321)|云端文件的引用，提供对象的列举、上传、获取文件的下载地址、删除等各项操作的封装。|
|[UploadResult](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/harmonyos-ts-storage-uploadresult-0000001471245714)|上传文件的结果信息。|
|[UploadTask](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/harmonyos-ts-storage-uploadtask-0000001522285349)|上传文件的任务。|
|[Code](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/harmonyos-ts-storage-code-0000001522444833)|错误码定义信息。|

## Type Summary

|Class|Description|
|:----------------------------------------------------------------------------------------------------------------------------------------------------|:-----------|
|[AGConnectOptions](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/harmonyos-ts-storage-agconnectoptions-0000001522564921)|AGC SDK选项设置。|

## Enum Summary

|Enum|Description|
|:------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
|[AGCRoutePolicy](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/harmonyos-ts-storage-agcroutepolicy-0000001471405350)|路由地址枚举。|

