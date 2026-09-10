---
name: document/cn/games-guides/games-quickgame-runtime-embedded-operation-0000002694821709
title: 嵌入式运行
uri: https://developer.huawei.com/consumer/cn/doc/games-guides/games-quickgame-runtime-embedded-operation-0000002694821709
---

# 嵌入式运行

小游戏嵌入式运行，指小游戏可以在任意尺寸的容器内运行，且支持随意切换游戏尺寸。  
![](https://media:201787799763308806)  
* 当前小游戏嵌入式运行仅支持在系统为HarmonyOS 5.0及以上的设备内运行。
* 小游戏嵌入式运行对小游戏有一定的要求，如果需要使用，您需要对您的游戏进行适配。

![](https://media:201787799763379807)  

#### 开发指导

1. 获取小游戏启动场景信息。 调用[qg.getLaunchOptionsSync](https://developer.huawei.com/consumer/cn/doc/games-references/games-api-quickgame-runtime-lifecycle-0000002365996968#section4844135503910)接口获取当前小游戏的query参数内gameRunMode的值，从而判断当前游戏是否是在直玩获客userAcquire场景下启动。若为直玩获客场景则可以跳过广告等阻断用户体验的场景，直接进入核心精彩关卡。

2. 上报小游戏加载完成事件。 嵌入式游戏开始时会在后台静默加载，不会露出画面，当您根据游戏内的事件判断出游戏画面已经准备好时，请调用[qg.notifyGameEvent](https://developer.huawei.com/consumer/cn/doc/games-references/games-api-quickgame-game-event-0000002666430396#section917310297396)接口上报小游戏加载完成gameLoaded事件。若未调用接口上报小游戏加载完成gameLoaded事件，游戏将一直不会露出画面，直到上报该事件。直玩大卡会在接收到gameLoaded事件或首帧渲染完成后露出游戏画面，具体露出时机由华为侧控制，此时露出的画面带有蒙层，效果如下图所示：

   ![](https://media:201787799763419808)
3. 获取用户戳破蒙层进入游戏的事件通知。 调用[qg.onRuntimeEvent](https://developer.huawei.com/consumer/cn/doc/games-references/games-api-quickgame-game-event-0000002666430396#section1942616611537)接口，监听用户戳破蒙层进入直玩游戏startDirectPlay事件通知，当用户点击蒙层时即可戳破蒙层，开始游玩小游戏。

![](https://media:201787799763467809)  

#### 游戏适配

#### 游戏流程适配建议

小游戏嵌入式运行采取预加载的模式，用户在游戏尚未展示和未进入游戏前属于潜在用户，若此阶段进行角色创建等操作，会造成大量非真实用户的请求和资源占用，因此建议按照以下的方式对游戏进行调整。

* 小游戏嵌入式运行场景下，在获取到用户戳破蒙层进入直玩游戏startDirectPlay事件通知之前，游戏内不进行角色创建、服务器选择等操作。若游戏逻辑存在相关限制，必须创建角色后才能进入游戏，建议创建一个临时角色，避免在未戳破蒙层的场景创建过多无效的角色。
* 小游戏嵌入式运行场景下，在获取到用户戳破蒙层进入直玩游戏startDirectPlay事件通知之后，游戏内进行角色创建、服务器选择等操作。若未创建角色，则自动为用户创建角色，并自动分配角色名称、服务器等游戏信息；若已创建临时角色，则将临时角色自动转换为正式角色。
* 当玩家在小游戏嵌入式运行场景进行过游戏，后续正常启动游戏时，游戏需要继承玩家在小游戏嵌入式运行场景下创建的角色信息，并允许玩家进行角色名称修改等操作。  

#### 封面图适配

当您的游戏为Cocos游戏并使用了Cocos游戏封面图时，如果对于屏幕周围可能被剪裁的内容没有严格要求，也可以不用主动适配，Cocos引擎会根据屏幕宽高比自动选择适配高度或适配宽度来避免黑边，即等比填充。详情请参见[多分辨率适配方案](https://docs.cocos.com/creator/3.0/manual/zh/ui-system/components/engine/multi-resolution.html)。  

#### 游戏多分辨率适配

在嵌入式小窗场景，宿主应用可能将游戏小窗设置为任意尺寸，游戏需要适配任意宽高比，如16:9、9:16、1:1等；在嵌入式小窗点击全屏按钮后，游戏画面铺满屏幕，游戏宽高比与设备宽高比一致。您需要适配好多种分辨率，最好采用游戏IDE中的弹性布局等能力，Cocos游戏请参见[Cocos游戏多分辨率适配](https://docs.cocos.com/creator/3.8/manual/zh/ui-system/components/engine/usage-ui.html)。

适配好之后，您可以使用以下方法验证游戏是否正常适配：

* 若只有直板手机，可以使用[分屏](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/multi-window-intro#分屏)功能模拟小窗模式，调整分屏比例，检查游戏是否正常适配：

  ![](https://media:201787799763537810)
* 若有折叠屏设备，可以通过收起、展开折叠屏，检查游戏是否正常适配。  

#### 功能适配

当前阶段，小游戏嵌入式运行场景部分能力受限，需要您进行适配。

加桌能力

当前小游戏嵌入式运行场景暂不支持加桌能力，相关接口将直接返回失败，游戏内不能将加桌能力设置为推进进度的必要条件。

广告能力

当前小游戏嵌入式运行场景暂时屏蔽广告能力，激励广告将直接返回成功，建议不对广告设置风控，确保玩家可以正常获得广告奖励。  

#### 运行测试

建议在游戏适配完成后对游戏进行测试，检查适配是否成功。

* 检查游戏封面图是否适配不同分辨率。
* 检查不同分辨率下游戏是否正常适配，详细验证方法请参见[游戏多分辨率适配](#ZH-CN_TOPIC_0000002694821709__section17495115582118)。
* 检查游戏在嵌入式运行场景下切换至后台再切回后是否可以继续运行。
* 检查加桌能力和广告能力是否按要求完成适配。  
