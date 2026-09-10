---
name: document/cn/hiai-References/releasemodelbuff-0000001052968175
title: ReleaseModelBuff
uri: https://developer.huawei.com/consumer/cn/doc/hiai-References/releasemodelbuff-0000001052968175
---

# ReleaseModelBuff

#### 接口定义

```
void ReleaseModelBuff(ModelBufferData& output);
```

#### 功能介绍

在加载、推理或保存模型等不再需要保留该模型Buffer时释放该模型Buffer。  

#### 参数

|名称|输入/输出|类型|描述|
|:-----|:----|:-----------------------------------------------------------------------------------------------------------------|:-------|
|output|输出|[ModelBufferData](https://developer.huawei.com/consumer/cn/doc/hiai-References/modelbufferdata-0000001281245160)\&|模型结构体对象。|

