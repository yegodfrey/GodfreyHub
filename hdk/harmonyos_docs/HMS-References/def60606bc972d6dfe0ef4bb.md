---
name: document/cn/HMS-References/datatype-0000001050089916
title: DataType
uri: https://developer.huawei.com/consumer/cn/doc/HMS-References/datatype-0000001050089916
source: portal
---

# DataType  
  
**CLASS info**  
---  
public class DataType implements EnhanceParcelable  
由华为Health Kit定义的数据类型，每个数据类型字段都有唯一的名称来标识。 不同的数据类型表示不同的含义，例如：DT_CONTINUOUS_STEPS_DELTA数据类型表示增量步数，DT_CONTINUOUS_STEPS_TOTA数据类型表示累计步数。  
  
#### Constant Summary

**Type** | **Name** | **Desc**  
---|---|---  
DataType | DT_CONTINUOUS_STEPS_DELTA | 增量步数  
DataType | DT_CONTINUOUS_STEPS_TOTAL | 累计步数  
DataType | DT_INSTANTANEOUS_STEPS_RATE | 分钟步频  
DataType | DT_CONTINUOUS_ACTIVITY_SEGMENT | 一段时间内的活动类型  
DataType | DT_CONTINUOUS_CALORIES_CONSUMED | 一段时间内消耗的卡路里数（以千卡为单位）  
DataType | DT_CONTINUOUS_CALORIES_BURNT | 一段时间内燃烧的卡路里数（以千卡为单位  
DataType | DT_INSTANTANEOUS_CALORIES_BMR | 基础代谢率(以每天千卡为单位)  
DataType | DT_INSTANTANEOUS_POWER_SAMPLE | 功率的瞬时采样  
DataType | DT_INSTANTANEOUS_ACTIVITY_SAMPLE | 一段时间内单个的活动类型  
DataType | DT_INSTANTANEOUS_ACTIVITY_SAMPLES | 一段时间内的活动类型（不推荐使用，待废弃）  
DataType | DT_INSTANTANEOUS_HEART_RATE | 心率 (单位为每分钟心跳数)  
DataType | DT_INSTANTANEOUS_LOCATION_SAMPLE | 给定时间的位置信息  
DataType | DT_INSTANTANEOUS_LOCATION_TRACE | 运动轨迹上的一个位置点  
DataType | DT_CONTINUOUS_DISTANCE_DELTA | 自上次读数以来的移动距离增量（以米为单位）  
DataType | DT_CONTINUOUS_DISTANCE_TOTAL | 累积的移动距离（以米为单位）  
DataType | DT_INSTANTANEOUS_SPEED | 陆地上的瞬时速度(以米/秒为单位)  
DataType | DT_CONTINUOUS_BIKING_WHEEL_ROTATION_TOTAL | 一段时间内的自行车轮转速  
DataType | DT_INSTANTANEOUS_BIKING_WHEEL_ROTATION | 每分钟自行车轮转速的瞬时测量值  
DataType | DT_CONTINUOUS_BIKING_PEDALING_TOTAL | 从计数开始的自行车总里程（以米为单位）  
DataType | DT_INSTANTANEOUS_BIKING_PEDALING_RATE | 某个时间点骑自行车的速度(以米/秒为单位)  
DataType | DT_INSTANTANEOUS_HEIGHT | 身高(以米为单位)  
DataType | DT_INSTANTANEOUS_BODY_WEIGHT | 体重（以千克为单位）  
DataType | DT_INSTANTANEOUS_BODY_FAT_RATE | 体脂率  
DataType | DT_INSTANTANEOUS_NUTRITION_FACTS | 用餐时摄入的营养成分列表  
DataType | DT_INSTANTANEOUS_HYDRATE | 单次饮水量（以升为单位）  
DataType | DT_CONTINUOUS_WORKOUT_DURATION | 锻炼持续时间（以分钟为单位）  
DataType | DT_CONTINUOUS_EXERCISE_INTENSITY | 运动强度  
DataType | POLYMERIZE_CONTINUOUS_WORKOUT_DURATION | 一段时间内的锻炼时间（以分钟为单位）  
DataType | POLYMERIZE_CONTINUOUS_ACTIVITY_STATISTICS | 一段时间内特定活动类型的所有统计  
DataType | POLYMERIZE_CONTINUOUS_CALORIES_BMR_STATISTICS | 一段时间内的平均，最大和最小基础代谢率(以千卡为单位)  
DataType | POLYMERIZE_STEP_COUNT_DELTA | 一段时间内的步数增量  
DataType | POLYMERIZE_DISTANCE_DELTA | 一段时间内的距离增量  
DataType | POLYMERIZE_CALORIES_CONSUMED | 消耗的总卡路里  
DataType | POLYMERIZE_CALORIES_EXPENDED | 一段时间内消耗的总卡路里（以千卡为单位）  
DataType | POLYMERIZE_CONTINUOUS_EXERCISE_INTENSITY_STATISTICS | 心跳强度统计  
DataType | POLYMERIZE_CONTINUOUS_HEART_RATE_STATISTICS | 一段时间内每分钟心跳的平均，最大和最小值  
DataType | POLYMERIZE_CONTINUOUS_LOCATION_BOUNDARY_RANGE | 一段时间内的活动边界  
DataType | POLYMERIZE_CONTINUOUS_POWER_STATISTICS | 一段时间内的功率（包含最大瓦数和最小瓦数和平均瓦数）  
DataType | POLYMERIZE_CONTINUOUS_SPEED_STATISTICS | 对地速度（包含最大、最小和平均值，以米/秒为单位）  
DataType | POLYMERIZE_CONTINUOUS_BODY_FAT_RATE_STATISTICS | 一段时间内的体脂率（包含最大、最小和平均值）  
DataType | POLYMERIZE_CONTINUOUS_BODY_WEIGHT_STATISTICS | 一段时间内的体重（包含最大、最小和平均量，以千克为单位）  
DataType | POLYMERIZE_CONTINUOUS_HEIGHT_STATISTICS | 一段时间内的身高（包含最大、最小和平均值，以米为单位）  
DataType | POLYMERIZE_CONTINUOUS_NUTRITION_FACTS_STATISTICS | 一段时间内营养成分摄入的总和  
DataType | POLYMERIZE_HYDRATION | 在一段时间内饮水量（以升为单位）  
  
#### Public Constructor Summary

**Constructor name**  
---  
public DataType(String name, String scopeNameRead, String scopeNameWrite, String scopeNameBoth, List<Field> fieldsList) DataType构造方法  
  
#### Public Method Summary

**Return** | **Method**  
---|---  
List<DataType> | getPolymerizesForInput(DataType dataType) 获取指定的输出聚合数据类型的列表  
List<Field> | getFields() 获取数据类型的属性列表  
String | getName() 获取唯一标识此数据类型的名称  
String | getScopeNameRead() 获取数据类型的读权限  
String | getScopeNameWrite() 获取数据类型的写权限  
String | getScopeNameBoth() 获取数据类型的读写权限  
int | indexOf(Field field) 获取属性的索引值  
String | getMimeType(DataType dataType) 给类型加上头名称。  
boolean | equals(Object other)  
int | hashCode()  
String | toString()  
int | describeContents()  
  
#### Inherited Method Summary

#### [h2]equals(Object obj)/ hashCode()/toString()

**From class** | **Return type** | **Method name**  
---|---|---  
java.lang.Object | boolean | public boolean equals(Object obj)  
int | public int hashCode()  
String | public String toString()  
  
#### [h2]describeContents()

**From class** | **Return type** | **Method name**  
---|---|---  
android.os.Parcelable | int | describeContents()  
  
#### Constants

#### [h2]DT_CONTINUOUS_ACTIVITY_SEGMENT

**Constant**  
---  
public static final DataType DT_CONTINUOUS_ACTIVITY_SEGMENT  
一段时间内的活动类型 Related Data Type: com.huawei.continuous.activity.fragment  
  
#### [h2]DT_CONTINUOUS_BIKING_PEDALING_TOTAL

**Constant**  
---  
public static final DataType DT_CONTINUOUS_BIKING_PEDALING_TOTAL  
从计数开始的自行车总里程（以米为单位） Related Data Type: com.huawei.continuous.biking.pedaling.total  
  
#### [h2]DT_CONTINUOUS_BIKING_WHEEL_ROTATION_TOTAL

**Constant**  
---  
public static final DataType DT_CONTINUOUS_BIKING_WHEEL_ROTATION_TOTAL  
一段时间内的自行车轮转速 Related Data Type: com.huawei.continuous.biking.wheel_rotation.total  
  
#### [h2]DT_CONTINUOUS_CALORIES_CONSUMED

**Constant**  
---  
public static final DataType DT_CONTINUOUS_CALORIES_CONSUMED  
一段时间内消耗的卡路里数（以千卡为单位） Related Data Type: com.huawei.continuous.calories.consumed  
  
#### [h2]DT_CONTINUOUS_CALORIES_BURNT

**Constant**  
---  
public static final DataType DT_CONTINUOUS_CALORIES_BURNT  
一段时间内燃烧的卡路里数（以千卡为单位) Related Data Type: com.huawei.continuous.calories.burnt  
  
#### [h2]DT_CONTINUOUS_DISTANCE_DELTA

**Constant**  
---  
public static final DataType DT_CONTINUOUS_DISTANCE_DELTA  
自上次读数以来的移动距离增量（以米为单位） Related Data Type: com.huawei.continuous.distance.delta  
  
#### [h2]DT_CONTINUOUS_DISTANCE_TOTAL

**Constant**  
---  
public static final DataType DT_CONTINUOUS_DISTANCE_TOTAL  
累积的移动距离（以米为单位） Related Data Type: com.huawei.continuous.distance.total  
  
#### [h2]DT_CONTINUOUS_EXERCISE_INTENSITY

**Constant**  
---  
public static final DataType DT_CONTINUOUS_EXERCISE_INTENSITY  
运动强度 Constant Value: com.huawei.continuous.exercise_intensity  
  
#### [h2]DT_CONTINUOUS_STEPS_DELTA

**Constant**  
---  
public static final DataType DT_CONTINUOUS_STEPS_DELTA  
增量步数 Related Data Type: com.huawei.continuous.steps.delta  
  
#### [h2]DT_CONTINUOUS_STEPS_TOTAL

**Constant**  
---  
public static final DataType DT_CONTINUOUS_STEPS_TOTAL  
累计步数. Related Data Type: com.huawei.continuous.steps.total  
  
#### [h2]DT_CONTINUOUS_WORKOUT_DURATION

**Constant**  
---  
public static final DataType DT_CONTINUOUS_WORKOUT_DURATION  
锻炼持续时间（以分钟为单位） Related Data Type: com.huawei.continuous.workout.duration  
  
#### [h2]DT_INSTANTANEOUS_ACTIVITY_SAMPLE

**Constant**  
---  
public static final DataType DT_INSTANTANEOUS_ACTIVITY_SAMPLE  
一段时间内单个的活动类型 Related Data Type: com.huawei.instantaneous.activity.sample  
  
#### [h2]DT_INSTANTANEOUS_ACTIVITY_SAMPLES

**Constant**  
---  
public static final DataType DT_INSTANTANEOUS_ACTIVITY_SAMPLES  
一段时间内的活动类型 Related Data Type: com.huawei.instantaneous.activity.samples  
  
#### [h2]DT_INSTANTANEOUS_BIKING_PEDALING_RATE

**Constant**  
---  
public static final DataType DT_INSTANTANEOUS_BIKING_PEDALING_RATE  
某个时间点骑自行车的速度(以米/秒为单位) Related Data Type: com.huawei.instantaneous.biking.pedaling.rate  
  
#### [h2]DT_INSTANTANEOUS_BIKING_WHEEL_ROTATION

**Constant**  
---  
public static final DataType DT_INSTANTANEOUS_BIKING_WHEEL_ROTATION  
每分钟自行车轮转速的瞬时测量值 Related Data Type: com.huawei.instantaneous.biking.wheel_rotation  
  
#### [h2]DT_INSTANTANEOUS_BODY_FAT_RATE

**Constant**  
---  
public static final DataType DT_INSTANTANEOUS_BODY_FAT_RATE  
体脂率 Related Data Type: com.huawei.instantaneous.body.fat.rate  
  
#### [h2]DT_INSTANTANEOUS_BODY_WEIGHT

**Constant**  
---  
public static final DataType DT_INSTANTANEOUS_BODY_WEIGHT  
体重（以千克为单位） Related Data Type: com.huawei.instantaneous.body_weight  
  
#### [h2]DT_INSTANTANEOUS_CALORIES_BMR

**Constant**  
---  
public static final DataType DT_INSTANTANEOUS_CALORIES_BMR  
基础代谢率(以每天千卡为单位) Related Data Type: com.huawei.instantaneous.calories.bmr  
  
#### [h2]DT_INSTANTANEOUS_HEART_RATE

**Constant**  
---  
public static final DataType DT_INSTANTANEOUS_HEART_RATE  
心率 (单位为每分钟心跳数) Related Data Type: com.huawei.instantaneous.heart_rate  
  
#### [h2]DT_INSTANTANEOUS_HEIGHT

**Constant**  
---  
public static final DataType DT_INSTANTANEOUS_HEIGHT  
身高（以米为单位） Related Data Type: com.huawei.instantaneous.height  
  
#### [h2]DT_INSTANTANEOUS_HYDRATE

**Constant**  
---  
public static final DataType DT_INSTANTANEOUS_HYDRATE  
单次饮水量（以升为单位） Related Data Type: com.huawei.instantaneous.hydrate  
  
#### [h2]DT_INSTANTANEOUS_LOCATION_SAMPLE

**Constant**  
---  
public static final DataType DT_INSTANTANEOUS_LOCATION_SAMPLE  
给定时间的位置信息 Related Data Type: com.huawei.instantaneous.location.sample  
  
#### [h2]DT_INSTANTANEOUS_LOCATION_TRACE

**Constant**  
---  
public static final DataType DT_INSTANTANEOUS_LOCATION_TRACE  
运动轨迹上的一个位置点 Related Data Type: com.huawei.instantaneous.location.trace  
  
#### [h2]DT_INSTANTANEOUS_NUTRITION_FACTS

**Constant**  
---  
public static final DataType DT_INSTANTANEOUS_NUTRITION_FACTS  
用餐时摄入的营养成分列表 Related Data Type: com.huawei.instantaneous.nutrition_facts  
  
#### [h2]DT_INSTANTANEOUS_POWER_SAMPLE

**Constant**  
---  
public static final DataType DT_INSTANTANEOUS_POWER_SAMPLE  
功率的瞬时采样 Related Data Type: com.huawei.instantaneous.power.sample  
  
#### [h2]DT_INSTANTANEOUS_SPEED

**Constant**  
---  
public static final DataType DT_INSTANTANEOUS_SPEED  
对地瞬时速度（以米/秒为单位） Related Data Type: com.huawei.instantaneous.speed  
  
#### [h2]DT_INSTANTANEOUS_STEPS_RATE

**Constant**  
---  
public static final DataType DT_INSTANTANEOUS_STEPS_RATE  
分钟步频 Related Data Type: com.huawei.instantaneous.steps.rate  
  
#### [h2]POLYMERIZE_CALORIES_CONSUMED

**Constant**  
---  
public static final DataType POLYMERIZE_CALORIES_CONSUMED  
消耗的总卡路里 Related Data Type: com.huawei.continuous.calories.consumed  
  
#### [h2]POLYMERIZE_CALORIES_EXPENDED

**Constant**  
---  
public static final DataType POLYMERIZE_CALORIES_EXPENDED  
一段时间内消耗的总卡路里（以千卡为单位） Related Data Type: com.huawei.continuous.calories.burnt  
  
#### [h2]POLYMERIZE_CONTINUOUS_ACTIVITY_STATISTICS

**Constant**  
---  
public static final DataType POLYMERIZE_CONTINUOUS_ACTIVITY_STATISTICS  
一段时间内特定活动类型的所有统计 Related Data Type: com.huawei.continuous.activity.statistics  
  
#### [h2]POLYMERIZE_CONTINUOUS_BODY_FAT_RATE_STATISTICS

**Constant**  
---  
public static final DataType POLYMERIZE_CONTINUOUS_BODY_FAT_RATE_STATISTICS  
一段时间内的体脂率（包含最大、最小和平均值） Related Data Type: com.huawei.continuous.body.fat.rate.statistics  
  
#### [h2]POLYMERIZE_CONTINUOUS_BODY_WEIGHT_STATISTICS

**Constant**  
---  
public static final DataType POLYMERIZE_CONTINUOUS_BODY_WEIGHT_STATISTICS  
一段时间内的体重（包含最大、最小和平均量，以千克为单位） Related Data Type: com.huawei.continuous.body_weight.statistics  
  
#### [h2]POLYMERIZE_CONTINUOUS_CALORIES_BMR_STATISTICS

**Constant**  
---  
public static final DataType POLYMERIZE_CONTINUOUS_CALORIES_BMR_STATISTICS  
一段时间内的平均，最大和最小基础代谢率（以千卡为单位） Related Data Type: com.huawei.continuous.calories.bmr.statistics  
  
#### [h2]POLYMERIZE_CONTINUOUS_EXERCISE_INTENSITY_STATISTICS

**Constant**  
---  
public static final DataType POLYMERIZE_CONTINUOUS_EXERCISE_INTENSITY_STATISTICS  
心跳强度统计 Related Data Type: com.huawei.continuous.exercise_intensity.statistics  
  
#### [h2]POLYMERIZE_CONTINUOUS_HEART_RATE_STATISTICS

**Constant**  
---  
public static final DataType POLYMERIZE_CONTINUOUS_HEART_RATE_STATISTICS  
一段时间内每分钟心跳的平均，最大和最小值 Related Data Type: com.huawei.continuous.heart_rate.statistics  
  
#### [h2]POLYMERIZE_CONTINUOUS_HEIGHT_STATISTICS

**Constant**  
---  
public static final DataType POLYMERIZE_CONTINUOUS_HEIGHT_STATISTICS  
一段时间内的身高（包含最大、最小和平均值，以米为单位） Related Data Type: com.huawei.continuous.height.statistics  
  
#### [h2]POLYMERIZE_CONTINUOUS_LOCATION_BOUNDARY_RANGE

**Constant**  
---  
public static final DataType POLYMERIZE_CONTINUOUS_LOCATION_BOUNDARY_RANGE  
一段时间内的活动边界 Related Data Type: com.huawei.continuous.location.boundary_range  
  
#### [h2]POLYMERIZE_CONTINUOUS_POWER_STATISTICS

**Constant**  
---  
public static final DataType POLYMERIZE_CONTINUOUS_POWER_STATISTICS  
一段时间内的功率（包含最大瓦数和最小瓦数和平均瓦数） Related Data Type: com.huawei.continuous.power.statistics  
  
#### [h2]POLYMERIZE_CONTINUOUS_NUTRITION_FACTS_STATISTICS

**Constant**  
---  
public static final DataType POLYMERIZE_CONTINUOUS_NUTRITION_FACTS_STATISTICS  
一段时间内营养成分摄入的总和 Related Data Type: com.huawei.continuous.nutrition_facts.statistics  
  
#### [h2]POLYMERIZE_CONTINUOUS_SPEED_STATISTICS

**Constant**  
---  
public static final DataType POLYMERIZE_CONTINUOUS_SPEED_STATISTICS  
对地速度（包含最大、最小和平均值，以米/秒为单位） Related Data Type: com.huawei.continuous.speed.statistics  
  
#### [h2]POLYMERIZE_CONTINUOUS_WORKOUT_DURATION

**Constant**  
---  
public static final DataType POLYMERIZE_CONTINUOUS_WORKOUT_DURATION  
一段时间内的锻炼时间（以分钟为单位） Related Data Type: com.huawei.continuous.workout.duration  
  
#### [h2]POLYMERIZE_DISTANCE_DELTA

**Constant**  
---  
public static final DataType POLYMERIZE_DISTANCE_DELTA  
一段时间内的距离增量 Related Data Type: com.huawei.continuous.distance.delta  
  
#### [h2]POLYMERIZE_HYDRATION

**Constant**  
---  
public static final DataType POLYMERIZE_HYDRATION  
在一段时间内饮水量（以升为单位） Related Data Type: com.huawei.instantaneous.hydrate  
  
#### [h2]POLYMERIZE_STEP_COUNT_DELTA

**Constant**  
---  
public static final DataType POLYMERIZE_STEP_COUNT_DELTA  
一段时间内的步数增量 Related Data Type: com.huawei.continuous.steps.delta  
  
#### Public Constructors

#### [h2]DataType(String name, String scopeNameRead, String scopeNameWrite, String scopeNameBoth,List<Field> fieldsList)

**Constructor name**  
---  
public DataType(String name, String scopeNameRead, String scopeNameWrite, String scopeNameBoth,List<Field> fieldsList)  
数据类型的构造方法  
  
**Parameters**

**Parameter name** | **Parameter desc**  
---|---  
name | 名称，必须是长度在1到300之间的字符串  
scopeNameRead | 数据类型的读权限，必须是空字符串或者是长度在1到1000之间的字符串  
scopeNameWrite | 数据类型的写权限，必须是空字符串或者是长度在1到1000之间的字符串  
scopeNameBoth | 数据类型的读写权限，必须是空字符串或者是长度在1到1000之间的字符串  
fieldsList | 属性列表  
  
#### Public Methods

#### [h2]getPolymerizesForInput(DataType dataType)

**Method**  
---  
public static List<DataType> getPolymerizesForInput(DataType dataType)  
获取指定的聚合数据类型的列表  
  
**Parameters**

**Parameter name** | **Parameter desc**  
---|---  
dataType | 数据类型  
  
**Return**

**Type** | **Return desc**  
---|---  
List<DataType> | 数据类型列表  
  
#### [h2]getFields()

**Method**  
---  
public List<Field> getFields()  
获取数据类型的属性列表  
  
**Return**

**Type** | **Return desc**  
---|---  
List<Field> | 属性列表  
  
#### [h2]getName()

**Method**  
---  
public String getName()  
获取唯一标识此数据类型的名称  
  
**Return**

**Type** | **Return desc**  
---|---  
String | 属性名称  
  
#### [h2]getScopeNameRead()

**Method**  
---  
public String getScopeNameRead()  
获取数据类型的读权限  
  
**Return**

**Type** | **Return desc**  
---|---  
String | 读取权限  
  
#### [h2]getScopeNameWrite()

**Method**  
---  
public String getScopeNameWrite()  
获取数据类型的写权限  
  
**Return**

**Type** | **Return desc**  
---|---  
String | 写入权限  
  
#### [h2]getScopeNameBoth()

**Method**  
---  
public String getScopeNameBoth()  
获取数据类型的读写权限  
  
**Return**

**Type** | **Return desc**  
---|---  
String | 读写权限  
  
#### [h2]getMimeType(DataType dataType)

**Method**  
---  
public static String getMimeType(DataType dataType)  
给类型加上头名称  
  
**Parameters**

**Parameter name** | **Parameter desc**  
---|---  
dataType | 数据类型  
  
**Return**

**Type** | **Return desc**  
---|---  
String | 头名称  
  
#### [h2]indexOf(Field field)

**Method**  
---  
public final int indexOf(Field field)  
获取属性的索引值  
  
**Parameters**

**Parameter name** | **Parameter desc**  
---|---  
field | 属性  
  
**Return**

**Type** | **Return desc**  
---|---  
int | 索引值  
  
#### [h2]equals(Object other)

**Method**  
---  
public boolean equals(Object other)  
  
#### [h2]hashCode()

**Method**  
---  
public int hashCode()  
  
#### [h2]toString()

**Method**  
---  
public String toString()  
  
#### [h2]describeContents()

**Method**  
---  
public final int describeContents()
