---
name: document/cn/HMSCore-Guides/android-config-obfuscation-scripts-0000001050043957
title: 配置混淆脚本
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/android-config-obfuscation-scripts-0000001050043957
---

# 配置混淆脚本

您编译APK前需要配置混淆配置文件，避免混淆HMS Core SDK导致功能异常。

1. 在应用级根目录下打开混淆配置文件"proguard-rules.pro"，加入排除华为统一扫码SDK的混淆配置脚本。

   <br />

   ```
   -ignorewarnings
   -keepattributes *Annotation*
   -keepattributes Exceptions
   -keepattributes InnerClasses
   -keepattributes Signature
   -keepattributes SourceFile,LineNumberTable
   -keep class com.huawei.hianalytics.**{*;}
   -keep class com.huawei.updatesdk.**{*;}
   -keep class com.huawei.hms.**{*;}
   ```

   <br />

2. 如果您使用了[AndResGuard插件](https://github.com/shwenzhang/AndResGuard/blob/master/README.zh-cn.md)，需要在应用级的"build.gradle"文件中加入AndResGuard允许清单。如果您未使用AndResGuard插件，则请忽略本步骤。

   <br />

   ```
   whiteList = [
       "R.string.hms*",
       "R.string.connect_server_fail_prompt_toast",
       "R.string.getting_message_fail_prompt_toast",
       "R.string.no_available_network_prompt_toast",
       "R.string.third_app_*",
       "R.string.upsdk_*",
       "R.layout.hms*",
       "R.layout.upsdk_*",
       "R.drawable.upsdk*",
       "R.color.upsdk*",
       "R.dimen.upsdk*",
       "R.style.upsdk*", 
       "R.string.agc*"
   ]
   ```

   <br />

