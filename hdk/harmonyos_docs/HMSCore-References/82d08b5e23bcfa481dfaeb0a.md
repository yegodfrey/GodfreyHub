---
name: document/cn/HMSCore-References/flutter-plugin-location-0000001208184794
title: Location
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-References/flutter-plugin-location-0000001208184794
---

# Location

包含位置相关属性的对象。  

#### Properties

|名称|类型|描述|
|:---------------------------|:------|:----------------------------|
|latitude|double?|纬度，单位为度。|
|longitude|double?|经度，单位为度。|
|altitude|double?|海拔高度（如果有），单位为米，以WGS 84椭球体为参考。|
|speed|double?|速度（如果有），单位为米/秒。|
|bearing|double?|朝向，单位为度。|
|accuracy|double?|此位置的预估水平精度，径向，单位为米。|
|verticalAccuracyMeters|double?|此位置的预估垂直精度，单位为米。|
|bearingAccuracyDegrees|double?|此位置的预估朝向精度，单位为度。|
|speedAccuracyMetersPerSecond|double?|此位置的预估速度精度，以米/秒为单位。|
|time|int?|自1970年1月1日以来的时间（毫秒数）。|
|fromMockProvider|bool?|位置提供者状态。|

#### Constructor Summary

|构造函数|定义|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------|
|[Location({double? latitude, double? longitude, double? altitude, double? speed, double? bearing, double? accuracy, double? verticalAccuracyMeters, double? bearingAccuracyDegrees, double? sppedAccuracyMetersPerSecond, int? time, bool? fromMockProvider})](#section4952mcpsimp)|创建Location对象。|

#### Constructors

#### Location

创建Location对象。  

|参数|类型|描述|
|:---------------------------|:------|:----------------------------|
|latitude|double?|纬度，单位为度。|
|longitude|double?|经度，单位为度。|
|altitude|double?|海拔高度（如果有），单位为米，以WGS 84椭球体为参考。|
|speed|double?|速度（如果有），单位为米/秒。|
|bearing|double?|朝向，单位为度。|
|accuracy|double?|此位置的预估水平精度，径向，单位为米。|
|verticalAccuracyMeters|double?|此位置的预估垂直精度，单位为米。|
|bearingAccuracyDegrees|double?|此位置的预估朝向精度，单位为度。|
|speedAccuracyMetersPerSecond|double?|此位置的预估速度精度，以米/秒为单位。|
|time|int?|自1970年1月1日以来的时间（毫秒数）。|
|fromMockProvider|bool?|位置提供者状态。|

