---
name: document/cn/games-references/games-api-quickgame-runtime-window-0000002365996980
title: 窗口
uri: https://developer.huawei.com/consumer/cn/doc/games-references/games-api-quickgame-runtime-window-0000002365996980
---

# 窗口

![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260212154041.40896340795500677075265952390333:50001231000000:2800:473A32861D637CCB5180816B577B670902072C0AAE36825C963500B60C58C76B.png)  
从1078版本开始，接口前缀由hbs修改为qg，原hbs仍支持。  

#### 接口定义

|接口|描述|
|:-------------------------------------------------------------|:---------------------------|
|[qg.onWindowResize(function callback)](#section14948251203111)|监听窗口尺寸变化事件，例如用户是否展开、折叠、旋转设备。|
|[qg.offWindowResize(function callback)](#section383192295610)|移除窗口尺寸变化事件的监听函数。|

#### qg.onWindowResize(function callback)

* 描述 监听窗口尺寸变化事件，例如用户是否展开、折叠、旋转设备。

* 参数  

  |参数|类型|必填(M)/选填(O)|说明|
  |:-------|:-------|:----------|:---------------------------------------------------------------------------------------------------------------------------------------|
  |callback|function|M|监听窗口尺寸变化事件的监听函数，在窗口尺寸变化（例如用户展开、折叠、旋转设备）时有回调，详情请参见[回调函数参数](#ZH-CN_TOPIC_0000002365996980__zh-cn_topic_0000002327339169_li12890134518288)。|

  * 回调函数参数  

    |参数|类型|说明|
    |:---|:-----|:---------------------------------------------------------------------------------------------------|
    |rect|object|卡片的尺寸大小，详情请参见[rect参数](#ZH-CN_TOPIC_0000002365996980__zh-cn_topic_0000002327339169_li13949155123119)。|

    * rect参数  

      |参数|类型|说明|
      |:-----------|:-----|:--------------------------------------------|
      |windowWidth|number|卡片渲染范围的实际宽度，等于windowWidth\*pixelRatio，单位：px。|
      |windowHeight|number|卡片渲染范围的实际高度，等于windowHeight\*pixelRatio，单位：px。|

      ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260212154041.38451604439660549551276721960382:50001231000000:2800:AE1DEACC0228570D4634E4EFE1814B89A05470FC7BB198CB2EA9930F23C7EFBE.png)  
      windowWidth、windowHeight、pixelRatio均为[qg.getSystemInfo](https://developer.huawei.com/consumer/cn/doc/games-references/games-api-quickgame-runtime-sysinfo-0000002399676789#section16231152791216)接口返回的参数值。
* 示例代码

  ```
  qg.onWindowResize(async (rect) => {
      console.info(rect.windowWidth, rect.windowHeight);
  });
  ```

#### qg.offWindowResize(function callback)

* 描述 移除窗口尺寸变化事件的监听函数。

* 参数  

  |参数|类型|必填(M)/选填(O)|说明|
  |:-------|:-------|:----------|:----------------------------------------------------------|
  |callback|function|M|[onWindowResize](#section14948251203111)传入的监听窗口尺寸变化事件的监听函数。|

* 示例代码

  ```
  qg.offWindowResize(callback);
  ```

