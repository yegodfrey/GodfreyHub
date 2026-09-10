---
name: document/cn/quickApp-References/quickgame-api-game-event-0000002639612036
title: 游戏事件
uri: https://developer.huawei.com/consumer/cn/doc/quickApp-References/quickgame-api-game-event-0000002639612036
---

# 游戏事件

#### 接口定义

|接口|描述|
|:--------------------------------------------------------|:---------------------------------|
|[qg.notifyGameEvent(Object object)](#section917310297396)|将游戏内的各种事件和对应数据上报给小游戏运行时。|
|[qg.onRuntimeEvent(Object object)](#section1942616611537)|监听小游戏运行时通知给游戏的各种事件和数据，返回事件对应的数据格式。|

#### qg.notifyGameEvent(Object object)

* 描述 将游戏内的各种事件和对应数据上报给小游戏运行时。

* 参数object  

  |参数|类型|必填(M)/选填(O)|说明|
  |:--------|:-----|:----------|:----------------------------------------------|
  |eventKey|string|M|游戏通知给小游戏运行时的事件key。当前仅支持填写"gameLoaded"，表示游戏加载完成。|
  |eventData|string|O|游戏事件对应的数据，可以根据不同事件的需要定义不同的数据格式进行上报。|

* 示例代码

  ```
  if (qg.notifyGameEvent) {
      // 游戏加载完成后调用
      qg.notifyGameEvent({
          eventKey: 'gameLoaded',
          eventData: ''  // 可选
      });
  }
  ```

#### qg.onRuntimeEvent(Object object)

* 描述 监听小游戏运行时通知给游戏的各种事件和数据，返回事件对应的数据格式。

* 参数object  

  |参数|类型|必填(M)/选填(O)|说明|
  |:-------|:-------|:----------|:---------------------------------------------------|
  |eventKey|string|M|小游戏运行时通知给游戏的事件key。当前仅支持填写"startDirectPlay"，表示开始直玩事件。|
  |callback|function|M|小游戏运行时通知游戏事件的回调函数。|

  * callback回调函数参数  

    |参数|类型|说明|
    |:--------|:-----|:---------------------------------------------------------------|
    |eventData|string|事件对应的数据，不同事件需要分别定义对应的数据格式。当eventKey为"startDirectPlay"时，该参数为空字符串。|

* 示例代码

  ```
  if (qg.onRuntimeEvent) {
      qg.onRuntimeEvent({
          eventKey: 'startDirectPlay',
          callback: (data) => {
              console.log('开始直玩事件触发', data.eventData);
              // 游戏执行直玩开始逻辑
          }
      });
  }
  ```

