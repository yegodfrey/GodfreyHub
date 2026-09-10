---
name: document/cn/HMSCore-Guides/write-client-sleep-scene-0000001138273053
title: 写入睡眠数据
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/write-client-sleep-scene-0000001138273053
---

# 写入睡眠数据

用户可以使用[addHealthRecord](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/healthrecordcontroller-0000001165268361#section12647471406)方法插入睡眠健康记录到Health Service Kit中，具体可执行以下操作：

1. 使用[睡眠记录](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/sleep-record-0000001135051288)数据类型，创建一个指定时间段和其他必要信息的[HealthRecord](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/healthrecord_class-0000001166067583)。
2. 使用[HealthRecord](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/healthrecord_class-0000001166067583)和可选的采样集或聚合采样点数据，创建一个[HealthRecordInsertOptions](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/healthrecordinsertopt_class-0000001119107906)。
3. 使用[HealthRecordController](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/healthrecordcontroller-0000001165268361).[addHealthRecord](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/healthrecordcontroller-0000001165268361#section12647471406)插入[HealthRecordInsertOptions](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/healthrecordinsertopt_class-0000001119107906)。

   <br />

   插入睡眠健康记录示例代码如下：

   ```
   // 请注意此处的this为Activity对象
   HealthRecordController healthRecordController = HuaweiHiHealth.getHealthRecordController(this);
   Context context = getApplicationContext();

   // 设置请求体的开始时间和结束时间
   Calendar cal = Calendar.getInstance();
   Date now = new Date();
   cal.setTime(now);
   long endTime = cal.getTimeInMillis();
   cal.add(Calendar.HOUR_OF_DAY, -1);
   long startTime = cal.getTimeInMillis();

   // 1.创建用来承载睡眠明细数据类型的采集器与存放明细数据的sampleSetList
   DataCollector dataCollector =
       new com.huawei.hms.hihealth.data.DataCollector.Builder().setDataType(DataType.DT_CONTINUOUS_SLEEP)
           .setDataGenerateType(DataCollector.DATA_TYPE_RAW)
           .setPackageName(context)
           .setDataStreamName("sleep fragment")
           .build();
   SampleSet sampleSet = SampleSet.create(dataCollector);
   // 预置时间跨度5分钟，设置睡眠枚举值
   SamplePoint samplePoint =
       sampleSet.createSamplePoint().setTimeInterval(startTime , startTime + 300000L, TimeUnit.MILLISECONDS);
   samplePoint.getFieldValue(Field.SLEEP_STATE).setIntValue(1);
   sampleSet.addSample(samplePoint);
   // sampleSetList 用来存放睡眠健康记录明细数据
   List<SampleSet> sampleSetList = new ArrayList<>();
   sampleSetList.add(sampleSet);

   // 2.构造睡眠健康记录的采集器，以及构造睡眠健康记录结构体
   DataCollector dataCollector2 = new com.huawei.hms.hihealth.data.DataCollector.Builder()
       .setDataType(HealthDataTypes.DT_HEALTH_RECORD_SLEEP)
       .setDataGenerateType(DataCollector.DATA_TYPE_RAW)
       .setPackageName(context)
       .setDataStreamName("health record sleep")
       .build();

   HealthRecord.Builder healthRecordBuilder =
       new HealthRecord.Builder(dataCollector2).setSubDataDetails(sampleSetList)
           .setStartTime(startTime, TimeUnit.MILLISECONDS)
           .setEndTime(endTime, TimeUnit.MILLISECONDS);
   // 给睡眠健康数据类型的每个Field设置值
   healthRecordBuilder.setFieldValue(Field.ALL_SLEEP_TIME, 352);
   healthRecordBuilder.setFieldValue(Field.GO_BED_TIME_NEW, 1599580041000L);
   healthRecordBuilder.setFieldValue(Field.DREAM_TIME, 58);
   healthRecordBuilder.setFieldValue(Field.WAKE_UP_TIME, 1599608520000L);
   healthRecordBuilder.setFieldValue(Field.DEEP_SLEEP_TIME, 82);
   healthRecordBuilder.setFieldValue(Field.DEEP_SLEEP_PART, 64);
   healthRecordBuilder.setFieldValue(Field.AWAKE_TIME, 3);
   healthRecordBuilder.setFieldValue(Field.LIGHT_SLEEP_TIME, 212);
   healthRecordBuilder.setFieldValue(Field.WAKE_UP_CNT, 2);
   healthRecordBuilder.setFieldValue(Field.FALL_ASLEEP_TIME, 1599587220000L);
   healthRecordBuilder.setFieldValue(Field.SLEEP_TYPE, 1);
   HealthRecord healthRecord = healthRecordBuilder.build();

   HealthRecordInsertOptions insertOptions =
       new HealthRecordInsertOptions.Builder().setHealthRecord(healthRecord).build();

   healthRecordController.addHealthRecord(insertOptions).addOnSuccessListener(new OnSuccessListener<String>() {
       @Override
       public void onSuccess(String healthRecordId) {
           // 请保存好插入成功后返回的healthRecordId，这个healthRecordId用于修改场景
           healthRecordIdFromInsertResult = healthRecordId;
           logger("health record add was successful,please save the healthRecordId! " + healthRecordId);
       }
   }).addOnFailureListener(new OnFailureListener() {
       @Override
       public void onFailure(Exception e) {
           logger(e.toString());
       }
   });
   ```

   <br />

![](https://media:901788166657355245)  
直接拷贝使用上述示例代码，会有下面多处报错，错误点和解决办法如下：

1. 辅助函数logger没有定义。  
   解决办法：定义logger函数，不进行任何操作，参考下面的示例代码。

   ```
   private static final String TAG = "HealthRecordController";

   /** 
    * 同时输出操作结果日志到logcat 
    * 
    * @param string日志字符串
    */ 
   private void logger(String string) { 
       Log.i(TAG, string); 
   }
   ```

2. 字符串变量healthRecordIdFromInsertResult未定义。 解决办法：healthRecordIdFromInsertResult字符串用来作为updateHealthRecord接口调用的参数，具体的定义参考如下，需在调用addHealthRecord成功后予以赋值。

   ```
   private String healthRecordIdFromInsertResult  = "";
   ```

