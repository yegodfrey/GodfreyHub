---
name: document/cn/HMS-References/api-discovery-blesignal
title: discovery.BleSignal
uri: https://developer.huawei.com/consumer/cn/doc/HMS-References/api-discovery-blesignal
source: portal
---

CLASS info  
---  
public interface BleSignal  
BLE的信号属性  
  
## Constant Summary

Type| Name| Desc  
---|---|---  
int| BLE_UNKNOWN_TX_POWER| 未知发送功率等级  
  
## Public Method Summary

Return type| Method name  
---|---  
abstract int| getRssi()  
返回接收的信号强度，单位是dBm，有效范围是[-127,127]  
abstract int| getTxPower()  
返回距离1米的发送功率，单位是dBm  
  
## Constants

Constant  
---  
public static final int BLE_UNKNOWN_TX_POWER  
未知发送功率等级。  
Constant Value:0x80000000  
  
## Public Methods

Method  
---  
public abstract int getRssi()  
返回接收的信号强度，单位是dBm，有效范围是[-127,127]。该值为加权值，距离越近统计到的强度有更高的权重。  
Method  
---  
public abstract int getTxPower()  
返回距离1米的发送功率，单位是dBm。如果广播端不想返回发送功率，则返回UNKNOWN_TX_POWER。
