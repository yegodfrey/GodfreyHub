---
name: document/cn/HMSCore-References/webapi-forward-geo-0000001050163921
title: 正地理编码
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-References/webapi-forward-geo-0000001050163921
---

# 正地理编码

## 功能介绍

根据结构化地址获取地点的经纬度。

## 使用约束

最多返回10条记录。

## 接口原型

|承载协议|HTTPS POST|
|-----|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|接口方向|开发者 -> 华为地图服务器|
|接口URL|https://siteapi.cloud.huawei.com/mapApi/v1/siteService/geocode?key=*API KEY* > 说明 > 1. 获取*API KEY* 的方式请参见[获取API密钥](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/web-api-preparations-0000001097891749#section527610250284)。 > 2. API秘钥使用有2种方式： 2.1 拼接URL中：使用"API密钥"时需要调用URLEncoder.encode("Your apiKey", "UTF-8")方法对API密钥进行encodeURI编码。例如，原始API密钥：ABC/DFG+ ，转换结果：ABC%2FDFG%2B。 >    2.2 放在Header内：参考**Request Header** 中**Authorization**字段，推荐使用该方式。|
|数据格式|请求消息：Content-Type: application/json 响应消息：Content-Type: application/json|

## 请求参数

**Request Header**

|参数|是否必选|参数类型|描述|
|:------------|:---|:---------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|Authorization|是|String|业务签名，用于认证鉴权，格式为：Bearer+空格+[API Key](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/web-api-preparations-0000001097891749#section527610250284)。 示例：Bearer ABC/DFG+。|
|Content-Type|是|application/json|请求消息的数据格式。|

**Request Body**

|参数|是否必选|参数类型|描述|
|:------------|:---|:-------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------|
|address|是|String(<=512)|地址信息。|
|bounds|否|[CoordinateBounds](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/webapi-input-params-0000001050165377#section498435518173)|查询结果偏向的搜索范围。|
|countryCode|否|String(=2)|限制查询结果在指定的国家内，采用ISO 3166-1 alpha-2 。|
|language|否|String(<=16)|搜索结果返回的语言，语种取值请参见[支持的语言](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/language-mapping-0000001050162856)列表。如果不传，返回地点的当地语言。|
|politicalView|否|String(=2)|政治观点，采用ISO 3166-1 alpha-2规范的2位国家/地区码。 > 注意 > 该参数已废弃。|

## 请求示例

```screen
POST https://siteapi.cloud.huawei.com/mapApi/v1/siteService/geocode?key=API KEY   HTTP/1.1
Content-Type: application/json 
Accept: application/json 
{ 
    "address": "Piazzale Dante, 41, 55049 Viareggio", 
    "language": "en",
    "countryCode": "GB"
}
```

## 响应参数

**状态码为200时：**

**Response Header**

|参数|是否必选|参数类型|描述|
|:-----------|:---|:---------------|:---------|
|Content-Type|是|application/json|响应消息的数据格式。|

**Reponse Body**

|参数名称|参数类型|描述|
|:---------|:------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------|
|returnCode|String|返回码，具体请参见[错误码](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/webapi-error-code-0000001050163432)。|
|returnDesc|String|返回值描述。|
|sites|[Site](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/webapi-output-params-0000001050163424#section14367831122112)[]|如果查询成功，返回搜索结果。如果没有结果，返回空数组。|

## 响应示例

**状态码为200时：**

```screen
HTTP/1.1 200 OK
Content-type: application/json
{
    "returnCode": "0",
    "sites": [
        {
            "formatAddress": "London, England SE11 4 the United Kingdom",
            "address": {
                "country": "the United Kingdom",
                "streetNumber": "41",
                "countryCode": "GB",
                "tertiaryAdminArea": "Lambeth",
                "postalCode": "SE11 4",
                "locality": "London",
                "adminArea": "England",
                "subAdminArea": "London",
                "thoroughfare": "Dante Road"
            },
            "poi": {
                "rating": 0.0,
                "poiTypes": [
                    "STREET_ADDRESS"
                ],
                "childrenNodes": [],
                "hwPoiTypes": [
                    "STREET_ADDRESS"
                ],
                "comments": {
                    "commentInfo": {
                        "data": [],
                        "selfComments": []
                    },
                    "starInfo": {
                        "averageRating": "0.0"
                    }
                },
                "internationalPhone": "",
                "phone": ""
            },
            "viewport": {
                "southwest": {
                    "lng": -0.10562421571425237,
                    "lat": 51.49110186679441
                },
                "northeast": {
                    "lng": -0.10153878428574764,
                    "lat": 51.493645533205594
                }
            },
            "name": "41 Dante Road",
            "siteId": "653775624381548672",
            "location": {
                "lng": -0.1035815,
                "lat": 51.4923737
            }
        },
        {
            "formatAddress": "2 Dante Place, Greater London, England SE11 4RX the United Kingdom",
            "address": {
                "country": "the United Kingdom",
                "streetNumber": "2",
                "countryCode": "GB",
                "tertiaryAdminArea": "Southwark",
                "postalCode": "SE11 4RX",
                "locality": "Greater London",
                "adminArea": "England",
                "subAdminArea": "London",
                "thoroughfare": "Dante Place"
            },
            "poi": {
                "rating": 0.0,
                "icon": "https://lfcontentcenterdev.hwcloudtest.cn/pub_1/HuaweiMaps_camp_0_9/43/v3/ShnRqa_-S9aFINgwTnMkmA/3B916FC9A17FA2EF0DD12A99A43ADAE3.png",
                "poiTypes": [
                    "UNIVERSITY"
                ],
                "websiteUrl": "www.lsbu.ac.uk",
                "childrenNodes": [],
                "hwPoiTypes": [
                    "COLLEGE_UNIVERSITY"
                ],
                "comments": {
                    "commentInfo": {
                        "data": [],
                        "selfComments": []
                    },
                    "starInfo": {
                        "averageRating": "0.0"
                    }
                },
                "internationalPhone": "+44 20 78208052",
                "phone": "+44 20 78208052"
            },
            "viewport": {
                "southwest": {
                    "lng": -0.1047498057578436,
                    "lat": 51.490879666794406
                },
                "northeast": {
                    "lng": -0.1006643942421564,
                    "lat": 51.49342333320559
                }
            },
            "name": "London South Bank University Dante Road",
            "siteId": "453493247512024448",
            "location": {
                "lng": -0.1027071,
                "lat": 51.4921515
            }
        },
        {
            "formatAddress": "Middleton Shopping Centre, Lancashire, England M24 4 the United Kingdom",
            "address": {
                "country": "the United Kingdom",
                "countryCode": "GB",
                "tertiaryAdminArea": "Rochdale",
                "postalCode": "M24 4",
                "locality": "Lancashire",
                "adminArea": "England",
                "subAdminArea": "Greater Manchester",
                "thoroughfare": "Middleton Shopping Centre"
            },
            "poi": {
                "rating": 0.0,
                "icon": "https://lfcontentcenterdev.hwcloudtest.cn/pub_1/HuaweiMaps_camp_0_9/4e/v3/gQE-3zJPQqCAC3Ay7DtyPg/95532D39F0396CD75E3DB46E8B240725.png",
                "poiTypes": [
                    "CLOTHING_STORE"
                ],
                "childrenNodes": [],
                "hwPoiTypes": [
                    "MENS_APPAREL"
                ],
                "comments": {
                    "commentInfo": {
                        "data": [],
                        "selfComments": []
                    },
                    "starInfo": {
                        "averageRating": "0.0"
                    }
                },
                "internationalPhone": "+441616430939",
                "phone": "+441616430939"
            },
            "viewport": {
                "southwest": {
                    "lng": -2.203391662757303,
                    "lat": 53.54607316679441
                },
                "northeast": {
                    "lng": -2.1991105372426967,
                    "lat": 53.54861683320559
                }
            },
            "name": "Dante Dante",
            "siteId": "754804227852475520",
            "location": {
                "lng": -2.2012511,
                "lat": 53.547345
            }
        },
        {
            "formatAddress": "Middleton Road, Manchester, England M24 4GY the United Kingdom",
            "address": {
                "country": "the United Kingdom",
                "countryCode": "GB",
                "tertiaryAdminArea": "Manchester",
                "subLocality": "Manchester",
                "postalCode": "M24 4GY",
                "locality": "Manchester",
                "adminArea": "England",
                "subAdminArea": "Greater Manchester",
                "thoroughfare": "Middleton Road"
            },
            "poi": {
                "rating": 0.0,
                "icon": "https://lfcontentcenterdev.hwcloudtest.cn/pub_1/HuaweiMaps_camp_0_9/4e/v3/gQE-3zJPQqCAC3Ay7DtyPg/95532D39F0396CD75E3DB46E8B240725.png",
                "poiTypes": [
                    "CLOTHING_STORE"
                ],
                "childrenNodes": [],
                "hwPoiTypes": [
                    "CLOTHING_ACCESSORIES_STORE"
                ],
                "comments": {
                    "commentInfo": {
                        "data": [],
                        "selfComments": []
                    },
                    "starInfo": {
                        "averageRating": "0.0"
                    }
                },
                "internationalPhone": "",
                "phone": ""
            },
            "viewport": {
                "southwest": {
                    "lng": -2.24300507114755,
                    "lat": 53.536350166794406
                },
                "northeast": {
                    "lng": -2.2387249288524496,
                    "lat": 53.53889383320559
                }
            },
            "name": "Dante Dante",
            "siteId": "753490252342770048",
            "location": {
                "lng": -2.240865,
                "lat": 53.537622
            }
        },
        {
            "formatAddress": "151 Ashley, Cheshire, England WA14 2UW the United Kingdom",
            "address": {
                "country": "the United Kingdom",
                "streetNumber": "151",
                "countryCode": "GB",
                "tertiaryAdminArea": "Trafford",
                "subLocality": "Trafford",
                "postalCode": "WA14 2UW",
                "locality": "Cheshire",
                "adminArea": "England",
                "subAdminArea": "Greater Manchester",
                "thoroughfare": "Ashley"
            },
            "poi": {
                "rating": 0.0,
                "icon": "https://lfcontentcenterdev.hwcloudtest.cn/pub_1/HuaweiMaps_camp_0_9/e6/v3/CHjCEVE0QIGm1vZ818xJug/AB03AD44F3699AD8C2F13114FFF4DE4E.png",
                "description": "We are an independent Italian restaurant in the village of Hale, Cheshire. We take great pride in importing some of the finest produce Italy has to offer.",
                "poiTypes": [
                    "RESTAURANT"
                ],
                "websiteUrl": "https://www.dantehale.co.uk",
                "childrenNodes": [],
                "hwPoiTypes": [
                    "ITALIAN_RESTAURANT"
                ],
                "comments": {
                    "commentInfo": {
                        "data": [],
                        "selfComments": []
                    },
                    "starInfo": {
                        "averageRating": "0.0"
                    }
                },
                "internationalPhone": "+441619280453",
                "phone": "+441619280453"
            },
            "viewport": {
                "southwest": {
                    "lng": -2.3508166820608194,
                    "lat": 53.37754166679441
                },
                "northeast": {
                    "lng": -2.3465525179391804,
                    "lat": 53.38008533320559
                }
            },
            "name": "Dante",
            "siteId": "654823362527373824",
            "location": {
                "lng": -2.3486846,
                "lat": 53.3788135
            }
        },
        {
            "formatAddress": "England CB2 0 the United Kingdom",
            "address": {
                "country": "the United Kingdom",
                "countryCode": "GB",
                "tertiaryAdminArea": "Cambridge",
                "postalCode": "CB2 0",
                "adminArea": "England",
                "subAdminArea": "Cambridgeshire"
            },
            "poi": {
                "rating": 0.0,
                "icon": "https://lfcontentcenterdev.hwcloudtest.cn/pub_1/HuaweiMaps_camp_0_9/25/v3/iItxEYzaTOy2Aa2KHpBYGA/BC0A9AB8F722780F35F6B48C3C4D8EB3.png",
                "poiTypes": [
                    "POINT_OF_INTEREST"
                ],
                "childrenNodes": [],
                "hwPoiTypes": [
                    "COMPANY"
                ],
                "comments": {
                    "commentInfo": {
                        "total": 0,
                        "data": [],
                        "selfComments": []
                    },
                    "starInfo": {
                        "averageRating": "0.0"
                    }
                },
                "internationalPhone": "",
                "phone": ""
            },
            "viewport": {
                "southwest": {
                    "lng": 0.13187121141131858,
                    "lat": 52.190231324046955
                },
                "northeast": {
                    "lng": 0.1360205848071916,
                    "lat": 52.19277499045814
                }
            },
            "name": "DANTE",
            "siteId": "351677957135144192",
            "location": {
                "lng": 0.13394589810925508,
                "lat": 52.19150315725255
            }
        },
        {
            "formatAddress": "31 Holly Bush Lane, Sevenoaks, England TN13 3TJ the United Kingdom",
            "address": {
                "country": "the United Kingdom",
                "streetNumber": "31",
                "countryCode": "GB",
                "tertiaryAdminArea": "Sevenoaks",
                "subLocality": "Sevenoaks",
                "postalCode": "TN13 3TJ",
                "locality": "Sevenoaks",
                "adminArea": "England",
                "subAdminArea": "Kent",
                "thoroughfare": "Holly Bush Lane"
            },
            "poi": {
                "rating": 0.0,
                "icon": "https://lfcontentcenterdev.hwcloudtest.cn/pub_1/HuaweiMaps_camp_0_9/22/v3/b1H2ZWrcTz6rreHMnWnrmA/B2ADC2A078BA6C7F9F686FF9F5AF6908.png",
                "poiTypes": [
                    "POINT_OF_INTEREST"
                ],
                "childrenNodes": [],
                "hwPoiTypes": [
                    "GIFT_STORE"
                ],
                "comments": {
                    "commentInfo": {
                        "data": [],
                        "selfComments": []
                    },
                    "starInfo": {
                        "averageRating": "0.0"
                    }
                },
                "internationalPhone": "+44 1732 666079",
                "phone": "+44 1732 666079"
            },
            "viewport": {
                "southwest": {
                    "lng": 0.19334671584643037,
                    "lat": 51.27932816679441
                },
                "northeast": {
                    "lng": 0.19741328415356962,
                    "lat": 51.28187183320559
                }
            },
            "name": "Dante",
            "siteId": "353494663802666112",
            "location": {
                "lng": 0.19538,
                "lat": 51.2806
            }
        },
        {
            "formatAddress": "Chanterlands, North Humberside, England HU5 3TT the United Kingdom",
            "address": {
                "country": "the United Kingdom",
                "countryCode": "GB",
                "tertiaryAdminArea": "City of Kingston-upon-Hull",
                "subLocality": "City of Kingston-upon-Hull",
                "postalCode": "HU5 3TT",
                "locality": "North Humberside",
                "adminArea": "England",
                "subAdminArea": "City of Kingston-upon-Hull",
                "thoroughfare": "Chanterlands"
            },
            "poi": {
                "rating": 0.0,
                "icon": "https://lfcontentcenterdev.hwcloudtest.cn/pub_1/HuaweiMaps_camp_0_9/e6/v3/CHjCEVE0QIGm1vZ818xJug/AB03AD44F3699AD8C2F13114FFF4DE4E.png",
                "poiTypes": [
                    "RESTAURANT"
                ],
                "childrenNodes": [],
                "hwPoiTypes": [
                    "RESTAURANT"
                ],
                "comments": {
                    "commentInfo": {
                        "data": [],
                        "selfComments": []
                    },
                    "starInfo": {
                        "averageRating": "0.0"
                    }
                },
                "internationalPhone": "+441482343129",
                "phone": "+441482343129"
            },
            "viewport": {
                "southwest": {
                    "lng": -0.3755436784474188,
                    "lat": 53.75269926679441
                },
                "northeast": {
                    "lng": -0.3712415215525812,
                    "lat": 53.755242933205594
                }
            },
            "name": "Dante",
            "siteId": "142453406422149760",
            "location": {
                "lng": -0.3733926,
                "lat": 53.7539711
            }
        },
        {
            "formatAddress": "12 Uxbridge, London, England W5 3 the United Kingdom",
            "address": {
                "country": "the United Kingdom",
                "streetNumber": "12",
                "countryCode": "GB",
                "tertiaryAdminArea": "Ealing",
                "postalCode": "W5 3",
                "locality": "London",
                "adminArea": "England",
                "subAdminArea": "London",
                "thoroughfare": "Uxbridge"
            },
            "poi": {
                "rating": 0.0,
                "icon": "https://lfcontentcenterdev.hwcloudtest.cn/pub_1/HuaweiMaps_camp_0_9/e6/v3/CHjCEVE0QIGm1vZ818xJug/AB03AD44F3699AD8C2F13114FFF4DE4E.png",
                "poiTypes": [
                    "RESTAURANT"
                ],
                "websiteUrl": "http://www.danterestaurant.co.uk",
                "childrenNodes": [],
                "hwPoiTypes": [
                    "RESTAURANT"
                ],
                "comments": {
                    "commentInfo": {
                        "data": [],
                        "selfComments": []
                    },
                    "starInfo": {
                        "averageRating": "0.0"
                    }
                },
                "internationalPhone": "+442089922727",
                "phone": "+442089922727"
            },
            "viewport": {
                "southwest": {
                    "lng": -0.289133516242983,
                    "lat": 51.50895816679441
                },
                "northeast": {
                    "lng": -0.285046483757017,
                    "lat": 51.51150183320559
                }
            },
            "name": "Dante",
            "siteId": "854802363920551808",
            "location": {
                "lng": -0.28709,
                "lat": 51.51023
            }
        },
        {
            "formatAddress": "Thomas Street, Bedwas Trethomas and Machen, Wales CF83 8DP the United Kingdom",
            "address": {
                "country": "the United Kingdom",
                "countryCode": "GB",
                "tertiaryAdminArea": "Caerphilly",
                "subLocality": "Bedwas Trethomas and Machen",
                "postalCode": "CF83 8DP",
                "locality": "Bedwas Trethomas and Machen",
                "adminArea": "Wales",
                "subAdminArea": "Caerphilly",
                "thoroughfare": "Thomas Street"
            },
            "poi": {
                "rating": 0.0,
                "icon": "https://lfcontentcenterdev.hwcloudtest.cn/pub_1/HuaweiMaps_camp_0_9/25/v3/iItxEYzaTOy2Aa2KHpBYGA/BC0A9AB8F722780F35F6B48C3C4D8EB3.png",
                "poiTypes": [
                    "POINT_OF_INTEREST"
                ],
                "childrenNodes": [],
                "hwPoiTypes": [
                    "COMPUTER_AND_DATA_SERVICES_CORPORATION"
                ],
                "comments": {
                    "commentInfo": {
                        "data": [],
                        "selfComments": []
                    },
                    "starInfo": {
                        "averageRating": "0.0"
                    }
                },
                "internationalPhone": "",
                "phone": ""
            },
            "viewport": {
                "southwest": {
                    "lng": -3.1832121946895007,
                    "lat": 51.59077216679441
                },
                "northeast": {
                    "lng": -3.1791178053104994,
                    "lat": 51.593315833205594
                }
            },
            "name": "Dantas",
            "siteId": "853741904358425216",
            "location": {
                "lng": -3.181165,
                "lat": 51.592044
            }
        }
    ],
    "returnDesc": "OK"
}
```

## 调用示例

```screen
public class GeocodingService {
    public static final String ROOT_URL = "https://siteapi.cloud.huawei.com/mapApi/v1/siteService/geocode";

    public static final String connection = "?key=";

    public static final MediaType JSON = MediaType.parse("application/json; charset=utf-8");

    public static void forwardGeocoding(String apiKey) throws UnsupportedEncodingException {
        JSONObject json = new JSONObject();

        try {
            json.put("address", "Cleary Garden,Queen Victoria St,London");
            json.put("countryCode", "GB");
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
                Log.e("ForwardGeocoding", e.toString());
            }

            @Override
            public void onResponse(Call call, Response response) throws IOException {
                Log.d("ForwardGeocoding", response.body().string());
            }
        });
    }
}
```

