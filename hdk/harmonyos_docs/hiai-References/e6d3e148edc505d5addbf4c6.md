---
name: document/cn/hiai-References/mlsdk-si-recognizer-0000001307429561
title: MLSimultaneousInterpretationRecognizer
uri: https://developer.huawei.com/consumer/cn/doc/hiai-References/mlsdk-si-recognizer-0000001307429561
---

# MLSimultaneousInterpretationRecognizer

|Class Info|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|com.huawei.hms.mlsdk.si.speech.MLSimultaneousInterpretationRecognizer 同声传译识别器。通过[startRecognizing](#section146779311786)(config)开始收听识别语音，开始前需要先设置监听器[setMLSimultaneousInterpretationListener](#section985618324550)([MLSimultaneousInterpretationListener](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlsdk-si-mlsimlistener-0000001307109497) listener)。|

## Public Method Summary

|Qualifier and Type|  |
|:--------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|static MLSimultaneousInterpretationRecognizer|[getInstance()](#section1261484018307) 创建一个新的同传识别器。|
|void|[destroy()](#section56715312412) 销毁同传识别器对象。|
|void|[setMLSimultaneousInterpretationListener](#section985618324550)([MLSimultaneousInterpretationListener](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlsdk-si-mlsimlistener-0000001307109497) listener) 设置识别器监听回调，用于接收识别结果和错误码。|
|void|[startRecognizing](#section146779311786)([MLSimultaneousInterpretationConfig](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/si-class-config-0000001318354685) config) 开始收听语音。|

## Public Methods

## getInstance()

|Method|
|:--------------------------------------------------------------------------------------------------------------------|
|public static MLSimultaneousInterpretationRecognizer getInstance() 创建一个新的同传识别器MLSimultaneousInterpretationRecognizer。|

**Returns**

|Type|Description|
|:-------------------------------------|:----------|
|MLSimultaneousInterpretationRecognizer|一个新的同传识别器。|

## destroy()

|Method|
|:-------------------------------|
|public void destroy() 销毁同传识别器对象。|

## setMLSimultaneousInterpretationListener

|Method|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public void setMLSimultaneousInterpretationListener([MLSimultaneousInterpretationListener](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlsdk-si-mlsimlistener-0000001307109497) listener) 设置同传识别器监听回调，用于接收识别结果和错误码。|

**Parameters**

|Name|Description|
|:-------|:----------------|
|listener|用于从同传识别器接收结果的监听器。|

## startRecognizing

|Method|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public void startRecognizing([MLSimultaneousInterpretationConfig](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/si-class-config-0000001318354685) config) 开始收听语音。[setMLSimultaneousInterpretationListener](#section985618324550)([MLSimultaneousInterpretationListener](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlsdk-si-mlsimlistener-0000001307109497) listener)设置监听器才能接收结果。|

**Parameters**

|Name|Description|
|:-----|:------------------------------------------------------|
|config|config中包含用于执行识别的参数。 当前携带参数如下： * 源语种 * 目标语种 * 识别类型 * 发音人|

