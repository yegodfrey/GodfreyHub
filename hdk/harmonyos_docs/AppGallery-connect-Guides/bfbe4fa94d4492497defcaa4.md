---
name: document/cn/AppGallery-connect-Guides/agc-dynamicability-test-0000001057944551
title: 测试您的应用
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-dynamicability-test-0000001057944551
---

# 测试您的应用

在您完成应用的动态特性的功能测试后，您可以在Android Studio中构建AAB文件，但该AAB文件并不能直接安装在Android设备中，无法直接测试Dynamic Ability在华为应用市场的动态加载功能。您可以通过以下两种方式测试。

* 使用bundletool在本地测试App Bundle，具体操作请参见[使用bundletool测试App Bundle](#section139631349103316)。该方法会根据您的AAB文件生成对应的APK文件，然后您可以将APK文件部署到本地的设备中进行测试。
* 您可以使用AGC提供的开放式测试功能，将应用的AAB文件在AGC中上架但只分发给指定的测试用户，具体操作请参见[开放式测试](https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-Guides/agc-betatest-introduction-0000001071477284)。在上架开放式测试版本前请注意，App Bundle应用需要加入AGC应用签名计划，具体请参见[应用签名](https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-Guides/agc-appsigning-introduction-0000001051379577)。

#### 使用bundletool测试App Bundle

* Android 5.0及以上
  1. 转AAB文件为APKS。

     ```
     java -jar bundletool-all-0.10.2.jar build-apks --bundle=app-debug.aab --output=aab.apks
     ```

     其中，bundle表示AAB文件路径，output表示生成APKS的路径。

     修改apks文件后缀名为zip，然后解压splits，获取各APK信息如下：

     ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20241111200007.75983115514480332305149034845832:50001231000000:2800:11827404943AD55604FD478EE7DC72BF4FC19F34E179B6B7B127EA20134CC6B2.png?needInitFileName=true?needInitFileName=true)

  <!-- -->

  2. 安装各APK。 找到主包以及适配自己手机的分辨率包、语言包、CPU架构包，安装到手机上验证功能。

     本例相关包如下：base-master.apk（主包）、base-xxxhdpi.apk（分辨率相关包）、base-zh.apk（语言包），没有SO文件（CPU架构相关包）

     ```
     adb install-multiple .\outputs\bundle\debug\splits\base-master.apk .\outputs\bundle\debug\splits\base-xxxhdpi.apk .\outputs\bundle\debug\splits\base-zh.apk
     ```

* Android 5.0以下
  1. 转AAB文件为完整APK。 由于部分版本（Android 5.0以下）不支持App Bundle功能，个别场景我们需要返回全量包。bundletool工具提供了将AAB转换为全量包的能力，使用方法如下：

     ```
     java -jar bundletool-all-0.10.2.jar build-apks --bundle= app-debug.aab --output=aab-un.apks  --mode=universal
     ```

     修改后缀zip，解压后APK信息如下：

     ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20241111200007.59568714022995200273172104915093:50001231000000:2800:38633611560FD2ADE6874F32D6954313FEA714A2B753E9AD47FCBC6434B8E9B7.jpg?needInitFileName=true?needInitFileName=true)

  <!-- -->

  2. 安装完整APK到手机上进行测试。

     ```
     adb install universal.apk
     ```

