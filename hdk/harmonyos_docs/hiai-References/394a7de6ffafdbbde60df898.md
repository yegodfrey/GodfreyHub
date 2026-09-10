---
name: document/cn/hiai-References/asr-recognizer-0000001054052780
title: AsrRecognizer
uri: https://developer.huawei.com/consumer/cn/doc/hiai-References/asr-recognizer-0000001054052780
---

# AsrRecognizer

#### Public Method Summary

|Qualifier and Type|Method Name|
|:-------------------|:--------------------------------------------------------------------------------------------------------------------|
|static AsrRecognizer|[createAsrRecognizer](#section15754148155010)(final Context context) 创建AsrRecognizer语音识别引擎识别的工厂方法。|
|void|[init](#section12587201116617)(Intent intent, AsrListener listener) 初始化识别引擎，引擎初始化成功，AsrListener会收到onInit回调。|
|void|[updateLexicon](#section19169101517182)(Intent intent) 根据传入场景和词条，生成词图。导词完成会有onLexiconUpdated回调，可以根据回调中错误码判断是否导词成功。|
|void|[startListening](#section94372188201)(final Intent recognizerIntent) 开始识别。|
|void|[writePcm](#section135045140396)(byte\[\] bytes, int length) 传入pcm数据流，在init时候ASR_AUDIO_SRC_TYPE值是ASR_SRC_TYPE_PCM时调用。|
|void|[stopListening](#section46581332184114)() 停止识别，并返回识别结果。希望获取识别结果时调用。|
|void|[cancel](#section1123718154423)() 取消ASR识别引擎运行，不对剩余数据进行处理，不返回识别结果。|
|void|[destroy](#section1495522115439)() 销毁引擎，destroy和init方法需要成对调用。|

#### Public Methods

#### createAsrRecognizer

|Method|
|:---------------------------------------------------------------------------------------------------|
|public static AsrRecognizer createAsrRecognizer(final Context context) 创建AsrRecognizer语音识别引擎识别的工厂方法。|

Parameters  

|Name|Description|
|:------|:----------|
|context|上下文环境。|

Return  

|type|Description|
|:------------|:----------|
|AsrRecognizer|返回ASR识别类实例。|

#### init

|Method|
|:--------------------------------------------------------------------------------------------|
|public void init(Intent intent, AsrListener listener) 初始化识别引擎，引擎初始化成功，AsrListener会收到onInit回调。|

Parameters  

|Name|Description|
|:-------|:------------------------------------------------------------------------------------------------------------------------------------------------------|
|intent|包含init参数的intent，参数包括： * 语音数据源AsrConstants.ASR_AUDIO_SRC_TYPE。 * VAD前端点时长AsrConstants.ASR_VAD_FRONT_WAIT_MS。 * VAD后端点时长AsrConstants.ASR_VAD_END_WAIT_MS。|
|listener|识别引擎监听回调对象，获取识别过程中的回调。|

#### updateLexicon

|Method|
|:---------------------------------------------------------------------------------------------------|
|public void updateLexicon(Intent intent) 根据传入场景和词条，生成词图。导词完成会有onLexiconUpdated回调，可以根据回调中错误码判断是否导词成功。|

Parameters  

|Name|Description|
|:-----|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|intent|包含updateLexicon参数的intent，参数包括： * AsrConstants.ASR_LEXICON_NAME， * AsrConstants.ASR_LEXICON_ITEMS。 AsrConstants.ASR_LEXICON_NAME对应的值是ArrayList\<String\>，支持的值包括： * ASR_LEXICON_NAME_CONTACT， * ASR_LEXICON_NAME_APP， * ASR_LEXICON_NAME_SONG， * ASR_LEXICON_NAME_ADDRESS， * ASR_LEXICON_NAME_OTHERS。 AsrConstants.ASR_LEXICON_ITEMS对应的值是JSONObject类型。|

#### startListening

|Method|
|:--------------------------------------------------------------|
|public void startListening(final Intent recognizerIntent) 开始识别。|

Parameters  

|Name|Description|
|:-----|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|intent|包含startListening参数的intent，参数包括： * AsrConstants.ASR_VAD_END_WAIT_MS， * AsrConstants.ASR_VAD_FRONT_WAIT_MS， * AsrConstants.ASR_TIMEOUT_THRESHOLD_MS。 如果在调用init方法时候设置的AsrConstants.ASR_AUDIO_SRC_TYPE值是ASR_SRC_TYPE_FILE， intent参数需要传入ASR_SRC_FILE，对应的值是音频文件的路径。|

#### writePcm

|Method|
|:--------------------------------------------------------------------------------------------------------|
|public void writePcm(byte\[\] bytes, int length) 传入pcm数据流，在init时候ASR_AUDIO_SRC_TYPE值是ASR_SRC_TYPE_PCM时调用。|

Parameters  

|Name|Description|
|:-----|:----------|
|bytes|Pcm数据流。|
|length|长度限制是1280。|

#### stopListening

|Method|
|:----------------------------------------------------|
|public void stopListening() 停止识别，并返回识别结果。希望获取识别结果时调用。|

#### cancel

|Method|
|:---------------------------------------------------|
|public void cancel() 取消ASR识别引擎运行，不对剩余数据进行处理，不返回识别结果。|

#### destroy

|Method|
|:-----------------------------------------------|
|public void destroy() 销毁引擎，destroy和init方法需要成对调用。|

