---
name: document/cn/HMSCore-References/api-period-0000001050154761
title: Period
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-References/api-period-0000001050154761
---

# Period

|Class Info|
|:---------------------------|
|public class Period 表示一个时间段。|

#### Public Constructor Summary

|Constructor Name|
|:----------------|
|Period() 默认的构造方法。|

#### Public Method Summary

|Qualifier and Type|Method Name and Description|
|:------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|[TimeOfWeek](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/api-timeofweek-0000001050154793)|[getClose](#section17363514379)() 获取关闭时间。|
|[TimeOfWeek](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/api-timeofweek-0000001050154793)|[getOpen](#section8375151414711)() 获取开放时间。|
|void|[setClose](#section193781314273)([TimeOfWeek](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/api-timeofweek-0000001050154793) close) 设置关闭时间。|
|void|[setOpen](#section138213144712)([TimeOfWeek](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/api-timeofweek-0000001050154793) open) 设置开放时间。|

#### Public Methods

#### getClose

|Method|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------|
|public [TimeOfWeek](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/api-timeofweek-0000001050154793) getClose() 您调用此API可以获取关闭时间。|

Returns  

|Type|Description|
|:------------------------------------------------------------------------------------------------------------------------|:----------|
|[TimeOfWeek](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/api-timeofweek-0000001050154793)|地点的关闭时间。|

#### getOpen

|Method|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------|
|public [TimeOfWeek](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/api-timeofweek-0000001050154793) getOpen() 您调用此API可以获取开放时间。|

Returns  

|Type|Description|
|:------------------------------------------------------------------------------------------------------------------------|:----------|
|[TimeOfWeek](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/api-timeofweek-0000001050154793)|地点的开放时间。|

#### setClose

|Method|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public void setClose([TimeOfWeek](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/api-timeofweek-0000001050154793) close) 您调用此API可以设置关闭时间。|

Parameters  

|Name|Description|
|:----|:----------|
|close|地点的关闭时间。|

#### setOpen

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public void setOpen([TimeOfWeek](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/api-timeofweek-0000001050154793) open) 您调用此API可以设置开放时间。|

Parameters  

|Name|Description|
|:---|:----------|
|open|地点的开放时间。|

