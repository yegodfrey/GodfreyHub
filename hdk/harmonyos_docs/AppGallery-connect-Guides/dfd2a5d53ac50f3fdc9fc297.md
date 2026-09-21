---
name: document/cn/AppGallery-connect-Guides/agc-cloudstorage-multilocation-quickapp-0000001305373394
title: （可选）多数据处理位置
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-cloudstorage-multilocation-quickapp-0000001305373394
---

# （可选）多数据处理位置

通常情况下，为了满足各区域隐私合规或就近处理数据等要求，可以使用不同数据处理位置访问处理不同区域的数据。

* 如果您不指定数据处理位置，云存储服务将使用默认数据处理位置存放和处理数据。
* 如果设置了数据处理位置，云存储服务将在指定的数据处理位置存放和处理数据。

您可以在AppGallery Connect上[设置数据处理位置](https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-Guides/agc-data-storage-location-0000001162597847)，设置完成后重新[获取agconnect-services.json文件](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-storage-obtain-files-0000001275499192#section62211526229)并集成到您的项目中，然后即可在项目中对数据处理位置进行处理：

* [使用默认数据处理位置](#section1910913304262)
* [修改默认数据处理位置](#section8328654182616)
* [使用指定数据处理位置](#section66216133276)

## 使用默认数据处理位置

直接调用服务的相关接口使用即可。

```screen
const storageManagement = agconnect.cloudStorage();
```

## 修改默认数据处理位置

> 注意
>
> 在AGC上设置的"默认数据处理位置"适用于项目下所有应用，此处修改的"默认数据处理位置"仅对本应用生效，不会影响其他应用。

调用[agconnect.instance().setOption()](https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-References/agccore-web-agcinstance-0000001159665969#section122413951213)方法修改数据处理位置。
> 说明
>
> 建议此接口在agc初始化方法调用后立刻调用，数据处理位置及其对应的枚举值详情请参见[AGCRoutePolicy](https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-References/agccore-web-agcroutepolicy-0000001159665971)。

```screen
// 应用配置信息
const agconnectConfig = require('../agconnect-services.json'); 
// 初始化agc 
agconnect.instance().configInstance(agConnectConfig); 
// AGConnectOptions对象
var optCN = { 
     routePolicy: 1 // routePolicy值对应不同的数据处理位置，此时设置为中国
} 
// 设置数据处理位置
agconnect.instance().setOption(optCN); 
```

## 使用指定数据处理位置

您还可以通过指定目标数据处理位置，实现不同数据处理位置访问不同区域的数据，此处目标数据处理位置以中国为例进行介绍。

1. 调用agconnect.instance()方法并传入一个identifier参数，返回一个AGCInstance对象。例如：agconnect.instance("CN")返回一个instance对象，其identifier为"CN"。 说明
   > * identifier为字符串类型，为AGCInstance对象的唯一标识符，由您自定义。
   > * agconnect.instance()不传入identifier时，identifier默认为"[DEFAULT_CATEGORY]"。
   > * 每个AGCInstance对象之间相互独立，需要保证每个AGCInstance除数据处理位置设置不同外，其他设置完全一致。

   ```screen
   // 应用配置信息
   const agconnectConfig = require('../agconnect-services.json');
   // 初始化agc
   var instanceCN = agconnect.instance("CN");
   instanceCN.configInstance(agConnectConfig);
   ```

2. 构造[AGConnectOptions](https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-References/agccore-agconnectoptions-0000001116446037)对象，指定目标数据处理位置。 说明
   >
   > 数据处理位置及其对应的枚举值详情请参见[AGCRoutePolicy](https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-References/agccore-web-agcroutepolicy-0000001159665971)。

   ```screen
   // AGConnectOptions对象
   var optCN = {
       routePolicy: 1 // routePolicy值对应不同的数据处理位置，此时设置为中国
   }
   // 设置数据处理位置
   instanceCN.setOption(optCN);
   ```

3. 在指定目标数据处理位置即可使用云存储服务。

   ```screen
   // 初始化云存储实例
   const storageManagement = agconnect.cloudStorage(instanceCN, 'bucketForCN');// 数据处理位置为中国
   ```

4. 如果您需要实现访问其他数据处理位置，重复上述步骤，指定不同的目标数据处理位置即可。

