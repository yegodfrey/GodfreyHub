---
name: document/cn/doc-references/js-apis-system-sensor-0000001281001158
title: @system.sensor (传感器)
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/js-apis-system-sensor-0000001281001158
source: portal
---

# @system.sensor (传感器)  
  
![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230804172612.94049518832659301062424898797676:50001231000000:2800:11A1DAA8FD6874C07F4E25EBFA2C9ED5F6C1D7E0C08AEC35089A816ED4FCE37F.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)

    * 从API Version 8开始，该接口不再维护，推荐使用新接口[@ohos.sensor](https://developer.harmonyos.com/cn/docs/documentation/doc-references/js-apis-sensor-0000001333720861)。
    * 本模块首批接口从API version 4开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。
    * 该功能使用需要对应硬件支持，仅支持真机调试。

#### 导入模块
    
    import sensor from '@system.sensor';

#### 传感器错误码列表

错误码 | 说明  
---|---  
900 | 当前设备不支持相应的传感器。  
  
#### sensor.subscribeAccelerometer

subscribeAccelerometer(Object): void

观察加速度数据变化。针对同一个应用，多次点击调用时，会覆盖前面的调用效果，即仅最后一次调用生效。

**系统能力** ：SystemCapability.Sensors.Sensor

**需要权限** ：ohos.permission.ACCELEROMETER，该权限为系统权限

**参数：**

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
interval | string | 是 | 频率参数，加速度的回调函数执行频率。 默认为normal，可选值有： \- game：极高的回调频率，20ms/次，适用于游戏。 \- ui：较高的回调频率，60ms/次，适用于UI更新。 \- normal：普通的回调频率，200ms/次，低功耗。  
success | Function | 是 | 感应到加速度数据变化后的回调函数。  
fail | Function | 否 | 接口调用失败的回调函数。  
  
success返回值：

参数名 | 类型 | 说明  
---|---|---  
x | number | x轴的加速度。  
y | number | y轴的加速度。  
z | number | z轴的加速度。  
  
**示例：**
    
    sensor.subscribeAccelerometer({
      interval: 'normal',
      success: function(ret) {
        console.log('X-axis data: ' + ret.x);
        console.log('Y-axis data: ' + ret.y);
        console.log('Z-axis data: ' + ret.z);
      },
      fail: function(data, code) {
        console.error('Subscription failed. Code: ' + code + '; Data: ' + data);
      },
    });

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230804172612.71773262358606127712718824349829:50001231000000:2800:29B9CE1FA0A5BFD993A6DA18A58E93855B607D4E1FEE81D9CC576E14DA74FA57.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)

建议在页面销毁时，即onDestory回调中，取消数据订阅，避免不必要的性能开销。

#### sensor.unsubscribeAccelerometer

unsubscribeAccelerometer(): void

取消订阅加速度数据。

**系统能力** ：SystemCapability.Sensors.Sensor

**需要权限** ：ohos.permission.ACCELEROMETER，该权限为系统权限

**示例：**
    
    sensor.unsubscribeAccelerometer();

#### sensor.subscribeCompass

subscribeCompass(Object): void

订阅罗盘数据变化。针对同一个应用，多次点击调用时，会覆盖前面的调用效果，即仅最后一次调用生效。

**系统能力** ：SystemCapability.Sensors.Sensor

**参数：**

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
success | Function | 是 | 罗盘数据改变后触发的回调函数。  
fail | Function | 否 | 接口调用失败的回调函数。  
  
success返回值：

参数名 | 类型 | 说明  
---|---|---  
direction | number | 设备面对的方向度数。  
  
**示例：**
    
    sensor.subscribeCompass({
      success: function(ret) {
        console.log('get data direction:' + ret.direction);
      },
      fail: function(data, code) {
        console.error('Subscription failed. Code: ' + code + '; Data: ' + data);
      },
    });

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230804172612.42070710621691522344429720505952:50001231000000:2800:350FD1AB0235CB8F682AA8B0CF8542FCD6A1E9A139A14980531E42D772894F20.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)

建议在页面销毁时，即onDestory回调中，取消数据订阅，避免不必要的性能开销。

#### sensor.unsubscribeCompass

unsubscribeCompass(): void

取消订阅罗盘。

**系统能力** ：SystemCapability.Sensors.Sensor

**示例：**
    
    sensor.unsubscribeCompass();

#### sensor.subscribeProximity

subscribeProximity(Object): void

订阅距离感应数据变化。针对同一个应用，多次点击调用时，会覆盖前面的调用效果，即仅最后一次调用生效。

**系统能力** ：SystemCapability.Sensors.Sensor

**参数：**

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
success | Function | 是 | 距离感应数据改变后调用的回调函数。  
fail | Function | 否 | 接口调用失败的回调函数。  
  
success返回值：

参数名 | 类型 | 说明  
---|---|---  
distance | number | 可见物体相对于设备显示屏的接近或远离状态。  
  
**示例：**
    
    sensor.subscribeProximity({
      success: function(ret) {
        console.log('get data distance:' + ret.distance);
      },
      fail: function(data, code) {
        console.error('Subscription failed. Code: ' + code + '; Data: ' + data);
      },
    });

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230804172612.03286383863124956687988490280788:50001231000000:2800:F7EA2F270524BF55C9AECFF00CCFB5440534605922FFA7EF091FC3084209790A.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)

建议在页面销毁时，即onDestory回调中，取消数据订阅，避免不必要的性能开销。

#### sensor.unsubscribeProximity

unsubscribeProximity(): void

取消订阅距离感应。

**系统能力** ：SystemCapability.Sensors.Sensor

**示例：**
    
    sensor.unsubscribeProximity();

#### sensor.subscribeLight

sensor.subscribeLight(Object): void

订阅环境光线感应数据变化。再次调用时，会覆盖前一次调用效果，即仅最后一次调用生效。

**系统能力** ：SystemCapability.Sensors.Sensor

**参数：**

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
success | Function | 是 | 光线感应数据改变后的回调函数。  
fail | Function | 否 | 接口调用失败的回调函数。  
  
success返回值：

参数名 | 类型 | 说明  
---|---|---  
intensity | number | 光线强度，单位为lux。  
  
**示例：**
    
    sensor.subscribeLight({
      success: function(ret) {
        console.log('get data intensity:' + ret.intensity);
      },
      fail: function(data, code) {
        console.error('Subscription failed. Code: ' + code + '; Data: ' + data);
      },
    });

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230804172612.20870858474001488012802718817776:50001231000000:2800:C14B3F3416C2ADD045AC23D065D8A3C3C99F4EB194F03A53F51DBC84F10BDE53.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)

建议在页面销毁时，即onDestory回调中，取消数据订阅，避免不必要的性能开销。

#### sensor.unsubscribeLight

unsubscribeLight(): void

取消订阅环境光线感应。

**系统能力** ：SystemCapability.Sensors.Sensor

**示例：**
    
    sensor.unsubscribeLight();

#### sensor.subscribeStepCounter

subscribeStepCounter(Object): void

订阅计步传感器数据变化。针对同一个应用，多次点击调用时，会覆盖前面的调用效果，即仅最后一次调用生效。

**系统能力** ：SystemCapability.Sensors.Sensor

**需要权限** ：ohos.permission.ACTIVITY_MOTION

**参数：**

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
success | Function | 是 | 计步传感器数据改变后的回调函数。  
fail | Function | 否 | 接口调用失败的回调函数。  
  
success返回值：

参数名 | 类型 | 说明  
---|---|---  
steps | number | 计步传感器重启后累计记录的步数。  
  
**示例：**
    
    sensor.subscribeStepCounter({
      success: function(ret) {
        console.log('get step value:' + ret.steps);
      },
      fail: function(data, code) {
        console.log('Subscription failed. Code: ' + code + '; Data: ' + data);
      },
    });

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230804172612.01747955885605987037253724828593:50001231000000:2800:DEE6D4B68FFD482E5EB45453397F435416CC6472C24F97AC7ED699DE4BB9F24A.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)

建议在页面销毁时，即onDestory回调中，取消数据订阅，避免不必要的性能开销。

#### sensor.unsubscribeStepCounter

unsubscribeStepCounter(): void

取消订阅计步传感器。

**系统能力** ：SystemCapability.Sensors.Sensor

**需要权限** ：ohos.permission.ACTIVITY_MOTION

**示例：**
    
    sensor.unsubscribeStepCounter();

#### sensor.subscribeBarometer

subcribeBarometer(Object): void

订阅气压传感器数据变化。针对同一个应用，多次点击调用时，会覆盖前面的调用效果，即仅最后一次调用生效。

**系统能力** ：SystemCapability.Sensors.Sensor

**参数：**

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
success | Function | 是 | 气压传感器数据改变后的回调函数。  
fail | Function | 否 | 接口调用失败的回调函数。  
  
success返回值：

参数名 | 类型 | 说明  
---|---|---  
pressure | number | 气压值，单位：帕斯卡。  
  
**示例：**
    
    sensor.subscribeBarometer({
      success: function(ret) {
        console.log('get data value:' + ret.pressure);
      },
      fail: function(data, code) {
        console.log('Subscription failed. Code: ' + code + '; Data: ' + data);
      },
    });

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230804172612.74414165869124497920755353085494:50001231000000:2800:629C951EE1635AD6345AD00BBA85AFD870994B6FBBE8D43DAD93890200387780.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)

建议在页面销毁时，即onDestory回调中，取消数据订阅，避免不必要的性能开销。

#### sensor.unsubscribeBarometer

unsubscribeBarometer(): void

取消订阅气压传感器。

**系统能力** ：SystemCapability.Sensors.Sensor

**示例：**
    
    sensor.unsubscribeBarometer();

#### sensor.subscribeHeartRate

subscribeHeartRate(Object): void

订阅心率传感器数据变化。针对同一个应用，多次点击调用时，会覆盖前面的调用效果，即仅最后一次调用生效。

**系统能力** ：SystemCapability.Sensors.Sensor

**需要权限** ：ohos.permission.READ_HEALTH_DATA

**参数：**

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
success | Function | 是 | 心率传感器数据改变后的回调函数，默认频率5s/次。  
fail | Function | 否 | 接口调用失败的回调函数。  
  
success返回值：

参数名 | 类型 | 说明  
---|---|---  
heartRate | number | 心率值。  
  
**示例：**
    
    sensor.subscribeHeartRate({
      success: function(ret) {
        console.log('get heartrate value:' + ret.heartRate);
      },
      fail: function(data, code) {
        console.log('Subscription failed. Code: ' + code + '; Data: ' + data);
      },
    });

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230804172612.92641761845822381664324932530974:50001231000000:2800:F02DF36A7E4BD21F76A562F7F0736FFA647E57F12F1A3729D102F0C26B31410A.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)

建议在页面销毁时，即onDestory回调中，取消数据订阅，避免不必要的性能开销。

#### sensor.unsubscribeHeartRate

unsubscribeHeartRate(): void

取消订阅心率。

**系统能力** ：SystemCapability.Sensors.Sensor

**需要权限** ：ohos.permission.READ_HEALTH_DATA

**示例：**
    
    sensor.unsubscribeHeartRate();

#### sensor.subscribeOnBodyState

subscribeOnBodyState(Object): void

订阅设备佩戴状态。针对同一个应用，多次点击调用时，会覆盖前面的调用效果，即仅最后一次调用生效。

**系统能力** ：SystemCapability.Sensors.Sensor

**参数：**

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
success | Function | 是 | 穿戴状态改变后的回调函数。  
fail | Function | 否 | 接口调用失败的回调函数。  
  
success返回值：

参数名 | 类型 | 说明  
---|---|---  
value | boolean | 是否已佩戴。  
  
**示例：**
    
    sensor.subscribeOnBodyState({
      success: function(ret) {
        console.log('get on-body state value:' + ret.value);
      },
      fail: function(data, code) {
        console.log('Subscription failed. Code: ' + code + '; Data: ' + data);
      },
    });

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230804172612.35591428427822874157326734909335:50001231000000:2800:A89DB8DA4C6A2EED76776B997A2CC48F26A06B36C2197C8CC4E8F5FB8291323A.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)

建议在页面销毁时，即onDestory回调中，取消数据订阅，避免不必要的性能开销。

#### sensor.unsubscribeOnBodyState

unsubscribeOnBodyState(): void

取消订阅设备佩戴状态。

**系统能力** ：SystemCapability.Sensors.Sensor

**示例：**
    
    sensor.unsubscribeOnBodyState();

#### sensor.getOnBodyState

getOnBodyState(Object): void

获取设备佩戴状态。

**系统能力** ：SystemCapability.Sensors.Sensor

**参数：**

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
success | Function | 否 | 接口调用成功的回调函数。  
fail | Function | 否 | 接口调用失败的回调函数。  
complete | Function | 否 | 接口调用结束的回调函数。  
  
success返回值：

参数名 | 类型 | 说明  
---|---|---  
value | boolean | 是否已佩戴。  
  
**示例：**
    
    sensor.getOnBodyState({
      success: function(ret) {
        console.log('on body state: ' + ret.value);
      },
      fail: function(data, code) {
        console.log('Subscription failed. Code: ' + code + '; Data: ' + data);
      },
    });

#### sensor.subscribeDeviceOrientation6+

subscribeDeviceOrientation(interval: string, success: (data: DeviceOrientationResponse), fail?: (data: string, code: number)): void

观察设备方向传感器数据变化。

针对同一个应用，多次点击调用时，会覆盖前面的调用效果，即仅最后一次调用生效；针对同一个方法内，不支持多次调用。

**系统能力** ：SystemCapability.Sensors.Sensor

**参数：**

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
interval | string | 是 | 频率参数，设备方向传感器的回调函数执行频率。 默认为normal，可选值有： \- game：极高的回调频率，20ms/次，适用于游戏。 \- ui：较高的回调频率，60ms/次，适用于UI更新。 \- normal：普通的回调频率，200ms/次，低功耗。  
success | Function | 是 | 感应到设备方向传感器数据变化后的回调函数。  
fail | Function | 否 | 接口调用失败的回调函数。  
  
success返回值：

参数名 | 类型 | 说明  
---|---|---  
alpha | number | 当设备坐标 X/Y 和地球 X/Y 重合时，绕着 Z 轴转动的夹角为 alpha。  
beta | number | 当设备坐标 Y/Z 和地球 Y/Z 重合时，绕着 X 轴转动的夹角为 beta。  
gamma | number | 当设备 X/Z 和地球 X/Z 重合时，绕着 Y 轴转动的夹角为 gamma。  
  
**示例：**
    
    sensor.subscribeDeviceOrientation({
      interval: 'normal',
      success: function(ret) {
        console.log('Alpha data: ' + ret.alpha);
        console.log('Beta data: ' + ret.beta);
        console.log('Gamma data: ' + ret.gamma);
      },
      fail: function(data, code) {
        console.error('Subscription failed. Code: ' + code + '; Data: ' + data);
      }
    });

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230804172612.54120070627224533374573822736896:50001231000000:2800:BCC0FD7B83766D391585099431DE793DCE43489DDFBAEF9C2B9F97D3FA6610C3.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)

建议在页面销毁时，即onDestory回调中，取消数据订阅，避免不必要的性能开销。

#### sensor.unsubscribeDeviceOrientation6+

unsubscribeDeviceOrientation(): void

取消订阅设备方向传感器数据。

**系统能力** ：SystemCapability.Sensors.Sensor

**示例：**
    
    sensor.unsubscribeDeviceOrientation();

#### sensor.subscribeGyroscope6+

subscribeGyroscope(interval: string, success: (data: GyroscopeResponse), fail?: (data: string, code: number)): void

观察陀螺仪数据变化。

针对同一个应用，多次点击调用时，会覆盖前面的调用效果，即仅最后一次调用生效；针对同一个方法内，不支持多次调用。

**系统能力** ：SystemCapability.Sensors.Sensor

**需要权限** ：ohos.permission.GYROSCOPE，该权限为系统权限

**参数：**

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
interval | string | 是 | 频率参数，陀螺仪的回调函数执行频率。 默认为normal，可选值有： \- game：极高的回调频率，20ms/次，适用于游戏。 \- ui：较高的回调频率，60ms/次，适用于UI更新。 \- normal：普通的回调频率，200ms/次，低功耗。  
success | Function | 是 | 感应到陀螺仪数据变化后的回调函数。  
fail | Function | 否 | 接口调用失败的回调函数。  
  
success返回值：

参数名 | 类型 | 说明  
---|---|---  
x | number | x轴的旋转角速度。  
y | number | y轴的旋转角速度。  
z | number | z轴的旋转角速度。  
  
**示例：**
    
    sensor.subscribeGyroscope({
      interval: 'normal',
      success: function(ret) {
        console.log('X-axis data: ' + ret.x);
        console.log('Y-axis data: ' + ret.y);
        console.log('Z-axis data: ' + ret.z);
      },
      fail: function(data, code) {
        console.error('Subscription failed. Code: ' + code + '; data: ' + data);
      }
    });

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230804172613.29633395290636028666485544006122:50001231000000:2800:1EF355D81CEDA97CA7A6CE65A497BF5CD9282C9C5B8DD768D329011A8AFBE729.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)

建议在页面销毁时，即onDestory回调中，取消数据订阅，避免不必要的性能开销。

#### sensor.unsubscribeGyroscope6+

unsubscribeGyroscope(): void

取消订阅陀螺仪数据。

**系统能力** ：SystemCapability.Sensors.Sensor

**需要权限** ：ohos.permission.GYROSCOPE，该权限为系统权限

**示例：**
    
    sensor.unsubscribeGyroscope();
