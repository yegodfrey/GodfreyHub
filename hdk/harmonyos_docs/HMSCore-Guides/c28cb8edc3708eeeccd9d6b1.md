---
name: document/cn/HMSCore-Guides/android-sdk-map-style-customization-procedure-0000001061781411
title: 实现步骤
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/android-sdk-map-style-customization-procedure-0000001061781411
---

# 实现步骤

地图提供两种方法设置自定义地图样式：

* 设置样式文件：通过嵌入JSON样式声明文件手动定义地图样式的更改。
* 设置样式ID：使用[Petal Maps Studio](https://developer.petalmaps.com/console/studio/StyleEditor)管理地图样式，并使用样式ID将它们链接到您的地图上。您可以在[Petal Maps Studio](https://developer.petalmaps.com/console/studio/StyleEditor)上创建新样式，或导入现有样式定义。样式一旦发布，使用此样式的应用都会自动应用新样式，不需要更新版本。

## 设置样式文件

1. 在res/raw目录下定义一个JSON文件，例如：mapstyle_night_hms.json，JSON文件的内容如下，JSON文件的定义参见[样式参考](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/android-sdk-map-style-customization-reference-0000001063047122)。

   ```screen
   [
     {
       "mapFeature": "landcover.natural",
       "options": "geometry.fill",
       "paint": {
         "color": "#8FBC8F"
       }
     },
     {
       "mapFeature": "water",
       "options": "geometry.fill",
       "paint": {
         "color": "#4682B4"
       }
     }
   ]
   ```

2. 使用[loadRawResourceStyle](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/mapstyleoptions-0000001050150846#section10777151911461)()方法，将上一步中的文件加载为[MapStyleOptions](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/mapstyleoptions-0000001050150846)对象，再将该对象传递给[HuaweiMap](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/huaweimap-0000001050151757).[setMapStyle](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/huaweimap-0000001050151757#section172547271522)()方法。

   示例代码如下：

   ```screen
   "Java"
   HuaweiMap hMap;
   MapStyleOptions style;
   style = MapStyleOptions.loadRawResourceStyle(this, R.raw.mapstyle_night_hms); 
   hMap.setMapStyle(style);
   ```

   ```screen
   "Kotlin"
   private lateinit var hMap: HuaweiMap
    
   val style: MapStyleOptions = MapStyleOptions.loadRawResourceStyle(this, R.raw.mapstyle_night_hms)
   hMap.setMapStyle(style)
   ```

[图1](#ZH-CN_TOPIC_0000001061781411__fig1976115420519)和[图2](#ZH-CN_TOPIC_0000001061781411__fig73009201525)分别展示了黑夜样式和简单样式的地图效果：

|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|**图1**黑夜样式地图 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f9/v3/f-tZZxXIQA-N_0whgDwbOQ/zh-cn_image_0000001244690449.png?HW-CC-KV=V1&HW-CC-Date=20260917T022230Z&HW-CC-Expire=31536000000&HW-CC-Sign=962DB03380597E234D2451AF265B0217B7D81EC7BBE231B9EBFD4B4881C63C51 "点击放大") 黑夜样式JSON文件地址： [mapstyle_night_hms.json](https://github.com/HMS-Core/hms-mapkit-demo-java/blob/master/java/app/src/main/res/raw/mapstyle_night_hms.json)|**图2**简单样式地图 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/bb/v3/qiqMnVqzStqyCOOiX03tcQ/zh-cn_image_0000001244690495.png?HW-CC-KV=V1&HW-CC-Date=20260917T022230Z&HW-CC-Expire=31536000000&HW-CC-Sign=C05F304254D166188F42FD1E6FECFA00F144AD3073112C6C746475383744AEB7 "点击放大") 简单样式JSON文件地址： [mapstyle_grayscale_hms.json](https://github.com/HMS-Core/hms-mapkit-demo-java/blob/master/java/app/src/main/res/raw/mapstyle_grayscale_hms.json)|

## 设置样式ID

1. 登录[Petal Maps Studio](https://developer.petalmaps.com/console/studio/StyleEditor)。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f6/v3/YDsSFQ6wSpOoAdZ8U6nATA/zh-cn_image_0000001124253751.png?HW-CC-KV=V1&HW-CC-Date=20260917T022230Z&HW-CC-Expire=31536000000&HW-CC-Sign=BDA9FE2C311E3BA8237AE3D4B118F54DC044692FDBA95328893CBB28D8F92A9A "点击放大")

2. 点击"Create map"创建自定义样式。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/36/v3/O4O31R9DREKsKcJge6Shlw/zh-cn_image_0000001124154287.png?HW-CC-KV=V1&HW-CC-Date=20260917T022230Z&HW-CC-Expire=31536000000&HW-CC-Sign=62893930434FAD3721BEE4932F02814B36E58D01CDBDB5B3EEC2D827B4685EAC "点击放大")

3. 导入JSON样式文件，点击"Import"。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a8/v3/3em2lJgtRZixmelblQ3ASA/zh-cn_image_0000001124096853.png?HW-CC-KV=V1&HW-CC-Date=20260917T022230Z&HW-CC-Expire=31536000000&HW-CC-Sign=1D5F502D76CB883DF8AC6F78CD2160D5CFC39D98D721F9B9F398D7A60050EFC2 "点击放大")

4. 在编辑器里修改样式。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/51/v3/DHBQJ7ZQQDeNH39grgOaCA/zh-cn_image_0000001078595766.png?HW-CC-KV=V1&HW-CC-Date=20260917T022230Z&HW-CC-Expire=31536000000&HW-CC-Sign=717A864E819CB1429A7AB8E15D57638AADBF0F18615381632733F4D301EE0F39 "点击放大")

5. 点击"SAVE"生成预览ID，预览ID在编辑样式时会重新生成，您可以通过预览ID测试样式效果。点击"PUBLISH"发布生成样式ID，样式ID是唯一ID，一旦发布生效不会变化。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/85/v3/LIUsCh6TTiGlc-fYoMXvMA/zh-cn_image_0000001124096833.png?HW-CC-KV=V1&HW-CC-Date=20260917T022230Z&HW-CC-Expire=31536000000&HW-CC-Sign=DF58734A63E107D9E77A883BA48E0F304F3063CD39AB63C8F3EC7EB95AD77D5C "点击放大")

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/90/v3/NNLTLuVOTJekYwdKlLb-7Q/zh-cn_image_0000001124154281.png?HW-CC-KV=V1&HW-CC-Date=20260917T022230Z&HW-CC-Expire=31536000000&HW-CC-Sign=CF2DFEE7D21A2F000D78EFBE941CD893E7CD4DCA8208D9BA1AC621A68EEEAF3D "点击放大")

Android SDK提供两种方式设置预览ID或样式ID：创建地图前、创建地图后。

* 在创建地图后使用自定义样式。 通过调用[HuaweiMap](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/huaweimap-0000001050151757)的[setStyleId](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/huaweimap-0000001050151757#section16612183310174)和[previewId](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/huaweimap-0000001050151757#section1569752017369)方法设置自定义样式。

  示例代码如下：

  ```java
  "Java"
  HuaweiMap hMap;
  // 在创建地图后设置样式ID
  hMap.setStyleId(String styleId);
  // 在创建地图后设置预览ID
  hMap.previewId(String previewId);
  ```

  ```javascript
  "Kotlin"
  private lateinit var hMap: HuaweiMap
  // 在创建地图后设置样式ID
  hMap.setStyleId(String styleId)
  // 在创建地图后设置预览ID
  hMap.previewId(String previewId)
  ```

* 在创建地图前改变现有样式。 通过调用[HuaweiMapOptions](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/huaweimapooptions-0000001050150194)的[styleId](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/huaweimapooptions-0000001050150194#section16612183310174)和[previewId](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/huaweimapooptions-0000001050150194#section1569752017369)方法设置自定义样式，当同时设置styleId和previewId时，优先使用styleId。

  示例代码如下：

  ```java
  "Java"
  HuaweiMapOptions huaweiMapOptions;
  // 在创建地图前设置样式ID
  huaweiMapOptions.styleId(String styleId);
  // 在创建地图前设置预览ID
  huaweiMapOptions.previewId(String previewId);
  ```

  ```javascript
  "Kotlin"
  private lateinit var huaweiMapOptions: HuaweiMapOptions
  // 在创建地图前设置样式ID
  huaweiMapOptions.styleId(String styleId)
  // 在创建地图前设置预览ID
  huaweiMapOptions.previewId(String previewId)
  ```

