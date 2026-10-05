---
name: document/cn/HiCar-References/wifi-params-0000001051652088
title: WifiParams
uri: https://developer.huawei.com/consumer/cn/doc/HiCar-References/wifi-params-0000001051652088
---

# WifiParams

|Name|Type|Desc|
|:------------------------|:---|:--------------------------------------------|
|ssid[WIFI_SSID_LEN + 1]|char|Wi-Fi热点的用户名（ssid），HiCar要求热点名称以"HiCar_"开头。|
|key[WIFI_KEY_LEN + 1]|char|Wi-Fi热点的密码（key）。|
|mac[STR_MAC_ADDR_LEN + 1]|char|Wi-Fi WLAN网口的MAC地址，字符串格式为"xx:xx:xx:xx:xx:xx"。|
|frequency|int|Wi-Fi热点扫描的频率。|

