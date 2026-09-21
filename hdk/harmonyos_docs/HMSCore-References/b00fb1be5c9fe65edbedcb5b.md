---
name: document/cn/HMSCore-References/server-api-filessubscribe-0000001050153637
title: Files:subscribe
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-References/server-api-filessubscribe-0000001050153637
---

# Files:subscribe

## 功能介绍

订阅文件的变化。

## 场景描述

Files.subscribe接口实现订阅目录或文件变化的功能，主要针对的是某个资源维度的变化。

## 使用约束

* Scope至少包含下面其中一个：
  * https://www.huawei.com/auth/drive.appdata
  * https://www.huawei.com/auth/drive.file
  * https://www.huawei.com/auth/drive
  * https://www.huawei.com/auth/drive.readonly
  * https://www.huawei.com/auth/drive.metadata
  * https://www.huawei.com/auth/drive.metadata.readonly


* url参数采用允许清单机制，只支持设置在允许清单中的url
* 仅支持80/8080/443/8443/8888此范围内端口回调

## 接口原型

|承载协议|HTTP POST|
|-----|-----------------------------------------------------------------------|
|接口方向|开发者服务器->华为云空间服务器|
|接口URL|https://driveapis.cloud.huawei.com.cn/drive/v1/files/{fileId}/subscribe|
|数据格式|请求消息：Content-Type: application/json 响应消息：Content-Type: application/json|

## 路径参数

|参数|是否必选|参数类型|描述|
|:-----|:---|:-----|:----|
|fileId|是|string|文件ID。|

## 查询参数

|参数|是否必选|参数类型|描述|
|:----------|:---|:------|:--------------------------------|
|fields|否|string|采用[Partial-response格式]，具体使用见公共说明。|
|form|否|string|媒体格式。|
|prettyPrint|否|boolean|是否以美观格式输出。|
|quotaId|否|string|用户标识，小于40个字符。用于限制单个用户的API访问数量。|
|callback|否|string|JSONP的callback函数。|

## 请求参数

**Request Header**

|参数|是否必选|参数类型|描述|
|:------------------|:---|:-----|:---------------------------------|
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
|x-hw-network|否|string|网络类型，[WiFi, 2G, 3G, 4G, 5G, wire]。|

**Request Body**

|参数|是否必选|参数类型|描述|
|:-------------|:---|:------|:-----------------------------------------------------|
|id|是|string|一个唯一ID，标识这个订阅通道。|
|userToken|是|string|发送消息通知时，回传给业务。|
|type|是|string|发送机制类型，web_hook。|
|url|是|string|发送通知的地址。|
|expirationTime|否|integer|通道的到期的日期和时间，以Unix时间戳表示，以毫秒为单位，File资源最长1天，Change资源最长1周。|

## 请求示例

```screen
POST https://driveapis.cloud.huawei.com.cn/drive/v1/files/DSQpEkxcAAADKXEPJAYABgOUVrNwA8Cu/subscribe?fields=* HTTP/1.1 
Accept: application/json 
Content-Type: application/json 
Authorization: Bearer CV3PnPLZXyr9K2GV7RYZkF962JZvoEkMQhTho3QHQAPQUyma/lEyZskP/IMWrc7FvaeHivO7y0lyibI/fQvulBnTgtXArSVPsjaLKvYNkDsJSaIR2/sx+K40bYDWWpKFvJNKg2U47jRwz2mfiF3ortNk 
Cache-Control: no-cache 
{ 
    "url": "https://www.huawei.com", 
    "expirationTime": 1583419819000, // 设置为当前时间0-1天内，unix时间戳;不填默认为1小时 
    "id": "101207111", 
    "type": "web_hook", 
    "userToken": "F0Ge0"
}
```

## 响应参数

**状态码为200时:**

|参数|参数类型|描述|
|:-------------|:------|:-----------------------------------------------------|
|category|string|资源类型，固定为api#channel。|
|id|string|ID。|
|resourceId|string|资源ID，标识通道上正在监视的资源。|
|resourceUri|string|资源版本标识符。|
|userToken|string|发送消息通知时，回传给业务。|
|expirationTime|integer|通道的到期的日期和时间，以Unix时间戳表示，以毫秒为单位，File资源最长1天，Change资源最长1周。|
|type|string|类型。|
|url|string|回调地址。|

## 响应示例

```screen
{ 
    "userToken": "F0Ge0", 
    "resourceId": "MTIzOTA0Njg3ODM3MTUxMjcwNHxBQndKQU9tOEN1b0NLVXdKazRsUDQzZ1JUQS1UaEFyc0E", 
    "expirationTime": 1583419819000, 
    "id": "101207111", 
    "resourceUri": "https://drive.hicloud.com/drive/v1/files/ABwJAOm8CuoCKUwJk4lP43gRTA-ThArsA?form=json&fields={fields}", 
    "category": "api#channel", 
    "type": "web_hook",  
    "url": "https://www.huawei.com" 
}
```

## 常见错误码

**错误码后4位为业务错误码，用于区分错误场景，其他业务错误码见[状态码](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/status-code-0000001050992633)章节**。

|状态码|错误码|响应代码|描述|
|:--|:-------|:------------------------|:----------------------|
|200|NA|-|成功。|
|400|21000400|PARAM_INVALID|通道已注册，请更换id后进行重试。|
|400|21004001|LACK_OF_PARAM|缺少入参，请检查参数列表。|
|400|21004002|PARAM_INVALID|参数校验失败，请检查参数列表。|
|403|21004032|SERVICE_NOT_SUPPORT|服务不支持。|
|403|21004035|INSUFFICIENT_SCOPE|Scope校验失败。|
|403|21004036|INSUFFICIENT_PERMISSION|角色权限不足。|
|500|21005006|SERVER_TEMP_ERROR|服务器异常。|
|403|21074033|AGREEMENT_NOT_SIGNED|用户还未签署华为云空间用户协议。|
|403|21084031|DATA_MIGRATING|正处于安全策略更新， 请等待安全策略更新完成。|
|404|21084041|CONTENT_NOT_FOUND|服务器未找到记录|
|403|21114038|OUTER_SERVICE_ERROR|服务器异常。|
|500|21115002|OUTER_SERVICE_UNAVAILABLE|服务器异常。|

## 调用示例

```screen
   public static void main(String[] args) throws IOException {
        // 设置请求地址，文件ID和用户认证令牌
        String url = "https://driveapis.cloud.huawei.com.cn/drive/v1/files";
        String fileId = "AB20Xph-CuoBqGchmcvZlQAQZyeZxgrsA";
        String access_token = "CV5T0j4HDw4DLKCSOx66t7Sh27ybEW5PogqJokGThXpl5x1Ygy3BrHJZRqcfWvMdAdNIdOcIwBNKelhtCTr/os7hzwTdgkGvNURNMu5iqFlMYEfPS7kuKQ==";
        // 订阅文件变化
        JSONObject fileInfo = filesSubscribe(url, access_token, fileId);
        System.out.println(fileInfo.toJSONString());
    }

    private static JSONObject filesSubscribe(String url, String access_token, String fileId) throws IOException {
        StringBuilder stringBuilder = new StringBuilder("");
        stringBuilder.append("/").append(fileId).append("/").append("subscribe");
        stringBuilder.append("?").append("fields=*");
        HttpPost httpPost = new HttpPost(url + stringBuilder);
        httpPost.setHeader("Authorization","Bearer " + access_token);
        httpPost.setHeader("Content-Type", "application/json");
        httpPost.setHeader("Accept", "application/json");

        JSONObject jsonParam = new JSONObject();
        jsonParam.put("id", "101207111");
        jsonParam.put("type", "web_hook");//default value
        jsonParam.put("userToken", "1245");
        jsonParam.put("pushToken", "F0Ge56");
        jsonParam.put("url", "https://www.huawei.com");//Only accept https
        jsonParam.put("expirationTime", "1582548948000");//optional.You can set it in 0-1 day,or use default value.Unix Time

        StringEntity entity = new StringEntity(jsonParam.toString());
        entity.setContentType("application/json");
        httpPost.setEntity(entity);

        CloseableHttpResponse response = HttpClientUtil.getClient().execute(httpPost);

        try {
            HttpEntity responseEntity = response.getEntity();
            String ret = responseEntity != null ? EntityUtils.toString(responseEntity) : null;
            JSONObject jsonObject = (JSONObject) JSON.parse(ret);
            EntityUtils.consume(responseEntity);
            return jsonObject;
        }finally {
            response.close();
        }
    }
```

