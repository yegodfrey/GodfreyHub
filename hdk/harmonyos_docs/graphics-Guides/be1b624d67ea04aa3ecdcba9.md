---
name: document/cn/graphics-Guides/xrkit-preparations-0000001064580890
title: 开发准备
uri: https://developer.huawei.com/consumer/cn/doc/graphics-Guides/xrkit-preparations-0000001064580890
---

# 开发准备

本章节主要介绍接入XRKit的准备步骤，以帮助您快速地完成XRKit的接入。  

#### 注册成为开发者

在开发应用前需要在[华为开发者联盟](https://developer.huawei.com/consumer/cn/)网站上注册成为开发者并完成实名认证，具体方法请参见[帐号注册认证](https://developer.huawei.com/consumer/cn/doc/start/account-registration-and-authentication1-0000001053768010)。  

#### 创建应用

参见[创建项目](https://developer.huawei.com/consumer/cn/doc/distribution/app/agc-help-createproject-0000001100334664)和在[项目下创建应用](https://developer.huawei.com/consumer/cn/doc/distribution/app/agc-help-createapp-0000001146718717)完成应用的创建，配置如下：

* "选择平台"：选择"Android"。
* "支持设备"：选择"手机"。
* "应用分类"：选择"应用"或"游戏"。  

#### 集成XRKit SDK

华为提供了Maven仓集成方式的XRKit SDK包，在开始开发前，您需要将XRKit SDK集成到您的开发环境中。  

#### 配置XRKit SDK的Maven仓地址

Android Studio的代码库配置在Gradle插件7.0以下版本、7.0版本和7.1及以上版本有所不同。请根据您当前的Gradle插件版本，选择对应的配置过程。  

|--------------------------------------------------------|-------------------------------------------------------|----------------------------------------------------------|
|[7.0以下版本](#ZH-CN_TOPIC_0000001499198916__li547444421611)|[7.0版本](#ZH-CN_TOPIC_0000001499198916__li1254642016511)|[7.1以上版本](#ZH-CN_TOPIC_0000001499198916__li18205654172911)|

* 7.0以下版本
  1. 打开Android Studio项目级"build.gradle"文件。

     ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230517170223.99592754511123220159084099783701:50001231000000:2800:17095F7826B9C4923EE284531F58951BEED7F34EC16D03CDB19583BF54AB433F.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)
  2. 添加Maven代码库。

     在"buildscript \> repositories"中配置HMS Core SDK的Maven仓地址。

     在"allprojects \> repositories"中配置HMS Core SDK的Maven仓地址。

     ```
     buildscript {
         repositories {
             google()
             jcenter()
             // 配置HMS Core SDK的Maven仓地址。
             maven {url "https://developer.huawei.com/repo/" }
         }
     }

     allprojects {
         repositories {
             google()
             jcenter()
             // 配置HMS Core SDK的Maven仓地址。
             maven {url "https://developer.huawei.com/repo/" }
         }
     } 
     ```

<!-- -->

* 7.0版本
  1. 打开Android Studio项目级"build.gradle"文件，添加Maven代码库。  
     在"buildscript \> repositories"中配置HMS Core SDK的Maven仓地址。

     ```
     buildscript {
         repositories {
             google()
             jcenter()
             maven {url "https://developer.huawei.com/repo/" }
         }
     }
     ```

  2. 打开项目级"settings.gradle"文件，配置HMS Core SDK的Maven仓地址。

     ```
     dependencyResolutionManagement {
         repositoriesMode.set(RepositoriesMode.FAIL_ON_PROJECT_REPOS)
         repositories {
             repositories {
                 google()
                 jcenter()
                 maven {url "https://developer.huawei.com/repo/" }
             }
         }
     }
     ```

<!-- -->

* 7.1以上版本
  1. 打开Android Studio项目级"build.gradle"文件，添加Maven代码库。  
     在"buildscript \> repositories"中配置HMS Core SDK的Maven仓地址。

     ```
     buildscript {
         repositories {
             google()
             jcenter()
             maven {url "https://developer.huawei.com/repo/" }
         }
     }
     ```

  2. 打开项目级"settings.gradle"文件，配置HMS Core SDK的Maven仓地址。

     ```
     pluginManagement {
         repositories {
             repositories {
                 google()
                 jcenter()
                 maven {url "https://developer.huawei.com/repo/" }
             }
         }
     }

     dependencyResolutionManagement {
         repositoriesMode.set(RepositoriesMode.FAIL_ON_PROJECT_REPOS)
         repositories {
             repositories {
                 google()
                 jcenter()
                 maven {url "https://developer.huawei.com/repo/" }
             }
         }
     }
     ```

Gradle 7.0版本后，请参考Android官方对于Gradle版本与Gradle插件的配套关系，把Gradle插件版本也升级到7.0及以上。  
![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230517170223.95924708532953085983201988611078:50001231000000:2800:12F7C8EC28E9E609A8356F43EF5DBA1AA1C76E95C1FEDD0D2F94C0E5B144C7CE.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)  
Maven仓地址无法直接在浏览器中打开访问，只能在IDE中配置。如需添加多个Maven代码库，请将华为公司的Maven仓地址配置在最后。  

#### 添加编译依赖

1. 打开项目中应用级的"build.gradle"文件。

   ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230517170223.78631509388178054880022835152786:50001231000000:2800:9090342AA912A0002EBC846311A07224AE80D935E618B39CC641A400F09889C5.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)
2. 在"dependencies"中添加如下编译依赖。

   ```
   dependencies {
       implementation 'com.huawei.hms:xrkitsdk:{version}'
   }
   ```

   ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230517170223.15369945576774431169770816229430:50001231000000:2800:2DDE9A7194FA8FC8D232A38AACA5E8EE56844D82F2B235E22E43114750207B10.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)  
   以上SDK依赖包{version}替换为实际的SDK版本号，如：1.4.0.0。建议集成最新的SDK版本，版本号详见[版本更新说明](https://developer.huawei.com/consumer/cn/doc/development/graphics-Guides/xrkit-version-change-history-0000001064290551)。
3. 重新打开修改完的build.gradle文件，右上方出现Sync Now链接。点击"Sync Now"等待同步完成。  
   ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230517170223.67955474988369049388659081676141:50001231000000:2800:94C04D8D7E271A2065C52C4DCE184B750E5D6914E4CA836486D13F729E6387EC.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)  
   如果出现错误，请检查网络连接是否正常，以及检查gradle文件是否正确。
