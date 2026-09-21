---
name: document/cn/ecosystem-Guides/03_03_03_03_01_qhcj-0000001469564194
title: 切换采集状态
uri: https://developer.huawei.com/consumer/cn/doc/ecosystem-Guides/03_03_03_03_01_qhcj-0000001469564194
---

# 切换采集状态

> 说明
>
> A手机发起离线数据采集指令后，设备进入离线采集状态，此时仅有A手机可以与设备再次建立连接，可同步设备内离线数据
>
> 若需要强行结束离线采集，可通过设备按键重启设备，设备重启后任何手机可以与设备建立连接，设备内离线数据将被删除

* 接口说明 先查询当前采集状态，再开启测量，为两个接口配合使用。

* 接口方法

```codeblock
1.
public void readCustomConfigMessage(@NonNull SensorProCallback<CollectTaskStatus> callback) 
 
2.
public void startNewActiveAndOfflineCustomData(@NonNull SensorProUniteCollectTypeConfigure activeCollectTypeConfigure,
                                             @NonNull SensorProUniteCollectTypeConfigure offlineCollectTypeConfigure,
                                             SensorProUniteConfigure configure,
                                             @NonNull SensorProCallback<byte[]> callback)
```

* 输入参数

  |字段名|数据类型|说明|必选M/可选O|
  |:-------|:-------------------------------------|:------|:------|
  |callback|SensorProCallback< CollectTaskStatus >|采集配置项信息|M|
  [**表1**输入参数-1]

|字段名|数据类型|说明|必选M/可选O|
|:-------|:-------------------------|:--------|:------|
|callback|SensorProCallback<byte[] >|开启采集的操作结果|M|
[**表2**输入参数-2]

* 响应参数

  |响应方法名|参数名|数据类型|说明|
  |:---------|:-----------|:----------------|:-----|
  |onResponse|errorCode|int|返回错误码|
  |onResponse|returnObject|CollectTaskStatus|返回结果说明|
  [**表3**响应参数-1]

|响应方法名|参数名|数据类型|说明|
|:---------|:-----------|:-----|:-----|
|onResponse|errorCode|int|返回错误码|
|onResponse|returnObject|byte[]|返回结果说明|
[**表4**响应参数-2]

* 示例代码

```codeblock
 
SensorProManager.getInstance().getCustomProvider().readCustomConfigMessage(new SensorProCallback<CollectTaskStatus>() {
     @Override
     public void onResponse(int errorCode, CollectTaskStatus returnObject) {
         if (returnObject != null) {
             int currentState = returnObject.getSwitchStatus();

             PostureDataConvertUtils.startPostureDetection(100, 2);

             SensorProUniteCollectTypeConfigure activeCollectTypeConfigureBolt = new SensorProUniteCollectTypeConfigure();
             if (currentState == 1) {
                 activeCollectTypeConfigureBolt.setStorageFile(true);  // 切换采集状态重要参数
             } else if (currentState == 2) {
                 activeCollectTypeConfigureBolt.setStorageFile(false);
             }
             activeCollectTypeConfigureBolt.setParseData(true);
             activeCollectTypeConfigureBolt.setRriInterval(10);
             activeCollectTypeConfigureBolt.setRealtimeMesureTimeOut(10 * 60 * 1000);

             activeCollectTypeConfigureBolt.setCollectAcc(true);
             activeCollectTypeConfigureBolt.setCollectGyro(true);
             activeCollectTypeConfigureBolt.setCollectMag(true);
             activeCollectTypeConfigureBolt.setCollectGaitPosture(true);
             activeCollectTypeConfigureBolt.setCheckWearCollect(true);

             //后台采集配置
             SensorProUniteCollectTypeConfigure offlineCollectTypeConfigureBolt = new SensorProUniteCollectTypeConfigure();

             //频率配置(ppg)
             SensorProUniteConfigure togetherConfig = new SensorProUniteConfigure();
             SensorProUnitePPGConfigure PPGConfigure = new SensorProUnitePPGConfigure();
             PPGConfigure.setFrequency(SensorProUnitePPGConfigure.FrequencyHZ.Frequency_100HZ);
             PPGConfigure.setLightType(SensorProUnitePPGConfigure.LightType.THREE_LIGHT_MODE);
             PPGConfigure.setPpgChanel(SensorProUnitePPGConfigure.PPGChannel.FULL);
             togetherConfig.setPpgConfigure(PPGConfigure);
             //频率配置(acc+gyro)
             SensorProUniteIMUConfigure imuConfigure = new SensorProUniteIMUConfigure();
             imuConfigure.setFrequency(SensorProUniteIMUConfigure.FrequencyHZ.Frequency_100HZ);
             togetherConfig.setImuConfigure(imuConfigure);
             //频率配置(mag)
             SensorProUniteMAGConfigure magConfigure = new SensorProUniteMAGConfigure();
             magConfigure.setFrequency(SensorProUniteMAGConfigure.FrequencyHZ.Frequency_100HZ);
             togetherConfig.setMagConfigure(magConfigure);

             SensorProManager.getInstance().getCustomProvider().startNewActiveAndOfflineCustomData(
                     activeCollectTypeConfigureBolt, offlineCollectTypeConfigureBolt, togetherConfig,
                     new SensorProCallback<byte[]>() {
                         @Override
                         public void onResponse(int errorCode, byte[] returnObject) {
                             LogUtils.info(TAG, " 开启实时测量：" + errorCode);
                         }
                     }
             );
         }
     }
 });
```

