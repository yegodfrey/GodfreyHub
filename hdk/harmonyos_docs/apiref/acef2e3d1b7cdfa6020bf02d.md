---
name: document/cn/apiref/bufferstream-0000001055518082
title: BufferStream
uri: https://developer.huawei.com/consumer/cn/doc/apiref/bufferstream-0000001055518082
source: portal
---

# BufferStream

#### Overview

**Related Modules:**

[Format](https://device.harmonyos.com/cn/docs/develop/apiref/format-0000001055358056)

**Description:**

Defines the function for reading stream data. 

**Since:**

1.0

**Version:**

1.0

#### Summary

#### [h2]Data Fields

Variable Name | Description  
---|---  
[ReadData](https://device.harmonyos.com/cn/docs/develop/apiref/bufferstream-0000001055518082#ZH-CN_TOPIC_0000001055518082__af0c4387f21bba2c1f02a5310daa95a00) )(void *[handle](https://device.harmonyos.com/cn/docs/develop/apiref/bufferstream-0000001055518082#ZH-CN_TOPIC_0000001055518082__ae2019a77aba73fa96d5a716155c7fb7f), uint8_t *data, int32_t size, int32_t timeOutMs, [DataFlags](https://device.harmonyos.com/cn/docs/develop/apiref/format-0000001055358056#ZH-CN_TOPIC_0000001055358056__gacff079fdf8427c743f9197ea5be33a7f) *flags) | int32_t(*  Reads data from streams, save the data to the buffer pointed by **data** with the specified **size** , and returns the size of the read data and type.   
[GetReadableSize](https://device.harmonyos.com/cn/docs/develop/apiref/bufferstream-0000001055518082#ZH-CN_TOPIC_0000001055518082__a24e47ffeb7e9c2a8e01f83ffb3a16407) )(const void *[handle](https://device.harmonyos.com/cn/docs/develop/apiref/bufferstream-0000001055518082#ZH-CN_TOPIC_0000001055518082__ae2019a77aba73fa96d5a716155c7fb7f)) | int32_t(*  Obtains the size of data that can be read.   
[handle](https://device.harmonyos.com/cn/docs/develop/apiref/bufferstream-0000001055518082#ZH-CN_TOPIC_0000001055518082__ae2019a77aba73fa96d5a716155c7fb7f) | void *   
  
#### Details

#### Field

#### [h2]GetReadableSize
    
    int32_t(* BufferStream::GetReadableSize) (const void *[handle](https://device.harmonyos.com/cn/docs/develop/apiref/bufferstream-0000001055518082#ZH-CN_TOPIC_0000001055518082__ae2019a77aba73fa96d5a716155c7fb7f))

**Description:**

Obtains the size of data that can be read. 

Before reading data, you should call this function to check whether there is data to read.

**Parameters:**

Name | Description  
---|---  
handle | Indicates the pointer to the context handle.   
  
**Returns:**

Returns the size of the read data. 

#### [h2]handle
    
    void* BufferStream::handle

**Description:**

Context handle 

#### [h2]ReadData
    
    int32_t(* BufferStream::ReadData) (void *[handle](https://device.harmonyos.com/cn/docs/develop/apiref/bufferstream-0000001055518082#ZH-CN_TOPIC_0000001055518082__ae2019a77aba73fa96d5a716155c7fb7f), uint8_t *data, int32_t size, int32_t timeOutMs, [DataFlags](https://device.harmonyos.com/cn/docs/develop/apiref/format-0000001055358056#ZH-CN_TOPIC_0000001055358056__gacff079fdf8427c743f9197ea5be33a7f) *flags)

**Description:**

Reads data from streams, save the data to the buffer pointed by **data** with the specified **size** , and returns the size of the read data and type. 

**Parameters:**

Name | Description  
---|---  
handle | Indicates the pointer to the context handle.   
data | Indicates the pointer to the buffer to store the read data. The memory is allocated by the caller.   
size | Indicates the size of the available buffer memory.   
timeOutMs | Indicates read operation wait time. The value **0** means no wait time.   
flags | Indicates the pointer to the type of the read data, see [DataFlags](https://device.harmonyos.com/cn/docs/develop/apiref/format-0000001055358056#ZH-CN_TOPIC_0000001055358056__gacff079fdf8427c743f9197ea5be33a7f).   
  
**Returns:**

Returns the size of the read data. 
