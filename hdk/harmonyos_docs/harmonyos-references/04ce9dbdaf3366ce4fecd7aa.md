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

> phone | 2in1 | tablet | tv | wearable | lite_wearable

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e2/v3/xeA7Fv2dQUO44kwvwSs0Bg/zh-cn_image_0000002755186124.png?HW-CC-KV=V1&HW-CC-Date=20261009T092758Z&HW-CC-Expire=31536000000&HW-CC-Sign=761461E0C334D8DA2568DC35CBFD7B39E6DC2991846069F4F5BBDA89A47509BE)

## setTransform

> phone | 2in1 | tablet | tv | wearable | lite_wearable

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/90/v3/Bb7p-ZmUQymUHSDwCgrZOw/zh-cn_image_0000002784584991.png?HW-CC-KV=V1&HW-CC-Date=20261009T092758Z&HW-CC-Expire=31536000000&HW-CC-Sign=75E3F2B0B3CC0BE74E1D01682C9B1833CFF1A191CFEF2CB3762AF8408A2BA405)

## closePath

> phone | 2in1 | tablet | tv | wearable | lite_wearable

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/16/v3/knPB5gv5Sa-vF20hU76yWg/zh-cn_image_0000002784665173.png?HW-CC-KV=V1&HW-CC-Date=20261009T092758Z&HW-CC-Expire=31536000000&HW-CC-Sign=89D92A899AEF6A4868A9DC06B3F46887AA3713073F04F0907ABE2D54C2A03D9D)

## moveTo

> phone | 2in1 | tablet | tv | wearable | lite_wearable

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c2/v3/yhsVVOrHTHOX0elu3WndeQ/zh-cn_image_0000002755026242.png?HW-CC-KV=V1&HW-CC-Date=20261009T092758Z&HW-CC-Expire=31536000000&HW-CC-Sign=23192942A581C423111474866DEC833104B72B3DAAC6C3B999FF3A32C64DA94C)

## lineTo

> phone | 2in1 | tablet | tv | wearable | lite_wearable

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8e/v3/Y4QW-odpS4izbfc0avROGQ/zh-cn_image_0000002755186126.png?HW-CC-KV=V1&HW-CC-Date=20261009T092758Z&HW-CC-Expire=31536000000&HW-CC-Sign=9EF372E6C3FB8FB89CD25DB825F2E82EE8326FE2331F41AE1101DF19F7CBB712)

## bezierCurveTo

> phone | 2in1 | tablet | tv | wearable | lite_wearable

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3e/v3/eqP2JCgfRKKzDLzkknUwew/zh-cn_image_0000002784584993.png?HW-CC-KV=V1&HW-CC-Date=20261009T092758Z&HW-CC-Expire=31536000000&HW-CC-Sign=9929BBACA34C7262127A6EE963E192633DC6412BCA5B200554C66AE9A24582CE)

## quadraticCurveTo

> phone | 2in1 | tablet | tv | wearable | lite_wearable

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/29/v3/h8fn9qhIR0iHPK3CXBgKeg/zh-cn_image_0000002784665175.png?HW-CC-KV=V1&HW-CC-Date=20261009T092758Z&HW-CC-Expire=31536000000&HW-CC-Sign=08C3673FFCAA9253670C0FC8AB78C20DEE7D517575763855BB5243804524CD48)

## arc

> phone | 2in1 | tablet | tv | wearable | lite_wearable

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/29/v3/LWhRc19wRceuFZ9s_TNX-g/zh-cn_image_0000002755026244.png?HW-CC-KV=V1&HW-CC-Date=20261009T092758Z&HW-CC-Expire=31536000000&HW-CC-Sign=E4CF53EA95793711C25D6DD0679942EC05A477BB71822A9081CECD0BB8445567)

## arcTo

> phone | 2in1 | tablet | tv | wearable | lite_wearable

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5c/v3/gRRHB5vbRYmh3zGp7foPWQ/zh-cn_image_0000002755186128.png?HW-CC-KV=V1&HW-CC-Date=20261009T092758Z&HW-CC-Expire=31536000000&HW-CC-Sign=211847B15BA5937B14B0D8FBD0D33243485DA5D704F41B6AB0A9077C2AB2A508)

## ellipse

> phone | 2in1 | tablet | tv | wearable | lite_wearable

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e9/v3/Y41zP2BNTEC1wUhKUfdcpw/zh-cn_image_0000002784584995.png?HW-CC-KV=V1&HW-CC-Date=20261009T092758Z&HW-CC-Expire=31536000000&HW-CC-Sign=FD9D6A9BB0A1329B476E8CB321E53135F44FEBA66058470C907185302C48363B)

## rect

> phone | 2in1 | tablet | tv | wearable | lite_wearable

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/20/v3/K8F97bGJSu2NDe6bmTtLow/zh-cn_image_0000002784665177.png?HW-CC-KV=V1&HW-CC-Date=20261009T092758Z&HW-CC-Expire=31536000000&HW-CC-Sign=434F4C335E383D78B2FCABB3E8CF0181526F5A2E01CB79191C39B85769BDDCEF)

