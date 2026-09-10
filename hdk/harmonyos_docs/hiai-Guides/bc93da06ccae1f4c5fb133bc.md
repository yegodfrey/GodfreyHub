---
name: document/cn/hiai-Guides/sound-detection-0000001055282786
title: 声音识别
uri: https://developer.huawei.com/consumer/cn/doc/hiai-Guides/sound-detection-0000001055282786
---

# 声音识别

#### 服务介绍

声音识别服务支持通过在线（实时录音）的模式检测声音事件，基于检测到的声音事件能够帮助开发者进行后续指令动作。目前支持13个种类的声音事件，包括：笑声、婴儿或小孩哭声、打鼾声、喷嚏声、叫喊声、猫叫声、狗叫声、流水声（包括水龙头流水声、溪流声、海浪声）、汽车喇叭声、门铃声、敲门声、火灾报警声（包括火灾报警器警报声、烟雾报警器警报声）、警报声（包括消防车警报声、救护车警报声、警车警报声、防空警报声）。  

#### 应用场景

声音识别服务在生活中有广泛应用。例如，在听力受损的情况下，不易接收到警报声、汽车喇叭声、门铃声等声音事件，可以借助该功能辅助接收周边的声音信号。使用户在发生突发事件时，及时做出反应。此外，在用户无法陪伴婴儿身边时，却想要及时掌握婴儿的状态，便可以通过该功能检测并识别出婴儿的关键声音，如：婴儿哭声，以便用户可以及时了解婴儿的异常状况。  

#### 注意事项

当前只能返回一个声音事件的识别结果，不支持混杂场景（多个声音事件同时发生），可区分的不同类型的声音事件至少间隔2秒，可区分的相同声音事件至少间隔30秒。  

#### 开发步骤

在进行开发之前，您需要完成必要的[开发准备工作](https://developer.huawei.com/consumer/cn/doc/hiai-Guides/config-agc-0000001050990353)，同时请确保您的工程中已经[配置HMS Core SDK的Maven仓地址](https://developer.huawei.com/consumer/cn/doc/hiai-Guides/config-maven-0000001050040031)，并且完成了本服务的[SDK集成](https://developer.huawei.com/consumer/cn/doc/hiai-Guides/sound-detection-sdk-0000001055602754)。

1. 创建声音识别实例。  

   ```
   "Java"
   MLSoundDetector sounddetector = MLSoundDetector.createSoundDetector();
   ```

   ```
   "Kotlin"
   var sounddetector = MLSoundDetector.createSoundDetector()
   ```

2. 创建声音识别结果回调，用于获取检测结果，并将回调传入声音识别实例。  

   ```
   "Java"
   private MLSoundDetectListener listener = new MLSoundDetectListener() {
       @Override    
       public void onSoundSuccessResult(Bundle result) {
           //识别成功的处理逻辑，识别结果为：0-12（对应MLSoundDetectConstants.java中定义的以SOUND_EVENT_TYPE开头命名的13种声音类型）。
           int soundType = result.getInt(MLSoundDetector.RESULTS_RECOGNIZED);    
       }
       @Override    
       public void onSoundFailResult(int errCode) {
           //识别失败，可能没有授予麦克风权限（Manifest.permission.RECORD_AUDIO）等异常情况。
       }
   };
   sounddetector.setSoundDetectListener(listener);
   ```

   ```
   "Kotlin"
   private val listener: MLSoundDetectListener = object : MLSoundDetectListener {
        override fun onSoundSuccessResult(result: Bundle) {
            //识别成功的处理逻辑，识别结果为：0-12（对应MLSoundDetectConstants.java中定义的以SOUND_EVENT_TYPE开头命名的13种声音类型）。
            val soundType = result.getInt(MLSoundDetector.RESULTS_RECOGNIZED)
        }

        override fun onSoundFailResult(errCode: Int) {
            //识别失败，可能没有授予麦克风权限（Manifest.permission.RECORD_AUDIO）等异常情况。
        }
    }
   sounddetector.setSoundDetectListener(listener)
   ```

3. 启动识别。  

   ```
   "Java"
   boolean isStarted = sounddetector.start(context); //context 是上下文
   //isStarted 等于true表示启动识别成功、isStarted等于false表示启动识别失败（原因可能是手机麦克风被系统或其它三方应用占用)
   ```

   ```
   "Kotlin"
   val isStarted = sounddetector.start(context) //context 是上下文
   //isStarted 等于true表示启动识别成功、isStarted等于false表示启动识别失败（原因可能是手机麦克风被系统或其它三方应用占用)
   ```

4. 停止识别。  

   ```
   "Java"
   sounddetector.stop();
   ```

   ```
   "Kotlin"
   sounddetector.stop()
   ```

5. 识别结束，释放资源。  

   ```
   "Java"
   sounddetector.destroy();
   ```

   ```
   "Kotlin"
   sounddetector.destroy()
   ```

