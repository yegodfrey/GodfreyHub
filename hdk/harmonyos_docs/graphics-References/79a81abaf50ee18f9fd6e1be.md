---
name: document/cn/graphics-References/get-hvr-sdk-version-0000001205885577
title: GetHvrSdkVersion
uri: https://developer.huawei.com/consumer/cn/doc/graphics-References/get-hvr-sdk-version-0000001205885577
---

# GetHvrSdkVersion

GetHvrSdkVersion()函数用于获取SDK 3.5版本号。

## Return Values

调用函数成功返回HVR SDK版本号字符串，失败返回空字符串。

## Examples

```screen
string version = HvrApi.GetHvrSdkVersion();
Debug.Log ("SDK 3.5 version:"+ version);
```

