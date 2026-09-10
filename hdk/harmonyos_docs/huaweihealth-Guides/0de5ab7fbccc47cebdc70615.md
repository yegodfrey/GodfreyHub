---
name: document/cn/huaweihealth-Guides/query-dynamic-blood-pressure-data-0000002429538585
title: 查询动态血压测量报告
uri: https://developer.huawei.com/consumer/cn/doc/huaweihealth-Guides/query-dynamic-blood-pressure-data-0000002429538585
---

# 查询动态血压测量报告

穿戴设备提供动态血压测量能力，行业App可以通过本接口查询穿戴设备的动态血压测量报告。  
![](https://media:301785133843057425)  
此接口仅在支持动态血压测量的穿戴设备上可用，当前支持HUAWEI WATCH H9D20设备。

1. 调用[IndustryWear](https://developer.huawei.com/consumer/cn/doc/health-References/industrywear-0000001434945524)中的[getDeviceManageClient](https://developer.huawei.com/consumer/cn/doc/health-References/industrywear-0000001434945524#ZH-CN_TOPIC_0000002678163945__getDeviceManageClient-android_content_Context-)方法，获取[DeviceManageClient](https://developer.huawei.com/consumer/cn/doc/health-References/devicemanageclient-0000001485104693)对象。
2. 参见[获取设备列表](https://developer.huawei.com/consumer/cn/doc/huaweihealth-Guides/get-device-list-0000002372216449)章节，获取已配对的穿戴设备列表，并从设备列表中选定需要操作的设备，获取设备Id。
3. 构造用于查询动态血压测量报告的JSON格式参数。

   <br />

   ```
   {
     "item": "dynamicBloodPressureData",
     "value": {
       "startTime": 1744060764, // 单位：秒(s)
       "endTime": 1744081459 // 单位：秒(s)
     }
   }
   ```

   |参数|取值|含义|
   |:--------|:-------------|:--------|
   |startTime|UTC时间戳，单位：秒（s）|查询数据开始时间。|
   |endTime|UTC时间戳，单位：秒（s）|查询数据结束时间。|
   [表1 查询动态血压测量报告参数]

   ![](https://media:301785133843118426)  
   * 接口要求查询开始时间和结束时间间隔不超过24小时。
   * 查询开始时间和结束时间必须早于当前时间。

   <br />

4. 调用[query](https://developer.huawei.com/consumer/cn/doc/health-References/devicemanageclient-0000001485104693#ZH-CN_TOPIC_0000002648084250__query-java_lang_String-java_lang_String-com_huawei_health_industry_client_callback_ServiceCallback-)方法查询动态血压测量报告。

   <br />

   ```
   // 获取DeviceManageClient对象
   DeviceManageClient deviceManageClient = IndustryWear.getDeviceManageClient(this);

   // 参考获取设备列表获取设备列表后选择需要操作的设备，获取设备Id
   String deviceId = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";

   // 构造用于查询动态血压测量报告的JSON格式的入参数据
   JSONObject jsonObject = new JSONObject();
   try {
       JSONObject valueObject= new JSONObject();
       valueObject.put("startTime", 1744060764);
       valueObject.put("endTime", 1744081459);
       jsonObject.put("item", "dynamicBloodPressureData");
       jsonObject.put("value", valueObject);
   } catch (JSONException e) {
       e.printStackTrace();
   }

   // 调用query方法查询动态血压测量报告
   deviceManageClient.query(deviceId, jsonObject.toString(), new ServiceCallback() {
       @Override
       public void onResult(int statusCode, String result) {
           // 处理查询结果
       }
   });
   ```

   |返回值|取值|含义|
   |:---------|:----------------|:---------------------------------------------------------------------------------------------------------------------|
   |statusCode|0、1、2、3、5、7、11、30|接口调用结果返回码，参见[返回码](https://developer.huawei.com/consumer/cn/doc/huaweihealth-Guides/errorcode-0000002372870401)中的通用返回码。|
   |result|-|接口调用成功时返回动态血压测量报告，失败时返回错误信息。|
   [表2 ServiceCallback返回值]

   <br />

5. 接口调用后返回的信息在ServiceCallback的onResult方法中处理，查询成功时返回result数据中包含动态血压测量报告。

   <br />

   ```
   result样例：
   {
   	"dataType": "dynamicBloodPressureData",
   	"totalCount": 1,
   	"index": 0,
   	"count": 1,
   	"dataList": [{
   		"startTime": 1744081288,
   		"summaryData": {
   			"loadDiastolicBpSleep": 255,
   			"maxDiastolicBpAll": 98,
   			"planStatus": 1,
   			"midHeartRateAll": 81,
   			"stdDiastolicBpSleep": 300,
   			"maxHeartRateSleep": 0,
   			"stdHeartRateWakeTwo": 300,
   			"avgSystolicBpAll": 144,
   			"maxSystolicBpWakeTwo": 0,
   			"maxSystolicBpAll": 144,
   			"avgHeartRateAll": 81,
   			"validCntWake": 1,
   			"gasBagType": 3,
   			"planStartTime": 1744080508,
   			"dropSystolicBpAll": 1,
   			"stdDiastolicBpAll": 300,
   			"loadSystolicBpWake": 1,
   			"dropDiastolicBpAll": 1,
   			"planID": "V_4:B6_1744080508000",
   			"midSystolicBpAll": 144,
   			"sleepEndTime": 0,
   			"loadDiastolicBpAll": 1,
   			"midSystolicBpWakeTwo": 0,
   			"midDiastolicBpWakeTwo": 0,
   			"avgDiastolicBpWakeTwo": 0,
   			"minSystolicBpWakeTwo": 0,
   			"minSystolicBpSleep": 0,
   			"cntAll": 1,
   			"stdHeartRateWake": 300,
   			"minDiastolicBpWake": 98,
   			"loadSystolicBpAll": 1,
   			"loadSystolicBpSleep": 255,
   			"cntSleep": 0,
   			"loadDiastolicBpWake": 1,
   			"stdSystolicBpWake": 300,
   			"validCntWakeTwo": 0,
   			"minHeartRateWake": 81,
   			"planActualTime": 1744081293,
   			"coefDiastolicBpWakeTwo": 255,
   			"maxSystolicBpSleep": 0,
   			"maxSystolicBpWake": 144,
   			"minDiastolicBpWakeTwo": 0,
   			"stdDiastolicBpWake": 300,
   			"maxDiastolicBpWake": 98,
   			"stdHeartRateSleep": 300,
   			"stdSystolicBpSleep": 300,
   			"avgSystolicBpSleep": 0,
   			"avgDiastolicBpAll": 98,
   			"maxHeartRateWake": 81,
   			"midDiastolicBpAll": 98,
   			"midHeartRateSleep": 0,
   			"validCntAll": 1,
   			"avgSystolicBpWake": 144,
   			"validCntSleep": 0,
   			"avgHeartRateWake": 81,
   			"stdHeartRateAll": 300,
   			"coefHeartRateSleep": 255,
   			"midSystolicBpWake": 144,
   			"maxDiastolicBpWakeTwo": 0,
   			"midHeartRateWake": 81,
   			"avgDiastolicBpWake": 98,
   			"midHeartRateWakeTwo": 0,
   			"avgHeartRateSleep": 0,
   			"coefHeartRateAll": 255,
   			"avgHeartRateWakeTwo": 0,
   			"avgDiastolicBpSleep": 0,
   			"midDiastolicBpSleep": 0,
   			"coefSystolicBpAll": 255,
   			"minHeartRateSleep": 0,
   			"coefSystolicBpWake": 255,
   			"maxHeartRateAll": 81,
   			"midSystolicBpSleep": 0,
   			"minHeartRateWakeTwo": 0,
   			"coefHeartRateWake": 255,
   			"coefDiastolicBpAll": 255,
   			"coefDiastolicBpWake": 255,
   			"peakDiastolicBpAll": 300,
   			"maxHeartRateWakeTwo": 0,
   			"stdSystolicBpAll": 300,
   			"minSystolicBpAll": 144,
   			"coefSystolicBpWakeTwo": 255,
   			"sleepStartTime": 0,
   			"avgSystolicBpWakeTwo": 0,
   			"coefSystolicBpSleep": 255,
   			"minSystolicBpWake": 144,
   			"minHeartRateAll": 81,
   			"maxDiastolicBpSleep": 0,
   			"cntWake": 1,
   			"minDiastolicBpSleep": 0,
   			"cntWakeTwo": 0,
   			"stdSystolicBpWakeTwo": 300,
   			"midDiastolicBpWake": 98,
   			"stdDiastolicBpWakeTwo": 300,
   			"minDiastolicBpAll": 98,
   			"planEndTime": 1744166908,
   			"coefDiastolicBpSleep": 255,
   			"coefHeartRateWakeTwo": 255,
   			"peakSystolicBpAll": 300
   		},
   		"detailData": {
   			"systolic": "[144]",
   			"diastolic": "[98]",
   			"heartRate": "[81]",
   			"timestamp": "[1744080632]",
   			"label": "[0]"
   		}
   	}]
   }
   ```

   |返回值|取值|含义|
   |:----------|:-----------------------|:---------------------|
   |dataType|dynamicBloodPressureData|动态血压测量报告类型。|
   |totalCount|int类型数据|当前数据类型的数据总条数。|
   |index|int类型数据|本次返回的第一个数据点在所有数据中的下标。|
   |count|int类型数据|本次返回的记录条数。|
   |dataList|-|具体数据信息列表，不同数据类型包含不同字段。|
   |startTime|UTC时间，单位：秒|动态血压测量报告生成时间，单位：秒(s)。|
   |summaryData|-|动态血压测量报告概要数据。|
   |detailData|-|动态血压测量报告详情数据。|
   [表3 result返回值]

   |返回值|取值|含义|
   |:---------------------|:---------|:---------------------------------------------------------------------------------------------------------------------------------------------|
   |planStartTime|long类型数据|计划开始时间，UTC时间，单位：秒。|
   |planEndTime|long类型数据|计划结束时间，UTC时间，单位：秒。|
   |planActualTime|long类型数据|计划实际结束时间，UTC时间，单位：秒。|
   |planStatus|int类型数据|计划状态。 0：表示计划开启中。 1：表示用户提前终止动态血压计划。 2：表示动态血压计划正常结束且测量次数足够。 3：表示动态血压计划正常结束且日间有效测量次数不够。 4：表示动态血压计划正常结束且夜间有效测量次数不够。 5：表示动态血压计划正常结束且日间和夜间有效测量次数均不够。|
   |planID|String类型数据|planID，最大64个字节。|
   |gasBagType|int类型数据|袖带规格。|
   |sleepStartTime|long类型数据|睡眠开始时间，UTC时间，单位：秒。|
   |sleepEndTime|long类型数据|睡眠结束时间，UTC时间，单位：秒。|
   |validCntAll|int类型数据|24小时血压有效数据个数，取值范围\[0, 1440\]，单位：次数。|
   |validCntWake|int类型数据|清醒时段血压有效数据个数，取值范围\[0, 1440\]，单位：次数。|
   |validCntSleep|int类型数据|睡眠时段血压有效数据个数，取值范围\[0, 1440\]，单位：次数。|
   |validCntWakeTwo|int类型数据|起床后两小时血压有效数据个数，取值范围\[0, 1440\]，单位：次数。|
   |cntAll|int类型数据|24小时血压数据总个数，取值范围\[0, 1440\]，单位：次数。|
   |cntWake|int类型数据|清醒时段血压数据总个数，取值范围\[0, 1440\]，单位：次数。|
   |cntSleep|int类型数据|睡眠时段血压数据总个数，取值范围\[0, 1440\]，单位：次数。|
   |cntWakeTwo|int类型数据|起床后血压数据总个数，取值范围\[0, 1440\]，单位：次数。|
   |maxSystolicBpAll|int类型数据|24小时收缩压最大值，取值范围\[0,300\]，0表示无结果，单位：毫米汞柱。|
   |maxDiastolicBpAll|int类型数据|24小时舒张压最大值，取值范围\[0,300\]，0表示无结果，单位：毫米汞柱。|
   |maxHeartRateAll|int类型数据|24小时脉搏最大值，取值范围\[0,300\]，0表示无结果，单位：次/分。|
   |midSystolicBpAll|int类型数据|24小时收缩压中位数，取值范围\[0,300\]，0表示无结果，单位：毫米汞柱。|
   |midDiastolicBpAll|int类型数据|24小时舒张压中位数，取值范围\[0,300\]，0表示无结果，单位：毫米汞柱。|
   |midHeartRateAll|int类型数据|24小时脉搏中位数，取值范围\[0,300\]，0表示无结果，单位：次/分。|
   |minSystolicBpAll|int类型数据|24小时收缩压最小值，取值范围\[0,300\]，0表示无结果，单位：毫米汞柱。|
   |minDiastolicBpAll|int类型数据|24小时舒张压最小值，取值范围\[0,300\]，0表示无结果，单位：毫米汞柱。|
   |minHeartRateAll|int类型数据|24小时脉搏最小值，取值范围\[0,300\]，0表示无结果，单位：次/分。|
   |avgSystolicBpAll|int类型数据|24小时收缩压均值，取值范围\[0,300\]，0表示无结果，单位：毫米汞柱。|
   |avgDiastolicBpAll|int类型数据|24小时舒张压均值，取值范围\[0,300\]，0表示无结果，单位：毫米汞柱。|
   |avgHeartRateAll|int类型数据|24小时脉搏均值，取值范围\[0,300\]，0表示无结果，单位：次/分。|
   |stdSystolicBpAll|int类型数据|24小时收缩压标准差，取值范围\[0,300\]，0表示无结果，单位：毫米汞柱。|
   |stdDiastolicBpAll|int类型数据|24小时舒张压标准差，取值范围\[0,300\]，0表示无结果，单位：毫米汞柱。|
   |stdHeartRateAll|int类型数据|24小时脉搏标准差，取值范围\[0,300\]，0表示无结果，单位：次/分。|
   |coefSystolicBpAll|double类型数据|24小时收缩压变异系数，取值范围\[0,1\]。|
   |coefDiastolicBpAll|double类型数据|24小时舒张压变异系数，取值范围\[0,1\]。|
   |coefHeartRateAll|double类型数据|24小时脉搏变异系数，取值范围\[0,1\]。|
   |loadSystolicBpAll|double类型数据|24小时收缩压血压负荷，取值范围\[0,1\]。|
   |loadDiastolicBpAll|double类型数据|24小时舒张压血压负荷，取值范围\[0,1\]。|
   |dropSystolicBpAll|double类型数据|24小时收缩压夜间下降率，取值范围\[-3,3\]，当计划状态字段为3、4、5时下降率为无效值。|
   |dropDiastolicBpAll|double类型数据|24小时舒张压夜间下降率，取值范围\[-3,3\]，当计划状态字段为3、4、5时下降率为无效值。|
   |peakSystolicBpAll|int类型数据|24小时收缩压血压晨峰，取值范围\[-300,300\]，300表示无结果，单位：毫米汞柱。|
   |peakDiastolicBpAll|int类型数据|24小时舒张压血压晨峰，取值范围\[-300,300\]，300表示无结果，单位：毫米汞柱。|
   |maxSystolicBpWake|int类型数据|清醒时段收缩压最大值，取值范围\[0,300\]，0表示无结果，单位：毫米汞柱。|
   |maxDiastolicBpWake|int类型数据|清醒时段舒张压最大值，取值范围\[0,300\]，0表示无结果，单位：毫米汞柱。|
   |maxHeartRateWake|int类型数据|清醒时段脉搏最大值，取值范围\[0,300\]，0表示无结果，单位：次/分。|
   |midSystolicBpWake|int类型数据|清醒时段收缩压中位数，取值范围\[0,300\]，0表示无结果，单位：毫米汞柱。|
   |midDiastolicBpWake|int类型数据|清醒时段舒张压中位数，取值范围\[0,300\]，0表示无结果，单位：毫米汞柱。|
   |midHeartRateWake|int类型数据|清醒时段脉搏中位数，取值范围\[0,300\]，0表示无结果，单位：次/分。|
   |minSystolicBpWake|int类型数据|清醒时段收缩压最小值，取值范围\[0,300\]，0表示无结果，单位：毫米汞柱。|
   |minDiastolicBpWake|int类型数据|清醒时段舒张压最小值，取值范围\[0,300\]，0表示无结果，单位：毫米汞柱。|
   |minHeartRateWake|int类型数据|清醒时段脉搏最小值，取值范围\[0,300\]，0表示无结果，单位：次/分。|
   |avgSystolicBpWake|int类型数据|清醒时段收缩压均值，取值范围\[0,300\]，0表示无结果，单位：毫米汞柱。|
   |avgDiastolicBpWake|int类型数据|清醒时段舒张压均值，取值范围\[0,300\]，0表示无结果，单位：毫米汞柱。|
   |avgHeartRateWake|int类型数据|清醒时段脉搏均值，取值范围\[0,300\]，0表示无结果，单位：次/分。|
   |stdSystolicBpWake|int类型数据|清醒时段收缩压标准差，取值范围\[0,300\]，0表示无结果，单位：毫米汞柱。|
   |stdDiastolicBpWake|int类型数据|清醒时段舒张压标准差，取值范围\[0,300\]，0表示无结果，单位：毫米汞柱。|
   |stdHeartRateWake|int类型数据|清醒时段脉搏标准差，取值范围\[0,300\]，0表示无结果，单位：次/分。|
   |coefSystolicBpWake|double类型数据|清醒时段收缩压变异系数，取值范围\[0,1\]。|
   |coefDiastolicBpWake|double类型数据|清醒时段舒张压变异系数，取值范围\[0,1\]。|
   |coefHeartRateWake|double类型数据|清醒时段脉搏变异系数，取值范围\[0,1\]。|
   |loadSystolicBpWake|double类型数据|清醒时段收缩压血压负荷，取值范围\[0,1\]。|
   |loadDiastolicBpWake|double类型数据|清醒时段舒张压血压负荷，取值范围\[0,1\]。|
   |maxSystolicBpSleep|int类型数据|睡眠时段收缩压最大值，取值范围\[0,300\]，0表示无结果，单位：毫米汞柱。|
   |maxDiastolicBpSleep|int类型数据|睡眠时段舒张压最大值，取值范围\[0,300\]，0表示无结果，单位：毫米汞柱。|
   |maxHeartRateSleep|int类型数据|睡眠时段脉搏最大值，取值范围\[0,300\]，0表示无结果，单位：次/分。|
   |midSystolicBpSleep|int类型数据|睡眠时段收缩压中位数，取值范围\[0,300\]，0表示无结果，单位：毫米汞柱。|
   |midDiastolicBpSleep|int类型数据|睡眠时段舒张压中位数，取值范围\[0,300\]，0表示无结果，单位：毫米汞柱。|
   |midHeartRateSleep|int类型数据|睡眠时段脉搏中位数，取值范围\[0,300\]，0表示无结果，单位：次/分。|
   |minSystolicBpSleep|int类型数据|睡眠时段收缩压最小值，取值范围\[0,300\]，0表示无结果，单位：毫米汞柱。|
   |minDiastolicBpSleep|int类型数据|睡眠时段舒张压最小值，取值范围\[0,300\]，0表示无结果，单位：毫米汞柱。|
   |minHeartRateSleep|int类型数据|睡眠时段脉搏最小值，取值范围\[0,300\]，0表示无结果，单位：次/分。|
   |avgSystolicBpSleep|int类型数据|睡眠时段收缩压均值，取值范围\[0,300\]，0表示无结果，单位：毫米汞柱。|
   |avgDiastolicBpSleep|int类型数据|睡眠时段舒张压均值，取值范围\[0,300\]，0表示无结果，单位：毫米汞柱。|
   |avgHeartRateSleep|int类型数据|睡眠时段脉搏均值，取值范围\[0,300\]，0表示无结果，单位：次/分。|
   |stdSystolicBpSleep|int类型数据|睡眠时段收缩压标准差，取值范围\[0,300\]，0表示无结果，单位：毫米汞柱。|
   |stdDiastolicBpSleep|int类型数据|睡眠时段舒张压标准差，取值范围\[0,300\]，0表示无结果，单位：毫米汞柱。|
   |stdHeartRateSleep|int类型数据|睡眠时段脉搏标准差，取值范围\[0,300\]，0表示无结果，单位：次/分。|
   |coefSystolicBpSleep|double类型数据|睡眠时段收缩压变异系数，取值范围\[0,1\]，255表示无效值。|
   |coefDiastolicBpSleep|double类型数据|睡眠时段舒张压变异系数，取值范围\[0,1\]，255表示无效值。|
   |coefHeartRateSleep|double类型数据|睡眠时段脉搏变异系数，取值范围\[0,1\]，255表示无效值。|
   |loadSystolicBpSleep|double类型数据|睡眠时段收缩压血压负荷，取值范围\[0,1\]，255表示无效值。|
   |loadDiastolicBpSleep|double类型数据|睡眠时段舒张压血压负荷，取值范围\[0,1\]，255表示无效值。|
   |maxSystolicBpWakeTwo|int类型数据|起床后两小时收缩压最大值，取值范围\[0,300\]，0表示无结果，单位：毫米汞柱。|
   |maxDiastolicBpWakeTwo|int类型数据|起床后两小时舒张压最大值，取值范围\[0,300\]，0表示无结果，单位：毫米汞柱。|
   |maxHeartRateWakeTwo|int类型数据|起床后两小时脉搏最大值，取值范围\[0,300\]，0表示无结果，单位：次/分。|
   |midSystolicBpWakeTwo|int类型数据|起床后两小时收缩压中位数，取值范围\[0,300\]，0表示无结果，单位：毫米汞柱。|
   |midDiastolicBpWakeTwo|int类型数据|起床后两小时舒张压中位数，取值范围\[0,300\]，0表示无结果，单位：毫米汞柱。|
   |midHeartRateWakeTwo|int类型数据|起床后两小时脉搏中位数，取值范围\[0,300\]，0表示无结果，单位：次/分。|
   |minSystolicBpWakeTwo|int类型数据|起床后两小时收缩压最小值，取值范围\[0,300\]，0表示无结果，单位：毫米汞柱。|
   |minDiastolicBpWakeTwo|int类型数据|起床后两小时舒张压最小值，取值范围\[0,300\]，0表示无结果，单位：毫米汞柱。|
   |minHeartRateWakeTwo|int类型数据|起床后两小时脉搏最小值，取值范围\[0,300\]，0表示无结果，单位：次/分。|
   |avgSystolicBpWakeTwo|int类型数据|起床后两小时收缩压均值，取值范围\[0,300\]，0表示无结果，单位：毫米汞柱。|
   |avgDiastolicBpWakeTwo|int类型数据|起床后两小时舒张压均值，取值范围\[0,300\]，0表示无结果，单位：毫米汞柱。|
   |avgHeartRateWakeTwo|int类型数据|起床后两小时脉搏均值，取值范围\[0,300\]，0表示无结果，单位：次/分。|
   |stdSystolicBpWakeTwo|int类型数据|起床后两小时收缩压标准差，取值范围\[0,300\]，0表示无结果，单位：毫米汞柱。|
   |stdDiastolicBpWakeTwo|int类型数据|起床后两小时舒张压标准差，取值范围\[0,300\]，0表示无结果，单位：毫米汞柱。|
   |stdHeartRateWakeTwo|int类型数据|起床后两小时脉搏标准差，取值范围\[0,300\]，0表示无结果，单位：次/分。|
   |coefSystolicBpWakeTwo|double类型数据|起床后两小时收缩压变异系数，取值范围\[0,1\]。|
   |coefDiastolicBpWakeTwo|double类型数据|起床后两小时舒张压变异系数，取值范围\[0,1\]。|
   |coefHeartRateWakeTwo|double类型数据|起床后两小时脉搏变异系数，取值范围\[0,1\]。|
   [表4 summaryData信息]

   |返回值|取值|含义|
   |:--------|:-------|:-----------------------------------|
   |systolic|int类型列表|测量的收缩压列表，列表元素单位：毫米汞柱。|
   |diastolic|int类型列表|测量的舒张压列表，列表元素单位：毫米汞柱。|
   |heartRate|int类型列表|血压测量时心率列表，列表元素单位：次/分钟。|
   |timestamp|long类型列表|血压测量时间列表，UTC时间，列表元素单位：秒。|
   |label|int类型列表|血压结果记录标签列表，列表元素取值 1：测量结果有效，0：测量结果无效。|
   [表5 detailData信息]

   ![](https://media:301785133843142427)  
   * summaryData概要数据中睡眠时段的数据需要[开启科学睡眠开关](https://developer.huawei.com/consumer/cn/doc/huaweihealth-Guides/set-trusleep-switch-0000002338300784)才会出值。
   * detailData详情数据是每个报告产生的血压测量数据，同个报告可以产生多个测量数据会分别存入列表中，每次测量产生的数据有：systolic、diastolic、heartRate、timestamp、label。

   <br />

