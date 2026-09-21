---
name: document/cn/graphics-References/imagetiling-0000001252736210
title: ImageTiling
uri: https://developer.huawei.com/consumer/cn/doc/graphics-References/imagetiling-0000001252736210
---

# ImageTiling

|Enum Info|
|:---------|
|纹素平铺排列的方式。|

## Enum Value Summary

|Enum Value and Description|
|:----------------------------------------------------------------------------------------------------------------------|
|IMAGE_TILING_OPTIMAL = 0 指定最佳的平铺方式（纹素以最佳访问内存的方式进行排列布局）。|
|IMAGE_TILING_LINEAR = 1 指定线性平铺（纹素在内存中以行优先顺序排列，可能在每一行都有一些填充）。|
|IMAGE_TILING_DRM_FORMAT_MODIFIER_EXT = 1000158000 表示纹素的平铺是由linux的DRM格式定义的。|
|IMAGE_TILING_BEGIN_RANGE = IMAGE_TILING_OPTIMAL 同[IMAGE_TILING_OPTIMAL](#ZH-CN_TOPIC_0000001252736210__p2656154184)的定义。|
|IMAGE_TILING_END_RANGE = IMAGE_TILING_LINEAR 同[IMAGE_TILING_LINEAR](#ZH-CN_TOPIC_0000001252736210__p1365614521812)的定义。|
|IMAGE_TILING_RANGE_SIZE = (IMAGE_TILING_LINEAR - IMAGE_TILING_OPTIMAL + 1) 图像平铺的范围。|
|IMAGE_TILING_MAX_ENUM = 0x7FFFFFFF 最大值。|

