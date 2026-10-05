---
name: document/cn/HMS-References/arro_class-0000001050093077
title: ActivityRecordReadOptions
uri: https://developer.huawei.com/consumer/cn/doc/HMS-References/arro_class-0000001050093077
source: portal
---

# ActivityRecordReadOptions  
  
**CLASS info**  
---  
public class ActivityRecordReadOptions extends EnhanceParcelable  
从华为Health平台中读取活动记录数据的请求参数类 示例代码如下：
    
    
    ActivityRecordReadOptions readRequest = new ActivityRecordReadOptions.Builder()
    	.setTimeInterval(startTime, endTime, TimeUnit.MILLISECONDS)
    	.readActivityRecordsFromAllApps()
    	.read(DataType.DT_CONTINUOUS_STEPS_DELTA)
    	.build();  
  
#### Nested Class Summary

**Type** | **Name** | **Desc**  
---|---|---  
Class | ActivityRecordReadOptions.Builder | ActivityRecordReadOptions的构造器  
  
#### Field

**Field**  
---  
public static final Creator<ActivityRecordReadOptions> CREATOR  
  
#### Public Method Summary

**Return** | **Method**  
---|---  
List<DataCollector> | getDataCollectors() 获取数据采集器  
List<DataType> | getDataTypes() 获取数据类型  
long | getEndTime(TimeUnit timeUnit) 获取结束时间  
List<String> | getRemoveApplications() 获取移除的所有应用程序包名  
String | getActivityRecordId() 获取当前请求数据的活动记录ID  
String | getActivityRecordName() 获取当前数据的活动记录名称  
boolean | isAllAppsSelected() 读取的数据是否包括所有应用程序的活动记录  
long | getStartTime(TimeUnit timeUnit) 获取开始时间  
boolean | equals(Object object)  
int | hashCode()  
String | toString()  
  
#### Public Methods

#### [h2]getDataCollectors()

**Method**  
---  
public List<DataCollector> getDataCollectors()  
获取数据采集器  
  
**Return**

**Type** | **Return desc**  
---|---  
List<DataCollector> | 指定的数据采集器，如果未指定则列表为空  
  
#### [h2]getDataTypes()

**Method**  
---  
public List<DataType> getDataTypes()  
获取数据类型  
  
**Return**

**Type** | **Return desc**  
---|---  
List<DataType> | 指定的数据类型，如果未指定则列表为空  
  
#### [h2]getEndTime(TimeUnit timeUnit)

**Method**  
---  
public long getEndTime(TimeUnit timeUnit)  
获取结束时间  
  
**Parameters**

**Parameter name** | **Parameter desc**  
---|---  
timeUnit | 时间单位  
  
#### [h2]getRemoveApplications()

**Method**  
---  
public List<String> getRemoveApplications()  
获取移除的所有应用程序包名  
  
**Return**

**Type** | **Return desc**  
---|---  
List<String> | 要排除的应用程序包名的列表，如果未指定则列表为空  
  
#### [h2]getActivityRecordId()

**Method**  
---  
public String getActivityRecordId()  
获取当前请求数据的活动记录ID  
  
**Return**

**Type** | **Return desc**  
---|---  
String | 指定的活动记录的ID，如果未指定则为null  
  
#### [h2]getActivityRecordName()

**Method**  
---  
public String getActivityRecordName()  
获取当前请求数据的活动记录名称  
  
**Return**

**Type** | **Return desc**  
---|---  
String | 指定的活动记录的名称，如果未指定则为null  
  
#### [h2]isAllAppsSelected()

**Method**  
---  
public boolean isAllAppsSelected()  
读取的数据是否包括所有应用程序的活动记录  
  
#### [h2]getStartTime(TimeUnit timeUnit)

**Method**  
---  
public long getStartTime(TimeUnit timeUnit)  
获取开始时间  
  
**Parameters**

**Parameter name** | **Parameter desc**  
---|---  
timeUnit | 时间单位  
  
#### [h2]equals(Object object)

**Method**  
---  
public boolean equals(Object object)  
  
#### [h2]hashCode()

**Method**  
---  
public int hashCode()  
  
#### [h2]toString()

**Method**  
---  
public String toString()
