---
name: document/cn/HMSCore-Guides/harmonyos-write-sleep-record-scene-0000001188686018
title: 写入睡眠健康记录
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/harmonyos-write-sleep-record-scene-0000001188686018
---

# 写入睡眠健康记录

1. 根据设备信息、应用包名、数据类型构造健康记录数据采集器。
2. 创建一个睡眠详情数据采集器及数据采集点。
3. 创建fieldMap的值。
4. 构建健康记录。
5. 调用[addHealthRecord](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/harmonyos-manage-health-records-0000001232134027#section13164153916570)接口添加睡眠健康记录。

   <br />

   写入睡眠健康记录示例代码如下：

   ```
   import {HMSHealthKit, HMSHealthKitDataType, HMSHealthKitDeviceType, DeviceInfo, DataCollector, Value, SamplePoint, SampleSet, HealthRecord, HealthRecordInsertOptions} from '@hw-hmscore/hms-js-health'
   // 根据设备生产商、设备模型编号、设备uuid、设备类型构造设备信息
   let deviceInfo = new DeviceInfo("manufacturer", "modelName", "uuid", HMSHealthKitDeviceType.TYPE_PHONE);
   // 步骤1：根据设备信息、应用包名、数据类型构造健康记录数据采集器
   let dataCollector = new DataCollector(deviceInfo, "com.health.demo", HMSHealthKitDataType.DT_HEALTH_RECORD_SLEEP);

   // 步骤2：创建一个睡眠详情数据采集器及数据采集点
   let sleepFragmentDataCollector = new DataCollector(deviceInfo, "com.health.demo", HMSHealthKitDataType.DT_CONTINUOUS_SLEEP);
   let sleepFragmentValues = [];
   sleepFragmentValues.push(new Value("sleep_state", 3));
   let sleepFragmentSamplePoints = []
   sleepFragmentSamplePoints.push(new SamplePoint(sleepFragmentValues, 1624774020000, 1624774320000, "here is customized text"));
   let sleepFragmentSampleSets = [];
   sleepFragmentSampleSets.push(new SampleSet(sleepFragmentDataCollector, sleepFragmentSamplePoints));

   // 步骤3：创建fieldMap的值
   let sleepStatisticsValues = [];
   sleepStatisticsValues.push(new Value("fall_asleep_time", 1639757040000));
   sleepStatisticsValues.push(new Value("wakeup_time", 1639782300000));
   sleepStatisticsValues.push(new Value("light_sleep_time", 213));
   sleepStatisticsValues.push(new Value("deep_sleep_time", 115));
   sleepStatisticsValues.push(new Value("dream_time", 79));
   sleepStatisticsValues.push(new Value("awake_time", 0));
   sleepStatisticsValues.push(new Value("all_sleep_time", 407));
   sleepStatisticsValues.push(new Value("wakeup_count", 2));
   sleepStatisticsValues.push(new Value("deep_sleep_part", 78));
   sleepStatisticsValues.push(new Value("sleep_score", 82));
   sleepStatisticsValues.push(new Value("sleep_latency", 0));
   sleepStatisticsValues.push(new Value("go_bed_time", 0));
   sleepStatisticsValues.push(new Value("sleep_efficiency", 0));

   // 步骤4：构建健康记录
   // 基于时间等参数创建健康记录
   let healthrecord = new HealthRecord(1624774020000, 1624774320000, dataCollector, sleepStatisticsValues, "here is customized text", null, sleepFragmentSampleSets);
   // 创建健康记录等参数创建插入健康记录参数
   let healthRecordInsertOptions = new HealthRecordInsertOptions(healthrecord);

   // 步骤5：调用addHealthRecord接口添加睡眠健康记录
   HMSHealthKit.addHealthRecord(healthRecordInsertOptions).then((result) => {
       // 调用成功
       console.info("addHealthRecord success: " + JSON.stringify(result))
   }).catch((error) => {
       // 调用失败
       console.error("addHealthRecord fail: " + JSON.stringify(error));
   })
   ```

   <br />

