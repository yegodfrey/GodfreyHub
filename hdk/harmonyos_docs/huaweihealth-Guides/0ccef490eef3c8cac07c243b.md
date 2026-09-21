---
name: document/cn/huaweihealth-Guides/set-sync-calendar-switch-0000002418368209
title: 设置日历同步开关
uri: https://developer.huawei.com/consumer/cn/doc/huaweihealth-Guides/set-sync-calendar-switch-0000002418368209
---

# 设置日历同步开关

设置穿戴设备的日历同步开关状态。开启日历同步开关后，在穿戴设备连接成功、手机日历变化和手机日期变化时会自动同步日历到穿戴设备。关闭日历同步开关后，不再自动同步日历到穿戴设备。 注意
>
> 日历同步需要日历权限，参见[申请日历权限](https://developer.huawei.com/consumer/cn/doc/huaweihealth-Guides/add-permission-0000002338138528#ZH-CN_TOPIC_0000002647924382__li8752254164617)。

> 说明
>
> 开启日历同步开关后，具备日程创建功能的[智能穿戴设备](https://developer.huawei.com/consumer/cn/doc/huaweihealth-Guides/supported-devices-0000002510376967#ZH-CN_TOPIC_0000002647924354__li165266350557)可将日程同步至终端设备（例如手机等）。

1. 调用[IndustryWear](https://developer.huawei.com/consumer/cn/doc/health-References/industrywear-0000001434945524)中的[getDeviceManageClient](https://developer.huawei.com/consumer/cn/doc/health-References/industrywear-0000001434945524#ZH-CN_TOPIC_0000002678163945__getDeviceManageClient-android_content_Context-)方法，获取[DeviceManageClient](https://developer.huawei.com/consumer/cn/doc/health-References/devicemanageclient-0000001485104693)对象。
2. 参见[获取设备列表](https://developer.huawei.com/consumer/cn/doc/huaweihealth-Guides/get-device-list-0000002372216449)章节，获取已配对的穿戴设备列表，并从设备列表中选定需要操作的设备，获取设备Id。
3. 构造用于设置日历同步开关的JSON格式参数。

   ```screen
   {
       "settingKey": "syncCalendarSwitch",
       "settingValue": 1
   }
   ```

   |参数|取值|含义|
   |:-----------|:-----------------|:--------|
   |settingKey|syncCalendarSwitch|日历同步开关键值。|
   |settingValue|0|关闭日历同步。|
   |settingValue|1|开启日历同步。|
   [**表1**设置日历同步开关参数]

4. 调用[set](https://developer.huawei.com/consumer/cn/doc/health-References/devicemanageclient-0000001485104693#ZH-CN_TOPIC_0000002648084250__set-java_lang_String-java_lang_String-com_huawei_health_industry_client_callback_ServiceCallback-)方法设置日历同步开关。

   ```screen
   // 获取DeviceManageClient对象
   DeviceManageClient manageClient = IndustryWear.getDeviceManageClient(this);

   // 参考https://developer.huawei.com/consumer/cn/doc/huaweihealth-Guides/get-device-list-0000002372216449获取设备列表后选择需要操作的设备，获取设备Id
   String deviceId = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";

   // 构造用于设置日历同步开关的JSON格式的入参数据
   JSONObject jsonObject = new JSONObject();
   try {
       jsonObject.put("settingKey", "syncCalendarSwitch");
       jsonObject.put("settingValue", 1);
   } catch (JSONException e) {
       e.printStackTrace();
   }

   // 调用set方法设置日历同步开关
   manageClient.set(deviceId, jsonObject.toString(), new ServiceCallback() {
       @Override
       public void onResult(int statusCode, String result) {
           // 对返回值的处理
       }
   });
   ```

   |返回值|取值|含义|
   |:---------|:----------------|:---------------------------------------------------------------------------------------------------------------------|
   |statusCode|0、1、2、3、6、7、26、30|接口调用结果返回码，参见[返回码](https://developer.huawei.com/consumer/cn/doc/huaweihealth-Guides/errorcode-0000002372870401)中的通用返回码。|
   |result|-|接口调用失败时返回错误信息。|
   [**表2**ServiceCallback返回值]

