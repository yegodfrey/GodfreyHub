---
name: document/cn/huaweihealth-Guides/subscribe-daily-health-update-event-0000002376715109
title: 订阅日常活动数据更新
uri: https://developer.huawei.com/consumer/cn/doc/huaweihealth-Guides/subscribe-daily-health-update-event-0000002376715109
---

# 订阅日常活动数据更新

订阅和取消订阅穿戴设备的日常活动数据更新事件。订阅成功后，当穿戴设备判断达到日常活动数据更新条件后，上报日常活动数据更新事件。取消订阅后，不再上报日常活动数据更新事件。
> 说明
>
> * 同一设备仅支持一个订阅时间段，此接口重复调用时会覆盖前一次的订阅信息。
> * 只有在订阅时间范围内产生的数据更新事件会上报给行业App。
> * 对于HUAWEI WATCH H5546、HUAWEI WATCH H7546、HUAWEI WATCH H7556、HUAWEI Band HA590、HUAWEI Band HA5A0、HUAWEI WATCH H5556、HUAWEI WATCH H5756、HUAWEI WATCH H3540以及HUAWEI WATCH H9D20设备每小时首次站立状态改变会上报数据更新事件。
> * 只要设备侧判断达到以下四个条件中的任意一个，则会上报数据更新事件，同时把四个条件的统计数值重置为0：
>   * 步数达到500步
>   * 距离达到1000米
>   * 活动时间达到1小时（支持[智能手环](https://developer.huawei.com/consumer/cn/doc/huaweihealth-Guides/supported-devices-0000002510376967#ZH-CN_TOPIC_0000002647924354__li19369195911148)、[轻量级智能穿戴设备](https://developer.huawei.com/consumer/cn/doc/huaweihealth-Guides/supported-devices-0000002510376967#ZH-CN_TOPIC_0000002647924354__li1184517579555)以及HUAWEI WATCH H7546、HUAWEI WATCH H7556）
>   * 卡路里消耗达到100千卡

1. 调用[IndustryWear](https://developer.huawei.com/consumer/cn/doc/health-References/industrywear-0000001434945524)中的[getDeviceManageClient](https://developer.huawei.com/consumer/cn/doc/health-References/industrywear-0000001434945524#ZH-CN_TOPIC_0000002678163945__getDeviceManageClient-android_content_Context-)方法，获取[DeviceManageClient](https://developer.huawei.com/consumer/cn/doc/health-References/devicemanageclient-0000001485104693)对象。
2. 参见[获取设备列表](https://developer.huawei.com/consumer/cn/doc/huaweihealth-Guides/get-device-list-0000002372216449)章节，获取已配对的穿戴设备列表，并从设备列表中选定需要操作的设备，获取设备Id。
3. 构造用于订阅或取消订阅日常活动数据更新事件的JSON格式参数。

   ```screen
   {
       "item": "dailyHealthUpdateEvent",
       "value":
       {
           "onDutyTime": "0800",
           "offDutyTime": "2200"
       }
   }
   ```

   |参数|取值|含义|
   |:----------|:---------------------------------------------------------------------------|:------|
   |onDutyTime|格式为HHmm的24小时制的时刻字符串，前两个字符代表小时，后两个字符代表分钟，最大为"2400"，最小为"0000"，例如："0800"、"2000"|订阅开始时间。|
   |offDutyTime|格式为HHmm的24小时制的时刻字符串，前两个字符代表小时，后两个字符代表分钟，最大为"2400"，最小为"0000"，例如："0800"、"2000"|订阅结束时间。|
   [**表1**订阅日常活动数据更新事件参数说明]

   > 说明
   > * offDutyTime小于onDutyTime时，说明为跨天的订阅时间。

4. 调用[subscribe](https://developer.huawei.com/consumer/cn/doc/health-References/devicemanageclient-0000001485104693#ZH-CN_TOPIC_0000002648084250__subscribe-java_lang_String-java_lang_String-com_huawei_health_industry_client_callback_ServiceCallback-)方法订阅设备日常活动数据更新事件。

   ```screen
   // 获取DeviceManageClient对象
   DeviceManageClient manageClient = IndustryWear.getDeviceManageClient(this);

   // 参考https://developer.huawei.com/consumer/cn/doc/huaweihealth-Guides/get-device-list-0000002372216449获取设备列表后选择需要操作的设备，获取设备Id
   String deviceId = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";

   // 构造用于订阅或取消订阅日常活动数据的JSON格式的入参数据
   JSONObject jsonObject = new JSONObject();
   try {
       JSONObject valueObject = new JSONObject();
       valueObject.put("onDutyTime", "0800");
       valueObject.put("offDutyTime", "2200");
       jsonObject.put("item", "dailyHealthUpdateEvent");
       jsonObject.put("value", valueObject);
   } catch (JSONException e) {
       e.printStackTrace();
   }

   // 调用subscribe方法订阅设备日常活动数据更新事件
   ServiceCallback serviceCallback = new ServiceCallback() {
       @Override
       public void onResult(int statusCode, String result) {
           // 处理订阅返回信息
       }
   }
   manageClient.subscribe(deviceId, jsonObject.toString(), serviceCallback);
   ```

   |返回值|取值|含义|
   |:---------|:-----------|:---------------------------------------------------------------------------------------------------------------------|
   |statusCode|0、2、3、6、7、10|接口调用结果返回码，参见[返回码](https://developer.huawei.com/consumer/cn/doc/huaweihealth-Guides/errorcode-0000002372870401)中的通用返回码。|
   |result|-|订阅成功时返回订阅id，订阅失败时返回错误信息，日常活动数据更新时返回空字符串。|
   [**表2**ServiceCallback返回值]

   > 说明
   >
   > 订阅日常活动数据更新事件的ServiceCallback不仅会返回订阅操作的结果，另外还会返回后续订阅的事件上报时的数据。

5. 订阅操作的结果和设备日常活动数据更新事件变化信息在ServiceCallback的onResult方法中处理。订阅操作成功时返回statusCode为0，result数据中包含本次订阅对应的subscribeId；失败时statusCode返回错误码，result返回对应错误信息；设备日常活动数据更新事件变化时返回statusCode为10，result为空字符串。

   ```screen
   result样例：
   {
       "subscribeId":"xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
   }
   ```

   |返回值|取值|含义|
   |:----------|:--------|:----|
   |subscribeId|长度为36的字符串|订阅id。|
   [**表3**result返回值]

6. 需要取消订阅时，需要构造用于取消订阅日常活动数据的JSON格式的入参数据，item和value都需要和订阅时保持一致。

   ```screen
   {
       "item": "dailyHealthUpdateEvent"，
       "value":
       {
           "onDutyTime": "0800",
           "offDutyTime": "2200"
       }
   }
   ```

7. 调用[unSubscribe](https://developer.huawei.com/consumer/cn/doc/health-References/devicemanageclient-0000001485104693#ZH-CN_TOPIC_0000002648084250__unSubscribe-java_lang_String-java_lang_String-com_huawei_health_industry_client_callback_ServiceCallback-)方法取消订阅日常活动数据更新事件。

   ```screen
   // 调用unSubscribe方法取消订阅日常活动数据更新事件
   manageClient.unSubscribe(deviceId, jsonObject.toString(), serviceCallback);
   ```

   > 说明
   >
   > 取消订阅成功条件：
   > * 取消订阅时要求输入的解订阅参数和订阅时的参数一致。
   > * 取消订阅时传入的ServiceCallback，要求和订阅时传入的ServiceCallback为同一个对象。

