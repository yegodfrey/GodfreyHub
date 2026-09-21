---
name: document/cn/AppGallery-connect-Guides/agc-cloudstorage-upload-harmonyos-ts-0000001629995600
title: 上传文件
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-cloudstorage-upload-harmonyos-ts-0000001629995600
---

# 上传文件

通过云存储SDK，您可以快速上传本地设备上的数据到云端。

## 前提条件

* 您已[开通云存储服务](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-cloudstorage-enable-service-0000001275330014)。
* 您已[初始化存储实例](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-storage-initialize-bucket-harmonyos-ts-0000001678555281)。
* 您已通过认证服务登录应用。

## 操作步骤

调用[Storage.upload](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/harmonyos-ts-storage-storage-0000001679582393#section276116409382)方法将本地文件传入到预先规划的云端地址中。"localPath"可以是本地文件的URI或者应用沙箱路径。

```screen
// 1. 获取本地文件路径。getLocalPicPath由开发者自行实现，函数返回本地文件的路径或URI即可。
let localPicPath = await getLocalPicPath();
// 2. 上传至云端
let uploadResult = await storage.upload({
    localPath: localPicPath,
    cloudPath: 'image/demo.jpg',
    onUploadProgress: (p: ProgressEvent) => {
        console.log(`onUploadProgress:bytes:${p.loaded} total:${p.total}`)
    }
})
// 3. 打印上传结果
console.log(`bytesTransferred:${uploadResult.bytesTransferred} totalByteCount:${uploadResult.totalByteCount}`)
```

> 说明
>
> * 上传文件时，会对云端文件的名称和大小进行严格的检查，具体限制请参见[使用限制](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-cloudstorage-restrictions-0000001093263535#section1759375325210)。
> * 待上传文件最大为1GB。若上传任务异常中断，云存储SDK会根据设置的最大重试次数进行重试上传。
> * 若待上传的本地文件不是应用沙箱中的文件，则需确保应用已申请相应的文件读写权限，具体请参考[访问控制概述](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/access-token-overview-V5)。

## 更多信息

* 文件成功上传到云端后，您可以通过云存储SDK[获取文件的下载地址](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-cloudstorage-getdownloadurl-harmonyos-ts-0000001678875301)或[下载文件](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-cloudstorage-download-harmonyos-ts-0000001679174865)。
* 您可以通过云存储SDK的API[列举云端某个目录下的所有文件或子目录](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-cloudstorage-list-harmonyos-ts-0000001630315476)。
* 当您不再需要云端的文件时，可以调用云存储SDK的API在应用客户端[删除文件](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-cloudstorage-delete-harmonyos-ts-0000001678675161)。
* 除了在应用客户端通过云存储SDK的API来上传文件，您还可以直接[在AGC控制台以可视化的方式来上传文件](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-storage-manage-file-0000001281134398#section6704135012516)。

