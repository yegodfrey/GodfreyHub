---
name: document/cn/harmonyos-guides/wallet-park-scene-delete
title: 删除园区卡
uri: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/wallet-park-scene-delete
---

# 删除园区卡

用户主动删除，将园区卡从钱包中移除。

## 交互流程

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/88/v3/t1G04nn9ST2Wgek--UVW3A/zh-cn_image_0000002749334030.png?HW-CC-KV=V1&HW-CC-Date=20260929T121654Z&HW-CC-Expire=31536000000&HW-CC-Sign=79392E22758D433A76901C2785D91829F1ED3A7CB2DE6881B710E0DA0B9E4F89)

## 服务端开发

删除园区卡的场景主要分为如下两个场景：

* **钱包侧触发删除**

  用户在钱包App中手动删除（包括恢复出厂、退出账号等场景）。
* **开发者客户端侧触发删除**

  用户在开发者客户端中手动删除，开发者客户端请求开发者服务器触发删除。

服务端开发参考[园区卡更新](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/wallet-rest-api-park#园区卡数据更新)，采用PATCH方式进行局部更新，请求体如下：

```json
{
  "fields": {
    "status": {
      "state": "expired"
    }
  }
}
```

## 删除成功回调

当园区卡删除成功之后，钱包App携带删除成功回调请求钱包服务器，钱包服务器通过[NFC相关事件回调通知接口](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/wallet-rest-api-public#nfc相关事件回调通知接口)通知开发者服务器。

