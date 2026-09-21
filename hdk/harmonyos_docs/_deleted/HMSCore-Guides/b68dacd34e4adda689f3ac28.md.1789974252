---
name: document/cn/HMSCore-Guides/android-integrating-sdk-0000001050040084
title: 集成HMS Core SDK
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/android-integrating-sdk-0000001050040084
---

# 集成HMS Core SDK

针对Android Studio开发环境，华为提供了Maven仓集成方式的HMS Core SDK包。在开始开发前，您需要将HMS Core SDK集成到您的Android Studio开发环境中。

针对Eclipse开发环境，华为提供了下载HMS Core SDK包本地集成的方式，详情请参见[Eclipse集成HMS Core SDK](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/eclipse-integrating-sdk-0000001055576923)。

## 添加应用的AppGallery Connect配置文件

1. 登录[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)网站，点击"我的项目"。
2. 在项目列表中找到您的项目，在项目中点击需要集成HMS Core SDK的应用。
3. 在"项目设置 > 常规"页面的"应用"区域，点击"agconnect-services.json"下载配置文件。

   ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20231103095812.17680585047632381002340491825861:50001231000000:2800:6396E3318E19C5A7142852B3FCCBA473C4AF3E6AB6123EB9015DF43A0F7726EB.png?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true "点击放大")
4. 将"agconnect-services.json"文件拷贝到应用级根目录下。

   ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20231103095812.53793675134084493182697991201413:50001231000000:2800:1A16FC92AE2C67731E0073C0EAC489ACB41CF28BE3A5EE577FCF029DEA34287E.png?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true)

## 配置HMS Core SDK的Maven仓地址

Android Studio的代码库配置在Gradle插件7.0以下版本、7.0版本和7.1及以上版本有所不同。请根据您当前的Gradle插件版本，选择对应的配置过程。

|-------------------------------------------------------------------------------------|------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------|
|[7.0以下版本](#ZH-CN_TOPIC_0000001700731565__zh-cn_topic_0000001050041594_li547444421611)|[7.0版本](#ZH-CN_TOPIC_0000001700731565__zh-cn_topic_0000001050041594_li1796424071918)|[7.1及以上版本](#ZH-CN_TOPIC_0000001700731565__zh-cn_topic_0000001050041594_li1345452582116)|

> 说明
>
> Maven仓地址无法直接在浏览器中打开访问，只能在IDE中配置。如需添加多个Maven代码库，请将华为公司的Maven仓地址配置在最后。

* **7.0以下版本**
  1. 打开Android Studio项目级"build.gradle"文件。

     ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20231103095812.46449380586463263608967557676381:50001231000000:2800:6AA15FDFC6AB5BC02CD779591FBB87541CDF77315A0C952B22BCDEC16FB5B7DC.png?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true)
  2. 添加HUAWEI AGC插件以及Maven代码库。
     * 在"buildscript > repositories"中配置HMS Core SDK的Maven仓地址。
     * 在"allprojects > repositories"中配置HMS Core SDK的Maven仓地址。
     * 如果App中添加了"agconnect-services.json"文件则需要在"buildscript > dependencies"中增加AGC插件配置。

     ```screen
     buildscript {
         repositories {
             google()
             jcenter()
             // 配置HMS Core SDK的Maven仓地址。
             maven {url 'https://developer.huawei.com/repo/'}
         }
         dependencies {
             ...
             // 增加AGC插件配置，请您参见https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-Guides/agc-sdk-changenotes-0000001058732550#section7117746172220选择合适的AGC插件版本。
             classpath 'com.huawei.agconnect:agcp:1.6.0.300'
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

* **7.0版本**
  1. 打开Android Studio项目级"build.gradle"文件。

     ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20231103095812.45250613298977052626719614634455:50001231000000:2800:3730BFD87231D4ECA61CE2F6FD3CF2603C2464CA49CC1102A79B3ED35728D105.jpg?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true)
  2. 添加HUAWEI AGC插件以及Maven代码库。
     * 在"buildscript > repositories"中配置HMS Core SDK的Maven仓地址。
     * 在"buildscript > dependencies"中增加Android Gradle插件配置。
     * 如果App中添加了"agconnect-services.json"文件，则还需要在"buildscript > dependencies"中增加AGC插件。

     ```screen
     buildscript {
         repositories {
             google()
             jcenter()
             // 配置HMS Core SDK的Maven仓地址。
             maven {url 'https://developer.huawei.com/repo/'}
         }
         dependencies {
             ...
             // 增加Android Gradle插件版本号配置，{version}为实际的Gradle插件版本号，例如7.0.1。
             classpath 'com.android.tools.build:gradle:{version}'
             // 增加AGC插件配置，请您参见https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-Guides/agc-sdk-changenotes-0000001058732550#section7117746172220选择合适的AGC插件版本。
             classpath 'com.huawei.agconnect:agcp:1.6.0.300'
         }
     }
     ```

  3. 打开项目级"settings.gradle"文件，配置HMS Core SDK的Maven仓地址。

     ```screen
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

* **7.1及以上版本**
  1. 打开Android Studio项目级"build.gradle"文件。

     ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20231103095812.87500956545593361422511274144393:50001231000000:2800:606A485DE94BEDC73AEA1C39CA049AFEFDA1EB8A5401AD34B8BED15797638530.jpg?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true)
  2. 在"buildscript > dependencies"中增加Android Gradle插件配置。

     如果App中添加了"agconnect-services.json"文件，则还需要在"buildscript > dependencies"中增加AGC插件。

     ```screen
     buildscript {
         dependencies {
             ...
             // 增加Android Gradle插件版本号配置，{version}为实际的Gradle插件版本号，例如7.1.1。
             classpath 'com.android.tools.build:gradle:{version}'
             // 增加AGC插件配置，请您参见https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-Guides/agc-sdk-changenotes-0000001058732550#section7117746172220选择合适的AGC插件版本。
             classpath 'com.huawei.agconnect:agcp:1.6.0.300'
         }
     }
     plugins {
         ...
     }
     ```

  3. 打开项目级"settings.gradle"文件，配置HMS Core SDK的Maven仓地址。

     ```screen
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

## 添加编译依赖

1. 打开应用级的"build.gradle"文件。

   ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20231103095812.88951418282629238779373671045460:50001231000000:2800:BE66F6693F34171812994ED7F6B4E46DAE7493AB18D79BC4B02A4AA8FA3AC31D.png?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true)
2. 在"dependencies"中添加如下编译依赖。

   ```screen
   dependencies {
       implementation 'com.huawei.hms:push:6.11.0.300'
   }
   ```

   > 说明
   >
   > 建议您集成的SDK使用最新版本号，版本号索引请参见[版本更新说明](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/android-app-version-0000001074227861)。
3. （可选）如果您集成了Push SDK 6.7.0.300及以上版本，可在"dependencies"中添加HMS Core Installer SDK编译依赖，自动引导用户下载HMS Core APK。 注意
   > * 如果您的应用上架其他应用市场（例如：Google Play），请跳过该配置。
   > * HMS Core Installer SDK编译依赖配置完后，请[配置混淆脚本](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/android-config-obfuscation-scripts-0000001050176973)。

   ```screen
   dependencies {
       implementation 'com.huawei.hms:hmscoreinstaller:6.7.0.300'
   }
   ```

4. 添加AGC插件配置。请根据实际情况选择：
   * 方式一：在文件头部声明下一行添加如下配置。

     ```screen
     apply plugin: 'com.huawei.agconnect'
     ```

   * 方式二：在**plugins** 中添加如下配置。

     ```screen
     plugins {
         id 'com.android.application'
         // 添加如下配置
         id 'com.huawei.agconnect'
     }
     ```

## 配置签名

将[生成签名证书指纹](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/android-config-agc-0000001050170137#section193351110105114)步骤中生成的签名文件拷贝到工程应用级别目录下，在应用级的"build.gradle"文件中配置签名。

```screen
android {
    signingConfigs {
        config {
            // 根据您实际的签名信息，替换以下参数中的xxxx
            keyAlias 'xxxx'
            keyPassword 'xxxx'
            storeFile file('xxxx.jks')
            storePassword 'xxxx'
        }
    }

    buildTypes {
        debug {
            signingConfig signingConfigs.config
        }
        release {
            signingConfig signingConfigs.config
            minifyEnabled false
            proguardFiles getDefaultProguardFile('proguard-android-optimize.txt'), 'proguard-rules.pro'
        }
    }
}
```

## 多语言设置

* 如果您的应用不需要设置只支持某些特定语言，则请忽略本步骤。应用将默认支持所有HMS Core SDK支持的语言。
* 如果您的应用需要设置只支持某些特定语言，则可通过本步骤配置。
  1. 打开应用级的"build.gradle"文件。

     ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20231103095812.19063783226725411362427106086768:50001231000000:2800:C9F9DB4728F06F63CCB1CF38CE827268022849979824BA59FEF8D0B8BB765621.png?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true)


  2. 在"android > defaultConfig"中新增"resConfigs"，配置需要支持的语种，配置格式如下：

     ```screen
     android {
         defaultConfig {
             ...
             resConfigs "en", "zh-rCN", "需要支持的其他语言"
         }
     }
     ```

  HMS Core SDK支持的语言列表请参见[HMS Core SDK支持的语言](https://developer.huawei.com/consumer/cn/doc/development/hmscore-common-Guides/support-language-0000001050040564)。

## 同步工程

在完成以上的配置后，点击工具栏中的gradle同步图标完成"build.gradle"文件的同步，然后将相关依赖下载到本地。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20231103095812.12456478741774979583891706525995:50001231000000:2800:8A106975997C5BE2165AAF565EF93FF0B44B8AAAF62454047A9887342F99024E.png?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true) 说明
>
> 如果出现错误，请检查网络连接是否正常，以及检查"build.gradle"文件是否正确。

