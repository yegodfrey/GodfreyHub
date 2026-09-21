---
name: document/cn/system-References/idualwifiservice-0000001144301627
title: IDualWifiService
uri: https://developer.huawei.com/consumer/cn/doc/system-References/idualwifiservice-0000001144301627
---

# IDualWifiService

|Interface Info|
|:---------------------------------------------------------------------|
|public interface IDualWifiService extends IInterface 定义和双Wi-Fi服务交互的接口。|

## Nested Class Summary

|Qualifier and Type|Class Name and Description|
|:---------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------|
|public abstract static class|[Stub](https://developer.huawei.com/consumer/cn/doc/development/system-References/dualwifi-stub-0000001144181627) AIDL接口IDualWifiService的Stub类。|

## Public Method Summary

|Qualifier and Type|Method Name and Description|
|:-----------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|void|[enableDualWifi](#section8146125774712)(String caller, [INetworkCallback](https://developer.huawei.com/consumer/cn/doc/development/system-References/inetworkcallback-0000001143941719) callback) throws RemoteException 开启双Wi-Fi。|
|void|[disableDualWifi](#section984718528548)(String caller, [INetworkCallback](https://developer.huawei.com/consumer/cn/doc/development/system-References/inetworkcallback-0000001143941719) callback) throws RemoteException 关闭双Wi-Fi。|
|String|[getSlaveWifiConnectionInfo](#section73981566599)() throws RemoteException 获取Wi-Fi2的连接信息。|
|LinkProperties|[getLinkPropertiesForSlaveWifi](#section107883191572)() throws RemoteException 获取Wi-Fi2连接的网络链路属性。|
|NetworkInfo|[getNetworkInfoForSlaveWifi](#section4864201914117)() throws RemoteException 获取Wi-Fi2的网口状态。|

## Public Methods

### enableDualWifi

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|void enableDualWifi(String caller, [INetworkCallback](https://developer.huawei.com/consumer/cn/doc/development/system-References/inetworkcallback-0000001143941719) callback) throws RemoteException 开启双Wi-Fi。|

**Parameters**

|Name|Description|
|:-------|:----------------------------------------|
|caller|调用者包名，不可为null。|
|callback|回调对象，不可为null。用于处理Wireless Kit回调的Wi-Fi2数据。|

**Throws**

|Name|Description|
|:--------------|:----------|
|RemoteException|AIDL远程调用异常。|

### disableDualWifi

|Method|
|:----------------------------------------------------------------------------------------------|
|void disableDualWifi(String caller, INetworkCallback callback) throws RemoteException 关闭双Wi-Fi。|

**Parameters**

|Name|Description|
|:-------|:-------------------------------------------------|
|caller|调用者包名，不可为null。|
|callback|回调对象，不可为null。用于处理Wireless Kit回调的Wi-Fi2数据。与开启时保持一致。|

**Throws**

|Name|Description|
|:--------------|:----------|
|RemoteException|AIDL远程调用异常。|

### getSlaveWifiConnectionInfo

|Method|
|:------------------------------------------------------------------------|
|String getSlaveWifiConnectionInfo() throws RemoteException 获取Wi-Fi2的连接信息。|

**Returns**

|Type|Description|
|:-----|:-----------------------------------|
|String|Wi-Fi2的连接信息，如连接的SSID、BSSID、RSSI、频率等。|

**Throws**

|Name|Description|
|:--------------|:----------|
|RemoteException|AIDL远程调用异常。|

### getLinkPropertiesForSlaveWifi

|Method|
|:---------------------------------------------------------------------------------------|
|LinkProperties getLinkPropertiesForSlaveWifi() throws RemoteException 获取Wi-Fi2连接的网络链路属性。|

**Returns**

|Type|Description|
|:-------------|:------------------------|
|LinkProperties|Wi-Fi2的连接信息，如网卡名称、DNS地址等。|

**Throws**

|Name|Description|
|:--------------|:----------|
|RemoteException|AIDL远程调用异常。|

### getNetworkInfoForSlaveWifi

|Method|
|:-----------------------------------------------------------------------------|
|NetworkInfo getNetworkInfoForSlaveWifi() throws RemoteException 获取Wi-Fi2的网口状态。|

**Returns**

|Type|Description|
|:----------|:-----------|
|NetworkInfo|Wi-Fi2的网口状态。|

**Throws**

|Name|Description|
|:--------------|:----------|
|RemoteException|AIDL远程调用异常。|

