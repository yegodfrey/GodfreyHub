---
name: document/cn/AppGallery-connect-Guides/agcapi-playing-overview-0000002022278129
title: 开发概览
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agcapi-playing-overview-0000002022278129
---

# 开发概览

"在玩"主要提供游戏的战绩工具、攻略内容等服务。在玩服务API支持更新游戏中心客户端"在玩"页面的数据，例如游戏资源、玩家资产。  

#### 更新游戏资源

您可以更新"在玩"页面中如下位置的游戏资源：

* 顶部游戏卡片及卡片详情页：
  * 卡片的背景图/卡片详情页的背景图均可以在AGC控制台上传/更新，具体操作可参见[上传/更新游戏卡片头图](https://developer.huawei.com/consumer/cn/doc/app/game-center-playing-operation-0000001870290961#section135935152518)。
  * 卡片的其它图片及详情页的其它图片/视频可以请求[上传/下架游戏资源](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agcapi-resources-0000002022105725)接口进行更新，例如头像、勋章。
* "在玩"页面中专题活动的图片/视频可以通过魔方创意进行更新，具体操作可参见[魔方创意创建/更新在玩组件](https://developer.huawei.com/consumer/cn/doc/app/game-center-creatives-ideas-0000001865677220)。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250716103233.23446276704280189117698423208361:50001231000000:2800:1CF07C68DDE23D8861D7C488BFBC4C7EAF894B30DD4F05D82FD18BBBD5EABE5F.png)  

#### 更新游戏概要信息

当玩家打开"游戏中心"客户端时，华为游戏服务器向开发者服务器请求[查询游戏概要信息](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agcapi-summary-0000002022225249)接口获取当前游戏概要信息，并在游戏卡片上进行更新。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250716103233.03837417619250783688076841134313:50001231000000:2800:5B8C61B47B3159861C8F3EE4B40B3A215B61BA8B18E32F223DD3F36AECBAD61B.png)  

#### 更新战绩标签及战绩数据

当玩家打开卡片详情页时，华为游戏服务器向开发者服务器请求[查询战绩筛选标签](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agcapi-label-0000001985625670)和[分页查询玩家战绩](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agcapi-scores-0000001985465938)接口分别获取战绩标签和战绩数据，并在"战绩"页签中进行更新。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250716103234.21218379859237639579288792107676:50001231000000:2800:9D06A88EB24641080EF204A749EEF060AA7AEB7E8E3C5DE688D5BB57428822D7.png)  

#### 更新玩家资产

* 当玩家打开卡片详情页时，华为游戏服务器向开发者服务器请求[查询资产概要](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agcapi-asset-summary-0000002022105729)接口获取玩家的资产概要，并在"资产"页签中进行更新。
* 当玩家进入资产详情页时，华为游戏服务器向开发者服务器请求[查询资产明细](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agcapi-asset-details-0000002022225253)接口获取玩家的资产明细，并在资产详情页进行更新。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250716103234.34517383862426099728230827732588:50001231000000:2800:FF4EB58E2CA4E7C5CACF9B941CB3325544A48EC1DEEB7A9556DD0353E99CE8B0.png)  

#### 更新玩家基本信息

当玩家点击"绑定游戏号可查看战绩"时，华为游戏服务器向开发者服务器请求[批量查询玩家基本信息](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agcapi-basic-info-0000002038975322)接口获取同一个游戏中的玩家信息，并在"选择游戏号"弹框中进行更新。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250716103234.31481932599565936432482271970083:50001231000000:2800:F0B79921BD2046952B99D7F8C1D18922E9A4EA87D0A123D29E9C7D561F805C98.png)  
