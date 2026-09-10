---
name: document/cn/AppGallery-connect-Guides/gamemme-setvolume-ios-0000002126450493
title: 设置扬声器播放音量
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/gamemme-setvolume-ios-0000002126450493
---

# 设置扬声器播放音量

进入语音房间后，玩家如果希望控制房间音量，可通过设置扬声器播放音量实现，房间中任意玩家的声音都按设置的音量大小通过扬声器播出。  

#### 前提条件

您已[加入房间](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/gamemme-joinroom-roomid-ios-0000001323024589)。  

#### 开发步骤

调用[HWPGMEngine.getInstance adjustPlaybackVolume](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/gamemme-hwpgmengine-ios-0000001272768358#section13176167915)方法设置扬声器播放音量，调整房间扬声器播放音量增益值，并通过返回值获得操作结果。

```
HWPGMEngine *pgmeEngine = [HWPGMEngine getInstance];
int result = [pgmeEngine adjustPlaybackVolume:volume];
```

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250110102429.35722313223256123293290237910963:50001231000000:2800:83EC0FFABB44AAF9E0671C62623EF599FE6907EFEFD631CF36CACF34A261659D.png?needInitFileName=true?needInitFileName=true)  
* 进入语音房间后，扬声器播放音量默认是10，表示原始音量，无增益，10以下表示负增益，10以上表示正增益。
* 调用此接口设置音量值不影响系统音量。  
