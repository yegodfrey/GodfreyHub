---
name: document/cn/HMSCore-References/broadcastingpoint-0000001217092140
title: BroadcastingPoint
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-References/broadcastingpoint-0000001217092140
---

# BroadcastingPoint

|Class Info|
|:---------------------------------------|
|public class BroadcastingPoint 配置播报点信息类。|

#### Public Constructor Summary

|Constructor Name|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|[BroadcastingPoint](#section19665112084012)(double distances, [UnitEnum](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/unitenum-0000001212736150) unit, [GuideSpeechType](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/guidespeechtype-0000001217416424) speechType) 播报点信息类有参构造方法，初始化播报距离、播报单位、以及播报点类型。|

#### Public Method Summary

|Qualifier and Type|Method Name and Description|
|:------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|double|[getBroadcastingDistances](#section365865121019)() 获取当前播报点的播报距离。|
|[GuideSpeechType](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/guidespeechtype-0000001217416424)|[getGuideSpeechType](#section017417313310)() 获取当前播报点的播报类型。|
|int|[getMeterLen](#section6286154123116)() 获取当前播报点的公制距离，单位：米。|
|[UnitEnum](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/unitenum-0000001212736150)|[getUnit](#section151311517313)() 获取当前播报点的公英制单位。|
|void|[setBroadcastingDistances](#section5908115110316)(int broadcastingDistances) 设置当前播报点的播报距离。|
|void|[setGuideSpeechType](#section9690154333613)([GuideSpeechType](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/guidespeechtype-0000001217416424) guideSpeechType) 设置当前播报点的播报类型。|
|void|[setUnit](#section1040118441367)([UnitEnum](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/unitenum-0000001212736150) unit) 设置当前播报点的公英制单位。|

#### Public Constructors

#### BroadcastingPoint(double distances, UnitEnum unit, GuideSpeechType speechType)

|Constructor|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|BroadcastingPoint(double distances, [UnitEnum](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/unitenum-0000001212736150) unit, [GuideSpeechType](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/guidespeechtype-0000001217416424) speechType) 播报点信息类有参构造方法，初始化播报距离、播报单位、以及播报点类型。|

Parameters  

|Name|Description|
|:---------|:-----------|
|distances|当前播报点的播报距离。|
|unit|当前播报点的公英制单位。|
|speechType|当前播报点的播报类型。|

#### Public Methods

#### getBroadcastingDistances

|Method|
|:--------------------------------------------------------------|
|public double getBroadcastingDistances() 您调用此API可以获取当前播报点的播报距离。|

Returns  

|Type|Description|
|:-----|:----------|
|double|播报距离，单位：米。|

#### getGuideSpeechType

|Method|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public [GuideSpeechType](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/guidespeechtype-0000001217416424) getGuideSpeechType() 您调用此API可以获取当前播报点的播报类型。|

Returns  

|Type|Description|
|:------------------------------------------------------------------------------------------------------------------|:----------|
|[GuideSpeechType](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/guidespeechtype-0000001217416424)|播报类型。|

#### getMeterLen

|Method|
|:---------------------------------------------------|
|public int getMeterLen() 您调用此API可以获取当前播报点的公制距离，单位：米。|

Returns  

|Type|Description|
|:---|:-----------|
|int|公制播报距离，单位：米。|

#### getUnit

|Method|
|:---------------------------------------------------------------------------------------------------------------------------------------------|
|public [UnitEnum](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/unitenum-0000001212736150) getUnit() 您调用此API可以获取当前播报点的公英制单位。|

Returns  

|Type|Description|
|:----------------------------------------------------------------------------------------------------|:----------|
|[UnitEnum](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/unitenum-0000001212736150)|公英制单位。|

#### setBroadcastingDistances

|Method|
|:-------------------------------------------------------------------------------------|
|public void setBroadcastingDistances(int broadcastingDistances) 您调用此API可以设置当前播报点的播报距离。|

Parameters  

|Name|Description|
|:--------------------|:----------|
|broadcastingDistances|播报距离，单位：米。|

#### setGuideSpeechType

|Method|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public void setGuideSpeechType([GuideSpeechType](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/guidespeechtype-0000001217416424) guideSpeechType) 您调用此API可以设置当前播报点的播报类型。|

Parameters  

|Name|Description|
|:--------------|:----------|
|guideSpeechType|播报类型。|

#### setUnit

|Method|
|:------------------------------------------------------------------------------------------------------------------------------------------------------|
|public void setUnit([UnitEnum](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/unitenum-0000001212736150) unit) 您调用此API可以设置当前播报点的公英制单位。|

Parameters  

|Name|Description|
|:---|:----------|
|unit|公英制单位。|

