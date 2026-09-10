---
name: document/cn/Tools-Guides/analytics-0000001053422075
title: Analytics Kit集成指导
uri: https://developer.huawei.com/consumer/cn/doc/Tools-Guides/analytics-0000001053422075
---

# Analytics Kit集成指导

分析服务（Analytics Kit）预置大量分析模型，可帮助您清晰地了解用户的行为方式，从而实现用户、产品、内容的深度洞察，让您实现基于数据驱动的运营。关于Analytics Kit详细的介绍和使用限制请参见[分析服务业务介绍](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/introduction-0000001050745149)。

Coding Assistant可以帮助您更高效的完成Analytics Kit的集成开发和调试。  

#### Analytics Kit集成开发

请根据[Configuration Wizard](https://developer.huawei.com/consumer/cn/doc/development/Tools-Guides/config-wizard-0000001050059098)完成Analytics Kit的集成环境配置。  

#### Analytics服务初始化

1. 选择"Coding Assistant \> App Services \> Analytics Kit"，点击"Add Analytics to your app"卡片，进入Initialization详情页，选择拖拽或者拷贝的方式将接口对应的代码样例片段拖到代码中，这种方式需要您清楚需要拖拽代码的位置，即可完成Analytics的初始化。

   ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230320174810.40092589473464106607773431192566:50001231000000:2800:DA4030C21B705B58833F6BD76C08F3C0DAFDB44A06B4D16FFF50B2747E0BF31E.png?needInitFileName=true?needInitFileName=true "点击放大")
2. 在(Optional) Set event reporting policies中，可以选择上报策略，通过拖拽或者拷贝的方式添加上报策略的配置参数。 ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230320174810.82230947893220793238401368754455:50001231000000:2800:B201B8E218F4E593635A02A106FE228C548F51405EAE5133F3C411864EFBD93C.png?needInitFileName=true?needInitFileName=true "点击放大")

#### 预置事件和自定义事件

选择"Coding Assistant \> App Services \> Analytics Kit"，点击"Log on Analytics event"卡片。在Log Events中，点击"New Event"添加事件。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230320174810.85070826519465958798170638386768:50001231000000:2800:E23104659C08F6A915C7AFF6BC18D58107FEA631B7BC1026D295CB45E309AA7E.png?needInitFileName=true?needInitFileName=true "点击放大")

添加预置事件

1. 在"Predefined Events"中放置了Analytics SDK根据常用的使用场景而预先定义的[预置事件](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/android-predefined-events-general-0000001051997159)。Analytics SDK推荐优先使用预置事件进行埋点和分析。在"Event ID"中放置了所有预置事件的事件ID，您可通过下拉选择需要的预置事件，查看事件参数及对应的埋点代码样例。此外，您可以点击"OK"并填写"Event Name"将该事件保存到Log Events下的"Predefined Events and Custom Events"中。

   ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230320174810.36956047844343342825477690302002:50001231000000:2800:5038716868C1CD4D676FBD69B5FEE0A3BA0505949904451536E223C3790E2301.png?needInitFileName=true?needInitFileName=true "点击放大")
2. 您可以通过拖拽或者拷贝的方式将需要埋点的事件的代码样例集成到工程中。您只需要在工程中根据实际情况补齐代码样例的参数值，即可完成该事件的埋点。

   ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230320174810.45795918558881983406284947144259:50001231000000:2800:CCC2F5C7408A0FC9A6AB55934A099C8CB050D15100AB43F33CEFF997327A785E.png?needInitFileName=true?needInitFileName=true "点击放大")

添加自定义事件

1. 在"Custom Events"中，您可以自定义事件ID和事件参数，以满足您的个性化分析需求。完成事件定义后，您可以点击"OK"并填写"Event Name"保存该事件到Log Events下的"Predefined Events and Custom Events"中，方便后续进行事件埋点。下面以一次考试的简要信息为例。

   ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230320174810.74640751363569698034246962978928:50001231000000:2800:BA85D3E3C3C595C9577B0CA347610014ECC94AC586E832589E19E4756318BAFE.png?needInitFileName=true?needInitFileName=true "点击放大")
2. 您可以通过拖拽或者拷贝的方式将需要埋点的事件的代码样例集成到工程中。您只需要在工程中根据实际情况补齐代码样例的参数值，即可完成该事件的埋点。

   ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230320174810.41361223487654376734293680841345:50001231000000:2800:99037CA965AD797865FBAC637F58D3D5DBBACDD2DD537C435F01FDA8F97E816D.png?needInitFileName=true?needInitFileName=true "点击放大")
3. 埋点后，您需要到分析服务控制台去注册自定义事件及相关参数。您可以通过点击"Custom Events"界面底部的[Login - My project - Huawei Analytics - Management - Event management](https://developer.huawei.com/consumer/en/service/josp/agc/index.html#/)快捷跳转到分析服务控制台，注册方法请参见[事件管理](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/meta-manage-0000001050985177)。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230320174810.57591818849072267287018988754604:50001231000000:2800:A00FF91B32521F25DFDA0CF8B59AD808DBEDE91FEC68CFC73602D7D95E2A7DD5.png?needInitFileName=true?needInitFileName=true "点击放大")  

#### 模板事件

Analytics Kit为您提供了TOP2热点行业（游戏、教育）的埋点方案模板及代码样例，并提供了[复制代码埋点](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/tracing-point-development-0000001078556280#ZH-CN_TOPIC_0000001078556280__li20401529102419)的埋点方式。Coding Assistant可辅助提高复制代码埋点方式的效率，使您在IDE内即可便捷获取到您应用的埋点方案模板事件的代码样例，并可使用拖拽或者拷贝的方式，将所需代码样例快速集成到工程中。导入模板事件的具体步骤如下：

1. 选择"Coding Assistant \> App Services \> Analytics Kit"，点击"Log on Analytics event"卡片。在Log Events中，点击"Import Event"导入模板事件。

   ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230320174811.92113070117991563417080456513869:50001231000000:2800:0E15D13B7599C9CBD5FF2AF024CB510D762BA9566B71F455F009E1B939C65670.png?needInitFileName=true?needInitFileName=true "点击放大")
2. 选择"Team"和"Module"，确定您正在开发的应用。然后点击"Get App ID and App Secret"获取"App ID"和"App Secret"。最后点击"Next"获取应用的埋点方案模板。

   ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230320174811.31713031293410471732023557932572:50001231000000:2800:87E04455E2C8A8C10B0E14802B0449DEC820B2A12BBC9534D8271F3D747BE10C.png?needInitFileName=true?needInitFileName=true "点击放大")  
   ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230320174811.88935009307564713427438542785837:50001231000000:2800:ED01BB0EF1CAB80E0F31201125441B6E4F983443D5F31CDFB99E3B71A31E4B93.png?needInitFileName=true?needInitFileName=true)  
   * 若您的界面显示错误信息"The AccessToken obtaining failed please check out"，说明您未提前配置应用的埋点方案模板，请根据界面提示点击"AppGallery Connect" ， 在"智能数据接入 \> 埋点开发"中配置模板，详情请参见[埋点开发](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/tracing-point-development-0000001078556280#section205131348192914)。

     ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230320174811.63295181226170389060881493273759:50001231000000:2800:FC3CD6E693A5C63B58D972678C9483125B36C75CF676EE69BCCABC7C784ED68A.png?needInitFileName=true?needInitFileName=true "点击放大")
   * 若您的界面显示错误信息"The region service is not enabled for the project"，说明您未提前开启区域服务，请根据界面提示点击"AppGallery Connect" ，在"我的项目"中找到需要开通分析服务的应用， 点击"华为分析"下的任意菜单，并点击"启动分析服务"即可开通分析服务。最后在"项目接入设置"页面设置数据处理位置。详情请参见[开通服务](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/service-enabling-0000001050745155)。

     ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230320174811.50339085365249848156566986894675:50001231000000:2800:BC17F597CCB1B61C661A3D55191A12D025148B31C1452A53156B00769594D143.png?needInitFileName=true?needInitFileName=true "点击放大")
3. 在"Import Event"界面中，左侧为模板列表，点击需要导入的模板，在"Event ID"下可查看该模板下的所有模板事件。点击"Batch Import"，即可导入该模板下的所有模板事件。模板事件被保存在"Template Events"中。

   ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230320174811.29253289696693556563025452114040:50001231000000:2800:13AC4379CE8365F2A552DE32502A6A613848A9B077994D0DCB1746A692C3136B.png?needInitFileName=true?needInitFileName=true "点击放大")
4. 您可以通过拖拽或者拷贝的方式将需要埋点的事件的代码样例集成到工程中。您只需要在工程中根据实际情况补齐代码样例的参数值，即可完成该事件的埋点。  
   ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230320174811.67765921406507246153253991918627:50001231000000:2800:7AE2D42F4481A5ACDE6796EDE43A669FEEBBA40BB5E4C3969A91C69970C8159B.png?needInitFileName=true?needInitFileName=true "点击放大")  
   ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230320174811.58869388385710089447302101276029:50001231000000:2800:BB9B486A43FC361BC52FD45156D07AD6DAAB0405DE30BF2344B1295A01BF80FE.png?needInitFileName=true?needInitFileName=true)  
   * 如果您想要生成某个埋点方案模板的分析报告，您需要完成该模板下所有模板事件的埋点。
   * 当完成埋点开发后，通过埋点验证模块可以帮助您快速验证已埋点事件是否埋点正确，详情请参见[埋点验证](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/tracing-point-verification-0000001078204748)。
   * 若您已经将某个埋点方案模板导入到"Template Events"中，并在分析服务控制台中更新了该模板的事件数据，您可以再次点击"Import Event"打开导入模板事件的面板，Coding Assistant会自动识别模板事件的变动信息，并提醒您更新。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230320174811.19919040514026859199688147732778:50001231000000:2800:72FF08434FD7CE89E5033C24CB9B586DCBC03CE76D574E19C5618A08C5FDC0B6.png?needInitFileName=true?needInitFileName=true "点击放大")  

#### 设置用户属性

1. 选择"Coding Assistant \> App Services \> Analytics Kit"界面，点击"Log on Analytics event"卡片。在"Set UserProfile"中，点击"Set UserProfile"，在弹出的"New UserAttributes"页面内编辑用户属性。一次最多可以设置25个用户属性。用户属性值需要您根据实际需求自己填写，填写完成点击"OK"保存该用户属性。

   ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230320174811.88502096171441338288407586183671:50001231000000:2800:697B7D578E416D4546756B8747028F910CDC33026B34273B367872E4F10B983E.png?needInitFileName=true?needInitFileName=true "点击放大")
2. 将该用户属性对应的逻辑代码拖拽或者拷贝到您指定的应用程序中，其中包含的参数值需要您根据实际需要自己填写，即可完成该用户属性的记录。

   ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230320174811.33673241362797594204020696847050:50001231000000:2800:A9A35B2E6BA65CFD272AFA926E87E08F122C4B52A1BEE932B53AE635FBE595BA.png?needInitFileName=true?needInitFileName=true "点击放大")

   完成了事件和用户属性的记录的代码逻辑如下。

   ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230320174811.17505392862354839574261105135742:50001231000000:2800:3310883F7A79C279EF018407B1BFAEAF24B0711CC20053FD6D272EEF90D337C0.png?needInitFileName=true?needInitFileName=true "点击放大")
3. 如果您想要删除用户属性，在"Delete UserProfile"中，将对应的逻辑代码拖拽或者拷贝到您指定的应用程序中，即可删除用户属性信息。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230320174811.83427983595997185077573618757043:50001231000000:2800:9593024FFB385AC2CF13C1F883CF210AF1AF2C2CABB83AAB74C27CDED21E4DAC.png?needInitFileName=true?needInitFileName=true "点击放大")  

#### Analytics接入调试

在开发过程中可以启用调试模式，所有事件将实时上报，您可在"华为分析 \> 应用调试"页面实时查看上报的数据，观察具体结果并根据需要进行调整。

1. 在Analytics Kit卡片中，点击工具栏中的"Analytics Model"，可以启动或关闭调试模式。
   * "Analytics Model"显示绿色圆点表示启动调试模式，所有事件将实时上报。
   * "Analytics Model"显示灰色圆点表示关闭调试模式，暂停事件上报。

   ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230320174811.59049057970987337855061025344119:50001231000000:2800:3230CE271E3D52A862DAC2488A77BD469AFDD32706EEF03954854BF85CBE5DE8.png?needInitFileName=true?needInitFileName=true "点击放大")
2. 调试模式启动后，所有事件将实时上报至AppGallery Connect网站。点击工具栏中的"App Debugging"，登录AppGallery Connect网站。点击"我的项目"图标，选择需要查看分析数据的应用，选择"华为分析 \> 应用调试"页面，实时查看应用上报的数据。详情请参见[应用调试](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/app-debugging-0000001051799712)。

   ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230320174811.42857580966783717183541145352875:50001231000000:2800:CDDDC9CF9D3A999C5A21A64D29CB3862C481523462D670DA6AD67152C34A86AB.png?needInitFileName=true?needInitFileName=true "点击放大")
