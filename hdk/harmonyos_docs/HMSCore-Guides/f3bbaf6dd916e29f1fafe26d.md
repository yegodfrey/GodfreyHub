---
name: document/cn/HMSCore-Guides/harmonyos-read-sleep-record-scene-0000001188367556
title: 读取睡眠健康记录
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/harmonyos-read-sleep-record-scene-0000001188367556
---

# 读取睡眠健康记录

1. 构造[HealthRecordReadOptions](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/harmonyos-health-record-read-options-0000001184604636)请求对象。
2. 调用[getHealthRecord](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/harmonyos-manage-health-records-0000001232134027#section17136185616578)接口，根据请求体条件获取Health Service Kit中的睡眠健康记录。

   读取睡眠健康记录示例代码如下：

   ```screen
   import {HMSHealthKit, HMSHealthKitDataType, HMSHealthKitDeviceType, DeviceInfo, DataCollector, Healthrecord, HealthRecordReadOptions} from '@hw-hmscore/hms-js-health'
   // 步骤1：构造请求对象HealthRecordReadOptions
   // 根据设备生产商、设备模型编号、设备uuid、设备类型构造设备信息
   let deviceInfo = new DeviceInfo("manufacturer", "modelName", "uuid", HMSHealthKitDeviceType.TYPE_PHONE);
   // 根据设备信息、应用包名、数据类型构造数据采集器
   let dataCollector = new DataCollector(deviceInfo, "com.health.demo", HMSHealthKitDataType.DT_HEALTH_RECORD_SLEEP);

   let subDataTypeList = [];
   // 以下是主数据类型选择睡眠时的代码
   subDataTypeList.push(HMSHealthKitDataType.DT_CONTINUOUS_SLEEP);

   // 基于时间等参数创建健康记录读取参数
   let readOptions = new HealthRecordReadOptions("1624774020000", "1624774320000", dataCollector, HMSHealthKitDataType.DT_HEALTH_RECORD_SLEEP, subDataTypeList);

   // 步骤2：调用getHealthRecord接口，根据请求体条件获取Health Service Kit中的睡眠健康记录
   HMSHealthKit.getHealthRecord(readOptions).then((result) => {
       // 调用成功
       console.info("getHealthRecord success: " + JSON.stringify(result))
   }).catch((error) => {
       // 调用失败
       console.error("getHealthRecord fail: " + JSON.stringify(error));
   })
   ```

