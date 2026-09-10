---
name: document/cn/graphics-References/camera_intrinsics-0000001051140882
title: ARCameraIntrinsics
uri: https://developer.huawei.com/consumer/cn/doc/graphics-References/camera_intrinsics-0000001051140882
---

# ARCameraIntrinsics

|Class Info|
|:--------------------------------------------------------------------------------------------------------|
|public class ARCameraIntrinsics 用于获取物理相机的离线内参的对象，可通过该对象获取相机的焦距、图像尺寸、主轴点和畸变参数。该功能AR Engine Server 2.10后可用。|

#### Public Method Summary

|Qualifier and Type|Method Name and Description|
|:-----------------|:-----------------------------------------------------------------|
|float\[\]|[getDistortions](#section5610317194619)() 获取相机的畸变参数。|
|float\[\]|[getFocalLength](#section167867619467)() 获取相机的焦距（定焦焦距）。|
|int\[\]|[getImageDimensions](#section646542420458)() 获取相机预览流图像的尺寸，包括宽度和高度。|
|float\[\]|[getPrincipalPoint](#section421641114512)() 获取相机的主轴点。|

#### Public Methods

#### getDistortions

|Method|
|:--------------------------------------------------|
|public float\[\] getDistortions() 获取相机的畸变系数。包含5个分量。|

Returns  

|Type|Description|
|:--------|:-----------------------------------------------------------------------------------------------|
|float\[\]|相机的畸变参数。返回的数组大小为5，float \[0\]\~ float \[2\]表示k1，k2，k3（径向畸变系数）， float \[3\]\~ float \[4\]是切向畸变系数。|

#### getFocalLength

|Method|
|:-----------------------------------------------|
|public float\[\] getFocalLength() 获取相机的焦距（定焦焦距）。|

Returns  

|Type|Description|
|:--------|:---------------------------------------------------------------------------------|
|float\[\]|相机的焦距（定焦焦距）。返回的数组大小为2，float\[0\]代表相机内参矩阵x(u)方向的像素焦距，float\[1\]代表相机内参矩阵y(u)方向的像素焦距。|

#### getImageDimensions

|Method|
|:-------------------------------------------------------------|
|public int\[\] getImageDimensions() 获取相机图像的尺寸，包括宽度和高度（以像素为单位）。|

Returns  

|Type|Description|
|:------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|int\[\]|相机图像的尺寸。返回数组大小为2的图像尺寸，int\[0\]对应width，int\[1\]对应height。 注意： 该接口获取到的是预览图的分辨率（可通过[setPreviewSize](https://developer.huawei.com/consumer/cn/doc/graphics-References/config_base-0000001050119488#section1231643615527)配置）。当屏幕为竖屏时，width为短边；屏幕为横屏时，width为长边。若关闭自动旋转，则width均为短边。|

#### getPrincipalPoint

|Method|
|:-----------------------------------------------------------|
|public float\[\] getPrincipalPoint() 获取相机的主轴点，主轴点位置以像素为单位表示。|

Returns  

|Type|Description|
|:--------|:----------------------------------------------------------|
|float\[\]|相机的主轴点。返回的数组大小为2，float\[0\]代表主轴点的x坐标值，float\[1\]代表主轴点的y坐标值。|

