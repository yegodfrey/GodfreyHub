---
name: document/cn/harmonyos-center-guides/faqs-app-test-4-0000001967794449
title: 出现“container is not running”错误
uri: https://developer.huawei.com/consumer/cn/doc/harmonyos-center-guides/faqs-app-test-4-0000001967794449
source: portal
---

出现“container is not running”错误 **问题现象** 在HarmonyOS设备上运行命令“hdc -n shell param set persist.ace.testmode.enabled 1”时，出现错误提示“container is not running”。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/63/v3/a1VMFA45TNqzcrPXYE5I1w/zh-cn_image_0000002592938064.png?HW-CC-KV=V1&HW-CC-Date=20261005T053047Z&HW-CC-Expire=86400&HW-CC-Sign=34C96EA474A82B216D307F7FDCF9C3A07130A0CE5DB62716EED823CDD4B2826F) **解决措施** 在DevEco Studio中运行一个测试用例，推包到设备上，然后运行命令hdc -n shell param set persist.ace.testmode.enabled 1。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/07/v3/aluufCAFT5y_HFXfyBDr1A/zh-cn_image_0000002623217695.png?HW-CC-KV=V1&HW-CC-Date=20261005T053047Z&HW-CC-Expire=86400&HW-CC-Sign=9B2F40D1C4CD3D11E40170F95B71950E58B833C9F6A3BE5377AE7B363FF1A098)
