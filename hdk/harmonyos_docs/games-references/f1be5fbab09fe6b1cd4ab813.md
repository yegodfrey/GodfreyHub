---
name: document/cn/games-references/games-api-quickgame-runtime-compass-0000002399676797
title: 罗盘
uri: https://developer.huawei.com/consumer/cn/doc/games-references/games-api-quickgame-runtime-compass-0000002399676797
---

# 罗盘

> 说明
>
> 从1078版本开始，接口前缀由hbs修改为qg，原hbs仍支持。

## 接口定义

|接口|描述|
|:--------------------------------------------------------------|:--------|
|[qg.onCompassChange(function callback)](#section13627205931916)|监听罗盘数据。|
|[qg.startCompass(Object object)](#section1762820177232)|开始监听罗盘数据。|
|[qg.stopCompass(Object object)](#section292315252247)|停止监听罗盘数据。|

### qg.onCompassChange(function callback)

* 描述 监听罗盘数据，频率：5 次/秒，接口调用后会自动开始监听。

* 参数

  |参数|类型|必填(M)/选填(O)|说明|
  |:-------|:-------|:----------|:--------------------------------------------------------------------------------------------------------------|
  |callback|function|M|罗盘数据变化事件的回调函数，请参见[callback回调函数参数](#ZH-CN_TOPIC_0000002399676797__zh-cn_topic_0000001130976497_li1122218592571)。|

  * callback回调函数参数

    |参数|类型|说明|
    |:--------|:-----|:-------|
    |direction|number|面对的方向度数。|

* 示例代码

  ```screen
  qg.onCompassChange(
          function callback(object){console.log("onCompassChange direction = " + object.direction)}
  );
  ```

### qg.startCompass(Object object)

* 描述 开始监听罗盘数据。

* 参数object

  |参数|类型|必填(M)/选填(O)|说明|
  |:-------|:-------|:----------|:--------------------|
  |success|function|O|接口调用成功的回调函数。|
  |fail|function|O|接口调用失败的回调函数。|
  |complete|function|O|若有函数传入，将在成功、失败后调用该函数。|

* 示例代码

  ```screen
  qg.startCompass({
          success : function () {
                  console.log("startCompass success" );
          },
          fail:function(){
                  console.log("startCompass fail");
          },
          complete:function() {
                  console.log("startCompass complete");
          }
  });
  ```

### qg.stopCompass(Object object)

* 描述 停止监听罗盘数据。


* 参数

  |参数|类型|必填(M)/选填(O)|说明|
  |:-------|:-------|:----------|:--------------------|
  |success|function|O|接口调用成功的回调函数。|
  |fail|function|O|接口调用失败的回调函数。|
  |complete|function|O|若有函数传入，将在成功、失败后调用该函数。|


* 示例代码

  ```screen
  qg.stopCompass({
          success : function () {
                  console.log("stopCompass success" );
          },
          fail:function(){
                  console.log("stopCompass fail");
          },
          complete:function() {
                  console.log("stopCompass complete");
          }
  });
  ```

