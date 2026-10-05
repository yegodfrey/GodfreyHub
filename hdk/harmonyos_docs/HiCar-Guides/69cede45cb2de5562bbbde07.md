---
name: document/cn/HiCar-Guides/voice-search-0000001078018964
title: 实现语音内容搜索
uri: https://developer.huawei.com/consumer/cn/doc/HiCar-Guides/voice-search-0000001078018964
---

# 实现语音内容搜索

## 场景说明

用户在HiCar环境中使用音频应用时，通过语音助手除了下发"上一首"、"下一首"、"播放"、"暂停"、"停止"等基础语音操作指令外，还会下发类似"播放XX歌手的歌"、"播放XX专辑"、"播放XX风格的歌"、"播放本地音乐"、"播放收藏的音乐"等语音操作指令，此时需要音频应用正确进行内容检索并响应。

## 交互流程

在实现语音搜索过程中，音频应用通过MediaSession.onPlayFromSearch回调方法获取用户意图信息，通过MediaSession.SendSessionEvent方法返回搜索结果。

**图1**语音搜索流程   
![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20220915112605.06960514204492812889457620821366:50530914060943:2800:F4EE114FB1F44C394893E9A1370885E2E5E33B43E9FF25A991035B03398F2B49.png?needInitFileName=true?needInitFileName=true "点击放大")

当音频应用未启动时，用户也可以通过语音说"打开XX应用并播放XX歌曲"进行操作，此时HiCar会通过[配置音频管理服务](https://developer.huawei.com/consumer/cn/doc/development/HiCar-Guides/configure-audio-management-service-0000001078467006)启动音频应用，然后再通过onPlayFromSearch回调方法向音频应用发送语音搜索命令。

## 规范说明

音频应用在实现语音内容搜索时，应遵循的规范如下：

1. 音频应用接入HiCar后需支持语音搜索功能，并明确支持的语音内容搜索类型（音乐、有声读物、新闻资讯），可根据语音助手下发的搜索指令返回正确的搜索结果。
2. 对于搜索目的不明确的指令，例如"播放歌曲"、"播放相声"等，建议根据用户喜好或其他规则进行推荐，并且请勿每次都重复推荐同一曲目。

## 接口说明

### 获取语音搜索内容

|接口|参数|参数类型|说明|
|:------------------------------------------------------------------|:-----|:-----|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|MediaSession.Callback.onPlayFromSearch(String query, Bundle extras)|query|String|语音搜索查询指令，取值为"com.huawei.hicar.playmusic.fromsearch"。|
|MediaSession.Callback.onPlayFromSearch(String query, Bundle extras)|extras|Bundle|语音搜索查询指令扩展参数，包括本次的请求ID及HiCar识别出的语音搜索意图参数键值对，具体内容如[表2](#ZH-CN_TOPIC_0000001078018964__table131563109123)、[表3](#ZH-CN_TOPIC_0000001078018964__table1148034714015)和[表4](#ZH-CN_TOPIC_0000001078018964__table82853123495)所示。 Bundle中可能会同时提供多对键值对数据，例如"播放XX歌手XX专辑中的XX歌曲"场景中，HiCar将会向音频应用同时返回歌手、专辑、歌曲名称信息。|
[**表1**onPlayFromSearch参数说明]

|Bundle参数Key|数据类型|参数名称|示例语料|示例语料中的Value值|
|:-----------------|:-------|:---------------|:--------------------------------|:----------------------------------------------------------------------------------------|
|specificSearchType|String|搜索类型|播放收藏的音乐、播放下载的音乐、播放本地的音乐、播放最近播放的音乐|[ "SearchFavorite" ]或 [ "SearchLocal" ]或 [ "SearchDownload" ]或 [ "SearchRecent" ]或 [ "" ]|
|scene|String数组|场景|放首睡眠音乐、来点适合工作的音乐|[ "睡眠" ]、[ "工作" ]|
|genre|String数组|风格|来首轻音乐、我想听流行歌曲|[ "轻音乐" ]、[ "流行" ]|
|songName|String数组|歌曲名称|播放《七里香》、播放《忘情水》|[ "七里香" ]、[ "忘情水" ]|
|artist|String数组|歌手|播放刘德华的歌曲|[ "刘德华" ]|
|albumName|String数组|专辑|播放专辑《七里香》|[ "七里香" ]|
|instrument|String数组|乐器|来首钢琴曲、我想听萨克斯|[ "钢琴" ]、[ "萨克斯" ]|
|language|String数组|语言|播放粤语歌曲、播放华语歌曲|[ "粤语" ]、["华语"]|
|decade|String数组|年代|播放80年代的歌|[ "80年代" ]|
|mood|String数组|情感|来点放松点音乐、播放欢快的歌|[ "放松" ]、[ "欢快" ]|
|gender|String数组|性别|播放男歌手的歌、播放女歌手版的十年|[ "男" ]、[ "女" ]（同时会有songName的[ "十年" ]）|
|billBoard|String数组|榜单名|播放热歌榜|[ "热歌榜" ]|
|musicType|String数组|标明搜索的是"音乐"还是"专辑"|推荐一首歌、播放音乐|[ "song" ]|
|requestId|String|请求ID|-|-|
[**表2**音乐类应用extras参数列表]

> 说明
>
> 针对参数中只有musicType=song指令的场景，建议应用适配时，根据用户爱好或其他规则推荐歌曲，并且请勿每次都重复推荐同一首歌。

|Bundle参数Key|数据类型|参数名称|示例语料|示例语料中的Value值|
|:------------|:-------|:------|:-------------------|:------------------------------------------------------------|
|voiceLabel|String数组|有声读物标签|我要听相声、我要听小品|["相声"]、["小品"]|
|voiceCategory|String数组|有声读物类别|我想听脱口秀|["脱口秀"]|
|artist|String数组|有声读物相关人|我想听郭德纲的相声、我想听赵本山的小品|["郭德纲"]（同时会有voiceLabel的["相声"]）、["赵本山"]（同时会有voiceLabel的["小品"]）|
|voiceName|String数组|有声读物专辑名|播放李庆丰的三国演义故事、播放七剑下天山|["三国演义"]、["七剑下天山"](同时会有artist的["李庆丰"])|
|programmeName|String数组|有声读物节目名|我想听卖拐|["卖拐"]|
|sequence|String数组|集数|播放三国演义第3集|["第3集"]（同时会有voiceName的["三国演义"]）|
|requestId|String|请求ID|-|-|
[**表3**有声读物类应用extras参数列表]

> 说明
>
> 针对参数中只有voiceLabel=相声/小品指令的场景，建议应用适配时，根据用户爱好或其他规则推荐有声资源，并且请勿每次都重复推荐同一个有声资源。

|Bundle参数Key|数据类型|参数名称|示例语料|示例语料中的Value值|
|:----------|:-------|:--------------------------------------------------------|:---------------|:-------------------------------|
|operation|String数组|操作意图|我要听新闻、我要看新闻、播放新闻|["listen"]、["watch"]、["play"]|
|country|String数组|新闻地域-国家|播放美国的新闻|["美国"]（同时会有operation的["play"]）|
|province|String数组|新闻地域-省份|播放湖北省的新闻|["湖北"]（同时会有operation的["play"]）|
|city|String数组|新闻地域-城市|播放上海市的新闻|["上海"]（同时会有operation的["play"]）|
|source|String数组|新闻的来源|播放朝闻天下的新闻|["朝闻天下"]（同时会有operation的["play"]）|
|time|String数组|新闻的时间|播放周三的新闻|["周三"]（同时会有operation的["play"]）|
|keyword|String数组|新闻的关键字|播放高考新闻|["高考"]（同时会有operation的["play"]）|
|category|String数组|新闻的类别，例如汽车、人文、热点、社会、本地、娱乐、科技、体育等类别。音频应用请结合类别和关键字综合处理语音请求。|播放体育新闻|["体育"]（同时会有operation的["play"]）|
|requestId|String|请求ID|-|-|
[**表4**新闻资讯类应用extras参数列表]

> 说明
>
> 针对参数中只有operation=listen/watch/play指令的场景，建议应用适配时，根据用户爱好或其他规则推荐新闻资源，并且请勿每次都重复推荐同一个新闻资源。

### 返回语音搜索结果

|接口|参数|参数类型|说明|
|:---------------------------------------------------------|:-----|:-----|:-------------------------------------------------------------------|
|MediaSession.sendSessionEvent(String action,Bundle extras)|action|String|语音搜索查询指令，取值为"com.huawei.hicar.response.playfromsearch"。|
|MediaSession.sendSessionEvent(String action,Bundle extras)|extras|Bundle|语音搜索结果扩展参数，详见[表6](#ZH-CN_TOPIC_0000001078018964__table017072233919)。|
[**表5**语音搜索结果返回接口及参数说明]

|Bundle参数Key|参数类型|是否必填|说明|
|:----------|:-----|:--------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|errorCode|Int|是|返回码： * 0：精准匹配到了用户期望的曲目。 * -1：未精准匹配到用户期望的曲目，但通过模糊匹配或智能推荐的方式返回了曲目。 * -2：未搜索到对应的曲目。一般为音频应用在搜索时出现异常无法为用户播放时返回。音频应用应尽量避免出现该情况。 * -3：当前未登录，需要先登录才能执行该指令。 * -4：用户当前无收藏的曲目。 * -5：当前无本地歌曲。 * -6：当前无下载曲目。 * -7：没有最近播放记录。|
|requestId|String|是|语音搜索命令请求的requestId，与音频应用从onPlayFromSearch获取的requestId相同。|
|songName|String|仅当errorCode为-2到-7时可为空|搜索到的歌曲名称，HiCar会在语音播放中播报该字段。|
|singer|String|仅当errorCode为-2到-7时可为空|搜索到的歌手名称，HiCar会在语音播放中播报该字段。|
|mediaId|String|仅当errorCode为-2到-7时可为空|搜索到歌曲的mediaId。|
[**表6**语音搜索结果参数说明]

## 开发步骤

1. 音频应用需要在AndroidManifest.xml文件中声明支持语音搜索功能和指定支持的语音内容搜索类型。

   语音内容搜索类型分为：音乐、有声读物和新闻资讯，对应的取值如[表7](#ZH-CN_TOPIC_0000001078018964__table16991183755810)所示。

   |语音内容搜索类型|取值|
   |:-------|:-|
   |音乐|1|
   |有声读物|2|
   |新闻资讯|4|
   [**表7**语音内容搜索类型]

   音频应用需要在声明支持语音搜索时同步指定支持的语音内容搜索类型，如果同时支持多个语音内容搜索类型，可将对应取值相加作为类型结果。例如某音频应用包含音乐和有声读物内容，可支持音乐和有声读物类内容搜索，此时可设置语音内容搜索类型为3（即1+2）。

   HiCar接收到用户的语音搜索指令后，会根据用户意图向支持对应内容搜索的音频应用下发相应的搜索指令。音频应用请根据实际支持情况正确配置语音内容搜索类型。

   |版本号|说明|
   |:---|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
   |V1.0|针对收藏状态、播放模式切换，音频应用如果未按照[更新收藏状态](https://developer.huawei.com/consumer/cn/doc/development/HiCar-Guides/update-favorite-status-0000001119983203)、[更新播放模式](https://developer.huawei.com/consumer/cn/doc/development/HiCar-Guides/update-playback-mode-0000001078147430)章节完成功能适配，请保持此处版本号为V1.0。|
   |V2.0|音频应用按照[更新收藏状态](https://developer.huawei.com/consumer/cn/doc/development/HiCar-Guides/update-favorite-status-0000001119983203)、[更新播放模式](https://developer.huawei.com/consumer/cn/doc/development/HiCar-Guides/update-playback-mode-0000001078147430)章节完成了全部的适配内容后，此处版本号设置为V2.0。|
   |V3.0|音频应用按照此章节实现了语音播放收藏曲目、本地曲目、下载曲目和最近播放记录后，此处版本设置为V3.0。|
   [**表8**voicesearch版本]

   示例代码如下所示：

   ```screen
   <application>   
    ...    
       <meta-data android:name="com.huawei.hicar.support.voicesearch"
   android:value="V3.0"/> 
       <meta-data android:name="com.huawei.hicar.support.voicesearch.type"
   android:value="3"/> 
    ...
   <application>
   ```

2. 音频应用通过"MediaSession.Callback.onPlayFromSearch(String query, Bundle extras)"方法解析语音搜索指令。

   音频应用需要实现onPlayFromSearch方法，并在其中解析语音搜索命令。示例代码如下所示：

   ```screen
   @Override    
   public void onPlayFromSearch(String query, Bundle extras) {
            // 来源于HiCar的语音搜索命令。
           if (query.equals("com.huawei.hicar.playmusic.fromsearch")) {
               // 获取搜索类型
               String specificSearchType = extras.getString("specificSearchType", "");

               // 获取用户搜索关键信息
               String[] scene = extras.getStringArray("scene");
               String[] genre = extras.getStringArray("genre");
               String[] songName = extras.getStringArray("songName");
               String[] artist = extras.getStringArray("artist");
               String[] albumName = extras.getStringArray("albumName");
               String[] instrument = extras.getStringArray("instrument");
               String[] language = extras.getStringArray("language");
               String[] decade = extras.getStringArray("decade");
               String[] mood = extras.getStringArray("mood");
               String[] gender = extras.getStringArray("gender");
               String[] billBoard = extras.getStringArray("billBoard");
               String[] musicType = extras.getStringArray("musicType");

               // 获取请求的requestId
               String requestId = extras.getString("requestId");

               // 首先判断specificSearchType字段，对判断是否触发的是特殊的语音搜索类型
   	    switch (specificSearchType) {`
   		case "SearchFavorite":
   			// 用户触发了语音搜索收藏的曲目
   			break;
   		case "SearchLocal":
   			// 用户触发了语音搜索本地曲目
   			break;
   		case "SearchDownload":
   			// 用户触发了语音搜索下载歌曲
   			break;
   		case "SearchRecent":
   			// 用户触发了语音播放最近播放列表
   			break;
   		default:
   			// 用户进行的是普通的语音搜索，根据其他字段进行处理
   			break;
   	    }

               ......
   }
   ```

3. 音频应用通过"Mediasession.SendSessionEvent(String event,Bundle extras)"方法返回搜索结果。

   音频应用需要根据获取到的语音搜索意图数据，在曲库中检索对应的曲目，将检索到的结果通过"SendSessionEvent"方法返回HiCar。

   用户通过语音检索音乐时，更多的诉求是播放音乐而不是精准搜索，所以HiCar建议音频应用尽可能保证用户的每一次语音搜索都能正常返回搜索结果。在未精准匹配时通过模糊匹配或智能推荐返回结果。

   音频应用onPlayFromSearch方法中响应语音搜索命令的示例代码如下所示：

   ```screen
   @Override    
   public void onPlayFromSearch(String query, Bundle extras) {
            // 来源于HiCar的语音搜索命令。
           if (query.equals("com.huawei.hicar.playmusic.fromsearch")) {
               // 获取用户搜索关键信息
               ......

               /**
                * 音频应用应该基于上面信息正确检索并播放用户期望的内容，
                * 当应用收到来自HUAWEI HiCar的语音搜索命令后应该正确返回语音操作结果
                */

               String voiceSearchResponse = "com.huawei.hicar.response.playfromsearch";
               Bundle result = new Bundle();
               result.putInt("errorCode",0);
               result.putString("requestId",requestId);
               result.putString("songName","即将播放的歌曲名称");
               result.putString("singer","即将播放的歌曲的歌手名称");
               result.putString("mediaId","即将播放的歌曲mediaId");
               mMediaSession.sendSessionEvent(voiceSearchResponse,result);
   }
   ```

   HiCar会将搜索结果的Media ID返回给onPlayFromMediaId方法进行播放。
