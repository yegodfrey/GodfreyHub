---
name: document/cn/hiai-References/unloadmodel-0000001052809443
title: UnLoadModel
uri: https://developer.huawei.com/consumer/cn/doc/hiai-References/unloadmodel-0000001052809443
---

# UnLoadModel

## 接口定义

```screen
AIStatus UnLoadModel();
```

## 功能介绍

卸载模型。

## 返回

|类型|描述|
|:-------|:----------------------------|
|AIStatus|* AI_SUCCESS：成功。 * Others：失败。|

> 说明
>
> * 该接口可以释放模型加载相关内存，建议与Load配套使用。
> * 重复调用Load，不用UnLoadModel会导致内存大量占用。

