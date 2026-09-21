---
name: document/cn/HMSCore-References/customizedttstype-0000001214687580
title: CustomizedTtsType
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-References/customizedttstype-0000001214687580
---

# CustomizedTtsType

|Enum Info|
|:---------------------------------------|
|public enum CustomizedTtsType 语音播报类型枚举类。|

## Enum Value Summary

|Enum Value and Description|
|:---------------------------------------------------------------------|
|START_NAVIGATION_DEFAULT(0) 默认开始导航短语。|
|START_NAVIGATION_HOLIDAY(1) 节假日开始导航。|
|START_NAVIGATION_HOME(2) 开始导航到家。|
|START_NAVIGATION_COMPANY(3) 开始导航到公司。|
|START_NAVIGATION_OPTIONAL_VALUE(4) 选择目的地开始导航。|
|ARRIVING_DESTINATION_DEFAULT(5) 您将达到目的地。|
|ARRIVED_DESTINATION_DEFAULT(6) 你已经到达目的地。|
|ARRIVED_DESTINATION_HOME(7） 已经到家。|
|ARRIVED_DESTINATION_COMPANY(8) 到达公司。|
|ARRIVED_DESTINATION_OPTIONAL_VALUE(9) 达到目的地。|
|ARRIVED_DESTINATION_HOLIDAY(10) 节假日到达终点。|
|START_NAVIGATION_WITH_JOURNEY(11) 默认开始导航短语（附加里程和道路名信息）。|
|START_NAVIGATION_HOME_WITH_JOURNEY(12) 开始导航到家（附加里程和道路名信息）。|
|START_NAVIGATION_COMPANY_WITH_JOURNEY(13) 开始导航到公司（附加里程和道路名信息）。|
|START_NAVIGATION_OPTIONAL_VALUE_WITH_JOURNEY(14) 开始导航到目的地（附加里程和道路名信息）。|
|DRIVE_AT_NIGHT_VALUE_WITH_JOURNEY(15) 夜间行驶（附加里程和道路名信息）。|
|DRIVE_AT_NIGHT_VALUE(16) 夜间行驶。|
|YAW_TIME_CLOSE_NAVIGATION(17) 偏航前后用时相近（6%差异度以内）的偏航播报。|
|YAW_ROAD_NAME_NAVIGATION(18) 拥有途径路名的偏航播报。|
|YAW_NAVIGATION_DEFAULT(19) 兜底偏航播报。|
|REFRESH_ROUTE(20) 已为您刷新路线。|
|YAW_NAVIGATION_TO_NEXT_WAYPOINT(21) 已为您导航至下一个目的地。|
|YAW_NAVIGATION_TO_DESTINATION(22) 已为您导航至终点。|
|UNKNOWN_VALUE(-1) 未知类型。|

## Public Method Summary

|Qualifier and Type|Method Name and Description|
|:-----------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------------|
|int|[getType](#section126361019183110)() 获取到当前播报的类型值。|
|static [CustomizedTtsType](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/customizedttstype-0000001214687580)|[valueOf](#section12769105019327)(int value) 根据传入的枚举值获取对应的枚举类型。|

## Public Methods

### getType

|Method|
|:--------------------------------------|
|public int getType() 您调用此API可以当前播报的类型值。|

**Return** **s**

|Type|Description|
|:---|:----------|
|int|播报的类型值。|

### valueOf

|Method|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public static [CustomizedTtsType](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/customizedttstype-0000001214687580) valueOf(int value) 您调用此API可以根据传入的标识值获取对应的枚举类型。|

**Parameters**

|Name|Description|
|:----|:----------|
|value|传入的标识值。|

**Return** **s**

|Type|Description|
|:----------------------------------------------------------------------------------------------------------------------|:----------|
|[CustomizedTtsType](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/customizedttstype-0000001214687580)|枚举类型。|

