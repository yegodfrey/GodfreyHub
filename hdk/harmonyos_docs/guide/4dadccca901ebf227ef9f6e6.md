---
name: document/cn/guide/add_new_product-0000001284168468
title: 创建一个新产品
uri: https://developer.huawei.com/consumer/cn/doc/guide/add_new_product-0000001284168468
source: portal
---

# 创建一个新产品

设备厂商可以使用DevEco Device Tool工具在OpenHarmony源码中定义和开发一款新的产品，快速的创建新产品的业务模板。同时，开发者可以在定义新产品时，选择继承一款成熟产品，然后自动创建和生成产品化开发所需的最小文件集合和目录结构，无多余文件、无需手动修改删除，可直接进行新产品开发。

该功能当前支持轻量系统和小型系统的新产品开发，暂不支持标准系统。

#### 前提条件

在DevEco Device Tool中，已经打开OpenHarmony的源码，具体可参考[创建OpenHarmony工程](https://device.harmonyos.com/cn/docs/documentation/guide/create_project-0000001072200151)和[导入OpenHarmony源码](https://device.harmonyos.com/cn/docs/documentation/guide/open_project-0000001071680043)。

#### 操作步骤

     1. 在DevEco Device Tool工程的源码文件任意位置，点击鼠标右键，选择**OpenHarmony > Add New Product**创建一个新工程。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20240930102407.50223890823599815876742915965735:50001231000000:2800:2973E8CDA02DD49D2C7D5C6F259E7A2D8D9BBB4E5DCFD93759DD253AC9926993.png?needInitFileName=true?needInitFileName=true)

     2. 在弹出的窗口中，配置新产品相关参数。

        * Vendor Name：供应商名称，一般填写该产品的厂商名称。
        * Product Name：产品名称，由开发者自定义。
        * Inherited from：继承信息，指的是该产品可以继承自某一款成熟的产品，DevEco Device Tool会将该继承产品的源码文件进行复制，并自动进行相关适配，开发者可在此基础上进行适配开发新的产品功能。
          * Board Name：指该产品可以继承自某一款开发板。
          * Product Name：指继承自该开发板的具体一款产品，DevEco Device Tool会将该继承产品的源码文件进行复制，并自动进行相关适配；也可以选择None，然后由开发者自行开发相关功能。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20240930102407.29934242054075573474724633603228:50001231000000:2800:D301E81E8528EEE7B9311D7E31B9A433F79893F6726FFC49CC12D75036BFC0C1.png?needInitFileName=true?needInitFileName=true)

     3. 点击**OK** ，等待产品创建完成，DevEco Device Tool会自动在源码文件的**Vendor** 目录下创建出相关的产品及源码文件；同时，DevEco Device Tool还会自动将“BUILD.gn”和“config.json”文件进行适配，开发者只需在此基础上进行产品功能开发即可。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20240930102407.44734435468286751600536801853879:50001231000000:2800:349339B90E34B7AC0A542731CC8B5ED1898F61DC9C1CC423296A6497CACAA023.png?needInitFileName=true?needInitFileName=true)

     4. 开发者进行相关产品开发，相关指导可参考[OpenHarmony设备开发](https://openharmony.cn/docs?navId=2&navName=设备开发文档概览)相关文档。产品功能开发完成后，便可以使用DevEco Device Tool进行源码的编译、开发板烧录等操作。
