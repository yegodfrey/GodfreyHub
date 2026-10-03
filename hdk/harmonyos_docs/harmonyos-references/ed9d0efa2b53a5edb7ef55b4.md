---
name: document/cn/harmonyos-references/js-service-widget-container-stack
title: stack
uri: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-service-widget-container-stack
---

# stack

> phone 12+ | 2in1 13+ | tablet 12+ | tv 19+ | wearable 18+

堆叠容器，子组件按照顺序依次入栈，后一个子组件覆盖前一个子组件。
> 说明
>
> 从API version 8 开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。

## 子组件

支持。

## 属性

支持[通用属性](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-service-widget-common-attributes)。

## 样式

支持[通用样式](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-service-widget-common-styles)。

## 事件

支持[通用事件](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-service-widget-common-events)。

## 示例

```html
<!-- xxx.hml -->
<stack class="stack-parent">
  <div class="back-child bd-radius"></div>
  <div class="positioned-child bd-radius"></div>
  <div class="front-child bd-radius"></div>
</stack>
```

```css
/* xxx.css */
.stack-parent {
  width: 400px;
  height: 400px;
  margin: 50px;
  background-color: #ffffff;
  border-width: 1px;
  border-style: solid;
}
.back-child {
  width: 300px;
  height: 300px;
  background-color: #3f56ea;
}
.front-child {
  width: 100px;
  height: 100px;
  background-color: #00bfc9;
}
.positioned-child {
  width: 100px;
  height: 100px;
  left: 50px;
  top: 50px;
  background-color: #47cc47;
}
.bd-radius {
  border-radius: 16px;
}
```

**4×4卡片**

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/18/v3/yHUm-wfpTpeuUJW-rzVu8w/zh-cn_image_0000002779094489.png?HW-CC-KV=V1&HW-CC-Date=20260929T121737Z&HW-CC-Expire=31536000000&HW-CC-Sign=CAD5BFE7F1AAA4810A8133FE9D68A66616724ABA505110436BDBCB33CFAD453B)

