---
name: cangjie-guides/cj-location-guidelines
title: 获取设备的位置信息开发指导
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-location-guidelines
nodePath: 应用服务 / Location Kit（位置服务） / 获取设备的位置信息开发指导
---

# 获取设备的位置信息开发指导

#### 场景概述

开发者可以调用位置相关接口，获取设备实时位置或最近的历史位置，以及监听设备的位置变化。

对于位置敏感的应用业务，建议获取设备实时位置信息。如果不需要设备实时位置信息，并且希望尽可能地节省耗电，开发者可以考虑获取最近的历史位置。

#### 接口说明

获取设备的位置信息所使用的接口如下，详细说明参见：[Location Kit](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-geo_location_manager)。

本模块能力仅支持WGS-84坐标系。

接口名 | 功能描述  
---|---  
[getCurrentLocation()](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-geo_location_manager#static-func-getcurrentlocation) | 获取当前位置。  
[getCurrentLocation(CurrentLocationRequest)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-geo_location_manager#static-func-getcurrentlocationcurrentlocationrequest) | 获取当前位置。  
[getCurrentLocation(SingleLocationRequest)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-geo_location_manager#static-func-getcurrentlocationsinglelocationrequest) | 获取当前位置。  
[isLocationEnabled()](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-geo_location_manager#static-func-islocationenabled) | 判断位置服务是否已经开启。  
  
#### 开发步骤

  1. 获取设备的位置信息，需要有位置权限，位置权限申请的方法和步骤见[申请位置权限开发指导](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-location-permission-guidelines)。

  2. 导入geoLocationManager模块，所有与基础定位能力相关的功能API，都是通过该模块提供的。
         
         import kit.LocationKit.*

  3. 调用获取位置接口之前需要先判断位置开关是否打开。查询当前位置开关状态，返回结果为布尔值，true代表位置开关开启，false代表位置开关关闭，示例代码如下：
         
         import kit.LocationKit.*
         import ohos.business_exception.BusinessException
         import kit.PerformanceAnalysisKit.Hilog
         
         try {
             let locationEnabled = GeoLocationManager.isLocationEnabled()
         } catch (err: BusinessException) {
             Hilog.error(1, "info", "errCode: ${err.code}, message: ${err.message}")
         }

  4. 单次获取当前设备位置。多用于查看当前位置、签到打卡、服务推荐等场景。

     * 获取当前位置。

首先要实例化[SingleLocationRequest](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-geo_location_manager#class-singlelocationrequest)对象，用于告知系统该向应用提供何种类型的位置服务，以及单次定位超时时间。

       * 设置LocatingPriority：

如果对位置的返回精度要求较高，建议LocatingPriority参数优先选择PRIORITY_ACCURACY，会将一段时间内精度较好的结果返回给应用。

如果对定位速度要求较高，建议LocatingPriority参数选择PRIORITY_LOCATING_SPEED，会将最先拿到的定位结果返回给应用。

两种定位策略均会同时使用GNSS定位和网络定位技术，以便在室内和户外场景下均可以获取到位置结果，对设备的硬件资源消耗较大，功耗也较大。

       * 设置locatingTimeoutMs：

因为设备环境、设备所处状态、系统功耗管控策略等的影响，定位返回的时延会有较大波动，建议把单次定位超时时间设置为10秒。

以快速定位策略(PRIORITY_LOCATING_SPEED)为例，调用方式如下：
    
    import kit.LocationKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    let request: SingleLocationRequest = SingleLocationRequest(LocatingPriority.PriorityLocatingSpeed, 10000)
    try {
        // 调用getCurrentLocation获取当前设备位置
        let result = GeoLocationManager.getCurrentLocation(request)
        Hilog.info(1, "info", "current location: (${result.latitude}, ${result.longitude})")
    } catch (err: BusinessException) {
        Hilog.info(1, "info", "errCode: ${err.code}, message: ${err.message}")
    }

通过本模块获取到的坐标均为WGS-84坐标系坐标点，如需使用其他坐标系类型的坐标点，请进行坐标系转换后再使用。

可使用三方地图提供的SDK能力进行坐标系转换。



