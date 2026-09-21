---
name: document/cn/hiai-References/createimagetensorbuffer-0000001184704626
title: CreateImageTensorBuffer
uri: https://developer.huawei.com/consumer/cn/doc/hiai-References/createimagetensorbuffer-0000001184704626
---

# CreateImageTensorBuffer

> 说明
>
> 此接口从DDK 5.0.1.0版本起废弃。

## 接口定义

```screen
HIAI_TENSOR_API_EXPORT std::shared_ptr<IImageTensorBuffer> CreateImageTensorBuffer(int32_t b, int32_t h, int32_t w, ImageFormat format, ImageColorSpace colorSpace, int32_t rotation);
```

## 功能介绍

DDK模型管家V2接口创建图像输入tensor。

## 参数

|名称|类型|描述|
|:---------|:---------------------------------------------------------------------------------------------------------------|:---------------|
|b|int32_t|输入图像的batch。|
|h|int32_t|输入图像的高度。|
|w|int32_t|输入图像的宽度。|
|format|[ImageFormat](https://developer.huawei.com/consumer/cn/doc/hiai-References/imageformat-0000001184435510)|输入图像的format。|
|colorSpace|[ImageColorSpace](https://developer.huawei.com/consumer/cn/doc/hiai-References/imagecolorspace-0000001229873709)|输入图像的colorSpace。|
|rotation|int32_t|输入图像的角度。|

## 返回

|类型|描述|
|:----------------------------------|:---------------------------|
|std::shared_ptr<IImageTensorBuffer>|输出参数。 * 不为空：创建成功。 * 为空：创建失败。|

