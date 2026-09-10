---
name: document/cn/hiai-References/mllocaltranslator-0000001050201828
title: MLLocalTranslator
uri: https://developer.huawei.com/consumer/cn/doc/hiai-References/mllocaltranslator-0000001050201828
---

# MLLocalTranslator

|Class Info|
|:------------------------------------------------------------------------------------|
|com.huawei.hms.mlsdk.translate.local.MLLocalTranslator 本地离线文本翻译器，根据提供的文本，从源语言转换为目标语言。|

#### Public Method Summary

|Qualifier and Type|Method Name and Description|
|:---------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|[Task](https://developer.huawei.com/consumer/cn/doc/development/hmscore-common-References/task_tresult-0000001050121148)\<String\>|[asyncTranslate](#section122921226134212)(String text) 文本异步翻译。|
|[Task](https://developer.huawei.com/consumer/cn/doc/development/hmscore-common-References/task_tresult-0000001050121148)\<Void\>|[preparedModel](#section1838317010436)() 如果设备不存在翻译需要的模型，并且当前设备网络正常，则触发下载模型。|
|[Task](https://developer.huawei.com/consumer/cn/doc/development/hmscore-common-References/task_tresult-0000001050121148)\<Void\>|[preparedModel](#section176221412124315)([MLModelDownloadStrategy](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlmodeldownloadstrategy-0000001050204147) strategy) 如果设备不存在翻译需要的模型，并且当前设备满足指定的下载条件，则触发下载模型。|
|[Task](https://developer.huawei.com/consumer/cn/doc/development/hmscore-common-References/task_tresult-0000001050121148)\<Void\>|[preparedModel](#section788116548476)(final [MLModelDownloadStrategy](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlmodeldownloadstrategy-0000001050204147) strategy,final [MLModelDownloadListener](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlmodeldownloadlistener-0000001159836566) listener) 如果设备不存在翻译需要的模型，并且当前设备满足指定的下载条件，则触发下载模型，并且返回下载监听进度。|
|void|[stop](#section8890162854310)() 释放资源，包括释放输入输出流资源。|
|String|[syncTranslate](#section783712143167)(String text) throws [MLException](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlexception-0000001050169383) 文本同步翻译。|

#### Public Methods

#### asyncTranslate(String text)

|Method|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public [Task](https://developer.huawei.com/consumer/cn/doc/development/hmscore-common-References/task_tresult-0000001050121148)\<String\> asyncTranslate(String text) 文本异步翻译。接口返回的错误码可以参见[错误码](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlsdktranslatelocal-errorcode-0000001059087048)进行处理。|

Parameters  

|Name|Description|
|:---|:----------|
|text|待翻译文本。|

Returns  

|Type|Description|
|:---------------------------------------------------------------------------------------------------------------------------------|:-----------|
|[Task](https://developer.huawei.com/consumer/cn/doc/development/hmscore-common-References/task_tresult-0000001050121148)\<String\>|包含翻译结果的任务对象。|

#### preparedModel()

|Method|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public [Task](https://developer.huawei.com/consumer/cn/doc/development/hmscore-common-References/task_tresult-0000001050121148)\<Void\> preparedModel() 如果设备不存在翻译需要的模型，并且当前设备网络正常，则触发下载模型。|

Returns  

|Type|Description|
|:-------------------------------------------------------------------------------------------------------------------------------|:------------|
|[Task](https://developer.huawei.com/consumer/cn/doc/development/hmscore-common-References/task_tresult-0000001050121148)\<Void\>|操作完成后返回的任务对象。|

#### preparedModel(MLModelDownloadStrategy strategy)

|Method|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public [Task](https://developer.huawei.com/consumer/cn/doc/development/hmscore-common-References/task_tresult-0000001050121148)\<Void\> preparedModel([MLModelDownloadStrategy](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlmodeldownloadstrategy-0000001050204147) strategy) 如果设备不存在翻译需要的模型，并且当前设备满足指定的下载条件，则触发下载模型。|

Parameters  

|Name|Description|
|:-------|:---------------|
|strategy|指定的下载条件，可以为null。|

Returns  

|Type|Description|
|:-------------------------------------------------------------------------------------------------------------------------------|:------------|
|[Task](https://developer.huawei.com/consumer/cn/doc/development/hmscore-common-References/task_tresult-0000001050121148)\<Void\>|操作完成后返回的任务对象。|

#### preparedModel(final MLModelDownloadStrategy strategy, final MLModelDownloadListener listener)

|Method|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public [Task](https://developer.huawei.com/consumer/cn/doc/development/hmscore-common-References/task_tresult-0000001050121148)\<Void\> preparedModel(final [MLModelDownloadStrategy](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlmodeldownloadstrategy-0000001050204147) strategy, final [MLModelDownloadListener](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlmodeldownloadlistener-0000001159836566) listener) 如果设备不存在翻译需要的模型，并且当前设备满足指定的下载条件，则触发下载模型。|

Parameters  

|Name|Description|
|:-------|:------------------------------------------------|
|strategy|指定的下载条件，可以为null。|
|listener|指定模型下载进度回调监听器，可以通过实现该监听器的onProcess接口获取下载进度并做相应处理。|

Returns  

|Type|Description|
|:-------------------------------------------------------------------------------------------------------------------------------|:------------|
|[Task](https://developer.huawei.com/consumer/cn/doc/development/hmscore-common-References/task_tresult-0000001050121148)\<Void\>|操作完成后返回的任务对象。|

#### stop()

|Method|
|:-----------------------------------|
|public void stop() 释放资源，包括释放输入输出流资源。|

#### syncTranslate(String text)

|Method|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public String syncTranslate(String text) throws [MLException](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlexception-0000001050169383) 文本同步翻译。由于翻译过程可能耗费较多时间，建议不要在UI线程中调用该接口。|

Parameters  

|Name|Description|
|:---|:----------|
|text|待翻译文本。|

Returns  

|Type|Description|
|:-----|:----------|
|String|翻译结果。|

Throws  

|Type|Description|
|:-------------------------------------------------------------------------------------------------------------------|:--------------|
|[MLException](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlexception-0000001050169383)|执行过程中发生错误，抛出异常。|

