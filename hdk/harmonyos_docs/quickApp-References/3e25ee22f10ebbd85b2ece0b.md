---
name: document/cn/quickApp-References/quickapp-component-section-list-0000001248848410
title: section-list（1090+）
uri: https://developer.huawei.com/consumer/cn/doc/quickApp-References/quickapp-component-section-list-0000001248848410
---

# section-list（1090+）

#### 概述

分组列表容器。  

#### 使用限制

|限制条件|说明|
|:---|:-----------|
|适用终端|手机、平板、智慧屏、车机|
|适用区域|全球|

#### 子组件

仅支持\<section-group\>和\<section-item\>组件。  

#### 属性

支持[通用属性](https://developer.huawei.com/consumer/cn/doc/development/quickApp-References/quickapp-attributes-0000001170050123)。  

#### 样式

支持[通用样式](https://developer.huawei.com/consumer/cn/doc/development/quickApp-References/quickapp-common-styles-0000001170210009)。  

#### 事件

除了支持[通用事件](https://developer.huawei.com/consumer/cn/doc/development/quickApp-References/quickapp-events-0000001123530338)以外，还支持如下事件。  

|名称|参数|描述|
|:------------|:------------------------------------------------------------------------|:-----------------------------------------------------------------|
|scroll|{ scrollX: scrollXValue, scrollY: scrollYValue, scrollState: stateValue }|列表滑动。 stateValue取值如下: * 0：列表未滑动 * 1：列表正在通过用户的手势滑动 * 2：列表正在滑动，用户已松手|
|scrollend|-|列表滑动结束。|
|scrolltouchup|-|列表滑动过程中，手指抬起。|
|scrolltop|-|列表滑动到顶部。|
|scrollbottom|-|列表滑动到底部。|

#### 方法

|名称|参数|描述|
|:-------|:-----|:---------|
|scrollTo|object|列表滑动到指定位置。|

scrollTo的参数说明：  

|名称|类型|是否必填|默认值|备注|
|:-------|:-----|:---|:------|:----------------------------------------------|
|index|number|是|-|滑动目标位置索引。取值范围即section-list直接子组件的取值范围。|
|behavior|string|否|instant|是否是平滑滑动或瞬间滑动，取值如下： * smooth：平滑滑动 * instant：瞬间滑动|

#### 示例代码

```
<template>
  <div class="wrapper">
    <section-list id="list" class="list" onscroll="scrollListener"
      onscrollbottom="scrollbottomlistener" onscrolltop="scrolltoplistener"
      onscrolltouchup="scrolltouchuplistener" onscrollend="scrollendlistener">

      <section-item class="{{styleFruit}}" for="fruitList">
        <text class="white-text">{{$item}}</text>
      </section-item>

      <section-group id="group-carnivores" expand={{isCarnivoresExpanded}}
        onchange=changeCarnivoresListener>
        <section-header class="header">
          <text class="black-text">Carnivores</text>
        </section-header>
        <section-item class="item-animal" for="carnivores">
          <text class="black-text">{{$item}}</text>
        </section-item>
      </section-group>

      <section-group id="group-herbivores" expand={{isHerbivoresExpanded}}
        onchange=changeHerbivoresListener>
        <section-header class="header">
          <text class="black-text">Herbivores</text>
        </section-header>
        <section-item class="item-animal" for="herbivores">
          <text class="black-text">{{$item}}</text>
        </section-item>
      </section-group>

    </section-list>

    <div class="container-buttons">
      <input type="number" placeholder="Enter index" class="edit-number" value="{{scrollIndex}}" onchange="updateValue"/>
      <input type="button" value="Smooth Scroll" class="button" onclick="smoothScroll"></input>
      <input type="button" value="Instant Scroll" class="button" onclick="instantScroll"></input>
    </div>

    <div class="container-buttons">
      <input type="number" placeholder="Enter index" class="edit-number" value="{{groupScrollIndex}}" onchange="updateGroupValue"/>
      <input type="button" value="Scroll in Carnivores" class="button" onclick="scrollInCarnivores"></input>
      <input type="button" value="Scroll in Herbivores" class="button" onclick="scrollInHerbivores"></input>
    </div>

    <div class="container-buttons">
      <input type="button" value="Expand Carnivores" class="button" onclick="expandCarnivores"></input>
      <input type="button" value="Expand Herbivores" class="button" onclick="expandHerbivores"></input>
    </div>

    <div class="container-buttons">
      <input type="button" value="Add Fruit" class="button" onclick="addFruit"></input>
      <input type="button" value="Remove Fruit" class="button" onclick="removeFruit"></input>
      <input type="button" value="Change Fruit Color" class="button" onclick="changeFruitColor"></input>
    </div>
  </div>
</template>

<script>
export default {
  private: {
    fruitList: ["Plum", "Grapes", "Orange", "Grapefruit", "Peach", "Apricot"],
    fruitsToAdd: ["Apple", "Pear", "Banana", "Grape", "Cranberry", "Kiwi"],
    carnivores: ["Lion", "Shark", "Crocodile", "Wolf"],
    herbivores: ["Sheep", "Tortoise", "Rabbit", "Camel"],
    isCarnivoresExpanded:false,
    isHerbivoresExpanded:false,
    styleFruit:'item-fruit',
    scrollIndex:0,
    groupScrollIndex:0
  },
  scrollListener:function (data) {
    console.log(
      "scrollX: " + data.scrollX +
      "\nscrollY: " + data.scrollY +
      "\nscrollState: " + data.scrollState
    );
  },
  scrollbottomlistener:function () {
    console.log("scrolled till bottom");
  },
  scrolltoplistener:function () {
    console.log("scrolled till top");
  },
  scrolltouchuplistener:function () {
    console.log("user lifted finger while scrolling");
  },
  scrollendlistener:function () {
    console.log("scrolling ended");
  },
  changeCarnivoresListener:function (data) {
    this.isCarnivoresExpanded = data.state === 1 ? false : true
    if (this.isCarnivoresExpanded) {
      console.log('Carnivores are expanded.')
    } else {
      console.log('Carnivores are collapsed.')
    }
  },
  changeHerbivoresListener:function (data) {
    this.isHerbivoresExpanded = data.state === 1 ? false : true
    if (this.isHerbivoresExpanded) {
      console.log('Herbivores are expanded.')
    } else {
      console.log('Herbivores are collapsed.')
    }
  },
  updateValue:function ({value}) {
    this.scrollIndex = Number(value);
  },
  updateGroupValue:function ({value}) {
    this.groupScrollIndex = Number(value);
  },
  smoothScroll() {
    this.$element("list").scrollTo({
      index:this.scrollIndex,
      behavior:"smooth"
    });
  },
  instantScroll() {
    this.$element("list").scrollTo({
      index:this.scrollIndex,
      behavior:"instant"
    });
  },
  scrollInCarnivores() {
    this.$element("group-carnivores").scrollTo({
      index:this.groupScrollIndex,
      behavior:"instant"
    })
  },
  scrollInHerbivores() {
    this.$element("group-herbivores").scrollTo({
      index:this.groupScrollIndex,
      behavior:"smooth"
    })
  },
  expandCarnivores() {
    let that = this
    this.$element("group-carnivores").expand({ expand: !that.isCarnivoresExpanded })
  },
  expandHerbivores() {
    let that = this
    this.$element("group-herbivores").expand({ expand: !that.isHerbivoresExpanded })
  },
  addFruit() {
    var fruit = this.fruitsToAdd[Math.floor(Math.random()*this.fruitsToAdd.length)]
    this.fruitList.push(fruit)
  },
  removeFruit() {
    this.fruitList.pop()
  },
  changeFruitColor() {
    this.styleFruit === 'item-fruit' ? this.styleFruit = 'item-fruit2' : this.styleFruit = 'item-fruit'
  }
}
</script>
<style>
  .wrapper {
    flex-direction: column;
    background-color: #808080;
    justify-content: center;
    align-items: center;
  }
  .list {
    width: 600px;
    height: 800px;
    padding: 8px;
    background-color: #f5deb3;
    border: 4px solid #000000;
    border-radius: 8px;
  }
  .header {
    width: 100%;
    height: 200px;
    justify-content: center;
    align-items: center;
    background-color: #afeeee;
    border: 4px solid #000000;
  }
  .item-fruit {
    width: 100%;
    height: 150px;
    margin-bottom: 4px;
    justify-content: center;
    align-items: center;
    background-color: #000080;
  }
  .item-fruit2 {
    width: 100%;
    height: 150px;
    margin-bottom: 4px;
    justify-content: center;
    align-items: center;
    background-color: #90e0e0;
  }
  .item-animal {
    width: 100%;
    height: 150px;
    justify-content: center;
    align-items: center;
    background-color: #b880b8;
    border: 2px solid #004000;
    border-radius: 8px;
  }
  .container-buttons {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .black-text {
    color: #0f0800;
    font-weight: 500;
    font-size: 32px;
  }
  .white-text {
    color: #f0f8ff;
    font-weight: 500;
    font-size: 32px;
  }
  .edit-number {
    height: 64px;
    text-align: center;
    margin: 4px;
    background-color: #ffd700;
    font-size: 28px;
    font-weight: 500;
  }
  .button {
    width: 30%;
    height: 64px;
    margin: 8px;
    background-color: #ffdead;
    font-size: 24px;
    font-weight: 400;
    color: #000000;
  }
</style>
```

#### 版本更新说明

|版本|发布日期|描述|
|:---|:---------|:-------|
|1090|2022-05-19|第一次正式发布。|

