---
name: document/cn/HMS-References/samplepoint_builder-0000001050162562
title: SamplePoint.Builder
uri: https://developer.huawei.com/consumer/cn/doc/HMS-References/samplepoint_builder-0000001050162562
source: portal
---

# SamplePoint.Builder  
  
**CLASS info**  
---  
public static class Builder  
采样点构造器  
  
#### Public Method Summary

**Return** | **Method**  
---|---  
Builder | setRawDataCollector(DataCollector collector) 设置原始数据采集器  
Builder | setActivityField(Field field, String activity) 设置活动类型属性值  
Builder | setFieldValue(Field field, int val) 设置采样点的整型属性值  
Builder | setFieldValue(Field field, float val) 设置采样点的浮点属性值  
Builder | setFieldValue(Field field, String val) 设置采样点的字符串属性值  
Builder | setFieldValue(Field field, Map<String, Float> mapVal) 设置采样点的映射属性值  
Builder | setSamplingTime(long timestamp, TimeUnit timeUnit) 设置瞬间数据的采样时间戳  
Builder | setTimeInterval(long start, long end, TimeUnit timeUnit) 设置区间数据的采样时间戳  
Builder | setId(long id) 设置采样点id的值  
SamplePoint | build() 生成并创建采样点  
  
#### Public Methods

#### [h2]setRawDataCollector(DataCollector collector)

**Method**  
---  
public Builder setRawDataCollector(DataCollector collector)  
设置原始数据采集器  
  
**Parameters**

**Parameter name** | **Parameter desc**  
---|---  
collector | 数据采集器  
  
**Return**

**Type** | **Return desc**  
---|---  
Builder | 内部构造类  
  
#### [h2]setActivityField(Field field, String activity)

**Method**  
---  
public Builder setActivityField(Field field, String activity)  
设置活动类型属性值  
  
**Parameters**

**Parameter name** | **Parameter desc**  
---|---  
field | 数据属性  
activity | 活动  
  
**Return**

**Type** | **Return desc**  
---|---  
Builder | 内部构造类  
  
#### [h2]setFieldValue(Field field, int val)

**Method**  
---  
public Builder setFieldValue(Field field, int val)  
设置采样点的整型属性值  
  
**Parameters**

**Parameter name** | **Parameter desc**  
---|---  
field | 数据属性  
val | 整数  
  
**Return**

**Type** | **Return desc**  
---|---  
Builder | 内部构造类  
  
#### [h2]setFieldValue(Field field, float val)

**Method**  
---  
public Builder setFieldValue(Field field, float val)  
设置采样点的浮点属性值  
  
**Parameters**

**Parameter name** | **Parameter desc**  
---|---  
field | 数据属性  
val | 浮点数  
  
**Return**

**Type** | **Return desc**  
---|---  
Builder | 内部构造类  
  
#### [h2]setFieldValue(Field field, String val)

**Method**  
---  
public Builder setFieldValue(Field field, String val)  
设置采样点的字符串属性值  
  
**Parameters**

**Parameter name** | **Parameter desc**  
---|---  
field | 数据属性  
val | 字符串  
  
**Return**

**Type** | **Return desc**  
---|---  
Builder | 内部构造类  
  
#### [h2]setFieldValue(Field field, Map<String, Float> mapVal)

**Method**  
---  
public Builder setFieldValue(Field field, Map<String, Float> mapVal)  
设置采样点的映射属性值  
  
**Parameters**

**Parameter name** | **Parameter desc**  
---|---  
field | 数据属性  
mapVal | 映射图  
  
**Return**

**Type** | **Return desc**  
---|---  
Builder | 内部构造类  
  
#### [h2]setSamplingTime(long samplingTime, TimeUnit timeUnit)

**Method**  
---  
public Builder setSamplingTime(long samplingTime, TimeUnit timeUnit)  
设置瞬间数据的采样时间戳  
  
**Parameters**

**Parameter name** | **Parameter desc**  
---|---  
samplingTime | 时间戳  
timeUnit | 时间单位  
  
**Return**

**Type** | **Return desc**  
---|---  
Builder | 内部构造类  
  
#### [h2]setTimeInterval(long start, long end, TimeUnit timeUnit)

**Method**  
---  
public Builder setTimeInterval(long start, long end, TimeUnit timeUnit)  
设置区间数据的采样时间戳  
  
**Parameters**

**Parameter name** | **Parameter desc**  
---|---  
start | 开始时间  
end | 结束时间  
timeUnit | 时间单位  
  
**Return**

**Type** | **Return desc**  
---|---  
Builder | 内部构造类  
  
#### [h2]setId(long id)

**Method**  
---  
public Builder setId(long id)  
设置采样点的id  
  
**Parameters**

**Parameter name** | **Parameter desc**  
---|---  
id | id  
  
**Return**

**Type** | **Return desc**  
---|---  
Builder | 内部构造类  
  
#### [h2]build()

**Method**  
---  
public SamplePoint build()  
生成并创建采样点  
  
**Return**

**Type** | **Return desc**  
---|---  
SamplePoint | 采样点对象
