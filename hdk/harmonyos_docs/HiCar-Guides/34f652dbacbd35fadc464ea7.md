---
name: document/cn/HiCar-Guides/build-hmi-app-project-0000001062411690
title: 准备工作
uri: https://developer.huawei.com/consumer/cn/doc/HiCar-Guides/build-hmi-app-project-0000001062411690
---

# 准备工作

## 场景说明

厂商需要集成HiCar SDK包中"hicarsdk.aar"开发一款预置于车机系统的厂商HMI应用，用于处理HiCar相关交互逻辑及HMI显示。厂商可以参考HiCar SDK包中的"DemoApp源码/demoapp.zip"开发厂商HMI应用。

## 权限说明

HiCar SDK的正常运行需要系统权限，厂商HMI应用在调用HiCar SDK接口过程中也需要配置系统权限。

厂商HMI应用在开发过程中需要在应用的AndroidManifest.xml文件中声明需要系统权限，示例如下所示：

```screen
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.huawei.hicar.demoapp"
    android:sharedUserId="android.uid.system">
    ......
</manifest>
```

## 开发步骤

1. 通过Android Studio创建空白工程。
2. 将软件包中的"hicarsdk.aar"包复制至工程的app/libs目录下，同时在模块级build.gradle添加依赖。

   **图1**hicarsdk.aar在工程中的存放路径   
   ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250630214047.95808558855973766485330397896084:50001231000000:2800:97A8E4AC5250EBD381AFBAB78D7A4B520A294E25EABC8C56C54F188DCE42E4E2.png)

   ```screen
   dependencies {
        implementation fileTree(dir: 'libs', include: ['*.aar'])
   }
   ```

3. 参考本文档后续章节内容及DemoApp源码完成厂商HMI应用开发。

   厂商在进行HMI应用开发时，界面设计需要遵循《HUAWEI HiCar 设备接入UX设计规范》。界面包括但不限于：
   * 有线连接提示界面
   * 无线连接PIN码界面
   * 正在连接界面
   * 连接异常提示界面

4. 在完成厂商HMI应用开发之后，请使用厂商平台秘钥对其签名，确保其以系统应用运行。

