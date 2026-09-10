---
name: cangjie-guides/cj-common_problem_of_application
title: 应用程序包常见问题
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-common_problem_of_application
nodePath: 基础入门 / 开发基础知识 / 应用程序包常见问题
---

# 应用程序包常见问题

#### 如何获取签名信息中的指纹信息

  1. 通过调用接口获取。

可以调用[bundleManager.getBundleInfoForSelf](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-bundle_manager#static-func-getbundleinfoforselfint32)获取自身的BundleInfo应用包信息，应用包信息中包含signatureInfo签名信息，签名信息中包含fingerprint指纹信息。
         
         import ohos.base.*
         import kit.AbilityKit.*
         import ohos.business_exception.BusinessException
         import ohos.hilog.Hilog
         
         let bundleFlags =  BundleFlag.GET_BUNDLE_INFO_WITH_APPLICATION | BundleFlag.GET_BUNDLE_INFO_WITH_SIGNATURE_INFO
         try {
             let res = BundleManager.getBundleInfoForSelf(bundleFlags)
             let fingerprint = res.signatureInfo.fingerprint
             Hilog.info(1, "1", "info", "getBundleInfoForSelf successfully, fingerprint: ${fingerprint}")
         } catch (e: BusinessException)  {
             Hilog.error(1, "info", "Failed to getBundleInfoForSelf. Code is ${e.code}, message is ${e.message}")
         }

  2. 通过[bm工具](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-bm-tool)获取fingerprint指纹信息。
         
         hdc shell
         # 需将com.example.myapplication替换为实际应用的包名
         bm dump -n com.example.myapplication | grep fingerprint

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b3/v3/-e7D0ms1QCq0i1OcXhZLSw/zh-cn_image_0000002713398630.png?HW-CC-KV=V1&HW-CC-Date=20260908T090110Z&HW-CC-Expire=86400&HW-CC-Sign=39FBAF185E528DD0290648C921D078CE6E353F05364B963522878FCDE0DE75EF)

  3. 通过.cer证书文件获取，可以参考[APP备案FAQ](https://developer.huawei.com/consumer/cn/doc/app/50130)中HarmonyOS应用/元服务如何获取公钥和签名信息。

  4. 通过keytool工具获取，详情参考[生成签名证书指纹](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/appgallerykit-preparation-game-0000001055356911#section147011294331)。




#### 什么是appIdentifier

appIdentifier是[Profile文件](https://developer.huawei.com/consumer/cn/doc/app/agc-help-release-profile-0000002248341090)中的一个字段，为应用的唯一标识，在应用签名时生成，其中：

  1. 通过DevEco Studio工具[自动签名](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-signing-auto)生成，此时的appIdentifier字段是随机生成的，在不同的设备上签名、或者重新签名均会导致appIdentifier字段不一致。

  2.      1. 采用手动签名，并通过AppGallery Connect平台申请证书，此时申请[调试Profile](https://developer.huawei.com/consumer/cn/doc/app/agc-help-debug-profile-0000002248181278)或者[发布Profile](https://developer.huawei.com/consumer/cn/doc/app/agc-help-release-profile-0000002248341090)中的appIdentifier字段是固定的，该字段来源于AppGallery Connect创建应用时生成的[APP ID](https://developer.huawei.com/consumer/cn/doc/app/agc-help-create-app-0000002247955506#section16423184171915)，由云端统一分配。此时的appIdentifier字段在应用全生命周期中不会发生变化，包括版本升级、证书变更、开发者公私钥变更、应用转移等。



因此，在跨设备调试、跨应用交互调试、或者多用户共同开发且需要共享密钥等要求appIdentifier不变的场景下，推荐使用手动签名，具体场景请参考[使用场景说明](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-signing)。

#### 如何获取应用信息中appIdentifier

  * 可以调用[bundleManager.getBundleInfoForSelf](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-bundle_manager#static-func-getbundleinfoforselfint32)获取自身的BundleInfo应用包信息，应用包信息中包含signatureInfo签名信息，签名信息中包含appIdentifier信息。
        
        import kit.AbilityKit.*
        import ohos.business_exception.BusinessException
        import ohos.hilog.Hilog
        
        let bundleFlags =  BundleFlag.GET_BUNDLE_INFO_WITH_APPLICATION | BundleFlag.GET_BUNDLE_INFO_WITH_SIGNATURE_INFO
        try {
            let res = BundleManager.getBundleInfoForSelf(bundleFlags)
            let appIdentifier = res.signatureInfo.appIdentifier
            Hilog.info(1, "1", "info", "getBundleInfoForSelf successfully, appIdentifier: ${appIdentifier}")
        } catch (e: BusinessException)  {
            Hilog.error(1, "info", "Failed to getBundleInfoForSelf. Code is ${e.code}, message is ${e.message}")
        }

  * 通过[bm工具](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-bm-tool)获取。
        
        hdc shell
        # 需将com.example.myapplication替换为实际应用的包名
        bm dump -n com.example.myapplication | grep appIdentifier

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/bc/v3/Tb-73n1PSjybn_8q1gNjSA/zh-cn_image_0000002743077561.png?HW-CC-KV=V1&HW-CC-Date=20260908T090110Z&HW-CC-Expire=86400&HW-CC-Sign=2AB18E6171567FB7274E79ED42B5ABA19E5255C304D51CD37FE9686931A8FC0F)




#### 什么是appId

appId是应用的唯一标识，由包名、下划线和证书公钥的Base64编码组成。由于appId和签名信息相关，如果签名证书的公钥更换，appId也会跟随变化，所以应用的唯一标识推荐使用appIdentifier。

#### 如何获取应用信息中的appId

  * 可以调用[bundleManager.getBundleInfoForSelf](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-bundle_manager#static-func-getbundleinfoforselfint32)获取自身的BundleInfo应用包信息，应用包信息中包含signatureInfo签名信息，签名信息中包含appIdentifier信息。
        
        import kit.AbilityKit.*
        import ohos.business_exception.BusinessException
        import ohos.hilog.Hilog
        
        let bundleFlags =  BundleFlag.GET_BUNDLE_INFO_WITH_APPLICATION | BundleFlag.GET_BUNDLE_INFO_WITH_SIGNATURE_INFO
        try {
            let res = BundleManager.getBundleInfoForSelf(bundleFlags)
            let appId = res.signatureInfo.appId
            Hilog.info(1, "1", "info", "getBundleInfoForSelf successfully, appId: ${appId}")
        } catch (e: BusinessException)  {
            Hilog.error(1, "info", "Failed to getBundleInfoForSelf. Code is ${e.code}, message is ${e.message}")
        }

  * 通过[bm工具](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-bm-tool)获取。
        
        hdc shell
        # 需将com.example.myapplication替换为实际应用的包名
        bm dump -n com.example.myapplication |grep '"appId":'

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/71/v3/2MtJw0xdTSS883nySdySQw/zh-cn_image_0000002713558600.png?HW-CC-KV=V1&HW-CC-Date=20260908T090110Z&HW-CC-Expire=86400&HW-CC-Sign=FC812EF373BDD55A250CAEB7F6394543670AC20D745433A620A4FC7053F8C7FD)



