---
name: document/cn/AppGallery-connect-Guides/gpm-integration-android-0000002022406709
title: 集成SDK
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/gpm-integration-android-0000002022406709
---

# 集成SDK

使用游戏性能管理相关功能前，必须集成游戏性能管理SDK。  

#### 前提条件

* JDK 1.7及以上
* 安装Android Studio 3.x及以上
  * minSdkVersion 19及以上
  * targetSdkVersion 30（推荐）
  * compileSdkVersion 31（推荐）
  * Gradle 3.5及以上（推荐）
* 测试应用的设备：Android 5.0及以上的手机  

#### 集成步骤

1. 配置Maven仓地址。 Android Studio的代码库配置在Gradle插件7.0以下版本、7.0版本和7.1及以上版本有所不同。请根据您当前的Gradle插件版本，选择对应的配置过程。

   |-------------------------------------------------------------------------------------|------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------|
   |[7.0以下版本](#ZH-CN_TOPIC_0000002022406709__zh-cn_topic_0000001050041594_li547444421611)|[7.0版本](#ZH-CN_TOPIC_0000002022406709__zh-cn_topic_0000001050041594_li1796424071918)|[7.1及以上版本](#ZH-CN_TOPIC_0000002022406709__zh-cn_topic_0000001050041594_li1345452582116)|

   ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260212110236.49248337200345594758719642895024:50001231000000:2800:9706712529212BCD51FBE305B4974B6EACF6FC4341984B84C577178985CBAC13.png)  
   Maven仓地址无法直接在浏览器中打开访问，只能在IDE中配置。如需添加多个Maven代码库，请将华为公司的Maven仓地址配置在最后。
   * 7.0以下版本
     1. 打开Android Studio项目级"build.gradle"文件。 ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260212110236.69302286046609222409600531125290:50001231000000:2800:F0254EB332F9B0E5370CB7FAEF43FDAA4D60A20F808091A244CF09ADEBCAECDE.png)

     2. 配置Maven代码仓地址。
        * 在"buildscript \> repositories"中配置Maven仓地址。
        * 在"allprojects \> repositories"中配置Maven仓地址。

        ```
        buildscript {
            repositories {
                google()
                jcenter()
                // 配置Maven仓地址
                maven {url 'https://developer.huawei.com/repo/'}
            }
        }

        allprojects {
            repositories {
                google()
                jcenter()
                // 配置Maven仓地址
                maven {url 'https://developer.huawei.com/repo/'}
            }
        } 
        ```

   * 7.0版本
     1. 打开Android Studio项目级"build.gradle"文件。 ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260212110237.76900316359768640840874881868048:50001231000000:2800:B5371699DEC7C9E2B101B80002B6828D8C5AAFC6347027A44A636640EFD6DD0A.png)

     2. 在"buildscript \> repositories"中配置Maven仓地址。

        ```
        buildscript {
            repositories {
                google()
                jcenter()
                // 配置Maven仓地址。
                maven {url 'https://developer.huawei.com/repo/'}
            }
        }
        ```

     3. 打开项目级"settings.gradle"文件，配置Maven仓地址。

        ```
        dependencyResolutionManagement {
            ...
            repositories {
                google()
                jcenter() 
                // 配置Maven仓地址。
                maven {url 'https://developer.huawei.com/repo/'}
            }
        }
        ```

   * 7.1及以上版本
     1. 打开Android Studio项目级"settings.gradle"文件。 ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260212110237.44415115565595956448208434523554:50001231000000:2800:DE0A97AB0F6F9DB63F1EDCD79D4A86766CF24FC7BA16C8A7F5AAD00821F2CA1F.png)

     2. 配置Maven仓地址。

        ```
        pluginManagement {
            repositories {
                gradlePluginPortal()
                google()
                mavenCentral()
                // 配置Maven仓地址。
                maven { url 'https://developer.huawei.com/repo/' }
            }
        }
        dependencyResolutionManagement {
            ...
            repositories {
                google()
                mavenCentral()
                // 配置Maven仓地址。
                maven { url 'https://developer.huawei.com/repo/' }
            }
        }
        ```

2. 添加编译依赖。
   1. 打开应用级的build.gradle文件。 ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260212110237.84897532410537523145905992815305:50001231000000:2800:C56242B08A9191F94C564D6CBDE0042D3FBD819D86F6EA0D150F1794E793BD27.png)

   2. 添加游戏性能管理SDK相关依赖。

      ```
      dependencies {
          ... ...
           implementation "com.huawei.game.midplatform:gpm:14.3.1.300"
      }
      ```

3. 完成build.gradle文件配置后，右上方出现"Sync Now"按钮，点击"Sync Now"等待同步完成。 ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260212110237.48006163994546142822528312972936:50001231000000:2800:D4D9B604BE6786855E02197879AB8C79395D37C0A2CE0BEEECD69D7E58AA2C32.png)

