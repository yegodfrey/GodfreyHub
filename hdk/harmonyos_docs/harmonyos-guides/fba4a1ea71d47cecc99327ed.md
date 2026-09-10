---
name: document/cn/harmonyos-guides/graphics-accelerate-assetdownload-prepare
title: 开发准备
uri: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/graphics-accelerate-assetdownload-prepare
---

# 开发准备

请先参考[应用开发准备](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/application-dev-overview)完成基本准备工作，再继续以下开发准备项。  

#### 配置网络权限

在"src/main/module.json5"的requestPermissions层级中添加网络权限。

<br />

```
"requestPermissions": [
  {
    "name": "ohos.permission.INTERNET",
    "usedScene": {
      "abilities": [
        "EntryAbility"
      ],
      "when": "inuse"
    }
  },
  // ...
]
```

