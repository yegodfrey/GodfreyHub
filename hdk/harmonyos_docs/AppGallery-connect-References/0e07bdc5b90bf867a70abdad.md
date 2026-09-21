---
name: document/cn/AppGallery-connect-References/server-rest-rollback-0000001136018714
title: 回退配置信息到指定版本
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/server-rest-rollback-0000001136018714
---

# 回退配置信息到指定版本

## 功能介绍

此接口用于项目下指定应用的配置信息回退到指定版本。

## 使用约束

* 支持最多90天300个历史版本管理和回退能力。
* 接口调用次数限制：
  * 5次/每IP地址/秒
  * 1000次/每IP地址/小时
* 接口调用者的角色：管理员、APP管理员、开发、运营。

## 接口原型

|承载协议|HTTPS POST|
|-----|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|接口方向|开发者服务器->华为服务器|
|接口URL|https://{domain}/api/remote-config/v1/config/rollback 中国站点的domain：connect-api.cloud.huawei.com 德国站点的domain：connect-api-dre.cloud.huawei.com 新加坡站点的domain：connect-api-dra.cloud.huawei.com 俄罗斯站点的domain：connect-api-drru.cloud.huawei.com > 注意 > 调用[获取Token](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agcapi-obtain_token-0000001158365043)接口时使用的域名必须与本接口域名保持一致，例如本接口使用"connect-api-dre.cloud.huawei.com"，则调用[获取Token](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agcapi-obtain_token-0000001158365043)接口必须使用"https://connect-api-dre.cloud.huawei.com/api/oauth2/v1/token"。|
|数据格式|请求：Content-Type: application/json 响应：Content-Type: application/json|

## 请求参数

### Header

> 说明
>
> 本接口支持使用Service Account方式和API客户端方式，二者区别请参见[获取服务端API授权](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-remoteconfig-getapicredentials-0000002539183415)。

**Service Account** **方式：**

|参数名称|必选(M)/可选(O)|类型|参数说明|
|:------------|:----------|:-----|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|Authorization|M|String|认证信息，格式为"Authorization: Bearer *${JWT}* "。JWT为[通过Service Account方式获取授权](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-remoteconfig-getapicredentials-0000002539183415#section104621343151212)中获取的鉴权令牌。|
|productId|M|String|项目ID，查询方法可参见[查看应用信息](https://developer.huawei.com/consumer/cn/doc/app/agc-help-view-app-info-0000002282674569)。|
|appId|M|Long|应用ID，查询方法可参见[查看应用信息](https://developer.huawei.com/consumer/cn/doc/app/agc-help-view-app-info-0000002282674569)。|

**API客户端方式：**

|参数名称|必选(M)/可选(O)|类型|参数说明|
|:------------|:----------|:-----|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|client_id|M|String|客户端ID，获取方法参考[创建API客户端](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-remoteconfig-getapicredentials-0000002539183415#section14162113625516)。|
|Authorization|M|String|认证信息，格式为"Authorization: Bearer ${access_token}"。access_token为[获取Token](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agcapi-obtain_token-0000001158365043)中获取的access_token。|
|productId|M|String|项目ID，查询方法可参见[查看应用信息](https://developer.huawei.com/consumer/cn/doc/app/agc-help-view-app-info-0000002282674569)。|
|appId|M|Long|应用ID，查询方法可参见[查看应用信息](https://developer.huawei.com/consumer/cn/doc/app/agc-help-view-app-info-0000002282674569)。|

### Body

|参数名称|必选(M)/可选(O)|参数类型|参数说明|
|:------|:----------|:---|:--------|
|version|M|Long|回退的目标版本号。|

## 请求示例

```screen
POST /api/remote-config/v1/config/rollback HTTP/1.1
Host: connect-api.cloud.huawei.com
client_id: 68106*******60768
Authorization: Bearer eyJraW************************rTeTU
productId: 99038*******69307
appId: 400***777
{
  "version": 10
}
```

## 响应参数

|参数|必选(M)/可选(O)|参数类型|描述|
|:------|:----------|:-----|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|ret|M|String|包含返回码及描述信息的JSON字符串，格式为{"code":*retcode* , "msg": "*description* "}，retcode为返回码，description为返回码描述信息。返回码请参见[错误码](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/server-rest-errorcde-0000001186567365)。|
|version|O|Long|最新版本号。|

## 响应示例

```screen
{
    "ret": {
        "code": 0,
        "msg": "OK"
    },
    "version": 13
}
```

## 调用示例

```screen
public static void rollbackConfig(String domain, String clientId, String token, String productId, Long appId,
	Long version) {
	HttpPost post = new HttpPost(domain + "/api/remote-config/v1/config/rollback");
	post.setHeader("Authorization", "Bearer " + token);
	post.setHeader("client_id", clientId);
	post.setHeader("productId", productId);
	post.setHeader("appId", String.valueOf(appId));
	JSONObject keyString = new JSONObject();
	keyString.put("version", version);
	StringEntity entity = new StringEntity(keyString.toString(), StandardCharsets.UTF_8);
	entity.setContentEncoding("UTF-8");
	entity.setContentType("application/json");
	post.setEntity(entity);
	try {
		CloseableHttpClient httpClient = HttpClients.createSystem();
		CloseableHttpResponse httpResponse = httpClient.execute(post);
		int statusCode = httpResponse.getStatusLine().getStatusCode();
		if (statusCode == HttpStatus.SC_OK) {
			BufferedReader br =
				new BufferedReader(new InputStreamReader(httpResponse.getEntity().getContent(), Consts.UTF_8));
			String result = br.readLine();
			System.out.println(result);
		}
	} catch (Exception e) {
		System.out.println("Error Log");
	}
}
```

