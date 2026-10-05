---
name: document/cn/apiref/softbus-0000001055355032
title: Softbus
uri: https://developer.huawei.com/consumer/cn/doc/apiref/softbus-0000001055355032
source: portal
---

# Softbus  
  
#### Overview

**Description:**

Provides high-speed, secure communication between devices. 

This module implements unified distributed communication capability management between nearby devices, and provides link-independent device discovery and transmission interfaces to support service publishing and data transmission.

**Since:**

1.0

**Version:**

1.0

#### Summary

#### [h2]Files

File Name | Description  
---|---  
[discovery_service.h](https://device.harmonyos.com/cn/docs/develop/apiref/discovery__service_8h-0000001055075069) | Declares unified device service publishing interfaces.   
[session.h](https://device.harmonyos.com/cn/docs/develop/apiref/session_8h-0000001055195060) | Declares unified data transmission interfaces.   
  
#### [h2]Data Structures

Data Structure Name | Description  
---|---  
[PublishInfo](https://device.harmonyos.com/cn/docs/develop/apiref/publishinfo-0000001054876476) | Defines service provisioning information sent to a discovering device.   
[CapabilityMap](https://device.harmonyos.com/cn/docs/develop/apiref/capabilitymap-0000001054876474) | Defines the mapping between supported capabilities and bitmaps.   
[DeviceMap](https://device.harmonyos.com/cn/docs/develop/apiref/devicemap-0000001055355044) | Defines the mappings between the device type enumerations and device type names.   
[IPublishCallback](https://device.harmonyos.com/cn/docs/develop/apiref/ipublishcallback-0000001054915093) | Defines the callbacks for successful and failed service publishing.   
[CommonDeviceInfo](https://device.harmonyos.com/cn/docs/develop/apiref/commondeviceinfo-0000001055195066) | Defines the type and content of a device to set.   
[ISessionListener](https://device.harmonyos.com/cn/docs/develop/apiref/isessionlistener-0000001054715059) | Defines session callbacks.   
  
#### [h2]Typedefs

Typedef Name | Description  
---|---  
[PublishInfo](https://device.harmonyos.com/cn/docs/develop/apiref/softbus-0000001055355032#ZH-CN_TOPIC_0000001055355032__gae0bb52450c28ea9be1c5475d0d89830e) | typedef struct [PublishInfo](https://device.harmonyos.com/cn/docs/develop/apiref/publishinfo-0000001054876476) Defines service provisioning information sent to a discovering device.   
[DeviceType](https://device.harmonyos.com/cn/docs/develop/apiref/softbus-0000001055355032#ZH-CN_TOPIC_0000001055355032__ga9334bacb3ded964dc3c3367a6b70bcf4) | typedef enum [DeviceTypeEnum](https://device.harmonyos.com/cn/docs/develop/apiref/softbus-0000001055355032#ZH-CN_TOPIC_0000001055355032__gab20b49630026f3118d6c05b0a022f230) Enumerates device types.   
[IPublishCallback](https://device.harmonyos.com/cn/docs/develop/apiref/softbus-0000001055355032#ZH-CN_TOPIC_0000001055355032__gab622f2f40d12121620d464e43635a09b) | typedef struct [IPublishCallback](https://device.harmonyos.com/cn/docs/develop/apiref/ipublishcallback-0000001054915093) Defines the callbacks for successful and failed service publishing.   
[CommonDeviceInfo](https://device.harmonyos.com/cn/docs/develop/apiref/softbus-0000001055355032#ZH-CN_TOPIC_0000001055355032__ga8dc0eb993aea9593f96da339edf042ff) | typedef struct [CommonDeviceInfo](https://device.harmonyos.com/cn/docs/develop/apiref/commondeviceinfo-0000001055195066) Defines the type and content of a device to set.   
  
#### [h2]Enumerations

Enumeration Name | Description  
---|---  
[ExchangeMedium](https://device.harmonyos.com/cn/docs/develop/apiref/softbus-0000001055355032#ZH-CN_TOPIC_0000001055355032__ga595e0d3b3965b0492f6afa6da8e0d078) { [AUTO](https://device.harmonyos.com/cn/docs/develop/apiref/softbus-0000001055355032#ZH-CN_TOPIC_0000001055355032__gga595e0d3b3965b0492f6afa6da8e0d078aeef9468d1b98bca652a04bf5063fd9d6) = 0, [BLE](https://device.harmonyos.com/cn/docs/develop/apiref/softbus-0000001055355032#ZH-CN_TOPIC_0000001055355032__gga595e0d3b3965b0492f6afa6da8e0d078a83ac6cc3119966e1e5a7908c9e2e3b6a) = 1, [COAP](https://device.harmonyos.com/cn/docs/develop/apiref/softbus-0000001055355032#ZH-CN_TOPIC_0000001055355032__gga595e0d3b3965b0492f6afa6da8e0d078a8aebc0006e14100ba0e37073b1910195) = 2, [USB](https://device.harmonyos.com/cn/docs/develop/apiref/softbus-0000001055355032#ZH-CN_TOPIC_0000001055355032__gga595e0d3b3965b0492f6afa6da8e0d078a65f6b55fdc64778bf10632a795b97761) = 3 } | Enumerates media, such as Bluetooth, Wi-Fi and USB, used for publishing services.   
[ExchangeFreq](https://device.harmonyos.com/cn/docs/develop/apiref/softbus-0000001055355032#ZH-CN_TOPIC_0000001055355032__ga3b91e1f568541390281163f3c8afad65) { [LOW](https://device.harmonyos.com/cn/docs/develop/apiref/softbus-0000001055355032#ZH-CN_TOPIC_0000001055355032__gga3b91e1f568541390281163f3c8afad65a6a226f4143ca3b18999551694cdb72a8) = 0, [MID](https://device.harmonyos.com/cn/docs/develop/apiref/softbus-0000001055355032#ZH-CN_TOPIC_0000001055355032__gga3b91e1f568541390281163f3c8afad65a3bc56824c91d97fcda36dc99687bb236) = 1, [HIGH](https://device.harmonyos.com/cn/docs/develop/apiref/softbus-0000001055355032#ZH-CN_TOPIC_0000001055355032__gga3b91e1f568541390281163f3c8afad65a0c3a1dacf94061154b3ee354359c5893) = 2, [SUPER_HIGH](https://device.harmonyos.com/cn/docs/develop/apiref/softbus-0000001055355032#ZH-CN_TOPIC_0000001055355032__gga3b91e1f568541390281163f3c8afad65a4c5a6024301ee8c176da7226fda23cdc) = 3 } | Enumerates frequencies for publishing services. This enumeration is involved only in Bluetooth and is not supported currently.   
[DiscoverMode](https://device.harmonyos.com/cn/docs/develop/apiref/softbus-0000001055355032#ZH-CN_TOPIC_0000001055355032__ga7369479474cf45e9ca9c0f756473c74f) { [DISCOVER_MODE_PASSIVE](https://device.harmonyos.com/cn/docs/develop/apiref/softbus-0000001055355032#ZH-CN_TOPIC_0000001055355032__gga7369479474cf45e9ca9c0f756473c74fac6dc5925b6fb96b8e7e094dcb16b6ebf) = 0x55, [DISCOVER_MODE_ACTIVE](https://device.harmonyos.com/cn/docs/develop/apiref/softbus-0000001055355032#ZH-CN_TOPIC_0000001055355032__gga7369479474cf45e9ca9c0f756473c74fa9223119d2d3b76ce474ba46fcc2b2cdb) = 0xAA } | Enumerates the modes in which services are published. The publishing service supports the passive mode. Lite devices support the passive mode only.   
[PublishFailReason](https://device.harmonyos.com/cn/docs/develop/apiref/softbus-0000001055355032#ZH-CN_TOPIC_0000001055355032__ga6632fcae1db4a3a13370e3fb49e5e620) { [PUBLISH_FAIL_REASON_NOT_SUPPORT_MEDIUM](https://device.harmonyos.com/cn/docs/develop/apiref/softbus-0000001055355032#ZH-CN_TOPIC_0000001055355032__gga6632fcae1db4a3a13370e3fb49e5e620a1e11e7c898876b4060ae96986331250d) = 1, [PUBLISH_FAIL_REASON_PARAMETER_INVALID](https://device.harmonyos.com/cn/docs/develop/apiref/softbus-0000001055355032#ZH-CN_TOPIC_0000001055355032__gga6632fcae1db4a3a13370e3fb49e5e620aae6c44a3f6e7d11bc6373ca48898d9ca) = 2, [PUBLISH_FAIL_REASON_UNKNOWN](https://device.harmonyos.com/cn/docs/develop/apiref/softbus-0000001055355032#ZH-CN_TOPIC_0000001055355032__gga6632fcae1db4a3a13370e3fb49e5e620a1cd5dc3834e78f257b99120932eaff8f) = 0xFF } | Enumerates failure reasons for publishing services.   
[DataBitMap](https://device.harmonyos.com/cn/docs/develop/apiref/softbus-0000001055355032#ZH-CN_TOPIC_0000001055355032__gab839c7f1fd448f52f003ab0693f27bb4) { [HICALL_CAPABILITY_BITMAP](https://device.harmonyos.com/cn/docs/develop/apiref/softbus-0000001055355032#ZH-CN_TOPIC_0000001055355032__ggab839c7f1fd448f52f003ab0693f27bb4a773d83ceedb06bba15df8bf3f9c92f4c) = 0, [PROFILE_CAPABILITY_BITMAP](https://device.harmonyos.com/cn/docs/develop/apiref/softbus-0000001055355032#ZH-CN_TOPIC_0000001055355032__ggab839c7f1fd448f52f003ab0693f27bb4a2234c533a7dc926001be295d5af77dc3) = 1, [HOMEVISIONPIC_CAPABILITY_BITMAP](https://device.harmonyos.com/cn/docs/develop/apiref/softbus-0000001055355032#ZH-CN_TOPIC_0000001055355032__ggab839c7f1fd448f52f003ab0693f27bb4a13f6092c03683a03ec1793a7fba9adc2) = 2, [CASTPLUS_CAPABILITY_BITMAP](https://device.harmonyos.com/cn/docs/develop/apiref/softbus-0000001055355032#ZH-CN_TOPIC_0000001055355032__ggab839c7f1fd448f52f003ab0693f27bb4aa65f50213e151c5c1979639cba00e37f), [AA_CAPABILITY_BITMAP](https://device.harmonyos.com/cn/docs/develop/apiref/softbus-0000001055355032#ZH-CN_TOPIC_0000001055355032__ggab839c7f1fd448f52f003ab0693f27bb4a48fb1fbadf08443a5209176d2c8cf8a3), [DVKIT_CAPABILITY_BITMAP](https://device.harmonyos.com/cn/docs/develop/apiref/softbus-0000001055355032#ZH-CN_TOPIC_0000001055355032__ggab839c7f1fd448f52f003ab0693f27bb4ade3b8cbbea290f02bdbccd8c200c5ab8), [DDMP_CAPABILITY_BITMAP](https://device.harmonyos.com/cn/docs/develop/apiref/softbus-0000001055355032#ZH-CN_TOPIC_0000001055355032__ggab839c7f1fd448f52f003ab0693f27bb4ae0134ba56bf2fe5ca4d6d0a160d8861b) } | Enumerates supported capabilities published by a device.   
[DeviceTypeEnum](https://device.harmonyos.com/cn/docs/develop/apiref/softbus-0000001055355032#ZH-CN_TOPIC_0000001055355032__gab20b49630026f3118d6c05b0a022f230) { [UNKOWN](https://device.harmonyos.com/cn/docs/develop/apiref/softbus-0000001055355032#ZH-CN_TOPIC_0000001055355032__ggab20b49630026f3118d6c05b0a022f230a1da3b620fee1e91433a53fc5559392f9) = 0x00, [PHONE](https://device.harmonyos.com/cn/docs/develop/apiref/softbus-0000001055355032#ZH-CN_TOPIC_0000001055355032__ggab20b49630026f3118d6c05b0a022f230ae1f8e5380dc0849533e4a3b81468ddb1) = 0x0E, [PAD](https://device.harmonyos.com/cn/docs/develop/apiref/softbus-0000001055355032#ZH-CN_TOPIC_0000001055355032__ggab20b49630026f3118d6c05b0a022f230a58a4470bc0f9a4fcaf059b26e95ab9c2) = 0x11, [TV](https://device.harmonyos.com/cn/docs/develop/apiref/softbus-0000001055355032#ZH-CN_TOPIC_0000001055355032__ggab20b49630026f3118d6c05b0a022f230a818aafb4e6e34b988f90964cd884b8a2) = 0x9C, [PC](https://device.harmonyos.com/cn/docs/develop/apiref/softbus-0000001055355032#ZH-CN_TOPIC_0000001055355032__ggab20b49630026f3118d6c05b0a022f230aa2c62b62b658ac45e83749e9e9c1cb46) = 0x0C, [AUDIO](https://device.harmonyos.com/cn/docs/develop/apiref/softbus-0000001055355032#ZH-CN_TOPIC_0000001055355032__ggab20b49630026f3118d6c05b0a022f230ad45d481f1c1a6029ce6a398e52e53bfd) = 0x0A, [CAR](https://device.harmonyos.com/cn/docs/develop/apiref/softbus-0000001055355032#ZH-CN_TOPIC_0000001055355032__ggab20b49630026f3118d6c05b0a022f230a5fc54ebcb1dd4bf1e1b93cbc77b57b40) = 0x83, [L0](https://device.harmonyos.com/cn/docs/develop/apiref/softbus-0000001055355032#ZH-CN_TOPIC_0000001055355032__ggab20b49630026f3118d6c05b0a022f230a51451264203360e0ffacec9b6d8ef7c9) = 0xF1, [L1](https://device.harmonyos.com/cn/docs/develop/apiref/softbus-0000001055355032#ZH-CN_TOPIC_0000001055355032__ggab20b49630026f3118d6c05b0a022f230ae5bc7ee7d6dda5340a28f91834f10543) = 0xF2 } | Enumerates device types.   
[CommonDeviceKey](https://device.harmonyos.com/cn/docs/develop/apiref/softbus-0000001055355032#ZH-CN_TOPIC_0000001055355032__ga25be99ffbe88e41f7ce51d2678010254) { [COMM_DEVICE_KEY_DEVID](https://device.harmonyos.com/cn/docs/develop/apiref/softbus-0000001055355032#ZH-CN_TOPIC_0000001055355032__gga25be99ffbe88e41f7ce51d2678010254a700842536bdaedb960842d6eaad40b10) = 0, [COMM_DEVICE_KEY_DEVTYPE](https://device.harmonyos.com/cn/docs/develop/apiref/softbus-0000001055355032#ZH-CN_TOPIC_0000001055355032__gga25be99ffbe88e41f7ce51d2678010254af943e70b688809585638337aba3fb816) = 1, [COMM_DEVICE_KEY_DEVNAME](https://device.harmonyos.com/cn/docs/develop/apiref/softbus-0000001055355032#ZH-CN_TOPIC_0000001055355032__gga25be99ffbe88e41f7ce51d2678010254a1e0a393d9715b263f5abe01d289fd341) = 2, [COMM_DEVICE_KEY_MAX](https://device.harmonyos.com/cn/docs/develop/apiref/softbus-0000001055355032#ZH-CN_TOPIC_0000001055355032__gga25be99ffbe88e41f7ce51d2678010254af7be5714543eb5632b641dac82ef4d84) } | Enumerates device information, such as its indentity, type and name.   
  
#### [h2]Functions

Function | Description  
---|---  
[PublishService](https://device.harmonyos.com/cn/docs/develop/apiref/softbus-0000001055355032#ZH-CN_TOPIC_0000001055355032__ga010557e05b3f0b0b1a05157f1724e13a) (const char *moduleName, const struct [PublishInfo](https://device.harmonyos.com/cn/docs/develop/apiref/publishinfo-0000001054876476) *info, const struct [IPublishCallback](https://device.harmonyos.com/cn/docs/develop/apiref/ipublishcallback-0000001054915093) *cb) | int  Publishes a service to the discovering device in the LAN.   
[UnPublishService](https://device.harmonyos.com/cn/docs/develop/apiref/softbus-0000001055355032#ZH-CN_TOPIC_0000001055355032__gac9463e62e324155634c01facdf642ea7) (const char *moduleName, int publishId) | int  Unpublishes a service based on the **publicId** and **moduleName**.   
[SetCommonDeviceInfo](https://device.harmonyos.com/cn/docs/develop/apiref/softbus-0000001055355032#ZH-CN_TOPIC_0000001055355032__gaca3ae566d98727d111befb4a642bafc4) (const struct [CommonDeviceInfo](https://device.harmonyos.com/cn/docs/develop/apiref/commondeviceinfo-0000001055195066) *devInfo, unsigned int num) | int  Sets common device information, such as its indentity, type and name.   
[CreateSessionServer](https://device.harmonyos.com/cn/docs/develop/apiref/softbus-0000001055355032#ZH-CN_TOPIC_0000001055355032__gad7e95cced3378e8f489553d70b121392) (const char *mouduleName, const char *sessionName, struct [ISessionListener](https://device.harmonyos.com/cn/docs/develop/apiref/isessionlistener-0000001054715059) *listener) | int  Creates a session server based on a module name and session name.   
[RemoveSessionServer](https://device.harmonyos.com/cn/docs/develop/apiref/softbus-0000001055355032#ZH-CN_TOPIC_0000001055355032__ga225a1e178544457263d94078e638b7b5) (const char *mouduleName, const char *sessionName) | int  Removes a session server based on a module name and session name.   
[SendBytes](https://device.harmonyos.com/cn/docs/develop/apiref/softbus-0000001055355032#ZH-CN_TOPIC_0000001055355032__ga0333c76724dbef71bca48fb2a82e6980) (int sessionId, const void *data, unsigned int len) | int  Sends data based on a session ID.   
[GetMySessionName](https://device.harmonyos.com/cn/docs/develop/apiref/softbus-0000001055355032#ZH-CN_TOPIC_0000001055355032__ga00611f717919f4156c74b7919b28c7d8) (int sessionId, char *sessionName, unsigned int len) | int  Obtains the session name registered by the local device based on the session ID.   
[GetPeerSessionName](https://device.harmonyos.com/cn/docs/develop/apiref/softbus-0000001055355032#ZH-CN_TOPIC_0000001055355032__ga92d5a47fcdf97a0e01797c77e644033e) (int sessionId, char *sessionName, unsigned int len) | int  Obtains the session name registered by the peer device based on the session ID.   
[GetPeerDeviceId](https://device.harmonyos.com/cn/docs/develop/apiref/softbus-0000001055355032#ZH-CN_TOPIC_0000001055355032__ga21b9a889069eea6e7fe653820e601c04) (int sessionId, char *devId, unsigned int len) | int  Obtains the peer device ID based on a session ID.   
[CloseSession](https://device.harmonyos.com/cn/docs/develop/apiref/softbus-0000001055355032#ZH-CN_TOPIC_0000001055355032__ga5b0c0b334f387f9c2753146ee0890780) (int sessionId) | void  Closes a connected session based on a session ID.   
  
#### Details

#### Typedef

#### [h2]CommonDeviceInfo
    
    typedef struct [CommonDeviceInfo](https://device.harmonyos.com/cn/docs/develop/apiref/commondeviceinfo-0000001055195066) [CommonDeviceInfo](https://device.harmonyos.com/cn/docs/develop/apiref/commondeviceinfo-0000001055195066)

**Description:**

Defines the type and content of a device to set. 

#### [h2]DeviceType
    
    typedef enum [DeviceTypeEnum](https://device.harmonyos.com/cn/docs/develop/apiref/softbus-0000001055355032#ZH-CN_TOPIC_0000001055355032__gab20b49630026f3118d6c05b0a022f230) [DeviceType](https://device.harmonyos.com/cn/docs/develop/apiref/softbus-0000001055355032#ZH-CN_TOPIC_0000001055355032__ga9334bacb3ded964dc3c3367a6b70bcf4)

**Description:**

Enumerates device types. 

#### [h2]IPublishCallback
    
    typedef struct [IPublishCallback](https://device.harmonyos.com/cn/docs/develop/apiref/ipublishcallback-0000001054915093) [IPublishCallback](https://device.harmonyos.com/cn/docs/develop/apiref/ipublishcallback-0000001054915093)

**Description:**

Defines the callbacks for successful and failed service publishing. 

#### [h2]PublishInfo
    
    typedef struct [PublishInfo](https://device.harmonyos.com/cn/docs/develop/apiref/publishinfo-0000001054876476) [PublishInfo](https://device.harmonyos.com/cn/docs/develop/apiref/publishinfo-0000001054876476)

**Description:**

Defines service provisioning information sent to a discovering device. 

#### Enumeration Type

#### [h2]CommonDeviceKey
    
    enum [CommonDeviceKey](https://device.harmonyos.com/cn/docs/develop/apiref/softbus-0000001055355032#ZH-CN_TOPIC_0000001055355032__ga25be99ffbe88e41f7ce51d2678010254)

**Description:**

Enumerates device information, such as its indentity, type and name. 

Enumerator | Description  
---|---  
****COMM_DEVICE_KEY_DEVID | Device ID. The value contains a maximum of 64 characters.   
****COMM_DEVICE_KEY_DEVTYPE | Device type. Currently, only **ddmpCapability** is supported.   
****COMM_DEVICE_KEY_DEVNAME | Device name. The value contains a maximum of 63 characters.   
****COMM_DEVICE_KEY_MAX | Reserved   
  
#### [h2]DataBitMap
    
    enum [DataBitMap](https://device.harmonyos.com/cn/docs/develop/apiref/softbus-0000001055355032#ZH-CN_TOPIC_0000001055355032__gab839c7f1fd448f52f003ab0693f27bb4)

**Description:**

Enumerates supported capabilities published by a device. 

Enumerator | Description  
---|---  
****HICALL_CAPABILITY_BITMAP | MeeTime   
****PROFILE_CAPABILITY_BITMAP | Video reverse connection in the smart domain   
****HOMEVISIONPIC_CAPABILITY_BITMAP | Gallery in Vision   
****CASTPLUS_CAPABILITY_BITMAP | cast+   
****AA_CAPABILITY_BITMAP | Input method in Vision   
****DVKIT_CAPABILITY_BITMAP | Device virtualization tool package   
****DDMP_CAPABILITY_BITMAP | Distributed middleware   
  
#### [h2]DeviceTypeEnum
    
    enum [DeviceTypeEnum](https://device.harmonyos.com/cn/docs/develop/apiref/softbus-0000001055355032#ZH-CN_TOPIC_0000001055355032__gab20b49630026f3118d6c05b0a022f230)

**Description:**

Enumerates device types. 

Enumerator | Description  
---|---  
****UNKOWN | Unknown   
****PHONE | Smartphone   
****PAD | Tablet   
****TV | Smart TV   
****PC | PC   
****AUDIO | Audio device   
****CAR | Vehicle-mounted device   
****L0 | Light device L0   
****L1 | Light device L1   
  
#### [h2]DiscoverMode
    
    enum [DiscoverMode](https://device.harmonyos.com/cn/docs/develop/apiref/softbus-0000001055355032#ZH-CN_TOPIC_0000001055355032__ga7369479474cf45e9ca9c0f756473c74f)

**Description:**

Enumerates the modes in which services are published. The publishing service supports the passive mode. Lite devices support the passive mode only. 

Enumerator | Description  
---|---  
****DISCOVER_MODE_PASSIVE | Passive   
****DISCOVER_MODE_ACTIVE | Proactive   
  
#### [h2]ExchangeFreq
    
    enum [ExchangeFreq](https://device.harmonyos.com/cn/docs/develop/apiref/softbus-0000001055355032#ZH-CN_TOPIC_0000001055355032__ga3b91e1f568541390281163f3c8afad65)

**Description:**

Enumerates frequencies for publishing services. This enumeration is involved only in Bluetooth and is not supported currently. 

Enumerator | Description  
---|---  
****LOW | Low   
****MID | Medium   
****HIGH | High   
****SUPER_HIGH | Super-high   
  
#### [h2]ExchangeMedium
    
    enum [ExchangeMedium](https://device.harmonyos.com/cn/docs/develop/apiref/softbus-0000001055355032#ZH-CN_TOPIC_0000001055355032__ga595e0d3b3965b0492f6afa6da8e0d078)

**Description:**

Enumerates media, such as Bluetooth, Wi-Fi and USB, used for publishing services. 

Currently, the media can only be set to coap. 

Enumerator | Description  
---|---  
****AUTO | Automatic medium selection   
****BLE | Bluetooth   
****COAP | Wi-Fi   
****USB | USB   
  
#### [h2]PublishFailReason
    
    enum [PublishFailReason](https://device.harmonyos.com/cn/docs/develop/apiref/softbus-0000001055355032#ZH-CN_TOPIC_0000001055355032__ga6632fcae1db4a3a13370e3fb49e5e620)

**Description:**

Enumerates failure reasons for publishing services. 

The failure reason is returned to the caller through the callback function. 

Enumerator | Description  
---|---  
****PUBLISH_FAIL_REASON_NOT_SUPPORT_MEDIUM | Unsupported medium   
****PUBLISH_FAIL_REASON_PARAMETER_INVALID | Invalid parameter   
****PUBLISH_FAIL_REASON_UNKNOWN | Unknown reason   
  
#### Function

#### [h2]CloseSession()
    
    void CloseSession (int sessionId)

**Description:**

Closes a connected session based on a session ID. 

**Parameters:**

Name | Description  
---|---  
sessionId | Indicates the session ID.   
  
#### [h2]CreateSessionServer()
    
    int CreateSessionServer (const char * mouduleName, const char * sessionName, struct [ISessionListener](https://device.harmonyos.com/cn/docs/develop/apiref/isessionlistener-0000001054715059) * listener )

**Description:**

Creates a session server based on a module name and session name. 

A maximum of 18 session servers can be created.

**Parameters:**

Name | Description  
---|---  
moduleName | Indicates the pointer to the module name, which can be used to check whether the session server is in this module. The value cannot be empty and can contain a maximum of 64 characters.   
sessionName | Indicates the pointer to the session name, which is the unique ID of the session server. The value cannot be empty and can contain a maximum of 64 characters.   
listener | Indicates the pointer to the session callback structure, which cannot be empty.   
  
**Returns:**

Returns **0** if the operation is successful; returns **-1** otherwise. 

**See also:**

[RemoveSessionServer](https://device.harmonyos.com/cn/docs/develop/apiref/softbus-0000001055355032#ZH-CN_TOPIC_0000001055355032__ga225a1e178544457263d94078e638b7b5)

#### [h2]GetMySessionName()
    
    int GetMySessionName (int sessionId, char * sessionName, unsigned int len )

**Description:**

Obtains the session name registered by the local device based on the session ID. 

**Parameters:**

Name | Description  
---|---  
sessionId | Indicates the session ID.   
sessionName | Indicates the pointer to the buffer for storing the session name.   
len | Indicates the length of the buffer.   
  
**Returns:**

Returns **0** if the operation is successful; returns **-1** otherwise. 

#### [h2]GetPeerDeviceId()
    
    int GetPeerDeviceId (int sessionId, char * devId, unsigned int len )

**Description:**

Obtains the peer device ID based on a session ID. 

**Parameters:**

Name | Description  
---|---  
sessionId | Indicates the session ID.   
devId | Indicates the pointer to the buffer for storing the device ID.   
len | Indicates the length of the buffer.   
  
**Returns:**

Returns **0** if the operation is successful; returns **-1** otherwise. 

#### [h2]GetPeerSessionName()
    
    int GetPeerSessionName (int sessionId, char * sessionName, unsigned int len )

**Description:**

Obtains the session name registered by the peer device based on the session ID. 

**Parameters:**

Name | Description  
---|---  
sessionId | Indicates the session ID.   
sessionName | Indicates the pointer to the buffer for storing the session name.   
len | Indicates the length of the buffer.   
  
**Returns:**

Returns **0** if the operation is successful; returns **-1** otherwise. 

#### [h2]PublishService()
    
    int PublishService (const char * moduleName, const struct [PublishInfo](https://device.harmonyos.com/cn/docs/develop/apiref/publishinfo-0000001054876476) * info, const struct [IPublishCallback](https://device.harmonyos.com/cn/docs/develop/apiref/ipublishcallback-0000001054915093) * cb )

**Description:**

Publishes a service to the discovering device in the LAN. 

The **publicId** and **moduleName** uniquely identify a service. A maximum of three services can be published.

**Parameters:**

Name | Description  
---|---  
moduleName | Indicates the pointer to the module name of the upper-layer service. The value contains a maximum of 63 bytes.   
info | Indicates the pointer to the service to publish. For details, see [PublishInfo](https://device.harmonyos.com/cn/docs/develop/apiref/publishinfo-0000001054876476).   
cb | Indicates the pointer to the callback for service publishing. For details, see [IPublishCallback](https://device.harmonyos.com/cn/docs/develop/apiref/ipublishcallback-0000001054915093).   
  
**Returns:**

Returns **0** if the operation is successful; returns **-1** otherwise. 

#### [h2]RemoveSessionServer()
    
    int RemoveSessionServer (const char * mouduleName, const char * sessionName )

**Description:**

Removes a session server based on a module name and session name. 

**Parameters:**

Name | Description  
---|---  
moduleName | Indicates the pointer to the name of the registered module, which can be used to check whether the session server is in this module. The value cannot be empty and can contain a maximum of 64 characters.   
sessionName | Indicates the pointer to the session name. The value cannot be empty and can contain a maximum of 64 characters.   
  
**Returns:**

Returns **0** if the operation is successful; returns **-1** otherwise. 

**See also:**

[CreateSessionServer](https://device.harmonyos.com/cn/docs/develop/apiref/softbus-0000001055355032#ZH-CN_TOPIC_0000001055355032__gad7e95cced3378e8f489553d70b121392)

#### [h2]SendBytes()
    
    int SendBytes (int sessionId, const void * data, unsigned int len )

**Description:**

Sends data based on a session ID. 

**Parameters:**

Name | Description  
---|---  
sessionId | Indicates the session ID.   
data | Indicates the pointer to the data to send, which cannot be **NULL**.   
len | Indicates the length of the data to send. The maximum length cannot exceed 984 characters.   
  
**Returns:**

Returns **0** if the function is called successfully; returns **-1** otherwise. 

#### [h2]SetCommonDeviceInfo()
    
    int SetCommonDeviceInfo (const struct [CommonDeviceInfo](https://device.harmonyos.com/cn/docs/develop/apiref/commondeviceinfo-0000001055195066) * devInfo, unsigned int num )

**Description:**

Sets common device information, such as its indentity, type and name. 

**Parameters:**

Name | Description  
---|---  
devInfo | Indicates the pointer to the device information array.   
num | Indicates the number of elements in the device information array. If the value is inconsistent with the length of the device information array, the program breaks down.   
  
**Returns:**

Returns **0** if the operation is successful; returns a non-zero value otherwise. 

**See also:**

[PublishService](https://device.harmonyos.com/cn/docs/develop/apiref/softbus-0000001055355032#ZH-CN_TOPIC_0000001055355032__ga010557e05b3f0b0b1a05157f1724e13a)

#### [h2]UnPublishService()
    
    int UnPublishService (const char * moduleName, int publishId )

**Description:**

Unpublishes a service based on the **publicId** and **moduleName**. 

**Parameters:**

Name | Description  
---|---  
moduleName | Indicates the pointer to the module name of the upper-layer service. The value contains a maximum of 63 bytes.   
publishId | Indicates the ID of the service to unpublish. The value must be greater than **0**.   
  
**Returns:**

Returns **0** if the operation is successful; returns a non-zero value otherwise. 

#### Variable

#### [h2]bitmap
    
    [DataBitMap](https://device.harmonyos.com/cn/docs/develop/apiref/softbus-0000001055355032#ZH-CN_TOPIC_0000001055355032__gab839c7f1fd448f52f003ab0693f27bb4) CapabilityMap::bitmap

**Description:**

Bitmaps. For details, see [DataBitMap](https://device.harmonyos.com/cn/docs/develop/apiref/softbus-0000001055355032#ZH-CN_TOPIC_0000001055355032__gab839c7f1fd448f52f003ab0693f27bb4). 

#### [h2]capability [1/2]
    
    const char* PublishInfo::capability

**Description:**

[Service](https://device.harmonyos.com/cn/docs/develop/apiref/service-0000001055675026) publishing capabilities. For details, see **g_capabilityMap**. 

#### [h2]capability [2/2]
    
    char* CapabilityMap::capability

**Description:**

Capability. For details, see **g_capabilityMap**. 

#### [h2]capabilityData
    
    unsigned char* PublishInfo::capabilityData

**Description:**

Capability data for service publishing 

#### [h2]dataLen
    
    unsigned int PublishInfo::dataLen

**Description:**

Maximum length of the capability data for service publishing (2 bytes) 

#### [h2]devType
    
    [DeviceType](https://device.harmonyos.com/cn/docs/develop/apiref/softbus-0000001055355032#ZH-CN_TOPIC_0000001055355032__ga9334bacb3ded964dc3c3367a6b70bcf4) DeviceMap::devType

**Description:**

Enumeration of a device type. Only enumerations defined in **g_devMap** are supported. 

#### [h2]freq
    
    [ExchangeFreq](https://device.harmonyos.com/cn/docs/develop/apiref/softbus-0000001055355032#ZH-CN_TOPIC_0000001055355032__ga3b91e1f568541390281163f3c8afad65) PublishInfo::freq

**Description:**

[Service](https://device.harmonyos.com/cn/docs/develop/apiref/service-0000001055675026) publishing frequency 

#### [h2]key
    
    [CommonDeviceKey](https://device.harmonyos.com/cn/docs/develop/apiref/softbus-0000001055355032#ZH-CN_TOPIC_0000001055355032__ga25be99ffbe88e41f7ce51d2678010254) CommonDeviceInfo::key

**Description:**

Device information type. For details, see [CommonDeviceKey](https://device.harmonyos.com/cn/docs/develop/apiref/softbus-0000001055355032#ZH-CN_TOPIC_0000001055355032__ga25be99ffbe88e41f7ce51d2678010254). 

#### [h2]medium
    
    [ExchangeMedium](https://device.harmonyos.com/cn/docs/develop/apiref/softbus-0000001055355032#ZH-CN_TOPIC_0000001055355032__ga595e0d3b3965b0492f6afa6da8e0d078) PublishInfo::medium

**Description:**

[Service](https://device.harmonyos.com/cn/docs/develop/apiref/service-0000001055675026) publishing medium 

#### [h2]mode
    
    int PublishInfo::mode

**Description:**

[Service](https://device.harmonyos.com/cn/docs/develop/apiref/service-0000001055675026) publishing mode, which can be [DISCOVER_MODE_PASSIVE](https://device.harmonyos.com/cn/docs/develop/apiref/softbus-0000001055355032#ZH-CN_TOPIC_0000001055355032__gga7369479474cf45e9ca9c0f756473c74fac6dc5925b6fb96b8e7e094dcb16b6ebf) or [DISCOVER_MODE_ACTIVE](https://device.harmonyos.com/cn/docs/develop/apiref/softbus-0000001055355032#ZH-CN_TOPIC_0000001055355032__gga7369479474cf45e9ca9c0f756473c74fa9223119d2d3b76ce474ba46fcc2b2cdb)

#### [h2]onBytesReceived
    
    void(* ISessionListener::onBytesReceived) (int sessionId, const void *data, unsigned int dataLen)

**Description:**

Called when data is received. 

This function is used to notify that data is received.

**Parameters:**

Name | Description  
---|---  
sessionId | Indicates the session ID.   
data | Indicates the pointer to the data received.   
dataLen | Indicates the length of the data received.   
  
#### [h2]onPublishFail
    
    void(* IPublishCallback::onPublishFail) (int publishId, [PublishFailReason](https://device.harmonyos.com/cn/docs/develop/apiref/softbus-0000001055355032#ZH-CN_TOPIC_0000001055355032__ga6632fcae1db4a3a13370e3fb49e5e620) reason)

**Description:**

Callback for failed publishing 

#### [h2]onPublishSuccess
    
    void(* IPublishCallback::onPublishSuccess) (int publishId)

**Description:**

Callback for successful publishing 

#### [h2]onSessionClosed
    
    void(* ISessionListener::onSessionClosed) (int sessionId)

**Description:**

Called when a session is closed. 

This function can be used to release resources related to the session. You do not need to call [CloseSession](https://device.harmonyos.com/cn/docs/develop/apiref/softbus-0000001055355032#ZH-CN_TOPIC_0000001055355032__ga5b0c0b334f387f9c2753146ee0890780).

**Parameters:**

Name | Description  
---|---  
sessionId | Indicates the session ID.   
  
#### [h2]onSessionOpened
    
    int(* ISessionListener::onSessionOpened) (int sessionId)

**Description:**

Called when a session is opened. 

This function can be used to verify the session or initialize resources related to the session.

**Parameters:**

Name | Description  
---|---  
sessionId | Indicates the session ID.   
  
**Returns:**

Returns **0** if the session connection is accepted; returns a non-zero value otherwise (you do not need to call [CloseSession](https://device.harmonyos.com/cn/docs/develop/apiref/softbus-0000001055355032#ZH-CN_TOPIC_0000001055355032__ga5b0c0b334f387f9c2753146ee0890780) to close the session). 

#### [h2]publishId
    
    int PublishInfo::publishId

**Description:**

[Service](https://device.harmonyos.com/cn/docs/develop/apiref/service-0000001055675026) publishing ID 

#### [h2]value [1/2]
    
    char* DeviceMap::value

**Description:**

Name of a device type. Only names defined in **g_devMap** are supported. 

#### [h2]value [2/2]
    
    const char* CommonDeviceInfo::value

**Description:**

Content to set 
