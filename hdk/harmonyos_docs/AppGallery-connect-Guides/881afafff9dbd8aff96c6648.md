---
name: document/cn/AppGallery-connect-Guides/gamemme-enablespeakersdetection-csharp-0000001226898346
title: 获取当前发言玩家列表
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/gamemme-enablespeakersdetection-csharp-0000001226898346
---

# 获取当前发言玩家列表

通过本章的开发指导，您可实现获取房间内当前发言玩家列表的功能。  

#### 前提条件

玩家已[加入](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/gamemme-joinroom-roomid-csharp-0000001226738398)房间。  

#### 开发步骤

通过设置音量回调的时间间隔来开启音量回调，并通过音量回调接口获取当前发言玩家ID列表。

1. 调用[GameMediaEngine.EnableSpeakersDetection](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/gamemme-gamemediaengine-csharp-0000001231889118#section2174114234915)方法开启音量回调，用于获取当前房间发言玩家列表。

   ```
   ...
   GameMediaEngine engine = GetEngineInstance();
   if (engine == null)
   {
       return;
   }
   engine.EnableSpeakersDetection(String roomId, int interval);
   ```

2. 当开启音量回调成功时，您可通过相关回调方法获得当前发言玩家的ID列表等信息，并进行相关回调处理。  
   ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20241105115843.11555494536375187622418668895482:50001231000000:2800:EADD20BAB718B428486CE6A08FA1B0B213406E83C218D86D3DC8FD0562424217.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)  
   根据当前发言玩家的音量大小排序，列表中最多可展示当前4个发言玩家。
   * 所有版本SDK：由于游戏多媒体SDK已对回调函数[onSpeakersDetection](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/gamemme-igamemmeeventhandler-csharp-0000001278554161#section11456134011813)进行了封装，您只需注册OnSpeakersDetectionCompleteEvent事件监听，并实现OnSpeakersDetectionCompleteCallback委托函数即可。

     ```
     // 对开启音量回调事件进行监听
     GMMEEnginHolder.GetInstance().GetGameMMEEventHandler().OnSpeakersDetectionCompleteEvent += OnSpeakersDetectionImpl;

     // 监听处理
     private void OnSpeakersDetectionImpl(List<string> openIds) 
     {
        // 根据返回结果做相应业务逻辑处理
     }
     ```

   * 1.8.1.300（含）及以上版本游戏多媒体SDK：由于游戏多媒体SDK已对回调函数[onSpeakersDetectionEx](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/gamemme-igamemmeeventhandler-csharp-0000001278554161#section160693412018)进行了封装，您只需注册OnSpeakersDetectionExCompleteEvent事件监听，并实现OnSpeakersDetectionExCompleteCallback委托函数即可。

     ```
     // 对开启音量回调事件进行监听
     GMMEEnginHolder.GetInstance().GetGameMMEEventHandler().OnSpeakersDetectionExCompleteEvent += OnSpeakersDetectionExImpl;

     // 监听处理
     private void OnSpeakersDetectionExImpl(List<VolumeInfo> userVolumeInfos) 
     {
        // 根据返回结果做相应业务逻辑处理
     }
     ```

