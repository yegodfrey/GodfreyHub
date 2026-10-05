---
name: document/cn/SmartSpace-References/set-openness-port-0000001505156021
title: 设置楼宇开放端口（废弃）
uri: https://developer.huawei.com/consumer/cn/doc/SmartSpace-References/set-openness-port-0000001505156021
---

# 设置楼宇开放端口（废弃）

## 接口描述

setBuildPort

设置底盒放行监听端口,限制一个插件最多允许开放4个端口

## 适用平台

Android

## 请求参数

通用参数

|参数|类型|描述|
|:-----------|:-----|:----|
|functionName|String|接口名称|
|accessId|String|接口鉴权码|
|packageName|String|插件包名|

接口定制参数

|参数|类型|描述|
|:----|:-----|:-------------------------------------------|
|Ports|int 数组|放行端口（最多传4个） 范围1000~65535 [123,456,789,65535]|

## 请求参数样例

```codeblock
{
	"functionName": "setBuildPort",
	"accesssId": "xxxx-xxx-xx-xxx-xxxx-xxx",
	"packageName": "com.huawei.xxx",
	"Ports": [
		123,
		456,
		789
	]
}
```

## 响应参数

NA

## 错误码

code为0：成功

code为-1：失败
