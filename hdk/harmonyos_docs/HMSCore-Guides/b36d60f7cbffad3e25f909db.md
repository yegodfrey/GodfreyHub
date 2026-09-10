---
name: document/cn/HMSCore-Guides/client-basketball-write-scene-0000001144924115
title: 读取篮球运动记录
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/client-basketball-write-scene-0000001144924115
---

# 读取篮球运动记录

用户可以通过[getActivityRecord](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/activityrecordscontroller-0000001050091295#section34819155446)方法，通过构造[ActivityRecordReadOptions](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/arro_class-0000001050093077)携带篮球活动类型，从Health Service Kit中获取到篮球运动记录。[ActivityRecord](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/activityrecord_class-0000001050161730)中的activitySummary可以让用户获取到篮球运动记录的统计数据、篮球运动记录的特征数据；篮球活动相关的跳跃明细数据展示在[ActivityRecordReply](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/activityrecordreply-0000001050093245)的sampleSet中。

1. 创建一个[ActivityRecordReadOptions](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/arro_class-0000001050093077)实例，设置将篮球活动添加至ActivityTypeList，获取篮球运动记录。
2. [ActivityRecordsController](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/activityrecordscontroller-0000001050091295).[getActivityRecord](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/activityrecordscontroller-0000001050091295#section34819155446)方法获取数据。

   <br />

   ```
   Log.i(TAG, "Reading a activityRecord for basketball activity");
   // 构造请求对象的时间区间：开始和结束时间
   // 请注意此处设置的开始时间和结束时间均需大于2014年1月1号对应的UNIX时间戳
   Calendar cal = Calendar.getInstance();
   Date now = new Date();
   cal.setTime(now);
   long endTime = cal.getTimeInMillis();
   cal.add(Calendar.DAY_OF_YEAR, -1);
   long startTime = cal.getTimeInMillis();

   // 创建查询篮球锻炼运动记录的ActivityRecordReadOptions，设置请求时间范围
   List<String> activityTypeList = new ArrayList<>();
   activityTypeList.add(HiHealthActivities.BASKETBALL);
   ActivityRecordReadOptions activityRecordReadOptions = 
       new ActivityRecordReadOptions.Builder().setTimeInterval(startTime, endTime, TimeUnit.MILLISECONDS)
           .readActivityRecordsFromAllApps()
           .setActivityTypeList(activityTypeList)
           .read(DataType.DT_CONTINUOUS_JUMP)
           .read(DataType.DT_INSTANTANEOUS_EXERCISE_HEART_RATE)
           .build();
   // 请注意此处的this为Activity对象
   ActivityRecordsController mActivityRecordController = HuaweiHiHealth.getActivityRecordsController(this);

   // 调用getActivityRecord方法查询篮球锻炼运动记录
   mActivityRecordController.getActivityRecord(activityRecordReadOptions)
       .addOnSuccessListener(new OnSuccessListener<ActivityRecordReply>() {
           @Override
           public void onSuccess(ActivityRecordReply activityRecordReply) {
               Log.i("readActivityRecordTest", "Reading ActivityRecord  response status " + activityRecordReply.getStatus());
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
                   // 打印每个运动记录里的ActivitySummary，printActivitySummary为自定义的输出函数
                   if (activityRecord.getActivitySummary() != null) {
                       printActivitySummary(activityRecord.getActivitySummary());
                   }
                   ActivitySummary activitySummary = activityRecord.getActivitySummary();
                   // 打印篮球活动的活动特征数据ActivityFeature
                   if (activitySummary.getActivityFeature() != null) {
                       Log.i("ActivityRecordSample", "Returned for ActivityRecord: " + "\t DataCollector: "
   	                + activitySummary.getActivityFeature().getDataCollector() + "\n\t DataType: "
   	                + activitySummary.getActivityFeature().getDataType() + "\n\t StartTime: "
   	                + dateFormat.format(activitySummary.getActivityFeature().getStartTime(TimeUnit.MILLISECONDS)) + " "
   	                + timeFormat.format(activitySummary.getActivityFeature().getStartTime(TimeUnit.MILLISECONDS))
   	                + "\n\t EndTime: "
   	                + dateFormat.format(activitySummary.getActivityFeature().getEndTime(TimeUnit.MILLISECONDS)) + " "
   	                + timeFormat.format(activitySummary.getActivityFeature().getEndTime(TimeUnit.MILLISECONDS))
   	                + "\n\t SamplingTime: " + activitySummary.getActivityFeature().getSamplingTime(TimeUnit.MILLISECONDS)
   	                + "\n\t SummaryValue: " + activitySummary.getActivityFeature().getFieldValues());
                   }
                   // 打印每个运动记录对应的明细数据点
                   for (SampleSet sampleSet : activityRecordReply.getSampleSet(activityRecord)) {
                       Log.i("ActivityRecordSample",
                           "Returned for SamplePoint and Data type: " + sampleSet.getDataType().getName());
                       showSampleSet(sampleSet);
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

   ![](https://media:901788166658795254)  
   上面的代码片段中用到两处辅助函数：

   1. Health Service Kit返回ActivitySummary数据的显示函数printActivitySummary(ActivitySummary activitySummary)。函数的代码示例如下：

   ```
   // 自定义ActivitySummary输出函数
   public void printActivitySummary(ActivitySummary activitySummary) {
       List<SamplePoint> dataSummary = activitySummary.getDataSummary();
       Log.i("ActivityRecordSample", "\n打印统计数据: ");
       Log.i("ActivityRecordSample", "\nActivitySummary\n\t DataSummary: ");
       // 打印统计数据点
       for (SamplePoint samplePoint : dataSummary) {
           Log.i("ActivityRecordSample", "\n\t samplePoint: \n\t DataCollector" + samplePoint.getDataCollector() + "\n\t DataType" 
               + samplePoint.getDataType() + "\n\t StartTime" + samplePoint.getStartTime(TimeUnit.MILLISECONDS) + "\n\t EndTime"
               + samplePoint.getEndTime(TimeUnit.MILLISECONDS) + "\n\t SamplingTime" + samplePoint.getSamplingTime(TimeUnit.MILLISECONDS)
               + "\n\t FieldValues" + samplePoint.getFieldValues());
       }
       // 打印配速信息
       PaceSummary paceSummary = activitySummary.getPaceSummary();
       Log.i("ActivityRecordSample", "\n\t PaceSummary: \n\t AvgPace" + paceSummary.getAvgPace() + "\n\t BestPace" 
           + paceSummary.getBestPace() + "\n\t PaceMap" + paceSummary.getPaceMap() + "\n\t PartTimeMap"
           + paceSummary.getPartTimeMap() + "\n\t SportHealthPaceMap"
           + paceSummary.getSportHealthPaceMap());
   }
   ```

   2. Health Service Kit返回数据的显示函数showSampleSet(SampleSet sampleSet)。函数的代码示例如下

   ```
   // 自定义返回数据的显示函数
   private void showSampleSet(SampleSet sampleSet) {
       SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

       for (SamplePoint samplePoint : sampleSet.getSamplePoints()) {
           Log.i("ActivityRecordSample", "Sample point type: " + samplePoint.getDataType().getName());
           Log.i("ActivityRecordSample", "Start: " + dateFormat.format(new Date(samplePoint.getStartTime(TimeUnit.MILLISECONDS))));
           Log.i("ActivityRecordSample", "End: " + dateFormat.format(new Date(samplePoint.getEndTime(TimeUnit.MILLISECONDS))));
           for (Field field : samplePoint.getDataType().getFields()) {
               Log.i("ActivityRecordSample", "Field: " + field.getName() + " Value: " + samplePoint.getFieldValue(field));
           }
       }
   }
   ```

   <br />

