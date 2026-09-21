---
name: document/cn/hiai-References/mldocumentinterval-harmonyos-0000001201277780
title: MLDocument.Interval
uri: https://developer.huawei.com/consumer/cn/doc/hiai-References/mldocumentinterval-harmonyos-0000001201277780
---

# MLDocument.Interval

|-----------------------------------------------------------------------------------------|
|com.huawei.hms.mlsdk.document.MLDocument.Interval 用于表示文本间隔，包含3种类型： * 空格。 * 换行符。 * 未知类型间隔。|

## Public Field Summary

|Qualifier and Type|Field and Description|
|:-----------------|:-----------------------------------------------|
|int|[NEW_LINE_CHARACTER](#section1050619511334) 换行符。|
|int|[OTHER](#section20506321041) 未知类型间隔。|
|int|[SPACE](#section1735401015415) 空格。|

## Public Method Summary

|Qualifier and Type|Method Name and Description|
|:-----------------|:--------------------------------------------------------|
|int|[getIntervalType](#section28015211747)() 获取检测出的文本间隔类型。|
|boolean|[isTextFollowed](#section12585143314416)() 判断文本间隔后是否还有文本。|

## Public Fields

### NEW_LINE_CHARACTER

|Field|
|:----------------------------------------------------------------|
|public static final int NEW_LINE_CHARACTER 换行符。 Constant Value: 8|

### OTHER

|Field|
|:------------------------------------------------------|
|public static final int OTHER 未知类型间隔。 Constant Value: 5|

### SPACE

|Field|
|:--------------------------------------------------|
|public static final int SPACE 空格。 Constant Value: 6|

## Public Methods

### getIntervalType()

|Method|
|:-----------------------------------------|
|public int getIntervalType() 获取检测出的文本间隔类型。|

**Returns**

|Type|Description|
|:---|:----------------------------------------------------------------|
|int|返回文本间隔类型，包括： * SPACE（空格）。 * NEW_LINE_CHARACTER（换行符）。 * OTHER（未知）。|

### isTextFollowed()

|Method|
|:---------------------------------------------|
|public boolean isTextFollowed() 判断文本间隔后是否还有文本。|

**Returns**

|Type|Description|
|:------|:-----------------------------------|
|boolean|* true：文本间隔后还有文本。 * false：文本间隔后没有文本。|

