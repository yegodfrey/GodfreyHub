---
name: document/cn/huaweihealth-Guides/query-device-dfx-log-0000002418288389
title: 获取穿戴设备日志
uri: https://developer.huawei.com/consumer/cn/doc/huaweihealth-Guides/query-device-dfx-log-0000002418288389
---

# 获取穿戴设备日志

当需要获取穿戴设备的日志用于问题定位或者辅助开发时，可以使用此接口收集穿戴设备的日志。
> 说明
>
> * 该接口仅支持收集[轻量级智能穿戴设备](https://developer.huawei.com/consumer/cn/doc/huaweihealth-Guides/supported-devices-0000002510376967#ZH-CN_TOPIC_0000002647924354__li1184517579555)和[智能手环](https://developer.huawei.com/consumer/cn/doc/huaweihealth-Guides/supported-devices-0000002510376967#ZH-CN_TOPIC_0000002647924354__li19369195911148)的日志。
> * 日志收集完成后，会被打包为zip格式并保存在特定目录下（接口会返回此路径）。
> * 收集到的设备日志为加密格式，需要进行解密才能查看日志内容。
> * 此接口仅支持同时进行一个收集任务，如当前有任务在进行，接口将会返回错误码11。
> 注意
>
> * 每次触发收集前都会先检查该目录下是否有存放超过七天的日志文件，存放超过七天的日志文件将会被删除。
> * 在完整获取设备穿戴日志后，该时间段的穿戴设备日志会从穿戴设备删除。

1. 调用[IndustryWear](https://developer.huawei.com/consumer/cn/doc/health-References/industrywear-0000001434945524)中的[getDeviceManageClient](https://developer.huawei.com/consumer/cn/doc/health-References/industrywear-0000001434945524#ZH-CN_TOPIC_0000002678163945__getDeviceManageClient-android_content_Context-)方法，获取[DeviceManageClient](https://developer.huawei.com/consumer/cn/doc/health-References/devicemanageclient-0000001485104693)对象。
2. 参见[获取设备列表](https://developer.huawei.com/consumer/cn/doc/huaweihealth-Guides/get-device-list-0000002372216449)章节，获取已配对的穿戴设备列表，并从设备列表中选定需要操作的设备，获取设备Id。
3. 构造用于获取穿戴设备日志的JSON格式参数。

   ```screen
   {
       "item": "dfxLog"
   }
   ```

4. 调用[query](https://developer.huawei.com/consumer/cn/doc/health-References/devicemanageclient-0000001485104693#ZH-CN_TOPIC_0000002648084250__query-java_lang_String-java_lang_String-com_huawei_health_industry_client_callback_ServiceCallback-)方法获取穿戴设备日志。

   ```screen
   // 获取DeviceManageClient对象
   DeviceManageClient manageClient = IndustryWear.getDeviceManageClient(this);

   // 参考https://developer.huawei.com/consumer/cn/doc/huaweihealth-Guides/get-device-list-0000002372216449获取设备列表后选择需要操作的设备，获取设备Id
   String deviceId = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";

   // 构造用于获取穿戴设备日志的JSON格式的入参数据
   JSONObject jsonObject = new JSONObject();
   try {
       jsonObject.put("item", "dfxLog");
   } catch (JSONException e) {
       e.printStackTrace();
   }

   // 调用query方法获取穿戴设备日志
   manageClient.query(deviceId, jsonObject.toString(), new ServiceCallback() {
       @Override
       public void onResult(int statusCode, String result) {
           // 处理查询结果
       }
   });
   ```

   |返回值|取值|含义|
   |:---------|:--------|:---------------------------------------------------------------------------------------------------------------------|
   |statusCode|0、4、11、30|接口调用结果返回码，参见[返回码](https://developer.huawei.com/consumer/cn/doc/huaweihealth-Guides/errorcode-0000002372870401)中的通用返回码。|
   |result|-|接口调用成功时返回日志获取的进度和结果，失败时返回错误信息。|
   [**表1**ServiceCallback返回值]

5. 接口调用后返回的信息在ServiceCallback的onResult方法中处理，查询成功时返回result数据中包含日志获取的进度和结果。

   ```screen
   result样例：
   {
       "progress": 10,   
       "logPath": ""
   }
   {
       "progress": 100,   
       "logPath":"\/data\/user\/0\/com.huawei.health.industry.demo\/files\/Luca-B102B_5.0.0.209(C00M04log)_20250715194952_Wearable.zip"
   }
   ```

   |返回值|取值|含义|
   |:-------|:---------|:----------------------------|
   |progress|int类型数据|日志收集进度，每五秒上报一次。|
   |logPath|String类型数据|当日志收集进度达到100%之后logPath返回日志路径。|
   [**表2**result返回值]

