---
name: document/cn/HMSCore-References/overwrite-model-0000001051477582
title: 全量更新其他卡券模板
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-References/overwrite-model-0000001051477582
---

# 全量更新其他卡券模板

#### 功能介绍

重写modelId对应的其他卡券模板。  

#### 场景描述

开发者可以调用该API，全量更新modelId对应的其他卡券模板。除了passTypeIdentifier和passStyleIdentifier（modelId），其余字段均可更新。卡券模板被更新后，与之关联的已被华为钱包用户领取的卡券都会被相应地更新，不同的更新场景请查看[同步/异步更新规则](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/update-rulse-0000001053263499)。  

#### 使用约束

需在华为AGC网站上创建应用并申请卡券对应的服务。只能更新已添加到华为服务器的卡券模板。  

#### 接口原型

|承载协议|HTTPS PUT|
|接口方向|开发者服务器-\>华为钱包服务器|
|接口URL|{url}/hmspass/v2/{cardType}/model/{modelId} {url}变量需要开发者根据服务器所属区域自行选择，请参见[钱包服务器地址](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/server-address-0000001050158382)。|
|数据格式|请求消息：Content-Type: application/json 响应消息：Content-Type: application/json|
|-----|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|

#### 路径参数

|参数|是否必选|参数类型|描述|
|:-------|:---|:-----|:--------------------------------------------------------------------------------------------------------------------------|
|cardType|是|String|开发者根据卡券类型自行选择，请参见[当前支持的其他卡券类型](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/card-type-0000001052557727)。|
|modelId|是|String|卡券模板的唯一标识符。这个ID在同一个appId下唯一。这个ID只能包含字母、数字和（.）、（-）、（_）。|

#### 请求参数

Request Header：  

|参数|是否必选|参数类型|描述|
|:------------|:---|:-----|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|Authorization|是|String|鉴权码。获取方式详见[基于OAuth 2.0开放鉴权](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides-V5/open-platform-oauth-0000001053629189-V5)，请使用"客户端模式"。"client_id"和"client_secret"即为开发者在华为AGC网站上创建应用后获取的"App ID"和"App key"。将获取到的"access_token"的值拼接在字符串"Bearer"之后，以空格符相隔，组成"Authorization"参数的值。|
|Content-Type|是|String|固定值："application/json;charset=utf-8"。|
|Accept|是|String|固定值："application/json;charset=utf-8"。|

Request Body：  

|参数|是否必选|参数类型|描述|
|:-------------------------------------------------------------------------------------------------------------|:---|:-----------------------------------------------------------------------------------------------------|:-------|
|详见HwWalletObject[参数描述](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/param-0000001050158366)|是|[HwWalletObject](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/def-0000001050160319)|待更新的卡券模板|

#### 请求示例

```
PUT /hmspass/v1/key_parkcard/model/class_parkcard_Test HTTP/1.1
Content-Type: application/json;charset=utf-8
Authorization: Bearer ***
Accept: application/json;charset=utf-8
Host: wallet-passentrust-drcn.cloud.huawei.com.cn
{
  "passVersion": "2.0",
  "passTypeIdentifier": "hwpass.type.parkcard.test",
  "passStyleIdentifier": "class_parkcard_Test",
  "organizationName": "Huawei",
  "fields": {
    "countryCode": "CN",
    "locationList": [
      {
        "longitude": "114.0679603815",
        "latitude": "22.6592051284"
      }
    ],
    "commonFields": [
      {
        "key": "logo",
        "value": "https://www.huawei.com/XXX.png"
      },
      {
        "key": "name",
        "value": "XXX All-in-one Card"
      },      
      {
        "key": "merchantName",
        "value": "Huawei",
        "localizedValue": "merchantNameI18N"
      },
      {
        "key": "address",
        "value": "YYY location"
      }
    ],
    "appendFields": [
      {
        "key": "backgroundColor",
        "value": "#FF1C2635"
      }
    ],
    "imageList": [
      {
        "key": "mainImage[0]",
        "value": "https://www.huawei.com/XXX0.png"
      },
      {
        "key": "mainImage[1]",
        "value": "https://www.huawei.com/XXX1.png"
      },
      {
        "key": "mainImage[2]",
        "value": "https://www.huawei.com/XXX2.png"
      }
    ],
    "messageList": [
      {
        "key": "message[0]",
        "value": "Welcome to the park!"
      }
    ],
    "timeList": [
      {
        "key": "startTime",
        "value": "2020-01-22T18:00:00.083Z"
      },
      {
        "key": "endTime",
        "value": "2020-01-22T22:00:00.083Z"
      }
    ],
    "localized": [
      {
        "key": "merchantNameI18N",
        "language": "zh-cn",
        "value": "华为"
      },
      {
        "key": "merchantNameI18N",
        "language": "en",
        "value": "Huawei"
      }
    ]
  }
}
```

#### 响应参数

错误码为200时：  

|参数|参数类型|描述|
|:-------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------|:-------|
|详见HwWalletObject[参数描述](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/param-0000001050158366)|[HwWalletObject](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/def-0000001050160319)|已更新的卡券模板|

#### 响应示例

```
HTTP/1.1 200 OK
Content-Type: application/json
{
  "passVersion": "2.0",
  "passTypeIdentifier": "hwpass.type.parkcard.test",
  "passStyleIdentifier": "class_parkcard_Test",
  "organizationName": "Huawei",
  "fields": {
    "countryCode": "CN",
    "locationList": [
      {
        "longitude": "114.0679603815",
        "latitude": "22.6592051284"
      }
    ],
    "commonFields": [
      {
        "key": "logo",
        "value": "https://www.huawei.com/XXX.png"
      },
      {
        "key": "name",
        "value": "XXX All-in-one Card"
      },      
      {
        "key": "merchantName",
        "value": "Huawei",
        "localizedValue": "merchantNameI18N"
      },
      {
        "key": "address",
        "value": "YYY location"
      }
    ],
    "appendFields": [
      {
        "key": "backgroundColor",
        "value": "#FF1C2635"
      }
    ],
    "imageList": [
      {
        "key": "mainImage[0]",
        "value": "https://www.huawei.com/XXX0.png"
      },
      {
        "key": "mainImage[1]",
        "value": "https://www.huawei.com/XXX1.png"
      },
      {
        "key": "mainImage[2]",
        "value": "https://www.huawei.com/XXX2.png"
      }
    ],
    "messageList": [
      {
        "key": "message[0]",
        "value": "Welcome to the park!"
      }
    ],
    "timeList": [
      {
        "key": "startTime",
        "value": "2020-01-22T18:00:00.083Z"
      },
      {
        "key": "endTime",
        "value": "2020-01-22T22:00:00.083Z"
      }
    ],
    "localized": [
      {
        "key": "merchantNameI18N",
        "language": "zh-cn",
        "value": "华为"
      },
      {
        "key": "merchantNameI18N",
        "language": "en",
        "value": "Huawei"
      }
    ]
  }
}
```

#### 错误码

详见[错误码](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/api-server-errorcode-0000001051072926)。  

#### 调用示例

```
public HwWalletObject fullUpdateWalletModel(String url, String modelId, String body) {
    // Construct the http header.
    HttpHeaders header = constructHttpHeaders();
    // Construct the http URL.
    String baseUrl = ConfigHelper.instants().getValue("walletServerBaseUrl");
    String walletServerUrl = baseUrl + url + modelId;
    // Construct the http body.
    JSONObject jsonObj = JSONObject.parseObject(body);

    // Send the http request and get response.
    HttpEntity<JSONObject> entity = new HttpEntity<>(jsonObj, header);
    ResponseEntity<HwWalletObject> response =
        REST_TEMPLATE.exchange(walletServerUrl, HttpMethod.PUT, entity, HwWalletObject.class);

    // Return the updated wallet model.
    return response.getBody();
}
```

