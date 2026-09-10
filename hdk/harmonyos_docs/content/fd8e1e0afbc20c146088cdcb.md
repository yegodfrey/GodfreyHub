---
name: document/cn/content/scenario_intentcommand-0000002550844196
title: 命令：场景感知跳转命令<ScenarioIntentCommand>
uri: https://developer.huawei.com/consumer/cn/doc/content/scenario_intentcommand-0000002550844196
---

# 命令：场景感知跳转命令\<ScenarioIntentCommand\>

#### 功能概述

配合[场景感知数据开放\<Scenarios\>](https://developer.huawei.com/consumer/cn/doc/content/scenarios-0000002581443929)标签使用，配置Scenarios标签后，若需要基于Scenarios推荐的场景结果，实现应用或元服务跳转功能，则需要配套使用此标签。  

#### 支持范围

起始规范版本：HarmonyOS 6.1

是否平台特性：否  

| |锁屏（Lockscreen）|桌面（Wallpaper）|一镜到底（LongTake）|百变卡片（Widget）|充电动效（ChargingSkin）|
|:---|:------------:|:-----------:|:------------:|:----------:|:----------------:|
|是否支持|√|x|√|x|x|
[表1 支持根标签]

| |直板机|折叠屏|平板|
|:---|:-:|:-:|:-:|
|是否支持|√|√|√|
[表2 支持设备类型]

#### XML规范

```
<ScenarioIntentCommand category="" condition="" delay="" delayCondition=""/>
```

#### 参数说明

|--------------|------|--|-----------------------------------------------------------------------|
|参数|类型|选项|注释|
|category|string|必填|跳转的服务分类ID。防止用户自定义跳转链接导致打点信息不准。|
|condition|number|可选|条件判断，支持数字表达式。当condition里的条件判断为非0或者为true时，该命令执行，为false或者0则不执行|
|delay|number|可选|延迟，以毫秒记。延迟delay毫秒后执行该命令|
|delayCondition|number|可选|延迟判断，支持数字表达式。为真则delay命令生效，否则失效。默认为true或者1时，表示可以延迟启动命令，如果false或者非1则不延迟执行|

#### 应用示例

参考[场景感知数据开放\<Scenarios\>](https://developer.huawei.com/consumer/cn/doc/content/scenarios-0000002581443929)中的应用示例。  
