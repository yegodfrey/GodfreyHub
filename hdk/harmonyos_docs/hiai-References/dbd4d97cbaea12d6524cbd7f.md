---
name: document/cn/hiai-References/settuningstrategy-0000001200273231
title: SetTuningStrategy
uri: https://developer.huawei.com/consumer/cn/doc/hiai-References/settuningstrategy-0000001200273231
---

# SetTuningStrategy

#### 接口定义

```
AIStatus SetTuningStrategy(const TuningStrategy& tuningStrategy);
```

#### 功能介绍

设置模型优化策略。  

#### 参数

|名称|类型|描述|
|:-------------|:---------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------------------------------------------------------------------------|
|tuningStrategy|const [TuningStrategy](https://developer.huawei.com/consumer/cn/doc/hiai-References/tuningstrategy-0000001333619929)\&|输入参数，设置模型优化策略。 ``` enum class TuningStrategy { OFF = 0, ON_DEVICE_TUNING, ON_DEVICE_PREPROCESS_TUNING, ON_CLOUD_TUNING }; ```|

#### 返回

|类型|描述|
|:-------|:-----------------------------|
|AIStatus|* AI_SUCCESS：设置成功。 * 其他值：设置失败。|

