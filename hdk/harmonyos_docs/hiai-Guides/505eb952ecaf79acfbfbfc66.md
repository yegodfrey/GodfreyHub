---
name: document/cn/hiai-Guides/sdk-data-security-0000001229909424
title: 云端鉴权信息使用须知
uri: https://developer.huawei.com/consumer/cn/doc/hiai-Guides/sdk-data-security-0000001229909424
---

# 云端鉴权信息使用须知

## 云端鉴权信息使用须知

当您使用机器学习服务云侧的服务时，可以通过以下方式设置api_key或者Access Token（推荐）。

* Access Token 您可以通过以下API设置Access Token，在应用初始化时设置即可，如果Token过期（默认60分钟）了，需要更换Token重新设置。

  * Android

    ```codeblock
    MLApplication.getInstance().setAccessToken("your access token");
    ```


  * iOS

    ```codeblock
    [[MLApplication sharedInstance] setAccessToken:@"your access token"];
    ```

  * HarmonyOS

    ```codeblock
    MLApplication.getInstance().setAccessToken("your access token");
    ```

  获取Access Token和相关错误码可参见[基于OAuth 2.0开放鉴权](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/open-platform-oauth-0000001053629189)客户端模式。


* 设置国家码
  * Android

    ```codeblock
    MLApplication.getInstance().setUserRegion("https://developer.huawei.com/consumer/cn/doc/hiai-References/mlapplication-0000001050167420#section102579183421");
    示例：MLApplication.getInstance().setUserRegion(MLApplication.REGION_DR_CHINA);
    ```

  * HarmonyOS

    ```codeblock
    MLApplication.getInstance().setUserRegion("https://developer.huawei.com/consumer/cn/doc/hiai-References/mlapplication-harmonyos-0000001201420740#section102579183421");
    示例：MLApplication.getInstance().setUserRegion(MLApplication.REGION_DR_CHINA);
    ```

    > 注意
    >
    > ML Kit当前提供两种数据处理位置策略，主动管理并指定数据处理位置和由服务根据用户的活动区域自动匹配数据处理位置，具体配置见AppGallery Connect的[数据处理位置](https://developer.huawei.com/consumer/cn/doc/distribution/app/agc-data-storage-location)，修改处理策略后，您的应用需要集成最新版本的agconnect-service配置文件后才能生效。
* api_key 您需要设置您的api_key，请确保api_key的安全。

  您可以用以下API设置api_key，在应用启动时初始化设置一次即可，无需多次设置。
  * Android

    ```codeblock
    MLApplication.getInstance().setApiKey("your ApiKey");
    ```

    当您在[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)上注册您的应用时，会给您的应用分配api_key，可参见：[添加AGC配置文件](https://developer.huawei.com/consumer/cn/doc/hiai-Guides/add-appgallery-0000001050038080)。
  * iOS

    ```codeblock
    [[MLApplication sharedInstance] setApiKey:@"your ApiKey"];
    ```

    当您在[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)上注册您的应用时，会给您的应用分配api_key，可参见：[添加配置文件](https://developer.huawei.com/consumer/cn/doc/hiai-Guides/download-agc-0000001051136994)。
  * HarmonyOS

    ```codeblock
    MLApplication.getInstance(context).setApiKey("your ApiKey");
    ```

    当您在[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)上注册您的应用时，会给您的应用分配api_key，可参见：[添加AGC配置文件](https://developer.huawei.com/consumer/cn/doc/hiai-Guides/add-appgallery-harmonyos-0000001252277851)。

  > 注意
  >
  > 请勿将api_key硬编码在代码中，同时不要将api_key存储在应用的配置文件中。建议您将api_key存储在云侧，运行时获取。

## 离线模型下载和使用说明

当您下载ML Kit提供的离线模型时， ML Kit将根据需要自动将所需语言的离线模型下载到您的设备（下载原理如下图所示），因此，建议您在准备下载离线模型时，先获取Wi-Fi权限。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250514172419.91835878742688137040418268086327:50001231000000:2800:79C5EF03544D3BA5AC495F0624377A961E604AA6561D1AA4B35C6D5CC65A3CFC.png)
