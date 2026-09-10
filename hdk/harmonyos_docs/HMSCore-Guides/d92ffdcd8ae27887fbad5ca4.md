---
name: document/cn/HMSCore-Guides/harmonyos-obtaining-real-time-heart-data-0000001199439606
title: 获取实时心率数据
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/harmonyos-obtaining-real-time-heart-data-0000001199439606
---

# 获取实时心率数据

使用华为穿戴设备或来自华为运动健康App"设备 \> 添加设备"中支持的心率设备测量心率，对正在测量的数据实时监控。回调频率：约5秒一次（以返回结果中携带的时间采样点为准）。  
![](https://media:901788166637940823)  
* 目前该功能只在手机上支持，智能表不支持。
* 华为穿戴设备及心率设备已连接华为运动健康App，设备上的实时数据会自动同步到华为运动健康App，第三方应用可以实时读取该数据。

查询这些数据前，需要向华为申请开通权限，并获取用户授权，否则接口将调用失败。  

|数据开放类型|API接口|需向用户请求授权的权限|需向华为申请开通的权限 （参见[申请Health Service Kit服务](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/harmonyos-apply-kitservice-0000001194699502)）|
|:---------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------|
|开始获取实时心率数据|[startReadingHeartRate](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/harmonyos-obtaining-real-time-heart-data-0000001250273423#section107801752616)|https://www.huawei.com/healthkit/extend/realtimeheart.read|实时心脏数据读权限 <br />|
|结束获取实时心率数据|[stopReadingHeartRate](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/harmonyos-obtaining-real-time-heart-data-0000001250273423#section193912512611)|https://www.huawei.com/healthkit/extend/realtimeheart.read|实时心脏数据读权限 <br />|
[表1 获取实时心率数据所需权限]

#### 开始获取实时心率数据

调用[startReadingHeartRate](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/harmonyos-obtaining-real-time-heart-data-0000001250273423#section107801752616)方法，开始获取实时心率数据。示例代码如下：

```
import {HMSHealthKit} from '@hw-hmscore/hms-js-health'
var heartRateData;
HMSHealthKit.startReadingHeartRate((callback) => {
    if (heartRateData?.data === callback?.data) {
        return;
    } else {
        heartRateData = callback;
    }
    // 心率实时回调
    console.info("startHeartRate callback: " + JSON.stringify(heartRateData.data))
}, this.$app.$def.hmsData.eventCallbackMap);
```

![](https://media:901788166637965824)  
上面的代码片段中用到this.$app.$def.hmsData.eventCallbackMap为全局事件回调集合，定义方法请参照[初始化模块](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/harmonyos-integration-hms-core-sdk-0000001226760449#section159413421451)。  

|参数名称|参数类型|参数描述|可选选项|
|:-------|:---|:---------|:----|
|callback|-|实时心率数据实时回调|必选(M)|
[表2 请求参数]

|参数名称|监听成功/失败|参数描述|
|:---|:------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|data|失败|返回错误码，请参见：[错误码](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/harmonyos-error-codes-0000001181292206)。|
|data|成功|实时心率数据JSON字符串 * int hr_info(心率，单位为bpm) * int time_info(该次心率值测量时对应的时间) * int heartRateCredibility(心率置信度)：取值范围：-3，-1，0，1，2，3 * 3：心率置信度高 * 2：心率置信度一般 * 1：心率置信度较差 * 0：心率置信度差 * -1：心率置信度极差不可用 * -3：设备不支持心率置信度 举例：{"heartRateCredibility":0,hr_info":69,"time_info":1591361991000}|
[表3 响应参数]

#### 结束获取实时心率数据

调用[stopReadingHeartRate](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/harmonyos-obtaining-real-time-heart-data-0000001250273423#section193912512611)方法，结束获取实时心率数据。示例代码如下：

```
import {HMSHealthKit} from '@hw-hmscore/hms-js-health'
HMSHealthKit.stopReadingHeartRate().then((result) => {
    // 调用成功
    console.info("stopReadingHeartRate success: " + JSON.stringify(result.data))
}).catch((error) => {
    // 调用失败
    console.info("stopReadingHeartRate fail: " + JSON.stringify(error))
});
```

|参数名称|参数类型|参数描述|
|:-----|:-----|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|result|String|停止获取实时心率回调JSON体。 * errorCode：请参见：[错误码](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/harmonyos-error-codes-0000001181292206)。 * errorMsg：错误信息。 * data：接口调用结果。|
[表4 响应参数]

