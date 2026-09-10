---
name: document/cn/quickApp-References/quickapp-component-label-0000001074615192
title: label
uri: https://developer.huawei.com/consumer/cn/doc/quickApp-References/quickapp-component-label-0000001074615192
---

# label

#### 概述

用于为 \<input\> 、 \<textarea\> 组件定义标注。  

#### 使用限制

|限制条件|说明|
|:---|:-----------|
|适用终端|手机、平板、智慧屏、车机|
|适用区域|全球|

#### 子组件

不支持  

#### 属性

除了支持 [通用属性](https://developer.huawei.com/consumer/cn/doc/development/quickApp-References/quickapp-attributes-0000001170050123) 以外，还支持如下属性。  

|名称|类型|默认值|是否必填|描述|
|:-----|:-----|:--|:---|:-----------|
|target|string|-|否|目标input组件id。|

#### 样式

支持 \<text\> 样式，支持 [通用样式](https://developer.huawei.com/consumer/cn/doc/development/quickApp-References/quickapp-common-styles-0000001170210009) 。  

#### 事件

不支持  

#### 示例代码

```
<template>
  <div class="container">
    <div class="page-title-wrap">
      <text class="page-title">{{componentName}}</text>
    </div>

    <div class="label-item">
      <label>Label tag:</label>
    </div>

    <div class="label-item">
      <label target="input1">input:</label>
      <input class="flex" id="input1" placeholder="please enter" />
    </div>

    <div class="label-item">
      <label target="textarea1">textarea:</label>
      <textarea class="flex textareaPadding" id="textarea1" placeholder="textarea..."></textarea>
    </div>

    <div class="label-item">
      <label target="radio1">radio:</label>
      <input type="radio" id="radio1" />
    </div>

    <div class="label-item">
      <label target="checkbox1">checkbox:</label>
      <input class="flex" type="checkbox" id="checkbox1" />
    </div>
  </div>
</template>

<style>
    .container {
      flex: 1;
      flex-direction: column;
    }
    .page-title-wrap {
      padding-top: 50px;
      padding-bottom: 80px;
      justify-content: center;
    }
    .page-title {
      padding-top: 30px;
      padding-bottom: 30px;
      padding-left: 40px;
      padding-right: 40px;
      border-color: #bbbbbb;
      color: #bbbbbb;
      border-bottom-width: 2px;
    }
    .label-item {
      align-items: center;
      border-bottom-width: 1px;
      border-color: #dddddd;
    }

    label {
      padding: 30px;
      font-size: 35px;
      width: 250px;
    }

    .flex {
      flex: 1;
    }

    .textareaPadding {
      padding-top: 20px;
    }
</style>

<script>
    export default {
        data: {
            componentName: 'label',
            input_value: ''
        },
        onInit() {
            this.$page.setTitleBar({ text: 'label' })
        }
    }
</script>
```

效果图如下：

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20220317173810.42313444019719690773194907803665:50001231000000:2800:05BF2DF43B51DFF0655931D56A4F23E67C9116346311D3E880E1E0C4F0428517.png?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true)
