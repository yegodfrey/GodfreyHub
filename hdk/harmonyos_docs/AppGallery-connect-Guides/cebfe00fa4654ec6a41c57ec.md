---
name: document/cn/AppGallery-connect-Guides/agc-cloud-function-faq-0000001077699588
title: FAQ
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-cloud-function-faq-0000001077699588
---

# FAQ

#### 通用

#### 上传云函数zip包后，在代码文件区域未显示上传的zip包怎么办？

当前云函数zip包上传速度较慢，请耐心等待再次查看。  

#### 调用函数时返回"Cannot find module......"或者"Can't find function name xxx"报错是什么原因？

"函数入口"包括入口文件名称（相对根目录路径）和入口方法名称，通过"."连接。

* 创建函数时，"函数入口"的配置与实际入口文件名称不一致。 如下图所示，入口文件名称为handler.js，入口方法名称为myHandler，"函数入口"配置项应该配置为：handler.myHandler，而实际却配置为：hand.myHandler，入口文件名称与实际不符，调用函数时由于系统找不到hand.js入口文件，故报错"Cannot find module......"。

  ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20251128170623.71846695899491257171440962951400:50001231000000:2800:B05037D0CEE15A0A4308FFCC41970847BEB4B3E2C7F92F993021E65664AAA124.png)

* 创建函数时，"函数入口"的配置与实际入口方法名称不一致。 如下图所示，入口文件名称为handler.js，入口方法名称为myHandler，"函数入口"配置项应该配置为：handler.myHandler，而实际却配置为：handler.myHand，入口方法名称与实际不符，调用函数时由于系统找不到myHand入口方法，故报错"Can't find function name xxx"。

  ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20251128170630.16672414947245165073802329591065:50001231000000:2800:6B9775C4EEED0ACDE7BA6B65146151F57A71DB5018D0EFFA4BFBA686AFD1DD8F.png)

#### 快游戏

#### 集成快游戏SDK时，出现错误"code":10001,"msg":"agc network request error"，该如何解决？

使用开发工具（如VSCode）打开agconnect-quickgame-1.4.4-min.js文件，格式化代码后，搜索代码片段return e.response，并将其修改为如下内容：

```
try {
  return JSON.parse(e.response)
} catch (t) {
  return e.response
}
```

![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20251128170633.39353524850529646169078921485318:50001231000000:2800:EE0FEA0E941144B6F3013F8CFFA613A5A4058777C59326BA0628B533EA9FC534.png "点击放大")  
