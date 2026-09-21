---
name: document/cn/AppGallery-connect-Guides/agc-dynamicability-getstate-0000001059210260
title: 获取指定加载任务的执行状态
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-dynamicability-getstate-0000001059210260
---

# 获取指定加载任务的执行状态

动态加载特性的过程中，您可以主动查询指定任务或系统中当前所有任务的执行状态。

## 获取指定任务的执行状态

调用[FeatureInstallManager.getInstallState](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/featureinstallmanager-0000001057944555#section37228508219)(sessionId)方法，可获取指定sessionId的动态加载任务的安装状态。
> 注意
>
> 当sessionId无效或者sessionId对应的task已取消或者已安装完成时，调用该接口返回的数据所有字段全为0。

```screen
FeatureTask<InstallState> task = mFeatureInstallManager.getInstallState(sessionId);
task.addOnListener(new OnFeatureCompleteListener<InstallState>() {
    @Override
    public void onComplete(FeatureTask<InstallState> featureTask) {
        if (featureTask.isComplete()) {
            Log.d(TAG, "complete to get session state.");
            if (featureTask.isSuccessful()) {
                InstallState state = featureTask.getResult();
                Log.d(TAG, "succeed to get session state.");
                Log.d(TAG, state.toString());
            } else {
                Log.e(TAG, "failed to get session state.");
                Exception exception = featureTask.getException();
                exception.printStackTrace();
            }
        }
    }
});
```

## 获取当前系统中所有Task的执行状态

调用[FeatureInstallManager.getAllInstallStates](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/featureinstallmanager-0000001057944555#section18592113342212)方法，可获取当前系统中所有动态加载任务的执行状态。

```screen
FeatureTask<List<InstallState>> task= mFeatureInstallManager.getAllInstallStates();
task.addOnListener(new OnFeatureCompleteListener<List<InstallState>>() {
    @Override
    public void onComplete(FeatureTask<List<InstallState>> featureTask) {
        Log.d(TAG, "complete to get session states.");
        if (featureTask.isSuccessful()) {
            Log.d(TAG, "succeed to get session states.");
            List<InstallState> stateList = featureTask.getResult();
            for (InstallState state : stateList) {
                Log.d(TAG, state.toString());
            }
        } else {
            Log.e(TAG, "failed to get session states.");
            Exception exception = featureTask.getException();
            exception.printStackTrace();
        }
    }
});
```

