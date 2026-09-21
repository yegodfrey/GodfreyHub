---
name: document/cn/HMSCore-Guides/read-breath-holding-test-scene-0000001332776541
title: 读取潜水闭气测试运动记录
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/read-breath-holding-test-scene-0000001332776541
---

# 读取潜水闭气测试运动记录

用户可以通过[getActivityRecord](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/activityrecordscontroller-0000001050091295#section34819155446)方法，通过构造[ActivityRecordReadOptions](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/arro_class-0000001050093077)携带潜水闭气测试数据类型，从Health Service Kit中获取到潜水闭气测试运动记录。[ActivityRecord](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/activityrecord_class-0000001050161730)中的activitySummary可以让用户获取到潜水闭气测试运动记录相关联的统计类型数据、潜水闭气测试的特征数据。

1. 创建一个[ActivityRecordReadOptions](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/arro_class-0000001050093077)实例，将潜水闭气测试活动添加至ActivityTypeList，获取潜水闭气测试运动记录。
2. 调用[ActivityRecordsController](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/activityrecordscontroller-0000001050091295).[getActivityRecord](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/activityrecordscontroller-0000001050091295#section34819155446)方法获取数据。

   ```screen
   // 请注意此处的this为Activity对象
   final ActivityRecordsController activityRecordsController = HuaweiHiHealth.getActivityRecordsController(this);

   // 1.构造请求对象的时间区间：开始和结束时间
   // 请注意此处设置的开始时间和结束时间均需大于2014年1月1号对应的UNIX时间戳
   Calendar cal = Calendar.getInstance();
   Date now = new Date();
   cal.setTime(now);
   long endTime = cal.getTimeInMillis();
   cal.add(Calendar.DAY_OF_YEAR, -1);
   long startTime = cal.getTimeInMillis();

   // 2.构造读取潜水闭气测试运动记录请求体
   List<String> activityTypeList = new ArrayList<>();
   activityTypeList.add(HiHealthActivities.APNEA_TEST);
   ActivityRecordReadOptions readOption =
       new ActivityRecordReadOptions.Builder().setTimeInterval(startTime, endTime, TimeUnit.MILLISECONDS)
           .readActivityRecordsFromAllApps()
           .setActivityTypeList(activityTypeList)
           .read(DataType.DT_INSTANTANEOUS_EXERCISE_HEART_RATE)
           .build();

   // 3.调用getActivityRecord接口，根据请求体条件获取Health Service Kit中的运动记录
   Task<ActivityRecordReply> getTask = activityRecordsController.getActivityRecord(readOption);
   getTask.addOnSuccessListener(new OnSuccessListener<ActivityRecordReply>() {
       @Override
       public void onSuccess(ActivityRecordReply activityRecordReply) {
           Log.i("ActivityRecords", "Get ActivityRecord was successful!");
           // 打印查询到的运动记录列表
           List<ActivityRecord> activityRecordList = activityRecordReply.getActivityRecords();
           for (ActivityRecord activityRecord : activityRecordList) {
               if (activityRecord == null) {
                   continue;
               }
               DateFormat dateFormat = DateFormat.getDateInstance();
               DateFormat timeFormat = DateFormat.getTimeInstance();
               Log.i("ActivityRecordSample",
                   "Returned for ActivityRecord: " + activityRecord.getName() + "\n\tActivityRecord Identifier is "
                       + activityRecord.getId() + "\n\tActivityRecord created by app is "
                       + activityRecord.getPackageName() + "\n\tDescription: " + activityRecord.getDesc()
                       + "\n\tStart: " + dateFormat.format(activityRecord.getStartTime(TimeUnit.MILLISECONDS))
                       + " " + timeFormat.format(activityRecord.getStartTime(TimeUnit.MILLISECONDS)) + "\n\tEnd: "
                       + dateFormat.format(activityRecord.getEndTime(TimeUnit.MILLISECONDS)) + "\n\tActivity:"
                       + activityRecord.getActivityType() + "\n\tTimeZone:" + activityRecord.getTimeZone()
                       + "\n\tmetadata:" + activityRecord.getMetadata());
               // 打印每个运动记录里的ActivitySummary.printActivitySummary为自定义的输出函数
               if (activityRecord.getActivitySummary() != null) {
               printActivitySummary(activityRecord.getActivitySummary());
               }
               ActivitySummary activitySummary = activityRecord.getActivitySummary();
               if (activitySummary != null) {
               // 打印潜水闭气测试的活动特征数据ActivityFeature
               if (activitySummary.getActivityFeature() != null) {
                   SamplePoint activityFeature = activitySummary.getActivityFeature();
                   Log.i("ActivityRecordSample", "Returned for ActivityRecord: " + "\t DataCollector: "
                       + activityFeature.getDataCollector() + "\n\t DataType: "
                       + activityFeature.getDataType() + "\n\t StartTime: "
                       + dateFormat.format(activityFeature.getStartTime(TimeUnit.MILLISECONDS)) + " "
                       + timeFormat.format(activityFeature.getStartTime(TimeUnit.MILLISECONDS))
                       + "\n\t EndTime: "
                       + dateFormat.format(activityFeature.getEndTime(TimeUnit.MILLISECONDS)) + " "
                       + timeFormat.format(activityFeature.getEndTime(TimeUnit.MILLISECONDS))
                       + "\n\t SamplingTime: " + activityFeature.getSamplingTime(TimeUnit.MILLISECONDS)
                       + "\n\t SummaryValue: " + activityFeature.getFieldValues());
               }
               }

               // 打印每个运动记录对应的明细数据点
               for (SampleSet sampleSet : activityRecordReply.getSampleSet(activityRecord)) {
               Log.i("ActivityRecordSample",
                   "Returned for SamplePoint and Data type: " + sampleSet.getDataType().getName());
                   for (SamplePoint dp : sampleSet.getSamplePoints()) {
                       Log.i("ActivityRecordSample", "SamplePoint:");
                       Log.i("ActivityRecordSample", "DataCollector:" + dp.getDataCollector().toString());
                       Log.i("ActivityRecordSample", "\tType: " + dp.getDataType().getName());
                       Log.i("ActivityRecordSample",
                           "\tStart: " + dateFormat.format(dp.getStartTime(TimeUnit.MILLISECONDS)));
                       Log.i("ActivityRecordSample",
                           "\tEnd: " + dateFormat.format(dp.getEndTime(TimeUnit.MILLISECONDS)));
                       for (Field field : dp.getDataType().getFields()) {
                       Log.i("ActivityRecordSample",
                           "\tField: " + field.toString() + " Value: " + dp.getFieldValue(field));
                       }
                   }
               }
           }
       }
   }).addOnFailureListener(new OnFailureListener() {
       @Override
       public void onFailure(Exception e) {
           Log.i("ActivityRecords", "Failed to get ActivityRecord" + e.getMessage());
       }
   });
   ```

> 说明
>
> 上面的代码片段中用到以下辅助函数：
>
> 1. Health Service Kit返回ActivitySummary数据的显示函数printActivitySummary(ActivitySummary activitySummary)。函数的代码示例如下：
>
> ```screen
> // 自定义ActivitySummary输出函数
> public void printActivitySummary(ActivitySummary activitySummary) {
>     List<SamplePoint> dataSummary = activitySummary.getDataSummary();
>     Log.i("ActivityRecordSample", "\n打印统计数据: ");
>     Log.i("ActivityRecordSample", "\nActivitySummary\n\t DataSummary: ");
>     // 打印统计数据点
>     for (SamplePoint samplePoint : dataSummary) {
>         Log.i("ActivityRecordSample", "\n\t samplePoint: \n\t DataCollector" + samplePoint.getDataCollector() + "\n\t DataType" 
>             + samplePoint.getDataType() + "\n\t StartTime" + samplePoint.getStartTime(TimeUnit.MILLISECONDS) + "\n\t EndTime"
>             + samplePoint.getEndTime(TimeUnit.MILLISECONDS) + "\n\t SamplingTime" + samplePoint.getSamplingTime(TimeUnit.MILLISECONDS)
>             + "\n\t FieldValues" + samplePoint.getFieldValues());
>     }
>     // 打印配速信息
>     PaceSummary paceSummary = activitySummary.getPaceSummary();
>     Log.i("ActivityRecordSample", "\n\t PaceSummary: \n\t AvgPace" + paceSummary.getAvgPace() + "\n\t BestPace" 
>         + paceSummary.getBestPace() + "\n\t PaceMap" + paceSummary.getPaceMap() + "\n\t PartTimeMap"
>         + paceSummary.getPartTimeMap() + "\n\t BritishPaceMap" + paceSummary.getBritishPaceMap() 
>         + "\n\t BritishPartTimeMap" + paceSummary.getBritishPartTimeMap() + "\n\t SportHealthPaceMap"
>         + paceSummary.getSportHealthPaceMap());
> }
> ```

