---
name: document/cn/Media-Guides/preparations-0000001058740907
title: 开发准备
uri: https://developer.huawei.com/consumer/cn/doc/Media-Guides/preparations-0000001058740907
---

# 开发准备

## 注册成为开发者

在开发应用前需要在[华为开发者联盟](https://developer.huawei.com/consumer/cn)网站上注册成为开发者并完成实名认证，具体方法请参见[帐号注册认证](https://developer.huawei.com/consumer/cn/doc/start/registration-and-verification-0000001053628148)。

## 创建应用

参见[创建项目](https://developer.huawei.com/consumer/cn/doc/distribution/app/agc-help-createproject-0000001100334664)和[创建应用](https://developer.huawei.com/consumer/cn/doc/distribution/app/agc-help-createapp-0000001146718717)完成应用的创建。

## SDK集成

### Android Studio

1. 打开Android Studio项目级build.gradle文件。
2. 在"allprojects > repositories"，"buildscript >repositories"里面配置Maven仓地址。

   ```screen
   allprojects {
       repositories {
           google()
           jcenter()
           maven {url 'https://developer.huawei.com/repo/'}
       }
   } 
   buildscript {
       repositories {
           google()
           jcenter()
           maven {url 'https://developer.huawei.com/repo/'}
       }
       ... 
   ```

   > 说明
   >
   > Maven仓地址直接在浏览器中打开无法访问，只能在IDE中配置。
3. 打开应用级的build.gradle文件。在"dependencies"中添加如下编译依赖。

   ```screen
   dependencies {
       implementation  'com.huawei.multimedia:videokit:1.0.3.000' 
   }
   ```

