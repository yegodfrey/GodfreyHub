---
name: document/cn/des-guides/voice_interaction_process-0000001157991637
title: 标准语音交互流程
uri: https://developer.huawei.com/consumer/cn/doc/des-guides/voice_interaction_process-0000001157991637
source: portal
---

# 标准语音交互流程

**典型流程**

介绍语音对话设计中涉及的界面元素及典型流程。

**界面元素**

典型界面元素包含：

     * 上滑提示（Swipe Hint）。  
---  
     * 语音指令提示（Chip）。  
     * 助手形象（Avatar）。  
     * 半透明遮罩（Mask）。  
     * 屏显指令（ASR）。  
     * 屏显对话（Display Dialog）。  
     * 视觉组件（Visual Component）。  
     * 其他输入方式（Input Methods）。  
  
![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230426185812.70643851732848426848728714862344:50001231000000:2800:3FC726B0770347E45FECE8F6CE6B07A2636E616B3B39FA4BB92C2FC63C4B62D7.jpg?needInitFileName=true?needInitFileName=true)

**典型流程**

「悬浮态唤醒，全屏态反馈」是智慧语音的典型交互流程。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230426185812.28335797791415606672343173778134:50001231000000:2800:B5231FB09F068417CF8670DA3FF788338CFB3D8C49F231056375EBB8F185C399.jpg?needInitFileName=true?needInitFileName=true)

**通用对话**

     * **进入方式**
       * 语音唤醒。
       * 硬按键唤醒。
       * 点击图标唤醒。
     * **退出方式**
       * 导航操作退出。
       * 锁屏后退出。
       * 点击空白处退出（悬浮态有遮罩）。
       * 语音指令退出。
     * **其他**
       * 有 ASR 结果时，胶囊+上滑图标消失，不支持上滑进入全屏。
       * 非收音态，长按电源键重新开始收音；收音时，长按电源键则无需重复响应。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230426185812.56071507472977176245544466185354:50001231000000:2800:28F6A4F37E9602491B2815FECEBC889BE32A5AC28F4C048452EE9474585E7893.jpg?needInitFileName=true?needInitFileName=true)

**悬浮唤醒**

常规情况下，在任意界面唤醒后可展示语音指令建议，收到指令后用 ASR 结果替换提示语。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230426185812.42701180293393977354210168365256:50001231000000:2800:556CC52177D8A90937C6C807C753FBFE2352DF6AA9CDBBB52CE437EEF0BCC94B.jpg?needInitFileName=true?needInitFileName=true)

唤醒后，若没有语音指令输入时，不需要进行反馈。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230426185812.10893978377034223471741070700964:50001231000000:2800:D2B02806C28A104A8CCE92EAD2BC78281BC3544BDD0A76A53F30E30F13022361.jpg?needInitFileName=true?needInitFileName=true)

     * 唤醒后由于异常情况（如，无网络）无法执行操作时，直接提示并退出。
     * 在设备与系统条件允许时，可通过播报和展示异常信息来提示用户。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230426185812.30996930073610907688068260714251:50001231000000:2800:DD78A3BEE202A0E674F56506851C0444B72A6776215ACA62D8303548AEE790BB.jpg?needInitFileName=true?needInitFileName=true)

在收音过程中，用户依然可以通过手动操作，停止当前的语音交互过程。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230426185812.26481496205838209232626747574104:50001231000000:2800:B1E83A104BAB71582033BB487FC2170802874EA0BF91B6BB94CA45753AA73BC4.jpg?needInitFileName=true?needInitFileName=true)

**深度链接技能（Deeplink）**

通过深度链接直接到达某个应用界面，完成语音指令任务（需要端侧应用支持） 流程说明：

     * 不进入全屏态。
     * 播报同时跳转。
     * 播报完直接退出。

指令类型包含：模拟点击，深度链接（DEEPLINK），打开/关闭应用，设置（不含卡片），声音媒体播控。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230426185812.65337070924606318995657268980062:50001231000000:2800:5A1298CAD12D626F83269468FBFC15064E73B88C3B242E883DFCDC6EE6CA00EB.jpg?needInitFileName=true?needInitFileName=true)

**请求词技能**

技能触发方式：

     * BOT 接入的技能均包含「请求词」，在 BOT 服务平台上进行配置，请求词常用应用或小程序名称。
     * 由「请求词」触发的语音技能进入独立对话流程，由开发者定义语音交互流程。
     * 由「请求词」触发的语音技能限制意图垂域，即锁域，跨域的意图将进行异常提示不支持。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230426185812.27113832630691143040027401832971:50001231000000:2800:D043CBDF7A5E0E26125E0D07A60C035FBB54F09F4AC36EA3E9EFDE54E358F14D.jpg?needInitFileName=true?needInitFileName=true)

有限的意图理解：

     * BOT 技能提供对应的异常播报和引导话术。
     * 支持「退出」指令退出技能，并提供播报语。

**模拟点击技能**

通过模仿点击屏幕的方式完成语音指令任务（需要端侧界面支持） 流程说明：

     * 不进入全屏态。
     * 纯语音交互，执行过程中点击遮罩退出。
     * 执行过程中 ASR，TTS 文字可见。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230426185812.26612750209580142845288694167831:50001231000000:2800:EE7E0865A0D6996282564619CB93C6A2526E4D54FDCC084F89D7DE3C20F0635A.jpg?needInitFileName=true?needInitFileName=true)
