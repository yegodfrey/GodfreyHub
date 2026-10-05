---
name: document/cn/harmonyos-center-guides/faqs-app-test-9-0000002095827448
title: ohosTest测试文件引用了启动页的导出方法，测试时报错“Load Page Failed: pages/Index”
uri: https://developer.huawei.com/consumer/cn/doc/harmonyos-center-guides/faqs-app-test-9-0000002095827448
source: portal
---

ohosTest测试文件引用了启动页的导出方法，测试时报错“Load Page Failed: pages/Index” **问题现象** 在测试文件中引用启动页的导出方法并拉起启动页面所在的Ability时，执行测试会抛出jscrash，错误信息为：“Load Page Failed: pages/Index”。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/29/v3/Jsfqc0FmQviGVDXO4XlBRQ/zh-cn_image_0000002592778100.png?HW-CC-KV=V1&HW-CC-Date=20261005T053048Z&HW-CC-Expire=86400&HW-CC-Sign=26F371D55042F3F886EACAC47C63E1DD54B3F28223D77E56F639D28B44C09175)**解决措施** 拉起启动页面所在Ability时指定当前模块名称，执行测试，用例正常运行。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/39/v3/hW7tApflR5GLgF_uVs1ASA/zh-cn_image_0000002623377519.png?HW-CC-KV=V1&HW-CC-Date=20261005T053048Z&HW-CC-Expire=86400&HW-CC-Sign=0A145065C47C5E57532B09EF76165080320271C025FC1DC4298CB01E953B3641)
