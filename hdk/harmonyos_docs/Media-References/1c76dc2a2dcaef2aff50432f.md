---
name: document/cn/Media-References/hvevideolane-0000001157249168
title: HVEVideoLane
uri: https://developer.huawei.com/consumer/cn/doc/Media-References/hvevideolane-0000001157249168
---

# HVEVideoLane

|Class Info|
|:-----------------------------------|
|public class HVEVideoLane 视频和图片资源泳道。|

## Public Method Summary

|Qualifier and Type|Method Name and Description|
|:------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|boolean|[addCurveSpeed](#section1495772031414)(int index, String name, List<[HVESpeedCurvePoint](https://developer.huawei.com/consumer/cn/doc/Media-References/hvespeedcurvepoint-0000001224821733)> speedCurvePoints) 根据离散点添加资源曲线变速。|
|boolean|[addCurveSpeed](#section136761310102010)(int index, String name, String path) 根据下载到本地的素材的地址添加资源曲线变速。|
|[HVEImageAsset](https://developer.huawei.com/consumer/cn/doc/Media-References/hveimageasset-0000001156929212)|[appendImageAsset](#section2072316612237)(String path) 在泳道的尾部添加图片资源。|
|[HVEImageAsset](https://developer.huawei.com/consumer/cn/doc/Media-References/hveimageasset-0000001156929212)|[appendImageAsset](#section8980153074613)(Bitmap bitmap, long duration) 在泳道的尾部添加图片资源。 > 说明 > 此接口仅适用于把少量Bitmap图片导出为视频的简单场景。|
|[HVEImageAsset](https://developer.huawei.com/consumer/cn/doc/Media-References/hveimageasset-0000001156929212)|[appendImageAsset](#section11362141944019)(String path, long start) 在泳道的指定位置添加图片资源。|
|[HVEImageAsset](https://developer.huawei.com/consumer/cn/doc/Media-References/hveimageasset-0000001156929212)|[appendImageAsset](#section67150812414)(String path, long duration, int width, int height) 在泳道的尾部添加图片资源，并且预先传入图片的宽高。此方法适合批量添加图片资源。 > 说明 > 此方法适合批量添加图片资源。为了满足批量快速添加资源的需求，此接口内部不做文件路径的校验。|
|[HVEImageAsset](https://developer.huawei.com/consumer/cn/doc/Media-References/hveimageasset-0000001156929212)|[appendImageAsset](#section2523125914120)(String path, long startTime, long duration, int width, int height) 在泳道的指定位置添加图片资源，并且预先传入图片的宽高。此方法适合批量添加图片资源。 > 说明 > 此方法适合批量添加图片资源。为了满足批量快速添加资源的需求，此接口内部不做文件路径的校验。|
|[HVEVideoAsset](https://developer.huawei.com/consumer/cn/doc/Media-References/hvevdeoasset-0000001155730670)|[appendVideoAsset](#section1269101194318)(String path) 在泳道的尾部添加视频资源。|
|[HVEVideoAsset](https://developer.huawei.com/consumer/cn/doc/Media-References/hvevdeoasset-0000001155730670)|[appendVideoAsset](#section177457134415)(String path, long startTime) 在泳道的指定位置添加视频资源。|
|[HVEVideoAsset](https://developer.huawei.com/consumer/cn/doc/Media-References/hvevdeoasset-0000001155730670)|[appendVideoAsset](#section4457125211446)(String path, long duration, int width, int height) 在泳道的末尾添加视频资源，并且预先传入视频的宽高和时长。 > 说明 > 此方法适合批量添加视频资源。为了满足批量快速添加资源的需求，此接口内部不做文件路径的校验。|
|[HVEVideoAsset](https://developer.huawei.com/consumer/cn/doc/Media-References/hvevdeoasset-0000001155730670)|[appendVideoAsset](#section1482140144511)(String path, long startTime, long duration, int width, int height) 在泳道的指定位置添加视频资源，并且预先传入视频的宽高和时长。 > 说明 > 此方法适合批量添加视频资源。为了满足批量快速添加资源的需求，此接口内部不做文件路径的校验。|
|[HVEEffect](https://developer.huawei.com/consumer/cn/doc/Media-References/hveeffect-0000001156929220)|[bindTransitionEffect](#section1541882994611)([HVEEffect.Options](https://developer.huawei.com/consumer/cn/doc/Media-References/hveeffect_options-0000001166480828) options, int fromIndex, long duration) 绑定转场特效。|
|boolean|[changeAssetSpeed](#section65221756154714)(int index, float factor) 设置泳道上指定索引的资源播放速度，建议速度范围：[0.5, 5.0]。|
|[HVECanvas](https://developer.huawei.com/consumer/cn/doc/Media-References/hvecanvas-0000001201690701)|[getLaneCanvas](#section166855421735)(long timeStamp) 获取当前泳道在指定时间点的画布。|
|boolean|[getMuteState](#section9544173917414)() 返回泳道静音状态。|
|List<[HVEEffect](https://developer.huawei.com/consumer/cn/doc/Media-References/hveeffect-0000001156929220)>|[getTransitionEffects](#section91452291659)() 获取泳道上的所有转场特效。|
|void|[interruptReverseVideo](#section10806195010610)([HVEVideoReverseCallback](https://developer.huawei.com/consumer/cn/doc/Media-References/hvevideoreversecallback-0000001201690699) callback) 终止视频倒播。|
|boolean|[removeCurveSpeed](#section1576210390232)(int index) 移除曲线变速。|
|boolean|[removeTransitionEffect](#section182711291787)(int index) 删除指定索引的转场特效。|
|boolean|[replaceAssetPath](#section32471010693)(String path, int index, boolean adjustPos) 替换泳道上指定索引资源的路径。|
|boolean|[replaceAssetPath](#section158249421012)(String path, int index, long trimIn, long trimOut) 替换泳道上指定索引资源的路径。|
|void|[reverseVideo](#section147151742171213)(int index, [HVEVideoReverseCallback](https://developer.huawei.com/consumer/cn/doc/Media-References/hvevideoreversecallback-0000001201690699) callback) 对泳道上指定索引的视频资源进行倒播。|
|boolean|[setAssetCanvas](#section84123241131)(int index, [HVECanvas](https://developer.huawei.com/consumer/cn/doc/Media-References/hvecanvas-0000001201690701) canvas) 设置主泳道上指定索引的资源的画布。|
|boolean|[setLaneCanvas](#section695631281417)([HVECanvas](https://developer.huawei.com/consumer/cn/doc/Media-References/hvecanvas-0000001201690701) canvas) 将指定的画布应用到泳道中。 > 说明 > 只有主泳道可以执行此操作。|
|void|[setMute](#section162615110157)(boolean mute) 设置泳道静音状态。|

## Public Methods

### addCurveSpeed(int index, String name, List<HVESpeedCurvePoint> speedCurvePoints)

|Method|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public boolean addCurveSpeed(int index, String name, List<[HVESpeedCurvePoint](https://developer.huawei.com/consumer/cn/doc/Media-References/hvespeedcurvepoint-0000001224821733)> speedCurvePoints) 根据离散点添加资源曲线变速。|

**Parameters**

|Name|Description|
|:---------------|:----------|
|index|资源索引。|
|name|曲线变速名称。|
|speedCurvePoints|曲线变速定点集合。|

**Return** **s**

|Type|Description|
|:------|:----------------------|
|boolean|返回true表示设置成功，否则返回false。|

### addCurveSpeed(int index, String name, String path)

|Method|
|:---------------------------------------------------------------------------------------|
|public boolean addCurveSpeed(int index, String name, String path) 根据下载到本地的素材的地址添加资源曲线变速。|

**Parameters**

|Name|Description|
|:----|:----------|
|index|资源索引。|
|name|曲线变速名称。|
|path|曲线变速素材路径。|

**Return** **s**

|Type|Description|
|:------|:----------------------|
|boolean|返回true表示设置成功，否则返回false。|

### appendImageAsset(String path)

|Method|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public [HVEImageAsset](https://developer.huawei.com/consumer/cn/doc/Media-References/hveimageasset-0000001156929212) appendImageAsset(String path) 在泳道的尾部添加资源。图片时长默认为3s。|

**Parameters**

|Name|Description|
|:---|:----------|
|path|图片路径。|

**Return** **s**

|Type|Description|
|:------------------------------------------------------------------------------------------------------------|:----------------------|
|[HVEImageAsset](https://developer.huawei.com/consumer/cn/doc/Media-References/hveimageasset-0000001156929212)|图片资源实例，如果图片路径非法，返回null。|

### appendImageAsset(Bitmap bitmap, long duration)

|Method|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public [HVEImageAsset](https://developer.huawei.com/consumer/cn/doc/Media-References/hveimageasset-0000001156929212) appendImageAsset(Bitmap bitmap, long duration) 在泳道的尾部添加资源，资源时长为duration。 > 说明 > 此接口仅适用于对少量Bitmap图片进行操作，并导出为视频的简单场景。|

**Parameters**

|Name|Description|
|:-------|:----------------|
|bitmap|Bitmap类型的图片对象。|
|duration|图片在时间线上的时长。单位：ms。|

**Return** **s**

|Type|Description|
|:------------------------------------------------------------------------------------------------------------|:------------------------------|
|[HVEImageAsset](https://developer.huawei.com/consumer/cn/doc/Media-References/hveimageasset-0000001156929212)|图片资源实例，如果bitmap对象为null，则返回null。|

### appendImageAsset(String path, long startTime)

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public [HVEImageAsset](https://developer.huawei.com/consumer/cn/doc/Media-References/hveimageasset-0000001156929212) appendImageAsset(String path, long startTime) 在泳道的指定位置添加图片资源，图片时长默认为3s。|

**Parameters**

|Name|Description|
|:--------|:--------------|
|path|资源路径。|
|startTime|泳道上的指定位置。单位：ms。|

**Return** **s**

|Type|Description|
|:------------------------------------------------------------------------------------------------------------|:------------------------------|
|[HVEImageAsset](https://developer.huawei.com/consumer/cn/doc/Media-References/hveimageasset-0000001156929212)|图片资源实例，如果图片路径非法或者指定时间非法，返回null。|

### appendImageAsset(String path, long duration, int width, int height)

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public [HVEImageAsset](https://developer.huawei.com/consumer/cn/doc/Media-References/hveimageasset-0000001156929212) appendImageAsset(String path, long duration, int width, int height) 在泳道的尾部添加图片资源，并且预先传入图片的宽高和时长。 > 说明 > 此方法适合批量添加图片资源。为了满足批量快速添加资源的需求，此接口内部不做文件路径的校验。|

**Parameters**

|Name|Description|
|:-------|:-----------|
|path|资源路径。|
|duration|图片的时长。单位：ms。|
|width|图片的宽度。单位：px。|
|height|图片的高度。单位：px。|

**Return** **s**

|Type|Description|
|:------------------------------------------------------------------------------------------------------------|:----------|
|[HVEImageAsset](https://developer.huawei.com/consumer/cn/doc/Media-References/hveimageasset-0000001156929212)|图片资源实例。|

### appendImageAsset(String path, long startTime, long duration, int width, int height)

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public [HVEImageAsset](https://developer.huawei.com/consumer/cn/doc/Media-References/hveimageasset-0000001156929212) appendImageAsset(String path, long startTime, long duration, int width, int height) 在泳道的指定位置添加图片资源，并且预先传入图片的宽高和时长。 > 说明 > 此方法适合批量添加图片资源。为了满足批量快速添加资源的需求，此接口内部不做文件路径的校验。|

**Parameters**

|Name|Description|
|:--------|:--------------|
|path|资源路径。|
|startTime|泳道上的指定位置。单位：ms。|
|duration|图片的时长。单位：ms。|
|width|图片的宽度。单位：px。|
|height|图片的高度。单位：px。|

**Return** **s**

|Type|Description|
|:------------------------------------------------------------------------------------------------------------|:----------|
|[HVEImageAsset](https://developer.huawei.com/consumer/cn/doc/Media-References/hveimageasset-0000001156929212)|图片资源实例。|

### appendVideoAsset(String path)

|Method|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public [HVEVideoAsset](https://developer.huawei.com/consumer/cn/doc/Media-References/hvevdeoasset-0000001155730670) appendVideoAsset(String path) 在泳道的尾部添加视频资源。|

**Parameters**

|Name|Description|
|:---|:----------|
|path|视频路径。|

**Return** **s**

|Type|Description|
|:-----------------------------------------------------------------------------------------------------------|:----------------------|
|[HVEVideoAsset](https://developer.huawei.com/consumer/cn/doc/Media-References/hvevdeoasset-0000001155730670)|视频资源实例，如果视频路径非法，返回null。|

### appendVideoAsset(String path, long startTime)

|Method|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public [HVEVideoAsset](https://developer.huawei.com/consumer/cn/doc/Media-References/hvevdeoasset-0000001155730670) appendVideoAsset(String path, long startTime) 在泳道的指定位置添加视频资源。|

**Parameters**

|Name|Description|
|:--------|:--------------|
|path|视频路径。|
|startTime|泳道上的指定位置。单位：ms。|

**Return** **s**

|Type|Description|
|:-----------------------------------------------------------------------------------------------------------|:------------------------------|
|[HVEVideoAsset](https://developer.huawei.com/consumer/cn/doc/Media-References/hvevdeoasset-0000001155730670)|视频资源实例，如果视频路径非法或者指定位置非法，返回null。|

### appendVideoAsset(String path, long duration, int width, int height)

|Method|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public [HVEVideoAsset](https://developer.huawei.com/consumer/cn/doc/Media-References/hvevdeoasset-0000001155730670) appendVideoAsset(String path, long duration, int width, int height) 在泳道的末尾添加视频资源，并且预先传入视频的宽高和时长。 > 说明 > 此方法适合批量添加视频资源。为了满足批量快速添加资源的需求，此接口内部不做文件路径的校验。|

**Parameters**

|Name|Description|
|:-------|:-----------|
|path|视频资源路径。|
|duration|视频的时长。单位：ms。|
|width|视频的宽度。单位：px。|
|height|视频的高度。单位：px。|

**Return** **s**

|Type|Description|
|:-----------------------------------------------------------------------------------------------------------|:----------------------|
|[HVEVideoAsset](https://developer.huawei.com/consumer/cn/doc/Media-References/hvevdeoasset-0000001155730670)|视频资源实例，如果视频路径非法，返回null。|

### appendVideoAsset(String path, long startTime, long duration, int width, int height)

|Method|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public [HVEVideoAsset](https://developer.huawei.com/consumer/cn/doc/Media-References/hvevdeoasset-0000001155730670) appendVideoAsset(String path, long startTime, long duration, int width, int height) 在泳道的指定位置添加视频资源，并且预先传入视频的宽高和时长。 > 说明 > 此方法适合批量添加视频资源。为了满足批量快速添加资源的需求，此接口内部不做文件路径的校验。|

**Parameters**

|Name|Description|
|:--------|:--------------|
|path|视频资源路径。|
|startTime|泳道上的指定位置。单位：ms。|
|duration|视频的时长。单位：ms。|
|width|视频的宽度。单位：px。|
|height|视频的高度。单位：px。|

**Return** **s**

|Type|Description|
|:-----------------------------------------------------------------------------------------------------------|:------------------------------|
|[HVEVideoAsset](https://developer.huawei.com/consumer/cn/doc/Media-References/hvevdeoasset-0000001155730670)|视频资源实例，如果视频路径非法或者指定位置非法，返回null。|

### bindTransitionEffect

|Method|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public [HVEEffect](https://developer.huawei.com/consumer/cn/doc/Media-References/hveeffect-0000001156929220) bindTransitionEffect([HVEEffect.Options](https://developer.huawei.com/consumer/cn/doc/Media-References/hveeffect_options-0000001166480828) options, int fromIndex, long duration) 绑定转场特效。|

**Parameters**

|Name|Description|
|:--------|:-----------|
|options|特效属性。|
|fromIndex|转场特效的前置资源索引。|
|duration|特效的时长。单位：ms。|

**Return** **s**

|Type|Description|
|:----------------------------------------------------------------------------------------------------|:----------|
|[HVEEffect](https://developer.huawei.com/consumer/cn/doc/Media-References/hveeffect-0000001156929220)|转场特效实例。|

### changeAssetSpeed

|Method|
|:-------------------------------------------------------------------------|
|public boolean changeAssetSpeed(int index, float factor) 设置泳道上指定索引的资源播放速度。|

**Parameters**

|Name|Description|
|:-----|:----------------------|
|index|资源索引。|
|factor|播放速度。建议速度范围：[0.5, 5.0]。|

**Return** **s**

|Type|Description|
|:------|:--------------------|
|boolean|设置成功返回true，否则返回false。|

### getLaneCanvas

|Method|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------|
|public [HVECanvas](https://developer.huawei.com/consumer/cn/doc/Media-References/hvecanvas-0000001201690701) getLaneCanvas(long timeStamp) 获取当前泳道在指定时间点的画布。|

**Parameters**

|Name|Description|
|:--------|:-----------|
|timeStamp|指定时间点。单位：ms。|

**Return** **s**

|Type|Description|
|:----------------------------------------------------------------------------------------------------|:----------|
|[HVECanvas](https://developer.huawei.com/consumer/cn/doc/Media-References/hvecanvas-0000001201690701)|画布。|

### getMuteState

|Method|
|:--------------------------------------|
|public boolean getMuteState() 返回泳道静音状态。|

**Return** **s**

|Type|Description|
|:------|:-------------------|
|boolean|true表示静音，false表示不静音。|

### getTransitionEffects

|Method|
|:------------------------------------------------------------------------------------------------------------------------------------------------------|
|public List<[HVEEffect](https://developer.huawei.com/consumer/cn/doc/Media-References/hveeffect-0000001156929220)> getTransitionEffects() 获取泳道上的所有转场特效。|

**Return** **s**

|Type|Description|
|:----------------------------------------------------------------------------------------------------------|:----------|
|List<[HVEEffect](https://developer.huawei.com/consumer/cn/doc/Media-References/hveeffect-0000001156929220)>|转场特效列表。|

### interruptReverseVideo

|Method|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public void interruptReverseVideo([HVEVideoReverseCallback](https://developer.huawei.com/consumer/cn/doc/Media-References/hvevideoreversecallback-0000001201690699) callback) 终止视频倒播。|

**Parameters**

|Name|Description|
|:-------|:----------|
|callback|回调，可以为空。|

### removeCurveSpeed

|Method|
|:-------------------------------------------------|
|public boolean removeCurveSpeed(int index) 移除曲线变速。|

**Parameters**

|Name|Description|
|:----|:----------|
|index|资源索引。|

**Return** **s**

|Type|Description|
|:------|:----------------------|
|boolean|返回true表示移除成功，否则返回false。|

### removeTransitionEffect

|Method|
|:------------------------------------------------------------|
|public boolean removeTransitionEffect(int index) 删除指定索引的转场特效。|

**Parameters**

|Name|Description|
|:----|:----------|
|index|转场特效的索引。|

**Return** **s**

|Type|Description|
|:------|:-------------------|
|boolean|成功则返回true，否则返回false。|

### replaceAssetPath(String path, int index)

|Method|
|:-----------------------------------------------------------------------------------------|
|public boolean replaceAssetPath(String path, int index, boolean adjustPos) 替换泳道上指定索引资源的路径。|

**Parameters**

|Name|Description|
|:--------|:---------------------------------------|
|path|新的资源路径。|
|index|资源的索引。|
|adjustPos|是否自适应位置属性。若为false，则重置位置属性；若为true，则自适应裁剪。|

**Return** **s**

|Type|Description|
|:------|:--------------------|
|boolean|替换成功返回true，否则返回false。|

### replaceAssetPath(String path, int index, long trimIn, long trimOut)

|Method|
|:-------------------------------------------------------------------------------------------------|
|public boolean replaceAssetPath(String path, int index, long trimIn, long trimOut) 替换泳道上指定索引资源的路径。|

**Parameters**

|Name|Description|
|:------|:------------------|
|path|新的资源路径。|
|index|资源的索引。|
|trimIn|指定资源的trimIn。单位：ms。|
|trimOut|指定资源的trimOut。单位：ms。|

**Return** **s**

|Type|Description|
|:------|:--------------------|
|boolean|替换成功返回true，否则返回false。|

### reverseVideo

|Method|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public void reverseVideo(int index, [HVEVideoReverseCallback](https://developer.huawei.com/consumer/cn/doc/Media-References/hvevideoreversecallback-0000001201690699) callback) 视频倒播。|

**Parameters**

|Name|Description|
|:-------|:------------|
|index|需要倒播资源的index。|
|callback|倒播进度回调。|

### setAssetCanvas

|Method|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public boolean setAssetCanvas(int index, [HVECanvas](https://developer.huawei.com/consumer/cn/doc/Media-References/hvecanvas-0000001201690701) canvas) 设置主泳道上指定索引的资源的画布。|

**Parameters**

|Name|Description|
|:-----|:----------|
|index|资源的索引。|
|canvas|指定画布。|

**Return** **s**

|Type|Description|
|:------|:----------------------|
|boolean|返回true表示设置成功，否则返回false。|

### setLaneCanvas

|Method|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public boolean setLaneCanvas([HVECanvas](https://developer.huawei.com/consumer/cn/doc/Media-References/hvecanvas-0000001201690701) canvas) 将指定的画布应用到泳道中。 > 说明 > 只有主泳道可以执行此操作。|

**Parameters**

|Name|Description|
|:-----|:----------|
|canvas|指定画布。|

**Return** **s**

|Type|Description|
|:------|:----------------------|
|boolean|返回true表示设置成功，否则返回false。|

### setMute

|Method|
|:------------------------------------------|
|public void setMute(boolean mute) 设置泳道静音状态。|

**Parameters**

|Name|Description|
|:---|:-------------------|
|mute|true表示静音，false表示不静音。|

