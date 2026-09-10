---
name: document/cn/HMSCore-Guides/android-sdk-map-style-customization-procedure-0000001061781411
title: 实现步骤
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/android-sdk-map-style-customization-procedure-0000001061781411
---

# 实现步骤

地图提供两种方法设置自定义地图样式：

* 设置样式文件：通过嵌入JSON样式声明文件手动定义地图样式的更改。
* 设置样式ID：使用[Petal Maps Studio](https://developer.petalmaps.com/console/studio/StyleEditor)管理地图样式，并使用样式ID将它们链接到您的地图上。您可以在[Petal Maps Studio](https://developer.petalmaps.com/console/studio/StyleEditor)上创建新样式，或导入现有样式定义。样式一旦发布，使用此样式的应用都会自动应用新样式，不需要更新版本。

#### 设置样式文件

1. 在res/raw目录下定义一个JSON文件，例如：mapstyle_night_hms.json，JSON文件的内容如下，JSON文件的定义参见[样式参考](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/android-sdk-map-style-customization-reference-0000001063047122)。

   <br />

   ```
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

   <br />

2. 使用[loadRawResourceStyle](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/mapstyleoptions-0000001050150846#section10777151911461)()方法，将上一步中的文件加载为[MapStyleOptions](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/mapstyleoptions-0000001050150846)对象，再将该对象传递给[HuaweiMap](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/huaweimap-0000001050151757).[setMapStyle](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/huaweimap-0000001050151757#section172547271522)()方法。

   <br />

   示例代码如下：

   ```
   "Java"
   HuaweiMap hMap;
   MapStyleOptions style;
   style = MapStyleOptions.loadRawResourceStyle(this, R.raw.mapstyle_night_hms); 
   hMap.setMapStyle(style);
   ```

   ```
   "Kotlin"
   private lateinit var hMap: HuaweiMap
    
   val style: MapStyleOptions = MapStyleOptions.loadRawResourceStyle(this, R.raw.mapstyle_night_hms)
   hMap.setMapStyle(style)
   ```

   <br />

[图1](#ZH-CN_TOPIC_0000001061781411__fig1976115420519)和[图2](#ZH-CN_TOPIC_0000001061781411__fig73009201525)分别展示了黑夜样式和简单样式的地图效果：  

|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|图1 黑夜样式地图 ![](https://media:301772613522060780 "点击放大") 黑夜样式JSON文件地址： [mapstyle_night_hms.json](https://github.com/HMS-Core/hms-mapkit-demo-java/blob/master/java/app/src/main/res/raw/mapstyle_night_hms.json)|图2 简单样式地图 ![](https://media:301772613522104781 "点击放大") 简单样式JSON文件地址： [mapstyle_grayscale_hms.json](https://github.com/HMS-Core/hms-mapkit-demo-java/blob/master/java/app/src/main/res/raw/mapstyle_grayscale_hms.json)|

#### 设置样式ID

1. 登录[Petal Maps Studio](https://developer.petalmaps.com/console/studio/StyleEditor)。

   <br />

   ![](https://media:301772613522176782 "点击放大")

   <br />

2. 点击"Create map"创建自定义样式。

   <br />

   ![](https://media:301772613522339783 "点击放大")

   <br />

3. 导入JSON样式文件，点击"Import"。

   <br />

   ![](https://media:301772613522421784 "点击放大")

   <br />

4. 在编辑器里修改样式。

   <br />

   ![](https://media:301772613522577785 "点击放大")

   <br />

5. 点击"SAVE"生成预览ID，预览ID在编辑样式时会重新生成，您可以通过预览ID测试样式效果。点击"PUBLISH"发布生成样式ID，样式ID是唯一ID，一旦发布生效不会变化。

   <br />

   ![](https://media:301772613522627786 "点击放大")

   ![](https://media:301772613522675787 "点击放大")

   <br />

Android SDK提供两种方式设置预览ID或样式ID：创建地图前、创建地图后。

* 在创建地图后使用自定义样式。 通过调用[HuaweiMap](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/huaweimap-0000001050151757)的[setStyleId](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/huaweimap-0000001050151757#section16612183310174)和[previewId](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/huaweimap-0000001050151757#section1569752017369)方法设置自定义样式。

  示例代码如下：

  ```
  "Java"
  HuaweiMap hMap;
  // 在创建地图后设置样式ID
  hMap.setStyleId(String styleId);
  // 在创建地图后设置预览ID
  hMap.previewId(String previewId);
  ```

  ```
  "Kotlin"
  private lateinit var hMap: HuaweiMap
  // 在创建地图后设置样式ID
  hMap.setStyleId(String styleId)
  // 在创建地图后设置预览ID
  hMap.previewId(String previewId)
  ```

* 在创建地图前改变现有样式。 通过调用[HuaweiMapOptions](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/huaweimapooptions-0000001050150194)的[styleId](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/huaweimapooptions-0000001050150194#section16612183310174)和[previewId](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/huaweimapooptions-0000001050150194#section1569752017369)方法设置自定义样式，当同时设置styleId和previewId时，优先使用styleId。

  示例代码如下：

  ```
  "Java"
  HuaweiMapOptions huaweiMapOptions;
  // 在创建地图前设置样式ID
  huaweiMapOptions.styleId(String styleId);
  // 在创建地图前设置预览ID
  huaweiMapOptions.previewId(String previewId);
  ```

  ```
  "Kotlin"
  private lateinit var huaweiMapOptions: HuaweiMapOptions
  // 在创建地图前设置样式ID
  huaweiMapOptions.styleId(String styleId)
  // 在创建地图前设置预览ID
  huaweiMapOptions.previewId(String previewId)
  ```

