---
name: document/cn/DevicePartner-Guides/health-app-h5-data-gprs-0000001313608673
title: GPRS设备
uri: https://developer.huawei.com/consumer/cn/doc/DevicePartner-Guides/health-app-h5-data-gprs-0000001313608673
---

# GPRS设备

![](https://media:101783481633859866)  
该文档适用于2022年5月30日前已在接入流程中的伙伴使用，5月30日后新接入的伙伴请使用新版本文档：[GPRS设备](https://device.harmonyos.com/cn/docs/devicepartner/DevicePartner-Guides/health-app-h5-data-gprs-0000001238364915)。  
图1 GPRS设备接入框架图   
![](https://media:101783481633897867 "点击放大")

1. 登录与授权：用户在运动健康App添加设备，加载H5；H5页面调用帐号JS SDK的API进行用户登录授权，并将授权信息上传到伙伴自有云。伙伴自有云通过授权凭证访问华为帐号云，获取到访问Token。同时，设备与华为帐号建立绑定关系。
2. 绑定设备：H5调用设备管理JS API，将设备信息绑定到运动健康App（在运动健康App的设备管理页生成设备卡片）。
3. 上传数据：用户使用设备，产生的测量数据上传到伙伴自有云，伙伴自有云通过步骤1获取到的Token，调用Health Kit云侧接口保存数据到Health Kit云，通过Health Kit云将数据同步到运动健康App，即可在运动健康App内查看设备测量数据。H5页面如果要查询运动健康数据，可以通过调用数据访问的JS接口实现。

图2 模板使用时序图   
![](https://media:101783481633926868)

在用户授权完成之后进行绑定，绑定完成后，用户从设备详情页退出，回到运动健康App设备tab页，会显示出设备卡片。

开发者还需实现解绑的功能，以实现当用户在设备详情页点击右上角![](https://media:101783481633955869)，选择"删除设备"来解绑设备。  

#### 设备绑定

调用[bindDevice](https://device.harmonyos.com/cn/docs/devicepartner/DevicePartner-References/health-app-api-device-0000001227598363#section16381351588)将设备与运动健康App绑定。

1. 封装设备绑定的回调函数。
2. 将回调函数挂载到window对象。
3. 通过window.hilink对象调用设备绑定接口。

```
// 1. 回调函数
bindDeviceCallback(response) {
    if (response.errCode == 0) {
        log.info("request bindDevice success");
    } else {
        log.info("request bindDevice err: " + response);
    }
}
// 2. 将回调函数挂载到window对象
window.bindDeviceCallback= this.bindDeviceCallback;
// 3. 绑定设备
window.hilink.bindDevice({
    "uuid": "xxxxxx-xxx-xxxxx-xxxe-xxxxxxxxxxxxxxx", // 通过getDeviceId（）获取
    "uniqueId": "10000",// 唯一标识sn
},'bindDeviceCallback');
```

#### 数据上传到Health Kit云

将设备数据上传到伙伴自有云上，再由伙伴自有云通过REST API，将数据传到Health Kit云，支持对数据进行增、删、改、查等操作。请参考Health Kit REST的[开发指南](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/overview-restful-api-0000001050071695)和[API参考](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/datacollectors_create-0000001050114852#section984123664716)。  

#### 数据在端侧的增删改查

1. 建议在设备详情页进入之后，调用端云同步接口（[syncCloud](https://device.harmonyos.com/cn/docs/devicepartner/DevicePartner-References/health-app-api-device-0000001227598363#section1774121742919)接口）将健康数据同步到运动健康App。同步完成后，H5应用需提示用户对新数据进行处理。
2. 引入数据交互依赖包：

   <br />

   ```
   import HealthEngine from '@huawei/h5pro-health-engine';
   ```

   <br />

3. 调用数据相关接口进行数据交互：

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

#### 设备解绑

调用[unbindDevice](https://device.harmonyos.com/cn/docs/devicepartner/DevicePartner-References/health-app-api-device-0000001227598363#section129705478304)拉起设备解除绑定入口。

1. 引入基础API依赖包。
2. 封装设备解绑的回调函数。
3. 将回调函数挂载到window对象。
4. 通过window.hilink对象调用设备解绑接口。
5. 处理完相关逻辑之后，退出H5应用。

```
// 1. 引入依赖包
import BasicLib from '@h5pro/basic-lib';
// 2. 回调函数
unbindDeviceCallback(res){
    console.log('unbindDevice success' + res)
    // 5. 退出H5应用
    BasicLib.container.exit();
}
// 3. 将回调函数挂载到window对象
window.unbindDeviceCallback= this.unbindDeviceCallback;
// 4. 接口调用
window.hilink.unbindDevice('unbindDeviceCallback');
```

