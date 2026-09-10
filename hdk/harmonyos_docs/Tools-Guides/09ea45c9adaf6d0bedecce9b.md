---
name: document/cn/Tools-Guides/map-integration-0000001136119853
title: 使用工具快速集成Map Kit
uri: https://developer.huawei.com/consumer/cn/doc/Tools-Guides/map-integration-0000001136119853
---

# 使用工具快速集成Map Kit

HMS Toolkit是一个IDE工具插件，提供一套含应用创建、编码和转换、调测、测试和发布的开发工具。可以帮助您以更低的开发成本和更高的开发效率集成HMS Core服务。

HMS Toolkit的"Configuration Wizard"为您提供配置向导，借助该工具可将"开发准备"中多个模块的手动操作自动化完成。  

#### Configuration Wizard操作


#### 安装工具

Windows平台：打开Android Studio，选择"File \> Settings \> Plugins \> Marketplace"，在搜索框中输入"HMS Toolkit"，然后点击"Install"进行安装。安装完成后，请重启Android Studio。

MacOS平台：打开Android Studio，选择"Preferences \> Plugins \> Marketplace"，在搜索框中输入"HMS Toolkit"，然后点击"Install"进行安装。安装完成后，请重启Android Studio。  

#### 配置开发环境

#### 配置AppGallery Connect

在开发应用前，您需要在AppGallery Connect中创建应用，并设置应用的相关信息。

1. 使用华为帐号登录[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)。如未注册，可参见[帐号注册认证](https://developer.huawei.com/consumer/cn/doc/start/registration-and-verification-0000001053628148)进行注册。
2. 参见[创建项目](https://developer.huawei.com/consumer/cn/doc/distribution/app/agc-help-createproject-0000001100334664)和[创建应用](https://developer.huawei.com/consumer/cn/doc/distribution/app/agc-help-createapp-0000001146718717)完成应用的创建。特殊配置：软件包类型选择"APK(Android应用)"。

配置完成后，无需根据界面向导进行下一步操作，按照[配置HMS Toolkit环境](#section169420813261)进行操作，工具会自动进行设置。  

#### 配置HMS Toolkit环境

在调用Map Kit能力前，您还需要进行环境配置。

1. 在Android Studio中，选择菜单栏中的"HMS \> Configuration Wizard"。  
   ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230320174837.73626228739777190221090476281678:50001231000000:2800:F15AF523FDF02503C477604D44E1AB88A1B6DC9B1EB86554E6EB28E9874C1B13.png?needInitFileName=true?needInitFileName=true)  
   如果您还未登录AppGallery Connect，工具会自动打开浏览器提示您进行登录和授权。
2. 登录授权后，选择团队名称、对应的工程模块、Integrated Kits（选择Map Kit）和证书类型，点击"Generate"生成SHA256证书指纹，然后点击"Next"。  
   ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230320174837.26946562342451312543525160167458:50001231000000:2800:1E2F2F8FA80001CD7DFB766E3EED4E9F81A29A9CAC4D15A394805933D549D15B.png?needInitFileName=true?needInitFileName=true)  
   您在选择团队名称和对应的工程模块之后，HMS Toolkit会自动检测AppGallery Connect上是否有对应的应用。若有以下报错，请根据界面提示点击"Link"到AppGallery Connect上检查是否已创建应用。
   * 如果没有，请创建新的应用，然后点击"Retry"重试。
   * 如果已有应用，请根据界面提示检查团队名称和工程模块是否选择正确，然后点击"Retry"重试。

   ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230320174837.27349658862110043439524590146070:50001231000000:2800:674B7C4FA538810B49255BA122B689CC0CAF7F47CC1F29DEB5E38AA314DD2FA2.png?needInitFileName=true?needInitFileName=true)  
   ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230320174837.44230522342604012061741141001604:50001231000000:2800:2336A5107138ABBBBB219E44B74380235316C25C21BD13350015FDAFBFF50C99.png?needInitFileName=true?needInitFileName=true)  
   关于证书类型：
   * Use your certificate：使用您创建的证书生成SHA256证书指纹，这种方式可用于应用发布场景。
   * Use Android debug certificate：选择Android自带的调试证书生成SHA256证书指纹，这种方式仅用于应用调试场景。选择该方式后，您可以选择已有的证书文件，也可以选择创建一个新的证书。关于证书的指导可参见[Android证书签名](https://developer.android.google.cn/studio/publish/app-signing#generate-key)。

   点击"Generate"可自动生成证书指纹，如果生成失败，请检查证书信息是否正确，确保证书信息和指纹相匹配，或者根据[生成证书指纹指导](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/android-sdk-config-agc-0000001061560289#section147011294331)手工生成指纹，然后填写到指纹信息框内。

   ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230320174837.18610652197276570674220680242850:50001231000000:2800:19B246FE0E0C9C31E66AD141C77190B775EDDD4EFFE48BA146FE8CA1F085468B.png?needInitFileName=true?needInitFileName=true)

   HMS Toolkit会自动对Map Kit的使用环境进行环境配置检查，包括通用环境配置检查和Kit专用环境配置检查。

   ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230320174837.13656655754166042141745710941728:50001231000000:2800:BA2E594BA9D9FAF3427C86952E1FCFA0FF3E02E6D47532B3FDDA81BAF5987999.png?needInitFileName=true?needInitFileName=true)

   HMS Toolkit会自动处理检查项，并逐项检查是否配置正确。
   * 如果出现环境配置检查失败项，如上图所示，请根据界面提示点击"Link"进行手动设置，也可以点击![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230320174837.77053382143074884114957985534647:50001231000000:2800:952C13677C4B606055B3C4E223E0E80F6F1165C1815090810F1B8D403522EC1C.png?needInitFileName=true?needInitFileName=true)或参见如下表格查看具体处理方法。设置完成后，点击"Retry"重新进行环境配置检查。  

     |序号|环境配置检查项|失败时处理建议|
     |:-|:-----------------------------------------------------------------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
     |1|Obtain the package name of your application|需要提前在AppGallery Connect中创建一个应用，并且对应的包名需要与当前模块的包名保持一致。 说明： HMS Toolkit只会根据当前应用的包名，去AppGallery Connect中查询对应的应用，不会主动创建应用。包名对应的是模块下的build.gradle中android.defaultConfig.applicationId。|
     |2|Check whether there is any app corresponding to your application's package name in AppGallery Connect|需要提前在AppGallery Connect中创建一个应用，并且对应的包名需要与当前模块的包名保持一致。 说明： HMS Toolkit只会根据当前应用的包名，去AppGallery Connect中查询对应的应用，不会主动创建应用。包名对应的是模块下的build.gradle中android.defaultConfig.applicationId。|
     |3|Verify the package name|该配置项是校验包名是否以".huawei"或".HUAWEI"结尾，只有[联运游戏](https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-Guides/appgallerykit-devguide-game-0000001055156905)的应用才需要此限制。|
     |4|Generate a signing certificate|如果选择您生成的证书文件，请检查证书文件是否创建成功，keyPassword和storePassword是否输入正确。|
     |5|Configure signing certificate information|如果选择您生成的证书文件，请检查证书文件是否创建成功，keyPassword和storePassword是否输入正确。|
     |6|Generate a certificate fingerprint|如果选择您生成的证书文件，请检查证书文件是否创建成功，keyPassword和storePassword是否输入正确。|
     |7|Configure the certificate fingerprint in AppGallery Connect|请手工拷贝SHA256证书指纹，填写到"Generate a certificate fingerprint"检查项下面的输入框内，或点击插件界面提示的链接，将SHA256证书指纹填写到应用中。|
     |8|Check whether the data storage location was set|点击插件界面提示的链接，手动设置数据存储区域。|
     |9|Check whether the required xxx Kit service was enabled|开通对应的Kit服务，单击插件界面提示的链接，然后手动开通服务。 服务开通后，还需要在AppGallery Connect界面点击左侧的"项目设置 \> API管理"，打开对应的Kit API。|
     |10|Check whether the required xxx Kit API was enabled|开通对应的Kit服务，单击插件界面提示的链接，然后手动开通服务。 服务开通后，还需要在AppGallery Connect界面点击左侧的"项目设置 \> API管理"，打开对应的Kit API。|
     |11|Download the agconnect-services.json file|确保AppGallery Connect中创建应用的包名与选择的工程模块的包名完全一致。|
     |12|Copy the agconnect-services.json file to the module directory|确保AppGallery Connect中创建应用的包名与选择的工程模块的包名完全一致。|
     |13|Add the HMS Maven repository address to the build.gradle file in the project directory for xxx Kit|无需手动处理。|
     |14|Add dependencies from AppGallery Connect to the build.gradle file in the project directory for xxx Kit|无需手动处理。|
     |15|Add dependencies from AppGallery Connect to the build.gradle file in the module directory for xxx Kit|无需手动处理。|
     |16|Add dependencies from the xxx Kit SDK to the build.gradle file in the module directory|无需手动处理。|
     |17|Configure obfuscation scripts of xxx Kit|无需手动处理。|

   * 如果全部检查项均通过，则可以点击"Go to coding assistant"调用对应的接口，详细操作请参见[Kit集成向导](https://developer.huawei.com/consumer/cn/doc/development/Tools-Guides/coding-assistant-0000001050061057)。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230320174837.49138049441110213052710564096488:50001231000000:2800:92B19942CA6D9579FFC6B94564B91C24C8006B40F3B52502DC7B1321BF186C40.png?needInitFileName=true?needInitFileName=true)  

#### 通过Coding Assistant集成

选择"HMS \> Coding Assistant"，然后在Kit列表中点击"Map Kit"，整个Map Kit的场景如下图：

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230320174837.14652710924887532866301621849230:50001231000000:2800:CB63A94715E35DFE1577439691B4FCB55BDF7DF0EC424843A37BDA5F1C0357DE.png?needInitFileName=true?needInitFileName=true)  

#### 拖拽场景卡片补齐业务代码

选择要进行开发的场景卡片，以"Map Creation"为例，拖拽整个卡片到代码区域生成创建地图的代码。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230320174837.31423605982784648235365423755065:50001231000000:2800:039107C8A732B6CE8D852A7958071612893EBE978411083C4906309A4DEEF695.gif?needInitFileName=true?needInitFileName=true "点击放大")

当您直接拖动场景卡片时，工具会自动生成对应的Activity文件和XML布局文件，并在AndroidManifest.xml、项目级的build.gradle和应用级的build.gradle文件中写入配置信息和工程运行所需要的依赖。如果需要打开该Activity，需要您在代码中主动调用该Activity，完成后，您可以直接在设备中运行应用。  

#### Map Kit场景模拟工具

Map Kit提供场景模拟工具（Develop），可以为您提供端云位置数据比对服务、距离测量服务和路径规划服务。

* 端云位置数据比对服务：详细比对终端设备侧获取的位置数据与云端存储的位置数据，可帮助您进行终端侧位置数据的精确度分析。
* 距离测量服务：在模拟工具中选择起点位置和终点位置，测量起点与终点之间的直线距离。
* 路径规划服务：在模拟工具中选择起点位置和终点位置，工具根据设定的运动方式自动规划行进线路。

场景模拟工具的使用方法如下：

1. 在Map Kit卡片的工具栏中，点击Develop工具，进入场景模拟工具的页面。
2. 选择对应服务的卡片，如Data Comparison（端云位置数据比对）、Distance Calculation（距离测量）和Path Planning（路径规划）。
   * Data Comparison（端云位置数据比对）：
     1. 首先确定模拟地点的位置。Develop工具提供了两种输入地点信息的方式： Simulated position：通过输入地点名称来确定模拟地点的位置。

        Latitude and Longitude：通过输入地点的经纬度来确定模拟地点的位置。

        确定了模拟地点的位置之后，工具会自动查询云端存储的该模拟地点的位置数据。
     2. 获取终端设备侧的模拟地点的位置数据。 Method of Obtaining Device-Side Data：获取终端设备侧的位置数据，可以选择从日志中解析（Log scraping），或者选择手动输入（Manual input）。选择从日志中解析时，需要您将工程运行起来后，点击"Start"，工具会弹出一个窗口展示从日志中解析出的位置数据列表，选择相应的位置数据后点击"Capture"即可抓取该条位置数据，并注入到下图的对比界面中。

     对比界面如图所示。左侧框中的是云端数据，右侧框中的是终端设备侧的数据。点击"Run"即可开始进行端云位置数据比对，橙色表示左右两侧的数据存在差异。

     ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230320174837.78367231332364425721952067969223:50001231000000:2800:6E2E9034206C261FAA8193AD7C502357E2B6DCCBB1309F44327D2050E36208E6.png?needInitFileName=true?needInitFileName=true "点击放大")
   * Distance Calculation（距离测量）：在工具中，输入起点和终点的位置信息（可以输入地点，也可以输入经纬度信息），点击"Run"即可测量起点和终点之间的直线距离。

     ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230320174837.55043133104299060672496502857309:50001231000000:2800:484F7AF6E8364206D788C9EB5C1856B44448D6838794E867163F4DE3BEA20E56.png?needInitFileName=true?needInitFileName=true)
   * Path Planning（路径规划）：在工具中，输入起点和终点位置信息（可以输入地点，也可以输入经纬度信息），并选择Movement state，点击"Run"即可规划出具体的行进路线。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230320174837.54727026460653091645608276970013:50001231000000:2800:03C790BB86D7845CC050FAFBF60FBB9408B5CDB6415E390C5891E28F7C7C6A1A.png?needInitFileName=true?needInitFileName=true "点击放大")  

#### 其他功能

地图交互、在地图上绘制等其他功能请参见相应的卡片和代码片段通过拖拽或者拷贝的方式来进行开发，同时也可以参见[地图服务开发指南](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/android-sdk-config-agc-0000001061560289)中的内容进行手动开发。  

#### 编译、加载、调试

完成上述代码后，可以使用HMS Toolkit中的Cloud Debugging来进行真机调试，具体可以参见[Cloud Debugging](https://developer.huawei.com/consumer/cn/doc/development/Tools-Guides/cloud-debugging-0000001051084360)。  

#### 使用远程真机运行

1. 在菜单栏中选择"HMS \> Cloud Debugging"或者在工具栏点击如下图标。

   ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230320174837.41753544876361426734410008517346:50001231000000:2800:3FA5EEC5C67B0559903C9CC851712AEA3FC7F1944D8D860F5BB8BD30C2049FA7.png?needInitFileName=true?needInitFileName=true "点击放大")
2. 在远程真机界面，您可以根据手机的分辨率、Android版本、EMUI版本及华为手机系列等条件，筛选出需要远程调试的真机，也可以根据真机的状态"Available Devices"进行筛选。

   ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230320174837.06766515167759909792995854730228:50001231000000:2800:8F0161A987A9C2BE40BD96622764E3B80672F7B1876F064F77F11184371D8A8A.png?needInitFileName=true?needInitFileName=true "点击放大")
3. 在菜单栏中点击![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230320174838.35107170949551439152096797677386:50001231000000:2800:AE8BF51E4818AAD96E35BD6A6990C46EC9D4BE823833B5B124ACA8F8981084F0.png?needInitFileName=true?needInitFileName=true)（Run按钮）或![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230320174838.58429805191708980437383246503724:50001231000000:2800:41F08665662FB0ABDB9AA7D37CE352720618A1E7652FB1A3DC545A324B8DBB9A.png?needInitFileName=true?needInitFileName=true)（Debug按钮），在远程真机中运行或调试App。您也可以使用ADB相关命令进行操作，详情请参见[ADB命令](https://developer.android.google.cn/studio/command-line/adb)。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230320174838.71918041376740632776096433075902:50001231000000:2800:2FE2BE73F6CE7FDF321A7FFCFCD795DB2FF4D46F2A7CFE0FFEDD0663FCA82176.png?needInitFileName=true?needInitFileName=true "点击放大")  

#### 使用本地真机运行

在菜单栏中点击![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230320174838.77111629331882581563644501982237:50001231000000:2800:F28A0EF87CFC23EC52392596E887DB240BD365A246153F7774F36E0E3630D91D.png?needInitFileName=true?needInitFileName=true)（Run按钮）或![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230320174838.48835056208376980583180266796334:50001231000000:2800:1804F56B8B2E0F7E45C652944791C3B6A6699B858F533A7AF528053FD71E94DE.png?needInitFileName=true?needInitFileName=true)（Debug按钮），在本地真机中运行或调试App。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230320174838.92247874902619391504202064466133:50001231000000:2800:9F0145580401D1D003B4473BC7A142F941A9ED720FA88E33850B538997CC5B19.png?needInitFileName=true?needInitFileName=true "点击放大")  

#### 使用云测工具测试APK

1. 在菜单栏中选择"HMS \> Cloud Testing"或者在工具栏点击如下图标。

   ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230320174838.38428379844566909226943785946969:50001231000000:2800:69F2E301F40620523483F5366D7DF7A19FF7CF98E2094AC18C5E4F5423FFA71D.png?needInitFileName=true?needInitFileName=true "点击放大")
2. 在"Cloud Testing"中，点击"New Task"。

   ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230320174838.03455801434986375965819430041212:50001231000000:2800:965DF6D766191B11EC24B5FF90B07879860E30BB4A94107344BCA3B17B4E4790.png?needInitFileName=true?needInitFileName=true "点击放大")
3. 配置各项任务参数，点击"Confirm"，启动测试任务。
   * Select Category：选择测试类别。测试类别包括"Compatibility Test"（兼容性测试）、"Stability Test"（稳定性测试）、"Performance Test"（性能测试）和"Consumption Test"（功耗测试）。
   * Please Select Apk File：选择需要测试的APK文件。
   * Test Devices：选择用于测试应用的远程真机。测试稳定性（"Stability Test"）时，只能选择一个设备进行测试，其他测试项可以同时选择多个设备。
   * Test Duration：（可选）仅测试类别选择"Stability Test"生效，设置测试周期，范围为10\~60分钟。

   * Application Classification：（可选）仅测试类别选择"Performance Test"和"Consumption Test"生效，设置应用分类信息。

     ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230320174838.96482510977211551426600140371926:50001231000000:2800:F42140128698F95AB6017218AEC8414F15B9FCB7411DB7982F70EE5879D6D5C0.png?needInitFileName=true?needInitFileName=true "点击放大")
4. 等待测试任务完成后，点击![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230320174838.95641491775044985926823250719336:50001231000000:2800:FBE402682BAD1C828CAF90588890FFAA3A111F7B708FF3C9B9007D8779FFE969.png?needInitFileName=true?needInitFileName=true)查看测试报告。

   ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230320174838.44642126436475230947108486924432:50001231000000:2800:16D1BC404D705A816A5EE0850064649045F66F5A8BF58412DAB0B1B78B196A98.png?needInitFileName=true?needInitFileName=true "点击放大")

   点击"Download report"，可以将测试报告下载到本地，点击![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230320174838.72475066514046848283928583908242:50001231000000:2800:E1EDADC9ABCE315907374CC110D7B0EBC3E820D960A73973D006597117021650.png?needInitFileName=true?needInitFileName=true)，可以查看测试详情。各测试项的报告说明请参见[云测试指南](https://developer.huawei.com/consumer/cn/doc/development/Tools-Guides/prerequisites-0000001073333658)。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230320174838.34166139084029221064246518137265:50001231000000:2800:AC4C1F37FF4657E70405E6D041053EA10AD1BFE9AD42FE07C193CA04EE42C50A.png?needInitFileName=true?needInitFileName=true "点击放大")  

#### Publish to AppGallery Connect

您的应用程序开发、调试完成后，可以直接通过HMS Core提供的Publish to AppGallery Connect功能，将您的应用程序APK文件发布到华为应用市场。

1. 在HMS菜单中，点击"Publish to AppGallery Connect"。
2. 选择团队名称和要发布的APK文件（最大不超过1GB），点击"Upload"完成上传。  
   ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230320174838.95307953790979763148959125432993:50001231000000:2800:8A9A1691C78C6220BE2EC5501B539A93585C05EF2F2E1B8519EC76267952300E.png?needInitFileName=true?needInitFileName=true)  
   上传APK文件会有如下两个检验，如有报错，请修改后重新上传。
   * APK文件的格式必须是release。生成方法请参见[如何在项目工程中生成release.apk文件](https://developer.huawei.com/consumer/cn/doc/development/Tools-Guides/faq-0000001050061059#section9273037134510)。
   * 获取SHA256证书指纹且已经配置到AGC的应用中。操作步骤：在cmd中输入以下命令来读取APK文件的信息值，然后从信息值里获取SHA256证书指纹，再将SHA256证书指纹填写到对应的应用中。

     ```
     >keytool -printcert -jarfile 工程目录下的app-release.apk路径
     ```

     "工程目录下的app-release.apk路径"请根据实际路径进行替换。

   ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230320174838.76841866330180404464811582279870:50001231000000:2800:CBC509D514FEAFA10E255AFFA1586EB1A784263103E8704C2B8B1DE1B610CE24.png?needInitFileName=true?needInitFileName=true "点击放大")
3. 上传完成后，点击"RELEASE"，进入"应用上架 \> 准备提交"页面。

   ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230320174838.49555961395695827159311188206038:50001231000000:2800:0EB470E842C689A71A0638FA8B4CB64E7704F60215AAC9AF7CC6A87EE77360C5.png?needInitFileName=true?needInitFileName=true "点击放大")
4. 填写应用上架的相关信息并提交审核。

   ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230320174838.26827222099570873449973812213994:50001231000000:2800:49E7F4441893CA1254ECEA0E084B095214DDEED52BC2B115EBC917CFD00747F5.png?needInitFileName=true?needInitFileName=true "点击放大")
