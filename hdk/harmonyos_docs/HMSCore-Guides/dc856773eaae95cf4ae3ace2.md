---
name: document/cn/HMSCore-Guides/javascript-api-drawing-on-map-0000001050162118
title: 标记
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/javascript-api-drawing-on-map-0000001050162118
---

# 标记

在地图指定位置添加标记以标识位置、商家、建筑等，并可以通过信息窗口展示详细信息。

## 添加标记

调用HWMapJsSDK.[HWMarker](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/js-hwmarker-0000001051070088)(markerOptions)创建一个标记添加到地图上。

```javascript
var map;
var mMarker;

// 启动脚本的回调函数
function initMap() {
    var mapOptions = {};
    mapOptions.center = {lat: 48.856613, lng: 2.352222};
    mapOptions.zoom = 9;
    
    // 初始化地图
    map = new HWMapJsSDK.HWMap(document.getElementById('map'), mapOptions);

    // 初始化marker标记
    mMarker = new HWMapJsSDK.HWMarker({
        map: map,
        position: {lat: 48.85, lng: 2.35},
        zIndex: 10,
        label: {
            text: 'A',
            offsetY: -30,
            fontSize: '20px'
        },
        icon: {
            opacity: 0.5,
            scale: 1.2,
        }
    });
}
```

以上代码在48.85°N，2.35°E的位置上添加了一个label为"A"图标透明度为0.5的标记，如图所示：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/87/v3/UiqMHaajQcurx-JmZ6HzAA/zh-cn_image_0000001307743976.png?HW-CC-KV=V1&HW-CC-Date=20260922T085430Z&HW-CC-Expire=31536000000&HW-CC-Sign=A5DEF7F905ADB56269797EF2FB3E37C0EDEDB856455AB0E6EF69CDE164CDCCF5 "点击放大")

关于markerOptions支持的自定义属性见[MarkerOptions](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/js-hwmarker-0000001051070088#section046812592385)。

## 自定义标记

调用HWMapJsSDK.[HWMarker](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/js-hwmarker-0000001051070088)(markerOptions)时，通过icon属性设置自定义图标。

```javascript
mMarker = new HWMapJsSDK.HWMarker({
    map: map,
    position: {lat: 48.85, lng: 2.35},
    label: {
        text: 'A',
        color: '#ffffff',
    },
    // 设置自定义图标
    icon: {
        scale: 2,
        // 图片地址
        url: 'location-marker.png'
    }
});
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/72/v3/-BSzVsSAQgGKeHPYL9IZpw/zh-cn_image_0000001360824161.png?HW-CC-KV=V1&HW-CC-Date=20260922T085430Z&HW-CC-Expire=31536000000&HW-CC-Sign=72BED67196B3F1122CA5512DAB6DA17B4AA3A222FD2FCE0B8ABA48126D31C3B0 "点击放大")

## 删除标记

从地图中移除标记，请调用setMap()方法并将null作为传递参数。

```screen
mMarker.setMap(null);
```

请注意，上述方法不会删除标记，它只是把标记从地图上移除。如果您希望删除标记，则应将其从地图上移除，然后将标记本身置为null即可。

```screen
mMarker.setMap(null);
mMarker = null;
```

## 修改标记

通过[HWMarker](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/js-hwmarker-0000001051070088)提供的方法对属性进行修改。例如调用setPosition(position)方法修改标记位置：

```screen
<tr>
    <td>Marker Lat:</td>
    <td><input id="markerLatInput" type="text" value="48"/></td>
</tr>
<tr>
    <td>Marker Lng:</td>
    <td><input id="markerLngInput" type="text" value="1.5"/></td>
</tr>
<script>
    var lat = Number(document.getElementById("markerLatInput").value);
    var lng = Number(document.getElementById("markerLngInput").value);
    mMarker.setPosition({lat: lat, lng: lng});
</script>
```

标记的以下属性支持自定义，具体请参见[HWMarker方法](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/js-hwmarker-0000001051070088#section9612114683711)。

|**属性**|**含义**|
|:--------------------|:-------|
|setIcon(icon)|设置标记的图标。|
|setLabel(label)|设置标记的标签。|
|setPosition(position)|设置标记的位置。|
|setZIndex(zIndex)|设置Z指数。|

## 标记事件

[HWMarker](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/js-hwmarker-0000001051070088)支持多种事件回调，如下表所示，具体请参见[HWMarker事件](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/js-hwmarker-0000001051070088#section2739104011383)。

|**事件**|**含义**|
|:---------------|:------|
|click|鼠标点击。|
|dbclick|鼠标双击。|
|icon_changed|icon改变。|
|mousedown|鼠标按下。|
|mouseup|鼠标放开。|
|position_changed|位置改变。|

以鼠标点击事件为例，要在地图上设置此侦听器，请调用[HWMarker](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/js-hwmarker-0000001051070088)对象的addListener('click', callback)方法：

```screen
function handleClick() {
      alert("On Marker Click!");
}
mMarker.addListener('click', handleClick);
```

## 可拖动标记

将标记设置为可拖动，即允许用户将标记拖动到地图上的不同位置，请调用HWMapJsSDK.[HWMarker](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/js-hwmarker-0000001051070088)(markerOptions)时，将[MarkerOptions](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/js-hwmarker-0000001051070088#section046812592385)中的draggable属性设置为true。

```screen
function initMap() {
    var mapOptions = {};
    mapOptions.center = {lat: 48.856613, lng: 2.352222};
    mapOptions.zoom = 9;
    map = new HWMapJsSDK.HWMap(document.getElementById('map'), mapOptions);
    // 在地图上放置一个可拖动的标记
    const marker = new HWMapJsSDK.HWMarker({
        map,
        position:{lat: 48.856613, lng: 2.352222},
        draggable:true
    })
}
```

## 动画标记

为标记添加动画功能，请调用HWMapJsSDK.[HWMarker](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/js-hwmarker-0000001051070088)(markerOptions)时，设置[MarkerOptions](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/js-hwmarker-0000001051070088#section046812592385)中的animation属性，选择标记动画的方式：

* DROP：首次放置标记时从上往下坠落。
* BOUNCE：弹跳动画。

```javascript
function initMap() {
    var mapOptions = {};
    mapOptions.center = {lat: 48.856613, lng: 2.352222};
    mapOptions.zoom = 9;
    mapOptions.language = 'en'

    map = new HWMapJsSDK.HWMap(document.getElementById('map'), mapOptions);

    marker = new HWMapJsSDK.HWMarker({
        map: map,
        position: {lat: 48.856613, lng: 2.352222},
        icon: {
            scale: 1,
            url: 'imageurl'
        },
        // 指定标记动画方式
        animation: 'DROP',
    });
}
```

|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|**图1**DROP ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d9/v3/FzsM0wHaSRu4XG0v35K0PA/zh-cn_image_0000001360825909.gif?HW-CC-KV=V1&HW-CC-Date=20260922T085430Z&HW-CC-Expire=31536000000&HW-CC-Sign=EB3CE9DE76F2D686B043CE2E308AD90C4F85DD78390EF38EC11BCEC906ACB978 "点击放大")|**图2**BOUNCE ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7/v3/DKkjVLkZQVubWNSqcsDJ2Q/zh-cn_image_0000001360545733.gif?HW-CC-KV=V1&HW-CC-Date=20260922T085430Z&HW-CC-Expire=31536000000&HW-CC-Sign=C7F69A7E368279BEF3AAADE9402767776EA6A1228EF8C14B00B53A873613A66C "点击放大")|

如果使用MVVM模式的组件化开发，在将要销毁前的生命周期内需要调用marker.setAnimation(null)及时销毁动画。

```screen
marker.setAnimation(null); 
```

## 文字描边

在地图上多个标记叠加或者在深色背景上显示标记时，文字注记由于没有描边导致显示效果重叠不清晰，描边则可以改善其显示效果。请调用HWMapJsSDK.[HWMarker](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/js-hwmarker-0000001051070088)(markerOptions)时，设置[MarkerLabelOption](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/js-hwmarker-0000001051070088#section473820153566)中的strokeColor与strokeWeight属性进行描边。

```javascript
function initMap() {
    var mapOptions = {};
    mapOptions.center = {lat: 48.856613, lng: 2.352222};
    mapOptions.zoom = 9;
    mapOptions.language = 'en'

    map = new HWMapJsSDK.HWMap(document.getElementById('map'), mapOptions);

    marker = new HWMapJsSDK.HWMarker({
        map: map,
        position: {lat: 48.856613, lng: 2.352222},
        zIndex: 10,
        icon: {
            scale:1,
            url:'imageurl'
        },
        label: {
            text:'A',
            // 文字描边，默认#FFF
            strokeColor: '#00bcd4',
            // 描边大小，默认0
            strokeWeight: 1
        },
    });
}
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/51/v3/_iXva0KxQU6QXxKtNDv2NA/zh-cn_image_0000001208670802.png?HW-CC-KV=V1&HW-CC-Date=20260922T085430Z&HW-CC-Expire=31536000000&HW-CC-Sign=B6C781062C0C65582BAB5B6AC05B055A0169CC7D92FBE74CDD609544A74FB435 "点击放大")

