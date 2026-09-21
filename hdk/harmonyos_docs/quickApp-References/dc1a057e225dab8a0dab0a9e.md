---
name: document/cn/quickApp-References/quickapp-api-request-0000001074629687
title: 上传下载
uri: https://developer.huawei.com/consumer/cn/doc/quickApp-References/quickapp-api-request-0000001074629687
---

# 上传下载

> 注意
>
> 此接口处理的数据在PC终端使用时，可能会被其它应用读取，所以建议请勿使用此接口存储敏感数据。

## 接口声明

在manifest.json文件的 features属性中增加如下配置。

```screen
{"name": "system.request"}
```

## 导入模块

在调用接口页面的<script>部分增加如下配置。

```screen
import request from '@system.request'
```

或

```screen
var request = require("@system.request")
```

## 使用限制

|限制条件|说明|
|:---|:----|
|使用终端|手机、平板|
|适用区域|全球|

## 接口定义

|接口|描述|
|:-----------------------------------------------------------|:------|
|[request.upload(OBJECT)](#section7186521625)|上传文件。|
|[request.download(OBJECT)](#section196441151161320)|下载文件。|
|[request.onDownloadComplete(OBJECT)](#section13319175061619)|监听下载任务。|

### request.upload(OBJECT)

**描述**

上传文件。

从1060版本开始，可以通过 manifest.json 的 [config.network](https://developer.huawei.com/consumer/cn/doc/quickApp-References/quickapp-manifest-0000001073698621#section169381859312) 进行网络超时的配置。

**OBJECT参数**

|参数|类型|是否必填|说明|
|:-------|:-------|:---|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|url|string|是|资源url。|
|header|object|否|请求的header，会将其所有属性设置到请求的header部分。useragent设置无效。|
|method|string|否|默认为POST，可以是： POST，PUT。|
|files|array|是|需要上传的文件列表，目前仅支持使用multipart/form-data方式提交。如果需要使用application/octet-stream方式，请使用"[数据请求](https://developer.huawei.com/consumer/cn/doc/quickApp-References/quickapp-api-fetch-0000001074421449)"API实现上传。files参数是一个file对象的数组，file对象的结构请参见"[files参数说明](#ZH-CN_TOPIC_0000001074629687__table1467319580616)"。|
|data|array|否|HTTP请求中其他额外的form data。|
|success|function|否|成功返回的回调函数。|
|fail|function|否|失败的回调函数。|
|complete|function|否|结束的回调函数（调用成功、失败都会执行）。|

**files参数说明：**

|参数|类型|是否必填|说明|
|:-------|:-----|:---|:-------------------------------------------------------------------------------|
|filename|string|否|multipart提交时，header中的文件名。如果文件名未填，默认从uri中获取文件名上传。|
|name|string|否|multipart提交时，表单的项目名，默认file。|
|uri|string|是|文件的本地地址。|
|type|string|否|文件的Content-Type格式，不填则会根据filename或uri的后缀从系统的映射表中查询对应的content-type，假如获取失败则报参数非法异常。|

**data说明：**

|参数|类型|是否必填|说明|
|:----|:-----|:---|:---------|
|name|string|是|form元素的名称。|
|value|string|是|form元素的值。|

**success返回值：**

|参数|类型|说明|
|:------|:-----|:-------------------------------------------------------------------------------------------------------------------------------------------------|
|code|number|服务器状态code。|
|data|string|如果服务器返回的header中type是text/*或application/json、application/javascript、application/xml，值是文本内容，否则是存储的临时文件的uri临时文件，如果是图片或者视频内容，可以将图片设置到image或video控件上显示。|
|headers|object|服务器response的所有header。|

**示例代码**

```screen
request.upload({
    url: "https://www.example.com",
    header: { "Accept-Encoding": "gzip, deflate", "Accept-Language": "zh-CN,en-US;q=0.8,en;q=0.6" },
    files: [
    {
        uri: "internal://xxx/xxx/test",
        name: "file1",
        type: "test.png"
    }
    ], data: [
    {
        name: "key1",
        value: "value1"
    }
    ],
    success: function (data) { 
        console.log("handling success"); 
    },
    fail: function (data, code) {
        console.log("handling fail, code=" + code);
    }
})
```

### request.download(OBJECT)

**描述**

下载文件。

下载后的文件存储在手机中，可通过文件管理器进入 /Android/data/com.huawei.fastapp.dev/files/fastappEngine/ 目录访问，如果用户没有清除快应用的数据，下载的文件将一直保存着。

**OBJECT参数**

|参数|类型|是否必填|说明|
|:------------------|:-------|:---|:--------------------------------------------------------------------------------------------------|
|url|string|是|资源url。|
|header|object|否|请求的header，会将其所有属性设置到请求的header部分。useragent设置无效。|
|description (1010+)|string|否|下载描述，用于通知栏标题，默认为文件名。|
|filename (1010+)|string|否|下载文件名，默认从网络请求或url中获取。 填写格式：文件名 或者 文件名.文件格式。 * 文件名：仅支持字母、数字、下划线 * 文件格式：必须是规范的文件格式，仅支持字母、数字，例如txt、mp4|
|success|function|否|成功返回的回调函数。|
|fail|function|否|失败的回调函数。|
|complete|function|否|结束的回调函数（调用成功、失败都会执行）。|

**success返回值：**

|参数|类型|说明|
|:----|:---------------------------------|:-----------------------|
|token|number（1076版本以前） string（从1076版本开始）|下载的token，根据此token获取下载状态。|

**示例代码**

```screen
request.download({
    url: "https://www.example.com",
    success: function (data) { 
        console.log("handling success" + data.token); 
    },
    fail: function (data, code) {
        console.log("handling fail, code=" + code);
    }
})
```

### request.onDownloadComplete(OBJECT)

监听下载任务。

**OBJECT参数**

|参数|类型|是否必填|说明|
|:-------|:-------|:---|:--------------------|
|token|string|是|download接口返回的token。|
|success|function|否|成功返回的回调函数。|
|fail|function|否|失败的回调函数。|
|complete|function|否|结束的回调函数（调用成功、失败都会执行）。|

**success返回值：**

|参数|类型|说明|
|:--|:-----|:----------------------------------------------------------------------------------------------------|
|uri|string|下载文件的Uri，会存储在文件组织的mass分区下。可通过文件管理器进入 /Android/data/com.huawei.fastapp.dev/files/fastappEngine/ 目录下查找。|

**fail返回错误码：**

|错误码|说明|
|:---|:-------|
|1000|下载失败。|
|1001|下载任务不存在。|

**示例代码**

```screen
request.onDownloadComplete({
    token: "123",
    success: function (data) {
        console.log("handling success" + data.uri);
    },
    fail: function (data, code) {
        console.log("handling fail, code=" + code);
    }
})
```

## 安全要求

对于HTTPS请求，对证书要求如下：

* HTTPS证书必须有效。证书必须被系统信任，不支持自签名证书，部署SSL证书的网站域名必须与证书颁发的域名一致，证书必须在有效期内。
* 从1200版本开始，TLS必须支持1.2及以上版本，请确保HTTPS服务器的TLS版本能够同时支持TLS1.2及以下版本。 从安全性考虑，建议也支持TLS1.3。1200及以上版本在配置加密套件时排除不安全算法：TEA/DES/DESX/DES40/RC2/RC4/RIPEMD/NULL/SHA0/MD2/MD4/MD5/ANON/TLS_EMPTY_RENEGOTIATION_INFO_SCSV；1200以下版本在配置加密套件时排除不安全算法：TEA/DES/DESX/DES40/RC2/RC4/RIPEMD/eNULL/aNULL/NULL/SHA0/MD2/MD4/MD5/ANON/TLS_EMPTY_RENEGOTIATION_INFO_SCSV。部分CA可能不被操作系统信任，请开发者在选择证书时注意操作系统的相关通告。

## Demo

```screen
<template>
    <div>
        <div>
            <text>{{componentName}}</text>
        </div>
        <div>
            <div>
                <text>下载文件：{{fileDownloadData}}</text>
            </div>
            <input type="button" onclick="downloadFile" value="下载文件"/>
            <div>
                <text>下载文件路径：{{fileDownloadUri}}</text>
            </div>
            <input type="button" onclick="downloadFileComplete" value="下载文件状态"/>
            <div>
                <text>上传文件：{{fileUploadData}}</text>
            </div>
            <input type="button" onclick="uploadFile" value="上传文件"/>
        </div>
    </div>
</template>
<style>
    @import '../Common/css/common.css';
    .item-container {
        margin-bottom: 50px;
        margin-right: 60px;
        margin-left: 60px;
        flex-direction: column;
    }
    .item-content {
        flex-direction: column;
        background-color: #ffffff;
        padding-left: 30px;
        padding-right: 30px;
        padding-top: 20px;
        padding-bottom: 20px;
        margin-bottom: 30px;
        align-items: flex-start;
    }
    .txt {
        lines: 5;
        padding-top: 15px;
        padding-bottom: 15px;
    }
</style>
<script>
    import request from '@system.request'
    import prompt from '@system.prompt'
    export default {
        data: {
            componentName: 'request',
            fileDownloadData: '',
            fileUploadData: '',
            fileDownloadUri:""
        },
        onInit: function () {
            this.$page.setTitleBar({ text: 'request' })
        },
        downloadFile: function () {
            var that = this;
            // 下载文件，存储在本地
          request.download({
                url: 'https://www.huawei.com/Assets/CBG/img/logo.png',
                description: 'This is description.',
                filename: 'HuaweiLogo.png',
                success: function (ret) {
                    that.fileDownloadData = ret.token;
                    console.log('file_download_data--------' + JSON.stringify(ret.token));
                    prompt.showToast({
                        message: 'file_download_data--------' + JSON.stringify(ret.token)
                    })
                },
              fail: function (errmsg, errcode) {
                  prompt.showToast({
                      message: "下载失败："+errcode + ': ' + errmsg
                  })
              }
            })
        },
        downloadFileComplete: function () {
            var that = this;
            // 下载文件，存储在本地
            console.log('下载文件');
            request.onDownloadComplete({
                token:that.fileDownloadData,
                success: function (ret) {
                    that.fileDownloadUri = ret.uri;
                    console.log('fileDownloadUri--------' + JSON.stringify(ret.uri));
                    prompt.showToast({
                        message: 'fileDownloadUri--------' + JSON.stringify(ret.uri)
                    })
                },
                fail: function (errmsg, errcode) {
                    prompt.showToast({
                        message: "下载失败："+errcode + ': ' + errmsg
                    })
                }
            })
        },
        uploadFile() {
            var that = this;
            // 上传下载好的本地文件．其中，data为请求的参数，files为需要上传的文件列表
            request.upload({
                url: "https://117.78.33.207:48080/uploadDemo/api/uploadFile",
                header:{"Accept-Encoding": "gzip, deflate","Accept-Language": "zh-CN,en-US;q=0.8,en;q=0.6"},
                files: [
                    {
                        uri: that.fileDownloadUri,
                        name: "component_test.png",
                        type:"multipart/form-data"
                    }
                ],
                success: function (ret) {
                    that.fileUploadData = ret.data;
                }
            })
        }
    }
</script>
```

## 版本更新说明

|版本|发布日期|描述|
|:---|:---------|:------------------------------------------------------------|
|1010|2018-04-20|request.download接口新增description和filename参数，可供开发者设置下载描述和下载文件名。|

## 相关链接

### FAQ

* [使用request.download下载文件成功后，使用file.move进行移动失败，提示src无效，如何处理？](https://developer.huawei.com/consumer/cn/doc/quickApp-Guides/quickapp-faq-0000001129279483#section139217016578)
* [快应用调用request.upload接口上传文件，但是服务器接收的form-data为空，如何处理？](https://developer.huawei.com/consumer/cn/doc/quickApp-Guides/quickapp-faq-0000001129279483#section133895163910)

### 案例

[调用文件下载接口下载的图片无法显示](https://developer.huawei.com/consumer/cn/doc/quickApp-Guides/quickapp-case-0000001082020374#section173231435141919)

