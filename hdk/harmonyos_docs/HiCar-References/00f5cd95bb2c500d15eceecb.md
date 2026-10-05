---
name: document/cn/HiCar-References/on-receive-file-share-request-0000002510921749
title: onReceiveFileShareRequest
uri: https://developer.huawei.com/consumer/cn/doc/HiCar-References/on-receive-file-share-request-0000002510921749
---

# onReceiveFileShareRequest

|Method|
|:-----------------------------------------------------------|
|void onReceiveFileShareRequest(List<FileInfo> fileInfoList);|
|收到手机侧发送文件请求，车机可在此回调中弹框提示用户是否同意接收文件。|

**Parameters**

|Parameter name|Parameter type|Parameter desc|
|:-------------|:-------------|:--------------------------------------------------------------------------------------------|
|fileInfoList|List<FileInfo>|收到文件的基本信息的列表，每个FileInfo对象包含：文件名、文件大小、文件类型、文件缩略图。车机可通过遍历fileInfoList来计算总的传输文件的大小和获取文件个数、类型等信息。|

**FileInfo**类代码说明如下：

```screen
public class FileInfo {
    String fileName;
    long fileSize;
    int fileType;
    byte[]thumbnail;
}
```

|**参数名**|**类型**|**说明**|
|:--------|:-----|:------------------|
|fileName|String|文件名|
|fileSize|long|该文件的大小。单位：字节。|
|fileType|int|* 0：图片文件。 * 1：视频文件。|
|thumbnail|byte[]|文件缩略图。|
[**表1**FileInfo类说明]

