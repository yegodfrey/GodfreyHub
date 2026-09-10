---
name: document/cn/HMSCore-References/adsappbutton-0000001179473261
title: AdsAppButton
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-References/adsappbutton-0000001179473261
---

# AdsAppButton

#### 概述

原生广告应用下载组件。  

#### 参数

|参数|类型|描述|
|:-----|:------|:----------------------------------------------|
|size|String|下载按钮的尺寸类型。 * large * normal * small 默认值：normal。|
|round|boolean|下载按钮是否圆角。 * true：是圆角 * false：不是圆角 默认值：false。|
|width|number|自定义下载按钮宽度，单位：px。|
|height|number|自定义下载按钮高度，单位：px。|

#### 事件

|事件|描述|用法|说明|
|:------|:-------|:---------------------------------------------------------|:-------------------------------------------------|
|appOpen|打开应用时触发。|``` adsAppButton.addEventListener('appOpen', callback) ```|callback函数的参数：event:CustomEvent,event.detail:应用包名。|

