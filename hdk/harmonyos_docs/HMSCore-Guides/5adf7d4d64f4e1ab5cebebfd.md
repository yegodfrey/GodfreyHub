---
name: document/cn/HMSCore-Guides/harmonyos-appendix-d-0000001123074892
title: 配置混淆脚本
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/harmonyos-appendix-d-0000001123074892
source: portal
---

# 配置混淆脚本

您编译应用前需要配置混淆配置文件，避免混淆HUAWEI Analytics Kit SDK导致功能异常。

打开HarmonyOS工程应用级根目录下的“proguard-rules.pro”混淆配置文件，加入AnalyticsKit SDK和依赖SDK的混淆配置。
    
    -ignorewarnings
    -keep class com.huawei.agconnect.**{*;}
    -keep class com.huawei.hms.analytics.**{*;}
    -keep class com.huawei.hms.push.**{*;}
