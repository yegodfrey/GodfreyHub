---
name: document/cn/HMS-References/MLImageSegmentation-4
title: MLImageSegmentation
uri: https://developer.huawei.com/consumer/cn/doc/HMS-References/MLImageSegmentation-4
source: portal
---

class info  
---  
com.huawei.hms.mlsdk.imgseg.MLImageSegmentation  
表示由图像分割检测器（MLImageSegmentationAnalyzer）图像分割后的各个像素点分类。对象的属性包括：1\. 当前图像分割后各个像素点的标志。2\. 透明背景人像前景图。3\. 人像为白色，背景为黑色的灰度图。4\. 切割原图。  
  
## Constant Summary

Type| Name| Desc  
---|---|---  
Bitmap| foreground| 透明背景人像前景图。  
Bitmap| grayscale| 人像为白色，背景为黑色的灰度图。  
byte| masks| 图片当前分类中各个像素点检测的语义分割结果，要二次处理才能查看分割效果，大小：图片长度*图片宽度。  
Bitmap| original| 切割原图。  
  
## Public Constructor Summary

Constructor name  
---  
MLImageSegmentation(byte[] masks, android.graphics.Bitmap foreground, android.graphics.Bitmap grayscale)构造函数。  
MLImageSegmentation(byte[] masks, android.graphics.Bitmap foreground, android.graphics.Bitmap grayscale, android.graphics.Bitmap original)构造函数。  
  
## Public Method Summary

Return type| Method name  
---|---  
android.graphics.Bitmap| getForeground()  
android.graphics.Bitmap| getGrayscale()  
byte[]| getMasks()  
android.graphics.Bitmap| getOriginal()  
  
## Constants

Constant  
---  
public Bitmap foreground  
透明背景人像前景图。  
Constant  
---  
public Bitmap grayscale  
人像为白色，背景为黑色的灰度图。  
Constant  
---  
public byte masks  
图片当前分类中各个像素点检测的语义分割结果，要二次处理才能查看分割效果，大小：图片长度*图片宽度。  
Constant  
---  
public Bitmap original  
切割原图。  
  
## Public Constructors

Method  
---  
public MLImageSegmentation(byte[] masks, android.graphics.Bitmap foreground, android.graphics.Bitmap grayscale)  
构造函数。  
  
**Parameters**

Parameter name| Parameter desc  
---|---  
masks| 一维数组，存储图片各个像素点分类标记。  
foreground| 透明背景人像前景图。  
grayscale| 人像为白色，背景为黑色的灰度图。  
Method  
---  
public MLImageSegmentation(byte[] masks, android.graphics.Bitmap foreground, android.graphics.Bitmap grayscale, android.graphics.Bitmap original)  
构造函数。  
  
**Parameters**

Parameter name| Parameter desc  
---|---  
masks| 一维数组，存储图片各个像素点分类标记。  
foreground| 透明背景人像前景图。  
grayscale| 人像为白色，背景为黑色的灰度图。  
original| 切割原图。  
  
## Public Methods

Method  
---  
public android.graphics.Bitmap getForeground()  
透明背景人像前景图，可直接查看分割效果（人像分割静态图片边缘毛刺进行了优化处理，显示效果优于像素分类标记二次处理的结果）。  
  
**Return**

Type| desc  
---|---  
android.graphics.Bitmap| 人像前景抠图。识别正常：原图同尺寸位图。识别错误：null。  
Method  
---  
public android.graphics.Bitmap getGrayscale()  
人像为白色，背景为黑色的灰度图，可直接查看分割效果。  
  
**Return**

Type| desc  
---|---  
android.graphics.Bitmap| 人像为白色，背景为黑色的灰度图。识别正常：原图同尺寸位图。识别错误：null。  
Method  
---  
public byte[] getMasks()  
图像分割的结果，要二次处理才能查看分割效果。  
  
**Return**

Type| desc  
---|---  
byte[]| 当前图像分割各个像素点分类标记（具体分类见MLImageSegmentationClassification定义）。识别正常：一维byte数组（原图长度*原图宽度）。识别失败：null。  
Method  
---  
public android.graphics.Bitmap getOriginal()  
返回切割原图。  
  
**Return**

Type| desc  
---|---  
android.graphics.Bitmap| 切割原图。
