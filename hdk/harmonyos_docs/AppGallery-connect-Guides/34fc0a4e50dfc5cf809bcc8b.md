---
name: document/cn/AppGallery-connect-Guides/agc-cloudstorage-createreference-nodejs-0000001055327465
title: 创建Bucket和File对象
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-cloudstorage-createreference-nodejs-0000001055327465
---

# 创建Bucket和File对象

如果您需对存储实例进行操作，例如上传文件、列举文件等，需要创建存储实例的Bucket对象。如果您需要对文件进行操作，例如下载文件、删除文件、修改文件元数据等，需要创建文件的File对象。  

#### 前提条件

* 您已[开通云存储服务](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-cloudstorage-enable-service-0000001275330014)。
* 您已[初始化存储实例](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-storage-initialize-bucket-nodejs-0000001281809822)。  

#### 创建Bucket对象

如果您需要对存储实例进行操作，您可调用[StorageManagement.bucket](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/storagemanagement-0000001057931714#section1426116294172)方法创建[Bucket](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/bucket-0000001057141584)对象。

```
const bucket = storage.bucket('bucketname'); 
```

bucketname为存储实例名称，您可以在"云开发（Serverless）\> 云存储"页面中的存储实例框中获取。  

#### 创建File对象

如果您需要下载、删除文件及更新文件的元数据，均需要调用[Bucket.file](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/bucket-0000001057141584#section5265103052913)方法创建对应文件的[File](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/file-0000001056171313)对象。

```
const file = bucket.file('images/demo.jpg');
```

#### 更多信息

* 创建Bucket对象后，您可以调用[Bucket](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/bucket-0000001057141584)的相关方法对存储实例进行相关操作：
  * 获取当前目录的文件列表，例如调用[getFiles](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/bucket-0000001057141584#section8826145993219)获取当前目录下的文件列表引用。
  * 对存储实例进行新增、删除、跨域配置等操作。
* 创建File对象后，您可以调用[File](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/file-0000001056171313)的相关方法对文件进行操作：
  * 对文件进行拷贝、读取、下载、删除等。
* 对文件的元数据进行读取、修改等。  
