---
name: document/cn/graphics-References/controller_event_args-0000001205684093
title: ControllerEventArgs
uri: https://developer.huawei.com/consumer/cn/doc/graphics-References/controller_event_args-0000001205684093
---

# ControllerEventArgs

用于监听控制器断开、连接及低电量事件，包含控制器事件ID和事件数据两个公共变量。

|**Attribute Name**|**Type**|**Description**|
|:-----------------|:--------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|eventId|ControllerEvent|控制器事件ID，用于标识控制器断开、连接或低功耗事件。目前不支持低功耗事件。详细信息请参见"[2.1.4.2 ControllerEvent](https://developer.huawei.com/consumer/cn/doc/development/graphics-References/controller-event-0000001205564919)"|
|eventData|Object|控制器事件数据，用于标识已连接或未连接的控制器序列号|

## Event Handle

|**Handle Name**|**Type**|**Description**|
|:---------------------------|:-----------------|:--------------|
|ControllerStatusEventHandler|event EventHandler|控制器事件句柄|

