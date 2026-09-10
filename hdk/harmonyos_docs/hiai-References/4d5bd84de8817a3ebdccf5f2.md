---
name: document/cn/hiai-References/setinputaipp-0000001052249422
title: SetInputAippIndex
uri: https://developer.huawei.com/consumer/cn/doc/hiai-References/setinputaipp-0000001052249422
---

# SetInputAippIndex

<br />

#### 接口定义

```
AIStatus SetInputAippIndex(uint32_t inputAippIndex);
```

#### 功能介绍

设置AIPP inputAippIndex参数。  

#### 参数

|名称|类型|描述|
|:-------------|:-------|:------------------------------------------------------------------------------|
|inputAippIndex|uint32_t|用于标识AIPP配置参数在输入Data有多个输出分支时作用于第几个分支，取值需\>=0。动态AIPP多输出场景每个输出都需要设置AIPP参数，并用此接口绑定。|

#### 返回

|类型|描述|
|:-------|:-------------------------|
|AIStatus|* AI_SUCCESS：成功。 * 其他值：失败。|

<br />

