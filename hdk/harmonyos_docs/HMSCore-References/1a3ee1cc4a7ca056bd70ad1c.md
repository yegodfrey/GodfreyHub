---
name: document/cn/HMSCore-References/https-send-api-0000001050986197
title: 下行消息
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-References/https-send-api-0000001050986197
---

# 下行消息

![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250830105222.13258333138235682706536780406418:50001231000000:2800:BA8D67CDD1CE85FFF7DA49180C48474E48BAFA250301BAB5E95FC1CEC2AD4EAE.png)  
为了更安全的网络访问，华为推送服务于2022年11月30日关闭Push相关域名的TLS1.0、TLS1.1协议及规定之外的加密套件，关闭后，应用使用TLS1.2以下协议或使用规定外的加密套件将无法正常推送消息。

若您的应用访问Push相关域名使用协议是TLS1.0或TLS1.1，后续可能无法正常发送消息，请您务必升级到TLS1.2及以上版本。

调整指导请查阅《[Push Kit相关域名的TLS1.0和TLS1.1协议关闭通知](https://developer.huawei.com/consumer/cn/doc/development/hmscore-common-Guides/tls-0000001368035257)》，如您有任何疑问，请联系[技术支持](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/technical-support-0000001058590093)，感谢您对华为推送的支持。  

#### 功能介绍

您调用发送Push消息API完成消息下发功能。  

#### 使用约束

消息体最大不能超过4096Bytes（不包括Token）。按Token发送时，最大Token数不能超过1000（系统当前配置值）。  

#### 接口原型

|承载协议|HTTPS POST|
|接口方向|开发者服务器 -\> 华为Push服务器|
|接口URL|https://push-api.cloud.huawei.com/v1/\[clientid\]/messages:send 说明： \[clientid\]：OAuth2.0客户端ID（凭据），登录[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)网站，选择"开发与服务"，在项目列表中选择对应的项目，左侧导航栏选择"项目设置"，在该页面获取。|
|接口URL|https://push-api.cloud.huawei.com/v2/\[projectid\]/messages:send 说明： * \[projectid\]：发送者的项目ID，登录[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)网站，选择"开发与服务"，在项目列表中选择对应的项目，左侧导航栏选择"项目设置"，在该页面获取。|
|数据格式|请求消息：Content-Type: application/json;charset=UTF-8 响应消息：Content-Type: application/json|
|-----|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|

![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250830105222.70711849439555737340412787302572:50001231000000:2800:7ACEB9962465B722236A41CFC77C48BAD272045FD19AF65FD06611390B3878A0.png)  
调用API推送消息时，接口URL版本为V1（https://push-api.cloud.huawei.com/v1/\[clientid\]/messages:send）和V2（https://push-api.cloud.huawei.com/v2/\[projectid\]/messages:send）时，仅支持给HarmonyOS 3.x/4.x的系统版本推送通知。如果您想给HarmonyOS Next/5.x及之后的系统版本推送通知，请使用[V3 版本](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/push-scenariozed-api-request-struct)URL（https://push-api.cloud.huawei.com/v3/\[projectId\]/messages:send）。  

#### 请求参数

Request Header  

|参数|取值描述|样例|
|:------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------|
|Authorization|通过[OAuth 2.0开放鉴权（客户端模式）](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/oauth2-0000001212610981#section128682386159)获取的 Access Token 或者[基于服务账号生成的鉴权令牌（JSON Web Token）](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/push_jwt_token-0000002342515678)。 说明： Bearer后面拼接空格，再拼接获取的 Access Token 或 JSON Web Token。|Bearer CF3Xl2XV6jMK\*\*\*\*\*\*\*ccUIaDg== 或 Bearer eyJr\*\*\*\*\*OiIx\*\*\*\*.eyJh\*\*\*\*\*iJodHR\*\*.QRod\*\*\*\*\*4Gp\*\*\*\*|

Request Body  

|参数|是否必选|参数类型|描述|
|:------------|:---|:------------------------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|validate_only|否|Boolean|控制当前是否为测试消息，测试消息只做格式合法性校验，不会推送给用户设备，取值如下： * true：测试消息 * false：正式消息（默认值）|
|message|是|[Message](#ZH-CN_TOPIC_0000001700731289__p1324218481619) Object|推送消息结构体，message结构体中必须存在有效消息负载以及有效发送目标，具体字段请参见[Message](#ZH-CN_TOPIC_0000001700731289__p1324218481619)的定义。|
|review|否|Array \[[Review](#ZH-CN_TOPIC_0000001700731289__p17267191111615) Object\]|[第三方审核结构](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/android-3rd-party-review-0000001050166008)对推送消息体内容的审核结果信息，具体结构请参见[Review](#ZH-CN_TOPIC_0000001700731289__p17267191111615)的定义。|

Message  

|参数|是否必选|参数类型|描述|
|:-----------|:---|:--------------------------------------------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|data|否|String|自定义消息负载，通知栏消息支持JSON格式字符串，透传消息支持普通字符串或者JSON格式字符串。样例："your data"，"{'param1':'value1','param2':'value2'}"。 * 消息体中有message.data，没有message.notification和message.android.notification，消息类型为透传消息 * 如果用户发送的是网页应用的透传消息，那么接收消息中字段orignData为透传消息内容|
|notification|否|[Notification](#ZH-CN_TOPIC_0000001700731289__p332461519168) Object|通知栏消息内容，具体字段请参见[Notification](#ZH-CN_TOPIC_0000001700731289__p332461519168)的定义。|
|android|否|[AndroidConfig](#ZH-CN_TOPIC_0000001700731289__p837521812163) Object|Android消息推送控制参数，具体字段请参见[AndroidConfig](#ZH-CN_TOPIC_0000001700731289__p837521812163)的定义。 如果是Android通知栏消息，本字段必填。|
|apns|否|[ApnsConfig](#ZH-CN_TOPIC_0000001700731289__p239513801613) Object|iOS消息推送控制参数，具体字段请参见[ApnsConfig](#ZH-CN_TOPIC_0000001700731289__p239513801613)的定义。 如果是iOS消息，本字段必填。|
|webpush|否|[WebPushConfig](#ZH-CN_TOPIC_0000001700731289__p8742164413162) Object|网页应用推送消息控制参数，具体字段请参见[WebPushConfig](#ZH-CN_TOPIC_0000001700731289__p8742164413162)结构体的定义。 如果是网页应用通知栏消息，本字段必填。|
|token|否|Array \[String\]|按照Token向目标用户推消息，token/topic/condition三者只能且必须设置一个。样例："token":\["token1","token2"\] 说明： 在数组中加入了相同的Token会导致用户收到相同的消息，请您不要输入重复的Token。|
|topic|否|String|按照Topic向订阅了本topic的用户推消息（目前只支持Android应用），token/topic/condition三者只能且必须设置一个。|
|condition|否|String|* 按照条件（主题组合表达式）向目标用户推消息（目前只支持Android应用），token/topic/condition三者只能且必须设置一个 * 支持主题组合条件发送，即指定目标主题的布尔表达式 * condition的语法和限制： * 支持布尔运算： * \&\&：表示逻辑与 * \|\|：表示逻辑或 * !：表示逻辑非 * ()：优先级控制 * in：关键词 * 使用限制： 条件表达式中最多可包括五个主题 * 使用案例： ``` "'TopicA' in topics && ('TopicB' in topics || 'TopicC' in topics)" ``` 上述表达式将消息发送至已订阅TopicA以及TopicB或TopicC的设备，对于只订阅某个单一主题的用户将不会接收到消息|

Review  

|参数|是否必选|参数类型|描述|
|:-------|:---|:------|:-------------------------------------------------------------------------|
|reviewer|是|String|第三方审核机构名称，当前必须设置为tuibian。|
|type|是|Integer|消息体内容经审核后的类型标识，当前必须设置为0。|
|result|是|Object|第三方审核机构对消息体内容的审核结果，具体结构请参见[推必安公有云接口文档](https://tuibian.mobileservice.cn/)。|

Notification  

|参数|是否必选|参数类型|描述|
|:----|:---|:-----|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|title|是|String|通知栏消息的标题。|
|body|是|String|通知栏消息的内容。|
|image|否|String|用户自定义的通知栏消息右侧小图片URL，如果不设置，则不展示通知栏右侧图片。URL使用的协议必须是HTTPS协议，取值样例：https://example.com/image.png。 说明： 图片文件须小于512KB，规格建议为40dp x 40dp，弧角大小为8dp。超出建议规格的图片会存在图片压缩或图片显示不全的情况。图片格式建议使用JPG/JPEG/PNG。|

AndroidConfig  

|参数|是否必选|参数类型|描述|
|:---------------|:---|:---------------------------------------------------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|bi_tag|否|String|批量任务消息标识，消息回执时会返回给应用服务器，应用服务器可以识别bi_tag对消息的下发情况进行统计分析。|
|category|否|String|作用一：完成[自分类权益申请](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/message-classification-0000001149358835#ZH-CN_TOPIC_0000001652651372__section893184112272)后，用于标识消息类型，确定[消息提醒方式](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/message-classification-0000001149358835#ZH-CN_TOPIC_0000001652651372__p3850133955718)，对特定类型消息加快发送，取值如下： * IM：即时聊天 * VOIP：音视频通话 * SUBSCRIPTION：订阅 * TRAVEL：出行 * HEALTH：健康 * WORK：工作事项提醒 * ACCOUNT：帐号动态 * EXPRESS：订单\&物流 * FINANCE：财务 * DEVICE_REMINDER：设备提醒 * MAIL：邮件 * PLAY_VOICE：语音播报（仅透传消息支持） * MARKETING：内容推荐、新闻、财经动态、生活资讯、社交动态、调研、产品促销、功能推荐、运营活动（仅对内容进行标识，不会加快消息发送） 作用二：[申请特殊权限](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/faq-0000001050042183#section037425218509)后，用于标识高优先级透传场景，取值如下： * VOIP：音视频通话 * PLAY_VOICE：语音播报|
|collapse_key|否|Integer|用户设备离线时，Push服务器对离线消息缓存机制的控制方式，用户设备上线后缓存消息会再次下发，取值如下： * 0：对每个应用发送到该用户设备的离线消息只会缓存最新的一条 * -1：对所有离线消息都缓存（默认值） * 1\~100：离线消息缓存分组标识，对离线消息进行分组缓存，每个应用每一组最多缓存一条离线消息 如果您发送了10条消息，其中前5条的collapse_key为1，后5条的collapse_key为2，那么待用户上线后collapse_key为1和2的分别下发最新的一条消息给最终用户。|
|data|否|String|自定义消息负载，此处如果设置了data，则会覆盖message.data字段。|
|fast_app_target|否|Integer|快应用发送透传消息时，指定小程序的模式类型，小程序有两种模式开发态和生产态，取值如下： * 1：开发态 * 2：生产态（默认值）|
|notification|是|[AndroidNotification](#ZH-CN_TOPIC_0000001700731289__p14253121131620) Object|Android通知栏消息结构体，具体字段请参见[AndroidNotification](#ZH-CN_TOPIC_0000001700731289__p14253121131620)结构体的定义。|
|receipt_id|否|String|输入一个唯一的回执ID指定本次下行消息的回执地址及配置，该回执ID可以在[回执参数配置](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/msg-receipt-guide-0000001050040176#ZH-CN_TOPIC_0000001700731529__li15263162510251)中查看。|
|target_user_type|否|Integer|* 0：普通消息（默认值） * 1：测试消息。每个应用每日可发送该测试消息500条且不受[每日单设备推送数量上限要求](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/message-restriction-description-0000001361648361#section104849311415)|
|ttl|否|String|消息缓存时间，单位是秒。在用户设备没有网络时，消息在Push服务器进行缓存，在消息缓存时间内用户设备重新连接网络，消息会下发，超过缓存时间后消息会丢弃，默认值为"86400s"（1天），最大值为"1296000s"（15天）。|
|urgency|否|String|透传消息投递优先级，取值如下： * HIGH * NORMAL（默认值） 设置为HIGH时需要申请权限，请参见[申请特殊权限](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/faq-0000001050042183#section037425218509)。 HIGH级别消息到达用户手机时可强制拉起应用进程。|

AndroidNotification  

|参数|是否必选|参数类型|描述|
|:------------------|:---|:-------------------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|title|是|String|Android通知栏消息标题，如果此处设置了title则会覆盖message.notification.title字段，且发送通知栏消息时，此处title和message.notification.title两者最少需要设置一个。|
|body|是|String|Android通知栏消息内容，如果此处设置了body则会覆盖message.notification.body字段，且发送通知栏消息时，此处body和message.notification.body两者最少需要设置一个。|
|icon|否|String|自定义通知栏消息左侧小图标，此处设置的图标文件必须存放在应用的/res/raw路径下，例如"/raw/ic_launcher"，对应应用本地的"/res/raw/ic_launcher.xxx"文件。支持的文件格式目前包括PNG、JPG。自定义小图标规格规范请参见[通知图标规范](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/notificattion_spec-0000001052845223#section1626375315119)。|
|color|否|String|自定义通知栏按钮颜色，以#RRGGBB格式，其中RR代表红色的16进制色素，GG代表绿色的16进制色素，BB代表蓝色的16进制色素，样例：#FFEEFF。|
|sound|否|String|自定义消息通知铃声。在新创建渠道时有效，此处设置的铃声文件必须存放在应用的/res/raw路径下，例如设置为"/raw/shake"，对应应用本地的"/res/raw/shake.xxx"文件。支持的文件格式包括MP3、WAV、MPEG等，如果不设置，则用默认系统铃声。 说明： 由于铃声是通知渠道的属性，因此铃声仅在渠道创建时有效，渠道创建后，即使设置自定义铃声也不会播放，而使用创建渠道时设置的铃声。|
|default_sound|否|Boolean|默认铃声控制开关，取值如下： * true：使用系统默认铃声（默认值） * false：使用sound自定义铃声|
|tag|否|String|消息标签，同一应用下使用同一个消息标签的消息会相互覆盖，只展示最新的一条。|
|click_action|是|[ClickAction](#ZH-CN_TOPIC_0000001700731289__p431142991615) Object|消息点击行为，具体字段请参见[ClickAction](#ZH-CN_TOPIC_0000001700731289__p431142991615)结构体的定义。 如果是Android通知栏消息时，则该参数必选。|
|body_loc_key|否|String|显示本地化body的StringId，具体使用请参见[通知栏消息语言本地化](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/android-noti-local-0000001050042073)。|
|body_loc_args|否|Array \[String\]|本地化body的可变参数，具体使用请参见[通知栏消息语言本地化](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/android-noti-local-0000001050042073)。样例："body_loc_args":\["1","2","3"\]|
|title_loc_key|否|String|显示本地化title的StringId，具体使用请参见[通知栏消息语言本地化](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/android-noti-local-0000001050042073)。|
|title_loc_args|否|Array \[String\]|本地化title的可变参数，具体使用请参见[通知栏消息语言本地化](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/android-noti-local-0000001050042073)。样例： "title_loc_args":\["1","2","3"\]|
|multi_lang_key|否|Object|消息国际化多语言参数，body_loc_key，title_loc_key优先从multi_lang_key读取内容，如果key不存在，则从APK本地字符串资源读，具体使用请参见[通知栏消息语言本地化](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/android-noti-local-0000001050042073)。 最多设置3种语言。|
|channel_id|否|String|自Android O版本后可以支持通知栏自定义渠道，指定消息要展示在哪个通知渠道上，详情请参见[自定义通知渠道](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/android-custom-chan-0000001050040122)。|
|notify_summary|否|String|Android通知栏消息简要描述。|
|image|否|String|自定义通知栏消息右侧小图片URL，功能和message.notification.image字段一样，如果此处设置，则覆盖message.notification.image中的值。URL使用的协议必须是HTTPS协议，取值样例：https://example.com/image.png。 说明： 图片文件须小于512KB，规格建议为40dp x 40dp，弧角大小为8dp。超出建议规格的图片会存在图片压缩或图片显示不全的情况。图片格式建议使用JPG/JPEG/PNG。|
|style|否|Integer|通知栏样式，取值如下： * 0：默认样式（默认值） * 1：大文本样式 * 3：Inbox样式|
|big_title|否|String|Android通知栏消息大文本标题，当style为1时必选，设置big_title后通知栏展示时，使用big_title而不用title。|
|big_body|否|String|Android通知栏消息大文本内容，当style为1时必选，设置big_body后通知栏展示时，使用big_body而不用body。|
|notify_id|否|Integer|每条消息在通知显示时的唯一标识。不携带或者设置-1时，推送服务自动为每条消息生成一个唯一标识；不同的通知栏消息可以拥有相同的notifyId，实现新消息覆盖旧消息功能。|
|group|否|String|消息分组，例如发送10条带有同样group字段的消息，手机上只会展示该组消息中最新的一条和当前该组接收到的消息总数目，不会展示10条消息。|
|badge|否|[BadgeNotification](#ZH-CN_TOPIC_0000001700731289__p12819153131618) Object|Android通知消息角标控制，具体字段请参见[BadgeNotification](#ZH-CN_TOPIC_0000001700731289__p12819153131618)结构体的定义。|
|ticker|否|String|设备收到通知消息后状态栏上显示的内容提示。受Android系统原生机制的限制，在Android 5.0版本（API Level 21）之后的设备上，设置了该字段也不会显示。|
|when|否|String|设置通知栏消息的到达时间，如果您同时发送多条消息，Android通知栏中的消息根据这个值进行排序，同时将排序后的消息在通知栏上显示。该时间戳为UTC时间戳，样例：2014-10-02T15:01:23.045123456Z。|
|importance|否|String|消息的提醒级别，取值如下： * LOW：表示通知栏消息预期的提醒方式为静默提醒，消息到达手机后，无铃声震动。 * NORMAL：表示通知栏消息预期的提醒方式为强提醒，消息到达手机后，以铃声、震动提醒用户。终端设备实际消息提醒方式将根据[category](#ZH-CN_TOPIC_0000001700731289__p5203378238)字段取值或者[智能分类](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/message-classification-0000001149358835#ZH-CN_TOPIC_0000001652651372__li19162756181511)结果进行调整（默认值）|
|use_default_vibrate|否|Boolean|是否使用系统默认振动模式控制开关，默认值为true。|
|use_default_light|否|Boolean|是否使用默认呼吸灯模式控制开关，默认值为true。|
|vibrate_config|否|Array \[String\]|Android自定义通知消息振动模式，每个数组元素按照"\[0-9\]+\|\[0-9\]+\[sS\]\|\[0-9\]+\[.\]\[0-9\]{1,9}\|\[0-9\]+\[.\]\[0-9\]{1,9}\[sS\]"格式，取值样例\["3.5S","2S","1S","1.5S"\]，数组元素最多支持10个，每个元素数值整数大于0小于等于60。暂不支持EMUI 11。样例："vibrate_config":\["1","3"\]。|
|visibility|否|String|Android通知栏消息可见性，取值如下： * "VISIBILITY_UNSPECIFIED"：未指定"visibility"，效果等同于设置了"PRIVATE" * "PUBLIC"：锁屏时收到通知栏消息，显示消息内容 * "SECRET"：锁屏时收到通知栏消息，不提示收到通知消息 * "PRIVATE"：设置了锁屏密码，"锁屏通知"（导航："设置 \> 通知 \> 隐藏通知内容"）选择"隐藏通知内容"时收到通知消息，不显示消息内容（默认值）|
|light_settings|否|[LightSettings](#ZH-CN_TOPIC_0000001700731289__p20908173320169) Object|自定义呼吸灯颜色，具体字段请参见[LightSettings](#ZH-CN_TOPIC_0000001700731289__p20908173320169)结构体的定义。|
|foreground_show|否|Boolean|应用在前台时，通知栏消息是否展示开关（默认值为前台展示true）。具体使用请参见[前台应用的通知处理](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/android-fgrd-show-0000001050040126)。|
|profile_id|否|String|关联终端设备登录用户标识，最大长度为64。|
|inbox_content|否|Array \[String\]|当style为3时，Inbox样式的内容（必选），支持最大5条内容，每条最大长度1024。展示效果请参见[通知栏消息Inbox样式](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/android-inbox-style-0000001050042085)。样例："inbox_content":\["content1","content2","content3"\]。|
|buttons|否|Array \[[Button](#ZH-CN_TOPIC_0000001700731289__p187101326101610) Object\]|通知栏消息动作按钮，最多设置3个。具体字段请参见[Button](#ZH-CN_TOPIC_0000001700731289__p187101326101610)结构体的定义。样例："buttons":\[{"name":"打开应用","action_type":"1"}\]。|

Button  

|参数|是否必选|参数类型|描述|
|:----------|:---|:------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|name|是|String|按钮名称，最大长度40。|
|action_type|是|Integer|按钮动作类型： * 0：打开应用首页 * 1：打开应用自定义页面 * 2：打开指定的网页 * 3：清除通知 * 4：华为分享功能|
|intent_type|否|Integer|打开自定义页面的方式： * 0：设置通过intent打开应用自定义页面 * 1：设置通过action打开应用自定义页面 当action_type为1时，该字段必填。|
|intent|否|String|* 当action_type为1，此字段按照intent_type字段设置应用页面的uri或者action，具体设置方式参见[打开应用自定义页面](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/andorid-basic-clickaction-0000001087554076#section20203190121410) * 当action_type为2，此字段设置打开指定网页的URL，URL使用的协议必须是HTTPS协议，取值样例：https://example.com/image.png|
|data|否|String|* 当字段action_type为0或1时，该字段用于在点击按钮后给应用透传数据，选填，格式必须为key-value形式：{"key1":"value1","key2":"value2",...} * 当action_type为4时，此字段必选，为分享的内容 * 最大长度1024|

ClickAction  

|参数|是否必选|参数类型|描述|
|:-----|:---|:------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|type|是|Integer|消息点击行为类型，取值如下： * 1：打开应用自定义页面 * 2：点击后打开特定URL * 3：点击后打开应用|
|intent|否|String|自定义页面中intent的实现，请参见[指定intent参数](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/andorid-basic-clickaction-0000001087554076#section17768170161516)​。当type为1时，字段intent和action至少二选一。|
|url|否|String|* 设置打开特定URL，本字段填写需要打开的URL，URL使用的协议必须是HTTPS协议，取值样例：https://example.com/image.png * 当type为2时必选 * 如果是游戏类应用，不支持设置特定URL|
|action|否|String|设置通过action打开应用自定义页面时，本字段填写要打开的页面activity对应的action。 当type为1（打开自定义页面）时，字段intent和action至少二选一。|

BadgeNotification  

|参数|是否必选|参数类型|描述|
|:------|:---|:------|:---------------------------------------------------------------------------------------------|
|add_num|否|Integer|应用角标累加数字非应用角标实际显示数字，为大于0小于100的整数。 例如，某应用当前有N条未读消息，若add_num设置为3，则每发一次消息，应用角标显示的数字累加3，为N+3。|
|class|否|String|应用入口Activity类全路径。 若需要使用角标功能，本字段必填，"add_num"和"set_num"参数选填。 样例：com.example.hmstest.MainActivity|
|set_num|否|Integer|角标设置数字，大于等于0小于100的整数。 例如，set_num设置为10，则不论发了多少次消息，应用角标显示的数字都是10。|

![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250830105222.51588532882999503725889610098360:50001231000000:2800:9D252706CA989A9A62E2F3C965AA0433A6D4E074A174CB4EC7A392926BBD1A25.png)  
* 若"add_num"和"set_num"都设置为空，则应用角标数字默认加1。
* 若"add_num"和"set_num"都设置，角标最终以"set_num"的值为准。

LightSettings  

|参数|是否必选|参数类型|描述|
|:-----------------|:---|:-------------------------------------------------------------|:---------------------------------------------------------------------------------------------------|
|color|是|[Color](#ZH-CN_TOPIC_0000001700731289__p15188153615167) Object|呼吸灯颜色，当设置light_settings时，该字段必选。具体字段请参见[Color](#ZH-CN_TOPIC_0000001700731289__p15188153615167)结构体的定义。|
|light_on_duration|是|String|呼吸灯点亮时间间隔，当设置light_settings时，该字段必选，格式按照"\\d+\|\\d+\[sS\]\|\\d+.\\d{1,9}\|\\d+.\\d{1,9}\[sS\]"。|
|light_off_duration|是|String|呼吸灯熄灭时间间隔，当设置light_settings时，该字段必选，格式按照"\\d+\|\\d+\[sS\]\|\\d+.\\d{1,9}\|\\d+.\\d{1,9}\[sS\]"。|

Color  

|参数|是否必选|参数类型|描述|
|:----|:---|:----|:---------------------------------|
|alpha|否|Float|RGB颜色中的alpha设置，默认值为1，取值范围\[0, 1\]。|
|red|否|Float|RGB颜色中的red设置，默认值为0，取值范围\[0, 1\]。|
|green|否|Float|RGB颜色中的green设置，默认值为0，取值范围\[0, 1\]。|
|blue|否|Float|RGB颜色中的blue设置，默认值为0，取值范围\[0, 1\]。|

ApnsConfig  

|参数|是否必选|参数类型|描述|
|:----------|:---|:------------------------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|headers|否|Object|APNs消息头。具体字段请参见[iOS开发者网站](https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/CommunicatingwithAPNs.html)。|
|payload|是|Object|APNs消息负载。如果消息负载中设置了title、body则会覆盖message.notification.title、body字段，且发送消息时，此处title、body和message.notification.title、body两者最少需要设置一个。 具体字段请参见[iOS开发者网站](https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/PayloadKeyReference.html#//apple_ref/doc/uid/TP40008194-CH17-SW1)。|
|hms_options|是|[ApnsConfig.HmsOptions](#ZH-CN_TOPIC_0000001700731289__p139031840181617) Object|APNs的hms参数，具体字段请参见[ApnsConfig.HmsOptions](#ZH-CN_TOPIC_0000001700731289__p139031840181617)结构体的定义。|

ApnsConfig.HmsOptions  

|参数|是否必选|参数类型|描述|
|:---------------|:---|:------|:----------------------------------------|
|target_user_type|是|Integer|目标用户类型，取值如下： * 1：测试用户 * 2：正式用户 * 3：VOIP用户|

WebPushConfig  

|参数|是否必选|参数类型|描述|
|:-----------|:---|:-----------------------------------------------------------------------------|:---------------------------------------------------------------------------------------------|
|headers|否|[Headers](#ZH-CN_TOPIC_0000001700731289__p03631646141618) Object|Web推送消息头，具体字段请参见[Headers](#ZH-CN_TOPIC_0000001700731289__p03631646141618)结构体的定义。|
|notification|否|[WebNotification](#ZH-CN_TOPIC_0000001700731289__p1054754817165) Object|Web推送通知栏消息结构体，具体字段请参见[WebNotification](#ZH-CN_TOPIC_0000001700731289__p1054754817165)结构体的定义。|
|hms_options|否|[WebPushConfig.HmsOptions](#ZH-CN_TOPIC_0000001700731289__p44395371613) Object|Web推送的参数，具体字段请参见[WebPushConfig.HmsOptions](#ZH-CN_TOPIC_0000001700731289__p44395371613)结构体的定义。|

Headers  

|参数|是否必选|参数类型|描述|
|:------|:---|:-----|:--------------------------------------|
|ttl|否|String|消息缓存时间，单位是秒，默认值为86400S，示例：20或者20s或者20S。|
|topic|否|String|消息标识，可用于覆盖未送达的消息。|
|urgency|否|String|消息紧急程度，取值如下： * HIGH * NORMAL（默认值）|

WebNotification  

|参数|是否必选|参数类型|描述|
|:------------------|:---|:---------------------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------------|
|title|否|String|网页应用通知消息标题，如果此处设置了title则会覆盖message.notification.title字段，且发送消息时，此处title和message.notification.title两者最少需要设置一个。|
|body|否|String|网页应用通知消息文本，如果此处设置了body则会覆盖message.notification.body字段，且发送消息时，此处body和message.notification.body两者最少需要设置一个。|
|icon|否|String|小图标URL。|
|image|否|String|大图URL。|
|lang|否|String|语言。|
|tag|否|String|通知消息分组覆盖标签，多条相同tag折叠显示，显示最新一条，仅仅用于手机端浏览器。|
|badge|否|String|浏览器图标URL，仅用于手机端浏览器，用于替换默认情况下显示的浏览器图标。|
|dir|否|String|文字方向，取值如下： * auto：从左向右（默认值） * ltr：方向从左向右 * rtl：方向从右向左|
|vibrate|否|Array \[Integer\]|振动间隔时间，单位毫秒。样例：\[100,200,300\]|
|renotify|否|Boolean|消息重新提醒标识。|
|require_interaction|否|Boolean|通知应保持活动状态，直到用户点击或将其关闭为止，而不是自动关闭。|
|silent|否|Boolean|消息免声音、振动提醒标识。|
|timestamp|否|Long|标准的unix时间戳。|
|actions|否|Array \[[WebActions](#ZH-CN_TOPIC_0000001700731289__p2206451121613) Object\]|消息动作定义，具体字段请参见[WebActions](#ZH-CN_TOPIC_0000001700731289__p2206451121613)结构体的定义。|

WebActions  

|参数|是否必选|参数类型|描述|
|:-----|:---|:-----|:----------|
|action|否|String|动作的名称。|
|icon|否|String|动作的按钮图标URL。|
|title|否|String|动作显示的标题。|

WebPushConfig.HmsOptions  

|参数|是否必选|参数类型|描述|
|:---|:---|:-----|:----------------------|
|link|否|String|没有action情况下，点击跳转的默认URI。|

#### 请求示例

请参见[HTTPS下行消息示例报文](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/rest-sample-code-0000001050040242)。  

#### 响应参数

Response Body  

|参数|参数类型|描述|
|:--------|:-----|:-----|
|code|String|错误码。|
|msg|String|错误码描述。|
|requestId|String|请求标识。|

#### 响应示例

```
{
    "code": "80000000",
    "msg": "Success",
    "requestId": "157*******006"
}
```

#### 错误码

|HTTP错误码|描述|解决方法|
|:------|:-----------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|200|成功。|-|
|400|参数错误。|请检查响应内容错误码并根据错误码进一步排查问题。|
|401|鉴权失败。|请检查HTTP头中Authorization是否正确，参考[OAuth 2.0开放鉴权（客户端模式）](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/oauth2-0000001212610981#section128682386159)或者[基于服务账号生成鉴权令牌（JSON Web Token）](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/push_jwt_token-0000002342515678)。|
|404|找不到服务。|请检查请求URI是否正确。|
|500|服务内部错误。|请联系[技术支持](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/technical-support-0000001058590093)解决。|
|502|请求连接异常，常见于网络状况不稳定。|建议稍后重试，或联系[技术支持](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/technical-support-0000001058590093)解决。|
|503|流量控制。|1. 平均分配发送速度，尽量控制在华为提供的QPS配额内。QPS配额请查看[FAQ](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/faq-0000001050042183#section196822541234)。 2. 平均分布推送时间段，不要集中发送。|

|业务错误码|描述|解决方法|
|:-------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|80000000|成功。|不涉及。|
|80100000|部分Token发送成功，返回的illegal_tokens为不合法而发送失败的Token。响应示例： ``` { "code": "80100000", "msg": "{\"success\":3,\"failure\":1,\"illegal_tokens\":[\"xxx\"]}", "requestId": "" } ```|请检查返回值中发送失败的Token。|
|80100001|请求参数部分检查错误。响应示例： ``` { "code": "80100001", "msg": "UnSupported svc", "requestId": "" } ```|按照响应消息中的提示，请检查请求参数。|
|80100003|消息结构体错误。|按照响应消息中的提示，请检查消息结构体的参数。|
|80100004|消息设置的过期时间小于当前时间导致。|请检查消息字段[ttl](#ZH-CN_TOPIC_0000001700731289__p1531816810239)。|
|80100013|消息字段collapse_key不合法。|请检查消息字段[collapse_key](#ZH-CN_TOPIC_0000001700731289__p5318198112317)。|
|80100016|消息里面含有敏感信息。|请检查发送消息内容，可参见[基于第三方审核结果的消息推送](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/android-3rd-party-review-0000001050166008)。|
|80100017|同时发送的Topic任务超过100个。|请稍后再发送主题消息，增加主题消息发送间隔。|
|80100018|消息体内容验签不通过。|请检查发给三方机构审核的消息体与发给Push服务器的消息体内容是否一致。|
|80200001|认证错误。|请求HTTP头中Authorization参数鉴权令牌错误。 1. 下发消息未添加Authorization参数或Authorization的值为空。 2. 通过[OAuth 2.0开放鉴权（客户端模式）](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/oauth2-0000001212610981#section128682386159)获取的 Access Token 对应的Client ID和推送消息的Client ID不一致。比如，应用A的Client ID申请的Access Token，用于给应用B推送消息。 3. [基于服务账号生成的鉴权令牌（JSON Web Token）](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/push_jwt_token-0000002342515678)解析错误。|
|80200003|Access Token 过期。|请求HTTP头中Authorization参数中通过[OAuth 2.0开放鉴权（客户端模式）](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/oauth2-0000001212610981#section128682386159)获取的 Access Token 已过期，请重新申请后重试。|
|80200005|JSON Web Token 过期|请求HTTP头中Authorization参数中[基于服务账号生成的鉴权令牌（JSON Web Token）](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/push_jwt_token-0000002342515678)过期，请重新生成。|
|80300002|当前应用无权限下发推送消息。|1. 登录[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)网站，查看Push服务状态是否已开通。 2. 如果您集成的是SDK 2.0版本并且使用[OAuth 2.0开放鉴权（客户端模式）](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/oauth2-0000001212610981#section128682386159)，请把获取到的 Access Token 里的转义字符（\\）去掉后再进行URL Encode编码（编码常用网址为https://tool.chinaz.com/Tools/urlencode.aspx）。 3. 检查用户的Token与鉴权令牌使用的应用或项目信息是否一致。 4. 如果您的应用在国内推送正常，而在海外服务器返回80300002错误码，则您需要开通海外的Push权益。具体操作：请找到"我的应用"后禁用Push服务，重新开启Push服务。 说明： 如果只开通Push服务，请您先去应用市场上传一个APK，保存草稿状态即可，否则重新添加的时候您可能无法找到原来的应用。 5. 请检查发送消息体中内容是否有输入错误。 6. 您可先在推送运营平台先推送消息测试下，如果成功，则表明您在调用接口时出错。 7. 在多发送者场景下，请检查[接口原型](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/https-send-api-0000001050986197#section134322259125)。|
|80300007|所有Token都是无效的。|1. 同一个设备，不同应用的Token原则上是不一样，但实际操作时可能误传递同样的值。 2. 客户端应用配置的应用包名、应用ID与[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)网站上申请的不一致。 3. 检查消息发送的URL是否正确： SDK 2.0 URL：https://api.push.hicloud.com/pushsend.do SDK 3.0+ URL：https://push-api.cloud.huawei.com/v1/\[clientid\]/messages:send|
|80300008|消息体大小（不含Token）超过系统设置的默认值（4096Bytes）。|请求消息体大小超过默认值，请减小消息体后重新发送消息。|
|80300010|消息体中的Token数量超过系统设置的默认值。|请减少Token数量后分批发送消息。|
|80300011|无权限发送高级别通知消息。|请[申请特殊权限](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/faq-0000001050042183#section037425218509)后再发送高级别通知消息。|
|80300013|回执地址错误。|请检查您的回执地址是否正确，回执证书是否过期。|
|80600003|请求OAuth服务失败。|请检查OAuth 2.0客户端ID和客户端密钥。|
|81000001|系统内部错误。|请联系[技术支持](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/technical-support-0000001058590093)解决。|

