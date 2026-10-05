---
name: document/cn/HiCar-References/transmission-single-progress-update-0000002630248146
title: onTransmissionSingleProgressUpdate
uri: https://developer.huawei.com/consumer/cn/doc/HiCar-References/transmission-single-progress-update-0000002630248146
---

# onTransmissionSingleProgressUpdate

|Method|
|:--------------------------------------------------------------------|
|void onTransmissionSingleProgressUpdate(int fileIndex, int progress);|
|文件传输过程中，当前传输的文件编号以及进度的回调，1s一次。|

**Parameters**

|Parameter name|Parameter type|Parameter desc|
|:-------------|:-------------|:------------------------------|
|fileIndex|int|传输中当前传输文件编号（第几个）。|
|progress|int|表示传输百分比的0~100的正整数，如50表示传输进度50%。|

