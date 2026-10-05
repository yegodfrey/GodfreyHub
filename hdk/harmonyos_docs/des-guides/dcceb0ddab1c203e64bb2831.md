---
name: document/cn/des-guides/code_1-0000001145846590
title: 中大型设备
uri: https://developer.huawei.com/consumer/cn/doc/des-guides/code_1-0000001145846590
source: portal
---

# 中大型设备

#### 多功能码形态

多功能码可用于支持扫一扫连接的设备，为物理打印标签，根据设备特性还可以支持碰一碰连接及靠近连接。

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20211021114816.60496147249450539951262651163369:50521020082651:2800:3F3BDF5D266A2585F4CE2314CE62D646ABF61253D9BF636864295A97AE479729.png?needInitFileName=true?needInitFileName=true)

#### 标签网格的正确比例

多功能码是一个平衡的整体，使用中不得改变其形状、结构、比例。多功能码四周设置有最小保护空间，该空间不能与其他图形元素连接。

#### [h2]比例与保护空间原则

多功能码由系统生成，请勿改变系统生成的二维码标签的设计与比例。多功能码的安全距离为2X，在安全距离内不能出现其他图形和标签。如标签周围使用辅助信息，辅助信息与标签的距离不得小于X。

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20211021114816.81823938509663572077207165110013:50521020082651:2800:E535C35E32E24B4BE40F89CA02F85815559E13B2EC10FB4BA4F2398679CBBCA3.png?needInitFileName=true?needInitFileName=true)

#### 多功能码尺寸

最小尺寸的设置是为了确保标志组合使用过程中的品质，使其清晰、易识别。

#### [h2]最小尺寸

为保证多功能码可被正确解析，码体的最小物理尺寸为直径40mm，最小数码尺寸为直径160vp。

#### [h2]扫描距离与标签尺寸的关系

定义标签大小时，除了不小于规定的最小尺寸，还需保证标签的扫描距离和标签直径比不大于20:1，为提供更好的扫码体验，建议扫描距离和标签直径比为10:1。比如当扫描距离为1米时，标签直径不可小于50mm，更佳体验为100mm。

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20211021114816.91020413921250236536742490483555:50521020082651:2800:DE0CE91891E2F9DE2B0A275D10724B121D9CD39325112C349645F576771BDF8A.png?needInitFileName=true?needInitFileName=true)

#### 标准颜色和印刷材料

#### [h2]标准颜色

为保证多功能码被正确扫描和解析，码体部分需使用白底黑码。

#### [h2]印刷材料

为保证良好的扫码体验，需在白色纸质上印刷黑色油墨。打印时需保证分辨率清晰。

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20211021114816.91201409582626252891982127928689:50521020082651:2800:8BF30F8C0EB7A75E466BD864BF60731E8DF72944AD430E0316701EB9F1A72EAC.png?needInitFileName=true?needInitFileName=true)

#### 辅助信息

厂商可以单独使用多功能码，也可以在其周围添加辅助信息，引导用户用相应的交互方式来连接设备。

设备仅支持扫一扫连接时，标准辅助信息为“HarmonyOS手机扫一扫”；当设备支持靠近连接和/或碰一碰连接时，标准辅助信息为“HarmonyOS手机扫一扫/靠近/碰一碰”。辅助信息支持换行。

辅助信息可打印在纸上并粘贴在满足标签安全空间的位置(推荐使用透明贴纸)，也可以丝印在机身表面。

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20211021114817.53714822523749295276650905194849:50521020082651:2800:A9D316AB33AA2ACC7EFB00545D5BA76F7DEABA5BCC6A56ECBD7F00FC635905CE.png?needInitFileName=true?needInitFileName=true) | ![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20211021114817.70413132356021805813453608085577:50521020082651:2800:1B6E411C5554473D29CDEB7363EFDCA3F8C7811F7A3F058A39ECE4BC3317F8F0.png?needInitFileName=true?needInitFileName=true) | ![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20211021114817.39938237812674954490654832802828:50521020082651:2800:9C25F808DBC484915D849FC1DF653BCC53F86B49CAA9336A7ECA6AC7F965F6CF.png?needInitFileName=true?needInitFileName=true)  
---|---|---  
使用示例-透明贴纸（推荐） | 使用示例-纸质 | 使用示例-丝印  
  
#### 多功能码在机身上的使用

多功能码可用于实体机身标签。用户通过手机扫一扫或其他设备支持的方式连接和控制设备。

#### [h2]粘贴平面原则

标签需贴在不小于标签尺寸规范规定空间的平面上，不得贴于曲面，不得弯曲、折叠标签。

标签应贴于方便用户碰靠或扫描处。如果机身不方便用户进行碰一碰和扫一扫操作，可不将标签贴于机身，由用户自行使用。

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20211021114817.40396088185733341981350842767693:50521020082651:2800:45A621347DDD36ECCC1AEC948DD23566EB6CBB20E96766BB0A2AA4F2D3AE7C08.png?needInitFileName=true?needInitFileName=true)
