---
name: document/cn/HMSCore-Guides/server-preparations-0000001050185577
title: 应用接入
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/server-preparations-0000001050185577
---

# 应用接入

#### 方式一：集成HMS Core SDK

针对Android Studio开发环境，华为提供了Maven仓集成方式的HMS Core SDK包。在开始开发前，您需要将HMS Core SDK集成到您的Android Studio开发环境中。  

#### 添加当前应用的AppGallery Connect配置文件

1. 登录[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)网站，点击"我的项目"。
2. 在项目列表中找到您的项目，在项目中点击需要集成HMS Core SDK的应用。
3. 在"项目设置 \> 常规"页面的"应用"区域，点击"agconnect-services.json"下载配置文件。

   <br />

   ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250916154806.49511705102789295821379541561412:50001231000000:2800:72B269719A29CABC4E9F5F9475658D865EAE5221C09AAFD6372E761935ABB845.png "点击放大")

   <br />

4. 将"agconnect-services.json"文件拷贝到应用级根目录下。

   <br />

   ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250916154806.78045440436282554088088706361201:50001231000000:2800:C4B8ADFA0489F4322FDE5A073E9F796E3CADE3A10A5495AD1837D3B4D8C8162A.png)

   <br />

#### 配置HMS Core SDK的Maven仓地址

Android Studio的代码库配置在Gradle插件7.0以下版本、7.0版本和7.1及以上版本有所不同。请根据您当前的Gradle插件版本，选择对应的配置过程。  

|-------------------------------------------------------------------------------------|------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------|
|[7.0以下版本](#ZH-CN_TOPIC_0000001050185577__zh-cn_topic_0000001050041594_li547444421611)|[7.0版本](#ZH-CN_TOPIC_0000001050185577__zh-cn_topic_0000001050041594_li1796424071918)|[7.1及以上版本](#ZH-CN_TOPIC_0000001050185577__zh-cn_topic_0000001050041594_li1345452582116)|

![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250916154806.95398691548627695574564096024722:50001231000000:2800:1CE28A2C49DA291814487C04CDAAC7C72C9C473D1BFB1CA598B7A5D064F0772B.png)  
Maven仓地址无法直接在浏览器中打开访问，只能在IDE中配置。如需添加多个Maven代码库，请将华为公司的Maven仓地址配置在最后。

* 7.0以下版本
  1. 打开Android Studio项目级"build.gradle"文件。

     ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250916154806.76431770074899719156158502187143:50001231000000:2800:E92B231C2ED57EF96C9D3EFEA03DF54EB32EA86E70229D2A8EDD3378DACF2827.png)
  2. 添加HUAWEI agcp插件以及Maven代码库。
     * 在"buildscript \> repositories"中配置HMS Core SDK的Maven仓地址。
     * 在"allprojects \> repositories"中配置HMS Core SDK的Maven仓地址。
     * 如果App中添加了"agconnect-services.json"文件则需要在"buildscript \> dependencies"中增加agcp插件配置。

     ```
     buildscript {
         repositories {
             google()
             jcenter()
             // 配置HMS Core SDK的Maven仓地址。
             maven {url 'https://developer.huawei.com/repo/'}
         }
         dependencies {
             ...
             // 增加agcp插件配置，推荐您使用最新版本的agcp插件。
             classpath 'com.huawei.agconnect:agcp:1.7.3.300'
         }
     }

     allprojects {
         repositories {
             google()
             jcenter()
             // 配置HMS Core SDK的Maven仓地址。
             maven {url 'https://developer.huawei.com/repo/'}
         }
     } 
     ```

* 7.0版本
  1. 打开Android Studio项目级"build.gradle"文件。

     ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250916154806.50366691218365991138697647342818:50001231000000:2800:D161B411149555514DDB21B9C9CEDA5F90D6A0FEAC0A2A8EFE6493A978DF7686.jpg)
  2. 添加HUAWEI agcp插件以及Maven代码库。
     * 在"buildscript \> repositories"中配置HMS Core SDK的Maven仓地址。
     * 如果App中添加了"agconnect-services.json"文件则需要在"buildscript \> dependencies"中增加agcp插件配置。

     ```
     buildscript {
         repositories {
             google()
             jcenter()
             // 配置HMS Core SDK的Maven仓地址。
             maven {url 'https://developer.huawei.com/repo/'}
         }
         dependencies {
             ...
             // 增加agcp插件配置，推荐您使用最新版本的agcp插件。
             classpath 'com.huawei.agconnect:agcp:1.7.3.300'
         }
     }
     ```

  3. 打开项目级"settings.gradle"文件，配置HMS Core SDK的Maven仓地址。

     ```
     dependencyResolutionManagement {
         ...
         repositories {
             google()
             jcenter() 
             // 配置HMS Core SDK的Maven仓地址。
             maven {url 'https://developer.huawei.com/repo/'}
         }
     }
     ```

* 7.1及以上版本
  1. 打开Android Studio项目级"build.gradle"文件。

     ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250916154806.27198452094029169756993582367862:50001231000000:2800:3554C6C0E6B3550200346255C0C9E66AED3D214097C94F4EFE23DBE0A59B9B26.jpg)
  2. 如果App中添加了"agconnect-services.json"文件则需要在"buildscript \> dependencies"中增加agcp插件配置。

     ```
     buildscript {
         dependencies {
             ...
             // 增加agcp插件配置，推荐您使用最新版本的agcp插件。
             classpath 'com.huawei.agconnect:agcp:1.7.3.300'
         }
     }
     ```

  3. 打开项目级"settings.gradle"文件，配置HMS Core SDK的Maven仓地址。

     ```
     pluginManagement {
         repositories {
             gradlePluginPortal()
             google()
             mavenCentral()
             // 配置HMS Core SDK的Maven仓地址。
             maven { url 'https://developer.huawei.com/repo/' }
         }
     }
     dependencyResolutionManagement {
         ...
         repositories {
             google()
             mavenCentral()
             // 配置HMS Core SDK的Maven仓地址。
             maven { url 'https://developer.huawei.com/repo/' }
         }
     }
     ```

#### 添加编译依赖

1. 打开应用级的"build.gradle"文件。

   <br />

   ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250916154806.98570937671465213762209399246206:50001231000000:2800:30D4B391006F73814574F6A38944B7EDB069E4D5826A29D1D2A9D01F496EB031.png)

   <br />

2. 在"dependencies"中添加如下编译依赖。

   <br />

   ```
   dependencies {
       implementation 'com.huawei.hms:hwid:{version}'
       implementation 'com.huawei.hms:push:{version}'
   }
   ```

   ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250916154806.24250336898937803061171466141594:50001231000000:2800:185252B0563779AE51182EE1450479178C388D7BC930D463D7B02AC4A7F24FAA.png)  
   {version}替换为实际的Kit依赖版本：com.huawei.hms:hwid:6.7.0.300，com.huawei.hms:push:6.7.0.300。

   <br />

3. 添加AGC插件配置。请根据实际情况选择：

   <br />

   * 方式一：在文件头部声明下一行添加如下配置。

     ```
     apply plugin: 'com.huawei.agconnect'
     ```

   * 方式二：在plugins中添加如下配置。

     ```
     plugins {
         id 'com.android.application'
         // 添加如下配置
         id 'com.huawei.agconnect'
     }
     ```

   <br />

#### 多语言设置

* 如果您的应用不需要设置只支持某些特定语言，则请忽略本步骤。应用将默认支持所有HMS Core SDK支持的语言。
* 如果您的应用需要设置只支持某些特定语言，则可通过本步骤配置。
  1. 打开应用级的"build.gradle"文件。

     ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250916154806.28051762157845654308648299687344:50001231000000:2800:F69003AA8F0A863019B79B724BEE62F3DFD154D79383071A4A50E78968D66BCD.png)

  <!-- -->

  2. 在"android \> defaultConfig"中新增"resConfigs"，配置需要支持的语种，配置格式如下：

     ```
     android {
         defaultConfig {
             ...
             resConfigs "en", "zh-rCN", "需要支持的其他语言"
         }
     }        
     ```

HMS Core SDK支持的语言列表请参见[HMS Core SDK支持的语言](https://developer.huawei.com/consumer/cn/doc/hmscore-common-Guides/support-language-0000001050040564)。  

#### 同步工程

在完成以上的配置后，点击工具栏中的gradle同步图标，完成"build.gradle"文件的同步，将相关依赖下载到本地。  
![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250916154806.43437279989418005782753262812989:50001231000000:2800:37E46539E8097AB19DE17FE2BA650342BB4F61A38BC9CFEC1CC51B324D5D4FEA.png)  
![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250916154806.62683799712389262105551609258242:50001231000000:2800:78298FFDAE50E6873258FF469CF88AC4ADC0F33A9B3A82ECE7EAB0EEDCFA68FD.png)  
如果出现错误，请检查网络连接是否正常，以及检查"build.gradle"文件是否正确。  

#### 配置混淆脚本

您编译APK前需要配置混淆配置文件，避免混淆HMS Core SDK导致功能异常。

1. 在应用级根目录下打开混淆配置文件"proguard-rules.pro"，加入排除HMS Core SDK的混淆配置脚本。

   <br />

   ```
   -ignorewarnings
   -keepattributes *Annotation*
   -keepattributes Exceptions
   -keepattributes InnerClasses
   -keepattributes Signature
   -keepattributes SourceFile,LineNumberTable
   -keep class com.huawei.hianalytics.**{*;}
   -keep class com.huawei.updatesdk.**{*;}
   -keep class com.huawei.hms.**{*;}
   ```

   <br />

2. 如果您使用了[AndResGuard插件](https://github.com/shwenzhang/AndResGuard/blob/master/README.zh-cn.md)，需要在应用级的"build.gradle"文件中加入AndResGuard允许清单。如果您未使用AndResGuard插件，则请忽略本步骤。

   <br />

   ```
   whiteList = [
       "R.string.hms*",
       "R.string.connect_server_fail_prompt_toast",
       "R.string.getting_message_fail_prompt_toast",
       "R.string.no_available_network_prompt_toast",
       "R.string.third_app_*",
       "R.string.upsdk_*",
       "R.layout.hms*",
       "R.layout.upsdk_*",
       "R.drawable.upsdk*",
       "R.color.upsdk*",
       "R.dimen.upsdk*",
       "R.style.upsdk*", 
       "R.string.agc*"
   ]
   ```

   <br />

3. （可选）当您启用R8资源缩减（项目级"build.gradle"文件中"shrinkResources"属性为"true"）和严格引用检查（"res/raw/keep.xml"文件中的"shrinkMode"为"strict"）时，请您配置"keep.xml"文件手动保留layout资源，确保应用正常通过华为应用市场上架审核。

   <br />

   ```
   <?xml version="1.0" encoding="utf-8"?>
   <resources xmlns:tools="http://schemas.android.com/tools"
       tools:keep="@layout/hms_download_progress,@drawable/screen_off,@layout/upsdk*"
       tools:shrinkMode="strict" />
   ```

   <br />

#### 方式二：使用WEB应用接入方式

针对WEB应用开发，华为提供了WEB应用接入方式。在开始开发前，您需要先通过华为帐号开放服务实现快速登录授权功能，凭借用户授权凭证，应用可快速调用华为云空间服务提供的公开API。  

#### 创建服务器应用

开发者在接入Drive服务之前，需要先创建服务器应用，详情请参见[《华为帐号服务开发指南》WEB应用接入开发准备章节](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/web-preparations-0000001050050891)。  

#### 打开Drive应用开关

1. 登录[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)网站，点击"我的项目"。
2. 在项目列表中找到您的项目，在项目中选择需要接入Drive的应用，点击"API管理"。
3. 在"项目设置"页面的"API管理"区域，点击Drive Kit右侧开关，确保开关处于打开状态。  

#### 签署开通华为云空间隐私通知和用户协议

引导用户访问<https://cloud.huawei.com/>，首次访问的用户需要签署协议才可以使用华为云空间服务。  

#### 应用接入获取鉴权凭证Access Token

应用接入Drive应使用鉴权凭证Access Token，具体获取方式请参见[《华为帐号服务开发指南》WEB应用接入开发指南章节](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/web-get-access-token-0000001050048946)。  
![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250916154806.12168200002242877627869592563635:50001231000000:2800:B5BFD4986D32BD48295B326EDF4D231EDFE814D38A2FD84471620A2CF394226E.png)  
申请授权码code请求时scope设置应添加华为云空间服务相应的Scope，请参见[Scope列表](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/server-obtain-authentication_info-0000001064659348#ZH-CN_TOPIC_0000001064659348__zh-cn_topic_0000001050039646_table157611813202719)。  
