---
name: document/cn/hiai-Guides/config-obfuscation-scripts-harmonyos-0000001211781338
title: 配置混淆脚本
uri: https://developer.huawei.com/consumer/cn/doc/hiai-Guides/config-obfuscation-scripts-harmonyos-0000001211781338
---

# 配置混淆脚本

您编译应用前需要配置混淆配置文件，避免混淆HUAWEI ML Kit SDK导致功能异常。

在HarmonyOS应用"entry"目录下的混淆配置文件"proguard-rules.pro"中加入ML Kit SDK和依赖SDK的混淆配置。

```
-ignorewarnings
-keepattributes *Annotation*
-keepattributes Exceptions
-keepattributes InnerClasses
-keepattributes Signature
-keepattributes SourceFile,LineNumberTable
-keep class com.huawei.hms.**{*;}
-keep class com.huawei.harmony.**{*;}
-dontwarn ohos.utils.PacMap.**
-keep class **.ResourceTable$* {*;}
```

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250514172359.22279827737598186399099887085228:50001231000000:2800:C7839C594DBDA9D957F1DF385A70A3C9CBCF189C427A085A566CCB949140730E.png)  
1. 若您需要集成语音合成服务，请在加入以上脚本后再配置如下内容：

   ```
   -dontobfuscate
   ```

