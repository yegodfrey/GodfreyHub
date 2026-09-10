---
name: document/cn/AppGallery-connect-Guides/agc-cloudstorage-delete-ios-0000001172821309
title: 删除文件
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-cloudstorage-delete-ios-0000001172821309
---

# 删除文件

当云端的文件不需要时，您可以通过调用云存储SDK的API在应用客户端删除云端的文件。  
![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20240821163228.33565480695763024124203942404819:50001231000000:2800:B72C47CDA030C18598E9CB2A979FFED35ED2BD5B4E8AA4D528190EBC83DDD8A8.png?needInitFileName=true?needInitFileName=true)  
删除操作不可逆，一旦执行，文件会被物理删除，不可找回。  

#### 前提条件

* 您已[开通云存储服务](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-cloudstorage-enable-service-0000001275330014)。
* 您已[初始化存储实例](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-storage-initialize-bucket-ios-0000001333893477)。
* 您已[上传文件](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-cloudstorage-upload-ios-0000001172981227)。  

#### 操作步骤

1. 调用[\[AGCStorage referenceWithPath:\]](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agcstorage-0000001172981557#section9635163510919)创建需要删除文件的引用。  

   ```
   "Objective-C"
   //storage为已经初始化的AGCStorage实例
   AGCStorageReference *reference = [storage referenceWithPath:@"images/demo.jpg"];
   ```

   ```
   "Swift"
   //storage为已经初始化的AGCStorage实例
   let reference = storage.reference(withPath:"images/demo.jpg")
   ```

2. 调用[\[AGCStorageReference deleteFile\]](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agcstoragereference-0000001126781968#section18299754193015)删除云端文件。  

   ```
   "Objective-C"
   [reference deleteFile];
   ```

   ```
   "Swift"
   reference.deleteFile()
   ```

#### 更多信息

除了在应用客户端通过云存储SDK的API来删除文件，您还可以直接[在AGC控制台以可视化的方式来删除文件](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-storage-manage-file-0000001281134398#section937855812710)。  
