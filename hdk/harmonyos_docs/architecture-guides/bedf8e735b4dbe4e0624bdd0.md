---
name: document/cn/architecture-guides/burstshootingdemo-0000002757204695
title: 分段式拍照与图片批量压缩上传
uri: https://developer.huawei.com/consumer/cn/doc/architecture-guides/burstshootingdemo-0000002757204695
---

# 分段式拍照与图片批量压缩上传

## 场景介绍

分段式拍照与图片缓存管理是拍摄美化类应用的典型场景之一，如用户可以拍摄照片并自动保存至沙箱目录，浏览缓存图片并进行多选删除和zip压缩，压缩后的文件可以用于服务器上传或其他业务操作。

本示例基于[Camera Kit](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/camera-kit)实现相机拍照与沙箱存储功能，通过[fileIo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-fileio)实现文件读写，通过[zlib](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-zlib)实现图片压缩。

## 效果预览

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/86/v3/AnnitL3bSWerjeYPnUlsAg/zh-cn_image_0000002728804358.gif?HW-CC-KV=V1&HW-CC-Date=20260921T035900Z&HW-CC-Expire=31536000000&HW-CC-Sign=DF930DB4B0AA8E12CE5FEE4A64707B738BC4B0BD3262D165AE31F1D08BE2E7E6)

## 实现思路

* 进入拍照页面后初始化相机流程，相机通过[CameraManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-camera-cameramanager)进行管理。

  ```ts
    export async function initCamera(context: common.UIAbilityContext, surfaceId: string): Promise<void> {
      let cameraManager: camera.CameraManager = camera.getCameraManager(context);
      let targetCamera: camera.CameraDevice | undefined = getTargetCamera(cameraManager);
      cameraInput = cameraManager.createCameraInput(targetCamera);
      await cameraInput.open();
      let sceneModes: Array<camera.SceneMode> = cameraManager.getSupportedSceneModes(targetCamera);
      let cameraOutputCap: camera.CameraOutputCapability =
      cameraManager.getSupportedOutputCapability(targetCamera, camera.SceneMode.NORMAL_PHOTO);
      let previewProfile: camera.Profile = matchProfile(cameraOutputCap.previewProfiles, C.TARGET_RATIO);
      let photoProfile: camera.Profile = matchPhotoProfile(cameraOutputCap.photoProfiles, C.TARGET_RATIO);
      previewOutput = cameraManager.createPreviewOutput(previewProfile, surfaceId);
      photoOutput = cameraManager.createPhotoOutput(photoProfile); 
      photoSession = cameraManager.createSession(camera.SceneMode.NORMAL_PHOTO) as camera.PhotoSession;
      let configured: boolean = await configureSession(photoSession, cameraInput, previewOutput, photoOutput);
    }
  ```

* 点击拍照按钮后通过photoOutput的[capture](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-camera-photooutput#capture-2)方法执行拍照任务。

  ```ts
    export function capturePhoto(): void {
      let photoCaptureSetting: camera.PhotoCaptureSetting = {
        quality: camera.QualityLevel.QUALITY_LEVEL_HIGH,
        rotation: camera.ImageRotation.ROTATION_0
      };
      photoOutput?.capture(photoCaptureSetting, (err: BusinessError) => {
        if (err) {
          Logger.error(TAG, `Failed to capture the photo ${err.message}`);
          return;
        }
        Logger.info(TAG, 'Capture photo success.');
      });
    }
  ```


* 分段式拍照的实现。
  1. 获取URI并更新UI。构建PhotoInfo对象存入@State修饰的数组，触发ForEach渲染更新底部list列表。
  2. 拷贝到沙箱：通过[fileIo.copyFile()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-file-fs#fileiocopyfile)将照片从媒体库URI复制到应用filesDir/photos/目录，文件名用时间戳+随机数防重复。

     ```ts
       photoOutput.on('photoAssetAvailable',
         async (err: BusinessError, photoAsset: photoAccessHelper.PhotoAsset): Promise<void> => {
           let uri = photoAsset.uri;
           let info = new PhotoInfo();
           info.uri = uri;
           info.sandboxPath = '';
           photoListTarget?.push(info);
           savePhotoToSandbox(context, uri)
       });
     ```

     ```ts
     async function savePhotoToSandbox(context: common.UIAbilityContext, uri: string): Promise<string> {
       let photosDir: string = `${context.filesDir}/photos`;
       try {
         fs.mkdirSync(photosDir);
       } catch (err) {
         let error = err as BusinessError;
         Logger.error(TAG, `mkdir failed: ${error.code}, ${error.message}`);

       }
       let timestamp: number = Date.now();
       let rand = cryptoFramework.createRandom();
       let randomData: cryptoFramework.DataBlob = rand.generateRandomSync(2);
       let randomSuffix: number = (randomData.data[0] << 8 | randomData.data[1]) % 10000;
       let filename: string = `photo_${timestamp}_${randomSuffix}.jpg`;
       let destPath: string = `${photosDir}/${filename}`;
       let srcFile: fs.File | undefined = undefined;
       try {
         srcFile = await fs.open(uri, fs.OpenMode.READ_ONLY);
         await fs.copyFile(srcFile.fd, destPath);
         return destPath;
       } catch (error) {
         let err = error as BusinessError;
         Logger.error(TAG, `savePhotoToSandbox failed: ${err.code}, ${err.message}`);
         return '';
       } finally {
         if (srcFile !== undefined) {
           await fs.close(srcFile);
         }
       }
     }
     ```

* 将选择的照片集压缩成zip文件，压缩后的文件可在/data/app/el2/100/base/com.example.burstshootingdemo/haps/entry/files/zips目录下查看。

  ```ts
   private async compressSelectedPhotos(): Promise<void> {
     // ...
      try {
        fs.mkdirSync(tempDir);
        for (let i = 0; i < selected.length; i++) {
          let srcPath: string = `${photosDir}/${selected[i].name}`;
          let destPath: string = `${tempDir}/${selected[i].name}`;
          fs.copyFileSync(srcPath, destPath);
        }

        let options: zlib.Options = {
          level: zlib.CompressLevel.COMPRESS_LEVEL_DEFAULT_COMPRESSION,
          memLevel: zlib.MemLevel.MEM_LEVEL_DEFAULT,
          strategy: zlib.CompressStrategy.COMPRESS_STRATEGY_DEFAULT_STRATEGY
        };

        await zlib.compressFile(tempDir, zipOutPath, options);

        let stat = fs.statSync(zipOutPath);
      } catch (error) {
      // ...
      } finally {
       // ...
      }
    }
  ```

## 环境准备

* 本示例基于DevEco Studio 6.1.1 Release版本进行编译运行。
* 本示例基于API Version 24 Release版本进行开发与验证。

## 权限说明

* 获取相机权限：[ohos.permission.CAMERA](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/permissions-for-all-user#ohospermissioncamera)。

## 工程目录

```ts
├──entry/src/main/ets                              // 代码区
│  ├──constants
│  │  └──CameraConstants.ets                       // 相机与布局常量
│  ├──entryability
│  │  └──EntryAbility.ets                          //程序入口Ability
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets                    // 备份Ability
│  ├──model
│  │  └──PhotoInfo.ets                             //照片信息模型
│  ├──pages
│  │  ├──Index.ets                                 // 首页（导航入口）
│  │  ├──CameraPage.ets                            // 拍照页面
│  │  └──ImageCachePage.ets                        //图片缓存页面
│  └──utils
│     ├──CameraManager.ets                         // 相机管理（初始化/拍照/闪光灯/切换）
│     ├──Logger.ets                                // 日志工具
│     └──PermissionManager.ets                     // 权限管理
└──entry/src/main/resources                        // 应用资源目录
```

## 参考文档

[Camera Kit](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/camera-kit)

[fileIo文件管理](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-fileio)

[zlib压缩与解压缩](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-zlib)

[photoAccessHelper相册管理](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-photoaccesshelper-photoaccesshelper)

## 代码下载

[分段式拍照与图片批量压缩上传示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260916181331.13436664910485921429053085341632:50001231000000:2800:01A56867C27BADEFB9A9007C7685E63FE8442FCC4D233752EDA589E3D11E4941.zip?needInitFileName=true)

