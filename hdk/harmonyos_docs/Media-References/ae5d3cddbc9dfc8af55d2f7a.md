---
name: document/cn/Media-References/init-buffer-time-down-0000001079047830
title: InitBufferTimeStrategy.DownloadMultipleZone
uri: https://developer.huawei.com/consumer/cn/doc/Media-References/init-buffer-time-down-0000001079047830
---

# InitBufferTimeStrategy.DownloadMultipleZone

|Class Info|
|:-------------------------------------------------------------------|
|public static class DownloadMultipleZone 下载速度相对播放流码率的倍速与起播缓冲时间的映射区段。|

## Public Constructor Summary

|Constructor Name|
|:--------------------------------------------------------------------------------------------------|
|[DownloadMultipleZone](#section114762417137)(int min, int max, int bufferTime) 下载倍速与起播缓冲时间映射区段构造方法。|

## Public Method Summary

|Qualifier and Type|Method Name and Description|
|:-----------------|:-------------------------------------------------------|
|int|[getMin](#section178633661513)() 获取区段最小下载倍速。|
|int|[getMax](#section161692438137)() 获取区段最大下载倍速。|
|int|[getBufferTime](#section49041539185714)() 获取区段对应的起播缓冲时间。|

## Public Constructors

### DownloadMultipleZone

|Constructor|
|:----------------------------------------------------------------------------------------|
|public DownloadMultipleZone(int min, int max, int bufferTime) 下载速度相对播放流码率的倍速与起播缓冲时间的映射区段。|

**Parameters**

|Name|Description|
|:---------|:---------------|
|min|区段最小下载倍速。|
|max|区段最大下载倍速。|
|bufferTime|下载倍速区段对应的起播缓冲时间。|

## Public Methods

### getMin

|Method|
|:------------------------------|
|public int getMin() 获取区段最小下载倍速。|

**Return** **s**

|Type|Description|
|:---|:----------|
|int|获取区段最小下载倍速。|

### getMax

|Method|
|:------------------------------|
|public int getMax() 获取区段最大下载倍速。|

**Return** **s**

|Type|Description|
|:---|:----------|
|int|获取区段最大下载倍速。|

### getBufferTime

|Method|
|:----------------------------------------|
|public int getBufferTime() 获取区段对应的起播缓冲时间。|

**Returns**

|Type|Description|
|:---|:-------------|
|int|获取区段对应的起播缓冲时间。|

