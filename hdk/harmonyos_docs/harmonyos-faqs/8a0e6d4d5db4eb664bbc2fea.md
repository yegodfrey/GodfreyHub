---
name: document/cn/harmonyos-faqs/faqs-project-management-4
title: 打开历史工程，报错提示“Install failed FetchPackageInfo: hypium failed”
uri: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-project-management-4
---

# 打开历史工程，报错提示"Install failed FetchPackageInfo: hypium failed"

**问题现象**

在DevEco Studio打开历史工程，依赖安装不成功，报错信息为"Install failed FetchPackageInfo: hypium failed"。

**解决措施**

导致该问题的原因是包名使用错误。在工程级**oh-package.json5** 中，将**devDependencies**字段下"hypium"修改为"@ohos/hypium"。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/87/v3/TbqYdX6gSO6CFeAITPIKIg/zh-cn_image_0000002654837735.png?HW-CC-KV=V1&HW-CC-Date=20260916T082506Z&HW-CC-Expire=31536000000&HW-CC-Sign=ED68294AAF0559B34CE9428368621473EBF32DFF283119322375869ABF0740B5)

@ohos/hypium版本号可通过ohpm命令获取，在DevEco Studio中打开Terminal，输入**ohpm info @ohos/hypium**命令，输出结果中dist-tags下方即为版本号。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/28/v3/llhb8pIdSSSewyIJCgaa_A/zh-cn_image_0000002624478424.png?HW-CC-KV=V1&HW-CC-Date=20260916T082506Z&HW-CC-Expire=31536000000&HW-CC-Sign=E53A9DCA38D11181863407D7536D223D624301440B420A84C1E5814A4372CEF5)

