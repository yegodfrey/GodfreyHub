---
name: cangjie-guides/cj-camera-device-input
title: 设备输入
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-camera-device-input
nodePath: 媒体 / Camera Kit（相机服务） / 开发相机应用必选能力 / 设备输入
---

# 设备输入

在开发相机应用时，需要先参考开发准备[申请相关权限](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-camera-preparation)。

相机应用可通过调用和控制相机设备，完成预览、拍照和录像等基础操作。

#### 开发步骤

详细的API说明请参见[Camera API参考](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-multimedia-camera)。

  1. 导入camera接口，接口中提供了相机相关的属性和方法，导入方法如下。
         
         import kit.CameraKit.*
         import ohos.business_exception.BusinessException
         import kit.PerformanceAnalysisKit.Hilog
         import ohos.callback_invoke.Callback0Argument

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/bd/v3/xoewVcvrSwO4WsgHBHC-Bw/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111617Z&HW-CC-Expire=86400&HW-CC-Sign=A8BD2DB43554230D972BA43CC38D9DBC45F7A8D1F8445D930A1B940BA9705246)

在相机设备输入之前需要先完成相机管理，详细开发步骤请参见[相机管理](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-camera-device-management)。

  2. 通过[CameraManager](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-multimedia-camera#class-cameramanager)类中的[createCameraInput](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-multimedia-camera#func-createcamerainputcameradevice)方法创建相机输入流。
         
         class ErrorCallBack <: Callback0Argument {
             public open func invoke(error:?BusinessException): Unit {
                 if (let Some(e) <- error) {
                     Hilog.error(0,"","Camera input error code: ${e.code}","")
                 }
         
             }
         }
         
         func createInput(cameraDevice: CameraDevice, cameraManager: CameraManager): CameraInput {
             // 创建相机输入流。
             let cameraInput: CameraInput = cameraManager.createCameraInput(cameraDevice)
             // 监听cameraInput错误信息。
             cameraInput.on(CameraEvents.CameraError, cameraDevice, ErrorCallBack())
             // 打开相机。
             cameraInput.open()
             return cameraInput
         }

  3. 通过[getSupportedSceneModes](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-multimedia-camera#func-getsupportedscenemodescameradevice)方法，获取当前相机设备支持的模式列表，列表中存储了相机设备支持的所有模式[SceneMode](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-multimedia-camera#enum-scenemode)。
         
         func getSupportedSceneMode(cameraDevice: CameraDevice, cameraManager: CameraManager): Array<SceneMode> {
         // 获取相机设备支持的模式列表。
             let sceneModeArray: Array<SceneMode> = cameraManager.getSupportedSceneModes(cameraDevice)
             if (sceneModeArray.size > 0) {
                 for (index in 0..sceneModeArray.size) {
                     Hilog.info(0,"","Camera SceneMode : ${sceneModeArray[index]}")
                 }
                 return sceneModeArray
             } else {
                 Hilog.error(0,"","cameraManager.getSupportedSceneModes error")
                 return []
             }
         }

  4. 通过[getSupportedOutputCapability](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-multimedia-camera#func-getsupportedoutputcapabilitycameradevice-scenemode)方法，获取当前相机设备支持的所有输出流，如预览流、拍照流、录像流等。输出流在[CameraOutputCapability](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-multimedia-camera#class-cameraoutputcapability)中的各个profile字段中，根据相机设备指定模式[SceneMode](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-multimedia-camera#enum-scenemode)的不同，需要添加不同类型的输出流。
         
         func getSupportedOutputCapability(cameraDevice: CameraDevice, cameraManager: CameraManager, sceneMode: SceneMode): CameraOutputCapability {
             // 获取相机设备支持的输出流能力。
             let cameraOutputCapability: CameraOutputCapability = cameraManager.getSupportedOutputCapability(cameraDevice, sceneMode)
             // 以NormalPhoto模式为例，需要添加预览流、拍照流。
             // previewProfiles属性为获取当前设备支持的预览输出流。
             let previewProfilesArray: Array<Profile> = cameraOutputCapability.previewProfiles
             if (!previewProfilesArray.size == 0) {
                 Hilog.error(0,"","createOutput previewProfilesArray is empty")
             }
             //photoProfiles属性为获取当前设备支持的拍照输出流。
             let photoProfilesArray: Array<Profile> = cameraOutputCapability.photoProfiles
             if (photoProfilesArray.size == 0) {
                 Hilog.error(0,"","createOutput photoProfilesArray is empty")
             }
             return cameraOutputCapability
         }



