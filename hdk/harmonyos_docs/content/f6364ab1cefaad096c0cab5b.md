---
name: document/cn/content/stepcount-0000001073516665
title: 步数<StepCount>
uri: https://developer.huawei.com/consumer/cn/doc/content/stepcount-0000001073516665
---

# 步数<StepCount>

## 功能概述

步数功能是根据全局变量#steps_value实现的。可以通过Text文本调用全局变量#steps_value显示步数。该功能只在EMUI10.1.0.160及以上版本有效（不同机型支持的版本会有差异），其余版本该变量值为0。当该变量值为0时，建议将步数相关内容设置为不可见。

## 应用场景

* 当天步数达到不同值时，展示不同勋章，比如10000步展示健康达人勋章。
* 当天步数达到不同值时，展示不同海拔高度的风景壁纸。
* 当天步数达到不同值时，展示消耗的卡路里的图片，例如，5000步时展示您已经消耗了一袋薯片的热量。
* 当天步数达到不同阶段值时，展示百合由发芽到绽放的阶段（或果树由树苗到开花结果的过程），即步数是养成计划中的能量。

## 应用示例

**示例一：**使用format、paras显示当前步数。

```screen
<Text x="100" y="1500" format="目前步数是: %d步" paras="#steps_value" size="50" color="#ff000000" visibility="ifelse(#steps_value,1,0)"/>
```

## 制作视频

