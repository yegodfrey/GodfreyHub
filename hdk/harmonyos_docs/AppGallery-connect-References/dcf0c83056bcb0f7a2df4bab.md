---
name: document/cn/AppGallery-connect-References/agcapi-respackapi-uploadapplyfor-0000002328236376
title: 资源包文件上传申请
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agcapi-respackapi-uploadapplyfor-0000002328236376
---

# 资源包文件上传申请

#### 功能介绍

获取上传地址和必要参数，根据申请返回的信息完成文件上传。

若待上传的资源包文件超过5GB，需要分段上传文件。  

#### 接口原型

|承载协议|HTTP POST|
|接口方向|开发者服务器 -\>华为服务器|
|接口URL|https://connect-api.cloud.huawei.com/api/games-background-assets-service/v1/open-gw/dev/{devId}/package-file/apply|
|数据格式|请求消息：Content-Type: application/json 响应消息：Content-Type: application/json|
|-----|------------------------------------------------------------------------------------------------------------------|

#### 请求参数

#### Header

|参数名称|必选(M)/可选(O)|类型|参数说明|
|:------------|:----------|:-----|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|client_id|M|String|客户端ID，获取方法参考[创建API客户端](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agcapi-getstarted-0000001111845114#section103mcpsimp)，其中"角色"支持勾选"APP管理员"、"管理员"、"运营"。|
|Authorization|M|String|认证信息，格式为"Authorization: Bearer ${access_token}"。access_token为[获取Token](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agcapi-obtain_token-0000001158365043)中获取的access_token。|
|requestId|M|String|请求ID，最大长度128个字符，必须唯一。开发者自定义，用于鉴别是否是重复请求。|

#### Path

|参数名称|必选(M)/可选(O)|类型|参数说明|
|:----|:----------|:---|:-----|
|devId|M|Long|开发者ID。|

#### Body

|参数名称|必选(M)/可选(O)|类型|参数说明|
|:-----------------|:----------|:------------------------------------------------------------------------|:-------|
|uploadFileApplyReq|M|[GWOpUploadFileApplyReq](#ZH-CN_TOPIC_0000002328236376__li19444185912162)|上传文件请求体。|

* GWOpUploadFileApplyReq  

  |参数名称|必选(M)/可选(O)|类型|参数说明|
  |:----------------|:----------|:-----------------------------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------|
  |appId|M|String|游戏APP ID，获取方法参考[查询应用信息](https://developer.huawei.com/consumer/cn/doc/development/HMS-Guides/appgallery_queryappinfo)。|
  |versionId|M|Long|资源包版本ID。|
  |fileName|M|String|应用包文件名称，最大长度为255个字符，且名称不能包含特殊字符（\|）、（:）、（/）、（\\）、（\*）、（?）、（"）、（\<）、（\>）。|
  |fileSHA256|M|String|升级包文件SHA256值。|
  |fileLength|M|Long|升级包文件大小（字节数）。|
  |fileType|M|Int|升级包文件类型： * 0：apk-resource|
  |filePartApplyInfo|O|List\<[GWFilePartApplyInfo](#ZH-CN_TOPIC_0000002328236376__li74031824101717)\>|分段上传信息，分段数取值\[0,1000\]。 要求待上传的资源包文件不能低于5MB。 若待上传的资源包文件超过5GB，建议分段上传文件。|

  * GWFilePartApplyInfo  

    |参数名称|必选(M)/可选(O)|类型|参数说明|
    |:---------|:----------|:-----|:-----------------|
    |partNo|O|String|分段序号。最大长度为1024个字符。|
    |fileSHA256|O|String|分段升级包文件SHA256值。|
    |fileLength|O|Long|分段升级包文件大小（字节数）。|

#### 请求示例

```
POST /api/games-background-assets-service/v1/open-gw/dev/12***3344/package-file/apply HTTP/1.1
Host: connect-api.cloud.huawei.com
client_id: 41*****7168
Authorization: Bearer ******
requestId: *****
{
    "appId": "12345678",
    "versionId": 99,
    "fileName": "Demo",
    "fileSHA256": "06***d762",
    "fileLength": 100,
    "fileType": 127,
    "filePartApplyInfo": [
      {
        "partNo": "23",
        "fileSHA256": "06***d762",
        "fileLength": 100
      }
    ]
  }
```

#### 响应参数

|参数名称|必选(M)/可选(O)|类型|参数说明|
|:---|:----------|:------------------------------------------------------------------------|:--------------------------------------------------------------------------------------------|
|ret|M|[GbasRet](#ZH-CN_TOPIC_0000002328236376__li1750915382310)|包含返回码及描述信息的JSON字符串，格式为{"code":retcode, "msg": "description"}，retcode为返回码，description为返回码描述信息。|
|data|M|[GWPackageUploadApplyInfo](#ZH-CN_TOPIC_0000002328236376__li121095061719)|文件上传返回体。|

* GbasRet  

  |参数名称|必选(M)/可选(O)|类型|参数说明|
  |:---|:----------|:-----|:--------------------------------------------------------------------------------------------------------------------------------------|
  |code|O|Int|返回码，请参见[错误码](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agcapi-respackapi-returncode-0000002328236396)。|
  |msg|O|String|返回码描述信息。|

* GWPackageUploadApplyInfo  

  |参数名称|必选(M)/可选(O)|类型|参数说明|
  |:------------------|:----------|:------------------------------------------------------------------------------|:------|
  |fileId|O|String|文件ID。|
  |uploadTime|O|Long|上传时间。|
  |filePartUploadInfos|O|List\<[GWFilePartUploadInfo](#ZH-CN_TOPIC_0000002328236376__li13859181319182)\>|升级文件信息。|

  * GWFilePartUploadInfo  

    |参数名称|必选(M)/可选(O)|类型|参数说明|
    |:-----------|:----------|:-----------------------------------------------------------------------------|:------|
    |partNo|O|String|文件分段序号。|
    |partObjectId|O|String|分段对象。|
    |uploadInfo|O|List\<[GWPackageUploadInfo](#ZH-CN_TOPIC_0000002328236376__li10194439181816)\>|上传信息。|

    * GWPackageUploadInfo  

      |参数名称|必选(M)/可选(O)|类型|参数说明|
      |:------------|:----------|:----------------------------------------------------------------------|:-------------|
      |uploadMethod|M|String|上传http method。|
      |uploadUrl|M|String|上传URL地址。|
      |uploadHeaders|M|List\<[GWUploadHeader](#ZH-CN_TOPIC_0000002328236376__li193391676196)\>|文件上传请求头列表。|

      * GWUploadHeader  

        |参数名称|必选(M)/可选(O)|类型|参数说明|
        |:----|:----------|:-----|:---|
        |key|O|String|键。|
        |value|O|String|值。|

#### 响应示例

```
{
    "ret": {
        "code": 0,
        "msg": "success"
    },
    "data": {
        "fileId": "1734842730388976000",
        "uploadTime": 0,
        "filePartUploadInfos": [
        {
            "partNo": "20",
            "partObjectId": "string",
            "uploadInfo": {
                "uploadMethod": "POST",
                "uploadUrl": "https://contentcenter-test-bj4-001.obs.dualstack.cn-north-4.mycloud.cn/GameCenter_resourcePackage_900_9/6f/v3/xxxx.mp4",
                "uploadHeaders": [
                {
                    "key": "Content-Type",
                    "value": "video/mp4"
                }
              ]
           }
        }
      ]
   }
}
```

#### 调用示例

```
public static JSONObject uploadFileApply(String domain, String client_id, String token, String requestId) {
    HttpPost httpReq = new HttpPost(domain + "/api/games-background-assets-service/v1/open-gw/dev/12***3344/package-file/apply");
    httpReq.setHeader("client_id", client_id);
    httpReq.setHeader("Authorization", "Bearer " + token);
    httpReq.setHeader("requestId", requestId);
    JSONObject keyString = new JSONObject();
    //Request Body
    keyString.put("appId", "12345678");
    keyString.put("versionId", "0");
    keyString.put("fileName", "Demo");
    keyString.put("fileSHA256", "06***d762");
    keyString.put("fileLength", 100L);
    keyString.put("fileType", 0);
    GWFilePartApplyInfo gwFilePartApplyInfo = new GWFilePartApplyInfo();
    gwFilePartApplyInfo.setPartNo("100");
    gwFilePartApplyInfo.setFileSHA256("37***0b45");
    gwFilePartApplyInfo.setFileLength(1000);
    List<GWFilePartApplyInfo> filePartApplyInfo = new ArrayList<>();
    filePartApplyInfo.add(gwFilePartApplyInfo);
    keyString.put("filePartApplyInfo", filePartApplyInfo);
    StringEntity entity = new StringEntity(keyString.toString(), Charset.forName("UTF-8"));
    entity.setContentEncoding("UTF-8");
    entity.setContentType("application/json");
    httpReq.setEntity(entity);
    try {
        CloseableHttpClient httpClient = HttpClients.createDefault();
        CloseableHttpResponse httpResponse = httpClient.execute(httpReq);
        int statusCode = httpResponse.getStatusLine().getStatusCode();
        if (statusCode == HttpStatus.SC_OK) {
            BufferedReader br = new BufferedReader(new InputStreamReader(httpResponse.getEntity().getContent(), Consts.UTF_8));
            String result = br.readLine();
            JSONObject object = JSON.parseObject(result);
            return object;
        }
    } catch (Exception e) {
        e.printStackTrace();
    }
    return null;
}
```

