---
name: document/cn/des-guides/financial-scene-0000001250060356
title: 金融类场景
uri: https://developer.huawei.com/consumer/cn/doc/des-guides/financial-scene-0000001250060356
source: portal
---

# 金融类场景

金融类应用在大屏幕设备的使用过程中，不仅要保障用户在办理金融业务过程中的正常使用，也要尽可能提升屏幕的交互效率。

#### 首页

在金融类应用中，需要避免页面在展开态整体放大，导致一屏幕显示的信息过少，极大降低屏幕的交互效率。针对此类场景，建议通过自适应布局来显示页面，文字、图标等元素尽量保持折叠态相同的大小，元素间距根据页面宽度适当拉伸。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230524165443.31208747177858313103885309125517:50001231000000:2800:20A78FA62AB0A89AC46DB02E9EBF610FAD39C4F1E99040BBEB45AECDB0B58344.jpg?needInitFileName=true?needInitFileName=true) ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230524165444.75659174685856068611414698057798:50001231000000:2800:046ABDB8450BB85378C695874F4584D629F5CB45E9D659BB2A9E111A61F4A474.png?needInitFileName=true?needInitFileName=true) 推荐（采用自适应布局，页面承载更多的信息且布局良好）  
---  
![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230524165444.17407457710028539198038396235907:50001231000000:2800:F36A6698E514A0598C1E1295A060B6734C414F6239B2AEA7CCAB4DFAA2A4B9FB.jpg?needInitFileName=true?needInitFileName=true) ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230524165444.24044427494204594513149890239450:50001231000000:2800:E843687A6013FECEF165DFCB4AE8489D9232D79B3A3CA1EDB957ACD46519694D.png?needInitFileName=true?needInitFileName=true) 不推荐（页面元素放大显示，导致一屏幕显示的信息太少，降低交互效率）  
  
#### 胶囊卡片

胶囊卡片是金融类场景比较常见的一种元素，从折叠态到展开态，建议开发者通过挪移布局对其进行页面优化：将上下排列的胶囊卡片在展开态左右排列显示；竖高的胶囊卡片在展开态变为横向的胶囊卡片。不建议直接等比放大胶囊卡片，这样会占据不必要的屏幕空间，导致显示信息过少，交互效率降低。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230524165444.58894454138552267493721794656081:50001231000000:2800:001DD0178C93158DAC576D15681D6E495808267D8B4EC93ABD2E16B930288B57.jpg?needInitFileName=true?needInitFileName=true) ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230524165445.01432498103504298594104777631790:50001231000000:2800:196F172D704EBB089780F12371C612F673D84A9868226C01593E1364753DB23F.png?needInitFileName=true?needInitFileName=true) 推荐（胶囊卡片采用挪移布局，上下排列变左右排列）  
---  
![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230524165445.95875925024803121332065695461784:50001231000000:2800:317421359BBF99D905C99FEBC2BC8D2C675CE26176A697E0AA15CBBDE405D2D5.jpg?needInitFileName=true?needInitFileName=true) ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230524165445.24570990530987759533535425538708:50001231000000:2800:C450C8FAB6996A71E687746FBE701A5824591594DFF2CAA6F304BED56013BC33.png?needInitFileName=true?needInitFileName=true) 不推荐（胶囊卡片直接等比放大，导致一屏幕显示信息太少，交互效率降低）  
  
#### 广告弹窗

弹出框在该场景中较为常见。建议展开态和折叠态弹出框保持相同的大小，或最大不超过原来的1.2倍。不建议弹出框直接放大太多，导致显示不全或无法交互。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230524165445.19480936931579738583574874392051:50001231000000:2800:604FB6EF9403D5953511F52D57B11E435D4F91C21EDB33D7EEF4D7B285DECF2D.jpg?needInitFileName=true?needInitFileName=true) ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230524165446.96649476366929630761784258163670:50001231000000:2800:2B7F5ECE1D2DF0C7FE6C26049E40F385DA1C2CE1A9519A3445C4DF327FBC341E.png?needInitFileName=true?needInitFileName=true) 推荐（弹出框保持折叠态大小）  
---  
![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230524165446.34171076139201298931120375325649:50001231000000:2800:F34282052AF9D1ABE3034F95014CEBD9EFB9C13F173F4E7665C9003F27BCCEA9.jpg?needInitFileName=true?needInitFileName=true) ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230524165446.71343128617401946793411741141517:50001231000000:2800:5F79AABE18FF0360574AA5F6D08BE1F01DF4F21C6B5E940D057D7B4B4E1133A2.png?needInitFileName=true?needInitFileName=true) 不推荐（展开态弹出框过大，导致显示不全或无法交互）
