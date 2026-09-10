---
name: cangjie-guides/cj-image-transformation
title: 使用PixelMap完成图像变换
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-image-transformation
nodePath: 媒体 / Image Kit（图片处理服务） / 图片开发指导 / 图片编辑和处理 / 使用PixelMap完成图像变换
---

# 使用PixelMap完成图像变换

图片处理是指对PixelMap进行相关的操作，如获取图片信息、裁剪、缩放、偏移、旋转、翻转、设置透明度、读写像素数据等。图片处理主要包括图像变换和[位图操作](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-image-pixelmap-operation)，本文介绍图像变换。

#### 开发步骤

图像变换相关API的详细介绍请参见[API参考](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-image#class-pixelmap)。

  1. 完成[图片解码](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-image-decoding)，获取PixelMap对象。

  2. 获取图片信息。
         
         // 获取图片大小。
         let info = pixelMap.getImageInfo()

  3. 进行图像变换操作。

原图：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/40/v3/FkfqqOZSR2uAu8SoqN9Erw/zh-cn_image_0000002743197781.jpeg?HW-CC-KV=V1&HW-CC-Date=20260908T090133Z&HW-CC-Expire=86400&HW-CC-Sign=EA391F4CA0840136BD3A8688962CE9EB10E5B817118CF5754EB6E5F38BB38073)

     * 裁剪
           
           // x：裁剪起始点横坐标0。
           // y：裁剪起始点纵坐标0。
           // height：裁剪高度400，方向为从上往下（裁剪后的图片高度为400）。
           // width：裁剪宽度400，方向为从左到右（裁剪后的图片宽度为400）。
           pixelMap.crop(Region(Size(400, 400), 0, 0))

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ad/v3/j7yadB2yT-i6JHkFVKF8jw/zh-cn_image_0000002713398900.jpeg?HW-CC-KV=V1&HW-CC-Date=20260908T090133Z&HW-CC-Expire=86400&HW-CC-Sign=FF6FD26017714265E3D8FFE3FF32DAE988448B79496F430A5BB26CFFE945D822)

     * 缩放
           
           // 宽为原来的0.5。
           // 高为原来的0.5。
           pixelMap.scale(0.5, 0.5)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ba/v3/8C0EKEEpQ5Ch7SRgTOzOFQ/zh-cn_image_0000002743077831.jpeg?HW-CC-KV=V1&HW-CC-Date=20260908T090133Z&HW-CC-Expire=86400&HW-CC-Sign=AAF73392B40AD68A5F8A9D57392F3AFCE608645B1123C208E5711C88279E9EEC)

     * 偏移
           
           // 向下偏移100。
           // 向右偏移100。
           pixelMap.translate(100.0, 100.0);

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a2/v3/FHk-GkCzQiGztOr_I0ErKg/zh-cn_image_0000002713558870.jpeg?HW-CC-KV=V1&HW-CC-Date=20260908T090133Z&HW-CC-Expire=86400&HW-CC-Sign=74B83CCFC13B5D4E7B4DAB8B894DA67F0BAA32FB590E53A5C1BAC89C2663DD18)

     * 旋转
           
           // 顺时针旋转90°。
           pixelMap.rotate(90.0);

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2a/v3/jJGmTRKDRk2ULatu_UwAvQ/zh-cn_image_0000002743197783.jpeg?HW-CC-KV=V1&HW-CC-Date=20260908T090133Z&HW-CC-Expire=86400&HW-CC-Sign=A086706B4FBCB06AAA118F3799CBD9D697161B65C4CBFDF1EB09A81126E07DE9)

     * 翻转
           
           // 垂直翻转。
           pixelMap.flip(false, true);

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/77/v3/kV6taEZ_SDKArdDoISbkiw/zh-cn_image_0000002713398902.jpeg?HW-CC-KV=V1&HW-CC-Date=20260908T090133Z&HW-CC-Expire=86400&HW-CC-Sign=AADBF34E2CDA94F3E0F485A72C997C1F2827CCEDECA30D06E8B5E31AC7E2B918)
           
           // 水平翻转。
           pixelMap.flip(true, false);

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e5/v3/bnUu23S9TuWfDWMafsTRqA/zh-cn_image_0000002743077833.jpeg?HW-CC-KV=V1&HW-CC-Date=20260908T090133Z&HW-CC-Expire=86400&HW-CC-Sign=AD86062DC27DE36C528DAE0946E8975270FA7BE10F951BE5836CA78B67D0F050)

     * 透明度
           
           // 透明度0.5。
           pixelMap.opacity(0.5);

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/91/v3/WGFLPRAPRyOr64qGaWcVdg/zh-cn_image_0000002713558872.png?HW-CC-KV=V1&HW-CC-Date=20260908T090133Z&HW-CC-Expire=86400&HW-CC-Sign=91C1E29FB9775EBAD543DD6CF3686982AA8F173FFA39BE7ACBFE2C459131D3BA)



