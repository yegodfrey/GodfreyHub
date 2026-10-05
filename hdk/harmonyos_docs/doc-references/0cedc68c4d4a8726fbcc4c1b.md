---
name: document/cn/doc-references/engine_time-0000001054120065
title: Engine.Time
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/engine_time-0000001054120065
source: portal
---

# Engine.Time  
      
    public static interface Engine.Time  
  
---  
Provides engine time information.

**Since:**

3

#### Method Summary

Modifier and Type | Method | Description  
---|---|---  
long | [getDeltaTimeMicros](https://developer.harmonyos.com/cn/docs/documentation/doc-references/engine_time-0000001054120065#ZH-CN_TOPIC_0000001054120065__getDeltaTimeMicros--)​() |  Obtains the time elapsed since the previous frame, in milliseconds.   
long | [getTotalTimeMicros](https://developer.harmonyos.com/cn/docs/documentation/doc-references/engine_time-0000001054120065#ZH-CN_TOPIC_0000001054120065__getTotalTimeMicros--)​() |  Obtains the time elapsed since the first frame rendering, in milliseconds.   
  
#### Method Detail

#### [h2]getDeltaTimeMicros

long getDeltaTimeMicros​()

Obtains the time elapsed since the previous frame, in milliseconds. 

**Returns:**

Returns the time elapsed since the previous frame, in milliseconds.

#### [h2]getTotalTimeMicros

long getTotalTimeMicros​()

Obtains the time elapsed since the first frame rendering, in milliseconds. 

**Returns:**

Returns the time elapsed since the first frame rendering, in milliseconds.
