---
name: document/cn/apiref/display__type_8h-0000001055678058
title: display_type.h
uri: https://developer.huawei.com/consumer/cn/doc/apiref/display__type_8h-0000001055678058
source: portal
---

# display_type.h  
  
#### Overview

**Related Modules:**

[Display](https://device.harmonyos.com/cn/docs/develop/apiref/display-0000001055198078)

**Description:**

Declares the data types used by the display driver functions. 

**Since:**

1.0

**Version:**

1.0

#### Summary

#### [h2]Data Structures

Data Structure Name | Description  
---|---  
[DisplayInfo](https://device.harmonyos.com/cn/docs/develop/apiref/displayinfo-0000001054479559) | Defines display information.   
[LayerInfo](https://device.harmonyos.com/cn/docs/develop/apiref/layerinfo-0000001055518096) | Defines layer information.   
[LayerAlpha](https://device.harmonyos.com/cn/docs/develop/apiref/layeralpha-0000001054799607) | Defines alpha information about a layer.   
[BufferHandle](https://device.harmonyos.com/cn/docs/develop/apiref/bufferhandle-0000001054918147) | Defines the buffer handle type. The virtual address of a handle maps to its physical address.   
[GrallocBuffer](https://device.harmonyos.com/cn/docs/develop/apiref/grallocbuffer-0000001054718125) | Defines the memory buffer, such as virtual and physical memory addresses.   
[BufferData](https://device.harmonyos.com/cn/docs/develop/apiref/bufferdata-0000001054718119) | Defines buffer data of a layer, including the virtual and physical memory addresses.   
[LayerBuffer](https://device.harmonyos.com/cn/docs/develop/apiref/layerbuffer-0000001055039524) | Defines the buffer, which is used to store layer data.   
[IRect](https://device.harmonyos.com/cn/docs/develop/apiref/irect-0000001055678096) | Defines the information about a rectangle.   
[ISurface](https://device.harmonyos.com/cn/docs/develop/apiref/isurface-0000001055518092) | Stores surface information for hardware acceleration, such as draw image and bit blit.   
[ILine](https://device.harmonyos.com/cn/docs/develop/apiref/iline-0000001054799603) | Describes a line to help draw lines in hardware acceleration.   
[ICircle](https://device.harmonyos.com/cn/docs/develop/apiref/icircle-0000001055039520) | Describes a circle to help draw circles in hardware acceleration.   
[Rectangle](https://device.harmonyos.com/cn/docs/develop/apiref/rectangle-0000001054479599) | Describes a rectangle to help draw rectangles in hardware acceleration.   
[GfxOpt](https://device.harmonyos.com/cn/docs/develop/apiref/gfxopt-0000001055678092) | Defines hardware acceleration options.   
  
#### [h2]Enumerations

Enumeration Name | Description  
---|---  
[DispErrCode](https://device.harmonyos.com/cn/docs/develop/apiref/display-0000001055198078#ZH-CN_TOPIC_0000001055198078__ga12a925dadef7573cd74d63d06824f9b0) | Enumerates return values of the functions.   
[LayerType](https://device.harmonyos.com/cn/docs/develop/apiref/display-0000001055198078#ZH-CN_TOPIC_0000001055198078__ga56943a0946e5f15e5e58054b8e7a04a4) | Enumerates layer types.   
[PixelFormat](https://device.harmonyos.com/cn/docs/develop/apiref/display-0000001055198078#ZH-CN_TOPIC_0000001055198078__ga60883d4958a60b91661e97027a85072a) { [YVU_SEMIPLANAR_420](https://device.harmonyos.com/cn/docs/develop/apiref/display-0000001055198078#ZH-CN_TOPIC_0000001055198078__gga60883d4958a60b91661e97027a85072aa442172344e87ea7d96a7675112f2a544) = 0, [YVU_SEMIPLANAR_420_TILE](https://device.harmonyos.com/cn/docs/develop/apiref/display-0000001055198078#ZH-CN_TOPIC_0000001055198078__gga60883d4958a60b91661e97027a85072aac31c324ea9de2f481f8836586ed270b4), [PIX_FORMAT_INVALID](https://device.harmonyos.com/cn/docs/develop/apiref/display-0000001055198078#ZH-CN_TOPIC_0000001055198078__gga60883d4958a60b91661e97027a85072aa2518a2ff4cd9bda80aab9ddbc7477a32) } | Enumerates pixel formats.   
[TransformType](https://device.harmonyos.com/cn/docs/develop/apiref/display-0000001055198078#ZH-CN_TOPIC_0000001055198078__gaa65f3b21a9a92ff022e435a7304126d2) | Enumerates transform types of images.   
[MemType](https://device.harmonyos.com/cn/docs/develop/apiref/display-0000001055198078#ZH-CN_TOPIC_0000001055198078__gabd31f838aefffa46191d0d7dc36a96b2) | Enumerates memory types.   
[BlendType](https://device.harmonyos.com/cn/docs/develop/apiref/display-0000001055198078#ZH-CN_TOPIC_0000001055198078__gaab1839ed4aab1030dfda801a51e68817) | Enumerates image blending types.   
[RopType](https://device.harmonyos.com/cn/docs/develop/apiref/display-0000001055198078#ZH-CN_TOPIC_0000001055198078__ga24265f7618fbdba53d3da4806d3097c4) | Enumerates ROP types supported by hardware acceleration.   
[ColorKey](https://device.harmonyos.com/cn/docs/develop/apiref/display-0000001055198078#ZH-CN_TOPIC_0000001055198078__ga4fe6fb05c7ba0048b1739d88f4d4878e) | Enumerates color key types supported by hardware acceleration.   
[MirrorType](https://device.harmonyos.com/cn/docs/develop/apiref/display-0000001055198078#ZH-CN_TOPIC_0000001055198078__ga08d32376574b541d162d8534adb78fd0) | Enumerates mirror types supported by hardware acceleration.   
[Connection](https://device.harmonyos.com/cn/docs/develop/apiref/display-0000001055198078#ZH-CN_TOPIC_0000001055198078__gab0845c0c8d309ee865c78b095b00e671) | Enumerates connection types of hot plugging. 
