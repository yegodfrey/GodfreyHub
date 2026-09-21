---
name: document/cn/hiai-References/load-0000001051490688
title: Load
uri: https://developer.huawei.com/consumer/cn/doc/hiai-References/load-0000001051490688
---

# Load

## 接口定义

```screen
AIStatus Load(std::vector<std::shared_ptr<AiModelDescription>>& pmodelDesc);
```

## 功能介绍

加载模型。

## 参数

|名称|类型|描述|
|:---------|:--------------------------------------|:-------------------------|
|pmodelDesc|vector<shared_ptr<AiModelDescription>>&|模型描述信息数组，可输入多个模型，模型名称不能重复。|

## 返回

|类型|描述|
|:-------|:----------------------------|
|AIStatus|* AI_SUCCESS：成功。 * Others：失败。|

