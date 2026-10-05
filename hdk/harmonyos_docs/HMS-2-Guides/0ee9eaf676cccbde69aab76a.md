---
name: document/cn/HMS-2-Guides/hmssdk_jointOper_gameAntiAddiction
title: 游戏防沉迷（废弃）
uri: https://developer.huawei.com/consumer/cn/doc/HMS-2-Guides/hmssdk_jointOper_gameAntiAddiction
source: portal
---

# 1. 场景介绍

根据《[国家新闻出版署关于防止未成年人沉迷网络游戏的通知](http://www.sapprft.gov.cn/sapprft/contents/6588/407807.shtml)》的要求提供了防沉迷接入方案，中国大陆发布的游戏需要开发者按照上述通知结合游戏自身完成游戏防沉迷功能的开发。

防沉迷处理的业务逻辑如下图所示。

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20200225200634.06884406443338652907239145491349:50510916032944:2800:EDD67A7682A5A9F33F4F490331036739924B8D77DFE4DE5C732DB756349829C5.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)

# 2. 业务流程

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20200225200645.47064574524603836463953701489980:50510916032944:2800:FB36E011565EEA9C727F0EF68779CA5846AF5E03EED4033CB339E4E5DFE547F6.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)

说明：

游戏防沉迷涉及的[getCertificationIntent](https://developer.huawei.com/consumer/cn/doc/development/HMS-2-References/hmssdk_jointOper_api_reference_c24)和[getCertificationInfo](https://developer.huawei.com/consumer/cn/doc/development/HMS-2-References/hmssdk_jointOper_api_reference_c23)接口没有严格的先后调用顺序，如何调用接口以及调用的时机可以由开发者按照《网络游戏防沉迷系统开发标准》结合自身应用的逻辑自行设计，本业务流程仅作为示例供开发者参考。

  


1\. 应用统计用户的游戏累计时长，游戏时间超时应用判断需要进行防沉迷处理。  


2\. 应用调用[getCertificationInfo](https://developer.huawei.com/consumer/cn/doc/development/HMS-2-References/hmssdk_jointOper_api_reference_c23)接口检查用户的实名认证情况。

3\. HMS SDK向应用返回用户的实名认证信息。

4\. 应用根据返回结果的hasAdult参数判断是否需要实名认证。  
● 如果hasAdult为-1，表示未实名认证，转到下一步。  
● 如果hasAdult为0或1，表示已实名认证，应用可以记录用户的实名认证情况备用。

5\. 应用调用[getCertificationIntent](https://developer.huawei.com/consumer/cn/doc/development/HMS-2-References/hmssdk_jointOper_api_reference_c24)接口请求获取实名认证页面。

6\. HMS SDK向应用返回包含实名认证页面的Intent对象。

7\. 应用根据Intent对象跳转至实名认证页面。

8\. 用户在实名认证页面中进行实名认证。

9\. 认证成功后HMS SDK向应用返回页面的响应消息。

10\. 在用户已实名认证成功后，应用可以调用[getCertificationInfo](https://developer.huawei.com/consumer/cn/doc/development/HMS-2-References/hmssdk_jointOper_api_reference_c23)接口检查用户是否成年。。

11\. HMS SDK通过回调方式向应用返回用户是否成年。

12\. 应用返回结果的hasAdult参数进行防沉迷设置。  
   ● 如果hasAdult为1，表示用户已成年，则不纳入防沉迷系统。  


   ● 如果hasAdult为0，表示用户未成年，则需要将用户纳入防沉迷系统。

# 3. 注意事项

● 游戏防沉迷功能相关接口目前仅对中国大陆用户有效。  


● 2.6.3.300及以上版本的HMS SDK才支持getCertificationInfo和getCertificationIntent接口，2.6.3.300以下版本调用这两个接口会直接返回907135002错误码。

# 4. 开发步骤

游戏防沉迷涉及应用的关键开发步骤如下：

1、调用[getCertificationInfo](https://developer.huawei.com/consumer/cn/doc/development/HMS-2-References/hmssdk_jointOper_api_reference_c23)接口。  
● 应用根据回调结果中的hasAdult参数判断用户的实名认证信息。  
● 如果HMS SDK版本低于2.6.3.300版本，调用接口时会直接返回907135002错误码，需要开发者在收到错误码后根据自身业务逻辑做响应处理或不处理。  


示例代码如下：
      
      1. public void getCertificationInfo (){
        2.    HMSAgent.Game.getCertificationInfo(new GetCertificationInfoHandler() {
        3.         @Override
        4.         public void onResult(int resultCode, PlayerCertificationInfo certificationInfo) {
        5.             if(resultCode == CommonCode.OK && certificationInfo != null) {
        6.                 int statusCode = certificationInfo.getStatus().getStatusCode();
        7.                 if(statusCode == GameStatusCodes.GAME_STATE_SUCCESS) {
        8.                     // TODO: 通过 certificationInfo.hasAdault()获取实名认证结果，储存结果已进行后续处理
        9.                                                 showLog("is CertificateAdult:" + certificationInfo.hasAdault());
        10.                     }
        11.                 else{
        12.                     showLog("getPlayerCertificationInfo result:" + statusCode);
        13.                 }
        14.             }
        15.             else {
        16.                 showLog("getPlayerCertificationIntent resultCode:" + resultCode);
        17.             }
        18.         }
        19.     });
        20. }
    
    

2、调用[getCertificationIntent](https://developer.huawei.com/consumer/cn/doc/development/HMS-2-References/hmssdk_jointOper_api_reference_c24)接口。  
● 应用可以通过getStatus().getStatusCode()方法获取实名认证信息。  
-  如果为0，表示未实名认证。应用需要使用getCertificationIntent()方法获取回调结果中的intent对象，通过startActivityForResult方法跳转至实名认证页面。  
-  如果为1，表示已实名认证，应用需要继续查询用户是否成年。  
● 如果HMS SDK版本低于2.6.3.300版本，调用接口时会直接返回907135002错误码，需要开发者在收到错误码后根据自身业务逻辑做响应处理或不处理。  


示例代码如下：
      
      1. public void getCertificationIntent () {
        2.     HMSAgent.Game.getCertificationIntent(new GetCertificationIntentHandler() {
        3.         @Override
        4.         public void onResult(int resultCode, CertificateIntentResult result) {
        5.             if(resultCode == CommonCode.OK && result != null) {
        6.                 int statusCode = result.getStatus().getStatusCode();
        7.                 if(statusCode == GameStatusCodes.GAME_STATE_SUCCESS) {
        8.                     showLog("GetCtfIntent success, Start intent");
        9.                     /**
        10.                      * 拉起实名认证页面
        11.                      */
        12.                     Intent intent = result.getCertificationIntent();
        13.                     startActivityForResult(intent,1000);
        14.                 }
        15.                 else {
        16.                     showLog("getPlayerCertificationIntent onResult:" + statusCode);
        17.                 }
        18.             }
        19.             else
        20.             {
        21.                 showLog("getPlayerCertificationIntent resultCode:" + resultCode);
        22.             }
        23.         }
        24.     });
        25. }
    
    

3、应用根据查询的实名结果确认是否将用户纳入游戏防沉迷系统，此处由开发者自行完成。
