---
name: document/cn/apiref/metadata-0000001054479571
title: MetaData
uri: https://developer.huawei.com/consumer/cn/doc/apiref/metadata-0000001054479571
source: portal
---

# MetaData  
  
#### Overview

**Related Modules:**

[BundleManager](https://device.harmonyos.com/cn/docs/develop/apiref/bundlemanager-0000001054918105)

**Description:**

Defines the metadata information in a [ModuleInfo](https://device.harmonyos.com/cn/docs/develop/apiref/moduleinfo-0000001054879540) object. 

#### Summary

#### [h2]Data Fields

Variable Name | Description  
---|---  
[name](https://device.harmonyos.com/cn/docs/develop/apiref/metadata-0000001054479571#ZH-CN_TOPIC_0000001054479571__ab3fee0041d776544e4305bcab5ff992a) | char *   
[value](https://device.harmonyos.com/cn/docs/develop/apiref/metadata-0000001054479571#ZH-CN_TOPIC_0000001054479571__a33b9134160cc5481447142f021dd75ac) | char *   
[extra](https://device.harmonyos.com/cn/docs/develop/apiref/metadata-0000001054479571#ZH-CN_TOPIC_0000001054479571__afb875615d3a2774cca2230a190815911) | char *   
  
#### Details

#### Field

#### [h2]extra
    
    char* MetaData::extra

**Description:**

Extra data. You can customize this field as required. 

#### [h2]name
    
    char* MetaData::name

**Description:**

Pointer to the metadata name 

#### [h2]value
    
    char* MetaData::value

**Description:**

Pointer to the metadata value 
