---
name: document/cn/hiai-References/mlremoteaftresult-segment-0000001050975463
title: MLRemoteAftResult.Segment
uri: https://developer.huawei.com/consumer/cn/doc/hiai-References/mlremoteaftresult-segment-0000001050975463
---

# MLRemoteAftResult.Segment

|Class Info|
|:--------------------------------------------------------------------|
|com.huawei.hms.mlsdk.aft.cloud.MLRemoteAftResult.Segment 每段音频的文字转写结果。|

#### Public Method Summary

|Qualifier and Type|Method Name and Description|
|:-----------------|:--------------------------------------------------------------------------|
|int|[getEndTime](#section11787815114612)() 获取语音分段转写结果最后一个文字相对于音频开始点的偏移值（单位：毫秒）。|
|int|[getStartTime](#section920303011464)() 获取语音分段转写结果首个文字相对于音频开始点的偏移值（单位：毫秒）。|
|String|[getText](#section1211404274613)() 获取语音分段转写结果。|

#### Public Methods

#### getEndTime()

|Method|
|:-----------------------------------------------------------|
|public int getEndTime() 获取语音分段转写结果最后一个文字相对于音频开始点的偏移值（单位：毫秒）。|

Returns  

|Type|Description|
|:---|:---------------------------------|
|int|音频分段转写结果最后一个文字相对于音频开始点的偏移值（单位：毫秒）。|

#### getStartTime()

|Method|
|:-----------------------------------------------------------|
|public int getStartTime() 获取语音分段转写结果首个文字相对于音频开始点的偏移值（单位：毫秒）。|

Returns  

|Type|Description|
|:---|:-------------------------------|
|int|语音分段转写结果首个文字相对于音频开始点的偏移值（单位：毫秒）。|

#### getText()

|Method|
|:----------------------------------|
|public String getText() 获取语音分段转写结果。|

Returns  

|Type|Description|
|:-----|:----------|
|String|语音分段转写结果。|

