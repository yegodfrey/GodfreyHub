---
name: document/cn/AppGallery-connect-References/gamereplaymanager-game-replay-0000001690120477
title: GameReplayManager
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/gamereplaymanager-game-replay-0000001690120477
---

# GameReplayManager

|Class Info|
|:------------------------------------------------|
|public abstract class GameReplayManager 游戏高光时刻实例。|

## Method Summary

|Qualifier and Type|Method Name and Description|
|:-----------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|GameReplayManager|[create](#section142665215206)(Context context, [ReplayCallback](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/replaycallback-callback-0000001686126937) callback) 创建游戏高光时刻实例。|
|void|[init](#section253831315445)([InitParam](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/initparam-common-model-0000001637767696) param) 初始化。|
|void|[startManualRecord](#section1462692517445)([RecordParam](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/recordparam-common-model-0000001637926932) param) 开始手动录制。|
|void|[startAutoRecord](#section13707192654411)([RecordParam](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/recordparam-common-model-0000001637926932) param) 开始自动录制。|
|void|[stopRecord](#section07455286447)() 结束录制。|
|boolean|[isRecording](#section1245212964420)() 是否在录制中。|
|void|[clipVideo](#section6225430194416)([ClipParam](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/clipparam-common-model-0000001686126941) param) 生成游戏高光时刻。|
|void|[exportVideo](#section7938630104410)([ExportParam](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/exportparam-common-model-0000001689961217) param) 导出模板视频。|
|void|[destroy](#section135801531164410)() 销毁游戏高光时刻实例。|
|void|[queryTemplates](#section1651501952818)() 查询当前游戏可用的全部模板。|
|void|[applyShare](#section1766761352915)([ShareParam](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/shareparam-common-model-0000001673119224) param） 申请分享文件。|

## Methods

### create

|Method|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public static GameReplayManager create(Context context, [ReplayCallback](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/replaycallback-callback-0000001686126937) callback) 创建游戏高光时刻实例。|

**Parameters**

|Name|Description|
|:-------|:----------|
|context|上下文。|
|callback|接口回调对象。|

**Return**

|Type|Description|
|:----------------|:----------|
|GameReplayManager|游戏高光时刻实例。|

**Sample Code**

```screen
// 创建一个高光时刻实例
GameReplayManager gameReplayManager = GameReplayManager.create(this.getApplicationContext(), new ReplayCallbackImpl());
```

### init

|Method|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public abstract void init([InitParam](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/initparam-common-model-0000001637767696) param) 初始化。|

**Parameters**

|Name|Description|
|:----|:----------|
|param|初始化参数。|

**Return Code**

|**Return Code**|Value|Description|
|:---------------------------|:-----|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|通用返回码|-|具体请参见[返回码](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/replayerrorcode-common-exceptions-0000001690642713#ZH-CN_TOPIC_0000001690642713__p10983749171419)。|
|App auth failed|100103|鉴权失败，请检查clientId和clientSecret信息是否正确，或联系华为技术支持。|
|App token invalid or expired|100105|应用Token过期或者无效。|
|No permission|400002|无权限。|

**Sample Code**

```screen
// 初始化
InitParam atInitParam = new InitParam().setClientAppId(BuildConfig.agcAppId)
    .setClientId(BuildConfig.agcClientId)
    .setAccessToken(atText.getText().toString())
    .setOpenId(UUID.randomUUID().toString())
    .setApiKey(BuildConfig.agcApiKey)
    .setOutputPath(outputPath)
    .setNotifyIconId(R.drawable.ic_launcher_foreground)
    .setNotifyContent("游戏录制中")
    .setLogPath(outputPath);
gameReplayManager.init(atInitParam);
```

### startManualRecord

|Method|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public abstract void startManualRecord([RecordParam](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/recordparam-common-model-0000001637926932) param) 开始手动录制。|

**Parameters**

|Name|Description|
|:----|:----------|
|param|视频录制参数。|

**Return Code**

|**Return Code**|Value|Description|
|:-------------------------|:-----|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|通用返回码|-|具体请参见[返回码](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/replayerrorcode-common-exceptions-0000001690642713#ZH-CN_TOPIC_0000001690642713__p10983749171419)。|
|No audio record permission|400003|无音频录制权限。|
|Already in recording|401001|已在录制中，请勿重复调用开始录制接口。|

**Sample Code**

```screen
// 启动手动录制，录制时长为5分钟，5分钟后自动结束录制
gameReplayManager.startManualRecord(
    new RecordParam().setFileName(System.currentTimeMillis() + ".mp4").setDuration(60 * 5));
```

### startAutoRecord

|Method|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public abstract void startAutoRecord([RecordParam](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/recordparam-common-model-0000001637926932) param) 开始自动录制。|

**Parameters**

|Name|Description|
|:----|:----------|
|param|视频录制参数。|

**Return Code**

|**Return Code**|Value|Description|
|:-------------------------|:-----|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|通用返回码|-|具体请参见[返回码](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/replayerrorcode-common-exceptions-0000001690642713#ZH-CN_TOPIC_0000001690642713__p10983749171419)。|
|No audio record permission|400003|无音频录制权限。|
|Already in recording|401001|已在录制中，请勿重复调用开始录制接口。|

**Sample Code**

```screen
// 开始循环录制，直到stopRecord被调用
gameReplayManager.startAutoRecord(new RecordParam());
```

### stopRecord

|Method|
|:--------------------------------------|
|public abstract void stopRecord() 停止录制。|

**Return Code**

|**Return Code**|Value|Description|
|:---------------|:-----|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|通用返回码|-|具体请参见[返回码](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/replayerrorcode-common-exceptions-0000001690642713#ZH-CN_TOPIC_0000001690642713__p10983749171419)。|
|Not in recording|401002|不在录制中。|

**Sample Code**

```screen
// 结束录制
gameReplayManager.stopRecord();
```

### isRecording

|Method|
|:---------------------------------------------|
|public abstract boolean isRecording() 是否正在录制中。|

**Return**

|Type|Description|
|:------|:------------------------------------|
|boolean|是否正在录制中。 * true：正在录制中。 * false：不在录制中。|

**Sample Code**

```screen
// 判断当前是否在录制中
if (gameReplayManager.isRecording()) {
    gameReplayManager.stopRecord()
}
```

### clipVideo

|Method|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public abstract void clipVideo([ClipParam](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/clipparam-common-model-0000001686126941) param) 生成游戏高光时刻。|

**Parameters**

|Name|Description|
|:----|:----------|
|param|生成游戏高光时刻参数。|

**Return Code**

|**Return Code**|Value|Description|
|:-------------------------|:-----|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|通用返回码|-|具体请参见[返回码](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/replayerrorcode-common-exceptions-0000001690642713#ZH-CN_TOPIC_0000001690642713__p10983749171419)。|
|Not in recording|401002|不在录制中。|
|Not support in manual mode|401004|手动录制不支持生成游戏高光时刻。|

**Sample Code**

```screen
// 当启动循环录制后，在合适的时机生成高光视频，tag值按需设置，在onVideoClipped回调中使用
String tag = String.valueOf(System.currentTimeMillis());
gameReplayManager.clipVideo(new ClipParam().setDuration(10).setFileName(tag + ".mp4").setTag(tag));
```

### exportVideo

|Method|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public abstract void exportVideo([ExportParam](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/exportparam-common-model-0000001689961217) param) 导出模板视频。|

**Parameters**

|Name|Description|
|:----|:----------|
|param|视频导出参数。|

**Return Code**

|**Return Code**|Value|Description|
|:----------------------------|:-----|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|通用返回码|-|具体请参见[返回码](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/replayerrorcode-common-exceptions-0000001690642713#ZH-CN_TOPIC_0000001690642713__p10983749171419)。|
|Get template project fail|402001|模板不存在，请检查模板ID是否正确。|
|File not found|402002|使用模板导出视频时，视频文件不存在。|
|Prepare template project fail|402004|内部错误，请联系华为技术支持。|
|Export video fail|402005|内部错误，请联系华为技术支持。|
|Export video too frequent|402006|调用导出视频接口太频繁，请稍后操作。|

**Sample Code**

```screen
// 按模板生成高光时刻视频，templateId以onQueryTemplates结果为准，importFilePaths为视频文件路径列表，用于替换模板中的片段
String templateId = "template_cs_20154";
List<String> importFilePaths = new ArrayList<>();
gameReplayManager.exportVideo(
    new ExportParam().setFileName("exported.mp4").setTemplateId(templateId).setImportFilePaths(importFilePaths));
```

### destroy

|Method|
|:-----------------------------------------|
|public abstract void destroy() 销毁游戏高光时刻实例。|

**Sample Code**

```screen
gameReplayManager.destroy();
```

### queryTemplates

|Method|
|:---------------------------------------------------|
|public abstract void queryTemplates() 查询当前游戏可用的全部模板。|

**Return Code**

|**Return Code**|Value|Description|
|:---------------------|:-----|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|通用返回码|-|具体请参见[返回码](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/replayerrorcode-common-exceptions-0000001690642713#ZH-CN_TOPIC_0000001690642713__p10983749171419)。|
|Query templates failed|402008|查询可用模板失败，请稍后再试或联系华为技术支持。|

**Sample Code**

```screen
// 查询当前appId可以使用的模板ID
gameReplayManager.queryTemplates();
```

### applyShare

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public abstract void applyShare([ShareParam](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/shareparam-common-model-0000001673119224) param) 申请分享文件。|

**Parameters**

|Name|Description|
|:----|:----------|
|param|分享参数。|

**Return Code**

|**Return Code**|Value|Description|
|:--------------------|:-----|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|通用返回码|-|具体请参见[返回码](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/replayerrorcode-common-exceptions-0000001690642713#ZH-CN_TOPIC_0000001690642713__p10983749171419)。|
|Apply upload failed|403001|内部错误，请联系华为技术支持。|
|Execute upload failed|403002|内部错误，请联系华为技术支持。|
|Confirm upload failed|403003|内部错误，请联系华为技术支持。|
|Apply share failed|403004|内部错误，请联系华为技术支持。|

**Sample Code**

```screen
// 分享高光视频,sharedFilePath为onVideoExported的结果，templateId为导出该视频时所用的模板ID
gameReplayManager.applyShare(new ShareParam().setFilePath(sharedFilePath).setTemplateId(templateId));
```

