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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/81/v3/hXNAXMFFR8y5NUaijo5oxQ/zh-cn_image_0000002659354132.png?HW-CC-KV=V1&HW-CC-Date=20260921T085446Z&HW-CC-Expire=86400&HW-CC-Sign=526AFB1B967A539CE1193268192815EAF307FC5A017B4389134819566F1459A9)

在idea.properties配置文件中输入"deveco.is.enableCangjieLog=true"开启仓颉语言服务日志:

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a3/v3/4tCBbH-IQJS1Mzzj2m_S8w/zh-cn_image_0000002689473661.png?HW-CC-KV=V1&HW-CC-Date=20260921T085446Z&HW-CC-Expire=86400&HW-CC-Sign=FB9F31F12F9549BC48FD6DD8F1146683B38C2D4ACE9766B6153878918CCF246A)

重启DevEco Studio后可以在工程目录下的.idea/.deveco/cangjie/log/log.txt文件中查看仓颉语言服务日志:

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/23/v3/v43rJbUSQmyom75hqMdxPA/zh-cn_image_0000002689593469.png?HW-CC-KV=V1&HW-CC-Date=20260921T085446Z&HW-CC-Expire=86400&HW-CC-Sign=FD7CFBD5F55C937F3A44479CE70316D61FE81CE86CAD02D1592AB3E58A4FCADC)
