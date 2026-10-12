---
name: document/cn/harmonyos-references/health-api-healthmodels
title: healthModels (运动健康数据模型)
uri: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthmodels
---

# healthModels (运动健康数据模型)

> phone 5.0.0(12)+ | tablet 5.0.0(12)+ | wearable 5.1.1(19)+

本模块提供运动健康数据模型。

**起始版本：** 5.0.0(12)

## 导入模块

> phone | tablet | wearable

```typescript
import { healthStore } from '@kit.HealthServiceKit';
```

> 说明
>
> 此模块为healthStore子模块，需通过healthStore.healthModels方式使用。

## Adventures

> phone 5.0.0(12)+ | tablet 5.0.0(12)+ | wearable 5.1.1(19)+

type Adventures = healthStore.ExerciseSequence<healthFields.AdventuresSummary, healthFields.AdventuresDetail>

户外探险锻炼记录数据模型。

**系统能力：** SystemCapability.Health.HealthStore

**起始版本：** 5.0.0(12)

**模型约束：** 此接口仅可在Stage模型下使用。

|类型|**说明**|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------|
|[healthStore.ExerciseSequence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#exercisesequence)<[healthFields.AdventuresSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#adventuressummary), [healthFields.AdventuresDetail](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#adventuresdetail)>|户外探险锻炼记录数据模型。|

## Basketball

> phone 5.0.0(12)+ | tablet 5.0.0(12)+ | wearable 5.1.1(19)+

type Basketball = healthStore.ExerciseSequence<healthFields.BasketballSummary, healthFields.BasketballDetail>

篮球锻炼记录数据模型。

**系统能力：** SystemCapability.Health.HealthStore

**起始版本：** 5.0.0(12)

**模型约束：** 此接口仅可在Stage模型下使用。

|类型|**说明**|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
|[healthStore.ExerciseSequence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#exercisesequence)<[healthFields.BasketballSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#basketballsummary), [healthFields.BasketballDetail](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#basketballdetail)>|篮球锻炼记录数据模型。|

## Biathlon

> phone 5.0.0(12)+ | tablet 5.0.0(12)+ | wearable 5.1.1(19)+

type Biathlon = healthStore.ExerciseSequence<healthFields.BiathlonSummary, healthFields.BiathlonDetail>

冬季两项锻炼记录数据模型。

**系统能力：** SystemCapability.Health.HealthStore

**起始版本：** 5.0.0(12)

**模型约束：** 此接口仅可在Stage模型下使用。

|类型|**说明**|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------|
|[healthStore.ExerciseSequence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#exercisesequence)<[healthFields.BiathlonSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#biathlonsummary), [healthFields.BiathlonDetail](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#biathlondetail)>|冬季两项锻炼记录数据模型。|

## BloodOxygenSaturation

> phone 5.0.0(12)+ | tablet 5.0.0(12)+ | wearable 5.1.1(19)+

type BloodOxygenSaturation = healthStore.SamplePoint<healthFields.BloodOxygenSaturation>

血氧采样数据模型。

**系统能力：** SystemCapability.Health.HealthStore

**起始版本：** 5.0.0(12)

**模型约束：** 此接口仅可在Stage模型下使用。

|类型|**说明**|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------|
|[healthStore.SamplePoint](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#samplepoint)<[healthFields.BloodOxygenSaturation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#bloodoxygensaturation)>|血氧采样数据模型。|

## BloodOxygenSaturationAggregateRequest

> phone 5.0.0(12)+ | tablet 5.0.0(12)+ | wearable 5.1.1(19)+

type BloodOxygenSaturationAggregateRequest = healthStore.AggregateRequest<healthFields.BloodOxygenSaturationAggregation>

血氧采样数据聚合统计请求模型。

**系统能力：** SystemCapability.Health.HealthStore

**起始版本：** 5.0.0(12)

**模型约束：** 此接口仅可在Stage模型下使用。

|类型|**说明**|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------|
|[healthStore.AggregateRequest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#aggregaterequest)<[healthFields.BloodOxygenSaturationAggregation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#bloodoxygensaturationaggregation)>|血氧采样数据聚合统计请求模型。|

## BloodOxygenSaturationAggregateResult

> phone 5.0.0(12)+ | tablet 5.0.0(12)+ | wearable 5.1.1(19)+

type BloodOxygenSaturationAggregateResult = healthStore.AggregateResult<healthFields.BloodOxygenSaturationAggregation>

血氧聚合结果数据模型。

**系统能力：** SystemCapability.Health.HealthStore

**起始版本：** 5.0.0(12)

**模型约束：** 此接口仅可在Stage模型下使用。

|类型|**说明**|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
|[healthStore.AggregateResult](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#aggregateresult)<[healthFields.BloodOxygenSaturationAggregation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#bloodoxygensaturationaggregation)>|血氧聚合结果数据模型。|

## BloodPressure

> phone 5.0.0(12)+ | tablet 5.0.0(12)+ | wearable 5.1.1(19)+

type BloodPressure = healthStore.SamplePoint<healthFields.BloodPressure>

血压采样数据模型。

**系统能力：** SystemCapability.Health.HealthStore

**起始版本：** 5.0.0(12)

**模型约束：** 此接口仅可在Stage模型下使用。

|类型|**说明**|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------|
|[healthStore.SamplePoint](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#samplepoint)<[healthFields.BloodPressure](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#bloodpressure)>|血压采样数据模型。|

## Bmx

> phone 5.0.0(12)+ | tablet 5.0.0(12)+ | wearable 5.1.1(19)+

type Bmx = Cycling

BMX自行车锻炼记录数据模型。

**系统能力：** SystemCapability.Health.HealthStore

**起始版本：** 5.0.0(12)

**模型约束：** 此接口仅可在Stage模型下使用。

|类型|**说明**|
|:-------------------------------|:--------------|
|[healthModels.Cycling](#cycling)|BMX自行车锻炼记录数据模型。|

## BodyTemperature

> phone 5.0.0(12)+ | tablet 5.0.0(12)+ | wearable 5.1.1(19)+

type BodyTemperature = healthStore.SamplePoint<healthFields.BodyTemperature>

体温采样数据模型。

**系统能力：** SystemCapability.Health.HealthStore

**起始版本：** 5.0.0(12)

**模型约束：** 此接口仅可在Stage模型下使用。

|类型|**说明**|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------|
|[healthStore.SamplePoint](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#samplepoint)<[healthFields.BodyTemperature](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#bodytemperature)>|体温采样数据模型。|

## BodyTemperatureAggregateRequest

> phone 5.0.0(12)+ | tablet 5.0.0(12)+ | wearable 5.1.1(19)+

type BodyTemperatureAggregateRequest = healthStore.AggregateRequest<healthFields.BodyTemperatureAggregation>

体温采样数据聚合统计请求模型。

**系统能力：** SystemCapability.Health.HealthStore

**起始版本：** 5.0.0(12)

**模型约束：** 此接口仅可在Stage模型下使用。

|类型|**说明**|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------|
|[healthStore.AggregateRequest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#aggregaterequest)<[healthFields.BodyTemperatureAggregation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#bodytemperatureaggregation)>|体温采样数据聚合统计请求模型。|

## BodyTemperatureAggregateResult

> phone 5.0.0(12)+ | tablet 5.0.0(12)+ | wearable 5.1.1(19)+

type BodyTemperatureAggregateResult = healthStore.AggregateResult<healthFields.BodyTemperatureAggregation>

体温聚合结果数据模型。

**系统能力：** SystemCapability.Health.HealthStore

**起始版本：** 5.0.0(12)

**模型约束：** 此接口仅可在Stage模型下使用。

|类型|**说明**|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
|[healthStore.AggregateResult](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#aggregateresult)<[healthFields.BodyTemperatureAggregation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#bodytemperatureaggregation)>|体温聚合结果数据模型。|

## BreathHoldingTest

> phone 5.0.0(12)+ | tablet 5.0.0(12)+ | wearable 5.1.1(19)+

type BreathHoldingTest = healthStore.ExerciseSequence<healthFields.BreathHoldingTestSummary, healthFields.BreathHoldingTestDetail>

闭气测试锻炼记录数据模型。

**系统能力：** SystemCapability.Health.HealthStore

**起始版本：** 5.0.0(12)

**模型约束：** 此接口仅可在Stage模型下使用。

|类型|**说明**|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------|
|[healthStore.ExerciseSequence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#exercisesequence)<[healthFields.BreathHoldingTestSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#breathholdingtestsummary), [healthFields.BreathHoldingTestDetail](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#breathholdingtestdetail)>|闭气测试锻炼记录数据模型。|

## BreathHoldingTrain

> phone 5.0.0(12)+ | tablet 5.0.0(12)+ | wearable 5.1.1(19)+

type BreathHoldingTrain = healthStore.ExerciseSequence<healthFields.BreathHoldingTrainSummary, healthFields.BreathHoldingTrainDetail>

闭气训练锻炼记录数据模型。

**系统能力：** SystemCapability.Health.HealthStore

**起始版本：** 5.0.0(12)

**模型约束：** 此接口仅可在Stage模型下使用。

|类型|**说明**|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------|
|[healthStore.ExerciseSequence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#exercisesequence)<[healthFields.BreathHoldingTrainSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#breathholdingtrainsummary), [healthFields.BreathHoldingTrainDetail](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#breathholdingtraindetail)>|闭气训练锻炼记录数据模型。|

## Cycling

> phone 5.0.0(12)+ | tablet 5.0.0(12)+ | wearable 5.1.1(19)+

type Cycling = healthStore.ExerciseSequence<healthFields.CyclingSummary, healthFields.CyclingDetail>

户外骑行锻炼记录数据模型。

**系统能力：** SystemCapability.Health.HealthStore

**起始版本：** 5.0.0(12)

**模型约束：** 此接口仅可在Stage模型下使用。

|类型|**说明**|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------|
|[healthStore.ExerciseSequence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#exercisesequence)<[healthFields.CyclingSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#cyclingsummary), [healthFields.CyclingDetail](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#cyclingdetail)>|户外骑行锻炼记录数据模型。|

## DailyActivities

> phone 5.0.0(12)+ | tablet 5.0.0(12)+ | wearable 5.1.1(19)+

type DailyActivities = healthStore.SamplePoint<healthFields.DailyActivities>

日常活动采样数据模型。

**系统能力：** SystemCapability.Health.HealthStore

**起始版本：** 5.0.0(12)

**模型约束：** 此接口仅可在Stage模型下使用。

|类型|**说明**|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
|[healthStore.SamplePoint](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#samplepoint)<[healthFields.DailyActivities](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#dailyactivities)>|日常活动采样数据模型。|

## DailyActivitiesAggregateRequest

> phone 5.0.0(12)+ | tablet 5.0.0(12)+ | wearable 5.1.1(19)+

type DailyActivitiesAggregateRequest = healthStore.AggregateRequest<healthFields.DailyActivitiesAggregation>

日常活动采样数据聚合统计请求模型。

**元服务API**：从版本5.0.0(12)开始，该接口支持在元服务中使用。

**系统能力：** SystemCapability.Health.HealthStore

**起始版本：** 5.0.0(12)

**模型约束：** 此接口仅可在Stage模型下使用。

|类型|**说明**|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------|
|[healthStore.AggregateRequest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#aggregaterequest)<[healthFields.DailyActivitiesAggregation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#dailyactivitiesaggregation)>|日常活动采样数据聚合统计请求模型。|

## DailyActivitiesAggregateResult

> phone 5.0.0(12)+ | tablet 5.0.0(12)+ | wearable 5.1.1(19)+

type DailyActivitiesAggregateResult = healthStore.AggregateResult<healthFields.DailyActivitiesAggregation>

日常活动聚合结果数据模型。

**元服务API：** 从版本5.0.0(12)开始，该接口支持在元服务中使用。

**系统能力：** SystemCapability.Health.HealthStore

**起始版本：** 5.0.0(12)

**模型约束：** 此接口仅可在Stage模型下使用。

|类型|**说明**|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------|
|[healthStore.AggregateResult](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#aggregateresult)<[healthFields.DailyActivitiesAggregation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#dailyactivitiesaggregation)>|日常活动聚合结果数据模型。|

## Diving

> phone 5.0.0(12)+ | tablet 5.0.0(12)+ | wearable 5.1.1(19)+

type Diving = healthStore.ExerciseSequence<healthFields.DivingSummary, healthFields.DivingDetail>

自由潜水锻炼记录数据模型。

**系统能力：** SystemCapability.Health.HealthStore

**起始版本：** 5.0.0(12)

**模型约束：** 此接口仅可在Stage模型下使用。

|类型|**说明**|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------|
|[healthStore.ExerciseSequence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#exercisesequence)<[healthFields.DivingSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#divingsummary), [healthFields.DivingDetail](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#divingdetail)>|自由潜水锻炼记录数据模型。|

## Elliptical

> phone 5.0.0(12)+ | tablet 5.0.0(12)+ | wearable 5.1.1(19)+

type Elliptical = healthStore.ExerciseSequence<healthFields.EllipticalSummary, healthFields.EllipticalDetail>

椭圆机锻炼记录数据模型。

**系统能力：** SystemCapability.Health.HealthStore

**起始版本：** 5.0.0(12)

**模型约束：** 此接口仅可在Stage模型下使用。

|类型|**说明**|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------|
|[healthStore.ExerciseSequence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#exercisesequence)<[healthFields.EllipticalSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#ellipticalsummary), [healthFields.EllipticalDetail](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#ellipticaldetail)>|椭圆机锻炼记录数据模型。|

## Emotion

> phone 5.1.0(18)+ | tablet 5.1.0(18)+ | wearable 5.1.1(19)+

type Emotion = healthStore.SamplePoint<healthFields.Emotion>

情绪采样数据模型。

**系统能力：** SystemCapability.Health.HealthStore

**起始版本：** 5.1.0(18)

**模型约束：** 此接口仅可在Stage模型下使用。

|类型|**说明**|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------|
|[healthStore.SamplePoint](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#samplepoint)<[healthFields.Emotion](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#emotion)>|情绪采样数据模型。|

## GolfCourseModel

> phone 5.0.0(12)+ | tablet 5.0.0(12)+ | wearable 5.1.1(19)+

type GolfCourseModel = healthStore.ExerciseSequence<healthFields.GolfCourseModelSummary, healthFields.GolfCourseModelDetail>

高尔夫场地模式锻炼记录数据模型。

**系统能力：** SystemCapability.Health.HealthStore

**起始版本：** 5.0.0(12)

**模型约束：** 此接口仅可在Stage模型下使用。

|类型|**说明**|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------|
|[healthStore.ExerciseSequence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#exercisesequence)<[healthFields.GolfCourseModelSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#golfcoursemodelsummary), [healthFields.GolfCourseModelDetail](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#golfcoursemodeldetail)>|高尔夫场地模式锻炼记录数据模型。|

## GolfPractice

> phone 5.0.0(12)+ | tablet 5.0.0(12)+ | wearable 5.1.1(19)+

type GolfPractice = healthStore.ExerciseSequence<healthFields.GolfPracticeSummary, healthFields.GolfPracticeDetail>

高尔夫练习场模式锻炼记录数据模型。

**系统能力：** SystemCapability.Health.HealthStore

**起始版本：** 5.0.0(12)

**模型约束：** 此接口仅可在Stage模型下使用。

|类型|**说明**|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------|
|[healthStore.ExerciseSequence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#exercisesequence)<[healthFields.GolfPracticeSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#golfpracticesummary), [healthFields.GolfPracticeDetail](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#golfpracticedetail)>|高尔夫练习场模式锻炼记录数据模型。|

## HeartRate

> phone 5.0.0(12)+ | tablet 5.0.0(12)+ | wearable 5.1.1(19)+

type HeartRate = healthStore.SamplePoint<healthFields.HeartRate>

动态心率采样数据模型。

**系统能力：** SystemCapability.Health.HealthStore

**起始版本：** 5.0.0(12)

**模型约束：** 此接口仅可在Stage模型下使用。

|类型|**说明**|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
|[healthStore.SamplePoint](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#samplepoint)<[healthFields.HeartRate](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#heartrate)>|动态心率采样数据模型。|

## HeartRateAggregateRequest

> phone 5.0.0(12)+ | tablet 5.0.0(12)+ | wearable 5.1.1(19)+

type HeartRateAggregateRequest = healthStore.AggregateRequest<healthFields.HeartRateAggregation>

动态心率采样数据聚合统计请求模型。

**系统能力：** SystemCapability.Health.HealthStore

**起始版本：** 5.0.0(12)

**模型约束：** 此接口仅可在Stage模型下使用。

|类型|**说明**|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------|
|[healthStore.AggregateRequest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#aggregaterequest)<[healthFields.HeartRateAggregation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#heartrateaggregation)>|动态心率采样数据聚合统计请求模型。|

## HeartRateAggregateResult

> phone 5.0.0(12)+ | tablet 5.0.0(12)+ | wearable 5.1.1(19)+

type HeartRateAggregateResult = healthStore.AggregateResult<healthFields.HeartRateAggregation>

动态心率聚合结果数据模型。

**系统能力：** SystemCapability.Health.HealthStore

**起始版本：** 5.0.0(12)

**模型约束：** 此接口仅可在Stage模型下使用。

|类型|**说明**|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------|
|[healthStore.AggregateResult](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#aggregateresult)<[healthFields.HeartRateAggregation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#heartrateaggregation)>|动态心率聚合结果数据模型。|

## HeartRateVariability

> phone 5.1.0(18)+ | tablet 5.1.0(18)+ | wearable 5.1.1(19)+

type HeartRateVariability = healthStore.SamplePoint<healthFields.HeartRateVariability>

心率变异性采样数据模型。

**系统能力：** SystemCapability.Health.HealthStore

**起始版本：** 5.1.0(18)

**模型约束：** 此接口仅可在Stage模型下使用。

|类型|**说明**|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------|
|[healthStore.SamplePoint](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#samplepoint)<[healthFields.HeartRateVariability](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#heartratevariability)>|心率变异性采样数据模型。|

## Height

> phone 5.0.0(12)+ | tablet 5.0.0(12)+ | wearable 5.1.1(19)+

type Height = healthStore.SamplePoint<healthFields.Height>

身高采样数据模型。

**系统能力：** SystemCapability.Health.HealthStore

**起始版本：** 5.0.0(12)

**模型约束：** 此接口仅可在Stage模型下使用。

|类型|**说明**|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------|
|[healthStore.SamplePoint](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#samplepoint)<[healthFields.Height](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#height)>|身高采样数据模型。|

## Hiking

> phone 5.0.0(12)+ | tablet 5.0.0(12)+ | wearable 5.1.1(19)+

type Hiking = Walking

徒步锻炼记录数据模型。

**系统能力：** SystemCapability.Health.HealthStore

**起始版本：** 5.0.0(12)

**模型约束：** 此接口仅可在Stage模型下使用。

|类型|**说明**|
|:-------------------------------|:----------|
|[healthModels.Walking](#walking)|徒步锻炼记录数据模型。|

## IndoorCycling

> phone 5.0.0(12)+ | tablet 5.0.0(12)+ | wearable 5.1.1(19)+

type IndoorCycling = Cycling

室内单车锻炼记录数据模型。

**系统能力：** SystemCapability.Health.HealthStore

**起始版本：** 5.0.0(12)

**模型约束：** 此接口仅可在Stage模型下使用。

|类型|**说明**|
|:-------------------------------|:------------|
|[healthModels.Cycling](#cycling)|室内单车锻炼记录数据模型。|

## IndoorRunning

> phone 5.0.0(12)+ | tablet 5.0.0(12)+ | wearable 5.1.1(19)+

type IndoorRunning = Running

室内跑步锻炼记录数据模型。

**系统能力：** SystemCapability.Health.HealthStore

**起始版本：** 5.0.0(12)

**模型约束：** 此接口仅可在Stage模型下使用。

|类型|**说明**|
|:-------------------------------|:------------|
|[healthModels.Running](#running)|室内跑步锻炼记录数据模型。|

## IndoorWalking

> phone 5.0.0(12)+ | tablet 5.0.0(12)+ | wearable 5.1.1(19)+

type IndoorWalking = Walking

室内步行锻炼记录数据模型。

**系统能力：** SystemCapability.Health.HealthStore

**起始版本：** 5.0.0(12)

**模型约束：** 此接口仅可在Stage模型下使用。

|类型|**说明**|
|:-------------------------------|:------------|
|[healthModels.Walking](#walking)|室内步行锻炼记录数据模型。|

## JumpingRope

> phone 5.0.0(12)+ | tablet 5.0.0(12)+ | wearable 5.1.1(19)+

type JumpingRope = healthStore.ExerciseSequence<healthFields.JumpingRopeSummary, healthFields.JumpingRopeDetail>

跳绳锻炼记录数据模型。

**系统能力：** SystemCapability.Health.HealthStore

**起始版本：** 5.0.0(12)

**模型约束：** 此接口仅可在Stage模型下使用。

|类型|**说明**|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
|[healthStore.ExerciseSequence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#exercisesequence)<[healthFields.JumpingRopeSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#jumpingropesummary), [healthFields.JumpingRopeDetail](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#jumpingropedetail)>|跳绳锻炼记录数据模型。|

## MenstrualCycle

> phone 6.1.1(24)+ | tablet 6.1.1(24)+

type MenstrualCycle = healthStore.HealthSequence<healthFields.MenstrualCycle, healthFields.MenstrualCycleDetail>

生理周期健康记录数据模型。

**系统能力：** SystemCapability.Health.HealthStore

**起始版本：** 6.1.1(24)

**模型约束：** 此接口仅可在Stage模型下使用。

|类型|**说明**|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------|
|[healthStore.HealthSequence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#healthsequence)<[healthFields.MenstrualCycle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#menstrualcycle), [healthFields.MenstrualCycleDetail](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#menstrualcycledetail)>|生理周期健康记录数据模型。|

## MountainHike

> phone 5.0.0(12)+ | tablet 5.0.0(12)+ | wearable 5.1.1(19)+

type MountainHike = healthStore.ExerciseSequence<healthFields.MountainHikeSummary, healthFields.MountainHikeDetail>

登山锻炼记录数据模型。

**系统能力：** SystemCapability.Health.HealthStore

**起始版本：** 5.0.0(12)

**模型约束：** 此接口仅可在Stage模型下使用。

|类型|**说明**|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
|[healthStore.ExerciseSequence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#exercisesequence)<[healthFields.MountainHikeSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#mountainhikesummary), [healthFields.MountainHikeDetail](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#mountainhikedetail)>|登山锻炼记录数据模型。|

## OpenWaterSwim

> phone 5.0.0(12)+ | tablet 5.0.0(12)+ | wearable 5.1.1(19)+

type OpenWaterSwim = healthStore.ExerciseSequence<healthFields.OpenWaterSwimSummary, healthFields.OpenWaterSwimDetail>

开放水域游泳锻炼记录数据模型。

**系统能力：** SystemCapability.Health.HealthStore

**起始版本：** 5.0.0(12)

**模型约束：** 此接口仅可在Stage模型下使用。

|类型|**说明**|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------|
|[healthStore.ExerciseSequence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#exercisesequence)<[healthFields.OpenWaterSwimSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#openwaterswimsummary), [healthFields.OpenWaterSwimDetail](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#openwaterswimdetail)>|开放水域游泳锻炼记录数据模型。|

## PoolSwim

> phone 5.0.0(12)+ | tablet 5.0.0(12)+ | wearable 5.1.1(19)+

type PoolSwim = healthStore.ExerciseSequence<healthFields.PoolSwimSummary, healthFields.PoolSwimDetail>

泳池游泳锻炼记录数据模型。

**系统能力：** SystemCapability.Health.HealthStore

**起始版本：** 5.0.0(12)

**模型约束：** 此接口仅可在Stage模型下使用。

|类型|**说明**|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------|
|[healthStore.ExerciseSequence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#exercisesequence)<[healthFields.PoolSwimSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#poolswimsummary), [healthFields.PoolSwimDetail](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#poolswimdetail)>|泳池游泳锻炼记录数据模型。|

## RestingHeartRate

> phone 5.0.0(12)+ | tablet 5.0.0(12)+ | wearable 5.1.1(19)+

type RestingHeartRate = healthStore.SamplePoint<healthFields.RestingHeartRate>

静息心率采样数据模型。

**系统能力：** SystemCapability.Health.HealthStore

**起始版本：** 5.0.0(12)

**模型约束：** 此接口仅可在Stage模型下使用。

|类型|**说明**|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
|[healthStore.SamplePoint](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#samplepoint)<[healthFields.RestingHeartRate](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#restingheartrate)>|静息心率采样数据模型。|

## RestingHeartRateAggregateRequest

> phone 5.0.0(12)+ | tablet 5.0.0(12)+ | wearable 5.1.1(19)+

type RestingHeartRateAggregateRequest = healthStore.AggregateRequest<healthFields.RestingHeartRateAggregation>

静息心率采样数据聚合统计请求模型。

**系统能力：** SystemCapability.Health.HealthStore

**起始版本：** 5.0.0(12)

**模型约束：** 此接口仅可在Stage模型下使用。

|类型|**说明**|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------|
|[healthStore.AggregateRequest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#aggregaterequest)<[healthFields.RestingHeartRateAggregation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#restingheartrateaggregation)>|静息心率采样数据聚合统计请求模型。|

## RestingHeartRateAggregateResult

> phone 5.0.0(12)+ | tablet 5.0.0(12)+ | wearable 5.1.1(19)+

type RestingHeartRateAggregateResult = healthStore.AggregateResult<healthFields.RestingHeartRateAggregation>

静息心率聚合结果数据模型。

**系统能力：** SystemCapability.Health.HealthStore

**起始版本：** 5.0.0(12)

**模型约束：** 此接口仅可在Stage模型下使用。

|类型|**说明**|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------|
|[healthStore.AggregateResult](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#aggregateresult)<[healthFields.RestingHeartRateAggregation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#restingheartrateaggregation)>|静息心率聚合结果数据模型。|

## Rower

> phone 5.0.0(12)+ | tablet 5.0.0(12)+ | wearable 5.1.1(19)+

type Rower = healthStore.ExerciseSequence<healthFields.RowerSummary, healthFields.RowerDetail>

划船机锻炼记录数据模型。

**系统能力：** SystemCapability.Health.HealthStore

**起始版本：** 5.0.0(12)

**模型约束：** 此接口仅可在Stage模型下使用。

|类型|**说明**|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------|
|[healthStore.ExerciseSequence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#exercisesequence)<[healthFields.RowerSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#rowersummary), [healthFields.RowerDetail](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#rowerdetail)>|划船机锻炼记录数据模型。|

## Rowing

> phone 5.0.0(12)+ | tablet 5.0.0(12)+ | wearable 5.1.1(19)+

type Rowing = healthStore.ExerciseSequence<healthFields.RowingSummary, healthFields.RowingDetail>

赛艇锻炼记录数据模型。

**系统能力：** SystemCapability.Health.HealthStore

**起始版本：** 5.0.0(12)

**模型约束：** 此接口仅可在Stage模型下使用。

|类型|**说明**|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
|[healthStore.ExerciseSequence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#exercisesequence)<[healthFields.RowingSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#rowingsummary), [healthFields.RowingDetail](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#rowingdetail)>|赛艇锻炼记录数据模型。|

## Running

> phone 5.0.0(12)+ | tablet 5.0.0(12)+ | wearable 5.1.1(19)+

type Running = healthStore.ExerciseSequence<healthFields.RunningSummary, healthFields.RunningDetail>

户外跑步锻炼记录数据模型。

**系统能力：** SystemCapability.Health.HealthStore

**起始版本：** 5.0.0(12)

**模型约束：** 此接口仅可在Stage模型下使用。

|类型|**说明**|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------|
|[healthStore.ExerciseSequence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#exercisesequence)<[healthFields.RunningSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#runningsummary), [healthFields.RunningDetail](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#runningdetail)>|户外跑步锻炼记录数据模型。|

## ScubaDiving

> phone 5.0.0(12)+ | tablet 5.0.0(12)+ | wearable 5.1.1(19)+

type ScubaDiving = healthStore.ExerciseSequence<healthFields.ScubaDivingSummary, healthFields.ScubaDivingDetail>

水肺潜水锻炼记录数据模型。

**系统能力：** SystemCapability.Health.HealthStore

**起始版本：** 5.0.0(12)

**模型约束：** 此接口仅可在Stage模型下使用。

|类型|**说明**|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------|
|[healthStore.ExerciseSequence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#exercisesequence)<[healthFields.ScubaDivingSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#scubadivingsummary), [healthFields.ScubaDivingDetail](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#scubadivingdetail)>|水肺潜水锻炼记录数据模型。|

## Skiing

> phone 5.0.0(12)+ | tablet 5.0.0(12)+ | wearable 5.1.1(19)+

type Skiing = healthStore.ExerciseSequence<healthFields.SkiingSummary, healthFields.SkiingDetail>

滑雪锻炼记录数据模型。

**系统能力：** SystemCapability.Health.HealthStore

**起始版本：** 5.0.0(12)

**模型约束：** 此接口仅可在Stage模型下使用。

|类型|**说明**|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
|[healthStore.ExerciseSequence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#exercisesequence)<[healthFields.SkiingSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#skiingsummary), [healthFields.SkiingDetail](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#skiingdetail)>|滑雪锻炼记录数据模型。|

## SkinTemperature

> phone 5.0.0(12)+ | tablet 5.0.0(12)+ | wearable 5.1.1(19)+

type SkinTemperature = healthStore.SamplePoint<healthFields.SkinTemperature>

皮肤体温采样数据模型。

**系统能力：** SystemCapability.Health.HealthStore

**起始版本：** 5.0.0(12)

**模型约束：** 此接口仅可在Stage模型下使用。

|类型|**说明**|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
|[healthStore.SamplePoint](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#samplepoint)<[healthFields.SkinTemperature](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#skintemperature)>|皮肤体温采样数据模型。|

## SkinTemperatureAggregateRequest

> phone 5.0.0(12)+ | tablet 5.0.0(12)+ | wearable 5.1.1(19)+

type SkinTemperatureAggregateRequest = healthStore.AggregateRequest<healthFields.SkinTemperatureAggregation>

皮肤体温采样数据聚合统计请求模型。

**系统能力：** SystemCapability.Health.HealthStore

**起始版本：** 5.0.0(12)

**模型约束：** 此接口仅可在Stage模型下使用。

|类型|**说明**|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------|
|[healthStore.AggregateRequest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#aggregaterequest)<[healthFields.SkinTemperatureAggregation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#skintemperatureaggregation)>|皮肤体温采样数据聚合统计请求模型。|

## SkinTemperatureAggregateResult

> phone 5.0.0(12)+ | tablet 5.0.0(12)+ | wearable 5.1.1(19)+

type SkinTemperatureAggregateResult = healthStore.AggregateResult<healthFields.SkinTemperatureAggregation>

皮肤体温聚合结果数据模型。

**系统能力：** SystemCapability.Health.HealthStore

**起始版本：** 5.0.0(12)

**模型约束：** 此接口仅可在Stage模型下使用。

|类型|**说明**|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------|
|[healthStore.AggregateResult](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#aggregateresult)<[healthFields.SkinTemperatureAggregation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#skintemperatureaggregation)>|皮肤体温聚合结果数据模型。|

## Sled

> phone 5.0.0(12)+ | tablet 5.0.0(12)+ | wearable 5.1.1(19)+

type Sled = healthStore.ExerciseSequence<healthFields.SledSummary, healthFields.SledDetail>

滑雪橇锻炼记录数据模型。

**系统能力：** SystemCapability.Health.HealthStore

**起始版本：** 5.0.0(12)

**模型约束：** 此接口仅可在Stage模型下使用。

|类型|**说明**|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------|
|[healthStore.ExerciseSequence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#exercisesequence)<[healthFields.SledSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#sledsummary), [healthFields.SledDetail](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#sleddetail)>|滑雪橇锻炼记录数据模型。|

## SleepNapRecord

> phone 5.0.0(12)+ | tablet 5.0.0(12)+ | wearable 5.1.1(19)+

type SleepNapRecord = healthStore.HealthSequence<healthFields.SleepNap, healthFields.SleepDetail>

零星小睡健康记录数据模型。

**系统能力：** SystemCapability.Health.HealthStore

**起始版本：** 5.0.0(12)

**模型约束：** 此接口仅可在Stage模型下使用。

|类型|**说明**|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------|
|[healthStore.HealthSequence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#healthsequence)<[healthFields.SleepNap](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#sleepnap), [healthFields.SleepDetail](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#sleepdetail)>|零星小睡健康记录数据模型。|

## SleepRecord

> phone 5.0.0(12)+ | tablet 5.0.0(12)+ | wearable 5.1.1(19)+

type SleepRecord = healthStore.HealthSequence<healthFields.Sleep, healthFields.SleepDetail>

夜间睡眠健康记录数据模型。

**系统能力：** SystemCapability.Health.HealthStore

**起始版本：** 5.0.0(12)

**模型约束：** 此接口仅可在Stage模型下使用。

|类型|**说明**|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------|
|[healthStore.HealthSequence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#healthsequence)<[healthFields.Sleep](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#sleep), [healthFields.SleepDetail](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#sleepdetail)>|夜间睡眠健康记录数据模型。|

## Snowboarding

> phone 5.0.0(12)+ | tablet 5.0.0(12)+ | wearable 5.1.1(19)+

type Snowboarding = healthStore.ExerciseSequence<healthFields.SnowboardingSummary, healthFields.SnowboardingDetail>

单板滑雪锻炼记录数据模型。

**系统能力：** SystemCapability.Health.HealthStore

**起始版本：** 5.0.0(12)

**模型约束：** 此接口仅可在Stage模型下使用。

|类型|**说明**|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------|
|[healthStore.ExerciseSequence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#exercisesequence)<[healthFields.SnowboardingSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#snowboardingsummary), [healthFields.SnowboardingDetail](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#snowboardingdetail)>|单板滑雪锻炼记录数据模型。|

## Spinning

> phone 5.0.0(12)+ | tablet 5.0.0(12)+ | wearable 5.1.1(19)+

type Spinning = Cycling

动感单车锻炼记录数据模型。

**系统能力：** SystemCapability.Health.HealthStore

**起始版本：** 5.0.0(12)

**模型约束：** 此接口仅可在Stage模型下使用。

|类型|**说明**|
|:-------------------------------|:------------|
|[healthModels.Cycling](#cycling)|动感单车锻炼记录数据模型。|

## Sports

> phone 5.0.0(12)+ | tablet 5.0.0(12)+ | wearable 5.1.1(19)+

type Sports = healthStore.ExerciseSequence<healthFields.SportsSummary, healthFields.SportsDetail>

通用锻炼记录数据模型。

**系统能力：** SystemCapability.Health.HealthStore

**起始版本：** 5.0.0(12)

**模型约束：** 此接口仅可在Stage模型下使用。

|类型|**说明**|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
|[healthStore.ExerciseSequence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#exercisesequence)<[healthFields.SportsSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#sportssummary), [healthFields.SportsDetail](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#sportsdetail)>|通用锻炼记录数据模型。|

## Stress

> phone 5.0.0(12)+ | tablet 5.0.0(12)+ | wearable 5.1.1(19)+

type Stress = healthStore.SamplePoint<healthFields.Stress>

压力采样数据模型。

**系统能力：** SystemCapability.Health.HealthStore

**起始版本：** 5.0.0(12)

**模型约束：** 此接口仅可在Stage模型下使用。

|类型|**说明**|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------|
|[healthStore.SamplePoint](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#samplepoint)<[healthFields.Stress](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#stress)>|压力采样数据模型。|

## StressAggregateRequest

> phone 5.0.0(12)+ | tablet 5.0.0(12)+ | wearable 5.1.1(19)+

type StressAggregateRequest = healthStore.AggregateRequest<healthFields.StressAggregation>

压力采样数据聚合统计请求模型。

**系统能力：** SystemCapability.Health.HealthStore

**起始版本：** 5.0.0(12)

**模型约束：** 此接口仅可在Stage模型下使用。

|类型|**说明**|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------|
|[healthStore.AggregateRequest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#aggregaterequest)<[healthFields.StressAggregation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#stressaggregation)>|压力采样数据聚合统计请求模型。|

## StressAggregateResult

> phone 5.0.0(12)+ | tablet 5.0.0(12)+ | wearable 5.1.1(19)+

type StressAggregateResult = healthStore.AggregateResult<healthFields.StressAggregation>

压力聚合结果数据模型。

**系统能力：** SystemCapability.Health.HealthStore

**起始版本：** 5.0.0(12)

**模型约束：** 此接口仅可在Stage模型下使用。

|类型|**说明**|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
|[healthStore.AggregateResult](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#aggregateresult)<[healthFields.StressAggregation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#stressaggregation)>|压力聚合结果数据模型。|

## TrailRunning

> phone 5.0.0(12)+ | tablet 5.0.0(12)+ | wearable 5.1.1(19)+

type TrailRunning = Running

越野跑锻炼记录数据模型。

**系统能力：** SystemCapability.Health.HealthStore

**起始版本：** 5.0.0(12)

**模型约束：** 此接口仅可在Stage模型下使用。

|类型|**说明**|
|:-------------------------------|:-----------|
|[healthModels.Running](#running)|越野跑锻炼记录数据模型。|

## Walking

> phone 5.0.0(12)+ | tablet 5.0.0(12)+ | wearable 5.1.1(19)+

type Walking = healthStore.ExerciseSequence<healthFields.WalkingSummary, healthFields.WalkingDetail>

户外步行锻炼记录数据模型。

**系统能力：** SystemCapability.Health.HealthStore

**起始版本：** 5.0.0(12)

**模型约束：** 此接口仅可在Stage模型下使用。

|类型|**说明**|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------|
|[healthStore.ExerciseSequence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#exercisesequence)<[healthFields.WalkingSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#walkingsummary), [healthFields.WalkingDetail](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#walkingdetail)>|户外步行锻炼数据模型记录。|

## Weight

> phone 5.0.0(12)+ | tablet 5.0.0(12)+ | wearable 5.1.1(19)+

type Weight = healthStore.SamplePoint<healthFields.Weight>

体重采样数据模型。

**系统能力：** SystemCapability.Health.HealthStore

**起始版本：** 5.0.0(12)

**模型约束：** 此接口仅可在Stage模型下使用。

|类型|**说明**|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------|
|[healthStore.SamplePoint](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#samplepoint)<[healthFields.Weight](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#weight)>|体重采样数据模型。|

