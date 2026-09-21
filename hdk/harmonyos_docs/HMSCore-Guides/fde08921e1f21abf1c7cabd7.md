---
name: document/cn/HMSCore-Guides/extended-obtaining-real-time-heart-data-0000001050163997
title: 获取实时心率数据
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/extended-obtaining-real-time-heart-data-0000001050163997
---

# 获取实时心率数据

使用华为穿戴设备或来自华为运动健康App"设备 > 添加设备"中支持的心率设备测量心率，对正在测量的数据实时监控。回调频率：约5秒一次（以返回结果中携带的时间采样点为准）。
> 说明
>
> 华为穿戴设备及心率设备已连接华为运动健康App，设备上的实时数据会自动同步到华为运动健康App，应用可以实时读取该数据，长时间使用可能导致设备功耗过高，请及时关闭

查询这些数据前，需要向华为申请开通权限，并获取用户授权，否则接口将调用失败。

|数据开放类型|API 接口|需[获取用户授权](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/extended-requesting-user-authorization-0000001071733944)的权限|需向华为申请开通的权限 （参见[申请 Health Service Kit 服务](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/extended-apply-kitservice-0000001211703555)）|
|:---------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|
|开始获取实时心率数据|[startReadingHeartRate](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/hihealthdatastore-0000001071549459#ZH-CN_TOPIC_0000002547961909__startReadingHeartRate-android_content_Context-com_huawei_hihealthkit_data_store_HiRealTimeListener-)|[HEALTHKIT_EXTEND_REALTIME_HEART_READ](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/hihealthextendscope-0000001071609519#ZH-CN_TOPIC_0000002516362106__HEALTHKIT_EXTEND_REALTIME_HEART_READ)|实时心脏数据读权限|
|停止获取实时心率数据|[stopReadingHeartRate](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/hihealthdatastore-0000001071549459#ZH-CN_TOPIC_0000002547961909__stopReadingHeartRate-android_content_Context-com_huawei_hihealthkit_data_store_HiRealTimeListener-)|[HEALTHKIT_EXTEND_REALTIME_HEART_READ](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/hihealthextendscope-0000001071609519#ZH-CN_TOPIC_0000002516362106__HEALTHKIT_EXTEND_REALTIME_HEART_READ)|实时心脏数据读权限|
[**表1**获取实时心率数据所需权限]

## 开始获取实时心率数据

1. 调用 [HiHealthDataStore](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/hihealthdatastore-0000001071549459) 对象的 [startReadingHeartRate](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/hihealthdatastore-0000001071549459#ZH-CN_TOPIC_0000002547961909__startReadingHeartRate-android_content_Context-com_huawei_hihealthkit_data_store_HiRealTimeListener-) 方法，开始获取实时心率数据。
2. 通过请求参数 [HiRealTimeListener](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/hirealtimelistener-0000001072307792) 对象，返回查询结果 。

   **示例代码**

   ```screen
   HiHealthDataStore.startReadingHeartRate(context, new HiRealTimeListener() {
       @Override  
       public void onResult(int state) { 
           // 获取实时心率数据结果   
           Log.i(TAG,"ReadingHeartRate onResult state: " + state);  
           if (state == HiHealthError.SUCCESS) {
               // 获取实时心率数据成功
               Log.i(TAG, "Start reading heart rate succeeded");
           } else if (state == HiHealthError.ERR_HMS_UNAVAILABLE_VERSION) {
               // HMS Core版本过低
               Log.w(TAG, "HMS version is too early");
           } else if (state == HiHealthError.ERR_DEVICE_NOT_CONNECTED) {
               // 设备未连接
               Log.w(TAG, "Device not connected");
           } else if (state == HiHealthError.ERR_PERMISSION_EXCEPTION) {
               // 授权失效
               Log.w(TAG, "Permission denied");
           } else if (state == HiHealthError.ERR_PRIVACY_USER_DENIED) {
               // 未同意运动健康隐私协议
               Log.w(TAG, "Privacy user denied");
           } else if (state == HiHealthError.ERR_NETWORK) {
               // 网络异常
               Log.w(TAG, "Network request failed");
           } else if (state == HiHealthError.ERR_BETA_SCOPE_EXCEPTION) {
               // 测试权限的用户数量超过限制
               Log.w(TAG, "Beta scope permission denied");
           } else {
               // 其他错误，建议提示调用失败
               Log.w(TAG, "Other error, invoking method failed");
           }
       }

       @Override
       public void onChange(int resultCode, String value) { 
           // 获取实时心率变化回调   
           Log.i(TAG,"startReadingHeartRate onChange resultCode: "+ resultCode +" value: "+value);     
           if (resultCode == HiHealthError.SUCCESS) {
               try {            
                   JSONObject jsonObject = new JSONObject(value);            
                   Log.i(TAG, "hr_info : " + jsonObject.getInt("hr_info"));            
                   Log.i(TAG, "time_info : " + jsonObject.getLong("time_info"));    
                   Log.i(TAG, "heartRateCredibility : " + jsonObject.getInt("heartRateCredibility")); 
               } catch (JSONException e) {            
                   Log.e(TAG, "JSONException e" + e.getMessage());       
               }    
           } else if (resultCode == HiHealthError.ERR_DEVICE_EXCEPTION) {
               // 读取数据失败，如：设备佩戴未正确佩戴
               Log.w(TAG, "Device exception");
           } else {
               // 其他错误，建议提示调用失败
               Log.w(TAG, "Unknown error, failed to obtain data");
           }
       }
   });
   ```

   |参数名称|参数类型|参数描述|可选选项|
   |:-----------------|:-----------------|:--------|:----|
   |hiRealTimeListener|HiRealTimeListener|实时心率数据获取器|必选(M)|
   [**表2**请求参数]

   |参数名称|参数类型|参数描述|可选选项|
   |:---------|:-----|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----|
   |resultCode|int|处理结果码 * 0：成功 * 其他：参见[错误码](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/extended-errocode-0000001053256958)|必选(M)|
   |state|int|开启获取结果 * 0：成功 * 其他失败|必选(M)|
   |value|String|实时心率数据JSON字符串 * int hri_info(信号质量指数， 已废弃，不建议使用) * int hrsqi_info(心率间隔，已废弃，不建议使用) * int hr_info(心率，单位为bpm) * int time_info(该次心率值测量时对应的时间) * int heartRateCredibility(心率置信度)：取值范围：-3，-1，0，1，2，3 * 3：心率置信度高 * 2：心率置信度一般 * 1：心率置信度较差 * 0：心率置信度差 * -1：心率置信度极差不可用 * -3：设备不支持心率置信度 举例：{"heartRateCredibility":0,"hri_info":0,"hr_info":69,"hrsqi_info":0,"time_info":1591361991000}|必选(M)|
   [**表3**响应参数]

## 停止获取实时心率数据

1. 调用 [HiHealthDataStore](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/hihealthdatastore-0000001071549459) 对象的 [stopReadingHeartRate](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/hihealthdatastore-0000001071549459#ZH-CN_TOPIC_0000002547961909__stopReadingHeartRate-android_content_Context-com_huawei_hihealthkit_data_store_HiRealTimeListener-) 方法，停止获取实时心率数据。
2. 通过请求参数 [HiRealTimeListener](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/hirealtimelistener-0000001072307792) 对象，返回查询结果。

   ```screen
   HiHealthDataStore.stopReadingHeartRate(context, new HiRealTimeListener() {
       @Override  
       public void onResult(int state) { 
           // 停止获取实时心率接口结果   
           Log.i(TAG,"stopReadingHeartRate onResult state:"+state);  
           if (state == HiHealthError.SUCCESS) {
               // 停止获取实时心率数据成功
               Log.i(TAG, "Stop reading heart rate succeeded");
           } else if (state == HiHealthError.ERR_DEVICE_NOT_CONNECTED) {
               // 设备未连接
               Log.w(TAG, "Device not connected");
           } else if (state == HiHealthError.ERR_PRIVACY_USER_DENIED) {
               // 未同意运动健康隐私协议
               Log.w(TAG, "Privacy user denied");
           } else {
               // 其他错误，建议提示调用失败
               Log.w(TAG, "Other error, invoking method failed");
           }
       }

       @Override
       public void onChange(int resultCode, String value) { 
           // 此时该接口不会被调用         
       }
   });
   ```

   |参数名称|参数类型|参数描述|可选选项|
   |:-----------------|:-----------------|:--------|:----|
   |hiRealTimeListener|HiRealTimeListener|实时心率数据获取器|必选(M)|
   [**表4**请求参数]

   |参数名称|参数类型|参数描述|可选选项|
   |:----|:---|:-------------------|:----|
   |state|int|停止获取结果 * 0：成功 * 其他失败|必选(M)|
   [**表5**响应参数]

