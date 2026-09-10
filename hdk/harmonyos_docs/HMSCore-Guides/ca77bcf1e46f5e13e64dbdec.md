---
name: document/cn/HMSCore-Guides/javascript-api-traffic-condition-layer-0000001147150154
title: 路况图层
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/javascript-api-traffic-condition-layer-0000001147150154
---

# 路况图层

在地图上添加路况图层，可以展示当前道路实时路况信息，道路的颜色深度表示拥堵程度，暗红色代表极度拥堵，绿色代表通畅。路况信息会频繁刷新，但不是立即刷新，您可以通过"autoRefresh"和"interval"属性控制是否自动刷新和刷新周期。

![](https://media:301772613558435531 "点击放大")  

#### 添加路况图层

调用HWMapJsSDK.[HWTrafficLayer](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/js-hwtrafficlayer-0000001194474375)(map, opts)添加路况图层。

```
function initMap() {
    var mapOptions = {};
    mapOptions.center = {
        lat: 48.856613,
        lng: 2.352222,
    };
    mapOptions.zoom = 8;
    mapOptions.language = 'en';
    mapOptions.sourceType = 'vector';
    mapOptions.navigationControl = true;
    mapOptions.locationControl = true;
    mapOptions.rotateControl = true;
    mapOptions.zoomControl = true;
    mapOptions.zoomSlider = true;
    mapOptions.scaleControl = true;
    mapOptions.copyrightControl = true;
    mapOptions.logoPosition = 'TOP_LEFT';

    map = new HWMapJsSDK.HWMap(document.getElementById('map'), mapOptions);
    // 添加实时路况图层
    trafficMap = new HWMapJsSDK.HWTrafficLayer(map, {
        // 刷新间隔，默认120s
        interval: 40,
        // 是否自动刷新，默认false
        autoRefresh: true
    });
}
```

![](https://media:301772613558463532)  
当底图为栅格图时，即sourceType设置为raster时，则不显示路况图层。  

#### 隐藏路况图层

从地图中隐藏路况图层，请调用setMap()方法并将null作为传递参数。

```
trafficMap.setMap(null);
```

