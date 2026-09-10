---
name: document/cn/AppGallery-connect-References/agcapi-cloudhost-uploadversion-0000001211707813
title: 上传版本压缩包
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agcapi-cloudhost-uploadversion-0000001211707813
---

# 上传版本压缩包

#### 功能介绍

通过[获取上传地址](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agcapi-cloudhost-uploadurl-0000001166347942)的响应请求地址、请求方法、请求头信息，上传版本压缩包至云托管。  

#### 使用约束

在获取上传地址时响应的[请求头](#ZH-CN_TOPIC_0000001211707813__table8419125694713)中，"Authorization"参数的token有效期为30分钟。  

#### 接口原型

|承载协议|HTTPS PUT|
|接口方向|开发者服务器 -\> 华为服务器|
|接口URL|${[uploadInfo](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agcapi-cloudhost-uploadurl-0000001166347942#ZH-CN_TOPIC_0000001166347942__table13671116153911).url}|
|数据格式|请求：Content-Type: application/json 响应：Content-Type: application/json|
|-----|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|

#### 请求参数

#### Header

|参数名称|必选(M)/可选(O)|类型|参数说明|
|:----------------------|:----------|:-----|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|Authorization|M|String|校验信息，对应[获取版本压缩包上传地址](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agcapi-cloudhost-uploadurl-0000001166347942)接口返回的headers参数中的Authorization。|
|x-amz-content-sha256|M|String|文件对象内容的SHA256哈希值，对应[获取版本压缩包上传地址](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agcapi-cloudhost-uploadurl-0000001166347942)接口返回的headers参数中的x-amz-content-sha256。|
|x-amz-client-request-id|M|String|文件上传的唯一标识，对应[获取版本压缩包上传地址](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agcapi-cloudhost-uploadurl-0000001166347942)接口返回的headers参数中的x-amz-client-request-id。|
|x-amz-date|M|String|文件上传地址生成的时间，对应[获取版本压缩包上传地址](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agcapi-cloudhost-uploadurl-0000001166347942)接口返回的headers参数中的x-amz-date。|
|Host|M|String|上传服务器地址，对应[获取版本压缩包上传地址](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agcapi-cloudhost-uploadurl-0000001166347942)接口返回的headers参数中的Host。|
|Content-Type|M|String|对象内容的类型，对应[获取版本压缩包上传地址](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agcapi-cloudhost-uploadurl-0000001166347942)接口返回的headers参数中的Content-Type。|

#### Body

|参数名称|必选(M)/可选(O)|类型|参数说明|
|:------|:----------|:-----|:------|
|${file}|M|Binary|增量版本文件。|

#### 请求示例

```
curl --location --request PUT 'https://content***********.com/hosting_HostVersion_904_9/23/v3/M3qacR6QTt27PLe47x4FAA/test1.zip' \
--header 'Authorization: AWS4-HMAC-SHA256 Credential=I06FN**********************_request, SignedHeaders=content-length;content-type;host;user-agent;x-amz-client-request-id;x-amz-content-sha256;x-amz-date, Signature=6faf12cf49a84e536e884677a6c2d43206bb2cea5dbe4be2f8eca93624c80ff7' \
--header 'x-amz-content-sha256: 20a390d44f078e805de31c2108a0b3b77384e50469396adfc9e6500b22a18e8b' \
--header 'x-amz-client-request-id: MaU70G-8S62Y-ZtCuMKDjQ' \
--header 'x-amz-date: 20210824T061826Z' \
--header 'Host: content***********.com' \
--header 'Content-Type: application/zip' \
--header 'connection: close' \
--data-binary '@/C:/Users/Desktop/hosting/test1.zip'
```

#### 响应参数

成功上传后会返回 "200 OK HTTPS" 响应，无响应体。

上传失败响应内容：  

|类型|必选(M)/可选(O)|参数说明|
|:--|:----------|:-------|
|xml|O|上传失败的描述。|

#### 响应示例

#### 成功示例

```
HTTPS/1.1 200 OK
```

#### 失败示例

```
HTTPS/1.1 403 Forbidden

<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Error><Code>RequestTimeTooSkewed</Code><Message>The difference between the request time and the current time is too large.</Message><RequestId>0000017C7CCDB5B7804FB8999087250B</RequestId><HostId>b2mYGM1RhdcyhPNXOpuOSYVonBRXWAowp5FlInLyRzUOf9pJq1g02DoSkcewFIKF</HostId><MaxAllowedSkewMilliseconds>900000</MaxAllowedSkewMilliseconds><RequestTime>20210824T061826Z</RequestTime><ServerTime>2021-10-14T03:17:08.663Z</ServerTime></Error>
```

