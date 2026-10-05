---
name: document/cn/HiCar-Guides/forcibly-stop-playback-0000001120906601
title: 强制停止播放
uri: https://developer.huawei.com/consumer/cn/doc/HiCar-Guides/forcibly-stop-playback-0000001120906601
---

# 强制停止播放

## 场景说明

在HiCar场景中，用户在通过音频应用播放内容时，如果再通过视频应用播放视频，视频应用将抢占音频焦点，此时断开HiCar连接，音频应用重新获得音频焦点后可能在断开后在手机中继续播放，不符合HiCar音频接续的原则。

为了避免出现上述情况，HiCar会在断开连接时，向音频应用发送强制停止播放指令，音频应用收到指令后应立即停止播放，后续即使音频应用重新获得音频焦点也需要继续保持停止播放状态。

## 接口说明

|接口|参数|参数类型|说明|
|:----------------------------------------------------------------|:-----|:-----|:-------------------------------------------|
|MediaSession.Callback.onCustomAction(String action,Bundle extras)|action|String|强制停止播放指令，取值为"hicar.media.action.FORCE_STOP"。|
|MediaSession.Callback.onCustomAction(String action,Bundle extras)|extras|Bundle|无扩展参数。|
[**表1**获取强制停止播放指令接口及参数说明]

## 开发步骤

1. 音频应用在onCustomAction方法中针对action入参识别强制停止播放指令。

   示例代码如下所示：

   ```screen
   @Overrride
   public void onCustomAction(@NonNull String action,@Nullable Bundle extras){
       super.onCustomAction(action,extras);
       Bundle bundle;
       switch(action){
           case "hicar.media.action.FORCE_STOP":
               //停止播放

               break;
           default:
               break;
       }
   }
   ```

2. 音频应用自行完成停止播放及音频焦点变化处理逻辑。
