---
name: document/cn/HMS-References/hms-map-js-hw-marker
title: HWMarker
uri: https://developer.huawei.com/consumer/cn/doc/HMS-References/hms-map-js-hw-marker
source: portal
---

## 概览

用来添加标记，加载在该图层的元素，以设定好的规则显示在地图上。

## 构造方法

**构造方法**| **描述**  
---|---  
HWMapJsSDK.HWMarker(markerOptions)| markerOptions用来设置Marker的属性，见MarkerOptions。  
  
## 公共方法

**方法名**| **描述**| **参数类型**| **返回值**  
---|---|---|---  
getIcon()| 获取Icon。| 无| Object（同构建时传入的参数）  
setIcon(icon)| 设置Icon。| Object（同构建时传入的参数）| 无  
getLabel()| 获取Label。| 无| String  
setLabel(label)| 设置Label。| String| 无  
getMap()| 获取Map。| 无| [HWMap](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-js-hw-map)  
setMap(map)| 设置Map。| [HWMap](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-js-hw-map)| 无  
getPosition()| 获取Position。| 无| [LatLng](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-js-hw-parameter-description#latLng)  
setPosition(position)| 设置Position。| [LatLng](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-js-hw-parameter-description#latLng)| 无  
addListener(event, callback)| 添加事件监听。| 

  * event: String, 参考事件
  * callback：事件触发的回调函数

| 无  
removeListener(event, callback)| 删除事件监听。| 

  * event: String, 参考事件
  * callback：事件触发的回调函数

| 无  
  
## 事件

**事件**| **描述**| **用法**  
---|---|---  
click| 鼠标单击。| marker.addListener('click', callback), 参数callback为自定义回调函数。  
dbclick| 鼠标双击。| marker.addListener('dbclick', callback), 参数callback为自定义回调函数。  
icon_changed| icon改变。| marker.addListener('icon_changed',  callback), 参数callback为自定义回调函数。  
mousedown| 鼠标按下。| marker.addListener('mousedown', callback),  参数callback为自定义回调函数。  
mouseup| 鼠标放开。| marker.addListener('mouseup', callback), 参数callback为自定义回调函数。  
position_changed| position改变。| marker.addListener('position_changed',  callback), 参数callback为自定义回调函数。  
  
## MarkerOptions

**参数名**| **必选(M)/****可选(O)**| **数据类型**| **描述**  
---|---|---|---  
map| M| [HWMap](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-js-hw-map)| 地图实例。  
icon| O| String | MarkerIconOption| 标记的图标，可以是图片的url路径或文件路径。  
  
| anchor| O| Array<Number>| 图片锚点，有效值为2个元素的数组[x, y]，默认值[0.5, 1]表示锚点在图片的下边中心。  
scale| O| Number| 图片缩放，取值大于0，默认1，用来控制图片缩放。  
opacity| O| number| 透明度，范围是0-1，0表示完全透明，1表示完全不透明，默认是1。  
url| O| String| 图片地址，可以是图片的url路径或文件路径。默认有内置图片。  
label| O| String | MarkerLabelOption| 标记的标签，文字或者详细信息。  
  
| color| O| String| 文字颜色，默认#333。支持以下几种颜色设置：

  * 颜色名称：green
  * 十六进制：#ff0000
  * RGB：rgb(0,0,0)
  * RGBA：rgba(0,0,0,0.5)
  * HSL：hsl(120,65%,75%)

  
fontSize| O| String| 文字大小，默认14px。  
fontFamily| O| String| 字体，默认sans-serif。  
text| O| String| 文字内容。  
offsetX| O| Number| 横轴方向偏移值，默认0，单位是像素，0代表与坐标点重合。  
offsetY| O| Number| 纵轴方向偏移值，默认0，单位是像素，0代表与坐标点重合。  
position| M| [LatLng](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-js-hw-parameter-description#latLng)| 标记的位置。  
  
  

