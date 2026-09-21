---
name: document/cn/HMSCore-References/js-hwsiteservice-0000001050750153
title: HWSiteService
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-References/js-hwsiteservice-0000001050750153
---

# HWSiteService

## 概述

该类提供位置搜索和地理编码接口。

## 构造函数

|函数|**描述**|
|:-------------------------|:-----|
|HWMapJsSDK.HWSiteService()|-|

## 方法

|**方法**|**描述**|**参数类型**|**返回值**|
|:---------------------------------|:------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------|
|geocode(request, callback)|正地理编码。|* request：[GeocodeRequest](#section675224454710)，正地理编码的请求体。 * callback：Function([GeocodeResult](#section10938181194813), StatusCode)，正地理编码的回调函数。|-|
|nearbySearch(request, callback)|周边搜索。|* request：[NearbySearchRequest](#section9961716114810)，周边搜索的请求体。 * callback： Function([NearbySearchResult](#section76810365484), StatusCode)，周边搜索的回调函数。|-|
|querySuggestion(request, callback)|地点搜索建议。|* request：[QuerySuggestionRequest](#section6931185217481)，地点搜索建议的请求体。 * callback：Function([QuerySuggestionResult](#section5300181720492), StatusCode)，地点搜索建议的回调函数。|-|
|reverseGeocode(request, callback)|逆地理编码。|* request： [ReverseGeocodeRequest](#section126331954164913)，逆地理编码的请求体。 * callback： Function( [ReverseGeocodeResult](#section10235103213493), StatusCode)，逆地理编码的回调函数。|-|
|searchById(request, callback)|地点详情。|* request：[SearchByIdRequest](#section14447141318505)，地点详情的请求体。 * callback： Function([SearchByIdResult](#section1992123055017), StatusCode)，地点详情的回调函数。|-|
|searchByText(request, callback)|关键字搜索。|* request： [SearchByTextRequest](#section167171484500)，关键字搜索的请求体。 * callback： Function([SearchByTextResult](#section1111431613510), StatusCode)，关键字搜索的回调函数。|-|

> 说明
>
> StatusCode是接口调用状态的返回码，具体请参见[错误码](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/error-code-0000001050161430)。

## GeocodeRequest

|参数|是否必选|参数类型|描述|
|:------------|:---|:-------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------|
|address|是|String(<=512)|地点信息。|
|bounds|否|[LatLngBounds](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/js-params-0000001051070092#section18717191325619)|查询结果偏向的搜索范围。|
|language|否|String(<=6)|搜索结果的语种，语种取值请参见[支持的语言](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/language-mapping-0000001050162856)列表。如果不指定语种，返回地点的当地语言。|
|politicalView|否|String(=2)|政治观点参数，采用ISO 3166-1 alpha-2规范的2位国家码。 > 注意 > 该参数已废弃。|

## GeocodeResult

|参数|参数类型|描述|
|:----|:------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------|
|sites|Array<[Site](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/js-params-0000001051070092#section17208184785718)>|如果查询成功，返回搜索结果。如果没有结果，返回空数组。 > 说明 > Site对象不返回POI信息。|

## NearbySearchRequest

|参数|是否必选|参数类型|描述|
|:------------|:---|:-----------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------|
|language|否|String(<=6)|搜索建议的语种，语种取值请参见[支持的语言](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/language-mapping-0000001050162856)列表。如果不指定语种，返回地点的当地语言。|
|location|是|[LatLng](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/js-params-0000001051070092#section188758113562)|当前用户的位置。|
|pageIndex|否|Number|当前页数。取值范围：[1, 60]，默认1。 约束：pageindex*pagesize <= 60。|
|pageSize|否|Number|每页返回的记录数。取值范围：[1, 20]，默认20。|
|poiType|否|String|返回指定POI类型的地点。|
|politicalView|否|String(=2)|政治观点参数，采用ISO 3166-1 alpha-2规范的2位国家码。 > 注意 > 该参数已废弃。|
|query|否|String(<=512)|可以输入搜索关键字。|
|radius|否|Number|可以指定搜索半径，单位：米。取值范围：[1, 50000]，默认1000米。|

## NearbySearchResult

|参数|参数类型|描述|
|:---------|:------------------------------------------------------------------------------------------------------------------------------|:--------------------------|
|sites|Array<[Site](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/js-params-0000001051070092#section17208184785718)>|如果查询成功，返回搜索结果。如果没有结果，返回空数组。|
|totalCount|Number|如果查询成功，返回记录总数。如果没有结果，返回0。|

## QuerySuggestionRequest

|参数|是否必选|参数类型|描述|
|:------------|:---|:-------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|bounds|否|[LatLngBounds](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/js-params-0000001051070092#section18717191325619)|搜索建议偏向的搜索范围。 > 说明 > 如果bounds、location都传的话，那么bounds优先。|
|countries|否|Array<String(=2)>|多个国家码，采用ISO 3166-1 alpha-2规范的2位国家码。|
|countryCode|否|String(=2)|在指定的国家内搜索，采用ISO 3166-1 alpha-2规范的2位国家码。|
|language|否|String(<=6)|搜索建议的语种，语种取值请参见[支持的语言](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/language-mapping-0000001050162856)列表。如果不指定语种，返回地点的当地语言。|
|location|否|[LatLng](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/js-params-0000001051070092#section188758113562)|搜索建议偏向的经纬度。|
|poiType|否|String|返回指定POI类型的地点。 取值包括： * GEOCODE ： 仅返回地理编码结果（如国家、城市、街道等），而不返回商业结果（如酒店、餐馆、火车站等）。可以使用此类型过滤掉商业数据，消除用户输入中存在的歧义。例如：用户输入中国时，返回中国，不返回中国银行等数据。 * ADDRESS：GEOCODE的子集。仅返回具有精确地址的地理编码结果，不返回商业结果和粗粒度的地理编码结果（如国家、城市等），推荐在搜索完整地址时使用此类型。 * ESTABLISHMENT：GEOCODE的补集。仅返回作为商业结果（如酒店、餐馆、火车站等），不返回地理编码结果（如国家、城市、街道等）。例如：用户输入中国时，返回中国银行等数据，不返回中国。 * REGIONS ：GEOCODE的子集，仅返回与以下类型匹配的地点： LOCALITY SUBLOCALITY POSTAL_CODE COUNTRY ADMINISTRATIVE_AREA_LEVEL_1 ADMINISTRATIVE_AREA_LEVEL_2 * CITIES：仅返回LOCALITY或ADMINISTRATIVE_AREA_LEVEL_3类型的地点。|
|politicalView|否|String(=2)|政治观点参数，采用ISO 3166-1 alpha-2规范的2位国家码。 > 注意 > 该参数已废弃。|
|query|是|String(<=512)|搜索关键字。|
|radius|否|Number|Location的搜索半径，单位：米。取值范围：[1, 50000]，默认50000米。|

## QuerySuggestionResult

|**参数**|**参数类型**|描述|
|:-----|:------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------|
|sites|Array<[Site](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/js-params-0000001051070092#section17208184785718)>|如果查询成功，返回搜索结果。如果没有结果，返回空数组。 > 说明 > Site对象不返回POI信息。|

## ReverseGeocodeRequest

|参数|是否必选|参数类型|参数说明|
|:------------|:---|:-----------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------|
|language|否|String(<=6)|搜索结果的语种，语种取值请参见[支持的语言](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/language-mapping-0000001050162856)列表。如果不指定语种，返回地点的当地语言。|
|location|是|[LatLng](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/js-params-0000001051070092#section188758113562)|经纬度。|
|politicalView|否|String(=2)|政治观点参数，采用ISO 3166-1 alpha-2规范的2位国家码。 > 注意 > 该参数已废弃。|
|returnPoi|否|Boolean|是否返回POI的地点名称，默认true。 > 说明 > 目前逆地理接口，只能返回机场的名称，其他POI不支持返回名称。|

## ReverseGeocodeResult

|参数|参数类型|参数说明|
|:----|:------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------|
|sites|Array<[Site](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/js-params-0000001051070092#section17208184785718)>|如果查询成功，返回搜索结果。如果没有结果，返回空数组。 > 说明 > Site对象不返回POI信息。|

## SearchByIdRequest

|参数|是否必选|参数类型|参数说明|
|:------------|:---|:------------|:-----------------------------------------------------------------------------------------------------------------------------------------|
|language|否|String(<=6)|搜索结果的语种，语种取值请参见[支持的语言](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/language-mapping-0000001050162856)列表。如果不指定语种，返回地点的当地语言。|
|politicalView|否|String(=2)|政治观点参数，采用ISO 3166-1 alpha-2规范的2位国家码。 > 注意 > 该参数已废弃。|
|siteId|是|String(<=256)|地点ID。|

## SearchByIdResult

|**参数**|**参数类型**|**参数说明**|
|:-----|:-----------------------------------------------------------------------------------------------------------------------|:-------------------------|
|site|[Site](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/js-params-0000001051070092#section17208184785718)|如果查询成功，返回地点详情；如果错误，返会错误描述。|

## SearchByTextRequest

|参数|是否必选|参数类型|描述|
|:------------|:---|:-----------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------|
|countries|否|Array<String(=2)>|多个国家码，采用ISO 3166-1 alpha-2规范的2位国家码。|
|countryCode|否|String(=2)|在指定的国家内搜索，采用ISO 3166-1 alpha-2规范的2位国家码。|
|language|否|String(<=6)|搜索结果的语种，语种取值请参见[支持的语言](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/language-mapping-0000001050162856)列表。如果不指定语种，返回地点的当地语言。|
|location|否|[LatLng](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/js-params-0000001051070092#section188758113562)|搜索结果偏向的经纬度。|
|pageSize|否|Number|每页返回的记录数。取值范围：[1, 20]，默认20。|
|pageIndex|否|Number|当前页数。取值范围：[1, 60]，默认1。 约束：pageindex*pagesize <= 60。|
|poiType|否|String|返回指定POI类型的地点。|
|politicalView|否|String(=2)|政治观点参数，采用ISO 3166-1 alpha-2规范的2位国家码。 > 注意 > 该参数已废弃。|
|query|是|String(<=512)|搜索关键字。|
|radius|否|Number|Location的搜索半径，单位：米。取值范围：[1, 50000]，默认50000米。|

## SearchByTextResult

|参数|参数类型|描述|
|:---------|:------------------------------------------------------------------------------------------------------------------------------|:--------------------------|
|sites|Array<[Site](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/js-params-0000001051070092#section17208184785718)>|如果查询成功，返回搜索结果。如果没有结果，返回空数组。|
|totalCount|int|如果查询成功，返回记录总数。如果没有结果，返回0。|

