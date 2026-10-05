---
name: document/cn/HMS-Guides/Integrating_the_SDKs_iOS
title: 集成HMS Core SDK
uri: https://developer.huawei.com/consumer/cn/doc/HMS-Guides/Integrating_the_SDKs_iOS
source: portal
---

# 在Xcode项目中集成SDK（Cocoapods方式集成）  


## 操作步骤

**1.在XCode****开发环境中添加当前应用的AppGallery Connect****配置文件。**

a.登录[AppGallery Connect 网站](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html) ，选择“我的项目”。

b.在项目列表中找到您的项目，在项目列表中单击需要集成SDK的应用。

c.在“项目设置”页面中，单击“应用”栏下的“agconnect-services.plist”下载配置文件。

d.将“agconnect-services.plist”文件拷贝到应用级根目录下。

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20200511145325.06995135259778094354095858892964:50510617082941:2800:CEDF5209EE2B49AA828A4847DC0CA8162581C5AF09B47EB531700B2DDF99BB44.png?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true)

说明：

（1）在获取agconnect-services.plist文件前，请确保已经完成高级分析服务的开通（开通步骤参见：[开通高级分析服务](https://developer.huawei.com/consumer/cn/doc/development/HMS-Guides/Configuring_iOS#Open)）。

（2）如果您在“开发”模块进行过任何修改动作，包括但不限于：设置数据存储位置、开启或管理某些API等。您需要下载最新的agconnect-services.plist，并替换iOS应用级根目录下已有的文件。

**2.编辑Podfile文件**

增加pod依赖pod 'HiAnalytics'

Podfile示例：
    
    
      
    
      
        1. # Uncomment the next line to define a global platform for your project
        2. # platform :iOS, '9.0'
        3. target 'HiAnalyticsSwiftDemo' do
        4.   # Comment the next line if you don't want to use dynamic frameworks
        5.   use_frameworks!
        6.   # Pods for HiAnalyticsSwiftDemo
        7.     pod 'HiAnalytics'
        8.   target 'HiAnalyticsSwiftDemoUITests' do
        9.     # Pods for testing
        10.   end
        11. end
    
    

**3.执行pod install**
      
      1.  $ pod install
    
    

# 在Xcode项目中集成SDK（手动方式集成）

## 下载SDK

1\. 请下载HUAWEI Analytics Kit SDK及其依赖的SDK包，[下载AGC基础SDK](https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-Guides/agc-get-started-ios#h2-1586430372641)。

SDK包| SDK描述| 需求场景  
---|---|---  
AGConnectCore-x.x.x.x.zip| AGC框架包| 该包必须集成  
AGConnectCredential-x.x.x.x.zip| AGC网关鉴权包| 该包必须集成  
HMSFoundation-x.x.x.x.zip| Task包| 该包必须集成  
  
下载完成后依次解压缩。

2.选择菜单“Add Files to 工程名”，将所有framework库导入到您的工作空间。

   a.右键选择“Add Files to 工程名”，随后左键单击选择。

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20200511150801.54376561122256701925809959727497:50510617082941:2800:5D5569C442BA70BD497038C099807DFE9FA8CACC21EB3F8A45C87F092DC0B7CB.png?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true)

说明：

待导入的framework库必须和工作空间在相同的磁盘空间里，如果不在，您可以选择注意勾选“Copy items if needed”和“Create groups”，将待导入的framework库工程文件复制到工作空间。

   b.在“General”页签，单击“+”号添加对framwork库的依赖。

说明：

SDK提供的framework库是静态库，添加依赖时注意选择“Do not Embed”方式。

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20200511151110.91556584732921786763271489399605:50510617082941:2800:8B1241CB62D39667E7452C1F94648D226B9339E8393B368D0A66D5778775CA57.png?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true)

## 添加资源文件依赖和项目参数

1.添加资源文件依赖

在“Build Phases”页签，单击“+”号将HiAnalytics.bundle和AGCResources.bundle资源库添加到“Copy Bundle Resources”中。

资源文件| 资源文件所在库  
---|---  
HiAnalytics.bundle| HiAnalytics  
AGCResources.bundle| Agconnect-credential  
  
2.修改工程配置

   a.在目标的构建设置中，在“Build Settings”页签，向 Other Linker Settings 中添加 -ObjC 链接器标志。
      
      1. -ObjC
    
    

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20200511151615.50773088584799623500353450849023:50510617082941:2800:DE2D3797F1E73885DE39A4B1C4E5D43093DDB5893CC658F53D4FF1C4580EFD4F.png?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true)

   b.如果项目语言是Swfit语言，在手动集成SDK时，还需要在“Build Settings”页签，设置“Always Embed Swift Standard Libraries”为“Yes”。

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20200511151711.76136547636112827190022151635916:50510617082941:2800:8C7AF36D94B86B59CFA657D881F05EE5F2B919C02AF7442C196B827254AA1E0C.png?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true)

  

