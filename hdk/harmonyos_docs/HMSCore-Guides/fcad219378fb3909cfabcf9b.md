---
name: document/cn/HMSCore-Guides/extended-config-obfuscation-scripts-0000001071222399
title: 配置混淆脚本
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/extended-config-obfuscation-scripts-0000001071222399
---

# 配置混淆脚本

开发者编译 APK 前需要配置不混淆 Health Service Kit 扩展能力服务 SDK，避免功能异常。

1. 打开应用级的混淆配置文件 proguard-rules.pro。
2. 加入排除 Health Service Kit 扩展能力服务 SDK 的混淆配置。

   <br />

   ```
   -keepattributes *Annotation*
   -keepattributes Signature
   -keepattributes InnerClasses
   -keepattributes EnclosingMethod
   -keep class com.huawei.hihealth.**{*;}
   -keep class com.huawei.hihealthkit.**{*;}
   ```

   <br />

3. （可选）当您启用R8资源缩减（项目级"build.gradle"文件中"shrinkResources"属性为"true"）和严格引用检查（"res/raw/keep.xml"文件中的"shrinkMode"为"strict"）时，请您配置"keep.xml"文件手动保留layout资源，确保应用正常通过华为应用市场上架审核。

   <br />

   ```
   <?xml version="1.0" encoding="utf-8"?>
   <resources xmlns:tools="http://schemas.android.com/tools"
       tools:keep="@layout/hms_download_progress,@drawable/screen_off,@layout/upsdk*"
       tools:shrinkMode="strict" />
   ```

   <br />

