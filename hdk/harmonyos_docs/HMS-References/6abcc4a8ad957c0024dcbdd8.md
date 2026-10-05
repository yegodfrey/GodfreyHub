---
name: document/cn/HMS-References/activityrecordreply-0000001050093245
title: ActivityRecordReply
uri: https://developer.huawei.com/consumer/cn/doc/HMS-References/activityrecordreply-0000001050093245
source: portal
---

# ActivityRecordReply  
  
**CLASS info**  
---  
public class ActivityRecordReply extends Reply<ActivityRecordResult>  
读取ActivityRecord结果的响应类  
  
#### Public Constructor Summary

**Constructor name**  
---  
public ActivityRecordReply() ActivityRecordReply的构造方法  
  
#### Public Method Summary

**Return** | **Method**  
---|---  
List<ActivityRecord> | getActivityRecords() 返回过滤后所有活动记录  
List<SampleSet> | getSampleSet(ActivityRecord activityRecord, DataType dataType) 返回指定活动记录和数据类型的所有采样集  
List<SampleSet> | getSampleSet(ActivityRecord activityRecord) 返回指定活动记录的采样集  
Status | getStatus() 返回状态信息  
  
#### Public Constructors

#### [h2]ActivityRecordReply()

**Constructor name**  
---  
public ActivityRecordReply()  
ActivityRecordReply的构造方法  
  
#### Public Methods

#### [h2]getActivityRecords()

**Method**  
---  
public List<ActivityRecord> getActivityRecords()  
返回过滤后所有活动记录  
  
#### [h2]getSampleSet(ActivityRecord activityRecord, DataType dataType)

**Method**  
---  
public List<SampleSet> getSampleSet(ActivityRecord activityRecord, DataType dataType)  
返回指定活动记录和数据类型的所有采样集  
  
#### [h2]getSampleSet(ActivityRecord activityRecord)

**Method**  
---  
public List<SampleSet> getSampleSet(ActivityRecord activityRecord)  
返回指定活动记录的采样集  
  
**Parameters**

**Parameter name** | **Parameter desc**  
---|---  
activityRecord | 活动记录  
  
#### [h2]getStatus()

**Method**  
---  
public Status getStatus()  
返回状态信息
