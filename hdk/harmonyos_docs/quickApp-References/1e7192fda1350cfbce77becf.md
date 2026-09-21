---
name: document/cn/quickApp-References/quickapp-api-image-0000001074632505
title: 图片处理
uri: https://developer.huawei.com/consumer/cn/doc/quickApp-References/quickapp-api-image-0000001074632505
---

# 图片处理

## 接口声明

在manifest.json文件的 features属性中增加如下配置。

```screen
{"name": "system.image"}
```

## 导入模块

在调用接口页面的<script>部分增加如下配置。

```screen
import image from '@system.image'
```

或

```screen
var image = require("@system.image")
```

## 使用限制

|限制条件|说明|
|:---|:-----------|
|适用终端|手机、平板、智慧屏、车机|
|适用区域|全球|

## 接口定义

|接口|描述|
|:--------------------------------------------------------|:----------------------------------------------------------------------------------|
|[image.compressImage(OBJECT)](#section1722530144112)|压缩指定路径的图片。|
|[image.getImageInfo(OBJECT)](#section112541556124717)|获取图片的信息。|
|[image.editImage(OBJECT)](#section11344115105210)|编辑图片，系统提供基础基于矩形框的裁剪图片UI组件，返回裁剪后保存的图片路径。|
|[image.getExifAttributes(OBJECT)](#section1148715612345)|获取图片的exif信息。支持的格式包括：JPEG，PNG，WebP，HEIF，DNG，CR2，NEF，NRW，ARW，RW2，ORF，PEF，SRW，RAF，GIF。|
|[image.setExifAttributes(OBJECT)](#section15122205417386)|设置图片的exif信息。设置操作会在所给图片上进行，不会生成新的图片。支持的格式：JPEG，PNG。|
|[image.applyOperations(OBJECT)](#section1386183111419)|对图片按顺序执行编辑操作。|
|[image.pickColor(OBJECT)](#section947185181116)|根据图片生成颜色值，用于获取背景或悬浮文字颜色。|

### image.compressImage(OBJECT)

**描述**

压缩指定路径的图片。

**OBJECT参数**

|参数|类型|默认值|是否必填|说明|
|:-------|:-------|:---|:---|:------------------------------------------------------------|
|uri|string|-|是|源文件的uri，仅支持本地图片路径，如果是应用内资源路径， 不允许是相对路径。|
|quality|number|-|否|图片的压缩质量，0 ~ 100之间。|
|ratio|number|-|否|尺寸压缩倍数，大于0，值越大，图片尺寸越小，假如quality和ratio同时填写的场景下会先进尺寸压缩，后进行质量压缩。|
|format|string|JPEG|否|压缩格式，支持三种格式：JPEG，PNG，WEBP。|
|success|function|-|否|成功回调。|
|fail|function|-|否|失败回调。|
|complete|function|-|否|执行结束后的回调。|

**success返回值：**

|参数|类型|说明|
|:--|:-----|:-----------------------------|
|uri|string|压缩成功后的文件路径uri，会保存在应用的cache目录中。|

**fail返回错误码：**

|错误码|说明|
|:--|:-------|
|202|参数错误。|
|300|I/O错误。|
|301|文件路径不存在。|

**示例代码**

```screen
image.compressImage({
    uri: "tmp://abc.jpg",
        quality:80,
        ratio: 2,
        format: "JPEG",
    success: function(data) {
        console.log(data.uri)
    },
    fail: function(data, code) {
        console.log("handling fail, code=" + code);
    }
})
```

### image.getImageInfo(OBJECT)

**描述**

获取图片的信息。

**OBJECT参数**

|参数|类型|是否必填|说明|
|:-------|:-------|:---|:-------------------------------------|
|uri|string|是|源文件的uri，仅支持本地图片路径，如果是应用内资源路径，不允许是相对路径。|
|success|function|否|成功回调。|
|fail|function|否|失败回调。|
|complete|function|否|执行结束后的回调。|

**success返回值：**

|参数|类型|说明|
|:-----|:-----|:-------------|
|uri|string|图片地址。|
|width|number|图片的宽度，单位为px。|
|height|number|图片的高度，单位为px。|
|size|number|图片的大小，单位为Byte。|

**fail返回错误码：**

|错误码|说明|
|:--|:-------|
|202|参数错误。|
|300|I/O错误。|
|301|文件路径不存在。|

**示例代码**

```screen
image.getImageInfo({
    uri: "tmp://abc.jpg",
    success: function(data) {
        console.log(data.uri + data.width + data.height + data.size)
    },
    fail: function(data, code) {
        console.log("handling fail, code=" + code);
    }
})
```

### image.editImage(OBJECT)

**描述**

编辑图片，系统提供基础基于矩形框的裁剪图片UI组件，返回裁剪后保存的图片路径。

该接口会调用系统的裁剪图片能力，将图片临时拷贝至SD卡，裁剪结束后删除此临时文件。

**OBJECT参数**

|参数|类型|是否必填|说明|
|:-------|:-------|:---|:-------------------------------------|
|uri|string|是|源文件的uri，仅支持本地图片路径，如果是应用内资源路径，不允许是相对路径。|
|success|function|否|成功回调。|
|fail|function|否|失败回调。|
|cancel|function|否|用户取消图片编辑。|
|complete|function|否|执行结束后的回调。|

**success返回值：**

|参数|类型|说明|
|:--|:-----|:-------------|
|uri|string|裁剪后图片的文件路径uri。|

**fail返回错误码：**

|错误码|说明|
|:--|:-------|
|202|参数错误。|
|300|I/O错误。|
|301|文件路径不存在。|

**示例代码**

```screen
image.editImage({
    uri: "tmp://abc.jpg",
    success: function(data.uri) {
        console.log(data.uri)
    },
    fail: function(data, code) {
        console.log("handling fail, code=" + code);
    }
})
```

### image.getExifAttributes(OBJECT)（1035+）

**描述**

获取图片的exif信息。支持的格式包括：JPEG，PNG，WebP，HEIF，DNG，CR2，NEF，NRW，ARW，RW2，ORF，PEF，SRW，RAF，GIF。

**OBJECT参数**

|参数|类型|是否必填|说明|
|:-------|:-------|:---|:-------------------|
|uri|string|是|图片地址，可以是数据文件或应用内的资源。|
|success|function|否|成功回调。|
|fail|function|否|失败回调。|
|complete|function|否|执行结束后的回调。|

**success返回值：**

|参数|类型|说明|
|:---------|:-----|:---------|
|uri|string|图片路径。|
|attributes|object|图片的exif信息。|

**fail返回错误码：**

|错误码|说明|
|:--|:-------|
|202|参数错误。|
|300|I/O错误。|
|301|文件路径不存在。|

**示例代码**

```screen
image.getExifAttributes ({
    uri: "tmp://abc.jpg",
    success: function(data) {
        console.log(JSON.stringify(data));
    },
    fail: function(data, code) {
        console.log("handling fail, code=" + code);
    }
})
```

### image.setExifAttributes(OBJECT)（1035+）

**描述**

设置图片的exif信息。设置操作会在所给图片上进行，不会生成新的图片。支持的格式：JPEG，PNG。

**OBJECT参数**

|参数|类型|是否必填|说明|
|:---------|:-------|:---|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|uri|string|是|图片地址，可以是数据文件或应用内的资源。|
|attributes|object|是|要设置的exif属性列表，允许传入的属性名。支持的属性包括： Artist, BitsPerSample, Compression, Copyright, DateTime, ImageDescription, ImageLength, ImageWidth, JPEGInterchangeFormat, JPEGInterchangeFormatLength, Make, Model, Orientation, PhotometricInterpretation, PlanarConfiguration, PrimaryChromaticities, ReferenceBlackWhite, ResolutionUnit, RowsPerStrip, SamplesPerPixel, Software, StripByteCounts, StripOffsets, TransferFunction, WhitePoint, XResolution, YCbCrCoefficients, YCbCrPositioning, YCbCrSubSampling, YResolution, ApertureValue, BrightnessValue, CFAPattern, ColorSpace, ComponentsConfiguration, CompressedBitsPerPixel, Contrast, CustomRendered, DateTimeDigitized, DateTimeOriginal, DeviceSettingDescription, DigitalZoomRatio, ExifVersion, ExposureBiasValue, ExposureIndex, ExposureMode, ExposureProgram, ExposureTime, FNumber, FileSource, Flash, FlashEnergy, FlashpixVersion, FocalLength, FocalLengthIn35mmFilm, FocalPlaneResolutionUnit, FocalPlaneXResolution, FocalPlaneYResolution, GainControl, ISOSpeedRatings, ImageUniqueID, LightSource, MakerNote, MaxApertureValue, MeteringMode, NewSubfileType, OECF, PixelXDimension, PixelYDimension, RelatedSoundFile, Saturation, SceneCaptureType, SceneType, SensingMethod, Sharpness, ShutterSpeedValue, SpatialFrequencyResponse, SpectralSensitivity, SubfileType, SubSecTime, SubSecTimeDigitized, SubSecTimeOriginal, SubjectArea, SubjectDistance, SubjectDistanceRange, SubjectLocation, UserComment, WhiteBalance, GPSAltitude, GPSAltitudeRef, GPSAreaInformation, GPSDOP, GPSDateStamp, GPSDestBearing, GPSDestBearingRef, GPSDestDistance, GPSDestDistanceRef, GPSDestLatitude, GPSDestLatitudeRef, GPSDestLongitude, GPSDestLongitudeRef, GPSDifferential, GPSImgDirection, GPSImgDirectionRef, GPSLatitude, GPSLatitudeRef, GPSLongitude, GPSLongitudeRef, GPSMapDatum, GPSMeasureMode, GPSProcessingMethod, GPSSatellites, GPSSpeed, GPSSpeedRef, GPSStatus, GPSTimeStamp, GPSTrack, GPSTrackRef, GPSVersionID, InteroperabilityIndex, ThumbnailImageLength, ThumbnailImageWidth, DNGVersion, DefaultCropSize, ThumbnailImage, PreviewImageStart, PreviewImageLength, AspectFrame, SensorBottomBorder, SensorLeftBorder, SensorRightBorder, SensorTopBorder, ISO, JpgFromRaw|
|success|function|否|成功回调。|
|fail|function|否|失败回调。|
|complete|function|否|执行结束后的回调。|

**success返回值：**

|参数|类型|说明|
|:---------|:-----|:---------|
|uri|string|图片路径。|
|attributes|object|图片的exif信息。|

**fail返回错误码：**

|错误码|说明|
|:--|:-------|
|202|参数错误。|
|300|I/O错误。|
|301|文件路径不存在。|

**示例代码**

```screen
image.setExifAttributes({
    uri:"/common/img/xmad.jpg",
    attributes:{
        Model:"iphone"
    },
    success: function (data) {
        console.log("success");
    },
    fail: function (data, code) {
        console.log("applyOperation fail, code=" + code);
        prompt.showToast({
            message: "applyOperation fail, code=" + code
        })
    }
});
```

### image.applyOperations(OBJECT)

**描述**

对图片按顺序执行编辑操作。

在顺序执行编辑操作列表中的操作时，上一步操作生成的结果会作为下一步操作的输入，坐标系也是以上一步操作生成的结果的左上角为坐标原点重新确定的。

**OBJECT参数**

|参数|类型|是否必填|说明|
|:---------|:----------|:---|:----------------------------------------------|
|uri|string|是|源文件的uri，仅支持本地图片路径，假如是应用内资源路径，不允许是相对路径。|
|operations|objectarray|否|编辑操作列表，按照出现的先后顺序执行。如果不提供，则不对图片进行编辑操作，但是会重新保存图片。|
|quality|integer|否|图片的压缩质量，0 ~ 100之间，默认是75。|
|format|string|否|图片保存格式，支持JPEG，PNG，WEBP三种格式。默认使用JPEG格式。|
|success|function|否|成功回调。|
|fail|function|否|失败回调。|
|complete|function|否|执行结束后的回调。|

**success返回值：**

|参数|类型|说明|
|:--|:-----|:-----------------------------|
|uri|string|裁剪后图片的文件路径uri，会保存到应用的cache分区中。|

**fail返回错误码：**

|错误码|说明|
|:--|:-------|
|202|参数错误。|
|300|I/O错误。|
|301|文件路径不存在。|

支持的编辑操作如下：

* 图片裁剪：如果裁剪区域超出图片本身的范围，则会导致失败。

  |参数|类型|是否必填|说明|
  |:-----|:-----|:---|:---------------|
  |action|string|是|必须是crop。|
  |x|number|否|裁剪的起始点的x坐标，默认是0。|
  |y|number|否|裁剪的起始点的y坐标，默认是0。|
  |width|number|是|裁剪的图片宽度。|
  |height|number|是|裁剪的图片高度。|

* 图片缩放

  |参数|类型|是否必填|说明|
  |:-----|:-----|:---|:-------------------------------|
  |action|string|是|必须是scale。|
  |scaleX|number|否|宽度的缩放比率，缩放后宽度会变成原图的scaleX倍。默认是1。|
  |scaleY|number|否|高度的缩放比率，缩放后高度会变成原图的scaleY倍。默认是1。|

* 图片旋转

  |参数|类型|是否必填|说明|
  |:-----|:-----|:---|:---------|
  |action|string|是|必须是rotate。|
  |degree|number|是|旋转的角度。|

**示例代码**

```screen
image.applyOperations({
    uri: 'internal://cache/123.png',
    operations: [
    {
        action: 'scale',
        scaleX: 0.5,
        scaleY: 0.5
    },
    {
        action: 'crop',
        width: 200,
        height: 200
    },
    {
        action: 'rotate',
        degree: 90,
    }
  ],
  quality: 90,
  format: 'webp',
  success: function(data) {
      console.log("handling success: " + data.uri);
  }，
  fail: function(data, code) {
      console.log("handling fail, code=" + code);
  }
})
```

### image.pickColor(OBJECT)（1040+，华为扩展接口，非厂商联盟规范）

**描述**

根据图片生成颜色值，用于获取背景或悬浮文字颜色。如果卡片需要接入此接口，需将版本号配置为1045。

**OBJECT参数**

|参数|类型|是否必填|说明|
|:-------|:-------|:---|:------------------|
|uri|string|是|图片文件的uri，支持本地和网络图片。|
|success|function|否|成功回调。|
|fail|function|否|失败回调。|
|complete|function|否|执行结束后的回调。|

**success返回值：**

|参数|类型|说明|
|:----|:-----|:--------------------|
|color|string|返回图片计算的色值，例如：#e5e5e5。|

**fail返回错误码：**

|错误码|说明|
|:--|:-------|
|202|参数错误。|
|300|I/O错误。|
|301|文件路径不存在。|

**示例代码**

```screen
image.pickColor({
    uri: "tmp://abc.jpg",
    success: function(data) {
        console.log(data.color)
    },
    fail: function(data, code) {
        console.log("handling fail, code=" + code);
    }
})
```

## Demo

```screen
<template>
  <!-- Only one root node is allowed in template. -->
  <div class="container">
    <input class="btn" type="button" value="compressImage" onclick="compressImage" />
    <input class="btn" type="button" value="getImageInfo" onclick="getImageInfo" />
    <input class="btn" type="button" value="editImage" onclick="editImage" />
    <input class="btn" type="button" value="applyOperations" onclick="applyOperations" />
    <input class="btn" type="button" value="pickColor" onclick="pickColor" />
    <input class="btn" type="button" value="获取exif信息" onclick="getExifAttributes" />
    <input class="btn" type="button" value="设置exif信息" onclick="setExifAttributes" />
    <text class="pickColor" style="background-color: {{pickedColor}}">pickedColor</text>
    <image class="img" src="{{compressImageUri}}"></image>
    <image class="img" src="{{editImageUri}}"></image>
    <image class="img" src="{{applyOperationsImageUri}}"></image>
  </div>
</template>
<style>
  .container {
    flex-direction: column;
    align-content: center;
    align-items: center;
    padding: 20px;
  }
  .img {
    margin-bottom: 50px;
    margin-top: 50px;
  }
  .btn {
    width: 300px;
    height: 80px;
    text-align: center;
    margin-bottom: 50px;
    color: #ffffff;
    font-size: 30px;
    background-color: #0faeff;
  }
  .pickColor {
    width: 300px;
    height: 80px;
    text-align: center;
    color: #000000;
    font-size: 30px;
    background-color: #0faeff;    
  }
</style>
<script>
  import image from '@system.image'
  import prompt from '@system.prompt'
  module.exports = {
    data: {
      imagePath: "/Common/compress.jpg", //replace to your local image path
      pickColorSrc: "",
      pickedColor: "#0faeff",
      compressImageUri: "",
      editImageUri: "",
      applyOperationsImageUri: ""
    },
    compressImage: function () {
      var that = this;
      image.compressImage({
        uri: "/Common/compress.jpg",  //replace to your local image path
        ratio: 2,
        format: "JPEG",
        success: function (data) {
          console.log(data.uri);
          prompt.showToast({
            message: "success:" + data.uri
          });
          that.compressImageUri = data.uri
        },
        fail: function (data, code) {
          console.log("handling fail, code=" + code);
          prompt.showToast({
            message: "handling fail, code=" + code + "----data" + data
          })
        }
      })
    },
    pickColor: function () {
      var that = this;
      that.pickColorSrc = that.imagePath;
      image.pickColor({
        uri: that.pickColorSrc,
        success: function (data) {
          console.log(data.color);
          that.pickedColor = data.color;
        },
        fail: function (data, code) {
          console.log("handling fail, code=" + code);
        }
      });
    },
    getImageInfo: function () {
      image.getImageInfo({ 
        uri: "/Common/compress.jpg", //replace to your local image path
        success: function (data) {
          console.log("uri:" + data.uri + "\n" + "width:" + data.width + "\n" + "height:" + data.height + "\n" + "size:" + data.size)
          prompt.showToast({
            message: "uri:" + data.uri + "\n" + "width:" + data.width + "\n" + "height:" + data.height + "\n" + "size:" + data.size
          })
        },
        fail: function (data, code) {
          console.log("handling fail, code=" + code);
          prompt.showToast({
            message: "code=" + code
          })
        }
      })
    },
    editImage: function () {
      var that = this;
      image.editImage({
        uri: "/Common/compress.jpg", //replace to your local image path
        success: function (data) {
          console.log(data.uri);
          that.editImageUri = data.uri;
        },
        cancel: function () {
          console.log("edit cancel");
          prompt.showToast({
            message: "edit cancel"
          })
        },
        fail: function (data, code) {
          console.log("edit fail, code=" + code);
          prompt.showToast({
            message: "edit fail, code=" + code
          })
        }
      })
    },
    applyOperations() {
      var that = this;
      image.applyOperations({
        uri: "/Common/compress.jpg", //replace to your local image path
        operations: [
          {
            action: 'scale',
            scaleX: 0.5,
            scaleY: 0.5
          },
          {
            action: 'crop',
            width: 200,
            height: 200
          },
          {
            action: 'rotate',
            degree: 90,
          }
        ],
        quality: 90,
        format: 'webp',
        success: function (data) {
          console.log(data.uri);
          that.applyOperationsImageUri = data.uri;
        },
        fail: function (data, code) {
          console.log("applyOperation fail, code=" + code);
          prompt.showToast({
            message: "applyOperation fail, code=" + code
          })
        }
      })
    },
    getExifAttributes() {
      image.getExifAttributes({
        uri: "/Common/compress.jpg", //replace to your local image path
        success: function (data) {
          console.log(JSON.stringify(data));
          prompt.showToast({
            message: JSON.stringify(data)
          })
        },
        fail: function (data, code) {
          console.log("applyOperation fail, code=" + code);
          prompt.showToast({
            message: "applyOperation fail, code=" + code
          })
        }
      });
    },
    setExifAttributes() {
      image.setExifAttributes({
        uri: "/Common/compress.jpg", //replace to your local image path
        attributes: {
          Model: "iphone"
        },
        success: function (data) {
          console.log("success");
          prompt.showToast({
            message: "设置成功"
          })
        },
        fail: function (data, code) {
          console.log("applyOperation fail, code=" + code);
          prompt.showToast({
            message: "applyOperation fail, code=" + code
          })
        }
      });
    }
  }
</script>
```

## 版本更新说明

|版本|发布日期|描述|
|:---|:---------|:-----------------------------------------------------------------------------------------------------|
|1040|2019-06-24|* 新增getExifAttributes和setExifAttributes，用于设置和获取图片的exif信息。 * 新增image.pickColor，根据图片生成颜色值，用于获取背景或悬浮文字颜色。|

