---
name: document/cn/AppGallery-connect-References/storagetask-timepointstatebase-0000001055567206
title: StorageTask.TimePointStateBase
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/storagetask-timepointstatebase-0000001055567206
---

# StorageTask.TimePointStateBase

|Class Info|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public class StorageTask.TimePointStateBase implements StorageTask.ErrorResult 任务结果信息，是[DownloadTask.DownloadResult](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/downloadtask-downloadresult-0000001055088628)和[UploadTask.UploadResult](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/uploadtask-uploadresult-0000001055407220)的父类。|

#### Constructor Summary

|Constructor Info|
|:-----------------------------------------------------------------------------------------|
|public [TimePointStateBase](#section7428193353716)(Exception error) 初始化TimePointStateBase。|

#### Method Summary

|Qualifier and Type|Method Name and Description|
|:-------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------|
|StorageTask\<TResult\>|[getTask](#section012312924313)() 获取该任务的StorageTask实例。|
|[StorageReference](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/storagereference-0000001054767243)|[getStorage](#section1819529164915)() 获取该任务对应的引用。|
|Exception|[getError](#section347811309498)() 获取异常信息。|

#### Constructors

#### TimePointStateBase

|Method|
|:----------------------------------------------------------------|
|public TimePointStateBase(Exception error) 初始化TimePointStateBase。|

Parameters  

|Name|Description|
|:----|:----------|
|error|异常信息。|

#### Methods

#### getTask

|Method|
|:-----------------------------------------------------------|
|public StorageTask\<TResult\> getTask() 获取该任务的StorageTask实例。|

Return  

|Type|Description|
|:---------------------|:---------------|
|StorageTask\<TResult\>|返回StorageTask实例。|

#### getStorage

|Method|
|:-----------------------------------------------|
|public StorageReference getStorage() 获取该任务对应的引用。|

Return  

|Type|Description|
|:-------------------------------------------------------------------------------------------------------------------------------|:--------------------|
|[StorageReference](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/storagereference-0000001054767243)|返回StorageReference实例。|

#### getError

|Method|
|:----------------------------------|
|public Exception getError() 获取异常信息。|

Return  

|Type|Description|
|:--------|:------------------|
|Exception|包含异常信息的Exception实例。|

