---
name: document/cn/doc-guides/media-image-decoding-0000000000031770
title: 图像解码开发指导
uri: https://developer.huawei.com/consumer/cn/doc/doc-guides/media-image-decoding-0000000000031770
source: portal
---

# 图像解码开发指导

#### 场景介绍

图像解码就是将所支持格式的存档图片解码成统一的PixelMap图像，用于后续图像显示或其他处理，比如旋转、缩放、裁剪等。当前支持格式包括JPEG、PNG、GIF、HEIF、WebP、BMP。

#### 接口说明

ImageSource主要用于图像解码。

**表1** ImageSource的主要接口接口名 | 描述  
---|---  
create(String pathName, SourceOptions opts) | 从图像文件路径创建图像数据源。  
create(InputStream is, SourceOptions opts) | 从输入流创建图像数据源。  
create(byte[] data, SourceOptions opts) | 从字节数组创建图像源。  
create(byte[] data, int offset, int length, SourceOptions opts) | 从字节数组指定范围创建图像源。  
create(File file, SourceOptions opts) | 从文件对象创建图像数据源。  
create(FileDescriptor fd, SourceOptions opts) | 从文件描述符创建图像数据源。  
createIncrementalSource(SourceOptions opts) | 创建渐进式图像数据源。  
createIncrementalSource(IncrementalSourceOptions opts) | 创建渐进式图像数据源，支持设置渐进式数据更新模式。  
createPixelmap(DecodingOptions opts) | 从图像数据源解码并创建PixelMap图像。  
createPixelmap(int index, DecodingOptions opts) | 从图像数据源解码并创建PixelMap图像，如果图像数据源支持多张图片的话，支持指定图像索引。  
updateData(byte[] data, boolean isFinal) | 更新渐进式图像源数据。  
updateData(byte[] data, int offset, int length, boolean isFinal) | 更新渐进式图像源数据，支持设置输入数据的有效数据范围。  
getImageInfo() | 获取图像基本信息。  
getImageInfo(int index) | 根据特定的索引获取图像基本信息。  
getSourceInfo() | 获取图像源信息。  
release() | 释放对象关联的本地资源。  
  
#### 普通解码开发步骤

     1. 创建图像数据源ImageSource对象，可以通过SourceOptions指定数据源的格式信息，此格式信息仅为给解码器的提示，正确提供能帮助提高解码效率，如果不设置或设置不正确，会自动检测正确的图像格式。不使用该选项时，可以将create接口传入的SourceOptions设置为null。
            
            ImageSource.SourceOptions srcOpts = new ImageSource.SourceOptions();
            srcOpts.formatHint = "image/png";
            // 此处传入用户自定义的图像路径
            String pathName = "/sdcard/image.png";
            ImageSource imageSource = ImageSource.create(pathName, srcOpts);
            
            // 不通过SourceOptions指定数据源格式信息
            ImageSource imageSourceNoOptions = ImageSource.create(pathName, null);

     2. 设置解码参数，解码获取PixelMap图像对象，解码过程中同时支持图像处理操作。
        * 设置desiredSize支持按尺寸缩放，如果设置为全0，则不进行缩放。
        * 设置desiredRegion支持按矩形区域裁剪，如果设置为全0，则不进行裁剪。
        * 设置rotateDegrees支持旋转角度，以图像中心点顺时针旋转。

如果只需要解码原始图像，不使用该选项时，可将给createPixelMap传入的DecodingOptions 设置为null。
    
    // 普通解码叠加缩放、裁剪、旋转
    ImageSource.DecodingOptions decodingOpts = new ImageSource.DecodingOptions();
    decodingOpts.desiredSize = new Size(100, 2000);
    decodingOpts.desiredRegion = new Rect(0, 0, 100, 100);
    decodingOpts.rotateDegrees = 90;
    PixelMap pixelMap = imageSource.createPixelmap(decodingOpts); 
    
    // 普通解码
    PixelMap pixelMapNoOptions = imageSource.createPixelmap(null);

     3. 解码完成获取到PixelMap对象后，可以进行后续处理，比如渲染显示等。

#### 渐进式解码开发步骤

     1. 创建渐进式图像数据源ImageSource对象。

可以通过SourceOptions指定数据源的格式信息，此格式信息仅为提示，如果填写不正确，会自动检测正确的图像格式。使用IncrementalSourceOptions指定图像数据的更新方式为渐进式更新。
            
            ImageSource.SourceOptions srcOpts = new ImageSource.SourceOptions();
            srcOpts.formatHint = "image/jpeg";
            ImageSource.IncrementalSourceOptions incOpts = new ImageSource.IncrementalSourceOptions();
            incOpts.opts = srcOpts;
            incOpts.mode = ImageSource.UpdateMode.INCREMENTAL_DATA;
            ImageSource imageSource = ImageSource.createIncrementalSource(incOpts);

     2. 渐进式更新数据。在未获取到全部图像时，支持先更新部分数据来尝试解码，调用updateData更新数据，将参数isFinal设置为false；当获取到全部数据后，最后一次更新数据时设置isFinal为true，表示数据更新完毕。设置解码参数同普通解码。
            
            // 传入本地图片路径作为图像数据源
            File file = new File("/sdcard/test.jpg");
            FileInputStream fis = null;
            try {
                fis = new FileInputStream(file);
                ByteArrayOutputStream bos = new ByteArrayOutputStream();
                byte[] data = new byte[1024];
                int len = -1;
                while((len = fis.read(data)) != -1) {
                    bos.write(data, 0, len);
                }
                byte[] fileByte = bos.toByteArray();
            // 获取到一定的数据时尝试解码
                imageSource.updateData(fileByte, 0, fileByte.length / 2, false);
                ImageSource.DecodingOptions decodingOpts = new ImageSource.DecodingOptions();
                PixelMap pixelMap = imageSource.createPixelmap(decodingOpts);
            
            // 更新数据再次解码，重复调用直到数据全部更新完成
                imageSource.updateData(fileByte, fileByte.length / 2, fileByte.length / 4, false);
                pixelMap = imageSource.createPixelmap(decodingOpts);
            
            // 数据全部更新完成时需要传入isFinal为true
                imageSource.updateData(fileByte, fileByte.length * 3 / 4, fileByte.length / 4, true);
                pixelMap = imageSource.createPixelmap(decodingOpts);
            } catch (IOException e) {
                e.printStackTrace();
            }

     3. 解码完成获取到PixelMap对象后，可以进行后续处理，比如渲染显示等。
