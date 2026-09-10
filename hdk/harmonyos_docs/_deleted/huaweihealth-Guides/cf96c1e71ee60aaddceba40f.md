---
name: document/cn/huaweihealth-Guides/set-sedentary-reminder-switch-0000002338300780
title: 设置久坐提醒开关
uri: https://developer.huawei.com/consumer/cn/doc/huaweihealth-Guides/set-sedentary-reminder-switch-0000002338300780
---

# 设置久坐提醒开关

设置穿戴设备的久坐提醒开关状态。开启久坐提醒开关后，在每天的8:00到21:00，用户每久坐一小时穿戴设备会产生久坐活动提醒。关闭久坐提醒开关后，穿戴设备不会产生久坐活动提醒。

1. 调用[IndustryWear](https://developer.huawei.com/consumer/cn/doc/health-References/industrywear-0000001434945524)中的[getDeviceManageClient](https://developer.huawei.com/consumer/cn/doc/health-References/industrywear-0000001434945524#ZH-CN_TOPIC_0000002678163945__getDeviceManageClient-android_content_Context-)方法，获取[DeviceManageClient](https://developer.huawei.com/consumer/cn/doc/health-References/devicemanageclient-0000001485104693)对象。
2. 参见[获取设备列表](https://developer.huawei.com/consumer/cn/doc/huaweihealth-Guides/get-device-list-0000002372216449)章节，获取已配对的穿戴设备列表，并从设备列表中选定需要操作的设备，获取设备Id。
3. 构造用于设置久坐提醒开关的JSON格式参数。

   <br />

   ```
   {
       "settingKey": "sedentaryReminderSwitch",
       "settingValue": 0
   }
   ```

   |参数|取值|含义|
   |:-----------|:----------------------|:--------|
   |settingKey|sedentaryReminderSwitch|久坐提醒开关键值。|
   |settingValue|0|关闭久坐活动提醒。|
   |settingValue|1|开启久坐活动提醒。|
   [表1 设置久坐提醒开关参数]

   <br />

4. 调用[set](https://developer.huawei.com/consumer/cn/doc/health-References/devicemanageclient-0000001485104693#ZH-CN_TOPIC_0000002648084250__set-java_lang_String-java_lang_String-com_huawei_health_industry_client_callback_ServiceCallback-)方法设置久坐提醒开关。

   <br />

   ```
   // 获取DeviceManageClient对象
   DeviceManageClient manageClient = IndustryWear.getDeviceManageClient(this);

   // 参考获取设备列表获取设备列表后选择需要操作的设备，获取设备Id
   String deviceId = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";

   // 构造用于设置久坐提醒开关的JSON格式的入参数据
   JSONObject jsonObject = new JSONObject();
   try {
       jsonObject.put("settingKey", "sedentaryReminderSwitch");
       jsonObject.put("settingValue", 1);
   } catch (JSONException e) {
       e.printStackTrace();
   }

   // 调用set方法设置久坐提醒开关
   manageClient.set(deviceId, jsonObject.toString(), new ServiceCallback() {
       @Override
       public void onResult(int statusCode, String result) {
           // 对返回值的处理
       }
   });
   ```

   |返回值|取值|含义|
   |:---------|:------------|:---------------------------------------------------------------------------------------------------------------------|
   |statusCode|0、2、3、4、5、6、7|接口调用结果返回码，参见[返回码](https://developer.huawei.com/consumer/cn/doc/huaweihealth-Guides/errorcode-0000002372870401)中的通用返回码。|
   |result|-|接口调用失败时返回错误信息。|
   [表2 ServiceCallback返回值]

   <br />

