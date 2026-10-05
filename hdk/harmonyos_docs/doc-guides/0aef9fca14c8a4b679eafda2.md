---
name: document/cn/doc-guides/create_new_project-0000001053342414
title: 创建一个新的工程
uri: https://developer.huawei.com/consumer/cn/doc/doc-guides/create_new_project-0000001053342414
source: portal
---

# 创建一个新的工程

当您开始开发一个HarmonyOS应用/服务时，首先需要根据工程创建向导，创建一个新的工程，工具会自动生成对应的代码和资源模板。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612113422.57494794454778903885145074487818:50001231000000:2800:7CBE81FC3D2D286900EF7A70403D4C1D13DB46C4036B29F7A96E84054F254F85.png?needInitFileName=true?needInitFileName=true)

在运行DevEco Studio工程时，建议每一个运行窗口有2GB以上的可用内存空间。

#### 创建和配置新工程

DevEco Studio提供了基础的工程模板资源，不同模板支持的设备类型、API Version可能不同，在创建新工程前，请提前了解各模板的相关信息，具体请参考[工程模板和开发语言介绍](https://developer.harmonyos.com/cn/docs/documentation/doc-guides/device_template-0000001053702407)。

     1. 通过如下两种方式，打开工程创建向导界面。
        * 如果当前未打开任何工程，可以在DevEco Studio的欢迎页，选择**Create Project** 开始创建一个新工程。
        * 如果已经打开了工程，可以在菜单栏选择**File > New > Create Project**来创建一个新工程。
     2. 根据工程创建向导，在**HarmonyOS** 页签，选择需要的Ability工程模板，然后单击**Next** 。![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612113422.08376838214360469047156673929524:50001231000000:2800:521E3CF38748474412A2C42D78D12F6F25515B672E6475803BB9679D90AAE596.png?needInitFileName=true?needInitFileName=true)
     3. 在工程配置页面，需要根据向导配置工程的基本信息。
        * **Project name** ：工程的名称，可以自定义，由大小写字母、数据和下划线组成。
        * **Project type：** 工程的类型，标识该工程是一个传统方式的需要安装的应用（Application，简称应用），或[原子化服务](https://developer.harmonyos.com/cn/docs/documentation/doc-guides/atomic-service-definition-0000001090840664)（Atomic service，简称服务）。工程创建完毕后，如何将原子化服务修改为应用，请参考将原子化服务工程改为应用工程。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612113422.99837613981202455754010530146956:50001231000000:2800:BB58B2AA48C9D1BC8809A9C6523B06E48D89283F5B5676CFE15890DC35C5AA00.png?needInitFileName=true?needInitFileName=true)

如果是创建的原子化服务，则：

          * 原子化服务调试、运行时，在设备桌面上没有应用图标，请使用DevEco Studio的调试和运行功能，来启动原子化服务。
          * 原子化服务是免安装的，config.json中自动添加**installationFree** 字段，取值为“true”。
          * 如果entry模块的**installationFree** 字段为“true”，则其相关的所有hap模块的**installationFree** 字段都默认为“true”；如果entry模块的**installationFree** 字段为“false”，则其相关的所有hap模块可以配置为“true”或“false”。
          * 编译构建APP时，每个hap包大小不能超过10MB。

        * **Bundle name** ：软件包名称，默认情况下，应用/服务ID也会使用该名称，应用/服务发布时，应用/服务ID需要唯一。如果“Project type”选择了Atomic service，则Bundle name的后缀名必须是**.hmservice** 。
        * **Save location** ：工程文件本地存储路径，由大小写字母、数字和下划线等组成，不能包含中文字符。
        * **Compile SDK** ：应用/服务的目标API Version，在编译构建时，DevEco Studio会根据指定的Compile API版本进行编译打包。
        * **Model** ：应用支持的模式，API Version 4~8只支持FA模式。
        * **Enable Super Visual** ：支持低代码开发模式，部分模板支持低代码开发，可选择打开该开关。
        * **Language：** 开发语言。
        * **Compatible SDK** ：兼容的最低API Version。
        * **Device type：** 该工程模板支持的设备类型。
        * **Show in service center：** 是否在服务中心展示。如果**Project type** 为Atomic service，则会同步创建一个2*2宫格的服务卡片模板，同时还会创建入口卡片；如果**Project type** 为Application，则只会创建一个2*2宫格的服务卡片模板。具体请参考[创建服务卡片](https://developer.harmonyos.com/cn/docs/documentation/doc-guides/ide_service_widget-0000001078566997#section129724404610)。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612113422.68217612778903201261468315277393:50001231000000:2800:54C7B26AD6A6B1001FA0A8631C920189917B42740D0502D2010F187AE1B76E9C.png?needInitFileName=true?needInitFileName=true)

     4. 单击**Finish** ，工具会自动生成示例代码和相关资源，等待工程创建完成。

#### 将原子化服务工程改为应用工程

原子化服务是免安装的，如果创建的是原子化服务工程，config.json中会自动添加**installationFree** 字段，取值为“true”。如果要将原子化服务工程改成应用工程，将config.json中的**installationFree** 字段取值修改为“false”。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612113422.59987849249987709212231421999720:50001231000000:2800:2AEBDC66ABD75B6312F03285856F4F794C48299FC4B8C6803A4BF72056A82000.png?needInitFileName=true?needInitFileName=true)
