---
name: document/cn/quickApp-References/quickgame-api-mediapic-0000001130976503
title: 图片
uri: https://developer.huawei.com/consumer/cn/doc/quickApp-References/quickgame-api-mediapic-0000001130976503
---

# 图片

> 说明
>
> 从1078版本开始，接口前缀由hbs调整为qg，原hbs仍支持。

## 接口定义

|接口|描述|
|:--------------------------------------------------------------|:--------------------------------------|
|[qg.chooseImage(Object object)](#section19640243152811)|从系统相册选择图片或者拍照。|
|[qg.previewImage(Object object)](#section14798161412334)|在新场景中全屏预览图片。|
|[qg.saveImageToPhotosAlbum(Object object)](#section31025043518)|保存图片到系统相册，调用之前需要用户授权。|
|[qg.saveImageTemp(Object object)](#section198629993812)|异步将二进制图像数据保存为本地临时图片文件。|
|[qg.saveImageTempSync(Object object)](#section17290101011406)|同步将二进制图像数据保存为本地临时图片文件，保存完成后，返回本地临时文件路径。|

### qg.chooseImage(Object object)

* **描述**

  从系统相册选择图片或者拍照。


* 参数

  |参数|类型|必填(M)/选填(O)|说明|
  |:---------|:-----------|:----------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
  |count|number|O|最多可以选择的图片张数。|
  |sourceType|array.string|O|选择图片的来源。album表示从相册中选择图片，camera表示使用相机获取图片。默认值为["album","camera"]。 * 如果count没有设置值，设置为album时，count默认最多选择9张图片；设置为camera时，count默认最多选择1张图片；两个同时设置count默认最多选择9张图片。 * 如果count设置值，选择图片数以count为准。|
  |success|function|O|接口调用成功的回调函数。|
  |fail|function|O|接口调用失败的回调函数。|
  |complete|function|O|若有函数传入，将在成功、失败后调用该函数。|

  * success回调函数参数

    |参数|类型|说明|
    |:------------|:-----------|:-------------|
    |tempFilePaths|array.string|图片的本地临时文件路径列表。|
    |tempFiles|string[]|图片的本地临时文件列表|

  * tempFiles参数

    |属性名称|类型|说明|
    |:---|:-----|:-------------|
    |path|string|本地临时文件路径。|
    |size|number|本地临时文件大小，单位：B。|


* 示例代码

  ```screen
  qg.chooseImage({
          count: 1,
          sourceType: ['album', 'camera'],
          success (res) {
                  console.log("qg.chooseImage success"+ res.tempFilePaths);
          },
          fail(){
                  console.log("qg.chooseImage fail");
          },
          complete(){
                  console.log("qg.chooseImage complete");
         }
  })
  ```

### qg.previewImage(Object object)

* 描述 在新场景中全屏预览图片。


* 参数

  |参数|类型|必填(M)/选填(O)|说明|
  |:-------|:-----------|:----------|:------------------------|
  |urls|array.string|M|需要预览的图片链接列表。|
  |current|string|O|当前显示图片的链接。默认显示urls的第一张图片。|
  |success|function|O|接口调用成功的回调函数。|
  |fail|function|O|接口调用失败的回调函数。|
  |complete|function|O|若有函数传入，将在成功、失败后调用该函数。|


* 示例代码

  ```screen
  qg.previewImage({
          urls: []  //需要预览图片的http链接列表
  })
  ```

### qg.saveImageToPhotosAlbum(Object object)

* 描述 保存图片到系统相册，调用之前需要用户授权。


* 参数

  |参数|类型|必填(M)/选填(O)|说明|
  |:-------|:-------|:----------|:---------------------------------|
  |filePath|string|M|图片文件路径，可以是临时文件路径或永久文件路径，不支持网络图片路径。|
  |success|function|O|接口调用成功的回调函数。|
  |fail|function|O|接口调用失败的回调函数。|
  |complete|function|O|若有函数传入，将在成功、失败后调用该函数。|


* 示例代码

  ```screen
  qg.saveImageToPhotosAlbum({
          filePath : 'image path',
          success() {
               console.log("save success");
          }
  })
  ```

### qg.saveImageTemp(Object object)

* 描述 异步将二进制图像数据保存为本地临时图片文件。


* 参数

  |参数|类型|必填(M)/选填(O)|说明|
  |:-------|:---------|:----------|:---------------------------------|
  |data|uint8array|M|像素数据，数据类型为RGBA8888格式的Uint8Array数组。|
  |width|number|M|写入图片的宽度，最大宽度为4096。|
  |height|number|M|写入图片的高度，最大高度为4096。|
  |fileType|string|M|写入图片的格式，支持类型为jpg、png。|
  |reverse|boolean|O|是否需要将写入的数据按y轴反转，默认为false。|
  |success|function|O|接口调用成功的回调函数。|
  |fail|function|O|接口调用失败的回调函数。|
  |complete|function|O|若有函数传入，将在成功、失败后调用该函数。|

  * success回调函数参数

    |参数|类型|说明|
    |:-----------|:-----|:--------------|
    |tempFilePath|string|保存完成后，本地临时文件路径。|
    |errMsg|string|错误信息|


* 示例代码

  ```screen
  qg.saveImageTemp({
      'data': data,
      'width': width,
      'height': height,
      'fileType': "png",
      'reverse': true,
      'success': function (res) {
          rt.saveImageToPhotosAlbum({
              "filePath": res.tempFilePath,
              success: successCb,
              fail: failCb,
            });
      },
      'fail': function (res) {
          failCb("截屏失败")
      }
  });
  ```

### qg.saveImageTempSync(Object object)

* 描述 同步将二进制图像数据保存为本地临时图片文件，保存完成后，返回本地临时文件路径。


* 参数

  |参数|类型|必填(M)/选填(O)|说明|
  |:-------|:---------|:----------|:---------------------------------|
  |data|uint8array|M|像素数据，数据类型为RGBA8888格式的Uint8Array数组。|
  |width|number|M|写入图片的宽度，最大宽度为4096。|
  |height|number|M|写入图片的高度，最大高度为4096。|
  |fileType|string|M|写入图片的格式，支持类型为jpg、png。|
  |reverse|boolean|O|是否需要将写入的数据按y轴反转，默认为false。|


* 示例代码

  ```screen
  var result = qg.saveImageTempSync({
          data : [],
          width : 666,
          height : 666,
          fileType : 'jpg',
          reverse : false
  })
  ```

