---
name: document/cn/games-references/games-api-quickgame-runtime-share-0000002399796685
title: 系统分享
uri: https://developer.huawei.com/consumer/cn/doc/games-references/games-api-quickgame-runtime-share-0000002399796685
---

# 系统分享

![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260226093542.77824406523627134413596784708963:50001231000000:2800:318749BC6B74E4A20F23BCF1A66CB9316FA53FC34441A6328177CCA90EA2B2D4.png)  
从1078版本开始，接口前缀由hbs修改为qg，原hbs仍支持。  

#### 接口定义

|接口|描述|
|:------------------------------------------------------|:-----------------|
|[qg.systemShare(Object object)](#section16201454172110)|通过系统分享，分享数据到其他app。|

#### qg.systemShare(Object object)

* 描述 通过系统分享，分享数据到其他app。

* 参数  

  |参数|类型|必填(M)/选填(O)|说明|
  |:-------|:-------|:----------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
  |type|string|M|数据类型，取值说明如下： * 分享类型为小游戏时，请填写"application/vnd.huawei.minigame"，表示分享小游戏。 * 分享类型为其他的数据类型时，请填写数据的MIME TYPE，要求字母全小写。|
  |data|string|M|分享的数据，取值说明如下： * 如果type是text/开头的mimetype（如text/plain），则data是要分享的文本内容。 * 如果type为application/vnd.huawei.minigame，则data定义为"myself"，表示分享当前小游戏。 * 如果type是其他值，则data是要分享的文件路径 支持三种文件路径： * 通过qg.downloadFile下载的文件路径。 * 通过文件管理器FileSystemManager对象保存文件或者读取目录文件列表获得的文件路径。 * 以/开头的应用内部的资源文件。|
  |success|function|O|接口调用成功的回调函数，因为大部分鸿蒙app都没有正确的返回分享状态，所以即使分享成功了，也可能执行cancel回调，而不是success回调。|
  |fail|function|O|接口调用失败的回调函数。|
  |cancel|function|O|取消回调。|
  |complete|function|O|若有函数传入，将在成功、失败后调用该函数。|

* 示例代码

  ```
  qg.systemShare({
          type: 'text/html',
          data: 'System Share text/html',
          success:function(){console.log('share success')},
          fail:function(errMsg, errCode){console.log('share fail --- ' + errCode + ':' + errMsg)},
          cancel:function(data){console.log("share cancel:" + data)},
          complete:function(){console.log('share complete')}
  });

  // 分享当前小游戏
  if (typeof qg.canIUse === "function") {
    const isSupportOnShare = qg.canIUse("MiniGame.OnShare"); // 是否支持qg.onShare
    const isSupportNearbyPlaying = qg.canIUse("MiniGame.NearbyPlaying"); // 是否支持近场联机
    const isSupportShareSelf = qg.canIUse("MiniGame.SystemShare.ShareSelf"); // 是否支持分享当前小游戏
    if (isSupportOnShare && isSupportNearbyPlaying && isSupportShareSelf) {
      qg.systemShare({
        type: "application/vnd.huawei.minigame", // 表示分享小游戏
        data: "myself", // 表示分享当前小游戏
        success: function () {
          console.log("share success");
        },
        fail: function (errMsg, errCode) {
          console.log("share fail --- " + errCode + ":" + errMsg);
        },
        cancel: function (data) {
          console.log("share cancel:" + data);
        },
        complete: function () {
          console.log("share complete");
        },
      });
    }
  }
  ```

