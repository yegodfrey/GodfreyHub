---
name: document/cn/HMSCore-References/error-code-0000001050992067
title: 错误码
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-References/error-code-0000001050992067
---

# 错误码

## Service 异常

|错误码|值|描述|解决方法|
|:----------------------------------------|:----|:------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|INTERNAL_ERROR|10000|内部错误。|系统内部报错，您无法单独处理，请联系华为技术支持解决。|
|ARGUMENTS_EMPTY|10100|传入的参数为空。|请检查必填参数。|
|ARGUMENTS_INVALID|10101|传入的参数错误。|请检查参数是否正确。|
|PERMISSION_DENIED|10102|权限不足。|请检查[HMS Core（APK）定位权限](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/faq-0000001050986161#section133516318514)是否打开。|
|NOT_IN_MOCK_MODE|10103|mock模式未启用。|请先设置[setMockMode](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/fusedlocationproviderclient-0000001050746169#section1333112213152)(true)。|
|NO_MATCHED_CALLBACK|10104|没有匹配的Callback。|请检查参数列表中是否传入正确的Callback。|
|NETWORK_LOCATION_SERVICES_DISABLED|10105|网络位置服务不可用。|请到定位服务页面打开网络位置服务开关。|
|NO_MATCHED_INTENT|10108|没有匹配的PendingIntent。|请使用与之前发送请求的相同构造参数的PendingIntent。|
|NAVIGATION_NOT_AVAILABLE|10109|当前服务不可用。|手机配置暂时无法支持3D高架导航能力或者无法判断设备是否支持室外高精度能力。|
|NAVIGATION_EMPTY_RESULT|10110|获取结果为空。|手机配置缺少气压传感器无法获取数据，导致返回结果为空。|
|GEOFENCE_NOT_AVAILABLE|10200|当前地理围栏服务不可用。|手机配置暂时无法支持地理围栏功能。|
|GEOFENCE_TOO_MANY_GEOFENCES|10201|添加围栏数超过限制。|当前每个应用仅支持添加100个围栏，请在范围内调整添加的围栏数量。|
|GEOFENCE_TOO_MANY_PENDING_INTENTS|10202|PendingIntent上限为5个。|请复用已经存在的PendingIntents。|
|GEOFENCE_INSUFFICIENT_LOCATION_PERMISSION|10204|没有足够的权限进行地理围栏相关操作。|1. 请检查您的应用是否打开"位置权限"开关。 2. 请根据"地理围栏服务开发"下[指定应用权限](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/geofence-develop-steps-0000001050986159#section260051824319)检查"AndroidManifest.xml"权限。|
|GEOFENCE_REQUEST_TOO_FREQUENT|10205|添加地理围栏过于频繁。|请稍后重试。|
|GEOFENCE_SERVICE_SWITCH_OFF|10206|地理围栏服务开关已关闭|请检查"[地理围栏服务](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/faq-0000001050986161#section996182111322)"开关是否打开。|
|ENABLE_CONVERSION_EVENT_FAILED|10300|活动过渡事件注册失败。|请检查注册的事件是否非法，若合法事件注册失败请联系技术支撑。|
|ACTIVITY_IDENTIFICATION_NOT_AVAILABLE|10301|当前活动识别服务不可用。|手机配置暂时无法支持活动识别功能。|
|NOT_SUPPORT_WATCH|10601|当前服务不支持手表。|请在支持的设备上进行该服务调用，设备支持情况请参见[支持的设备](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/introduction-0000001050706106#section207491610112917)。|

## SDK 异常

|错误码|值|描述|解决方法|
|:-----------------------------|:----|:-------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|PARAM_ERROR_EMPTY|10801|必选参数为空。|请检查必填参数。|
|PARAM_ERROR_INVALID|10802|参数校验错误。|请检查参数是否正确。|
|PERMISSION_DENIED|10803|权限不足。|1. 请检查您的应用是否打开相关权限开关。 2. 请根据[开发指南](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/location-develop-steps-0000001050746143)中功能涉及应用权限检查"AndroidManifest.xml"权限配置。|
|NO_MATCHED_CALLBACK|10804|没有匹配的Callback。|请检查参数列表中是否传入正确的Callback。|
|NO_MATCHED_INTENT|10805|没有匹配的Intent。|请检查参数列表中是否传入正确的Intent。|
|NOT_YET_SUPPORTED|10806|暂不支持。|接口暂未对外开放。|
|METHOD_INVOKE_ERROR|10807|接口调用错误。|[requestLocationUpdates()](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/fusedlocationproviderclient-0000001050746169#section1210118391289)接口中，priority参数仅支持100,102,104,105；如果您设置的priority为200或300，请调用[requestLocationUpdatesEx()](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/fusedlocationproviderclient-0000001050746169#section91051750194015)接口。|
|AGC_CHECK_FAIL|10808|AGC身份验证失败。|请检查是否已[配置AppGallery Connect](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/config-agc-0000001057629153)。|
|NO_PRECISE_LOCATION_PERMISSION|10809|没有精准位置权限。|请检查是否授予ACCESS_FINE_LOCATION精准位置权限。|

若您的问题仍无法解决，请选择[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题，华为支持人员会及时处理。在线提单操作步骤可参见[在线提单指导](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/problems-submission-guide-0000001168773227)。

