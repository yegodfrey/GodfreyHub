---
name: cangjie-references/cj-apis-sensor
title: ohos.sensor（传感器）
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-sensor
nodePath: 系统 / 硬件 / Sensor Service Kit（传感器服务） / 仓颉API / ohos.sensor（传感器）
---

# ohos.sensor（传感器）  
  
sensor模块提供了获取传感器数据的能力，包括获取传感器属性列表、订阅传感器数据以及一些通用的传感器算法。

#### 导入模块
    
    
    import kit.SensorServiceKit.*

#### 权限列表

ohos.permission.ACCELEROMETER

ohos.permission.GYROSCOPE

ohos.permission.READ_HEALTH_DATA

ohos.permission.ACTIVITY_MOTION

#### 使用说明

API示例代码使用说明：

  * 若示例代码首行有“// index.cj”注释，表示该示例可在仓颉模板工程的“index.cj”文件中编译运行。
  * 若示例需获取[Context](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#class-context)应用上下文，需在仓颉模板工程中的“main_ability.cj”文件中进行配置。



上述示例工程及配置模板详见[仓颉示例代码说明](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-development-intro#仓颉示例代码说明)。

#### func getSensorList()
    
    
    public func getSensorList(): Array<Sensor>

**功能：** 获取设备上的所有传感器信息。

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
Array<Sensor> | 返回传感器属性列表。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[传感器错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-sensor)。

错误码ID | 错误信息  
---|---  
14500101 | Service exception.Possible causes:1. Sensor hdf service exception;2. Sensor service ipc exception;3. Sensor data channel exception.  
  



**示例：**
    
    
    // index.cj
    
    import kit.SensorServiceKit.*
    import kit.PerformanceAnalysisKit.*
    import ohos.business_exception.BusinessException
    
    try {
        let sensors = getSensorList()
        for (index in 0..sensors.size) {
            Hilog.info(0, "test", "Succeeded in getting sensor${index}: ${sensors[index].sensorId}", "")
        }
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "Failed to get sensor list. Code: ${e.code}, message: ${e.message}", "")
    }

#### func getSingleSensor(SensorId)
    
    
    public func getSingleSensor(sensorType: SensorId): Sensor

**功能：** 获取指定类型的传感器信息。

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
sensorType | SensorId | 是 | - | 传感器类型。  
  
**返回值：**

类型 | 说明  
---|---  
Sensor | 返回传感器信息。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[传感器错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-sensor)。

错误码ID | 错误信息  
---|---  
14500101 | Service exception.Possible causes:1. Sensor hdf service exception;2. Sensor service ipc exception;3. Sensor data channel exception.  
14500102 | The sensor is not supported by the device.  
  



**示例：**
    
    
    // index.cj
    
    import kit.SensorServiceKit.*
    import kit.PerformanceAnalysisKit.*
    import ohos.business_exception.BusinessException
    
    try {
        let sensors = getSingleSensor(SensorId.Accelerometer)
        Hilog.info(0, "test", "Succeeded in getting sensor: ${sensors.sensorName}", "")
    } catch (e: BusinessException) {
        Hilog.error(0, "test", "Code: ${e.code}, message: ${e.message}", "")
    }

#### func off(SensorId, ?CallbackObject)
    
    
    public func off(sensorType: SensorId, callback!: ?CallbackObject = None): Unit

**功能：** 取消订阅传感器数据。

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
sensorType | SensorId | 是 | - | 传感器类型。  
callback | ?[CallbackObject](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-callback_invoke#class-callbackobject) | 否 | None | **命名参数。** 需要取消订阅的回调函数，若无此参数，则取消订阅当前类型的所有回调函数。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[传感器错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-sensor)。

错误码ID | 错误信息  
---|---  
201 | Permission verification failed. The application does not have permission to call the API.  
  



**示例：**
    
    
    // index.cj
    
    import kit.SensorServiceKit.*
    import kit.PerformanceAnalysisKit.*
    import ohos.business_exception.BusinessException
    import ohos.callback_invoke.*
    
    class SensorCallback <: Callback1Argument<OrientationResponse> {
        init() {}
        public func invoke(err: ?BusinessException, arg: OrientationResponse): Unit {
            Hilog.info(0, "test", "Succeeded in getting SensorCallback1 arg: steps: ${arg.timestamp}, alpha: ${arg.alpha},  beta: ${arg.beta},  gamma: ${arg.gamma}", "")
        }
    }
    
    let callback1 = SensorCallback()
    let callback2 = SensorCallback()
    try {
        on(SensorId.Orientation, callback1)
        on(SensorId.Orientation, callback2)
        // 仅取消callback1的注册
        off(SensorId.Orientation, callback: callback1)
        // 取消注册SensorId.ORIENTATION的所有回调
        off(SensorId.Orientation)
    } catch (e: BusinessException) {
        Hilog.error(0, "test", "Code: ${e.code}, message: ${e.message}", "")
    }

#### func on<T>(SensorId, Callback1Argument<T>, ?Options) where T <: Response
    
    
    public func on<T>(sensorType: SensorId, callback: Callback1Argument<T>, option!: ?Options = None): Unit where T <: Response

**功能：** 订阅传感器数据。

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
sensorType | SensorId | 是 | - | 传感器类型。  
callback | [Callback1Argument](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-callback_invoke#class-callback1argumenta)<T> | 是 | - | 回调函数。  
option | ?Options | 否 | None | **命名参数。** 可选参数列表，用于设置传感器上报频率，默认值为200000000ns。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[传感器错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-sensor)。

错误码ID | 错误信息  
---|---  
201 | Permission verification failed. The application does not have permission to call the API.  
14500101 | Service exception.Possible causes:1. Sensor hdf service exception;2. Sensor service ipc exception;3. Sensor data channel exception.  
  



**示例：**
    
    
    // index.cj
    
    import kit.SensorServiceKit.*
    import kit.PerformanceAnalysisKit.*
    import ohos.business_exception.BusinessException
    import ohos.callback_invoke.*
    
    class AccelerometerCallback <: Callback1Argument<AccelerometerResponse> {
        init() {}
        public func invoke(err: ?BusinessException, arg: AccelerometerResponse): Unit {
            Hilog.info(0, "test", "Succeeded in getting AccelerometerCallback arg: timestamp: ${arg.timestamp}, x: ${arg.x},  y: ${arg.y},  z: ${arg.z}", "")
        }
    }
    
    let callback = AccelerometerCallback()
    let options = Options(interval: IntervalOption.SensorNumber(100000000))
    try {
        on(SensorId.Accelerometer, callback, option: options)
    } catch (e: BusinessException) {
        Hilog.error(0, "test", "Code: ${e.code}, message: ${e.message}", "")
    }

#### func once<T>(SensorId, Callback1Argument<T>) where T <: Response
    
    
    public func once<T>(sensorType: SensorId, callback: Callback1Argument<T>): Unit where T <: Response

**功能：** 获取一次传感器数据。

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
sensorType | SensorId | 是 | - | 传感器类型。  
callback | [Callback1Argument](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-callback_invoke#class-callback1argumenta)<T> | 是 | - | **命名参数。** 回调函数，异步上报的传感器数据，每种传感器类型对应的数据类型不同。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[传感器错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-sensor)。

错误码ID | 错误信息  
---|---  
201 | Permission verification failed. The application does not have permission to call the API.  
14500101 | Service exception.Possible causes:1. Sensor hdf service exception;2. Sensor service ipc exception;3. Sensor data channel exception.  
  



**示例：**
    
    
    // index.cj
    
    import kit.SensorServiceKit.*
    import kit.PerformanceAnalysisKit.*
    import ohos.business_exception.BusinessException
    import ohos.callback_invoke.*
    
    class GyroscopeCallback <: Callback1Argument<GyroscopeResponse> {
        init() {}
        public func invoke(err: ?BusinessException, arg: GyroscopeResponse): Unit {
            Hilog.info(0, "test", "Succeeded in getting GyroscopeCallback arg: timestamp: ${arg.timestamp}, x: ${arg.x},  y: ${arg.y},  z: ${arg.z}", "")
        }
    }
    
    let callback = GyroscopeCallback()
    try {
        once(SensorId.Gyroscope, callback)
    } catch (e: BusinessException) {
        Hilog.error(0, "test", "Code: ${e.code}, message: ${e.message}", "")
    }

#### class AccelerometerResponse
    
    
    public class AccelerometerResponse <: Response {
        public var x: Float32
        public var y: Float32
        public var z: Float32
    }

**功能：** 加速度传感器数据。

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

**父类型：**

  * Response



#### [h2]var x
    
    
    public var x: Float32

**功能：** 施加在设备x轴的线性加速度，单位 : m/s²。

**类型：** Float32

**读写能力：** 可读写

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

#### [h2]var y
    
    
    public var y: Float32

**功能：** 施加在设备y轴的线性加速度，单位 : m/s²。

**类型：** Float32

**读写能力：** 可读写

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

#### [h2]var z
    
    
    public var z: Float32

**功能：** 施加在设备z轴的线性加速度，单位 : m/s²。

**类型：** Float32

**读写能力：** 可读写

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

#### class AccelerometerUncalibratedResponse
    
    
    public class AccelerometerUncalibratedResponse <: Response {
        public var x: Float32
        public var y: Float32
        public var z: Float32
        public var biasX: Float32
        public var biasY: Float32
        public var biasZ: Float32
    }

**功能：** 未校准加速度计传感器数据。

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

**父类型：**

  * Response



#### [h2]var biasX
    
    
    public var biasX: Float32

**功能：** 施加在设备x轴未校准的加速度偏量，单位 : m/s²。

**类型：** Float32

**读写能力：** 可读写

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

#### [h2]var biasY
    
    
    public var biasY: Float32

**功能：** 施加在设备y轴未校准的加速度偏量，单位 : m/s²。

**类型：** Float32

**读写能力：** 可读写

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

#### [h2]var biasZ
    
    
    public var biasZ: Float32

**功能：** 施加在设备z轴未校准的加速度偏量，单位 : m/s²。

**类型：** Float32

**读写能力：** 可读写

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

#### [h2]var x
    
    
    public var x: Float32

**功能：** 施加在设备x轴未校准的加速度，单位 : m/s²。

**类型：** Float32

**读写能力：** 可读写

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

#### [h2]var y
    
    
    public var y: Float32

**功能：** 施加在设备y轴未校准的加速度，单位 : m/s²。

**类型：** Float32

**读写能力：** 可读写

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

#### [h2]var z
    
    
    public var z: Float32

**功能：** 施加在设备z轴未校准的加速度，单位 : m/s²。

**类型：** Float32

**读写能力：** 可读写

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

#### class AmbientTemperatureResponse
    
    
    public class AmbientTemperatureResponse <: Response {
        public var temperature: Float32
    }

**功能：** 温度传感器数据。

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

**父类型：**

  * Response



#### [h2]var temperature
    
    
    public var temperature: Float32

**功能：** 环境温度（单位：摄氏度）。

**类型：** Float32

**读写能力：** 可读写

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

#### class BarometerResponse
    
    
    public class BarometerResponse <: Response {
        public var pressure: Float32
    }

**功能：** 气压计传感器数据。

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

**父类型：**

  * Response



#### [h2]var pressure
    
    
    public var pressure: Float32

**功能：** 压力值（单位：百帕）。

**类型：** Float32

**读写能力：** 可读写

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

#### class GravityResponse
    
    
    public class GravityResponse <: Response {
        public var x: Float32
        public var y: Float32
        public var z: Float32
    }

**功能：** 重力传感器数据。

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

**父类型：**

  * Response



#### [h2]var x
    
    
    public var x: Float32

**功能：** 施加在设备x轴的重力加速度，单位 : m/s²。

**类型：** Float32

**读写能力：** 可读写

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

#### [h2]var y
    
    
    public var y: Float32

**功能：** 施加在设备y轴的重力加速度，单位 : m/s²。

**类型：** Float32

**读写能力：** 可读写

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

#### [h2]var z
    
    
    public var z: Float32

**功能：** 施加在设备z轴的重力加速度，单位 : m/s²。

**类型：** Float32

**读写能力：** 可读写

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

#### class GyroscopeResponse
    
    
    public class GyroscopeResponse <: Response {
        public var x: Float32
        public var y: Float32
        public var z: Float32
    }

**功能：** 陀螺仪传感器数据。

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

**父类型：**

  * Response



#### [h2]var x
    
    
    public var x: Float32

**功能：** 设备x轴的旋转角速度，单位rad/s；取值为实际上报物理量。

**类型：** Float32

**读写能力：** 可读写

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

#### [h2]var y
    
    
    public var y: Float32

**功能：** 设备y轴的旋转角速度，单位rad/s；取值为实际上报物理量。

**类型：** Float32

**读写能力：** 可读写

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

#### [h2]var z
    
    
    public var z: Float32

**功能：** 设备z轴的旋转角速度，单位rad/s；取值为实际上报物理量。

**类型：** Float32

**读写能力：** 可读写

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

#### class GyroscopeUncalibratedResponse
    
    
    public class GyroscopeUncalibratedResponse <: Response {
        public var x: Float32
        public var y: Float32
        public var z: Float32
        public var biasX: Float32
        public var biasY: Float32
        public var biasZ: Float32
    }

**功能：** 未校准陀螺仪传感器数据。

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

**父类型：**

  * Response



#### [h2]var biasX
    
    
    public var biasX: Float32

**功能：** 设备x轴未校准的旋转角速度偏量，单位rad/s。

**类型：** Float32

**读写能力：** 可读写

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

#### [h2]var biasY
    
    
    public var biasY: Float32

**功能：** 设备y轴未校准的旋转角速度偏量，单位rad/s。

**类型：** Float32

**读写能力：** 可读写

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

#### [h2]var biasZ
    
    
    public var biasZ: Float32

**功能：** 设备z轴未校准的旋转角速度偏量，单位rad/s。

**类型：** Float32

**读写能力：** 可读写

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

#### [h2]var x
    
    
    public var x: Float32

**功能：** 设备x轴未校准的旋转角速度，单位rad/s。

**类型：** Float32

**读写能力：** 可读写

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

#### [h2]var y
    
    
    public var y: Float32

**功能：** 设备y轴未校准的旋转角速度，单位rad/s。

**类型：** Float32

**读写能力：** 可读写

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

#### [h2]var z
    
    
    public var z: Float32

**功能：** 设备z轴未校准的旋转角速度，单位rad/s。

**类型：** Float32

**读写能力：** 可读写

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

#### class HallResponse
    
    
    public class HallResponse <: Response {
        public var status: Float32
    }

**功能：** 霍尔传感器数据。

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

**父类型：**

  * Response



#### [h2]var status
    
    
    public var status: Float32

**功能：** 显示霍尔状态。测量设备周围是否存在磁力吸引，0表示没有，大于0表示有。

**类型：** Float32

**读写能力：** 可读写

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

#### class HeartRateResponse
    
    
    public class HeartRateResponse <: Response {
        public var heartRate: Float32
    }

**功能：** 心率传感器数据。

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

**父类型：**

  * Response



#### [h2]var heartRate
    
    
    public var heartRate: Float32

**功能：** 心率值。测量用户的心率数值，单位：bpm。

**类型：** Float32

**读写能力：** 可读写

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

#### class HumidityResponse
    
    
    public class HumidityResponse <: Response {
        public var humidity: Float32
    }

**功能：** 湿度传感器数据。

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

**父类型：**

  * Response



#### [h2]var humidity
    
    
    public var humidity: Float32

**功能：** 湿度值。测量环境的相对湿度，以百分比 (%) 表示。

**类型：** Float32

**读写能力：** 可读写

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

#### class LightResponse
    
    
    public class LightResponse <: Response {
        public var intensity: Float32
        public var colorTemperature: ?Float32
        public var infraredLuminance: ?Float32
    }

**功能：** 环境光传感器数据。

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

**父类型：**

  * Response



#### [h2]var colorTemperature
    
    
    public var colorTemperature:?Float32

**功能：** 色温（单位：开尔文），如果不支持该属性则返回固定值（固定值由传感器自定义），支持则返回正常数值。

**类型：** ?Float32

**读写能力：** 可读写

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

#### [h2]var infraredLuminance
    
    
    public var infraredLuminance:?Float32

**功能：** 红外亮度（单位：cd/m²），如果不支持该属性则返回固定值（固定值由传感器自定义），支持则返回正常数值。

**类型：** ?Float32

**读写能力：** 可读写

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

#### [h2]var intensity
    
    
    public var intensity: Float32

**功能：** 光强（单位：勒克斯）。

**类型：** Float32

**读写能力：** 可读写

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

#### class LinearAccelerometerResponse
    
    
    public class LinearAccelerometerResponse <: Response {
        public var x: Float32
        public var y: Float32
        public var z: Float32
    }

**功能：** 线性加速度传感器数据。

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

**父类型：**

  * Response



#### [h2]var x
    
    
    public var x: Float32

**功能：** 施加在设备x轴的线性加速度，单位 : m/s²。

**类型：** Float32

**读写能力：** 可读写

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

#### [h2]var y
    
    
    public var y: Float32

**功能：** 施加在设备y轴的线性加速度，单位 : m/s²。

**类型：** Float32

**读写能力：** 可读写

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

#### [h2]var z
    
    
    public var z: Float32

**功能：** 施加在设备z轴的线性加速度，单位 : m/s²。

**类型：** Float32

**读写能力：** 可读写

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

#### class MagneticFieldResponse
    
    
    public class MagneticFieldResponse <: Response {
        public var x: Float32
        public var y: Float32
        public var z: Float32
    }

**功能：** 磁场传感器数据。

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

**父类型：**

  * Response



#### [h2]var x
    
    
    public var x: Float32

**功能：** x轴环境磁场强度，单位：μT。

**类型：** Float32

**读写能力：** 可读写

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

#### [h2]var y
    
    
    public var y: Float32

**功能：** y轴环境磁场强度，单位：μT。

**类型：** Float32

**读写能力：** 可读写

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

#### [h2]var z
    
    
    public var z: Float32

**功能：** z轴环境磁场强度，单位：μT。

**类型：** Float32

**读写能力：** 可读写

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

#### class MagneticFieldUncalibratedResponse
    
    
    public class MagneticFieldUncalibratedResponse <: Response {
        public var x: Float32
        public var y: Float32
        public var z: Float32
        public var biasX: Float32
        public var biasY: Float32
        public var biasZ: Float32
    }

**功能：** 未校准磁场传感器数据。

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

**父类型：**

  * Response



#### [h2]var biasX
    
    
    public var biasX: Float32

**功能：** x轴未校准环境磁场强度偏量，单位：μT。

**类型：** Float32

**读写能力：** 可读写

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

#### [h2]var biasY
    
    
    public var biasY: Float32

**功能：** y轴未校准环境磁场强度偏量，单位：μT。

**类型：** Float32

**读写能力：** 可读写

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

#### [h2]var biasZ
    
    
    public var biasZ: Float32

**功能：** z轴未校准环境磁场强度偏量，单位：μT。

**类型：** Float32

**读写能力：** 可读写

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

#### [h2]var x
    
    
    public var x: Float32

**功能：** x轴未校准环境磁场强度，单位：μT。

**类型：** Float32

**读写能力：** 可读写

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

#### [h2]var y
    
    
    public var y: Float32

**功能：** y轴未校准环境磁场强度，单位：μT。

**类型：** Float32

**读写能力：** 可读写

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

#### [h2]var z
    
    
    public var z: Float32

**功能：** z轴未校准环境磁场强度，单位：μT。

**类型：** Float32

**读写能力：** 可读写

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

#### class Options
    
    
    public class Options {
        public var interval: IntervalOption
        public var sensorInfoParam:?SensorInfoParam
        public init(interval!: IntervalOption = NormalMode, sensorInfoParam!: ?SensorInfoParam = None)
    }

**功能：** 设置传感器上报频率。

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

#### [h2]var interval
    
    
    public var interval: IntervalOption

**功能：** 表示传感器的上报频率。该属性有最小值和最大值的限制，由硬件支持的上报频率决定，当设置频率大于最大值时以最大值上报数据，小于最小值时以最小值上报数据。

**类型：** IntervalOption

**读写能力：** 可读写

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

#### [h2]var sensorInfoParam
    
    
    public var sensorInfoParam:?SensorInfoParam

**功能：** 传感器传入设置参数，可指定deviceId、sensorIndex。

**类型：** ?SensorInfoParam

**读写能力：** 可读写

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

#### [h2]init(IntervalOption, ?SensorInfoParam)
    
    
    public init(interval!: IntervalOption = NormalMode, sensorInfoParam!: ?SensorInfoParam = None)

**功能：** 构造函数，创建Options实例。

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
interval | IntervalOption | 否 | NormalMode | **命名参数。** 表示传感器的上报频率，默认值为NormalMode。该属性有最小值和最大值的限制，由硬件支持的上报频率决定，当设置频率大于最大值时以最大值上报数据，小于最小值时以最小值上报数据。  
sensorInfoParam | ?SensorInfoParam | 否 | None | **命名参数。** 传感器传入设置参数，可指定deviceId、sensorIndex。  
  
#### class OrientationResponse
    
    
    public class OrientationResponse <: Response {
        public var alpha: Float32
        public var beta: Float32
        public var gamma: Float32
    }

**功能：** 方向传感器数据。

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

**父类型：**

  * Response



#### [h2]var alpha
    
    
    public var alpha: Float32

**功能：** 设备围绕Z轴的旋转角度，单位：度；取值范围为0-360度。

**类型：** Float32

**读写能力：** 可读写

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

#### [h2]var beta
    
    
    public var beta: Float32

**功能：** 设备围绕X轴的旋转角度，单位：度；取值范围为0-±180度。

**类型：** Float32

**读写能力：** 可读写

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

#### [h2]var gamma
    
    
    public var gamma: Float32

**功能：** 设备围绕Y轴的旋转角度，单位：度；取值范围为0-±90度。

**类型：** Float32

**读写能力：** 可读写

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

#### class PedometerDetectionResponse
    
    
    public class PedometerDetectionResponse <: Response {
        public var scalar: Float32
    }

**功能：** 计步检测传感器数据。

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

**父类型：**

  * Response



#### [h2]var scalar
    
    
    public var scalar: Float32

**功能：** 计步器检测。检测用户的计步动作，如果取值为1则代表用户产生了计步行走的动作，取值为0则代表用户没有发生运动。

**类型：** Float32

**读写能力：** 可读写

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

#### class PedometerResponse
    
    
    public class PedometerResponse <: Response {
        public var steps: Float32
    }

**功能：** 计步传感器数据。

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

**父类型：**

  * Response



#### [h2]var steps
    
    
    public var steps: Float32

**功能：** 用户的行走步数。步数初始值是0。用户订阅计步传感器后，每行走一步，步数累计加一。

**类型：** Float32

**读写能力：** 可读写

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

#### class ProximityResponse
    
    
    public class ProximityResponse <: Response {
        public var distance: Float32
    }

**功能：** 接近光传感器数据。

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

**父类型：**

  * Response



#### [h2]var distance
    
    
    public var distance: Float32

**功能：** 可见物体与设备显示器的接近程度。0表示接近，大于0表示远离。

**类型：** Float32

**读写能力：** 可读写

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

#### class Response
    
    
    public open class Response {
        public var timestamp: Int64
        public var accuracy: SensorAccuracy
    }

**功能：** 传感器数据的时间戳。

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

#### [h2]var accuracy
    
    
    public var accuracy: SensorAccuracy

**功能：** 传感器数据上报的精度档位值。

**类型：** SensorAccuracy

**读写能力：** 可读写

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

#### [h2]var timestamp
    
    
    public var timestamp: Int64

**功能：** 传感器数据上报的时间戳。从设备开机开始计时到上报数据的时间，单位 : ns。

**类型：** Int64

**读写能力：** 可读写

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

#### class RotationVectorResponse
    
    
    public class RotationVectorResponse <: Response {
        public var x: Float32
        public var y: Float32
        public var z: Float32
        public var w: Float32
    }

**功能：** 旋转矢量传感器数据。

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

**父类型：**

  * Response



#### [h2]var w
    
    
    public var w: Float32

**功能：** 标量，描述设备相对于某个参考方向的旋转状态，单位：弧度。

**类型：** Float32

**读写能力：** 可读写

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

#### [h2]var x
    
    
    public var x: Float32

**功能：** 旋转矢量x轴分量。

**类型：** Float32

**读写能力：** 可读写

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

#### [h2]var y
    
    
    public var y: Float32

**功能：** 旋转矢量y轴分量。

**类型：** Float32

**读写能力：** 可读写

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

#### [h2]var z
    
    
    public var z: Float32

**功能：** 旋转矢量z轴分量。

**类型：** Float32

**读写能力：** 可读写

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

#### class Sensor
    
    
    public class Sensor {
        public var sensorName: String
        public var vendorName: String
        public var firmwareVersion: String
        public var hardwareVersion: String
        public var sensorId: Int32
        public var maxRange: Float32
        public var minSamplePeriod: Int64
        public var maxSamplePeriod: Int64
        public var precision: Float32
        public var power: Float32
    }

**功能：** 指示传感器信息。

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

#### [h2]var firmwareVersion
    
    
    public var firmwareVersion: String

**功能：** 传感器固件版本。

**类型：** String

**读写能力：** 可读写

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

#### [h2]var hardwareVersion
    
    
    public var hardwareVersion: String

**功能：** 传感器硬件版本。

**类型：** String

**读写能力：** 可读写

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

#### [h2]var maxRange
    
    
    public var maxRange: Float32

**功能：** 传感器测量范围的最大值。

**类型：** Float32

**读写能力：** 可读写

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

#### [h2]var maxSamplePeriod
    
    
    public var maxSamplePeriod: Int64

**功能：** 允许的最大采样周期。

**类型：** Int64

**读写能力：** 可读写

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

#### [h2]var minSamplePeriod
    
    
    public var minSamplePeriod: Int64

**功能：** 允许的最小采样周期。

**类型：** Int64

**读写能力：** 可读写

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

#### [h2]var power
    
    
    public var power: Float32

**功能：** 传感器功率的估计值，单位：mA。

**类型：** Float32

**读写能力：** 可读写

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

#### [h2]var precision
    
    
    public var precision: Float32

**功能：** 传感器精度。

**类型：** Float32

**读写能力：** 可读写

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

#### [h2]var sensorId
    
    
    public var sensorId: Int32

**功能：** 传感器类型id。

**类型：** Int32

**读写能力：** 可读写

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

#### [h2]var sensorName
    
    
    public var sensorName: String

**功能：** 传感器名称。

**类型：** String

**读写能力：** 可读写

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

#### [h2]var vendorName
    
    
    public var vendorName: String

**功能：** 传感器供应商。

**类型：** String

**读写能力：** 可读写

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

#### class SensorInfoParam
    
    
    public class SensorInfoParam {
        public var deviceId: Int32
        public var sensorIndex: Int32
        public init(deviceId!: Int32 = -1, sensorIndex!: Int32 = 0)
    }

**功能：** 传感器传入设置参数，多传感器情况下通过deviceId、sensorIndex控制指定传感器。

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

#### [h2]var deviceId
    
    
    public var deviceId: Int32

**功能：** 设备ID：设置为-1，表示本地设备，设备ID需通过getSensorList查询或者监听设备上下线接口on获取。

**类型：** Int32

**读写能力：** 可读写

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

#### [h2]var sensorIndex
    
    
    public var sensorIndex: Int32

**功能：** 传感器索引：设置为0，为设备上的默认传感器，其它传感器ID需通过getSensorList查询或者监听设备上下线接口on获取。

**类型：** Int32

**读写能力：** 可读写

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

#### [h2]init(Int32, Int32)
    
    
    public init(deviceId!: Int32 = -1, sensorIndex!: Int32 = 0)

**功能：** 构造函数，创建SensorInfoParam实例。

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
deviceId | Int32 | 否 | \- 1 | **命名参数。** 设备ID：默认值为-1，表示本地设备，设备ID需通过getSensorList查询或者监听设备上下线接口on获取。  
sensorIndex | Int32 | 否 | 0 | **命名参数。** 传感器索引：默认值为0，为设备上的默认传感器，其它传感器ID需通过getSensorList查询或者监听设备上下线接口on获取。  
  
#### class SignificantMotionResponse
    
    
    public class SignificantMotionResponse <: Response {
        public var scalar: Float32
    }

**功能：** 有效运动传感器数据。

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

**父类型：**

  * Response



#### [h2]var scalar
    
    
    public var scalar: Float32

**功能：** 表示剧烈运动程度。测量三个物理轴（x、y 和 z）上，设备是否存在大幅度运动；若存在大幅度运动则数据上报为1。

**类型：** Float32

**读写能力：** 可读写

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

#### class WearDetectionResponse
    
    
    public class WearDetectionResponse <: Response {
        public var value: Float32
    }

**功能：** 佩戴检测传感器数据。

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

**父类型：**

  * Response



#### [h2]var value
    
    
    public var value: Float32

**功能：** 表示设备是否被穿戴（1表示已穿戴，0表示未穿戴）。

**类型：** Float32

**读写能力：** 可读写

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

#### enum IntervalOption
    
    
    public enum IntervalOption <: Equatable<IntervalOption> & ToString {
        | SensorNumber(Int64)
        | GameMode
        | UIMode
        | NormalMode
        | ...
    }

**功能：** 传感器上报频率的选项。

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

**父类型：**

  * Equatable<IntervalOption>
  * ToString



#### [h2]GameMode
    
    
    GameMode

**功能：** 用于指定传感器上报频率，频率值为20000000ns，该频率被设置在硬件支持的频率范围内时会生效，值固定为'game'字符串。

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

#### [h2]NormalMode
    
    
    NormalMode

**功能：** 用于指定传感器上报频率，频率值为200000000ns，该频率被设置在硬件支持的频率范围内时会生效，值固定为'normal'字符串。

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

#### [h2]SensorNumber(Int64)
    
    
    SensorNumber(Int64)

**功能：** 自定义传感器上报频率，频率值为指定的纳秒数。

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

#### [h2]UIMode
    
    
    UIMode

**功能：** 用于指定传感器上报频率，频率值为60000000ns，该频率被设置在硬件支持的频率范围内时会生效，值固定为'ui'字符串。

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

#### [h2]func !=(IntervalOption)
    
    
    public operator func !=(other: IntervalOption): Bool

**功能：** 判断两个IntervalOption 是否不相等。

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
other | IntervalOption | 是 | - | 传入的IntervalOption。  
  
**返回值：**

类型 | 说明  
---|---  
Bool | 如果不相等，则返回true；否则，返回false。  
  
#### [h2]func ==(IntervalOption)
    
    
    public operator func ==(other: IntervalOption): Bool

**功能：** 判断两个IntervalOption 是否相等。

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
other | IntervalOption | 是 | - | 传入的IntervalOption。  
  
**返回值：**

类型 | 说明  
---|---  
Bool | 如果相等，则返回true；否则，返回false。  
  
#### [h2]func toString()
    
    
    public func toString(): String

**功能：** 将枚举值转换为字符串。

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
String | 转换后的字符串。  
  
#### enum SensorAccuracy
    
    
    public enum SensorAccuracy <: Equatable<SensorAccuracy> & ToString {
        | AccuracyUnreliable
        | AccuracyLow
        | AccuracyMedium
        | AccuracyHigh
        | ...
    }

**功能：** 传感器数据的精度。

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

**父类型：**

  * Equatable<SensorAccuracy>
  * ToString



#### [h2]AccuracyHigh
    
    
    AccuracyHigh

**功能：** 传感器高档位精度。

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

#### [h2]AccuracyLow
    
    
    AccuracyLow

**功能：** 传感器低档位精度。

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

#### [h2]AccuracyMedium
    
    
    AccuracyMedium

**功能：** 传感器中档位精度。

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

#### [h2]AccuracyUnreliable
    
    
    AccuracyUnreliable

**功能：** 传感器数据不可信。

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

#### [h2]func !=(SensorAccuracy)
    
    
    public operator func !=(other: SensorAccuracy): Bool

**功能：** 判断两个SensorAccuracy 是否不相等。

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
other | SensorAccuracy | 是 | - | 传入的SensorAccuracy。  
  
**返回值：**

类型 | 说明  
---|---  
Bool | 如果不相等，则返回true；否则，返回false。  
  
#### [h2]func ==(SensorAccuracy)
    
    
    public operator func ==(other: SensorAccuracy): Bool

**功能：** 判断两个SensorAccuracy 是否相等。

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
other | SensorAccuracy | 是 | - | 传入的SensorAccuracy。  
  
**返回值：**

类型 | 说明  
---|---  
Bool | 如果相等，则返回true；否则，返回false。  
  
#### [h2]func toString()
    
    
    public func toString(): String

**功能：** 将枚举值转换为字符串。

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
String | 转换后的字符串。  
  
#### enum SensorId
    
    
    public enum SensorId <: Equatable<SensorId> & ToString {
        | Accelerometer
        | Gyroscope
        | AmbientLight
        | MagneticField
        | Barometer
        | Hall
        | Proximity
        | Humidity
        | Orientation
        | Gravity
        | LinearAccelerometer
        | RotationVector
        | AmbientTemperature
        | MagneticFieldUncalibrated
        | GyroscopeUncalibrated
        | SignificantMotion
        | PedometerDetection
        | Pedometer
        | HeartRate
        | WearDetection
        | AccelerometerUncalibrated
        | ...
    }

**功能：** 表示当前支持订阅或取消订阅的传感器类型。

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

**父类型：**

  * Equatable<SensorId>
  * ToString



#### [h2]Accelerometer
    
    
    Accelerometer

**功能：** 加速度传感器。

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

**示例：**
    
    
    // index.cj
    
    import kit.SensorServiceKit.*
    import kit.PerformanceAnalysisKit.*
    import ohos.business_exception.BusinessException
    import ohos.callback_invoke.*
    
    class AccelerometerCallback <: Callback1Argument<AccelerometerResponse> {
        init() {}
        public func invoke(err: ?BusinessException, arg: AccelerometerResponse): Unit {
            Hilog.info(0, "test", "Accelerometer data: timestamp: ${arg.timestamp}, x: ${arg.x}, y: ${arg.y}, z: ${arg.z}", "")
        }
    }
    
    let callback = AccelerometerCallback()
    let options = Options(interval: IntervalOption.SensorNumber(100000000))
    try {
        // 订阅传感器数据
        on(SensorId.Accelerometer, callback, option: options)
    
        // 获取一次传感器数据
        once(SensorId.Accelerometer, callback)
    
        // 取消订阅传感器数据
        off(SensorId.Accelerometer, callback: callback)
    } catch (e: BusinessException) {
        Hilog.error(0, "test", "Code: ${e.code}, message: ${e.message}", "")
    }

#### [h2]AccelerometerUncalibrated
    
    
    AccelerometerUncalibrated

**功能：** 未校准加速度传感器。

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

**示例：**
    
    
    // index.cj
    
    import kit.SensorServiceKit.*
    import kit.PerformanceAnalysisKit.*
    import ohos.business_exception.BusinessException
    import ohos.callback_invoke.*
    
    class AccelerometerUncalibratedCallback <: Callback1Argument<AccelerometerUncalibratedResponse> {
        init() {}
        public func invoke(err: ?BusinessException, arg: AccelerometerUncalibratedResponse): Unit {
            Hilog.info(0, "test", "AccelerometerUncalibrated data: timestamp: ${arg.timestamp}, x: ${arg.x}, y: ${arg.y}, z: ${arg.z}, biasX: ${arg.biasX}, biasY: ${arg.biasY}, biasZ: ${arg.biasZ}", "")
        }
    }
    
    let callback = AccelerometerUncalibratedCallback()
    let options = Options(interval: IntervalOption.SensorNumber(100000000))
    try {
        // 订阅传感器数据
        on(SensorId.AccelerometerUncalibrated, callback, option: options)
    
        // 获取一次传感器数据
        once(SensorId.AccelerometerUncalibrated, callback)
    
        // 取消订阅传感器数据
        off(SensorId.AccelerometerUncalibrated, callback: callback)
    } catch (e: BusinessException) {
        Hilog.error(0, "test", "Code: ${e.code}, message: ${e.message}", "")
    }

#### [h2]AmbientLight
    
    
    AmbientLight

**功能：** 环境光传感器。

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

**示例：**
    
    
    // index.cj
    
    import kit.SensorServiceKit.*
    import kit.PerformanceAnalysisKit.*
    import ohos.business_exception.BusinessException
    import ohos.callback_invoke.*
    
    class LightCallback <: Callback1Argument<LightResponse> {
        init() {}
        public func invoke(err: ?BusinessException, arg: LightResponse): Unit {
            Hilog.info(0, "test", "Light data: timestamp: ${arg.timestamp}, intensity: ${arg.intensity}", "")
        }
    }
    
    let callback = LightCallback()
    let options = Options(interval: IntervalOption.SensorNumber(100000000))
    try {
        // 订阅传感器数据
        on(SensorId.AmbientLight, callback, option: options)
    
        // 获取一次传感器数据
        once(SensorId.AmbientLight, callback)
    
        // 取消订阅传感器数据
        off(SensorId.AmbientLight, callback: callback)
    } catch (e: BusinessException) {
        Hilog.error(0, "test", "Code: ${e.code}, message: ${e.message}", "")
    }

#### [h2]AmbientTemperature
    
    
    AmbientTemperature

**功能：** 环境温度传感器。

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

**示例：**
    
    
    // index.cj
    
    import kit.SensorServiceKit.*
    import kit.PerformanceAnalysisKit.*
    import ohos.business_exception.BusinessException
    import ohos.callback_invoke.*
    
    class AmbientTemperatureCallback <: Callback1Argument<AmbientTemperatureResponse> {
        init() {}
        public func invoke(err: ?BusinessException, arg: AmbientTemperatureResponse): Unit {
            Hilog.info(0, "test", "AmbientTemperature data: timestamp: ${arg.timestamp}, temperature: ${arg.temperature}", "")
        }
    }
    
    let callback = AmbientTemperatureCallback()
    let options = Options(interval: IntervalOption.SensorNumber(100000000))
    try {
        // 订阅传感器数据
        on(SensorId.AmbientTemperature, callback, option: options)
    
        // 获取一次传感器数据
        once(SensorId.AmbientTemperature, callback)
    
        // 取消订阅传感器数据
        off(SensorId.AmbientTemperature, callback: callback)
    } catch (e: BusinessException) {
        Hilog.error(0, "test", "Code: ${e.code}, message: ${e.message}", "")
    }

#### [h2]Barometer
    
    
    Barometer

**功能：** 气压计传感器。

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

**示例：**
    
    
    // index.cj
    
    import kit.SensorServiceKit.*
    import kit.PerformanceAnalysisKit.*
    import ohos.business_exception.BusinessException
    import ohos.callback_invoke.*
    
    class BarometerCallback <: Callback1Argument<BarometerResponse> {
        init() {}
        public func invoke(err: ?BusinessException, arg: BarometerResponse): Unit {
            Hilog.info(0, "test", "Barometer data: timestamp: ${arg.timestamp}, pressure: ${arg.pressure}", "")
        }
    }
    
    let callback = BarometerCallback()
    let options = Options(interval: IntervalOption.SensorNumber(100000000))
    try {
        // 订阅传感器数据
        on(SensorId.Barometer, callback, option: options)
    
        // 获取一次传感器数据
        once(SensorId.Barometer, callback)
    
        // 取消订阅传感器数据
        off(SensorId.Barometer, callback: callback)
    } catch (e: BusinessException) {
        Hilog.error(0, "test", "Code: ${e.code}, message: ${e.message}", "")
    }

#### [h2]Gravity
    
    
    Gravity

**功能：** 重力传感器。

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

**示例：**
    
    
    // index.cj
    
    import kit.SensorServiceKit.*
    import kit.PerformanceAnalysisKit.*
    import ohos.business_exception.BusinessException
    import ohos.callback_invoke.*
    
    class GravityCallback <: Callback1Argument<GravityResponse> {
        init() {}
        public func invoke(err: ?BusinessException, arg: GravityResponse): Unit {
            Hilog.info(0, "test", "Gravity data: timestamp: ${arg.timestamp}, x: ${arg.x}, y: ${arg.y}, z: ${arg.z}", "")
        }
    }
    
    let callback = GravityCallback()
    let options = Options(interval: IntervalOption.SensorNumber(100000000))
    try {
        // 订阅传感器数据
        on(SensorId.Gravity, callback, option: options)
    
        // 获取一次传感器数据
        once(SensorId.Gravity, callback)
    
        // 取消订阅传感器数据
        off(SensorId.Gravity, callback: callback)
    } catch (e: BusinessException) {
        Hilog.error(0, "test", "Code: ${e.code}, message: ${e.message}", "")
    }

#### [h2]Gyroscope
    
    
    Gyroscope

**功能：** 陀螺仪传感器。

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

**示例：**
    
    
    // index.cj
    
    import kit.SensorServiceKit.*
    import kit.PerformanceAnalysisKit.*
    import ohos.business_exception.BusinessException
    import ohos.callback_invoke.*
    
    class GyroscopeCallback <: Callback1Argument<GyroscopeResponse> {
        init() {}
        public func invoke(err: ?BusinessException, arg: GyroscopeResponse): Unit {
            Hilog.info(0, "test", "Gyroscope data: timestamp: ${arg.timestamp}, x: ${arg.x}, y: ${arg.y}, z: ${arg.z}", "")
        }
    }
    
    let callback = GyroscopeCallback()
    let options = Options(interval: IntervalOption.SensorNumber(100000000))
    try {
        // 订阅传感器数据
        on(SensorId.Gyroscope, callback, option: options)
    
        // 获取一次传感器数据
        once(SensorId.Gyroscope, callback)
    
        // 取消订阅传感器数据
        off(SensorId.Gyroscope, callback: callback)
    } catch (e: BusinessException) {
        Hilog.error(0, "test", "Code: ${e.code}, message: ${e.message}", "")
    }

#### [h2]GyroscopeUncalibrated
    
    
    GyroscopeUncalibrated

**功能：** 未校准陀螺仪传感器。

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

**示例：**
    
    
    // index.cj
    
    import kit.SensorServiceKit.*
    import kit.PerformanceAnalysisKit.*
    import ohos.business_exception.BusinessException
    import ohos.callback_invoke.*
    
    class GyroscopeUncalibratedCallback <: Callback1Argument<GyroscopeUncalibratedResponse> {
        init() {}
        public func invoke(err: ?BusinessException, arg: GyroscopeUncalibratedResponse): Unit {
            Hilog.info(0, "test", "GyroscopeUncalibrated data: timestamp: ${arg.timestamp}, x: ${arg.x}, y: ${arg.y}, z: ${arg.z}, biasX: ${arg.biasX}, biasY: ${arg.biasY}, biasZ: ${arg.biasZ}", "")
        }
    }
    
    let callback = GyroscopeUncalibratedCallback()
    let options = Options(interval: IntervalOption.SensorNumber(100000000))
    try {
        // 订阅传感器数据
        on(SensorId.GyroscopeUncalibrated, callback, option: options)
    
        // 获取一次传感器数据
        once(SensorId.GyroscopeUncalibrated, callback)
    
        // 取消订阅传感器数据
        off(SensorId.GyroscopeUncalibrated, callback: callback)
    } catch (e: BusinessException) {
        Hilog.error(0, "test", "Code: ${e.code}, message: ${e.message}", "")
    }

#### [h2]Hall
    
    
    Hall

**功能：** 霍尔传感器。

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

**示例：**
    
    
    // index.cj
    
    import kit.SensorServiceKit.*
    import kit.PerformanceAnalysisKit.*
    import ohos.business_exception.BusinessException
    import ohos.callback_invoke.*
    
    class HallCallback <: Callback1Argument<HallResponse> {
        init() {}
        public func invoke(err: ?BusinessException, arg: HallResponse): Unit {
            Hilog.info(0, "test", "Hall data: timestamp: ${arg.timestamp}, status: ${arg.status}", "")
        }
    }
    
    let callback = HallCallback()
    let options = Options(interval: IntervalOption.SensorNumber(100000000))
    try {
        // 订阅传感器数据
        on(SensorId.Hall, callback, option: options)
    
        // 获取一次传感器数据
        once(SensorId.Hall, callback)
    
        // 取消订阅传感器数据
        off(SensorId.Hall, callback: callback)
    } catch (e: BusinessException) {
        Hilog.error(0, "test", "Code: ${e.code}, message: ${e.message}", "")
    }

#### [h2]HeartRate
    
    
    HeartRate

**功能：** 心率传感器。

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

**示例：**
    
    
    // index.cj
    
    import kit.SensorServiceKit.*
    import kit.PerformanceAnalysisKit.*
    import ohos.business_exception.BusinessException
    import ohos.callback_invoke.*
    
    class HeartRateCallback <: Callback1Argument<HeartRateResponse> {
        init() {}
        public func invoke(err: ?BusinessException, arg: HeartRateResponse): Unit {
            Hilog.info(0, "test", "HeartRate data: timestamp: ${arg.timestamp}, heartRate: ${arg.heartRate}", "")
        }
    }
    
    let callback = HeartRateCallback()
    let options = Options(interval: IntervalOption.SensorNumber(100000000))
    try {
        // 订阅传感器数据
        on(SensorId.HeartRate, callback, option: options)
    
        // 获取一次传感器数据
        once(SensorId.HeartRate, callback)
    
        // 取消订阅传感器数据
        off(SensorId.HeartRate, callback: callback)
    } catch (e: BusinessException) {
        Hilog.error(0, "test", "Code: ${e.code}, message: ${e.message}", "")
    }

#### [h2]Humidity
    
    
    Humidity

**功能：** 湿度传感器。

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

**示例：**
    
    
    // index.cj
    
    import kit.SensorServiceKit.*
    import kit.PerformanceAnalysisKit.*
    import ohos.business_exception.BusinessException
    import ohos.callback_invoke.*
    
    class HumidityCallback <: Callback1Argument<HumidityResponse> {
        init() {}
        public func invoke(err: ?BusinessException, arg: HumidityResponse): Unit {
            Hilog.info(0, "test", "Humidity data: timestamp: ${arg.timestamp}, humidity: ${arg.humidity}", "")
        }
    }
    
    let callback = HumidityCallback()
    let options = Options(interval: IntervalOption.SensorNumber(100000000))
    try {
        // 订阅传感器数据
        on(SensorId.Humidity, callback, option: options)
    
        // 获取一次传感器数据
        once(SensorId.Humidity, callback)
    
        // 取消订阅传感器数据
        off(SensorId.Humidity, callback: callback)
    } catch (e: BusinessException) {
        Hilog.error(0, "test", "Code: ${e.code}, message: ${e.message}", "")
    }

#### [h2]LinearAccelerometer
    
    
    LinearAccelerometer

**功能：** 线性加速度传感器。

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

**示例：**
    
    
    // index.cj
    
    import kit.SensorServiceKit.*
    import kit.PerformanceAnalysisKit.*
    import ohos.business_exception.BusinessException
    import ohos.callback_invoke.*
    
    class LinearAccelerometerCallback <: Callback1Argument<LinearAccelerometerResponse> {
        init() {}
        public func invoke(err: ?BusinessException, arg: LinearAccelerometerResponse): Unit {
            Hilog.info(0, "test", "LinearAccelerometer data: timestamp: ${arg.timestamp}, x: ${arg.x}, y: ${arg.y}, z: ${arg.z}", "")
        }
    }
    
    let callback = LinearAccelerometerCallback()
    let options = Options(interval: IntervalOption.SensorNumber(100000000))
    try {
        // 订阅传感器数据
        on(SensorId.LinearAccelerometer, callback, option: options)
    
        // 获取一次传感器数据
        once(SensorId.LinearAccelerometer, callback)
    
        // 取消订阅传感器数据
        off(SensorId.LinearAccelerometer, callback: callback)
    } catch (e: BusinessException) {
        Hilog.error(0, "test", "Code: ${e.code}, message: ${e.message}", "")
    }

#### [h2]MagneticField
    
    
    MagneticField

**功能：** 磁场传感器。

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

**示例：**
    
    
    // index.cj
    
    import kit.SensorServiceKit.*
    import kit.PerformanceAnalysisKit.*
    import ohos.business_exception.BusinessException
    import ohos.callback_invoke.*
    
    class MagneticFieldCallback <: Callback1Argument<MagneticFieldResponse> {
        init() {}
        public func invoke(err: ?BusinessException, arg: MagneticFieldResponse): Unit {
            Hilog.info(0, "test", "MagneticField data: timestamp: ${arg.timestamp}, x: ${arg.x}, y: ${arg.y}, z: ${arg.z}", "")
        }
    }
    
    let callback = MagneticFieldCallback()
    let options = Options(interval: IntervalOption.SensorNumber(100000000))
    try {
        // 订阅传感器数据
        on(SensorId.MagneticField, callback, option: options)
    
        // 获取一次传感器数据
        once(SensorId.MagneticField, callback)
    
        // 取消订阅传感器数据
        off(SensorId.MagneticField, callback: callback)
    } catch (e: BusinessException) {
        Hilog.error(0, "test", "Code: ${e.code}, message: ${e.message}", "")
    }

#### [h2]MagneticFieldUncalibrated
    
    
    MagneticFieldUncalibrated

**功能：** 未校准磁场传感器。

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

**示例：**
    
    
    // index.cj
    
    import kit.SensorServiceKit.*
    import kit.PerformanceAnalysisKit.*
    import ohos.business_exception.BusinessException
    import ohos.callback_invoke.*
    
    class MagneticFieldUncalibratedCallback <: Callback1Argument<MagneticFieldUncalibratedResponse> {
        init() {}
        public func invoke(err: ?BusinessException, arg: MagneticFieldUncalibratedResponse): Unit {
            Hilog.info(0, "test", "MagneticFieldUncalibrated data: timestamp: ${arg.timestamp}, x: ${arg.x}, y: ${arg.y}, z: ${arg.z}, biasX: ${arg.biasX}, biasY: ${arg.biasY}, biasZ: ${arg.biasZ}", "")
        }
    }
    
    let callback = MagneticFieldUncalibratedCallback()
    let options = Options(interval: IntervalOption.SensorNumber(100000000))
    try {
        // 订阅传感器数据
        on(SensorId.MagneticFieldUncalibrated, callback, option: options)
    
        // 获取一次传感器数据
        once(SensorId.MagneticFieldUncalibrated, callback)
    
        // 取消订阅传感器数据
        off(SensorId.MagneticFieldUncalibrated, callback: callback)
    } catch (e: BusinessException) {
        Hilog.error(0, "test", "Code: ${e.code}, message: ${e.message}", "")
    }

#### [h2]Orientation
    
    
    Orientation

**功能：** 方向传感器。

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

**示例：**
    
    
    // index.cj
    
    import kit.SensorServiceKit.*
    import kit.PerformanceAnalysisKit.*
    import ohos.business_exception.BusinessException
    import ohos.callback_invoke.*
    
    class OrientationCallback <: Callback1Argument<OrientationResponse> {
        init() {}
        public func invoke(err: ?BusinessException, arg: OrientationResponse): Unit {
            Hilog.info(0, "test", "Orientation data: timestamp: ${arg.timestamp}, alpha: ${arg.alpha}, beta: ${arg.beta}, gamma: ${arg.gamma}", "")
        }
    }
    
    let callback = OrientationCallback()
    let options = Options(interval: IntervalOption.SensorNumber(100000000))
    try {
        // 订阅传感器数据
        on(SensorId.Orientation, callback, option: options)
    
        // 获取一次传感器数据
        once(SensorId.Orientation, callback)
    
        // 取消订阅传感器数据
        off(SensorId.Orientation, callback: callback)
    } catch (e: BusinessException) {
        Hilog.error(0, "test", "Code: ${e.code}, message: ${e.message}", "")
    }

#### [h2]Pedometer
    
    
    Pedometer

**功能：** 计步传感器。

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

**示例：**
    
    
    // index.cj
    
    import kit.SensorServiceKit.*
    import kit.PerformanceAnalysisKit.*
    import ohos.business_exception.BusinessException
    import ohos.callback_invoke.*
    
    class PedometerCallback <: Callback1Argument<PedometerResponse> {
        init() {}
        public func invoke(err: ?BusinessException, arg: PedometerResponse): Unit {
            Hilog.info(0, "test", "Pedometer data: timestamp: ${arg.timestamp}, steps: ${arg.steps}", "")
        }
    }
    
    let callback = PedometerCallback()
    let options = Options(interval: IntervalOption.SensorNumber(100000000))
    try {
        // 订阅传感器数据
        on(SensorId.Pedometer, callback, option: options)
    
        // 获取一次传感器数据
        once(SensorId.Pedometer, callback)
    
        // 取消订阅传感器数据
        off(SensorId.Pedometer, callback: callback)
    } catch (e: BusinessException) {
        Hilog.error(0, "test", "Code: ${e.code}, message: ${e.message}", "")
    }

#### [h2]PedometerDetection
    
    
    PedometerDetection

**功能：** 计步检测传感器。

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

**示例：**
    
    
    // index.cj
    
    import kit.SensorServiceKit.*
    import kit.PerformanceAnalysisKit.*
    import ohos.business_exception.BusinessException
    import ohos.callback_invoke.*
    
    class PedometerDetectionCallback <: Callback1Argument<PedometerDetectionResponse> {
        init() {}
        public func invoke(err: ?BusinessException, arg: PedometerDetectionResponse): Unit {
            Hilog.info(0, "test", "PedometerDetection data: timestamp: ${arg.timestamp}, scalar: ${arg.scalar}", "")
        }
    }
    
    let callback = PedometerDetectionCallback()
    let options = Options(interval: IntervalOption.SensorNumber(100000000))
    try {
        // 订阅传感器数据
        on(SensorId.PedometerDetection, callback, option: options)
    
        // 获取一次传感器数据
        once(SensorId.PedometerDetection, callback)
    
        // 取消订阅传感器数据
        off(SensorId.PedometerDetection, callback: callback)
    } catch (e: BusinessException) {
        Hilog.error(0, "test", "Code: ${e.code}, message: ${e.message}", "")
    }

#### [h2]Proximity
    
    
    Proximity

**功能：** 接近光传感器。

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

**示例：**
    
    
    // index.cj
    
    import kit.SensorServiceKit.*
    import kit.PerformanceAnalysisKit.*
    import ohos.business_exception.BusinessException
    import ohos.callback_invoke.*
    
    class ProximityCallback <: Callback1Argument<ProximityResponse> {
        init() {}
        public func invoke(err: ?BusinessException, arg: ProximityResponse): Unit {
            Hilog.info(0, "test", "Proximity data: timestamp: ${arg.timestamp}, distance: ${arg.distance}", "")
        }
    }
    
    let callback = ProximityCallback()
    let options = Options(interval: IntervalOption.SensorNumber(100000000))
    try {
        // 订阅传感器数据
        on(SensorId.Proximity, callback, option: options)
    
        // 获取一次传感器数据
        once(SensorId.Proximity, callback)
    
        // 取消订阅传感器数据
        off(SensorId.Proximity, callback: callback)
    } catch (e: BusinessException) {
        Hilog.error(0, "test", "Code: ${e.code}, message: ${e.message}", "")
    }

#### [h2]RotationVector
    
    
    RotationVector

**功能：** 旋转矢量传感器。

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

**示例：**
    
    
    // index.cj
    
    import kit.SensorServiceKit.*
    import kit.PerformanceAnalysisKit.*
    import ohos.business_exception.BusinessException
    import ohos.callback_invoke.*
    
    class RotationVectorCallback <: Callback1Argument<RotationVectorResponse> {
        init() {}
        public func invoke(err: ?BusinessException, arg: RotationVectorResponse): Unit {
            Hilog.info(0, "test", "RotationVector data: timestamp: ${arg.timestamp}, x: ${arg.x}, y: ${arg.y}, z: ${arg.z}, w: ${arg.w}", "")
        }
    }
    
    let callback = RotationVectorCallback()
    let options = Options(interval: IntervalOption.SensorNumber(100000000))
    try {
        // 订阅传感器数据
        on(SensorId.RotationVector, callback, option: options)
    
        // 获取一次传感器数据
        once(SensorId.RotationVector, callback)
    
        // 取消订阅传感器数据
        off(SensorId.RotationVector, callback: callback)
    } catch (e: BusinessException) {
        Hilog.error(0, "test", "Code: ${e.code}, message: ${e.message}", "")
    }

#### [h2]SignificantMotion
    
    
    SignificantMotion

**功能：** 有效运动传感器。

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

**示例：**
    
    
    // index.cj
    
    import kit.SensorServiceKit.*
    import kit.PerformanceAnalysisKit.*
    import ohos.business_exception.BusinessException
    import ohos.callback_invoke.*
    
    class SignificantMotionCallback <: Callback1Argument<SignificantMotionResponse> {
        init() {}
        public func invoke(err: ?BusinessException, arg: SignificantMotionResponse): Unit {
            Hilog.info(0, "test", "SignificantMotion data: timestamp: ${arg.timestamp}, scalar: ${arg.scalar}", "")
        }
    }
    
    let callback = SignificantMotionCallback()
    let options = Options(interval: IntervalOption.SensorNumber(100000000))
    try {
        // 订阅传感器数据
        on(SensorId.SignificantMotion, callback, option: options)
    
        // 获取一次传感器数据
        once(SensorId.SignificantMotion, callback)
    
        // 取消订阅传感器数据
        off(SensorId.SignificantMotion, callback: callback)
    } catch (e: BusinessException) {
        Hilog.error(0, "test", "Code: ${e.code}, message: ${e.message}", "")
    }

#### [h2]WearDetection
    
    
    WearDetection

**功能：** 佩戴检测传感器。

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

**示例：**
    
    
    // index.cj
    
    import kit.SensorServiceKit.*
    import kit.PerformanceAnalysisKit.*
    import ohos.business_exception.BusinessException
    import ohos.callback_invoke.*
    
    class WearDetectionCallback <: Callback1Argument<WearDetectionResponse> {
        init() {}
        public func invoke(err: ?BusinessException, arg: WearDetectionResponse): Unit {
            Hilog.info(0, "test", "WearDetection data: timestamp: ${arg.timestamp}, value: ${arg.value}", "")
        }
    }
    
    let callback = WearDetectionCallback()
    let options = Options(interval: IntervalOption.SensorNumber(100000000))
    try {
        // 订阅传感器数据
        on(SensorId.WearDetection, callback, option: options)
    
        // 获取一次传感器数据
        once(SensorId.WearDetection, callback)
    
        // 取消订阅传感器数据
        off(SensorId.WearDetection, callback: callback)
    } catch (e: BusinessException) {
        Hilog.error(0, "test", "Code: ${e.code}, message: ${e.message}", "")
    }

#### [h2]func !=(SensorId)
    
    
    public operator func !=(other: SensorId): Bool

**功能：** 判断两个SensorId 是否不相等。

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
other | SensorId | 是 | - | 传入的SensorId。  
  
**返回值：**

类型 | 说明  
---|---  
Bool | 如果不相等，则返回true；否则，返回false。  
  
#### [h2]func ==(SensorId)
    
    
    public operator func ==(other: SensorId): Bool

**功能：** 判断两个SensorId 是否相等。

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
other | SensorId | 是 | - | 传入的SensorId。  
  
**返回值：**

类型 | 说明  
---|---  
Bool | 如果相等，则返回true；否则，返回false。  
  
#### [h2]func getValue()
    
    
    public func getValue(): Int32

**功能：** 获取枚举值。

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
Int32 | 枚举值。  
  
#### [h2]func toString()
    
    
    public func toString(): String

**功能：** 将枚举值转换为字符串。

**系统能力：** SystemCapability.Sensors.Sensor

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
String | 转换后的字符串。
