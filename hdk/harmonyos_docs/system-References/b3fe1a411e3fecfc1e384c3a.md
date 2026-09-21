---
name: document/cn/system-References/network-file-upload-putrequest-0000001091454059
title: PutRequest
uri: https://developer.huawei.com/consumer/cn/doc/system-References/network-file-upload-putrequest-0000001091454059
---

# PutRequest

|Class Info|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public final class PutRequest extends [BodyRequest](https://developer.huawei.com/consumer/cn/doc/system-References/network-file-upload-bodyrequest-0000001091597787) PUT方式上传文件的请求类。|

## Nested Class Summary

|Qualifier and Type|Class Name and Description|
|:------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public static final class|[PutRequest.Builder](https://developer.huawei.com/consumer/cn/doc/system-References/network-file-upload-putrequestbilder-0000001091392963) [PutRequest](https://developer.huawei.com/consumer/cn/doc/system-References/network-file-upload-putrequest-0000001091454059)的构造器。|

## Public Method Summary

|Qualifier and Type|Method Name and Description|
|:------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public List<[FileEntity](https://developer.huawei.com/consumer/cn/doc/system-References/network-file-upload-fileentity-0000001094891101)>|[getFileEntityList](#section668132695614)() 获取PUT请求待上传的文件（单个文件可能被拆分为多个文件的集合）。|
|public [PutRequest.Builder](https://developer.huawei.com/consumer/cn/doc/system-References/network-file-upload-putrequestbilder-0000001091392963)|[newBuilder](#section148471256305)() 构造[PutRequest.Builder](https://developer.huawei.com/consumer/cn/doc/system-References/network-file-upload-putrequestbilder-0000001091392963)实体类。|

## Public Methods

### getFileEntityList

|Method|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public List<[FileEntity](https://developer.huawei.com/consumer/cn/doc/system-References/network-file-upload-fileentity-0000001094891101)> getFileEntityList() 获取PUT请求待上传的文件（单个文件可能被拆分为多个文件的集合）。|

**Returns**

|Type|Description|
|:---------------------------------------------------------------------------------------------------------------------------------|:-------------|
|List<[FileEntity](https://developer.huawei.com/consumer/cn/doc/system-References/network-file-upload-fileentity-0000001094891101)>|PUT请求待上传的文件集合。|

### newBuilder

|Method|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public [PutRequest.Builder](https://developer.huawei.com/consumer/cn/doc/system-References/network-file-upload-putrequestbilder-0000001091392963) newBuilder() 构造[PutRequest.Builder](https://developer.huawei.com/consumer/cn/doc/system-References/network-file-upload-putrequestbilder-0000001091392963)实体类。|

**Returns**

|Type|Description|
|:-----------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------|
|[PutRequest.Builder](https://developer.huawei.com/consumer/cn/doc/system-References/network-file-upload-putrequestbilder-0000001091392963)|[PutRequest.Builder](https://developer.huawei.com/consumer/cn/doc/system-References/network-file-upload-putrequestbilder-0000001091392963)实体类。|

