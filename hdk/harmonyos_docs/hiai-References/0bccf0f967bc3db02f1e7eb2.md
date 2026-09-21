---
name: document/cn/hiai-References/mlsounddector-0000001054212812
title: MLSoundDetector
uri: https://developer.huawei.com/consumer/cn/doc/hiai-References/mlsounddector-0000001054212812
---

# MLSoundDetector

|Class Info|
|:---------------------------------------------------|
|com.huawei.hms.mlsdk.sounddect.MLSoundDetector 声音识别。|

## Public Field Summary

|Qualifier and Type|Field and Description||
|:-----------------|:-|-|
|String|[RESULTS_RECOGNIZED](#section635891502717) 识别成功后获取到的声音类型key。||

## Public Method Summary

|Qualifier and Type|Method Name and Description|
|:--------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|static [MLSoundDetector](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlsounddector-0000001054212812)|[createSoundDetector](#section20125101892612)() 创建声音识别器。|
|void|[destroy](#section1673173632618)() 释放声音识别器资源。|
|void|[setSoundDetectListener](#section1322054362612)([MLSoundDetectListener](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlsounddetectlistener-0000001205036625) listener) 设置声音识别器回调监听。|
|boolean|[start](#section1734385411261)(Context context) 开始检测，麦克风拾取的实时音频数据。|
|void|[stop](#section12759252719)() 停止识别麦克风拾取的音频数据，并不会释放资源。|

## Public Fields

### RESULTS_RECOGNIZED

|Field|
|:-------------------------------------------------------------------------------------------------|
|public static final String RESULTS_RECOGNIZED 识别成功后获取到的声音类型key。 Constant Value: "results_Detector"|

## Public Methods

### createSoundDetector()

|Method|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public static [MLSoundDetector](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlsounddector-0000001054212812) createSoundDetector() 创建声音识别器。|

**Returns**

|Type|Description|
|:-------------------------------------------------------------------------------------------------------------------------|:----------|
|[MLSoundDetector](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlsounddector-0000001054212812)|声音识别实例。|

### destroy()

|Method|
|:-------------------------------|
|public void destroy() 释放声音识别器资源。|

### setSoundDetectListener(MLSoundDetectListener listener)

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public void setSoundDetectListener([MLSoundDetectListener](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlsounddetectlistener-0000001205036625) listener) 设置声音识别器回调监听。|

**Parameters**

|Name|Description|
|:-------|:----------|
|listener|回调函数。|

### start(Context context)

|Method|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public boolean start(Context context) 开始检测，麦克风拾取的实时音频数据，setSoundDetectListener([MLSoundDetectListener](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlsounddetectlistener-0000001205036625) listener)设置监听器才能接收结果。|

**Parameters**

|Name|Description|
|:------|:----------|
|context|上下文。|

**Returns**

|Type|Description|
|:------|:---------------------------------------------|
|boolean|开始声音识别服务结果。 * true：启动检测服务成功。 * false：启动检测服务失败。|

### stop()

|Method|
|:-----------------------------------------|
|public void stop() 停止识别麦克风拾取的音频数据，并不会释放资源。|

