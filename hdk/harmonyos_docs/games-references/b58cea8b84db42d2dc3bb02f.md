---
name: document/cn/games-references/games-api-quickgame-runtime-image-0000002365996960
title: 图片
uri: https://developer.huawei.com/consumer/cn/doc/games-references/games-api-quickgame-runtime-image-0000002365996960
---

# 图片

![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260212154038.52083918199035840664462064128112:50001231000000:2800:526852A1DB232CB7279C6E211E5CD390725362685129DCDB478C4BD8729505C8.png)  
从1078版本开始，接口前缀由hbs修改为qg，原hbs仍支持。  

#### 接口定义

快游戏实现了标准的Image功能，请参见[Image API](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/Image) 。  

|接口|描述|
|:--------------------------------------|:--------|
|[qg.createImage()](#section16444791446)|创建一个图片对象。|

#### qg.createImage()

* 描述 创建一个图片对象。

* 返回参数 图片对象。图片属性如下所示：

  |属性|类型|说明|
  |:------|:-------|:----------------|
  |src|string|图片的URL。|
  |width|number|图片的真实宽度。|
  |height|number|图片的真实高度。|
  |onload|function|图片加载完成后触发的回调函数。|
  |onerror|function|图片加载发生错误后触发的回调函数。|

