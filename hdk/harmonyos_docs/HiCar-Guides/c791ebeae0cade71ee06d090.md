---
name: document/cn/HiCar-Guides/voice-status-0000001053059443
title: 语音空闲/唤醒状态
uri: https://developer.huawei.com/consumer/cn/doc/HiCar-Guides/voice-status-0000001053059443
---

# 语音空闲/唤醒状态

## 场景说明

车机的语音唤醒物理按键一般是复用按键，包括唤醒语音/退出语音、电话接听/挂断功能。为了使车机能够根据语音状态来进行语音唤醒物理按键功能的定义和复用，HiCar App会在语音状态发生变化时向车机发送当前的语音状态。

语音状态相关的数据格式说明请参考《HUAWEI HiCar SDK API参考》"HiCar App与车机间接口"中[语音状态](https://developer.huawei.com/consumer/cn/doc/HiCar-References/voice-status-0000001199339965)部分。

## 开发步骤

1. HiCar App会在语音状态发生变化时，向车机发送报文（dataType=505），通知车机当前HiCar语音是空闲状态或者唤醒状态。车机将收到的数据内容如下：

   ```screen
   {
       "voiceState":1
   }
   ```

2. 车机通过**DataReceive** 方法，判断**dataType**后可以收到上述具体数据内容。

