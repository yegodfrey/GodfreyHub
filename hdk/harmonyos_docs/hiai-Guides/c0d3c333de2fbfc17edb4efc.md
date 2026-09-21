---
name: document/cn/hiai-Guides/ml-asr-0000001050066212
title: 实时语音识别
uri: https://developer.huawei.com/consumer/cn/doc/hiai-Guides/ml-asr-0000001050066212
---

# 实时语音识别

## 服务介绍

实时语音识别服务支持将实时输入的短语音（时长不超过60秒）转换为文本，可实时识别60秒内的语音。该服务使用行业领先的深度学习技术，识别准确率可达95%以上。目前支持中文普通话（包括中英文混说）、英语、法语、德语、西班牙语、意大利语、阿拉伯语、俄语、泰语、马来语、菲律宾语、土耳其语的识别。

* 支持实时出字。
* 提供拾音界面、无拾音界面两种方式。
* 支持断点检测，可准确定位开始和结束点。
* 支持静音检测，语音中未说话部分不发送语音包。
* 支持数字格式的智能转换，例如语音输入"二零二零年"时，能够智能识别为"2020年"。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250514172313.31056472027966843019313054899395:50001231000000:2800:EB0F0330C8FAC78CD0C540C467A30C0943B9C6CD10B734AB27472843B7F324A3.png "点击放大")

### 实时语音识别部署情况

|区域|欧洲|俄罗斯|亚非拉|中国|
|:----|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|中文普通话|![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250514172313.48896423169053583091125612561335:50001231000000:2800:90FC380546F3FC15F370BC622EA34E7B22CD7EA8CE20CF0E4D2DCF242526A971.png)|-|![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250514172313.26253079026120756670819480538076:50001231000000:2800:0FAA622761397B93218702D1ADB818914DEB63D07066A2830CB3B2EAF3C57AD5.png)|![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250514172313.79029017922791085609933133703227:50001231000000:2800:960C75C5898A815C1E10F47B9F87D5EE0081E54E74A9BB2A13F126B48ECA809B.png)|
|英语|![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250514172313.83473678615299526796093106239634:50001231000000:2800:E25D5DC76644FCE897F18C68552D7DEAB637352B247FC807BEC58F1A2D32759B.png)|![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250514172313.11865333759228504108745278666063:50001231000000:2800:E63D2C3112BB09C28001768A955E676ED00EBB55417724E9AAE32AFB5C955139.png)|![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250514172313.08913411625297446541311180832268:50001231000000:2800:FD62A33B75CA6106C77FCBCDA50AAAB3C30865C157B02500C072B6081E10F017.png)|![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250514172313.33714852152673626578987432742584:50001231000000:2800:9FDE2EDFD8DC88C7F148306B7299FC63EABC87A12CC166B9D75FC166465C29E9.png)|
|法语|![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250514172313.16768413083544080155724851482735:50001231000000:2800:E314A497AAEAE970EE0608555F55B848CB373BD4BF344A29D2FD4BD1F6B7622A.png)|-|![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250514172313.58438720245502893432550175757354:50001231000000:2800:AE0AEE38C2D9C19748406C002970647A81E925D08F74DE7C792F6531C94CFBB8.png)|![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250514172313.10866714563303130989734758943397:50001231000000:2800:A19A252B488FB8496E33E8148BB0FB018A3DD1E36994C38F8F87DFC7B6C70E5A.png)|
|德语|![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250514172313.64356046399294746122814828501344:50001231000000:2800:C4E11ED73B8D7A24330EFF40142E47CA0E8DB9D83C57D3097319D69128916721.png)|-|![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250514172313.41782732895359785617306640275103:50001231000000:2800:E379B34E0EAFF462A51C0776A0F3ED89C47EDE67173D0FDA23C237AA59D7BDAC.png)|![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250514172314.37431105886942767793094225024428:50001231000000:2800:7238DD9B99F9CE9D7BF35C920D9E38D14A02D0D2C420692218F3F517EC43F69E.png)|
|西班牙语|![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250514172314.03387903728545208742857354596726:50001231000000:2800:D0522B2A6FDE69EF00E307C8C51019F1CAD1B69C3676EE9A4EA1DEC6D05F2A2C.png)|-|![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250514172314.17550718237496707657386624190232:50001231000000:2800:5A3C37D61A23A1D3A8B64EC919FE5AF990019BE7035E1222B4CBDDA5A991C7BE.png)|![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250514172314.71133395973735896939842321419591:50001231000000:2800:8DF1CC7182743B2F8180B63264735CC243BC93B59D5E3109D6DEC2A8A529DF24.png)|
|意大利语|![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250514172314.15954092566611997028975774729844:50001231000000:2800:607A4350C06AF96814FE9ACEC68DB3376D0F4B752F59492FD59EEB166DB63EB1.png)|-|![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250514172314.10978116843826076994380419530750:50001231000000:2800:0132F5970FA9C42B3BB03DC801F832DBBD1C05A1A49353B9FBBBEF8E5D9E7FBE.png)|![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250514172314.56798793435717629140194316981736:50001231000000:2800:9FEC66FC4AA77E0F732A01CC20279786EF954D99951EC74F6C8013D9CC394A30.png)|
|阿拉伯语|![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250514172314.55590041512334499287207364642169:50001231000000:2800:C8CACB28B06E7D010AA41962730B55487ED1C6BDE84897BE9245B18C2C196F4A.png)|-|![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250514172314.84925496728590752488052258824929:50001231000000:2800:7200A17BCA3283A9E8E503A7335AA7B80B11FE7972EDE21B97C9D5A8A93F874C.png)|-|
|俄语|![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250514172314.78873242951098100465498987279057:50001231000000:2800:869F4598CC869A02DFD1FAF42B7558B3A09933884330D4AB64735E97C56127B0.png)|![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250514172314.96946313860562162892330697017583:50001231000000:2800:3CA8AC4D1F85747381B04981F61735D810268ECB365D28019A8DFC42B0902991.png)|![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250514172314.56399155592335104769287676098339:50001231000000:2800:3677BA974BD682ECC4C855FFE48FFD88078384A2A99D00FEE0E55B5B4965274B.png)|-|
|泰语|![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250514172314.95380605969714835242653700071415:50001231000000:2800:B89FFD097A5CB850339A7A8EEEB170D82D4510CA408460DAEF510B2006843F16.png)|-|![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250514172314.08872169052510909970669744325603:50001231000000:2800:9FB720DCC4A1C5551C46677247091327E28129EDD141BA67FDC94C281D9EC290.png)|-|
|马来语|![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250514172314.68376835452294650854665092924171:50001231000000:2800:BED3DDFBE48DCAE80479B5F08C8ACA89F846D5D019D7A9E8A1EE101762FF1C48.png)|-|![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250514172314.97224987840716030073939594456780:50001231000000:2800:8E9FF6DDBA37D4CA9DB7710348FF156E9744364D982F5E5E88553BBDD79BE6C9.png)|-|
|菲律宾语|![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250514172314.41921047296485772522435150502900:50001231000000:2800:A50BEDA84108C2B378E94554024E4470D53BB9CB1E2810475A7158BB776734EE.png)|-|![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250514172314.13550558713541441078290623309571:50001231000000:2800:6904E68EAC6EF05FE858271AB965C5F852D58B964F7BDADD90D1836221C69D22.png)|-|
|土耳其语|![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250514172314.89284141669572172156486274277996:50001231000000:2800:519F5E046ED2945208DDDD149E4CEEBC7CC6FD3E4481FB3F1EC1264DD0921BF7.png)|-|![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250514172315.26552323595908504770484310718949:50001231000000:2800:B3E3FEC1A1B912F19EA9954BCD484528AFC8459AB9D8B60BFDA8E3F53BC0660A.png)|-|

## 应用场景

实时语音识别服务覆盖日常生活及工作中的众多领域，并且深度优化了购物搜索、影视搜索、音乐搜索以及导航等场景中的识别能力，进一步提高这几类场景的识别准确率。

在使用购物类App搜索商品时，可以将语音描述的商品名称或特征识别为文字从而搜索到目标商品。同样，在使用音乐类App时，可以将语音输入的歌名或歌手识别为文字进而搜索歌曲。另外，司机在驾驶过程中不方便输入文字时，可以将输入的语音转换为文字继而搜索目的地，让行车更加安全。

## 注意事项

* 目前法语、西班牙语、德语、意大利语、阿拉伯语、俄语、泰语、马来语、菲律宾语、土耳其语实时语音识别服务仅支持华为手机和荣耀手机使用，中英文实时语音识别服务支持所有品牌手机。


* 实时语音识别服务通过访问云侧接口完成识别服务，调测和使用时需保证设备可正常访问互联网。
* 实时语音识别服务目前不支持息屏识别，调测和使用时需保持设备屏幕常亮。

## 开发步骤

在进行开发之前，您需要完成必要的[开发准备工作](https://developer.huawei.com/consumer/cn/doc/hiai-Guides/config-agc-0000001050990353)，同时请确保您的工程中已经[配置HMS Core SDK的Maven仓地址](https://developer.huawei.com/consumer/cn/doc/hiai-Guides/config-maven-0000001050040031)，并且完成了本服务的[SDK集成](https://developer.huawei.com/consumer/cn/doc/hiai-Guides/asr-sdk-0000001050124643)。

### 实时语音识别（无拾音界面）

1. 请参见[云端鉴权信息使用须知](https://developer.huawei.com/consumer/cn/doc/hiai-Guides/sdk-data-security-0000001229909424#section2688102310166)，设置您应用的鉴权信息。
2. 用户调用接口创建一个语音识别器。

   ```screen
   "Java"
   // context为应用上下文信息。
   MLAsrRecognizer mSpeechRecognizer = MLAsrRecognizer.createAsrRecognizer(context);
   ```

   ```screen
   "Kotlin"
   // context为应用上下文信息。
   val mSpeechRecognizer = MLAsrRecognizer.createAsrRecognizer(context)
   ```

3. 创建语音识别结果监听器回调。

   ```screen
   "Java"
   // 回调实现MLAsrListener接口，实现接口中的方法。
   protected class SpeechRecognitionListener implements MLAsrListener {
       @Override
       public void onStartListening() {
           // 录音器开始接收声音。
       }

       @Override
       public void onStartingOfSpeech() {
           // 用户开始讲话，即语音识别器检测到用户开始讲话。
       }

       @Override
       public void onVoiceDataReceived(byte[] data, float energy, Bundle bundle) {
           // 返回给用户原始的PCM音频流和音频能量，该接口并非运行在主线程中，返回结果需要在子线程中处理。
       }

       @Override
       public void onRecognizingResults(Bundle partialResults) {
           // 从MLAsrRecognizer接收到持续语音识别的文本，该接口并非运行在主线程中，返回结果需要在子线程中处理。
       }

       @Override
       public void onResults(Bundle results) {
           // 语音识别的文本数据，该接口并非运行在主线程中，返回结果需要在子线程中处理。
       }

       @Override
       public void onError(int error, String errorMessage) {
           // 识别发生错误后调用该接口，该接口并非运行在主线程中，返回结果需要在子线程中处理。
       }

       @Override
       public void onState(int state, Bundle params) {
           // 通知应用状态发生改变，该接口并非运行在主线程中，返回结果需要在子线程中处理。
       }
   }
   ```

   ```javascript
   "Kotlin"
   // 回调实现MLAsrListener接口，实现接口中的方法。
   internal inner class SpeechRecognitionListener : MLAsrListener {
        override fun onStartListening() {
            // 录音器开始接收声音。
        }

        override fun onStartingOfSpeech() {
            // 用户开始讲话，即语音识别器检测到用户开始讲话。
        }

        override fun onVoiceDataReceived(data: ByteArray, energy: Float, bundle: Bundle) {
            // 返回给用户原始的PCM音频流和音频能量，该接口并非运行在主线程中，返回结果需要在子线程中处理。
        }

        override fun onRecognizingResults(partialResults: Bundle) {
            // 从MLAsrRecognizer接收到持续语音识别的文本，该接口并非运行在主线程中，返回结果需要在子线程中处理。
        }

        override fun onResults(results: Bundle) {
            // 语音识别的文本数据，该接口并非运行在主线程中，返回结果需要在子线程中处理。
        }

        override fun onError(error: Int, errorMessage: String) {
            // 识别发生错误后调用该接口，该接口并非运行在主线程中，返回结果需要在子线程中处理。
        }

        override fun onState(state: Int, params: Bundle) {
            // 通知应用状态发生改变，该接口并非运行在主线程中，返回结果需要在子线程中处理。
        }
    }
   ```

4. 将新建的结果监听器回调与语音识别器绑定。

   ```screen
   "Java"
   mSpeechRecognizer.setAsrListener(new SpeechRecognitionListener());
   ```

   ```screen
   "Kotlin"
   mSpeechRecognizer!!.setAsrListener(SpeechRecognitionListener())
   ```

5. 参考支持语言列表[LANGUAGE](https://developer.huawei.com/consumer/cn/doc/hiai-References/asrconstants-0000001050169559#section2081374417466)，配置识别参数，调用[startRecognizing](https://developer.huawei.com/consumer/cn/doc/hiai-References/mlasrrecognizer-0000001050697922#section296513052713)启动语音识别。

   ```java
   "Java"
   // 新建Intent，用于配置语音识别参数。
   Intent mSpeechRecognizerIntent = new Intent(MLAsrConstants.ACTION_HMS_ASR_SPEECH);
   // 通过Intent进行语音识别参数设置。
   mSpeechRecognizerIntent
       // 设置识别语言为英语，若不设置，则默认识别英语。支持设置："zh-CN":中文；"en-US":英语；"fr-FR":法语；"es-ES":西班牙语；"de-DE":德语；"it-IT":意大利语；"ar": 阿拉伯语；"ru-RU":俄语；"th=TH"：泰语；"ms-MY"：马来语；"fil-PH"：菲律宾语；"tr-TR"：土耳其语。
       .putExtra(MLAsrConstants.LANGUAGE, "en-US")
       // 设置识别文本返回模式为边识别边出字，若不设置，默认为边识别边出字。支持设置：
       // MLAsrConstants.FEATURE_WORDFLUX：通过onRecognizingResults接口，识别同时返回文字；
       // MLAsrConstants.FEATURE_ALLINONE：识别完成后通过onResults接口返回文字。
       .putExtra(MLAsrConstants.FEATURE, MLAsrConstants.FEATURE_WORDFLUX)
       // 静音检测时长（发音前，可设置3000到60000毫秒）（毫秒）
       .putExtra(MLAsrConstants.VAD_START_MUTE_DURATION, 6000)
       // 静音检测时长（发音后）（毫秒）
       .putExtra(MLAsrConstants.VAD_END_MUTE_DURATION, 700)
       // 是否设置标点
       .putExtra(MLAsrConstants.PUNCTUATION_ENABLE, true)
       // 设置使用场景，MLAsrConstants.SCENES_SHOPPING：表示购物，仅支持中文，该场景对华为商品名识别进行了优化。
       .putExtra(MLAsrConstants.SCENES, MLAsrConstants.SCENES_SHOPPING);
   // 启动语音识别。
   mSpeechRecognizer.startRecognizing(mSpeechRecognizerIntent);
   ```

   ```javascript
   "Kotlin"
   // 新建Intent，用于配置语音识别参数。
   val mSpeechRecognizerIntent = Intent(MLAsrConstants.ACTION_HMS_ASR_SPEECH)
    // 通过Intent进行语音识别参数设置。
   mSpeechRecognizerIntent 
   // 设置识别语言为英语，若不设置，则默认识别英语。支持设置："zh-CN":中文；"en-US":英语；"fr-FR":法语；"es-ES":西班牙语；"de-DE":德语；"it-IT":意大利语；"ar":阿拉伯语；"th=TH"：泰语；"ms-MY"：马来语；"fil-PH"：菲律宾语；"tr-TR"：土耳其语。
            .putExtra(MLAsrConstants.LANGUAGE, "en-US") // 设置识别文本返回模式为边识别边出字，若不设置，默认为边识别边出字。支持设置：
            // MLAsrConstants.FEATURE_WORDFLUX：通过onRecognizingResults接口，识别同时返回文字；
            // MLAsrConstants.FEATURE_ALLINONE：识别完成后通过onResults接口返回文字。
            .putExtra(MLAsrConstants.FEATURE, MLAsrConstants.FEATURE_WORDFLUX) // 设置使用场景，MLAsrConstants.SCENES_SHOPPING：表示购物，仅支持中文，该场景对华为商品名识别进行了优化。
            .putExtra(MLAsrConstants.SCENES, MLAsrConstants.SCENES_SHOPPING)
           // 静音检测时长（发音前，可设置3000到60000毫秒）（毫秒）
            .putExtra(MLAsrConstants.VAD_START_MUTE_DURATION, 6000)
           // 静音检测时长（发音后）（毫秒）
            .putExtra(MLAsrConstants.VAD_END_MUTE_DURATION, 700)
           // 是否设置标点
            .putExtra(MLAsrConstants.PUNCTUATION_ENABLE, true)
          // 启动语音识别。
            mSpeechRecognizer.startRecognizing(mSpeechRecognizerIntent)
   ```

6. 识别完成后，释放资源。

   ```screen
   "Java"
   if (mSpeechRecognizer!= null) {
       mSpeechRecognizer.destroy();
   }
   ```

   ```screen
   "Kotlin"
   if (mSpeechRecognizer != null) {
        mSpeechRecognizer.destroy()
    }
   ```

7. （可选）获取支持的语种列表。

   ```screen
   "Java"
   mSpeechRecognizer.getLanguages(new MLAsrRecognizer.LanguageCallback() { 
        @Override 
       public void onResult(List<String> result) {
           Log.i(TAG, "support languages==" + result.toString());
       }

       @Override
       public void onError(int errorCode, String errorMsg) {
           Log.e(TAG, "errorCode:" + errorCode + "errorMsg:" + errorMsg);
       }
   });
   ```

   ```screen
   "Kotlin"
   mSpeechRecognizer.getLanguages(object : MLAsrRecognizer.LanguageCallback { 
        override fun onResult(result: List<String>) {
            Log.i(TAG, "support languages==$result")
        }

        override fun onError(errorCode: Int, errorMsg: String) {
            Log.e(TAG, "errorCode:" + errorCode + "errorMsg:" + errorMsg)
        }
    })
   ```

### 实时语音识别（有拾音界面）

1. 请参见[云端鉴权信息使用须知](https://developer.huawei.com/consumer/cn/doc/hiai-Guides/sdk-data-security-0000001229909424#section2688102310166)，设置您应用的鉴权信息。
2. 参考支持语言列表[LANGUAGE](https://developer.huawei.com/consumer/cn/doc/hiai-References/asrconstants-0000001050169559#section2081374417466)，创建Intent，用于设置实时语音识别参数。

   ```java
   "Java"
   // 通过intent进行识别设置。
   Intent intent = new Intent(this, MLAsrCaptureActivity.class)
       // 设置识别语言为英语，若不设置，则默认识别英语。支持设置："zh-CN":中文；"en-US":英语；"fr-FR":法语；"es-ES":西班牙语；"de-DE":德语；"it-IT":意大利语；"ar": 阿拉伯语；"ru-RU":俄语；"th_TH"：泰语；"ms_MY"：马来语；"fil_PH"：菲律宾语；"tr-TR"：土耳其语。
       .putExtra(MLAsrCaptureConstants.LANGUAGE, "en-US")
       // 设置识别文本返回模式为边识别边出字，若不设置，默认为边识别边出字。支持设置：
       // MLAsrConstants.FEATURE_WORDFLUX：通过onRecognizingResults接口，识别同时返回文字；
       // MLAsrConstants.FEATURE_ALLINONE：识别完成后通过onResults接口返回文字。
       .putExtra(MLAsrCaptureConstants.FEATURE, MLAsrCaptureConstants.FEATURE_WORDFLUX)
      // 设置使用场景，MLAsrConstants.SCENES_SHOPPING：表示购物，仅支持中文，该场景对华为商品名识别进行了优化。
      .putExtra(MLAsrConstants.SCENES, MLAsrConstants.SCENES_SHOPPING);
   ```

   ```javascript
   "Kotlin"
   // 通过intent进行识别设置。
   val intent = Intent(this, MLAsrCaptureActivity::class.java)
            // 设置识别语言为英语，若不设置，则默认识别英语。支持设置："zh-CN":中文；"en-US":英语；"fr-FR":法语；"es-ES":西班牙语；"de-DE":德语；"it-IT":意大利语；"ar": 阿拉伯语；"ru-RU":俄语；"th_TH"：泰语；"ms_MY"：马来语；"fil_PH"：菲律宾语；"tr-TR"：土耳其语。
            .putExtra(MLAsrCaptureConstants.LANGUAGE, "en-US")
            // 设置拾音界面是否显示识别结果，MLAsrCaptureConstants.FEATURE_ALLINONE为不显示，MLAsrCaptureConstants.FEATURE_WORDFLUX为显示。
            .putExtra(MLAsrCaptureConstants.FEATURE, MLAsrCaptureConstants.FEATURE_WORDFLUX)
            // 设置使用场景，MLAsrConstants.SCENES_SHOPPING：表示购物，仅支持中文，该场景对华为商品名识别进行了优化。
            .putExtra(MLAsrConstants.SCENES,
                    MLAsrConstants.SCENES_SHOPPING)
   ```

3. 创建activity，传入第[2](#ZH-CN_TOPIC_0000001050710194__li9876161641411)步中创建的Intent，用于拾音，并将结果返回原activity，可实时识别60s内（包括60s）的语音。

   ```java
   "Java"
   private static final int REQUEST_CODE_ASR = 100;
   // REQUEST_CODE_ASR表示当前Activity和拾音界面Activity之间的请求码，通过该码可以在当前Activity中获取拾音界面的处理结果。
   startActivityForResult(intent, REQUEST_CODE_ASR);
   ```

   ```javascript
   "Kotlin"
   val REQUEST_CODE_ASR : Int = 100
   // REQUEST_CODE_ASR表示当前Activity和拾音界面Activity之间的请求码，通过该码可以在当前Activity中获取拾音界面的处理结果。
   startActivityForResult(intent, REQUEST_CODE_ASR)
   ```

4. 覆写"onActivityResult"方法，用于处理语音识别服务返回结果。

   ```java
   "Java"
   @Override
   protected void onActivityResult(int requestCode, int resultCode, Intent data) {
       super.onActivityResult(requestCode, resultCode, data);
       String text = "";
       // REQUEST_CODE_ASR是第3步中定义的当前Activity和拾音界面Activity之间的请求码。
       if (requestCode == REQUEST_CODE_ASR) {
           switch (resultCode) {
               // 返回值为MLAsrCaptureConstants.ASR_SUCCESS表示识别成功。
               case MLAsrCaptureConstants.ASR_SUCCESS:
                   if (data != null) { 
                       Bundle bundle = data.getExtras();
                       // 获取语音识别得到的文本信息。
                       if (bundle.containsKey(MLAsrCaptureConstants.ASR_RESULT)) {    
                           text = bundle.getString(MLAsrCaptureConstants.ASR_RESULT);
                           // 识别得到的文本信息处理。
                       }
                   }
                   break;
               // 返回值为MLAsrCaptureConstants.ASR_FAILURE表示识别失败。
               case MLAsrCaptureConstants.ASR_FAILURE:
                   // 识别失败处理。
                   if(data != null) {
                       Bundle bundle = data.getExtras();
                       // 判断是否包含错误码。
                       if(bundle.containsKey(MLAsrCaptureConstants.ASR_ERROR_CODE)) {
                           int errorCode = bundle.getInt(MLAsrCaptureConstants.ASR_ERROR_CODE);
                           // 对错误码进行处理。
                       }
                       // 判断是否包含错误信息。
                       if(bundle.containsKey(MLAsrCaptureConstants.ASR_ERROR_MESSAGE)){
                           String errorMsg = bundle.getString(MLAsrCaptureConstants.ASR_ERROR_MESSAGE);
                           // 对错误信息进行处理。
                       }
                       //判断是否包含子错误码。
                       if(bundle.containsKey(MLAsrCaptureConstants.ASR_SUB_ERROR_CODE)) {
                           int subErrorCode = bundle.getInt(MLAsrCaptureConstants.ASR_SUB_ERROR_CODE);
                          // 对子错误码进行处理。
                       }
                   }
               default:
                   break;
           }
       }
   }
   ```

   ```javascript
   "Kotlin"
   override protected fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
        super.onActivityResult(requestCode, resultCode, data)
        var text = ""
        // REQUEST_CODE_ASR是第3步中定义的当前Activity和拾音界面Activity之间的请求码。
        if (requestCode == REQUEST_CODE_ASR) {
            when (resultCode) {
                MLAsrCaptureConstants.ASR_SUCCESS -> if (data != null) {
                    val bundle = data.extras
                    // 获取语音识别得到的文本信息。
                    if (bundle!!.containsKey(MLAsrCaptureConstants.ASR_RESULT)) {
                        text = bundle.getString(MLAsrCaptureConstants.ASR_RESULT).toString()
                        // 识别得到的文本信息处理。
                    }
                }
                MLAsrCaptureConstants.ASR_FAILURE ->                     // 识别失败处理。
                    if (data != null) {
                        val bundle = data.extras
                        // 判断是否包含错误码。
                        if (bundle!!.containsKey(MLAsrCaptureConstants.ASR_ERROR_CODE)) {
                            val errorCode = bundle.getInt(MLAsrCaptureConstants.ASR_ERROR_CODE)
                            // 对错误码进行处理。
                        }
                        // 判断是否包含错误信息。
                        if (bundle.containsKey(MLAsrCaptureConstants.ASR_ERROR_MESSAGE)) {
                            val errorMsg = bundle.getString(MLAsrCaptureConstants.ASR_ERROR_MESSAGE)
                            // 对错误信息进行处理。
                        }
                        //判断是否包含子错误码。
                        if (bundle.containsKey(MLAsrCaptureConstants.ASR_SUB_ERROR_CODE)) {
                            val subErrorCode = bundle.getInt(MLAsrCaptureConstants.ASR_SUB_ERROR_CODE)
                            // 对子错误码进行处理。
                        }
                    }
                else -> {
                }
            }
        }
   }
   ```

5. （可选）获取支持的语种列表。

   ```screen
   "Java"
   MLAsrRecognizer.createAsrRecognizer(this).getLanguages(new MLAsrRecognizer.LanguageCallback() {
       @Override
       public void onResult(List<String> result) {
           Log.i(TAG, "support languages==" + result.toString());
       }

       @Override
       public void onError(int errorCode, String errorMsg) {
           Log.e(TAG, "errorCode:" + errorCode + "errorMsg:" + errorMsg);
       }
   });
   ```

   ```screen
   "Kotlin"
   MLAsrRecognizer.createAsrRecognizer(context).getLanguages(object : MLAsrRecognizer.LanguageCallback {
        override fun onResult(result: List<String>) {
            Log.i(TAG, "support languages==$result")
        }

        override fun onError(errorCode: Int, errorMsg: String) {
            Log.e(TAG, "errorCode:" + errorCode + "errorMsg:" + errorMsg)
        }
    })
   ```

