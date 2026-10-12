---
name: document/cn/harmonyos-references/js-apis-inner-application-autofillrequest
title: AutoFillRequest
uri: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-autofillrequest
---

# AutoFillRequest

> phone 12+ | 2in1 13+ | tablet 12+ | tv 19+ | wearable 18+

本模块提供自动填充与自动保存场景下的页面请求数据，以及自动填充失败时的返回结果。

**起始版本：** 26.0.0

## 导入模块

> phone | 2in1 | tablet | tv | wearable

```ts
import { autoFillManager } from '@kit.AbilityKit';
```

## FillRequest

> phone 12+ | 2in1 13+ | tablet 12+ | tv 19+ | wearable 18+

自动填充请求信息。

**起始版本：** 26.0.0

**元服务API**：从API版本26.0.0开始，该接口支持在元服务中使用。

**系统能力**：SystemCapability.Ability.AbilityRuntime.AbilityCore

**模型约束**：此接口仅可在Stage模型下使用。

|名称|类型|只读|可选|说明|
|:----------|:-------------------------------------------------------------------------------------------------------------------------------------|:-|:-|:-----------|
|type|[AutoFillType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-autofilltype)|否|否|自动填充类型。|
|viewData|[ViewData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-viewdata)|否|否|页面数据。|
|triggerType|[AutoFillTriggerType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-autofilltriggertype)|否|是|自动填充服务的拉起类型。|

## SaveRequest

> phone 12+ | 2in1 13+ | tablet 12+ | tv 19+ | wearable 18+

自动保存请求信息。

**起始版本：** 26.0.0

**元服务API**：从API版本26.0.0开始，该接口支持在元服务中使用。

**系统能力**：SystemCapability.Ability.AbilityRuntime.AbilityCore

**模型约束**：此接口仅可在Stage模型下使用。

|名称|类型|只读|可选|说明|
|:-------|:---------------------------------------------------------------------------------------------------------------|:-|:-|:----|
|viewData|[ViewData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-viewdata)|否|否|页面数据。|

## FillFailureResult

> phone 26.0.0+ | 2in1 26.0.0+ | tablet 26.0.0+ | tv 26.0.0+ | wearable 26.0.0+

自动填充失败结果。

**起始版本：** 26.0.0

**元服务API**：从API版本26.0.0开始，该接口支持在元服务中使用。

**系统能力**：SystemCapability.Ability.AbilityRuntime.AbilityCore

**模型约束**：此接口仅可在Stage模型下使用。

|名称|类型|只读|可选|说明|
|:------|:-----|:-|:-|:---|
|errCode|number|否|否|错误码。|

