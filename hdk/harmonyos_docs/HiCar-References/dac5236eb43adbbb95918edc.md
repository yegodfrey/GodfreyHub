---
name: document/cn/HiCar-References/get-secure-file-size-0000001051477066
title: GetSecureFileSize
uri: https://developer.huawei.com/consumer/cn/doc/HiCar-References/get-secure-file-size-0000001051477066
---

# GetSecureFileSize

|Function|
|:-------------------------------------------------------------------|
|int32_t (*GetSecureFileSize)(const char* fileName, uint32_t nameLen)|
|获取HiCar鉴权认证中文件存储的大小。|

**Parameters**

|**Parameter name**|**Parameter type**|Parameter desc|
|:-----------------|:-----------------|:-------------|
|*filename|char|文件名。|
|nameLen|uint32_t|文件名长度。|

**Return**

|Type|Desc|
|:------|:-----------------------------------|
|int32_t|返回结果： * *-*1：文件不存在或获取错误 * 非-1：文件实际大小|

