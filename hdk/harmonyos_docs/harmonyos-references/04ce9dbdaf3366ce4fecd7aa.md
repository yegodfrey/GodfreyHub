---
name: document/cn/harmonyos-references/js-components-canvas-path2d
title: Path2D对象
uri: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-canvas-path2d
---

# Path2D对象

> phone | 2in1 | tablet | tv | wearable | lite_wearable

路径对象，支持通过对象的接口进行路径的描述，并通过Canvas的[stroke](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-canvas-canvasrenderingcontext2d#stroke)接口进行绘制。
> 说明
>
> 本模块首批接口从API version 4开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

## addPath

addPath(path: Path2D): void

将另一个路径添加到当前的路径对象中。

**参数：**

|参数|类型|描述|
|:---|:-----|:--------------|
|path|Path2D|需要添加到当前路径的路径对象。|

**示例：**

```html
<!-- xxx.hml -->
<div>
    <canvas ref="canvas" style="width: 500px; height: 500px; background-color: #ffff00;"></canvas>
</div>
```

```js
// xxx.js
export default {
  onShow() {
    const el = this.$refs.canvas;
    const ctx = el.getContext('2d');
    var path1 = ctx.createPath2D("M250 150 L150 350 L350 350 Z");
    var path2 = ctx.createPath2D();
    path2.addPath(path1);
    ctx.stroke(path2);
  }
}
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/35/v3/F0vq5LdIQyaRYCEaIrpG2g/zh-cn_image_0000002762836361.png?HW-CC-KV=V1&HW-CC-Date=20260917T084649Z&HW-CC-Expire=31536000000&HW-CC-Sign=15988D29389EF49A4BAAF6DF169695C162BCF3F535320B04EB0148B0FD1164B4)

## setTransform

setTransform(scaleX: number, skewX: number, skewY: number, scaleY: number, translateX: number, translateY: number): void

设置路径变换矩阵。

**参数：**

|参数|类型|描述|
|:---------|:-----|:-------|
|scaleX|number|x轴的缩放比例。|
|skewX|number|x轴的倾斜角度。|
|skewY|number|y轴的倾斜角度。|
|scaleY|number|y轴的缩放比例。|
|translateX|number|x轴的平移距离。|
|translateY|number|y轴的平移距离。|

**示例：**

```html
<!-- xxx.hml -->
<div>
    <canvas ref="canvas" style="width: 300px; height: 250px; background-color: #ffff00;"></canvas>
</div>
```

```js
// xxx.js
export default {
  onShow() {
    const el = this.$refs.canvas;
    const ctx = el.getContext('2d');
    var path = ctx.createPath2D("M250 150 L150 350 L350 350 Z");
    path.setTransform(0.8, 0, 0, 0.4, 0, 0);
    ctx.stroke(path);
  }
}
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1f/v3/2_wSpcLsTdiu_ccOT35pQg/zh-cn_image_0000002733276850.png?HW-CC-KV=V1&HW-CC-Date=20260917T084649Z&HW-CC-Expire=31536000000&HW-CC-Sign=5687B723041443015920AC73C42A238D3C7B45F779F8781D815AA7D75108FF2E)

## closePath

closePath(): void

将路径的当前点移回到路径的起点，当前点到起点间画一条直线。如果形状已经闭合或只有一个点，则此功能不执行任何操作。

**示例：**

```html
<!-- xxx.hml -->
<div>
    <canvas ref="canvas" style="width: 500px; height: 500px; background-color: #ffff00;"></canvas>
</div>
```

```js
// xxx.js
export default {
  onShow() {
    const el = this.$refs.canvas;
    const ctx = el.getContext('2d');
    var path = ctx.createPath2D();
    path.moveTo(200, 100);
    path.lineTo(300, 100);
    path.lineTo(200, 200);
    path.closePath();
    ctx.stroke(path);
  }
}
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/56/v3/q0OXI0X6ReqwjsWwnTw7Fg/zh-cn_image_0000002733436724.png?HW-CC-KV=V1&HW-CC-Date=20260917T084649Z&HW-CC-Expire=31536000000&HW-CC-Sign=3C4E1969561C85D235E14DCBC6AADDACE9E6F5DC517C6CEE0F6D159ABBA4E3CF)

## moveTo

moveTo(x: number, y: number): void

将路径的当前坐标点移动到目标点，移动过程中不绘制线条。

**参数：**

|参数|类型|描述|
|:-|:-----|:-------|
|x|number|目标点X轴坐标。|
|y|number|目标点Y轴坐标。|

**示例：**

```html
<!-- xxx.hml -->
<div>
    <canvas ref="canvas" style="width: 300px; height: 250px; background-color: #ffff00;"></canvas>
</div>
```

```js
// xxx.js
export default {
  onShow() {
    const el = this.$refs.canvas;
    const ctx = el.getContext('2d');
    var path = ctx.createPath2D();
    path.moveTo(50, 100);
    path.lineTo(250, 100);
    path.lineTo(150, 200);
    path.closePath();
    ctx.stroke(path);
  }
}
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4a/v3/dLznH7D9RIKyT6rHqLWnLg/zh-cn_image_0000002762996249.png?HW-CC-KV=V1&HW-CC-Date=20260917T084649Z&HW-CC-Expire=31536000000&HW-CC-Sign=2F9E57CD56AD2DBEE4C2C264BF896EDBD8AA76768A8308D5A356329021F2FC22)

## lineTo

lineTo(x: number, y: number): void

从当前点绘制一条直线到目标点。

**参数：**

|参数|类型|描述|
|:-|:-----|:-------|
|x|number|目标点X轴坐标。|
|y|number|目标点Y轴坐标。|

**示例：**

```html
<!-- xxx.hml -->
<div>
    <canvas ref="canvas" style="width: 400px; height: 450px; background-color: #ffff00;"></canvas>
</div>
```

```js
// xxx.js
export default {
  onShow() {
    const el = this.$refs.canvas;
    const ctx = el.getContext('2d');
    var path = ctx.createPath2D();
    path.moveTo(100, 100);
    path.lineTo(100, 200);
    path.lineTo(200, 200);
    path.lineTo(200, 100);
    path.closePath();
    ctx.stroke(path);
  }
}
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/21/v3/9eLiqZmiSZiwhGHfoAm8cg/zh-cn_image_0000002762836363.png?HW-CC-KV=V1&HW-CC-Date=20260917T084649Z&HW-CC-Expire=31536000000&HW-CC-Sign=3EF6E0C18C31A731C10912E9386043B9AB77059EF6FA9ACE1D2FC3A5F7CB04D6)

## bezierCurveTo

bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void

创建三次贝塞尔曲线的路径。

**参数：**

|参数|类型|描述|
|:---|:-----|:-------------|
|cp1x|number|第一个贝塞尔参数的x坐标值。|
|cp1y|number|第一个贝塞尔参数的y坐标值。|
|cp2x|number|第二个贝塞尔参数的x坐标值。|
|cp2y|number|第二个贝塞尔参数的y坐标值。|
|x|number|路径结束时的x坐标值。|
|y|number|路径结束时的y坐标值。|

**示例：**

```html
<!-- xxx.hml -->
<div>
    <canvas ref="canvas" style="width: 300px; height: 250px; background-color: #ffff00;"></canvas>
</div>
```

```js
// xxx.js
export default {
  onShow() {
    const el = this.$refs.canvas;
    const ctx = el.getContext('2d');
    var path = ctx.createPath2D();
    path.moveTo(10, 10);
    path.bezierCurveTo(20, 100, 200, 100, 200, 20);
    ctx.stroke(path);
  }
}
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5e/v3/zYabbddVSWmS67hbtVqIVA/zh-cn_image_0000002733276852.png?HW-CC-KV=V1&HW-CC-Date=20260917T084649Z&HW-CC-Expire=31536000000&HW-CC-Sign=3D53959A3E86E94CFD5186CCDBBEFEA8F3C1D7F67D4F644244F8649319FC57F9)

## quadraticCurveTo

quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void

创建二次贝塞尔曲线的路径。

**参数：**

|参数|类型|描述|
|:--|:-----|:----------|
|cpx|number|贝塞尔参数的x坐标值。|
|cpy|number|贝塞尔参数的y坐标值。|
|x|number|路径结束时的x坐标值。|
|y|number|路径结束时的y坐标值。|

**示例：**

```html
<!-- xxx.hml -->
<div>
    <canvas ref="canvas" style="width: 300px; height: 250px; background-color: #ffff00;"></canvas>
</div>
```

```js
// xxx.js
export default {
  onShow() {
    const el = this.$refs.canvas;
    const ctx = el.getContext('2d');
    var path = ctx.createPath2D();
    path.moveTo(10, 10);
    path.quadraticCurveTo(100, 100, 200, 20);
    ctx.stroke(path);
  }
}
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/83/v3/vAJvLDcwS4qHyPzAYOp0Cw/zh-cn_image_0000002733436728.png?HW-CC-KV=V1&HW-CC-Date=20260917T084649Z&HW-CC-Expire=31536000000&HW-CC-Sign=22427AA0368E285701C80E357BA4CBF4C8CB1FB388ADEA0F0AD772E5A77C481F)

## arc

arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, counterclockwise?: boolean): void

绘制弧线路径。

**参数：**

|参数名|类型|必填|说明|
|:---------------|:------|:-|:--------------------------------------|
|x|number|是|弧线圆心的x坐标值。|
|y|number|是|弧线圆心的y坐标值。|
|radius|number|是|弧线的圆半径。|
|startAngle|number|是|弧线的起始弧度。|
|endAngle|number|是|弧线的终止弧度。|
|counterclockwise|boolean|否|是否逆时针绘制圆弧，true为逆时针，false为顺时针。 默认值：false|

**示例：**

```html
<!-- xxx.hml -->
<div>
    <canvas ref="canvas" style="width: 300px; height: 250px; background-color: #ffff00;"></canvas>
</div>
```

```js
// xxx.js
export default {
  onShow() {
    const el = this.$refs.canvas;
    const ctx = el.getContext('2d');
    var path = ctx.createPath2D();
    path.arc(100, 75, 50, 0, 6.28);
    ctx.stroke(path);
  }
}
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b7/v3/-D4DSYURSai0KYnN05V2XA/zh-cn_image_0000002762996251.png?HW-CC-KV=V1&HW-CC-Date=20260917T084649Z&HW-CC-Expire=31536000000&HW-CC-Sign=3F3D708CC582B86C2C9031CE256D8F27E8A722A4955ED1019BE3D341B4BCA7A2)

## arcTo

arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): void

依据圆弧控制的点和圆弧半径创建圆弧路径。

**参数：**

|参数|类型|描述|
|:-----|:-----|:--------------|
|x1|number|圆弧控制的第一个点的x坐标值。|
|y1|number|圆弧控制的第一个点的y坐标值。|
|x2|number|圆弧控制的第二个点的x坐标值。|
|y2|number|圆弧控制的第二个点的y坐标值。|
|radius|number|圆弧的圆半径值。|

**示例：**

```html
<!-- xxx.hml -->
<div>
    <canvas ref="canvas" style="width: 300px; height: 250px; background-color: #ffff00;"></canvas>
</div>
```

```js
// xxx.js
export default {
  onShow() {
    const el = this.$refs.canvas;
    const ctx = el.getContext('2d');
    var path = ctx.createPath2D();
    path.arcTo(150, 20, 150, 70, 50);
    ctx.stroke(path);
  }
}
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/35/v3/Jv5ODQFvTY69W5vkuPogmQ/zh-cn_image_0000002762836365.png?HW-CC-KV=V1&HW-CC-Date=20260917T084649Z&HW-CC-Expire=31536000000&HW-CC-Sign=E71E18B7C1852CC624DEFC05FD3E31250B167D15DD1DF82CB77191A583DF5FCB)

## ellipse

ellipse(x: number, y: number, radiusX: number, radiusY: number, rotation: number, startAngle: number, endAngle: number, counterclockwise?: number): void

在规定的区域绘制一个椭圆。

**参数：**

|参数名|类型|必填|说明|
|:---------------|:-----|:-|:------------------------------------------|
|x|number|是|椭圆圆心的x轴坐标。|
|y|number|是|椭圆圆心的y轴坐标。|
|radiusX|number|是|椭圆x轴的半径长度。|
|radiusY|number|是|椭圆y轴的半径长度。|
|rotation|number|是|椭圆的旋转角度，单位为弧度。|
|startAngle|number|是|椭圆绘制的起始点角度，以弧度表示。|
|endAngle|number|是|椭圆绘制的结束点角度，以弧度表示。|
|counterclockwise|number|否|是否以逆时针方向绘制椭圆，0为顺时针，1为逆时针。其它数值均按默认值处理。 默认值：0|

**示例：**

```html
<!-- xxx.hml -->
<div>
    <canvas ref="canvas" style="width: 500px; height: 450px; background-color: #ffff00;"></canvas>
</div>
```

```js
// xxx.js
export default {
  onShow() {
    const el = this.$refs.canvas;
    const ctx = el.getContext('2d');
    var path = ctx.createPath2D();
    path.ellipse(200, 200, 50, 100, Math.PI * 0.25, Math.PI * 0.5, Math.PI, 1);
    ctx.stroke(path);
  }
}
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/de/v3/0K-KsOD4R1C10sdPpqnyvg/zh-cn_image_0000002733276854.png?HW-CC-KV=V1&HW-CC-Date=20260917T084649Z&HW-CC-Expire=31536000000&HW-CC-Sign=201CDF19E51036C63FF28F90E141C4BEE0123E5E145AB4DCB6F12015991F1E81)

## rect

rect(x: number, y: number, width: number, height: number): void

创建矩形路径。

**参数：**

|参数|类型|描述|
|:-----|:-----|:------------|
|x|number|指定矩形的左上角x坐标值。|
|y|number|指定矩形的左上角y坐标值。|
|width|number|指定矩形的宽度。|
|height|number|指定矩形的高度。|

**示例：**

```html
<!-- xxx.hml -->
<div>
    <canvas ref="canvas" style="width: 500px; height: 450px; background-color: #ffff00;"></canvas>
</div>
```

```js
// xxx.js
export default {
  onShow() {
    const el = this.$refs.canvas;
    const ctx = el.getContext('2d');
    var path = ctx.createPath2D();
    path.rect(20, 20, 100, 100);
    ctx.stroke(path);
  }
}
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/28/v3/oy6I9WWNT8SUzXalQyOjSw/zh-cn_image_0000002733436730.png?HW-CC-KV=V1&HW-CC-Date=20260917T084649Z&HW-CC-Expire=31536000000&HW-CC-Sign=CAA877671B025067B5538A1C748BD40DB0D6C82795E22ACBBB06A85E381EB9C3)

