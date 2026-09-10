---
name: document/cn/hiai-References/nativehandle-0000002017503216
title: NativeHandle
uri: https://developer.huawei.com/consumer/cn/doc/hiai-References/nativehandle-0000002017503216
---

# NativeHandle

|Struct Info|
|:---------------------------------|
|struct NativeHandle 用于保存ION内存相关信息。|

#### Public Attribute Summary

|Qualifier and Type|Field and Description|
|:-----------------|:-------------------------------------|
|int|fd ION内存的fd。|
|int|size ION内存的整体大小。|
|int|offset ION内存的偏移，实际使用的内存大小为size-offset。|

