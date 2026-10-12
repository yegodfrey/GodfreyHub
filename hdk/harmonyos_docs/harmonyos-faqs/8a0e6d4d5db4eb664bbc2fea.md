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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/87/v3/TbqYdX6gSO6CFeAITPIKIg/zh-cn_image_0000002654837735.png?HW-CC-KV=V1&HW-CC-Date=20261008T165309Z&HW-CC-Expire=31536000000&HW-CC-Sign=4CAC94F3623DEC4F7062E6EC81F76C3C9A9AACF998EA74C63B71E4B19F3A2555)

@ohos/hypium版本号可通过ohpm命令获取，在DevEco Studio中打开Terminal，输入**ohpm info @ohos/hypium**命令，输出结果中dist-tags下方即为版本号。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/28/v3/llhb8pIdSSSewyIJCgaa_A/zh-cn_image_0000002624478424.png?HW-CC-KV=V1&HW-CC-Date=20261008T165309Z&HW-CC-Expire=31536000000&HW-CC-Sign=4DEBD8049D902B17C4D4ACC469F5E50CCAA60C7F7F89AEFA1708DD0B6F1943C6)

