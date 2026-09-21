---
name: document/cn/AppGallery-connect-Guides/agc-cloudstorage-config-cors-0000001281375696
title: （可选）跨域设置
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-cloudstorage-config-cors-0000001281375696
---

# （可选）跨域设置

如需在不同的站点访问指定的存储实例，可以设置跨域的相关配置，服务器将通过配置的跨域信息进行相关允许、拒绝等操作。

## 操作步骤

1. 登录[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)，点击"开发与服务"。
2. 在项目列表中找到您的项目。
3. 选择"云开发（Serverless）> 云存储"，进入云存储页面。
4. 选择"配置"页签，在"跨域设置"界面点击"添加策略"，根据您的源地址、请求方法等信息配置跨域设置相关参数。

   ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250704165005.81967453411551615926341963927056:50001231000000:2800:EAE148E9DA33B6459C56E1C5EC46B083C21C0B4D2E1B09464B8C5C99CAF450CB.png)

   |参数|可选/必选|说明|
   |:----|:----|:-----------------------------------------------------------------------|
   |允许的来源|必选|指定允许的跨域请求来源，即允许来自该域名下的请求访问该存储实例。 允许多条匹配规则，以回车换行为间隔，每个匹配规则允许使用最多一个"*"通配符。|
   |允许的方法|必选|指定允许的跨域请求方法，即存储实例和对象的几种操作类型，包括：GET、POST、PUT、DELETE、HEAD。|
   |允许的头域|可选|指定允许的跨域请求头域。 > 说明 > 只有匹配上允许的头域中的配置，才被视为是合法的CORS请求。|
   |补充的头域|可选|指CORS响应中带的补充头域，给客户端提供额外的信息。|
   |缓存时间|可选|请求来源的客户端可以缓存CORS响应的时间，单位：秒。|

5. 完成后点击"保存"。

## 更多信息

您也可调用云存储SDK的API进行跨域设置。

* [Server-Java](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-cloudstorage-configuring-cors-java-0000001115496720)
* [Server-Node.js](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-cloudstorage-configuring-cors-0000001139623179)

