---
name: document/cn/AppGallery-connect-Guides/manage-prediction-task-0000001285034181
title: 管理预测任务
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/manage-prediction-task-0000001285034181
source: portal
---

# 管理预测任务

#### 前提条件

  * 启用预测服务，请参见[启用预测服务](https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-Guides/agc-prediction-android-0000001053508281#section1621416491176)。
  * 预测服务基于华为分析服务上报的用户行为数据进行预测，因此需集成Analytics Kit SDK，请根据您的应用类型参考相关说明，完成集成动作。 

应用类型 | 集成说明  
---|---  
Android | [参考文档](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/android-integrating-sdk-0000001050161876)  
HarmonyOS | [参考文档](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/harmonyos-integrating-sdk-0000001122915056)  
iOS | [参考文档](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/ios-integrating-sdk-0000001050168479)  
Web | [参考文档](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/javascript-integrating-sdk-0000001051065743)  
快应用 | [参考文档](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/quickapp-integrating-sdk-0000001090944199)  
微信小程序 | [参考文档](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/miniprogram-integrating-sdk-0000001198008599)  
  



#### 操作步骤

  1. 登录[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)网站，点击“我的项目”。
  2. 在项目列表中，找到您需要查看预测任务的项目。
  3. 点击“增长 > 预测”进入预测服务页面。
  4. 点击“预测任务管理”。

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20220927160605.08080470066839564532310427403482:50530926093051:2800:5C87C6BCBEFE9CE3AA305644F87927D9F5391B6F829032BF00222251D1028C66.png?needInitFileName=true?needInitFileName=true)

  5. 在弹出的“预测任务管理”对话框中，根据需求选择相关预测任务，并点击“确定”。 

在配置完成后，若您需要重新开启其他预测任务，也可以通过点击“预测任务管理”进行相关配置。 

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20220927160605.06947121953915796803046185766013:50530926093051:2800:E25DC5676AEBDDAF1CE843C5029A11DD85FE05365149A94D411C2388099FF593.png?needInitFileName=true?needInitFileName=true)

预测任务选择说明：

     * 流失用户预测：当您发现产品用户生命周期过短，用户总是频繁流失时，可以使用预测服务提供的流失用户预测来帮助您及时评估用户流失风险。您可以针对预测生成的高风险流失用户群体，及时调整运营策略，最大程度的挽回用户。
     * 付费用户预测：当您发现产品活跃度很高，但最终的付费转化却很低时，可以使用预测服务提供的付费用户预测来帮助您了解用户付费概率以及这部分用户的行为特征。对未来将付费用户配置限时套餐或者及时调整优化付费体验流程，可有效帮助您的产品增加收入转化。
     * 复购用户预测：拉新成本的高居不下，让企业越来越关注每一个存量用户生命周期的全部价值，引导他们不断复购与持续转化，可帮助产品有效提升盈利能力。复购率越高，也可反映出消费者对品牌的忠诚度越高，用户粘性也就越高。高粘性的用户可帮助产品挖掘更多的潜在用户，从而帮助产品实现良性盈利循环，预测服务的复购预测可帮您解决这一运营难题。

我们将不断贴合业务诉求提供越来越多的系统预置预测任务，您可最多同时订阅并开展4个预置预测任务和2个自定义预测任务。

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20220927160605.58472835165999763555338733742775:50530926093051:2800:F87F8EB9E8F982278D552417EF77B0AFBEF536281EB9818B5394FC63924521B0.png?needInitFileName=true?needInitFileName=true)

  6. （可选）若您需要删除当前已有的预测任务，可以通过如下两种方法： 
     * 点击“预测任务管理”后，在选择“预测任务管理”页面中去勾选待删除的预测任务，并点击“确定”。
     * 在预测服务页面，将鼠标光标移至待删除预测任务，点击右上角的![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20220927160605.48198962523447672421556378935273:50530926093051:2800:F20EBA0C6B4AED8A326568C75F29BFB128E34A8A6624AAC3D66613A4987FFB48.png?needInitFileName=true?needInitFileName=true)，并在弹出的提示框中点击“确定”。

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20220927160605.02422201079888671634786025762865:50530926093051:2800:8F4AA2684FCD940E7E847D9D96C113741D8C870997CA322223D290CC0A70B493.png?needInitFileName=true?needInitFileName=true)

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20220927160605.32500718625858382338948228272671:50530926093051:2800:0F73D8BE47A1FE9E22F737E3867A776823D983DCE0C5D4E2AAA2984615F9AC7D.png?needInitFileName=true?needInitFileName=true)

预测服务支持应用级预测任务管理，即项目下各应用之间的预测任务各自独立，在某个应用下新增或删除预测任务，对该项目下的其他应用无影响。

  7. （可选）如果您有多个应用，在预测服务页面，点击下拉框选择需要查看的预测任务的应用。

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20220927160605.69322488968731001812246484129157:50530926093051:2800:C9D1FFDC7C3C2C902A401F9A09137E8363001EB118F2B49C8035AE56CDA51AAF.png?needInitFileName=true?needInitFileName=true)

  8. 当“任务状态”栏显示“评估成功”时，鼠标光标移动至待查看预测任务后，点击“查看”，进入该预测任务的详情页面。

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20220927160605.01694083188397438121575435373077:50530926093051:2800:3D77699F31CCFC3EE3754285689D852A62971254B63E1A48891EA6DBC331C227.png?needInitFileName=true?needInitFileName=true)

**预测任务状态说明**

任务状态 | 说明  
---|---  
评估成功 | 当前预测任务已完成，可查看预测详情。  
任务准备中 | 预测任务正在进行中，当数据质量满足预测要求时，生成预测结果至少需要24小时。  
活跃用户数量不足 | 应用历史周期内活跃用户数量未达到相关要求，无法完成预测任务。 说明：  历史周期内，不同的预测任务活跃用户数量要求如下：
     * 流失用户预测：应用历史周期内活跃用户数量不足300，无法完成预测任务。
     * 付费用户预测：应用历史周期内活跃用户数量不足300，无法完成预测任务。
     * 复购用户预测：应用历史周期内活跃且付过费的用户不足100，无法完成预测任务。
     * 自定义预测任务：应用历史周期内活跃用户数量不足300，无法完成预测任务。  
事件上报数据量不足 | 应用内事件上报数据不足，无法完成预测任务，建议上报更多事件。  
预测已停用 | 基于历史数据评估，模型效果低于设定阈值，当天预测结果已停用。  
任务执行失败 | 当前预测任务未能完成，新的预测任务正在准备中，请稍后查看。  
  
  9. 在详情页，您可以查看本次预测任务相关概率的人群数量。

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20220927160605.32884756751778221456145502100380:50530926093051:2800:FEE203DC64895BCAFEE6AE70A63C64D1A5A41EC18ACA37125D6F0AD00125D0D2.png?needInitFileName=true?needInitFileName=true)

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20220927160605.49749167799906712081002079376654:50530926093051:2800:D3A68288B466086FD13680794B52CD1BEC82EA9AF72CA39983629E4BAC05E354.png?needInitFileName=true?needInitFileName=true)

所有概率划分维度说明请查看[相关概念](https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-Guides/agc-prediction-introduction-0000001053861674#section260119245347)。

  10. （可选）对于评估成功的预测任务，您可以将鼠标光标移至详情页名处，进行预测任务详情的切换；也可以返回预测页面后，重新选择预测任务查看其详情。

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20220927160605.47150091387925038442511516247585:50530926093051:2800:6231DBE54E280980D81DE76B83839ADE63AB46EF1A9A0D761A28ECCEAA77C063.png?needInitFileName=true?needInitFileName=true)




#### 停止/启用预测任务

针对长期数据不足的预测任务（包含预置和自定义预测任务），系统将自动清理，即当预测任务连续30天未评估成功，则该预测任务将进入停止状态，任务下所创建的受众信息也将被删除。

若您需要重新启用该预测任务，点击“立即启用”，系统提示“启用成功”后即可。

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20220927160605.90191685797518395764379932166128:50530926093051:2800:84970BF23193E458517E256DA69C267C285EE2C390C9ED02F3FB88BF6683E4E0.png?needInitFileName=true?needInitFileName=true)
