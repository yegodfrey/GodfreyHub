---
name: document/cn/Media-Guides/audio-source-separation-0000001491413848
title: 音频编辑音源分离SDK集成
uri: https://developer.huawei.com/consumer/cn/doc/Media-Guides/audio-source-separation-0000001491413848
---

# 音频编辑音源分离SDK集成

在进行开发之前，您需要完成必要的[配置AppGallery Connect](https://developer.huawei.com/consumer/cn/doc/Media-Guides/config-agc-0000001154009063)工作，同时请确保您的工程中已经[配置HMS Core SDK的Maven仓地址](https://developer.huawei.com/consumer/cn/doc/Media-Guides/integrating-sdk-0000001154289127#section290812311592)，并且完成了本服务的[集成HMS Core SDK](https://developer.huawei.com/consumer/cn/doc/Media-Guides/integrating-sdk-0000001154289127)。

您需要通过api_key或者Access Token来设置应用鉴权信息。

* （推荐）通过[setAccessToken](https://developer.huawei.com/consumer/cn/doc/Media-References/haeapplication-0000001192985347#section92907346177)方法设置Access Token，在应用启动时初始化设置（获取的Access Token默认有效时间1小时）。

  ```screen
  HAEApplication.getInstance().setAccessToken("your access token");
  ```

  获取Access Token可参见[基于OAuth 2.0开放鉴权](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/open-platform-oauth-0000001053629189)客户端模式。
* 通过[setApiKey](https://developer.huawei.com/consumer/cn/doc/Media-References/haeapplication-0000001192985347#section171221750121916)方法设置api_key，在应用启动时初始化设置一次即可，无需多次设置。

  ```screen
  HAEApplication.getInstance().setApiKey("your ApiKey");
  ```

  当您在AppGallery Connect上注册您的应用时，会给您的应用分配api_key，可参见[添加当前应用的AppGallery Connect配置文件](https://developer.huawei.com/consumer/cn/doc/Media-Guides/integrating-sdk-0000001154289127#section0474721594)。
  > 注意
  >
  > 请勿将api_key硬编码在代码中，同时不要将api_key存储在应用的配置文件中。建议您将api_key存储在云侧，运行时获取。

## 音源分离（云侧）

> 说明
>
> 当前支持的类型有：人声、伴奏、鼓、小提琴、贝斯、钢琴、吉他（不区分木吉他与电吉他）。

调用[getInstruments](https://developer.huawei.com/consumer/cn/doc/Media-References/haeaudioseparationfile-0000001190927069#section67823913581)和[startSeparationTasks](https://developer.huawei.com/consumer/cn/doc/Media-References/haeaudioseparationfile-0000001190927069#section87921019107)接口进行音源分离。

```screen
// 音源分离
// SeparationCloudCallBack：获取类型的回调
HAEAudioSeparationFile haeAudioSeparationFile = new HAEAudioSeparationFile();
haeAudioSeparationFile.getInstruments(new SeparationCloudCallBack<List<SeparationBean>>() {
    @Override
    public void onFinish(List<SeparationBean> response) {
        // 返回的数据
    }
    @Override
    public void onError(int errorCode) {
        // 失败返回
    }
});
// 设置要提取的乐器参数
haeAudioSeparationFile.setInstruments(乐器id集合);
// 开始分离
haeAudioSeparationFile.startSeparationTasks(inAudioPath, outAudioDir, outAudioName, new AudioSeparationCallBack() {
    @Override
    public void onResult(SeparationBean separationBean) { }
    @Override
    public void onFinish(List<SeparationBean> separationBeans) {}
    @Override
    public void onFail(int errorCode) {}
    @Override
    public void onCancel() {}
});
// 取消分离任务
haeAudioSeparationFile.cancel();
```

## 音源分离（云侧）异步接口

调用[createSeparationTask](https://developer.huawei.com/consumer/cn/doc/Media-References/haeaudioseparationasyncfile-0000001317047285#section37191825125811)和[queryInstrumentTaskStatus](https://developer.huawei.com/consumer/cn/doc/Media-References/haeaudioseparationasyncfile-0000001317047285#section19674827101815)接口进行音源分离。

```screen
// 创建实例
HAEAudioSeparationAsyncFile haeAudioSeparationAsyncFile = new HAEAudioSeparationAsyncFile();
// 获取乐器列表
haeAudioSeparationAsyncFile.getInstruments(new SeparationCloudCallBack<List<SeparationBean>>() {
    @Override
    public void onFinish(List<SeparationBean> response) {
        // 返回的数据
    }
    @Override
    public void onError(int errorCode) {
        // 失败返回
    }
});
// 设置要分离的乐器列表，包括人声和伴奏
haeAudioSeparationAsyncFile.setInstruments(乐器id集合);
// 创建分离任务（获取任务编号：taskId）
haeAudioSeparationAsyncFile.createSeparationTask(inAudioPath, new AudioSeparationCreateCallBack<String>() {
    @Override
    public void onResult(String taskId) {
    }
    @Override
    public void onFail(String taskId ,int errorCode) {
    }
    @Override
    public void onStart(String taskId) {
    }
});
// 查询分离进度（获取到最终分离结果音频URL）
// 请注意：分离结果保存默认有效期不超过2个小时，当时间超过2小时后，无法查询分离结果。未处理完成的任务默认保留期1个小时
haeAudioSeparationAsyncFile.queryInstrumentTaskStatus(taskId, new AudioSeparationTaskCallBack<SeparationQueryTaskResp>() {
    @Override
    public void onResult(SeparationQueryTaskResp result) {
    }
    @Override
    public void onFail(String taskId, int errorCode) {
    }
});
// 下载分离结果
// downloadUrl：资源URL信息
// outAudioDir：下载到本地存储的文件夹
// outAudioName：本地保存的文件名
haeAudioSeparationAsyncFile.downloadResource(downloadUrl, outAudioDir, outAudioName, new MaterialsDownloadCallBack() {
    @Override
    public void onDownloadSuccess(File file) {
    }
    @Override
    public void onDownloading(int progress) {
    }
    @Override
    public void onDownloadFailed(int errorCode) {
    }
});
// 取消分离任务
haeAudioSeparationAsyncFile.cancel(taskId, new AudioSeparationTaskCallBack<Integer>() {
    @Override
    public void onResult(Integer result) {
    }
    public void onFail(String taskId, int errorCode){
    }
});
```

## 音源分离（端侧）

> 说明
>
> 当前支持的类型请参见[AudioSeparationType](https://developer.huawei.com/consumer/cn/doc/Media-References/audioseparationtype-0000001244641183)。

调用[startSeparationTasks](https://developer.huawei.com/consumer/cn/doc/Media-References/haeaudioseparationfile-0000001190927069#section87921019107)接口进行音源分离。

```screen
// 音源分离
HAELocalAudioSeparationFile haeLocalAudioSeparationFile = HAELocalAudioSeparationFile.getInstance();
List instruments = new ArrayList<>();
instruments.add(AudioSeparationType.VOCALS);
// 设置要提取的参数
haeLocalAudioSeparationFile.setInstruments(instruments);
// 开始分离
haeLocalAudioSeparationFile.startSeparationTasks(inAudioPath, outAudioDir, outAudioName, new AudioSeparationCallBack() {
    @Override
    public void onResult(SeparationBean separationBean) {}
    @Override
    public void onFinish(List<SeparationBean> separationBeans) {}
    @Override
    public void onFail(int errorCode) {}
    @Override
    public void onCancel() {}
});
// 取消指定乐器类型的分离任务
haeLocalAudioSeparationFile.cancel(inAudioPath, separationType);
// 取消所有分离任务
haeLocalAudioSeparationFile.cancelAllTasks();
```

