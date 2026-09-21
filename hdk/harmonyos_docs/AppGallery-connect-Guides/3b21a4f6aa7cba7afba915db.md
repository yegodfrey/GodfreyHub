---
name: document/cn/AppGallery-connect-Guides/gamemme-voicetotext-harmonyos-0000001854024693
title: HarmonyOS NEXT
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/gamemme-voicetotext-harmonyos-0000001854024693
---

# HarmonyOS NEXT

## 前提条件

* 您已[开启语音转文本功能](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/gamemme-console-servicemanagement-0000001255134391#section157881245131518)。
* 您已[集成游戏多媒体基础SDK和语音消息模块](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/gamemme-integratingsdk-harmonyos-0000001717945166#ZH-CN_TOPIC_0000001717945166__li16904125719267)。
* 您已[创建游戏多媒体实例](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/gamemme-engine-harmonyos-0000001718417486#section1093713161034)。
* 您已[开通机器学习服务](https://developer.huawei.com/consumer/cn/doc/hiai-Guides/enable-service-0000001050038078)。

## 开发步骤

1. 实例化[VoiceParam](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/voiceparam-harmonyos-0000001854029097)对象，构造语音转文本的必要参数。

   ```screen
   let voiceParam: VoiceParam = {
     languageCode: 'zh'
   };
   ```

2. 调用[GameMediaEngine.startRecordAudioToText](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/gamemme-gamemediaengine-harmonyos-0000001732273982#section136231037195510)方法开始录音。 说明
   >
   > 录入语音的时间最长10s，超过10s将自动结束录音。

   ```screen
   gameMediaEngine.startRecordAudioToText(voiceParam);
   ```

3. 调用[GameMediaEngine.stopRecordAudioToText](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/gamemme-gamemediaengine-harmonyos-0000001732273982#section1610815395556)方法停止录音，语音内容将自动转写成文本内容。 说明
   >
   > 如果录入的语音无实质内容，则将会导致语音转文本失败。

   ```screen
   gameMediaEngine.stopRecordAudioToText();
   ```

4. 当转写文本完成时，可在EventHandler接口的[onVoiceToText](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/gamemme-eventhandler-harmonyos-0000001732136356#section89281254516)方法中实现该事件的回调处理。

   ```screen
   onVoiceToText(text: string, code: number, msg: string) {
      console.log('onVoiceToText : text=' + text + ', code=' + code + ', reason=' + msg);
   }
   ```

