---
name: document/cn/HMSCore-References/hirealtimelistener-0000001072307792
title: HiRealTimeListener
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-References/hirealtimelistener-0000001072307792
---

# HiRealTimeListener

|-------------------------------------------|
|``` public interface HiRealTimeListener ```|

实时数据回调

Since:
2019-06-22  

#### Method Summary

|Modifier and Type|Method and Description|
|:----------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|void|[onChange](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/hirealtimelistener-0000001072307792#ZH-CN_TOPIC_0000002548041919__onChange-int-java_lang_String-)(int errCode, java.lang.String value) 实时变化数据回调方法|
|void|[onResult](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/hirealtimelistener-0000001072307792#ZH-CN_TOPIC_0000002548041919__onResult-int-)(int errCode) 结果回调方法|

#### Method Detail

#### onResult

void onResult(int errCode)
结果回调方法

Parameters:  

|Parameter Name|Parameter Description|
|:-------------|:----------------------------------------------------------------------------------------------------------------------------------|
|errCode|错误码0：成功，其他：失败。错误码定义见[HiHealthError](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/hihealtherror-0000001071707423)|

<br />

#### onChange

void onChange(int errCode, java.lang.String value)
实时变化数据回调方法

Parameters:  

|Parameter Name|Parameter Description|
|:-------------|:--------------------|
|errCode|错误码0：成功，其他：失败。|
|value|实时测量数据，JSON字串。|

<br />

