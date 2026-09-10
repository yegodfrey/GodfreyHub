---
name: document/cn/Media-References/hwaudioconfigmanager-0000001050191649
title: HwAudioConfigManager
uri: https://developer.huawei.com/consumer/cn/doc/Media-References/hwaudioconfigmanager-0000001050191649
---

# HwAudioConfigManager

|Class Info|
|:---------------------------------------------------------------------|
|public final class HwAudioConfigManager 音频配置管理，例如：设置缓存大小、清除缓存、保存播放列表等。|

#### Public Method Summary

|Qualifier and Type|Method Name and Description|
|:-----------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|void|[setPlayCacheSize](#section1935mcpsimp)(long size) 设置缓冲区大小。|
|long|[getPlayCacheSize](#section1990mcpsimp)() 获取缓冲区大小。单位：Byte。|
|long|[getUsedCacheSize](#section2045mcpsimp)() 获取已使用的缓冲区大小。单位：Byte。|
|void|[clearPlayCache](#section2100mcpsimp)() 清除缓存。|
|void|[setNotificationFactory](#section2155mcpsimp)([INotificationFactory](https://developer.huawei.com/consumer/cn/doc/development/Media-References/inotificationfactory-0000001175782607) factory) 设置通知工厂，用于传入通知栏样式。|
|void|[setSaveQueue](#section2210mcpsimp)(boolean isSaveQueue) 是否保存播放队列。|
|void|[stopDownload](#section2265mcpsimp)() 停止缓冲。|
|void|[continueToDownloadIfNeed](#section2300mcpsimp)() 继续缓冲。|
|void|[setSessionState](#section4501627198)(boolean isActive) 设置MediaSession状态。|

#### Public Methods

#### setPlayCacheSize

|Method|
|:-----------------------------------------------|
|public void setPlayCacheSize(long size) 设置缓冲区大小。|

Parameters  

|Name|Description|
|:---|:-----------------------------------------------------------|
|size|缓冲区大小。 设置范围：Mx1024x1024，M取大于1的整数，默认值200\*1024\*1024，单位：Byte。|

#### getPlayCacheSize

|Method|
|:--------------------------------------|
|public long getPlayCacheSize() 获取缓冲区大小。|

Returns  

|Type|Description|
|:---|:-------------|
|long|缓冲区大小，单位：Byte。|

#### getUsedCacheSize

|Method|
|:------------------------------------------|
|public long getUsedCacheSize() 获取已使用的缓冲区大小。|

Returns  

|Type|Description|
|:---|:-----------------|
|long|已使用的缓冲区大小，单位：Byte。|

#### clearPlayCache

|Method|
|:---------------------------------|
|public void clearPlayCache() 清除缓存。|

#### setNotificationFactory

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public void setNotificationFactory([INotificationFactory](https://developer.huawei.com/consumer/cn/doc/development/Media-References/inotificationfactory-0000001175782607) factory) 设置通知工厂，用于传递通知栏样式信息，例如当前歌曲的歌曲名、歌手名、图片等。|

Parameters  

|Name|Description|
|:------|:----------|
|factory|通知创建工厂。|

#### setSaveQueue

|Method|
|:------------------------------------------------------|
|public void setSaveQueue(boolean isSaveQueue) 是否保存播放队列。|

Parameters  

|Name|Description|
|:----------|:----------------------------------------------------------------|
|isSaveQueue|是否保存播放队列。 * true：保存 * false：不保存 默认值false。设置为true，下次启动时可以直接恢复播放队列。|

#### stopDownload

|Method|
|:-------------------------------|
|public void stopDownload() 停止缓冲。|

#### continueToDownloadIfNeed

|Method|
|:-------------------------------------------|
|public void continueToDownloadIfNeed() 继续缓冲。|

#### setSessionState

|Method|
|:--------------------------------------------------------------|
|public void setSessionState(boolean isActive) 设置MediaSession状态。|

Parameters  

|Name|Description|
|:-------|:----------------------------------------------------------------------------------------------------------------------|
|isActive|MediaSession状态。 * true：MediaSession为连接状态。 * false：MediaSession为释放状态，注意在下次调用Audio Kit播放前将MediaSession状态设置为true。 默认值true。|

