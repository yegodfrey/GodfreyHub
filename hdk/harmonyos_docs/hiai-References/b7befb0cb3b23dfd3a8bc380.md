---
name: document/cn/hiai-References/unloadmodel-0000001052809443
title: UnLoadModel
uri: https://developer.huawei.com/consumer/cn/doc/hiai-References/unloadmodel-0000001052809443
---

# UnLoadModel

#### 接口定义

```
AIStatus UnLoadModel();
```

#### 功能介绍

卸载模型。  

#### 返回

|类型|描述|
|:-------|:----------------------------|
|AIStatus|* AI_SUCCESS：成功。 * Others：失败。|

![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260104150634.58893033777402336763586718188074:50001231000000:2800:F2D4AD7CAF45AFCF2001D506394076D5DDB2F2FE8C66132AF701133B78C0C686.png)  
* 该接口可以释放模型加载相关内存，建议与Load配套使用。
* 重复调用Load，不用UnLoadModel会导致内存大量占用。  
