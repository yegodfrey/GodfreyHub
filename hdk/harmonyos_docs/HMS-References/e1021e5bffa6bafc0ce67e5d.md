---
name: document/cn/HMS-References/ro_class-0000001050091216
title: ReadOptions
uri: https://developer.huawei.com/consumer/cn/doc/HMS-References/ro_class-0000001050091216
source: portal
---

# ReadOptions  
  
**CLASS info**  
---  
public class ReadOptions extends EnhanceParcelable  
数据读取请求类，使用此请求可以指定要读取的数据类型以及聚合参数，读取请求需要设置时间范围，并允许以详细或汇总的方式读取数据。 构建ReadOptions查询详情数据，需要指定详情数据的时间区间（必填），一个或多个特定的DataType或DataCollector。 构建ReadOptions查询数据详情的示例代码如下：
     1. 构建ReadOptions读一个指定DataType（增量步数）的详情。
            
            ReadOptions readOptions = new ReadOptions.Builder()
            	.setTimeRange(startDate.getTime(), endDate.getTime(), TimeUnit.MILLISECONDS)
            	.read(DataType.DT_CONTINUOUS_STEPS_DELTA)
            	.build();

     2. 构建ReadOptions读取多个指定DataType（增量步数和身高）的详情。
            
            ReadOptions readOptions = new ReadOptions.Builder()
            	.setTimeRange(startDate.getTime(), endDate.getTime(), TimeUnit.MILLISECONDS)
            	.read(DataType.DT_CONTINUOUS_STEPS_DELTA)
            	.read(DataType.DT_INSTANTANEOUS_HEIGHT)
            	.build();

     3. 构建ReadOptions读取指定DataCollector的详情。
            
            ReadOptions readOptions = new ReadOptions.Builder()
            	.setTimeRange(startDate.getTime(), endDate.getTime(), TimeUnit.MILLISECONDS)
            	.read(dataCollectorDevices)
            	.build();

构建ReadOptions查询汇总数据，需要指定汇总数据的时间区间（必填），汇总方式（必填），分组方式（必填）。 构建ReadOptions查询数据汇总的示例代码如下：
    
    ReadOptions readOptions = new ReadOptions.Builder()
    	.setTimeRange(startDate.getTime(), endDate.getTime(), TimeUnit.MILLISECONDS)
    	.polymerize(DataType.DT_CONTINUOUS_STEPS_DELTA, DataType.POLYMERIZE_STEP_COUNT_DELTA)
    	.groupByTime(1, TimeUnit.HOURS)
    	.build();  
  
#### Nested Class Summary

**Type** | **Name** | **Desc**  
---|---|---  
Class | ReadOptions.Builder | ReadOptions的构造器  
  
#### Field

**Field**  
---  
public static final Creator<ReadOptions> CREATOR  
  
#### Constant Summary

**Type** | **Name** | **Desc**  
---|---|---  
int | NO_LIMIT | 表示返回数据量无限制  
  
#### Public Method Summary

**Return** | **Method**  
---|---  
long | getStartTime(TimeUnit timeUnit) 获取开始时间  
long | getEndTime(TimeUnit timeUnit) 获取结束时间  
List<DataCollector> | getDataCollectors() 获取要读取的数据采集器  
List<DataCollector> | getPolymerizedDataCollectors() 获取聚合后的数据采集器  
List<DataType> | getDataTypes() 获取要读取的数据类型  
List<DataType> | getPolymerizedDataTypes() 获取聚合后的数据类型  
int | getGroupType() 获取分组的类型  
long | getGroupPeriod(TimeUnit timeUnit) 获取聚合数据的持续时间  
DataCollector | getActivityDataCollector() 获取活动相关的数据采集器  
int | getPageSize() 获取结果分页的上限数量  
boolean | equals(Object object)  
int | hashCode()  
String | toString()  
void | writeToParcel(Parcel dest, int flags)  
  
#### Constants

#### [h2]NO_LIMIT

**Constant**  
---  
public static final int NO_LIMIT  
表示返回结果数据不分页 Constant Value: 0  
  
#### Public Methods

#### [h2]getStartTime(TimeUnit timeUnit)

**Method**  
---  
public long getStartTime(TimeUnit timeUnit)  
以指定的时间单位返回查询的开始时间  
  
**Parameters**

**Parameter name** | **Parameter desc**  
---|---  
timeUnit | 时间单位  
  
#### [h2]getEndTime(TimeUnit timeUnit)

**Method**  
---  
public long getEndTime(TimeUnit timeUnit)  
以指定的时间单位返回查询的结束时间  
  
**Parameters**

**Parameter name** | **Parameter desc**  
---|---  
timeUnit | 时间单位  
  
#### [h2]getDataCollectors()

**Method**  
---  
public List<DataCollector> getDataCollectors()  
获取要读取的数据采集器  
  
#### [h2]getPolymerizedDataCollectors()

**Method**  
---  
public List<DataCollector> getPolymerizedDataCollectors()  
获取聚合后的数据采集器  
  
#### [h2]getDataTypes()

**Method**  
---  
public List<DataType> getDataTypes()  
获取要读取的数据类型  
  
#### [h2]getPolymerizedDataTypes()

**Method**  
---  
public List<DataType> getPolymerizedDataTypes()  
获取聚合后的数据类型  
  
#### [h2]getGroupType()

**Method**  
---  
public int getGroupType()  
获取分组的类型  
  
#### [h2]getGroupPeriod(TimeUnit timeUnit)

**Method**  
---  
public long getGroupPeriod(TimeUnit timeUnit)  
获取分组的持续时间  
  
#### [h2]getActivityDataCollector()

**Method**  
---  
public DataCollector getActivityDataCollector()  
获取活动相关的数据采集器  
  
#### [h2]getPageSize()

**Method**  
---  
public int getPageSize()  
获取结果分页的上限数量  
  
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
  
#### [h2]writeToParcel(Parcel dest, int flags)

**Method**  
---  
public void writeToParcel(Parcel dest, int flags)
