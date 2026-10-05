---
name: document/cn/DevicePartner-References/bluetooth-broadcasting02-0000002613879721
title: 关闭BLE广播
uri: https://developer.huawei.com/consumer/cn/doc/DevicePartner-References/bluetooth-broadcasting02-0000002613879721
source: portal
---

# 关闭BLE广播

int BleStopAdv(int advId)

SDK通过调用此接口关闭当前正在发送的ble蓝牙广播。当停止广播动作执行后有结果时，需要厂家调用GAP事件回调接口中AdvStopCompleteCb反馈关闭结果。请注意：由于当前只开启一个ble广播，因此入参advId固定为0。

**参数名** | **类型** | **输入/输出** | **描述**  
---|---|---|---  
advId | int | 输入 | 要关闭的广播id，当前固定传0。  
  
**函数返回值** | **描述**  
---|---  
0 | 关闭广播成功。  
其他值 | 关闭广播失败。
