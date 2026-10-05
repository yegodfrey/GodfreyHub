---
name: document/cn/HMS-3-Library/game-preparation-v3
title: 华为游戏服务开发准备-V3
uri: https://developer.huawei.com/consumer/cn/doc/HMS-3-Library/game-preparation-v3
source: portal
---

# 1\. AppGallery Connect配置

在开始开发应用前，需要在AppGallery Connect中配置相关信息。

## 1.1 注册成为开发者

在开发应用前需要在[华为开发者联盟](https://developer.huawei.com/consumer/cn)网站上注册成为开发者并完成实名认证，具体方法可参考[帐号注册认证](https://developer.huawei.com/consumer/cn/devservice/doc/20300)。

## 1.2 创建应用

参见AppGallery Connect帮助中心的[创建应用](https://developer.huawei.com/consumer/cn/doc/distribution/app/agc-create_app)章节创建应用并上传一个临时APK包，游戏应用的特殊配置如下：

  * “软件包类型”：必须选择“APK(Android应用)”。

  * “支持设备”：选择“手机”。

  * “应用分类”：选择“游戏”。




注意：

临时APK包用于AppGallery Connect读取应用包名，因此临时APK包的包名必须是最终要发布的应用的APK包名，必须以**.HUAWEI** 或**.huawei** 结尾，否则会导致审核不通过。

## 1.3 生成签名证书指纹  


签名证书指纹用于在通过华为HMS SDK访问HMS Core（APK）的能力时，校验应用的真实性。开发者在使用HMS SDK服务前必须将签名证书指纹配置到华为开发者联盟，在配置前需要根据签名证书在本地生成签名证书指纹。

在申请前需要满足以下2个条件：

  * 已创建应用程序的签名文件，签名证书创建属于通用技术，此处不详细描述。

  * 当前开发的PC已经安装JDK。




操作步骤如下：

1、打开命令行工具（使用CMD命令），执行cd命令进入keytool.exe所在的目录（图中样例为PC上java程序安装在C盘的Program Files (x86)目录）。

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20191127160217.91750238228687932611910771768141:50510727122641:2800:D924DB0C8DDC53508F8CE00DEFB1E70CD40BBFDF9A06B38E244392752DC98721.png?needInitFileName=true?needInitFileName=true)

2、执行命令**keytool -list -v -keystore**  <keystore-file>，按命令行提示进行操作。  
<keystore-file>为应用签名文件的完整路径。  
例如：  

      
      1. C:\Program Files (x86)\Java\jdk1.7.0_25\bin>keytool -list -v -keystore E:\HMS_SDK_2.5.1.300\Sample\HMSSdkSample_2.5.1.300_AS\HmsSample\android.keystore
    
    

3、根据结果获取对应的SHA256指纹。

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20191127160359.97958995872309081006346735206835:50510727122641:2800:244A86F81BF72274EC9FD10CAA5668CDDC28B8A9301CAAD56C6EAB9C764634DB.png?needInitFileName=true?needInitFileName=true)

## 1.4 配置签名证书指纹

1、登录[ AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html) 网站，选择“我的应用”。

2、点击应用对应手机设备的“Android应用”链接进入应用开发页面。

3、在“开发 > 概览”页面的“应用”区域，将“SHA256证书指纹”配置为生成签名证书指纹中生成的SHA256指纹。

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20191127160519.52504899437070662734788541480026:50510727122641:2800:1B07464459213D951D0FB406E01C371040816749B9A847779460B3D2911924FC.png?needInitFileName=true?needInitFileName=true)

4、配置完成后点击![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20200117184327.83216714982310447399050318223540:50510727122641:2800:D189A38620AD647FB10CA31581FAEE1F72DA60AA2DF586173E6418CC5EB888C3.png?needInitFileName=true?needInitFileName=true)。

## 1.5 打开相关服务

  * 游戏涉及华为帐号登录，需要打开帐号服务。

  * 游戏涉及华为支付功能，需要打开支付服务。

  * 游戏必须打开游戏服务。




具体操作步骤请参见[打开服务开关](https://developer.huawei.com/consumer/cn/doc/distribution/app/agc-enable_service#enable-service)。如果是联运游戏还需启动华为高级分析服务，参见[启动华为分析服务](https://developer.huawei.com/consumer/cn/doc/distribution/app/agc-enable_service#start_HA)。

## 1.6 配置成就  


成就是激励玩家深入发掘游戏并提高其游戏水平的一种富有趣味的途径。如果游戏中设置了成就系统，则开发前需要在AppGallery Connect中配置成就。

  * 新增成就：如果需要新增成就，请参考[新增成就](https://developer.huawei.com/consumer/cn/doc/distribution/app/agc-add_achievement)。

  * 测试成就：成就创建后为“可测试”状态，开发者可以通过测试帐号测试成就，具体请参见[沙盒测试](https://developer.huawei.com/consumer/cn/doc/development/HMS-Guides/game-test)。

  * 发布成就：待成就测试完成，应用正式上架后，可以发布成就，具体操作请参见[发布成就](https://developer.huawei.com/consumer/cn/doc/distribution/app/agc-release_achievement)。应用测试阶段建议不要发布成就。

  * 编辑成就：在成就未发布或正式发布后，均可以编辑成就，修改成就的相关信息，编辑成就操作请参考[编辑成就](https://developer.huawei.com/consumer/cn/doc/distribution/app/agc-edit_achievement)。

  * 重置成就进度：尚未发布的成就可以重置成就进度，已经发布的成就无法重置，重置进度后测试帐号的成就数据将被重置，具体操作请参见[重置成就进度](https://developer.huawei.com/consumer/cn/doc/distribution/app/agc-reset_achievement)。

  * 删除成就：尚未发布的成就可以删除，已经发布的成就无法删除，具体操作参见[删除成就](https://developer.huawei.com/consumer/cn/doc/distribution/app/agc-delete_achievement)。




## 1.7 配置事件  


事件上报为开发者提供了收集玩家在游戏过程中产生的特定数据，上报并存储至华为游戏服务器，随后在AppGallery Connect上进行归纳分析的能力。如果游戏中设置了事件系统，则开发前需要在AppGallery Connect中配置事件。

  * 新增事件：如果需要新增事件，参见[新增事件](https://developer.huawei.com/consumer/cn/doc/distribution/app/agc-add_event)。

  * 编辑事件：事件未发布或正式发布后，均可以编辑事件，修改事件相关信息，参见[编辑事件](https://developer.huawei.com/consumer/cn/doc/distribution/app/agc-edit_event)。

  * 发布事件：待事件测试完成，应用正式上架后，可以发布事件，参见[发布事件](https://developer.huawei.com/consumer/cn/doc/distribution/app/agc-release_event)。

  * 删除事件：尚未发布的事件可以删除，已经发布的事件无法删除，参见[删除事件](https://developer.huawei.com/consumer/cn/doc/distribution/app/agc-delete_event)。




# 2\. 集成HMS SDK

针对AndroidStudio开发环境，华为提供了maven仓集成方式的HMS SDK包。在开始开发前，您需要将HMS SDK集成到您的AndroidStudio开发环境中。

注意：

HMS SDK 3.0不再支持主子帐号切换，对于已经集成了HMS SDK 2.0且有主子帐号切换功能的游戏，如需兼容原有的主子帐号功能，可以参见[HMS SDK 2.0升级3.0配置指导](https://obs.cn-north-2.myhwclouds.com/hms-ds-wf/b/4e6995e5a2984eb58cf9abe902e6eb43-3686089666648159927.docx)升级SDK到3.0。

1、在AndroidStudio开发环境中添加当前应用的AppGallery Connect配置文件。    

     a. 登录[ AppGallery Connect 网站](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)，选择“我的应用”。    

     b. 在名称列表中找到应用所在的产品，点击对应手机设备的“android应用”链接。  

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20191127161512.72362374944366306836400881454234:50510727122641:2800:69EB31584BD032AEA8D647F8E46F4C2C290709961F9F9140B7ABA0C7B57AC4C3.png?needInitFileName=true?needInitFileName=true)

     c. 选择“开发 > 概览”。    

     d. 单击“应用”栏下的“agconnect-services.json”下载配置文件。    

     e. 将“agconnect-services.json”文件拷贝到应用级根目录下。

     ![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20191127161541.87946824148407825183646637104129:50510727122641:2800:2C7EF864BAD6297AE59A028B1B7EF71E0EA188FAEE1673CD18B9BE8243A0A581.png?needInitFileName=true?needInitFileName=true)

2、配置HMS SDK的maven仓地址和AppGallery Connect插件地址。   

     a. 打开AndroidStudio项目级build.gradle文件。  

     ![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20191127161612.47384937571108201411502959863187:50510727122641:2800:9EA6AF11B0143E736A9749E213E8C4EC54B3C43A71A8E7246AE1083ACF74E91C.png?needInitFileName=true?needInitFileName=true) 

     b. 在allprojects ->repositories里面配置HMS SDK的maven仓地址。
      
      1. allprojects { 
        2.             repositories { 
        3.                 google() 
        4.                 jcenter() 
        5.                 maven {url 'https://developer.huawei.com/repo/'} 
        6.             } 
        7.         }
    
    

说明：

仓地址直接在浏览器中打开无法访问，只能在IDE中配置。

     c. 在buildscript->repositories中配置HMS SDK的maven仓地址。
      
      1. buildscript { 
        2.             repositories { 
        3.                 google() 
        4.                 jcenter() 
        5.                 maven {url 'https://developer.huawei.com/repo/'} 
        6.             } 
        7.  }
    
    

     d. 在buildscript->dependencies中配置AppGallery Connect插件地址。
      
      1. buildscript { 
        2.             dependencies { 
        3.              classpath 'com.huawei.agconnect:agcp:1.1.1.300'
        4.             } 
        5. }
    
    

3、添加编译依赖和AppGallery Connect插件地址。    

    a. 打开应用级的build.gradle文件。

   ![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20191127161913.78122618182104313264430186349069:50510727122641:2800:35B64762648644886233A4B07F054E144078B1390847FA78248D3591C6CDE0A5.png?needInitFileName=true?needInitFileName=true)

    b. 在文件尾添加AppGallery Connect插件依赖。
      
      1. apply plugin: 'com.huawei.agconnect'
    
    

    c. 在“dependencies”中添加如下编译依赖。
      
      1. dependencies {      
        2.  implementation 'com.huawei.hms:hwid:3.0.3.301'      
        3.  implementation 'com.huawei.hms:iap:3.0.3.300'  
        4.  implementation 'com.huawei.hms:game:3.0.3.300'  
        5.  implementation 'com.huawei.hms:hianalytics:2.3.0.302'  
        6. }
    
    

说明：

hwid为华为帐号服务，iap为华为支付服务，game为华为游戏服务，hianalytics为华为分析服务。

4、重新打开修改完的build.gradle文件，右上方出现“Sync Now”链接。

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20191127162114.08573393596073780041491643680935:50510727122641:2800:9C35E2068F6B1B74FC4F4B838EF72E407C05BD1E65E27FCBACAC1DE85EB843B8.png?needInitFileName=true?needInitFileName=true)

点击“Sync Now”等待同步完成。

说明：

如果出现错误，请检查网络连接是否正常，以及检查gradle文件是否正确。

5、多语言设置。  


  * 如果您的应用不需要设置只支持某些特定语言，则请忽略本步骤。应用将默认支持所有HMS SDK支持的语言。

  * 如果您的应用需要设置只支持某些特定语言，则可通过本步骤配置。




打开项目工程下app目录的build.gradle文件。

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20191127162247.50112842945823762248012127967774:50510727122641:2800:5B56DDC18C2EE23F5D8D8EDE04A0252567C0D7EF2CDDC12AAF758D32C3680CF3.png?needInitFileName=true?needInitFileName=true)

在“android”->“defaultConfig”中新增resConfigs配置，“en”（英语） 和 “zh-rCN”（简体中文）为必须配置的语种，配置格式如下：
      
      1. android { 
        2.         defaultConfig { 
        3.                 ... 
        4.                 resConfigs "en", "zh-rCN", "需要支持的其他语言" 
        5.         } 
        6. }
    
    

HMS SDK支持的语言列表请参考[HMS SDK支持的语言](https://developer.huawei.com/consumer/cn/doc/development/HMS-Guides/hmssdk_supported_language)。

# 3\. 配置混淆脚本

开发者编译APK前需要配置不要混淆HMS SDK，避免功能异常。  
1、打开工程的混淆配置文件。

2、加入排除HMS SDK的混淆配置。
      
      1. -ignorewarnings 
        2. -keepattributes *Annotation* 
        3. -keepattributes Exceptions 
        4. -keepattributes InnerClasses 
        5. -keepattributes Signature 
        6. -keepattributes SourceFile,LineNumberTable 
        7. -keep class com.hianalytics.android.**{*;} 
        8. -keep class com.huawei.updatesdk.**{*;} 
        9. -keep class com.huawei.hms.**{*;} 
        10. -keep class com.huawei.gamebox.plugin.gameservice.**{*;}
        11. -keep interface com.huawei.hms.analytics.type.HAEventType{*;}
        12. -keep interface com.huawei.hms.analytics.type.HAParamType{*;}
        13. -keep class com.huawei.hms.analytics.HiAnalyticsTools{
        14.         public static void enableLog();
        15.         public static void enableLog(int);
        16. }
        17. -keep class com.huawei.hms.analytics.HiAnalyticsInstance{*;}
        18. -keep class com.huawei.hms.analytics.HiAnalytics{*;}
    
    

3、如果开发者使用了AndResGuard，需要在混淆配置文件中加入AndResGuard允许清单。
      
      1. "R.string.agc*",
        2. "R.string.hms*",
        3. "R.string.connect_server_fail_prompt_toast",
        4. "R.string.getting_message_fail_prompt_toast",
        5. "R.string.no_available_network_prompt_toast",
        6. "R.string.third_app_*",
        7. "R.string.upsdk_*",
        8. "R.layout.hms*",
        9. "R.layout.upsdk_*",
        10. "R.drawable.upsdk*",
        11. "R.color.upsdk*",
        12. "R.dimen.upsdk*",
        13. "R.style.upsdk*"
    
    

  

