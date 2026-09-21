---
name: document/cn/Media-References/audioeditorsdk-overview-0000001110929858
title: Overview
uri: https://developer.huawei.com/consumer/cn/doc/Media-References/audioeditorsdk-overview-0000001110929858
---

# Overview

## Interface Summary

|Interface|Description|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------|
|[AudioExtractCallBack](https://developer.huawei.com/consumer/cn/doc/development/Media-References/audioextractcallback-0000001110766846)|音频提取回调接口。|
|[AudioSeparationCallBack](https://developer.huawei.com/consumer/cn/doc/development/Media-References/audioseparationcallback-0000001190927067)|音源分离结果回调。|
|[AudioSeparationCreateCallBack](https://developer.huawei.com/consumer/cn/doc/development/Media-References/audioseparationcreatecallback-0000001333903001)|音源分离任务回调。|
|[AudioSeparationTaskCallBack](https://developer.huawei.com/consumer/cn/doc/development/Media-References/audioseparationtaskcallback-0000001268600806)|音源分离任务回调。|
|[ChangeSoundCallback](https://developer.huawei.com/consumer/cn/doc/development/Media-References/changesoundcallback-0000001145007220)|文件接口回调。|
|[DraftCallback](https://developer.huawei.com/consumer/cn/doc/development/Media-References/draftcallback-0000001378864836)|草稿功能回调。|
|[HuaweiAudioEditor.ExportAudioCallback](https://developer.huawei.com/consumer/cn/doc/development/Media-References/exportaudiocallback-0000001219743805)|导出时间线回调接口。|
|[HuaweiAudioEditor.PlayCallback](https://developer.huawei.com/consumer/cn/doc/development/Media-References/playcallback-0000001219661235)|时间线播放回调接口。|
|[HuaweiAudioEditor.SeekCallback](https://developer.huawei.com/consumer/cn/doc/development/Media-References/seekcallback-0000001219980049)|时间线定位操作回调接口。|
|[LaunchCallback](https://developer.huawei.com/consumer/cn/doc/development/Media-References/launchcallback-0000001379024392)|启动编辑界面的回调。|
|[OnTransformCallBack](https://developer.huawei.com/consumer/cn/doc/development/Media-References/ontransformcallback-0000001156926717)|音频格式转换回调接口。|

## Class Summary

|Class|Description|
|:----------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------|
|[AudioParameters](https://developer.huawei.com/consumer/cn/doc/development/Media-References/audioparameters-0000001193260789)|特效的常量类。|
|[AudioSeparationType](https://developer.huawei.com/consumer/cn/doc/development/Media-References/audioseparationtype-0000001244641183)|音频分离的常量参数类。|
|[ChangeVoiceOption](https://developer.huawei.com/consumer/cn/doc/development/Media-References/changevoiceoption-0000001166902806)|变声配置类。|
|[FailContent](https://developer.huawei.com/consumer/cn/doc/development/Media-References/failcontent-0000001426555125)|操作失败的草稿信息。|
|[FailContent.ErrorDetail](https://developer.huawei.com/consumer/cn/doc/development/Media-References/failcontent-errordetail-0000001376599006)|操作失败的草稿信息，包括草稿ID、错误码、错误信息。|
|[HAEAudioExpansion](https://developer.huawei.com/consumer/cn/doc/development/Media-References/haeaudioexpansion-0000001110926740)|音频扩展能力类，目前已包括提取音频能力、转换音频格式能力。|
|[HAEAudioSeparationAsyncFile](https://developer.huawei.com/consumer/cn/doc/development/Media-References/haeaudioseparationasyncfile-0000001317047285)|音源分离（云侧）异步文件接口。|
|[HAEAudioSeparationFile](https://developer.huawei.com/consumer/cn/doc/development/Media-References/haeaudioseparationfile-0000001190927069)|音源分离的文件接口。|
|[HAEChangeVoiceFile](https://developer.huawei.com/consumer/cn/doc/development/Media-References/haechangevoicefile-0000001145007222)|变声的文件接口（语音版-针对人声，不支持带背景音乐）。|
|[HAEChangeVoiceFileCommon](https://developer.huawei.com/consumer/cn/doc/development/Media-References/haechangevoicefilecommon-0000001367726973)|变声的文件接口（通用版，支持带背景音）。|
|[HAEChangeVoiceStream](https://developer.huawei.com/consumer/cn/doc/development/Media-References/haechangevoicestream-0000001145167030)|变声的流式接口。（语音版-针对人声，不支持带背景音乐）。|
|[HAEChangeVoiceStreamCommon](https://developer.huawei.com/consumer/cn/doc/development/Media-References/haechangevoicestreamcommon-0000001367678821)|变声的流式接口（通用版，支持带背景音）。|
|[HAEConstant](https://developer.huawei.com/consumer/cn/doc/development/Media-References/haeconstant-0000001119528640)|SDK常量类。|
|[HAEEqualizerFile](https://developer.huawei.com/consumer/cn/doc/development/Media-References/haeequalizerfile-0000001145007224)|均衡器的文件接口。|
|[HAEEqualizerStream](https://developer.huawei.com/consumer/cn/doc/development/Media-References/haeequalizerstream-0000001145167032)|均衡器的流式接口。|
|[HAEErrorCode](https://developer.huawei.com/consumer/cn/doc/development/Media-References/haeerrorcode-0000001111582332)|错误码封装类。|
|[HAELocalAudioSeparationFile](https://developer.huawei.com/consumer/cn/doc/development/Media-References/haelocalaudioseparationfile-0000001232208279)|音源分离（端侧）的文件接口。|
|[HAEMaterialsManageFile](https://developer.huawei.com/consumer/cn/doc/development/Media-References/haematerialsmanagefile-0000001206282005)|素材文件管理类。|
|[HAENoiseReductionFile](https://developer.huawei.com/consumer/cn/doc/development/Media-References/haenoisereductionfile-0000001191086911)|降噪的文件接口。|
|[HAENoiseReductionStream](https://developer.huawei.com/consumer/cn/doc/development/Media-References/haenoisereductionstream-0000001190927073)|降噪的流式接口。|
|[HAESceneFile](https://developer.huawei.com/consumer/cn/doc/development/Media-References/haeenvironmentfile-0000001191086909)|环境效果的文件接口。|
|[HAESceneStream](https://developer.huawei.com/consumer/cn/doc/development/Media-References/haeenvironmentstream-0000001190927071)|环境效果的流式接口。|
|[HAESoundFieldFile](https://developer.huawei.com/consumer/cn/doc/development/Media-References/haesoundfieldfile-0000001145007226)|声场的文件接口。|
|[HAESoundFieldStream](https://developer.huawei.com/consumer/cn/doc/development/Media-References/haesoundfieldstream-0000001145167034)|声场的流式接口。|
|[HAESpaceRenderFile](https://developer.huawei.com/consumer/cn/doc/development/Media-References/haespacerenderfile-0000001191086913)|空间方位渲染的文件接口。|
|[HAETempoPitch](https://developer.huawei.com/consumer/cn/doc/development/Media-References/haetempopitch-0000001190927075)|变速变调的文件接口。|
|[HAETimeLine](https://developer.huawei.com/consumer/cn/doc/development/Media-References/audioeditorsdk_haetimeline-0000001172600106)|时间线，编辑资源的管理实体，每个编辑工程唯一。|
|[HAEVoiceBeautifierStream](https://developer.huawei.com/consumer/cn/doc/development/Media-References/haevoicebeautifierstream-0000001317980236)|声音美化流式接口。|
|[HuaweiAudioEditor](https://developer.huawei.com/consumer/cn/doc/development/Media-References/audioeditorsdk_huaweiaudioeditor-0000001172296928)|音频编辑管理类。|
|[SpaceRenderExtensionParams](https://developer.huawei.com/consumer/cn/doc/development/Media-References/spacerenderextensionparams-0000001165413146)|3D动态渲染扩展模式参数类。|
|[SpaceRenderPositionParams](https://developer.huawei.com/consumer/cn/doc/development/Media-References/spacerenderpositionparams-0000001210853057)|3D动态渲染固定摆位模式参数类。|
|[SpaceRenderRotationParams](https://developer.huawei.com/consumer/cn/doc/development/Media-References/spacerenderrotationparams-0000001165573088)|3D动态渲染模式参数类。|

## Enum Value Summary

|Enum|Description|
|:------------------------------------------------------------------------------------------------------------------------------------------------|:----------------|
|[ChangeVoiceOption.SpeakerSex](https://developer.huawei.com/consumer/cn/doc/development/Media-References/speakersex_audioeditor-0000001167907416)|输入声音性别。|
|[ChangeVoiceOption.VocalPart](https://developer.huawei.com/consumer/cn/doc/development/Media-References/vocalpart_audioeditor-0000001213707277)|声音的声部。|
|[ChangeVoiceOption.VoiceType](https://developer.huawei.com/consumer/cn/doc/development/Media-References/voicetype_audioeditor-0000001213547333)|变声类型。|
|[SpaceRenderMode](https://developer.huawei.com/consumer/cn/doc/development/Media-References/spacerendermode-0000001213705975)|空间渲染类型枚举。|
|[VoiceBeautifierType](https://developer.huawei.com/consumer/cn/doc/development/Media-References/voicebeautifiertype-0000001369154233)|声音美化类型。|
|[VoiceTypeCommon](https://developer.huawei.com/consumer/cn/doc/development/Media-References/voicetypecommon-0000001367830105)|变声类型（通用版，支持带背景音）。|

