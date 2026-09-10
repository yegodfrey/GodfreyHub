---
name: document/cn/HMSCore-References/bannerad-0000001179473263
title: BannerAd
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-References/bannerad-0000001179473263
---

# BannerAd

#### 概述

Banner广告对象。  

#### 方法

|方法|描述|参数|返回值|
|:-----------------------|:------------|:----------------------------------------------------------------------------------------------------------------------------------------------------|:--|
|load()|加载广告。|-|-|
|setRequestConfig(object)|设置广告请求扩展配置参数。|[RequestConfig](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/ppsads-setglobalrequestconfig-0000001179593167#section15312204811345)|-|
|onLoad(callback)|广告加载成功监听。|callback：广告加载成功的回调函数。|-|
|offLoad()|移除广告加载成功监听。|-|-|
|onClose(callback)|广告关闭监听。|callback：广告关闭成功的回调函数。|-|
|offClose()|移除广告关闭监听。|-|-|
|onError(callback)|广告加载失败监听。|callback：素材加载失败携带错误码的回调函数，callback的参数为errorcode。|-|
|offError()|移除广告加载失败监听。|-|-|
|destroy()|销毁广告组件。|-|-|

