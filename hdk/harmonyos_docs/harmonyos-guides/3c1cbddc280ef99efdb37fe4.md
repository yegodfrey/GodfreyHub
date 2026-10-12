---
name: document/cn/harmonyos-guides/wallet-park-scene-delete
title: 删除园区卡
uri: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/wallet-park-scene-delete
---

# 删除园区卡

用户主动删除，将园区卡从钱包中移除。

## 交互流程

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/32/v3/AmgAjyraRf2w1M9LBdpaTg/zh-cn_image_0000002784663983.png?HW-CC-KV=V1&HW-CC-Date=20261009T092712Z&HW-CC-Expire=31536000000&HW-CC-Sign=ABF79752A7CB5B0B10F4E72D7382A7D5A901F55E2BDE5435D1EA64B07AECA54D)

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

