---
name: document/cn/HiCar-References/customized-audio-attributes-constructor-0000001150192358
title: Constructor
uri: https://developer.huawei.com/consumer/cn/doc/HiCar-References/customized-audio-attributes-constructor-0000001150192358
---

# Constructor

|Constructor|
|:------------------------------------------------------------------------------------|
|CustomizedAudioAttributes(AudioAttributes aa, int focusGain, Map<String, String> map)|
|基于AudioAttributes的构造函数。|

**Parameters**

|Parameter name|Parameter type|Parameter desc|
|:-------------|:------------------|:-----------------------------------------------------------------------------------------------------|
|aa|AudioAttributes|音频AudioAttributes，详情参考谷歌AudioAttributes的描述。|
|focusGain|int|音频焦点类型，详情参考谷歌AudioManager音频焦点参数。 例值： 1：长焦点类型，音乐等场景。 2：短焦点类型，电话、通知、闹铃、QQ、微信等场景。 3：DUCK焦点，导航等场景。 4：独占焦点。|
|map|Map<String, String>|扩展参数，用于后续传入其他音频参数。|

|Constructor|
|:--------------------------------------------------------------------------------|
|CustomizedAudioAttributes(int streamType, int focusGain, Map<String, String> map)|
|基于StreamType的构造函数。|

**Parameters**

|Parameter name|Parameter type|Parameter desc|
|:-------------|:------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|streamType|int|音频流类型，详情见AudioManager音频流参数。 例值： 0：语音通话（比如打电话、VoIP通话）。 1：发声辅助语音（比如使用UI界面时听到的声音）（语音播报音）。 2：通话铃声（比如打电话、VoIP通话）。 3：文本语音。 4：警示音（比如起床闹钟）。 5：提示音。 8：正在通话中提示音（比如线路忙音、DTMF音）。 10：易用性辅助语音（比如屏幕文字朗读器）。|
|focusGain|int|音频焦点类型，详情见谷歌AudioManager音频焦点参数。 例值： 1：长焦点类型，音乐等场景。 2：短焦点类型，电话、通知、闹铃、QQ、微信等场景。 3：DUCK焦点，导航等场景。 4：独占焦点。|
|map|Map<String, String>|扩展参数，用于后续传入其他音频参数。|

