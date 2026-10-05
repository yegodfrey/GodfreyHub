---
name: document/cn/SmartTravel-Guides/wifi-parm-0000001261116881
title: Wireless Connectivity Parameters
uri: https://developer.huawei.com/consumer/cn/doc/SmartTravel-Guides/wifi-parm-0000001261116881
source: portal
---

# Wireless Connectivity Parameters

#### Coexistence of AP Hotspots and Wi-Fi

During wireless connection, when HiCar enables the AP hotspot, Wi-Fi is disabled by default. This may conflict with the coexistence of the AP hotspot and Wi-Fi supported by the head unit.

The HiCar SDK can use the system parameter **persist.sys.hicar.apsta.coexist** to specify whether the head unit supports the coexistence of AP hotspots and Wi-Fi.

**Table 1** Parameter descriptionParameter | Type | Description  
---|---|---  
persist.sys.hicar.apsta.coexist | int | Whether the AP hotspot and Wi-Fi can coexist:
     * **0** : no (default value)
     * **1** : yes  
  
To set this parameter for the head unit, ensure that the HiCar SDK can properly read the parameter in getprop mode. The debugging command is as follows:
    
    adb shell
    > setprop persist.sys.hicar.apsta.coexist 1 // The head unit supports the coexistence of AP hotspots and Wi-Fi.

#### Reusing Existing AP Hotspots

During wireless connection, HiCar disables the current AP hotspot by default and creates a new AP hotspot. User experience is affected when the head unit already has an AP hotspot.

The HiCar SDK can use the system parameter **persist.sys.hicar.reuse.ap** to specify whether the existing AP hotspot of the head unit can be reused. If this parameter is set to a value indicating reuse supported, HiCar attempts to use the existing AP hotspot of the head unit during wireless connection to improve user experience.

**Table 2** Parameter descriptionParameter | Type | Description  
---|---|---  
persist.sys.hicar.reuse.ap | boolean | Whether the head unit supports reuse of the existing AP hotspot:
     * **false** : no (default value)
     * **true** : yes  
  
To set this parameter for the head unit, ensure that the HiCar SDK can properly read the parameter in getprop mode. The debugging command is as follows:
    
    adb shell
    > setprop persist.sys.hicar.reuse.ap true // Support reuse of the existing AP hotspot.

#### Specifying the Network Adapter Used for Wireless Connection

When the head unit has multiple network adapters, there is a low probability that different network adapters are obtained during the HiCar wireless connection. As a result, the connection fails.

The HiCar SDK can use the system parameter **persist.sys.hicar.ap.interface** to specify the name of the network adapter used during wireless connection. This prevents connection failures caused by different network adapters obtained during the connection.

**Table 3** Parameter descriptionParameter | Type | Description  
---|---|---  
persist.sys.hicar.ap.interface | string | The vendor can set the name of the network adapter that can be used by the HiCar during wireless connection as required.  
  
To set this parameter for the head unit, ensure that the HiCar SDK can properly read the parameter in getprop mode. The debugging command is as follows:
    
    adb shell
    > setprop persist.sys.hicar.ap.interface wwan0 // Set the specified wwan0 network adapter to be used in wireless connection.
