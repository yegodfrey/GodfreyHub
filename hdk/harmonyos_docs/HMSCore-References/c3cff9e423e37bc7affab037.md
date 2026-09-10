---
name: document/cn/HMSCore-References/tile-service-api-dataset-update-0000001259448471
title: 更新瓦片数据
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-References/tile-service-api-dataset-update-0000001259448471
---

# 更新瓦片数据

#### 功能介绍

根据指定的数据ID和数据类型，上传瓦片数据文件更新瓦片数据。  

#### 场景描述

提供的自定义图层服务，适用于对地图图层有特殊需求的应用场景，如制作火灾图、月球图、温度图等。  

#### 使用约束

* 上传的数据文件支持格式：json、tif、zip
* 上传的数据文件大小不超过300MB。
* 使用前，请联系华为地图运营团队（[mapteam@huawei.com](mailto:mapteam@huawei.com)）开通Tile Service权限。  

#### 接口原型

|承载协议|HTTPS PUT|
|接口方向|开发者服务器 -\> 华为地图服务服务器|
|接口URL|https://mapapi.cloud.huawei.com/mapApi/v1/dataset|
|数据格式|响应消息：Content-Type: application/json|
|-----|-------------------------------------------------|

#### 请求参数

![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20251009193608.84029456123497865072584986809122:50001231000000:2800:40536F1AC677ED5D8EB8F8BD74900AD7B8CC9AAF9054EB0EEDA8A47D60FDE39A.png)  
Request Header中的 Authorization 和Query String中的 key 至少需要存在一个。

Request Header  

|参数|是否必选|参数类型|描述|
|:------------|:---|:---------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|Content-Type|是|application/json|请求消息的数据格式。|
|Authorization|否|String|AT或者API Key，推荐用AT。 说明： AT认证 * 获取AT认证的方式请参见[基于OAuth 2.0获取应用级AT](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/open-platform-oauth-0000001053629189#section155891726174616), AT有效期是1个小时。 * 使用AT认证时推荐新申请AT接入MapKit。 API KEY认证 * 获取API KEY的方式请参见[获取API密钥](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/web-api-preparations-0000001077961278#section8881246152413)。 * 使用"API密钥"时需要调用URLEncoder.encode("Your apiKey", "UTF-8")方法对API密钥进行encodeURI编码。例如，原始API密钥：ABC/DFG+ ，转换结果：ABC%2FDFG%2B。 * 建议"API密钥"设置安全保护措施，具体请参见[如何保护API密钥](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/faq-0000001050166999#section1237862534718)。|

Query String  

|参数|是否必选|参数类型|描述|
|:--|:---|:-----|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|key|否|String|鉴权密钥，申请参见[获取API密钥](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/web-api-preparations-0000001077961278#section8881246152413)。 说明： 1. 获取API KEY的方式请参见[获取API密钥](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/web-api-preparations-0000001077961278#section8881246152413)。 2. 使用API key时需要调用URLEncoder.encode("Your apiKey", "UTF-8")方法对API key进行encodeURI编码。例如：原始API key：ABC/DFG+ ，转换结果：ABC%2FDFG%2B。|

Request Body  

|参数|是否必选|参数类型|描述|
|:---|:---|:-----|:--------------------------------------|
|id|是|String|数据ID。|
|type|是|String|数据类型。 * VECTOR：矢量 * RASTER：栅格|
|file|是|file|上传的数据文件，文件大小不超过300MB，支持格式：json、tif、zip。|

#### 请求示例

#### 矢量数据

```
PUT https://mapapi.cloud.huawei.com/mapApi/v1/dataset?key=API KEY   HTTP/1.1    
Content-Type: application/json    
Accept: application/json   
{ 
  "id": "1210", 
  "type": "VECTOR", 
  "file": "moon.json"
}
```

#### 栅格数据

```
PUT https://mapapi.cloud.huawei.com/mapApi/v1/dataset?key=API KEY   HTTP/1.1    
Content-Type: application/json    
Accept: application/json   
{ 
  "id": "1210", 
  "type": "VECTOR", 
  "file": "moon.zip"
}
```

#### 栅格数据压缩包分片

```
PUT https://mapapi.cloud.huawei.com/mapApi/v1/dataset?key=API KEY   HTTP/1.1    
Content-Type: application/json    
Accept: application/json   
{ 
  "id": "1210", 
  "type": "VECTOR", 
  "file": "moon.z01"
}
```

#### 响应参数

状态码为200时：

Response Header  

|参数|是否必选|参数类型|描述|
|:-----------|:---|:---------------|:---------|
|Content-Type|是|application/json|响应消息的数据格式。|

Response Body  

|参数|参数类型|描述|
|:---------|:-----------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------------|
|returnCode|String|返回码，具体请参见[错误码](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/error-code-0000001050161430)。|
|returnDesc|String|返回值描述。|
|data|[Dataset](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/output-params-0000001050161434#section8465194365317)|更新的瓦片原始数据。|

#### 响应示例

状态码为200时：

```
HTTP/1.1 200 OK
Content-type: application/json
{ 
    "returnCode": "0",
    "returnDesc": "OK",
    "data": {
        "id": "20220304002",
        "type": "RASTER",
        "fileNum": 1,
        "fileSize": 8117,
        "recordNum": 0,
        "uploadDuration": 0,
        "createTime": 1646384205000,
        "modifiedTime": 1646385799238
    } 
}
```

#### 调用示例

```
"AT认证" 
public class UpdateDataSetService { 
    public static final String ROOT_URL = "https://mapapi.cloud.huawei.com/mapApi/v1/dataset";
 
    public static final MediaType JSON = MediaType.parse("application/json; charset=utf-8"); 
 
    public static void updateDataSet(String accessToken) throws UnsupportedEncodingException { 
        JSONObject json = new JSONObject(); 
        try { 
            json.put("id", "20220307"); 
            json.put("type", "RASTER"); 
        } catch (JSONException e) { 
            Log.e("error", e.getMessage()); 
        } 
        RequestBody body = RequestBody.create(JSON, String.valueOf(json)); 
 
        OkHttpClient client = new OkHttpClient(); 
        Request request = 
                new Request.Builder().url(ROOT_URL).addHeader("Authorization", "Bearer " + accessToken) 
                        .post(body) 
                        .build(); 
 
        client.newCall(request).enqueue(new Callback() { 
            @Override 
            public void onFailure(Call call, IOException e) { 
                Log.e("updateDataSet", e.toString()); 
            } 
 
            @Override 
            public void onResponse(Call call, Response response) throws IOException { 
                Log.d("updateDataSet ", response.body().string()); 
            } 
        }); 
    } 
}
```

```
"API KEY认证"
public class UpdateDataSetService { 
    public static final String ROOT_URL = "https://mapapi.cloud.huawei.com/mapApi/v1/dataset";
 
    public static final String connection = "?key="; 
 
    public static final MediaType JSON = MediaType.parse("application/json; charset=utf-8"); 
 
    public static void updateDataSet(String apiKey) throws UnsupportedEncodingException { 
        JSONObject json = new JSONObject(); 
        try { 
            json.put("id", "20220307"); 
            json.put("type", "RASTER"); 
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
                Log.e("updateDataSet", e.toString()); 
            } 
 
            @Override 
            public void onResponse(Call call, Response response) throws IOException { 
                Log.d("updateDataSet ", response.body().string()); 
            } 
        }); 
    } 
}
```

