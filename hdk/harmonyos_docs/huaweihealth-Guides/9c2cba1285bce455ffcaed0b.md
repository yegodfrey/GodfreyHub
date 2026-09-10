---
name: document/cn/huaweihealth-Guides/set-quick-replies-0000002418368205
title: 设置短信快捷回复信息
uri: https://developer.huawei.com/consumer/cn/doc/huaweihealth-Guides/set-quick-replies-0000002418368205
---

# 设置短信快捷回复信息

穿戴设备支持短信快捷回复功能，行业App可以通过本接口设置穿戴设备的短信快捷回复信息。设置完成后，当穿戴设备收到短信通知时，用户可以选择快捷回复内容进行回复。  
![](https://media:301785133834050286)  
* 建议在行业App与穿戴设备配对连接成功后，调用此接口给穿戴设备下发默认的短信快捷回复信息，以免影响此功能的正常使用。
* 调用此接口设置的短信快捷回复至少1条，以免影响此功能的正常使用。

1. 调用[IndustryWear](https://developer.huawei.com/consumer/cn/doc/health-References/industrywear-0000001434945524)中的[getDeviceManageClient](https://developer.huawei.com/consumer/cn/doc/health-References/industrywear-0000001434945524#ZH-CN_TOPIC_0000002678163945__getDeviceManageClient-android_content_Context-)方法，获取[DeviceManageClient](https://developer.huawei.com/consumer/cn/doc/health-References/devicemanageclient-0000001485104693)对象。
2. 参见[获取设备列表](https://developer.huawei.com/consumer/cn/doc/huaweihealth-Guides/get-device-list-0000002372216449)章节，获取已配对的穿戴设备列表，并从设备列表中选定需要操作的设备，获取设备Id。
3. 构造用于设置短信快捷回复信息的JSON格式参数。

   <br />

   ```
   {
     "settingKey": "quickReplies",
     "settingValue": [
       {
         "index": 0,
         "reply": "yes"
       },
       ...
       {
         "index": 5,
         "reply": "ok"
       }
     ]
   }
   ```

   |参数|取值|含义|
   |:-----------|:-----------------------------------|:-------------------------|
   |settingKey|quickReplies|短信快捷回复信息键值。|
   |settingValue|由index、reply组成的JSON数组，JSON数组，长度不大于15|短信快捷回复配置内容。|
   |index|整数，范围：\[0, 14\]|回复的消息索引(与设备上显示reply的顺序有关)。|
   |reply|String字符串，长度不大于36字节|回复的消息内容。|
   [表1 设置短信快捷回复信息参数]

   <br />

4. 调用[set](https://developer.huawei.com/consumer/cn/doc/health-References/devicemanageclient-0000001485104693#ZH-CN_TOPIC_0000002648084250__set-java_lang_String-java_lang_String-com_huawei_health_industry_client_callback_ServiceCallback-)方法设置短信快捷回复信息。

   <br />

   ```
   // 获取DeviceManageClient对象
   DeviceManageClient deviceManageClient = IndustryWear.getDeviceManageClient(this);

   // 参考获取设备列表获取设备列表后选择需要操作的设备，获取设备Id
   String deviceId = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";

   // 构建用于设置短信快捷回复的JSON格式的入参数据
   JSONObject jsonObject = new JSONObject();
   try {
       jsonObject.put("settingKey", "quickReplies");
       JSONArray valueArray = new JSONArray();

       JSONObject value1 = new JSONObject();
       value1.put("index", 0);
       value1.put("reply", "yes");
       valueArray.put(value1);

       JSONObject value2 = new JSONObject();
       value2.put("index", 1);
       value2.put("reply", "ok");
       valueArray.put(value2);

       jsonObject.put("settingValue", valueArray);
   } catch (JSONException e) {
       e.printStackTrace();
   }

   // 调用set接口设置短信快捷回复
   deviceManageClient.set(deviceId, jsonObject.toString(), new ServiceCallback() {
       @Override
       public void onResult(int statusCode, String result) {
           // 对返回值的处理
       }
   });
   ```

   |返回值|取值|含义|
   |:---------|:-----------|:---------------------------------------------------------------------------------------------------------------------|
   |statusCode|0、1、2、3、7、30|接口调用结果返回码，参见[返回码](https://developer.huawei.com/consumer/cn/doc/huaweihealth-Guides/errorcode-0000002372870401)中的通用返回码。|
   |result|-|接口调用失败时返回错误信息。|
   [表2 ServiceCallback返回值]

   <br />

