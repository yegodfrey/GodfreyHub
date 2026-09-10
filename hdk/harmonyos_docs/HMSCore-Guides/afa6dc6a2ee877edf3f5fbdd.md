---
name: document/cn/HMSCore-Guides/channel-analysis-0000001123541447
title: 渠道分析
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/channel-analysis-0000001123541447
---

# 渠道分析

#### 功能概述

渠道分析，用于分析用户的访问来源。您可通过新增用户、活跃用户、累计用户、新增次日留存率等基础指标评估渠道的拉新能力以及渠道带来的价值，从而优化后续的投放策略。  

#### 统计原理

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230926115219.15159310336977721167141252894097:50001231000000:2800:59D42E26D199CB1F1A33C3A90F666C81E34E3DFC00C9D315E2E555D9889ED667.png?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true)

Android平台的应用市场比较多，推广方式也很丰富。集成分析SDK后，您可以通过分包发布来区分不同的渠道，即为每个渠道生成一个渠道包，每个渠道包用不同的安装渠道属性值来标识。当有用户下载激活App时，可通过渠道分析页面查看不同渠道的用户数据。  
![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230926115219.33325066218340298116705238610173:50001231000000:2800:4DF2AC8ED1B227195245119E3BCE521606B313E087EFC489C802FF441E1487C4.png?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true)  
该功能仅适用于Android应用。  

#### 配置安装渠道

您可以为不同的渠道包配置不同的安装渠道属性值，配置方法如下：

打开您的工程"AndroidManifest.xml"文件，在"application"模块根节点下添加meta-data参数，格式如下。

```
<application
    ……
    <meta-data
        android:name="install_channel"
        android:value="install_channel_value">
    </meta-data>
    ……
</application>
```

将"install_channel_value"替换为您应用的安装渠道名称。例如：安装来源为华为应用市场，则将"install_channel_value"替换为"AppGallery"。  
![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230926115219.08808013377009333081428888326066:50001231000000:2800:4C6B99543C15BE4463E2F15414FC3D791DC9AB463F8074A5BEF72161ADA38A2E.png?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true)  
安装渠道命名规范：支持英文字母、阿拉伯数字、下划线、中划线和空格，不能以空格为开头和结尾，长度不超过128个字符。  

#### 典型应用场景

* 了解不同渠道的新增用户趋势及对比情况。
* 了解某一渠道的详情页面，进行下钻分析。
* 查看指定时间范围内选定指标的变化趋势。
* 筛选指定渠道选定指标的变化趋势及对比情况。  

#### 功能详述

#### 案例

一款App，近期在各大应用市场分别投放了应用包，想查看各渠道新增用户的排名情况。

需求：了解App在各渠道的拉新能力，从而优化后续的投放策略。  

#### 操作流程

1. 登录[AppGallery Connect网站](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)，点击"我的项目"图标。
2. 选择需要查看分析数据的应用。
3. 选择"华为分析 \> 用户分析 \> 渠道分析"，进入渠道分析页面。
4. 查看渠道分析报告。详情请参见[查看渠道分析报告](#section103274416495)。  

#### 查看渠道分析报告

1. 查看不同渠道用户的趋势及对比情况。

   选择"新增用户数"，即可查看不同渠道新增用户的趋势及对比情况，默认展示TOP5渠道的数据。您可以切换需要查看的指标，包括新增用户数、活跃用户数、累计用户数、平均单次使用时长、平均日使用时长、付费转化率、付费用户数、付费金额、启动次数和新增次日留存率。

   ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230926115219.28758292025329564279171401408740:50001231000000:2800:4A0CCA2FF67F253C040185A191C619C66FE3EDEA5401E94AF5AA0200B2CFE66A.png?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true "点击放大")

   系统默认列出当前所有指标，并默认勾选当前展示的指标。点击页面上方的编辑按钮可选择想要查看的指标，点击"确定"后，页面展示选择的指标数据。
2. 查看某一渠道的详情页面，进行下钻分析。

   点击渠道分析报告中的渠道名称，可下钻到具体某个渠道进行详细分析。渠道详情页展示渠道趋势、渠道留存分析、渠道新增细分指标报告。

   渠道趋势页面展示渠道详情的概览数据：

   ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230926115219.15554901698177062020803160161403:50001231000000:2800:316AA66E9EABC21D502F508A32ED0EB221CA1CA221C0D1415AF8619AFBF1F2C3.png?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true "点击放大")

   您可以对渠道的新增和活跃用户留存进行分析：

   ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230926115219.18237411611034605058950712991818:50001231000000:2800:402242725C2DB266FA265379A1030BE69E07040A5B9D8C7AC98BB32B7B293BFF.png?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true "点击放大")

   您可以按照设备、国家/地区、省份、应用版本多个维度来细分查询渠道数据：

   ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230926115219.27243056334423951880277240803536:50001231000000:2800:BA906845453453F4244153AF67F78CC30B0CDBA58BD5D1DB4F44EFE9D67EC184.png?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true "点击放大")
3. 查看指定时间范围内选定指标的变化趋势。
   1. 点击日期控件，选择需要查看的时间范围，如选择"过去7天"。
   2. 选择"新增用户"，即可查看过去7天内不同渠道新增用户的变化趋势。

   ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230926115219.05497725574657369531133928943718:50001231000000:2800:35F69DFBA35EDB0D3E75A1744EB901ABAE642DC1A35BEAF0DC7EC4FEABD0C3CD.png?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true "点击放大")
4. 筛选指定渠道选定指标的变化趋势及对比情况。

   点击右侧的选择框，选择需要查看的渠道，点击"确定"，即可查看您指定渠道的指标变化趋势。  
   ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230926115219.43427454847296032587629671727019:50001231000000:2800:528DABB61B327570A1B256F834CDDC1CEA3C8EB48BEF67E651E3A46B19101EAC.png?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true)  
   * 最多支持同时选择10个渠道。
   * 选择指定渠道后，点击选择框右侧的锁定按钮，当您在新增用户数、活跃用户数、累计用户数以及新增用户次日留存率等各指标间切换时，已选择的渠道不会变化。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230926115220.16707232311334352835477752623775:50001231000000:2800:B5EAA981DB2D97A6145E36E1D3FD956647275F1F4B585BD7BCEF2218B739465F.png?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true "点击放大")  

#### FAQ

#### 已集成了SDK，为什么渠道分析页面展示无数据？

如果您未上报过安装渠道属性，渠道分析页面展示无数据，需要您配置渠道属性值，具体请参见[配置安装渠道](#section1592935001215)。
