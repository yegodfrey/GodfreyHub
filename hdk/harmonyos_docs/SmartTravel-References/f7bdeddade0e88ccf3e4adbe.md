---
name: document/cn/SmartTravel-References/wifi-params-0000001051652088
title: WifiParams
uri: https://developer.huawei.com/consumer/cn/doc/SmartTravel-References/wifi-params-0000001051652088
source: portal
---

# WifiParams

Name | Type | Description  
---|---|---  
ssid[WIFI_SSID_LEN + 1] | char | User name (SSID) of the Wi-Fi hotspot. It must start with **HiCar_**.  
key[WIFI_KEY_LEN + 1] | char | Password (key) of the Wi-Fi hotspot.  
mac[STR_MAC_ADDR_LEN + 1] | char | MAC address of the Wi-Fi WLAN port. The format is xx:xx:xx:xx:xx:xx.  
frequency | int | Frequency of the Wi-Fi hotspot scanning.
