---
name: document/cn/huaweihealth-Guides/subscribe-ppg-sensor-0000002527132100
title: 订阅实时光传感数据
uri: https://developer.huawei.com/consumer/cn/doc/huaweihealth-Guides/subscribe-ppg-sensor-0000002527132100
---

# 订阅实时光传感数据

订阅和取消订阅穿戴设备佩戴者的实时光传感器数据。订阅成功后，穿戴设备上报当前的实时光传感器数据。取消订阅后，不再上报实时光传感器数据。

1. 导入相关模块。
2. 调用[industryServiceClient](https://developer.huawei.com/consumer/cn/doc/health-References/industryservice-0000002441251357#section7749131442313)中的[getDeviceManager](https://developer.huawei.com/consumer/cn/doc/health-References/industryservice-0000002441251357#section17822141183313)方法获取[DeviceManager](https://developer.huawei.com/consumer/cn/doc/health-References/industryservice-0000002441251357#section2045012381872)对象。
3. 调用[DeviceManager](https://developer.huawei.com/consumer/cn/doc/health-References/industryservice-0000002441251357#section2045012381872)对象的[getDevices](https://developer.huawei.com/consumer/cn/doc/health-References/industryservice-0000002441251357#section1558035984613)方法获取穿戴设备列表。

<!-- -->

4. 调用[Device](https://developer.huawei.com/consumer/cn/doc/health-References/industryservice-0000002441251357#section4106204316283)对象的[subscribeRealTimeData](https://developer.huawei.com/consumer/cn/doc/health-References/industryservice-0000002441251357#section049515146113)方法订阅传感器数据。

   <br />

   ```
   // 导入相关模块
   import { industryServiceClient, IndustryService } from '@huawei-cbg/health-industry-sdk';
   import { BusinessError, Callback } from '@ohos.base';

   // 通过industryServiceClient获取DeviceManager对象，然后通过DeviceManager对象获取Device对象
   industryServiceClient.getDeviceManager(getContext(this)).getDevices().then(devices => devices?.[0])
     .then((device: IndustryService.Device) => {
       // 实时光传感器数据回调参数
       let callback: Callback<IndustryService.RealTimeData> = (realTimeData: IndustryService.RealTimeData) => {
         console.info(`report ppgSensor: ${JSON.stringify(realTimeData)}`);
       };
       // 调用Device对象的subscribeRealTimeData方法订阅实时光传感器数据
       device.subscribeRealTimeData(IndustryService.RealTimeDataType.PPG_SENSOR, callback).then(() => {
         // 订阅实时光传感器数据成功
         console.info('Succeeded in subscribing ppgSensor.');
       }).catch((err: BusinessError) => {
         // 订阅实时光传感器数据失败
         console.error(`Failed to subscribe ppgSensor. Code is ${err.code}, message is ${err.message}.`);
       });
     }).catch((err: BusinessError) => {
       // 获取穿戴设备列表失败
       console.error(`Failed to get devices. Code is ${err.code}, message is ${err.message}.`);
     });
   ```

   <br />

<!-- -->

5. 穿戴设备实时光传感器数据在Callback\<IndustryService.[RealTimeData](https://developer.huawei.com/consumer/cn/doc/health-References/industryservice-0000002441251357#section12262172612114)\>中处理，穿戴设备产生传感器数据时realTimeData数据中包含实时光传感器数据。

   <br />

   ```
   realTimeData样例：
   {
   	"time": 1773212425379,
   	"type": "ppgSensor",
   	"errorCode": 0,
   	"fields": {
   		"ppg": [{
   			"channel": 3,
   			"data": "[4975370,5146846,2822378,1443333,2244537,1848356,1848532,1848618,1848823,1849085]"
   		},
   		{
   			"channel": 5,
   			"data": "[17427086,8077879,21825462,21828614,21287426,10857652,16123185,13505959,14820043,14820043]"
   		},
   		{
   			"channel": 7,
   			"data": "[20771304,8078026,21831240,21833748,21832756,12866805,19205638,16055861,14458503,14458531]"
   		}]
   	}
   }
   ```

   |返回值|类型|单位|含义|
   |:------|:-------------------------------------------|:-|:--------------------------------|
   |fields|Record\<string, object \| string \| number\>|-|包含实时数据的对象。|
   |channel|number|-|三种数据通道类型，3/5/7分别对应GREEN/RED/IR通道。|
   |data|number\[\]|-|每一路具体的ppg数据。|
   [表1 返回详细数据字段说明]

   ![](https://media:301785133819404068)  
   PPG传感器采集周期10ms，上报周期100ms左右：三路数据（GREEN/RED/IR） 通道，每路通道上报10个浮点数据。

   数据上报数量非固定，示例中给出的是通常上报结果，实际上报周期和数据有可能因设备原因增加或者减少。

   <br />

<!-- -->

6. 需要取消订阅时，调用[Device](https://developer.huawei.com/consumer/cn/doc/health-References/industryservice-0000002441251357#section4106204316283)对象的[unSubscribeRealTimeData](https://developer.huawei.com/consumer/cn/doc/health-References/industryservice-0000002441251357#section1638711819219)方法取消订阅实时光传感器数据。

   <br />

   ```
   // 调用unSubscribeRealTimeData方法取消订阅实时光传感器数据。
   // 注意：这里的callback和订阅实时光传感器数据时的callback要为同一个对象。
   device.unSubscribeRealTimeData(IndustryService.RealTimeDataType.PPG_SENSOR, callback).then(() => {
     // 取消订阅实时光传感器数据成功
     console.info('Succeeded in unsubscribing ppgSensor.');
   }).catch((err: BusinessError) => {
     // 取消订阅实时光传感器数据失败
     console.error(`Failed to unsubscribe heartRate. Code is ${err.code}, message is ${err.message}.`);
   });
   ```

   ![](https://media:301785133819429069)  
   取消订阅传入的callback，要求和订阅时传入的callback为同一个对象。

   <br />

