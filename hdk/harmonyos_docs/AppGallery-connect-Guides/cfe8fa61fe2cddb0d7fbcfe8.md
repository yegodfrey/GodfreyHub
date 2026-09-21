---
name: document/cn/AppGallery-connect-Guides/agc-storage-initialize-bucket-android-0000001276178118
title: 初始化存储实例
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-storage-initialize-bucket-android-0000001276178118
---

# 初始化存储实例

## 前提条件

* 您已[开通云存储服务](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-cloudstorage-enable-service-0000001275330014)。
* 您已[集成云存储SDK](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-cloudstorage-sdk-android-0000001055406164)。

## 操作步骤

在应用客户端使用云存储功能前，都需要初始化存储实例。

您可以调用[AGCStorageManagement.getInstance](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agcstoragemanagement-0000001054967269#section1143341012211)方法创建一个[AGCStorageManagement](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agcstoragemanagement-0000001054967269)对象来初始化默认存储实例。

```screen
"Java"
AGCStorageManagement storageManagement = AGCStorageManagement.getInstance();
```

```screen
"Kotlin"
val storageManagement = AGCStorageManagement.getInstance()
```

您也可以通过调用[AGCStorageManagement.getInstance](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agcstoragemanagement-0000001054967269#section1810317349494)(AGConnectInstance instance, String bucketName)创建一个[AGCStorageManagement](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agcstoragemanagement-0000001054967269)对象来初始化一个指定区域存储实例。如下所示，以指定中国区为例：

```screen
"Java" 
// 设置数据处理位置为CHINA 
AGConnectOptions cnOptions = new AGConnectOptionsBuilder().setRoutePolicy(AGCRoutePolicy.CHINA).build(this);
AGConnectInstance cnInstance = AGConnectInstance.buildInstance(cnOptions);
// 初始化指定区域的存储实例
AGCStorageManagement storageManagement= AGCStorageManagement.getInstance(cnInstance, "bucket name");
```

```screen
"Kotlin"
// 设置数据处理位置为CHINA 
val cnOptions = AGConnectOptionsBuilder().setRoutePolicy(AGCRoutePolicy.CHINA).build(this)
val cnInstance = AGConnectInstance.buildInstance(cnOptions)
// 初始化指定区域的存储实例
val storageManagement = AGCStorageManagement.getInstance(cnInstance, "bucket name")
```

