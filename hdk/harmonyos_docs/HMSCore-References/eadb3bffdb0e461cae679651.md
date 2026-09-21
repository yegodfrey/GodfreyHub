---
name: document/cn/HMSCore-References/webapi-output-params-0000001050163424
title: 响应参数说明
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-References/webapi-output-params-0000001050163424
---

# 响应参数说明

## Address

|参数|是否必选|类型|说明|
|:----------|:---|:-----|:------|
|countryCode|否|String|国家/地区码。|
|country|否|String|国家名。|
|state|否|String|省/州。|
|county|否|String|县/市。|
|town|否|String|镇/区。|
|settlement|否|String|定居点。|

## AddressDetail

|参数|是否必选|类型|说明|
|:----------------|:---|:-----|:---------------------------------------------------------------------------------------------|
|countryCode|否|String|国家/地区码，采用ISO 3166-1 alpha-2。|
|country|否|String|国家名。|
|adminArea|否|String|国家下面的一级行政区，一般是省/州。|
|subAdminArea|否|String|国家下面的二级行政区，一般是市。|
|tertiaryAdminArea|否|String|国家下面的三级行政区。|
|city|否|String|城市名称，推荐使用city。 > 说明 > 仅逆地理编码接口返回。|
|adminCode|否|String|区划编码，仅在中国大陆地区支持返回，由6或9位长度数字组成。 > 说明 > 仅逆地理编码接口返回。对于属于省、市、区/县级的区划结果，返回各自的区划编码，其他均返回归属最低层级的区划编码。|
|cityCode|否|String|城市编码，仅在中国大陆地区支持返回，由3或4位长度数字组成。 > 说明 > 仅逆地理编码接口返回。仅对市、区/县、乡镇/街道级的区划结果返回城市编码。|
|locality|否|String|城市。|
|subLocality|否|String|区/县。|
|streetNumber|否|String|街道号。|
|thoroughfare|否|String|街道名。|
|postalCode|否|String|邮政编码。|

## AutocompletePrediction

|参数|是否必选|类型|说明|
|:--------------|:---|:-----------------------------|:------------------------|
|description|是|String|预测的描述。|
|matchedKeywords|是|[Word](#section716102814347)[]|输入的关键字在description里的匹配位置。|
|matchedWords|是|[Word](#section716102814347)[]|description包含的单词，以及位置。|

## ChildrenNode

|参数|是否必选|类型|说明|
|:------------|:---|:---------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------|
|siteId|是|String|位置ID。|
|name|是|String|地点名称。|
|formatAddress|是|String|格式化的地点详细地址。|
|location|是|[Coordinate](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/webapi-input-params-0000001050165377#section11247133131712)|地点的经纬度。|
|hwPoiTypes|是|String[]|华为分类体系。|
|domeAndInt|否|String|航站楼的国内/国际信息，取值包括： * 1：国内 * 2：国际 * 3：国内和国际|
|depAndArr|否|String|航站楼的出发/到达信息，取值包括： * 1：出发 * 2：到达 * 3：出发和到达|

## Comment

|参数|是否必选|类型|说明|
|:----------|:---|:-------------------------------------|:------|
|starInfo|否|[StarInfo](#section85919916241)|评分统计信息。|
|commentInfo|否|[CommentInfo](#section184871040192118)|评论信息。|

## CommentInfo

|参数|是否必选|类型|说明|
|:----|:---|:--|:--|
|total|否|int|总数。|

## OpeningHours

|参数|是否必选|类型|说明|
|:------|:---|:-------------------------------|:-------------|
|texts|是|String[]|每个星期的开放时间段的描述。|
|periods|是|[Period](#section343422517209)[]|开放时间段的详细说明。|

## Period

|参数|是否必选|类型|说明|
|:----|:---|:----------------------------------|:----|
|open|是|[TimeOfWeek](#section2499151972219)|开放时间。|
|close|否|[TimeOfWeek](#section2499151972219)|关闭时间。|

## Poi

|参数|是否必选|类型|说明|
|:-----------------|:---|:--------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|poiTypes|是|String[]|POI类型，取值范围请参见[LocationType](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/web-api-locationtype-0000001060503031)。 > 说明 > 推荐使用hwPoiTypes。|
|hwPoiTypes|是|String[]|华为POI分类体系，取值范围请参见[HwLocationType](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/web-api-hwlocationtype-0000001059892657)。|
|phone|否|String|电话号码。|
|internationalPhone|否|String|国际电话号码。|
|rating|否|double|评分。|
|websiteUrl|否|String|网址。|
|openingHours|否|[OpeningHours](#section11607723207)|营业时间。|
|photoUrls|否|String[]|图片地址。 图片存在小，中，大三种规格，通过拼接后缀访问，拼接示例:photoUrl/small.jpg。 * small.jpg * medium.jpg * large.jpg|
|priceLevel|否|int|价格等级，取值范围：[0, 4]。 > 说明 > 仅地点详情接口返回。|
|businessStatus|否|String|营业状态，其中包括： * OPEN_NOW：正在营业。 * CLOSE_NOW：已休息。 * CLOSED_TEMPORARILY：临时关闭。 * CLOSED_PERMANENTLY：永久关闭。 * STATUS_UNKNOWN：未知。 > 说明 > 仅地点详情接口返回。|
|childrenNodes|否|[ChildrenNode](#section2417118193918)[]|POI的子节点信息。|
|icon|否|String|POI图标地址。|
|comments|否|[Comment](#section114542851720)|POI的评论信息。|

## Site

|参数|是否必选|类型|说明|
|:------------|:---|:-------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------|
|siteId|是|String|地点的唯一主键。|
|name|否|String|地点名称。|
|formatAddress|是|String|格式化的地点详细地址。|
|aoiFlag|否|boolean|如果地点是AOI数据（带有面属性的POI数据），则该字段标识为true。 > 说明 > 仅逆地理编码接口返回。|
|address|是|[AddressDetail](#section7781635111917)|地址详细信息。|
|location|否|[Coordinate](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/webapi-input-params-0000001050165377#section11247133131712)|地点的经纬度。|
|viewport|否|[CoordinateBounds](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/webapi-input-params-0000001050165377#section498435518173)|地点的视口范围。 > 说明 > 输入提示不支持返回此字段。|
|distance|否|double|预测地点和传参location之间的直线距离，单位：米。 > 说明 > 目前仅关键字搜索、周边搜索和地点搜索建议接口支持返回此字段。|
|poi|否|[Poi](#section510145212200)|如果地点是POI类型，返回POI信息。|
|utcOffset|否|int|位置所在时区和UTC时区的差值，单位：分钟。 > 说明 > 仅地点详情接口返回。|
|prediction|否|[AutocompletePrediction](#section1925533718315)|地点搜索建议和自动补全接口，返回自动补全的描述信息。|

## StarInfo

|参数|是否必选|类型|说明|
|:------------|:---|:-----|:---|
|averageRating|否|String|平均分。|

## TimeOfWeek

|参数|是否必选|类型|说明|
|:---|:---|:-----|:------------------------------------------------------|
|week|是|int|* 0：星期日 * 1：星期一 * 2：星期二 * 3：星期三 * 4：星期四 * 5：星期五 * 6：星期六|
|time|是|String|24小时制时间，hhmm格式。|

## Word

|参数|是否必选|类型|说明|
|:-----|:---|:--|:-------------------|
|offset|是|int|单词在description里的偏移位。|
|value|是|int|单词。|

