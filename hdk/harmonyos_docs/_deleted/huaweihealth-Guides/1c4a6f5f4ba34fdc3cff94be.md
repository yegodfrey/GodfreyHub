---
name: document/cn/huaweihealth-Guides/set-user-basic-info-0000002338298260
title: 设置用户基本信息
uri: https://developer.huawei.com/consumer/cn/doc/huaweihealth-Guides/set-user-basic-info-0000002338298260
---

# 设置用户基本信息

为提升穿戴设备的数据监测准确性，行业App可以通过本接口设置穿戴设备的用户基本信息。用户基本信息包含出生日期、性别、身高以及体重数据。  
![](https://media:301785133832231257)  
* 在用户没有自行设置过最大运动心率和心率区间的情况下，设置用户基本信息时会调用[设置最大运动心率](https://developer.huawei.com/consumer/cn/doc/huaweihealth-Guides/set-max-heart-rate-0000002372218949)将用户最大运动心率设置为默认值，默认值计算方法为：220 - 用户年龄，当计算的结果小于100时，默认值设置为100。
* 建议在穿戴设备首次连接后调用此接口配置用户基本信息，以确保穿戴设备监测数据的准确性。

1. 调用[IndustryWear](https://developer.huawei.com/consumer/cn/doc/health-References/industrywear-0000001434945524)中的[getDeviceManageClient](https://developer.huawei.com/consumer/cn/doc/health-References/industrywear-0000001434945524#ZH-CN_TOPIC_0000002678163945__getDeviceManageClient-android_content_Context-)方法，获取[DeviceManageClient](https://developer.huawei.com/consumer/cn/doc/health-References/devicemanageclient-0000001485104693)对象。
2. 参见[获取设备列表](https://developer.huawei.com/consumer/cn/doc/huaweihealth-Guides/get-device-list-0000002372216449)章节，获取已配对的穿戴设备列表，并从设备列表中选定需要操作的设备，获取设备Id。
3. 构造用于设置用户基本信息的JSON格式参数。

   <br />

   ```
   {
       "settingKey": "userBasicInfo",
       "settingValue": {
           "dateOfBirth": 19900101,
           "gender": "male",
           "height": 170,
           "weight": 50
       }
   }
   ```

   |参数|取值|含义|
   |:-----------|:-------------------------------------------|:--------------|
   |settingKey|userBasicInfo|用户基本信息键值。|
   |settingValue|包含以下参数：dateOfBirth、gender、height、weight|用户基本信息内容。|
   |dateOfBirth|* yyyyMMdd格式的日期 * 日期不早于19000101 * 年龄满足18岁及以上|用户出生日期。|
   |gender|male|男性。|
   |gender|female|女性。|
   |height|整数，取值范围：\[50,250\]|用户身高，单位：厘米(cm)。|
   |weight|整数，取值范围：\[10,250\]|用户体重，单位：千克(kg)。|
   [表1 设置用户基本信息参数]

   <br />

4. 调用[set](https://developer.huawei.com/consumer/cn/doc/health-References/devicemanageclient-0000001485104693#ZH-CN_TOPIC_0000002648084250__set-java_lang_String-java_lang_String-com_huawei_health_industry_client_callback_ServiceCallback-)方法设置用户基本信息。

   <br />

   ```
   // 获取DeviceManageClient对象
   DeviceManageClient deviceManageClient = IndustryWear.getDeviceManageClient(this); 

   // 参考获取设备列表获取设备列表后选择需要操作的设备，获取设备Id
   String deviceId = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";

   // 构造用于设置用户基础信息的JSON格式的入参数据
   JSONObject jsonObject = new JSONObject();
   JSONObject valueObject = new JSONObject();
   try {
       jsonObject.put("settingKey", "userBasicInfo");
       valueObject.put("dateOfBirth", 19900101);
       valueObject.put("gender", "male");
       valueObject.put("height", 170);
       valueObject.put("weight", 50);
       jsonObject.put("settingValue", valueObject);
   } catch (JSONException e) {
       e.printStackTrace();
   }

   // 调用set方法设置用户基本信息
   deviceManageClient.set(deviceId, jsonObject.toString(), new ServiceCallback() {
       @Override
       public void onResult(int statusCode, String result) {
           // 对返回值的处理
       }
   });
   ```

   |返回值|取值|含义|
   |:---------|:--------------|:---------------------------------------------------------------------------------------------------------------------|
   |statusCode|0、1、2、3、4、5、6、7|接口调用结果返回码，参见[返回码](https://developer.huawei.com/consumer/cn/doc/huaweihealth-Guides/errorcode-0000002372870401)中的通用返回码。|
   |result|-|接口调用失败时返回错误信息。|
   [表2 ServiceCallback 返回值]

   <br />

