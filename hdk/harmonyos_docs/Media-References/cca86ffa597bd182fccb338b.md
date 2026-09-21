---
name: document/cn/Media-References/haeequalizerstream-0000001145167032
title: HAEEqualizerStream
uri: https://developer.huawei.com/consumer/cn/doc/Media-References/haeequalizerstream-0000001145167032
---

# HAEEqualizerStream

|Class Info|
|:----------------------------------------|
|public class HAEEqualizerStream 均衡器的流式接口。|

## Public Constructor Summary

|Constructor Name|
|:---------------------------------------------------------|
|[HAEEqualizerStream](#section114762417137)() 均衡器的流式接口构造方法。|

## Public Method Summary

|Qualifier and Type|Method Name and Description|
|:-----------------|:--------------------------------------------------------------------------------------------------|
|byte[]|[applyPcmData](#section13680738155)(byte[] pcmData) 将输入的PCM数据进行均衡处理。|
|void|[release](#section185544015260)() 释放均衡器资源。|
|int|[setAudioFormat](#section2146125181416)(int bitDepth, int channelCount, int sampleRate) 设置均衡时的音频格式。|
|int|[setEqParams](#section13912810182811)(int[] newParams) 设置均衡器参数。|

## Public Constructors

### HAEEqualizerStream

|Constructor|
|:----------------------------------------|
|public HAEEqualizerStream() 均衡器的流式接口构造方法。|

## Public Methods

### applyPcmData

|Method|
|:----------------------------------------------------------|
|public byte[] applyPcmData(byte[] pcmData) 将输入的PCM数据进行均衡处理。|

**Parameters**

|Name|Description|
|:------|:----------|
|pcmData|输入的PCM数据。|

**Returns**

|Type|Description|
|:-----|:-----------|
|byte[]|均衡处理后的PCM数据。|

### release

|Method|
|:-----------------------------|
|public void release() 释放均衡器资源。|

### setAudioFormat

|Method|
|:--------------------------------------------------------------------------------------------|
|public int setAudioFormat(int bitDepth, int channelCount, int sampleRate) 设置均衡时的音频格式，只需要调用一次。|

**Parameters**

|Name|Description|
|:-----------|:--------------------------------------------------------------------------------------|
|bitDepth|输入数据的位深，支持8、16、24、32位。|
|channelCount|输入数据通道数，单通道，双通道。|
|sampleRate|输入数据的采样率，支持7350、8000、11025、12000、16000、22050、24000、32000、44100、48000、64000、88200、96000。|

**Returns**

|Type|Description|
|:---|:-----------------------------------------------------------------------------------------------------------------------------------------|
|int|设置音频格式参数后的结果。详细信息及解决方法请参见[错误码](https://developer.huawei.com/consumer/cn/doc/development/Media-References/error-code-api-0000001110802270)。|

### setEqParams

|Method|
|:-----------------------------------------------|
|public int setEqParams(int[] newParams) 设置均衡器参数。|

**Parameters**

|Name|Description|
|:--------|:--------------------------------------------------------------------------------------------------------------------------------------|
|newParams|均衡器参数。请参见[AudioParameters](https://developer.huawei.com/consumer/cn/doc/development/Media-References/audioparameters-0000001193260789)。|

**Returns**

|Type|Description|
|:---|:---------------------------------------------------------------------------------------------------------------------------------|
|int|设置结果。详细信息及解决方法请参见[错误码](https://developer.huawei.com/consumer/cn/doc/development/Media-References/error-code-api-0000001110802270)。|

