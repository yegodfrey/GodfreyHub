---
name: document/cn/games-guides/gameobe-framesync-management-0000002395350373
title: 帧同步管理
uri: https://developer.huawei.com/consumer/cn/doc/games-guides/gameobe-framesync-management-0000002395350373
---

# 帧同步管理

一般来说，高帧率能提供更流畅和更逼真的游戏画面，但同时也会增加对端测的游戏运行性能要求。然而，对于一些画面刷新率不高的游戏，则不需要那么高的帧率。因此，联机对战服务提供了帧同步管理功能，支持您根据游戏使用需要对帧率进行修改设置。同时，还提供了自主选择是否开启录像以保存游戏内数据的功能。

## 前提条件

您已[开通联机对战服务](https://developer.huawei.com/consumer/cn/doc/games-guides/gameobe-enable-0000002395350369)。

## 操作步骤

1. 登录[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)，点击"开发与服务"。
2. 在项目列表中找到您的项目，并在项目下的应用列表中选择您的游戏应用。

3. 在左侧导航栏中选择"构建 > 联机对战服务"或点击左上角![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/0e/v3/FO1N5uqaTbyGBE2iFCQnIQ/zh-cn_image_0000002408952465.png?HW-CC-KV=V1&HW-CC-Date=20260920T025433Z&HW-CC-Expire=31536000000&HW-CC-Sign=3954215D7A12E18D6F95FCE717BA6C742228254C61F0B68B76FCDB436D963043)搜索"联机对战服务"，进入联机对战服务页面。

### 自动补帧

选择"帧同步管理"，设置是否开启"自动补帧"功能。 说明
>
> "自动补帧"默认为开启状态。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/53/v3/k4xvqhC7ShyO27pAV9MovQ/zh-cn_image_0000002395350749.png?HW-CC-KV=V1&HW-CC-Date=20260920T025433Z&HW-CC-Expire=31536000000&HW-CC-Sign=A5F40D1F62C69BCAF4D12EC776713D5363C981A0289A1897C1A2CAD28985EBBE)

### 保存录像

在"帧同步管理"页面，设置是否开启"保存录像"功能。
> 说明
>
> "保存录像"默认为关闭状态。如开启保存，则默认只保存近7天的对局记录。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d4/v3/l_8rQCpdTlahY7sx7xPdWA/zh-cn_image_0000002361510944.png?HW-CC-KV=V1&HW-CC-Date=20260920T025433Z&HW-CC-Expire=31536000000&HW-CC-Sign=D57836F0F3D133E27DC100311F2A1DE6DA62AC423CC569BC54383DA9E97F64E1)

### 帧同步频率

在"帧同步管理"页面，点击"帧率设置"中房间对应"操作"列的"编辑"，设置"帧同步频率"，并点击"提交"。 说明
>
> 当前帧同步的帧率设置默认为20帧，您可以根据自己的游戏需要，在15帧~30帧范围内合理设置帧率，一般游戏建议您设置为15帧。帧率修改设置完成后实时生效，但已创建的房间仍使用原帧率。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/34/v3/pFFgJdMoTxeaxH53740whw/zh-cn_image_0000002395190901.png?HW-CC-KV=V1&HW-CC-Date=20260920T025433Z&HW-CC-Expire=31536000000&HW-CC-Sign=A3882AA1880D737CF23268B4247F946E630EAAA0CC8C890DC419A11B769AB6B7)

