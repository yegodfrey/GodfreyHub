---
name: document/cn/harmonyos-faqs/faqs-project-management-4
title: 打开历史工程，报错提示“Install failed FetchPackageInfo: hypium failed”
uri: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-project-management-4
---

# 打开历史工程，报错提示"Install failed FetchPackageInfo: hypium failed"

问题现象

在DevEco Studio打开历史工程，依赖安装不成功，报错信息为"Install failed FetchPackageInfo: hypium failed"。

解决措施

导致该问题的原因是包名使用错误。在工程级oh-package.json5中，将devDependencies字段下"hypium"修改为"@ohos/hypium"。

![](https://media:101782454407871257)

@ohos/hypium版本号可通过ohpm命令获取，在DevEco Studio中打开Terminal，输入ohpm info @ohos/hypium命令，输出结果中dist-tags下方即为版本号。

![](https://media:101782454407897258)  
