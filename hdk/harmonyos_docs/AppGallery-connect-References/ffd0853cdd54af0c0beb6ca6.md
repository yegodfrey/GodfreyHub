---
name: document/cn/AppGallery-connect-References/agcapi-fa-widget_analysis_export-0000001690467092
title: 获取元服务卡片分析的报表文件
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agcapi-fa-widget_analysis_export-0000001690467092
---

# 获取元服务卡片分析的报表文件

#### 功能介绍

获取元服务卡片分析的报表数据的CSV或者Excel文件地址。

如果接口调用者是普通开发者，则接口调用者的角色：账号持有者、国内管理员、App管理员、国内运营。  

#### 接口原型

|承载协议|HTTPS GET|
|接口方向|开发者服务器 -\> 华为服务器|
|接口URL|https://connect-api.cloud.huawei.com/api/report/distribution-operation-quality/v1/fa/widgetAnalysisExport/{appId}|
|数据格式|请求：Content-Type: application/json 响应：Content-Type: application/json|
|-----|-----------------------------------------------------------------------------------------------------------------|

#### 请求参数

<br />

#### Header

![](https://media:801773137285833473)  
本接口支持使用API客户端方式和OAuth客户端方式，区别请参见[使用入门](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agcapi-getstarted-0000001111845114)。

API客户端方式：  

|参数名称|必选(M)/可选(O)|类型|参数说明|
|:------------|:----------|:---------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|client_id|M|String|客户端ID。 获取方法参考[创建API客户端](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agcapi-getstarted-0000001111845114#section103mcpsimp)。|
|Authorization|M|String|认证信息。 格式为"Authorization: Bearer ${access_token}"。access_token为[获取Token](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agcapi-obtain_token-0000001158365043)中获取的access_token。|
|teamId|M|String(64)|主账号用户ID，即teamId。用于越权校验。|
|appId|M|String(64)|应用ID。 获取方法参考[查询应用信息](https://developer.huawei.com/consumer/cn/doc/distribution/app/agc-help-appinfo-0000001100014694)。|

OAuth客户端方式：  

|参数名称|必选(M)/可选(O)|类型|参数说明|
|:----------|:----------|:---------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------|
|oauth2Token|M|String|认证信息。 传入[获取用户授权码](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agcapi-getstarted-0000001111845114#section949717114392)中获取的Access Token。|
|teamId|M|String(64)|主账号用户ID，即teamId。用于越权校验。|
|appId|M|String(64)|应用ID。 获取方法参考[查询应用信息](https://developer.huawei.com/consumer/cn/doc/distribution/app/agc-help-appinfo-0000001100014694)。|

#### Query

|参数名称|必选(M)/可选(O)|类型|参数说明|
|:---------|:----------|:---------|:----------------------------------------------------------------------|
|language|O|String(10)|查询语言。 报表title会根据不同语言来展现。 只支持简体中文（zh-CN）, 美式英文（en-US），俄文（ru-RU）。 默认简体中文。|
|startTime|M|String|查询开始时间。 UTC时间。 格式：YYYYMMDD startTime和endTime之间不超过180天。|
|endTime|M|String|查询结束时间。 UTC时间。 格式：YYYYMMDD startTime和endTime之间不超过180天。|
|exportType|O|String|导出文件类型。 取值范围： * CSV：导出CSV文件格式 * EXCEL：导出Excel文件格式 默认值：CSV|

#### 响应参数

|参数名称|必选(M)/可选(O)|类型|参数说明|
|:------|:----------|:-----|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|fileURL|M|String|导出CSV或Excel文件的路径。 报表文件中字段语言由language参数指定。报表字段当前仅支持中文，您可以点击[文件样例.zip](https://media:801773137285911475)下载样例文件。 文件中包含的字段说明请参见[下载元服务卡片分析的报表数据说明](#ZH-CN_TOPIC_0000001690467092__zh-cn_topic_0000001659674016_p25111717122119)。|
|ret|M|String|包含返回码及描述信息的JSON字符串。 格式为{"code":retcode, "msg": "description"}，其中retcode为返回码，description为返回码描述信息。|

下载元服务卡片分析的报表数据说明  
![](https://media:801773137285860474)  
此报表数据会针对不同尺寸的卡片分别统计。  

|字段名|字段含义|
|:-------|:--------------------|
|点击次数|点击桌面卡片次数。|
|点击设备数|点击桌面卡片的设备数。|
|加桌设备数|用户主动添加元服务卡片到桌面行为的设备数。|
|加桌设备次日留存|加桌设备数次日保留在桌面的比率。|
|加桌设备三日留存|加桌设备数三日保留在桌面的比率。|
|加桌设备七日留存|加桌设备数七日保留在桌面的比率。|
|移除设备数|移除卡片的设备数。|
|留存设备数|卡片保留在桌面的设备数。|

