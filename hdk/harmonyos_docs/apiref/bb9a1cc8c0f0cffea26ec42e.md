---
name: document/cn/apiref/moduleinfo-0000001054879540
title: ModuleInfo
uri: https://developer.huawei.com/consumer/cn/doc/apiref/moduleinfo-0000001054879540
source: portal
---

# ModuleInfo

#### Overview

**Related Modules:**

[BundleManager](https://device.harmonyos.com/cn/docs/develop/apiref/bundlemanager-0000001054918105)

**Description:**

Defines the HAP information. 

#### Summary

#### [h2]Data Fields

Variable Name | Description  
---|---  
[moduleName](https://device.harmonyos.com/cn/docs/develop/apiref/moduleinfo-0000001054879540#ZH-CN_TOPIC_0000001054879540__ae194862e3cf07df40e0d41b3aa9eb1c0) | char *   
[description](https://device.harmonyos.com/cn/docs/develop/apiref/moduleinfo-0000001054879540#ZH-CN_TOPIC_0000001054879540__af7211393306adaa07ad32c642539b7f6) | char *   
[name](https://device.harmonyos.com/cn/docs/develop/apiref/moduleinfo-0000001054879540#ZH-CN_TOPIC_0000001054879540__adb9af8c6739aaf550e91119b146eb44e) | char *   
[moduleType](https://device.harmonyos.com/cn/docs/develop/apiref/moduleinfo-0000001054879540#ZH-CN_TOPIC_0000001054879540__af8f4264764394fb20c75a18a1a816ac6) | char *   
[isDeliveryInstall](https://device.harmonyos.com/cn/docs/develop/apiref/moduleinfo-0000001054879540#ZH-CN_TOPIC_0000001054879540__a6e76e2eb535e0d92a9e49652486c35ec) | bool   
[deviceType](https://device.harmonyos.com/cn/docs/develop/apiref/moduleinfo-0000001054879540#ZH-CN_TOPIC_0000001054879540__a7166c89b6815875afcafaca7cec21ae0) [DEVICE_TYPE_SIZE] | char *   
[metaData](https://device.harmonyos.com/cn/docs/develop/apiref/moduleinfo-0000001054879540#ZH-CN_TOPIC_0000001054879540__a6731b378fc6b34c7e94ab3c0d8d08e5b) [METADATA_SIZE] | [MetaData](https://device.harmonyos.com/cn/docs/develop/apiref/metadata-0000001054479571) *   
  
#### Details

#### Field

#### [h2]description
    
    char* ModuleInfo::description

**Description:**

Pointer to the description of the HAP package 

#### [h2]deviceType
    
    char* ModuleInfo::deviceType[DEVICE_TYPE_SIZE]

**Description:**

Pointer to the types of devices that can run the application. The maximum size of the device type array is **DEVICE_TYPE_SIZE**. 

#### [h2]isDeliveryInstall
    
    bool ModuleInfo::isDeliveryInstall

**Description:**

Whether the HAP package is installed while the user is installing the application 

#### [h2]metaData
    
    [MetaData](https://device.harmonyos.com/cn/docs/develop/apiref/metadata-0000001054479571)* ModuleInfo::metaData[METADATA_SIZE]

**Description:**

Pointer to the metadata array whose maximum size is **METADATA_SIZE**

#### [h2]moduleName
    
    char* ModuleInfo::moduleName

**Description:**

Pointer to the HAP package name 

#### [h2]moduleType
    
    char* ModuleInfo::moduleType

**Description:**

Type of the HAP package, either **Entry.hap** or **Feature.hap**

#### [h2]name
    
    char* ModuleInfo::name

**Description:**

Pointer to the class name of the HAP package 
