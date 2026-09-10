---
name: document/cn/content/themes-engine-next-base-mediacontroller-0000002471235098
title: 数据开放：音乐数据开放<MediaController>
uri: https://developer.huawei.com/consumer/cn/doc/content/themes-engine-next-base-mediacontroller-0000002471235098
---

# 数据开放：音乐数据开放\<MediaController\>

#### 功能概述

开放音乐数据和播控功能。

音乐控制器\<MediaController\>

在使用音乐数据和播控功能时，需要先声明音乐控制器MediaController。

音乐数据变量

在使用音乐数据变量时，需要先声明音乐控制器MediaController。

音乐控制命令\<MediaCommand\>

在使用音乐控制命令MediaCommand时，需要先声明音乐控制器MediaController。

音乐进度条\<MediaProgressbar\>

在使用音乐进度条MediaProgressbar时，需要先声明音乐控制器MediaController

专辑封面\<MediaIcon\>

获取到音乐App中的专辑封面图片时，展示获取到的专辑封面。

未获取到音乐App中的专辑封面图片时，展示通过MediaIcon设置的默认专辑封面。

在使用专辑封面Medialcon时，需要先声明音乐控制器MediaController。  

#### 支持范围

起始规范版本：HarmonyOS 5.0

是否平台特性：否  

| |锁屏（Lockscreen）|桌面（Wallpaper）|一镜到底（LongTake）|百变卡片（Widget）|充电动效（ChargingSkin）|
|:---|:------------:|:-----------:|:------------:|:----------:|:----------------:|
|是否支持|√|√|√|√|x|
[表1 支持根标签]

| |直板机|折叠屏|平板|
|:---|:-:|:-:|:-:|
|是否支持|√|√|√|
[表2 支持设备类型]

#### XML规范

音乐控制器

```
<MediaController packageName="com.huawei.music" />
```

音乐控制命令

```
<MediaCommand command="mediaPlay" condition="1" />
```

音乐进度条

```
<MediaProgressbar topColor="" bottomColor="" bgSrc="" iconSrc="" x="" y="" w="" h="" progressWidth="" iconWidth="" iconHeight="" roundedCorners="" />
```

专辑封面

```
<MediaIcon h="" src="" w="" x="" y="" />
```

#### 参数说明

音乐控制器\<MediaControl\>  

|-----------|---|--|-----------|
|参数|类型|选项|注释|
|packageName|字符串|选填|指定音乐App的包名。|

![](https://media:901787895379191995)  
1. 同一个脚本中，声明一次\<MediaControl/\>即可。

音乐数据变量  

|--------------------|---|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|变量|类型|注释|
|media_like_status|数值|音乐歌曲收藏状态，1-已收藏。|
|media_play_status|数值|播放状态，2-播放，3-暂停，6-停止，11-缓冲。说明停止：从头开始播。暂停：从当前进度开始播。|
|media_title|字符串|歌曲名称。说明当通过文本展示歌曲名称时，可设置文本内容超出文本框宽度后滚动/裁剪，避免歌曲名称过长时自动换行，影响其他内容展示的情况。|
|media_subtitle|字符串|艺术家名称。说明当通过文本标签展示艺术家名称时，可设置文本内容超出文本框宽度后滚动/裁剪，避免艺术家名称过长时自动换行，影响其他内容展示的情况。|
|media_genres|字符串|歌曲风格，共以下17类："纯音乐类"、"中国元素"、"流行"、"民谣"、"电子"、"摇滚"、"乡村"、"说唱"、"雷鬼"、"R\&B"、"FUNK"、"拉丁"、"独立音乐"、"古典"、"英伦"、"抒情歌曲"和"其他"。说明1. 歌曲风格仅华为音乐支持。1. 通过media_genres变量，可以获取到华为音乐的歌曲风格，然后根据不同的歌曲风格设计不同的动画效果。需要注意的是：为保证每个歌曲风格都有对应的动画，建议设计师将所有歌曲风格都写入其中，可一个动画对应多种歌曲风格。|
|media_mode_status|字符串|播放模式文字，"顺序播放"、 "单曲循环"、 "列表循环"和"随机播放"。说明播放模式仅华为音乐支持。|
|repeat_mode|数值|播放模式数值，0、1、2、3分别对应media_mode_status中的文字。|
|media_loading_status|数值|音乐播放前的加载状态。1-正在加载；2-加载完成。说明：1. 拉起华为音乐数据时，可能需要一定的加载时间，此时media_loading_status值为1。1. 建议设计师为正在加载状态设计提示文字或动效，提示用户音乐数据正在加载中。|

音乐控制命令\<MediaCommand\>  

|------------|---|--|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|参数|类型|选项|注释|
|command|字符串|必填|command可以设置的值如下：mediaPlay：音乐播放命令mediaPause：音乐暂停命令mediaLike：音乐收藏命令（仅华为音乐支持）mediaDislike：音乐取消收藏命令（仅华为音乐支持）skipToPrevious：上一首skipToNext：下一首addVoice：增加音量subVoice：减少音量mediaRepeatMode：修改播放模式说明mediaLike和mediaDislike仅华为音乐支持。|
|voiceStep100|数值|选填|音量变化的步进值，默认为10，支持表达式。|
|condition|数值|选填|触发条件，1为触发，支持表达式。|

音乐进度条\<MediaProgressbar\>  

|--------------|---|--|------------------------------------|
|参数|类型|选项|注释|
|topColor|字符串|必填|已进行进度颜色，支持表达式。|
|bottomColor|字符串|必填|未进行的进度颜色，支持表达式。|
|bgSrc|字符串|选填|进度条的背景图。|
|iconSrc|字符串|选填|跟随进度的小图标，支持表达式。|
|progressWidth|数值|选填|进度条的高度，支持表达式。|
|iconWidth|数值|必填|小图标的宽度，支持表达式。|
|iconHeight|数值|选填|小图标的高度，支持表达式。|
|roundedCorners|字符串|选填|进度条圆角，取值范围：0-progressWidth，不填即为直角样式。|

专辑封面\<MediaIcon\>  

|---|---|--|--------------|
|参数|类型|选项|注释|
|src|字符串|必填|没有歌曲封面时展示的默认图。|

#### 应用示例

无  
