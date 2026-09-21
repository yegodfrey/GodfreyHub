---
name: document/cn/AppGallery-connect-Guides/pga-package-0000002089873625
title: 打包
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/pga-package-0000002089873625
---

# 打包

## 导出为Openharmony工程

### 导出步骤

1. 点击"File > Build Settings"，进入"Build Settings"页面。 ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260212110216.37750047485964625221685539025728:50001231000000:2800:881C871EFA9180A251B350E2E9715DCE85F450D2CE45E2B72A134105559353EE.png)

2. 在左侧"Platform"中选择"OpenHarmony"选项，并在右侧"OpenHarmony"中配置相关信息。 ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260212110216.66859119304041561699981120754584:50001231000000:2800:E933D45FBCF900BAC9798CA9F6BAE6B2A46975D26032FFC0511D4F6FF3A27D42.png)

3. 勾选"Export Project"选项，点击"Export"，导出OpenHarmony工程。 说明
   >
   > 如果是打包为HAP包，则不需要勾选"Export Project"选项。

   ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260212110216.68556630677549177955372257730423:50001231000000:2800:F13CD892578080A27FC4AE989C09DEAF026B2EB97F90B26E21BAF6CBDC526ACF.png)

### 检查PGA优化是否生效

导出工程后打开工程文件夹，如果看到在工程的"libs > default > arm64-v8a"文件夹下增加了libpga.so、libpgacore.so和libsleef.so3个so后缀的文件，同时在运行日志文件内搜索"RoutePgaMethod"并出现相关内容，则说明PGA优化生效。

![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260212110216.08206895952874550618079833647313:50001231000000:2800:5A880DD095300B369021BF05E86527C551C53A9D68489BDED4F42FF461252031.png)

## 导出为Windows工程

### 导出步骤

1. 点击"File > Build Settings"，进入"Build Settings"页面。 ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260212110216.27601155659612917553571035680849:50001231000000:2800:CD792E087577417EDB6D4E53A338DED0B86AA3CD1E7AF6B3DCD470D53038DDB4.png)

2. 在左侧"Platform"中选择"Windows, Mac, Linux"选项，并在右侧"Windows, Mac, Linux"中配置相关信息。 注意
   >
   > 目前"Target Platform"选项仅支持选择Windows平台。

   ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260212110217.85725410133584642331377753665924:50001231000000:2800:B140C32BC779EC98A6C7EB84B55413507CC754FE16A0D5DF3B45949CF59020D0.png)
3. 点击"Player Settings"，在"Settings for Windows, Mac, Linux > Other Settings > Configuration"的"Scripting Backend"选择"IL2CPP"选项。 注意
   >
   > 目前"Scripting Backend"选项仅支持选择"IL2CPP"。

   ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260212110217.80763664160562867907611000139321:50001231000000:2800:FA511FF1C45451AB4DD7C2942DE0B1DA9B1ADAE81FEF235FBEE062F95568D576.png)
4. 勾选"Create Visual Studio Solution"选项，点击"Build"，导出Windows可执行程序。 说明
   >
   > 如果是打包Windows工程，则不需要勾选"Create Visual Studio Solution"选项。

   ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260212110217.64534620389641268627108685372013:50001231000000:2800:09566AC05A9C7435F8092084579C0C9631A70CDE2B11BBCA9528D486E734A05F.png)

### 检查PGA优化是否生效

导出工程后打开工程文件夹，如果看到在导出目录的"DirectCall_Data > Plugins > x86_64"文件夹下增加了libpga.dll、libpgacore.dll2个dll后缀的文件，同时在导出的可执行程序的Logs目录下的PgaRuntime运行日志文件内搜索"RoutePgaMethod"并出现相关内容，则说明PGA优化生效。

![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260212110217.60771487095117800258234213523130:50001231000000:2800:88E9A502D5C556D16E58EF89B40745771887933EE9707F0C12D1A9EC30E1E53C.png)

