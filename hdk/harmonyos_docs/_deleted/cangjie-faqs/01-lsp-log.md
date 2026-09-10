---
name: cangjie-faqs/01-lsp-log
title: 如何开启仓颉语言服务日志
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/01-lsp-log
nodePath: FAQ / DevEco Studio / 如何开启仓颉语言服务日志
---

# 如何开启仓颉语言服务日志

#### 问题现象

仓颉语言服务日志默认关闭，开发者无法查看仓颉语言服务日志。

#### 解决措施

点击DevEco Studio的**Help - > Edit Custom Properties...**:

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/81/v3/hXNAXMFFR8y5NUaijo5oxQ/zh-cn_image_0000002659354132.png?HW-CC-KV=V1&HW-CC-Date=20260804T120417Z&HW-CC-Expire=86400&HW-CC-Sign=315103AA9781973A841914B043126258F2DF02363AD027D66B2E89B22C81475E)

在idea.properties配置文件中输入"deveco.is.enableCangjieLog=true"开启仓颉语言服务日志:

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a3/v3/4tCBbH-IQJS1Mzzj2m_S8w/zh-cn_image_0000002689473661.png?HW-CC-KV=V1&HW-CC-Date=20260804T120417Z&HW-CC-Expire=86400&HW-CC-Sign=9AEF89532C4F36961A647076D3555A545612EF7D99DB1F726F082AB1B67CE6B1)

重启DevEco Studio后可以在工程目录下的.idea/.deveco/cangjie/log/log.txt文件中查看仓颉语言服务日志:

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/23/v3/v43rJbUSQmyom75hqMdxPA/zh-cn_image_0000002689593469.png?HW-CC-KV=V1&HW-CC-Date=20260804T120417Z&HW-CC-Expire=86400&HW-CC-Sign=E63C2CBC5A85DBC0CA338FD8901903967B4F76512C8084A6D044761CC3BB7DD1)
