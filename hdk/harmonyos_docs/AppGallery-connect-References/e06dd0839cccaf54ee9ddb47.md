---
name: document/cn/AppGallery-connect-References/agccore-agconnectoptions-harmonyos-0000001204045377
title: AGConnectOptions
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agccore-agconnectoptions-harmonyos-0000001204045377
---

# AGConnectOptions

|Interface Info|
|:-----------------------------------------------------------------|
|public interface AGConnectOptions 获取agconnect-services.json文件配置接口。|

#### Method Summary

|Return|Method|
|:---------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------------------------------------------|
|[AGCRoutePolicy](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agccore-agcroutepolicy-harmonyos-0000001157003930)|[getRoutePolicy](#section2930527194410)() 获取存储地。|
|String|[getPackageName](#section1035463219440)() 获取包名。|
|String|[getString](#section48201337204418)(String path) 获取指定配置项的值。|
|String|[getString](#section12946124354419)(String path, String def) 获取指定配置项的值，当配置项不存在时返回def定义的默认值。|

#### Methods

#### getRoutePolicy

|Method|
|:-------------------------------------------------|
|AGCRoutePolicy getRoutePolicy() 获取存储地，当存储地未配置时返回0。|

Return  

|Type|Description|
|:---------------------------------------------------------------------------------------------------------------------------------------------|:----------|
|[AGCRoutePolicy](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agccore-agcroutepolicy-harmonyos-0000001157003930)|返回存储地。|

#### getPackageName

|Method|
|:----------------------------|
|String getPackageName() 获取包名。|

Return  

|Type|Description|
|:-----|:----------|
|String|包名。|

#### getString

|Method|
|:------------------------------------------------------|
|String getString(String path) 获取指定配置项的值，当配置项不存在时返回null。|

Parameters  

|Name|Description|
|:---|:---------------------------|
|path|指定配置项的路径。 如"/client/app_id"。|

Return  

|Type|Description|
|:-----|:----------|
|String|获取指定配置项的值。|

#### getString

|Method|
|:-----------------------------------------------------------------------|
|String getString(String path, String def) 获取指定配置项的值，当配置项不存在时返回def定义的默认值。|

Parameters  

|Name|Description|
|:---|:---------------------------|
|path|指定配置项的路径。 如"/client/app_id"。|
|def|返回的默认值。|

Return  

|Type|Description|
|:-----|:----------|
|String|获取指定配置项的值。|

