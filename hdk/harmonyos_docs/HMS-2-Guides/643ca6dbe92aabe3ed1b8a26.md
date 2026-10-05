---
name: document/cn/HMS-2-Guides/hmssdk_huaweiid_devguide
title: 帐号服务开发指南（废弃）
uri: https://developer.huawei.com/consumer/cn/doc/HMS-2-Guides/hmssdk_huaweiid_devguide
source: portal
---

# 1\. 功能说明

华为帐号是用户访问华为云业务的凭证，拥有华为帐号的用户，可以使用华为云业务，如华为云服务、华为游戏中心、华为应用市场云业务等。  


华为帐号在全球的用户数量已达到数亿的规模，通过华为帐号开放服务，应用可以方便、安全、快速的获取用户，从而迅速推广应用，共享华为庞大的用户价值。  
华为帐号的开放基于OAuth2.0协议标准，在获得用户授权后，应用可以获取到用户在华为帐号系统的基本信息，如OpenId、显示名称、头像等。  
华为帐号提供了登录授权和注销授权接口。分别用于获取用户华为帐号信息和注销授权。

# 2\. 初始化Agent

## 2.1 调用init接口

在application的onCreate方法中初始化HMSAgent。如果没有自己的application类，请创建并在manifest文件中配置application节点的name属性。  


示例代码如下：
      
      1. public class MyApplication extends Application {
        2.     @Override
        3.     public void onCreate() {
        4.         super.onCreate();
        5.         HMSAgent.init(this);
        6.     }
        7. }
    
    

## 2.2 调用connect接口

示例代码如下：
      
      1. HMSAgent.connect(this, new ConnectHandler() {
        2.     @Override
        3.     public void onConnect(int rst) {
        4.         showLog("HMS connect end:" + rst);
        5.     }
        6. });
    
    

# 3\. 登录华为帐号

## 3.1 场景介绍

华为帐号服务提供了应用接入华为帐号系统的能力。可以帮助开发者安全快速的获取用户，享用华为庞大的用户价值。同时也为享用华为其他云服务能力提供了基础。  
下面3幅图展示了某应用使用华为帐号登录的场景：

**图2-1 帐号服务登录场景图**

![](https://obs.cn-north-2.myhwclouds.com/hms-ds-wf/b/16c76bed-1654-4639-9640-cc51c48c671f.png)| ![](https://obs.cn-north-2.myhwclouds.com/hms-ds-wf/b/f77252df-faae-49b4-a280-d65e0af50030.png)| ![](https://obs.cn-north-2.myhwclouds.com/hms-ds-wf/b/79caef22-1636-4a75-bef4-533faaf9333f.png)  
---|---|---  
  
左图：开发者应用界面展示华为帐号授权入口。

中图：开发者应用调用HMS帐号服务登录授权接口，华为帐号展示授权页面。  
右图：用户登录授权后，开发者应用展示获取到的用户信息（头像、名称等）。

## 3.2 受限说明

目前华为帐号支持的地区有（支持的地区后期可能有所增加）：  
阿富汗,阿尔巴尼亚，阿尔及利亚，安道尔，安哥拉，安圭拉，安提瓜和巴布达，阿根廷，亚美尼亚，阿鲁巴，澳大利亚，奥地利，阿塞拜疆，巴哈马，巴林，孟加拉，巴巴多斯，白俄罗斯，比利时，伯利兹，贝宁，玻利维亚，波黑，博茨瓦纳，巴西，文莱，保加利亚，布基纳法索，布隆迪，柬埔寨，喀麦隆，佛特角，开曼群岛，中非，乍得，智利，中国大陆，哥伦比亚，科摩罗，刚果布，刚果金，库克群岛，哥斯达黎加，克罗地亚，古巴，塞浦路斯，捷克，丹麦，吉布提，多米尼加共和国，厄瓜多尔，埃及，萨尔瓦多，赤道几内亚，厄立特里亚，爱沙尼亚，埃塞俄比亚，法罗群岛，斐济，芬兰，法国，法属圭亚那，法属波利尼西亚，加蓬，冈比亚，格鲁吉亚，德国，加纳，直布罗陀，希腊，格陵兰岛，格林纳达，瓜德罗普，危地马拉，几内亚，几内亚比绍，圭亚那，海地，洪都拉斯，中国香港，匈牙利，冰岛，印度，印度尼西亚，伊朗，伊拉克，爱尔兰，以色列，意大利，科特迪瓦，牙买加，日本，约旦，哈萨克斯坦，肯尼亚，科威特，吉尔吉斯斯坦，老挝，拉脱维亚，黎巴嫩，莱索托，利比里亚，利比亚，列支敦士登，立陶宛，卢森堡，中国澳门，北马其顿，马达加斯加，马拉维，马来西亚，马尔代夫，马里，马耳他，马提尼克岛，毛里塔尼亚，毛里求斯，马约特，墨西哥，摩尔多瓦，摩纳哥，蒙古，黑山，蒙特塞拉特岛，莫桑比克，缅甸，纳米比亚，瑙鲁，尼泊尔，荷兰，荷属安的列斯，新西兰，尼加拉瓜，尼日尔，尼日利亚，挪威，阿曼，巴基斯坦，巴勒斯坦，巴拿马，巴布亚新几内亚，巴拉圭，秘鲁，菲律宾，波兰，葡萄牙，波多黎各，卡塔尔，留尼汪，罗马尼亚，卢旺达，圣卢西亚，圣马力诺，圣多美和普林西比，沙特阿拉伯，塞内加尔，塞尔维亚，塞舌尔，塞拉利昂，新加坡，斯洛伐克，斯洛文尼亚，所罗门群岛，索马里，南非，西班牙，斯里兰卡，苏丹，苏里南，斯威士兰，瑞典，瑞士，叙利亚，中国台湾，塔吉克斯坦，坦桑尼亚，泰国，多哥，汤加，特立尼达和多巴哥，突尼斯，土耳其，土库曼斯坦，乌干达，乌克兰，阿联酋，英国，乌拉圭，乌兹别克斯坦，梵蒂冈，委内瑞拉，越南，英属维尔京群岛，也门，赞比亚，津巴布韦。

## 3.3 开发步骤

### 3.3.1 开发者客户端调用signIn接口  


调用signIn接口及处理回调，接口详细定义请参见[signIn](https://developer.huawei.com/consumer/cn/service/hms/catalog/HwJointOperationApp.html?page=hmssdk_jointOper_app_api_reference_c1)，实现登录的示例代码如下：
      
      1. HMSAgent.Hwid.signIn(forceLogin, new SignInHandler() {
        2.     @Override
        3.     public void onResult(int rtnCode, SignInHuaweiId signInResult) {
        4.         if (rtnCode == HMSAgent.AgentResultCode.HMSAGENT_SUCCESS && signInResult != null) {
        5.             // 可以获取帐号的 openid，昵称，头像 at信息
        6.             showLog("登录成功=========");
        7.             showLog("昵称:" + signInResult.getDisplayName());
        8.             showLog("openid:" + signInResult.getOpenId());
        9.             showLog("accessToken:" + signInResult.getAccessToken());
        10.             showLog("头像url:" + signInResult.getPhotoUrl());
        11.         } else {
        12.             showLog("登录---error: " + rtnCode);
        13.         }
        14.     }
        15. });
    
    

  


# 4\. 注销华为帐号授权

## 4.1 场景介绍

注销华为帐号授权后，再次登录会出现短暂的授权界面，影响用户体验，所以建议除了以下情况，不要轻易注销华为帐号授权。  
当signIn获取的accessToken在访问网关时返回失效，重新获取的accessToken访问仍然失效时，可注销后清除HMS Core APK的缓存，然后再次登录华为帐号获取新的accesstoken。

## 4.2 受限说明

参见 3.2 受限说明

## 4.3 开发步骤

### 4.3.1 开发者客户端调用signOut接口

调用signOut接口及处理回调，接口详细定义请参见[signOut](https://developer.huawei.com/consumer/cn/service/hms/catalog/HwJointOperationApp.html?page=hmssdk_jointOper_app_api_reference_c2)，实现注销华为帐号授权的示例代码如下：
      
      1. HMSAgent.Hwid.signOut(new SignOutHandler() {
        2.     @Override
        3.     public void onResult(int rtnCode, SignOutResult signInResult) {
        4.         if (rtnCode == HMSAgent.AgentResultCode.HMSAGENT_SUCCESS && signInResult != null) {
        5.             showLog("退出登录成功");
        6.         } else {
        7.             showLog("退出登录失败:" + rtnCode);
        8.         }
        9.     }
        10. });
    
    
