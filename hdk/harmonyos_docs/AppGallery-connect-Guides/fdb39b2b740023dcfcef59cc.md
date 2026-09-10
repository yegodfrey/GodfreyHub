---
name: document/cn/AppGallery-connect-Guides/agc-get-started-ios-0000001058442274
title: iOS使用入门
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-get-started-ios-0000001058442274
---

# iOS使用入门

AppGallery Connect（简称AGC）从构建、质量、增长等方面为您提供了多个开发服务，一个AGC服务在iOS应用中的基本开发流程如下：

1. [准备开发环境](#section1491511413717)
2. [创建项目和应用](#section113292017144)
3. [设置数据处理位置](#section17131722114914)
4. [配置iOS应用信息](#section11401431181320)
5. [集成AGC SDK](#section1552914317248)
6. [开发应用](#section820114550411)
7. [接入AGC服务](#section1534211161351)

#### 准备开发环境

1. 在开发用的Mac上安装Xcode 11或更高版本。 为保证兼容性，要求最低兼容版本：iOS 9.0 。

2. 安装CocoaPods 1.10.0或更高版本。
3. 准备一台用于测试的iPhone设备或者模拟器。
4. 访问AGC页面时推荐使用谷歌浏览器。
5. 在[华为开发者联盟](https://developer.huawei.com/consumer/cn)上注册成为开发者并完成实名认证，具体方法可参考[账号注册认证](https://developer.huawei.com/consumer/cn/doc/start/registration-and-verification-0000001053628148)。  

#### 创建项目和应用

1. 项目是您在AGC资源的组织实体，您可以将一个应用的不同平台版本添加到同一个项目中。如果您在使用AGC的服务时在AGC中还没有项目，则需要先创建项目，具体操作请参见[创建项目](https://developer.huawei.com/consumer/cn/doc/distribution/app/agc-help-createproject-0000001100334664)。
2. 如果您还没有在您的AGC项目中添加应用，请先完成应用的添加，具体请参见[创建iOS应用](https://developer.huawei.com/consumer/cn/doc/app/agc-help-createios-0000001912880912)。  

#### 设置数据处理位置

部分AGC服务涉及应用数据的处理，在使用此类服务前，您需要设置保存数据的站点，具体操作请参见[设置数据处理位置](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-data-storage-location-0000001162597847)。  

#### 配置iOS应用信息

1. 在"开发与服务"页面中，点击iOS应用所在项目。
2. 在"项目设置"页面选择"常规"页签。
3. 在"应用"区域，点击![](https://media:101780973412278230 "点击放大")配置"App Store ID"和"团队ID"，即您应用在App Store上的ID和团队ID，完成后点击![](https://media:101780973412310231 "点击放大")保存。

![](https://media:101780973412344232)  

#### 集成AGC SDK

部分AGC服务提供了集成到本地的AGC SDK，在使用此类服务前需要将AGC SDK集成到您的开发环境。

各服务SDK对Apple平台支持情况如下：  

|服务|iOS|macOS|
|:----------|:------------------------------------|:------------------------------------|
|认证服务|![](https://media:101780973412373233)|![](https://media:101780973412410234)|
|崩溃|![](https://media:101780973412435235)|![](https://media:101780973412474236)|
|远程配置|![](https://media:101780973412507237)|![](https://media:101780973412531238)|
|性能管理|![](https://media:101780973412557239)|![](https://media:101780973412666240)|
|App Linking|![](https://media:101780973412696241)|![](https://media:101780973412722242)|
|应用内消息|![](https://media:101780973412767243)|![](https://media:101780973412794244)|
|云函数|![](https://media:101780973412819245)|![](https://media:101780973412845246)|
|云存储|![](https://media:101780973412871247)|![](https://media:101780973412901248)|
|云数据库|![](https://media:101780973412927249)|![](https://media:101780973412952250)|

#### 添加配置文件

为了简化配置步骤，AGC为您提供了保存应用配置信息的配置文件。只需将配置文件添加到您的工程目录，AGC上的应用信息将会被自动加载到您的开发环境。

1. 登录[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)，选择"开发与服务"。
2. 在项目列表中找到您的项目，在项目下的应用列表中选择您的iOS应用。
3. 在"项目设置"页面下载配置文件"agconnect-services.plist"。  
   ![](https://media:101780973412979251)  
   Safari浏览器当前不支持下载"agconnect-services.plist"文件，请使用Chrome浏览器。
   * 在下载JSON文件前，如果您不打开"不包含密钥"开关，配置文件中会包含密钥信息，可能存在一定的安全风险。建议您将密钥存储在您自己的服务器，并妥善保管。
   * 在下载JSON文件前，如果您打开"不包含密钥"开关，配置文件中将不包含密钥信息。后续您需调用AGC SDK的接口手动将密钥传给AGC使用，具体请参见[通过配置文件参数传递密钥](#section7775132744813)；如果您有更高的安全要求，可使用密钥信息换取Token，通过Token将密钥传递给AGC，具体请参见[通过Token传递密钥](#section86239164318)。

   ![](https://media:101780973413072252)
4. 将"agconnect-services.plist"文件添加到Xcode工程目录下。 ![](https://media:101780973413112253)

#### 添加SDK

使用CocoaPods集成

1. 打开命令行窗口，导航至Xcode项目所在的位置。
2. 创建Podfile文件。如果已经存在，可跳过本步骤。

   ```
   cd project-directory 
   pod init
   ```

3. 在podfile中添加AGC基础SDK依赖的pod。

   ```
   pod 'AGConnectCore','~> 1.9.4.300'
   ```

4. 在podfile中添加您需要集成的AGC服务要依赖的pod，当前支持的服务如下表所示。  
   ![](https://media:101780973413139254)  
   添加AGC服务依赖的pod后，可以自动集成AGConnectCore，AGConnectCore的pod可不配置。  

   |服务|配置方法|
   |:----------|:--------------------------------------------|
   |认证服务|pod 'AGConnectAuth', '\~\> 1.9.4.300'|
   |崩溃|pod 'AGConnectCrash', '\~\> 1.9.4.300'|
   |远程配置|pod 'AGConnectRemoteConfig', '\~\> 1.9.4.300'|
   |性能管理|pod 'AGConnectAPM', '\~\> 1.2.1'|
   |App Linking|pod 'AGConnectAppLinking', '\~\> 1.9.4.300'|
   |应用内消息|pod 'AGConnectAppMessaging', '\~\> 1.9.4.300'|
   |云函数|pod 'AGConnectFunction', '\~\> 1.9.4.300'|
   |云存储|pod 'AGConnectStorage', '\~\> 1.9.4.300'|
   |云数据库|pod 'AGConnectDatabase', '\~\>1.9.4.300'|

5. 安装pod，然后打开.xcworkspace文件查看该项目。

   ```
   pod install
   ```

6. 初始化AGC SDK。 在项目的AppDelegate.m中导入头文件 #import \<AGConnectCore/AGConnectCore.h\> , 在application:(UIApplication \*)application didFinishLaunchingWithOptions:(NSDictionary \*)launchOptions的方法中添加如下代码：

   OBJECTIVE-C

   ```
   #import "AppDelegate.h"
   #import <AGConnectCore/AGConnectCore.h>

   @implementation AppDelegate
   - (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
        // Override point for customization after Application launch.
        [AGCInstance startUp];//初始化
        return YES;
   }
   ```

   <br />

不使用CocoaPods集成

1. 下载AGC基础SDK。  

   |包名|SDK说明|下载地址|数字签名（SHA256）校验|
   |:--------------------------------|:--------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------|
   |agconnectcore-1.9.4.300.zip|AGC框架包。|点击[下载](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_package_901_9/42/v3/fbQcVDBWSbqqwzg7oG7fow/agconnectcore-1.9.4.300.zip?HW-CC-KV=V1&HW-CC-Date=20260605T072200Z&HW-CC-Expire=315360000&HW-CC-Sign=5532F643F2FC374854B1746743D701DD8EC23D3A71B74D9A223F86547B4A681F )。|d0f905c106b1ee37b73bbadf50ff3cd0297febf3c097d3a1a40059ec37a833a2|
   |agconnectcredential-1.9.4.300.zip|AGC网关鉴权包。|点击[下载](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_package_901_9/72/v3/teS22HRESMuEg7iBw8eoFA/agconnectcredential-1.9.4.300.zip?HW-CC-KV=V1&HW-CC-Date=20260605T072800Z&HW-CC-Expire=315360000&HW-CC-Sign=ACBAB17604E27FA4A4643561B5CFCD4DE338504440CA738A06DE4A15B708D036 )。|54c9b788328fb99863894955eda5993b88d91796f415b28c22a82b8f43d67623|
   |hmfoundation-1.9.4.300.zip|Task包。|点击[下载](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_package_901_9/d5/v3/eX4PX--sTJuBHVGHJNKRiw/hmfoundation-1.9.4.300.zip?HW-CC-KV=V1&HW-CC-Date=20260605T072100Z&HW-CC-Expire=315360000&HW-CC-Sign=C170D9FC6FDD0C484E25A4611EFEE63192431E36B8B1F8195E43C5D4247ACD74 )。|404228ec0776d77cef377196e784c8fb79124e39ef04d99a8da543044bed6680|

2. 下载需要集成的AGC服务SDK。  

   |服务|包名|SDK说明|数字签名（SHA256）校验|
   |:----------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------|:---------------------------------------------------------------|
   |认证服务 <br />|[agconnectauth-1.9.4.300.zip](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_package_901_9/4a/v3/-I6wgnuISGqZu7r_jJTFmA/agconnectauth-1.9.4.300.zip?HW-CC-KV=V1&HW-CC-Date=20260605T072400Z&HW-CC-Expire=315360000&HW-CC-Sign=3EDFA8AC124A5C67286EF6956BD2F78AC5C33C026B1272D8C9D63E01F203648E )|认证服务针对iOS系统提供的客户端SDK。|81fd13cbd31c8d79134727e0fbb639c4c8af3750664633079a47197e4889b15f|
   |认证服务 <br />|[agciossdk-agconnectapiauthapple-tool-1.9.0.302.zip](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_package_901_9/96/v3/HCuvI4G5TRiTTb8V6sqQxg/agciossdk-agconnectapiauthapple-tool-1.9.0.302.zip?HW-CC-KV=V1&HW-CC-Date=20240103T083100Z&HW-CC-Expire=315360000&HW-CC-Sign=F9047FA9A6FEE92ACDAEE802084FA7253E50722E283A40ADCE51687C3A154438)|认证服务针对iOS系统提供的客户端统一SDK。 <br /> <br />|40590596151f167ddb5232a6a26a03367b9c91e5c9ec705409e1603d3e911f14|
   |认证服务 <br />|[agciossdk-agconnectapiauthfacebook-tool-1.9.0.302.zip](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_package_901_9/f3/v3/jE4zbtSeSC24M81jpVgEcw/agciossdk-agconnectapiauthfacebook-tool-1.9.0.302.zip?HW-CC-KV=V1&HW-CC-Date=20240103T082201Z&HW-CC-Expire=315360000&HW-CC-Sign=B1C617925BCC2BA3A92E61D710A67F4F9BD5BE8AE9DABE90838280DAB491810D)|认证服务针对iOS系统提供的客户端统一SDK。 <br /> <br />|49915d4109cd0f7e0f41a3dcf5660fc73a065e6828c6203f0f01d6023c522d3b|
   |认证服务 <br />|[agciossdk-agconnectapiauthgoogle-tool-1.9.0.302.zip](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_package_901_9/0e/v3/3AD_BwpYRT6gxG5LXNdY4w/agciossdk-agconnectapiauthgoogle-tool-1.9.0.302.zip?HW-CC-KV=V1&HW-CC-Date=20240103T083000Z&HW-CC-Expire=315360000&HW-CC-Sign=0CCF516142471B2EA9A5365E6848D9700EB3C64A930AEED8A58838E2273CF345)|认证服务针对iOS系统提供的客户端统一SDK。 <br /> <br />|20f39b004123aeb68b1af39d4a76f0cfa333f00ac86d22a2f2d7ae4a1dae151e|
   |认证服务 <br />|[agciossdk-agconnectapiauthwechat-tool-1.9.0.302.zip](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_package_901_9/f2/v3/OF3UqD4yQbuPFDSvEqIyIA/agciossdk-agconnectapiauthwechat-tool-1.9.0.302.zip?HW-CC-KV=V1&HW-CC-Date=20240103T083200Z&HW-CC-Expire=315360000&HW-CC-Sign=3256A9EDD06DDA90F31D43734D0F385A67C521CC902A20A8239E51F7B46A2927)|认证服务针对iOS系统提供的客户端统一SDK。 <br /> <br />|0265537775f002b6b4144d50e94a7042cfc344b615abf908064fe510e11b537a|
   |认证服务 <br />|[agciossdk-agconnectapiauthqq-tool-1.9.0.302.zip](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_package_901_9/c1/v3/DbE_ybpOQHuH8OAq_2re-w/agciossdk-agconnectapiauthqq-tool-1.9.0.302.zip?HW-CC-KV=V1&HW-CC-Date=20240103T082700Z&HW-CC-Expire=315360000&HW-CC-Sign=018DD8C6ADDB5B8B4D2276C7F8DCAE9C9CBA985797AC0F7160DC6F8ACD891502)|认证服务针对iOS系统提供的客户端统一SDK。 <br /> <br />|896c513a3fd0ddba92c9e852c4a8a23ba5519a8dc3b077cfa437615632eb62dc|
   |认证服务 <br />|[agciossdk-agconnectapiauthalipay-tool-1.9.0.302.zip](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_package_901_9/e6/v3/N5mvpFmmTkiEWs72vwjw_g/agciossdk-agconnectapiauthalipay-tool-1.9.0.302.zip?HW-CC-KV=V1&HW-CC-Date=20240103T081700Z&HW-CC-Expire=315360000&HW-CC-Sign=8A1FA73D91FD09D468149A0C536084BF84F369D1B533DC3232F0C6E996A1BC7A)|认证服务针对iOS系统提供的客户端统一SDK。 <br /> <br />|260be48e97a94c262224d802b28f2621c7b3b3a1cdea9cb4c1f5c4855de841ce|
   |认证服务 <br />|[agciossdk-agconnectapiauthtwitter-tool-1.9.0.302.zip](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_package_901_9/91/v3/SpyQGwyRQM2sdd3SJd8I6A/agciossdk-agconnectapiauthtwitter-tool-1.9.0.302.zip?HW-CC-KV=V1&HW-CC-Date=20240103T083500Z&HW-CC-Expire=315360000&HW-CC-Sign=316AB4A185AEF449EAC4F0A0659F5C854B9501BBDC93FC039FFEA46BA8ED5C37)|认证服务针对iOS系统提供的客户端统一SDK。 <br /> <br />|1aa6d7e331a6467fc50aeb09fade6cb8182dd46bb2d5bff2f8d82f34f86e88e2|
   |崩溃服务|[agconnectcrash-1.9.4.300.zip](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_package_901_9/3d/v3/9EHlS9LuSJOskRrk72FG0w/agconnectcrash-1.9.4.300.zip?HW-CC-KV=V1&HW-CC-Date=20260605T072600Z&HW-CC-Expire=315360000&HW-CC-Sign=A3104BC15E5811237A2CA485057305A1470A9BF031D9DD2A36036B9E508C11B9 )|崩溃针对iOS系统提供的客户端SDK。|81bed87ee8e506f12c8fa9298eb74d28f4437a7c3d8aa7fce1d5a1c11ecad894|
   |远程配置|[agconnectremoteconfig-1.9.4.300.zip](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_package_901_9/eb/v3/futWsCYSQ7qprqb2jWUfJg/agconnectremoteconfig-1.9.4.300.zip?HW-CC-KV=V1&HW-CC-Date=20260605T072000Z&HW-CC-Expire=315360000&HW-CC-Sign=90D60F7AE4B367DEE148A9FC763B45AE18A9DAD27207D48372AD74E2FC58AD4D )|远程配置针对iOS系统提供的客户端SDK。|b1132bb5db04f8c7ca61cea6caa11cb7ce2e039a4af04e73d9983e0e49a8c772|
   |性能管理|[apmsdk-ios-tool-1.2.1.303.zip](https://appfile-cn.dbankcdn.com:443/FileServer/getFile/app/011/111/111/0000000000011111111.20220924091443.84063431948452328689489314040326:20471231000000:0001:0DE09063DA3CD66EBE2A06CBB7DBCECEC3E911BB93609E6FE08A0D69CEB2F341.zip?needInitFileName=true)|性能管理针对iOS系统提供的客户端SDK。|75352af845cb250d2cf1fd137ca8c60893142bb670518bc36f2eb13c2ae23628|
   |App Linking|[agconnectapplinking-1.9.4.300.zip](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_package_901_9/e3/v3/MjhlIvHoSjOGU-09mLwHCQ/agconnectapplinking-1.9.4.300.zip?HW-CC-KV=V1&HW-CC-Date=20260605T072300Z&HW-CC-Expire=315360000&HW-CC-Sign=0572861483E6E6E028B2033508BF8D99CCB2B8B28FC6A4535B247FCAECE79151 )|App Linking针对iOS系统提供的客户端SDK。|cb0802a496a6c226e89a2052485a47033a8a2f68478135b57537ae59a8b213fc|
   |应用内消息|[agconnectappmessaging-1.9.4.300.zip](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_package_901_9/53/v3/kCi2u-xaT92N4mrgkjv1ow/agconnectappmessaging-1.9.4.300.zip?HW-CC-KV=V1&HW-CC-Date=20260605T072500Z&HW-CC-Expire=315360000&HW-CC-Sign=1B58523E004AEA606EC07C6A2B5D4DCE3EE7081192ABC259275DED0BF8AA7A64 )|应用内消息针对iOS系统提供的客户端SDK。|58059fed085f1b0b7eb1ed509c1cc4b93dd749dd46fc9bafd9c1a7577702abe3|
   |云函数|[agconnectfunction-1.9.4.300.zip](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_package_901_9/af/v3/eGL20xorQheyFFwwMmK8Sw/agconnectfunction-1.9.4.300.zip?HW-CC-KV=V1&HW-CC-Date=20260605T071900Z&HW-CC-Expire=315360000&HW-CC-Sign=141E2F758AF17C70D2E51056B84D564F3418DBCA78304FCEC21C8FE4D60DCFCC )|云函数针对iOS系统提供的客户端SDK。|9940cf1480a5c8f0451f818c1f5a8b587ba23d5105ad8a674a3c3d7771ec33f5|
   |云存储|[agconnectstorage-1.9.4.300.zip](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_package_901_9/ec/v3/37f4HvtTQNyMFYT5TLIp_g/agconnectstorage-1.9.4.300.zip?HW-CC-KV=V1&HW-CC-Date=20260605T072700Z&HW-CC-Expire=315360000&HW-CC-Sign=E68507273198900B2223294AAFB18E6E7A532505CAFF0E87ADF4BDFD78EAAC6E )|云存储针对iOS系统提供的客户端SDK。|da4fbfafba5b681253edbccae752e98a24363a0a67a33e87ddf29e8b9fdab8ce|
   |云数据库|[agconnectdatabase-1.9.4.300.zip](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_package_901_9/31/v3/3N7YQDSDRru4xzTMFTUEyQ/agconnectdatabase-1.9.3.301.zip?HW-CC-KV=V1&HW-CC-Date=20260403T063100Z&HW-CC-Expire=315360000&HW-CC-Sign=AF2449463F08C0E928D495C95C7C1664C97852166DFCCCFBA0E8382AF8B1CA8F )|云数据库针对iOS系统提供的客户端SDK。|d3d3383600419fdff301152cf2bb906ce70132507ae3b63ef2587c2b37116339|

3. 将下载的压缩包解压到本地。
4. 将如下文件一起拖入到Xcode工程中。  

   |文件|所在包名|需求场景|
   |:------------------------------------|:----------------------------------------------------|:--------------|
   |AGConnectCredential.framework|agconnectcredential-x.x.x.xxx.zip|必须集成|
   |AGCResources.bundle|agconnectcredential-x.x.x.xxx.zip|必须集成|
   |AGConnectCore.framework|agconnectcore-x.x.x.xxx.zip|必须集成|
   |HMFoundation.framework|hmfoundation-x.x.x.xxx.zip|必须集成|
   |AGConnectAuth.framework|agconnectauth-x.x.x.xxx.zip|认证服务集成|
   |AGConnectAuth.framework|agciossdk-agconnectapiauthapple-tool-x.x.x.xxx.zip|认证服务集成|
   |AGConnectAuth.framework|agciossdk-agconnectapiauthfacebook-tool-x.x.x.xxx.zip|认证服务集成|
   |AGConnectAuth.framework|agciossdk-agconnectapiauthgoogle-tool-x.x.x.xxx.zip|认证服务集成|
   |AGConnectCrash.framework|agconnectcrash-x.x.x.xxx.zip|崩溃服务集成|
   |AGConnectRemoteConfig.framework|agconnectremoteconfig-x.x.x.xxx.zip|远程配置服务集成|
   |AGConnectAPM.framework|AGConnectAPM-x.x.x.xxx.zip|性能管理服务集成 <br />|
   |AGConnectRemoteConfig.framework|agconnectremoteconfig-x.x.x.xxx.zip|性能管理服务集成 <br />|
   |AGConnectAppLinking.framework|agconnectapplinking-x.x.x.xxx.zip|App Linking集成|
   |AGConnectAppMessaging.framework|agconnectappmessaging-x.x.x.xxx.zip|应用内消息集成|
   |AGConnectAppMessagingResources.bundle|agconnectappmessaging-x.x.x.xxx.zip|应用内消息集成|
   |AGConnectFunction.framework|agconnectfunction-x.x.x.xxx.zip|云函数集成|
   |AGConnectStorage.xcframework|agconnectstorage-x.x.x.xxx.zip|云存储集成|
   |AGConnectDatabase.framework|agconnectdatabase-x.x.x.xxx.zip|云数据库集成|
   |AGConnectDatabase.bundle|agconnectdatabase-x.x.x.xxx.zip|云数据库集成|

   ![](https://media:101780973413178255)
5. 勾选"Copy items if needed"选项。 ![](https://media:101780973413226256 "点击放大")

<!-- -->

6. 修改工程配置文件。 在Target -\> Build Settings -\> Other Linker Flags配置中添加'-ObjC'。

   ![](https://media:101780973413349257 "点击放大")
7. 初始化AGC SDK。 在项目的AppDelegate.m中导入头文件 #import \<AGConnectCore/AGConnectCore.h\> , 在application:(UIApplication \*)application didFinishLaunchingWithOptions:(NSDictionary \*)launchOptions的方法中添加如下代码：

   OBJECTIVE-C

   ```
   #import "AppDelegate.h"
   #import <AGConnectCore/AGConnectCore.h>

   @implementation AppDelegate
   - (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
        // Override point for customization after Application launch.
        [AGCInstance startUp];//初始化
        return YES;
   }
   ```

8. 如果在macOS调试，还需开通网络访问权限。 在"TARGETS \> Signing \& Capabilities \> App Sandbox \> Network"下，勾选所需的网络访问选项：

   * Incoming Connections(Server) ：应用作为Server对外提供HTTP、FTP等服务时打开。
   * Outgoing Connections(Client)：应用作为客户端，访问服务器时打开。

   ![](https://media:101780973413396258)

#### （可选）将密钥信息传递给AGC

#### 通过配置文件参数传递密钥

AGC SDK提供了AGCServicesConfig类来对agconnect-services.plist文件中的参数进行配置，如果您在下载配置文件时选择了"不包含密钥"，则agconnect-services.plist文件中将不包含client_id、client_secret和api_key参数，您必须通过AGCServicesConfig类的接口在应用启动时将参数设置给AGC SDK。

1. 创建AGCServicesConfig对象。

   ```
   AGCServicesConfig *config = [[AGCServicesConfig alloc] initWithDefaultPlist];
   ```

2. 设置clientId、clientSecret和apiKey参数。

   ```
   config.clientId = @"YOUR_CLIENT_ID";
   config.clientSecret = @"YOUR_CLIENT_SECRET";
   config.apiKey = @"YOUR_API_KEY";
   ```

   AGCServicesConfig类还支持设置cpId（开发者的账号ID）、productId（项目ID）和appId（应用ID）参数。

   ```
   config.cpId = @"YOUR_CP_ID";
   config.productId = @"YOUR_PRODUCT_ID";
   config.appId = @"YOUR_APP_ID";
   ```

   各参数的值可在"项目设置 \> 常规"页面中查询，YOUR_CLIENT_ID替换为项目栏中"Client ID"的值，YOUR_CLIENT_SECRET替换为项目栏中"Client Secret"的值，YOUR_API_KEY替换为"API密钥（凭据）"的值，可点击参数后面的![](https://media:101780973413421259)复制参数值。

   YOUR_CP_ID替换为"Developer ID"的值，YOUR_PRODUCT_ID替换为"项目ID"的值，YOUR_APP_ID替换为网页地址栏中的"appId"的值。

   ![](https://media:101780973413467260)
3. 把手动创建的AGCServicesConfig对象传递到启动代码中。 将application:(UIApplication \*)application didFinishLaunchingWithOptions:(NSDictionary \*)launchOptions的方法的初始化代码"\[AGCInstance startUp\]"修改为：

   ```
   [AGCInstance startUp:config];
   ```

#### 通过Token传递密钥

如果您认为client_id和client_secret放在json文件里不安全，我们建议您将client_id和client_secret放在自己的服务端。先调用https://connect-drcn.dbankcloud.cn/agc/apigw/oauth2/v1/token接口去换取Token，然后在初始化AGC SDK时通过[setCustomCredentialsProvider](https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-References/agccore-ios-agcservicesconfig-0000001098896302#section2065310480913)将Token传给AGC去使用。

Token接口请求示例：

```
POST /agc/apigw/oauth2/v1/token
Host: connect-drcn.dbankcloud.cn
Content-Type: application/json
{
   "grant_type":"client_credentials",
   "client_id":"agc应用页面提供的client_id",
   "client_secret":"agc应用页面提供的client_secret",
   "useJwt":1,
}
```

Token接口响应示例：

```
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
{
    "access_token": "eyJhbGciOiJIUzU****************",
    "expires_in": 0
}
```

setCustomCredentialsProvider接口调用示例：

```
"Objective-C"
// 将自己获取的token和过期时间传入
 NSString *token = @"access_token";
 long expiration = expires_in;
 AGCServicesConfig *config = [[AGCServicesConfig alloc] initWithDefaultPlist];
 [config setCustomCredentialsProvider:^(HMFTaskCompletionSource<AGCToken *> * _Nonnull source, BOOL isForceRefresh) {
             [source setResult:[[AGCToken alloc] initWithToken:token expiration: expiration]];
    }];
[AGCInstance startUp:config];
```

```
"Swift"
let token = "access_token"
let expiration = expires_in
let config = AGCServicesConfig()
config.customCredentialsProvider = { source, isForceRefresh in
    source.result = AGCToken(token: token, expiration: expiration)
}
AGCInstance.startUp(config)
```

#### 开发应用

开发应用是指开发应用的具体功能，此部分由开发者自行完成，本文档不详细描述。  

#### 接入AGC服务

如果在开发过程中需要接入AGC的某个服务，请参考对应服务的开发指南。
