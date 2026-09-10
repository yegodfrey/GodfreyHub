---
name: document/cn/Media-References/preloader-0000001052554589
title: Preloader
uri: https://developer.huawei.com/consumer/cn/doc/Media-References/preloader-0000001052554589
---

# Preloader

|Interface Info|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public interface Preloader 定义内容预加载器接口。预加载器支持提前缓存需要播放的部分媒体内容，降低起播时延。 为保障播放中的网络带宽使用，[WisePlayer](https://developer.huawei.com/consumer/cn/doc/development/Media-References/wiseplayer-0000001050316766)播放器在开始播放时会默认暂停所有的预加载任务，App需要调用[resumeAllTasks](#section20723141512384)()或者[addCache](#section1932075914542)()接口恢复预加载任务。预加载任务支持的内容格式包括： * HTTP(S)+MP4格式内容，预加载任务按照任务信息中的缓存大小缓存媒体内容。 * DASH和HLS内容，预加载任务按照任务信息中的分辨率信息，获取最接近的码率缓存内容的首个分片。|

#### Public Method Summary

|Qualifier and Type|Method Name and Description|
|:-----------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|int|[initCache](#section139823011526)(String path, int totalCacheSize) 初始化预加载器，预加载器必须先进行初始化才支持创建预加载任务。|
|int|[addCache](#section1932075914542)([CacheInfo](https://developer.huawei.com/consumer/cn/doc/development/Media-References/cache_info-0000001051793560) cacheInfo) 新增预加载任务，新增任务按最低优先级策略加入当前任务队列尾。|
|int|[addCache](#section20979170162312)([CacheInfo](https://developer.huawei.com/consumer/cn/doc/development/Media-References/cache_info-0000001051793560) cacheInfo, int priority) 新增预加载任务，支持指定新增任务的优先级。|
|int|[pauseAllTasks](#section97231856113411)() 暂停所有预加载任务。|
|int|[resumeAllTasks](#section20723141512384)() 恢复所有预加载任务。|
|int|[removeAllTasks](#section88708161381)() 删除所有预加载任务。|
|int|[removeAllCache](#section177525175385)() 删除所有预加载缓存。|
|void|[setProxy](#section7518162644111)([Proxy](https://developer.huawei.com/consumer/cn/doc/development/Media-References/proxy-0000001145518390) proxy) 设置请求的代理参数。|

#### Public Methods

#### initCache

|Method|
|:------------------------------------------------------------------------------------|
|public int initCache(String path, int totalCacheSize) 初始化预加载器，预加载器必须先进行初始化才支持创建预加载任务。|

Parameters  

|Name|Description|
|:-------------|:-----------------------------------------------------------------------------------------------------------------------|
|path|保存预加载内容的本地路径，App需要保证路径的读写权限，预加载器会创建子目录存储预加载内容。|
|totalCacheSize|允许保存的最大预加载内容总字节数，单位：字节。 App设置的预加载内容大小范围是\[20971520, 419430400\]，即\[20MB, 400MB\]。当预加载的内容超过允许的最大大小时，会按照LRU算法删除最早一个未使用的内容。|

Returns  

|Type|Description|
|:---|:--------------------------------|
|int|预加载器初始化结果。 * 0：初始化成功。 * -1：初始化失败。|

#### addCache

|Method|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public int addCache([CacheInfo](https://developer.huawei.com/consumer/cn/doc/development/Media-References/cache_info-0000001051793560) cacheInfo) 新增预加载任务，新增任务按最低优先级策略加入当前任务队列尾。 预加载任务队列最大支持20个，当前任务队列已达到20个时，将按任务优先级删除优先级最低的那个任务，再添加新的预加载任务。|

Parameters  

|Name|Description|
|:--------|:----------|
|cacheInfo|预加载任务信息。|

Returns  

|Type|Description|
|:---|:---------------------------------------------------------|
|int|返回创建预加载任务结果。 * 大于等于0：创建预加载任务成功，返回预加载任务ID。 * 小于0：创建预加载任务失败。|

#### addCache

|Method|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public int addCache([CacheInfo](https://developer.huawei.com/consumer/cn/doc/development/Media-References/cache_info-0000001051793560) cacheInfo, int priority) 新增预加载任务，支持指定新增任务的优先级。 预加载任务队列最大支持20个，当前任务队列已达到20个时将按任务优先级删除优先级最低的那个任务，再添加新的预加载任务。|

Parameters  

|Name|Description|
|:--------|:-----------------------------------------------------|
|cacheInfo|预加载任务信息。|
|priority|任务优先级。 * 0：最低优先级，新增任务加入当前任务队尾。 * 1：最高优先级，新增任务加入当前任务队首。|

Returns  

|Type|Description|
|:---|:---------------------------------------------------------|
|int|返回创建预加载任务结果。 * 大于等于0：创建预加载任务成功，返回预加载任务ID。 * 小于0：创建预加载任务失败。|

#### pauseAllTasks

|Method|
|:------------------------------------|
|public int pauseAllTasks() 暂停所有预加载任务。|

Returns  

|Type|Description|
|:---|:------------------------------------------|
|int|返回暂停全部预加载任务的执行结果。 * 大于等于0：执行成功。 * 小于0：执行失败。|

#### resumeAllTasks

|Method|
|:-------------------------------------|
|public int resumeAllTasks() 恢复所有预加载任务。|

Returns  

|Type|Description|
|:---|:-----------------------------------------|
|int|返回恢复全部下载任务的执行结果。 * 大于等于0：执行成功。 * 小于0：执行失败。|

#### removeAllTasks

|Method|
|:------------------------------------------------------------------------------------------------------------------|
|public int removeAllTasks() 删除所有预加载任务。删除预加载任务不会删除已完成的预加载缓存数据，调用[removeAllCache](#section177525175385)()接口删除预加载缓存数据。|

Returns  

|Type|Description|
|:---|:------------------------------------------|
|int|返回删除所有预加载任务的执行结果。 * 大于等于0：执行成功。 * 小于0：执行失败。|

#### removeAllCache

|Method|
|:---------------------------------------------------------------------------------------------------------------------------|
|public int removeAllCache() 删除所有预加载缓存。删除预加载缓存不会删除当前的预加载任务，未完成的预加载任务仍继续执行，调用[removeAllTasks](#section88708161381)()接口删除预加载任务。|

Returns  

|Type|Description|
|:---|:------------------------------------------|
|int|返回删除所有预加载缓存的执行结果。 * 大于等于0：执行成功。 * 小于0：执行失败。|

#### setProxy

|Method|
|:-----------------------------------------------------------------------------------------------------------------------------------------------|
|public void setProxy([Proxy](https://developer.huawei.com/consumer/cn/doc/development/Media-References/proxy-0000001145518390) proxy) 设置请求的代理参数。|

Parameters  

|Name|Description|
|:----|:----------|
|proxy|请求的代理参数。|

