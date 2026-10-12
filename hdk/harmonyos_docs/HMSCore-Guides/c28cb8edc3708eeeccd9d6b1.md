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
|**图1**黑夜样式地图 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f9/v3/f-tZZxXIQA-N_0whgDwbOQ/zh-cn_image_0000001244690449.png?HW-CC-KV=V1&HW-CC-Date=20261008T183332Z&HW-CC-Expire=31536000000&HW-CC-Sign=1B3E22009083B3631E175A3998C4E8090ABFB1CF0400673BE3B74949F1B45CB1 "点击放大") 黑夜样式JSON文件地址： [mapstyle_night_hms.json](https://github.com/HMS-Core/hms-mapkit-demo-java/blob/master/java/app/src/main/res/raw/mapstyle_night_hms.json)|**图2**简单样式地图 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/bb/v3/qiqMnVqzStqyCOOiX03tcQ/zh-cn_image_0000001244690495.png?HW-CC-KV=V1&HW-CC-Date=20261008T183332Z&HW-CC-Expire=31536000000&HW-CC-Sign=E6E9B90CECDC6145ABAD678E622497714E6F2C49440A94C1D961DE243669CF5C "点击放大") 简单样式JSON文件地址： [mapstyle_grayscale_hms.json](https://github.com/HMS-Core/hms-mapkit-demo-java/blob/master/java/app/src/main/res/raw/mapstyle_grayscale_hms.json)|

## 设置样式ID

1. 登录[Petal Maps Studio](https://developer.petalmaps.com/console/studio/StyleEditor)。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f6/v3/YDsSFQ6wSpOoAdZ8U6nATA/zh-cn_image_0000001124253751.png?HW-CC-KV=V1&HW-CC-Date=20261008T183332Z&HW-CC-Expire=31536000000&HW-CC-Sign=36D92DA408FFDAA265B06F503F983565E78BF1E6FE5FAD0DA8614649BF00153B "点击放大")

2. 点击"Create map"创建自定义样式。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/36/v3/O4O31R9DREKsKcJge6Shlw/zh-cn_image_0000001124154287.png?HW-CC-KV=V1&HW-CC-Date=20261008T183332Z&HW-CC-Expire=31536000000&HW-CC-Sign=A7AA71A9EFE884664FC8E761EB2CEF0933E451F44EA2B4DE065FC8A9805CDD63 "点击放大")

3. 导入JSON样式文件，点击"Import"。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a8/v3/3em2lJgtRZixmelblQ3ASA/zh-cn_image_0000001124096853.png?HW-CC-KV=V1&HW-CC-Date=20261008T183332Z&HW-CC-Expire=31536000000&HW-CC-Sign=8A8221E59A0BBFB73C3B2E62A7303A9B079B68D1BFB156A0AEB4898052D96B62 "点击放大")

4. 在编辑器里修改样式。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/51/v3/DHBQJ7ZQQDeNH39grgOaCA/zh-cn_image_0000001078595766.png?HW-CC-KV=V1&HW-CC-Date=20261008T183332Z&HW-CC-Expire=31536000000&HW-CC-Sign=620249C47BD12A130C6E39716FF6807693B5EEE9BA5AC25125AC1642FCFD7B2B "点击放大")

5. 点击"SAVE"生成预览ID，预览ID在编辑样式时会重新生成，您可以通过预览ID测试样式效果。点击"PUBLISH"发布生成样式ID，样式ID是唯一ID，一旦发布生效不会变化。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/85/v3/LIUsCh6TTiGlc-fYoMXvMA/zh-cn_image_0000001124096833.png?HW-CC-KV=V1&HW-CC-Date=20261008T183332Z&HW-CC-Expire=31536000000&HW-CC-Sign=AB4150E1A65CD99583400C4CE7A4F09545D777D1575E35C2B427FB4AB3BA0524 "点击放大")

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/90/v3/NNLTLuVOTJekYwdKlLb-7Q/zh-cn_image_0000001124154281.png?HW-CC-KV=V1&HW-CC-Date=20261008T183332Z&HW-CC-Expire=31536000000&HW-CC-Sign=B5CF0BD01B2146D805725D3D1C6BD2ABD226F306C5C1F2F0D0453B0CF3FB203D "点击放大")

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

