---
name: document/cn/AppGallery-connect-References/harmonyos-ts-storage-downloadparam-0000001631142846
title: DownloadParam
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/harmonyos-ts-storage-downloadparam-0000001631142846
---

# DownloadParam

|Interface Info|
|:----------------------------------------|
|export interface DownloadParam 下载操作的相关参数。|

## Parameters

|Name|Type|Mandatory/Optional (M/O)|Description|
|:-----------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------|:---------------------------|
|localPath|string|M|手机的本地路径，仅支持文件的应用沙箱路径。|
|cloudPath|string|M|对应的云端绝对路径，如"image/demo.jpg"。|
|onDownloadProgress|(p: [ProgressEvent](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/harmonyos-ts-storager-processevent-0000001631462714))=> void|O|下载进度的回调函数。|

