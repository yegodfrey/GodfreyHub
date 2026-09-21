---
name: document/cn/HMSCore-Guides/integrated-sdk-0000001576320925
title: 配置FusionSearchService SDK
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/integrated-sdk-0000001576320925
---

# 配置FusionSearchService SDK

在开发应用前，需要在Android项目中配置FusionSearchService SDK。

## **配置FusionSearchService SDK操作示例**

## 添加应用级SDK依赖

将下载的**fusionsearch-12.0.2.111.aar** 文件添加到**app/libs** 目录下，同时在**settings.gradle**配置文件中添加以下配置

```screen
dependencyResolutionManagement {
    repositories {
        ...
        flatDir {
            dirs "app/libs"
        }
        ...
    }
}
```

修改应用级build.gradle配置文件，添加以下依赖

```screen
dependencies {
    ...
    implementation('name':'fusionsearch-12.0.2.111', 'ext':'aar')
    ...
}
```

## 添加Android Manifest权限

FusionSearch SDK需要获取网络状态权限、WiFi状态权限、搜索服务权限，需要在AndroidManifest.xml文件中的manifest标签下添加以下权限

```screen
<manifest ...>
    ...
    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE"/>
    <uses-permission android:name="android.permission.ACCESS_WIFI_STATE"/>
    <uses-permission android:name="ohos.permission.ACCESS_SEARCH_SERVICE"/>
    ...
</manifest>
```

若有疑问，您可以[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/)。

