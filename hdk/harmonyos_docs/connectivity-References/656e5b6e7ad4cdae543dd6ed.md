---
name: document/cn/connectivity-References/hisightcapability-0000001051609048
title: HiSightCapability
uri: https://developer.huawei.com/consumer/cn/doc/connectivity-References/hisightcapability-0000001051609048
---

# HiSightCapability

|Class Info|
|:-----------------------------------------------------------------------------------|
|public class HiSightCapability implements Parcelable 投屏能力类。主要用于大屏侧APK配置大屏端设备支持的投屏能力。|

#### Public Constructor Summary

|Constructor Name|
|:----------------------------------------------------------------------------------------------------------------------------------------------|
|public [HiSightCapability](#section1980913561652)(int screenWidth, int screenHeight, int videoWidth, int videoHeight) 构造出一个HiSightCapability对象。|

#### Public Method Summary

|Qualifier and Type|Method Name and Description|
|:-----------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|void|[setMediaFormatInteger](#section839474195017)(String name, int value) 设置多媒体配置项，会在启动解码器时设置到MediaFormat中进行解码器配置，启动解码器低时延策略，对应MediaFormat.setInteger(String name, int value)方法。|
|void|[setMediaFormatFloat](#section19576112812509)(String name, float value) 设置多媒体配置项，会在启动解码器时设置到MediaFormat中进行解码器配置，启动解码器低时延策略，对应MediaFormat.setFloat(String name, float value)方法。|
|void|[setMediaFormatLong](#section31521911125013)(String name, long value) 设置多媒体配置项，会在启动解码器时设置到MediaFormat中进行解码器配置，启动解码器低时延策略，对应MediaFormat.setLong(String name, long value)方法。|
|void|[setMediaFormatString](#section551418434495)(String name, String value) 设置多媒体配置项，会在启动解码器时设置到MediaFormat中进行解码器配置，启动解码器低时延策略，对应MediaFormat.setString(String name, String value)方法。|
|void|[setMediaCodecConfigureFlag](#section17295343164819)(int flag) 设置多媒体配置项，会在启动解码器时在MediaCodec.configure()中进行解码器配置，启动解码器低时延策略。|
|int|[getScreenWidth](#section183482154516)() @reserved 获取屏幕的宽|
|void|[setScreenWidth](#section21506594516)(int screenWidth) @reserved 设置屏幕的宽|
|String|[getScreenHeight](#section116621289520)() @reserved 获取屏幕的高|
|void|[setScreenHeight](#section1927125485216)(int screenHeight) @reserved 设置屏幕的高|
|boolean|[getVideoWidth](#section229572225319)() 获取视频流的宽（分辨率）。|
|void|[setVideoWidth](#section21506594516)(int videoWidth) 设置视频流的宽（分辨率），如1080P设置：1920 。|
|int|[getVideoHeight](#section171022855416)() 获取视频流的高（分辨率）。|
|void|[setVideoHeight](#section1586143255412)(int videoHeight) 设置视频流的高（分辨率），如1080P设置：1080。|
|int|[getVideoCodecType](#section81661554115415)() @reserved|
|void|[setVideoCodecType](#section392191865517)(int videoCodecType) @reserved|
|int|[getVideoFps](#section150545225516)() 获取投屏显示帧率。|
|void|[setVideoFps](#section18311017185613)(int videoFps) 设置投屏显示帧率。|
|int|[getVideoGop](#section844619454567)() 获取投屏视频流I帧间隔。单位：秒。|
|void|[setVideoGop](#section69101219105710)(int videoGop) 设置投屏视频流I帧间隔。单位：秒。|
|int|[getDisplayDpi](#section97828494576)() @reserved|
|void|[setDisplayDpi](#section14280191645816)(int displayDpi) @reserved|
|int|[getVideoBitrate](#section1785582719595)() 获取投屏视频流码率。|
|void|[setVideoBitrate](#section117055714593)(int videoBitrate) 设置投屏视频流码率。例如：H265/H264硬解码|
|boolean|[getIsSupportRemoteCtrl](#section14828183316143)() 获取是否支持反向控制能力。|
|void|[setIsSupportRemoteCtrl](#section105451646101512)(boolean isSupportRemoteCtrl) 设置是否支持反向控制能力（用如鼠标，键盘，遥控器，触摸控件等硬件设备以操作大屏幕，进而控制小屏幕的能力）。|

#### Public Constructors

#### HiSightCapability(int screenWidth, int screenHeight, int videoWidth, int videoHeight)

|Constructor|
|:---------------------------------------------------------------------------------------------------------------------|
|public HiSightCapability(int screenWidth, int screenHeight, int videoWidth, int videoHeight) 构造出一个HiSightCapability对象。|

Parameters  

|Name|Description|
|:-----------|:----------|
|screenWidth|屏幕物理分辨率宽度。|
|screenHeight|屏幕物理分辨率高度。|
|videoWidth|视频分辨率宽。|
|videoHeight|视频分辨率高。|

#### Public Methods

#### MediaFormatInteger(String name, int value)

|Method|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public void setMediaFormatInteger(String name, int value) 设置多媒体配置项，会在启动解码器时设置到MediaFormat中进行解码器配置，启动解码器低时延策略，对应MediaFormat.setInteger(String name, int value)方法。|

Parameters  

|Name|Description|
|:----|:-------------------------------|
|name|android.media.MediaFormat定义的有效键。|
|value|int型数值。|

#### MediaFormatFloat(String name, float value)

|Method|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public void setMediaFormatFloat(String name, float value) 设置多媒体配置项，会在启动解码器时设置到MediaFormat中进行解码器配置，启动解码器低时延策略，对应MediaFormat.setFloat(String name, float value)方法。|

Parameters  

|Name|Description|
|:----|:-------------------------------|
|name|android.media.MediaFormat定义的有效键。|
|value|float型数值。|

#### MediaFormatLong(String name, long value)

|Method|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------|
|public void setMediaFormatLong(String name, long value) 设置多媒体配置项，会在启动解码器时设置到MediaFormat中进行解码器配置，启动解码器低时延策略，对应MediaFormat.setLong(String name, long value)方法。|

Parameters  

|Name|Description|
|:----|:-------------------------------|
|name|android.media.MediaFormat定义的有效键。|
|value|long型数值。|

#### MediaFormatString(String name, String value)

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public void setMediaFormatString(String name, String value) 设置多媒体配置项，会在启动解码器时设置到MediaFormat中进行解码器配置，启动解码器低时延策略，对应MediaFormat.setString(String name, String value)方法。|

Parameters  

|Name|Description|
|:----|:-------------------------------|
|name|android.media.MediaFormat定义的有效键。|
|value|String型数值。|

#### MediaCodecConfigureFlag(int flag)

|Method|
|:------------------------------------------------------------------------------------------------------------|
|public void setMediaCodecConfigureFlag(int flag) 设置多媒体配置项，会在启动解码器时在MediaCodec.configure()中进行解码器配置，启动解码器低时延策略。|

Parameters  

|Name|Description|
|:---|:----------|
|flag|int型参数。|

#### getScreenWidth()

|Method|
|:-------------------------------------------------|
|public int getScreenWidth() @reserved 获取屏幕物理分辨率宽度。|

Return  

|Type|Description|
|:---|:----------|
|int|屏幕物理分辨率宽度。|

#### setScreenWidth(int screenWidth)

|Method|
|:--------------------------------------------------------------|
|public void setScreenWidth(int screenWidth) @reserved 设置屏幕分辨率宽。|

Parameters  

|Name|Description|
|:----------|:----------|
|screenWidth|屏幕物理分辨率宽度。|

#### getScreenHeight()

|Method|
|:--------------------------------------------------|
|public int getScreenHeight() @reserved 获取屏幕物理分辨率高度。|

Return  

|Type|Description|
|:---|:----------|
|int|屏幕物理分辨率高度。|

#### setScreenHeight(int screenHeight)

|Method|
|:-------------------------------------------------------------------|
|public void setScreenHeight(int screenHeight) @reserved 设置屏幕物理分辨率高度。|

Parameters  

|Name|Description|
|:-----------|:----------|
|screenHeight|屏幕物理分辨率高度。|

#### getVideoWidth()

|Method|
|:---------------------------------------|
|public int getVideoWidth() 获取视频流的宽（分辨率）。|

Return  

|Type|Description|
|:---|:----------|
|int|视频流的宽（分辨率）。|

#### setVideoWidth(int videoWidth)

|Method|
|:------------------------------------------------------|
|public void setVideoWidth(int videoWidth) 设置视频流的宽（分辨率）。|

Parameters  

|Name|Description|
|:---------|:-------------------------|
|videoWidth|视频流的宽（分辨率）。如1080P设置：1920 。|

#### getVideoHeight()

|Method|
|:----------------------------------------|
|public int getVideoHeight() 获取视频流的高（分辨率）。|

Return  

|Type|Description|
|:---|:----------|
|int|视频流的高（分辨率）。|

#### setVideoHeight(int videoHeight)

|Method|
|:--------------------------------------------------------|
|public void setVideoHeight(int videoHeight) 设置视频流的高（分辨率）。|

Parameters  

|Name|Description|
|:----------|:------------------------|
|videoHeight|视频流的高（分辨率）。如1080P设置：1080。|

#### getVideoCodecType()

|Method|
|:-------------------------------------------------|
|public int getVideoCodecType() @reserved 获取视频编码方式。|

Return  

|Type|Description|
|:---|:----------|
|int|获取视频编码方式。|

#### setVideoCodecType(int videoCodecType)

|Method|
|:-----------------------------------------------------------------------------------|
|public void setVideoCodecType(int videoCodecType) @reserved 设置视频编码方式。例如：H265/H264硬解码|

Parameters  

|Name|Description|
|:-------------|:----------|
|videoCodecType|视频编码方式。|

#### getVideoFps()

|Method|
|:---------------------------------|
|public int getVideoFps() 获取投屏显示帧率。|

Return  

|Type|Description|
|:---|:----------|
|int|投屏显示帧率。|

#### setVideoFps(int videoFps)

|Method|
|:----------------------------------------------|
|public void setVideoFps(int videoFps) 设置投屏显示帧率。|

Parameters  

|Name|Description|
|:-------|:----------|
|videoFps|投屏显示帧率。|

#### getVideoGop()

|Method|
|:------------------------------------|
|public int getVideoGop() 获取投屏视频流I帧间隔。|

Return  

|Type|Description|
|:---|:--------------|
|int|投屏视频流I帧间隔。单位：秒。|

#### setVideoGop(int videoGop)

|Method|
|:-------------------------------------------------|
|public void setVideoGop(int videoGop) 设置投屏视频流I帧间隔。|

Parameters  

|Name|Description|
|:-------|:--------------|
|videoGop|投屏视频流I帧间隔。单位：秒。|

#### getDisplayDpi()

|Method|
|:---------------------------------------------|
|public int getDisplayDpi() @reserved 获取显示Dpi值。|

Return  

|Type|Description|
|:---|:----------|
|int|显示Dpi值。|

#### setDisplayDpi(int displayDpi)

|Method|
|:------------------------------------------------------------|
|public void setDisplayDpi(int displayDpi) @reserved 设置显示Dpi值。|

Parameters  

|Name|Description|
|:---|:----------|
|int|显示Dpi值。|

#### getVideoBitrate()

|Method|
|:--------------------------------------|
|public int getVideoBitrate() 获取投屏视频流码率。|

Return  

|Type|Description|
|:---|:----------|
|int|投屏视频流码率。|

#### setVideoBitrate(int videoBitrate)

|Method|
|:-------------------------------------------------------|
|public void setVideoBitrate(int videoBitrate) 设置投屏视频流码率。|

Parameters  

|Name|Description|
|:-----------|:----------|
|videoBitrate|投屏视频流码率。|

#### getIsSupportRemoteCtrl ()

|Method|
|:---------------------------------------------------------------------------------------------|
|public boolean getIsSupportRemoteCtrl () 获取是否支持反向控制能力（用如鼠标，键盘，遥控器，触摸控件等硬件设备以操作大屏幕，进而控制小屏幕的能力）。|

Return  

|Type|Description|
|:------|:----------------------------------|
|boolean|是否支持反向控制能力。 * True：支持。 * False：不支持。|

#### setIsSupportRemoteCtrl(boolean isSupportRemoteCtrl)

|Method|
|:----------------------------------------------------------------------------|
|public void setIsSupportRemoteCtrl(boolean isSupportRemoteCtrl) 设置是否支持反向控制能力。|

Parameters  

|Name|Description|
|:------------------|:----------------------------------|
|isSupportRemoteCtrl|是否支持反向控制能力。 * True：支持。 * False：不支持。|

