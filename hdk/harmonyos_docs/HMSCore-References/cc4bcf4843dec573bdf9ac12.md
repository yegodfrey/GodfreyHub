---
name: document/cn/HMSCore-References/restrictioninfodto-0000001369817940
title: RestrictionInfoDTO
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-References/restrictioninfodto-0000001369817940
---

# RestrictionInfoDTO

|Class Info|
|:---------------------------------------|
|public class RestrictionInfoDTO 限行参数信息类。|

## Public Method Summary

|Qualifier and Type|Method Name and Description|
|:-----------------|:--------------------------------------------------------------------------|
|void|[setEnergyType](#section10783184061718)(int energyType) 设置能源类型，默认为汽油车。|
|void|[setHasCredentials](#section978694151814)(boolean hasCredentials) 设置是否有通行证。|
|void|[setMisStand](#section4476163211208)(int misStand) 设置油气排放标准，默认国标6。|
|void|[setPlaceCode](#section3789941152115)(int placeCode) 设置归属地信息，国内为城市码。|
|void|[setPlateColor](#section20402195782210)(int plateColor) 设置车牌颜色，默认蓝牌。|
|void|[setPlateNum](#section6174513102419)(String plateNum) 设置字母数字信息。|
|void|[setSeatNum](#section13369191082512)(int seatNum) 设置座位数，默认2座。|
|void|[setTempPlate](#section1763291942711)(boolean tempPlate) 设置是否为临时牌照。|

## Public Methods

### setEnergyType

|Method|
|:----------------------------------------------------------------|
|public void setEnergyType(int energyType) 您调用此API可以设置能源类型，默认为汽油车。|

**Parameters**

|Name|Description|
|:---------|:-----------|
|energyType|能源类型，默认为汽油车。|

### setHasCredentials

|Method|
|:-----------------------------------------------------------------------|
|public void setHasCredentials(boolean hasCredentials) 您调用此API可以设置是否有通行证。|

**Parameters**

|Name|Description|
|:-------------|:------------------------|
|hasCredentials|是否有通行证 * true：是 * false：否|

### setMisStand

|Method|
|:-------------------------------------------------------------|
|public void setMisStand(int misStand) 您调用此API可以设置油气排放标准，默认国标6。|

**Parameters**

|Name|Description|
|:-------|:------------|
|misStand|油气排放标准，默认国标6。|

### setPlaceCode

|Method|
|:---------------------------------------------------------------|
|public void setPlaceCode(int placeCode) 您调用此API可以设置归属地信息，国内为城市码。|

**Parameters**

|Name|Description|
|:--------|:------------|
|placeCode|归属地信息，国内为城市码。|

### setPlateColor

|Method|
|:--------------------------------------------------------------|
|public void setPlateColor(int plateColor) 您调用此API可以设置车牌颜色，默认蓝牌。|

**Parameters**

|Name|Description|
|:---------|:----------|
|plateColor|车牌颜色，默认蓝牌。|

### setPlateNum

|Method|
|:----------------------------------------------------------|
|public void setPlateNum(String plateNum) 您调用此API可以设置字母数字信息。|

**Parameters**

|Name|Description|
|:-------|:----------|
|plateNum|字母数字信息。|

### setSeatNum

|Method|
|:-------------------------------------------------------|
|public void setSeatNum(int seatNum) 您调用此API可以设置座位数，默认2座。|

**Parameters**

|Name|Description|
|:------|:----------|
|seatNum|座位数，默认2座。|

### setTempPlate

|Method|
|:--------------------------------------------------------------|
|public void setTempPlate(boolean tempPlate) 您调用此API可以设置是否为临时牌照。|

**Parameters**

|Name|Description|
|:--------|:-------------------------|
|tempPlate|是否为临时牌照 * true：是 * false：否|

