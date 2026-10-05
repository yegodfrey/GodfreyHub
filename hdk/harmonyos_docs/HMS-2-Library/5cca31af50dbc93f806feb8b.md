---
name: document/cn/HMS-2-Library/hmssdk_jointOper_game_hmsagent
title: 集成HMS SDK Agent（废弃）
uri: https://developer.huawei.com/consumer/cn/doc/HMS-2-Library/hmssdk_jointOper_game_hmsagent
source: portal
---

HMS SDK Agent 对HMS SDK原始接口进行了二次封装，增加了一些必备的初始化操作，并增强了对异常的处理，以方便开发者使用。在集成HMS SDK同时，必须集成HMS SDK Agent。

1、下载[HMSAgent_2.6.3.306.zip](https://appfile1.hicloud.com:443/FileServer/getFile/app/000/001/111/0000000000000001111.20191219225956.19285745454586655912466792126595:20471231000000:0001:31A1DD5A306BC1925568BA50C745D41D27F127379E0EABB203E646B723A12967.zip?needInitFileName=true)并解压到开发用的PC中。  
SHA256校验：8450e75425f89003c9c362770542313f70c05c6b78d8e100f242b7642e6ce908  


大小：512,480（Bytes）

警告：

HMS SDK Agent的主版本号必须与HMS SDK基础包相同，例如HMS SDK基础包版本为2.6.3.306，必须也配套使用2.6.3.xxx版本的HMS SDK Agent，2.6.3即为主版本号。

2、开发者根据开发环境的实际情况选择对应的脚本文件。该脚本文件用于生成HMSAgent的工程文件。

操作系统| 适用区域| 脚本文件  
---|---|---  
Windows| 中国大陆地区| GetHMSAgent_cn.bat  
中国大陆以外的地区| GetHMSAgent_oversea.bat  
Mac OS| 中国大陆地区| GetHMSAgent_cn.sh  
中国大陆以外的地区| GetHMSAgent_oversea.sh  
  
3、双击执行对应的脚本文件，根据下表提示信息按顺序操作。

警告：

如果脚本文件无法执行，请检查当前用户是否具备脚本执行权限，检查无误后仍然不能执行请联系华为工程师处理。

  


提示信息| 说明  
---|---  
请输入应用的包名| 应用包名必须与创建应用时配置的包名一致，必须以.HUAWEI或者.huawei结尾，参见[创建应用](https://developer.huawei.com/consumer/cn/doc/development/HMS-2-Guides/hmssdk_jointOper_prepare_creatgame)。  
请输入appid，来源于开发者联盟（http://developer.huawei.com/consumer/cn）上申请应用分配的appid| 输入AppGallery Connect为应用分配的应用ID，具体查询方法参见[查询应用ID](https://developer.huawei.com/consumer/cn/doc/development/HMS-2-Guides/hmssdk_jointOper_queryappid)。  
请输入cpid，来源于开发者联盟（http://developer.huawei.com/consumer/cn）上申请应用分配的cpid 或 支付id:| 输入华为开发者联盟为开发者分配的支付ID，具体查询方法参见[查询支付服务信息](https://developer.huawei.com/consumer/cn/doc/development/HMS-2-Guides/hmssdk_jointOper_querypayinfo)。  
您的应用是否是“游戏”（1表示是，0表示否）| 联运游戏输入1。  
您是否需要集成“支付”（1表示需要，0表示不需要）| 联运游戏输入1。  
您是否需要集成“华为帐号”（1表示需要，0表示不需要）| 联运游戏输入0。  
您是否需要集成“社交”（1表示需要，0表示不需要）| 如果应用需要支持消息服务，输入1，否则输入0。  
  
您是否需要集成“Push”（1表示需要，0表示不需要）| 如果应用需要支持推送服务，输入1，否则输入0。  
推送服务的开发请参见[推送服务开发指南](https://developer.huawei.com/consumer/cn/doc/development/HMS-2-Guides/hmssdk_huaweipush_introduction_agent)。  
  
4、脚本文件执行成功后在根目录会自动生成copysrc文件夹，复制copysrc/java中的com目录，粘贴到现有工程中com目录所在的目录（例如，在AndroidStudio环境下请将com目录拷贝至app/src/main/java目录下，Eclipse环境下请将com目录拷贝至src目录下）。

说明：

● 请勿修改com目录下的包路径和目录结构，否则将导致无法正常集成HMS SDK Agent。  
● copysrc目录下的AndroidManifest.xml供配置manifest文件时作为参考。  
● 如果由于PC环境问题导致脚本无法运行，可以直接使用hmsagents\src\main\java目录下的com目录，但该目录默认集成所有华为服务。
