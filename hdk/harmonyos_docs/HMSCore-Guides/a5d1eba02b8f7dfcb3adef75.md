---
name: document/cn/HMSCore-Guides/server-video-search-0000001057732687
title: 视频搜索接口
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/server-video-search-0000001057732687
---

# 视频搜索接口

## 场景介绍

提供通用视频搜索功能，根据输入的文本，返回通用视频搜索结果；用户调用该接口，查询指定query的视频搜索结果，可指定地区、语言、页码、每页返回的搜索结果条目数。

## 业务流程

详情请参见[业务流程](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/server-web-search-0000001058181099#section1348065514519)。

## 开发步骤

您的服务器发送视频搜索消息HTTP请求：

1. 获取access_token，参见[基于OAuth 2.0开放鉴权](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/open-platform-oauth-0000001053629189)。
2. 构造视频搜索消息HTTP请求对象，并且发送视频搜索消息HTTP请求（如access_token中包含转义符，需去掉转义符），具体参数请参见[请求示例](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/video-search-0000001057330836#section12657163710366)。

   **请求示例**

   如果实际搜索的query为test，按这里的示例appid、域名、Access Token，实际请求为：

   ```screen
   GET https://search-forexample.cloud.huawei.com/apis/search/v1.0.0/video/search?q=test
   Content-Type:application/json
   Accept:application/json
   Authorization:Bearer Access1Token/For2Example
   X-Kit-AppID:appidforexample
   ```

3. 处理视频搜索消息HTTP响应。如果响应异常，请根据[错误码](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/error-code-0000001055689455)定位解决。

   **响应示例**

   ```screen
   HTTP/1.1 200 OK
   Content-type: application/json
   {
   "data":{search result},
   "request_id":{X-Kit-RequestID}
   }
   ```

