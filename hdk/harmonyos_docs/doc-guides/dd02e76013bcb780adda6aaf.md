---
name: document/cn/doc-guides/background-task-schedule-control-0000001200249759
title: 后台任务调度和管控
uri: https://developer.huawei.com/consumer/cn/doc/doc-guides/background-task-schedule-control-0000001200249759
source: portal
---

# 后台任务调度和管控

对于有用户交互的OS来说，资源优先分配给与用户交互的业务进程，换句话说，在支撑OS运行的进程以外，用户能感知到的业务进程优先级最高，所以后台任务调度控制的范围是用户感知不到的业务进程。

     * HarmonyOS将应用的资源使用生命周期划分为前台、后台和挂起三个阶段。前台运行不受资源调度的约束，后台会根据应用业务的具体任务情况进行资源使用管理，在挂起状态时，会对应用的资源使用进行调度和控制约束，以保障其他体验类业务对资源的竞争使用。
     * 后台任务调度和管控主要对在后台状态下的资源使用进行控制，应用从前台退到后台，可能有各种业务诉求，为了达到系统资源使用能效最优的目的，HarmonyOS提供了后台任务能力。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612113817.61728875056981598711098967990739:50001231000000:2800:FB6D84967D6622A296A207A24529199CEE823FDCF71852286FA1CCC2C32ED601.png?needInitFileName=true?needInitFileName=true)

#### 后台任务类型

本文描述的后台任务特指应用或业务模块处于后台（无可见界面）时，有需要继续执行或者后续执行的业务。对这些应用不可见但要继续或者将要执行的业务动作，为避免后台任务调度和管控对业务执行的影响，HarmonyOS将后台任务分为三种类型：

     1. 无后台业务：退后台后，无任务需要处理。
     2. 短时任务：退后台后，如果有紧急不可推迟且短时间能完成的任务，如应用退后台要进行数据压缩，不可中断，则使用短时任务申请延迟进入挂起（Suspend）状态。
     3. 长驻任务：如果是用户发起的可感知业务需要长时间后台运行的，如后台播放音乐、导航、上传下载、设备连接、VoIP等，则使用长驻任务避免进入挂起（Suspend）状态。

#### 短时任务

退到后台的应用有不可中断且短时间能完成的任务时，可以使用短时任务机制，该机制允许应用在后台短时间内完成任务，保障应用业务运行不受后台生命周期管理的影响。

     * 注意：短时任务仅针对应用的临时任务提供资源使用生命周期保障，限制单次最大使用时长为3分钟，全天使用配额默认为10分钟（具体时长系统根据应用场景和系统状态智能调整）。
     * 接口请参考：[BackgroundTaskManager接口说明](https://developer.harmonyos.com/cn/docs/documentation/doc-references/backgroundtaskmanager-0000001054440069)。

#### [h2]短时任务使用约束

短时任务的使用需要遵从如下约束和规则：

     * **申请时机** ：允许应用在前台时，或退后台在被挂起之前（应用退到后台默认有6~12秒的运行时长，具体时长由系统根据具体场景决定）申请延迟挂起，否则可能被挂起（Suspend），导致申请失败。
     * **超时** ：延迟挂起超时（Timeout），系统通过回调知会应用，应用需要取消对应的延迟挂起，或再次申请延迟挂起。超期不取消或不处理，该应用会被强制取消延迟挂起。
     * **取消时机** ：任务完成后申请方应用主动取消延时申请，不要等到超时后被系统取消，否则会影响该应用的后台允许运行时长配额。
     * **配额机制：** 为了防止应用滥用保活，或者申请后不取消，每个应用每天都会有一定配额（会根据用户的使用习惯动态调整），配额消耗完就不再允许申请短时任务，所以应用完成短时任务后立刻取消延时申请，避免消耗配额。（注，这个配额指的是申请的时长，系统默认应用在后台运行的时间不计算在内）。

#### 长驻任务

长驻任务类型给用户能直观感知到的且需要一直在后台运行的业务提供后台运行生命周期的保障。比如，业务需要在后台播放声音，或者需要在后台持续导航定位等，此类用户可以感知到的后台业务行为，可以通过使用长驻任务对应的后台模式保障业务在后台的运行，支撑应用完成在后台的业务。

#### [h2]后台模式分类

HarmonyOS提供了十种后台模式，供需要在后台做长驻任务的业务使用，具体的后台模式类型如下：

**长驻任务后台模式** | **英文名** | **描述**  
---|---|---  
数据传输 | data-transfer | 通过网络/对端设备进行数据下载、备份、分享、传输等业务  
播音 | audio-playback | 音频输出业务  
录音 | audio-recording | 音频输入业务  
画中画 | picture-in-picture | 画中画、小窗口播放视频业务  
音视频通话 | voip | 音视频电话，VoIP业务  
导航/位置更新 | location | 定位、导航业务  
蓝牙设备连接及传输 | bluetooth-interaction | 蓝牙扫描、连接、传输业务  
WLAN设备连接及传输 | wifi-interaction | WLAN扫描、连接、传输业务  
屏幕抓取 | screen-fetch | 录屏、截屏业务  
多设备互联 | multiDeviceConnection | 多设备互联，分布式调度和迁移等业务  
  
#### [h2]使用长驻任务

     1. HarmonyOS应用开发工具[DevEco Studio](https://developer.harmonyos.com/cn/develop/deveco-studio#download)在业务的ServiceAbility创建的时候提供了后台模式的选择，针对当前创建的ServiceAbility可以赋予对应的后台模式类型设置，如下图所示：

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612113818.44941934130624451723788410895433:50001231000000:2800:C9FA5CBFFD1A32184377F223CD6E52C72399058E98DDC70D39538D984D7E8C34.png?needInitFileName=true?needInitFileName=true)

业务根据需要选择对应的后台模式以后，会在应用的config.json文件中新创建的ServiceAbility组件下生成对应选择的后台模式配置，如下图所示：

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612113818.86987135244318008637538909905790:50001231000000:2800:4883C0A3C6EB794223A2A94B0518FA64608268B4CAA061FD05F8D6B3CAACDF91.png?needInitFileName=true?needInitFileName=true)

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612113818.73160740907042954546303112238740:50001231000000:2800:DAB11A44EE178BEF96932591C67214062B649A1C2D863B30BBEFE4C6C2A69076.png?needInitFileName=true?needInitFileName=true)

只有ServiceAbility才有对应的后台模式类型选择和配置。

     2. 在Service创建的方法里面调用keepBackgroundRunning()，将Service与通知绑定。

调用keepBackgroundRunning()方法前需要在配置文件中声明ohos.permission.KEEP_BACKGROUND_RUNNING权限。

完成对应的后台业务以后，在销毁服务的方法中调用cancelBackgroundRunning()方法，即可停止使用长驻任务。

请参考：[前台Service](https://developer.harmonyos.com/cn/docs/documentation/doc-guides/ability-service-foreground-0000000000044473)。

#### [h2]长驻任务使用约束

     1. 如果用户选择可感知业务（如播音、导航、上传下载等），触发对应后台模式，在任务启动时或退入后台时，需要提醒用户。
     2. 如果任务结束，应用应主动退出后台模式。若在后台运行期间，系统监测到应用并未使用对应后台模式的资源，则会被挂起（Suspend）。
     3. 避免不合理地申请后台长驻任务，长驻任务类型要与应用的类型匹配，如任务类型与应用类型匹配表所示，如果执行的任务和申请的类型不匹配，也会被系统检测到并被挂起（Suspend）。
     4. 长驻任务是为了真正在后台长时间执行某任务，如果一个应用申请了长驻任务，但在实际运行过程中，并未真正运行或执行此类任务时，也会被系统检测到并被挂起（Suspend）。

#### 托管任务

托管任务是系统提供的一种后台代理机制。通过系统提供的代理API接口，用户可以把任务（如后台下载、定时提醒、后台非持续定位）交由系统托管。

#### [h2]托管任务类型

     1. 托管任务-后台非持续定位（non-sustained Location）：如果应用未申请location常驻模式，且在后台依然尝试获取位置信息，此时应用行为被视为使用非持续定位能力，后台非持续定位限制每30分钟提供一次位置信息。应用不需要高频次定位时，建议优先使用非持续定位。
     2. 托管任务-后台提醒代理（Reminder）：后台提醒代理主要提供了一种机制，使开发者在应用开发时，可以调用这些接口去创建定时提醒，包括倒计时、日历、闹钟三种提醒类型。使用后台代理提醒能力后，应用可以被冻结或退出，计时和弹出提醒的功能将被后台系统服务代理。请参考：[Reminder接口使用说明](https://developer.harmonyos.com/cn/docs/documentation/doc-references/reminderhelper-0000001170214417)。
     3. 托管任务-后台下载代理：系统提供DownloadSession接口实现下载任务代理功能，应用提交下载任务后，应用被退出，下载任务仍然可以继续执行，且支持下载任务断点续传。请参考：[DownloadSession接口使用说明](https://developer.harmonyos.com/cn/docs/documentation/doc-references/downloadsession-0000001054358929)。

#### [h2]托管任务使用约束

     1. 后台下载代理，系统会根据用户场景和设备状态，对不同的下载任务进行相应的管控，避免影响功耗和性能。
     2. 后台非持续定位和后台提醒代理需要申请对应的权限。后台提醒需要申请ohos.permission.PUBLISH_AGENT_REMINDER权限，后台非持续定位需要申请ohos.permission.LOCATION和ohos.permission.LOCATION_IN_BACKGROUND权限。
     3. 资源滥用会影响系统性能和功耗，托管任务类型要与应用类型匹配，匹配规则如下表所示。

**表1** 任务类型与应用类型匹配表(注：本表参考华为应用市场分类方法)一级分类 | 二级分类 | 三级分类 | 后台长驻任务申请标准 | 后台托管任务申请标准  
---|---|---|---|---  
游戏 | 休闲益智 | 休闲 | 无 | 无  
IO  
益智  
消除  
音乐节奏  
解谜  
经营策略 | 塔防  
古代谋略  
现代战略  
经营  
养成  
MOBA  
体育竞技 | 赛车  
篮球  
运动  
足球  
棋牌桌游 | 斗地主  
麻将  
桌游与棋类  
纸牌  
捕鱼  
动作射击 | 射击  
格斗  
跑酷  
打飞机  
角色扮演 | 多人在线  
卡牌  
动作  
冒险  
回合制  
生存  
放置挂机  
仙侠  
武侠  
传奇  
魔幻  
应用 | 影音娱乐 | 电视 | audioPlayback |dataTransfer | 无  
视频  
音乐 | audioPlayback |audioRecording| dataTransfer  
K歌  
直播 | audioPlayback |dataTransfer  
电台  
实用工具 | 浏览器 | audioPlayback |dataTransfer | 无  
输入法 | 无 | 无  
闹钟 | Reminder  
工具 | 无  
安全性能 | 无  
WiFi | dataTransfer | 无  
社交通讯 | 聊天 | voip | audioPlayback |dataTransfer | 无  
社区  
通讯  
婚恋  
教育 | 翻译 | audioPlayback | 无  
英文 | 无  
学习 | Reminder  
备考 | Reminder  
新闻阅读 | 电子书 | audioPlayback | 无  
新闻  
杂志  
有声读物  
动漫  
幽默  
体育  
拍摄美化 | 拍照 | 无 | 无  
短视频 | audioPlayback  
图像美化 | 无  
影音编辑  
相册图库  
美食 | 菜谱 | location| audioPlayback | non-sustained location  
外卖  
餐饮  
生鲜  
出行导航 | 地图 | location|audioPlayback | non-sustained location Reminder  
导航  
交通票务  
用车  
公交地铁  
旅游住宿 | 旅游 | location|audioPlayback | non-sustained location Reminder  
住宿  
行程助手  
购物比价 | 商城 | 无 | Reminder  
导购  
团购  
海淘  
快递  
优惠  
商务 | 办公软件 | 无 | 无  
效率 | 无 | Reminder  
笔记 | 无 | Reminder  
邮箱 | dataTransfer | 无  
招聘 | 无 | 无  
儿童 | 早教 | audioPlayback | 无  
儿歌 | 无  
母婴 | Reminder  
金融理财 | 银行 | 无 | 无  
股票基金 | dataTransfer | Reminder  
理财 | Reminder  
记账 | 无 | 无  
贷款 | 无 | Reminder  
运动健康 | 运动 | location| audioPlayback | non-sustained location Reminder  
健康  
养生 | 无 | Reminder  
医疗  
便捷生活 | 家政 | 无 | 无  
本地生活  
租房买房  
家居装修  
电影票  
天气日历 | Reminder  
汽车 | 养车 | 无 | 无  
违章查询  
汽车资讯  
驾考  
主题个性 | 铃声 | 无 | 无  
锁屏  
壁纸  
  
#### FAQ

     * **什么样的应用不受后台任务调度和管控的约束，不被挂起（Suspend）？**

原则上所有应用都会受后台任务调度和管控的约束，仅仅是约束的时机和状态不同而已。系统提供了选择设置的方式供用户从使用需求维度干预后台任务调度和管控，以华为手机举例，设置路径：手机管家->应用启动管理->选择手动管理->允许后台活动。

     * **应用后台任务调度和管控与那些因素有关？**

应用后台任务调度和管控以支撑用户使用体验为第一优先级，结合用户使用习惯、用户使用情景状态、设备模式状态、应用分类、应用资源占用统计等多个维度综合判断应用后台任务调度和管控的优先级。

     * **后台任务调度和管控机制的适用范围？**

后台任务调度和管控机制仅对HarmonyOS应用进行调度和管控。
