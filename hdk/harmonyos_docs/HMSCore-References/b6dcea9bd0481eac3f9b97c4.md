---
name: document/cn/HMSCore-References/server-api-filesdelete-0000001050153647
title: Files:delete
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-References/server-api-filesdelete-0000001050153647
---

# Files:delete

#### 功能介绍

删除文件。  

#### 场景描述

您的应用可以通过Files.delete接口删除文件。  

#### 使用约束

* 只能删除普通目录，并且是递归删除，不包括根目录。
* Scope至少包含下面其中一个：
  * https://www.huawei.com/auth/drive.appdata
  * https://www.huawei.com/auth/drive.file
* https://www.huawei.com/auth/drive  

#### 接口原型

|承载协议|HTTP DELETE|
|接口方向|开发者服务器-\>华为云空间服务器|
|接口URL|https://driveapis.cloud.huawei.com.cn/drive/v1/files/{fileId}|
|数据格式|请求消息：Content-Type: application/json 响应消息：Content-Type: application/json|
|-----|-----------------------------------------------------------------------|

#### 路径参数

|参数|是否必选|参数类型|描述|
|:-----|:---|:-----|:----|
|fileId|是|string|文件ID。|

#### 查询参数

|参数|是否必选|参数类型|描述|
|:----------|:---|:------|:----------------------------------|
|fields|否|string|采用\[Partial-response格式\]，具体使用见公共说明。|
|form|否|string|媒体格式。|
|prettyPrint|否|boolean|是否以美观格式输出。|
|quotaId|否|string|用户标识，小于40个字符。用于限制单个用户的API访问数量。|
|callback|否|string|JSONP的callback函数。|

#### 请求参数

Request Header  

|参数|是否必选|参数类型|描述|
|:------------------|:---|:-----|:-----------------------------------|
|Authorization|是|string|用户鉴权信息 AccessToken（即AT）|
|x-hw-trace-id|否|string|业务跟踪id。|
|x-hw-app-id|否|string|应用的appid。|
|version|否|string|SDK版本。|
|x-hw-terminal|否|string|终端型号。|
|x-hw-os|否|string|终端操作系统类型。|
|unionID|否|string|用户的unionID。|
|User-Agent|否|string|应用版本号/appid。|
|x-hw-deviceUUID|否|string|设备UUID。|
|x-hw-deviceUDID|否|string|设备UDID。|
|x-hw-appPackageName|否|string|应用包名。|
|x-hw-network|否|string|网络类型，\[WiFi, 2G, 3G, 4G, 5G, wire\]。|

Request Body

无

<br />

#### 请求示例

```
DELETE https://driveapis.cloud.huawei.com.cn/drive/v1/files/{fileId} HTTP/1.1 
Accept: application/json 
Cache-Control: no-cache 
Authorization: Bearer CF3NTYZSs7MRmxWyj8ssonQQxDgSPAjnDvrf+91NrpN22LdUrMA30A5Kzz0mf55sWao7e7VeLrmjQ0z2OmwPWlt3S00/L1BJppbTFhIgWb74ZBK8CFImUA==
```

#### 响应参数

返回状态码为204，无返回体。  

#### 响应示例

无  

#### 常见错误码

错误码后4位为业务错误码，用于区分错误场景，其他业务错误码见[状态码](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/status-code-0000001050992633)章节。  

|状态码|错误码|响应代码|描述|
|:--|:-------|:------------------------|:---------------------------|
|204|NA|-|成功。|
|400|21004001|LACK_OF_PARAM|缺少入参，请检查参数列表。|
|400|21004002|PARAM_INVALID|参数校验失败，请检查参数列表。|
|403|21004032|SERVICE_NOT_SUPPORT|服务不支持。|
|403|21004035|INSUFFICIENT_SCOPE|Scope校验失败。|
|403|21004036|INSUFFICIENT_PERMISSION|角色权限不足。|
|500|21005006|SERVER_TEMP_ERROR|服务器异常。|
|403|21074033|AGREEMENT_NOT_SIGNED|用户还未签署华为云空间用户协议，请签署协议后再进行重试。|
|403|21084031|DATA_MIGRATING|正处于安全策略更新， 请等待安全策略更新完成。|
|500|21085002|OUTER_SERVICE_UNAVAILABLE|服务器异常。|
|500|21085006|SERVER_TEMP_ERROR|服务器异常。|

#### 调用示例

```
    public static void main(String[] args) throws IOException {
        // 设置请求地址，文件ID和用户认证令牌
        String url = "https://driveapis.cloud.huawei.com.cn/drive/v1/files";
        String fileId = "AAAKTnFgAIYCkUs9n_FB9ewNSzuf_ACAA";
        String access_token = "CF3mIRW1G2Ljt8qvDpZuNW0d6lNHXNT4V61o3/XLHIbcI54AQSc8wx2XAuMvOFEFFIwIvWjGitFRV3UCXWiUnuzCx0b5x/4Pq31BJpo4HK46G8l+k2DuEQ==";
        // 删除文件
        Boolean isDelete = false;
        isDelete = filesDelete(url, access_token, fileId);

        System.out.println(isDelete);
    }

    private static Boolean filesDelete(String url, String access_token, String fileId) throws IOException {
        StringBuilder stringBuilder = new StringBuilder("");
        stringBuilder.append("/").append(fileId);
        HttpDelete httpDelete = new HttpDelete(url + stringBuilder);
        httpDelete.setHeader("Authorization","Bearer " + access_token);

        CloseableHttpResponse response = HttpClientUtil.getClient().execute(httpDelete);

        try {
            if(response.getStatusLine().getStatusCode() == 204){ // 返回状态码为204代表成功
                return true;
            }
            return false;
        }finally {
            response.close();
        }
    }
```

