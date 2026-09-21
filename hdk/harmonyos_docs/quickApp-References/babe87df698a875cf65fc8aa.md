---
name: document/cn/quickApp-References/quickgame-api-window-0000002327339169
title: 窗口
uri: https://developer.huawei.com/consumer/cn/doc/quickApp-References/quickgame-api-window-0000002327339169
---

# 窗口

> 说明
>
> 从1078版本开始，接口前缀由hbs调整为qg，原hbs仍支持。

## 接口定义

|接口|描述|
|:-------------------------------------------------------------|:---------------------------|
|[qg.onWindowResize(function callback)](#section14948251203111)|监听窗口尺寸变化事件，例如用户是否展开、折叠、旋转设备。|
|[qg.offWindowResize(function callback)](#section383192295610)|移除窗口尺寸变化事件的监听函数。|

### qg.onWindowResize(function callback)

* 描述 监听窗口尺寸变化事件，例如用户是否展开、折叠、旋转设备。

* 参数

  |参数|类型|必填(M)/选填(O)|说明|
  |:-------|:-------|:----------|:----------------------------------------------------------------------------------------------------------|
  |callback|function|M|监听窗口尺寸变化事件的监听函数，在窗口尺寸变化（例如用户展开、折叠、旋转设备）时有回调，详情请参见[回调函数参数](#ZH-CN_TOPIC_0000002327339169__li12890134518288)。|

  * 回调函数参数

    |参数|类型|说明|
    |:---|:-----|:----------------------------------------------------------------------|
    |rect|object|卡片的尺寸大小，详情请参见[rect参数](#ZH-CN_TOPIC_0000002327339169__li13949155123119)。|

    * rect参数

      |参数|类型|说明|
      |:-----------|:-----|:-------------------------------------------|
      |windowWidth|number|卡片渲染范围的实际宽度，等于windowWidth*pixelRatio，单位：px。|
      |windowHeight|number|卡片渲染范围的实际高度，等于windowHeight*pixelRatio，单位：px。|

      > 说明
      >
      > windowWidth、windowHeight、pixelRatio均为[qg.getSystemInfo](https://developer.huawei.com/consumer/cn/doc/quickApp-References/quickgame-api-sysinfo-0000001083874626#section16231152791216)接口返回的参数值。
* 示例代码

  ```screen
  qg.onWindowResize(async (rect) => {
      console.info(rect.windowWidth, rect.windowHeight);
  });
  ```

### qg.offWindowResize(function callback)

* 描述 移除窗口尺寸变化事件的监听函数。

* 参数

  |参数|类型|必填(M)/选填(O)|说明|
  |:-------|:-------|:----------|:----------------------------------------------------------|
  |callback|function|M|[onWindowResize](#section14948251203111)传入的监听窗口尺寸变化事件的监听函数。|

* 示例代码

  ```screen
  qg.offWindowResize(callback);
  ```

