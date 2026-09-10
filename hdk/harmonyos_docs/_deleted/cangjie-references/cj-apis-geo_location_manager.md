---
name: cangjie-references/cj-apis-geo_location_manager
title: ohos.geo_location_manager（位置服务）
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-geo_location_manager
nodePath: 应用服务 / Location Kit（位置服务） / 仓颉API / ohos.geo_location_manager（位置服务）
---

# ohos.geo_location_manager（位置服务）

geo_location_manager模块提供GNSS定位、网络定位（蜂窝基站、WLAN、蓝牙定位技术）等基本功能。

使用位置服务时请打开设备“位置”开关。如果“位置”开关关闭并且代码未设置捕获异常，可能导致应用异常。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/13/v3/p3cyLI_VTUOTg4n9US_aIQ/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111745Z&HW-CC-Expire=86400&HW-CC-Sign=6AB547F8EEA2817E64F66DC0AF5A7542A7015AF554271A77380CF4B3E144F5DD)

本模块能力仅支持WGS-84坐标系。

#### 导入模块
    
    
    import kit.LocationKit.*

#### 申请权限

请参考[申请位置权限开发指导](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-location-permission-guidelines#开发步骤)

#### 使用说明

API示例代码使用说明：

  * 若示例代码首行有“// index.cj”注释，表示该示例可在仓颉模板工程的“index.cj”文件中编译运行。
  * 若示例需获取[Context](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#class-context)应用上下文，需在仓颉模板工程中的“main_ability.cj”文件中进行配置。



上述示例工程及配置模板详见[仓颉示例代码说明](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-development-intro#仓颉示例代码说明)。

#### class CurrentLocationRequest
    
    
    public class CurrentLocationRequest {
        public var priority: LocationRequestPriority
        public var scenario: LocationRequestScenario
        public var maxAccuracy: Float32
        public var timeoutMs: Int32
        public init(priority!: LocationRequestPriority = LocationRequestPriority.FirstFix,
            scenario!: LocationRequestScenario = LocationRequestScenario.Unset, maxAccuracy!: Float32 = 0.0,
            timeoutMs!: Int32 = 5000)
    }

**功能：** 当前位置信息请求参数。

**系统能力：** SystemCapability.Location.Location.Core

**起始版本：** 22

#### [h2]var maxAccuracy
    
    
    public var maxAccuracy: Float32

**功能：** 应用向系统请求位置信息时要求的精度值，单位为米。该参数仅在精确位置功能场景（即同时授权了ohos.permission.APPROXIMATELY_LOCATION和ohos.permission.LOCATION 权限）下有效，模糊位置功能生效场景（即仅授权了ohos.permission.APPROXIMATELY_LOCATION 权限）下该字段无意义。

该参数生效的情况下，系统会对比GNSS或网络定位服务上报的位置信息与应用的位置信息申请。当位置信息Location中的精度值（accuracy）小于等于应用要求的精度值（maxAccuracy）时，位置信息会返回给应用；否则系统将丢弃本次收到的位置信息。

当scenario为NAVIGATION/TRAJECTORY_TRACKING/CAR_HAILING或者priority为ACCURACY时建议设置maxAccuracy为大于10的值。

当scenario为DAILY_LIFE_SERVICE/NO_POWER或者priority为LOW_POWER/FIRST_FIX时建议设置maxAccuracy为大于100的值。

**类型：** Float32

**读写能力：** 可读写

**系统能力：** SystemCapability.Location.Location.Core

**起始版本：** 22

#### [h2]var priority
    
    
    public var priority: LocationRequestPriority

**功能：** 表示优先级信息。当scenario取值为Unset时，priority参数生效，否则priority参数不生效；当scenario和priority均取值为Unset时，无法发起定位请求。取值范围见LocationRequestPriority的定义。

**类型：** LocationRequestPriority

**读写能力：** 可读写

**系统能力：** SystemCapability.Location.Location.Core

**起始版本：** 22

#### [h2]var scenario
    
    
    public var scenario: LocationRequestScenario

**功能：** 表示场景信息。当scenario取值为Unset时，priority参数生效，否则priority参数不生效；当scenario和priority均取值为Unset时，无法发起定位请求。取值范围见LocationRequestScenario的定义。

**类型：** LocationRequestScenario

**读写能力：** 可读写

**系统能力：** SystemCapability.Location.Location.Core

**起始版本：** 22

#### [h2]var timeoutMs
    
    
    public var timeoutMs: Int32

**功能：** 表示超时时间，单位是毫秒，最小为1000毫秒。取值范围为大于等于1000。

**类型：** Int32

**读写能力：** 可读写

**系统能力：** SystemCapability.Location.Location.Core

**起始版本：** 22

#### [h2]init(LocationRequestPriority, LocationRequestScenario, Float32, Int32)
    
    
    public init(priority!: LocationRequestPriority = LocationRequestPriority.FirstFix,
        scenario!: LocationRequestScenario = LocationRequestScenario.Unset, maxAccuracy!: Float32 = 0.0,
        timeoutMs!: Int32 = 5000)

**功能：** 构造CurrentLocationRequest对象。

**系统能力：** SystemCapability.Location.Location.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
priority | LocationRequestPriority | 否 | LocationRequestPriority.FirstFix | **命名参数。** 表示优先级信息。当scenario取值为Unset时，priority参数生效，否则priority参数不生效；当scenario和priority均取值为Unset时，无法发起定位请求。取值范围见LocationRequestPriority的定义。默认值为LocationRequestPriority.FirstFix。  
scenario | LocationRequestScenario | 否 | LocationRequestScenario.Unset | **命名参数。** 表示场景信息。当scenario取值为Unset时，priority参数生效，否则priority参数不生效；当scenario和priority均取值为Unset时，无法发起定位请求。取值范围见LocationRequestScenario的定义。默认值为LocationRequestScenario.Unset。  
maxAccuracy | Float32 | 否 | 0.0 | **命名参数。** 应用向系统请求位置信息时要求的精度值，单位为米。默认值为0，表示不限制位置信息的精度，取值范围为大于等于0。  
timeoutMs | Int32 | 否 | 5000 | **命名参数。** 表示超时时间，单位是毫秒，最小为1000毫秒。取值范围为大于等于1000。  
  
#### class GeoLocationManager
    
    
    public class GeoLocationManager {}

**功能：** 用于提供位置服务的类。

**系统能力：** SystemCapability.Location.Location.Core

**起始版本：** 22

#### [h2]static func getCurrentLocation()
    
    
    public static func getCurrentLocation(): Location

**功能：** 获取当前位置。

**需要权限：** ohos.APPROXIMATELY_LOCATION

**系统能力：** SystemCapability.Location.Location.Core

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
Location | 返回当前位置信息。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[位置服务子系统错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-geo_location_manager)。

错误码ID | 错误信息  
---|---  
201 | Permission verification failed. The application does not have the permission required to call the API.  
801 | Capability not supported. Failed to call ${geoLocationManager.getCurrentLocation} due to limited device capabilities.  
3301000 | The location service is unavailable.  
3301100 | The location switch is off.  
3301200 | Failed to obtain the geographical location.  
  



**示例：**
    
    
    // index.cj
    
    import kit.LocationKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let location = GeoLocationManager.getCurrentLocation()
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]static func getCurrentLocation(CurrentLocationRequest)
    
    
    public static func getCurrentLocation(request: CurrentLocationRequest): Location

**功能：** 获取当前位置。

**需要权限：** ohos.APPROXIMATELY_LOCATION

**系统能力：** SystemCapability.Location.Location.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
request | CurrentLocationRequest | 是 | - | 设置位置请求参数。  
  
**返回值：**

类型 | 说明  
---|---  
Location | 返回当前位置信息。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[位置服务子系统错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-geo_location_manager)。

错误码ID | 错误信息  
---|---  
201 | Permission verification failed. The application does not have the permission required to call the API.  
801 | Capability not supported. Failed to call ${geoLocationManager.getCurrentLocation} due to limited device capabilities.  
3301000 | The location service is unavailable.  
3301100 | The location switch is off.  
3301200 | Failed to obtain the geographical location.  
  



**示例：**
    
    
    // index.cj
    
    import kit.LocationKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let location = GeoLocationManager.getCurrentLocation(CurrentLocationRequest())
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]static func getCurrentLocation(SingleLocationRequest)
    
    
    public static func getCurrentLocation(request: SingleLocationRequest): Location

**功能：** 获取当前位置。

**需要权限：** ohos.APPROXIMATELY_LOCATION

**系统能力：** SystemCapability.Location.Location.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
request | SingleLocationRequest | 是 | - | 设置位置请求参数。  
  
**返回值：**

类型 | 说明  
---|---  
Location | 返回当前位置信息。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[位置服务子系统错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-geo_location_manager)。

错误码ID | 错误信息  
---|---  
201 | Permission verification failed. The application does not have the permission required to call the API.  
801 | Capability not supported. Failed to call ${geoLocationManager.getCurrentLocation} due to limited device capabilities.  
3301000 | The location service is unavailable.  
3301100 | The location switch is off.  
3301200 | Failed to obtain the geographical location.  
  



**示例：**
    
    
    // index.cj
    
    import kit.LocationKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let location = GeoLocationManager.getCurrentLocation(SingleLocationRequest(LocatingPriority.PriorityLocatingSpeed, 1000))
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]static func isLocationEnabled()
    
    
    public static func isLocationEnabled(): Bool

**功能：** 判断位置服务是否已经开启。

**系统能力：** SystemCapability.Location.Location.Core

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
Bool |  true：位置信息开关已开启。 false：位置信息开关已关闭。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[位置服务子系统错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-geo_location_manager)。

错误码ID | 错误信息  
---|---  
801 | Capability not supported. Failed to call ${geoLocationManager.isLocationEnabled} due to limited device capabilities.  
3301000 | The location service is unavailable.  
  



**示例：**
    
    
    // index.cj
    
    import kit.LocationKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let res = GeoLocationManager.isLocationEnabled()
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### class Location
    
    
    public class Location {
        public var latitude: Float64
        public var longitude: Float64
        public var altitude: Float64
        public var accuracy: Float64
        public var speed: Float64
        public var timestamp: Int64
        public var direction: Float64
        public var timeSinceBoot: Int64
        public var additions: ?Array<String>
        public var additionsMap: ?Map<String, String>
        public var additionSize: ?Int64
        public var altitudeAccuracy: ?Float64
        public var speedAccuracy: ?Float64
        public var directionAccuracy: ?Float64
        public var uncertaintyOfTimeSinceBoot: ?Int64
        public var sourceType: ?LocationSourceType
    }

**功能：** 位置信息。

**系统能力：** SystemCapability.Location.Location.Core

**起始版本：** 22

#### [h2]var accuracy
    
    
    public var accuracy: Float64

**功能：** 表示精度信息，单位米。

**类型：** Float64

**读写能力：** 可读写

**系统能力：** SystemCapability.Location.Location.Core

**起始版本：** 22

#### [h2]var additionSize
    
    
    public var additionSize: ?Int64

**功能：** 附加信息数量。取值范围为大于等于0。

**类型：** Int64

**读写能力：** 可读写

**系统能力：** SystemCapability.Location.Location.Core

**起始版本：** 22

#### [h2]var additions
    
    
    public var additions: ?Array<String>

**功能：** 附加信息。

**类型：** Array<String>

**读写能力：** 可读写

**系统能力：** SystemCapability.Location.Location.Core

**起始版本：** 22

#### [h2]var additionsMap
    
    
    public var additionsMap: ?Map<String, String>

**功能：** 附加信息。具体内容和顺序与additions一致。

**类型：** ?Map<String, String>

**读写能力：** 可读写

**系统能力：** SystemCapability.Location.Location.Core

**起始版本：** 22

#### [h2]var altitude
    
    
    public var altitude: Float64

**功能：** 表示高度信息，单位米。

**类型：** Float64

**读写能力：** 可读写

**系统能力：** SystemCapability.Location.Location.Core

**起始版本：** 22

#### [h2]var altitudeAccuracy
    
    
    public var altitudeAccuracy: ?Float64

**功能：** 表示高度信息的精度，单位米。

**类型：** Float64

**读写能力：** 可读写

**系统能力：** SystemCapability.Location.Location.Core

**起始版本：** 22

#### [h2]var direction
    
    
    public var direction: Float64

**功能：** 表示航向信息。单位是“度”，取值范围为0到360。

**类型：** Float64

**读写能力：** 可读写

**系统能力：** SystemCapability.Location.Location.Core

**起始版本：** 22

#### [h2]var directionAccuracy
    
    
    public var directionAccuracy: ?Float64

**功能：** 表示航向信息的精度。单位是“度”，取值范围为0到360。

**类型：** Float64

**读写能力：** 可读写

**系统能力：** SystemCapability.Location.Location.Core

**起始版本：** 22

#### [h2]var latitude
    
    
    public var latitude: Float64

**功能：** 表示纬度信息，正值表示北纬，负值表示南纬。取值范围为-90到90。仅支持WGS84坐标系。

**类型：** Float64

**读写能力：** 可读写

**系统能力：** SystemCapability.Location.Location.Core

**起始版本：** 22

#### [h2]var longitude
    
    
    public var longitude: Float64

**功能：** 表示经度信息，正值表示东经，负值表示西经。取值范围为-180到180。仅支持WGS84坐标系。

**类型：** Float64

**读写能力：** 可读写

**系统能力：** SystemCapability.Location.Location.Core

**起始版本：** 22

#### [h2]var sourceType
    
    
    public var sourceType: ?LocationSourceType

**功能：** 表示定位结果的来源。

**类型：** LocationSourceType

**读写能力：** 可读写

**系统能力：** SystemCapability.Location.Location.Core

**起始版本：** 22

#### [h2]var speed
    
    
    public var speed: Float64

**功能：** 表示速度信息，单位米每秒。

**类型：** Float64

**读写能力：** 可读写

**系统能力：** SystemCapability.Location.Location.Core

**起始版本：** 22

#### [h2]var speedAccuracy
    
    
    public var speedAccuracy: ?Float64

**功能：** 表示速度信息的精度，单位米每秒。

**类型：** ?Float64

**读写能力：** 可读写

**系统能力：** SystemCapability.Location.Location.Core

**起始版本：** 22

#### [h2]var timeSinceBoot
    
    
    public var timeSinceBoot: Int64

**功能：** 表示获取位置成功的时间戳，值表示从本次开机到获取位置成功所经过的时间，单位为纳秒。

**类型：** Int64

**读写能力：** 可读写

**系统能力：** SystemCapability.Location.Location.Core

**起始版本：** 22

#### [h2]var timestamp
    
    
    public var timestamp: Int64

**功能：** 表示位置时间戳，UTC格式。

**类型：** Int64

**读写能力：** 可读写

**系统能力：** SystemCapability.Location.Location.Core

**起始版本：** 22

#### [h2]var uncertaintyOfTimeSinceBoot
    
    
    public var uncertaintyOfTimeSinceBoot: ?Int64

**功能：** 表示位置时间戳的不确定度。

**类型：** Int64

**读写能力：** 可读写

**系统能力：** SystemCapability.Location.Location.Core

**起始版本：** 22

#### class SingleLocationRequest
    
    
    public class SingleLocationRequest {
        public var locatingPriority: LocatingPriority
        public var locatingTimeoutMs: Int32
        public init(locatingPriority: LocatingPriority, locatingTimeoutMs: Int32)
    }

**功能：** 单次定位的请求参数。

**系统能力：** SystemCapability.Location.Location.Core

**起始版本：** 22

#### [h2]var locatingPriority
    
    
    public var locatingPriority: LocatingPriority

**功能：** 表示优先级信息。取值范围见LocatingPriority的定义。

**类型：** LocatingPriority

**读写能力：** 可读写

**系统能力：** SystemCapability.Location.Location.Core

**起始版本：** 22

#### [h2]var locatingTimeoutMs
    
    
    public var locatingTimeoutMs: Int32

**功能：** 表示超时时间，单位是毫秒，最小为1000毫秒。取值范围为大于等于1000。

**类型：** Int32

**读写能力：** 可读写

**系统能力：** SystemCapability.Location.Location.Core

**起始版本：** 22

#### [h2]init(LocatingPriority, Int32)
    
    
    public init(locatingPriority: LocatingPriority, locatingTimeoutMs: Int32)

**功能：** 构造SingleLocationRequest对象。

**系统能力：** SystemCapability.Location.Location.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
locatingPriority | LocatingPriority | 是 | - | 表示优先级信息。取值范围见LocatingPriority的定义。  
locatingTimeoutMs | Int32 | 是 | - | 表示超时时间，单位是毫秒，最小为1000毫秒。取值范围为大于等于1000。  
  
#### enum LocatingPriority
    
    
    public enum LocatingPriority {
        | PriorityAccuracy
        | PriorityLocatingSpeed
        | ...
    }

**功能：** 单次位置请求中的优先级类型。

**系统能力：** SystemCapability.Location.Location.Core

**起始版本：** 22

#### [h2]PriorityAccuracy
    
    
    PriorityAccuracy

**功能：** 表示精度优先。

定位精度优先策略会同时使用GNSS定位和网络定位技术，并把一段时间内精度较好的结果返回给应用；这个时间段长度为SingleLocationRequest.locatingTimeoutMs与“30秒”中的较小者。

对设备的硬件资源消耗较大，功耗较大。

**系统能力：** SystemCapability.Location.Location.Core

**起始版本：** 22

#### [h2]PriorityLocatingSpeed
    
    
    PriorityLocatingSpeed

**功能：** 表示快速获取位置优先，如果应用希望快速拿到一个位置，可以将优先级设置为该类型。

快速定位优先策略会同时使用GNSS定位和网络定位技术，以便在室内和户外场景下均可以快速获取到位置结果，我们会把最先拿到的定位结果返回给应用。对设备的硬件资源消耗较大，功耗也较大。

**系统能力：** SystemCapability.Location.Location.Core

**起始版本：** 22

#### enum LocationRequestPriority
    
    
    public enum LocationRequestPriority {
        | Unset
        | Accuracy
        | LowPower
        | FirstFix
        | ...
    }

**功能：** 位置请求中位置信息优先级类型。

**系统能力：** SystemCapability.Location.Location.Core

**起始版本：** 22

#### [h2]Accuracy
    
    
    Accuracy

**功能：** 表示精度优先。

定位精度优先策略主要以GNSS定位技术为主。我们会在GNSS提供稳定位置结果之前使用网络定位技术提供服务。在持续定位过程中，如果超过30秒无法获取GNSS定位结果则使用网络定位技术。对设备的硬件资源消耗较大，功耗较大。

**系统能力：** SystemCapability.Location.Location.Core

**起始版本：** 22

#### [h2]FirstFix
    
    
    FirstFix

**功能：** 表示快速获取位置优先，如果应用希望快速拿到一个位置，可以将优先级设置为该字段。

快速定位优先策略会同时使用GNSS定位和网络定位技术，以便在室内和户外场景下均可以快速获取到位置结果；当各种定位技术都有提供位置结果时，系统会选择其中精度较好的结果返回给应用。因为对各种定位技术同时使用，对设备的硬件资源消耗较大，功耗也较大。

**系统能力：** SystemCapability.Location.Location.Core

**起始版本：** 22

#### [h2]LowPower
    
    
    LowPower

**功能：** 表示低功耗优先。

低功耗定位优先策略仅使用网络定位技术，在室内和户外场景均可提供定位服务，因为其依赖周边基站、可见WLAN、蓝牙设备的分布情况，定位结果的精度波动范围较大，推荐在对定位结果精度要求不高的场景下使用该策略，可以有效节省设备功耗。

**系统能力：** SystemCapability.Location.Location.Core

**起始版本：** 22

#### [h2]Unset
    
    
    Unset

**功能：** 表示未设置优先级，表示LocationRequestPriority无效。

**系统能力：** SystemCapability.Location.Location.Core

**起始版本：** 22

#### enum LocationRequestScenario
    
    
    public enum LocationRequestScenario {
        | Unset
        | Navigation
        | TrajectoryTracking
        | CarHailing
        | DailyLifeService
        | NoPower
        | ...
    }

**功能：** 位置请求中定位场景类型。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b7/v3/pZ8r4GTESuu9GiEmL-kx0A/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111745Z&HW-CC-Expire=86400&HW-CC-Sign=913551E84F5130EC568BCEA40C233A23760531583D562E45E4932FCB7D1BA757)

当使用NAVIGATION/TRAJECTORY_TRACKING/CAR_HAILING场景进行单次定位或持续定位时，会在GNSS提供稳定位置结果之前使用网络定位技术提供服务；在持续定位时，如果超过30秒无法获取GNSS定位结果则会使用网络定位技术获取位置。

**系统能力：** SystemCapability.Location.Location.Core

**起始版本：** 22

#### [h2]CarHailing
    
    
    CarHailing

**功能：** 表示打车场景。

适用于用户出行打车时定位当前位置的场景，如网约车类应用。

主要使用GNSS定位技术提供定位服务，功耗较高。

**系统能力：** SystemCapability.Location.Location.Core

**起始版本：** 22

#### [h2]DailyLifeService
    
    
    DailyLifeService

**功能：** 表示日常服务使用场景。

适用于不需要定位用户精确位置的使用场景，如新闻资讯、网购、点餐类应用。

该场景仅使用网络定位技术提供定位服务，功耗较低。

**系统能力：** SystemCapability.Location.Location.Core

**起始版本：** 22

#### [h2]Navigation
    
    
    Navigation

**功能：** 表示导航场景。

适用于在户外获取设备实时位置的场景，如车载、步行导航。

主要使用GNSS定位技术提供定位服务，功耗较高。

**系统能力：** SystemCapability.Location.Location.Core

**起始版本：** 22

#### [h2]NoPower
    
    
    NoPower

**功能：** 表示无功耗场景，这种场景下不会主动触发定位，会在其他应用定位时，才给当前应用返回位置。

**系统能力：** SystemCapability.Location.Location.Core

**起始版本：** 22

#### [h2]TrajectoryTracking
    
    
    TrajectoryTracking

**功能：** 表示运动轨迹记录场景。

适用于记录用户位置轨迹的场景，如运动类应用记录轨迹功能。

主要使用GNSS定位技术提供定位服务，功耗较高。

**系统能力：** SystemCapability.Location.Location.Core

**起始版本：** 22

#### [h2]Unset
    
    
    Unset

**功能：** 表示未设置场景信息。

表示LocationRequestScenario字段无效。

**系统能力：** SystemCapability.Location.Location.Core

**起始版本：** 22

#### enum LocationSourceType
    
    
    public enum LocationSourceType {
        | Gnss
        | Network
        | Indoor
        | Rtk
        | ...
    }

**功能：** 定位结果的来源。

**系统能力：** SystemCapability.Location.Location.Core

**起始版本：** 22

#### [h2]Gnss
    
    
    Gnss

**功能：** 表示定位结果来自于GNSS定位技术。

**系统能力：** SystemCapability.Location.Location.Core

**起始版本：** 22

#### [h2]Indoor
    
    
    Indoor

**功能：** 表示定位结果来自于室内高精度定位技术。

**系统能力：** SystemCapability.Location.Location.Core

**起始版本：** 22

#### [h2]Network
    
    
    Network

**功能：** 表示定位结果来自于网络定位技术。

**系统能力：** SystemCapability.Location.Location.Core

**起始版本：** 22

#### [h2]Rtk
    
    
    Rtk

**功能：** 表示定位结果来自于室外高精度定位技术。

**系统能力：** SystemCapability.Location.Location.Core

**起始版本：** 22
