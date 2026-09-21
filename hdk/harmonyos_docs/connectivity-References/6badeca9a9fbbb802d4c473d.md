---
name: document/cn/connectivity-References/cancelfiletransfercallback-0000001093458245
title: CancelFileTransferCallBack
uri: https://developer.huawei.com/consumer/cn/doc/connectivity-References/cancelfiletransfercallback-0000001093458245
---

# CancelFileTransferCallBack

|-------------------------------------------|
|public interface CancelFileTransferCallBack|

取消发送文件的回调接口。

## Method Summary

|Modifier and Type|Method and Description|
|:----------------|:-------------------------------------------------------------------------------|
|void|[onCancelFileTransferResult](#section19719193003813)(int errCode) 取消发送文件的结果回调函数。|

## Method Detail

### onCancelFileTransferResult

void onCancelFileTransferResult(int errCode)

发送消息的结果回调函数。

**Parameters:**

|Parameter Name|Parameter Description|
|:-------------|:------------------------------------------------------------------------------------------------------------------------------------------|
|errCode|返回码，具体的值参见 [WearEngineErrorCode](https://developer.huawei.com/consumer/cn/doc/connectivity-References/wearengineerrorcode-0000001059980969)|

**Since:**

API level 5 (SDK 5.0.1.301)

