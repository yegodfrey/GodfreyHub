---
name: document/cn/HMSCore-References/datareportmodel-0000001228948625
title: DataReportModel
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-References/datareportmodel-0000001228948625
---

# DataReportModel

|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|java.lang.Object |---[com.huawei.hihealth.CommonParam](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/commonparam-0000001183948980) |---|---com.huawei.hihealth.DataReportModel public class DataReportModel extends https://developer.huawei.com/consumer/cn/doc/HMSCore-References/commonparam-0000001183948980|

日常数据订阅模型

客户端扩展参数可使用父类方法 [CommonParam.putInt(String, int)](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/commonparam-0000001183948980#ZH-CN_TOPIC_0000002516362084__putInt-java_lang_String-int-), [CommonParam.putDouble(String, double)](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/commonparam-0000001183948980#ZH-CN_TOPIC_0000002516362084__putDouble-java_lang_String-double-), [CommonParam.putBoolean(String, boolean)](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/commonparam-0000001183948980#ZH-CN_TOPIC_0000002516362084__putBoolean-java_lang_String-boolean-), [CommonParam.putString(String, String)](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/commonparam-0000001183948980#ZH-CN_TOPIC_0000002516362084__putString-java_lang_String-java_lang_String-),

扩展方法：在 [HiHealthDataKey](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/hihealthdatakey-0000001229190077) 中定义String类型key值，服务端根据 [CommonParam.getInt(String)](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/commonparam-0000001183948980#ZH-CN_TOPIC_0000002516362084__getInt-java_lang_String-) 等获取对应值

**Since:**
2021-10-26

## Nested Class Summary

|Nested classes/interfaces inherited from interface android.os.Parcelable|
|:-----------------------------------------------------------------------|
|android.os.Parcelable.ClassLoaderCreator, android.os.Parcelable.Creator|

## Field Summary

|Modifier and Type|Field and Description|
|:----------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|static int|[DEFAULT_MAX_REPORT_VALUE](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/datareportmodel-0000001228948625#ZH-CN_TOPIC_0000002516522022__DEFAULT_MAX_REPORT_VALUE) 最大上报值的上限|
|static java.lang.String|[REPORT_PARAM_SEPARATOR](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/datareportmodel-0000001228948625#ZH-CN_TOPIC_0000002516522022__REPORT_PARAM_SEPARATOR) 参数间隔标识|

|Fields inherited from interface android.os.Parcelable|
|:------------------------------------------------------|
|CONTENTS_FILE_DESCRIPTOR, PARCELABLE_WRITE_RETURN_VALUE|

## Constructor Summary

|Constructor and Description|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|[DataReportModel](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/datareportmodel-0000001228948625#ZH-CN_TOPIC_0000002516522022__DataReportModel-int-int-)(int dataType, int reportType) 根据数据类型、订阅模式构造数据上报模型|
|[DataReportModel](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/datareportmodel-0000001228948625#ZH-CN_TOPIC_0000002516522022__DataReportModel-int-int-int-)(int dataType, int reportType, int reportValue) 根据数据类型、订阅模式、上报值构造数据上报模型|
|[DataReportModel](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/datareportmodel-0000001228948625#ZH-CN_TOPIC_0000002516522022__DataReportModel-int-int-int-int-)(int dataType, int reportType, int reportValue, int maxReportValue) 根据数据类型、订阅模式、上报值、最大上报值构造数据上报模型|

## Method Summary

|Modifier and Type|Method and Description|
|:----------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|int|[getDataType](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/datareportmodel-0000001228948625#ZH-CN_TOPIC_0000002516522022__getDataType--)() 获取数据类型|
|int|[getMaxReportValue](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/datareportmodel-0000001228948625#ZH-CN_TOPIC_0000002516522022__getMaxReportValue--)() 获取最大上报值|
|int|[getReportType](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/datareportmodel-0000001228948625#ZH-CN_TOPIC_0000002516522022__getReportType--)() 获取订阅模式|
|int|[getReportValue](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/datareportmodel-0000001228948625#ZH-CN_TOPIC_0000002516522022__getReportValue--)() 获取上报值|
|void|[setDataType](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/datareportmodel-0000001228948625#ZH-CN_TOPIC_0000002516522022__setDataType-int-)(int dataType) 设置数据类型|
|void|[setMaxReportValue](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/datareportmodel-0000001228948625#ZH-CN_TOPIC_0000002516522022__setMaxReportValue-int-)(int maxReportValue) 设置最大上报值，若上报值超过最大上报值则不上报，默认为[DataReportModel.DEFAULT_MAX_REPORT_VALUE](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/datareportmodel-0000001228948625#ZH-CN_TOPIC_0000002516522022__DEFAULT_MAX_REPORT_VALUE)|
|void|[setReportType](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/datareportmodel-0000001228948625#ZH-CN_TOPIC_0000002516522022__setReportType-int-)(int reportType) 设置订阅模式|
|void|[setReportValue](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/datareportmodel-0000001228948625#ZH-CN_TOPIC_0000002516522022__setReportValue-int-)(int reportValue) 设置上报值|

|Methods inherited from class com.huawei.hihealth.[CommonParam](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/commonparam-0000001183948980)|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|[getBoolean](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/commonparam-0000001183948980#ZH-CN_TOPIC_0000002516362084__getBoolean-java_lang_String-), [getDouble](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/commonparam-0000001183948980#ZH-CN_TOPIC_0000002516362084__getDouble-java_lang_String-), [getInt](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/commonparam-0000001183948980#ZH-CN_TOPIC_0000002516362084__getInt-java_lang_String-), [getString](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/commonparam-0000001183948980#ZH-CN_TOPIC_0000002516362084__getString-java_lang_String-), [putBoolean](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/commonparam-0000001183948980#ZH-CN_TOPIC_0000002516362084__putBoolean-java_lang_String-boolean-), [putDouble](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/commonparam-0000001183948980#ZH-CN_TOPIC_0000002516362084__putDouble-java_lang_String-double-), [putInt](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/commonparam-0000001183948980#ZH-CN_TOPIC_0000002516362084__putInt-java_lang_String-int-), [putString](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/commonparam-0000001183948980#ZH-CN_TOPIC_0000002516362084__putString-java_lang_String-java_lang_String-)|

|Methods inherited from class java.lang.Object|
|:------------------------------------------------------------------------|
|equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait|

|Methods inherited from interface android.os.Parcelable|
|:-----------------------------------------------------|
|describeContents, writeToParcel|

## Field Detail

### REPORT_PARAM_SEPARATOR

public static final java.lang.String REPORT_PARAM_SEPARATOR
参数间隔标识

**See Also:**

[Constant Field Values](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/constant-values-0000001052541631#ZH-CN_TOPIC_0000002547961913__com_huawei_hihealth_DataReportModel_REPORT_PARAM_SEPARATOR)

### DEFAULT_MAX_REPORT_VALUE

public static final int DEFAULT_MAX_REPORT_VALUE
最大上报值的上限

**See Also:**

[Constant Field Values](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/constant-values-0000001052541631#ZH-CN_TOPIC_0000002547961913__com_huawei_hihealth_DataReportModel_DEFAULT_MAX_REPORT_VALUE)

## Constructor Detail

### DataReportModel

public DataReportModel(int dataType, int reportType)
根据数据类型、订阅模式构造数据上报模型

**Parameters:**

|Parameter Name|Parameter Description|
|:-------------|:--------------------|
|dataType|数据类型|
|reportType|上报类型|

### DataReportModel

public DataReportModel(int dataType, int reportType, int reportValue)
根据数据类型、订阅模式、上报值构造数据上报模型

**Parameters:**

|Parameter Name|Parameter Description|
|:-------------|:--------------------|
|dataType|数据类型|
|reportType|上报类型|
|reportValue|上报值|

### DataReportModel

public DataReportModel(int dataType, int reportType, int reportValue, int maxReportValue)
根据数据类型、订阅模式、上报值、最大上报值构造数据上报模型

**Parameters:**

|Parameter Name|Parameter Description|
|:-------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|dataType|数据类型|
|reportType|上报类型|
|reportValue|上报值|
|maxReportValue|最大上报值，若上报值超过最大上报值则不上报，默认为[DataReportModel.DEFAULT_MAX_REPORT_VALUE](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/datareportmodel-0000001228948625#ZH-CN_TOPIC_0000002516522022__DEFAULT_MAX_REPORT_VALUE)|

## Method Detail

### getDataType

public int getDataType()
获取数据类型

**Returns:**

数据类型

### setDataType

public void setDataType(int dataType)
设置数据类型

**Parameters:**

|Parameter Name|Parameter Description|
|:-------------|:--------------------|
|dataType|数据类型|

### getReportType

public int getReportType()
获取订阅模式

**Returns:**

订阅模式

### setReportType

public void setReportType(int reportType)
设置订阅模式

**Parameters:**

|Parameter Name|Parameter Description|
|:-------------|:--------------------|
|reportType|订阅模式|

### getReportValue

public int getReportValue()
获取上报值

**Returns:**

上报值

### setReportValue

public void setReportValue(int reportValue)
设置上报值

**Parameters:**

|Parameter Name|Parameter Description|
|:-------------|:--------------------|
|reportValue|上报值|

### getMaxReportValue

public int getMaxReportValue()
获取最大上报值

**Returns:**

最大上报值

### setMaxReportValue

public void setMaxReportValue(int maxReportValue)
设置最大上报值，若上报值超过最大上报值则不上报，默认为[DataReportModel.DEFAULT_MAX_REPORT_VALUE](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/datareportmodel-0000001228948625#ZH-CN_TOPIC_0000002516522022__DEFAULT_MAX_REPORT_VALUE)

**Parameters:**

|Parameter Name|Parameter Description|
|:-------------|:--------------------|
|maxReportValue|最大上报值|

