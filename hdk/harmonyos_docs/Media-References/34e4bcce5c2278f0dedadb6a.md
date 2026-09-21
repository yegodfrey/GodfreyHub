---
name: document/cn/Media-References/sinknode-0000001113343416
title: SinkNode
uri: https://developer.huawei.com/consumer/cn/doc/Media-References/sinknode-0000001113343416
---

# SinkNode

|Struct Info|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|struct SinkNode Sink节点类，继承[NodeBase](https://developer.huawei.com/consumer/cn/doc/development/Media-References/nodebase-0000001159703233)，处于Pipeline尾部且对数据进行Sink的节点，有与之相连的上游节点，但不存在下游节点。 父类[NodeBase](https://developer.huawei.com/consumer/cn/doc/development/Media-References/nodebase-0000001159703233)中的接口在此处不再赘述。|

## Public Constructor Summary

|Constructor Name|
|:-----------------------------------------------------------------------|
|SinkNode(const char *mime, bool isProcThreadCreated, bool isAsync) 构造函数。|

## Public Function Summary

|Qualifier and Type|Function Name and Description|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|int64_t|[GetCurrentPosition](#section105487188406)() const 获取当前的播放位置。|
|[RetCode](https://developer.huawei.com/consumer/cn/doc/development/Media-References/retcode-0000001159872875)|[SetVolume](#section590716273271)(double) 设置播放音量。|
|double|[GetVolume](#section10289649172816)() const 获取当前播放的音量。|
|[RetCode](https://developer.huawei.com/consumer/cn/doc/development/Media-References/retcode-0000001159872875)|[SetMute](#section155961690305)(bool) 设置是否静音。|
|bool|[GetMute](#section11865105813015)() const 查询当前是否静音。|
|[RetCode](https://developer.huawei.com/consumer/cn/doc/development/Media-References/retcode-0000001159872875)|[SetAudioStreamType](#section4105165363620)(int) 设置音频流类型。|
|[ClockCoreSP](https://developer.huawei.com/consumer/cn/doc/development/Media-References/type-alias-summary-0000001188828505#ZH-CN_TOPIC_0000001188828505__p117263381103)|[ProvideClock](#section36893172817)() 获取同步时钟。|
|[RetCode](https://developer.huawei.com/consumer/cn/doc/development/Media-References/retcode-0000001159872875)|[SetClock](#section2715161062919)([ClockCoreSP](https://developer.huawei.com/consumer/cn/doc/development/Media-References/type-alias-summary-0000001188828505#ZH-CN_TOPIC_0000001188828505__p117263381103)) 设置同步时钟。|

## Public Constructors

### SinkNode

|Constructor|
|:-----------------------------------------------------------------------|
|SinkNode(const char *mime, bool isProcThreadCreated, bool isAsync) 构造函数。|

**Parameters**

|Name|Description|
|:------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|mime|指定节点的mime类型。|
|isProcThreadCreated|是否需要创建处理buffer的线程，当[SinkNode](https://developer.huawei.com/consumer/cn/doc/development/Media-References/sinknode-0000001113343416)没有比较耗时的操作时，设置为false。 * true：需要创建，默认。 * false：不需要创建。|
|isAsync|指定节点工作在同步还是异步状态。 * true：异步状态。 * false：同步状态。|

## Public Functions

### GetCurrentPosition

|Function|
|:-----------------------------------------------------------|
|virtual int64_t GetCurrentPosition() const 查询当前的播放进度，用时间戳表示。|

**Returns**

|Type|Description|
|:------|:----------|
|int64_t|时间戳。|

### SetVolume

|Function|
|:--------------------------------------------------------------------------------------------------------------------------------------------|
|virtual [RetCode](https://developer.huawei.com/consumer/cn/doc/development/Media-References/retcode-0000001159872875) SetVolume(double) 设置音量。|

**Parameters**

|Name|Description|
|:-----|:-----------------|
|double|待设置的音量，取值范围[0, 1]。|

**Returns**

|Type|Description|
|:------------------------------------------------------------------------------------------------------------|:----------|
|[RetCode](https://developer.huawei.com/consumer/cn/doc/development/Media-References/retcode-0000001159872875)|错误码。|

### GetVolume

|Function|
|:------------------------------------------|
|virtual double GetVolume() const 获取当前的播放音量。|

**Returns**

|Type|Description|
|:-----|:----------|
|double|音量。|

### SetMute

|Function|
|:------------------------------------------------------------------------------------------------------------------------------------------|
|virtual [RetCode](https://developer.huawei.com/consumer/cn/doc/development/Media-References/retcode-0000001159872875) SetMute(bool) 设置是否静音。|

**Parameters**

|Name|Description|
|:---|:-------------------------|
|bool|* true：设置静音。 * false：设置有声。|

**Returns**

|Type|Description|
|:------------------------------------------------------------------------------------------------------------|:----------|
|[RetCode](https://developer.huawei.com/consumer/cn/doc/development/Media-References/retcode-0000001159872875)|错误码。|

### GetMute

|Function|
|:-------------------------------------|
|virtual bool GetMute() const 获取当前是否静音。|

**Returns**

|Type|Description|
|:---|:-----------------------|
|bool|* true：已静音。 * false：未静音。|

### SetAudioStreamType

|Function|
|:----------------------------------------------------|
|virtual RetCode SetAudioStreamType(int type) 设置音频流类型。|

**Parameters**

|Name|Description|
|:---|:------------------------------------------------------------------------------------------------------------------------------|
|type|待设置的音频流类型。详见[StreamType](https://developer.huawei.com/consumer/cn/doc/development/Media-References/streamtype-0000001158630715)|

**Returns**

|Type|Description|
|:------------------------------------------------------------------------------------------------------------|:----------|
|[RetCode](https://developer.huawei.com/consumer/cn/doc/development/Media-References/retcode-0000001159872875)|错误码。|

### ProvideClock

|Function|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|[ClockCoreSP](https://developer.huawei.com/consumer/cn/doc/development/Media-References/type-alias-summary-0000001188828505#ZH-CN_TOPIC_0000001188828505__p117263381103) ProvideClock() 从该节点获取同步时钟。|

**Returns**

|Type|Description|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------------------------------------------------------------------------|
|[ClockCoreSP](https://developer.huawei.com/consumer/cn/doc/development/Media-References/type-alias-summary-0000001188828505#ZH-CN_TOPIC_0000001188828505__p117263381103)|返回[ClockCore](https://developer.huawei.com/consumer/cn/doc/development/Media-References/clockcore-0000001113343418)的智能指针。|

### SetClock

|Function|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|[RetCode](https://developer.huawei.com/consumer/cn/doc/development/Media-References/retcode-0000001159872875) SetClock([ClockCoreSP](https://developer.huawei.com/consumer/cn/doc/development/Media-References/type-alias-summary-0000001188828505#ZH-CN_TOPIC_0000001188828505__p117263381103) clock) 设置同步时钟给该节点。|

**Parameters**

|Name|Description|
|:----|:----------|
|clock|待设置的同步时钟。|

**Returns**

|Type|Description|
|:------------------------------------------------------------------------------------------------------------|:----------|
|[RetCode](https://developer.huawei.com/consumer/cn/doc/development/Media-References/retcode-0000001159872875)|错误码。|

