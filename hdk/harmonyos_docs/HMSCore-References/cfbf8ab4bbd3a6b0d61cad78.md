---
name: document/cn/HMSCore-References/mapnavicross-0000001369115441
title: MapNaviCross
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-References/mapnavicross-0000001369115441
---

# MapNaviCross

|Class Info|
|:-----------------------------------|
|public class MapNaviCross 四维路口放大图模型。|

## Public Constructor Summary

|Constructor Name|
|:---------------------------------------------------------------------------------|
|[MapNaviCross](#section287022011217)() 无参构造方法创建MapNaviCross实例。|
|[MapNaviCross](#section10218183882917)(MapNaviCross cross) 根据模型对象创建MapNaviCross实例。|

## Public Field Summary

|Qualifier and Type|Field and Description|Value|
|:----------------------|:-------------------------------------------------------|:----|
|public static final int|[CROSSING_NOT_DOWNLOADED](#section19250192319483) 未下载。|0|
|public static final int|[CROSSING_DOWNLOADING](#section1020623124910) 下载中。|1|
|public static final int|[CROSSING_DOWNLOAD_SUCCESS](#section5101621144016) 下载成功。|2|
|public static final int|[CROSSING_DOWNLOAD_FAIL](#section6391103617423) 下载失败。|3|
|public static final int|[CROSSING_SHOWED](#section115361345171018) 大图展示。|4|
|public static final int|[CROSSING_CLOSED](#section11738174216115) 大图关闭。|5|

## Public Method Summary

|Qualifier and Type|Method Name and Description|
|:-----------------|:-----------------------------------------------------|
|String|[getArrowNo](#section982612521315)() 获取放大图箭头Id。|
|Bitmap|[getGraphic](#section1610414555532)() 获取图片Bitmap。|
|String|[getPatternNo](#section18881816165518)() 获取放大图模式Id。|
|int|[getStatus](#section12408924145612)() 获取放大图状态。|
|int|[getType](#section8142926195812)() 获取放大图类型。|
|void|[recycleGraphic](#section31024323185)() 释放放大图图片Bitmap。|

## Public Constructors

### MapNaviCross

|Constructor|
|:--------------------------------------------|
|public MapNaviCross() 无参构造方法创建MapNaviCross实例。|

### MapNaviCross(MapNaviCross cross)

|Constructor|
|:--------------------------------------------------------------|
|public MapNaviCross(MapNaviCross cross) 根据模型对象创建MapNaviCross实例。|

**Parameters**

|Name|Description|
|:----|:----------|
|cross|四维路口放大图模型。|

## Public Fields

### CROSSING_NOT_DOWNLOADED

|Fields|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public static final int CROSSING_NOT_DOWNLOADED 未下载。 CROSSING_NOT_DOWNLOADED：0，其余常量值参阅：[Constant-values](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/constant-values-0000001280465745#section3212737154911)。|

### CROSSING_DOWNLOADING

|Fields|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public static final int CROSSING_DOWNLOADING 下载中。 CROSSING_DOWNLOADING：1，其余常量值参阅：[Constant-values](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/constant-values-0000001280465745#section3212737154911)。|

### CROSSING_DOWNLOAD_SUCCESS

|Fields|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public static final int CROSSING_DOWNLOAD_SUCCESS 下载成功。 CROSSING_DOWNLOAD_SUCCESS：2，其余常量值参阅：[Constant-values](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/constant-values-0000001280465745#section3212737154911)。|

### CROSSING_DOWNLOAD_FAIL

|Fields|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public static final int CROSSING_DOWNLOAD_FAIL 下载失败。 CROSSING_DOWNLOAD_FAIL：3，其余常量值参阅：[Constant-values](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/constant-values-0000001280465745#section3212737154911)。|

### CROSSING_SHOWED

|Fields|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public static final int CROSSING_SHOWED 大图展示。 CROSSING_SHOWED：4，其余常量值参阅：[Constant-values](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/constant-values-0000001280465745#section3212737154911)。|

### CROSSING_CLOSED

|Fields|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public static final int CROSSING_CLOSED 大图关闭。 CROSSING_CLOSED：5，其余常量值参阅：[Constant-values](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/constant-values-0000001280465745#section3212737154911)。|

## Public Methods

### getArrowNo

|Method|
|:---------------------------------------------|
|public String getArrowNo() 您调用此API可以获取放大图箭头Id。|

**Return** **s**

|Type|Description|
|:-----|:----------|
|String|放大图箭头Id。|

### getGraphic

|Method|
|:----------------------------------------------|
|public Bitmap getGraphic() 您调用此API可以获取图片Bitmap。|

**Return** **s**

|Type|Description|
|:-----|:--------------------------------------------------------------|
|Bitmap|图片Bitmap，建议使用后手动回收，释放方法参见[recycleGraphic](#section31024323185)。|

### getPatternNo

|Method|
|:-----------------------------------------------|
|public String getPatternNo() 您调用此API可以获取放大图模式Id。|

**Return** **s**

|Type|Description|
|:-----|:----------|
|String|放大图模式Id。|

### getStatus

|Method|
|:-----------------------------------------|
|public int getStatus() 您调用此API可以获取放大图下载状态。|

**Return** **s**

|Type|Description|
|:---|:-------------------------------------|
|int|放大图下载状态，参见[下载状态](#section33714371221)。|

### getType

|Method|
|:-------------------------------------|
|public int getType() 您调用此API可以获取放大图类型。|

**Return** **s**

|Type|Description|
|:---|:----------|
|int|放大图类型。|

### recycleGraphic

|Method|
|:---------------------------------------------------|
|public void recycleGraphic() 您调用此API可以释放放大图图片Bitmap。|

