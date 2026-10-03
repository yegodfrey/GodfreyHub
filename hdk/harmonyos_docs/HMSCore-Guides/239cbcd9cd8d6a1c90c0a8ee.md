---
name: document/cn/HMSCore-Guides/javascript-api-drawinglayer-0000001279177326
title: Drawing Layer
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/javascript-api-drawinglayer-0000001279177326
---

# Drawing Layer

Drawing layer是一个绘图插件，用户可以使用鼠标在地图上绘制图形。例如，在地图上单击鼠标绘制点，或多次点击绘制一个多边形。Drawing layer绘制工具栏图标包括：小手、圆形、标记、多边形、折线和矩形。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/90/v3/fzdMlmmlQ1iF2QP1IK1dvw/zh-cn_image_0000001330792153.png?HW-CC-KV=V1&HW-CC-Date=20260922T085430Z&HW-CC-Expire=31536000000&HW-CC-Sign=9BD5785F3D62BED14CE0F3BC49808EB285391AF176576448BBAD9F9585E0D4AA)

## 鼠标操作绘制过程

* 小手：点击工具栏小手图标，页面中的鼠标浮标变成小手。您可以通过拖动鼠标平移地图。
* 标记：点击工具栏标记图标，页面中的鼠标浮标变成十字形。您可以点击地图上任意处生成标记图标。
* 圆形：点击工具栏圆形图标，页面中的鼠标浮标变成十字形。您可以点击地图上任意处选定圆心，拖拽鼠标调整半径，再次点击鼠标完成圆形绘制。
* 多边形：点击工具栏多边形图标，页面中的鼠标浮标变成十字形。您可以点击地图上任意点开始绘制多边形，每次点击都会把当前点和上个点用线段连接起来。双击鼠标，末点和初始点会自动连接，形成闭合多边形，完成绘制。如果您已经点击了2个以上的点，那么双击鼠标即可完成多边形绘制。如果双击处距离初始点3px或者更近时，多边形绘制会自动取消。
* 折线：点击工具栏折线图标，页面中的鼠标浮标变成十字形。您可以点击地图上任意点开始绘制折线，每次点击都会把当前点和上个点用线段连接起来。双击鼠标，添加末点到双击位置，折线绘制完成。如果您已经点击了2个以上的点，那么双击鼠标即可完成折线绘制。如果双击处距离初始点3px或者更近时，折线绘制会自动取消。
* 矩形：点击工具栏矩形图标，页面中的鼠标浮标变成十字形。您可以点击地图上任意位置开始绘制矩形，拖动鼠标调整矩形大小，再次点击，完成矩形绘制。

## 绘图库使用

1. 引入drawing.js文件。

   ```screen
   <script
        src="https://mapapi.cloud.huawei.com/mapjs/v1/api/js/drawing.js">
   </script>
   ```

2. 调用drawing.[DrawingManager](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/js-drawingmanager-0000001230137719)(options)创建drawingManager对象。

   ```javascript
   // 创建drawingManager对象
   drawingManager = new drawing.DrawingManager({});
   // 绑定到地图
   drawingManager.setMap(map , HWMapJsSDK);
   ```

3. 传入[DrawingManagerOptions](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/js-drawingmanager-0000001230137719#section20368181194214)初始化参数，修改控制器位置、设置绘图模式等。

   示例代码如下：

   ```javascript
   "JavaScript"
   function initMap() {
     mapOptions.center = {lat: 41.04473887597426, lng: 28.956678750226562};
     mapOptions.zoom = 11;
     mapOptions.language = 'ENG';
     // mapOptions.sourceType = 'raster';
     map = new HWMapJsSDK.HWMap(document.getElementById('myMap'), mapOptions);
     map.setPinchRotate(false);

     const onComplete = (result, type) => { 
       if (type === drawableObjectTypes.hwObject) {
         console.log('onComplete: ', result.getInstance(), ", object type: ", result.getObjectType());
       } else {
         console.log('onComplete: ', result);
       }
     };
     const onChange = (result, type) => { 
       if (type === drawableObjectTypes.hwObject) {
         console.log('onChange: ', result.getInstance(), ", object type: ", result.getObjectType());
       } else {
         console.log('onChange: ', result);
       }
     };

     drawingManager = new drawing.DrawingManager({
         drawingMode: drawing.OverlayType.POINT,
         drawingControl: true,
         drawingControlOptions: {
             position: drawing.ControlPosition.TOP_RIGHT,
             drawingModes: [
                drawing.OverlayType.POINT,
                drawing.OverlayType.CIRCLE,
                drawing.OverlayType.POLYGON,
                drawing.OverlayType.LINE_STRING,
                drawing.OverlayType.BOX,
         ],
       },
       markerOptions: {
         icon: {
           url: 'marker.png',
         },

       },
       circleOptions: {
          fillColor: '#ff000d',
          strokeColor: '#ff2',
          strokeWeight: 4,
          fillOpacity: 0.2,
          editable: true,
       },
       polygonOptions: {
          fillColor: '#33ff00',
          fillOpacity: 0.6,
          strokeColor: '#0217f7',
          strokeWeight: 6,
          editable: true,
       },
       polylineOptions: {
          strokeColor: '#ffc003',
          strokeWeight: 5,
          editable: true,
       },
       boxOptions: {
          fillColor: '#0066ff',
          strokeColor: '#0217f7',
          fillOpacity: 0.5,
          strokeWeight: 3,
          editable: true,
       },
       onComplete,
       onChange,
     });

     drawingManager.setMap(map , HWMapJsSDK);
   }
   ```

   ```screen
   "HTML"
   <div id="map"></div>
   <div id="container">
       <button id="btn-undo"></button>
   </div>
   ```

   ```screen
   "CSS"
   <style>
       body,
       html,
       * {
           padding: 0;
           margin: 0;
       }

       #demo {
           height: 100%;
           width: 100%;
       }

       #map {
           position: absolute;
           height: 100%;
           width: 100%;
       }
   </style
   ```

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ce/v3/T2Tu2H2hQbGd6soG7FaNsw/zh-cn_image_0000001331067733.png?HW-CC-KV=V1&HW-CC-Date=20260922T085430Z&HW-CC-Expire=31536000000&HW-CC-Sign=8CC50741DD62DB3CD02D6745B95E8CE26ACB8F1150D8C05F163473C66A8D68D0 "点击放大")

