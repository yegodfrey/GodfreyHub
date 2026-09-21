---
name: document/cn/system-Guides/sdk-data-security-0000001050828067
title: SDK数据安全说明
uri: https://developer.huawei.com/consumer/cn/doc/system-Guides/sdk-data-security-0000001050828067
---

# SDK数据安全说明

## SDK工作方式

SDK需要在应用打包时，被加载在您的应用当中。SDK会由开发者调用相应接口，开启或者关闭服务，不会在后台做额外动作。

## SDK权限说明

SDK运行时会调用系统振动权限。

```screen
<uses-permission android:name="android.permission.VIBRATE"/>;
```

## SDK数据收集

SDK会使用客户应用的包名和接口调用情况，用于牵引HMS Core服务能力的持续优化和改进。

## SDK数据安全保护

Haptics Engine SDK与服务端之间的数据交换基于Binder传输，Android系统本身的安全机制保障了基于Binder传输的数据安全。
