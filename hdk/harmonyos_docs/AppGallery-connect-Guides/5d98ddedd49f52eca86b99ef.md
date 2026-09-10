---
name: document/cn/AppGallery-connect-Guides/gamemme-engine-minigame-0000001652939493
title: JS（小游戏）
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/gamemme-engine-minigame-0000001652939493
---

# JS（小游戏）

调用相关接口需要先完成初始化，初始化是通过创建实例来实现的。  
![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250424164754.91959045649081039246718035507436:50001231000000:2800:357CB49D290FBFCDECA76D02E741E7D7A5C549ABF45A57C7FDD8D9BDE9B9F79C.png)  
游戏多媒体服务语音相关功能需使用麦克风，因此，您需要在设备中打开应用的麦克风访问权限。  

#### 前提条件

* 您已[开通游戏多媒体服务](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/gamemme-enable-0000001327201553)。
* 您已[集成游戏多媒体SDK](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/gamemme-integratingsdk-minigame-0000001604579198)。  

#### 创建对象

在进行录制与播放语言信息等操作前，需先完成游戏多媒体对象的创建。  
![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250424164754.88492996408450434865849066351136:50001231000000:2800:7E640516AFCC421580E26244F61138AE3B3A789ECF62A5F0E662C0F0B8DE9F9A.png)  
游戏启动后，仅需要维护一个对象即可。

1. 构造游戏多媒体对象参数。  
   ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250424164754.91273092569860800763109049701169:50001231000000:2800:108418229D2E6CD3F031B9998E529874EAC71FAA574C4607A8354A96C293A61C.png)  
   * 为了提升服务的安全性，初始化SDK时，您还可以通过在您的服务器中计算出签名的方式进行安全加固，增强数据防篡改能力，具体请参见[使用签名初始化SDK](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/gamemme-signature-minigame-0000001603619734)。如果您已[开启安全加固](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/gamemme-console-servicemanagement-0000001255134391#section92517364165)，则必须使用签名初始化SDK。
   * "clientSecret"和"cpAccessToken"传入其一即可。基于安全考虑，推荐您使用cpAccessToken。如果同时传入，将使用传入的"cpAccessToken"作为最终AGC接入凭证。"cpAccessToken"主要是通过在您的服务器中编写一段调用获取Token接口的代码进行获取，具体请参见[获取Token（项目级）](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/obtaintoken-0000001550601918)。

   ```
   const options: EngineCreateParams = {
     openId: '123',                    // 玩家ID
     clientId: '1a2b3c**4d5e6f',       // 客户端ID,具体获取请参见准备游戏信息
     appId: '123***57',                // 应用ID,具体获取请参见准备游戏信息
     clientSecret: 'a0b9c8***d7e6f5',  // 客户端ID对应的密钥,具体获取请参见准备游戏信息
     cpAccessToken: '1qa2ws***3zx3dc', // AGC接入凭证（推荐）
     apiKey: 'DAE***wnKd'              // API密钥（凭据）,仅实现语音转文本功能时需要,具体获取请参见准备游戏信息
   };
   ```

2. 调用[GameMediaEngine.create](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/gamemme-gamemediaengine-minigame-0000001653420005#section366172114616)方法创建游戏多媒体对象。

   ```
   GameMediaEngine.create(options).then((gameMediaEngine) => {
     const gameMediaEngine = gameMediaEngine;
   }).catch((e) => {
     // 初始化多媒体对象异常
     console.log("code:" + e.code + ", msg:" + e.message); // 异常类型请参见ErrorResult
   });
   ```

   ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250424164754.53787973087427849834235724746470:50001231000000:2800:A722478E09A89A58D72251E53EE63680BDCCDA218C50D9F2892A80643315BD5A.png)  
创建游戏多媒体对象会自动检测运行环境是否兼容游戏多媒体服务SDK。当运行环境为华为快游戏、微信小游戏、支付宝小游戏和字节跳动小游戏时，若版本太低不支持游戏多媒体服务SDK，会返回错误码[3002](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/gamemme-errorresult-minigame-0000001673697934#ZH-CN_TOPIC_0000001673697934__p16679121734016)。当运行环境为华为快游戏、微信小游戏、支付宝小游戏和字节跳动小游戏以外的环境时，会返回错误码[3001](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/gamemme-errorresult-minigame-0000001673697934#ZH-CN_TOPIC_0000001673697934__p14444914145719)。  

#### 销毁对象

如需退出游戏应用，建议先完成对象销毁，减少内存资源的占用。

1. 调用[GameMediaEngine.destroy](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/gamemme-gamemediaengine-minigame-0000001653420005#section36632216465)方法销毁游戏多媒体对象。

   ```
   gameMediaEngine.destroy();
   ```

2. 销毁游戏多媒体对象时，可在[GameMediaEngine.on](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/gamemme-gamemediaengine-minigame-0000001653420005#section1487511413163)接口中监听"destroyEngine"事件，并实现该事件的回调处理。

   ```
   GameMediaEngine.on("destroyEngine", (code: number, msg: string) => this.destroyEngine());
   private destroyEngine() {
       // 资源清理
   }
   ```

