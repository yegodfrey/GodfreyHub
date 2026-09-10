---
name: document/cn/AppGallery-connect-References/agcapi-couponexport-0000001111845104
title: 获取优惠券活动的报表
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agcapi-couponexport-0000001111845104
---

# 获取优惠券活动的报表

#### 功能介绍

获取优惠券活动的报表CSV或EXCEL文件。接口调用者的角色：账号持有者、管理员、App管理员、运营、财务。  

#### 使用约束

本接口仅支持中国大陆地区发布的应用。

为了防止注入风险，优惠券活动的报表内容中的"活动名称"如果存在特殊字符（"+"或"-"或"@"或"="），则会对该"活动名称"做转义处理。转义处理的规则是在待转义字符串前加tab键，然后将整个字符串用双引号括起来。  

#### 接口原型

|承载协议|HTTPS GET|
|接口方向|开发者服务器 -\> 华为服务器|
|接口URL|https://connect-api.cloud.huawei.com/api/report/distribution-operation-quality/v1/activityCouponExport/{appId}|
|数据格式|请求：Content-Type: application/json 响应：Content-Type: application/json|
|-----|--------------------------------------------------------------------------------------------------------------|

#### 请求参数

<br />

#### Header

![](https://media:801773137285348465)  
本接口支持使用Service Account方式、API客户端方式和OAuth客户端方式，区别请参见[使用入门](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agcapi-getstarted-0000001111845114)。

Service Account方式：  

|参数名称|必选(M)/可选(O)|类型|参数说明|
|:------------|:----------|:-----|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|Authorization|M|String|认证信息，格式为"Authorization: Bearer ${JWT}"。JWT为[通过Service Account方式获取授权](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agcapi-getstarted-0000001111845114#section1785535363715)中获取的鉴权令牌。|

API客户端方式：  

|参数名称|必选(M)/可选(O)|类型|参数说明|
|:------------|:----------|:-----|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|client_id|M|String|客户端ID，获取方法参考[创建API客户端](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agcapi-getstarted-0000001111845114#section103mcpsimp)。|
|Authorization|M|String|认证信息，格式为"Authorization: Bearer ${access_token}"。access_token为[获取Token](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agcapi-obtain_token-0000001158365043)中获取的access_token。|

OAuth客户端方式：  

|参数名称|必选(M)/可选(O)|类型|参数说明|
|:----------|:----------|:-----|:---------------------------------------------------------------------------------------------------------------------------------------------------------------|
|teamId|M|String|开发者所在团队的团队ID，可通过[获取团队列表](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agcapi-getteamlist-0000001158245075)接口获取。|
|oauth2Token|M|String|认证信息，传入[获取用户授权码](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agcapi-getstarted-0000001111845114#section949717114392)中获取的Access Token。|

#### Path

|参数名称|必选(M)/可选(O)|类型|参数说明|
|:----|:----------|:-----|:--------------------------------------------------------------------------------------------------------------------|
|appId|M|String|应用ID，获取方法参考[查询应用信息](https://developer.huawei.com/consumer/cn/doc/distribution/app/agc-help-appinfo-0000001100014694)。|

#### Query

|参数名称|必选(M)/可选(O)|类型|参数说明|
|:-------------------|:----------|:-------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------|
|language|M|String|查询语言，报表title会根据不同语言来展现，只支持简体中文（zh-CN），美式英文（en-US），俄文（ru-RU）。|
|startTime|M|String|查询开始时间，UTC时间，格式为YYYYMMDD。 startTime和endTime之间不超过180天。|
|endTime|M|String|查询结束时间，UTC时间，格式为YYYYMMDD。 startTime和endTime之间不超过180天。|
|filterCondition|O|List\<String\>|过滤器，目前只支持"activityId"，表示基于活动过滤。如果不传此参数默认无过滤器。 URL示例：\&filterCondition=activityId|
|filterConditionValue|O|List\<String\>|过滤器对应的值，例如过滤器是"activityId"，此参数的取值为活动ID。目前只支持输入1个活动ID，不支持输入多个活动ID。 活动ID可在AppGallery Connect网站应用开发页面的"运营 \> 活动运营 \> 活动管理"页面查看。 URL示例：\&filterConditionValue=123456|
|exportType|O|String|导出文件类型，取值范围： * CSV：导出CSV文件格式 * EXCEL：导出Excel文件格式 默认值：CSV。|

#### 响应参数

|参数名称|必选(M)/可选(O)|类型|参数说明|
|:-------|:----------|:-----|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|fileURL|M|String|导出CSV文件的路径。 报表文件中字段语言由language参数指定。以报表字段英文为例，您可以点击[文件样例.zip](https://media:801773137285393466)下载样例文件。 文件中包含的字段说明请参见[优惠券活动的报表数据说明](#ZH-CN_TOPIC_0000001111845104__p23515435153)。|
|packName|M|String|应用包名。|
|ret|M|String|包含返回码及描述信息的JSON字符串，格式为{"code":retcode, "msg": "description"}，retcode为返回码，description为返回码描述信息。|

优惠券活动的报表数据说明  

|字段名（中文）|字段名（英文）|字段名（俄语）|字段含义|
|:------|:---------------------|:-------------------------|:------------|
|活动ID|ID|ID|优惠券活动ID。|
|活动名称|Name|Имя|优惠券活动名称。|
|活动时间|Time|Время|优惠券活动开展有效时间。|
|发放日期|Allocated|Распределено|活动优惠券奖品的发放日期。|
|发放金额（元）|Allocated amount (CNY)|Распределенная сумма (CNY)|所查询活动的总发放金额。|
|消费金额（元）|Consumed amount (CNY)|Потраченная сумма (CNY)|所查询活动的总消费金额。|
|过期金额（元）|Expired amount (CNY)|Просроченная сумма (CNY)|所查询活动的总过期金额。|
|剩余金额（元）|Remaining amount (CNY)|Оставшаяся сумма (CNY)|所查询活动的总剩余金额。|

