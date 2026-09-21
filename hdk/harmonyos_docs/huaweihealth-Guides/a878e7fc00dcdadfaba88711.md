---
name: document/cn/huaweihealth-Guides/integrate-health-industrty-sdk-0000002372256553
title: 集成Health Industry SDK
uri: https://developer.huawei.com/consumer/cn/doc/huaweihealth-Guides/integrate-health-industrty-sdk-0000002372256553
---

# 集成Health Industry SDK

Android studio开发环境，华为提供了Maven仓集成方式的Health Industry SDK，集成方式请参见[配置Maven仓地址](#section1453441512308)。

开源软件声明：[Health Industry SDK Open Source Software Notice](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260727143016.42463983044424059776076990523446:50001231000000:2800:217F696CF81518517E5050BA1DB5DC1EF59AE031A6F0C45B42AC51F850FBCB72.docx?needInitFileName=true)

|SDK名称|SDK包|开发者|版本号|主要功能|个人信息处理规则|合规使用说明|校验码|
|:------------------|:---------------------------------------------------------------------------------------------------|:---------|:---------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|Health Industry SDK|针对Android studio开发环境，华为提供了Maven仓集成方式的Health Industry SDK。集成方式请参见[配置Maven仓地址](#section1453441512308)。|华为软件技术有限公司|最新版本2.15.0.107 更多版本： [版本变更说明](https://developer.huawei.com/consumer/cn/doc/huaweihealth-Guides/version-change-history-0000002338287146)。|Health Industry SDK的主要功能介绍请参见[业务简介](https://developer.huawei.com/consumer/cn/doc/huaweihealth-Guides/introduction-0000002372172841)。|SDK如何处理个人信息请参见[SDK隐私声明](https://developer.huawei.com/consumer/cn/doc/huaweihealth-Guides/sdk-data-security-0000002385757941)。|您集成和使用我们的SDK时需要遵从个人信息保护基本要求，详情请参见[SDK合规使用指南](https://developer.huawei.com/consumer/cn/doc/huaweihealth-Guides/sdk-compliance-user-guide-0000002352037362)。|```screen industry-client的SHA256： 84d66bbd64c9685eb068ef7e45c5b9f9c81c226ae1042d7ee1bb4de9235eeab7 industry-service的SHA256: 4e23a0177bbec527c9b4b52204611c286cf70e935e8ac8a55d97fd15409e4505 industry-connectionui的SHA256: c074716080b1b1b90ab3f6a3e503de489d50a2fb5115d1220d54c45bf478a12a ```|
[**表1**]

## 配置Maven仓地址

Android Studio的Maven仓地址推荐配置方式在Gradle7.0以下、7.0及以上版本有所不同。请根据您当前的Gradle版本，选择对应的配置过程。

|--------------------------------------------------------|----------------------------------------------------------|
|[7.0以下版本](#ZH-CN_TOPIC_0000002647924530__li938111913556)|[7.0及以上版本](#ZH-CN_TOPIC_0000002647924530__li2516541165514)|

> 说明
>
> Maven仓地址无法直接在浏览器中打开访问，只能在IDE中配置。如需添加多个Maven代码库，请将华为公司的Maven仓地址配置在最后。

* **7.0以下版本**
  1. 打开Android Studio项目根路径下的build.gradle文件。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d9/v3/zmhYIbDmR1mK6ONNeyltVw/zh-cn_image_0000002678164303.png?HW-CC-KV=V1&HW-CC-Date=20260909T171128Z&HW-CC-Expire=31536000000&HW-CC-Sign=FF77D25DC5C0969F728DC96CF551A5864564DEEBF5C983DBDAD694BDE0627A0C)

  2. 在"buildscript > repositories"里面增加Maven仓地址。

     ```screen
     maven { url 'https://developer.huawei.com/repo/' }
     ```

     ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1c/v3/qJWj_jIYTvy9ZIF6FU1RMQ/zh-cn_image_0000002648084582.png?HW-CC-KV=V1&HW-CC-Date=20260909T171128Z&HW-CC-Expire=31536000000&HW-CC-Sign=E5E9DD58737ED12FD9FD678495AF3736785CAD6B478BC19F0D8A8683933CD60C)
  3. 在"allprojects > repositories"里面增加Maven仓地址。

     ```screen
     maven { url 'https://developer.huawei.com/repo/' }
     ```

     ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/82/v3/dx_u5CSLTzCWm02prF2Dwg/zh-cn_image_0000002678004467.png?HW-CC-KV=V1&HW-CC-Date=20260909T171128Z&HW-CC-Expire=31536000000&HW-CC-Sign=CB3E848F8CAD1346F9F2F9931909B977F71D8DFB96BE578B11B6D8C559246CBC)
* **7.0及以上版本**
  1. 打开Android Studio项目根路径下的settings.gradle文件。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9e/v3/qhb5q-5hSia7RnHT8b6hlA/zh-cn_image_0000002647924700.png?HW-CC-KV=V1&HW-CC-Date=20260909T171128Z&HW-CC-Expire=31536000000&HW-CC-Sign=19561E5740B8EA91D1FED737DF74778A2F5C68013B7F804F0A8EA018DFBB73DB)

  2. 在"pluginManagement>repositories"里面增加Maven仓地址。

     ```screen
     maven { url 'https://developer.huawei.com/repo/' }
     ```

     ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/60/v3/27LhRIlgR5a96ge1AznjWw/zh-cn_image_0000002648084586.png?HW-CC-KV=V1&HW-CC-Date=20260909T171128Z&HW-CC-Expire=31536000000&HW-CC-Sign=D0B1A59FE2C6A74516A33E564FA29EFC00874E99E8140554A2BF3747A7770E8F)
  3. 在"dependencyResolutionManagement>repositories"里面增加Maven地址。

     ```screen
     maven { url 'https://developer.huawei.com/repo/' }
     ```

     ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fc/v3/Pf9qtb0wTGGdcrvXmDzTJQ/zh-cn_image_0000002678164305.png?HW-CC-KV=V1&HW-CC-Date=20260909T171128Z&HW-CC-Expire=31536000000&HW-CC-Sign=12AF13DFF98553E907A27939B61811E72629254FE4F135AEFFE91A6233DB9306)

## 添加编译依赖

1. 打开应用级的build.gradle文件。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/58/v3/fVob5YjUTgiDOgzJHkDTdA/zh-cn_image_0000002647924704.png?HW-CC-KV=V1&HW-CC-Date=20260909T171128Z&HW-CC-Expire=31536000000&HW-CC-Sign=D33E49B72EF65AAE993C82FA952A663E0869E2336245F9A7B1043328B36E4F5B)

2. 在"dependencies"中添加如下编译依赖。

   ```screen
   implementation 'com.huawei.health.industry:industry-service:{version}'
   implementation 'com.huawei.health.industry:industry-client:{version}'
   implementation 'com.huawei.health.industry:industry-connectionui:{version}'
   ```

   > 说明
   > * {version}替换成实际的SDK版本号，建议集成最新的SDK版本，版本号详见[版本更新说明](https://developer.huawei.com/consumer/cn/doc/huaweihealth-Guides/version-change-history-0000002338287146)。
   > * industry-connectionui提供扫描连接相关操作的UI页面，仅用于参考页面布局，如果不需要使用，可以不集成。
   > * 如果您依赖 'com.huawei.health.industry:industry-connectionui:{version}'，则需要您应用在AndroidManifest.xml文件下原有的主题更改为android:theme="@style/Theme.IndustryConnectionUI"才能使用。
3. 重新打开修改完的build.gradle文件，右上方出现Sync Now链接。点击"Sync Now"等待同步完成。 说明
   >
   > 如果出现错误，请检查网络连接是否正常，以及检查gradle文件是否正确。

