---
name: document/cn/graphics-References/cquerysupersamplingpluginconfig-0000001057176363
title: CQuerySuperSamplingPluginConfig
uri: https://developer.huawei.com/consumer/cn/doc/graphics-References/cquerysupersamplingpluginconfig-0000001057176363
---

# CQuerySuperSamplingPluginConfig

|Method|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|void CQueryImageEnhancingPluginConfig(int inW, int inH, CGKit::[PixelFormat](https://developer.huawei.com/consumer/cn/doc/development/graphics-References/pixelformat-0000001057456762) inFormat, CGKit::PluginConfig &pluginConfig) 查询是否支持当前的AI超分任务。|

**Parameters**

|Name|Description|
|:-----------|:----------------------------------------------------------------------------------------------------------------------------------------------|
|inW|待超分图片的宽度（单位：像素）。|
|inH|待超分图片的高度（单位：像素）。|
|inFormat|待超分图片的像素通道排布格式，具体格式请参见[PixelFormat](https://developer.huawei.com/consumer/cn/doc/development/graphics-References/pixelformat-0000001057456762)。|
|pluginConfig|经过AI超分后输出的图片宽度、高度、像素通道排布格式和参考时间信息。|

