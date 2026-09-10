---
name: cangjie-references/cj-syscap
title: 系统能力SystemCapability使用指南
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-syscap
nodePath: API参考概述 / 系统能力SystemCapability使用指南
---

# 系统能力SystemCapability使用指南

#### 概述

#### [h2]系统能力与 API

SysCap，全称SystemCapability，即系统能力，指操作系统中每一个相对独立的特性，如蓝牙，WIFI，NFC，摄像头等，都是系统能力之一。每个系统能力对应多个API，随着目标设备是否支持该系统能力共同存在或消失，也会随着DevEco Studio一起提供给开发者做联想。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/80/v3/_O5XkX_5T62emsyPiC5GKw/zh-cn_image_0000002701819508.png?HW-CC-KV=V1&HW-CC-Date=20260903T111625Z&HW-CC-Expire=86400&HW-CC-Sign=65BC3754D3CDBF8D91821F8270C28B2003E3E6579345FAA6C300BFEAB36251C6)

开发者可以在[SysCap列表](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-phone-syscap-list)中查询HarmonyOS的能力集。

#### [h2]支持能力集，联想能力集与要求能力集

支持能力集，联想能力集与要求能力集都是系统能力的集合。

支持能力集描述的是设备能力，要求能力集描述的是应用能力。若应用A的要求能力集是设备N的支持能力集的子集，则应用A可分发到设备N上安装运行，否则不能分发。

联想能力集是该应用开发时，DevEco Studio可联想的API所在的系统能力集合。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7b/v3/h8_6Ai-HRkK__8SA3XIrXg/zh-cn_image_0000002731538789.png?HW-CC-KV=V1&HW-CC-Date=20260903T111625Z&HW-CC-Expire=86400&HW-CC-Sign=ECF27E6047E82E9F459BE3FE0F4B7E3BCB481EAE814A3B4C7F233260CB3811D9)

#### [h2]设备与支持能力集

每个设备根据其硬件能力，对应不同的支持能力集。

SDK将设备分为两组，典型设备和自定义设备，典型设备的支持能力集由HarmonyOS来定义，自定义设备由设备厂商给出。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/88/v3/mTQKyGJJRMiMpKtXIPYfjQ/zh-cn_image_0000002701659598.png?HW-CC-KV=V1&HW-CC-Date=20260903T111625Z&HW-CC-Expire=86400&HW-CC-Sign=3870384E16E9D08446CCE119CC3ECCD98EB499E5E9CBBD5C78B119BB1C792C45)

#### [h2]设备与SDK能力的对应

SDK向DevEco Studio提供全量API，DevEco Studio识别开发者项目中选择的设备形态，找到该设备的支持能力集，筛选支持能力集包含的API并提供API联想。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/10/v3/uzT_uK7CTReFgebRR5ow1w/zh-cn_image_0000002731378813.png?HW-CC-KV=V1&HW-CC-Date=20260903T111625Z&HW-CC-Expire=86400&HW-CC-Sign=B30F3F5366414A4C2DBE094FB41DB35A374A8D02688B7EF2B74EE50E772D4CDA)

#### SysCap开发指导

#### [h2]加入自定义syscap

在某具体的设备型号上，能力可能超出工程默认设备定义的能力集范围，如果需要使用此部分能力，需要额外配置自定义的syscap。

请在DevEco Studio工程的模块/src/main目录下，手动创建syscap.json文件。如在entry/src/main目录右键，点击New > File。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/87/v3/PFWgCgxVSRaL5G5Pd4Og7w/zh-cn_image_0000002701819510.png?HW-CC-KV=V1&HW-CC-Date=20260903T111625Z&HW-CC-Expire=86400&HW-CC-Sign=47577D485EC294E5350A0F7AAF66C8D4E66B192A077F2B8E8FBC068DA9EFA7DA)

新建文件命名为syscap.json。打开新建的syscap.json文件。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/35/v3/IJa-g0FRTUuKbQvwaG8CFA/zh-cn_image_0000002731538791.png?HW-CC-KV=V1&HW-CC-Date=20260903T111625Z&HW-CC-Expire=86400&HW-CC-Sign=905C20553A648E56A3410D90B16F27E1358748BD0F3CFAD53238D7F2918D24A4)

按如下格式填入所需要使用的SysCaps。以使用NFC能力为例，syscap.json文件示例如下。
    
    
    {
      "devices": {
        "general": [
          // 每一个典型设备对应一个syscap支持能力集，可配置多个典型设备，应与工程所选择的设备一致
          "phone"
        ]
      },
      "development": {
        // addedSysCaps内的sycap集合与devices中配置的各设备支持的syscap集合的并集共同构成联想能力集。
        "addedSysCaps": [
          "SystemCapability.Communication.NFC.Core",
          "SystemCapability.Communication.NFC.CardEmulation",
          "SystemCapability.Communication.NFC.Tag"
        ]
      }
    }

#### [h2]单设备应用开发

默认应用的联想能力集，要求系统能力集和设备的支持系统能力集相等，开发者修改要求能力集需要慎重。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/57/v3/3gMAt1Y1QG2TZ7DgX_gsXg/zh-cn_image_0000002701659600.png?HW-CC-KV=V1&HW-CC-Date=20260903T111625Z&HW-CC-Expire=86400&HW-CC-Sign=DBDD2117A4D74BF191CAE268E009CE910117D43829883D899707D47C40CA4D72)

#### [h2]跨设备应用开发

默认应用的联想能力集是多个设备支持能力集的并集，要求能力集则是交集。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b9/v3/cwGCVEnTRhCrLelYQ9wcbw/zh-cn_image_0000002731378815.png?HW-CC-KV=V1&HW-CC-Date=20260903T111625Z&HW-CC-Expire=86400&HW-CC-Sign=129F45B74358B05EB56B62F57B5E86DCA15A7F2FD416CC4D25BB705BB1F83B22)

#### [h2]判断API是否可以使用

当前提供了仓颉 API用于帮助判断某个API是否可以使用。
    
    
    import ohos.base.canIUse
    
    if(canIUse("SystemCapability.ArkUI.ArkUI.Full")){
        Hilog.info(0, "SysCap", "支持系统能力SystemCapability.ArkUI.ArkUI.Full")
    }else{
        Hilog.info(0, "SysCap", "不支持系统能力SystemCapability.ArkUI.ArkUI.Full")
    }

#### [h2]不同设备相同能力的差异检查

即使是相同的系统能力，在不同的设备下，也会有能力的差异。

以下示例通过获取蓝牙已连接设备进行举例：
    
    
    import kit.ConnectivityKit.*
    import kit.PerformanceAnalysisKit.Hilog
    import ohos.business_exception.BusinessException
    
    // 在使用接口时可通过try..catch捕获异常。如果接口的SysCap不支持当前设备，将返回801错误码。
    try {
        let hdfProfile = createHfpAgProfile()
        let retArray = hdfProfile.getConnectedDevices()
    } catch (e: BusinessException) {
        Hilog.info(0, "Bluetooth", "errCode: ${e.code}, errMessage: ${e.message}")
    }

#### [h2]设备间的SysCap差异如何产生的

设备的SysCap因产品解决方案厂商拼装的部件组合不同而不同，整体流程如下图：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fb/v3/8qRcrDvoRZmtkU4UmPIBWg/zh-cn_image_0000002701819512.png?HW-CC-KV=V1&HW-CC-Date=20260903T111625Z&HW-CC-Expire=86400&HW-CC-Sign=9B50A081EBBE5D34C32FCED837C6B8DF285CDD6F621B2BCDBA40AD6CBA024CC6)

  1. 一套操作系统源码由可选和必选部件集组成，不同的部件为对外体现的系统能力不同，即部件与 SysCap 之间映射关系。

  2. 发布归一化的SDK，API与SysCap之间存在映射关系。

  3. 产品解决方案厂商按硬件能力和产品诉求，可按需拼装部件。

  4. 产品配置的部件可以是系统部件，也可以是三方开发的私有部件，由于部件与SysCap间存在映射，所以拼装后即可得到该产品的SysCap集合。

  5. SysCap集编码生成 PCID (Product Compatibility ID， 产品兼容性标识)，应用开发者可将PCID导入DevEco Studio，解码成SysCap，开发时对设备的SysCap差异做兼容性处理。

  6. 部署到设备上的系统参数中包含了SysCap集，系统提供了native的接口和应用接口，可供系统内的部件和应用查询某个SysCap是否存在。

  7. 应用开发过程中，应用必要的SysCap将被编码成RPCID（Required Product Compatibility ID），并写入应用安装包中。应用安装时，包管理器将解码RPCID得到应用需要的 SysCap，与设备当前具备的SysCap比较，若应用要求的SysCap都被满足，则安装成功。

  8. 应用运行时，可通过canIUse接口查询设备的SysCap，保证在不同设备上的兼容性。



