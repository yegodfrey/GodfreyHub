---
name: document/cn/AppGallery-connect-Guides/gpm-integration-0000001719545670
title: 集成SDK
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/gpm-integration-0000001719545670
---

# 集成SDK

使用游戏性能管理相关功能前，必须集成游戏性能管理SDK。

## 前提条件

* 已安装Unity引擎，推荐2021及以上版本。
* 已准备Android 5.0及以上系统的手机设备。使用引擎打包游戏后，仅支持手机设备进行功能调试，不支持浏览器、模拟器等预览调试。

## 开发步骤

### 第一步：集成C# SDK

1. [下载游戏性能管理SDK](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Library/gpm-csharp-sdkdownload-0000001719348456)并解压。SDK包解压后如下：

   ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260212110236.43050684287152559409984547912977:50001231000000:2800:AE9EED209496FB6430E91FCAC7B9AAF1EA80D297137E85370677DA4544CCBA6A.png "点击放大")

   |文件夹|说明|
   |:------|:--------------------|
   |Scripts|SDK接口代码文件，提供C# API接口。|

2. 将整个**GPMSDK** 文件夹复制到Unity工程的**Assets**文件夹中。

> 说明
>
> * 后续使用SDK内部接口，仅需引入SDK的命名空间GPM即可。
> * GPMSDK类的方法需在**主线程**调用。

### 第二步：集成Android库

1. 在Unity工程中，配置如下选项：
   1. 选择"**File > Build Settings**"，选中Android平台。
   2. 选择"**Player Settings > Player > Settings for Android > Publishing Settings**"，勾选Build配置项下全部选项。
   3. 选择"**Other Settings > Identification** "，将**Minimum API Level** 设置为"**5.1 'Lollipop'(API level 22)**"。
2. 打开Unity工程"**Assets > Plugins > Android** "路径中项目级**baseProjectTemplate.gradle** 文件，添加Maven代码库。
   * 在"**buildscript > repositories**"中配置Maven仓地址。
   * 在"**allprojects > repositories**"中配置Maven仓地址。

   ```screen
   buildscript {
       ext {
           repositories = [
                   // 配置Maven仓地址
   		'https://developer.huawei.com/repo/'
           ]
       }
       repositories {
           rootProject.ext.repositories.each { repourl ->
               maven { url repourl }
           }
           google()
           jcenter()
       }
       dependencies {
           classpath 'com.android.tools.build:gradle:3.4.0'
       }
   }
   allprojects {
       repositories {**ARTIFACTORYREPOSITORY**
           rootProject.ext.repositories.each { repourl ->
               maven { url repourl }
           }
               maven { url 'https://developer.huawei.com/repo/' } // 配置Maven仓地址
               google()
               jcenter()
           flatDir {
               dirs "${project(':unityLibrary').projectDir}/libs"
           }
       }
   }
   ```

3. 打开应用级**launcherTemplate.gradle** 文件，在**dependencies** 中添加游戏性能管理SDK的编译依赖。

   ```screen
   dependencies {
       implementation project(':unityLibrary')
           implementation "com.huawei.game.midplatform:gpm:14.3.1.300"
       }
   ```

