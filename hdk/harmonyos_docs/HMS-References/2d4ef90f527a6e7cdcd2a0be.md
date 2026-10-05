---
name: document/cn/HMS-References/datacollector_main-0000001050164265
title: DataCollector
uri: https://developer.huawei.com/consumer/cn/doc/HMS-References/datacollector_main-0000001050164265
source: portal
---

# DataCollector  
  
**CLASS info**  
---  
public class DataCollector implements Parcelable  
定义唯一的数据采集器。数据采集器可以提供手机或者外接设备的原始数据，多个数据采集器通过转换或者合并可以生成派生数据。每个采集点必须有一个对应的数据采集器。 开发者可以主动查询数据，也可以通过注册监听器在固定时间间隔获取数据。 数据采集器在创建时会产生唯一的标识符，该标识符由相关的数据采集器的类型、设备信息、应用程序包名等组成。  
  
#### Nested Class Summary

**Type** | **Name** | **Desc**  
---|---|---  
Class | public static class Builder | 数据采集器构造类  
  
#### Constant Summary

**Type** | **Name** | **Desc**  
---|---|---  
int | DATA_TYPE_INIT | 初始数据类型（默认初始值，需重新设置）  
int | DATA_TYPE_RAW | 原生数据类型  
int | DATA_TYPE_DERIVED | 派生数据类型  
int | DATA_TYPE_CLEAN | 清洁数据类型  
int | DATA_TYPE_CONVERTED | 转换过的数据类型  
int | HEALTH_DATA_QUALITY_BLOOD_PRESSURE_ESH2002 | 血压数据质量标准--ESH2002  
int | HEALTH_DATA_QUALITY_BLOOD_PRESSURE_ESH2010 | 血压数据质量标准--ESH2010  
int | HEALTH_DATA_QUALITY_BLOOD_PRESSURE_AAMI | 血压数据质量标准--AAMI  
int | HEALTH_DATA_QUALITY_BLOOD_PRESSURE_BHS_A_A | 血压数据质量标准--BHS_A_A  
int | HEALTH_DATA_QUALITY_BLOOD_PRESSURE_BHS_A_B | 血压数据质量标准--BHS_A_B  
int | HEALTH_DATA_QUALITY_BLOOD_PRESSURE_BHS_B_A | 血压数据质量标准--BHS_B_A  
int | HEALTH_DATA_QUALITY_BLOOD_PRESSURE_BHS_B_B | 血压数据质量标准--BHS_B_B  
int | HEALTH_DATA_QUALITY_BLOOD_GLUCOSE_ISO151972003 | 血糖数据质量标准--ISO151972003  
int | HEALTH_DATA_QUALITY_BLOOD_GLUCOSE_ISO151972013 | 血糖数据质量标准--ISO151972013  
String | EXTRA_DATA_SOURCE | 其他数据源  
  
#### Public Method Summary

**Return** | **Method**  
---|---  
String | getStandardByType(int type) 获取标准类型  
String | getPackageName() 获取应用程序的包名  
DataType | getDataType() 获取数据类型  
DeviceInfo | getDeviceInfo() 获取设备信息  
String | getDataCollectorName() 获取数据采集器的名称  
String | getDataStreamName() 获取数据流名称  
String | getDataStreamId() 获取数据采集器唯一标识符  
int | getDataGenerateType () 获取数据采集器的类型  
boolean | equals(Object other)  
int | hashCode()  
String | toString()  
int | describeContents()  
void | writeToParcel(Parcel dest, int flags)  
  
#### Inherited Method Summary

#### [h2]equals(Object obj)/ hashCode()/toString()

**From class** | **Return type** | **Method name**  
---|---|---  
java.lang.Object | boolean | public boolean equals(Object obj)  
int | public int hashCode()  
String | public String toString()  
  
#### [h2]describeContents()/writeToParcel(Parcel dest , int flags)

**From class** | **Return type** | **Method name**  
---|---|---  
android.os.Parcelable | int | describeContents()  
void | writeToParcel(Parcel dest, int flags)  
  
#### Constants

#### [h2]DATA_TYPE_CLEAN

**Constant**  
---  
public static final int DATA_TYPE_CLEAN  
清洁数据类型 Constant Value: 2  
  
#### [h2]DATA_TYPE_CONVERTED

**Constant**  
---  
public static final int DATA_TYPE_CONVERTED  
转换过的数据类型 Constant Value: 3  
  
#### [h2]DATA_TYPE_DERIVED

**Constant**  
---  
public static final int DATA_TYPE_DERIVED  
派生数据类型 Constant Value: 1  
  
#### [h2]DATA_TYPE_INIT

**Constant**  
---  
public static final int DATA_TYPE_INIT  
初始数据类型（默认初始值，禁止使用该类型） Constant Value: -1  
  
#### [h2]DATA_TYPE_RAW

**Constant**  
---  
public static final int DATA_TYPE_RAW  
原生数据类型 Constant Value: 0  
  
#### [h2]EXTRA_DATA_SOURCE

**Constant**  
---  
public static final String EXTRA_DATA_SOURCE  
其他数据源 Constant Value: “vnd.huawei.hihealth.data_collector”  
  
#### [h2]HEALTH_DATA_QUALITY_BLOOD_GLUCOSE_ISO151972003

**Constant**  
---  
public static final int HEALTH_DATA_QUALITY_BLOOD_GLUCOSE_ISO151972003  
血糖数据质量标准--ISO151972003 Constant Value: 8  
  
#### [h2]HEALTH_DATA_QUALITY_BLOOD_GLUCOSE_ISO151972013

**Constant**  
---  
public static final int HEALTH_DATA_QUALITY_BLOOD_GLUCOSE_ISO151972013  
血糖数据质量标准--ISO151972013 Constant Value: 9  
  
#### [h2]HEALTH_DATA_QUALITY_BLOOD_PRESSURE_AAMI

**Constant**  
---  
public static final int HEALTH_DATA_QUALITY_BLOOD_PRESSURE_AAMI  
血压数据质量标准--AAMI Constant Value: 3  
  
#### [h2]HEALTH_DATA_QUALITY_BLOOD_PRESSURE_BHS_A_A

**Constant**  
---  
public static final int HEALTH_DATA_QUALITY_BLOOD_PRESSURE_BHS_A_A  
血压数据质量标准--BHS_A_A Constant Value: 4  
  
#### [h2]HEALTH_DATA_QUALITY_BLOOD_PRESSURE_BHS_A_B

**Constant**  
---  
public static final int HEALTH_DATA_QUALITY_BLOOD_PRESSURE_BHS_A_B  
血压数据质量标准--BHS_A_B Constant Value: 5  
  
#### [h2]HEALTH_DATA_QUALITY_BLOOD_PRESSURE_BHS_B_A

**Constant**  
---  
public static final int HEALTH_DATA_QUALITY_BLOOD_PRESSURE_BHS_B_A  
血压数据质量标准--BHS_B_A Constant Value: 6  
  
#### [h2]HEALTH_DATA_QUALITY_BLOOD_PRESSURE_BHS_B_B

**Constant**  
---  
public static final int HEALTH_DATA_QUALITY_BLOOD_PRESSURE_BHS_B_B  
血压数据质量标准--BHS_B_B Constant Value: 7  
  
#### [h2]HEALTH_DATA_QUALITY_BLOOD_PRESSURE_ESH2002

**Constant**  
---  
public static final int HEALTH_DATA_QUALITY_BLOOD_PRESSURE_ESH2002  
血压数据质量标准--ESH2002 Constant Value: 1  
  
#### [h2]HEALTH_DATA_QUALITY_BLOOD_PRESSURE_ESH2010

**Constant**  
---  
public static final int HEALTH_DATA_QUALITY_BLOOD_PRESSURE_ESH2010  
血压数据质量标准--ESH2010 Constant Value: 2  
  
#### Public Methods

#### [h2]getStandardByType(int type)

**Method**  
---  
public static String getStandardByType(int type)  
获取标准类型  
  
**Parameters**

**Parameter name** | **Parameter desc**  
---|---  
type | 数据类型  
  
**Return**

**Type** | **Return desc**  
---|---  
String | 标准类型  
  
#### [h2]getPackageName()

**Method**  
---  
public String getPackageName()  
获取应用程序的包名  
  
**Return**

**Type** | **Return desc**  
---|---  
String | 应用程序的包名  
  
#### [h2]getDataType()

**Method**  
---  
public DataType getDataType()  
获取数据类型  
  
**Return**

**Type** | **Return desc**  
---|---  
DataType | 数据类型  
  
#### [h2]getDeviceInfo()

**Method**  
---  
public DeviceInfo getDeviceInfo()  
获取设备信息  
  
**Return**

**Type** | **Return** **desc**  
---|---  
DeviceInfo | 设备信息  
  
#### [h2]getDataCollectorName()

**Method**  
---  
public String getDataCollectorName()  
获取数据采集器的名称  
  
**Return**

**Type** | **Return** **desc**  
---|---  
String | 数据采集器名称  
  
#### [h2]getDataStreamName()

**Method**  
---  
public String getDataStreamName()  
获取数据流名称  
  
**Return**

**Type** | **Return desc**  
---|---  
String | 数据流名称  
  
#### [h2]getDataStreamId()

**Method**  
---  
public String getDataStreamId()  
获取数据采集器的唯一标识符  
  
**Return**

**Type** | **Return desc**  
---|---  
String | 数据采集器的唯一标识符  
  
#### [h2]getDataGenerateType()

**Method**  
---  
public int getDataGenerateType()  
获取数据采集器类型  
  
**Return**

**Type** | **Return desc**  
---|---  
int | 数据采集器类型  
  
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
返回此对象的字符串表示形式  
  
**Return**

**Type** | **Return desc**  
---|---  
String | 字符串表示形式  
  
#### [h2]describeContents()

**Method**  
---  
public final int describeContents()  
  
#### [h2]writeToParcel(Parcel dest , int flags)

**Method**  
---  
public void writeToParcel(Parcel dest, int flags)
