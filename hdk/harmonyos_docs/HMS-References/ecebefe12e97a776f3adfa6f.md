---
name: document/cn/HMS-References/hms-map-js-hw-marker-cluster
title: HWMarkerCluster
uri: https://developer.huawei.com/consumer/cn/doc/HMS-References/hms-map-js-hw-marker-cluster
source: portal
---

## 概览

用来聚合地图上指定的Marker集合，能设定聚合距离以及聚合后显示的图片。

## 构造方法

**构造方法**| **描述**  
---|---  
HWMapJsSDK.HWMarkerCluster (map, markers,  options)| map是添加的地图图层，是必选项；markers是要被聚合的Marker集合，是必选项；options是MarkerCluster的属性，是可选项，见MarkerClusterOptions。  
  
## 公共方法

**方法名**| **描述**| **参数类型**| **返回值**  
---|---|---|---  
addMarker(marker)| 添加Marker。| [HWMarker](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-js-hw-marker)| 无  
addMarkers(markers)| 添加Marker集合。| Array<[HWMarker](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-js-hw-marker)>| 无  
removeMarker(marker)| 删除Marker。| [HWMarker](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-js-hw-marker)| 无  
removeMarkers(markers)| 删除Marker集合。| Array<[HWMarker](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-js-hw-marker)>| 无  
clearMarkers()| 清除全部Marker。| 无| 无  
getMarkers()| 获取所有的Marker。| 无| Array<[HWMarker](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-js-hw-marker)>  
  
## MarkerClusterOptions

**参数名**| **必选(M)/****可选(O)**| **数据类型**| **描述**  
---|---|---|---  
options.icon| O| String | MarkerIconOption| Marker聚合后显示的图标，同marker的设置。  
options.label| O| String | MarkerLabelOption| Marker聚合后的文字标签，同Marker的设置，默认值为聚合后的总数。  
  
  

