---
name: document/cn/quickApp-Guides/quickapp-lang-direction-adapt-0000001126445945
title: 镜像语言适配
uri: https://developer.huawei.com/consumer/cn/doc/quickApp-Guides/quickapp-lang-direction-adapt-0000001126445945
---

# 镜像语言适配

#### 简介

随着快应用全球用户的不断增加，快应用的全球化能力需不断提高，为了不同语言在快应用中有良好的展示，快应用提供了针对镜像语言对界面布局适配的功能。

例如英文界面从左向右展示，对于镜像语言（比如：阿拉伯语）界面从右向左展示。  

|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20210715163827.19240174722951027019760718178830:50001231000000:2800:09567EFAE143D9DD3955CCFFF64FDBB9E2F9DE51B8956A483C02AFD920E75049.png?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true)|![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20210715163827.25269936424852722504003586427667:50001231000000:2800:21DB22FBBEF0236862C7753F7F33FC3B3CB3C5888CD0F28E022740DA61755988.png?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true)|

#### 适配方式

#### 在onInit中适配

在onInit中调用[configuration.getLayoutDirection](https://developer.huawei.com/consumer/cn/doc/development/quickApp-References/quickapp-api-configuration-0000001074911860#section85116251699)获取当前系统的语言方向，针对不同的语言方向对需要特殊处理的组件进行适配。

```
import configuration from '@system.configuration'
onInit: function () {
    const dir = configuration.getLayoutDirection()
    if (dir === "ltr") {
       // 当系统语言方向为从左到右时，开发者根据需要设置组件属性或样式，如文字、图片左对齐
    } else if (dir === "rtl") {
       // 当系统语言方向为从右到左时，开发者根据需要设置组件属性或样式，如文字、图片右对齐
    }
}
```

#### 在生命周期中适配

在[onConfigurationChanged](https://developer.huawei.com/consumer/cn/doc/development/quickApp-References/quickapp-script-0000001073643163#ZH-CN_TOPIC_0000001073643163__p1515313794915)回调中判断types是否包含layoutDirection，如果包含，表示系统语言发生变化，此时需要针对当前的语言方向，对组件布局进行适配。

```
onConfigurationChanged(e) {
    var types = e.types;
    if (types.includes('layoutDirection')) {
        var direction = configuration.getLayoutDirection()
        // 开发者根据当前语言方向对组件布局进行特殊的定制
    }
} }
```

#### 设置组件展示方向

通过对组件的dir属性或者样式的设置，可以设定组件展示方向，详细内容参见"通用属性"的[dir](https://developer.huawei.com/consumer/cn/doc/development/quickApp-References/quickapp-attributes-0000001170050123#ZH-CN_TOPIC_0000001170050123__p104691527102620)介绍。

当前如下组件的dir设置效果有些特殊，适配时请关注。  

|组件|说明|||
|:------------|:-|-|-|
|text|当系统语言为从右向左时，text-align="left"实际效果为右对齐，text-align="right"实际效果为左对齐。|||
|span|span必须为text或a的子组件，span本身不支持dir属性，需要继承父组件的设置，所以如果需要对span进行设置，请对其父组件进行设置。|||
|input|EMUI9.1以下版本，在阿拉伯语等从右向左的语言环境下，设置dir属性为ltr时无效。|||
|switch|EMUI9.1以下版本，在阿拉伯语等从右向左的语言环境下，设置dir属性为ltr时无效。|||
|textarea|EMUI9.1以下版本，在阿拉伯语等从右向左的语言环境下，设置dir属性为ltr时无效。|||
|select/option|EMUI9.1以下版本，在阿拉伯语等从右向左的语言环境下，设置dir属性为ltr时无效。|||
|marquee|在阿拉伯语等从右向左的语言环境下，设置dir属性为ltr时无效。|||

#### 适配示例

以下左图为从左到右展示语言的效果，右图为适配从右到左展示语言的效果。  

|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20210715163827.29269660994855643917844018911461:50001231000000:2800:29741A0E3B18A24FF4A50C437D0757033A8417EC12C58EF39E086FB0BF332564.png?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true)|![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20210715163827.25840602485209586651496528395530:50001231000000:2800:4BA5143EB680994C54BAA2041C2FCB6D401962FEDDF0B90F378E7AA611632404.png?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true)|

实现适配效果的示例代码如下。

```
<template>
    <div>
        <div style="width: 600px;padding:50px">
            <text style="width: 200px;">show dialog!</text>
            <image src="{{nextImg}}"></image>
        </div>
    </div>
</template>
<style>
    @import "../Common/common.css";
</style>
<script>
    import configuration from '@system.configuration'
    export default {
        data: {
            nextImg: "/Common/next.png"
        },
        onInit: function () {
            const dir = configuration.getLayoutDirection()
            if (dir === "ltr") {
                // 当系统语言方向为从左到右时，开发者根据需要设置组件属性或样式，如设置图片正常展示
                this.nextImg = "/Common/next.png";
            } else if (dir === "rtl") {
                // 当系统语言方向为从右到左时，开发者根据需要设置组件属性或样式，如对图片做镜像处理
                this.nextImg = "/Common/next_mirror.png";
            }
        },
        onConfigurationChanged(e) {
            var that = this;
            var types = e.types;
            if (types.includes('layoutDirection')) {
                var dir = configuration.getLayoutDirection()
                // 开发者可以根据direction进行特殊的定制
                if (dir === "ltr") {
                    // 当系统语言方向为从左到右时，开发者根据需要设置组件属性或样式，如设置图片正常展示
                    that.nextImg = "/Common/next.png";
                } else if (dir === "rtl") {
                    // 当系统语言方向为从右到左时，开发者根据需要设置组件属性或样式，如对图片做镜像处理
                    that.nextImg = "/Common/next_mirror.png";
                }
            }
        }
    }
</script>
```

