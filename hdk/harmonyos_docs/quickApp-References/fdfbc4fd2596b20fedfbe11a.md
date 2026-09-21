---
name: document/cn/quickApp-References/quickapp-component-section-group-0000001248689146
title: section-group（1090+）
uri: https://developer.huawei.com/consumer/cn/doc/quickApp-References/quickapp-component-section-group-0000001248689146
---

# section-group（1090+）

## 概述

<section-list>子组件。不支持position。

## 使用限制

|限制条件|说明|
|:---|:-----------|
|适用终端|手机、平板、智慧屏、车机|
|适用区域|全球|

## 子组件

仅支持<section-group>、<section-item>和<section-header>子组件。

<section-group>支持多个<section-item>和<section-group>子组件。<section-group>最多包含一个<section-header>，后面的header均会被忽略。

## 属性

支持[通用属性](https://developer.huawei.com/consumer/cn/doc/development/quickApp-References/quickapp-attributes-0000001170050123)。

## 样式

支持[通用样式](https://developer.huawei.com/consumer/cn/doc/development/quickApp-References/quickapp-common-styles-0000001170210009)。

## 事件

除了支持[通用事件](https://developer.huawei.com/consumer/cn/doc/development/quickApp-References/quickapp-events-0000001123530338)以外，还支持如下事件。

|名称|参数|描述|
|:-----|:-----------|:------------------------------------------------|
|change|{ state: 1 }|section-group展开或折叠。 参数必填，取值如下： * 1（默认值）：折叠 * 2：展开|

## 方法

|名称|参数|描述|
|:-------|:------------------|:------------------------------------------------------------------|
|expand|{ expand: boolean }|展开或折叠section-group。如果父节点已折叠，该方法不生效。 参数必填，取值如下： * true：展开 * false：折叠|
|scrollTo|object|列表滑动到指定位置。|

**scrollTo的参数说明：**

|名称|类型|是否必填|默认值|备注|
|:-------|:-----|:---|:------|:-------------------------------------------------------|
|index|number|是|-|滑动目标位置索引。取值范围即section-group直接子组件的取值范围，不包括section-header。|
|behavior|string|否|instant|是否是平滑滑动或瞬间滑动，取值如下： * smooth：平滑滑动 * instant：瞬间滑动|

## 版本更新说明

|版本|发布日期|描述|
|:---|:---------|:-------|
|1090|2022-05-19|第一次正式发布。|

