---
name: document/cn/AppGallery-connect-References/agcapi-getteamlist-0000001158245075
title: 获取团队列表
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agcapi-getteamlist-0000001158245075
---

# 获取团队列表

## 功能介绍

获取开发者的团队账号列表信息。接口调用者的角色：账号持有者、管理员、App管理员、开发。

## 接口原型

|承载协议|HTTPS GET|
|-----|--------------------------------------------------------------------------------------|
|接口方向|开发者服务器 -> 华为服务器|
|接口URL|https://connect-api.cloud.huawei.com/api/ups/user-permission-service/v1/user-team-list|
|数据格式|请求：Content-Type: application/json 响应：Content-Type: application/json|

## 请求参数

### Header

> 说明
>
> 本接口只支持OAuth客户端方式。

|参数名称|必选(M)/可选(O)|类型|参数说明|
|:----------|:----------|:-----|:---------------------------------------------------------------------------------------------------------------------------------------------------------------|
|oauth2Token|M|String|认证信息，传入[获取用户授权码](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agcapi-getstarted-0000001111845114#section949717114392)中获取的Access Token。|

## 响应参数

|参数名称|必选(M)/可选(O)|类型|参数说明|
|:----|:----------|:---------------------------------------------------------|:-------------------------------------------------------------------------------------------------|
|teams|M|List<[Team](#ZH-CN_TOPIC_0000001158245075__p957917412411)>|团队列表信息。|
|ret|M|String|包含返回码及描述信息的JSON字符串，格式为{"code":*retcode* , "msg": "*description*"}，retcode为返回码，description为返回码描述信息。|

**Team**

|参数名称|必选(M)/可选(O)|类型|参数说明|
|:------------|:----------|:------|:-------------------------------------------------|
|name|M|String|团队名称。|
|id|M|String|团队ID。|
|countryCode|M|String|团队所属国家的国家码。|
|userType|M|Integer|团队账号类型： * 1：个人开发者 * 2：企业开发者|
|siteId|M|Integer|团队账号持有者所在站点。 * 1：中国站点 * 5：新加坡站点 * 7：德国站点 * 8：俄罗斯站点|
|upSiteId|O|Integer|团队账号持有者UP注册地所在站点。|
|lastLoginTime|O|String|账号最后登录时间。 格式为：YYYY-MM-DD HH:mm:ss|
|isMirror|M|Boolean|是否为镜像账号。|

## 调用示例

```screen
public static void getUserTeamList(String domain, String oauth2Token) {
HttpGet get = new HttpGet(domain + "/ups/user-permission-service/v1/user-team-list");
get.setHeader("oauth2Token", oauth2Token);
try {
	CloseableHttpClient httpClient = HttpClients.createDefault();
	CloseableHttpResponse httpResponse = httpClient.execute(get);
	int statusCode = httpResponse.getStatusLine().getStatusCode();
	if (statusCode == HttpStatus.SC_OK) {
		BufferedReader br =
				new BufferedReader(new InputStreamReader(httpResponse.getEntity().getContent(), Consts.UTF_8));
		String result = br.readLine();
		JSONObject object = JSON.parseObject(result);
		System.out.println(object.get("ret"));
		Teams[] teams = (Teams[]) object.get("teams");
	}	}
catch (Exception e) {

}}
```

