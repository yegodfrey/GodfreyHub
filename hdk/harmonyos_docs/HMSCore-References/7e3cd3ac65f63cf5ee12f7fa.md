---
name: document/cn/HMSCore-References/api-coordinatebounds-0000001050152776
title: CoordinateBounds
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-References/api-coordinatebounds-0000001050152776
---

# CoordinateBounds

|Class Info|
|:--------------------------------------|
|public class CoordinateBounds 表示一个矩形区域。|

## Public Constructor Summary

|Constructor Name|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|[CoordinateBounds](#section114762417137)([Coordinate](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/api-coordinate-0000001050152772) northeast, [Coordinate](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/api-coordinate-0000001050152772) southwest) 使用东北角和西南角创建CoordinateBounds对象。|

## Public Method Summary

|Qualifier and Type|Method Name and Description|
|:------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|[Coordinate](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/api-coordinate-0000001050152772)|[getNortheast](#section654217367117)() 获取东北角位置坐标。|
|[Coordinate](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/api-coordinate-0000001050152772)|[getSouthwest](#section5548153651114)() 获取西南角位置坐标。|
|void|[setNortheast](#section1755110363113)([Coordinate](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/api-coordinate-0000001050152772) northeast) 设置东北角位置坐标。|
|void|[setSouthwest](#section6553113612112)([Coordinate](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/api-coordinate-0000001050152772) southwest) 设置西南角位置坐标。|

## Public Constructors

### CoordinateBounds

|Constructor|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|CoordinateBounds([Coordinate](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/api-coordinate-0000001050152772) northeast, [Coordinate](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/api-coordinate-0000001050152772) southwest) 使用东北角和西南角创建CoordinateBounds对象。|

**Parameters**

|Name|Description|
|:--------|:----------|
|northeast|东北角。|
|southwest|西南角。|

## Public Methods

### getNortheast

|Method|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public [Coordinate](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/api-coordinate-0000001050152772) getNortheast() 您调用此API可以获取东北角位置坐标。|

**Return** **s**

|Type|Description|
|:------------------------------------------------------------------------------------------------------------------------|:----------|
|[Coordinate](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/api-coordinate-0000001050152772)|东北角位置坐标。|

### getSouthwest

|Method|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public [Coordinate](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/api-coordinate-0000001050152772) getSouthwest() 您调用此API可以获取西南角位置坐标。|

**Return** **s**

|Type|Description|
|:------------------------------------------------------------------------------------------------------------------------|:----------|
|[Coordinate](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/api-coordinate-0000001050152772)|西南角位置坐标。|

### setNortheast

|Method|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public void setNortheast([Coordinate](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/api-coordinate-0000001050152772) northeast) 您调用此API可以设置东北角位置坐标。|

**Parameters**

|Name|Description|
|:--------|:--------------------------------|
|northeast|东北角位置坐标。 > 说明 > 东北角坐标经度比西南角坐标经度大。|

### setSouthwest

|Method|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public void setSouthwest([Coordinate](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/api-coordinate-0000001050152772) southwest) 您调用此API可以设置西南角位置坐标。|

**Parameters**

|Name|Description|
|:--------|:--------------------------------|
|southwest|西南角位置坐标。 > 说明 > 东北角坐标经度比西南角坐标经度大。|

