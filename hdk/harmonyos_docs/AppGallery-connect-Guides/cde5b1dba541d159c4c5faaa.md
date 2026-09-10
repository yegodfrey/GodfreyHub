---
name: document/cn/AppGallery-connect-Guides/agc-cloudstorage-download-web-0000001055326213
title: 获取文件的下载地址
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-cloudstorage-download-web-0000001055326213
---

# 获取文件的下载地址

文件上传到云端后，您可以通过云存储SDK获取云端文件的下载地址。  

#### 前提条件

* 您已[开通云存储服务](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-cloudstorage-enable-service-0000001275330014)。
* 您已[初始化存储实例](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-storage-initialize-bucket-web-0000001333920769)。
* 您已[上传文件](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-cloudstorage-upload-web-0000001055406166)。  

#### 操作步骤

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20240821163236.24874591500560251715160043535865:50001231000000:2800:EA6F9A59215261FDF7C9B708ACC6CC4F5F6ED95283FF51A241BE3866E67826E6.png?needInitFileName=true?needInitFileName=true)  
在下载文件前，您可以先[获取文件的元数据](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-cloudstorage-metadata-web-0000001054766195#ZH-CN_TOPIC_0000001054766195__li779174573913)，查看后再决定是否要下载文件。

1. 调用[StorageManagement.storageReference](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/storagemanagement-0000001055096686#section012312924313)创建需要下载文件的引用。

   ```
   var storageReference = storage.storageReference();
   var reference = storageReference.child('images/demo.jpg');
   ```

2. 调用[StorageReference.getDownloadURL](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/storagereference-0000001055216725#section106353585619)获取下载地址。

   ```
   reference.getDownloadURL()
   .then(function(downloadURL){})
   .catch((err) => {});
   ```

3. 您可以通过将上一步获取的下载地址拷贝到浏览器的导航窗口体验文件的下载。  

#### 更多信息

除了在应用客户端通过云存储SDK的API来获取文件的下载地址，您还可以直接[在AGC控制台以可视化的方式来下载文件](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-storage-manage-file-0000001281134398#section116002011710)。  
