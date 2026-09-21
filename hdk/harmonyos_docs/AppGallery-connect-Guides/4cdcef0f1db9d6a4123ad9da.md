---
name: document/cn/AppGallery-connect-Guides/agc-get-started-harmony-ts-0000001534932433
title: HarmonyOS使用入门（TypeScript API9及以上）
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-get-started-harmony-ts-0000001534932433
---

# HarmonyOS使用入门（TypeScript API9及以上）

AppGallery Connect（简称AGC）从构建、质量、增长等方面为您提供了多个开发服务，一个AGC服务的基本接入流程如下：

1. [准备开发环境](#section1270317123213)
2. [创建项目和应用](#section113292017144)
3. [设置数据处理位置](#section17131722114914)
4. [集成AGC SDK](#section1552914317248)
5. [开发应用](#section820114550411)
6. [接入AGC服务](#section1534211161351)

## 准备开发环境

1. 访问AGC页面时推荐使用谷歌浏览器。如果使用win10系统的火狐浏览器，可能出现请求被浏览器拦截，导致点击下载无响应的问题。 处理方法：

   1. 在火狐浏览器地址栏输入about:config。
   2. 查找security.csp.enable，将其切换为false。
2. 在[华为开发者联盟](https://developer.huawei.com/consumer/cn)上注册成为开发者并完成实名认证，具体方法可参考[账号注册认证](https://developer.huawei.com/consumer/cn/doc/start/registration-and-verification-0000001053628148)。

## 创建项目和应用

1. 项目是您在AGC资源的组织实体，您可以将一个应用的不同平台版本添加到同一个项目中。如果您在使用AGC的服务时在AGC中还没有项目，则需要先创建项目，具体操作请参见[创建项目](https://developer.huawei.com/consumer/cn/doc/distribution/app/agc-help-createproject-0000001100334664)。
2. 如果您还没有在您的AGC项目中添加应用，请先完成应用的添加。您可以直接添加一个新应用，也可以添加一个未归属任何项目的已有应用。请参见[创建应用](https://developer.huawei.com/consumer/cn/doc/app/agc-help-createapp-0000001146718717)。

## 设置数据处理位置

部分AGC服务涉及应用数据的处理，在使用此类服务前，您需要设置保存数据的站点，具体操作请参见[设置数据处理位置](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-data-storage-location-0000001162597847)。

## 集成AGC SDK

部分AGC服务提供了SDK，在使用此类服务前需要将AGC SDK集成到您的开发环境。目前已提供HarmonyOS TS SDK的服务如下：

* 认证服务
* 云函数
* 云存储

### 前提条件

* 安装HUAWEI DevEco Studio 3.1或更高版本
* 配置 SDK API Version 9或更高
  * Compile SDK Version 9或更高
  * Compatible SDK Version 9或更高

### 添加配置文件

AGC为了简化开发者的配置步骤，向开发者提供了保存应用配置信息的配置文件，您只需要将配置文件添加到您的工程目录并集成AGC插件，AGC插件可以自动将您在AGC上的应用信息加载到您的开发环境。

1. 登录[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)，选择"开发与服务"。
2. 在项目列表中找到您的项目，在项目下的应用列表中选择您的应用。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/28/v3/7RqpcZ7OTlKv7PL4JyWb0Q/zh-cn_image_0000001484172416.png?HW-CC-KV=V1&HW-CC-Date=20260909T163459Z&HW-CC-Expire=31536000000&HW-CC-Sign=14A00FD2432DC65761BEF015D6C657B89B1426D574E1B2CCDE9E6E35C336BE00)

3. 在"项目设置"页面下载配置文件"agconnect-services.json"。 说明
   > * 配置文件中默认会包含AGC为应用分配的客户端密钥和API密钥信息，其中客户端密钥和API密钥均为密文。
   > * 您可以在下载JSON文件前打开"不包含密钥"开关，配置文件中将不包含密钥信息，由您自行调用AGC SDK的接口手动配置。
   > * 如果您的套餐升级到了付费档，为避免被冒用产生异常账单，建议您将密钥存储在您自己的服务器，并妥善保管。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3a/v3/mnoxuqlIRIyvY9NTK2pepQ/zh-cn_image_0000001484012536.png?HW-CC-KV=V1&HW-CC-Date=20260909T163459Z&HW-CC-Expire=31536000000&HW-CC-Sign=EC3533590F13E47C845BFE89E764EF0AB4893E01340430C175ED9954D150ACB3)
4. 对于云存储服务，需要检查agconnect-services.json文件中的"service > cloudstorage"中是否已默认配置default_storage。

   ```screen
   "cloudstorage":{ 
       "default_storage":"您准备默认使用的存储实例名称", 
       "storage_url":"https://agc-storage-drcn.platform.dbankcloud.cn" 
   }
   ```

   如果未配置default_storage，将会导致云存储SDK初始化失败。请您手动添加缺省的存储实例名称，default_storage的值为"项目设置 > Serverless > 云存储"页面中的"存储实例"对应的名称。
5. 将"agconnect-services.json"文件拷贝到DevEco Studio项目的应用级资源目录"entry/src/main/resources/rawfile"下。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d/v3/SUw8ZYzXTKCyrZT89AfJYA/zh-cn_image_0000001678898817.png?HW-CC-KV=V1&HW-CC-Date=20260909T163459Z&HW-CC-Expire=31536000000&HW-CC-Sign=3F85CB8B6A563E2F1BBA7E1FD13178132DDE796EA83626ECFF3E890D8CB90BD4)

### 配置SDK依赖

添加配置文件后，需要在DevEco Studio项目中配置SDK依赖，您可以通过以下任意一种方式配置SDK依赖：

**方式一**

1. 打开DevEco Studio应用级（一般为"entry"目录下）"oh-package.json5"文件。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1e/v3/F-gOS8QbTNSaDPLPJEwlvg/zh-cn_image_0000001630511302.png?HW-CC-KV=V1&HW-CC-Date=20260909T163459Z&HW-CC-Expire=31536000000&HW-CC-Sign=21A904981461DFBBC5953D668478A88E43074C98675E4AD0D10570C860208840)

2. 在"oh-package.json5"文件中添加SDK依赖。

   |服务|配置方法|
   |:---|:---------------------------------------------------------------------------------------------------------------------------------|
   |认证服务|```screen "@hw-agconnect/auth-ohos": "^1.1.2", "@hw-agconnect/api-ohos": "^1.1.2", "@hw-agconnect/core-ohos": "^1.1.2" ```|
   |云函数|```screen "@hw-agconnect/function-ohos": "^1.1.2", "@hw-agconnect/api-ohos": "^1.1.2", "@hw-agconnect/core-ohos": "^1.1.2" ```|
   |云存储|```screen "@hw-agconnect/cloudstorage-ohos": "^1.1.2", "@hw-agconnect/api-ohos": "^1.1.2", "@hw-agconnect/core-ohos": "^1.1.2" ```|

3. 点击右上方出现的"Sync Now"链接，等待同步完成。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fc/v3/gBaZx9ScQw2ltcF6U-ph_g/zh-cn_image_0000001641270429.png?HW-CC-KV=V1&HW-CC-Date=20260909T163459Z&HW-CC-Expire=31536000000&HW-CC-Sign=009A913B5ED876ED5C28956D7ED7F265088E8B39B73F23DD6489CA069035318A)

**方式二**

1. 打开您的工程，在命令行窗口执行**cd** **entry** 命令，切换到工程的"entry"目录。

   ```screen
   cdentry
   ```

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7f/v3/_fPaTH19TJK36DD2GHgpPw/zh-cn_image_0000001678791105.png?HW-CC-KV=V1&HW-CC-Date=20260909T163459Z&HW-CC-Expire=31536000000&HW-CC-Sign=A084FABC975217F61A7238B27CD711E8090C2750C8B10E5B640E60F39A51F831)
2. 执行以下命令，安装AGC各服务SDK到您的项目中。

   |服务名称|配置命令|
   |:---|:----------------------------------------------------------------------------------------------------------------------------------------------------|
   |认证服务|```screen ohpm install @hw-agconnect/auth-ohos@1.1.2 ohpm install @hw-agconnect/api-ohos@1.1.2 ohpm install @hw-agconnect/core-ohos@1.1.2 ```|
   |云函数|```screen ohpm install @hw-agconnect/function-ohos@1.1.2 ohpm install @hw-agconnect/api-ohos@1.1.2 ohpm install @hw-agconnect/core-ohos@1.1.2 ```|
   |云存储|```screen ohpm install @hw-agconnect/cloudstorage-ohos@1.1.2 ohpm install @hw-agconnect/api-ohos@1.1.2 ohpm install @hw-agconnect/core-ohos@1.1.2 ```|

### 集成AGC SDK

> 说明
>
> * 工程的应用框架必须为Stage模型，即"apiType"参数值为"stageMode"。
> * 仅Compile API版本为9或更高时支持Stage模型，请确保SDK的Compile API版本不低于9。
> * 请确保采用ohpm方式编译。

1. 在您的项目中导入agc组件。

   |服务名称|配置命令|
   |:---|:----------------------------------------------------------------------------------------------------------------------------------------|
   |认证服务|```screen import agconnect from '@hw-agconnect/api-ohos'; import "@hw-agconnect/core-ohos"; import "@hw-agconnect/auth-ohos"; ```|
   |云函数|```screen import agconnect from '@hw-agconnect/api-ohos'; import "@hw-agconnect/core-ohos"; import "@hw-agconnect/function-ohos"; ```|
   |云存储|```screen import agconnect from '@hw-agconnect/api-ohos'; import "@hw-agconnect/core-ohos"; import "@hw-agconnect/cloudstorage-ohos"; ```|

2. 在您的应用初始化阶段使用context初始化SDK，推荐在MainAbility的onCreate中进行。

   ```screen
   //初始化SDK
   onCreate(want, launchParam) {
   //务必保证resources/rawfile中包含agconnect-services.json文件
       agconnect.instance().init(this.context.getApplicationContext());
   }
   ```

3. 在"entry/src/main/module.json5"中添加网络权限。

   ```screen
   "requestPermissions": [
     {
       "name": "ohos.permission.INTERNET"
     }
   ]
   ```

### （可选）设置配置文件参数

如果您在下载配置文件时选择了"不包含密钥"，配置信息中将不包含Client ID、Client Secret和API密钥（凭据），您还需调用AGC SDK的接口手动将密钥传给AGC使用。

1. 在"项目设置 > 常规"页面中获取Client Secret和API密钥（凭据）。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7c/v3/YulW0RRCQlGwR_lSOcQmnA/zh-cn_image_0000001535132429.png?HW-CC-KV=V1&HW-CC-Date=20260909T163459Z&HW-CC-Expire=31536000000&HW-CC-Sign=68109BDEBF37BE2C2DA6014811B0D2015C300DD531FDD91F1E73F240D6F74560)


2. 在应用启动调用AGC的初始化方法完成后将参数设置给AGC SDK。

   ```screen
   agconnect.instance().init(this.context.getApplicationContext());
   agconnect.instance().setApiKey("xxx"); // 设置API密钥（凭据）
   agconnect.instance().setClientSecret("xxx"); // 设置Client Secret
   ```

## 开发应用

开发应用是指开发应用的具体功能，此部分由开发者自行完成，本文档不详细描述。

## 接入AGC服务

如果在开发过程中需要接入AGC的某个服务，请参考对应服务的开发指南。

