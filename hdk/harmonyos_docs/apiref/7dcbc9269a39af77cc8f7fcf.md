---
name: document/cn/apiref/wifideviceconfig-0000001055036456
title: WifiDeviceConfig
uri: https://developer.huawei.com/consumer/cn/doc/apiref/wifideviceconfig-0000001055036456
source: portal
---

# WifiDeviceConfig

#### Overview

**Related Modules:**

[Wifiservice](https://device.harmonyos.com/cn/docs/develop/apiref/wifiservice-0000001055195054)

**Description:**

Represents the Wi-Fi station configuration used to connect to a specified Wi-Fi device. 

**Since:**

1.0

**Version:**

1.0

#### Summary

#### [h2]Data Fields

Variable Name | Description  
---|---  
[ssid](https://device.harmonyos.com/cn/docs/develop/apiref/wifideviceconfig-0000001055036456#ZH-CN_TOPIC_0000001055036456__a9da672d383a32be93aaefda5973c4d9d) [[WIFI_MAX_SSID_LEN](https://device.harmonyos.com/cn/docs/develop/apiref/wifiservice-0000001055195054#ZH-CN_TOPIC_0000001055195054__ga7e01d8c5079081de486637b4482c937a)] | char   
[bssid](https://device.harmonyos.com/cn/docs/develop/apiref/wifideviceconfig-0000001055036456#ZH-CN_TOPIC_0000001055036456__abf19215ed365c6da58e53146cdfd7c72) [[WIFI_MAC_LEN](https://device.harmonyos.com/cn/docs/develop/apiref/wifiservice-0000001055195054#ZH-CN_TOPIC_0000001055195054__gabc871a0934ad71ec71b29de3f9bc4815)] | unsigned char   
[preSharedKey](https://device.harmonyos.com/cn/docs/develop/apiref/wifideviceconfig-0000001055036456#ZH-CN_TOPIC_0000001055036456__ad452587e97bca974dcebf9be1b276260) [[WIFI_MAX_KEY_LEN](https://device.harmonyos.com/cn/docs/develop/apiref/wifiservice-0000001055195054#ZH-CN_TOPIC_0000001055195054__ga6017e2d011b6cffcd3663db81a2b52d8)] | char   
[securityType](https://device.harmonyos.com/cn/docs/develop/apiref/wifideviceconfig-0000001055036456#ZH-CN_TOPIC_0000001055036456__a771eb907ee35c3df1558bb7b1dca70e5) | int   
[netId](https://device.harmonyos.com/cn/docs/develop/apiref/wifideviceconfig-0000001055036456#ZH-CN_TOPIC_0000001055036456__a1445931113ffb1d24835cccc04a4aee0) | int   
[freq](https://device.harmonyos.com/cn/docs/develop/apiref/wifideviceconfig-0000001055036456#ZH-CN_TOPIC_0000001055036456__a08b204eb1261ce4eca133d50cca19add) | unsigned int   
[wapiPskType](https://device.harmonyos.com/cn/docs/develop/apiref/wifideviceconfig-0000001055036456#ZH-CN_TOPIC_0000001055036456__a8ccce2cc3cdd39a48821a0d921bb75ea) | int   
  
#### Details

#### Field

#### [h2]bssid
    
    unsigned char WifiDeviceConfig::bssid[[WIFI_MAC_LEN](https://device.harmonyos.com/cn/docs/develop/apiref/wifiservice-0000001055195054#ZH-CN_TOPIC_0000001055195054__gabc871a0934ad71ec71b29de3f9bc4815)]

**Description:**

Basic service set ID (BSSID). For its length, see [WIFI_MAC_LEN](https://device.harmonyos.com/cn/docs/develop/apiref/wifiservice-0000001055195054#ZH-CN_TOPIC_0000001055195054__gabc871a0934ad71ec71b29de3f9bc4815). 

#### [h2]freq
    
    unsigned int WifiDeviceConfig::freq

**Description:**

Frequency 

#### [h2]netId
    
    int WifiDeviceConfig::netId

**Description:**

Allocated **networkId**

#### [h2]preSharedKey
    
    char WifiDeviceConfig::preSharedKey[[WIFI_MAX_KEY_LEN](https://device.harmonyos.com/cn/docs/develop/apiref/wifiservice-0000001055195054#ZH-CN_TOPIC_0000001055195054__ga6017e2d011b6cffcd3663db81a2b52d8)]

**Description:**

Key. For its length, see [WIFI_MAX_KEY_LEN](https://device.harmonyos.com/cn/docs/develop/apiref/wifiservice-0000001055195054#ZH-CN_TOPIC_0000001055195054__ga6017e2d011b6cffcd3663db81a2b52d8). 

#### [h2]securityType
    
    int WifiDeviceConfig::securityType

**Description:**

Security type. It is defined in [WifiSecurityType](https://device.harmonyos.com/cn/docs/develop/apiref/wifiservice-0000001055195054#ZH-CN_TOPIC_0000001055195054__ga97c133f7db7c1234babcde03c4ce1b05). 

#### [h2]ssid
    
    char WifiDeviceConfig::ssid[[WIFI_MAX_SSID_LEN](https://device.harmonyos.com/cn/docs/develop/apiref/wifiservice-0000001055195054#ZH-CN_TOPIC_0000001055195054__ga7e01d8c5079081de486637b4482c937a)]

**Description:**

[Service](https://device.harmonyos.com/cn/docs/develop/apiref/service-0000001055675026) set ID (SSID). For its length, see [WIFI_MAX_SSID_LEN](https://device.harmonyos.com/cn/docs/develop/apiref/wifiservice-0000001055195054#ZH-CN_TOPIC_0000001055195054__ga7e01d8c5079081de486637b4482c937a). 

#### [h2]wapiPskType
    
    int WifiDeviceConfig::wapiPskType

**Description:**

PSK type, see [WifiPskType](https://device.harmonyos.com/cn/docs/develop/apiref/wifiservice-0000001055195054#ZH-CN_TOPIC_0000001055195054__gaa1a44d23b8478232f14d2adfc82cee77). 
