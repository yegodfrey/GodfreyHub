---
name: document/cn/harmonyos-references/xengine-kit-xeg-neuralupscaledescription
title: XEG_NeuralUpscaleDescription
uri: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-neuralupscaledescription
---

# XEG_NeuralUpscaleDescription

> phone 26.0.0+ | 2in1 26.0.0+ | tablet 26.0.0+ | tv 26.0.0+

## 概述

此结构体描述下发空域AI超分渲染命令时需要的图像信息。

**起始版本：** 26.0.0

**相关模块：** [XEngine](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine)

**所在头文件：** [xeg_vulkan_neural_upscale.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-vulkan-neural-upscale-8h)

## 汇总

### 成员变量

|名称|描述|
|:--------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|XEG_StructureType [sType](#stype)|识别此结构的[XEG_StructureType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_structuretype)值，必须是XEG_STRUCTURE_TYPE_NEURAL_UPSCALE_DESCRIPTION。|
|const void * [pNext](#pnext)|指向扩展结构的指针。若无扩展结构，应设为nullptr。|
|VkImageView [inputImage](#inputimage)|超分输入图像的VkImageView，需要是有效的VkImageView，否则会出现渲染失败、程序崩溃等问题。|
|VkImageView [outputImage](#outputimage)|超分输出图像的VkImageView，需要是有效的VkImageView，且格式必须是[XEG_NeuralUpscaleCreateInfo::outputFormat](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-neuralupscalecreateinfo#outputformat)指定的格式，否则会出现未定义行为，如渲染失败、程序崩溃等问题。|
|float [sharpness](#sharpness)|超分的锐化参数，建议取值范围为[0.0, 1.0]，不同风格图像锐化值需要调整，否则会导致过度锐化现象，如出现大量噪点。|

## 结构体成员变量说明

### sType

```cpp
XEG_StructureType XEG_NeuralUpscaleDescription::sType
```

**描述**

识别此结构的[XEG_StructureType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_structuretype)值，必须是XEG_STRUCTURE_TYPE_NEURAL_UPSCALE_DESCRIPTION。

### pNext

```cpp
const void* XEG_NeuralUpscaleDescription::pNext
```

**描述**

指向扩展结构的指针。若无扩展结构，应设为nullptr。

### inputImage

```cpp
VkImageView XEG_NeuralUpscaleDescription::inputImage
```

**描述**

超分输入图像的VkImageView，需要是有效的VkImageView，否则会出现渲染失败、程序崩溃等问题。

### outputImage

```cpp
VkImageView XEG_NeuralUpscaleDescription::outputImage
```

**描述**

超分输出图像的VkImageView，需要是有效的VkImageView，且格式必须是[XEG_NeuralUpscaleCreateInfo::outputFormat](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-neuralupscalecreateinfo#outputformat)指定的格式，否则会出现未定义行为，如渲染失败、程序崩溃等问题。

### sharpness

```cpp
float XEG_NeuralUpscaleDescription::sharpness
```

**描述**

超分的锐化参数，建议取值范围为[0.0, 1.0]，不同风格图像锐化值需要调整，否则会导致过度锐化现象，如出现大量噪点。

