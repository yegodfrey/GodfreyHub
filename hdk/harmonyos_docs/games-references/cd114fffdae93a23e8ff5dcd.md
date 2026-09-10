---
name: document/cn/games-references/games-api-quickgame-runtime-battery-0000002399796669
title: 电量
uri: https://developer.huawei.com/consumer/cn/doc/games-references/games-api-quickgame-runtime-battery-0000002399796669
---

# 电量

![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260212154040.08870004913639253614938019916449:50001231000000:2800:E79B7184E44A69ECBF30AA72A592FBEB1787010A2B4C71F46D5B75F37F25B26A.png)  
从1078版本开始，接口前缀由hbs修改为qg，原hbs仍支持。  

#### 接口定义

|接口|描述|
|:-------------------------------------------------------|:-----------|
|[qg.getBatteryInfo(Object object)](#section179741210819)|获取设备电量。|
|[qg.getBatteryInfoSync()](#section16292164141014)|获取设备电量的同步接口。|

#### qg.getBatteryInfo(Object object)

* 描述 获取设备电量。

* 参数object  

  |参数|类型|必填(M)/选填(O)|说明|
  |:-------|:-------|:----------|:----------------------------------------------------------------------------------------------------------|
  |success|function|O|接口调用成功的回调函数，请参见[success回调函数参数](#ZH-CN_TOPIC_0000002399796669__zh-cn_topic_0000001130711967_li861811685416)。|
  |fail|function|O|接口调用失败的回调函数。|
  |complete|function|O|若有函数传入，将在成功、失败后调用该函数。|

  * success回调函数参数  

    |参数|类型|说明|
    |:---------|:------|:-------------|
    |isCharging|boolean|是否在充电。|
    |level|string|设备电量，范围1\~100。|

* 示例代码

  ```
  qg.getBatteryInfo({
          success : function (res) {
                  console.log("getBatteryInfo success level = " + res.level);
          },
          fail:function(){
                  console.log("getBatteryInfo fail");
          },
          complete:function() {
                  console.log("getBatteryInfo complete");
          }
  });
  ```

#### qg.getBatteryInfoSync()（1078+）

* 描述 获取设备电量的同步接口。

* 返回参数  

  |参数|类型|说明|
  |:---------|:------|:----------------|
  |isCharging|boolean|是否在充电。|
  |level|string|设备电量，范围 1 \~ 100。|

* 示例代码

  ```
  const batteryInfo = qg.getBatteryInfoSync();
  console.log(batteryInfo.level);
  console.log(batteryInfo.isCharging);
  ```

