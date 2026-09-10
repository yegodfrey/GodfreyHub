---
name: document/cn/huaweihealth-Guides/subscribe-realtime-acc-data-0000002342757114
title: 订阅实时加速度数据
uri: https://developer.huawei.com/consumer/cn/doc/huaweihealth-Guides/subscribe-realtime-acc-data-0000002342757114
---

# 订阅实时加速度数据

订阅和取消订阅已连接设备的实时加速度数据。  
![](https://media:301785133820337082)  
* 行业应用订阅ACC数据会占用较多资源，应用切入后台后可能会被Android系统杀掉，请注意行业应用保活或者保持应用运行在前台。
* 不支持多设备同时订阅，如果一台设备存在未解订阅的ACC/GYRO/PPG数据，其它设备都不允许订阅。
* [智能穿戴设备](https://developer.huawei.com/consumer/cn/doc/huaweihealth-Guides/supported-devices-0000002510376967#ZH-CN_TOPIC_0000002647924354__li165266350557)仅在[自动选择连接模式](https://developer.huawei.com/consumer/cn/doc/huaweihealth-Guides/add-device-0000002338138536#ZH-CN_TOPIC_0000002678163965__li132048191618)配对场景下支持使用此接口。
* 设备断开连接后自动停止数据上报，如需再次获取实时数据，请先恢复连接后取消上一次订阅，然后重新订阅。

1. 调用[IndustryWear](https://developer.huawei.com/consumer/cn/doc/health-References/industrywear-0000001434945524)中的[getDeviceManageClient](https://developer.huawei.com/consumer/cn/doc/health-References/industrywear-0000001434945524#ZH-CN_TOPIC_0000002678163945__getDeviceManageClient-android_content_Context-)方法，获取[DeviceManageClient](https://developer.huawei.com/consumer/cn/doc/health-References/devicemanageclient-0000001485104693)对象。
2. 参见[获取设备列表](https://developer.huawei.com/consumer/cn/doc/huaweihealth-Guides/get-device-list-0000002372216449)章节，获取已配对的穿戴设备列表，并从设备列表中选定需要操作的设备，获取设备Id。
3. 构造用于订阅或取消订阅实时ACC数据的JSON格式参数。

   <br />

   ```
   {
       "item":"realtimeAccData"
   }
   ```

   <br />

4. 调用[subscribe](https://developer.huawei.com/consumer/cn/doc/health-References/devicemanageclient-0000001485104693#ZH-CN_TOPIC_0000002648084250__subscribe-java_lang_String-java_lang_String-com_huawei_health_industry_client_callback_ServiceCallback-)方法订阅设备ACC数据。

   <br />

   ```
   // 获取DeviceManageClient对象
   DeviceManageClient manageClient = IndustryWear.getDeviceManageClient(this);

   // 参考获取设备列表获取设备列表后选择需要操作的设备，获取设备Id
   String deviceId = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";

   // 构造用于订阅或取消订阅实时ACC数据的JSON格式的入参数据
   JSONObject jsonObject = new JSONObject();
   try {
       jsonObject.put("item", "realtimeAccData");
   } catch (JSONException e) {
       e.printStackTrace();
   }

   // 调用subscribe方法订阅实时ACC数据
   ServiceCallback serviceCallback = new ServiceCallback() {
       @Override
       public void onResult(int statusCode, String result) {
           // 处理订阅返回信息
       }
   };
   manageClient.subscribe(deviceId, jsonObject.toString(), serviceCallback);
   ```

   |返回值|取值|含义|
   |:---------|:------------------------|:---------------------------------------------------------------------------------------------------------------------|
   |statusCode|0、1、2、3、6、7、8、300、301、302|接口调用结果返回码，参见[返回码](https://developer.huawei.com/consumer/cn/doc/huaweihealth-Guides/errorcode-0000002372870401)中的通用返回码。|
   |result|-|接口调用成功时返回空字符串，然后返回实时acc数据，失败时返回错误信息。|
   [表1 ServiceCallback返回值]

   ![](https://media:301785133820368083)  
   订阅实时ACC数据的ServiceCallback不仅会返回订阅操作的结果，另外还会返回后续订阅的事件上报时的数据。

   <br />

5. 订阅操作的结果和实时ACC数据更新事件变化信息在ServiceCallback的onResult方法中处理。订阅操作成功时返回statusCode为0，result为空字符串；失败时statusCode返回错误码，result返回对应错误信息；设备上报实时ACC数据时返回statusCode为8，result数据中包含acc数据时间戳和具体的浮点数据。

   <br />

   ```
   result样例：
   {
       "timeStamp":1678695206900,
       "acc":"[-39.0, -629.0, 4021.0, -16.0, -625.0, 4014.0, -7.0, -627.0, 4025.0, 0.0, -631.0, 4020.0, -1.0, -637.0, 4037.0, -1.0, -623.0, 4025.0, -16.0, -624.0, 4020.0, -23.0, -638.0, 4032.0, -18.0, -655.0, 4047.0, -9.0, -644.0, 4036.0]"
   }
   ```

   |返回值|取值|含义|
   |:--------|:------------|:------------------------------------|
   |timeStamp|UTC时间戳，单位：毫秒|ACC数据时间点。|
   |acc|float\[\]类型数据|acc数据，30个浮点值，单位：m/s\^2，4096为1个重力加速度g。|
   [表2 result返回值]

   ![](https://media:301785133820394084)  
   ACC传感器采集周期10ms，上报周期100ms左右：1次上报10组，每组3个数据，分别代表x轴、y轴、z轴加速度。

   数据上报数量非固定，示例中给出的是通常上报结果，实际上报周期和数据有可能因设备原因增加或者减少。

   <br />

6. 需要取消订阅时，调用[unSubscribe](https://developer.huawei.com/consumer/cn/doc/health-References/devicemanageclient-0000001485104693#ZH-CN_TOPIC_0000002648084250__unSubscribe-java_lang_String-java_lang_String-com_huawei_health_industry_client_callback_ServiceCallback-)方法取消订阅实时ACC数据。

   <br />

   ```
   // 调用unSubscribe方法取消订阅实时加速度数据
   manageClient.unSubscribe(deviceId, jsonObject.toString(), serviceCallback);
   ```

   ![](https://media:301785133820424085)  
   取消订阅成功条件：
   * 取消订阅时要求输入的解订阅参数和订阅时的参数一致。
   * 取消订阅时传入的ServiceCallback，要求和订阅时传入的ServiceCallback为同一个对象。

   <br />

