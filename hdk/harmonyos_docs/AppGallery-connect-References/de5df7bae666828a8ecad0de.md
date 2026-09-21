---
name: document/cn/AppGallery-connect-References/agc-ainetworking-interfaceinvoking_boxes-0000002346793437
title: 中文网页&新闻&工具类垂域box服务接口调用
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agc-ainetworking-interfaceinvoking_boxes-0000002346793437
---

# 中文网页&新闻&工具类垂域box服务接口调用

## 接口描述

输入query，支持查询中文网页、新闻、工具类垂域BOX

## 接口地址

https://connect-api.cloud.huawei.com/api/aiNetworking/v1/webBoxSearch

## 调用方式

### 请求参数

请求头

|**参数名称**|**可选**|**类型**|**参数说明**|
|:--------------|:-----|:-----|:------------------------------------------------|
|X-Api-Key|必选|String|填写API密钥|
|Content-Type|可选|String|填写 application/json|
|Accept-Encoding|可选|String|以"Accept-Encoding: gzip"方式增加此参数，用于gzip压缩，优化网络传输时延|
|Connection|可选|String|以"Connection: keep-alive"方式增加此参数，用于开启长连接，优化网络传输时延|

请求体

|**参数名称**|**可选**|**类型**|**参数说明**|
|:--------|:-----|:------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|query|必选|String|查询词条|
|freshness|可选|String|指定时间范围 * oneDay：一天内 * oneWeek：一周内 * oneMonth：一个月内 * oneYear：一年内 * YYYY-MM-DD..YYYY-MM-DD：自定义日期范围。从日期A（包含）至日期B（包含）区间段内发文的内容，如"2025-10-03..2025-11-03" 或"2025-05-03..2025-05-03" * noLimit：不限 默认值为noLimit 注：自定义日期范围，如若日期超过当前日期 或 日期格式非法时，则过滤条件无效|
|count|必选|Integer|输入要查询的数量，取值范围是大于0小于等于50（实际返回结果可能会小于count指定的数量）|
|sites|可选|String|指定站点查找结果(仅针对网页检索结果生效，对应响应字段为webResult，数量限制最多20个), 格式如：["www.pku.edu.cn","www.sz.gov.cn"]|
|category|可选|String|查询分类，指定后只返回指定类型的搜索结果，多个行业使用逗号分隔。支持可选值： * finance：金融 * medical：医疗 * technology：科技 * news：新闻 格式如：["finance", "technology"]|

### 响应结果

（1）中文网页响应体参数

|**参数名称**|**可选**|**类型**|**参数说明**|
|:--------|:-----|:------------|:-------------------------------------------------------------------------------------------------------------------------------------|
|code|必选|Int|响应错误码，参见[错误码](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agc-ainetworking-errorcode-0000002315935685)。|
|msg|必选|String|响应信息描述|
|webResult|必选|List<webPage>|网页搜索结果列表，其中rank与box一并排序|
|boxResult|可选|List<Box>|Box搜索结果列表，其中rank与webPage一并排序|

（2）响应结果格式

* webPage：

|**参数名称**|**可选**|**类型**|**参数说明**|
|:-------|:-----|:-----|:------------|
|url|必选|String|落地页url|
|title|必选|String|标题|
|content|必选|String|正文|
|chunk|必选|String|摘要|
|siteName|可选|String|站点名称|
|siteIcon|可选|String|站点图标，数据格式为url|

* Box：

|**参数名称**|**可选**|**类型**|**参数说明**|
|:-------|:-----|:------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|boxType|必选|String|枚举类型： * weatherpage 天气 * exchangeratepage 汇率 * calendarpage日历 * calculatorpage计算器 * conversionpage换算 * goldpricepage 金价 * postcodepage 邮编 * areacodepage 区号 * stockspage 股票 * wikipage 百科 * lotterypage 彩票 * timezonepage 时区 * wordsidiomspage 字词成语 * poetrypage 诗词 * whitekgpage 白库kg|
|summary|必选|String|Box的摘要信息|
|rank|必选|Integer|rank排序，最小从0开始，与WebPage统一排序|

