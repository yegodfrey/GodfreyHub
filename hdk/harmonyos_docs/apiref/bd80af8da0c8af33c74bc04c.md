---
name: document/cn/apiref/cmsis-0000001055308173
title: CMSIS
uri: https://developer.huawei.com/consumer/cn/doc/apiref/cmsis-0000001055308173
source: portal
---

# CMSIS  
  
#### Overview

**Description:**

Provides standard, universal real-time operating system (RTOS) APIs. 

These APIs comply with ARM CMSIS and are used for thread management, timer management, inter-process communications, and semaphores.

**Since:**

1.0

**Version:**

1.0

#### Summary

#### [h2]Data Structures

Data Structure Name | Description  
---|---  
[osVersion_t](https://device.harmonyos.com/cn/docs/develop/apiref/osversion__t-0000001055075083) | Describes the system version.   
[osThreadAttr_t](https://device.harmonyos.com/cn/docs/develop/apiref/osthreadattr__t-0000001054595107) | Describes thread attributes.   
[osTimerAttr_t](https://device.harmonyos.com/cn/docs/develop/apiref/ostimerattr__t-0000001054915099) | Describes timer attributes.   
[osEventFlagsAttr_t](https://device.harmonyos.com/cn/docs/develop/apiref/oseventflagsattr__t-0000001054715065) | Describes event attributes.   
[osMutexAttr_t](https://device.harmonyos.com/cn/docs/develop/apiref/osmutexattr__t-0000001055675030) | Describes mutex attributes.   
[osSemaphoreAttr_t](https://device.harmonyos.com/cn/docs/develop/apiref/ossemaphoreattr__t-0000001055515034) | Describes semaphore attributes.   
[osMessageQueueAttr_t](https://device.harmonyos.com/cn/docs/develop/apiref/osmessagequeueattr__t-0000001054796543) | Describes message queue attributes.   
  
#### [h2]Macros

Macro Name and Value | Description  
---|---  
[osWaitForever](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga9eb9a7a797a42e4b55eb171ecc609ddb) 0xFFFFFFFFU | Indicates that the RTOS waits forever unless an event flag is received.   
[osNoWait](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__gaf235b13764754739d13c3cb709dc24e6) 0x0U | Indicates that the RTOS does not wait.   
[osFlagsWaitAny](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga18e63587b8450d5b8798b6f6ec04e012) 0x00000000U | Indicates that the RTOS waits until any event flag is triggered.   
[osFlagsWaitAll](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga8b6f562736fbfb5428940e0c017dec24) 0x00000001U | Indicates that the system waits until all event flags are triggered.   
[osFlagsNoClear](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__gaade844a42237d8c37569d4d9b16b9f1c) 0x00000002U | Indicates that defined flags are not cleared.   
[osFlagsError](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga01c1359c3a5640bff6e08f09bf94ce3a) 0x80000000U | Indicates a flag error.   
[osFlagsErrorUnknown](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga3b1d9fbb83d64eedb62f831c9be647c3) 0xFFFFFFFFU | Indicates an unknown error.   
[osFlagsErrorTimeout](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga2e951c3f1c3b7bff4eca3d7836cd19ca) 0xFFFFFFFEU | Indicates a timeout.   
[osFlagsErrorResource](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga4db38b50da1889bcaaa7f747e844f904) 0xFFFFFFFDU | Indicates a resource error.   
[osFlagsErrorParameter](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__gaa8a95ef938f8f5a9fcb815ec53184f77) 0xFFFFFFFCU | Indicates an incorrect parameter.   
  
#### [h2]Typedefs

Typedef Name | Description  
---|---  
[osThreadFunc_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga8ef2773ed8ef63ab8727e0d06ebec4d2)) (void *argument) | typedef void(*  Callback for thread scheduling.   
[osTimerFunc_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga77a298218f3c8382b39a09a6d134d040)) (void *argument) | typedef void(*  Callback for timer triggering.   
[osThreadId_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga6333e016ba9b008e6dd76851c38b9217) | typedef void *  Identifies a thread.   
[osTimerId_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__gac2000ac2a8c6740700fd8e6c938cff44) | typedef void *  Identifies a timer.   
[osEventFlagsId_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__gaf0a3ba8f502ca6581ed1009005c0dadd) | typedef void *  Identifies an event flag.   
[osMutexId_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga29b7ba721f4fe0b11c84c55d079cc3e7) | typedef void *  Identifies a mutex.   
[osSemaphoreId_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga5abc2c02a86678b63a711e13894ac5b1) | typedef void *  Identifies a semaphore object.   
[osMessageQueueId_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga206dbc05367e03c39fc6d4d1ebcff317) | typedef void *  Identifies a message queue.   
[TZ_ModuleId_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__gad5ef21485fe5f60263bc0b48006202cb) | typedef uint32_t  Identifies a TrustZone module call process.   
  
#### [h2]Enumerations

Enumeration Name | Description  
---|---  
[osKernelState_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga08326469274b668140ca934b168a5ad4) { [osKernelInactive](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__gga08326469274b668140ca934b168a5ad4ae9a7d578873c28590009479283922db9) = 0, [osKernelReady](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__gga08326469274b668140ca934b168a5ad4a87ef9718301b92bfa9c97d61d660a8aa) = 1, [osKernelRunning](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__gga08326469274b668140ca934b168a5ad4a98d8ad539d2cc6c3dbb7138356049db2) = 2, [osKernelLocked](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__gga08326469274b668140ca934b168a5ad4a033026d41a9309bd9551df1ae8153553) = 3, [osKernelSuspended](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__gga08326469274b668140ca934b168a5ad4a3240807627595e80f59a46434639b765) = 4, [osKernelError](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__gga08326469274b668140ca934b168a5ad4a1b942a8c76daeba2925a763d4d7567a2) = -1, [osKernelReserved](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__gga08326469274b668140ca934b168a5ad4a9cc4cc562a20a28c0f6f4b878ecf2df5) = 0x7FFFFFFFU } | Enumerates kernel states.   
[osThreadState_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__gad3dc89e942e38d9f3af858a0269a820d) { [osThreadInactive](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ggad3dc89e942e38d9f3af858a0269a820da7d7d4f719a1be6daa63a251563585fdd) = 0, [osThreadReady](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ggad3dc89e942e38d9f3af858a0269a820dad9a040e03d7e7943c0217a3359fc1e8b) = 1, [osThreadRunning](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ggad3dc89e942e38d9f3af858a0269a820da71dae1f35a4b4d9d2ab24e186461a17f) = 2, [osThreadBlocked](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ggad3dc89e942e38d9f3af858a0269a820da476cd2370e6938974fb2a79811408819) = 3, [osThreadTerminated](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ggad3dc89e942e38d9f3af858a0269a820dac2a35280d5475f56352c539c9c9b42f9) = 4, [osThreadError](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ggad3dc89e942e38d9f3af858a0269a820dac841e73a7198a42364c9450f1f54a0ef) = -1, [osThreadReserved](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ggad3dc89e942e38d9f3af858a0269a820da8872f7e352370eb11ee772c7dcca6e6c) = 0x7FFFFFFF } | Enumerates thread states.   
[osPriority_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__gad4e3e0971b41f2d17584a8c6837342ec) { [osPriorityNone](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ggad4e3e0971b41f2d17584a8c6837342eca6c437c7185161a3bd1e7e4669dfa17a3) = 0, [osPriorityIdle](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ggad4e3e0971b41f2d17584a8c6837342eca549e79a43ff4f8b2b31afb613f5caa81) = 1, [osPriorityLow](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ggad4e3e0971b41f2d17584a8c6837342eca61cb822239ac8f66dfbdc7291598a3d4) = 8, [osPriorityLow1](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ggad4e3e0971b41f2d17584a8c6837342ecaba2b6919f0b630c8c1b2c940e3bfadbe) = 8+1, [osPriorityLow2](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ggad4e3e0971b41f2d17584a8c6837342eca78ad5d00aa07a2b4bf30a639544f5507) = 8+2, [osPriorityLow3](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ggad4e3e0971b41f2d17584a8c6837342eca28ccb07942c16f5f5efefb6cf68a7f50) = 8+3, [osPriorityLow4](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ggad4e3e0971b41f2d17584a8c6837342eca5a4a4f26d5b220a968e221e854f69a81) = 8+4, [osPriorityLow5](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ggad4e3e0971b41f2d17584a8c6837342ecad69b8c14809bc5bdce4887f5a57d9353) = 8+5, [osPriorityLow6](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ggad4e3e0971b41f2d17584a8c6837342ecac0f188468664d06d4cd9e6e1ed351393) = 8+6, [osPriorityLow7](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ggad4e3e0971b41f2d17584a8c6837342eca5b151ebba7fdeb1baaa9b7b420890b7a) = 8+7, [osPriorityBelowNormal](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ggad4e3e0971b41f2d17584a8c6837342eca193b650117c209b4a203954542bcc3e6) = 16, [osPriorityBelowNormal1](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ggad4e3e0971b41f2d17584a8c6837342eca9138da7187690b15f52d8e5729c18da5) = 16+1, [osPriorityBelowNormal2](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ggad4e3e0971b41f2d17584a8c6837342eca4f081d6735bf2f513338b07eddf13ae3) = 16+2, [osPriorityBelowNormal3](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ggad4e3e0971b41f2d17584a8c6837342eca19c013690d0d6bf3ac90707942be3fdf) = 16+3, [osPriorityBelowNormal4](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ggad4e3e0971b41f2d17584a8c6837342eca36931ad6cee5e4700e2c8622bdd2cd24) = 16+4, [osPriorityBelowNormal5](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ggad4e3e0971b41f2d17584a8c6837342eca0bcd9ad1e7a02e3bf03be7dcc8ece38e) = 16+5, [osPriorityBelowNormal6](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ggad4e3e0971b41f2d17584a8c6837342ecabd3cc7df5b92b752ddf1e7843a786c05) = 16+6, [osPriorityBelowNormal7](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ggad4e3e0971b41f2d17584a8c6837342ecab18e3bda7b5e418e309a62d6267ea14b) = 16+7, [osPriorityNormal](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ggad4e3e0971b41f2d17584a8c6837342eca45a2895ad30c79fb97de18cac7cc19f1) = 24, [osPriorityNormal1](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ggad4e3e0971b41f2d17584a8c6837342eca3e70c19e03d5a54e66bd071f0776782c) = 24+1, [osPriorityNormal2](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ggad4e3e0971b41f2d17584a8c6837342eca19e96f2b025b6462a43b1965043c8205) = 24+2, [osPriorityNormal3](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ggad4e3e0971b41f2d17584a8c6837342eca402bd7ab26fb57c8cee8cf94168f4c91) = 24+3, [osPriorityNormal4](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ggad4e3e0971b41f2d17584a8c6837342eca93ef07d3a107aeee6508bfd29ba3485d) = 24+4, [osPriorityNormal5](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ggad4e3e0971b41f2d17584a8c6837342eca68f3f6fdaa639de300277802aa13a0ab) = 24+5, [osPriorityNormal6](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ggad4e3e0971b41f2d17584a8c6837342eca8221eb0d059726a6309f1f2d0cdb6204) = 24+6, [osPriorityNormal7](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ggad4e3e0971b41f2d17584a8c6837342eca049abd04f8951415407ec9d92bd9b80b) = 24+7, [osPriorityAboveNormal](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ggad4e3e0971b41f2d17584a8c6837342eca17b36cd9cd38652c2bc6d4803990674b) = 32, [osPriorityAboveNormal1](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ggad4e3e0971b41f2d17584a8c6837342ecabfeafc713edfc7b9130aa5c762d68998) = 32+1, [osPriorityAboveNormal2](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ggad4e3e0971b41f2d17584a8c6837342eca901acf86070e06f5990b611734ee2562) = 32+2, [osPriorityAboveNormal3](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ggad4e3e0971b41f2d17584a8c6837342ecad566b876b64e6efdc3eba0fc04e54013) = 32+3, [osPriorityAboveNormal4](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ggad4e3e0971b41f2d17584a8c6837342eca6ccac37d7dae4586a2031966d36a63ec) = 32+4, [osPriorityAboveNormal5](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ggad4e3e0971b41f2d17584a8c6837342ecae36e8b38ee046a3104bcccabb10cf78c) = 32+5, [osPriorityAboveNormal6](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ggad4e3e0971b41f2d17584a8c6837342eca61e6ce27e1e0f34f2540b413b8a8b207) = 32+6, [osPriorityAboveNormal7](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ggad4e3e0971b41f2d17584a8c6837342ecadbbb0fed3ada6b9b50d4a628abc2a67d) = 32+7, [osPriorityHigh](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ggad4e3e0971b41f2d17584a8c6837342eca914433934143a9ba767e59577c56e6c2) = 40, [osPriorityHigh1](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ggad4e3e0971b41f2d17584a8c6837342eca17b7a7e6febf12444a84e90edfce36cb) = 40+1, [osPriorityHigh2](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ggad4e3e0971b41f2d17584a8c6837342eca40a120cf8bbc42e575455c027f3d9b03) = 40+2, [osPriorityHigh3](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ggad4e3e0971b41f2d17584a8c6837342eca0b15518b0b5321a29efa0b42b2f8c759) = 40+3, [osPriorityHigh4](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ggad4e3e0971b41f2d17584a8c6837342ecafe5a4f393fab04551ac7d93e80cdf0fb) = 40+4, [osPriorityHigh5](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ggad4e3e0971b41f2d17584a8c6837342eca5960841bfbdd959b163429e8502ea4e9) = 40+5, [osPriorityHigh6](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ggad4e3e0971b41f2d17584a8c6837342eca5714dda6effc1a3f8ec155d97e3e69bc) = 40+6, [osPriorityHigh7](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ggad4e3e0971b41f2d17584a8c6837342eca63ad0cc52a701ef3d9df52b59b995652) = 40+7, [osPriorityRealtime](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ggad4e3e0971b41f2d17584a8c6837342eca1485dec3702434a1ec3cb74c7a17a4af) = 48, [osPriorityRealtime1](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ggad4e3e0971b41f2d17584a8c6837342ecaf685a06b30f0635476e21347a986305b) = 48+1, [osPriorityRealtime2](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ggad4e3e0971b41f2d17584a8c6837342ecab832bd9de84e5eec2ecad69d085dadff) = 48+2, [osPriorityRealtime3](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ggad4e3e0971b41f2d17584a8c6837342eca3f2261e5e733e92844ae8c630f2f9eaa) = 48+3, [osPriorityRealtime4](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ggad4e3e0971b41f2d17584a8c6837342ecaf614e3dc966d559cd9d9d2a0f78ebe70) = 48+4, [osPriorityRealtime5](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ggad4e3e0971b41f2d17584a8c6837342ecaff84f31ceff203c711fb9476443507df) = 48+5, [osPriorityRealtime6](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ggad4e3e0971b41f2d17584a8c6837342eca80ae9d0dd256312c0c8f44af48316194) = 48+6, [osPriorityRealtime7](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ggad4e3e0971b41f2d17584a8c6837342ecaa76da6825c4bd31c4958200bc289103b) = 48+7, [osPriorityISR](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ggad4e3e0971b41f2d17584a8c6837342eca3943224956e1ea667c6a931c74137b79) = 56, [osPriorityError](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ggad4e3e0971b41f2d17584a8c6837342ecae35f5e2f9c64ad346822521b643bdea4) = -1, [osPriorityReserved](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ggad4e3e0971b41f2d17584a8c6837342ecac86c171f8d466cced0cb1b03bb03343b) = 0x7FFFFFFF } | Enumerates thread priorities.   
[osTimerType_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga7dc24a4c2b90334427081c3da7a71915) { [osTimerOnce](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__gga7dc24a4c2b90334427081c3da7a71915ad21712f8df5f97069c82dc9eec37b951) = 0, [osTimerPeriodic](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__gga7dc24a4c2b90334427081c3da7a71915ab9c91f9699162edb09bb7c90c11c8788) = 1 } | Enumerates timer types.   
[os_timer_rouses_type](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga6274cbe33c6db824bbc40dc6eaa8e578) { [osTimerRousesIgnore](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__gga6274cbe33c6db824bbc40dc6eaa8e578a9bc896516fd34ea78d2c3106f421bc1e) = 0, [osTimerRousesAllow](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__gga6274cbe33c6db824bbc40dc6eaa8e578ae45ed4bdfd52ff62958e347eab459edb) = 1 } | Enumerates timer permissions.   
[os_timer_align_type](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga3d617b70715d7fb2c7c6f06809ee3913) { [osTimerAlignIgnore](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__gga3d617b70715d7fb2c7c6f06809ee3913a30e89a6569f3f32e6d4f2c77ceba3bd9) = 0, [osTimerAlignAllow](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__gga3d617b70715d7fb2c7c6f06809ee3913a8fd513208cb4a465b439fb04d9223f43) = 1 } | Enumerates timer alignment modes.   
[osStatus_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga6c0dbe6069e4e7f47bb4cd32ae2b813e) { [osOK](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__gga6c0dbe6069e4e7f47bb4cd32ae2b813ea9e1c9e2550bb4de8969a935acffc968f) = 0, [osError](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__gga6c0dbe6069e4e7f47bb4cd32ae2b813eabb7b2d2c4efa66df42f1c10635467b09) = -1, [osErrorTimeout](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__gga6c0dbe6069e4e7f47bb4cd32ae2b813ea913eb5df15ad85f8557eb3a456b56879) = -2, [osErrorResource](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__gga6c0dbe6069e4e7f47bb4cd32ae2b813ea8fc5801e8b0482bdf22ad63a77f0155d) = -3, [osErrorParameter](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__gga6c0dbe6069e4e7f47bb4cd32ae2b813eac24adca6a5d072c9f01c32178ba0d109) = -4, [osErrorNoMemory](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__gga6c0dbe6069e4e7f47bb4cd32ae2b813eaf1fac0240218e51eb30a13da2f8aae81) = -5, [osErrorISR](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__gga6c0dbe6069e4e7f47bb4cd32ae2b813ea21635bdc492d3094fe83027fa4a30e2f) = -6, [osStatusReserved](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__gga6c0dbe6069e4e7f47bb4cd32ae2b813ea66cc9ce9106b508df0e4a733a55a439d) = 0x7FFFFFFF } | Enumerates return values of CMSIS-RTOS.   
  
#### [h2]Functions

Function | Description  
---|---  
[osKernelInitialize](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__gae818f6611d25ba3140bede410a52d659) (void) | [osStatus_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga6c0dbe6069e4e7f47bb4cd32ae2b813e) Initializes the RTOS kernel.   
[osKernelGetInfo](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga6f7764e7250c5c5364c00c45a5d1d199) ([osVersion_t](https://device.harmonyos.com/cn/docs/develop/apiref/osversion__t-0000001055075083) *version, char *id_buf, uint32_t id_size) | [osStatus_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga6c0dbe6069e4e7f47bb4cd32ae2b813e) Obtains the system version and name.   
[osKernelGetState](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga48b69b81012fce051f639be288b243ba) (void) | [osKernelState_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga08326469274b668140ca934b168a5ad4) Obtains the kernel state.   
[osKernelStart](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga9ae2cc00f0d89d7b6a307bba942b5221) (void) | [osStatus_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga6c0dbe6069e4e7f47bb4cd32ae2b813e) Starts the kernel.   
[osKernelLock](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga948609ee930d9b38336b9e1c2a4dfe12) (void) | int32_t  Locks the kernel.   
[osKernelUnlock](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__gaf401728b4657456198c33fe75f8d6720) (void) | int32_t  Unlocks the kernel.   
[osKernelRestoreLock](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__gae7d0a71b9586cbbb49fcbdf6a04f0289) (int32_t lock) | int32_t  Restores the previous lock state of the kernel.   
[osKernelGetTickFreq](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga7a8d7bd927eaaa58999f91d7d6310cee) (void) | uint32_t  Obtains the number of kernel ticks per second.   
[osKernelGetSysTimerCount](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__gae0fcaff6cecfb4013bb556c87afcd7d2) (void) | uint32_t  Obtains the kernel system timer.   
[osKernelGetSysTimerFreq](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga4d69215a93220f72be3684cad582f16a) (void) | uint32_t  Obtains the frequency of the system timer.   
[osThreadNew](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga48d68b8666d99d28fa646ee1d2182b8f) ([osThreadFunc_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga8ef2773ed8ef63ab8727e0d06ebec4d2) func, void *argument, const [osThreadAttr_t](https://device.harmonyos.com/cn/docs/develop/apiref/osthreadattr__t-0000001054595107) *attr) | [osThreadId_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga6333e016ba9b008e6dd76851c38b9217) Creates an active thread.   
[osThreadGetName](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga2fea4fad136f73ad973126789c4b99ee) ([osThreadId_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga6333e016ba9b008e6dd76851c38b9217) thread_id) | const char *  Obtains the name of a thread.   
[osThreadGetId](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga8df03548e89fbc56402a5cd584a505da) (void) | [osThreadId_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga6333e016ba9b008e6dd76851c38b9217) Obtains the ID of the currently running thread.   
[osThreadGetState](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__gacc0a98b42f0a5928e12dc91dc76866b9) ([osThreadId_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga6333e016ba9b008e6dd76851c38b9217) thread_id) | [osThreadState_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__gad3dc89e942e38d9f3af858a0269a820d) Obtains the state of a thread.   
[osThreadGetStackSize](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__gab9f8bd715d671c6ee27644867bc1bf65) ([osThreadId_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga6333e016ba9b008e6dd76851c38b9217) thread_id) | uint32_t  Obtains the stack size of a thread.   
[osThreadGetStackSpace](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga9c83bd5dd8de329701775d6ef7012720) ([osThreadId_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga6333e016ba9b008e6dd76851c38b9217) thread_id) | uint32_t  Obtains the size of the available stack space for a thread based on the stack watermark.   
[osThreadSetPriority](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga861a420fb2d643115b06622903fb3bfb) ([osThreadId_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga6333e016ba9b008e6dd76851c38b9217) thread_id, [osPriority_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__gad4e3e0971b41f2d17584a8c6837342ec) priority) | [osStatus_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga6c0dbe6069e4e7f47bb4cd32ae2b813e) Changes the priority of a thread.   
[osThreadGetPriority](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga0aeaf349604f456e68e78f9d3b42e44b) ([osThreadId_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga6333e016ba9b008e6dd76851c38b9217) thread_id) | [osPriority_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__gad4e3e0971b41f2d17584a8c6837342ec) Gets the prority of an active thread.   
[osThreadYield](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__gad01c7ec26535b1de6b018bb9466720e2) (void) | [osStatus_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga6c0dbe6069e4e7f47bb4cd32ae2b813e) Sets the currently running thread to the ready state.   
[osThreadSuspend](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__gaa9de419d0152bf77e9bbcd1f369fb990) ([osThreadId_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga6333e016ba9b008e6dd76851c38b9217) thread_id) | [osStatus_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga6c0dbe6069e4e7f47bb4cd32ae2b813e) Suspends a thread.   
[osThreadResume](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga3dbad90eff394b02de76a452c84c5d80) ([osThreadId_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga6333e016ba9b008e6dd76851c38b9217) thread_id) | [osStatus_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga6c0dbe6069e4e7f47bb4cd32ae2b813e) Resumes a thread from the suspended state.   
[osThreadTerminate](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga2f8ba6dba6e9c065a6e236ffd410d74a) ([osThreadId_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga6333e016ba9b008e6dd76851c38b9217) thread_id) | [osStatus_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga6c0dbe6069e4e7f47bb4cd32ae2b813e) Terminates a thread.   
[osThreadGetCount](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga495b3f812224e7301f23a691793765db) (void) | uint32_t  Obtains the number of active threads.   
[osDelay](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__gaf6055a51390ef65b6b6edc28bf47322e) (uint32_t ticks) | [osStatus_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga6c0dbe6069e4e7f47bb4cd32ae2b813e) Waits for a period of time.   
[osDelayUntil](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__gaf0763875335699a9baa704ee36990d3c) (uint64_t ticks) | [osStatus_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga6c0dbe6069e4e7f47bb4cd32ae2b813e) Waits until a specified time arrives.   
[osTimerNew](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__gad4e7f785c5f700a509f55a3bf6a62bec) ([osTimerFunc_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga77a298218f3c8382b39a09a6d134d040) func, [osTimerType_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga7dc24a4c2b90334427081c3da7a71915) type, void *argument, const [osTimerAttr_t](https://device.harmonyos.com/cn/docs/develop/apiref/ostimerattr__t-0000001054915099) *attr) | [osTimerId_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__gac2000ac2a8c6740700fd8e6c938cff44) Creates and initializes a timer.   
[osTimerStart](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__gab6ee2859ea657641b7adfac599b8121d) ([osTimerId_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__gac2000ac2a8c6740700fd8e6c938cff44) timer_id, uint32_t ticks) | [osStatus_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga6c0dbe6069e4e7f47bb4cd32ae2b813e) Starts or restarts a timer.   
[osTimerStop](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__gabd7a89356da7717293eb0bc5d87b8ac9) ([osTimerId_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__gac2000ac2a8c6740700fd8e6c938cff44) timer_id) | [osStatus_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga6c0dbe6069e4e7f47bb4cd32ae2b813e) Stops a timer.   
[osTimerIsRunning](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga69d3589f54194022c30dd01e45ec6741) ([osTimerId_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__gac2000ac2a8c6740700fd8e6c938cff44) timer_id) | uint32_t  Checks whether a timer is running.   
[osTimerDelete](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__gad0001dd74721ab461789324806db2453) ([osTimerId_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__gac2000ac2a8c6740700fd8e6c938cff44) timer_id) | [osStatus_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga6c0dbe6069e4e7f47bb4cd32ae2b813e) Deletes a timer.   
[osEventFlagsNew](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__gab14b1caeb12ffa42cce1bfe889cd07df) (const [osEventFlagsAttr_t](https://device.harmonyos.com/cn/docs/develop/apiref/oseventflagsattr__t-0000001054715065) *attr) | [osEventFlagsId_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__gaf0a3ba8f502ca6581ed1009005c0dadd) Creates and initializes an event flags object.   
[osEventFlagsSet](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga33b71d14cecf90b4e72639dd19f23a5e) ([osEventFlagsId_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__gaf0a3ba8f502ca6581ed1009005c0dadd) ef_id, uint32_t flags) | uint32_t  Sets event flags.   
[osEventFlagsClear](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga93bf258ca0007c6641fbe8e4f2b8a1e5) ([osEventFlagsId_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__gaf0a3ba8f502ca6581ed1009005c0dadd) ef_id, uint32_t flags) | uint32_t  Clears event flags.   
[osEventFlagsGet](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga8bda3185f46bfd278cea8a6cf357677d) ([osEventFlagsId_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__gaf0a3ba8f502ca6581ed1009005c0dadd) ef_id) | uint32_t  Obtains event flags.   
[osEventFlagsWait](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga52acb34a8322e58020227344fe662b4e) ([osEventFlagsId_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__gaf0a3ba8f502ca6581ed1009005c0dadd) ef_id, uint32_t flags, uint32_t options, uint32_t timeout) | uint32_t  Waits for event flags to trigger.   
[osEventFlagsDelete](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga7c4acf2fb0d506ec82905dee53fb5435) ([osEventFlagsId_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__gaf0a3ba8f502ca6581ed1009005c0dadd) ef_id) | [osStatus_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga6c0dbe6069e4e7f47bb4cd32ae2b813e) Deletes an event flags object.   
[osMutexNew](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__gab90920022ab944296821368ef6bb52f8) (const [osMutexAttr_t](https://device.harmonyos.com/cn/docs/develop/apiref/osmutexattr__t-0000001055675030) *attr) | [osMutexId_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga29b7ba721f4fe0b11c84c55d079cc3e7) Creates and initializes a mutex.   
[osMutexAcquire](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__gabc54686ea0fc281823b1763422d2a924) ([osMutexId_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga29b7ba721f4fe0b11c84c55d079cc3e7) mutex_id, uint32_t timeout) | [osStatus_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga6c0dbe6069e4e7f47bb4cd32ae2b813e) Obtains a mutex.   
[osMutexRelease](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__gaea629705703580ff58776bf73c8db915) ([osMutexId_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga29b7ba721f4fe0b11c84c55d079cc3e7) mutex_id) | [osStatus_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga6c0dbe6069e4e7f47bb4cd32ae2b813e) Releases a mutex.   
[osMutexGetOwner](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga7f9a7666df0978738cd570cb700b83fb) ([osMutexId_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga29b7ba721f4fe0b11c84c55d079cc3e7) mutex_id) | [osThreadId_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga6333e016ba9b008e6dd76851c38b9217) Obtains the thread ID of the currently acquired mutex.   
[osMutexDelete](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__gabee73ad227ba4587d3db12ef9bd582bc) ([osMutexId_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga29b7ba721f4fe0b11c84c55d079cc3e7) mutex_id) | [osStatus_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga6c0dbe6069e4e7f47bb4cd32ae2b813e) Deletes a mutex.   
[osSemaphoreNew](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga2a39806ace781a0008a4374ca701b14a) (uint32_t max_count, uint32_t initial_count, const [osSemaphoreAttr_t](https://device.harmonyos.com/cn/docs/develop/apiref/ossemaphoreattr__t-0000001055515034) *attr) | [osSemaphoreId_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga5abc2c02a86678b63a711e13894ac5b1) Creates and initializes a semaphore object.   
[osSemaphoreAcquire](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga7e94c8b242a0c81f2cc79ec22895c87b) ([osSemaphoreId_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga5abc2c02a86678b63a711e13894ac5b1) semaphore_id, uint32_t timeout) | [osStatus_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga6c0dbe6069e4e7f47bb4cd32ae2b813e) Acquires a token of a semaphore object.   
[osSemaphoreRelease](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga0abcee1b5449d7a6928fb9248c690bb6) ([osSemaphoreId_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga5abc2c02a86678b63a711e13894ac5b1) semaphore_id) | [osStatus_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga6c0dbe6069e4e7f47bb4cd32ae2b813e) Releases a token of a semaphore object.   
[osSemaphoreGetCount](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga7559d4dff3cda9992fc5ab5de3e74c70) ([osSemaphoreId_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga5abc2c02a86678b63a711e13894ac5b1) semaphore_id) | uint32_t  Obtains the number of available tokens of a semaphore object.   
[osSemaphoreDelete](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga81258ce9c67fa89f07cc49d2e136cd88) ([osSemaphoreId_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga5abc2c02a86678b63a711e13894ac5b1) semaphore_id) | [osStatus_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga6c0dbe6069e4e7f47bb4cd32ae2b813e) Deletes a semaphore object.   
[osMessageQueueNew](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga24e895a00f9d484db33aaf784c57bfed) (uint32_t msg_count, uint32_t msg_size, const [osMessageQueueAttr_t](https://device.harmonyos.com/cn/docs/develop/apiref/osmessagequeueattr__t-0000001054796543) *attr) | [osMessageQueueId_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga206dbc05367e03c39fc6d4d1ebcff317) Creates and initializes a message queue.   
[osMessageQueuePut](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__gaa515fc8b956f721a8f72b2c505813bfc) ([osMessageQueueId_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga206dbc05367e03c39fc6d4d1ebcff317) mq_id, const void *msg_ptr, uint8_t msg_prio, uint32_t timeout) | [osStatus_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga6c0dbe6069e4e7f47bb4cd32ae2b813e) Places a message in a message queue.   
[osMessageQueueGet](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__gad90d4959466a7a65105061da8256ab9e) ([osMessageQueueId_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga206dbc05367e03c39fc6d4d1ebcff317) mq_id, void *msg_ptr, uint8_t *msg_prio, uint32_t timeout) | [osStatus_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga6c0dbe6069e4e7f47bb4cd32ae2b813e) Obtains a message in a message queue.   
[osMessageQueueGetCapacity](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__gac24f87d4f395e9e9c900c320e45ade8a) ([osMessageQueueId_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga206dbc05367e03c39fc6d4d1ebcff317) mq_id) | uint32_t  Obtains the maximum number of messages that can be placed in a message queue.   
[osMessageQueueGetMsgSize](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga96d3d84069b20359de48109e28a1a89e) ([osMessageQueueId_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga206dbc05367e03c39fc6d4d1ebcff317) mq_id) | uint32_t  Obtains the maximum size of messages that can be placed in a message queue.   
[osMessageQueueGetCount](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga6a32ac394fcff568b251c160cc3014b2) ([osMessageQueueId_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga206dbc05367e03c39fc6d4d1ebcff317) mq_id) | uint32_t  Obtains the number of queued messages in a message queue.   
[osMessageQueueGetSpace](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__gaddf0904427436dd3880d46263c2dc9fa) ([osMessageQueueId_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga206dbc05367e03c39fc6d4d1ebcff317) mq_id) | uint32_t  Obtains the number of available slots for messages in a message queue.   
[osMessageQueueDelete](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__gaba987f665444e0d83fa6a3a68bc72abe) ([osMessageQueueId_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga206dbc05367e03c39fc6d4d1ebcff317) mq_id) | [osStatus_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga6c0dbe6069e4e7f47bb4cd32ae2b813e) Deletes a message queue.   
  
#### Details

#### Macro Definition

#### [h2]osFlagsError
    
    #define osFlagsError   0x80000000U

**Description:**

Indicates a flag error. 

#### [h2]osFlagsErrorParameter
    
    #define osFlagsErrorParameter   0xFFFFFFFCU

**Description:**

Indicates an incorrect parameter. 

#### [h2]osFlagsErrorResource
    
    #define osFlagsErrorResource   0xFFFFFFFDU

**Description:**

Indicates a resource error. 

#### [h2]osFlagsErrorTimeout
    
    #define osFlagsErrorTimeout   0xFFFFFFFEU

**Description:**

Indicates a timeout. 

#### [h2]osFlagsErrorUnknown
    
    #define osFlagsErrorUnknown   0xFFFFFFFFU

**Description:**

Indicates an unknown error. 

#### [h2]osFlagsNoClear
    
    #define osFlagsNoClear   0x00000002U

**Description:**

Indicates that defined flags are not cleared. 

#### [h2]osFlagsWaitAll
    
    #define osFlagsWaitAll   0x00000001U

**Description:**

Indicates that the system waits until all event flags are triggered. 

#### [h2]osFlagsWaitAny
    
    #define osFlagsWaitAny   0x00000000U

**Description:**

Indicates that the RTOS waits until any event flag is triggered. 

#### [h2]osNoWait
    
    #define osNoWait   0x0U

**Description:**

Indicates that the RTOS does not wait. 

#### [h2]osWaitForever
    
    #define osWaitForever   0xFFFFFFFFU

**Description:**

Indicates that the RTOS waits forever unless an event flag is received. 

#### Typedef

#### [h2]osEventFlagsId_t
    
    typedef void* [osEventFlagsId_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__gaf0a3ba8f502ca6581ed1009005c0dadd)

**Description:**

Identifies an event flag. 

#### [h2]osMessageQueueId_t
    
    typedef void* [osMessageQueueId_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga206dbc05367e03c39fc6d4d1ebcff317)

**Description:**

Identifies a message queue. 

#### [h2]osMutexId_t
    
    typedef void* [osMutexId_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga29b7ba721f4fe0b11c84c55d079cc3e7)

**Description:**

Identifies a mutex. 

#### [h2]osSemaphoreId_t
    
    typedef void* [osSemaphoreId_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga5abc2c02a86678b63a711e13894ac5b1)

**Description:**

Identifies a semaphore object. 

#### [h2]osThreadFunc_t
    
    typedef void(* osThreadFunc_t) (void *argument)

**Description:**

Callback for thread scheduling. 

#### [h2]osThreadId_t
    
    typedef void* [osThreadId_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga6333e016ba9b008e6dd76851c38b9217)

**Description:**

Identifies a thread. 

#### [h2]osTimerFunc_t
    
    typedef void(* osTimerFunc_t) (void *argument)

**Description:**

Callback for timer triggering. 

#### [h2]osTimerId_t
    
    typedef void* [osTimerId_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__gac2000ac2a8c6740700fd8e6c938cff44)

**Description:**

Identifies a timer. 

#### [h2]TZ_ModuleId_t
    
    typedef uint32_t [TZ_ModuleId_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__gad5ef21485fe5f60263bc0b48006202cb)

**Description:**

Identifies a TrustZone module call process. 

#### Enumeration Type

#### [h2]os_timer_align_type
    
    enum [os_timer_align_type](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga3d617b70715d7fb2c7c6f06809ee3913)

**Description:**

Enumerates timer alignment modes. 

Enumerator | Description  
---|---  
****osTimerAlignIgnore | The timer ignores alignment.   
****osTimerAlignAllow | The timer allows alignment.   
  
#### [h2]os_timer_rouses_type
    
    enum [os_timer_rouses_type](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga6274cbe33c6db824bbc40dc6eaa8e578)

**Description:**

Enumerates timer permissions. 

Enumerator | Description  
---|---  
****osTimerRousesIgnore | The timer is not allowed to wake up the RTOS.   
****osTimerRousesAllow | The timer is allowed to wake up the RTOS.   
  
#### [h2]osKernelState_t
    
    enum [osKernelState_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga08326469274b668140ca934b168a5ad4)

**Description:**

Enumerates kernel states. 

Enumerator | Description  
---|---  
****osKernelInactive | The kernel is inactive.   
****osKernelReady | The kernel is ready.   
****osKernelRunning | The kernel is running.   
****osKernelLocked | The kernel is locked.   
****osKernelSuspended | The kernel is suspended.   
****osKernelError | The kernel is abnormal.   
****osKernelReserved | Reserved   
  
#### [h2]osPriority_t
    
    enum [osPriority_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__gad4e3e0971b41f2d17584a8c6837342ec)

**Description:**

Enumerates thread priorities. 

Enumerator | Description  
---|---  
****osPriorityNone | Undefined   
****osPriorityIdle | Reserved for idle threads   
****osPriorityLow | Low (unsupported)   
****osPriorityLow1 | Low + 1   
****osPriorityLow2 | Low + 2   
****osPriorityLow3 | Low + 3   
****osPriorityLow4 | Low + 4   
****osPriorityLow5 | Low + 5   
****osPriorityLow6 | Low + 6   
****osPriorityLow7 | Low + 7   
****osPriorityBelowNormal | Below normal   
****osPriorityBelowNormal1 | Below normal + 1   
****osPriorityBelowNormal2 | Below normal + 2   
****osPriorityBelowNormal3 | Below normal + 3   
****osPriorityBelowNormal4 | Below normal + 4   
****osPriorityBelowNormal5 | Below normal + 5   
****osPriorityBelowNormal6 | Below normal + 6   
****osPriorityBelowNormal7 | Below normal + 7   
****osPriorityNormal | Normal   
****osPriorityNormal1 | Normal + 1   
****osPriorityNormal2 | Normal + 2   
****osPriorityNormal3 | Normal + 3   
****osPriorityNormal4 | Normal + 4   
****osPriorityNormal5 | Normal + 5   
****osPriorityNormal6 | Normal + 6   
****osPriorityNormal7 | Normal + 7   
****osPriorityAboveNormal | Above normal   
****osPriorityAboveNormal1 | Above normal + 1   
****osPriorityAboveNormal2 | Above normal + 2   
****osPriorityAboveNormal3 | Above normal + 3   
****osPriorityAboveNormal4 | Above normal + 4   
****osPriorityAboveNormal5 | Above normal + 5   
****osPriorityAboveNormal6 | Above normal + 6   
****osPriorityAboveNormal7 | Above normal + 7 (unsupported)   
****osPriorityHigh | High (unsupported)   
****osPriorityHigh1 | High + 1 (unsupported)   
****osPriorityHigh2 | High + 2 (unsupported)   
****osPriorityHigh3 | High + 3 (unsupported)   
****osPriorityHigh4 | High + 4 (unsupported)   
****osPriorityHigh5 | High + 5 (unsupported)   
****osPriorityHigh6 | High + 6 (unsupported)   
****osPriorityHigh7 | High + 7 (unsupported)   
****osPriorityRealtime | Real-time (unsupported)   
****osPriorityRealtime1 | Real-time + 1 (unsupported)   
****osPriorityRealtime2 | Real-time + 2 (unsupported)   
****osPriorityRealtime3 | Real-time + 3 (unsupported)   
****osPriorityRealtime4 | Real-time + 4 (unsupported)   
****osPriorityRealtime5 | Real-time + 5 (unsupported)   
****osPriorityRealtime6 | Real-time + 6 (unsupported)   
****osPriorityRealtime7 | Real-time + 7 (unsupported)   
****osPriorityISR | Reserved for ISR deferred threads (unsupported)   
****osPriorityError | Invalid   
****osPriorityReserved | Reserved. It enables the compiler to identify enumeration variables as 32-bit numbers and prevents the enumeration variables from being optimized.   
  
#### [h2]osStatus_t
    
    enum [osStatus_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga6c0dbe6069e4e7f47bb4cd32ae2b813e)

**Description:**

Enumerates return values of CMSIS-RTOS. 

Enumerator | Description  
---|---  
****osOK | Operation completed successfully   
****osError | Unspecified error   
****osErrorTimeout | Timeout   
****osErrorResource | Resource error   
****osErrorParameter | Incorrect parameter   
****osErrorNoMemory | Insufficient memory   
****osErrorISR | [Service](https://device.harmonyos.com/cn/docs/develop/apiref/service-0000001055675026) interruption   
****osStatusReserved | Reserved. It is used to prevent the compiler from optimizing enumerations.   
  
#### [h2]osThreadState_t
    
    enum [osThreadState_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__gad3dc89e942e38d9f3af858a0269a820d)

**Description:**

Enumerates thread states. 

Enumerator | Description  
---|---  
****osThreadInactive | The thread is inactive.   
****osThreadReady | The thread is ready.   
****osThreadRunning | The thread is running.   
****osThreadBlocked | The thread is blocked.   
****osThreadTerminated | The thread is terminated.   
****osThreadError | The thread is abnormal.   
****osThreadReserved | Reserved   
  
#### [h2]osTimerType_t
    
    enum [osTimerType_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga7dc24a4c2b90334427081c3da7a71915)

**Description:**

Enumerates timer types. 

Enumerator | Description  
---|---  
****osTimerOnce | One-shot timer   
****osTimerPeriodic | Repeating timer   
  
#### Function

#### [h2]osDelay()
    
    [osStatus_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga6c0dbe6069e4e7f47bb4cd32ae2b813e) osDelay (uint32_t ticks)

**Description:**

Waits for a period of time. 

**Parameters:**

Name | Description  
---|---  
ticks | Indicates the number of ticks to wait for.   
  
**Returns:**

Returns the CMSIS-RTOS running result. 

#### [h2]osDelayUntil()
    
    [osStatus_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga6c0dbe6069e4e7f47bb4cd32ae2b813e) osDelayUntil (uint64_t ticks)

**Description:**

Waits until a specified time arrives. 

This function handles the overflow of the system timer. Note that the maximum value of this parameter is (2^31 - 1) ticks. 

**Parameters:**

Name | Description  
---|---  
ticks | Indicates the number of ticks converted from the absolute time.   
  
**Returns:**

Returns the CMSIS-RTOS running result. 

#### [h2]osEventFlagsClear()
    
    uint32_t osEventFlagsClear ([osEventFlagsId_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__gaf0a3ba8f502ca6581ed1009005c0dadd) ef_id, uint32_t flags )

**Description:**

Clears event flags. 

**Parameters:**

Name | Description  
---|---  
ef_id | Indicates the event flags ID, which is obtained using osEventFlagsNew.   
flags | Indicates the event flags to clear.   
  
**Returns:**

Returns the event flags; returns osFlagsErrorParameter in the case of an error. 

#### [h2]osEventFlagsDelete()
    
    [osStatus_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga6c0dbe6069e4e7f47bb4cd32ae2b813e) osEventFlagsDelete ([osEventFlagsId_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__gaf0a3ba8f502ca6581ed1009005c0dadd) ef_id)

**Description:**

Deletes an event flags object. 

**Parameters:**

Name | Description  
---|---  
ef_id | Indicates the event flags ID, which is obtained using osEventFlagsNew.   
  
**Returns:**

Returns the CMSIS-RTOS running result. 

#### [h2]osEventFlagsGet()
    
    uint32_t osEventFlagsGet ([osEventFlagsId_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__gaf0a3ba8f502ca6581ed1009005c0dadd) ef_id)

**Description:**

Obtains event flags. 

**Parameters:**

Name | Description  
---|---  
ef_id | Indicates the event flags ID, which is obtained using osEventFlagsNew.   
  
**Returns:**

Returns the event flags triggered. 

#### [h2]osEventFlagsNew()
    
    [osEventFlagsId_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__gaf0a3ba8f502ca6581ed1009005c0dadd) osEventFlagsNew (const [osEventFlagsAttr_t](https://device.harmonyos.com/cn/docs/develop/apiref/oseventflagsattr__t-0000001054715065) * attr)

**Description:**

Creates and initializes an event flags object. 

**Parameters:**

Name | Description  
---|---  
attr | Indicates the pointer to the event flags attributes. This parameter is not used.   
  
**Returns:**

Returns the event flags ID; returns NULL in the case of an error. 

#### [h2]osEventFlagsSet()
    
    uint32_t osEventFlagsSet ([osEventFlagsId_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__gaf0a3ba8f502ca6581ed1009005c0dadd) ef_id, uint32_t flags )

**Description:**

Sets event flags. 

**Parameters:**

Name | Description  
---|---  
ef_id | Indicates the event flags ID, which is obtained using osEventFlagsNew.   
flags | Indicates the event flags to set.   
  
**Returns:**

Returns the event flags; returns osFlagsErrorParameter in the case of an error. 

#### [h2]osEventFlagsWait()
    
    uint32_t osEventFlagsWait ([osEventFlagsId_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__gaf0a3ba8f502ca6581ed1009005c0dadd) ef_id, uint32_t flags, uint32_t options, uint32_t timeout )
    
    **Values:**
    
     flags 
    
    
    

**Description:**

Waits for event flags to trigger. 

This function is blocked if the specified event flags are not set via

. 

**Parameters:**

Name | Description  
---|---  
ef_id | Indicates the event flags ID, which is obtained using osEventFlagsNew.   
flags | Indicates the event flags to trigger.   
options | Indicates the configuration of the event flags to trigger.   
timeout | Indicates the timeout duration.   
  
**Returns:**

Returns the triggered event flags; returns an error value in the case of an error. 

#### [h2]osKernelGetInfo()
    
    [osStatus_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga6c0dbe6069e4e7f47bb4cd32ae2b813e) osKernelGetInfo ([osVersion_t](https://device.harmonyos.com/cn/docs/develop/apiref/osversion__t-0000001055075083) * version, char * id_buf, uint32_t id_size )

**Description:**

Obtains the system version and name. 

**Parameters:**

Name | Description  
---|---  
version | Indicates the pointer to the buffer for storing the version.   
id_buf | Indicates the pointer to the buffer for storing the kernel ID.   
id_size | Indicates the size of the buffer for storing the kernel ID.   
  
**Returns:**

Returns the CMSIS-RTOS running result. 

#### [h2]osKernelGetState()
    
    [osKernelState_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga08326469274b668140ca934b168a5ad4) osKernelGetState (void )

**Description:**

Obtains the kernel state. 

**Returns:**

Returns the kernel state. 

#### [h2]osKernelGetSysTimerCount()
    
    uint32_t osKernelGetSysTimerCount (void )

**Description:**

Obtains the kernel system timer. 

**Returns:**

Returns the kernel system timer. 

#### [h2]osKernelGetSysTimerFreq()
    
    uint32_t osKernelGetSysTimerFreq (void )

**Description:**

Obtains the frequency of the system timer. 

**Returns:**

Returns the system timer frequency. 

#### [h2]osKernelGetTickFreq()
    
    uint32_t osKernelGetTickFreq (void )

**Description:**

Obtains the number of kernel ticks per second. 

**Returns:**

Returns the number of kernel ticks. 

#### [h2]osKernelInitialize()
    
    [osStatus_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga6c0dbe6069e4e7f47bb4cd32ae2b813e) osKernelInitialize (void )

**Description:**

Initializes the RTOS kernel. 

**Returns:**

Returns the CMSIS-RTOS running result. 

#### [h2]osKernelLock()
    
    int32_t osKernelLock (void )

**Description:**

Locks the kernel. 

**Returns:**

Returns 1 if the kernel is locked successfully; returns 0 if the lock starts; returns a negative value in the case of an error. 

#### [h2]osKernelRestoreLock()
    
    int32_t osKernelRestoreLock (int32_t lock)

**Description:**

Restores the previous lock state of the kernel. 

**Parameters:**

Name | Description  
---|---  
locks | Indicates the lock state to restore to. The value 1 indicates the locked state, and 0 indicates the unlocked state.   
  
**Returns:**

Returns 1 if the kernel is locked; returns 0 if the kernel is not locked; returns a negative value in the case of an error. 

#### [h2]osKernelStart()
    
    [osStatus_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga6c0dbe6069e4e7f47bb4cd32ae2b813e) osKernelStart (void )

**Description:**

Starts the kernel. 

**Returns:**

Returns the CMSIS-RTOS running result. 

#### [h2]osKernelUnlock()
    
    int32_t osKernelUnlock (void )

**Description:**

Unlocks the kernel. 

**Returns:**

Returns 1 if the kernel is unlocked successfully; returns 0 if the kernel is not locked; returns a negative value in the case of an error. 

#### [h2]osMessageQueueDelete()
    
    [osStatus_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga6c0dbe6069e4e7f47bb4cd32ae2b813e) osMessageQueueDelete ([osMessageQueueId_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga206dbc05367e03c39fc6d4d1ebcff317) mq_id)

**Description:**

Deletes a message queue. 

**Parameters:**

Name | Description  
---|---  
osMessageQueueId_t | Indicates the message queue ID, which is obtained using osMessageQueueNew.   
  
**Returns:**

Returns the CMSIS-RTOS running result. 

#### [h2]osMessageQueueGet()
    
    [osStatus_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga6c0dbe6069e4e7f47bb4cd32ae2b813e) osMessageQueueGet ([osMessageQueueId_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga206dbc05367e03c39fc6d4d1ebcff317) mq_id, void * msg_ptr, uint8_t * msg_prio, uint32_t timeout )

**Description:**

Obtains a message in a message queue. 

**Parameters:**

Name | Description  
---|---  
osMessageQueueId_t | Indicates the message queue ID, which is obtained using osMessageQueueNew.   
msg_ptr | Indicates the pointer to the buffer for storing the message to be retrieved from the message queue.   
msg_prio | Indicates the pointer to the buffer for storing the priority of the message to be retrieved from the message queue. This parameter is not used.   
timeout | Indicates the timeout duration.   
  
**Returns:**

Returns the CMSIS-RTOS running result. 

#### [h2]osMessageQueueGetCapacity()
    
    uint32_t osMessageQueueGetCapacity ([osMessageQueueId_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga206dbc05367e03c39fc6d4d1ebcff317) mq_id)

**Description:**

Obtains the maximum number of messages that can be placed in a message queue. 

**Parameters:**

Name | Description  
---|---  
osMessageQueueId_t | Indicates the message queue ID, which is obtained using osMessageQueueNew.   
  
**Returns:**

Returns the maximum number. 

#### [h2]osMessageQueueGetCount()
    
    uint32_t osMessageQueueGetCount ([osMessageQueueId_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga206dbc05367e03c39fc6d4d1ebcff317) mq_id)

**Description:**

Obtains the number of queued messages in a message queue. 

**Parameters:**

Name | Description  
---|---  
osMessageQueueId_t | Indicates the message queue ID, which is obtained using osMessageQueueNew.   
  
**Returns:**

Returns the number of queued messages. 

#### [h2]osMessageQueueGetMsgSize()
    
    uint32_t osMessageQueueGetMsgSize ([osMessageQueueId_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga206dbc05367e03c39fc6d4d1ebcff317) mq_id)

**Description:**

Obtains the maximum size of messages that can be placed in a message queue. 

**Parameters:**

Name | Description  
---|---  
osMessageQueueId_t | Indicates the message queue ID, which is obtained using osMessageQueueNew.   
  
**Returns:**

Returns the maximum message size. 

#### [h2]osMessageQueueGetSpace()
    
    uint32_t osMessageQueueGetSpace ([osMessageQueueId_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga206dbc05367e03c39fc6d4d1ebcff317) mq_id)

**Description:**

Obtains the number of available slots for messages in a message queue. 

**Parameters:**

Name | Description  
---|---  
osMessageQueueId_t | Indicates the message queue ID, which is obtained using osMessageQueueNew.   
  
**Returns:**

Returns the number of available slots for messages. 

#### [h2]osMessageQueueNew()
    
    [osMessageQueueId_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga206dbc05367e03c39fc6d4d1ebcff317) osMessageQueueNew (uint32_t msg_count, uint32_t msg_size, const [osMessageQueueAttr_t](https://device.harmonyos.com/cn/docs/develop/apiref/osmessagequeueattr__t-0000001054796543) * attr )

**Description:**

Creates and initializes a message queue. 

**Parameters:**

Name | Description  
---|---  
msg_count | Indicates the number of messages in the message queue.   
msg_size | Indicates the size of messages in the message queue.   
attr | Indicates the pointer to the message queue attributes. This parameter is not used.   
  
**Returns:**

Returns the message queue ID; returns NULL in the case of an error. 

#### [h2]osMessageQueuePut()
    
    [osStatus_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga6c0dbe6069e4e7f47bb4cd32ae2b813e) osMessageQueuePut ([osMessageQueueId_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga206dbc05367e03c39fc6d4d1ebcff317) mq_id, const void * msg_ptr, uint8_t msg_prio, uint32_t timeout )

**Description:**

Places a message in a message queue. 

**Parameters:**

Name | Description  
---|---  
osMessageQueueId_t | Indicates the message queue ID, which is obtained using osMessageQueueNew.   
msg_ptr | Indicates the pointer to the buffer for storing the message to be placed in the message queue.   
msg_prio | Indicates the priority of the message to be placed in the message queue. This parameter is not used.   
timeout | Indicates the timeout duration.   
  
**Returns:**

Returns the CMSIS-RTOS running result. 

#### [h2]osMutexAcquire()
    
    [osStatus_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga6c0dbe6069e4e7f47bb4cd32ae2b813e) osMutexAcquire ([osMutexId_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga29b7ba721f4fe0b11c84c55d079cc3e7) mutex_id, uint32_t timeout )

**Description:**

Obtains a mutex. 

**Parameters:**

Name | Description  
---|---  
mutex_id | Indicates the mutex ID, which is obtained using osMutexNew.   
timeout | Indicates the timeout duration.   
  
**Returns:**

Returns the CMSIS-RTOS running result. 

#### [h2]osMutexDelete()
    
    [osStatus_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga6c0dbe6069e4e7f47bb4cd32ae2b813e) osMutexDelete ([osMutexId_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga29b7ba721f4fe0b11c84c55d079cc3e7) mutex_id)

**Description:**

Deletes a mutex. 

**Parameters:**

Name | Description  
---|---  
mutex_id | Indicates the mutex ID, which is obtained using osMutexNew.   
  
**Returns:**

Returns the CMSIS-RTOS running result. 

#### [h2]osMutexGetOwner()
    
    [osThreadId_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga6333e016ba9b008e6dd76851c38b9217) osMutexGetOwner ([osMutexId_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga29b7ba721f4fe0b11c84c55d079cc3e7) mutex_id)

**Description:**

Obtains the thread ID of the currently acquired mutex. 

**Parameters:**

Name | Description  
---|---  
mutex_id | Indicates the mutex ID, which is obtained using osMutexNew.   
  
**Returns:**

Returns the thread ID. 

#### [h2]osMutexNew()
    
    [osMutexId_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga29b7ba721f4fe0b11c84c55d079cc3e7) osMutexNew (const [osMutexAttr_t](https://device.harmonyos.com/cn/docs/develop/apiref/osmutexattr__t-0000001055675030) * attr)

**Description:**

Creates and initializes a mutex. 

**Parameters:**

Name | Description  
---|---  
attr | Indicates the pointer to the mutex attributes. This parameter is not used.   
  
**Returns:**

Returns the mutex ID; returns NULL in the case of an error. 

#### [h2]osMutexRelease()
    
    [osStatus_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga6c0dbe6069e4e7f47bb4cd32ae2b813e) osMutexRelease ([osMutexId_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga29b7ba721f4fe0b11c84c55d079cc3e7) mutex_id)

**Description:**

Releases a mutex. 

**Parameters:**

Name | Description  
---|---  
mutex_id | Indicates the mutex ID, which is obtained using osMutexNew.   
  
**Returns:**

Returns the CMSIS-RTOS running result. 

#### [h2]osSemaphoreAcquire()
    
    [osStatus_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga6c0dbe6069e4e7f47bb4cd32ae2b813e) osSemaphoreAcquire ([osSemaphoreId_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga5abc2c02a86678b63a711e13894ac5b1) semaphore_id, uint32_t timeout )

**Description:**

Acquires a token of a semaphore object. 

**Parameters:**

Name | Description  
---|---  
semaphore_id | Indicates the semaphore ID, which is obtained using osSemaphoreNew.   
timeout | Indicates the timeout duration, in ticks.   
  
**Returns:**

Returns the CMSIS-RTOS running result. 

#### [h2]osSemaphoreDelete()
    
    [osStatus_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga6c0dbe6069e4e7f47bb4cd32ae2b813e) osSemaphoreDelete ([osSemaphoreId_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga5abc2c02a86678b63a711e13894ac5b1) semaphore_id)

**Description:**

Deletes a semaphore object. 

**Parameters:**

Name | Description  
---|---  
semaphore_id | Indicates the semaphore ID, which is obtained using osSemaphoreNew.   
  
**Returns:**

Returns the CMSIS-RTOS running result. 

#### [h2]osSemaphoreGetCount()
    
    uint32_t osSemaphoreGetCount ([osSemaphoreId_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga5abc2c02a86678b63a711e13894ac5b1) semaphore_id)

**Description:**

Obtains the number of available tokens of a semaphore object. 

**Parameters:**

Name | Description  
---|---  
semaphore_id | Indicates the semaphore ID, which is obtained using osSemaphoreNew.   
  
**Returns:**

Returns the number of available tokens. 

#### [h2]osSemaphoreNew()
    
    [osSemaphoreId_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga5abc2c02a86678b63a711e13894ac5b1) osSemaphoreNew (uint32_t max_count, uint32_t initial_count, const [osSemaphoreAttr_t](https://device.harmonyos.com/cn/docs/develop/apiref/ossemaphoreattr__t-0000001055515034) * attr )

**Description:**

Creates and initializes a semaphore object. 

**Parameters:**

Name | Description  
---|---  
max_count | Indicates the maximum number of available tokens that can be applied for.   
initial_count | Indicates the initial number of available tokens.   
attr | Indicates the pointer to the semaphore attributes. This parameter is not used.   
  
**Returns:**

Returns the semaphore ID; returns NULL in the case of an error. 

#### [h2]osSemaphoreRelease()
    
    [osStatus_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga6c0dbe6069e4e7f47bb4cd32ae2b813e) osSemaphoreRelease ([osSemaphoreId_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga5abc2c02a86678b63a711e13894ac5b1) semaphore_id)

**Description:**

Releases a token of a semaphore object. 

**Parameters:**

Name | Description  
---|---  
semaphore_id | Indicates the semaphore ID, which is obtained using osSemaphoreNew.   
  
**Returns:**

Returns the CMSIS-RTOS running result. 

#### [h2]osThreadGetCount()
    
    uint32_t osThreadGetCount (void )

**Description:**

Obtains the number of active threads. 

**Returns:**

Returns the number; returns 0 in the case of an error. 

#### [h2]osThreadGetId()
    
    [osThreadId_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga6333e016ba9b008e6dd76851c38b9217) osThreadGetId (void )

**Description:**

Obtains the ID of the currently running thread. 

**Returns:**

Returns the thread ID; returns NULL in the case of an error. 

#### [h2]osThreadGetName()
    
    const char* osThreadGetName ([osThreadId_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga6333e016ba9b008e6dd76851c38b9217) thread_id)

**Description:**

Obtains the name of a thread. 

**Parameters:**

Name | Description  
---|---  
thread_id | Indicates the thread ID, which is obtained using osThreadNew or osThreadGetId.   
  
**Returns:**

Returns the thread name; returns NULL in the case of an error. 

#### [h2]osThreadGetPriority()
    
    [osPriority_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__gad4e3e0971b41f2d17584a8c6837342ec) osThreadGetPriority ([osThreadId_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga6333e016ba9b008e6dd76851c38b9217) thread_id)

**Description:**

Gets the prority of an active thread. 

**Parameters:**

Name | Description  
---|---  
thread_id | Indicates the thread ID, which is obtained using osThreadNew or osThreadGetId.   
  
**Returns:**

Returns the prority of the thread. 

#### [h2]osThreadGetStackSize()
    
    uint32_t osThreadGetStackSize ([osThreadId_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga6333e016ba9b008e6dd76851c38b9217) thread_id)

**Description:**

Obtains the stack size of a thread. 

**Parameters:**

Name | Description  
---|---  
thread_id | Indicates the thread ID, which is obtained using osThreadNew or osThreadGetId.   
  
**Returns:**

Returns the stack size, in bytes; returns 0 in the case of an error. 

#### [h2]osThreadGetStackSpace()
    
    uint32_t osThreadGetStackSpace ([osThreadId_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga6333e016ba9b008e6dd76851c38b9217) thread_id)

**Description:**

Obtains the size of the available stack space for a thread based on the stack watermark. 

**Parameters:**

Name | Description  
---|---  
thread_id | Indicates the thread ID, which is obtained using osThreadNew or osThreadGetId.   
  
**Returns:**

Returns the available stack size, in bytes; returns 0 in the case of an error. 

#### [h2]osThreadGetState()
    
    [osThreadState_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__gad3dc89e942e38d9f3af858a0269a820d) osThreadGetState ([osThreadId_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga6333e016ba9b008e6dd76851c38b9217) thread_id)

**Description:**

Obtains the state of a thread. 

**Parameters:**

Name | Description  
---|---  
thread_id | Indicates the thread ID, which is obtained using osThreadNew or osThreadGetId.   
  
**Returns:**

Returns the thread state. 

#### [h2]osThreadNew()
    
    [osThreadId_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga6333e016ba9b008e6dd76851c38b9217) osThreadNew ([osThreadFunc_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga8ef2773ed8ef63ab8727e0d06ebec4d2) func, void * argument, const [osThreadAttr_t](https://device.harmonyos.com/cn/docs/develop/apiref/osthreadattr__t-0000001054595107) * attr )
    
    **Values:**
    
     LOSCFG_BASE_CORE_TSK_LIMIT 
    
    
    

**Description:**

Creates an active thread. 

The task priority ranges from 9 (highest priority) to 38 (lowest priority).

declared in target_config.h specifies the maximum number of tasks running in this system. 

**Parameters:**

Name | Description  
---|---  
func | Indicates the entry of the thread callback function.   
argument | Indicates the pointer to the argument passed to the thread.   
attr | Indicates the thread attributes. If this parameter is left unspecified, the default value 0 is used.   
  
**Returns:**

Returns the thread ID; returns NULL in the case of an error. 

#### [h2]osThreadResume()
    
    [osStatus_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga6c0dbe6069e4e7f47bb4cd32ae2b813e) osThreadResume ([osThreadId_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga6333e016ba9b008e6dd76851c38b9217) thread_id)

**Description:**

Resumes a thread from the suspended state. 

**Parameters:**

Name | Description  
---|---  
thread_id | Indicates the thread ID, which is obtained using osThreadNew or osThreadGetId.   
  
**Returns:**

Returns the CMSIS-RTOS running result. 

#### [h2]osThreadSetPriority()
    
    [osStatus_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga6c0dbe6069e4e7f47bb4cd32ae2b813e) osThreadSetPriority ([osThreadId_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga6333e016ba9b008e6dd76851c38b9217) thread_id, [osPriority_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__gad4e3e0971b41f2d17584a8c6837342ec) priority )

**Description:**

Changes the priority of a thread. 

**Parameters:**

Name | Description  
---|---  
thread_id | Indicates the thread ID, which is obtained using osThreadNew or osThreadGetId.   
priority | Indicates the new priority.   
  
**Returns:**

Returns the CMSIS-RTOS running result. 

#### [h2]osThreadSuspend()
    
    [osStatus_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga6c0dbe6069e4e7f47bb4cd32ae2b813e) osThreadSuspend ([osThreadId_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga6333e016ba9b008e6dd76851c38b9217) thread_id)

**Description:**

Suspends a thread. 

**Parameters:**

Name | Description  
---|---  
thread_id | Indicates the thread ID, which is obtained using osThreadNew or osThreadGetId.   
  
**Returns:**

Returns the CMSIS-RTOS running result. 

#### [h2]osThreadTerminate()
    
    [osStatus_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga6c0dbe6069e4e7f47bb4cd32ae2b813e) osThreadTerminate ([osThreadId_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga6333e016ba9b008e6dd76851c38b9217) thread_id)

**Description:**

Terminates a thread. 

**Parameters:**

Name | Description  
---|---  
thread_id | Indicates the thread ID, which is obtained using osThreadNew or osThreadGetId.   
  
**Returns:**

Returns the CMSIS-RTOS running result. 

#### [h2]osThreadYield()
    
    [osStatus_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga6c0dbe6069e4e7f47bb4cd32ae2b813e) osThreadYield (void )

**Description:**

Sets the currently running thread to the ready state. 

**Returns:**

Returns the CMSIS-RTOS running result. 

#### [h2]osTimerDelete()
    
    [osStatus_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga6c0dbe6069e4e7f47bb4cd32ae2b813e) osTimerDelete ([osTimerId_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__gac2000ac2a8c6740700fd8e6c938cff44) timer_id)

**Description:**

Deletes a timer. 

**Parameters:**

Name | Description  
---|---  
timer_id | Indicates the timer ID, which is obtained using osTimerNew.   
  
**Returns:**

Returns the CMSIS-RTOS running result. 

#### [h2]osTimerIsRunning()
    
    uint32_t osTimerIsRunning ([osTimerId_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__gac2000ac2a8c6740700fd8e6c938cff44) timer_id)

**Description:**

Checks whether a timer is running. 

**Parameters:**

Name | Description  
---|---  
timer_id | Indicates the timer ID, which is obtained using osTimerNew.   
  
**Returns:**

Returns 1 if the timer is running; returns 0 otherwise. 

#### [h2]osTimerNew()
    
    [osTimerId_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__gac2000ac2a8c6740700fd8e6c938cff44) osTimerNew ([osTimerFunc_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga77a298218f3c8382b39a09a6d134d040) func, [osTimerType_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga7dc24a4c2b90334427081c3da7a71915) type, void * argument, const [osTimerAttr_t](https://device.harmonyos.com/cn/docs/develop/apiref/ostimerattr__t-0000001054915099) * attr )

**Description:**

Creates and initializes a timer. 

This function creates a timer associated with the arguments callback function. The timer stays in the stopped state until OSTimerStart is used to start the timer. The timer precision is 1000 / LOSCFG_BASE_CORE_TICK_PER_SECOND msLOSCFG_BASE_CORE_TICK_PER_SECOND is defined in the traget_config.h). 

**Parameters:**

Name | Description  
---|---  
func | Indicates the entry of the timer callback function.   
type | Indicates the timer type.   
argument | Indicates the pointer to the argument used in timer callback.   
attr | Indicates the pointer to the timer attributes. This parameter is not used.   
  
**Returns:**

Returns the timer ID; returns NULL in the case of an error. 

#### [h2]osTimerStart()
    
    [osStatus_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga6c0dbe6069e4e7f47bb4cd32ae2b813e) osTimerStart ([osTimerId_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__gac2000ac2a8c6740700fd8e6c938cff44) timer_id, uint32_t ticks )

**Description:**

Starts or restarts a timer. 

**Parameters:**

Name | Description  
---|---  
timer_id | Indicates the timer ID, which is obtained using osTimerNew.   
ticks | Indicates the number of ticks since the timer starts running.   
  
**Returns:**

Returns the CMSIS-RTOS running result. 

#### [h2]osTimerStop()
    
    [osStatus_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__ga6c0dbe6069e4e7f47bb4cd32ae2b813e) osTimerStop ([osTimerId_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__gac2000ac2a8c6740700fd8e6c938cff44) timer_id)

**Description:**

Stops a timer. 

**Parameters:**

Name | Description  
---|---  
timer_id | Indicates the timer ID, which is obtained using osTimerNew.   
  
**Returns:**

Returns the CMSIS-RTOS running result. 

#### Variable

#### [h2]api
    
    uint32_t osVersion_t::api

**Description:**

API version 

#### [h2]attr_bits [1/6]
    
    uint32_t osThreadAttr_t::attr_bits

**Description:**

Thread attribute bits 

#### [h2]attr_bits [2/6]
    
    uint32_t osTimerAttr_t::attr_bits

**Description:**

Reserved attribute bits 

#### [h2]attr_bits [3/6]
    
    uint32_t osEventFlagsAttr_t::attr_bits

**Description:**

Reserved attribute bits 

#### [h2]attr_bits [4/6]
    
    uint32_t osMutexAttr_t::attr_bits

**Description:**

Reserved attribute bits 

#### [h2]attr_bits [5/6]
    
    uint32_t osSemaphoreAttr_t::attr_bits

**Description:**

Reserved attribute bits 

#### [h2]attr_bits [6/6]
    
    uint32_t osMessageQueueAttr_t::attr_bits

**Description:**

Reserved attribute bits 

#### [h2]cb_mem [1/6]
    
    void* osThreadAttr_t::cb_mem

**Description:**

Memory for the thread control block 

#### [h2]cb_mem [2/6]
    
    void* osTimerAttr_t::cb_mem

**Description:**

Memory for the timer control block 

#### [h2]cb_mem [3/6]
    
    void* osEventFlagsAttr_t::cb_mem

**Description:**

Memory for the event control block 

#### [h2]cb_mem [4/6]
    
    void* osMutexAttr_t::cb_mem

**Description:**

Memory for the mutex control block 

#### [h2]cb_mem [5/6]
    
    void* osSemaphoreAttr_t::cb_mem

**Description:**

Memory for the semaphore control block 

#### [h2]cb_mem [6/6]
    
    void* osMessageQueueAttr_t::cb_mem

**Description:**

Memory for the message queue control block 

#### [h2]cb_size [1/6]
    
    uint32_t osThreadAttr_t::cb_size

**Description:**

Size of the memory for the thread control block 

#### [h2]cb_size [2/6]
    
    uint32_t osTimerAttr_t::cb_size

**Description:**

Size of the memory for the timer control block 

#### [h2]cb_size [3/6]
    
    uint32_t osEventFlagsAttr_t::cb_size

**Description:**

Size of the memory for the event control block 

#### [h2]cb_size [4/6]
    
    uint32_t osMutexAttr_t::cb_size

**Description:**

Size of the memory for the mutex control block 

#### [h2]cb_size [5/6]
    
    uint32_t osSemaphoreAttr_t::cb_size

**Description:**

Size of the memory for the semaphore control block 

#### [h2]cb_size [6/6]
    
    uint32_t osMessageQueueAttr_t::cb_size

**Description:**

Size of the memory for the message queue control block 

#### [h2]kernel
    
    uint32_t osVersion_t::kernel

**Description:**

Kernel version 

#### [h2]mq_mem
    
    void* osMessageQueueAttr_t::mq_mem

**Description:**

Memory for storing data in the message queue 

#### [h2]mq_size
    
    uint32_t osMessageQueueAttr_t::mq_size

**Description:**

Size of the memory for storing data in the message queue 

#### [h2]name [1/6]
    
    const char* osThreadAttr_t::name

**Description:**

Thread name 

#### [h2]name [2/6]
    
    const char* osTimerAttr_t::name

**Description:**

Timer name 

#### [h2]name [3/6]
    
    const char* osEventFlagsAttr_t::name

**Description:**

Event name 

#### [h2]name [4/6]
    
    const char* osMutexAttr_t::name

**Description:**

Mutex name 

#### [h2]name [5/6]
    
    const char* osSemaphoreAttr_t::name

**Description:**

Semaphore name 

#### [h2]name [6/6]
    
    const char* osMessageQueueAttr_t::name

**Description:**

Message queue name 

#### [h2]priority
    
    [osPriority_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__gad4e3e0971b41f2d17584a8c6837342ec) osThreadAttr_t::priority

**Description:**

Thread priority 

#### [h2]reserved
    
    uint32_t osThreadAttr_t::reserved

**Description:**

Reserved 

#### [h2]stack_mem
    
    void* osThreadAttr_t::stack_mem

**Description:**

Memory for the thread stack 

#### [h2]stack_size
    
    uint32_t osThreadAttr_t::stack_size

**Description:**

Size of the thread stack 

#### [h2]tz_module
    
    [TZ_ModuleId_t](https://device.harmonyos.com/cn/docs/develop/apiref/cmsis-0000001055308173#ZH-CN_TOPIC_0000001055308173__gad5ef21485fe5f60263bc0b48006202cb) osThreadAttr_t::tz_module

**Description:**

TrustZone module of the thread 
