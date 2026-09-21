---
name: document/cn/graphics-References/bufferdescriptor-0000001057258580
title: BufferDescriptor
uri: https://developer.huawei.com/consumer/cn/doc/graphics-References/bufferdescriptor-0000001057258580
---

# BufferDescriptor

|Struct Info|
|:----------------------------------------|
|struct BufferDescriptor 应用程序与插件的图像数据交换结构。|

## Public Field Summary

|Qualifier and Type|Field and Description|
|:----------------------------------------------------------------------------------------------------------------------------|:-----------------------|
|void *|addr 图像数据存储的内存地址，由调用者分配。|
|int|len 图像数据的存储长度，以字节为单位。|
|int|width 图像宽度。|
|int|height 图像高度。|
|enum [PixelFormat](https://developer.huawei.com/consumer/cn/doc/development/graphics-References/pixelformat-0000001057456762)|format 图像数据的像素通道排布格式。|

