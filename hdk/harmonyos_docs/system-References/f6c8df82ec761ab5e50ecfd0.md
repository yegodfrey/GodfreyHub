---
name: document/cn/system-References/updatebeaconinfo-0000001050152934
title: 更新信标设备属性
uri: https://developer.huawei.com/consumer/cn/doc/system-References/updatebeaconinfo-0000001050152934
---

# 更新信标设备属性

#### 功能介绍

更新信标设备的信息。  

#### 场景描述

调用此接口去更新信标设备的信息。  

#### 使用约束

* 需要获取服务帐号凭证，请参见[基于Service Account开放鉴权](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/open-platform-service-account-0000001053509221)。
* 当信标设备状态为非激活状态，此接口会报错。  

#### 接口原型

|承载协议|HTTPS PUT|
|接口方向|应用服务器或App应用 -\> 近距离通信服务器|
|接口URL|https://{[域名](https://developer.huawei.com/consumer/cn/doc/development/system-References/common-interface-0000001050151532#section2028854715910)}/WiseCloudNearbyBeaconService/v1/updateBeaconInfo?projectId=\[projectId\]|
|数据格式|Content-type: application/json|
|-----|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|

#### 查询参数

|参数|是否必选|参数类型|描述|
|:--------|:---|:-----|:-------------------------------------------------------------------------------------------------------------------------------------------------------|
|projectId|否|String|获取方式请参见[获取projectId](https://developer.huawei.com/consumer/cn/doc/development/system-References/common-interface-0000001050151532#section4913155719102)。|

#### 请求参数

Request Header  

|参数|是否必选|类型|描述|
|:------------|:---|:-----|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|srcTranID|是|String|请求头参数，事务ID，最长为24个字符。|
|timeStamp|是|Long|请求头参数，时间戳。|
|Authorization|是|String|请求头参数，用于网关认证，请参见[基于Service Account开放鉴权](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/open-platform-service-account-0000001053509221)获取JWT。|

Request Body  

|参数|是否必选|类型|描述|
|:-----|:---|:-----|:--------------------------------------------------------------------------------------------------------------------------------------------------------------|
|beacon|是|object|请求体参数，信标设备的信息，具体参见[信标设备结构体](https://developer.huawei.com/consumer/cn/doc/development/system-References/common-datamodel-0000001050158333#section2793931124615)。|

#### 请求示例

* 使用过期的Authorization进行调用，返回错误的响应体。

  ```
  PUT /WiseCloudNearbyBeaconService/v1/updateBeaconInfo?projectId=id123 HTTP/1.1
  Host: 域名
  Content-Type: application/json
  srcTranID: 201910181908046224775031
  timeStamp: 922337203685477580
  Accept: application/json
  Authorization: Bearer eyJraWQiOiIx---xxx.eyJhdWQiOiJodHR---xxx.QRodgXa2xeXSt4Gp---xxx

  {
      "beacon": {
          "beaconId": "aa123",
          "beaconType": 1,
          "beaconDesc": "iBeacon_73548ada",
          "latitude": 90.0,
          "longitude": 180.0,
          "indoorLevel": "0",
          "properties": "{\"key1\":\"value1\",\"key2\":\"value2\"}"
      }
  }
  ```

* 业务请求失败时，返回错误的响应体，例如更新一个未激活的信标设备。

  ```
  PUT /WiseCloudNearbyBeaconService/v1/updateBeaconInfo?projectId=id123 HTTP/1.1
  Host: 域名
  Content-Type: application/json
  srcTranID: 201910181908046224775031
  timeStamp: 922337203685477580
  Accept: application/json
  Authorization: Bearer eyJraWQiOiIx---xxx.eyJhdWQiOiJodHR---xxx.QRodgXa2xeXSt4Gp---xxx

  {
      "beacon": {
          "beaconId": "aabb123",
          "beaconType": 1,
          "beaconDesc": "iBeacon_test",
          "latitude": 81.0,
          "longitude": 180.0,
          "indoorLevel": "0",
          "properties": "{\"key1\":\"value1\",\"key2\":\"value2\"}"
      }
  }
  ```

* 请求成功，返回成功的响应体。

  ```
  PUT /WiseCloudNearbyBeaconService/v1/updateBeaconInfo?projectId=id123 HTTP/1.1
  Host: 域名
  Content-Type: application/json
  srcTranID: 201910181908046224775031
  timeStamp: 922337203685477580
  Accept: application/json
  Authorization: Bearer eyJraWQiOiIx---xxx.eyJhdWQiOiJodHR---xxx.QRodgXa2xeXSt4Gp---xxx

  {
      "beacon": {
          "beaconId": "aabb124",
          "beaconType": 1,
          "beaconDesc": "iBeacon_test",
          "latitude": 81.0,
          "longitude": 180.0,
          "indoorLevel": "0",
          "properties": "{\"key1\":\"value1\",\"key2\":\"value2\"}"
      }
  }
  ```

#### 响应参数

Response Header  

|参数|是否必选|参数类型|描述|
|:-------------|:---|:------|:------------------|
|Content-Type|否|String|上传文件Content-Type。|
|Content-Length|是|Integer|上传文件Content-Length。|

Response Body

状态码为200时：

请求成功，无响应体。

状态码为非200时：  
请求失败，响应体如下。

* 非业务（网关校验失败、token过期等情况）请求失败时：  

  |参数|类型|描述|
  |:----|:-----|:----------|
  |error|String|非业务返回的错误信息。|

* 业务请求失败时：  

  |参数|类型|描述|
  |:-----------|:-----|:------------------------------------------------------------------------------------|
  |serviceError|object|业务返回的错误信息。请见下文[serviceError](#ZH-CN_TOPIC_0000001201395026__table20403133123715)详细信息。|

  serviceError  

  |参数|类型|参数含义|
  |:------|:-----|:---------------------------------------------------------------------------------------------------------------------------------------------|
  |code|int|错误码，错误码描述见[错误码](https://developer.huawei.com/consumer/cn/doc/development/system-References/login-beacon-0000001050154445#section181310319453)。|
  |status|String|错误状态。|
  |message|String|错误描述信息。|

#### 响应示例

* 使用过期的Authorization进行调用，返回错误的响应体。

  ```
  HTTP/1.1 401 Unauthorized
  Content-type: application/json
  content-length: 27

  {
      "error": "session timeout"
  }
  ```

* 业务请求失败时，返回错误的响应体，例如更新一个未激活的信标设备。

  ```
  HTTP/1.1 400 Bad Request
  Content-type: application/json
  content-length: 96

  {
      "serviceError": {
          "code": 400000009,
          "message": "The beacon is not active.",
          "status": "Bad Request"
      }
  }
  ```

* 请求成功，返回成功的响应体。

  ```
  HTTP/1.1 200 OK
  Content-type: application/json
  content-length: 0
  ```

#### 错误码

|状态码|错误码|描述|建议业务处理方式|
|:--|:--------|:---------------|:---------------------------------------------------------------------------------------|
|400|400000001|请求头参数不对。|检查请求头参数。|
|400|400000002|请求体参数不对。|检查请求体参数。|
|400|400000009|当前信标设备未激活。|激活当前信标设备。|
|403|403000003|服务帐号不可用。|在华为开发者联盟的管理中心可查看服务帐号状态。|
|403|403000004|当前帐号没有权限操作此信标设备。|检查此帐号是否有权限操作。|
|404|404000006|当前信标设备不存在。|检查该当前的信标设备是否注册过，若无请先注册。|
|500|500000001|内部服务错误。|请选择[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题，华为支持人员会及时处理。|

