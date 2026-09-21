---
name: document/cn/games-references/games-api-binary-optimization-delete-pile-task-0000002407881313
title: 删除插桩任务
uri: https://developer.huawei.com/consumer/cn/doc/games-references/games-api-binary-optimization-delete-pile-task-0000002407881313
---

# 删除插桩任务

## 功能简介

单次删除一个插桩任务。

## 接口原型

|承载协议|HTTPS|
|-----|--------------------------------------------------------------------------------|
|接口方向|开发者服务器 -> 华为服务器|
|接口方法|DELETE|
|接口URL|https://connect-api.cloud.huawei.com/api/gpos/v1/binary/instrumentation/{taskId}|
|数据格式|* 请求：Content-Type: application/json * 响应：Content-Type: application/json|

## 请求参数

### Header

|参数|类型|必选(M)/可选(O)|说明|
|:------------|:-----|:----------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|Content-Type|string|M|固定取值为"application/json"。|
|client_id|string|M|客户端ID，即[创建API客户端](https://developer.huawei.com/consumer/cn/doc/games-guides/games-binary-optimization-agc-works-0000002342950440#section2939558155118)中生成的客户端ID。|
|Authorization|string|M|认证信息，格式为"Authorization: Bearer ${access_token}"，其中access_token为调用[获取Token](https://developer.huawei.com/consumer/cn/doc/games-references/games-api-binary-optimization-obtain-token-0000002408001421)接口返回的access_token。|
|projectId|string|M|在AppGallery Connect[创建项目和应用](https://developer.huawei.com/consumer/cn/doc/games-guides/games-binary-optimization-agc-works-0000002342950440#section210054711512)后的项目ID。最大长度20个字符。|

### Path

|参数|类型|必选(M)/可选(O)|说明|
|:-----|:-----|:----------|:----------------|
|taskId|string|M|插桩任务ID。最大长度20个字符。|

## 请求示例

```screen
Delete /api/gpos/binary/instrumentation/1105625425926684672
Host: connect-api.cloud.huawei.com
Content-Type: application/json
projectId: ***
```

## 响应参数

|参数|类型|必选(M)/可选(O)|说明|
|:--|:-------------------------------------------------------------------------------------------------------------------|:----------|:-------------------------------------------------------------------------------------------------------|
|ret|[CommonRet](#ZH-CN_TOPIC_0000002407881313__zh-cn_topic_0000001909302277_zh-cn_topic_0000001854727920_p1170913233715)|M|包含返回码及描述信息的JSON字符串，格式为{"code":*retcode* , "msg": "*description*"}： * retcode：返回码。 * description：返回码描述信息。|

CommonRet参数说明

|参数|类型|必选(M)/可选(O)|说明|
|:---|:-----|:----------|:----------------------------|
|code|int|O|[返回码](#section8629194813019)。|
|msg|string|O|描述信息。|

## 响应示例

```screen
{
  "ret": {
    "code": 0,
    "msg": "Success"
  }
}
```

## 返回码

|code|msg|Description|
|:---|:-----------------------------------------|:----------|
|0|Success|成功。|
|1017|the task is processing, cannot be deleted.|不能删除插桩中的任务。|
|3001|invalid parameters.|参数错误。|

