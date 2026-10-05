---
name: document/cn/doc-guides/run_fitnesswatch-0000001054134240
title: 在Lite Wearable中运行应用/服务
uri: https://developer.huawei.com/consumer/cn/doc/doc-guides/run_fitnesswatch-0000001054134240
source: portal
---

# 在Lite Wearable中运行应用/服务

在Lite Wearable中安装和运行HarmonyOS应用/服务，依赖华为手机上的**运动健康** 和**应用调测助手** APP辅助进行。

#### 前提条件

     * 已将**运动健康APP** 升级至最新版本。
     * 从华为应用市场安装**应用调测助手APP** 。
     * 在Lite Wearable中运行应用/服务，需要根据[为应用/服务进行签名](https://developer.harmonyos.com/cn/docs/documentation/doc-guides/ide_debug_device-0000001053822404#section677893315228)章节，提前对应用/服务进行签名。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612113436.78998083427900801614386813171492:50001231000000:2800:97DE13D649FDEC9E757B912CB5E94CDCE638947EB860731C6DC0E8CE442BA7D5.png?needInitFileName=true?needInitFileName=true)

因Lite Wearable设备无法与DevEco Studio进行连接，因此在对Lite Wearable应用/服务签名时，不能采用自动化签名方案，只能使用[手动方式申请签名文件](https://developer.huawei.com/consumer/cn/doc/distribution/app/agc-help-harmonyos-debugapp-manual-0000001177608893)，然后再手动配置签名信息。

#### 操作步骤

     1. 使用USB连接线将手机和电脑进行连接，确保连接状态是正常的。
     2. 手机与电脑使用USB连接时，在手机上选择**传输文件** 连接方式。
     3. 在工程目录中的**Build > outputs >hap**中选择生成的HAP，通过手工拷贝的方式将HAP拷贝至手机中的“/sdcard/haps/”目录。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612113436.84564526230722951379119056344877:50001231000000:2800:64100B87BE82211EDA0F3E37DA0E85F4D4FCFE38D3A4ECDF8EC65B55F767133D.png?needInitFileName=true?needInitFileName=true)

如果在手机存储根目录下没有“haps”文件夹，请手工创建后再拷贝HAP到该文件夹下。

     4. 将Lite Wearable通过蓝牙与华为手机进行连接。
        1. 进入**运动健康** APP，在设备页签中，单击**添加设备** 按钮。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612113436.70608853358905374500808702367529:50001231000000:2800:DA8C75FC5D26D9F3B5A794220D17687FB3F8A58FD75044233E6ED55BC1429F96.png?needInitFileName=true?needInitFileName=true)

        2. 进入**手表** 列表中，选择对应的Lite Wearable型号。
        3. 单击**开始配对** ，按照界面指引完成Lite Wearable与华为手机之间的连接。
     5. 打开**应用调测助手** APP，界面会显示已经与华为手机连接的Lite Wearable。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612113437.96708322059220892176365297004409:50001231000000:2800:12A42B32EDF98264A9C89413B7A5251A9892D270E0B1286BA3C0A8720AFC2B09.png?needInitFileName=true?needInitFileName=true)

如果Lite Wearable与华为手机未连接，请单击**应用调测助手** APP界面的**连接设备** 按钮，手机会自动打开**运动健康** APP添加Lite Wearable。

     6. 单击**应用调测助手** APP界面中的**应用管理** 按钮，选择需要安装的HarmonyOS安装包进行安装。
     7. 安装完成后，单击Lite Wearable中的应用图标，运行HarmonyOS应用。
