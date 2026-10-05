---
name: document/cn/des-guides/panel-0000001156946971
title: 可滑动面板
uri: https://developer.huawei.com/consumer/cn/doc/des-guides/panel-0000001156946971
source: portal
---

# 可滑动面板

用在手机上，它是一种轻量的内容展示的窗口，通常位于界面的底部，方便用户单手操作。在折叠屏展开的情况下以及平板的情况下，由于设备不适合单手操作，可滑动面板的位置和显示形式会根据场景进行调整。例如分享界面会居中显示在屏幕中间。

可滑动面板展示的内容跟当前场景相关。可以用来持续展示需要显示的内容，例如在智慧识屏界面，可滑动面板用来展示识屏的结果。也可以用来展示临时需要显示的内容，例如查单词的时候，可滑动面板用来临时显示单词的解释。

#### 类型

     * Minibar 类 
     * 内容持续展示类 
     * 内容临时展示类 

#### 如何使用

#### [h2]Minibar

     * Minibar 提供一个小的界面展示当前的进展或状态。 
     * Minibar 可以在 Mini 状态和类全屏状态进行切换，初始状态为 Mini 状态，可切换为类全屏面板。例如天际通、音乐。 

#### [h2]内容持续展示类

     * 用于展示关键内容或任务，可以在不同大小尺寸间切换，以方便用户浏览内容。 
     * 背景为可交互区域（可选），例如 AR 识物中，用户可以自定义选取背景需识别区域。 
     * 内容展示类可放置关闭按钮（可选），位置为面板标题右侧。 

#### [h2]内容临时展示类

     * 用于展示详情或设置，用户用完即走的场景。 
     * 背景为不可交互区域，例如碰一碰出现的设备控制界面。 
     * 内容展示类可放置关闭按钮（可选），位置为面板标题右侧。 

#### 交互规则

#### [h2]Mini bar类

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230524165146.76952145648383960927016086936981:50001231000000:2800:D4476E365C8FC574CFBBF4306A8A61C6D2C07B59BFD97FAB6D251AA8279DC977.png?needInitFileName=true?needInitFileName=true)

**滑动**

     * 在 Mini 状态，上滑切换为类全屏面板。 
     * 在类全屏面板上，下滑切换为 Mini 状态。下滑过程中，箭头有微动效体现变化过程。 

**点击**

     * 点击 Mini bar，切换为类全屏面板。 
     * 点击类全屏面板的箭头区域或点击系统返回按钮，切换为 Mini 状态。 

#### [h2]内容持续展示类

内容展示类有小、中（类半屏）、大（类全屏）三种尺寸状态，初始状态通常为中尺寸状态。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230524165147.14708791180789776555078358998225:50001231000000:2800:1E6AB80AF8340970DAE43D4BBF58124224F6FBCC067E4EED1EBCBF0F515240DE.png?needInitFileName=true?needInitFileName=true) 小 | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230524165147.63597913705605576074536249894960:50001231000000:2800:175B74553E8D98C50C875F52F67F9BD1653AB81CF6633BE0ED1783A2FF113CBD.png?needInitFileName=true?needInitFileName=true) 中 | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230524165147.40920083844333852638184316625909:50001231000000:2800:676E2A5082F42AD4667D6E0582D8D38BDAA1545370391B15232EAD63CD8E66F6.png?needInitFileName=true?needInitFileName=true) 大  
---|---|---  
  
**滑动**

     * 小尺寸状态向上滑切换为类半屏状态，继续上滑切换为类全屏状态。 
     * 类全屏状态向下滑切换为类半屏状态，继续向下滑切换为小尺寸状态。面板顶部短横杠随着状态的变化而变化。 

**点击**

     * 点击小尺寸面板的箭头所在区域（向上箭头），切换为半屏面板。 
     * 点击类全屏面板向下箭头所在区域（向下箭头），切换为半屏面板。 
     * 点击半屏面板横条所在区域，无响应。 

#### [h2]内容临时展示类

内容展示类有中（类半屏）、大（类全屏）两态，初始状态通常为中尺寸状态。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230524165147.38300590805539362880425414599847:50001231000000:2800:4FD2602069B1D0DDAC78EE3094BA9E298B9E87B21A8E6F1324FD2F4B9A458888.png?needInitFileName=true?needInitFileName=true) 中 | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230524165147.28254113200157919931753479566795:50001231000000:2800:79FAA82E9F0F86042D5FEE5C13B515B76EBCC753A449550DDE5768B7C0C22AD1.png?needInitFileName=true?needInitFileName=true) 大 |     
---|---|---  
  
**滑动**

     * 类半屏状态上滑切换为类全屏状态。 
     * 类全屏状态向下滑关闭面板。 

**点击**

     * 点击半屏面板横条所在区域，无响应。 
     * 点击类全屏面板向下箭头所在区域（向下箭头），关闭面板。 

#### 视觉规则

#### [h2]主题样式

可滑动面板支持浅色主题、深色主题、半透明主题。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230524165147.30770664606846509522346602843565:50001231000000:2800:BF58BB2252D3BE01D64F7A57526F4343B094ECD1A53F93A4ECD74EB803BA72A2.png?needInitFileName=true?needInitFileName=true)

浅色主题

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230524165147.33320753883425876166679710572740:50001231000000:2800:ACBD8FDAB75BDAD0762C8E7BDCF5751B13EDFF9BBAC26A69560A1D34AF7B211D.png?needInitFileName=true?needInitFileName=true)

深色主题

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230524165148.29877323029649082556720678550759:50001231000000:2800:70AAEC7D5402B21508BE2828DCE040079510942A6A853A99796CAC8A78314FA3.png?needInitFileName=true?needInitFileName=true)

半透明主题

#### [h2]布局样式

**竖屏布局**

     * 操作条：面板最小高度 48vp，顶部显示图标为向上箭头。 
     * 半屏：面板高度为全屏高度的1/2，顶部显示图标为横条。 
     * 全屏：面板的最大高度=屏幕高度-状态栏-8vp padding，顶部显示图标为向下箭头。 
     * 高度应用可自定义，最小高度不能小于规范定义高度，最大高度不能大于规范定义高度。 

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230524165148.54845005963302701033878788660905:50001231000000:2800:C0B1AF67A1DFD5E22E011E4E9C80A8C70C014991A6BE58B2845140EDF5A8B8FC.png?needInitFileName=true?needInitFileName=true) | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230524165148.76099079632138544837995341164387:50001231000000:2800:BA892AFC5FF4A3A838CD5509BDFB6494D5761F02EEFBC30118202AA58C6A8879.png?needInitFileName=true?needInitFileName=true) | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230524165149.55294674736033416656195815533431:50001231000000:2800:9E6E37B5A2188CA43D98EF5E6345D77818368CA6136475590A7D89A87642CC83.png?needInitFileName=true?needInitFileName=true)  
---|---|---  
  
**横屏布局**

     * 横屏时，无半屏模式，半屏直接以全屏显示。 
     * 操作条与全屏面板规则与竖屏一致。 

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230524165149.18635489924538456229066213453035:50001231000000:2800:6E8E0762C1F11D726C187D965B58F03B16A52086ADB58EF85F25593FA835D6B3.png?needInitFileName=true?needInitFileName=true)

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230524165149.40290564862122491259964577716159:50001231000000:2800:4A0312B128A3CB6142AA1E47546746A5FEB7C5CD282B24619A368D96DC15B77A.png?needInitFileName=true?needInitFileName=true)

面板的高度=屏幕高度-状态栏-8vp

#### 动效规则

#### [h2]可滑动面板首次调起动效

**竖屏布局**

     * 可滑动面板在达到一定的触发条件下，从屏幕底部移动到默认位置。 
     * 在滑动或点击操作下，从一种状态移动到另一种状态。 

|   
---|---  
  
开发指南，详见 [panel](https://developer.harmonyos.com/cn/docs/documentation/doc-references/js-components-container-panel-0000001281001202) (JS) 和 [Panel](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ts-container-panel-0000001281201162) (ArkTS) 。
