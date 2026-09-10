---
name: cangjie-guides/cj-image-encoding
title: 使用ImagePacker完成图片编码
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-image-encoding
nodePath: 媒体 / Image Kit（图片处理服务） / 图片开发指导 / 图片接收 / 使用ImagePacker完成图片编码
---

# 使用ImagePacker完成图片编码

图片编码指将PixelMap编码成不同格式的存档图片，当前支持打包为JPEG、WebP、PNG 和 HEIF(不同硬件设备的支持情况有所不同) 格式，用于后续处理，如保存、传输等。

#### 使用说明

API示例代码使用说明：

  * 若示例代码首行有“// index.cj”注释，表示该示例可在仓颉模板工程的“index.cj”文件中编译运行。
  * 若示例需获取[Context](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#class-context)应用上下文，需在仓颉模板工程中的“main_ability.cj”文件中进行配置。



上述示例工程及配置模板详见[仓颉示例代码说明](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-development-intro#仓颉示例代码说明)。

#### 开发步骤

图片编码相关API的详细介绍请参见：[图片编码接口说明](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-image#class-imagepacker)。

#### [h2]图片编码进文件流

  1. 创建图像编码ImagePacker对象。
         
         // 导入相关模块包。
         import kit.ImageKit.*
         
         let imagePackerApi = createImagePacker()

  2. 设置编码输出流和编码参数。

     * format为图像的编码格式；quality为图像质量，范围从0-100，100为最佳质量。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/77/v3/N2rs2hVZT5e73ANiehljfA/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111618Z&HW-CC-Expire=86400&HW-CC-Sign=4676D9E07487F9EA19880CEB43F60EA80D804E912CC5C68268279084D4C0DAD1)

根据MIME标准，标准编码格式为image/jpeg。当使用image编码时，PackingOption.format设置为image/jpeg，image编码后的文件扩展名可设为.jpg或.jpeg，可在支持image/jpeg解码的平台上使用。
           
           var packOpts = PackingOption('image/jpeg', 98)

     * 编码为hdr内容(需要资源本身为hdr，支持jpeg格式)。
           
           packOpts.desiredDynamicRange = PackingDynamicRange.Auto

  3. [创建PixelMap对象或创建ImageSource对象](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-image-decoding)。

  4. 进行图片编码，并保存编码后的图片。

方法一：通过PixelMap进行编码。
         
         // data 为打包获取到的文件流，写入文件保存即可得到一张图片。
         let imagePacker = createImagePacker()
         let data = imagePacker.packToData(pixelMap, packOpts)

方法二：通过imageSource进行编码。
         
         // data 为打包获取到的文件流，写入文件保存即可得到一张图片。
         let imagePacker = createImagePacker()
         let data = imagePacker.packToData(imageSource, packOpts)




#### [h2]图片编码进文件

在编码时，开发者可以传入对应的文件路径，编码后的内存数据将直接写入文件。

方法一：通过PixelMap编码进文件。

为实现通过PixelMap编码进文件功能，需要导入如下包：
    
    
    import kit.ImageKit.*
    import kit.CoreFileKit.*
    import ohos.arkui.state_macro_manage.r

实现通过PixelMap编码进文件功能的核心代码是：
    
    
    var abilityContext = Global.abilityContext
    // 获取resourceManager资源管理器。
    let resourceManager = abilityContext.resourceManager
            
    let img = resourceManager.getMediaContent(@r(app.media.layered_image).id)
    let imageSource = createImageSource(img)
    let cacheDir = "/data/storage/el2/base/haps/entry/cache"
    let filePath = cacheDir + '/test.jpg'
    
    let file = FileIo.open(filePath, mode: OpenMode.CREATE | OpenMode.READ_WRITE)
    // 直接打包进文件。
    let imagePacker = createImagePacker()
    imagePacker.packToFile(imageSource, Int32(file.fd), PackingOption("image/jpeg", 100))
    FileIo.close(file.fd)

方法二：通过ImageSource编码进文件。

为实现通过ImageSource编码进文件功能，需要导入如下包：
    
    
    import kit.ImageKit.*
    import kit.CoreFileKit.*
    import ohos.arkui.state_macro_manage.r

实现通过ImageSource编码进文件功能的核心代码是：
    
    
    var abilityContext = Global.abilityContext
    // 获取resourceManager资源管理器。
    let resourceManager = abilityContext.resourceManager
            
    let img = resourceManager.getMediaContent(@r(app.media.layered_image).id)
    let imageSource = createImageSource(img)
    let cacheDir = "/data/storage/el2/base/haps/entry/cache"
    let filePath = cacheDir + '/test.jpg'
    
    let file = FileIo.open(filePath, mode: OpenMode.CREATE | OpenMode.READ_WRITE)
    // 直接打包进文件。
    let imagePacker = createImagePacker()
    imagePacker.packToFile(imageSource, Int32(file.fd), PackingOption("image/jpeg", 100))
    FileIo.close(file.fd)
