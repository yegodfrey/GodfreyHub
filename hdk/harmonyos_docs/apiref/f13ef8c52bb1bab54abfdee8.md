---
name: document/cn/apiref/init-0000001055675012
title: OHOS Init
uri: https://developer.huawei.com/consumer/cn/doc/apiref/init-0000001055675012
source: portal
---

# OHOS Init  
  
#### Overview

**Description:**

Provides the entries for initializing and starting services and features. 

This module provides the entries for initializing services and features during service development. Services and features are initialized in the following sequence: core phase, core system service, core system feature, system startup, system service, system feature, application-layer service, and application-layer feature. 

**Since:**

1.0

**Version:**

1.0

#### Summary

#### [h2]Files

File Name | Description  
---|---  
[ohos_init.h](https://device.harmonyos.com/cn/docs/develop/apiref/ohos__init_8h-0000001055036446) | Provides the entries for initializing and starting services and features.   
  
#### [h2]Macros

Macro Name and Value | Description  
---|---  
[CORE_INIT](https://device.harmonyos.com/cn/docs/develop/apiref/init-0000001055675012#ZH-CN_TOPIC_0000001055675012__ga97a9cae685c8fe08b3ed438c4de4419d)(func) LAYER_INITCALL_DEF(func, core, "core") | Identifies the entry for initializing and starting a core phase by the priority 2.   
[CORE_INIT_PRI](https://device.harmonyos.com/cn/docs/develop/apiref/init-0000001055675012#ZH-CN_TOPIC_0000001055675012__ga028481fe849c821d876df662158d5122)(func, priority) LAYER_INITCALL(func, core, "core", priority) | Identifies the entry for initializing and starting a core phase by the specified priority.   
[SYS_SERVICE_INIT](https://device.harmonyos.com/cn/docs/develop/apiref/init-0000001055675012#ZH-CN_TOPIC_0000001055675012__gaeecafaa1e903880d1d8570dc6b09aec7)(func) LAYER_INITCALL_DEF(func, sys_service, "sys.service") | Identifies the entry for initializing and starting a core system service by the priority 2.   
[SYS_SERVICE_INIT_PRI](https://device.harmonyos.com/cn/docs/develop/apiref/init-0000001055675012#ZH-CN_TOPIC_0000001055675012__ga8200637c1413a8ddfb2997668d325ba7)(func, priority) LAYER_INITCALL(func, sys_service, "sys.service", priority) | Identifies the entry for initializing and starting a core system service by the specified priority.   
[SYS_FEATURE_INIT](https://device.harmonyos.com/cn/docs/develop/apiref/init-0000001055675012#ZH-CN_TOPIC_0000001055675012__ga0ade3a78723c48748ae5fbbb261538a2)(func) LAYER_INITCALL_DEF(func, sys_feature, "sys.feature") | Identifies the entry for initializing and starting a core system feature by the priority 2.   
[SYS_FEATURE_INIT_PRI](https://device.harmonyos.com/cn/docs/develop/apiref/init-0000001055675012#ZH-CN_TOPIC_0000001055675012__ga561c8a47e7b929c7300a0c2acb458459)(func, priority) LAYER_INITCALL(func, sys_feature, "sys.feature", priority) | Identifies the entry for initializing and starting a core system feature by the specified priority.   
[SYS_RUN](https://device.harmonyos.com/cn/docs/develop/apiref/init-0000001055675012#ZH-CN_TOPIC_0000001055675012__gaa6d9a034e9ee034240a023e8cb9c2c78)(func) LAYER_INITCALL_DEF(func, run, "run") | Identifies the entry for initializing and starting a system running phase by the priority 2.   
[SYS_RUN_PRI](https://device.harmonyos.com/cn/docs/develop/apiref/init-0000001055675012#ZH-CN_TOPIC_0000001055675012__ga2371a43afede3e4840893448c9f97843)(func, priority) LAYER_INITCALL(func, run, "run", priority) | Identifies the entry for initializing and starting a system running phase by the specified priority.   
[SYSEX_SERVICE_INIT](https://device.harmonyos.com/cn/docs/develop/apiref/init-0000001055675012#ZH-CN_TOPIC_0000001055675012__ga0e8322b3ab1975d234bd7275b79ed7eb)(func) LAYER_INITCALL_DEF(func, app_service, "app.service") | Identifies the entry for initializing and starting a system service by the priority 2.   
[SYSEX_SERVICE_INIT_PRI](https://device.harmonyos.com/cn/docs/develop/apiref/init-0000001055675012#ZH-CN_TOPIC_0000001055675012__gae0c14aff58448d4a428ad55cfee7c89b)(func, priority) LAYER_INITCALL(func, app_service, "app.service", priority) | Identifies the entry for initializing and starting a system service by the specified priority.   
[SYSEX_FEATURE_INIT](https://device.harmonyos.com/cn/docs/develop/apiref/init-0000001055675012#ZH-CN_TOPIC_0000001055675012__ga7e321122cb4bfc41bfd266c39108e7c0)(func) LAYER_INITCALL_DEF(func, app_feature, "app.feature") | Identifies the entry for initializing and starting a system feature by the priority 2.   
[SYSEX_FEATURE_INIT_PRI](https://device.harmonyos.com/cn/docs/develop/apiref/init-0000001055675012#ZH-CN_TOPIC_0000001055675012__gabb08dfd40bae014ab94f4a3a0ff2180b)(func, priority) LAYER_INITCALL(func, app_feature, "app.feature", priority) | Identifies the entry for initializing and starting a system feature by the specified priority.   
[APP_SERVICE_INIT](https://device.harmonyos.com/cn/docs/develop/apiref/init-0000001055675012#ZH-CN_TOPIC_0000001055675012__gacd89f8f7d2c1e7490ae285f99f3a9d42)(func) LAYER_INITCALL_DEF(func, app_service, "app.service") | Identifies the entry for initializing and starting an application-layer service by the priority 2.   
[APP_SERVICE_INIT_PRI](https://device.harmonyos.com/cn/docs/develop/apiref/init-0000001055675012#ZH-CN_TOPIC_0000001055675012__gac678e25b6b7d9949220139741ffa4233)(func, priority) LAYER_INITCALL(func, app_service, "app.service", priority) | Identifies the entry for initializing and starting an application-layer service by the specified priority.   
[APP_FEATURE_INIT](https://device.harmonyos.com/cn/docs/develop/apiref/init-0000001055675012#ZH-CN_TOPIC_0000001055675012__ga6ae79099e42a2ee7680cc9d5ae4817d6)(func) LAYER_INITCALL_DEF(func, app_feature, "app.feature") | Identifies the entry for initializing and starting an application-layer feature by the priority 2.   
[APP_FEATURE_INIT_PRI](https://device.harmonyos.com/cn/docs/develop/apiref/init-0000001055675012#ZH-CN_TOPIC_0000001055675012__ga16168eb42790a913932f1ebd92a76fc1)(func, priority) LAYER_INITCALL(func, app_feature, "app.feature", priority) | Identifies the entry for initializing and starting an application-layer feature by the specified priority.   
  
#### Details

#### Macro Definition

#### [h2]APP_FEATURE_INIT
    
    #define APP_FEATURE_INIT( func)   LAYER_INITCALL_DEF(func, app_feature, "app.feature")

**Description:**

Identifies the entry for initializing and starting an application-layer feature by the priority 2. 

This macro is used to identify the entry called at the priority 2 of the application-layer feature phase of the startup process. 

**Parameters:**

Name | Description  
---|---  
func | Indicates the entry function for initializing and starting an application-layer feature. The type is void (*)(void).   
  
#### [h2]APP_FEATURE_INIT_PRI
    
    #define APP_FEATURE_INIT_PRI( func,  priority )   LAYER_INITCALL(func, app_feature, "app.feature", priority)

**Description:**

Identifies the entry for initializing and starting an application-layer feature by the specified priority. 

This macro is used to identify the entry called at the specified priority of the application-layer feature phase of the startup process. 

**Parameters:**

Name | Description  
---|---  
func | Indicates the entry function for initializing and starting an application-layer feature. The type is void (*)(void).   
priority | Indicates the calling priority when starting the application-layer feature. The value range is [0, 5), and the calling sequence is 0, 1, 2, 3, and 4.   
  
#### [h2]APP_SERVICE_INIT
    
    #define APP_SERVICE_INIT( func)   LAYER_INITCALL_DEF(func, app_service, "app.service")

**Description:**

Identifies the entry for initializing and starting an application-layer service by the priority 2. 

This macro is used to identify the entry called at the priority 2 of the application-layer service phase of the startup process. 

**Parameters:**

Name | Description  
---|---  
func | Indicates the entry function for initializing and starting an application-layer service. The type is void (*)(void).   
  
#### [h2]APP_SERVICE_INIT_PRI
    
    #define APP_SERVICE_INIT_PRI( func,  priority )   LAYER_INITCALL(func, app_service, "app.service", priority)

**Description:**

Identifies the entry for initializing and starting an application-layer service by the specified priority. 

This macro is used to identify the entry called at the specified priority of the application-layer service phase of the startup process. 

**Parameters:**

Name | Description  
---|---  
func | Indicates the entry function for initializing and starting an application-layer service. The type is void (*)(void).   
priority | Indicates the calling priority when starting the application-layer service phase. The value range is [0,5), and the calling sequence is 0, 1, 2, 3, and 4.   
  
#### [h2]CORE_INIT
    
    #define CORE_INIT( func)   LAYER_INITCALL_DEF(func, core, "core")

**Description:**

Identifies the entry for initializing and starting a core phase by the priority 2. 

This macro is used when Samgr is initialized and started. This macro is used to identify the entry called at the priority 2 of the core phase of the startup process. 

**Parameters:**

Name | Description  
---|---  
func | Indicates the entry function for initializing and starting a core phase. The type is void (*)(void).   
  
#### [h2]CORE_INIT_PRI
    
    #define CORE_INIT_PRI( func,  priority )   LAYER_INITCALL(func, core, "core", priority)

**Description:**

Identifies the entry for initializing and starting a core phase by the specified priority. 

This macro is used when Samgr is initialized and started. This macro is used to identify the entry called at the specified priority of the core phase of the startup process. 

**Parameters:**

Name | Description  
---|---  
func | Indicates the entry function for initializing and starting a core phase. The type is void (*)(void).   
priority | Indicates the calling priority when starting the core phase. The value range is [0,5), and the calling sequence is 0, 1, 2, 3, and 4.   
  
#### [h2]SYS_FEATURE_INIT
    
    #define SYS_FEATURE_INIT( func)   LAYER_INITCALL_DEF(func, sys_feature, "sys.feature")

**Description:**

Identifies the entry for initializing and starting a core system feature by the priority 2. 

This macro is used to identify the entry called at the priority 2 in the core system feature phase of the startup process. 

**Parameters:**

Name | Description  
---|---  
func | Indicates the entry function for initializing and starting a core system service. The type is void (*)(void).   
  
#### [h2]SYS_FEATURE_INIT_PRI
    
    #define SYS_FEATURE_INIT_PRI( func,  priority )   LAYER_INITCALL(func, sys_feature, "sys.feature", priority)

**Description:**

Identifies the entry for initializing and starting a core system feature by the specified priority. 

This macro is used to identify the entry called at the specified priority in the core system feature phase of the startup process. 

**Parameters:**

Name | Description  
---|---  
func | Indicates the entry function for initializing and starting a core system feature. The type is void (*)(void).   
priority | Indicates the calling priority when starting the core system feature phase. The value range is [0, 5), and the calling sequence is 0, 1, 2, 3, and 4.   
  
#### [h2]SYS_RUN
    
    #define SYS_RUN( func)   LAYER_INITCALL_DEF(func, run, "run")

**Description:**

Identifies the entry for initializing and starting a system running phase by the priority 2. 

This macro is used to identify the entry called at the priority 2 in the system startup phase of the startup process. 

**Parameters:**

Name | Description  
---|---  
func | Indicates the entry function for initializing and starting a system running phase. The type is void (*)(void).   
  
#### [h2]SYS_RUN_PRI
    
    #define SYS_RUN_PRI( func,  priority )   LAYER_INITCALL(func, run, "run", priority)

**Description:**

Identifies the entry for initializing and starting a system running phase by the specified priority. 

This macro is used to identify the entry called at the specified priority in the system startup phase of the startup process. 

**Parameters:**

Name | Description  
---|---  
func | Indicates the entry function for initializing and starting a system running phase. The type is void (*)(void).   
priority | Indicates the calling priority when starting the system startup phase. The value range is [0, 5), and the calling sequence is 0, 1, 2, 3, and 4.   
  
#### [h2]SYS_SERVICE_INIT
    
    #define SYS_SERVICE_INIT( func)   LAYER_INITCALL_DEF(func, sys_service, "sys.service")

**Description:**

Identifies the entry for initializing and starting a core system service by the priority 2. 

This macro is used to identify the entry called at the priority 2 in the core system service phase of the startup process. 

**Parameters:**

Name | Description  
---|---  
func | Indicates the entry function for initializing and starting a core system service. The type is void (*)(void).   
  
#### [h2]SYS_SERVICE_INIT_PRI
    
    #define SYS_SERVICE_INIT_PRI( func,  priority )   LAYER_INITCALL(func, sys_service, "sys.service", priority)

**Description:**

Identifies the entry for initializing and starting a core system service by the specified priority. 

This macro is used to identify the entry called at the specified priority in the core system service phase of the startup process. 

**Parameters:**

Name | Description  
---|---  
func | Indicates the entry function for initializing and starting a core system service. The type is void (*)(void).   
priority | Indicates the calling priority when starting the core system service in the startup phase. The value range is [0,5), and the calling sequence is 0, 1, 2, 3, and 4.   
  
#### [h2]SYSEX_FEATURE_INIT
    
    #define SYSEX_FEATURE_INIT( func)   LAYER_INITCALL_DEF(func, app_feature, "app.feature")

**Description:**

Identifies the entry for initializing and starting a system feature by the priority 2. 

This macro is used to identify the entry called at the priority 2 of the system feature phase of the startup process. 

**Parameters:**

Name | Description  
---|---  
func | Indicates the entry function for initializing and starting a system feature. The type is void (*)(void).   
  
#### [h2]SYSEX_FEATURE_INIT_PRI
    
    #define SYSEX_FEATURE_INIT_PRI( func,  priority )   LAYER_INITCALL(func, app_feature, "app.feature", priority)

**Description:**

Identifies the entry for initializing and starting a system feature by the specified priority. 

This macro is used to identify the entry called at the specified priority of the system feature phase of the startup process. 

**Parameters:**

Name | Description  
---|---  
func | Indicates the entry function for initializing and starting a system feature. The type is void (*)(void).   
priority | Indicates the calling priority when starting the system feature phase. The value range is [0,5), and the calling sequence is 0, 1, 2, 3, and 4.   
  
#### [h2]SYSEX_SERVICE_INIT
    
    #define SYSEX_SERVICE_INIT( func)   LAYER_INITCALL_DEF(func, app_service, "app.service")

**Description:**

Identifies the entry for initializing and starting a system service by the priority 2. 

This macro is used to identify the entry called at the priority 2 in the system service phase of the startup process. 

**Parameters:**

Name | Description  
---|---  
func | Indicates the entry function for initializing and starting a system service. The type is void (*)(void).   
  
#### [h2]SYSEX_SERVICE_INIT_PRI
    
    #define SYSEX_SERVICE_INIT_PRI( func,  priority )   LAYER_INITCALL(func, app_service, "app.service", priority)

**Description:**

Identifies the entry for initializing and starting a system service by the specified priority. 

This macro is used to identify the entry called at the specified priority of the system service phase of the startup process. 

**Parameters:**

Name | Description  
---|---  
func | Indicates the entry function for initializing and starting a system service. The type is void (*)(void).   
priority | Indicates the calling priority when starting the system service phase. The value range is [0,5), and the calling sequence is 0, 1, 2, 3, and 4. 
