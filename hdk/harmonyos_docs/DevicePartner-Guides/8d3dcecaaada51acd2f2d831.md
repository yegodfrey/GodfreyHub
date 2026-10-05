---
name: document/cn/DevicePartner-Guides/health-app-h5-data-bluetooth-0000001193444984
title: 蓝牙设备
uri: https://developer.huawei.com/consumer/cn/doc/DevicePartner-Guides/health-app-h5-data-bluetooth-0000001193444984
---

# 蓝牙设备

#### 从设备获取数据

H5应用调用JS蓝牙接口从设备获取数据：

对于开发者定义的私有协议，合作伙伴可根据自己定义的蓝牙协议时序，使用封装后的JS接口实现以下函数，以进行数据通信，解析数据，获取测量结果。  
图1 模板使用时序图   
![](https://media:101783481646118021)

1. 调用[getBluetoothAdapterState](https://device.harmonyos.com/cn/docs/devicepartner/DevicePartner-References/health-app-api-bluetooth-0000001228620025#section25775141125)接口，检查手机蓝牙状态，手机蓝牙打开时才可进行以下步骤。若手机蓝牙状态为未开启，请开发者提示用户打开手机蓝牙功能。
2. 调用[onBLEServicesDiscovered](https://device.harmonyos.com/cn/docs/devicepartner/DevicePartner-References/health-app-api-bluetooth-0000001228620025#section1173932202216)接口监听服务发现，并调用[onBLEConnectionStateChange](https://device.harmonyos.com/cn/docs/devicepartner/DevicePartner-References/health-app-api-bluetooth-0000001228620025#section7286627100)接口监听手机与设备间的蓝牙连接状态。
3. 调用[createBLEConnection](https://device.harmonyos.com/cn/docs/devicepartner/DevicePartner-References/health-app-api-bluetooth-0000001228620025#section8707334164915)创建连接。服务发现且连接成功后，可执行以下步骤。
4. 调用[onBLECharacteristicValueChange](https://device.harmonyos.com/cn/docs/devicepartner/DevicePartner-References/health-app-api-bluetooth-0000001228620025#section1638315413713)接口监听特征值变化，用于H5应用准备开始接收来自设备的数据，并在调用[notifyBLECharacteristicValueChange](https://device.harmonyos.com/cn/docs/devicepartner/DevicePartner-References/health-app-api-bluetooth-0000001228620025#section149451944135612)后，从[onBLECharacteristicValueChange](https://device.harmonyos.com/cn/docs/devicepartner/DevicePartner-References/health-app-api-bluetooth-0000001228620025#section1638315413713)回调里获取数据。
5. 调用[notifyBLECharacteristicValueChange](https://device.harmonyos.com/cn/docs/devicepartner/DevicePartner-References/health-app-api-bluetooth-0000001228620025#section149451944135612)，通知设备开始上报数据。
6. （可选）若H5应用需向设备发送指令，可调用[writeBLECharacteristicValue](https://device.harmonyos.com/cn/docs/devicepartner/DevicePartner-References/health-app-api-bluetooth-0000001228620025#section521414274197)接口发送。

示例代码：

```
// 步骤1 检查手机蓝牙状态
window.hilink.getBluetoothAdapterState((response)=>{
    // JSON.parse(response).available为true表示蓝牙已打开
    if (JSON.parse(response).available) {
        // 步骤2 监听服务发现
        window.hilink.onBleServicesDiscovered((response)=>{
            // 服务发现回调，在UI显示发现状态
        });
        // 监听连接状态
        window.hilink.onBleConnectionStateChange((response)=>{
            // 连接状态回调，连接成功后可与设备通信
            let result = JSON.parse(response);
            if (result && result.errCode == 0) {
                // 进一步处理其他业务

                // 步骤4 监听特征值变化
                window.hilink.onBleCharacteristicValueChange((deviceId, characteristicId, data)=>{
                    // 特征值上报回调
                });
                // 步骤5 通知设备上报数据
                window.hilink.notifyBleCharacteristicValueChange(deviceId, serviceId, characteristicId, flag);
                // 步骤6 向设备发送指令
                window.hilink.writeBLECharacteristicValue(deviceId, serviceId, characteristicId, data, calback);
            } else {
                // 异常处理
            }
        });

        // 步骤3 创建连接
        window.hilink.createBleConnection(deviceId);
    }
});
```

#### 与运动健康App进行数据交互

H5应用调用health-engine接口与运动健康App进行数据交互：

1. 引入数据交互依赖：

   <br />

   ```
   import HealthEngine from '@huawei/h5pro-health-engine';
   ```

   <br />

2. 调用数据相关接口进行数据交互：

   <br />

   |数据操作|API|
   |:-----|:-------------------------------------------------------------------------------------------------------------------------------------------------------|
   |查询数据|[executeQuery](https://device.harmonyos.com/cn/docs/devicepartner/DevicePartner-References/health-app-api-data-0000001182831794#section1073818365356)|
   |存储单条数据|[saveSample](https://device.harmonyos.com/cn/docs/devicepartner/DevicePartner-References/health-app-api-data-0000001182831794#section10392163853415)|
   |存储多条数据|[saveSamples](https://device.harmonyos.com/cn/docs/devicepartner/DevicePartner-References/health-app-api-data-0000001182831794#section5152239350)|
   |删除单条数据|[deleteSample](https://device.harmonyos.com/cn/docs/devicepartner/DevicePartner-References/health-app-api-data-0000001182831794#section123194615477)|
   |删除多条数据|[deleteSamples](https://device.harmonyos.com/cn/docs/devicepartner/DevicePartner-References/health-app-api-data-0000001182831794#section147991320135416)|

   以查询数据为例，示例代码如下：

   ```
   let param = { 
       type: HealthEngine.dataType.DATA_BLOODPRESSURE,  // 这里调用的血压type
       startTime: Date.now() - 30*24*3600*1000, // 开始时间
       endTime: Date.now(), // 结束时间
       queryOption: {
           mLimit:1, // 查询一条数据（查询所有数据可不传）
           mOrder:1 // 按数据的时间倒序
       }
   }
   HealthEngine.executeQuery(param).then(data => { 
        // 拿到结果 data
    }).catch(err => { 
        // 报错
    })
   ```

   <br />

<br />

