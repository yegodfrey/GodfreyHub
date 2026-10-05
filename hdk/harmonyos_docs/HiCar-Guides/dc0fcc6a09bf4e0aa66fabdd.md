---
name: document/cn/HiCar-Guides/declare-hicar-0000001078147426
title: 声明支持HiCar
uri: https://developer.huawei.com/consumer/cn/doc/HiCar-Guides/declare-hicar-0000001078147426
---

# 声明支持HiCar

音频应用需要在AndroidManifest.xml清单文件中配置以下信息，声明音频应用支持HiCar。

```screen
<application>   
 ...    
    <meta-data android:name="com.huawei.hicar.application"
android:value="media"/>
 ...
</application>
```

