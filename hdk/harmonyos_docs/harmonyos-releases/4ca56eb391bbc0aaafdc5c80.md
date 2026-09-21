---
name: document/cn/harmonyos-releases/js-apidiff-arkgraphics3d-b065
title: ArkGraphics 3D
uri: https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-arkgraphics3d-b065
---

# ArkGraphics 3D

|操作|旧版本|新版本|d.ts文件|
|:---|:-------------------------------------------------------------------------------|:-------------------------------------------------------------------------------------|:---------------------------------|
|函数变更|类名：Scene； API声明：static load(uri?: Resource): Promise<Scene>; 差异内容：uri?: Resource|类名：Scene； API声明：static load(uri?: ResourceStr): Promise<Scene>; 差异内容：uri?: ResourceStr|api/graphics3d/Scene.d.ts|
|属性变更|类名：SceneResourceParameters； API声明：uri?: Resource; 差异内容：Resource|类名：SceneResourceParameters； API声明：uri?: ResourceStr; 差异内容：ResourceStr|api/graphics3d/Scene.d.ts|
|属性变更|类名：SceneResource； API声明：readonly uri?: Resource; 差异内容：Resource|类名：SceneResource； API声明：readonly uri?: ResourceStr; 差异内容：ResourceStr|api/graphics3d/SceneResources.d.ts|

