---
name: document/cn/huaweihealth-Guides/query-notification-push-switch-0000002372259073
title: 查询通知栏消息推送开关
uri: https://developer.huawei.com/consumer/cn/doc/huaweihealth-Guides/query-notification-push-switch-0000002372259073
---

# 查询通知栏消息推送开关

查询终端设备（例如：手机等）通知栏消息推送到穿戴设备的开关状态，穿戴设备首次连接后默认关闭通知栏消息推送开关。

1. 调用[IndustryWear](https://developer.huawei.com/consumer/cn/doc/health-References/industrywear-0000001434945524)中的[getDeviceManageClient](https://developer.huawei.com/consumer/cn/doc/health-References/industrywear-0000001434945524#ZH-CN_TOPIC_0000002678163945__getDeviceManageClient-android_content_Context-)方法，获取[DeviceManageClient](https://developer.huawei.com/consumer/cn/doc/health-References/devicemanageclient-0000001485104693)对象。
2. 参见[获取设备列表](https://developer.huawei.com/consumer/cn/doc/huaweihealth-Guides/get-device-list-0000002372216449)章节，获取已配对的穿戴设备列表，并从设备列表中选定需要操作的设备，获取设备Id。
3. 构造用于查询通知栏消息推送开关的JSON参数。

   <br />

   ```
   {
       "item": "notificationPushSwitch"
   }
   ```

   <br />

4. 调用[query](https://developer.huawei.com/consumer/cn/doc/health-References/devicemanageclient-0000001485104693#ZH-CN_TOPIC_0000002648084250__query-java_lang_String-java_lang_String-com_huawei_health_industry_client_callback_ServiceCallback-)方法查询通知栏消息推送开关。

   <br />

   ```
   // 获取DeviceManageClient对象
   DeviceManageClient deviceManageClient = IndustryWear.getDeviceManageClient(this);

   // 参考获取设备列表获取设备列表后选择需要操作的设备，获取设备Id
   String deviceId = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";

   // 构造用于查询通知栏消息推送开关的JSON格式的入参数据
   JSONObject jsonObject = new JSONObject();
   try {
       jsonObject.put("item", "notificationPushSwitch");
   } catch (JSONException e) {
       e.printStackTrace();
   }

   // 调用query方法查询通知栏消息推送开关
   deviceManageClient.query(deviceId, jsonObject.toString(), new ServiceCallback() {
       @Override
       public void onResult(int statusCode, String result) {
           // 处理查询结果
       }
   });
   ```

   |返回值|取值|含义|
   |:---------|:----------|:---------------------------------------------------------------------------------------------------------------------|
   |statusCode|0、1、2、3、6、7|接口调用结果返回码，参见[返回码](https://developer.huawei.com/consumer/cn/doc/huaweihealth-Guides/errorcode-0000002372870401)中的通用返回码。|
   |result|-|接口调用成功时返回通知栏消息推送开关值，失败时返回错误信息。|
   [表1 ServiceCallback返回值]

   <br />

5. 接口调用后返回的信息在ServiceCallback的onResult方法中处理，查询成功时返回result数据中包含通知栏消息推送开关。

   <br />

   ```
   result样例：
   {
       "notificationPushSwitch": 1
   }
   ```

   |返回值|取值|含义|
   |:---------------------|:-|:----------------|
   |notificationPushSwitch|0|通知栏消息推送开关关闭（默认值）。|
   |notificationPushSwitch|1|通知栏消息推送开关开启。|
   [表2 result返回值]

   <br />

