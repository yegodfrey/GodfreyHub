---
name: document/cn/HMSCore-References/webapi-query-suggestion-0000001050161966
title: 地点搜索建议
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-References/webapi-query-suggestion-0000001050161966
---

# 地点搜索建议

#### 功能介绍

可用于在用户键入查询内容的时候，返回建议的查询结果，从而实现查询预测效果。  

#### 使用约束

最多返回5条记录。  

#### 接口原型

|承载协议|HTTPS POST|
|接口方向|开发者 -\> 华为地图服务器|
|接口URL|https://siteapi.cloud.huawei.com/mapApi/v1/siteService/querySuggestion?key=API KEY 说明： 1. 获取API KEY的方式请参见[获取API密钥](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/web-api-preparations-0000001097891749#section527610250284)。 2. API秘钥使用有2种方式： 2.1 拼接URL中：使用"API密钥"时需要调用URLEncoder.encode("Your apiKey", "UTF-8")方法对API密钥进行encodeURI编码。例如，原始API密钥：ABC/DFG+ ，转换结果：ABC%2FDFG%2B。 2.2 放在Header内：参考Request Header中Authorization字段，推荐使用该方式。|
|数据格式|请求消息：Content-Type: application/json 响应消息：Content-Type: application/json|
|-----|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|

#### 请求参数

Request Header  

|参数|是否必选|参数类型|描述|
|:------------|:---|:---------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|Authorization|是|String|业务签名，用于认证鉴权，格式为：Bearer+空格+[API Key](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/web-api-preparations-0000001097891749#section527610250284)。 示例：Bearer ABC/DFG+。|
|Content-Type|是|application/json|请求消息的数据格式。|

Request Body  

|参数|是否必选|参数类型|描述|
|:------------|:---|:-------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|query|是|String(\<=512)|搜索关键字。|
|location|否|[Coordinate](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/webapi-input-params-0000001050165377#section11247133131712)|搜索结果偏向的经纬度。|
|radius|否|int|Location的搜索半径，单位：米。取值范围：\[1, 50000\]，默认50000米。|
|bounds|否|[CoordinateBounds](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/webapi-input-params-0000001050165377#section498435518173)|搜索结果偏向的搜索范围。 说明： 如果bounds、location都传的话，那么bounds优先。|
|poiTypes|否|String\[\]|返回指定POI类型的地点。取值包括： * GEOCODE ： 仅返回地理编码结果，而不返回企业。使用此请求可以消除指定位置可能不确定的结果的歧义。 * ADDRESS：仅返回具有精确地址的自动完成结果。当您知道用户正在寻找完全指定的地址时，请使用此类型。 * ESTABLISHMENT：仅返回作为企业的地点。 * REGIONS ：仅返回与以下类型之一匹配的地点： * LOCALITY * SUBLOCALITY * POSTAL_CODE * COUNTRY * ADMINISTRATIVE_AREA_LEVEL_1 * ADMINISTRATIVE_AREA_LEVEL_2 * CITIES：仅返回与LOCALITY或 ADMINISTRATIVE_AREA_LEVEL_3匹配的结果。|
|countryCode|否|String(=2)|在指定的国家内搜索，采用ISO 3166-1 alpha-2。|
|language|否|String(\<=16)|搜索结果返回的语言，语种取值请参见[支持的语言](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/language-mapping-0000001050162856)列表。如果不传，返回地点的当地语言。|
|politicalView|否|String(=2)|政治观点，采用ISO 3166-1 alpha-2规范的2位国家/地区码。 注意： 该参数已废弃。|
|children|否|boolean|是否返回子节点，默认为false。传入children为true，返回子节点的siteId。|

#### 请求示例

```
POST https://siteapi.cloud.huawei.com/mapApi/v1/siteService/querySuggestion?key=API KEY   HTTP/1.1  
Content-Type: application/json 
Accept: application/json 
{
    "query": "station",
    "location": {
        "lng": 10.252502,
        "lat": 43.8739168
    },
    "radius": 10000,
    "bounds": {
        "southwest": {
            "lng": 9.25073768878106,
            "lat": 42.87264496679441
        },
        "northeast": {
            "lng": 11.25426631121894,
            "lat": 44.875188633205596
        }
    },
    "poiTypes": [
        "GEOCODE",
        "ESTABLISHMENT"
    ],
    "countryCode": "IT",
    "language": "en",
    "children": true
}
```

#### 响应参数

状态码为200时：

Response Header  

|参数|是否必选|参数类型|描述|
|:-----------|:---|:---------------|:---------|
|Content-Type|是|application/json|响应消息的数据格式。|

Response Body  

|参数名称|参数类型|描述|
|:---------|:--------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------|
|returnCode|String|返回码，具体请参见[错误码](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/webapi-error-code-0000001050163432)。|
|returnDesc|String|返回值描述。|
|sites|[Site](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/webapi-output-params-0000001050163424#section14367831122112)\[\]|如果查询成功，返回搜索建议。如果没有结果，返回空数组。|

#### 响应示例

状态码为200时：

```
HTTP/1.1 200 OK
Content-type: application/json
{
    "returnCode": "0",
    "sites": [
        {
            "formatAddress": "Via Del Fiaschetto, Camaiore, Italy",
            "address": {
                "country": "Italy",
                "countryCode": "IT",
                "tertiaryAdminArea": "Camaiore",
                "postalCode": "55041",
                "locality": "Camaiore",
                "adminArea": "Tuscany",
                "subAdminArea": "Lucca",
                "thoroughfare": "Via Del Fiaschetto"
            },
            "distance": 4270.603165446342,
            "poi": {
                "hwPoiTypes": [
                    "INTERCITY_RAILWAY_STATION"
                ],
                "comments": {
                    "commentInfo": {},
                    "starInfo": {
                        "averageRating": "0.0"
                    }
                },
                "rating": 0.0,
                "icon": "https://lfcontentcenterdev.hwcloudtest.cn/pub_1/HuaweiMaps_camp_0_9/ec/v3/vut4tpV7SaOciBZ2xc1yMw/Railway.png",
                "internationalPhone": "+39 892 021",
                "poiTypes": [
                    "TRAIN_STATION"
                ],
                "phone": "+39 892 021",
                "websiteUrl": "www.rfi.it",
                "childrenNodes": []
            },
            "name": "station Camaiore Lido-Capezzano",
            "prediction": {
                "matchedKeywords": [
                    {
                        "offset": 0,
                        "value": "station"
                    }
                ],
                "description": "station Camaiore Lido-Capezzano Via Del Fiaschetto, Camaiore, Italy",
                "matchedWords": [
                    {
                        "offset": 0,
                        "value": "station Camaiore Lido-Capezzano"
                    },
                    {
                        "offset": 32,
                        "value": "Via Del Fiaschetto"
                    },
                    {
                        "offset": 52,
                        "value": "Camaiore"
                    },
                    {
                        "offset": 62,
                        "value": "Italy"
                    }
                ]
            },
            "siteId": "252994930130698752",
            "location": {
                "lng": 10.2476061,
                "lat": 43.9121177
            }
        },
        {
            "formatAddress": "Piazza Massimo D'Azeglio, Viareggio, Italy",
            "address": {
                "country": "Italy",
                "countryCode": "IT",
                "tertiaryAdminArea": "Viareggio",
                "postalCode": "55049",
                "locality": "Viareggio",
                "adminArea": "Tuscany",
                "subAdminArea": "Lucca",
                "thoroughfare": "Piazza Massimo D'Azeglio"
            },
            "distance": 988.0220102959325,
            "poi": {
                "hwPoiTypes": [
                    "PETROL_STATION"
                ],
                "comments": {
                    "commentInfo": {},
                    "starInfo": {
                        "averageRating": "0.0"
                    }
                },
                "rating": 0.0,
                "icon": "https://lfcontentcenterdev.hwcloudtest.cn/pub_1/HuaweiMaps_camp_0_9/4/v3/7bwjt3bmRCaXa1R5icYriw/Petrol_Station.png",
                "internationalPhone": "",
                "poiTypes": [
                    "GAS_STATION"
                ],
                "phone": "",
                "websiteUrl": "www.ip.gruppoapi.com/",
                "childrenNodes": []
            },
            "name": "IP Station",
            "prediction": {
                "matchedKeywords": [
                    {
                        "offset": 3,
                        "value": "Station"
                    }
                ],
                "description": "IP Station Piazza Massimo D'Azeglio, Viareggio, Italy",
                "matchedWords": [
                    {
                        "offset": 0,
                        "value": "IP Station"
                    },
                    {
                        "offset": 11,
                        "value": "Piazza Massimo D'Azeglio"
                    },
                    {
                        "offset": 37,
                        "value": "Viareggio"
                    },
                    {
                        "offset": 48,
                        "value": "Italy"
                    }
                ]
            },
            "siteId": "653067455988646016",
            "location": {
                "lng": 10.244813,
                "lat": 43.866985
            }
        },
        {
            "formatAddress": "Via del Boccella, Massarosa, Italy",
            "address": {
                "country": "Italy",
                "countryCode": "IT",
                "tertiaryAdminArea": "Massarosa",
                "postalCode": "55054",
                "locality": "Massarosa",
                "adminArea": "Tuscany",
                "subAdminArea": "Lucca",
                "thoroughfare": "Via del Boccella"
            },
            "distance": 2563.662541588024,
            "poi": {
                "hwPoiTypes": [
                    "TRUCK_PARKING_AREA"
                ],
                "comments": {
                    "commentInfo": {},
                    "starInfo": {
                        "averageRating": "0.0"
                    }
                },
                "rating": 0.0,
                "icon": "https://lfcontentcenterdev.hwcloudtest.cn/pub_1/HuaweiMaps_camp_0_9/92/v3/DW3_8Uc4RNizAGBJ_a7WyA/Parking.png",
                "internationalPhone": "+39 0584 66932",
                "poiTypes": [
                    "PARKING"
                ],
                "phone": "+39 0584 66932",
                "childrenNodes": []
            },
            "name": "IP Station",
            "prediction": {
                "matchedKeywords": [
                    {
                        "offset": 3,
                        "value": "Station"
                    }
                ],
                "description": "IP Station Via del Boccella, Massarosa, Italy",
                "matchedWords": [
                    {
                        "offset": 0,
                        "value": "IP Station"
                    },
                    {
                        "offset": 11,
                        "value": "Via del Boccella"
                    },
                    {
                        "offset": 29,
                        "value": "Massarosa"
                    },
                    {
                        "offset": 40,
                        "value": "Italy"
                    }
                ]
            },
            "siteId": "853071390732332288",
            "location": {
                "lng": 10.2651025,
                "lat": 43.8950803
            }
        },
        {
            "formatAddress": "Via del Boccella, Massarosa, Italy",
            "address": {
                "country": "Italy",
                "countryCode": "IT",
                "tertiaryAdminArea": "Massarosa",
                "postalCode": "55054",
                "locality": "Massarosa",
                "adminArea": "Tuscany",
                "subAdminArea": "Lucca",
                "thoroughfare": "Via del Boccella"
            },
            "distance": 2563.718329470128,
            "poi": {
                "hwPoiTypes": [
                    "PETROL_STATION"
                ],
                "comments": {
                    "commentInfo": {},
                    "starInfo": {
                        "averageRating": "0.0"
                    }
                },
                "rating": 0.0,
                "icon": "https://lfcontentcenterdev.hwcloudtest.cn/pub_1/HuaweiMaps_camp_0_9/4/v3/7bwjt3bmRCaXa1R5icYriw/Petrol_Station.png",
                "internationalPhone": "",
                "poiTypes": [
                    "GAS_STATION"
                ],
                "phone": "",
                "websiteUrl": "www.ip.gruppoapi.com/",
                "childrenNodes": []
            },
            "name": "IP Station",
            "prediction": {
                "matchedKeywords": [
                    {
                        "offset": 3,
                        "value": "Station"
                    }
                ],
                "description": "IP Station Via del Boccella, Massarosa, Italy",
                "matchedWords": [
                    {
                        "offset": 0,
                        "value": "IP Station"
                    },
                    {
                        "offset": 11,
                        "value": "Via del Boccella"
                    },
                    {
                        "offset": 29,
                        "value": "Massarosa"
                    },
                    {
                        "offset": 40,
                        "value": "Italy"
                    }
                ]
            },
            "siteId": "853137832601337344",
            "location": {
                "lng": 10.265102,
                "lat": 43.895081
            }
        },
        {
            "formatAddress": "Via Dante Alighieri, Viareggio, Italy",
            "address": {
                "country": "Italy",
                "streetNumber": "2",
                "countryCode": "IT",
                "tertiaryAdminArea": "Viareggio",
                "postalCode": "55049",
                "locality": "Viareggio",
                "adminArea": "Tuscany",
                "subAdminArea": "Lucca",
                "thoroughfare": "Via Dante Alighieri"
            },
            "distance": 6056.436454634934,
            "poi": {
                "hwPoiTypes": [
                    "LOCAL_POST_OFFICE"
                ],
                "comments": {
                    "commentInfo": {},
                    "starInfo": {
                        "averageRating": "0.0"
                    }
                },
                "rating": 0.0,
                "icon": "https://lfcontentcenterdev.hwcloudtest.cn/pub_1/HuaweiMaps_camp_0_9/6/v3/nQcaLwJATMSdKH69UKrHzg/Post_Office.png",
                "internationalPhone": "+39 0584 353833",
                "poiTypes": [
                    "POST_OFFICE"
                ],
                "phone": "+39 0584 353833",
                "websiteUrl": "www.poste.it",
                "childrenNodes": []
            },
            "name": "station Torre del Lago Puccini",
            "prediction": {
                "matchedKeywords": [
                    {
                        "offset": 0,
                        "value": "station"
                    }
                ],
                "description": "station Torre del Lago Puccini Via Dante Alighieri, Viareggio, Italy",
                "matchedWords": [
                    {
                        "offset": 0,
                        "value": "station Torre del Lago Puccini"
                    },
                    {
                        "offset": 31,
                        "value": "Via Dante Alighieri"
                    },
                    {
                        "offset": 52,
                        "value": "Viareggio"
                    },
                    {
                        "offset": 63,
                        "value": "Italy"
                    }
                ]
            },
            "siteId": "653058557151948160",
            "location": {
                "lng": 10.2903156,
                "lat": 43.8268383
            }
        }
    ],
    "returnDesc": "OK"
}
```

#### 调用示例

```
public class PlaceSearchService {
    public static final String ROOT_URL = "https://siteapi.cloud.huawei.com/mapApi/v1/siteService/querySuggestion";

    public static final String connection = "?key=";

    public static final MediaType JSON = MediaType.parse("application/json; charset=utf-8");

    public static void querySuggestion(String apiKey) throws UnsupportedEncodingException {
        JSONObject json = new JSONObject();
        JSONObject location = new JSONObject();

        try {
            location.put("lng", 2.4444);
            location.put("lat", 48.8815);

            json.put("query", "hotel");
            json.put("location", location);
        } catch (JSONException e) {
            Log.e("error", e.getMessage());
        }
        RequestBody body = RequestBody.create(JSON, String.valueOf(json));

        OkHttpClient client = new OkHttpClient();
        Request request =
            new Request.Builder().url(ROOT_URL + connection + URLEncoder.encode(apiKey, "UTF-8"))
                .post(body)
                .build();

        client.newCall(request).enqueue(new Callback() {
            @Override
            public void onFailure(Call call, IOException e) {
                Log.e("QuerySuggestion", e.toString());
            }

            @Override
            public void onResponse(Call call, Response response) throws IOException {
                Log.d("QuerySuggestion", response.body().string());
            }
        });
    }
}
```

