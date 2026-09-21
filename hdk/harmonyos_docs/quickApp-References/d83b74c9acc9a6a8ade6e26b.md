---
name: document/cn/quickApp-References/quickapp-component-canvas-0000001074404806
title: canvas
uri: https://developer.huawei.com/consumer/cn/doc/quickApp-References/quickapp-component-canvas-0000001074404806
---

# canvas

## 概述

定义一个画布，在画布上可以绘制图形或图片。

## 限制条件

|限制条件|说明|
|:---|:-------|
|适用终端|手机、平板、车机|
|适用区域|全球|

## 子组件

不支持。

## 属性

除了支持 [通用属性](https://developer.huawei.com/consumer/cn/doc/quickApp-References/quickapp-attributes-0000001170050123) 以外，还支持如下属性。

|属性|类型|默认值|描述|
|:-------------|:------|:----|:------------------------------------------------------------------------|
|id|string|-|必填项，组件的唯一标识符。 > 注意 > 同一页面中的id不可重复，如果使用一个已经使用的id，该canvas对应的画布将被隐藏，并不再正常工作。|
|disable-scroll|boolean|false|当在canvas中移动，且有绑定手势事件时，禁止屏幕滚动以及下拉刷新。|

## 样式

支持 [通用样式](https://developer.huawei.com/consumer/cn/doc/quickApp-References/quickapp-common-styles-0000001170210009) 。

## 事件

除了支持 [通用事件](https://developer.huawei.com/consumer/cn/doc/quickApp-References/quickapp-events-0000001123530338) 以外，还支持如下事件。

|名称|参数|描述|
|:------|:-|:----------------------------------------------------|
|longtap|-|手指长按500ms之后触发，触发长按事件后进行移动，不会触发屏幕的滚动。|
|error|-|当发生错误时触发error事件，detail = {errMsg: 'something wrong'}。|

## 示例代码

```screen
<template>
  <!-- There can only be one root node in the template -->
  <div class="container">
    <text class="text2"> {{message}}</text>
      <image src="/Common/logo.png" id="image" style="margin-top:20px;"></image>
    <canvas id="1Canvas" style="background-color:#FFFF00; margin-top:20px;margin-top:20px;width: 500px; height:200px;" onlongtap="longtapfun"
      ontouchmove="touchmove" ontouchstart="touchstart"></canvas>
    <input class="buttons" type="button" onclick="click1" value="drawfillStyleforColor"></input>

    <canvas id="2Canvas" style="background-color:#FFFF00; margin-top:20px; width: 500px; height:200px;"
      disable-scroll="true" onlongtap="longtapfun" onerror="errorfun"></canvas>
    <input class="buttons" type="button" onclick="click2" value="drawfillStyleforLinearGradient"></input>

    <canvas id="3Canvas" style="background-color:#FFFF00; margin-top:20px;width: 500px; height:200px;"
      onlongtap="longtapfun"></canvas>
    <input class="buttons" type="button" onclick="click3" value="drawfillStyleforcreatePattern"></input>

    <canvas id="4Canvas" style="background-color:#FFFF00; margin-top:20px;width: 500px; height:200px;"
      disable-scroll="true"></canvas>
    <input class="buttons" type="button" onclick="click4" value="drawstrokeStyleforColor"></input>

    <canvas id="5Canvas" style="background-color:#FFFF00; margin-top:20px;width: 500px; height:200px;"></canvas>
    <input class="buttons" type="button" onclick="click5" value="drawstrokeStyleforLinearGradient"></input>
    <canvas id="6Canvas" style="background-color:#FFFF00; margin-top:20px;width: 500px; height:200px;"></canvas>
    <input class="buttons" type="button" onclick="click6" value="drawShadow"></input>
    <canvas id="7Canvas" style="background-color:#FFFF00; margin-top:20px;width: 500px; height:200px;"></canvas>
    <input class="buttons" type="button" onclick="click7" value="drawlineCap"></input>
    <canvas id="8Canvas" style="background-color:#FFFF00; margin-top:20px;width: 500px; height:200px;"></canvas>
    <input class="buttons" type="button" onclick="click8" value="drawlineJoin"></input>
    <canvas id="9Canvas" style="background-color:#FFFF00; margin-top:20px;width: 500px; height:200px;"></canvas>
    <input class="buttons" type="button" onclick="click9" value="drawlineWidth"></input>
    <canvas id="10Canvas" style="background-color:#FFFF00; margin-top:20px;width: 500px; height:200px;"></canvas>
    <input class="buttons" type="button" onclick="click10" value="drawmiterLimit"></input>
    <canvas id="11Canvas" style="background-color:#FFFF00; margin-top:20px;width: 500px; height:200px;"></canvas>
    <input class="buttons" type="button" onclick="click11" value="drawrect"></input>
    <canvas id="12Canvas" style="background-color:#FFFF00; margin-top:20px;width: 500px; height:200px;"></canvas>
    <input class="buttons" type="button" onclick="click12" value="drawfillRect"></input>
    <canvas id="13Canvas" style="background-color:#FFFF00; margin-top:20px;width: 500px; height:200px;"></canvas>
    <input class="buttons" type="button" onclick="click13" value="drawstrokeRect"></input>
    <canvas id="14Canvas" style="background-color:#FFFF00; margin-top:20px;width: 500px; height:200px;"></canvas>
    <input class="buttons" type="button" onclick="click14" value="drawclearRect"></input>
    <canvas id="15Canvas" style="background-color:#FFFF00; margin-top:20px;width: 500px; height:200px;"></canvas>
    <input class="buttons" type="button" onclick="click15" value="drawfill"></input>
    <canvas id="16Canvas" style="background-color:#FFFF00; margin-top:20px;width: 500px; height:200px;"></canvas>
    <input class="buttons" type="button" onclick="click16" value="drawstroke"></input>
    <canvas id="17Canvas" style="background-color:#FFFF00; margin-top:20px;width: 500px; height:200px;"></canvas>
    <input class="buttons" type="button" onclick="click17" value="drawbeginPath"></input>
    <canvas id="18Canvas" style="background-color:#FFFF00; margin-top:20px;width: 500px; height:200px;"></canvas>
    <input class="buttons" type="button" onclick="click18" value="drawmoveTo"></input>
    <canvas id="19Canvas" style="background-color:#FFFF00; margin-top:20px;width: 500px; height:200px;"></canvas>
    <input class="buttons" type="button" onclick="click19" value="drawclosePath"></input>
    <canvas id="20Canvas" style="background-color:#FFFF00; margin-top:20px;width: 500px; height:200px;"></canvas>
    <input class="buttons" type="button" onclick="click20" value="drawlineTo"></input>
    <canvas id="21Canvas" style="background-color:#FFFF00; margin-top:20px;width: 500px; height:200px;"></canvas>
    <input class="buttons" type="button" onclick="click21" value="drawclip"></input>
    <canvas id="22Canvas" style="background-color:#FFFF00; margin-top:20px;width: 500px; height:200px;"></canvas>
    <input class="buttons" type="button" onclick="click22" value="drawquadraticCurveTo"></input>
    <canvas id="23Canvas" style="background-color:#FFFF00; margin-top:20px;width: 500px; height:200px;"></canvas>
    <input class="buttons" type="button" onclick="click23" value="drawbezierCurveTo"></input>
    <canvas id="24Canvas" style="background-color:#FFFF00; margin-top:20px;width: 500px; height:200px;"></canvas>
    <input class="buttons" type="button" onclick="click24" value="drawarc"></input>
    <canvas id="25Canvas" style="background-color:#FFFF00; margin-top:20px;width: 500px; height:200px;"></canvas>
    <input class="buttons" type="button" onclick="click25" value="drawarcTo"></input>
    <canvas id="26Canvas" style="background-color:#FFFF00; margin-top:20px;width: 500px; height:200px;"></canvas>
    <input class="buttons" type="button" onclick="click26" value="drawscale"></input>
    <canvas id="28Canvas" style="background-color:#FFFF00; margin-top:20px;width: 500px; height:200px;"></canvas>
    <input class="buttons" type="button" onclick="click28" value="drawtranslate"></input>
    <canvas id="29Canvas" style="background-color:#FFFF00; margin-top:20px;width: 500px; height:200px;"></canvas>
    <input class="buttons" type="button" onclick="click29" value="drawtransform"></input>
    <canvas id="30Canvas" style="background-color:#FFFF00; margin-top:20px;width: 500px; height:200px;"></canvas>
    <input class="buttons" type="button" onclick="click30" value="drawsetTransform"></input>
    <canvas id="31Canvas" style="background-color:#FFFF00; margin-top:20px;width: 500px; height:200px;"></canvas>
    <input class="buttons" type="button" onclick="click31" value="drawfont"></input>
    <canvas id="32Canvas" style="background-color:#FFFF00; margin-top:20px;width: 500px; height:200px;"></canvas>
    <input class="buttons" type="button" onclick="click32" value="drawtextAlign"></input>
    <canvas id="33Canvas" style="background-color:#FFFF00; margin-top:20px;width: 500px; height:200px;"></canvas>
    <input class="buttons" type="button" onclick="click33" value="drawtextBaseline"></input>
    <canvas id="34Canvas" style="background-color:#FFFF00; margin-top:20px;width: 500px; height:200px;"></canvas>
    <input class="buttons" type="button" onclick="click34" value="drawfillText"></input>
    <canvas id="35Canvas" style="background-color:#FFFF00; margin-top:20px;width: 500px; height:200px;"></canvas>
    <input class="buttons" type="button" onclick="click35" value="drawstrokeText"></input>
    <canvas id="36Canvas" style="background-color:#FFFF00; margin-top:20px;width: 500px; height:200px;"></canvas>
    <input class="buttons" type="button" onclick="click36" value="drawmeasureText"></input>
    <canvas id="37Canvas" style="background-color:#FFFF00; margin-top:20px;width: 500px; height:200px;"></canvas>
    <input class="buttons" type="button" onclick="click37" value="drawdrawImage"></input>
    <canvas id="38Canvas" style="background-color:#FFFF00; margin-top:20px;width: 500px; height:200px;"></canvas>
    <input class="buttons" type="button" onclick="click38" value="drawcreateImageData"></input>
    <canvas id="39Canvas" style="background-color:#FFFF00; margin-top:20px;width: 500px; height:200px;"></canvas>
    <input class="buttons" type="button" onclick="click39" value="drawgetImageData"></input>
    <canvas id="40Canvas" style="background-color:#FFFF00; margin-top:20px;width: 500px; height:200px;"></canvas>
    <input class="buttons" type="button" onclick="click40" value="drawglobalAlpha"></input>
    <canvas id="41Canvas" style="background-color:#FFFF00; margin-top:20px;width: 500px; height:200px;"></canvas>
    <input class="buttons" type="button" onclick="click41" value="drawglobalCompositeOperation"></input>
    <canvas id="27Canvas" style="background-color:#FFFF00; margin-top:20px;width: 500px; height:200px;"></canvas>
    <input class="buttons" type="button" onclick="click27" value="drawrotate"></input>
    <canvas id="42Canvas" style="background-color:#FFFF00; margin-top:20px;width: 500px; height:500px;"></canvas>
    <input class="buttons" type="button" onclick="click42" value="drawRadial"></input>
    <canvas id="43Canvas" style="background-color:#FFFF00; margin-top:20px;width: 500px; height:200px;"></canvas>
    <input class="buttons" type="button" onclick="click43" value="drawLineDash"></input>
    <canvas id="44Canvas" style="background-color:#FFFF00; margin-top:20px;width: 500px; height:200px;"></canvas>
    <input class="buttons" type="button" onclick="click44" value="drawImageForNewImage"></input>
    <canvas id="45Canvas" style="background-color:#FFFF00; margin-top:20px;width: 500px; height:200px;"></canvas>
    <input class="buttons" type="button" onclick="click45" value="CreatePatternForNewImage"></input>
    <image src="{{imageSrc}}" id="image2" style="margin-top:20px;"></image>
  </div>
</template>

<style>
  .container {
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
  }

  .buttons{
    width: 80%;
    height: 80px;
    background-color: #00bfff;
    color: #afeeee;
    margin-top: 10px;
  }


  .text {
    font-size: 50px;
    color: #0000ff;
    border: 1px;
  }
</style>

<script>
  module.exports = {
    data: {
      title: 'World',
      message: 'aa',
      testparams: '2',
      imageSrc: ''
    },
    onInit() {
      this.$page.setTitleBar({
        text: 'Canvas',
        textColor: '#ffffff',
        backgroundColor: '#007DFF',
        backgroundOpacity: 0.5
      })
    },
    touchstart: function (e) {
      console.log('yyyy' + 'bindtouchstart' + 'e.changedTouches.length =' + e.changedTouches.length)
    },
    touchmove: function (e) {
      console.log('yyyy' + 'bindtouchmove' + ' e.changedTouches.length =' + e.changedTouches.length + e.changedTouches[0].identifier)
    },

    click1: function () {
      this.message = 'drawfillStyleforColor'
      var test = this.$element('1Canvas')
      var ctx = test.getContext('2d')
      console.log('ctx.fillStyle 111  >> ' + ctx.fillStyle)
      ctx.fillStyle = '#0000ff'
      ctx.fillRect(20, 20, 150, 100)
      console.log('ctx.fillStyle 222  >> ' + ctx.fillStyle)
    },
    click2: function () {
      this.message = 'drawfillStyleforLinearGradient'
      var test = this.$element('2Canvas')
      var ctx = test.getContext('2d')
      console.log('ctx.fillStyle 333  >> ' + ctx.fillStyle)
      var myGradient = ctx.createLinearGradient(0, 0, 0, 170)
      console.log('yyyy', 'myGradient =' + myGradient)
      myGradient.addColorStop(0, 'black')
      myGradient.addColorStop(1, 'white')
      ctx.fillStyle = myGradient
      console.log('ctx.fillStyle 444  >> ' + ctx.fillStyle)
      ctx.fillRect(20, 20, 150, 100)
    },
    click3: function () {
      this.message = 'drawfillStyleforcreatePattern'
      var test = this.$element('3Canvas')
      var ctx = test.getContext('2d')
      var img = this.$element('image')
      console.log('ctx.fillStyle 555  >> ' + ctx.fillStyle)
      var pat = ctx.createPattern(img, 'repeat')
      ctx.rect(0, 0, 500, 200)
      ctx.fillStyle = pat
      console.log('ctx.fillStyle 666  >> ' + ctx.fillStyle)
      ctx.fill()
    },
    click4: function () {
      this.message = 'drawstrokeStyleforColor'
      var test = this.$element('4Canvas')
      var ctx = test.getContext('2d')
      console.log('ctx.strokeStyle 111  >> ' + ctx.strokeStyle)
      ctx.strokeStyle = '#0000ff'
      ctx.strokeRect(20, 20, 150, 100)
      console.log('ctx.strokeStyle 222  >> ' + ctx.strokeStyle)
    },
    click5: function () {
      this.message = 'drawstrokeStyleforLinearGradient'
      var test = this.$element('5Canvas')
      var ctx = test.getContext('2d')
      console.log('ctx.strokeStyle 333  >> ' + ctx.strokeStyle)
      var gradient = ctx.createLinearGradient(0, 0, 170, 0)

      gradient.addColorStop('0', 'magenta')
      gradient.addColorStop('0.5', 'blue')
      gradient.addColorStop('1.0', 'red')

      // Fill with gradient
      ctx.strokeStyle = gradient
      ctx.lineWidth = 5
      ctx.strokeRect(20, 20, 150, 100)
      console.log('ctx.strokeStyle 444  >> ' + ctx.strokeStyle)
    },
    click6: function () {
      this.message = 'drawShadow'
      var test = this.$element('6Canvas')
      var ctx = test.getContext('2d')
      ctx.shadowBlur = 20
      ctx.shadowColor = 'black'
      ctx.shadowOffsetX = 20
      ctx.shadowOffsetY = 20
      ctx.fillStyle = 'blue'
      ctx.fillRect(20, 20, 100, 80)
      console.log('ctx.shadowBlur 222  >> ' + ctx.shadowBlur)
      console.log('ctx.shadowColor 222  >> ' + ctx.shadowColor)
      console.log('ctx.shadowOffsetX 222  >> ' + ctx.shadowOffsetX)
      console.log('ctx.shadowOffsetY 222  >> ' + ctx.shadowOffsetY)
    },
    click7: function () {
      this.message = 'drawlineCap'
      var test = this.$element('7Canvas')
      var ctx = test.getContext('2d')
      console.log('ctx.lineCap 111  >> ' + ctx.lineCap)
      ctx.beginPath()
      ctx.lineWidth = 10
      ctx.lineCap = 'round'
      ctx.moveTo(20, 20)
      ctx.lineTo(20, 200)
      console.log('ctx.lineCap 222  >> ' + ctx.lineCap)
      ctx.stroke()
    },
    click8: function () {
      this.message = 'drawlineJoin'
      var test = this.$element('8Canvas')
      var ctx = test.getContext('2d')
      console.log('ctx.lineJoin 111  >> ' + ctx.lineJoin)
      ctx.beginPath()
      ctx.lineWidth = 10
      ctx.lineJoin = 'round'
      ctx.moveTo(20, 20)
      ctx.lineTo(100, 50)
      ctx.lineTo(20, 100)
      ctx.stroke()
      console.log('ctx.lineJoin 222  >> ' + ctx.lineJoin)
    },
    click9: function () {
      this.message = 'drawlineWidth'
      var test = this.$element('9Canvas')
      var ctx = test.getContext('2d')
      console.log('ctx.lineWidth 111  >> ' + ctx.lineWidth)
      ctx.lineWidth = 10
      ctx.strokeRect(20, 20, 80, 100)
      console.log('ctx.lineWidth 222  >> ' + ctx.lineWidth)
    },
    click10: function () {
      this.message = 'drawmiterLimit'
      var test = this.$element('10Canvas')
      var ctx = test.getContext('2d')
      ctx.lineWidth = 10
      console.log('ctx.miterLimit 111  >> ' + ctx.miterLimit)
      ctx.lineJoin = 'miter'
      ctx.miterLimit = 5
      ctx.moveTo(20, 20)
      ctx.lineTo(50, 27)
      ctx.lineTo(20, 34)
      ctx.stroke()
      console.log('ctx.miterLimit 222  >> ' + ctx.miterLimit)
    },
    click11: function () {
      this.message = 'drawrect'
      var test = this.$element('11Canvas')
      var ctx = test.getContext('2d')
      ctx.rect(20, 20, 150, 100)
      ctx.stroke()
    },
    click12: function () {
      this.message = 'drawfillRect'
      var test = this.$element('12Canvas')
      var ctx = test.getContext('2d')
      ctx.fillRect(20, 20, 150, 100)
    },
    click13: function () {
      this.message = 'drawstrokeRect'
      var test = this.$element('13Canvas')
      var ctx = test.getContext('2d')
      ctx.strokeRect(20, 20, 150, 100)
    },
    click14: function () {
      this.message = 'drawclearRect'
      var test = this.$element('14Canvas')
      var ctx = test.getContext('2d')
      ctx.fillStyle = 'red'
      ctx.fillRect(0, 0, 300, 150)
      ctx.clearRect(20, 20, 100, 50)
    },
    click15: function () {
      this.message = 'drawfill'
      var test = this.$element('15Canvas')
      var ctx = test.getContext('2d')
      ctx.rect(20, 20, 150, 100)
      ctx.fillStyle = 'green'
      ctx.fill()
    },
    click16: function () {
      this.message = 'drawstroke'
      var test = this.$element('16Canvas')
      var ctx = test.getContext('2d')
      ctx.beginPath()
      ctx.moveTo(20, 20)
      ctx.lineTo(20, 100)
      ctx.lineTo(70, 100)
      ctx.strokeStyle = 'green'
      ctx.stroke()
    },
    click17: function () {
      this.message = 'drawbeginPath'
      var test = this.$element('17Canvas')
      var ctx = test.getContext('2d')
      ctx.beginPath()
      ctx.lineWidth = '5'
      ctx.strokeStyle = 'red' // red line
      ctx.moveTo(0, 75)
      ctx.lineTo(250, 75)
      ctx.stroke() // Draw

      ctx.beginPath()
      ctx.strokeStyle = 'blue' // blue line
      ctx.moveTo(50, 0)
      ctx.lineTo(150, 130)
      ctx.stroke()
    },
    click18: function () {
      this.message = 'drawmoveTo'
      var test = this.$element('18Canvas')
      var ctx = test.getContext('2d')
      ctx.beginPath()
      ctx.moveTo(0, 0)
      ctx.lineTo(300, 150)
      ctx.stroke()
    },
    click19: function () {
      this.message = 'drawclosePath'
      var test = this.$element('19Canvas')
      var ctx = test.getContext('2d')
      ctx.beginPath()
      ctx.moveTo(20, 20)
      ctx.lineTo(20, 100)
      ctx.lineTo(70, 100)
      ctx.closePath()
      ctx.stroke()
    },
    click20: function () {
      this.message = 'drawlineTo'
      var test = this.$element('20Canvas')
      var ctx = test.getContext('2d')
      ctx.beginPath()
      ctx.moveTo(0, 0)
      ctx.lineTo(300, 150)
      ctx.stroke()
    },
    click21: function () {
      this.message = 'drawclip'
      var test = this.$element('21Canvas')
      var ctx = test.getContext('2d')
      ctx.rect(50, 20, 200, 120)
      ctx.stroke()
      ctx.clip()
      // Draw a green rectangle after clip()
      ctx.fillStyle = 'green'
      ctx.fillRect(0, 0, 150, 100)
    },
    click22: function () {
      this.message = 'drawquadraticCurveTo'
      var test = this.$element('22Canvas')
      var ctx = test.getContext('2d')
      ctx.beginPath()
      ctx.moveTo(20, 20)
      ctx.quadraticCurveTo(20, 100, 200, 20)
      ctx.stroke()
    },
    click23: function () {
      this.message = 'drawbezierCurveTo'
      var test = this.$element('23Canvas')
      var ctx = test.getContext('2d')
      ctx.beginPath()
      ctx.moveTo(20, 20)
      ctx.bezierCurveTo(20, 100, 200, 100, 200, 20)
      ctx.stroke()
    },
    click24: function () {
      this.message = 'drawarc'
      var test = this.$element('24Canvas')
      var ctx = test.getContext('2d')
      ctx.beginPath()
      ctx.arc(100, 75, 50, 0, 2 * Math.PI)
      ctx.stroke()
    },
    click25: function () {
      this.message = 'drawarcTo'
      var test = this.$element('25Canvas')
      var ctx = test.getContext('2d')
      ctx.beginPath()
      ctx.beginPath()
      ctx.moveTo(20, 20) // Create a starting point
      ctx.lineTo(100, 20) // Create horizontal lines
      ctx.arcTo(150, 20, 150, 70, 50) // Create arc
      ctx.lineTo(150, 120) // Create vertical lines
      ctx.stroke()
    },
    click26: function () {
      this.message = 'drawscale'
      var test = this.$element('26Canvas')
      var ctx = test.getContext('2d')
      ctx.strokeRect(5, 5, 25, 15)
      ctx.scale(2, 2)
      ctx.strokeRect(5, 5, 25, 15)
    },
    click27: function () {
      this.message = 'drawrotate'
      var test = this.$element('27Canvas')
      var ctx = test.getContext('2d')
      ctx.rotate(20 * Math.PI / 180)
      ctx.fillRect(50, 20, 100, 50)
    },
    click28: function () {
      this.message = 'drawtranslate'
      var test = this.$element('28Canvas')
      var ctx = test.getContext('2d')
      ctx.fillRect(10, 10, 100, 50)
      ctx.translate(70, 70)
      ctx.fillRect(10, 10, 100, 50)
    },
    click29: function () {
      this.message = 'drawtransform'
      var test = this.$element('29Canvas')
      var ctx = test.getContext('2d')
      ctx.fillStyle = '#FFFF00'
      ctx.fillRect(0, 0, 250, 100)

      ctx.transform(1, 0.5, -0.5, 1, 30, 10)
      ctx.fillStyle = 'red'
      ctx.fillRect(0, 0, 250, 100)

      ctx.transform(1, 0.5, -0.5, 1, 30, 10)
      ctx.fillStyle = 'blue'
      ctx.fillRect(0, 0, 250, 100)
    },
    click30: function () {
      this.message = 'drawsetTransform'
      var test = this.$element('30Canvas')
      var ctx = test.getContext('2d')
      ctx.fillStyle = '#FFFF00'
      ctx.fillRect(0, 0, 250, 100)

      ctx.setTransform(1, 0.5, -0.5, 1, 30, 10)
      ctx.fillStyle = 'red'
      ctx.fillRect(0, 0, 250, 100)

      ctx.setTransform(1, 0.5, -0.5, 1, 30, 10)
      ctx.fillStyle = 'blue'
      ctx.fillRect(0, 0, 250, 100)
    },
    click31: function () {
      this.message = 'drawfont'
      var test = this.$element('31Canvas')
      var ctx = test.getContext('2d')
      console.log('ctx.font 111  >> ' + ctx.font)
      ctx.font = '40px monospace'
      ctx.fillText('Hello World', 10, 50)
      console.log('ctx.font 222  >> ' + ctx.font)
    },
    click32: function () {
      this.message = 'drawtextAlign'
      var test = this.$element('32Canvas')
      var ctx = test.getContext('2d')
      // Create a blue line at location 150
      ctx.strokeStyle = 'blue'
      ctx.moveTo(150, 20)
      ctx.lineTo(150, 170)
      ctx.stroke()

      ctx.font = '15px monospace'
      console.log('ctx.textAlign 111  >> ' + ctx.textAlign)
      // Display different textAlign values
      ctx.textAlign = 'start'
      console.log('ctx.textAlign 222  >> ' + ctx.textAlign)
      ctx.fillText('textAlign=start', 150, 60)
      ctx.textAlign = 'end'
      console.log('ctx.textAlign 333  >> ' + ctx.textAlign)
      ctx.fillText('textAlign=end', 150, 80)
      ctx.textAlign = 'left'
      console.log('ctx.textAlign 444  >> ' + ctx.textAlign)
      ctx.fillText('textAlign=left', 150, 100)
      ctx.textAlign = 'center'
      console.log('ctx.textAlign 555  >> ' + ctx.textAlign)
      ctx.fillText('textAlign=center', 150, 120)
      ctx.textAlign = 'right'
      console.log('ctx.textAlign 666  >> ' + ctx.textAlign)
      ctx.fillText('textAlign=right', 150, 140)
    },
    click33: function () {
      this.message = 'drawtextBaseline'
      var test = this.$element('33Canvas')
      var ctx = test.getContext('2d')
      // Draw blue lines at position y=100
      ctx.strokeStyle = 'blue'
      ctx.moveTo(5, 100)
      ctx.lineTo(395, 100)
      ctx.stroke()

      ctx.font = '20px monospace'
      console.log('ctx.textBaseline 111  >> ' + ctx.textBaseline)
      // Place each word with a different textBaseline value at y=200
      ctx.textBaseline = 'top'
      ctx.fillText('Top', 5, 100)
      console.log('ctx.textBaseline 222  >> ' + ctx.textBaseline)
      ctx.textBaseline = 'bottom'
      ctx.fillText('Bottom', 50, 100)
      console.log('ctx.textBaseline 333  >> ' + ctx.textBaseline)
      ctx.textBaseline = 'middle'
      ctx.fillText('Middle', 120, 100)
      console.log('ctx.textBaseline 444  >> ' + ctx.textBaseline)
      ctx.textBaseline = 'alphabetic'
      ctx.fillText('Alphabetic', 190, 100)
      console.log('ctx.textBaseline 555  >> ' + ctx.textBaseline)
      ctx.textBaseline = 'hanging'
      ctx.fillText('Hanging', 290, 100)
      console.log('ctx.textBaseline 666  >> ' + ctx.textBaseline)
      ctx.textBaseline = 'ideographic'
      ctx.fillText('ideographic', 350, 100)
      console.log('ctx.textBaseline 777  >> ' + ctx.textBaseline)
    },

    click34: function () {
      this.message = 'drawfillText'
      var test = this.$element('34Canvas')
      var ctx = test.getContext('2d')
      ctx.font = '20px monospace'
      ctx.fillText('Hello World!', 10, 50)

      ctx.font = '30px monospace'
      // Create a gradient
      var gradient = ctx.createLinearGradient(0, 0, 170, 0)
      gradient.addColorStop('0', 'magenta')
      gradient.addColorStop('0.5', 'blue')
      gradient.addColorStop('1.0', 'red')
      // Fill with gradient
      ctx.fillStyle = gradient
      ctx.fillText('w3school.com.cn', 10, 90)
    },
    click35: function () {
      var test = this.$element('35Canvas')
      var ctx = test.getContext('2d')
      ctx.font = '20px monospace'
      ctx.strokeText('Hello World!', 10, 50)

      ctx.font = '30px monospace'
      // Create a gradient
      var gradient = ctx.createLinearGradient(0, 0, 200, 0)
      gradient.addColorStop('0', 'magenta')
      gradient.addColorStop('0.5', 'blue')
      gradient.addColorStop('1.0', 'red')
      // Fill with gradient
      ctx.strokeStyle = gradient
      ctx.strokeText('w3school.com.cn', 10, 90)
    },
    click36: function () {
      this.message = 'drawmeasureText'
      var test = this.$element('36Canvas')
      var ctx = test.getContext('2d')
      ctx.font = '10px monospace'
      var txt = 'Hello World'
      ctx.fillText('width:' + ctx.measureText(txt).width, 10, 50)
      ctx.fillText(txt, 10 + ctx.measureText(txt).width, 50)
      ctx.font = '20px monospace'
      ctx.fillText('width:' + ctx.measureText(txt).width, 10, 100)
      ctx.fillText(txt, 12 + ctx.measureText(txt).width, 100)
      ctx.font = '30px monospace'
      ctx.fillText('width:' + ctx.measureText(txt).width, 10, 150)
      ctx.fillText(txt, 38 + ctx.measureText(txt).width, 150)
    },
    click37: function () {
      this.message = 'drawdrawImage'
      var test = this.$element('37Canvas')
      var ctx = test.getContext('2d')
      var img = this.$element('image')
      ctx.drawImage(img, 10, 10, 20, 20, 10, 10, 60, 60)
    },
    click38: function () {
      this.message = 'drawcreateImageData'
      var test = this.$element('38Canvas')
      var ctx = test.getContext('2d')
      var imgData = ctx.createImageData(100, 100)
      for (var i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i + 0] = 255
        imgData.data[i + 1] = 0
        imgData.data[i + 2] = 0
        imgData.data[i + 3] = 255
      }
      ctx.putImageData(imgData, 10, 10)
    },
    click39: function () {
      this.message = 'drawgetImageData'
      var test = this.$element('39Canvas')
      var ctx = test.getContext('2d')
      var imageData = ctx.getImageData(0, 0, 100, 50)
      for (var i = 0; i < imageData.data.length; i += 4) {
        imageData.data[i + 0] = 255
        imageData.data[i + 1] = 0
        imageData.data[i + 2] = 0
        imageData.data[i + 3] = 255
      }
      ctx.putImageData(imageData, 0, 0)
    },
    click40: function () {
      this.message = 'drawglobalAlpha'
      var test = this.$element('40Canvas')
      var ctx = test.getContext('2d')
      ctx.fillStyle = 'red'
      ctx.fillRect(20, 20, 75, 50)
      console.log('ctx.globalAlpha 111  >> ' + ctx.globalAlpha)
      // Adjust transparency
      ctx.globalAlpha = 0.2
      ctx.fillStyle = 'blue'
      ctx.fillRect(50, 50, 75, 50)
      ctx.fillStyle = 'green'
      ctx.fillRect(80, 80, 75, 50)
      console.log('ctx.globalAlpha 222  >> ' + ctx.globalAlpha)
    },
    click41: function () {
      this.message = 'drawglobalCompositeOperation'
      var test = this.$element('41Canvas')
      var ctx = test.getContext('2d')
      ctx.fillStyle = 'red'
      ctx.fillRect(20, 20, 75, 50)
      console.log('ctx.globalCompositeOperation 111  >> ' + ctx.globalCompositeOperation)
      ctx.globalCompositeOperation = 'xor'
      ctx.fillStyle = 'blue'
      ctx.fillRect(50, 50, 75, 50)
      console.log('ctx.globalCompositeOperation 222  >> ' + ctx.globalCompositeOperation)
    },
    click42: function () {
      this.message = 'drawRadial'
      var test = this.$element('42Canvas')
      var ctx = test.getContext('2d')
      var grd = ctx.createRadialGradient(75, 50, 50)
      grd.addColorStop(0, 'red')
      grd.addColorStop(0.5, 'green')
      grd.addColorStop(1, 'blue')

      // Fill with gradient
      ctx.fillStyle = grd
      ctx.fillRect(10, 10, 150, 80)
    },
    click43: function () {
      var canvas = this.$element('43Canvas')
      var ctx = canvas.getContext('2d')
      console.log('lineDash=' + ctx.getLineDash())
      ctx.setLineDash([4, 16, 100])
      ctx.lineDashOffset = 2
      console.log('lineDash=' + ctx.getLineDash())
      ctx.beginPath()
      ctx.moveTo(0, 100)
      ctx.lineTo(400, 100)
      ctx.stroke()
    },
    click44: function () {
      this.message = 'drawdrawImage'
      var test = this.$element('44Canvas')
      var ctx = test.getContext('2d')
      var img = new Image()
      img.src = 'https://developer.huawei.com/dev_index/img/logo_ch.png'
      img.onload = function () {
        console.log('Image load success.')
        ctx.drawImage(img, 10, 10, 20, 20, 10, 10, 60, 60)
      }
      img.onerror = function () {
        console.log('Image load fail.')
      }
    },
    click45: function () {
      this.message = 'drawfillStyleforcreatePattern'
      var test = this.$element('45Canvas')
      var ctx = test.getContext('2d')
      console.log('ctx.fillStyle 555  >> ' + ctx.fillStyle)
      var img = new Image()
      img.src = 'https://developer.huawei.com/dev_index/img/logo_ch.png'
      img.onload = () => {
        console.log('Image load success.')
        var pat = ctx.createPattern(img, 'repeat')
        ctx.rect(0, 0, 500, 200)
        ctx.fillStyle = pat
        console.log('ctx.fillStyle 666  >> ' + ctx.fillStyle)
        ctx.fill()
        test.toTempFilePath({
          x: 0,
          y: 0,
          width: 200,
          height: 200,
          destWidth: 100,
          destHeight: 100,
          fileType: 'png',
          quality: 1.0,
          success: (data) => {
            this.imageSrc = data.uri
            console.log(`Canvas toTempFilePath success ${data.uri}`)
            console.log(`Canvas toTempFilePath success ${data.tempFilePath}`)
          },
          fail: (data) => {
            console.log('Canvas toTempFilePath data =' + data)
          },
          complete: () => {
            console.log('Canvas toTempFilePath complete.')
          }
        })
      }
      img.onerror = function () {
        console.log('Image load fail.')
      }
    },
    errorfun: function () {
      console.log('canvas onerror')
    },
    longtapfun: function () {
      console.log('canvas longtap')
    }
  }
</script>
```

## 版本更新说明

|版本|发布日期|描述|
|:---|:---------|:-------|
|1030|2018-10-31|第一次正式发布。|

## 相关链接

### 案例

* [保存canvas绘制内容到相册，无法看到绘制内容](https://developer.huawei.com/consumer/cn/doc/quickApp-Guides/quickapp-case-0000001082020374#section33111179514)
* [华为快应用中通过setInterval绘制canvas动画很卡顿](https://developer.huawei.com/consumer/cn/doc/quickApp-Guides/quickapp-case-0000001082020374#section19628242161212)
* [如何在快应用图标的右上角添加角标](https://developer.huawei.com/consumer/cn/doc/quickApp-Guides/quickapp-case-0000001082020374#section1196371569)

