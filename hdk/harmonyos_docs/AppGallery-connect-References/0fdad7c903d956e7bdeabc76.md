---
name: document/cn/AppGallery-connect-References/recordparam-common-model-0000001637926932
title: RecordParam
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/recordparam-common-model-0000001637926932
---

# RecordParam

|class Info|
|:-------------------------------|
|public class RecordParam 视频录制参数。|

#### Property Summary

|Name|Type|Mandatory/Optional|Description|
|:-------|:-------|:-----------------|:-----------------------------------------------|
|duration|Int|Mandatory|手动录制的最大时长，最长1小时，单位：s。|
|fileName|String|Mandatory|录制的文件名，以.mp4结尾。|
|activity|Activity|Optional|当前录制画面的Activity。为null则采用系统录制模式，不为null则采用应用内录制模式。|

