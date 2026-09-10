---
name: document/cn/HMSCore-References/api-searchfilter-0000001050152846
title: SearchFilter
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-References/api-searchfilter-0000001050152846
---

# SearchFilter

|Class Info|
|:--------------------------------------|
|public class SearchFilter 限制widget搜索条件。|

#### Public Constructor Summary

|Constructor Name|
|:----------------------|
|SearchFilter() 默认的构造方法。|

#### Public Method Summary

|Qualifier and Type|Method Name and Description|
|:------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|[CoordinateBounds](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/api-coordinatebounds-0000001050152776)|[getBounds](#section1481145711110)() 获取到搜索结果偏向的范围。|
|String|[getCountryCode](#section88235571516)() 获取到地点的国家/地区码。|
|String|[getLanguage](#section38271957213)() 获取用于搜索结果的语种。|
|[Coordinate](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/api-coordinate-0000001050152772)|[getLocation](#section158313571614)() 获取到搜索结果偏向的经纬度。|
|List\<[LocationType](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/api-locationtype-0000001050154741)\>|[getPoiType](#section883613578115)() 获取返回地点的[POI类型](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/api-locationtype-0000001050154741)。|
|String|[getPoliticalView](#section79921634191617)() 获取政治观点。 注意： 该接口已废弃。|
|String|[getQuery](#section118401457616)() 获取到搜索关键字。|
|Integer|[getRadius](#section38452571014)() 获取到搜索半径。|
|Boolean|[getStrictBounds](#section1992185218567)() 获取到是否严格限制在Bounds内搜索。|
|boolean|[isChildren](#section15366740144515)() 判断是否查询子节点。|
|void|[setChildren](#section12396183494913)(boolean children) 设置是否返回子节点。|
|void|[setBounds](#section48498571115)([CoordinateBounds](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/api-coordinatebounds-0000001050152776) bounds) 设置搜索结果偏向的范围。|
|void|[setCountryCode](#section785325717117)(String countryCode) 设置国家/地区码。|
|void|[setLanguage](#section19857125712110)(String language) 设置搜索结果的语种。|
|void|[setLocation](#section9862165714115)([Coordinate](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/api-coordinate-0000001050152772) location) 设置搜索结果偏向的经纬度。|
|void|[setPoiType](#section6866357315)(List\<[LocationType](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/api-locationtype-0000001050154741)\> poiType) 设置返回地点的[POI类型](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/api-locationtype-0000001050154741)。|
|void|[setPoliticalView](#section52421021181914)(String politicalView) 设置政治观点。 注意： 该接口已废弃。|
|void|[setQuery](#section7871115714111)(String query) 设置搜索关键字。|
|void|[setRadius](#section6875757911)(Integer radius) 设置搜索半径。|
|void|[setStrictBounds](#section2091716245592)(Boolean strictBounds) 设置是否严格限制在Bounds内搜索。|

#### Public Methods

#### getBounds

|Method|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public [CoordinateBounds](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/api-coordinatebounds-0000001050152776) getBounds() 您调用此API可以获取到搜索结果偏向的范围。|

Returns  

|Type|Description|
|:------------------------------------------------------------------------------------------------------------------------------------|:----------|
|[CoordinateBounds](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/api-coordinatebounds-0000001050152776)|搜索结果偏向的范围。|

#### getCountryCode

|Method|
|:----------------------------------------------------|
|public String getCountryCode() 您调用此API可以获取到地点的国家/地区码。|

Returns  

|Type|Description|
|:-----|:-------------------------------------|
|String|国家/地区码，在指定的国家内搜索，采用ISO 3166-1 alpha-2。|

#### getLanguage

|Method|
|:------------------------------------------------|
|public String getLanguage() 您调用此API可以获取用于搜索结果的语种。|

Returns  

|Type|Description|
|:-----|:----------|
|String|用于搜索结果的语种。|

#### getLocation

|Method|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public [Coordinate](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/api-coordinate-0000001050152772) getLocation() 您调用此API可以获取到搜索结果偏向的经纬度。|

Returns  

|Type|Description|
|:------------------------------------------------------------------------------------------------------------------------|:----------|
|[Coordinate](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/api-coordinate-0000001050152772)|搜索结果偏向的经纬度。|

#### getPoiType

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public List\<[LocationType](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/api-locationtype-0000001050154741)\> getPoiType() 您调用此API可以获取返回地点的POI类型。|

Returns  

|Type|Description|
|:------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------|
|List\<[LocationType](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/api-locationtype-0000001050154741)\>|地点的[POI类型](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/api-locationtype-0000001050154741)。|

#### getPoliticalView

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20220922212609.61814676596661752014272288882594:50530922032837:2800:4F3FC9CB626F1E64794A380378908A45083D62B00318E15B7137CFEBF59217A8.png?needInitFileName=true?needInitFileName=true)  
该接口已废弃。  

|Method|
|:------------------------------------------------|
|public String getPoliticalView() 您调用此API可以获取政治观点。|

Returns  

|Type|Description|
|:-----|:----------|
|String|政治观点。|

#### getQuery

|Method|
|:------------------------------------------|
|public String getQuery() 您调用此API可以获取到搜索关键字。|

Returns  

|Type|Description|
|:-----|:----------|
|String|搜索关键字。|

#### getRadius

|Method|
|:-------------------------------------------|
|public Integer getRadius() 您调用此API可以获取到搜索半径。|

Returns  

|Type|Description|
|:------|:----------|
|Integer|搜索半径，单位：米。|

#### getStrictBounds

|Method|
|:-------------------------------------------------------------|
|public Boolean getStrictBounds() 您调用此API可以获取到是否严格限制在Bounds内搜索。|

Returns  

|Type|Description|
|:------|:----------------|
|Boolean|是否严格限制在Bounds内搜索。|

#### isChildren

|Method|
|:--------------------------------------------|
|public boolean isChildren() 您调用此API判断是否查询子节点。|

Returns  

|Type|Description|
|:------|:---------------------------------------|
|boolean|* true：返回子节点。 * false：不返回子节点。 默认值为false。|

#### setChildren

|Method|
|:------------------------------------------------------------|
|public void setChildren(boolean children) 您调用此API可以设置是否返回子节点。|

Parameters  

|Name|Description|
|:-------|:------------------------------------------------------|
|children|是否返回子节点。 * true：返回子节点的siteId。 * false：不返回子节点。 默认为false。|

#### setBounds

|Method|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public void setBounds([CoordinateBounds](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/api-coordinatebounds-0000001050152776) bounds) 您调用此API可以设置搜索结果偏向的范围。|

Parameters  

|Name|Description|
|:-----|:----------|
|bounds|搜索结果偏向的范围。|

#### setCountryCode

|Method|
|:----------------------------------------------------------------|
|public void setCountryCode(String countryCode) 您调用此API可以设置国家/地区码。|

Parameters  

|Name|Description|
|:----------|:-------------------------------------|
|countryCode|国家/地区码，在指定的国家内搜索，采用ISO 3166-1 alpha-2。|

#### setLanguage

|Method|
|:-----------------------------------------------------------|
|public void setLanguage(String language) 您调用此API可以设置搜索结果的语种。|

Parameters  

|Name|Description|
|:-------|:------------------------------------------------------------------------------------------------------------------------------------------------------|
|language|搜索结果返回的语种，取值范围参见[支持的语言](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/language-mapping-0000001050162856)的语种代码。如果不传，返回地点的当地语言。|

#### setLocation

|Method|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public void setLocation([Coordinate](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/api-coordinate-0000001050152772) location) 您调用此API可以设置搜索结果偏向的经纬度。|

Parameters  

|Name|Description|
|:-------|:----------|
|location|搜索结果偏向的经纬度。|

#### setPoiType

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public void setPoiType(List\<[LocationType](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/api-locationtype-0000001050154741)\> poiType) 您调用此API可以设置返回地点的POI类型。|

Parameters  

|Name|Description|
|:------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|poiType|[POI类型](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/api-locationtype-0000001050154741)。取值范围是[LocationType](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/api-locationtype-0000001050154741#section48131858163210)的子集，包括： * GEOCODE * ADDRESS * ESTABLISHMENT * REGIONS * CITIES|

#### setPoliticalView

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20220922212609.80447069987879181079717989096884:50530922032837:2800:273325D907DB5D653B2B9F3017FC776AE8FA91ED8D961D28C9572002A6A1ADE3.png?needInitFileName=true?needInitFileName=true)  
该接口已废弃。  

|Method|
|:------------------------------------------------------------------|
|public void setPoliticalView(String politicalView) 您调用此API可以设置政治观点。|

Parameters  

|Name|Description|
|:------------|:------------------------------------|
|politicalView|政治观点，采用ISO 3166-1-alpha-2规范的2位国家/地区码。|

#### setQuery

|Method|
|:---------------------------------------------------|
|public void setQuery(String query) 您调用此API可以设置搜索关键字。|

Parameters  

|Name|Description|
|:----|:----------|
|query|搜索关键字。|

#### setRadius

|Method|
|:-----------------------------------------------------|
|public void setRadius(Integer radius) 您调用此API可以设置搜索半径。|

Parameters  

|Name|Description|
|:-----|:------------------------------------|
|radius|搜索半径，单位：米。取值范围：\[1, 50000\]，默认50000米。|

#### setStrictBounds

|Method|
|:-----------------------------------------------------------------------------|
|public void setStrictBounds(Boolean strictBounds) 您调用此API可以设置是否严格限制在Bounds内搜索。|

Parameters  

|Name|Description|
|:-----------|:--------------------------|
|strictBounds|是否严格限制在Bounds内搜索，默认值为false。|

