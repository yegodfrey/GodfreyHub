---
name: document/cn/quickApp-References/quickapp-component-ad-view-0000001330871396
title: ad-view（1101+）
uri: https://developer.huawei.com/consumer/cn/doc/quickApp-References/quickapp-component-ad-view-0000001330871396
---

# ad-view（1101+）

## 概述

广告视图组件，用于创建模板广告的视图。
> 注意
>
> 您必须先调用[ad.createTemplateAd](https://developer.huawei.com/consumer/cn/doc/quickApp-References/quickapp-api-ad-0000001074754667#section755192152412)创建模板广告，并在load成功后才能创建ad-view组件。

## 限制条件

|限制条件|说明|
|:---|:-------|
|适用终端|手机、平板、车机|
|适用区域|全球|

## 子组件

不支持。

## 属性

除了支持 [通用属性](https://developer.huawei.com/consumer/cn/doc/quickApp-References/quickapp-attributes-0000001170050123)以外，还支持如下属性。

|名称|类型|默认值|是否必填|描述|
|:-------|:-----|:--|:---|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|adunitid|string|-|是|模板广告位标识，即调用[ad.createTemplateAd](https://developer.huawei.com/consumer/cn/doc/quickApp-References/quickapp-api-ad-0000001074754667#section755192152412)创建模板广告时传入的广告位标识。 > 说明 > 一个adunitid只能绑定在一个ad-view组件上。|

## 样式

除了支持 [通用样式](https://developer.huawei.com/consumer/cn/doc/quickApp-References/quickapp-common-styles-0000001170210009) 以外，还支持如下样式。
> 注意
>
> 1. 组件中设置的宽高必须与[ad.createTemplateAd](https://developer.huawei.com/consumer/cn/doc/quickApp-References/quickapp-api-ad-0000001074754667#section755192152412)中设置的宽高保持一致。
> 2. 如果一个广告ID关联了多个不同样式的卡片广告，则不建议传入宽高值。
> 3. 该组件必须完整对用户可见，不可被任何元素覆盖或遮挡（含透明元素），否则会影响您的计费。
> 4. 该组件必须完全在屏幕范围内。

|名称|类型|默认值|是否必填|描述|
|:-----|:------------------|:--|:---|:---|
|width|length | percentage|-|否|组件宽度|
|height|length | percentage|-|否|组件高度|

## 事件

除了支持 [通用事件](https://developer.huawei.com/consumer/cn/doc/quickApp-References/quickapp-events-0000001123530338) 以外，还支持如下事件。

|名称|参数|描述|
|:-------------|:-----------------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------|
|click|-|UI组件的点击事件，会先触发本身的广告逻辑如跳转到落地页，启动下载等，然后会触发此事件接口。|
|error|{code:codeInteger,description:descriptionString}|广告渲染失败。|
|render|-|广告渲染成功。|
|close|-|用户点击了广告的关闭按钮，您接收到此事件后需要关闭相关广告显示。|
|downloadStatus|{packageName:packageNameValue,status:statusValue,progress:progressValue}|只有榜单类广告才出现。 * packageName：广告应用包名 * status：下载状态 * 0：未安装 * 1：下载中 * 2：暂停下载 * 3：安装中 * 4：已安装 * 5：安装失败 * 6：下载失败 * 7：下载完成 * progress：下载进度，范围0~100|

## 示例代码

```screen
<template>
  <!-- Only one root node is allowed in template. -->
  <div class="container">
    <div class="item-container">
      <input class="input-text" placeholder="请输入slotId" style="placeholder-color: #FF0000" onchange="setProductIdValue"></input>
      <input class="input-text" placeholder="请输入广告类型" style="placeholder-color: #FF0000" onchange="setAdType"></input>
      <input class="input-text" placeholder="深色模式类型" style="placeholder-color: #FF0000" onchange="setDarkMode"></input>
      <input class="input-text" placeholder="请输入宽度" style="placeholder-color: #FF0000" onchange="setWidth"></input>
      <input class="input-text" placeholder="请输入高度" style="placeholder-color: #FF0000" onchange="setHeight"></input>
      <input class="input-text" placeholder="请输入个性化参数，0或1" style="placeholder-color: #FF0000" onchange="setPersonalizeAd"></input>
      <input type="button" class="btn" value="加载模板广告" onclick="showTemplateAd()" />
      <input type="button" class="btn" value="销毁广告" onclick="destroy" />
      <ad-view if="{{template1.showFlag}}" class="adview" adunitid="{{template1.slotId}}" onClose="close"></ad-view>
      >
    </div>
  </div>
</template>

<style>
    .container {
      flex: 1;
      flex-direction: column;
    }
    .item-container {
      margin-top: 50px;

      flex-direction: column;
    }
    .adview {
    }
    .input-text {
      height: 80px;
      line-height: 80px;
      padding-left: 30px;
      padding-right: 30px;
      margin-left: 30px;
      margin-right: 30px;
      border-top-width: 1px;
      border-bottom-width: 1px;
      border-color: #999999;
      font-size: 30px;
      color: #000000;
    }
    .btn {
      height: 80px;
      text-align: center;
      border-radius: 5px;
      margin-right: 60px;
      margin-left: 60px;
      margin-bottom: 50px;
      color: #ffffff;
      font-size: 30px;
      background-color: #0faeff;
    }
</style>
<script>
    import ad from '@service.ad'
    let templateAd
    export default {
        data: {
            template1: {
                slotId: "VSAtyOJNUj9",
                showFlag: false,
                adType: "infoCard",
                darkMode: '',
                width: 0,
                height: 0,
                personalizedAd: 0
            }
        },
        setProductIdValue: function (e) {
            this.template1.showFlag = false
            this.template1.slotId = e.value
            if (e.value === "") {
                this.template1.slotId = "VSAtyOJNUj9"
            }
        },
        setAdType: function (e) {
            this.template1.adType = e.value
        },
        setDarkMode: function (e) {
            this.template1.darkMode = e.value
        },
        setWidth: function (e) {
            this.template1.width = e.value
        },
        setHeight: function (e) {
            this.template1.height = e.value
        },
        setPersonalizeAd: function (e) {
            this.template1.personalizedAd = e.value
        },
        showTemplateAd() {
            console.log('start = ')
            let temp = this
            temp.template1.showFlag = false
            templateAd = ad.createTemplateAd({
                adUnitId: this.template1.slotId,
                type: this.template1.adType,
                darkMode: this.template1.darkMode,
                width: this.template1.width,
                height: this.template1.height,
                personalizedAd: this.template1.personalizedAd
            })
            templateAd.load({
                success: function (data) {
                    console.log('load success = ' + data)
                    temp.template1.showFlag = true
                },
                fail: function (data, code) {
                    console.log("load fail, code=" + code);
                }
            })

        },
        destroy() {
            templateAd.destroy()
            this.template1.showFlag = false
        },
        close() {
            this.template1.showFlag = false
        }
    }
</script>
```

## 版本更新说明

|版本|发布日期|描述|
|:---|:---------|:-------|
|1101|2022-09-10|第一次正式发布。|

