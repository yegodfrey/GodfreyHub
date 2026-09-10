---
name: document/cn/AppGallery-connect-Guides/agdlink-getlink-manual-0000001117762114
title: 手工拼接链接
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agdlink-getlink-manual-0000001117762114
---

# 手工拼接链接

我们优先建议您使用[制作图章链接](https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-Guides/agdlink-getlink-agc-0000001164321881)功能来获取所需的推广链接和素材，您也可以通过手工拼接方式快速获取投放链接，当需要获取多个应用投放链接时，建议通过[Excel模板批量拼装](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20221126115006.95138869714560741114853613096040:50531125054745:2800:41A35416171BD493E0570AA866B60C13D76F1BE6A0DB7E47698749F4625327AD.xlsx?needInitFileName=true)。  
![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20221126115006.35646434723369903074742865062415:50531125054745:2800:BB54F9A12657361941A03CACDD29C6904DCD8C3E8C66B6525A7823C98BCBA609.png?needInitFileName=true?needInitFileName=true)  
手动拼接链接暂不支持iOS设备。

链接格式：

* Deeplink链接格式（在华为设备、荣耀设备上投放时推荐）：  
  ![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20221126115006.09584265253231111037401813160566:50531125054745:2800:4F7B2C97323E180BBACED3D70E9953AC45AF1F6B5171F5DA90B82574A8552779.png?needInitFileName=true?needInitFileName=true)  
  Deeplink链接格式只能应用于安装了华为应用市场客户端的设备，点击链接直接打开华为应用市场应用详情页。

  ```
  hiapplink://com.huawei.appmarket?appId=appId&channelId=channelid&referrer=referrer&detailType=0&callType=AGDLINK
  ```

* https链接格式（在非华为设备、非荣耀设备或者线下投放时推荐）：  
  ![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20221126115006.56309383829962841187610092533372:50531125054745:2800:EA21D7DAE99B5DEF1C4DCA85B82473F07A773C5411D38399AF77CD02F52C117F.png?needInitFileName=true?needInitFileName=true)  
  https链接格式适用于所有Android设备，点击链接后首先由浏览器打开展示应用wap详情页，再由浏览器根据设备是否安装了华为应用市场客户端提示下载/打开华为应用市场并进入应用详情页。

  ```
  https://appgallery.cloud.huawei.com/appDetail?pkgName=packagename&channelId=channelid&referrer=referrer&detailType=0&callType=AGDLINK
  ```

参数说明：  

|参数|说明|
|:---------|:---------------------------------------------------------------------|
|appId|待推广应用的APP ID，必须以C开头，在Deeplink链接格式中使用，必填。 例如C100001。|
|pkgName|待推广应用的包名，在https链接格式中使用，必填。 例如com.huawei.gamebox。|
|channelId|渠道名称。 建议填写，为提高数据分析对渠道识别度，建议针对每个渠道填写指定识别。若不填，系统会自动读取真实的媒体包名。|
|referrer|归因参数，最长500个字符，非必填，不填时默认为空即可。 当在同一媒体的多个页面（场景）投放链接时，可通过二级渠道号识别该媒体具体位置效果。|
|detailType|基础参数，固定填写detailType=0\&callType=AGDLINK，不可删除。|
|callType|基础参数，固定填写detailType=0\&callType=AGDLINK，不可删除。|

示例：

hiapplink://com.huawei.appmarket?appId=C10059090\&channelId=ceshi\&referrer=01\&detailType=0\&callType=AGDLINK

https://appgallery.cloud.huawei.com/appDetail?pkgName=com.huawei.gamebox\&channelId=ceshi\&referrer=01\&detailType=0\&callType=AGDLINK
