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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c6/v3/RyyX_s1mT9KjBZzEbn1nAA/zh-cn_image_0000002701819502.jpeg?HW-CC-KV=V1&HW-CC-Date=20260903T111618Z&HW-CC-Expire=86400&HW-CC-Sign=1D2F0D5A376526644AB01E0B9E9BC8A0B09DEECDF80B6FEDE8CBE3F7F51A9731)

     * 裁剪
           
           // x：裁剪起始点横坐标0。
           // y：裁剪起始点纵坐标0。
           // height：裁剪高度400，方向为从上往下（裁剪后的图片高度为400）。
           // width：裁剪宽度400，方向为从左到右（裁剪后的图片宽度为400）。
           pixelMap.crop(Region(Size(400, 400), 0, 0))

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/12/v3/TQp6iDLYQpyy2K4mXXZ6Mg/zh-cn_image_0000002731538783.jpeg?HW-CC-KV=V1&HW-CC-Date=20260903T111618Z&HW-CC-Expire=86400&HW-CC-Sign=96785D15899BAB022254B26FD7E0DE23828EF3DB720D9EFEA5BFA927A1C4DDAA)

     * 缩放
           
           // 宽为原来的0.5。
           // 高为原来的0.5。
           pixelMap.scale(0.5, 0.5)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/75/v3/0Q86-5GlQ4KEB9iBz0eNZw/zh-cn_image_0000002701659592.jpeg?HW-CC-KV=V1&HW-CC-Date=20260903T111618Z&HW-CC-Expire=86400&HW-CC-Sign=507ED30CED3DEAEE38C4672ABD148190DD238FEBA55585ACDC92B5CA6D7C4F0B)

     * 偏移
           
           // 向下偏移100。
           // 向右偏移100。
           pixelMap.translate(100.0, 100.0);

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e3/v3/bqmq1nlsTKSO11gTVPQD8w/zh-cn_image_0000002731378807.jpeg?HW-CC-KV=V1&HW-CC-Date=20260903T111618Z&HW-CC-Expire=86400&HW-CC-Sign=AF7CFC9D5DE07E070FB82BFF91923086D31D59E9AEDFF9516BAB564B0061D2BB)

     * 旋转
           
           // 顺时针旋转90°。
           pixelMap.rotate(90.0);

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/eb/v3/bceqII7zQ6Gc5r_-Zl6CGw/zh-cn_image_0000002701819504.jpeg?HW-CC-KV=V1&HW-CC-Date=20260903T111618Z&HW-CC-Expire=86400&HW-CC-Sign=2CFE2C0D91C5454067FD1CDE8F0AFC76E2E3F3BA652B66C56032B00194FBED0D)

     * 翻转
           
           // 垂直翻转。
           pixelMap.flip(false, true);

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/54/v3/SrjCXMYhTzG_Ax_kSY2C1Q/zh-cn_image_0000002731538785.jpeg?HW-CC-KV=V1&HW-CC-Date=20260903T111618Z&HW-CC-Expire=86400&HW-CC-Sign=131E631809F88F8777BA36A66DB457CBA8CBC458F502C58D67A0B631FEBBE3CD)
           
           // 水平翻转。
           pixelMap.flip(true, false);

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/91/v3/LDp8xecUTaaphVo6BWKscg/zh-cn_image_0000002701659594.jpeg?HW-CC-KV=V1&HW-CC-Date=20260903T111618Z&HW-CC-Expire=86400&HW-CC-Sign=0F23DC6C1E36DCA2F6EF5EDF0BD5FB46ED79E2847432C2868D3F3425D728EFBB)

     * 透明度
           
           // 透明度0.5。
           pixelMap.opacity(0.5);

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6a/v3/9vonVshdSDuz5S3wJgj2YQ/zh-cn_image_0000002731378809.png?HW-CC-KV=V1&HW-CC-Date=20260903T111618Z&HW-CC-Expire=86400&HW-CC-Sign=D0E430ACE52335C5B2C2CBBA800A5A31CB43A5DEFD9FB1495C850DA8D5779E7A)



