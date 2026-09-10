---
name: document/cn/graphics-References/rt-core-buffer-0000001133940651
title: Buffer
uri: https://developer.huawei.com/consumer/cn/doc/graphics-References/rt-core-buffer-0000001133940651
---

# Buffer

|Struct Info|
|:----------------------------|
|Buffer 缓存，可分为CPU类型缓存与GPU类型缓存。|

#### Public Field Summary

|Qualifier and Type|Field and Description|
|:-----------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------|
|[BufferType](https://developer.huawei.com/consumer/cn/doc/graphics-References/rt-core-buffertype-0000001134026287)|type 指定缓存类型，CPU类型或GPU类型，详见[BufferType](https://developer.huawei.com/consumer/cn/doc/graphics-References/rt-core-buffertype-0000001134026287)。|
|void \*|cpuBuffer CPU类型缓存，cpuBuffer、gpuVkBuffer、gpuGlBuffer和other是一个union类型，cpuBuffer指向CPU侧缓存的起始地址。|
|VkBuffer|gpuVkBuffer GPU类型缓存，cpuBuffer、gpuVkBuffer、gpuGlBuffer和other是一个union类型，gpuVkBuffer为一个VkBuffer类型的句柄。|
|unsigned int \*|gpuGlBuffer GPU类型缓存，cpuBuffer、gpuVkBuffer、gpuGlBuffer和other是一个union类型，gpuGlBuffer为一个OpenGL的Buffer指针（预留）。|
|void \*|other 其他类型缓存，cpuBuffer、gpuVkBuffer、gpuGlBuffer和other是一个union类型，预留用于扩展。|

