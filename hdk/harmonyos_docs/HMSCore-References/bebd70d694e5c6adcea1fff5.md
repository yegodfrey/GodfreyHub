---
name: document/cn/HMSCore-References/mapserviceareainfo-0000001259955163
title: MapServiceAreaInfo
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-References/mapserviceareainfo-0000001259955163
---

# MapServiceAreaInfo

|Class Info|
|:----------------------------------------|
|public class MapServiceAreaInfo 地图服务区信息类。|

## Public Method Summary

|Qualifier and Type|Method Name and Description|
|:-----------------|:----------------------------------------------------|
|String|[getName](#section193831719125710)() 获取服务区的名称。|
|int|[getRemainDist](#section20518181032)() 获取当前位置到服务区的距离。|
|int|[getType](#section93404311441)() 获取服务区的类型。|

## Public Methods

### getName

|Method|
|:--------------------------------|
|public String getName() 获取服务区的名称。|

**Return** **s**

|Type|Description|
|:-----|:----------|
|String|返回当前服务区的名称。|

### getRemainDist

|Method|
|:----------------------------------------|
|public int getRemainDist() 获取当前位置到服务区的距离。|

**Return** **s**

|Type|Description|
|:---|:------------------|
|int|返回当前位置到服务区的距离，单位：米。|

### getType

|Method|
|:-----------------------------|
|public int getType() 获取服务区的类型。|

**Return** **s**

|Type|Description|
|:---|:-------------------------|
|int|返回服务区的类型 * 0代表服务区 * 1代表收费站|

