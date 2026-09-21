---
name: document/cn/AppGallery-connect-References/harmonyos-java-storage-overview-0000001494662546
title: Overview
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/harmonyos-java-storage-overview-0000001494662546
---

# Overview

包含AppGallery Connect云存储功能的相关类。

## Exception Summary

|Exception|Description|
|:------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------|
|[StorageException](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/harmonyos-java-storage-storageexception-0000001494822430)|操作云存储的文件或目录的任务产生的错误消息和错误码定义。|

## Interface Summary

|Interface|Description|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------|
|[OnProgressListener](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/harmonyos-java-storage-onprogresslistener-0000001545502201)|任务运行过程中的监听器，用来刷新任务进度条。|
|[OnPausedListener](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/harmonyos-java-storage-onpausedlistener-0000001494982298)|暂停任务的监听器。|
|[StorageTask.ErrorResult](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/harmonyos-java-storage-storagetaskerrorresult-0000001495142206)|任务执行状态中的错误信息。|
|[StreamDownloadTask.StreamHandler](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/harmonyos-java-storage-streamdownloadtaskhandler-0000001545622137)|流式下载任务执行状态中的数据流处理接口。|

## Class Summary

|Class|Description|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------|
|[FileMetadata](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/harmonyos-java-storage-filemetadata-0000001545422341)|文件的元数据，不支持目录的元数据的相关操作。|
|[AGCStorageManagement](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/harmonyos-java-storage-agcstoragemanagement-0000001545702281)|为App提供支持上传下载文件功能的管理类。|
|[StorageReference](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/harmonyos-java-storage-storagereference-0000001494662550)|云端文件的引用，提供对象的列举、上传、下载、删除、元数据更新等各项操作的封装。|
|[StorageTask](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/harmonyos-java-storage-storagetask-0000001494822434)|任务的管理，提供存储任务的各种状态操作的封装。|
|[StorageTask.TimePointStateBase](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/harmonyos-java-storage-timepointstatebase-0000001545502205)|任务结果信息。|
|[DownloadTask](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/harmonyos-java-storage-downloadtask-0000001494982306)|下载任务。|
|[DownloadTask.DownloadResult](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/harmonyos-java-storage-downloadresult-0000001495142210)|下载任务的结果信息。|
|[StreamDownloadTask](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/harmonyos-java-storage-streamdownloadtask-0000001545622141)|流式下载任务。|
|[StreamDownloadTask.StreamDownloadResult](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/harmonyos-java-storage-streamdownloadresult-0000001545422345)|流式下载任务的结果信息。|
|[UploadTask](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/harmonyos-java-storage-uploadtask-0000001545702285)|上传任务。|
|[UploadTask.UploadResult](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/harmonyos-java-storage-uploadresult-0000001494662554)|上传任务的结果信息。|
|[ListResult](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/harmonyos-java-storage-listresult-0000001494822438)|包含文件和子目录信息的列表。|

