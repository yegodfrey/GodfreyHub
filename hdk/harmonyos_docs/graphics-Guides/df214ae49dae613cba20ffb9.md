---
name: document/cn/graphics-Guides/use-cases-0000001050161552
title: 场景介绍
uri: https://developer.huawei.com/consumer/cn/doc/graphics-Guides/use-cases-0000001050161552
---

# 场景介绍

## 原子化接口

原子化接口SDK是图形引擎服务的核心SDK，主要提供渲染视图控件[RenderView](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-renderview-0000001061309635)。

[RenderView](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-renderview-0000001061309635)支持场景、节点、组件管理功能。您可以直接使用[RenderView](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-renderview-0000001061309635)完成场景渲染与手势交互等功能的开发，也可以基于[RenderView](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-renderview-0000001061309635)进行复杂的二次开发，打造出功能更加丰富的应用（如结合AR Engine完成AR场景渲染）。

原子化接口SDK提供的API围绕以下概念进行打造：

|概念|描述|
|:---------------------------------------------------------------------------------------------------------------|:-----------------------------------|
|场景（[Scene](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-scene-0000001061478095)）|需要渲染的虚拟场景。|
|节点（[Node](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-node-0000001061589671)）|可挂载多种样式组件的载体，节点本身拥有层级关系。|
|组件（[Component](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-component-0000001061389684)）|控制某些行为的数据集合，通过调整组件中的参数，能够使场景出现不同的变化。|

## 2D流体模拟

原子化2D流体接口SDK提供2D流体模拟接口，使用原子化接口可以完成创建流体粒子，模拟流体晃动的物理效果。

原子化2D流体接口SDK提供的API围绕以下概念进行打造：

|概念|描述|
|:---------------------------------------------------------------------------------------------------------------------------|:------------------------------------|
|场景（[SceneKitFluid](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-scenekitfluid-0000001117457606)）|全局单例，用于进行初始化与全局配置。|
|物理世界（[World](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-world-0000001163897341)）|物理世界，包含刚体和粒子，管理模拟仿真。|
|粒子系统（[ParticleSystem](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-particlesystem-0000001163817377)）|粒子系统，描述粒子的物理系数，如半径、粘度、弹性等，支持粒子的添加、删除。|
|刚体（[Body](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-body-0000001117457608)）|刚体，支持设置刚体形状，如圆形、长方形等。|

## 场景化接口

场景化接口旨在针对特定场景为开发者提供高效便捷的开发体验，但是相对原子化接口，自由度较低。

当前版本场景化接口包提供了如下类：

|场景化接口类|描述|
|:-----------------------------------------------------------------------------------------------------------|:------------------------------------------|
|[SceneView](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-sceneview-0000001050304388)|面向模型展示场景，提供模型加载、天空盒纹理加载、环境光纹理加载、基本手势操作等功能。|
|[ARView](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-arview-0000001051923459)|面向虚拟现实放置场景，提供模型加载、平面识别与绘制、虚拟现实放置、基本手势操作等功能。|
|[FaceView](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-faceview-0000001052804698)|面向面部AR场景，提供模型加载、虚拟头像替换等功能。|

> 说明
>
> 场景化接口SDK无法与其他SDK同时使用，请根据需要选择合适的SDK进行应用开发。

## 离线简模插件

离线简模插件通过精简模型网格的三角面片数来简化模型。输入原始模型的顶点和索引数据，算法库会生成一段新的索引数据来索引原始模型的顶点数据。因此新生成的简模索引数据可以直接用于渲染原始模型，无需重新构造新的网格信息，极大减少了性能开销。算法库会参照原始模型的拓扑结构特征来保持模型的边缘线条和整体外表面的稳定性，不会出现形状畸变。通过调整简模比例因子可以动态地调整简模比例，方便开发者实时获取到模型的精简结果，易于集成、快捷高效。

## 实时光追插件

实时光追插件包含光线追踪核心算法库，通过构建/调整加速结构，加快光线与场景物体的求交速度。输入场景物体的顶点信息，插件中会生成/修正一个BVH的加速结构，以正确描述场景中三角面片的空间关系。生成/修正的加速结构无需开发者额外处理，自动作为光线求交计算的输入数据。算法库的构建方法会最大程度地细分三角面片，并减少同层BVH的重叠空间，以降低光线求交的时间成本。算法库的修正方法会利用GPU并行计算方法，极大加快了加速结构的更新速度。输入待求交光线数据，插件会生成每条光线的ClosestHit结果，该结果表示光线进入场景后的第一个相交物体的交点信息。求交算法利用GPU并行计算能力，提升与加速结构的光线求交计算速度，为开发者提供一个高效简便的光线求交方法。

## 高效遮挡剔除插件

高效遮挡剔除插件，提供快速计算出3D模型的遮挡关系功能，对完全遮挡住的3D模型不进行绘制，有效提高渲染性能。该插件适合遮挡关系相对复杂的场景，比如包含大量植被、粒子动画等。开发者只要将模型设置为遮挡物、被遮挡物，输入模型顶点及包围盒数据，可快速地计算出3D模型的遮挡关系。通过获取到的遮挡关系，开发者可以方便地指定对应模型是否参与渲染过程，从而减少参与渲染的模型数量，达到提高渲染性能的目的。

## 动态漫反射全局光照插件

动态漫反射全局光照插件，通过在渲染场景中放置光照探针，用于缓存场景中的漫反射间接光，并通过探针的插值来提供更加自然的漫反射全局光照效果。通过向插件中输入场景的几何网格、材质属性、光照与相机的相关信息，插件将自动构建几何网格的BVH加速结构，解析用户输入的信息，并在场景中自动放置探针。在每帧的渲染中，探针会根据一定的模式向场景中发射光线，并将光线与场景交互的光照结果进行收集与处理，缓存在探针上。最终着色阶段通过解析探针数据，提供漫反射全局光照。对于场景中存在动态物体、动态光源的情况，该插件实时提供更加自然的漫反射全局光照，提升渲染效果。

## 应用场景

图形引擎服务可应用于游戏、购物、教育、社交通讯、艺术设计等各种需要图形渲染能力的场景，如AR试穿、3D艺术品展示、VR远程教学等。

|接口类型|应用场景|效果|
|:-------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|原子化接口|3D动画播放。 使用的素材"Dancing Crab - Uca Mjoebergi"、"Chunk Of Land 1"请参见[3D素材使用声明](https://developer.huawei.com/consumer/cn/doc/graphics-Guides/declaration-0000001058529720)。|![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20240115092005.08756062315483837309050111333484:50001231000000:2800:0E441B996B7F1E7CB3AAF3681B50B85E57CD4B672ED07C7D2B1D1F2D40AC4B39.gif?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true "点击放大")|
|原子化接口|购物应用。|![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20240115092005.49008583032011905771480543412229:50001231000000:2800:B1DE19379811B0959C704F5D69C734BAB808E37B70F4B6CB73566E61349C4A5D.gif?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true)|
|2D流体模拟接口|手机主题壁纸流体动效。|![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20240115092005.01625966689617142547735710627189:50001231000000:2800:65F429E4530D7A454394D285F7B3F4BF27B92C42D064E147E0B7E46C46236AC6.gif?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true "点击放大")|
|场景化接口|使用[SceneView](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-sceneview-0000001050304388)进行3D艺术品展示。 使用的素材"Rồng"请参见[3D素材使用声明](https://developer.huawei.com/consumer/cn/doc/graphics-Guides/declaration-0000001058529720)。|![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20240115092006.83379835496954323315928535941383:50001231000000:2800:35FC330357785E150F59587A1845371A69E6DCBCD9A8220D834027ABA827DE66.png?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true "点击放大")|
|场景化接口|[ARView](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-arview-0000001051923459)能够将3D物体放置在现实场景中。 使用的素材"Robo_OBJ_pose4"请参见[3D素材使用声明](https://developer.huawei.com/consumer/cn/doc/graphics-Guides/declaration-0000001058529720)。|![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20240115092006.99984485480863305624767476612503:50001231000000:2800:8AC676774487E4C1ACAC2DEF19B4068F0A1F6A8C5E80F413C26CA0B982472F2A.gif?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true "点击放大")|
|场景化接口|[FaceView](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-faceview-0000001052804698)提供的面部AR效果，可将相机识别到的人脸替换为指定的卡通人物。|![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20240115092006.56675547444006325796022940239743:50001231000000:2800:1491242CE303E210A670C09E8BF19B173ABD03296307F7F7FE8456CD61691C42.gif?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true "点击放大")|

