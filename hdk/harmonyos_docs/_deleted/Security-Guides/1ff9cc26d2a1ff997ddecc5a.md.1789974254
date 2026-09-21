---
name: document/cn/Security-Guides/config-obfuscation-scripts-0000001080325886
title: 配置混淆脚本
uri: https://developer.huawei.com/consumer/cn/doc/Security-Guides/config-obfuscation-scripts-0000001080325886
---

# 配置混淆脚本

开发者编译APK前需要配置不要混淆本地认证SDK，避免功能异常。

1. 打开Android工程的混淆配置文件"proguard-rules.pro"。
2. 加入排除本地认证SDK的混淆配置。

   ```screen
   -keep class com.huawei.facerecognition.**{*;}
   ```

