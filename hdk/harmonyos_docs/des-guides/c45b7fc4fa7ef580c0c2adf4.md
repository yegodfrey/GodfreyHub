---
name: document/cn/des-guides/titlebar-0000001154236907
title: 标题栏
uri: https://developer.huawei.com/consumer/cn/doc/des-guides/titlebar-0000001154236907
source: portal
---

# 标题栏

标题栏放在界面顶部，一般跳转新界面或者新应用，屏幕朗读焦点会默认落在标题栏上。

#### 焦点顺序

标题栏一般遵循从左到右，从上到下焦点切换的规则，切换焦点。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230325095806.35385602620039844743553290500902:50001231000000:2800:1A0487090389EA9145D1B367D591960F599298AA0345191E3E638D985987D78E.png?needInitFileName=true?needInitFileName=true)

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230325095806.37865255726159708676682803512502:50001231000000:2800:9E0BA7D95CF61C89418FE2E58627B9C8EB67021156AB54F7DB6409BF7202ED4D.png?needInitFileName=true?needInitFileName=true) | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230325095806.52409016088184622464652805566023:50001231000000:2800:A129586FAB4D25A51F612DC9EA97158C554FDACEE533AC14843237EEEFB46568.png?needInitFileName=true?needInitFileName=true)  
---|---  
注：进入页面后焦点默认在 1，播报 4 标题，再播报 1 图标按钮，这样用户能知道目前所处在的位置。 | 注：焦点默认落在 1，默认先播报 4 标题，再播报 1 图标按钮，这样用户能知道目前所处在的位置。  
  
#### 状态变化

标题栏分为两种状态：

     * 可用不可用状态。
     * 选中未选中状态。

#### [h2]可用不可用状态

可用状态：一般无需播报可用状态。

不可用状态：播报完文本或者图标后需要播报该控件不可用。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230325095806.54561706784060369677946959041774:50001231000000:2800:E20B6B19A780F041780A0F30A36A31D7FE14C1505EE41A329495F4C21DAD1C00.png?needInitFileName=true?needInitFileName=true)  
---  
屏幕朗读播报：
     1. “添加”按钮，单指双击即可执行。
     2. “添加”按钮，不可用。  
  
#### [h2]选中未选中状态

选中状态：要播报已选中。未选中状态：无需播报，直接播报文本。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230325095806.31449751320311446410296984880450:50001231000000:2800:46EDF892757C1382477E0045B33E3F208D456CAD9A39A7E1852E3CDA76912610.png?needInitFileName=true?needInitFileName=true)  
---  
屏幕朗读播报：
     1. 已选中，“标题”。
     2. “页签”，单指双击即可执行。  
  
#### 说明文本

标题栏说明文本分：

     * 一条新消息说明文本。
     * 多条新消息说明文本。

#### [h2]一条消息说明文本

标题栏如果有新消息红点，需要播报有“新消息”。（模块也可自定义：如新邮件，新短信等。）

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230325095806.12897253635786315500541295076213:50001231000000:2800:B55E57412773E39782B8329BB31728DC78A0D5ADD87A67F11A503988E69F64BA.png?needInitFileName=true?needInitFileName=true)  
---  
屏幕朗读播报：
     1. 已选中，“标题”，有新消息。
     2. “页签”，有新消息，单指双击即可执行。  
  
#### [h2]多条新消息说明文本

标题栏如果有多条新消息，需要播报有数字几条“新消息”。（模块也可自定义：如 32 条未读邮件，32 条未读短信。）

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230325095807.38393755046542399531021902893146:50001231000000:2800:CCE15759AD7361F328D579F473033448FA64E7F45654BDD4F29306458BA5A2F6.png?needInitFileName=true?needInitFileName=true)  
---  
屏幕朗读播报：
     1. 已选中，“标题”，有 32 条新消息。
     2. “页签”，有 32 条新消息，单指双击即可执行。
